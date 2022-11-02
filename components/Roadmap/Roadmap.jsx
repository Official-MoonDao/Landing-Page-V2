import { useRef, useEffect, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import useScroll from "../../hooks/useScroll";

export default function Roadmap() {
  const contentRef = useRef();
  const contentRefValue = useOnScreen(contentRef);
  const [isContentRef, setIsContentRef] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { deltaY } = useScroll();
  useEffect(() => {
    console.log(deltaY);
  }, [deltaY]);
  return <div className="roadmap"></div>;
}
