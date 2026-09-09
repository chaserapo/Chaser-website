import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const EASE = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const PhoneMock = () => (
  <div className="relative aspect-[9/19] w-[270px] overflow-hidden rounded-[2.8rem] border-[10px] border-ink bg-sand shadow-2xl sm:w-[300px]">
    <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
    <div className="flex h-full flex-col p-4 pt-11">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/chaser-icon.jpeg" alt="" className="h-7 w-7 rounded-md" />
          <span className="font-display text-sm font-extrabold text-pine">Chaser</span>
        </div>
        <span className="rounded-full bg-gold/20 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-goldhover">
          Beta
        </span>
      </div>
      <p className="mt-5 font-display text-lg font-bold leading-tight text-ink">
        Mullewa HQ
      </p>
      <p className="text-xs text-sage">Tuesday · 3 jobs due today</p>

      <div className="mt-4 space-y-2.5">
        {[
          { name: "Paddock 14", crop: "Lupins · Seeding", status: "In progress", tone: "bg-pine text-cream" },
          { name: "North 40", crop: "Wheat · Spraying", status: "Scheduled", tone: "bg-gold/20 text-goldhover" },
          { name: "River Flat", crop: "Barley · Spreading", status: "Done", tone: "bg-sand text-sage" },
        ].map((c) => (
          <div key={c.name} className="rounded-xl border border-creamline bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-ink">{c.name}</p>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.tone}`}>
                {c.status}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-sage">{c.crop}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-3 flex-1 overflow-hidden rounded-xl border border-creamline bg-pine/5">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#1E3A2B22 1px, transparent 1px), linear-gradient(90deg, #1E3A2B22 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute left-[30%] top-[35%] h-3 w-3 rounded-full border-2 border-white bg-gold shadow" />
        <div className="absolute left-[62%] top-[60%] h-3 w-3 rounded-full border-2 border-white bg-pine shadow" />
        <p className="absolute bottom-2 left-3 font-mono text-[9px] uppercase tracking-wider text-sage">
          3 paddocks active
        </p>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const scrollToBeta = () => window.__lenis?.scrollTo("#beta", { offset: -90 });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(1000px 500px at 85% 10%, #E8D8B655, transparent), radial-gradient(800px 500px at 0% 100%, #1E3A2B0D, transparent)",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-2 lg:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5"
            data-testid="hero-beta-badge"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-goldhover">
              Now in beta · Western Australia
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-4xl font-black leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.15}>Behind every</MaskedLine>
            <MaskedLine delay={0.3} className="text-pine">
              good operation.
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-sage"
            data-testid="hero-description"
          >
            Chaser helps farming operations organise paddocks, jobs, people and
            day-to-day work from one simple app.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-join-beta-button"
              onClick={scrollToBeta}
              className="group inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-pinedark"
            >
              Join the Beta
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <Link
              to="/support"
              data-testid="hero-contact-us-button"
              className="inline-flex items-center gap-2 rounded-full border border-pine/25 bg-white/60 px-7 py-3.5 text-sm font-semibold text-pine transition-colors duration-200 hover:border-pine/50 hover:bg-white"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-sage"
          >
            Built by Midwest Ag Supplies · For real ag operations
          </motion.p>
        </div>

        <div
          className="relative flex justify-center lg:justify-end"
          style={{ perspective: 1200 }}
          onMouseMove={onMove}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
        >
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: EASE }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            data-testid="hero-phone-mockup"
          >
            <PhoneMock />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
            className="absolute -left-2 bottom-16 hidden sm:block lg:-left-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2.5 rounded-full border border-creamline bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur"
              data-testid="hero-stats-pill"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-pine" />
              <span className="text-xs font-semibold text-ink">
                12 jobs scheduled this week
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
