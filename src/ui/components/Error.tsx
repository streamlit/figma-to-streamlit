// Globals
import React from "react";

import styles from './Message.module.css';

const Error = ({ error }) => {
  console.log(error)
  return (
    <div className={`${styles.Notification} ${styles.ErrorContainer}`}>
      <p className={styles.Content}>{error.message}</p>
      {error.data && <a href={error.data.helpUrl} target="_blank" rel="noopener noreferrer" className={styles.Link}>{error.data.helpText}</a>}
      {error.data.docsUrl && <a href={error.data.docsUrl} target="_blank" rel="noopener noreferrer" className={styles.Link}>{error.data.docsText}</a>}
    </div>
  );
}

export default Error;