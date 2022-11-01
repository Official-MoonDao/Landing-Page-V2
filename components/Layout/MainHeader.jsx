import Image from "next/image";
import Link from "next/link";
export default function MainHeader() {
  return (
    <div className="absolute h-1/5 w-full flex p-4 gap-10">
      <Link href={"https://moondao.com/"}>
        <Image
          src={
            "https://uploads-ssl.webflow.com/634742417f9e1c182c6697d4/635f1efd98d20bab6259e1b0_MoonDAO%20Animated%20White%20Logo.svg"
          }
          alt=""
          width={250}
          height={150}
        />
      </Link>
      <div className="flex gap-5 justify-center align-center">
        <Link href="">
          <Image src={"/disc-icon.svg"} alt="" width={40} height={40} />
        </Link>
        <Link href="">
          <Image src={"/twitter-icon.svg"} alt="" width={40} height={40} />
        </Link>
      </div>
    </div>
  );
}
