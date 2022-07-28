import classNames from "classnames";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ClickOutComponent from "react-onclickout";

export default function Dropdown({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative w-full" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span
        className="flex cursor-pointer items-center justify-between py-2 hover:text-primary"
        onClick={() => setOpen(!open)}
      >
        Product
        <BsChevronDown className="ml-2 inline" />
      </span>
      <ClickOutComponent onClickOut={() => open && setOpen(false)}>
        <div
          className={classNames("top-full -left-1/2 -right-1/2 rounded-lg bg-white shadow-lg lg:absolute", {
            "visible h-full py-4 px-6 opacity-100 lg:h-auto": open,
            "invisible h-0 opacity-0": !open,
          })}
        >
          {children}
        </div>
      </ClickOutComponent>
    </div>
  );
}
