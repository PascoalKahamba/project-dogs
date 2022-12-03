import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      request(url, options);
    }
    fetchPhotos();
  }, []);
  return (
    <div>
      <FeedPhotosItem />
    </div>
  );
};

export default FeedPhotos;
