import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./UserHeaderNav.module.css";
import minhasFotos from "../../assets/feed.svg";
import estatisticas from "../../assets/estatisticas.svg";
import adicionarFotos from "../../assets/adicionar.svg";
import sair from "../../assets/sair.svg";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  const { matches } = window.matchMedia("(max-width:40rem)");
  console.log(matches);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <img src={minhasFotos} />
        {mobile && "Minahs fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <img src={estatisticas} />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <img src={adicionarFotos} />
        {mobile && "Adicionar fotos"}
      </NavLink>
      <button onClick={userLogout}>
        <img src={sair} />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
