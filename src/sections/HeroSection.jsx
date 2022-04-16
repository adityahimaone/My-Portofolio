import React from "react";
import { XyzTransition } from "@animxyz/react";
import Scramble from "react-scramble";
import { Player } from "@lottiefiles/react-lottie-player";
import HeroAnimate from "../assets/animations/hero2.json";
import { CgScrollV } from "react-icons/cg";
import ScrollSide from "../components/Shared/ScrollSide";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll/modules";
import CircleGroup from "../assets/images/circle2.png";
import Line1 from "../assets/images/line1.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative circle-bg bg-gradient-to-br from-transparent via-accent/40 dark:via-accent/5 to-accentContrast/30 dark:to-accentContrast/10 pt-[60px]  pb-28 overflow-hidden h-screen  dark:text-white"
    >
      <span className="absolute bg-purple-400 dark:bg-blue -left-28 -top-28 rounded-full opacity-[20%] dark:opacity-[100%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-gradient-to-br from-primary to-secondarys -right-28 -bottom-28 rounded-full opacity-[15%] dark:opacity-[100%] blur-3xl delay-700 duration-1000 aspect-square h-[550px] -z-10" />
      <div className="absolute -bottom-3 -right-5">
        <h1 className="text-8xl opacity-[5%] text-white dark:text-accentContrast font-monserat">
          ADITYA HIMAWAN
        </h1>
      </div>
      <ScrollSide />
      <div className="container mx-auto px-8">
        <div className="flex justify-self-end items-center h-screen min-h-screen flex-col-reverse md:flex-row">
          <div className="flex-1 flex justify-center items-center relative">
            <span className="absolute top-10 md:-bottom-20 -left-32 md:left-10 w-72 h-72 bg-accentMiddle rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob "></span>
            <span className="absolute bottom-10 -right-40 md:right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob "></span>
            <img
              src={CircleGroup}
              alt=""
              className="w-32 h-auto absolute top-48 md:top-0 opacity-60 dark:opacity-5 right-10 md:right-16"
            />
            <img
              src={Line1}
              alt=""
              className="absolute w-20 h-auto -bottom-20 left-20 opacity-60 rotate-[20deg]"
            />
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
              <Fade bottom>
                <h1 className="font-nunito font-extrabold text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-accent-gradient py-2 ">
                  Aditya Himawan.
                </h1>
              </Fade>

              <h2 className="text-2xl md:text-3xl text-accentMiddle dark:text-accentContrast">
                I'm a Junior Full Stack Developer.
              </h2>
              <p className="max-w-lg">
                I'm a final year student who likes programming, Currently
                focused in frontend developer using ReactJS.
              </p>
              <div>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  class="relative rounded-lg inline-block px-10 py-3 overflow-hidden border border-accentContrast group focus:outline-none focus:ring"
                >
                  <span class="absolute inset-y-0 left-0 w-[0px] transition-all bg-accentContrast group-hover:w-full group-active:bg-accent"></span>

                  <span class="relative text-sm font-medium text-accentContrast transition-colors group-hover:text-white">
                    Contact Me!
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:flex items-center justify-center relative">
            <img
              src={Line1}
              alt=""
              className="absolute w-20 h-auto -top-20 right-10 opacity-60 rotate-[230deg]"
            />
            <Fade bottom>
              <Player
                autoplay
                loop
                src={HeroAnimate}
                className="absolute transition-all -top-32 md:top-0 left-14 md:left-0 md:relative h-[280px] w-[280px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
              ></Player>
            </Fade>
          </div>
        </div>
      </div>
      <CgScrollV className="animate-bounce h-8 w-8 absolute inset-x-0 bottom-5 text-accentContrast mx-auto" />
    </section>
  );
}
