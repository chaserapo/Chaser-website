import { motion } from "framer-motion";
import { MapPin, Navigation, Ruler, Map } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const CARDS = [
  {
    icon: MapPin,
    title: "Draw it, drive it, or just pin it",
    text: "Trace a paddock boundary by tapping the map, drive the edge with GPS, or drop a pin for a location when a full boundary isn't worth the time.",
    testid: "map-card-draw",
  },
  {
    icon: Navigation,
    title: "GPS drive-to-record",
    text: "Record a boundary just by driving the paddock edge — Chaser plots it for you as you go.",
    testid: "map-card-drive",
  },
  {
    icon: Ruler,
    title: "Area calculated automatically",
    text: "No manual working-out. The moment a boundary's drawn or driven, its hectares are calculated on the spot.",
    testid: "map-card-area",
  },
  {
    icon: Map,
    title: "Every farm & paddock, one map",
    text: "See your whole operation at a glance — every property and paddock, colour-coded and tappable.",
    testid: "map-card-overview",
  },
];

const Mapping = () => (
  <section id="mapping" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="max-w-2xl"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        Paddock & Farm Mapping
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Your whole operation, mapped.
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-sage">
        Boundaries drawn, driven or pinned in minutes — not a surveyor's
        afternoon.
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

export default Mapping;
