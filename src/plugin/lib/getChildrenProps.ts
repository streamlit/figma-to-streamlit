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
      // If we don't have a visible attribute coming from getWidgetVariants,
      // we pipe it here, based on the child's visibility.
      // This can be faulty though, since child can be visible but the parent isn't,
      // so it's best to check in the previous getWidgetVariants step.
      if(matchingProp.visible === undefined) {
        matchingProp.visible = child.visible;
      }

      // Add its value if it's not present
      if(matchingProp.value === undefined) {
        matchingProp.value = child.characters;
      }
    }
  });

  return widget;
}