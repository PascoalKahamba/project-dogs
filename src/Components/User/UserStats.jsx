import React, { useEffect } from "react";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { error, loading, request, data } = useFetch();
  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />

        <UserStatsGraphs />
      </div>
    );
  else return null;
};

export default UserStats;
