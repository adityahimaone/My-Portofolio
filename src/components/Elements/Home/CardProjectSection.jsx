import React from 'react';
import ProjectImage from '@/assets/images/project.jpg';

function CardProjectSection({ title, image, description, url }) {
  return (
    <a
      target="_blank"
      href={url}
      className="dark:bg-gray-800 relative min-w-0 rounded-lg bg-accent drop-shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-b from-transparent to-black"></div>
      <img
        src={image ? image : ProjectImage}
        className="h-60 w-full rounded-lg object-cover"
        alt="img"
      />
      <div className="absolute inset-x-2 bottom-2 text-white md:inset-x-5">
        <h1 className="text-xl ">{title ? title : 'Title'}</h1>
        <h1 className="text-md">{description ? description : 'description'}</h1>
      </div>
    </a>
  );
}

export default CardProjectSection;
