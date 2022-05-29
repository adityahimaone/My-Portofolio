import React from "react";
import CardProjects from "@/components/Elements/Projects/Card";
import { projectList } from "@/utils/constants/listproject";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div className="pt-16 container min-h-screen max-w-screen-lg mx-auto px-8 dark:text-white">
      <Fade bottom>
        <div>
          <h1 className="text-3xl font-bold py-4">Projects</h1>
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
            className="relative rounded-lg inline-block px-10 py-3 overflow-hidden shadow-accent-glow border-2 border-accentContrast hover:bg-accent group focus:outline-none focus:ring"
          >
            More Projects
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
