// Function to format the given params
export const formatParams = (type: string, params: any) => {
  switch(type) {
    case 'value-only':
      return params.map((param : any) =>
        // Depending on the type of param, we add or remove single quotes to wrap it
        param.name === 'options' ||
        param.name === 'default' ?
        `${param.value}` : `'${param.value}'`
      )
    case 'key-value':
      return params.map((param : any) => 
        `${param.name}='${param.value}'`)
    case 'boolean':
      // This logic ensures the format matches the following: "disabled=True"
      return params.map((param: any) => 
        `${param.name}=${param.value.toString()[0].toUpperCase() + param.value.toString().substring(1)}`);
    case 'integer':
      return params.map((param: any) => 
      // Some integers are key-value pairs, some aren't, so let's accommodate for that
      `${param.keyValue === true ? `${param.name}=` : ''}${param.value}`);
    default:
      break;
  }
};