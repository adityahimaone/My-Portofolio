import React from "react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen container px-8 flex items-center mx-auto my-10 md:my-0"
    >
      <div className="mx-auto">
        <div className="flex px-5 md:justify-center items-center pb-5">
          <h1 className="text-4xl dark:text-white">Experience</h1>
        </div>
        <div>
          <div class="flex flex-col md:grid grid-cols-9 mx-auto md:px-2 text-white">
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80">
                <h5>Feb 2021 - Jul 2021</h5>
                <h3 class="font-semibold text-lg mb-1">Bangkit Academy</h3>
                <h6 className="text-black text-sm">
                  Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
                </h6>
                <p class="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-2 md:mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-accentContrast pointer-events-none rounded-t-full"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-2 md:mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-accentContrast pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
              </div>
              <div class="bg-accent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                <h5>Aug 2021 - Jan 2022</h5>
                <h3 class="font-semibold text-lg mb-1">
                  Fullstack Engineering
                </h3>
                <h6 className="text-black text-sm">
                  Kampus Merdeka By Alterra Academy
                </h6>
                <p class="leading-tight text-justify">
                  Fullstack Engineering student at Alterra Academy held by
                  Kampus Merdeka with Curriculum Backend Golang and Frontend
                  ReactJs
                </p>
              </div>
            </div>
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h5>Feb 2022 - Now</h5>
                <h3 class="font-semibold text-lg mb-1">Frontend Developer</h3>
                <h6 className="text-black text-sm">
                  Kampus Merdeka By Binar Academy
                </h6>
                <p class="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-2 md:mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-accentContrast rounded-b-full pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
