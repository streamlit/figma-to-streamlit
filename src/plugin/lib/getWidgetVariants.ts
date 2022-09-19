import { findMatchingProp } from "./findMatchingProp";
import { getOptionValues } from "./getOptionValues";
import { getDefaultValues } from "./getDefaultValues";
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

        // st.slider and st.select_slider use the "Value" variant to hide/show
        // the track/thumb elements, so we need to check whether it's active or not, to:
        // 1. Hide the value if "false";
        // 2. Show the actual value if "true", instead of returning a boolean
        if(widget.name === 'st.slider' || widget.name === 'st.select_slider') {     

          // If this condition is met, exit the fn since we'll get the value
          // on the next getChildrenProps step
          if(widgetValue === true) {
            break;
          }
          // If not, make the prop invisible
          else {
            valueProp.visible = false;
            break;
          }
        }

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

        // We don't want to do this for st.time_input though,
        // since options in time_input are populated automatically
        if(widget.name === 'st.time_input') break;
        
        const optionsParent = node.children[node.children.length - 1] as any;
        const optionsFrame = optionsParent.children.find((child: any) => child.name === 'Options');
        const options = getOptionValues(optionsFrame);

        const optionsProp = findMatchingProp(widget, property);

        // Do a bit of formatting here as well
        if(widget.name === 'st.selectbox') {
          // For selectboxes, wrap them in parenthesis
          optionsProp.value = `(${options?.map((option : any) => `'${option.value}'`).join(',')})`;
        } else if(widget.name === 'st.multiselect') {
          // For multi selectors, wrap them in square brackets
          optionsProp.value = `[${options?.map((option : any) => `'${option.value}'`).join(',')}]`;
        }

        break;
      // st.multiselect also has a "default" param, that is used to select the values we'd like
      // to show on first render in the widget. So let's grab those, if they exist!
      case 'default':

        // First we need to get to the Default node
        const inputContainer = node.findChild(n => n.name === 'Input') as InstanceNode;
        const defaultContainer = inputContainer.findChild(n => n.name === 'Default') as InstanceNode;
        const defaults = getDefaultValues(defaultContainer);
        
        if(defaults?.length) {
          const defaultProp = findMatchingProp(widget, property);
          defaultProp.value = `[${defaults?.map((option : any) => `'${option.value}'`).join(',')}]`;
          defaultProp.visible = true;
        }

        break;
      // For radio buttons' horizontal layout
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
        const isOnlyOneRadioVisible = radioOptions.length === 1;
        radioOptionsProp.value = `(${radioOptions?.map((option : any) => `'${option.value}'${isOnlyOneRadioVisible ? ',' : ''}`)})`;

        // Here we check if any of the options are selected
        const selectedIndex = getIndexValues(radioGroup, radioOptions);
        if(selectedIndex !== undefined && !isOnlyOneRadioVisible) {
          const indexProp = findMatchingProp(widget, 'index');
          indexProp.value = selectedIndex;
          indexProp.visible = true;
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