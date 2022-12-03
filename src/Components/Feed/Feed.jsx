import React, { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <section>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos />
    </section>
  );
};

export default Feed;
