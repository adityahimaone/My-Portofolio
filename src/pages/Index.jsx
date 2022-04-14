import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Index() {
  const ref = useRef();
  return (
    <>
      <section
        id="hero"
        className="relative bg-primary pt-[60px] bg-opacity-5 pb-28 overflow-hidden h-screen dark:bg-slate-900 dark:text-white"
      >
        <span className="absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
        <span className="absolute bg-gradient-to-br from-primary to-secondarys -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex justify-self-end items-center border h-screen max-h-screen flex-col md:flex-row">
            <div className="flex-1 border flex justify-center">
              <div className="space-y-4">
                <h1 className="font-nunito text-4xl">
                  Hello, I'm a Junior Fullstack Developer
                </h1>
                <p>Im pasosiante uin Frontend</p>
                <div className="glassmorphism-light dark:bg-black/20 dark:border-black/5 p-4">
                  <BsGithub className="inline mr-2 h-8 w-8" />
                  <BsLinkedin className="inline mr-2 h-8 w-8" />
                </div>
              </div>
            </div>
            <div className="flex-1 border"></div>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </>
  );
}
