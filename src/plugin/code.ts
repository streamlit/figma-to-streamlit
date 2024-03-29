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
import { calculateSpecialProps } from './lib/calculateSpecialProps';
import { generateMarkup } from './lib/generateMarkup';
import { generatePlaceholderMarkup } from './lib/generatePlaceholderMarkup';

// This shows the HTML page in "ui.html", and adds a small height to it
figma.showUI(__html__, { themeColors: true, height: 155 });

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
        throw new Error('Nothing selected. Pick a component instance to get its code.');
      } else {
        const markupArray = [];

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

          // Some of the widgets' props can be calculated by looking at Figma's properties.
          // For example: We can pipe the "height" value for st.text_area by looking at the component height,
          // or we can pipe the hex value in st.color_picker, so this function does that!
          calculateSpecialProps(widget, nodeInstance);

          let widgetWithMarkup;

          // Some widgets, such as charts, are too complex to generate them based on the data
          // provided in Figma. For those, we use placeholder snippets.
          if(widget.shouldUsePlaceholder && widget.shouldUsePlaceholder === true) {
            widgetWithMarkup = generatePlaceholderMarkup(widget);
          } else {
            // For standard widgets, we generate the markup here
            widgetWithMarkup = generateMarkup(widget);
          }

          // After all this, push the markup to the final array
          markupArray.push(widgetWithMarkup);

        };
        
        // And when we got the data, update the plugin UI
        resizeUI(300, 500);
        dispatchUIMessage('success', 'Nice one! Find the code snippet below 👇🏻', markupArray);
      }
      break;
  }
};
