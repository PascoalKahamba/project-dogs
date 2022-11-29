import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">Minahs fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatisticas</NavLink>
      <NavLink to="/conta/postar">Adicionar fotos</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
