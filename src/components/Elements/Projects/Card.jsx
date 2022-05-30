import React from "react";

function CardProjects({ dev, title, desc, stack, emot, url }) {
  return (
    <a
      target="_blank"
      id="link-project"
      href={url}
      className="w-full rounded-lg border-2 border-accent dark:hover:border-white shadow-accent-glow p-8 flex justify-between transition-all hover:scale-[1.01]"
    >
      <div className="lg:w-2/3 space-y-1.5">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">{title ? title : "Title"}</h1>
          <div className="ml-2 px-1 py-0.5 text-white rounded-md font-semibold bg-accentContrast">
            {dev === "backend" ? "BE" : "FE"}
          </div>
        </div>
        <p className="text-md">{desc ? desc : "Description"}</p>
        <div className="flex space-x-3 pt-4 text-accentMiddle">
          {stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div className="hidden lg:w-1/3 md:flex justify-center items-center">
        <div>
          <span className="text-6xl">{emot ? emot : "💎"}</span>
        </div>
      </div>
    </a>
  );
}

export default CardProjects;
