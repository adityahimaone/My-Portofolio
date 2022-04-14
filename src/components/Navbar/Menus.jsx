import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Menus() {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  return (
    <ul
      className={`flex flex-col space-x-0 md:flex-row md:space-x-8 text-lg font-semibold`}
    >
      <li className="w-full">
        <a href="/" className="hover:text-primary py-2 block">
          About
        </a>
      </li>
      <li className="w-full">
        <a href="/" className="hover:text-primary py-2 block">
          Projects
        </a>
      </li>
    </ul>
  );
}
