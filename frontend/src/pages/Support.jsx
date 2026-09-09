import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin } from "lucide-react";
import { toast } from "sonner";
import { usePageMeta } from "@/hooks/usePageMeta";
import { HAS_BACKEND, submitContact, mailtoContact } from "@/lib/api";

const EASE = [0.16, 1, 0.3, 1];

const inputClass =
  "w-full rounded-xl border border-creamline bg-white px-4 py-3 text-sm text-ink placeholder:text-sage/50 transition-colors duration-200 focus:border-pine focus:outline-none";

const Support = () => {
  usePageMeta(
    "Support & Contact — Chaser",
    "Get support, ask questions, or enquire about the Chaser beta testing program."
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!HAS_BACKEND) {
      mailtoContact(form);
      toast.success("Opening your email app — just press send.");
      setForm({ name: "", email: "", message: "" });
      return;
    }
    setLoading(true);
    try {
      await submitContact(form);
      toast.success("Message sent — we'll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please email chaserapp@outlook.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="support-page" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="max-w-2xl"
      >
        <img
          src="/assets/chaser-wordmark.jpeg"
          alt="Chaser"
          className="h-14 w-auto rounded-lg sm:h-16"
        />
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Support & Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          We're here to help.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-sage">
          Questions about the beta, the app, or your data? Send us a message and
          we'll get back to you — usually within one business day.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="space-y-6 lg:col-span-2"
        >
          <div className="rounded-3xl border border-creamline bg-white p-8 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pine">
              <Mail className="h-6 w-6 text-cream" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-pine">Email us directly</h2>
            <a
              href="mailto:chaserapp@outlook.com"
              data-testid="support-email-link"
              className="mt-3 block break-all font-display text-lg font-bold text-goldhover underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:text-gold"
            >
              chaserapp@outlook.com
            </a>
            <p className="mt-3 text-sm leading-relaxed text-sage">
              The fastest way to reach the Chaser team for support, beta access or
              privacy requests.
            </p>
          </div>

          <div className="rounded-3xl border border-creamline bg-sand/70 p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
              <MapPin className="h-6 w-6 text-goldhover" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-pine">Where we are</h2>
            <p className="mt-3 text-sm leading-relaxed text-sage">
              Midwest Ag Supplies
              <br />
              Western Australia, Australia
            </p>
            <p className="mt-3 text-sm leading-relaxed text-sage">
              Chaser is currently in beta — if you're part of the program, mention
              your farm or business name so we can find your account.
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="rounded-3xl border border-creamline bg-white p-6 shadow-sm sm:p-10 lg:col-span-3"
          data-testid="support-form"
        >
          <h2 className="font-display text-2xl font-bold text-pine">Send a message</h2>
          <div className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="support-name" className="mb-1.5 block text-xs font-medium text-sage">
                  Name
                </label>
                <input
                  id="support-name"
                  data-testid="support-form-name-input"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="support-email" className="mb-1.5 block text-xs font-medium text-sage">
                  Email
                </label>
                <input
                  id="support-email"
                  data-testid="support-form-email-input"
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@farm.com.au"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="support-message" className="mb-1.5 block text-xs font-medium text-sage">
                Message
              </label>
              <textarea
                id="support-message"
                data-testid="support-form-message-input"
                required
                rows={6}
                value={form.message}
                onChange={set("message")}
                placeholder="How can we help?"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              data-testid="support-form-submit-button"
              disabled={loading}
              className="group inline-flex items-center gap-2 rounded-full bg-pine px-8 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-pinedark disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send message"}
              {!loading && (
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Support;
