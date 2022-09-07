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

  // Options are required for selectboxes and radios to work, so we need to have
  // at least one visible option. If not, we throw an error.
  const visibleOptions = options.filter((option: any) => option.visible === true);
  const isAtLeastOneVisible = visibleOptions.length > 0;

  if(!isAtLeastOneVisible) {
    throw new Error('You need to have at least one visible option for this widget\'s code to work as expected');
  } else {
    return visibleOptions;
  }
}