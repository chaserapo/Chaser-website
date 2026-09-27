import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";

const INTRO =
  "These Terms govern your use of Chaser. By creating an account or using Chaser you agree to these Terms. Chaser is operated by Midwest Ag Supplies (ABN 21 510 804 128), Morley, WA 6032, Australia.";

const SECTIONS = [
  {
    title: "1. What Chaser is",
    body: "Chaser is a record-keeping and workflow tool that helps you plan, run and log farm spraying and machinery operations. Chaser is a productivity tool — it is not an agronomist, not a chemical adviser, and not a regulatory reporting system.",
  },
  {
    title: "2. Agricultural disclaimer — read carefully",
    paragraphs: [
      "IMPORTANT. Chaser does not provide agronomic advice, product recommendations, dose calculations that override the product label, or any suggestion of whether a spray is safe, effective or legal in your circumstances.",
      "Every product, rate, unit, weather threshold and spray decision you enter is your own decision. You must always:",
    ],
    bullets: [
      "follow the current registered product label,",
      "follow APVMA, state and local regulations,",
      "follow all applicable off-label / permit conditions,",
      "consider weather conditions, spray drift, temperature inversions and buffer zones, and",
      "seek qualified agronomic advice where appropriate.",
    ],
    after: "Chaser's calculators (spray rate, tank mix, delta-T, nozzle guide) are provided as convenience utilities. Outputs are indicative only. Always verify against your own measurements before making purchases, applications or compliance submissions.",
  },
  {
    title: "3. GPS, weather and area figures",
    body: "GPS-captured coordinates, drive-recorded paddock boundaries, hectare calculations, and weather values retrieved from Open-Meteo are indicative only. Verify against ground truth or a qualified surveyor before using them for compliance, insurance, chemical procurement or legal purposes.",
  },
  {
    title: "4. Your account & team",
    body: "You are responsible for keeping your login secure and for the actions of everyone you invite to your farm business. Owners can invite, remove and change the roles of team members. Removing a member revokes their access to the business's data immediately. You can delete your own Chaser account at any time from within the app (More → Account → Delete my account).",
  },
  {
    title: "5. Subscription & billing",
    body: 'Chaser offers a free trial from when your business account is created, after which continued access requires a paid auto-renewing subscription billed through the Apple App Store at the price shown at sign-up (currently $14.99 AUD/month, subject to change for future subscribers). Payment is charged to your Apple ID account at confirmation of purchase. Your subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current billing period, and your account will be charged for renewal within that 24-hour window at the then-current price. You can manage or cancel your subscription, and turn off auto-renewal, at any time in your device\'s App Store account settings — doing so does not refund any unused portion of a current period. If you don\'t cancel before the free trial ends, it converts automatically into a paid subscription.',
  },
  {
    title: "6. Acceptable use",
    body: "You will not: (a) upload data you don't have the right to store, (b) use Chaser to breach agricultural, environmental or chemical regulations, (c) attempt to bypass row-level security or access another business's data, (d) reverse engineer or scrape the service, or (e) resell access to Chaser without our written consent.",
  },
  {
    title: "7. Availability",
    body: 'Chaser is provided "as is". We aim for high availability but do not guarantee uninterrupted service. Planned maintenance, network outages, or upstream provider outages (Supabase, Railway, Open-Meteo, Resend, Emergent, Expo) may temporarily interrupt access. Chaser stores an offline copy of your active spray job so a temporary outage does not lose your data.',
  },
  {
    title: "8. Limitation of liability",
    body: "To the maximum extent permitted by Australian law, Chaser is not liable for any loss (including loss of crop, revenue, business, data, chemical spend, drift damage, regulatory penalty or personal injury) arising from your use of Chaser or from any decision you made in reliance on information displayed by Chaser. Nothing in these Terms excludes any non-excludable statutory rights you may have under the Australian Consumer Law.",
  },
  {
    title: "9. Termination",
    body: "You may stop using Chaser and delete your account at any time (More → Account → Delete my account), or request deletion of your data by contacting chaserapp@outlook.com. We may suspend or terminate an account that breaches these Terms, subject to reasonable notice unless there is an active security or legal issue.",
  },
  {
    title: "10. Governing law",
    body: "These Terms are governed by the laws of Western Australia, Australia. You submit to the non-exclusive jurisdiction of the courts of Western Australia and Australia.",
  },
  {
    title: "11. Changes to these Terms",
    body: "We will announce material changes inside the app and update this page. Continued use of Chaser after a change means you accept the updated Terms.",
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
        <p className="mt-3 text-sm text-sage">
          Effective September 2026 · Applies to the Chaser app and this website
        </p>
        <p className="mt-6 leading-relaxed text-sage">{INTRO}</p>
      </motion.div>

      <div className="mt-12 space-y-10">
        {SECTIONS.map((s, i) => (
          <motion.section
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.03 * i }}
            className={
              s.title.startsWith("2.")
                ? "rounded-3xl border border-gold/40 bg-gold/5 p-6 sm:p-8"
                : undefined
            }
          >
            <h2 className="font-display text-xl font-bold text-pine">{s.title}</h2>
            {s.body && <p className="mt-3 leading-relaxed text-sage">{s.body}</p>}
            {s.paragraphs &&
              s.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="mt-3 leading-relaxed text-sage">
                  {p}
                </p>
              ))}
            {s.bullets && (
              <ul className="mt-3 list-disc space-y-2.5 pl-5 leading-relaxed text-sage marker:text-gold">
                {s.bullets.map((b) => (
                  <li key={b.slice(0, 32)}>{b}</li>
                ))}
              </ul>
            )}
            {s.after && <p className="mt-3 leading-relaxed text-sage">{s.after}</p>}
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-creamline bg-sand/70 p-8"
          data-testid="terms-contact-block"
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

export default Terms;
