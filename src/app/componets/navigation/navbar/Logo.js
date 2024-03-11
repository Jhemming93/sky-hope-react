import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} scroll={true}>
      <div className="logo flex">
        <Image
          src="/temp-logo.png"
          alt="Skyhope Logo"
          width={35}
          height={35}
          id="logo"
        />
        <h1 className="text-lg font-bold self-center pl-1 text-orange-500">
          SkyHope
        </h1>
      </div>
    </Link>
  );
}
