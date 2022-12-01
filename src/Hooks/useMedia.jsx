import { useEffect, useState } from "react";

const useMedia = (media) => {
  const [match, setMatch] = useState(null);
  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    setMatch();
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
