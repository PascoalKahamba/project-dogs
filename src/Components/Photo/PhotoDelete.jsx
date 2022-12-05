import React from "react";
import { PHOTO_DELETE } from "../../api";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  async function handleClick(event) {
    event.preventDefault();
    const { url, options } = PHOTO_DELETE(id);
  }
  return (
    <div>
      <button onClick={handleClick} className={styles.delete}>
        Deletar
      </button>
    </div>
  );
};

export default PhotoDelete;
