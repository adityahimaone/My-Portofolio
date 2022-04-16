import React from "react";
import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import ScrollSide from "../components/Shared/ScrollSide";
import SocialMediaSide from "../components/Shared/SocialMediaSide";

export default function Index() {
  return (
    <div className="relative">
      <ScrollSide />
      <SocialMediaSide />
      <HeroSection id="hero" />
      <ExperienceSection id="experience" />
    </div>
  );
}
