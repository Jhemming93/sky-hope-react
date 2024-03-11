import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faWifi } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function ServiceCard(data) {
  const [logo, setLogo] = useState(data.logo);

  if (logo === undefined || logo === "") {
    setLogo(faCircleXmark);
  } else if (logo === "wifi") {
    setLogo(faWifi);
  }

  return (
    <div className="border-2 grid grid-cols-12 bg-white sm:grid-cols-1 my-2 sm:max-w-64 rounded p-2 shadow-md shadow-orange-500">
      <div className="col-span-2 flex justify-center">
        <FontAwesomeIcon className="size-9 self-center" icon={logo} />
      </div>
      <div className="col-span-10 text-left sm:pt-4">
        <h4 className="capitalize font-bold text-xl md:text-2xl">
          {data.title}
        </h4>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
