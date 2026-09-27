import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/home/Manifesto";
import Weather from "@/components/home/Weather";
import ChemicalRegister from "@/components/home/ChemicalRegister";
import Screenshots from "@/components/home/Screenshots";
import WhyChaser from "@/components/home/WhyChaser";
import BetaSection from "@/components/home/BetaSection";

const Home = () => {
  const { hash } = useLocation();

  usePageMeta(
    "Chaser — Behind every good operation",
    "Chaser helps farm owners, managers and contractors organise paddocks, jobs and people — with six-model weather intelligence, a full chemical register with resistance warnings and low-stock quoting, and built-in spray rate, Delta-T, tank mix and nozzle calculators. Built by Midwest Ag Supplies in Western Australia."
  );

  useEffect(() => {
    if (hash) {
      const t = setTimeout(
        () => window.__lenis?.scrollTo(hash, { offset: -90 }),
        400
      );
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <div data-testid="home-page">
      <Hero />
      <Marquee />
      <Manifesto />
      <Weather />
      <ChemicalRegister />
      <Screenshots />
      <WhyChaser />
      <BetaSection />
    </div>
  );
};

export default Home;
