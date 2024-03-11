import SocialLinks from "./SocialLinks";
import MenuLink from "./MenuLink";
import { useState } from "react";
export default function Sidebar({ navbar }) {
  return (
    <div
      className={`flex-1 w-full justify-self-center absolute md:bg-gray-800 md:static bg-orange-500 pb-3 md:align-middle md:block md:pb-0 md:mt-0 ${
        navbar ? "p-3 md:p=0 block h-screen z-20 " : "hidden"
      }`}
    >
      <ul className="md:flex">
        <h3 className="md:hidden font-bold text-gray-800 text-center text-2xl">
          Menu
        </h3>
        <MenuLink name="About Us" link="#aboutus" />
        <MenuLink name="Services" link="#services" />
        <MenuLink name="Get a Quote" link="#quote" />
      </ul>
      <div className="pt-2 flex justify-center md:hidden">
        <SocialLinks />
      </div>
    </div>
  );
}
