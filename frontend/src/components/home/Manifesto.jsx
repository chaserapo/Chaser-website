import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const CHAPTERS = [
  {
    n: "01",
    title: "Farm & Paddock Management",
    text: "Every farm, paddock and boundary mapped and up to date. Accessible when you need it, and all inputs are saved year on year.",
    img: "/assets/manifesto/dog-paddock.jpg",
    imgAlt: "A farm dog standing in a lush green cereal paddock with gum trees on the horizon, Western Australia",
  },
  {
    n: "02",
    title: "Intelligent Weather Modelling",
    text: "Not just numbers from BoM. Chaser blends six independent forecast models — with the help of AI — into a forecast you can trust. Spray windows, frost risk, Delta-T and more.",
    img: null,
  },
  {
    n: "03",
    title: "Chemical Register & Compliance",
    text: "Full product register with stock, cost and mode-of-action rotation built in, so compliance isn't a separate job.",
    img: null,
  },
  {
    n: "04",
    title: "Sprayer Setup Assist",
    text: "Get the sprayer set up right the first time: nozzle, rate, mix and inversion risk, calculated on the spot.",
    img: "/assets/manifesto/spraying-aerial.jpg",
    imgAlt: "Aerial view of a self-propelled boom sprayer working a paddock, showing the sprayed boundary line against the crop",
  },
  {
    n: "05",
    title: "Machinery Maintenance",
    text: "Every machine's service history and hours in one place, with overdue jobs flagged before they become expensive ones.",
    img: "/assets/manifesto/seeding-rig.jpg",
    imgAlt: "A John Deere tractor towing an air seeder, with a chaser bin and grain truck alongside, seeding a paddock in Western Australia",
  },
  {
    n: "06",
    title: "Faults & Risks",
    text: "Spot a hazard, snap a photo, pin it on the map — weeds, fences, rocks or machine faults. Get them before they hit your bottom line.",
    img: null,
  },
];

const Manifesto = () => (
  <section id="paddock" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        Built for the paddock
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
        The whole operation, in your pocket.
      </h2>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-sage">
        Six things Chaser does quietly well, so you can get on with the work.
      </p>
    </motion.div>

    <div className="mt-16">
      {CHAPTERS.map((c, i) => (
        <motion.div
          key={c.n}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08 * (i % 2), ease: EASE }}
          className="grid items-center gap-6 border-t border-creamline py-10 sm:py-12 md:grid-cols-12"
          data-testid={`manifesto-chapter-${c.n}`}
        >
          <div className="md:col-span-2">
            <span className="font-display text-5xl font-black text-outline sm:text-6xl">
              {c.n}
            </span>
          </div>
          <div className={c.img ? "md:col-span-6" : "md:col-span-10"}>
            <h3 className="font-display text-2xl font-bold tracking-tight text-pine sm:text-3xl">
              {c.title}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-sage sm:text-lg">
              {c.text}
            </p>
          </div>
          {c.img && (
            <div className="md:col-span-4">
              <img
                src={c.img}
                alt={c.imgAlt || c.title}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl border border-creamline object-cover shadow-md"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Manifesto;
