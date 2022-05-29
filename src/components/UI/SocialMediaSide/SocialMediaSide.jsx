import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { XyzTransitionGroup } from "@animxyz/react";

export default function SocialMediaSide() {
  return (
    <div className="width-[40px] z-50 hidden xl:block md:fixed left-10 bottom-0 right-auto after:block after:h-[150px] after:w-1 after:bg-accentContrast after:dark:bg-white after:mx-auto after:mt-5">
      <XyzTransitionGroup
        appear
        className="item-group"
        xyz="stagger-2 narrow-100%"
      >
        <ul className="flex flex-col align-middle space-y-6 text-accentContrast dark:text-white ">
          <li>
            <a target="_blank" href="https://github.com/adityahimaone">
              <BsGithub className="w-6 h-6 fill-current hover:scale-125 transition-all" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/in/adityahimaone">
              <BsLinkedin className="w-6 h-6 fill-current hover:scale-125 transition-all" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/adityahimaone">
              <BsTwitter className="w-6 h-6 fill-current hover:scale-125 transition-all" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/adityahimaone">
              <BsInstagram className="w-6 h-6 fill-current hover:scale-125 transition-all" />
            </a>
          </li>
        </ul>
      </XyzTransitionGroup>
    </div>
  );
}
