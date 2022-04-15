import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import Scramble from "react-scramble";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import HeroAnimate from "../assets/animations/hero2.json";

export default function Index() {
  const ref = useRef();
  return (
    <>
      <section
        id="hero"
        className="relative bg-gradient-to-br from-transparent via-accent/40 dark:via-accent/5 to-accentContrast/30 dark:to-accentContrast/10 pt-[60px]  pb-28 overflow-hidden h-screen  dark:text-white"
      >
        <span className="absolute bg-purple-400 dark:bg-blue -left-28 -top-28 rounded-full opacity-[20%] dark:opacity-100 blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
        <span className="absolute bg-gradient-to-br from-primary to-secondarys -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl  delay-700 duration-1000 aspect-square h-[550px] -z-10" />
        <div className="absolute -bottom-5 -right-5">
          <h1 className="text-8xl opacity-[10%] text-white font-monserat">
            ADITYA HIMAWAN
          </h1>
        </div>
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
        <div className="container mx-auto px-8">
          <div className="flex justify-self-end items-center h-screen max-h-screen flex-col-reverse md:flex-row">
            <div className="flex-1 flex justify-center items-center relative">
              <span className="absolute top-10 md:-bottom-20 -left-32 md:left-10 w-72 h-72 bg-accentMiddle rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob "></span>
              <span className="absolute bottom-10 -right-40 md:right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob "></span>

              <div className="space-y-4">
                <Scramble
                  autoStart
                  text="Hello, my name is"
                  mouseEnterTrigger="restart"
                  noBreakSpace={false}
                  steps={[
                    {
                      roll: 5,
                      action: "+",
                      type: "all",
                    },
                    {
                      action: "-",
                      type: "forward",
                    },
                  ]}
                />
                <XyzTransition appear xyz="fade down-100% back-5">
                  <h1 className="font-nunito font-extrabold text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-accent-gradient">
                    Aditya Himawan.
                  </h1>
                </XyzTransition>
                <h2 className="text-2xl md:text-3xl text-accentMiddle dark:text-accentContrast">
                  I'm a Full Stack Developer.
                </h2>
                <p className="max-w-lg">
                  I'm a software engineer specializing in building webiste, I'm
                  Currently focused in frontend developer using ReactJS.
                </p>
                <div>
                  <a
                    class="relative rounded-lg inline-block px-10 py-3 overflow-hidden border border-accentMiddle group focus:outline-none focus:ring"
                    href="/download"
                  >
                    <span class="absolute inset-y-0 left-0 w-[0px] transition-all bg-accentMiddle group-hover:w-full group-active:bg-accent"></span>

                    <span class="relative text-sm font-medium text-accent transition-colors group-hover:text-white">
                      Hire Me!
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:flex-1 md:flex items-center justify-center relative">
              <Player
                autoplay
                loop
                src={HeroAnimate}
                className="absolute transition-all -top-32 md:top-0 left-14 md:left-0 md:relative h-[280px] w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
              ></Player>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </>
  );
}
