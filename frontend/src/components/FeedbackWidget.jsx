import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { toast } from "sonner";
import { HAS_BACKEND, submitContact, mailtoContact } from "@/lib/api";

const inputClass =
  "w-full rounded-lg border border-creamline bg-white px-3 py-2 text-sm text-ink placeholder:text-sage/50 transition-colors duration-200 focus:border-pine focus:outline-none";

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const payload = { ...form, topic: "beta feedback" };
    if (!HAS_BACKEND) {
      mailtoContact(payload);
      toast.success("Opening your email app — just press send.");
      setForm({ name: "", email: "", message: "" });
      setOpen(false);
      return;
    }
    setLoading(true);
    try {
      await submitContact(payload);
      toast.success("Thanks — your feedback has been sent.");
      setForm({ name: "", email: "", message: "" });
      setOpen(false);
    } catch {
      toast.error("Something went wrong. Please email chaserapp@outlook.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 right-0 w-[19rem] rounded-2xl border border-creamline bg-white p-5 shadow-2xl"
            data-testid="feedback-panel"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-base font-bold text-pine">Beta feedback</p>
                <p className="mt-0.5 text-xs leading-relaxed text-sage">
                  Testing the beta? Tell us what's working and what isn't.
                </p>
              </div>
              <button
                data-testid="feedback-close-button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-sage transition-colors duration-200 hover:bg-sand hover:text-ink"
                aria-label="Close feedback"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={onSubmit} className="mt-4 space-y-3" data-testid="feedback-form">
              <input
                data-testid="feedback-form-name-input"
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Your name"
                className={inputClass}
              />
              <input
                data-testid="feedback-form-email-input"
                required
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="Your email"
                className={inputClass}
              />
              <textarea
                data-testid="feedback-form-message-input"
                required
                rows={3}
                value={form.message}
                onChange={set("message")}
                placeholder="What's working? What's not?"
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                data-testid="feedback-form-submit-button"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-pine px-4 py-2.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-pinedark disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send feedback"}
                {!loading && <Send className="h-3.5 w-3.5" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        data-testid="feedback-open-button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-pine px-4 py-2.5 text-sm font-semibold text-cream shadow-lg transition-colors duration-200 hover:bg-pinedark"
      >
        <MessageSquare className="h-4 w-4" />
        Beta feedback
      </button>
    </div>
  );
};

export default FeedbackWidget;
