import React from "react";
import styles from './Input.module.css';

const input = props => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
          inputElement = <input className={styles.inputelement} {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={styles.inputelement} {...props} />;
      break;
    default:
      inputElement = <input className={styles.inputelement} {...props} />;
      break;
  }

  return (
    <div className={styles.input}>
      <label className={styles.label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
