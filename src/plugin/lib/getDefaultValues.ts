// Function to identify the values and visibility for the default parameter.
// Pretty similar to its getOptionValues counterpart, but we don't need to
// throw errors if no defaults are selected
export const getDefaultValues = (children: any) => {
  // Get all text nodes within the component structure...
  const textChildren = children.findAllWithCriteria({
    types: ['TEXT']
  });

  // If the "Default" variation is disabled, and we have a placeholder,
  // escape the function so we don't pipe that value
  if(textChildren[0].name === 'Placeholder') return;
  
  // ...and loop through them to pipe their values and visibility
  let options: object[] = [];
  textChildren.map((child: any) => {
    options.push({
      visible: child.parent.visible,
      value: child.characters
    })
  });
  
  const visibleOptions = options.filter((option: any) => option.visible === true);
  return visibleOptions;
}