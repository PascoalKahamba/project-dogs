import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import PhotoComnentsForms from "./PhotoComnentsForms";

const PhotoComnents = (props) => {
  const { login } = useContext(UserContext);
  return <div>{login && <PhotoComnentsForms id={props.id} />}</div>;
};

export default PhotoComnents;
