import React from "react";
import { NavLink } from "react-router-dom";

const UserHeaderNav = () => {
  return (
    <nav>
      <NavLink to="/conta">Minahs fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatisticas</NavLink>
      <NavLink to="/conta/postar">Adicionar fotos</NavLink>
      <button>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
