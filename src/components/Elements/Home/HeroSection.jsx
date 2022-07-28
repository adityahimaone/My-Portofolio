import React from 'react';
import { XyzTransition } from '@animxyz/react';
import Scramble from 'react-scramble';
import { Player } from '@lottiefiles/react-lottie-player';
import HeroAnimate from '@/assets/animations/hero2.json';
import { CgScrollV } from 'react-icons/cg';
import ScrollSide from '@/components/UI/ScrollSide/ScrollSide';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll/modules';
import CircleGroup from '@/assets/images/circle2.png';
import Line1 from '@/assets/images/line1.png';
import PrimaryButton from '@/components/UI/Button/PrimaryButton';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="circle-bg relative min-h-screen overflow-hidden bg-gradient-to-br from-transparent via-accent/40 to-accentContrast/30 dark:via-accent/5  dark:to-accentContrast/10 dark:text-white"
    >
      <span className="absolute -left-28 -top-28 -z-10 aspect-square h-[350px] animate-pulse rounded-full bg-purple-400 opacity-[20%] blur-3xl dark:bg-blue dark:opacity-[100%]" />
      <span className="to-secondarys absolute -right-28 -bottom-28 -z-10 aspect-square h-[550px] rounded-full bg-gradient-to-br from-primary opacity-[15%] blur-3xl delay-700 duration-1000 dark:opacity-[100%]" />
      <div className="absolute -bottom-3 -right-5">
        <h1 className="font-monserat text-8xl text-white opacity-[5%] dark:text-accentContrast">
          ADITYA HIMAWAN
        </h1>
      </div>
      <ScrollSide />
      <div className="container mx-auto px-8">
        <div className="flex h-screen min-h-screen flex-col-reverse items-center justify-self-end md:flex-row">
          <div className="relative flex flex-1 items-center justify-center">
            <span className="animate-blob absolute top-10 -left-32 h-72 w-72 rounded-full bg-accentMiddle opacity-10 mix-blend-multiply blur-xl filter md:-bottom-20 md:left-10 "></span>
            <span className="animate-blob absolute bottom-10 -right-40 h-72 w-72 rounded-full bg-purple-600 opacity-10 mix-blend-multiply blur-xl filter md:right-0 "></span>
            <img
              src={CircleGroup}
              alt=""
              className="absolute top-48 right-10 h-auto w-32 opacity-60 dark:opacity-5 md:top-0 md:right-16"
            />
            <img
              src={Line1}
              alt=""
              className="absolute -bottom-20 left-20 h-auto w-20 rotate-[20deg] opacity-60"
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
                    action: '+',
                    type: 'all'
                  },
                  {
                    action: '-',
                    type: 'forward'
                  }
                ]}
              />
              <Fade bottom>
                <h1 className="text-accent-gradient py-2 font-nunito text-5xl font-extrabold md:text-4xl lg:text-5xl xl:text-7xl ">
                  Aditya Himawan.
                </h1>
              </Fade>

              <h2 className="text-2xl text-accentMiddle dark:text-accentContrast md:text-3xl">
                I'm a Junior Full Stack Developer.
              </h2>
              <p className="max-w-lg">
                I'm a final year student who likes programming. Currently,
                focused on frontend developers using ReactJS.
              </p>
              <div className="flex justify-start">
                <div className="z-10 flex space-x-2">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="group relative inline-block overflow-hidden rounded-lg border border-accentContrast px-8 py-3 focus:outline-none focus:ring"
                  >
                    <button id="goContactSection">
                      <span className="absolute inset-y-0 left-0 w-[0px] bg-accentContrast transition-all group-hover:w-full group-active:bg-accent"></span>
                      <p className="text-md relative text-center font-medium text-accentContrast transition-colors group-hover:text-white">
                        Contact Me!
                      </p>
                    </button>
                  </Link>
                  <a
                    id="goResumeLink"
                    target="_blank"
                    href="https://drive.google.com/file/d/1zq6mxvCL61efevw5qCNzTUXw4B1Gpjc2/view?usp=sharing"
                    className="rounded-lg border-2 border-accent bg-accent p-3 text-center text-white hover:bg-white hover:text-accent"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative items-center justify-center md:flex md:flex-1">
            <img
              src={Line1}
              alt=""
              className="absolute -top-20 right-10 h-auto w-20 rotate-[230deg] opacity-60"
            />
            <Fade bottom>
              <Player
                autoplay
                loop
                src={HeroAnimate}
                className="absolute -top-32 left-14 h-[280px] w-[280px] transition-all md:relative md:top-0 md:left-0 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
              ></Player>
            </Fade>
          </div>
        </div>
      </div>
      <CgScrollV className="absolute inset-x-0 bottom-5 mx-auto h-8 w-8 animate-bounce text-accentContrast" />
    </section>
  );
}
