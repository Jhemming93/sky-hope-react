import SocialLink from "./SocialLink";
import { useState } from "react";
export default function SocialLinks({ color }) {
  const [titleColor, setTitleColor] = useState(color);

  if (titleColor === "orange") {
    setTitleColor("orange-500");
  } else if (titleColor === undefined) {
    setTitleColor("gray-800");
  }
  return (
    <>
      <div>
        <h3 className={`font-bold text-xl text-${titleColor}`}>Social Media</h3>
        <div>
          <SocialLink
            icon="twitter"
            link="https://www.twitter.com"
            color={color}
          />
          <SocialLink
            icon="youtube"
            link="https://www.youtube.com"
            color={color}
            padding="px-2"
          />
          <SocialLink
            icon="instagram"
            link="https://www.instagram.com"
            color={color}
          />
        </div>
      </div>
    </>
  );
}
