import React, { useState } from "react";
import styles from "./UserStatsGraphs.modude.css";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);
  return <section className={`${styles.graph} animeLeft`}></section>;
};

export default UserStatsGraphs;
