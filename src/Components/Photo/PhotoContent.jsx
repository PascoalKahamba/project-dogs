import React from "react";
import { Link } from "react-router-dom";
import PhotoComnents from "./PhotoComnents";
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
          <span className={styles.visualizacoes}>{photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>{photo.idade} anos</li>
        </ul>
      </div>
      <PhotoComnents id={photo.id} comnents={comnents} />
    </div>
  );
};

export default PhotoContent;
