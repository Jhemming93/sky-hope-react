import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MenuButton({ navbar }) {
  //   const [navbar, setNavbar] = useState({ navbar });

  return (
    <div id="menubutton" className="md:hidden flex align-middle">
      <button className="hover:cursor-pointer" width={30}>
        {navbar ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="size-6 fill-white text-orange-500"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            width={30}
            className="size-6 text-white"
          />
        )}
      </button>
    </div>
  );
}
