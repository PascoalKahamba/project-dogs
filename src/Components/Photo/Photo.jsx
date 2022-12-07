import React from "react";
import { useParams } from "react-router-dom";
import { PHOTOS_GETS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTOS_GETS(id);
    request(url, options);
  }, [request, id]);
  if (error) <Error error={error} />;
  if (loading) <Loading />;
  if (data)
    return (
      <section>
        <PhotoContent data={data} />
      </section>
    );
  else null;
};

export default Photo;
