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
      <Mission />
      <Constitution />
      <Roadmap />
    </div>
  );
}
