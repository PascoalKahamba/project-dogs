import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import minhasFotos from "../../assets/feed.svg";
import estatisticas from "../../assets/estatisticas.svg";
import adicionarFotos from "../../assets/adicionar.svg";
import sair from "../../assets/sair.svg";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">
        <img src={minhasFotos} />
        Minahs fotos
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={estatisticas} />
        Estatisticas
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={adicionarFotos} />
        Adicionar fotos
      </NavLink>
      <button onClick={userLogout}>
        <img src={sair} />
        Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;
