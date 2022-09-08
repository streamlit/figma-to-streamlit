import { findMatchingProp } from "./findMatchingProp";

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
        valueProp.value = `datetime.time(${isValidDateTime[0]}, ${isValidDateTime[1]})`
      } else {
        throw new Error('Value provided is not valid. Make sure it\'s hh:mm');
      }
      break;
    default:
      break;
  }

  return widget;
};