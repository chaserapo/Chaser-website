import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardList, QrCode, Tractor, Calculator } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const TABS = [
  {
    id: "jobs",
    label: "Spray Jobs",
    desc: "Plan, start and track spray jobs across every paddock — planned, in progress, done.",
    icon: ClipboardList,
    img: "/assets/screens/spray-jobs.jpg",
    testid: "screenshot-tab-jobs",
  },
  {
    id: "record",
    label: "Spray Record",
    desc: "Every job logged with weather, operator, area and a QR sign-off for agronomists and auditors.",
    icon: QrCode,
    img: "/assets/screens/spray-record.jpg",
    testid: "screenshot-tab-record",
  },
  {
    id: "machinery",
    label: "Machinery",
    desc: "Fleet hours and servicing at a glance, with due-soon and overdue flags before they cost you.",
    icon: Tractor,
    img: "/assets/screens/machinery.jpg",
    testid: "screenshot-tab-machinery",
  },
  {
    id: "tools",
    label: "Calculators & Tools",
    desc: "Delta-T, spray rate, tank mix and nozzle selection built in — no juggling separate apps.",
    icon: Calculator,
    img: "/assets/screens/tools.jpg",
    testid: "screenshot-tab-tools",
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
              Straight from the beta build — no mockups.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-[520px] w-[270px] items-center overflow-hidden rounded-[2.8rem] border-[10px] border-ink bg-[#F4F6F5] shadow-2xl sm:h-[580px] sm:w-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="w-full"
                  data-testid="screenshot-frame-image"
                >
                  <img
                    src={active.img}
                    alt={`${active.label} — Chaser app screenshot`}
                    className="max-h-full w-full object-contain"
                  />
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
