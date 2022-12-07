import React from "react";
import { useParams } from "react-router-dom";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    const { url } = PHOTOS_GET(id);
    request(url);
  }, []);
  return <div>{id}</div>;
};

export default Photo;
