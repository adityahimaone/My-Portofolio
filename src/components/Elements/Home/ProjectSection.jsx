import React from "react";
import ProjectImage from "@/assets/images/project.jpg";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import PrimaryOutlineButton from "@/components/UI/Button/PrimaryOutlineButton";
import CardProjectSection from "./CardProjectSection";
import DailyCaloriesIMG from "@/assets/images/dailycalories.png";
import HospitalIMG from "@/assets/images/hospital.png";
import TrackerCaloriesIMG from "@/assets/images/trackercalories.png";

export default function ProjectSection() {
  const navigate = useNavigate();

  const handleGoPageProjects = () => {
    navigate("/projects");
  };

  const listPorjects = [
    {
      id: 1,
      title: "Tracker Calories API",
      description:
        "RESTful API for Track Calories using Harrist-Bennedict Equation, Clean Architecture & ORM.",
      image:
        "https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/Web-Service-What-is-REST-API-And-How-Does-it-Work-1024x576.png",
    },
    {
      id: 2,
      title: "Simple Calories Tracker APP",
      description: "A simple calories tracker using ReactJS & Graphql.",
      image: TrackerCaloriesIMG,
    },
    {
      id: 3,
      title: "Hospital Management System",
      description:
        "Application for Manage Hospital such as Booking, Management Employee, Management Schedule, & Management Patient.",
      image: HospitalIMG,
    },
    {
      id: 4,
      title: "Daily Calories APP",
      description:
        "Application for Tracking, Count Calories Food Consumed Every Day & Meal Plans integrate with Open API.",
      image: DailyCaloriesIMG,
    },
  ];

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
            {listPorjects.map((project) => (
              <CardProjectSection
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
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
