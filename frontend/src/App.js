import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Support from "@/pages/Support";
import DeleteAccount from "@/pages/DeleteAccount";

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: GRAIN }}
      />
      <BrowserRouter>
        <ScrollManager />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <FeedbackWidget />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
