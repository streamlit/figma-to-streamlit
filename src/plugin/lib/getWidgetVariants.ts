import { findMatchingProp } from "./findMatchingProp";

// Function to gather the values for the different variants our widget has
export const getWidgetVariants = (widget: any, node: InstanceNode) => {
  for (const property in node.componentProperties) {
    
    switch(property.toLowerCase()) {
      case 'disabled':
        const isDisabled = node.componentProperties[property].value === 'True';
        const disabledProp = findMatchingProp(widget, property);
        disabledProp.value = isDisabled;
        break;
      // Some widgets, such as st.checkbox, have the value set as a variant,
      // so we can enable/disable different layers based on the selected option.
      // For those use cases, we need to pipe the value this way, and not by looking
      // at the text characters
      case 'value':
        const widgetValue = node.componentProperties[property].value === 'True';
        const valueProp = findMatchingProp(widget, property);
        valueProp.value = widgetValue;
        break;
      default:
        // Many of our variants are heavily used in the Figma library,
        // but not all of them are translated into code,
        // (for example theme, focus state), so for those don't do anything
        break;
    }
  }

  return widget;

  // After the variants, get the component children, and update values depending on its state and values
  // for (const index in node.children) {

  //   // Check the visible attribute in Figma. If the group (or any of its children)
  //   // is not visible, that means the user don't want those properties
  //   // on their code, so we can exit the function and set them to false.
  //   const nodeList = checkVisibility(node.children[index]);

  //   nodeList?.map((item: any) => {
      
  //     // If the item is visible, let's get the content for it
  //     if(item.visible === true) {
  //       getNodeContent(item, component);
  //     }

  //     // If the label is invisible, set the override to an empty string
  //     // TBD handle this with label_visibility once it ships
  //     else if(item.visible === false && item.name === 'label') {
  //       component.properties.push({
  //         label: ''
  //       });
  //     }
  //     else {
  //       return;
  //     }
  //   });
  // }
};