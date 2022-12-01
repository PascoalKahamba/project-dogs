import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  console.log(mobile);
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
