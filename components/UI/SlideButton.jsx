import Link from "next/link";

export default function SlideButton(props) {
  const { text } = props;
  if (props?.onClick)
    return (
      <button className="slidebtn" onClick={props?.onClick}>
        {text}
      </button>
    );

  return (
    <Link className="slidebtn" href={props?.href || ""}>
      <button className="w-full">{text}</button>
    </Link>
  );
}
