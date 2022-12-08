import React, { useEffect, useState } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";

const LoginPasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefaul();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    await request(url, options);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);
  return (
    <div>
      {key}
      {login}
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        <Button>Resetar</Button>
      </form>
    </div>
  );
};

export default LoginPasswordReset;
