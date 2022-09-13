// Globals
import React from "react";

import styles from './Heading.module.css';

const Heading = () => {
  // Function to post a message to the plugin
  const identifyWidget = () => {
    parent.postMessage({ pluginMessage: { type: 'id-selection' } }, '*');
  }
  
  return (
    <header className={styles.Container}>
      <h1 className={styles.Title}>Start building your app!</h1>
      <p className={styles.Description}>Select a widget and hit the button below to get its code!</p>
      <button
        onClick={identifyWidget}
        className={styles.Cta}
      >
        See my code
      </button>
    </header>
  );
}

export default Heading;