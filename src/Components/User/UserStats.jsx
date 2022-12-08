import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";

const UserStats = () => {
  const { error, loading, request, data } = useFetch();
  return (
    <div>
      <Head title="Estatísticas" />
      Estatisticas
    </div>
  );
};

export default UserStats;
