// Globals
import React, { useState } from "react";
import copy from "copy-to-clipboard";

// Locals
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

import styles from './CodeBlock.module.css';

const Success = ({ message }) => {
  const [collapsed, setIsCollapsed] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const clickToCopy = () => {
    copy(message.snippet);
    setIsCopied(true);
    setTimeout(() => { setIsCopied(false) }, 1200);
  }

  return (
    <section className={`${styles.Container} container`}>
      {message &&
        <>
          <h2 className={styles.WidgetName}>{message.name}</h2>
          {message.description &&
            <p
              className={`
                ${styles.WidgetDescription}
                ${collapsed === true ? styles.CollapsedDescription : ''}
              `}
              onClick={() => setIsCollapsed(!collapsed)}
            >
              {message.description}
            </p>
          }
          <div className={styles.CodeBlockContainer}>
            <button
              className={`${styles.ClickToCopy} group`}
              onClick={() => clickToCopy()}
              >
              {isCopied === true ? <span className={styles.Tooltip}>Copied!</span> : <span className={`${styles.Tooltip} opacity-0 group-hover:opacity-100`}>Copy</span>}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.51085 5.49983V4.51103C5.51085 3.40522 6.40861 2.50879 7.51605 2.50879H11.526C12.6335 2.50879 13.5312 3.40522 13.5312 4.51103V8.51551C13.5312 9.62131 12.6335 10.5177 11.526 10.5177H10.5778M8.54645 13.5088H4.53645C3.42901 13.5088 2.53125 12.6124 2.53125 11.5065V7.50207C2.53125 6.39626 3.42901 5.49983 4.53645 5.49983H8.54645C9.65389 5.49983 10.5516 6.39626 10.5516 7.50207V11.5065C10.5516 12.6124 9.65389 13.5088 8.54645 13.5088Z" stroke="#808495"/>
              </svg>
            </button>
            <Highlight {...defaultProps} code={message.snippet} language="python" theme={dracula}>
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
          </div>
          {message.link &&
            <div className={styles.DocsContainer}>
              <p className={styles.WidgetDescription}>
                Need more help? Check our docs {" "}
                <a href={message.link} target="_blank" rel="noopener noreferrer" className={styles.WidgetLink}>for this component.</a>
              </p>
            </div>
          }
        </>
      }
    </section>
  );
}

export default Success;