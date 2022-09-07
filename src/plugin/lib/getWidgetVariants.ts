import { findMatchingProp } from "./findMatchingProp";
import { getOptionValues } from "./getOptionValues";
import { getIndexValues } from "./getIndexValues";

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
      // Check if help text is visible
      case 'help':
        const helpValue = node.componentProperties[property].value === 'True';
        const helpProp = findMatchingProp(widget, property);
        helpProp.visible = helpValue;
        break;
      // Other widgets, such as st.selectbox, st.multiselect, st.radio, have "Options",
      // which translate into an array of values. For those, we should loop through all
      // and get the values, even if the layer is invisible, as they are required props
      case 'options':
        const optionsParent = node.children[node.children.length - 1] as any;
        const optionsFrame = optionsParent.children.find((child: any) => child.name === 'Options');
        const options = getOptionValues(optionsFrame);

        const optionsProp = findMatchingProp(widget, property);
        optionsProp.value = `${options?.map((option : any) => `'${option.value}',`).join('')}`;

        break;
        // For radio buttons
        case 'horizontal':
          // Here we check if radio buttons use the "horizontal" attribute, and add the value
          const isHorizontal = node.componentProperties[property].value === 'True';
          const horizontalProp = findMatchingProp(widget, property);
          horizontalProp.value = isHorizontal;

          // Here we check the "options" inside the visible layout (horizontal or vertical)
          let radioGroup;
          if(isHorizontal) {
            radioGroup = node.children.find(child => child.name === 'Horizontal');
          } else {
            radioGroup = node.children.find(child => child.name === 'Vertical');
          }
          const radioOptions = getOptionValues(radioGroup);
          const radioOptionsProp = findMatchingProp(widget, 'options');
          radioOptionsProp.value = `${radioOptions?.map((option : any) => `'${option.value}',`).join('')}`;

          // Here we check if any of the options is selected
          const selectedIndex = getIndexValues(radioGroup, radioOptions);
          if(selectedIndex !== undefined) {
            const indexProp = findMatchingProp(widget, 'index');
            indexProp.value = selectedIndex;
          }

          break;
      default:
        // Many of our variants are heavily used in the Figma library,
        // but not all of them are translated into code,
        // (for example theme, focus state), so for those don't do anything
        break;
    }
  }

  return widget;
};