import React from "react";
import { Button } from "react-scroll";

export default function ScrollSide() {
  return (
    <div className="xl:block fixed inset-y-[50%] right-0 md:right-5 my-auto z-50">
      <ul className="flex justify-center space-y-1 flex-col mx-3 md:mx-0">
        <li>
          <Button
            activeClass="outline outline-offset-2 outline-accent"
            className="w-3 h-3 bg-slate-500 rounded-full hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
            type="submit"
            to="hero"
            value=""
            spy={true}
            smooth={true}
            duration={500}
          ></Button>
        </li>
        <li>
          <Button
            activeClass="outline outline-offset-2 outline-accent"
            className="w-3 h-3 bg-slate-500 rounded-full  hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
            type="submit"
            to="experience"
            value=""
            // offset={-40}
            spy={true}
            smooth={true}
            duration={500}
          ></Button>
        </li>
        <li>
          <Button
            activeClass="outline outline-offset-2 outline-accent"
            className="w-3 h-3 bg-slate-500 rounded-full  hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
            type="submit"
            to="project"
            value=""
            // offset={-40}
            spy={true}
            smooth={true}
            duration={500}
          ></Button>
        </li>
        <li>
          <Button
            activeClass="outline outline-offset-2 outline-accent"
            className="w-3 h-3 bg-slate-500 rounded-full  hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
            type="submit"
            to="contact"
            value=""
            spy={true}
            smooth={true}
            duration={500}
          ></Button>
        </li>
      </ul>
    </div>
  );
}