import Image from "next/image";
import { useRef, useEffect } from "react";
export default function Mission(props) {
  const { mouseX, blur } = props;
  const layer1Ref = useRef();
  const layer2Ref = useRef();
  const satRef = useRef();

  useEffect(() => {
    if (layer1Ref.current) {
      layer1Ref.current.style.transform += `translateX(${-mouseX * 0.5}px)`;
      layer1Ref.current.style.filter = `blur(${
        window?.innerWidth * 0.0015 - blur
      }px)`;
    }
    if (layer2Ref.current) {
      layer2Ref.current.style.transform += `translateX(${mouseX}px)`;
    }
    if (satRef.current) {
      satRef.current.style.transform = `translateX(${blur * 10}px)`;
      satRef.current.style.filter = `blur(${blur}px)`;
    }
  }, [props?.mouseX, props?.blur]);
  return (
    <div className="section mission">
      <Image
        className="bg-mission"
        src={"/brush-stroke-bottom-right.svg"}
        alt=""
        width={1000}
        height={1000}
      />

      <div className="content animate-fadeInLeft z-40">
        <p className="caption relative left-[50%]">
          MoonDAO is an international collective of people united by the mission
          of decentralizing access to space research and exploration.
        </p>
        <br />
        <p className="text relative left-[50%]">
          We are currently living at the inflection point of a privatized space
          race, and the implications of this moment will define our future.
          Making life multiplanetary is one of the most inspiring and important
          missions in our lifetime. The big question is: how? We believe that an
          international, decentralized, inclusive, and transparent organization
          would be much better aligned with the needs of the everyday person.
        </p>
        <h1 className="relative bottom-[8rem]">
          MOONDAO IS GOING <br />
          <span className="bg-white text-black px-2 rounded-sm">
            TO THE MOON
          </span>
        </h1>
      </div>
      <div className="card absolute left-[2%] top-[110%]" ref={layer1Ref}>
        <Image
          className="z-0"
          src="/card3.svg"
          alt=""
          width={600}
          height={300}
        />
      </div>
      <div
        className={"card absolute left-[2%] top-[100%] z-20"}
        ref={layer2Ref}
      >
        <Image
          className="relative top-20 left-[5%] blur-[1px]"
          src="/outline-card3.svg"
          alt=""
          width={500}
          height={500}
        />
        <div
          className="topLayer absolute left-[-18%] top-[8%] rotate-6 z-30"
          ref={satRef}
        >
          <Image
            className="relative left-[-5%]"
            src="/sat.svg"
            alt=""
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
