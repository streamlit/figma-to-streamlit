// Globals
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

import styles from './Message.module.css';

const Message = ({ message }) => {
  return (
    message.type === 'error' ?
      <div className={`${styles.Notification} ${styles.ErrorContainer}`}>
        <p className={styles.Content}>{message.message}</p>
        {message.data && <a href={message.data.helpUrl} target="_blank" rel="noopener noreferrer" className={styles.Link}>Read more about this error</a>}
      </div>
    : message.type === 'success' ?
      <>
        <div className={`${styles.Notification} ${styles.SuccessContainer}`}>
          <p className={styles.Content}>{message.message}</p>
        </div>
        <section className={styles.CodeContainer}>
          {message.data &&
            <>
              <h2 className={styles.WidgetName}>{message.data.name}</h2>
              {message.data.description && <p className={styles.WidgetDescription}>{message.data.description}</p>}
              <Highlight {...defaultProps} code={message.data.snippet} language="python" theme={dracula}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} ${styles.CodeBlock}`} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
              </Highlight>
              {message.data.link &&
                <div className={styles.DocsContainer}>
                  <p className={styles.WidgetDescription}>
                    Need more help? Check our docs {" "}
                    <a href={message.data.link} target="_blank" rel="noopener noreferrer" className={styles.WidgetLink}>for this component.</a>
                  </p>
                </div>
              }
            </>
          }
        </section>
      </>
    : null
  );
}

export default Message;