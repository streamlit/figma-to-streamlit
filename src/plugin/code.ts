// A plugin to generate st. commands with their corresponding parameters,
// based on the components from our existing Figma library

// Figma-specific imports
import { dispatchUIMessage } from './lib/figma/dispatchUIMessage';
import { resizeUI } from './lib/figma/resizeUI';

// Plugin-specific imports
import { checkSelection } from './lib/checkSelection';
import { identifyWidget } from './lib/identifyWidget';
import { getWidgetVariants } from './lib/getWidgetVariants';
import { getChildrenProps } from './lib/getChildrenProps';
import { generateMarkup } from './lib/generateMarkup';

// This shows the HTML page in "ui.html", and adds a small height to it
figma.showUI(__html__, { height: 140 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  const selectionExists = figma.currentPage.selection.length;

  switch(msg.type) {
    // Try to id the selection the user made in Figma
    case 'id-selection':
      // If there's nothing selected, throw an error
      if(!selectionExists) {
        resizeUI(300, 200);
        dispatchUIMessage('error', 'Nothing selected. Pick a component instance to get its code.');
      } else {
        // If there's a selection, check to see if it's valid selection
        for (const node of figma.currentPage.selection) {
          checkSelection(node);

          // After we've checked the selection, we know the node is an instance,
          // so let's make an assertion to prevent TypeScript warnings.
          let nodeInstance = node as InstanceNode;

          // If selection is valid, then let's identify the widget...
          const widget = identifyWidget(node);

          // If the widget uses variants, for example if it
          // can be disabled, can have help tooltips, can have an active value,
          // Then let's check them
          if(nodeInstance.componentProperties) {
            getWidgetVariants(widget, nodeInstance);
          };

          // After the variants, it's time to check the component's children
          if(nodeInstance.children) {
            // Here, we check the layers,
            // and update the widget object based on the
            // layer's content and visibility
            getChildrenProps(widget, nodeInstance)
          }

          // ...and generate the markup for the widget
          const widgetWithMarkup = generateMarkup(widget);

          // After we got the data, update the plugin UI
          resizeUI(300, 500);
          dispatchUIMessage('success', 'Nice one! Find the code snippet below 👇🏻', widgetWithMarkup);
        };
      }
      break;
  }
};
