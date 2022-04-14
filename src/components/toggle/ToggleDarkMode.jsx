import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import {
  BsChevronDown,
  BsList,
  BsX,
  BsFillMoonFill,
  BsSunFill,
} from "react-icons/bs";

export default function ToggleDarkMode() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <button type="checkbox" checked={isDark} onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <BsSunFill className="w-6 h-6 fill-current text-white" />
      ) : (
        <BsFillMoonFill className="w-6 h-6 fill-current text-gray-700" />
      )}
    </button>
  );
}
