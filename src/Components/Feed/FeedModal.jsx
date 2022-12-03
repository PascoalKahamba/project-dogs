import React, { useEffect } from "react";
import styles from "./FeedMOdal.module.css";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { PHOTO_GET } from "../../api";
import Loading from "./Loading";

const FeedModal = ({ photo }) => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
      <img src={photo.src} alt="" />
    </div>
  );
};

export default FeedModal;
