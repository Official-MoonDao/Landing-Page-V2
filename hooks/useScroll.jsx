import { useState, useEffect } from "react";

export default function useScroll() {
  const [wheel, setWheel] = useState({});
  useEffect(() => {
    document.addEventListener("wheel", (e) => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setWheel({ wheelY: e.wheelDeltaY, scrolled: winScroll / height });
    });
  }, []);
  return wheel;
}
