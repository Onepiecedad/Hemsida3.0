'use client';

import { AuroraBackground } from "@/components/backgrounds/AuroraBackground";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import PainPointSection from "@/components/sections/PainPointSection";
import AiSolutionsSection from "@/components/sections/AiSolutionsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IndustrySolutionsSection } from "@/components/sections/IndustrySolutionsSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <PageWrapper>
      <AuroraBackground />
      <HeroSection />
      <PainPointSection />
      <AiSolutionsSection />
      <HowItWorksSection />
      <IndustrySolutionsSection />
      <AboutSection />
    </PageWrapper>
  );
} 