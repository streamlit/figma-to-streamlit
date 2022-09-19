// Function to populate the placeholder for the selected widget
export const generatePlaceholderMarkup = (widget: any) => {

  // Get the imports we need
  const imports = widget.imports.map((importStr: string) => importStr).join('\n');

  // If you're changing the indentation below, BEWARE! It's purposefully done this way,
  // so that python recognizes the snippet, and formats it this way:

  // import streamlit as st
  // 
  // st.text_area(
  //   'Caption goes here',
  //   height=112,
  //   value='This is what I really wanted to say...'
  // )

  // Happy to change this to a nicer-looking string, but if you're doing so,
  // please be mindful of the above, and test it thoroughly!
  const markup = `${imports}

# Note: This is a placeholder snippet.
# The output might not be an exact match
# with what you see on Figma, values and params
# might differ slightly.
${widget.name}(
  ${widget.placeholderData.map((data: string) => `${data}`).join(',\n  ')}
)`;
  
  // ...And finally, add the markup to the widget object, and send it back to the UI
  widget.snippet = markup;
  return widget;
}