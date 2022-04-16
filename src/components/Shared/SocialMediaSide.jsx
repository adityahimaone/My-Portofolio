import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { XyzTransitionGroup } from "@animxyz/react";

export default function SocialMediaSide() {
  return (
    <div className="width-[40px] hidden xl:block md:fixed left-10 bottom-0 right-auto after:block after:h-[150px] after:w-1 after:bg-accentContrast after:dark:bg-white after:mx-auto after:mt-5">
      <XyzTransitionGroup
        appear
        className="item-group"
        xyz="stagger-2 narrow-100%"
      >
        <ul className="flex flex-col align-middle space-y-6 text-accentContrast dark:text-white ">
          <li>
            <BsGithub className="w-6 h-6 fill-current" />
          </li>
          <li>
            <BsLinkedin className="w-6 h-6 fill-current" />
          </li>
          <li>
            <BsTwitter className="w-6 h-6 fill-current" />
          </li>
          <li>
            <BsInstagram className="w-6 h-6 fill-current" />
          </li>
        </ul>
      </XyzTransitionGroup>
    </div>
  );
}
