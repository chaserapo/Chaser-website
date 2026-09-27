import { motion } from "framer-motion";
import { Gauge, Wind, Snowflake, Thermometer, History } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

// The six independent global forecast models Chaser Weather Intelligence
// blends into its consensus — same list as MODEL_META in the app's
// weather-intel.ts, kept in sync manually since this is a separate repo.
const MODELS = [
  { short: "ECMWF IFS", provider: "ECMWF" },
  { short: "ECMWF AIFS", provider: "ECMWF" },
  { short: "BOM ACCESS-G", provider: "BOM" },
  { short: "NOAA GFS", provider: "NOAA" },
  { short: "DWD ICON", provider: "DWD" },
  { short: "Météo-France ARPEGE", provider: "Météo-France" },
];

const CARDS = [
  {
    icon: Gauge,
    title: "Consensus & confidence",
    text: "All six models blended into one Chaser Consensus Forecast, with a confidence score based on how closely they agree — not just one model's guess.",
    testid: "weather-card-consensus",
  },
  {
    icon: Wind,
    title: "Best spray windows",
    text: "Chaser scans the forecast against your own thresholds — wind, gusts, humidity, temperature and rain — and surfaces the windows where it's actually safe to spray.",
    testid: "weather-card-windows",
  },
  {
    icon: Snowflake,
    title: "Frost, heat & rain risk",
    text: "Frost and heat risk flagged up to 48 hours out, rain risk for the next 24, so you can plan the week around the weather, not just the day.",
    testid: "weather-card-risk",
  },
  {
    icon: Thermometer,
    title: "Delta-T, built in",
    text: "Delta-T tracked alongside every forecast and available as its own calculator, so spray inversion risk is never a guess.",
    testid: "weather-card-deltat",
  },
];

const Weather = () => (
  <section id="weather" className="bg-pinedark py-24 text-mist sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-w-2xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Weather Intelligence
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
          Six forecasts. One number you can trust.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-mist/75">
          Chaser pulls the same hourly forecast from six independent global
          weather models and blends them into a single consensus — with a
          confidence score, so you know when to trust it and when to wait.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        className="mt-8 flex flex-wrap gap-2.5"
        data-testid="weather-model-badges"
      >
        {MODELS.map((m) => (
          <span
            key={m.short}
            className="rounded-full border border-pineline bg-white/5 px-4 py-2 text-xs font-semibold text-mist/85"
          >
            {m.short}
          </span>
        ))}
      </motion.div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-center gap-2.5 text-sm text-mist/60"
      >
        <History className="h-4 w-4 shrink-0 text-gold" />
        Every forecast Chaser fetches is saved, building a track record of
        accuracy for your own paddocks over time.
      </motion.p>
    </div>
  </section>
);

export default Weather;
