import React from "react";
import classNames from "classnames";

function PrimaryButton({ children, className, onClick, ...props }) {
  const cx = classNames([
    "relative rounded-lg inline-block px-10 py-3 overflow-hidden border bg-accent border-accentContrast group focus:outline-none focus:ring",
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      <span className="absolute inset-y-0 left-0 w-[0px] transition-all bg-white group-hover:w-full group-active:bg-accent"></span>
      <span className="relative text-sm font-medium text-white transition-colors group-hover:text-accentMiddle">
        {children}
      </span>
    </button>
  );
}

export default PrimaryButton;
