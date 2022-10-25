import React from "react";

import Error from './Error';
import Success from './Success';
import CodeBlock from './CodeBlock';

import styles from './Message.module.css';

const Message = ({ message }) => {
  return (
    message.type === 'error' ?
      <Error error={message} />
      : message.type === 'success' ?
      <>
        <Success message={message.message} />
        {message.data.map((content: any, index: number) =>
          index > 0 ?
            <>
              <hr className={styles.Separator} />
              <CodeBlock message={content} />
            </>
          : 
            <CodeBlock message={content} />
        )}
      </>
    : null
  );
}

export default Message;