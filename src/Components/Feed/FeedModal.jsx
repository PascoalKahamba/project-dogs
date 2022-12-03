import React, { useEffect } from "react";
import styles from "./FeedMOdal.module.css";
import useFetch from "../../Hooks/useFetch";

const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GET();
    request(url, options);
  }, [photo, request]);
  return <div className={styles.modal}>FeedModal</div>;
};

export default FeedModal;
