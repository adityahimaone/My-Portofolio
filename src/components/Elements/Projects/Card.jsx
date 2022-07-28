import React from 'react';

function CardProjects({ dev, title, desc, stack, emot, url }) {
  return (
    <a
      target="_blank"
      id="link-project"
      href={url}
      className="flex w-full justify-between rounded-lg border-2 border-accent p-8 shadow-accent-glow transition-all hover:scale-[1.01] dark:hover:border-white"
    >
      <div className="space-y-1.5 lg:w-2/3">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">{title ? title : 'Title'}</h1>
          <div className="ml-2 rounded-md bg-accentContrast px-1 py-0.5 font-semibold text-white">
            {dev === 'backend' ? 'BE' : 'FE'}
          </div>
        </div>
        <p className="text-md">{desc ? desc : 'Description'}</p>
        <div className="flex space-x-3 pt-4 text-accentMiddle">
          {stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div className="hidden items-center justify-center md:flex lg:w-1/3">
        <div>
          <span className="text-6xl">{emot ? emot : '💎'}</span>
        </div>
      </div>
    </a>
  );
}

export default CardProjects;
