// This plugin lets you generate the proper st. commands with their corresponding
// properties, from our existing component library

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Function to generate the markup for the selected item
const generateMarkup = (component: any) => {
  // Normalize the props into an object
  const obj = Object.assign({}, ...component.properties);
  
  // Destructure properties that go without keyword
  const {label, value, disabled, ...rest} = obj;
  let labelAndValue;
  
  // If there's a value, concat it with the label
  if(value) {
    labelAndValue = `'${label}','${value}',`;
  };

  // For the rest of the props (help, placeholder, etc),
  // concat them using the keyword approach: key='value'
  const otherPropsMarkup = [];
  for (const [key, value] of Object.entries(rest)) {
    otherPropsMarkup.push(`${key}='${value}'`);
  }

  // The order for the parameters is important:
  // For inputs, label goes first, value goes after (if it exists),
  // Then all the other keyword arguments
  const markup = `${component.name}(${labelAndValue ? labelAndValue : `'${label}',`}${disabled ? `${'disabled=True,'}` : `${'disabled=False,'}`}${otherPropsMarkup.map((prop: any) => `${prop}`).join(',')})`;

  component.markup = markup;

  return component;
}

// Function to get the content for the visible node
const getNodeContent = (item: any, component: any) => {
  
  console.log(item)
  // Do different stuff based on the type of node
  switch(item.type) {

    // If text, easy peasy
    case 'TEXT':
      const name = item.name;
      const key = item.content.characters.replaceAll(' ', '-').toLowerCase();
      const content = item.content.characters;

      component.properties.push({
        [name]: content,
        key,
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

// Function to check the node visibility
const checkVisibility = (node: any) => {
  
  // First, we check if the current node we are traversing is visible
  const isParentVisible = node.visible;

  // If it is, then check its descendants, and return their name and visibility
  if(isParentVisible) {
    let nodeList: object[] = [];
    
    // TBD: More thorough check for label_visibility,
    // and better handling for help tooltip group
    node.children.map((children: any) => nodeList.push({
      name: children.name.toLowerCase(),
      visible: children.visible,
      type: children.type,
      content: children
    }));

    return nodeList;
  } else {
    return;
  }
}

// Function to gather the values for the common props all our components have
const getGlobalProps = (node: any, component: any) => {

  // Get the component variants, since some of the arguments
  // are added there, such as "Disabled=True"
  for (const property in node.componentProperties) {
    
    // Get all the possible variations and add them to the props object
    switch(property.toLowerCase()) {
      case 'disabled':
        const isDisabled = node.componentProperties[property].value.toLowerCase() === 'true';
        if(isDisabled) component.properties.push({ disabled: isDisabled });
        break;
    }
  }

  // After the variants, get the component children, and update values depending on its state and values
  for (const index in node.children) {

    // Check the visible attribute in Figma. If the group (or any of its children)
    // is not visible, that means the user don't want those properties
    // on their code, so we can exit the function and set them to false.
    const nodeList = checkVisibility(node.children[index]);
    nodeList?.map((item: any) => {
      
      // If the item is visible, let's get the content for it
      if(item.visible === true) {
        getNodeContent(item, component);
      }

      // If the label is invisible, set the override to an empty string
      // TBD handle this with label_visibility once it ships
      else if(item.visible === false && item.name === 'label') {
        component.properties.push({
          label: ''
        });
      }
      else {
        return;
      }
    });
  }
};

// Function to traverse the selected nodes and identify the widgets
const traverse = (node: any) => {

  // If there are no childrens, that means we selected an empty element.
  // If the node is not an instance, throw an error to avoid funky behavior and edge cases.
  if ("children" in node && node.type === "INSTANCE") {
    
    // Selection is valid, let's id the component!
    identifyComponent(node);
  } else {

    // Throw an error if invalid selection
    figma.ui.postMessage({
      type: 'error',
      message: 'Invalid selection! Please select a top-level component from the library to generate the code.'
    })
    return;
  };
};

// Function to identify the component and get its data
const identifyComponent = (node: any) => {

  // Get the parent's information
  const parent = node.masterComponent;
  const component = {
    name: node.name,
    description: parent.description,
    link: parent.documentationLinks[0].uri,
    properties: [],
    markup: '',
  };

  // Go through the selected component and get its global properties
  getGlobalProps(node, component);

  // TBD: Get component-specific props

  // Generate the markup for the component
  const componentWithMarkup = generateMarkup(component);

  // Send a success message to the plugin with the data
  figma.ui.postMessage({
    type: 'success',
    message: 'Nice one! Find the code snippet below 👇🏻',
    component: componentWithMarkup,
  });
};

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {

  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.

  // If the type is 'identify-widget', then that's what we do!
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
  }
  // If the type is clean-old-data, then let's wipe the old overrides
  else if(msg.type === 'clean-old-data') {
    figma.ui.postMessage({
      type: 'cleanup',
    });
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // Commented out for now for easier development flow
  // figma.closePlugin();
};
