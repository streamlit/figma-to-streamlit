import { findMatchingProp } from "./findMatchingProp";

export const getChildrenProps = (widget: any, children: any) => {
  // Get all text nodes within the component structure...
  const textChildren = children.findAllWithCriteria({
    types: ['TEXT']
  });
  
  // ...and loop through them to pipe their values and visibility
  textChildren.map((child: TextNode) => {
    const matchingProp = findMatchingProp(widget, child.name);
    if(matchingProp) {
      matchingProp.visible = child.visible;
      matchingProp.value = child.characters;
    }
  });

  return widget;
}