import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import Roadmap from "../components/Roadmap/Roadmap";
import Constitution from "../components/Sections/Constitution";
import Hero from "../components/Sections/Hero";
import useOnScreen from "../hooks/useOnScreen";
const Mission = dynamic(() => import("../components/Sections/Mission"));
export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [blur, setBlur] = useState(0);

  let width;
  useEffect(() => {
    width = window?.innerWidth;
    document.addEventListener("mousemove", (e) => {
      e.preventDefault();
      setBlur((width - e.x) * 0.0015);
      if (e.x > width * 0.5) setBlur(0);
      if (e.x > width * 0.2 && e.x < width * 0.8)
        setMouseX(e.movementX * 0.055);
      else setMouseX(0);
    });
  }, []);

  return (
    <div className="pgContain">
      <Head>
        <title>MoonDAO</title>
        <meta
          name="description"
          content="Let's decentralize access to space."
        />
        <link rel="icon" href="/moondao.ico" />
      </Head>
      <Hero />
      <Mission mouseX={mouseX} blur={blur} />
      <Constitution mouseX={mouseX} />
      <Roadmap />
    </div>
  );
}
