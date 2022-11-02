import { useState, useEffect } from "react";

export default function useScroll() {
  const [deltaY, setDeltaY] = useState(0);
  const [pageY, setPageY] = useState(0);
  useEffect(() => {
    document.addEventListener("wheel", (e) => {
      setDeltaY(e.wheelDeltaY);
    });
  }, []);
  return { deltaY };
}
