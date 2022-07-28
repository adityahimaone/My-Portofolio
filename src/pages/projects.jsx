import React from "react";
import CardProjects from "@/components/Elements/Projects/Card";
import { projectList } from "@/utils/constants/listproject";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div className="container mx-auto min-h-screen max-w-screen-lg px-8 pt-16 dark:text-white">
      <Fade bottom>
        <div>
          <h1 className="py-4 text-3xl font-bold">Projects</h1>
        </div>
        <div className="space-y-5">
          {projectList.reverse().map((item) => (
            <CardProjects
              key={item.id}
              dev={item.dev}
              title={item.title}
              desc={item.desc}
              stack={item.stack}
              emot={item.emot}
              url={item.url}
            />
          ))}
        </div>
        <div className="flex justify-center py-8">
          <a
            target="_blank"
            href="https://github.com/adityahimaone"
            className="group relative inline-block overflow-hidden rounded-lg border-2 border-accentContrast px-10 py-3 shadow-accent-glow hover:bg-accent focus:outline-none focus:ring"
          >
            More Projects
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
