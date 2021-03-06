import React from 'react';
import ProjectImage from '@/assets/images/project.jpg';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';
import PrimaryOutlineButton from '@/components/UI/Button/PrimaryOutlineButton';
import CardProjectSection from './CardProjectSection';
import DailyCaloriesIMG from '@/assets/images/dailycalories.png';
import HospitalIMG from '@/assets/images/hospital.png';
import TrackerCaloriesIMG from '@/assets/images/trackercalories.png';

export default function ProjectSection() {
  const navigate = useNavigate();

  const handleGoPageProjects = () => {
    navigate('/projects');
  };

  const listPorjects = [
    {
      id: 1,
      title: 'Tracker Calories API',
      description:
        'RESTful API for Track Calories using Harrist-Bennedict Equation, Clean Architecture & ORM.',
      image:
        'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/Web-Service-What-is-REST-API-And-How-Does-it-Work-1024x576.png',
      url: 'https://github.com/adityahimaone/daily-tracker-calories-api'
    },
    {
      id: 2,
      title: 'Simple Calories Tracker APP',
      description: 'A simple calories tracker using ReactJS & Graphql.',
      image: TrackerCaloriesIMG,
      url: 'https://github.com/adityahimaone/FE-CaloriesTracker'
    },
    {
      id: 3,
      title: 'Hospital Management System',
      description:
        'Application for Manage Hospital such as Booking, Management Employee, Management Schedule, & Management Patient.',
      image: HospitalIMG,
      url: 'https://github.com/adityahimaone/FE-Hospital-Management-System'
    },
    {
      id: 4,
      title: 'Daily Calories APP',
      description:
        'Application for Tracking, Count Calories Food Consumed Every Day & Meal Plans integrate with Open API.',
      image: DailyCaloriesIMG,
      url: 'https://github.com/adityahimaone/Daily-Calorie-Apps'
    }
  ];

  return (
    <section
      id="project"
      className="container mx-auto flex min-h-screen items-center px-8 py-20 md:my-0"
    >
      <Fade bottom>
        <div className="mx-auto w-full">
          <div className="flex items-center pb-5 md:justify-center">
            <h1 className="text-4xl dark:text-white">Projects</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 2xl:mx-20">
            {listPorjects.map(project => (
              <CardProjectSection
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
          <div className="my-5 text-center">
            <PrimaryOutlineButton onClick={handleGoPageProjects}>
              More
            </PrimaryOutlineButton>
          </div>
        </div>
      </Fade>
    </section>
  );
}
