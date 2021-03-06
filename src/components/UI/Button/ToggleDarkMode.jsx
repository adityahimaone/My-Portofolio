import React, { useState } from 'react';
import useDarkMode from '@/hooks/useDarkMode';
import {
  BsChevronDown,
  BsList,
  BsX,
  BsFillMoonFill,
  BsSunFill
} from 'react-icons/bs';
import '@animxyz/core';
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';

export default function ToggleDarkMode() {
  const [isDark, setIsDark] = useDarkMode();
  const [toggle, settoggle] = useState(true);
  return (
    <button type="checkbox" checked={isDark} onClick={() => setIsDark(!isDark)}>
      {isDark && (
        <XyzTransition appear xyz="fade rotate-right ease-out-back">
          <div>
            <BsSunFill className="h-6 w-6 fill-current text-white hover:text-accentMiddle" />
          </div>
        </XyzTransition>
      )}
      {!isDark && (
        <XyzTransition appear xyz="fade rotate-left ease-out-back">
          <div>
            <BsFillMoonFill className="h-6 w-6 fill-current text-black hover:text-accentMiddle" />
          </div>
        </XyzTransition>
      )}
    </button>
  );
}
