import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css";

const PhotoContent = ({ data }) => {
  const { photo, comnents } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <p>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
        </p>
      </div>
    </div>
  );
};

export default PhotoContent;
