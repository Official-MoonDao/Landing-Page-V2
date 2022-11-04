import { useRef, useEffect, useState, Suspense } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import useScroll from "../../hooks/useScroll";
import MainCanvas from "./r3f/MainScene";
import RoadmapScene from "./r3f/RoadmapScene";
export default function Roadmap() {
  const contentRef = useRef();
  const contentRefValue = useOnScreen(contentRef);
  const [isContentRef, setIsContentRef] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const scrolled = useScroll();
  useEffect(() => {
    if (!isContentRef) {
      setIsContentRef(contentRefValue);
    }
  }, [contentRefValue]);
  return (
    <div className={"roadmap"} ref={contentRef}>
      <div className="h-full animate-[fadeIn_10s]">
        <Suspense fallback={null}>
          <MainCanvas scrollEnabled={true} />
        </Suspense>
      </div>
    </div>
  );
}
