"use client";
import Link from "next/link";
import Sidebar from "../sidebar";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const wsize = useWindowSize();

  function toggleNav() {
    if (navbar === false) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    if (wsize.width > 768) {
      setNavbar(false);
    }
  }, [wsize.width]);

  useEffect(() => {
    const menuLink = document.querySelectorAll(".menulink");

    menuLink.forEach((e) => {
      e.onclick = function () {
        toggleNav();
      };
    });
  });

  useEffect(() => {
    const menu = document.getElementById("menubutton");
    menu.onclick = function () {
      toggleNav();
    };
  });

  return (
    <div className="sticky top-0 bg-gray-800 drop-shadow-sm z-20">
      <div className="md:container md:mx-auto md:max-w-4xl">
        <nav className="  md:flex md:justify-between ">
          <div className="outer-nav p-2 flex justify-between">
            <Logo />
            <MenuButton navbar={navbar} />
          </div>
          <div className="md:self-center relative">
            <Sidebar navbar={navbar} />
          </div>
        </nav>
      </div>
    </div>
  );
}
