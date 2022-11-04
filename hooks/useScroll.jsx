import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrolled, setScrolled] = useState({});

  function getScroll(e) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled(winScroll / height);
  }
  useEffect(() => {
    document.addEventListener("wheel", getScroll);
    return () => document.removeEventListener("wheel", getScroll);
  }, []);
  return scrolled;
}
