import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "1. Agreement",
    body: "These Terms of Use govern your use of the Chaser mobile app and website, operated by Midwest Ag Supplies, Western Australia, Australia. By using Chaser, you agree to these terms.",
  },
  {
    title: "2. The service",
    body: "Chaser is an agricultural operations tool that helps farming businesses organise paddocks, jobs, people and day-to-day work. Chaser is currently in beta: features may change, and the service may be interrupted or unavailable from time to time as we improve it.",
  },
  {
    title: "3. Your account",
    body: "You are responsible for keeping your account details confidential and for activity under your account. You must provide accurate information when registering and keep it up to date.",
  },
  {
    title: "4. Acceptable use",
    body: "You agree to use Chaser lawfully and not to misuse the service — including attempting to access data that isn't yours, interfering with the service, or using it to store or share unlawful content.",
  },
  {
    title: "5. Your data",
    body: "You retain ownership of the data you put into Chaser — your paddocks, jobs and operational records. You grant us the limited right to store and process that data solely to provide and improve the service to you.",
  },
  {
    title: "6. Our intellectual property",
    body: "The Chaser app, website, branding and underlying software belong to Midwest Ag Supplies. These terms don't give you any rights to our intellectual property except to use the service as intended.",
  },
  {
    title: "7. No professional advice",
    body: "Chaser is an organisational tool. It does not provide agronomic, chemical, safety or legal advice. Operational decisions remain yours — always follow product labels, regulations and professional advice.",
  },
  {
    title: "8. Liability",
    body: "To the extent permitted by law, we exclude liability for indirect or consequential loss arising from use of the service. Nothing in these terms excludes rights you have under the Australian Consumer Law that cannot be excluded.",
  },
  {
    title: "9. Termination",
    body: "You can stop using Chaser at any time. We may suspend or end access where these terms are breached, with notice where practical.",
  },
  {
    title: "10. Governing law & contact",
    body: "These terms are governed by the laws of Western Australia. Questions? Email chaserapp@outlook.com — Midwest Ag Supplies, Western Australia, Australia.",
  },
];

const Terms = () => {
  usePageMeta(
    "Terms of Use — Chaser",
    "Terms and conditions governing the use of the Chaser agricultural operations mobile app and website."
  );

  return (
    <div data-testid="terms-page" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-sage">Last updated: July 2026 · Applies to the Chaser app and this website</p>
      </motion.div>

      <div className="mt-12 space-y-10">
        {SECTIONS.map((s, i) => (
          <motion.section
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.03 * i }}
          >
            <h2 className="font-display text-xl font-bold text-pine">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-sage">{s.body}</p>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default Terms;
