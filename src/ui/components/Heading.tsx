// Globals
import React from "react";

const Heading = () => {
  // Function to post a message to the plugin
  const identifyWidget = () => {
    parent.postMessage({ pluginMessage: { type: 'id-selection' } }, '*');
  }
  
  return (
    <>
      <h1>Start building your app!</h1>
      <p>Select a widget and hit "generate" below to get its code!</p>
      <button
        onClick={identifyWidget}
      >
        See my code
      </button>
    </>
  );
}

export default Heading;