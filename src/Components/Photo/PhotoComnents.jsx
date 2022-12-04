import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import PhotoComnentsForms from "./PhotoComnentsForms";
import styles from "./PhotoComments.module.css";

const PhotoComnents = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoComnentsForms id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComnents;
