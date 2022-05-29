import React from "react";
import ProjectImage from "@/assets/images/project.jpg";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import PrimaryOutlineButton from "@/components/UI/Button/PrimaryOutlineButton";

export default function ProjectSection() {
  const navigate = useNavigate();

  const handleGoPageProjects = () => {
    navigate("/projects");
  };
  return (
    <section
      id="project"
      className="min-h-screen container px-8 flex items-center mx-auto py-20 md:my-0"
    >
      <Fade bottom>
        <div className="mx-auto w-full">
          <div className="flex md:justify-center items-center pb-5">
            <h1 className="text-4xl dark:text-white">Projects</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 2xl:mx-20">
            <div className="min-w-0 bg-accent rounded-xl shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 inset-x-2 md:inset-x-5 text-white">
                <h1 className="text-xl ">Hospital Management System</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>
            <div className="min-w-0 bg-accent rounded-lg shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 inset-x-2 md:inset-x-5 text-white">
                <h1 className="text-xl ">Daily Calorie Apps</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>

            <div className="min-w-0 bg-accent rounded-lg shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 inset-x-2 md:inset-x-5 text-white">
                <h1 className="text-xl ">Name Project</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>

            <div className="min-w-0 bg-accent rounded-lg shadow-lg dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
              <img
                src={ProjectImage}
                className="object-cover rounded-lg h-60 w-full"
                alt="img"
              />
              <div className="absolute bottom-2 inset-x-2 md:inset-x-5 text-white">
                <h1 className="text-xl ">Calories Tracker RESTful API</h1>
                <h1 className="text-md">Description</h1>
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <PrimaryOutlineButton onClick={handleGoPageProjects}>
              More
            </PrimaryOutlineButton>
          </div>
        </div>
      </Fade>
    </section>
  );
}
