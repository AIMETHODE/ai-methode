import { AboutTarik } from "@/components/landing/AboutTarik";
import { BottomHero } from "@/components/landing/BottomHero";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { ForWhom } from "@/components/landing/ForWhom";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { MediaPlaceholder } from "@/components/landing/MediaPlaceholder";
import { MidCta } from "@/components/landing/MidCta";
import { Program } from "@/components/landing/Program";
import { Roadmap } from "@/components/landing/Roadmap";
import { TestimonialsAbsolventen } from "@/components/landing/TestimonialsAbsolventen";
import { WhatIsMethod } from "@/components/landing/WhatIsMethod";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Header />
      <main className="relative flex-1">
        <Hero />
        <WhatIsMethod />
        <TestimonialsAbsolventen />
        <Program />
        <ForWhom />
        <MidCta />
        <Roadmap />
        <MidCta />
        <AboutTarik />
        <MediaPlaceholder />
        <FAQ />
        <BottomHero />
      </main>
      <Footer />
    </div>
  );
}
