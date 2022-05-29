import React from "react";
import ProjectImage from "@/assets/images/project.jpg";

function CardProjectSection({ title, image, description }) {
  return (
    <div className="min-w-0 bg-accent rounded-lg drop-shadow-xl dark:bg-gray-800 relative hover:scale-[1.02] transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-full rounded-lg"></div>
      <img
        src={image ? image : ProjectImage}
        className="object-cover rounded-lg h-60 w-full"
        alt="img"
      />
      <div className="absolute bottom-2 inset-x-2 md:inset-x-5 text-white">
        <h1 className="text-xl ">{title ? title : "Title"}</h1>
        <h1 className="text-md">{description ? description : "description"}</h1>
      </div>
    </div>
  );
}

export default CardProjectSection;
