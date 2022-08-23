// This plugin lets you generate the proper st. commands with their corresponding
// properties, from our existing component library

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Function to traverse the selected nodes and identify the widgets
const traverse = (node: any) => {

  // If there are no childrens, that means we selected an empty element.
  // If the node is not a component, throw an error to avoid funky behavior and edge cases.
  if ("children" in node && node.type === "COMPONENT") {
    
    // Selection is valid, let's id the component!
    identifyParentComponent(node.parent);
  } else {

    // Throw an error if invalid selection
    figma.ui.postMessage({
      type: 'error',
      message: 'Invalid selection! Please select a component from the library to generate the code.'
    })
    return;
  };
};

// Function to identify the parent component and get its data
const identifyParentComponent = (parent: any) => {
  const component = {
    name: parent.name,
    description: parent.description,
    link: parent.documentationLinks[0].uri
  };

  // TBD: Create a function that will go through the selected component, check its properties,
  // and render the proper code for it
  // generateMarkup(parent);

  // Send a success message to the plugin with the data
  figma.ui.postMessage({
    type: 'success',
    message: 'Nice one! Find the code snippet below 👇🏻',
    component,
  });
};

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {

  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'identify-widget') {
    
    // If there's nothing selected, throw an error
    if(!figma.currentPage.selection.length) {
      figma.ui.postMessage({
        type: 'error',
        message: 'Nothing selected! Please pick a component to get its code.'
      });
      return;
    } else {

      // Traverse the selected nodes and get their information
      for (const node of figma.currentPage.selection) {
        traverse(node);
      };
    };
  };

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // Commented out for now for easier development
  // figma.closePlugin();
};
