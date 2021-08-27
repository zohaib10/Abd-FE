import { useEffect, useState } from "react";

export const useMedia = (width: string) => {
  const [matches, setMatches] = useState(window.matchMedia(width));

  useEffect(() => {
    setMatches(window.matchMedia(width));
  }, [width]);

  window.onresize = () => {
    setMatches(window.matchMedia(width));
  };

  return { matches, screenMatches: matches.matches };
};
