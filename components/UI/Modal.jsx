import Image from "next/image";
import { useEffect } from "react";

export default function Modal(props) {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => (document.documentElement.style.overflowY = "auto");
  }, []);
  return (
    <div className="modal overflow-y-auto">
      <div className="bg-modal" />
      <button
        className="absolute w-1/8 scale-[300%] top-[20%] right-[20%] z-[120]"
        onClick={props.exit}
      >
        [X]
      </button>
      <div className="content relative top-20 left-10 ">
        <h1>MEET MOON DAO!</h1>
        <p className="caption">
          {
            "Welcome to the future of space exploration!\nChoose an option below to get started:"
          }
        </p>
        <h1>EXPLORE</h1>
        <p className="caption">
          {
            "Get involved in our community and participate\nin our governance and the future of MoonDAO.\nWe'll help introduce you to our constitution\nand walk you through on-boarding into web3,\ndiscord, and our voting process."
          }
        </p>
        <h1>CONTRIBUTE</h1>
        <p className="caption">
          {
            "Contribute to our mission and begin the guild\nonboarding process! Guilds are the talent pools\nat MoonDAO where you can access bounties to\nwork on. After completing a bounty, you can\neven get added to a project team (small teams\nfocused on specific goals)."
          }
        </p>
      </div>
      <div className="card absolute right-[5%] top-[20%] z-[110]">
        <Image
          className="absolute z-0"
          src="/card4.svg"
          width={500}
          height={500}
        />
        <Image
          className="relative"
          src="/outline-card4.svg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
