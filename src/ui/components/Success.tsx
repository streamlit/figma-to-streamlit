// Globals
import React from "react";

import styles from './Message.module.css';

const Success = ({ message }) => {
  return (
    <div className={`${styles.Notification} ${styles.SuccessContainer}`}>
      <p className={styles.Content}>{message}</p>
    </div>
  );
}

export default Success;