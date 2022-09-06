export const getOptionValues = (children: any) => {
  // Get all text nodes within the component structure...
  const textChildren = children.findAllWithCriteria({
    types: ['TEXT']
  });
  
  // ...and loop through them to pipe their values and visibility
  let options: object[] = [];
  textChildren.map((child: any) => {
    options.push({
      visible: child.parent.visible,
      value: child.characters
    })
  });

  return options;
}