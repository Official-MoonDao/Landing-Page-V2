import { useRef, useEffect, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import useScroll from "../../hooks/useScroll";
import RoadmapScene from "./r3f/RoadmapScene";
export default function Roadmap() {
  const contentRef = useRef();
  const contentRefValue = useOnScreen(contentRef);
  const [isContentRef, setIsContentRef] = useState(false);
  const [scrollComplete, setScrollComplete] = useState(false);
  const { scrolled } = useScroll();
  useEffect(() => {
    if (!isContentRef) {
      setIsContentRef(contentRefValue);
    }
  }, [contentRefValue]);

  useEffect(() => {
    if (scrolled >= 0.92) {
      window.scrollTo({ bottom: 0, behavior: "smooth" });
      document.body.style.overflowY = "hidden";
    }
  }, [scrolled]);

  return (
    <div className="roadmap" ref={contentRef}>
      {isContentRef && <RoadmapScene />}
    </div>
  );
}
