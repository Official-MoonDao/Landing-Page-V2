import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SlideButton(props) {
  const { text, type } = props;
  return (
    <button
      className={type ? `slidebtn ${type}` : "slidebtn"}
      onClick={props?.onClick || null}
    >
      <div className="px-4">{text}</div>
    </button>
  );
}
