import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function QuoteButton() {
  return (
    <button className="bg-orange-500 p-2 text-gray-800 rounded hover:bg-gray-800 hover:text-orange-500">
      <Link href="#quote" className="flex">
        <p className=" font-bold  ">Get a Quote!</p>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="self-center pl-1 size-5"
        />
      </Link>
    </button>
  );
}
