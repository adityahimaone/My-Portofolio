import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import Scramble from "react-scramble";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import HeroAnimate from "../assets/animations/hero2.json";
import { CgScrollV } from "react-icons/cg";
import { Link, Button } from "react-scroll";

export default function Index() {
  const ref = useRef();
  return (
    <>
      <section
        id="hero"
        className="relative bg-gradient-to-br from-transparent via-accent/40 dark:via-accent/5 to-accentContrast/30 dark:to-accentContrast/10 pt-[60px]  pb-28 overflow-hidden h-screen  dark:text-white"
      >
        <div className="xl:block fixed inset-y-[50%] right-0 md:right-5 my-auto">
          <ul className="flex justify-center space-y-1 flex-col">
            <li>
              <Button
                activeClass="bg-accent w-3 h-3 ring-2 ring-offset-2"
                className="w-3 h-3 mx-2 bg-slate-500 rounded-full md:mx-0  hover:bg-accent hover:ring-2 hover:ring-offset-2 hover:ring-accentMiddle"
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
                activeClass="w-3 h-3 ring-2 ring-offset-2"
                className="w-3 h-3 mx-2 bg-slate-500 rounded-full md:mx-0  hover:bg-accent hover:ring-2 hover:ring-offset-2 hover:ring-accentMiddle"
                type="submit"
                to="experience"
                value=""
                spy={true}
                smooth={true}
                duration={500}
              ></Button>
            </li>
            <li>
              <Button
                activeClass="w-3 h-3 ring-2 ring-offset-2"
                className="w-3 h-3 mx-2 bg-slate-500 rounded-full md:mx-0  hover:bg-accent hover:ring-2 hover:ring-offset-2 hover:ring-accentMiddle"
                type="submit"
                to=""
                value=""
                spy={true}
                smooth={true}
                duration={500}
              ></Button>
            </li>
            <li>
              <Button
                activeClass="w-3 h-3 ring-2 ring-offset-2"
                className="w-3 h-3 mx-2 bg-slate-500 rounded-full md:mx-0  hover:bg-accent hover:ring-2 hover:ring-offset-2 hover:ring-accentMiddle"
                type="submit"
                to=""
                value=""
                spy={true}
                smooth={true}
                duration={500}
              ></Button>
            </li>
          </ul>
        </div>
        <span className="absolute bg-purple-400 dark:bg-blue -left-28 -top-28 rounded-full opacity-[20%] dark:opacity-[100%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
        <span className="absolute bg-gradient-to-br from-primary to-secondarys -right-28 -bottom-28 rounded-full opacity-[15%] dark:opacity-[100%] blur-3xl delay-700 duration-1000 aspect-square h-[550px] -z-10" />
        <div className="absolute -bottom-3 -right-5">
          <h1 className="text-8xl opacity-[5%] text-white dark:text-accentContrast font-monserat">
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
                  <h1 className="font-nunito font-extrabold text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-accent-gradient py-2">
                    My Name.
                  </h1>
                </XyzTransition>
                <h2 className="text-2xl md:text-3xl text-accentMiddle dark:text-accentContrast">
                  I'm a Full Stack Developer.
                </h2>
                <p className="max-w-lg">
                  I'm a software engineer specializing in building webiste, I'm
                  currently focused in frontend developer using ReactJS.
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

        <CgScrollV className="animate-bounce h-8 w-8 absolute inset-x-0 bottom-5 text-accentContrast mx-auto" />
      </section>
      <section
        id="experience"
        className="h-screen container px-8 flex items-center mx-auto"
      >
        <div className="mx-auto">
          <div className="flex px-5 md:justify-center items-center pt-20">
            <h1 className="text-4xl dark:text-white border-b-4 border-accentContrast -mx-0.5">
              Experience
            </h1>
          </div>
          <div>
            <div class="flex flex-col md:grid grid-cols-9 mx-auto px-2 text-white">
              <div class="flex flex-row-reverse md:contents">
                <div class="bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  <h5>5 Januari 2020</h5>
                  <h3 class="font-semibold text-lg mb-1">Bangkit Academy</h3>
                  <p class="leading-tight text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, quaerat?
                  </p>
                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-accentContrast pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
              </div>
              <div class="flex md:contents">
                <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-accentContrast pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
                <div class="bg-accent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  <h5>5 Januari 2020</h5>
                  <h3 class="font-semibold text-lg mb-1">
                    Fullstack Engineering
                  </h3>
                  <p class="leading-tight text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae, facilis.
                  </p>
                </div>
              </div>
              <div class="flex flex-row-reverse md:contents">
                <div class="bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  <h5>5 Januari 2020</h5>
                  <h3 class="font-semibold text-lg mb-1">Frontend Developer</h3>
                  <p class="leading-tight text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, quaerat?
                  </p>
                </div>
                <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div class="h-full w-6 flex items-center justify-center">
                    <div class="h-full w-1 bg-accentContrast pointer-events-none"></div>
                  </div>
                  <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
