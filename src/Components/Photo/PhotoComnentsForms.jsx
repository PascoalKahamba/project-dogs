import React, { useState } from "react";

const PhotoComnentsForms = ({ id }) => {
  const { comnents, setComnents } = useState("");
  return (
    <form>
      <textarea
        value={comnents}
        onChange={({ target }) => setComnents(target.value)}
      />
    </form>
  );
};

export default PhotoComnentsForms;
