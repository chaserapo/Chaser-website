import { motion } from "framer-motion";
import { Workflow, CloudSun, UserCheck, BarChart3 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const CARDS = [
  {
    icon: Workflow,
    title: "Four job types, one workflow",
    text: "Spray, spread, seeding and harvest each get the same start → active → finish flow, so your whole season lives in one place instead of four different habits.",
    testid: "jobs-card-workflow",
  },
  {
    icon: CloudSun,
    title: "Weather & GPS, captured automatically",
    text: "Conditions and location are logged at the start and finish of every job on their own — no extra taps, no remembering to write it down.",
    testid: "jobs-card-weather",
  },
  {
    icon: UserCheck,
    title: "Operator & machine on every record",
    text: "Know who did what, with which machine, on every job — without having to ask around the shed.",
    testid: "jobs-card-operator",
  },
  {
    icon: BarChart3,
    title: "Reports across every job type",
    text: "Pick a job type and a date range, select the jobs you want, and see hectares, jobs completed, cost, spray tanks used and tonnes harvested at a glance. Export to CSV or PDF.",
    testid: "jobs-card-reports",
  },
];

const JobTracking = () => (
  <section id="jobs" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="max-w-2xl"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        Job Tracking
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Every job, start to finish, in one place.
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-sage">
        Spraying, spreading, seeding and harvest — tracked the same way,
        every time, so nothing depends on memory or a notebook in the ute.
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
  </section>
);

export default JobTracking;
