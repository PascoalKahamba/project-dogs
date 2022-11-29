import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./UserHeaderNav.module.css";
import minhasFotos from "../../assets/feed.svg";
import estatisticas from "../../assets/estatisticas.svg";
import adicionarFotos from "../../assets/adicionar.svg";
import sair from "../../assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width:40rem)");

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={styles.mobileButton}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          <img src={minhasFotos} />
          {mobile && "Minahs fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={estatisticas} />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={adicionarFotos} />
          {mobile && "Adicionar fotos"}
        </NavLink>
        <button onClick={userLogout}>
          <img src={sair} />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
