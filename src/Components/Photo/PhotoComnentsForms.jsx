import React, { useState } from "react";
import enviar from "../../assets/enviar.svg";

const PhotoComnentsForms = ({ id }) => {
  const { comnents, setComnents } = useState("");
  return (
    <form>
      <textarea
        id="comnents"
        name="comnents"
        placeholder="Comente..."
        value={comnents}
        onChange={({ target }) => setComnents(target.value)}
      />
      <button>
        <img src={enviar} alt="image icon" />
      </button>
    </form>
  );
};

export default PhotoComnentsForms;
