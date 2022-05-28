import React from "react";
import SocialMediaSide from "@/components/UI/SocialMediaSide/SocialMediaSide";
import HeroSection from "@/components/Elements/Home/HeroSection";
import ExperienceSection from "@/components/Elements/Home/ExperienceSection";
import ProjectSection from "@/components/Elements/Home/ProjectSection";
import ContactSection from "@/components/Elements/Home/ContactSection";

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
