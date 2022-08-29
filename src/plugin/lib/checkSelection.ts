import { dispatchUIMessage } from './figma/dispatchUIMessage';
import { resizeUI } from './figma/resizeUI';

// Function to traverse the selected nodes and identify the selection
export const checkSelection = (node: any) => {

  // If there are no childrens, that means we selected an empty element.
  // If the node is not an instance, throw an error to avoid funky behavior and edge cases.
  if ("children" in node && node.type === "INSTANCE") {
    return node;
  } else {

    // Make the ui taller and throw an error
    resizeUI(300, 200);
    dispatchUIMessage('error', '😬 Invalid selection. Please select an instance from the library to generate the code.');
  };
};