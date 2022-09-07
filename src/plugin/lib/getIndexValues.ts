// Function to check if any of the options are selected
export const getIndexValues = (group: any, options: any) => {
  const selectedOptions = group.children.filter((option: any) => option.componentProperties['Value'].value === 'True')
  
  // If there's no selected option, let's move forward without an index prop
  if(!selectedOptions.length) {
    return;
  } else if(selectedOptions.length > 1) {
    // If there's more than one selected option, that's an error!
    // Radio buttons should have only one value selected
    throw new Error('You have more than one selected option. Please, make sure you only have one option selected for this widget\'s code to work as expected.');
  } else {
    // If there's one selected option, let's find its index and pipe its value
    const selectedOptionIndex = group.children.findIndex((option: any) => option.componentProperties['Value'].value === 'True');
    return selectedOptionIndex;
  }
};