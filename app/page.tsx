"use client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatsBar from "./components/StatsBar"
import ProblemSection from "./components/ProblemSection"
import LiesSection from "./components/LiesSection"
import SolutionSection from "./components/SolutionSection"
import ModulesShowcase from "./components/ModulesShowcase"
import TargetAudienceSection from "./components/TargetAudienceSection"
import MetodoGringo from "./components/MetodoGringo"
import Testimonials from "./components/Testimonials"
import Offer from "./components/Offer"
import FAQ from "./components/FAQ"
import Guarantee from "./components/Guarantee"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import FloatingCTA from "./components/FloatingCTA"

export default function FrostClubLanding() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#C5C5C5]">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <LiesSection />
      <SolutionSection />
      <ModulesShowcase />
      <TargetAudienceSection />
      <MetodoGringo />
      <Testimonials />
      <Offer />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  )
}
