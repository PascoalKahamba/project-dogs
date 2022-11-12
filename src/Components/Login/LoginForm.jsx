import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={userpassword}
          onChange={({ target }) => setUserpassword(target.value)}
        />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
