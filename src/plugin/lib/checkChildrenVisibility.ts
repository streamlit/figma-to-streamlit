import { findMatchingProp } from "./findMatchingProp";

export const checkChildrenVisibility = (widget: any, children: any) => {
  // First, we check if the current node we are selecting is visible,
  // and exit the function if it's not
  // const isParentVisible = children.visible;
  // if(!isParentVisible) return;
  console.log(children)

  // children.map((child: any) => {
  //   // From there, we check for the matching prop for that descendant.
  //   // If there is, we store the visibility for it.
  //   const matchingProp = findMatchingProp(widget, child.name);
  //   if(matchingProp) {
  //     matchingProp.visible = child.visible;
  //   }
  // });

  return widget;
}