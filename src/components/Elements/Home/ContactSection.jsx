import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Pattren1 from '@/assets/images/pattren1.png';
import Pattren2 from '@/assets/images/pattren2.png';
import Pattren3 from '@/assets/images/pattren3.png';
import Planet from '@/assets/images/planet.png';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container relative mx-auto flex min-h-screen items-center px-8 py-20 md:my-0"
    >
      {/* <img
        src={Pattren1}
        alt=""
        className="absolute w-12 h-auto top-16 right-0 opacity-50 -z-[10]"
      /> */}
      <img
        src={Pattren2}
        alt="pattren3"
        className="absolute bottom-0 -z-[10] h-auto w-48 opacity-50 md:left-32"
      />
      <img
        src={Pattren3}
        alt="pattren3"
        className="absolute top-0 -left-10 -z-[10] h-auto w-28 opacity-40 lg:left-40 lg:w-44"
      />
      <img
        src={Planet}
        alt="planet-img"
        className="absolute top-32 right-32 -z-[10] hidden h-auto w-52 opacity-50 md:block"
      />
      <div className="mx-auto w-full rounded-lg bg-gradient-to-b from-transparent to-accent/10 px-2 md:py-48">
        <div className="flex pb-5 md:justify-center">
          <h1 className="text-4xl dark:text-white">Reach Me</h1>
        </div>
        <div className="mx-auto max-w-xl">
          <Fade bottom>
            <p className="text-justify text-lg leading-normal dark:text-white">
              Hello, how are you 👋. I'm usually called Adit. I'm currently
              working on and exploring frontend developers. I enjoy using
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
                <BsGithub className="text-3xl transition-all duration-200 hover:scale-110 group-hover:text-accentMiddle dark:text-white" />
                <p className="absolute -inset-x-6 -bottom-10 hidden rounded-md bg-accent py-1 text-center text-white transition-all duration-300 group-hover:block">
                  Github
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/adityahimaone/"
                target="_blank"
                className="group relative"
              >
                <BsLinkedin className="text-3xl transition-all duration-200 hover:scale-110 group-hover:text-accentMiddle dark:text-white" />
                <p className="absolute -inset-x-6 -bottom-10 hidden rounded-md bg-accent py-1 text-center text-white transition-all duration-300 group-hover:block">
                  Linkedin
                </p>
              </a>
              <a
                href="http://www.twitter.com/adityahimaone"
                target="_blank"
                className="group relative"
              >
                <BsTwitter className="text-3xl transition-all duration-200 hover:scale-110 group-hover:text-accentMiddle dark:text-white" />
                <p className="absolute -inset-x-6 -bottom-10 hidden rounded-md bg-accent py-1 text-center text-white transition-all duration-300 group-hover:block">
                  Twitter
                </p>
              </a>
              <a
                href="http://www.instagram.com/adityahimaone"
                target="_blank"
                className="group relative"
              >
                <BsInstagram className="text-3xl transition-all duration-200 hover:scale-110 group-hover:text-accentMiddle dark:text-white" />
                <p className="absolute -inset-x-6 -bottom-10 hidden rounded-md bg-accent py-1 text-center text-white transition-all duration-300 group-hover:block">
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
