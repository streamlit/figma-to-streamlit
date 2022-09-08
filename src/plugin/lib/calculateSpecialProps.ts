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
    default:
      break;
  }

  return widget;
};