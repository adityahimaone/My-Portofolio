import React from "react";
import Fade from "react-reveal/Fade";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container px-8 flex items-center mx-auto py-20 md:my-0"
    >
      <Fade bottom>
        <div className="mx-auto bg-gradient-to-b from-transparent to-accent/10 p-4 rounded-lg">
          <div className="flex md:justify-center items-center pb-5">
            <h1 className="text-4xl dark:text-white">Experience</h1>
          </div>
          <div>
            <div className="flex flex-col md:grid grid-cols-9 mx-auto md:px-8 text-white">
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-accent w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md hover:scale-[1.03] transition-all duration-300">
                  <h5>Feb 2021 - Jul 2021</h5>
                  <h3 className="font-semibold text-lg mb-1">
                    Bangkit Academy (Cloud Computing)
                  </h3>
                  <h6 className="text-black text-sm">
                    Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
                  </h6>
                  <p className="leading-tight text-justify">
                    Make an simple API and integrate with Firebase and deploy in
                    Google Cloud
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-2 md:mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-accentContrast pointer-events-none rounded-t-full"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
              </div>
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-2 md:mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-accentContrast pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
                <div className="bg-accent w-full col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md hover:scale-[1.03] transition-all duration-300">
                  <h5>Aug 2021 - Jan 2022</h5>
                  <h3 className="font-semibold text-lg mb-1">
                    Fullstack Engineering
                  </h3>
                  <h6 className="text-black text-sm">
                    Kampus Merdeka By Alterra Academy
                  </h6>
                  <p className="leading-tight text-justify">
                    Make BE RESTful API with Golang and FE APP with ReactJS,
                    like app Calories Tracker & Hospital Management System
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-accent w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md hover:scale-[1.03] transition-all duration-300">
                  <h5>Feb 2022 - Now</h5>
                  <h3 className="font-semibold text-lg mb-1">
                    Frontend Developer
                  </h3>
                  <h6 className="text-black text-sm">
                    Kampus Merdeka By Binar Academy
                  </h6>
                  <p className="leading-tight text-justify">
                    Learning Frontend Stack using NodeJS EJS, ReactJS & NextJS,
                    Make a FE APP Car Booking
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-2 md:mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-accentContrast rounded-b-full pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}