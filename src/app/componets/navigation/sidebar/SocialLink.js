import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useState } from "react";

export default function SocialLink(props) {
  const [link, setLink] = useState(props.link);
  const [icon, setIcon] = useState(props.icon);
  const [color, setColor] = useState(props.color);
  if (color === undefined) {
    setColor("gray-800");
  } else if (color === "orange") {
    setColor("orange-500");
  }
  if (icon === "youtube") {
    setIcon(faYoutube);
  } else if (icon === "twitter") {
    setIcon(faXTwitter);
  } else if (icon === "instagram") {
    setIcon(faInstagram);
  }

  if (link === undefined) {
    setLink("#");
  }

  return (
    <Link href={link} target="_blank">
      <FontAwesomeIcon
        icon={icon}
        alt={props.icon}
        className={`text-${color} size-9 py-2 ${props.padding}`}
      />
    </Link>
  );
}
