import React from "react";
import styles from "./FeedMOdal.module.css";
import useFetch from "../../Hooks/useFetch";

const FeedModal = () => {
  const { data, loading, error, request } = useFetch();
  return <div className={styles.modal}>FeedModal</div>;
};

export default FeedModal;
