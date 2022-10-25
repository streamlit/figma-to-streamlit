// Globals
import React, { useState, useEffect } from "react";

// Components
import Heading from './components/Heading';
import Message from './components/Message';


const App = () => {
  // State initialization
  const [message, setMessage] = useState({});

  // Function to get the data from the plugin and store it in state
  useEffect(() => {
    onmessage = (event) => {
      const {type, message, data} = event.data.pluginMessage;
      setMessage({
        type,
        message,
        data
      });
    }
  }, []);

  return (
    <>
      <Heading />
      {message && <Message message={message} />}
    </>
  );
}

export default App;