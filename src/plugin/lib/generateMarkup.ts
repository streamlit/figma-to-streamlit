import {formatParams} from './formatParams';

// Function to generate the markup for the selected item
export const generateMarkup = (widget: any) => {

  // We'll hold all the params we need to add to the snippet here.
  // Strap it since there's a bunch of data-massaging that we need to do!
  const markupParams: string[] = [];
  
  // From all the widget's params, let's grab those that:
  // 1. have a value on them and are visible;
  // 2. have a value on them and are required
  const valueParams = widget.parameters.filter((param: any) =>
    param.value !== undefined && param.visible === true ||
    param.value !== undefined && param.required === true
  );

  // After we have the value params, let's separate keyword-value from value-only params,
  // as the ordering is important, and keyword-only params go first in the code.
  // For example, on inputs:
  // 1. "label" goes first;
  // 2. "value" goes after (if it exists);
  // 3. then all the other keyword arguments.
  const valueOnlyParams = valueParams.filter((param: any) => 
    
    // We also exclude here some specific types, since we handle those separately below
    param.keyValue === false && param.type !== 'int' &&
    param.keyValue === false && param.type !== 'datetime'
  );

  // Formatting function for value-only params
  if(valueOnlyParams.length) {
    markupParams.push(formatParams('value-only', valueOnlyParams));
  }

  // Let's now separate the booleans, since they behave differently
  // than value params. We only grab those that:
  // 1. Are key-value (like disabled=True);
  // 2. Are booleans;
  // 3. Have a "true" value (we don't do disabled=False since it's redundant).
  const booleanParams = widget.parameters.filter((param: any) =>
    param.keyValue === true && param.type === 'bool' && param.value === true
  );

  // After we got them, let's format'em here, so the code below doesn't get too messy
  if(booleanParams.length) {
    markupParams.push(formatParams('boolean', booleanParams));
  }

  // Now, let's get integers. These should:
  // 1. be integers;
  // 2. have a value set;
  // 3. be visible, or required
  const integerParams = widget.parameters.filter((param: any) =>
    param.type === 'int' && param.value !== undefined && param.visible === true ||
    param.type === 'int' && param.value !== undefined && param.required === true
  );
  
  // Now, into formatting them
  if(integerParams.length) {
    markupParams.push(formatParams('integer', integerParams));
  }

  // Tired already? Now, let's grab the key-value pairs.
  // We're also removing some specific values that are handled below
  const keywordValueParams = valueParams.filter((param: any) => 
    param.keyValue === true && param.type !== 'bool' &&
    param.keyValue === true && param.type !== 'int' && 
    param.keyValue === true && param.type !== 'datetime'
  );

  // Formatting function for key-value params
  if(keywordValueParams.length) {
    markupParams.push(formatParams('key-value', keywordValueParams));
  }

  // Ok, so at this point we _should_ have all the params we need in a nice array.
  // Now, it's time to piece it together and create the markup for the code snippet.
  const flattenedParams = markupParams.flat();

  // If you're changing the indentation here, BEWARE! It's purposefully done this way,
  // so that python recognizes the snippet, and formats it this way:

  // st.text_area(
  //   'Caption goes here',
  //   height=112,
  //   value='This is what I really wanted to say...'
  // )

  // Happy to change this to a nicer-looking string, but if you're doing so,
  // please be mindful of the above, and test it thoroughly!
  const markup = `${widget.name}(
  ${flattenedParams.map((param: string) => `
  ${param}`).join(',')}
)`;

  // After the have the markup, we use a regex pattern to remove unnecesary line breaks,
  // spaces, tabs, anything that might throw our formatting off.
  const formattedMarkup = markup.replace(/^\s*[\r\n]/gm, "");
  
  // ...And finally, add the markup to the widget object, and send it back to the UI
  widget.snippet = formattedMarkup;
  return widget;
}