import React from "react";
import styles from "./PhotoContent.module.css";

const PhotoContent = ({ data }) => {
  const { photo, comnents } = data;
  console.log(data);
  return (
    <div className={styles.photo}>
      <div className={styles.img}></div>
    </div>
  );
};

export default PhotoContent;
