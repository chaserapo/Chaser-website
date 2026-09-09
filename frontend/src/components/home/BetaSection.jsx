import { useState } from "react";
import { motion } from "framer-motion";
import { Apple, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { HAS_BACKEND, submitBeta, mailtoBeta } from "@/lib/api";

const EASE = [0.16, 1, 0.3, 1];

const inputClass =
  "w-full rounded-xl border border-pineline bg-[#0F241A] px-4 py-3 text-sm text-mist placeholder:text-mist/40 transition-colors duration-200 focus:border-gold focus:outline-none";

const BetaSection = () => {
  const [form, setForm] = useState({ name: "", email: "", farm_name: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!HAS_BACKEND) {
      mailtoBeta(form);
      toast.success("Opening your email app — just press send.");
      setForm({ name: "", email: "", farm_name: "", message: "" });
      return;
    }
    setLoading(true);
    try {
      await submitBeta(form);
      toast.success("You're on the list — we'll be in touch about the beta.");
      setForm({ name: "", email: "", farm_name: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email chaserapp@outlook.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="beta" className="bg-pinedark py-24 text-mist sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Beta program
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl">
            Chaser is currently in beta.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist/75">
            We're onboarding a small group of Western Australian farming operations
            first. Register your interest and we'll be in touch as spots open up —
            founding beta farms help shape what Chaser becomes.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              data-testid="app-store-coming-soon-button"
              disabled
              className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-pineline bg-white/5 px-5 py-3 opacity-70"
            >
              <Apple className="h-6 w-6 text-cream" />
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-mist/60">
                  Coming soon on the
                </span>
                <span className="block text-sm font-semibold text-cream">App Store</span>
              </span>
            </button>
            <button
              data-testid="google-play-coming-soon-button"
              disabled
              className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-pineline bg-white/5 px-5 py-3 opacity-70"
            >
              <Play className="h-6 w-6 text-cream" />
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-mist/60">
                  Coming soon on
                </span>
                <span className="block text-sm font-semibold text-cream">Google Play</span>
              </span>
            </button>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="rounded-3xl border border-pineline bg-white/5 p-6 backdrop-blur sm:p-8"
          data-testid="beta-form"
        >
          <p className="font-display text-xl font-bold text-cream">Register your interest</p>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="beta-name" className="mb-1.5 block text-xs font-medium text-mist/70">
                Name
              </label>
              <input
                id="beta-name"
                data-testid="beta-form-name-input"
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="beta-email" className="mb-1.5 block text-xs font-medium text-mist/70">
                Email
              </label>
              <input
                id="beta-email"
                data-testid="beta-form-email-input"
                required
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@farm.com.au"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="beta-farm" className="mb-1.5 block text-xs font-medium text-mist/70">
                Farm / business name
              </label>
              <input
                id="beta-farm"
                data-testid="beta-form-farm-name-input"
                required
                value={form.farm_name}
                onChange={set("farm_name")}
                placeholder="e.g. Mallee Downs Pty Ltd"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="beta-message" className="mb-1.5 block text-xs font-medium text-mist/70">
                Message <span className="text-mist/40">(optional)</span>
              </label>
              <textarea
                id="beta-message"
                data-testid="beta-form-message-input"
                rows={3}
                value={form.message}
                onChange={set("message")}
                placeholder="Tell us a bit about your operation"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              data-testid="beta-form-submit-button"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-pinedark transition-colors duration-200 hover:bg-goldhover disabled:opacity-60"
            >
              {loading ? "Sending…" : "Register interest"}
              {!loading && (
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              )}
            </button>
            <p className="text-center text-xs text-mist/50">
              We'll only use your details to contact you about the beta. See our{" "}
              <Link to="/privacy" className="underline transition-colors duration-200 hover:text-cream">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BetaSection;
