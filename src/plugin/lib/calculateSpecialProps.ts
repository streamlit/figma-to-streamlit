import { findMatchingProp } from "./findMatchingProp";
import rgbHex from 'rgb-hex';

// Function to get some special props for specific components
export const calculateSpecialProps = (widget: any, node: InstanceNode) => {
  switch(widget.name) {
    // For text area, we can get the height property by looking at the Figma component's height
    case 'st.text_area':
      const input = node.findChildren(n => n.name === 'Input');
      const height = input[0].height;
      const heightProp = findMatchingProp(widget, 'height');
      heightProp.value = height;
      break;
    // For time input, the value needs to be turned into a datetime object
    case 'st.time_input':
      // Grab the value we have, and check if it's a valid format
      const valueProp = findMatchingProp(widget, 'value');
      const isValidDateTime = valueProp.value.match(/\d+/g);
      
      if(isValidDateTime !== null && isValidDateTime.length === 2) {
        valueProp.value = `datetime.time(${isValidDateTime[0]}, ${isValidDateTime[1]})`;
      } else {
        throw new Error('Value provided is not valid. Make sure it\'s hh:mm');
      }
      break;
    // For color picker, let's get the hex value
    case 'st.color_picker':
      const hexValueContainer = node.findChildren(n => n.name === 'Value') as any;
      const fills = hexValueContainer[0].fills;
      
      if(fills.length > 1) {
        // If there's more than one fill value
        throw new Error('There\'s more than one fill value. Please just use one solid color.');
      } else if(!fills.length) {
        // If no fills are selected
        throw new Error('No fill value. Please pick a solid color.');
      } else {
        // If there's only one value, let's check if it's solid
        const isSolid = fills[0].type === 'SOLID';
        
        if(isSolid) {
          // If value looks good, convert it to proper RGB values, since Figma values look like this:
          // {b: 0.8509804010391235, g: 0.8509804010391235, r: 0.8509804010391235} which makes no sense,
          // and then turn it into a proper HEX value
          const rgbValue = `${Math.round(fills[0].color.r * 255)}, ${Math.round(fills[0].color.g * 255)}, ${Math.round(fills[0].color.b * 255)}`;
          const hexValueProp = findMatchingProp(widget, 'value');
          hexValueProp.value = `#${rgbHex(rgbValue)}`;
          hexValueProp.visible = true;
        } else {
          throw new Error('Value provided is not a hex value. Please pick a solid color.');
        }
      }

      break;
    default:
      break;
  }

  return widget;
};