import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const LoginPasswordLost = () => {
  async function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input />
        <Button>Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
