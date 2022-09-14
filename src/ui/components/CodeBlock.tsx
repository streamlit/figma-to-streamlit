// Globals
import React from "react";

// Locals
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

import styles from './CodeBlock.module.css';

const Success = ({ message }) => {
  return (
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
  );
}

export default Success;