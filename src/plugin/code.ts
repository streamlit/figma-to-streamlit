// A plugin to generate st. commands with their corresponding parameters,
// based on the components from our existing Figma library

// Figma-specific imports
import { dispatchUIMessage } from './lib/figma/dispatchUIMessage';
import { resizeUI } from './lib/figma/resizeUI';

// Plugin-specific imports
import { checkSelection } from './lib/checkSelection';
import { identifyWidget } from './lib/identifyWidget';
import { getWidgetVariants } from './lib/getWidgetVariants';
import { checkChildrenVisibility } from './lib/checkChildrenVisibility';

// This shows the HTML page in "ui.html", and adds a small height to it
figma.showUI(__html__, { height: 140 });

// Function to generate the markup for the selected item
const generateMarkup = (component: any) => {
  // Normalize the props into an object
  const obj = Object.assign({}, ...component.properties);
  
  // Destructure properties that go without keyword
  const {label, value, disabled, body, ...rest} = obj;
  let labelAndValue;
  const otherPropsMarkup = [];
  
  // TBD: Better logic for this
  // If there's a value, concat it with the label
  if(value) {
    labelAndValue = `'${label}','${value}',`;
  }
  // If there's just a label, show that
  else if(label) {
    labelAndValue = `'${label}',`;
  }

  if(disabled && disabled === true) {
    otherPropsMarkup.push('disabled=True');
  }

  // For the rest of the props (help, placeholder, etc),
  // concat them using the keyword approach: key='value'
  for (const [key, value] of Object.entries(rest)) {
    otherPropsMarkup.push(`${key}='${value}'`);
  }

  // The order for the parameters is important:
  // For inputs, label goes first, value goes after (if it exists),
  // Then all the other keyword arguments
  const rawMarkup = `${component.name}(${labelAndValue ? labelAndValue : `'${body}'`}${otherPropsMarkup.map((prop: any) => ` ${prop}`).join(', ')})`;
  const styledMarkup = `<code>${component.name}(</code><code><span style="padding-left: 1rem; color: #FFA421;">${labelAndValue ? labelAndValue : `'${body}'`}</span></code>${otherPropsMarkup.map((prop: any) => `<code><span style="padding-left: 1rem; color: #FFA421;">${prop}</span><span style="color: #FFA421;">,</span></code>`).join('')})`;

  component.rawMarkup = rawMarkup;
  component.styledMarkup = styledMarkup;

  return component;
}

// Function to get the content for the visible node
const getNodeContent = (item: any, component: any) => {
  
  // Do different stuff based on the type of node
  switch(item.type) {

    // If text, easy peasy
    case 'TEXT':
      const name = item.name;
      const content = item.content.characters;

      component.properties.push({
        [name]: content,
      });
      break;

    // If a frame, auto layout, etc, get the text nodes inside of them
    case 'FRAME':
      const textNodes = item.content.findAllWithCriteria({ types: ['TEXT']})
      textNodes.map((node: any) => {
        const name = node.name.toLowerCase();
        const content = node.characters;

        component.properties.push({
          [name]: content
        });
      })
      break;
  }
}

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

          // TBD: Use findAll for better performance and easier parsing

          // After the variants, it's time to check the component's children
          // if(nodeInstance.children) {
          //   // First, let's check the visible/invisible layers,
          //   // and update values depending on its state
          // }
          // getWidgetProps(widget, node);

          // TBD: Get component-specific props

          // ...and generate the markup for the widget
          // const componentWithMarkup = generateMarkup(component);

          // After we got the data, update the plugin UI
          resizeUI(300, 500);
          // TBD: Send the data here as well
          dispatchUIMessage('success', 'Nice one! Find the code snippet below 👇🏻');
        };
      }
      break;
  }
};
