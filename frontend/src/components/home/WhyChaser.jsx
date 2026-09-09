import { motion } from "framer-motion";
import { Feather, FileText, MessagesSquare, LayoutGrid } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const CARDS = [
  {
    icon: Feather,
    title: "Simplicity first",
    text: "If it can't be done with gloves on, it doesn't ship. Chaser is built for the cab, the ute and the paddock — not the office.",
    testid: "why-card-simplicity",
  },
  {
    icon: FileText,
    title: "Less paperwork",
    text: "Jobs, records and paddock history live in the app, not in a folder in the ute. Find anything in seconds.",
    testid: "why-card-paperwork",
  },
  {
    icon: MessagesSquare,
    title: "Better communication",
    text: "The whole team sees the same plan. Fewer calls, fewer crossed wires, fewer trips back to the shed.",
    testid: "why-card-communication",
  },
  {
    icon: LayoutGrid,
    title: "One organised operation",
    text: "Paddocks, jobs, people and seasons — connected in one place that makes sense at a glance.",
    testid: "why-card-organised",
  },
];

const WhyChaser = () => (
  <section id="why" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Why Chaser?</p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Software that earns its keep.
      </h2>
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
  </section>
);

export default WhyChaser;
