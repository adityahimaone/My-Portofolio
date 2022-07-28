import React from 'react';
import classNames from 'classnames';

function PrimaryOutlineButton({ children, className, onClick, ...props }) {
  const cx = classNames([
    'relative rounded-lg inline-block px-10 py-3 overflow-hidden shadow-accent-glow border-2 border-accentContrast group focus:outline-none focus:ring',
    className
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      <span className="absolute  inset-y-0 left-0 w-[0px] bg-accentContrast transition-all group-hover:w-full group-active:bg-accent"></span>
      <span className="text-md relative font-semibold text-accentContrast transition-colors group-hover:text-white">
        {children}
      </span>
    </button>
  );
}

export default PrimaryOutlineButton;
