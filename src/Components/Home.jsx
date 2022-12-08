import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
      <Head title="Fotos" />
    </section>
  );
};

export default Home;
