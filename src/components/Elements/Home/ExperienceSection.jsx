import React from 'react';
import Fade from 'react-reveal/Fade';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container mx-auto flex items-center px-8 py-20 md:my-0"
    >
      <Fade bottom>
        <div className="mx-auto rounded-lg bg-gradient-to-b from-transparent to-accent/10 p-4">
          <div className="flex items-center pb-5 md:justify-center">
            <h1 className="text-4xl dark:text-white">Experience</h1>
          </div>
          <div>
            <div className="mx-auto flex grid-cols-9 flex-col text-white md:grid md:px-8">
              <div className="flex flex-row-reverse md:contents">
                <div className="col-start-1 col-end-5 my-4 ml-auto w-full rounded-xl bg-accent p-4 shadow-md transition-all duration-300 hover:scale-[1.03]">
                  <h5>Feb 2021 - Jul 2021</h5>
                  <h3 className="mb-1 text-lg font-semibold">
                    Bangkit Academy (Cloud Computing)
                  </h3>
                  <h6 className="text-sm text-black">
                    Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
                  </h6>
                  <p className="text-justify leading-tight">
                    Make an simple API and integrate with Firebase and deploy in
                    Google Cloud
                  </p>
                </div>
                <div className="relative col-start-5 col-end-6 mr-2 md:mx-auto md:mr-10">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 rounded-t-full bg-accentContrast"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-accent shadow"></div>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-2 md:mx-auto md:mr-10">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-accentContrast"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-accent shadow"></div>
                </div>
                <div className="col-start-6 col-end-10 my-4 mr-auto w-full rounded-xl bg-accent p-4 shadow-md transition-all duration-300 hover:scale-[1.03]">
                  <h5>Aug 2021 - Jan 2022</h5>
                  <h3 className="mb-1 text-lg font-semibold">
                    Fullstack Engineering
                  </h3>
                  <h6 className="text-sm text-black">
                    Kampus Merdeka By Alterra Academy
                  </h6>
                  <p className="text-justify leading-tight">
                    Make BE RESTful API with Golang and FE APP with ReactJS,
                    like app Calories Tracker & Hospital Management System
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse md:contents">
                <div className="col-start-1 col-end-5 my-4 ml-auto w-full rounded-xl bg-accent p-4 shadow-md transition-all duration-300 hover:scale-[1.03]">
                  <h5>Feb 2022 - Jul 2022</h5>
                  <h3 className="mb-1 text-lg font-semibold">
                    Frontend Developer
                  </h3>
                  <h6 className="text-sm text-black">
                    Kampus Merdeka By Binar Academy
                  </h6>
                  <p className="text-justify leading-tight">
                    Learning Frontend Stack using NodeJS EJS, ReactJS & NextJS,
                    Make a FE APP Car Booking
                  </p>
                </div>
                <div className="relative col-start-5 col-end-6 mr-2 md:mx-auto md:mr-10">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 rounded-b-full bg-accentContrast"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-accent shadow"></div>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-2 md:mx-auto md:mr-10">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-accentContrast"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-accent shadow"></div>
                </div>
                <div className="col-start-6 col-end-10 my-4 mr-auto w-full rounded-xl bg-accent p-4 shadow-md transition-all duration-300 hover:scale-[1.03]">
                  <h5>Jun 2022 - Present</h5>
                  <h3 className="mb-1 text-lg font-semibold">
                    Frontend Developer (Fulltime)
                  </h3>
                  <h6 className="text-sm text-black">Unzypsoft</h6>
                  <p className="text-justify leading-tight">
                    Slicing from mockup to web page components, Responsible to
                    fetching data from API and render in FE APP using ReactJS,
                    NextJS and Typescript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
