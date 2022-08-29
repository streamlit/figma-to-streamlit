// Globals
import React, { useState, useEffect } from "react";

// Components
import Heading from './components/Heading';


const App = () => {
  // State initialization
  const [message, setMessage] = useState({});

  // Function to get the data from the plugin and store it in state
  useEffect(() => {
    onmessage = (event) => {
      const {type, message} = event.data.pluginMessage;
      setMessage({
        type,
        message,
      })
    }
  }, []);

  return (
    <Heading />
  );
}

export default App;