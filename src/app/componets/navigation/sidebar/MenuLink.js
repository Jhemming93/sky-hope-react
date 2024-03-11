import Link from "next/link";
import { useState } from "react";

export default function MenuLink(props) {
  return (
    <li className="py-2 md:px-2 menulink">
      <Link
        className="hover:underline md:self-center md:text-orange-500 font-medium w-full text-center"
        href={props.link}
      >
        <p className="">{props.name}</p>
      </Link>
    </li>
  );
}
