import React, { useEffect } from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";

const UserStats = () => {
  const { error, loading, request, data } = useFetch();
  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);
  return (
    <div>
      <Head title="Estatísticas" />
      Estatisticas
    </div>
  );
};

export default UserStats;
