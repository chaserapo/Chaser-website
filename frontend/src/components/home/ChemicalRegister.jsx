import { motion } from "framer-motion";
import { FlaskConical, ShieldAlert, Receipt, FileCheck2, Thermometer, Droplets, Beaker, Ruler } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const CARDS = [
  {
    icon: FlaskConical,
    title: "Full product register",
    text: "Every chemical in one register, with pack sizes, stock on hand and cost per unit tracked automatically as you use it on a job.",
    testid: "chem-card-register",
  },
  {
    icon: ShieldAlert,
    title: "Resistance & rotation warnings",
    text: "Chaser flags it if you're about to repeat the same mode-of-action group on a paddock that already saw it in an earlier season.",
    testid: "chem-card-resistance",
  },
  {
    icon: Receipt,
    title: "Low stock → quote request",
    text: "Set a low-stock warning level per product, and Chaser builds a ready-to-send PDF quote request the moment you need to reorder.",
    testid: "chem-card-lowstock",
  },
  {
    icon: FileCheck2,
    title: "Labels & SDS on hand",
    text: "Every product's label and Safety Data Sheet is one tap away — searchable by name, active ingredient or APVMA number.",
    testid: "chem-card-sds",
  },
];

const CALCULATORS = [
  { icon: Thermometer, label: "Delta-T", text: "Spray inversion risk at a glance" },
  { icon: Droplets, label: "Spray Rate", text: "Water rate from tank, speed & nozzle spacing" },
  { icon: Beaker, label: "Tank Mix", text: "Mixing order & water volumes, worked out" },
  { icon: Ruler, label: "Nozzle Guide", text: "The right nozzle for the droplet size you need" },
];

const ChemicalRegister = () => (
  <section id="chemicals" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="max-w-2xl"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        Chemical Register
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Compliance that keeps up with the shed.
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-sage">
        Every product you use, tracked from the shelf to the sprayer — stock,
        cost, resistance and paperwork all in one place.
      </p>
    </motion.div>

    <div className="mt-14 grid gap-5 sm:grid-cols-2">
      {CARDS.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-creamline bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-lg"
            data-testid={c.testid}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
              <Icon className="h-6 w-6 text-goldhover" />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-pine">
              {c.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-sage">{c.text}</p>
          </motion.div>
        );
      })}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      className="mt-14 rounded-3xl border border-creamline bg-sand/70 p-7 sm:p-9"
      data-testid="chem-calculators"
    >
      <p className="font-display text-lg font-bold text-pine">
        Plus four calculators, built right in
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CALCULATORS.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                <Icon className="h-5 w-5 text-goldhover" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">{c.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-sage">{c.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  </section>
);

export default ChemicalRegister;
