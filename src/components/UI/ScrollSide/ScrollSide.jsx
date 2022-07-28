import React from "react";
import { Button } from "react-scroll";

export default function ScrollSide() {
  return (
    <div className="fixed inset-y-[50%] right-0 z-50 my-auto md:right-5 xl:block">
      <ul className="mx-3 flex flex-col justify-center space-y-1 md:mx-0">
        <li>
          <Button
            activeClass="outline outline-offset-2 outline-accent"
            className="h-3 w-3 rounded-full bg-slate-500 hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
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
            className="h-3 w-3 rounded-full bg-slate-500  hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
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
            className="h-3 w-3 rounded-full bg-slate-500  hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
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
            className="h-3 w-3 rounded-full bg-slate-500  hover:bg-accent hover:outline hover:outline-offset-2 hover:outline-accent"
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
