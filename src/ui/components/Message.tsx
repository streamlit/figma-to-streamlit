import React from "react";

import Error from './Error';
import Success from './Success';
import CodeBlock from './CodeBlock';

const Message = ({ message }) => {
  return (
    message.type === 'error' ?
      <Error error={message} />
      : message.type === 'success' ?
      <>
        <Success message={message.message} />
        <CodeBlock
          message={message}
        />
      </>
    : null
  );
}

export default Message;