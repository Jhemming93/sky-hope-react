"use client";

import SocialLinks from "../navigation/sidebar/SocialLinks";
export default function Footer() {
  return (
    <div className="bg-gray-800 p-2 ">
      <div className="md:container md:mx-auto md:max-w-4xl">
        <SocialLinks color="orange" />
        <p className="text-orange-600">Skyhope 2024 | All Rightes Reserved</p>
      </div>
    </div>
  );
}
