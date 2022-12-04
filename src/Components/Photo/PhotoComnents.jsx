import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import PhotoComnentsForms from "./PhotoComnentsForms";

const PhotoComnents = () => {
  const { login } = useContext(UserContext);
  return <div>{login && <PhotoComnentsForms />}</div>;
};

export default PhotoComnents;
