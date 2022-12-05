import React from "react";
import styles from "./Image/moduxle.css";

const Image = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.akeleton}></div>
      <img className={styles.img} src="" alt="" />
    </div>
  );
};

export default Image;
