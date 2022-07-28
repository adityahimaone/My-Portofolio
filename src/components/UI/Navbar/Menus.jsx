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
    <ul className={`flex flex-col space-x-0 text-lg font-semibold md:flex-row md:space-x-8`}>
      <li className="w-full">
        <button onClick={handleGoPageHome} className="block py-2 hover:text-accentMiddle">
          <span className="font-semibold">About</span>
        </button>
      </li>
      <li className="w-full">
        <button onClick={handleGoPageProjects} className="block py-2 hover:text-accentMiddle">
          <span className="font-semibold">Projects</span>
        </button>
      </li>
    </ul>
  );
}
