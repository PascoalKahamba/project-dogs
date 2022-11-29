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
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta">
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
  );
};

export default UserHeaderNav;
