import React from "react";
import ProjectImage from "../assets/images/project.jpg";
import Fade from "react-reveal/Fade";

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="min-h-screen container px-8 flex items-center mx-auto py-10 md:my-0"
    >
      <Fade bottom>
        <div className="mx-auto w-full">
          <div className="flex px-5 md:justify-center items-center pb-5">
            <h1 className="text-4xl dark:text-white">Projects</h1>
          </div>

          <div class="grid gap-6 md:grid-cols-2 2xl:mx-20">
            <div class="min-w-0 bg-accent rounded-xl shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 left-5 text-white">
                <h1 className="text-xl ">Name Project</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>
            <div class="min-w-0 bg-accent rounded-lg shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 left-5 text-white">
                <h1 className="text-xl ">Name Project</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>

            <div class="min-w-0 bg-accent rounded-lg shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 left-5 text-white">
                <h1 className="text-xl ">Name Project</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>

            <div class="min-w-0 bg-accent rounded-lg shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 left-5 text-white">
                <h1 className="text-xl ">Name Project</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}