import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPinned, ClipboardList, Users, ImagePlus } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const TABS = [
  {
    id: "map",
    label: "Paddock Map",
    desc: "Boundaries and paddock status at a glance, wherever you're standing.",
    icon: MapPinned,
    testid: "screenshot-tab-map",
  },
  {
    id: "jobs",
    label: "Job Board",
    desc: "Plan, assign and tick off work as it gets done across the farm.",
    icon: ClipboardList,
    testid: "screenshot-tab-jobs",
  },
  {
    id: "team",
    label: "Team View",
    desc: "Who's doing what and where — without the phone calls.",
    icon: Users,
    testid: "screenshot-tab-team",
  },
];

const Screenshots = () => {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section id="app" className="bg-sand/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Inside the app
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Simple screens. Serious work.
          </h2>
        </motion.div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-3">
            {TABS.map((t) => {
              const Icon = t.icon;
              const selected = active.id === t.id;
              return (
                <button
                  key={t.id}
                  data-testid={t.testid}
                  onClick={() => setActive(t)}
                  className={`w-full rounded-2xl border p-5 text-left transition-colors duration-200 ${
                    selected
                      ? "border-pine bg-white shadow-md"
                      : "border-creamline bg-white/50 hover:border-pine/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 ${
                        selected ? "bg-pine text-cream" : "bg-sand text-pine"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-display text-lg font-bold text-ink">{t.label}</p>
                  </div>
                  <p className="mt-2 pl-[52px] text-sm leading-relaxed text-sage">
                    {t.desc}
                  </p>
                </button>
              );
            })}
            <p className="pt-2 text-xs text-sage/70">
              Placeholder frames — real App Store screenshots drop in here before launch.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-[9/19] w-[270px] overflow-hidden rounded-[2.8rem] border-[10px] border-ink bg-white shadow-2xl sm:w-[300px]">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="flex h-full flex-col items-center justify-center p-6 pt-12"
                  data-testid="screenshot-placeholder"
                >
                  <div className="flex w-full flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-pine/30 bg-sand/70 p-6 text-center">
                    <img
                      src="/assets/chaser-icon.jpeg"
                      alt=""
                      className="h-14 w-14 rounded-2xl shadow-sm"
                    />
                    <active.icon className="mt-5 h-7 w-7 text-gold" />
                    <p className="mt-3 font-display text-base font-bold text-pine">
                      {active.label}
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-sage">
                      <ImagePlus className="h-3.5 w-3.5" />
                      Screenshot placeholder
                    </p>
                    <p className="mt-1 text-[11px] text-sage/70">
                      Replace with your App Store screenshot (1290 × 2796)
                    </p>
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
                    Chaser · iOS & Android
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
