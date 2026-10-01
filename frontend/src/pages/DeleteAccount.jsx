import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const STEPS = [
  "Open the Chaser app and sign in.",
  "Go to More → Account.",
  "Tap Delete my account and confirm.",
];

const DeleteAccount = () => {
  usePageMeta(
    "Delete Your Account & Data — Chaser",
    "How to delete your Chaser account and request deletion of your data."
  );

  return (
    <div data-testid="delete-account-page" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Delete your account & data
        </h1>
        <p className="mt-6 leading-relaxed text-sage">
          You can delete your Chaser account and all associated data at any time. There
          are two ways to do this, depending on whether you still have access to the app.
        </p>
      </motion.div>

      <div className="mt-12 space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-xl font-bold text-pine">
            In the app (fastest — deletes immediately)
          </h2>
          <ol className="mt-3 list-decimal space-y-2.5 pl-5 leading-relaxed text-sage marker:font-semibold marker:text-gold">
            {STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="mt-3 leading-relaxed text-sage">
            This removes your login and your membership of any farm business. To also
            have your farm business's data (farms, paddocks, machinery, spray records,
            etc.) permanently deleted rather than just left inaccessible, email us as
            described below.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2 className="font-display text-xl font-bold text-pine">
            Can't access the app?
          </h2>
          <p className="mt-3 leading-relaxed text-sage">
            If you've uninstalled Chaser, lost access to your account, or would rather
            not sign back in, email{" "}
            <a
              href="mailto:chaserapp@outlook.com?subject=Account%20deletion%20request"
              className="font-semibold text-goldhover underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:text-gold"
            >
              chaserapp@outlook.com
            </a>{" "}
            from the address on your account and ask us to delete it. Include your
            farm/business name if you remember it so we can find your account faster.
            We'll confirm once it's done, usually within a few business days.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-display text-xl font-bold text-pine">What gets deleted</h2>
          <p className="mt-3 leading-relaxed text-sage">
            Your login, profile, and (if you're a sole business owner) all farm data
            tied to that business — farms, paddocks, machinery, maintenance records,
            chemicals, spray jobs and tank mixes. Deleted records are soft-deleted for
            up to 30 days to allow recovery from accidental deletion, then permanently
            removed. Backups may retain data for up to 90 days. See our{" "}
            <a
              href="/privacy"
              className="font-semibold text-goldhover underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:text-gold"
            >
              Privacy Policy
            </a>{" "}
            for full detail on retention and what we collect.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl border border-creamline bg-sand/70 p-8"
          data-testid="delete-account-contact-block"
        >
          <h2 className="font-display text-xl font-bold text-pine">Contact</h2>
          <p className="mt-3 leading-relaxed text-sage">
            Midwest Ag Supplies (Chaser)
            <br />
            ABN 21 510 804 128
            <br />
            Morley, WA 6032, Australia
            <br />
            <a
              href="mailto:chaserapp@outlook.com"
              className="font-semibold text-goldhover underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:text-gold"
            >
              chaserapp@outlook.com
            </a>
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default DeleteAccount;
