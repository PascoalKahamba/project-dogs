import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, userpassword }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" value="username" name="username" />
        <Input
          label="Senha"
          type="password"
          value="userpassword"
          name="password"
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
