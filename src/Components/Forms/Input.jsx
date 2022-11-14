import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
