// Function to generate the markup for the selected item
export const generateMarkup = (widget: any) => {
  
  // From all the widget's params, let's grab those that:
  // 1. have a value on them and are visible;
  // 2. have a value on them and are required
  const params = widget.parameters.filter((param: any) => param.value !== undefined && param.visible === true || param.value !== undefined && param.required === true);

  // Let's also grab the booleans, and format them accordingly
  const booleanParams = widget.parameters.filter((param: any) => param.keyValue === true && param.type === 'bool' && param.value === true);
  let formattedBooleans;
  if(booleanParams.length) {
    formattedBooleans = booleanParams.map((param: any) => `${param.name}=${param.value.toString()[0].toUpperCase() + param.value.toString().substring(1)}`).join(',');
  }

  // Separate the keyword-value and value-only params,
  // as the ordering is importan, and keyword-only go first in the code.
  // For example, on the inputs:
  // 1. label goes first;
  // 2. value goes after (if it exists);
  // 3. then all the other keyword arguments
  const valueOnlyParams = params.filter((param: any) => param.keyValue === false);
  const keywordValueParams = params.filter((param: any) => param.keyValue === true && param.type !== 'bool');

  // Create the markup for the code snippet.
  // TBD: Make code nicer looking, but ensure the indentation doesn't get messed up
  const markup = `${widget.name}(${valueOnlyParams.map((param : any) => `'${param.value}'`).join(',')}${formattedBooleans !== undefined ? `,${formattedBooleans}` : ''}${keywordValueParams.map((param : any) => `,${param.name}='${param.value}'`).join('')})`;

  return markup;
}