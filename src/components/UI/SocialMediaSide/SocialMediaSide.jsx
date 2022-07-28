import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { XyzTransitionGroup } from "@animxyz/react";

export default function SocialMediaSide() {
  return (
    <div className="width-[40px] left-10 bottom-0 right-auto z-50 hidden after:mx-auto after:mt-5 after:block after:h-[150px] after:w-1 after:bg-accentContrast after:dark:bg-white md:fixed 2xl:block">
      <XyzTransitionGroup appear className="item-group" xyz="stagger-2 narrow-100%">
        <ul className="flex flex-col space-y-6 align-middle text-accentContrast dark:text-white ">
          <li>
            <a target="_blank" href="https://github.com/adityahimaone">
              <BsGithub className="h-6 w-6 fill-current transition-all hover:scale-125" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/adityahimaone">
              <BsLinkedin className="h-6 w-6 fill-current transition-all hover:scale-125" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/adityahimaone">
              <BsTwitter className="h-6 w-6 fill-current transition-all hover:scale-125" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/adityahimaone">
              <BsInstagram className="h-6 w-6 fill-current transition-all hover:scale-125" />
            </a>
          </li>
        </ul>
      </XyzTransitionGroup>
    </div>
  );
}
