import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  BsChevronDown,
  BsList,
  BsX,
  BsFillMoonFill,
  BsSunriseFill,
} from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import Menus from "./Menus";
import ToggleDarkMode from "@/components/UI/Button/ToggleDarkMode";
import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import { Sling as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const cx = classNames(
    "fixed w-full transition-all duration-700 z-10 py-2 dark:text-white",
    {
      "bg-white dark:bg-accentDarkMiddle shadow-lg !py-2": backgroundWhite,
      "shadow-lg": location.pathname === "/projects",
    }
  );

  return (
    <nav className={cx}>
      <div className="px-8 container mx-auto top-0 flex justify-between items-centers">
        <div className="flex items-center w-full justify-between">
          <div>
            <h1 className="text-lg font-semibold dark:text-accent">
              adityahimaone
            </h1>
          </div>
          <div className="hidden gap-8 md:flex">
            <Menus />
          </div>
        </div>
        <div className="flex items-center md:px-2">
          <ToggleDarkMode />
        </div>
        <div className="md:hidden text-2xl">
          <Hamburger
            size={25}
            toggled={dropdownOpen}
            toggle={setDropdownOpen}
          />
          {/* Menu dropdown */}
          <div
            className={classNames({
              "text-base left-0 top-full right-0 absolute transition-all duration-400": true,
              "invisible opacity-0": !dropdownOpen,
              "visible opacity-100": dropdownOpen,
            })}
          >
            <div
              className="h-screen left-0 bg-black bg-opacity-30"
              onClick={handleBlackScreenClick}
            >
              <div className="z-20 shadow-xl bg-white dark:bg-accentDarkMiddle p-6">
                <div className="mb-4">
                  <Menus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
