import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import useMouse from "../../hooks/useMouse";
import Modal from "../UI/Modal";
import SlideButton from "../UI/SlideButton";

export default function Hero(props) {
  // const { mouseX, blur } = props;
  const { mouseX, blur } = useMouse();
  const [modal, setModal] = useState(false);
  const layer1Ref = useRef();
  const layer2Ref = useRef();
  const astroRef = useRef();
  useEffect(() => {
    if (layer1Ref?.current) {
      layer1Ref.current.style.transform += `translateX(${mouseX}px)`;
    }
    if (layer2Ref?.current) {
      layer2Ref.current.style.transform += `translateX(${-mouseX}px)`;
      layer2Ref.current.style.filter = `blur(${blur}px)`;
    }
    if (astroRef?.current) {
      astroRef.current.style.transform = `rotate(${blur * 2}deg) translateY(${
        blur * 2
      }px)`;
    }
  }, [blur, mouseX]);
  return (
    <>
      {" "}
      {modal ? (
        <Modal exit={() => setModal(false)} />
      ) : (
        <div className="section hero">
          <Image
            className="bg-hero"
            src={"/brush-stroke-bottom-right2.svg"}
            alt=""
            width={1000}
            height={1000}
          />
          <div className="content animate-fadeInLeft ">
            <h1>
              {"LETS"}
              <span className="bg-white text-black px-2 rounded-sm">
                DECENTRALIZE
              </span>
              <br />
              {"ACCESS TO SPACE"}
            </h1>

            <p className="text">
              {
                "MoonDAO's mission is to create a self-sustaining, self-governing \n settlement on the Moon by 2030 to act as a launch point for humanity \n to explore the cosmos."
              }
            </p>
            <SlideButton text={"join us"} onClick={() => setModal(true)} />
          </div>
          <Suspense fallback={null}>
            <div className="animate-fadeIn">
              <div
                className="card absolute right-[0%] top-[10%]"
                ref={layer1Ref}
              >
                <Image
                  className="z-0 relative top-8"
                  src="/card.svg"
                  alt=""
                  width={630}
                  height={500}
                />
                <Image
                  className="absolute top-[5%] right-[0%] z-10"
                  src="/splatter-orange-purple.svg"
                  alt=""
                  width={600}
                  height={600}
                  priority
                />
              </div>
              <div
                className={"card absolute right-[0%] top-[10%] z-20"}
                ref={layer2Ref}
              >
                <Image
                  className="relative top-16 right-[12%] blur-[0.8px]"
                  src="/outline-card.svg"
                  alt=""
                  width={520}
                  height={500}
                />
                <div
                  className="topLayer absolute right-[0%] top-[10%] z-30"
                  ref={astroRef}
                >
                  <Image
                    className="rotate-0 "
                    src="/astronaut2.svg"
                    alt=""
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      )}
    </>
  );
}
