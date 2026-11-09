import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/home/Manifesto";
import JobTracking from "@/components/home/JobTracking";
import Mapping from "@/components/home/Mapping";
import Weather from "@/components/home/Weather";
import ChemicalRegister from "@/components/home/ChemicalRegister";
import Machinery from "@/components/home/Machinery";
import Screenshots from "@/components/home/Screenshots";
import WhyChaser from "@/components/home/WhyChaser";
import BetaSection from "@/components/home/BetaSection";

const Home = () => {
  const { hash } = useLocation();

  usePageMeta(
    "Chaser — Behind every good operation",
    "Chaser helps farm owners, managers and contractors organise paddocks, jobs and people — spray, spread, seeding and harvest tracking, paddock mapping, six-model weather intelligence, a full chemical register with resistance warnings and low-stock quoting, machinery maintenance, and reporting across every job type. Built by Midwest Ag Supplies in Western Australia."
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
      <JobTracking />
      <Mapping />
      <Weather />
      <ChemicalRegister />
      <Machinery />
      <Screenshots />
      <WhyChaser />
      <BetaSection />
    </div>
  );
};

export default Home;
