import React from "react";
import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import SocialMediaSide from "../components/Shared/SocialMediaSide";
import ProjectSection from "../sections/ProjectSection";
import ContactSection from "../sections/ContactSection";

export default function Index() {
  return (
    <div className="relative">
      <SocialMediaSide />
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
