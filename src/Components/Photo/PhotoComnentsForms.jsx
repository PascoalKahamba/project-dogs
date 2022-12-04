import React, { useState } from "react";
import { COMMENT_POST } from "../../api";
import enviar from "../../assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";

const PhotoComnentsForms = ({ id, setComments }) => {
  const { comment, setComment } = useState("");
  const { request, error } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments("");
      setComments((comments) => [...comments, json]);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <img src={enviar} alt="image icon" />
      </button>
    </form>
  );
};

export default PhotoComnentsForms;
