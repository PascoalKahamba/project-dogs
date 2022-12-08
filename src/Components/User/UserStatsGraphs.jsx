import React, { useEffect, useState } from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b));
    setGraph(graphData);
  }, [data]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphs}>
        <VictoryPie data={graph} />
      </div>
    </section>
  );
};

export default UserStatsGraphs;
