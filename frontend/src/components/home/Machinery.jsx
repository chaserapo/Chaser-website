import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Gauge, AlertTriangle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const CARDS = [
  {
    icon: Wrench,
    title: "Maintenance schedules & service history",
    text: "Every machine's service history and next-due dates in one place, so nothing gets missed between seasons.",
    testid: "machinery-card-maintenance",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-start inspection checklists",
    text: "A quick pre-start check before the job, logged automatically — no clipboard, no guessing what was checked.",
    testid: "machinery-card-prestart",
  },
  {
    icon: Gauge,
    title: "Sprayer setup feeds your spray tools",
    text: "Tank capacity, boom width and nozzle spacing set once on the machine, used automatically by the nozzle guide and calculators.",
    testid: "machinery-card-setup",
  },
  {
    icon: AlertTriangle,
    title: "Due-soon & overdue flags",
    text: "See what needs attention before it costs you a breakdown mid-job, not after.",
    testid: "machinery-card-flags",
  },
];

const Machinery = () => (
  <section id="machinery" className="bg-pinedark py-24 text-mist sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-2xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Machinery
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
          Your fleet, always ready.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-mist/75">
          Maintenance, service history and setup for every machine — so the
          gear is ready when the job is.
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
              className="rounded-3xl border border-pineline bg-white/5 p-7 backdrop-blur"
              data-testid={c.testid}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15">
                <Icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-cream">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist/70">{c.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Machinery;
