import { findMatchingProp } from "./findMatchingProp";
import { getOptionValues } from "./getOptionValues";

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
      // Other widgets, such as st.selectbox, st.multiselect, st.radio, have "Options",
      // which translate into an array of values. For those, we should loop through all
      // and get the values, even if the layer is invisible, as they are required props
      case 'options':
        const optionsParent = node.children[node.children.length - 1] as any;
        const optionsFrame = optionsParent.children[optionsParent.children.length - 1];
        const options = getOptionValues(optionsFrame);

        // Options are required for selectboxes to work, so we need to have
        // at least one visible option. If not, we throw an error.
        const visibleOptions = options.filter((option: any) => option.visible === true);
        const isAtLeastOneVisible = visibleOptions.length > 0;

        if(!isAtLeastOneVisible) {
          throw new Error('You need to have at least one visible option for st.selectbox\'s code to work as expected');
        } else {
          const optionsProp = findMatchingProp(widget, property);
          optionsProp.value = `${visibleOptions?.map((option : any) => `'${option.value}',`).join('')}`;
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