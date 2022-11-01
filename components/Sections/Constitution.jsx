import Image from "next/image";

export default function Constitution() {
  return (
    <div className="section constitution">
      <Image
        className="bg-constitution"
        src={"/brush-stroke-bottom-left.svg"}
        alt=""
        width={1000}
        height={1000}
      />
    </div>
  );
}
