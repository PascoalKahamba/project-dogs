import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

const FeedModal = () => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET();
      request(url, options);
    }
    fetchPhotos();
  }, []);
  return <div>FeedModal</div>;
};

export default FeedModal;
