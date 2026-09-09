import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const CHAPTERS = [
  {
    n: "01",
    title: "Farm & paddock management",
    text: "Every paddock, crop and record in one place — not spread across notebooks, the ute dash and the smoko-room whiteboard.",
    img: null,
  },
  {
    n: "02",
    title: "Job planning & tracking",
    text: "Plan the week, assign the work and see what's done. Seeding, spraying, spreading — tracked as it actually happens.",
    img: "https://images.unsplash.com/photo-1666631740049-5643ffd94b7c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    n: "03",
    title: "Mapping & paddock boundaries",
    text: "Your paddocks on a map, with boundaries drawn the way you actually farm them — not the way a desk in the city imagines.",
    img: "https://images.unsplash.com/photo-1588186879741-889eb26e549f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  },
  {
    n: "04",
    title: "Simple team visibility",
    text: "Everyone sees what's on, where it's happening and what's next — without chasing people over the two-way.",
    img: null,
  },
  {
    n: "05",
    title: "Works with real ag operations",
    text: "Chaser is shaped alongside working Western Australian farming operations, not dreamed up in an office.",
    img: "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
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
        Five things Chaser does quietly well, so you can get on with the work.
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
                alt={c.title}
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
