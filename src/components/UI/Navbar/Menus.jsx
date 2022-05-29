import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export default function Menus() {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const handleGoPageHome = () => {
    navigate("/");
  };

  const handleGoPageProjects = () => {
    navigate("/projects");
  };

  return (
    <ul
      className={`flex flex-col space-x-0 md:flex-row md:space-x-8 text-lg font-semibold`}
    >
      <li className="w-full">
        <button
          onClick={handleGoPageHome}
          className="hover:text-accentMiddle py-2 block"
        >
          <span className="font-semibold">About</span>
        </button>
      </li>
      <li className="w-full">
        <button
          onClick={handleGoPageProjects}
          className="hover:text-accentMiddle py-2 block"
        >
          <span className="font-semibold">Projects</span>
        </button>
      </li>
    </ul>
  );
}
