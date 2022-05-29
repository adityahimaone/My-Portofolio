import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Pattren1 from "@/assets/images/pattren1.png";
import Pattren2 from "@/assets/images/pattren2.png";
import Pattren3 from "@/assets/images/pattren3.png";
import Planet from "@/assets/images/planet.png";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen container px-8 flex items-center mx-auto py-20 md:my-0 relative"
    >
      {/* <img
        src={Pattren1}
        alt=""
        className="absolute w-12 h-auto top-16 right-0 opacity-50 -z-[10]"
      /> */}
      <img
        src={Pattren2}
        alt=""
        className="absolute bottom-0 md:left-32 w-48 h-auto opacity-50 -z-[10]"
      />
      <img
        src={Pattren3}
        alt=""
        className="absolute top-0 -left-10 lg:left-40 w-28 lg:w-44 h-auto opacity-40 -z-[10]"
      />
      <img
        src={Planet}
        alt=""
        className="absolute hidden md:block top-32 right-32 w-52 h-auto opacity-50 -z-[10]"
      />
      <div className="mx-auto w-full bg-gradient-to-b from-transparent to-accent/10 rounded-lg px-2 md:py-48">
        <div className="flex md:justify-center pb-5">
          <h1 className="text-4xl dark:text-white">Reach Me</h1>
        </div>
        <div className="max-w-xl mx-auto">
          <Fade bottom>
            <p className="text-lg text-justify leading-normal dark:text-white">
              Hello, how are you 👋, I'm usually called adit, I'm currently
              working on and exploring frontend developer. I enjoy using
              Tailwindcss and ReactJS. I can be contacted via the platform
              below.
            </p>
          </Fade>

          <Flip top>
            <div className="my-5 flex space-x-5">
              <a
                href="https://github.com/adityahimaone"
                target="_blank"
                className="group relative"
              >
                <BsGithub className="text-3xl dark:text-white group-hover:text-accentMiddle hover:scale-110 transition-all duration-200" />
                <p className="absolute hidden -inset-x-6 -bottom-10 bg-accent text-white text-center py-1 rounded-md group-hover:block transition-all duration-300">
                  Github
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/adityahimaone/"
                target="_blank"
                className="group relative"
              >
                <BsLinkedin className="text-3xl dark:text-white group-hover:text-accentMiddle hover:scale-110 transition-all duration-200" />
                <p className="absolute hidden -inset-x-6 -bottom-10 bg-accent text-white text-center py-1 rounded-md group-hover:block transition-all duration-300">
                  Linkedin
                </p>
              </a>
              <a href="http://" target="_blank" className="group relative">
                <BsTwitter className="text-3xl dark:text-white group-hover:text-accentMiddle hover:scale-110 transition-all duration-200" />
                <p className="absolute hidden -inset-x-6 -bottom-10 bg-accent text-white text-center py-1 rounded-md group-hover:block transition-all duration-300">
                  Twitter
                </p>
              </a>
              <a href="http://" target="_blank" className="group relative">
                <BsInstagram className="text-3xl dark:text-white group-hover:text-accentMiddle hover:scale-110 transition-all duration-200" />
                <p className="absolute hidden -inset-x-6 -bottom-10 bg-accent text-white text-center py-1 rounded-md group-hover:block transition-all duration-300">
                  Instagram
                </p>
              </a>
            </div>
          </Flip>
        </div>
      </div>
    </section>
  );
}
