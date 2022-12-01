import React, { useState } from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import Button from "../Forms/Button";

const UserPhotoPost = () => {
  const name = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const { data, loading, error, request } = useFetch();
  const [img, setImg] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleImgChange() {}
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default UserPhotoPost;
