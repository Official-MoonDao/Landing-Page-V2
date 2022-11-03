import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, Suspense } from "react";
import useMouse from "../../hooks/useMouse";
import useOnScreen from "../../hooks/useOnScreen";
import SlideButton from "../UI/SlideButton";
export default function Mission(props) {
  const { mouseX, blur } = useMouse();
  const contentRef = useRef();
  const contentRefValue = useOnScreen(contentRef);
  const [isContentRef, setIsContentRef] = useState(false);
  const layer1Ref = useRef();
  const layer2Ref = useRef();
  const astroRef = useRef();

  useEffect(() => {
    if (layer1Ref.current) {
      layer1Ref.current.style.transform += `translateY(${-mouseX * 0.5}px)`;
      layer1Ref.current.style.filter = `blur(${
        window?.innerWidth * 0.0015 - blur
      }px)`;
    }
    if (layer2Ref.current) {
      layer2Ref.current.style.transform += `translateY(${mouseX}px)`;
    }
    if (astroRef.current) {
      astroRef.current.style.transform += `translateY(${mouseX}px)`;
      astroRef.current.style.filter = `blur(${blur}px)`;
    }
  }, [mouseX, blur]);

  useEffect(() => {
    if (!isContentRef) {
      setIsContentRef(contentRefValue);
    }
  }, [contentRefValue]);
  return (
    <div className="section constitution">
      <Image
        className="bg-constitution"
        src={"/brush-stroke-bottom-left.svg"}
        alt=""
        width={1000}
        height={1000}
      />
      <div className="z-40" ref={contentRef}>
        {isContentRef && (
          <div className="content relative bottom-44 animate-fadeInLeft">
            <h1 className="relative top-24 right-[-60%]">
              SPACE IS FOR <br />
              <span className="bg-white text-black px-2 rounded-sm">
                EVERYONE
              </span>
            </h1>
            <p className="caption">
              We uphold values of inclusion, peace, transparency, freedom of
              organization and speech. Space should be in the hands of the
              people, not any one nation or private entity.
            </p>
            <br />
            <p className="text">
              MoonDAO will support funding for individuals to go to space and
              fund future space research and exploration as it fits into the
              mission of becoming a governing body for the moon. It is very
              important to note that the core team has not pre-mined any tokens
              for ourselves. We have not given “special terms” to any Venture
              Capitalists, Influencers, Angel Investors, Rich Friends or Family,
              or any other person. We are all being treated equally.
            </p>

            <Link
              className="absolute"
              href="https://mirror.xyz/pmoncada.eth/uuufJem6v9X-fW3Bu4v1p_3qA5gPf96lZelHUM97BC8"
            >
              <SlideButton type="btn-constitution" text="READ MORE" />
            </Link>
          </div>
        )}
      </div>
      <Suspense fallback={null}>
        <div className="card absolute top-[220%] right-[0%]" ref={layer1Ref}>
          <Image
            className="z-0 relative"
            src="/card4.svg"
            alt=""
            width={700}
            height={800}
          />
        </div>
        <div
          className={"card absolute right-[7%] top-[210%] z-20"}
          ref={layer2Ref}
        >
          <Image
            className="relative bottom-14 blur-[1px]"
            src="/outline-card4.svg"
            alt=""
            width={650}
            height={300}
          />
        </div>
        <div className="topLayer absolute right-16 top-[235%]" ref={astroRef}>
          <Image
            className=" scale-125"
            src="/astronaut.svg"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </Suspense>
    </div>
  );
}
