import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import { ReactComponent as Dogs } from "../assets/dogs.svg";
import logo from "../assets/dogs.svg";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          {/* <Dogs /> */}
          <img src={logo} alt="" />
        </Link>
        <Link className={styles.login} to="/login">
          Login | Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
