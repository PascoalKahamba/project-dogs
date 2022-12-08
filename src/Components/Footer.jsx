import React from "react";
import styles from "./Footer.module.css";
import photo from "../assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={photo} alt="foto do footer" />
      </div>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
