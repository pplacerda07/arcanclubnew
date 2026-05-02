"use client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatsBar from "./components/StatsBar"
import ProblemSection from "./components/ProblemSection"
import SolutionSection from "./components/SolutionSection"
import ModulesShowcase from "./components/ModulesShowcase"
import ProductSection from "./components/ProductSection"
import MetodoGringo from "./components/MetodoGringo"
import Testimonials from "./components/Testimonials"
import Offer from "./components/Offer"
import FAQ from "./components/FAQ"
import Guarantee from "./components/Guarantee"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import FloatingCTA from "./components/FloatingCTA"

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

export default function ArkanClubLanding() {
  return (
    <>
      {/* Facebook Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1243900850675680');
            fbq('track', 'PageView');
          `,
        }}
      />

      <div className="min-h-screen bg-[#121212] text-[#C5C5C5]">
        <Navbar />
        <Hero />
        <StatsBar />
        <ProblemSection />
        <SolutionSection />
        <ModulesShowcase />
        <ProductSection />
        <MetodoGringo />
        <Testimonials />
        <Offer />
        <FAQ />
        <Guarantee />
        <FinalCTA />
        <Footer />
        <FloatingCTA />
      </div>
    </>
  )
}
