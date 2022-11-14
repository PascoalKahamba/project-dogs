import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import { ReactComponent as Dogs } from "../assets/dogs.svg";
import logo from "../assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          {/* <Dogs /> */}
          <img src={logo} alt="foto dogs" />
        </Link>
        <Link className={styles.login} to="/login">
          {context.usuario}Login | Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
