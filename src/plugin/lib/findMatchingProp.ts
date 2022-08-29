// Function to find the matching prop in a widget
export const findMatchingProp = (widget: any, prop: string) => {
  return widget.parameters.find((item: any) => item.name === prop.toLowerCase())
};