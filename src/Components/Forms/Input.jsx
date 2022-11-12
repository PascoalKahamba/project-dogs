import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, value }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        className={styles.input}
      />
      {value}
    </div>
  );
};

export default Input;
