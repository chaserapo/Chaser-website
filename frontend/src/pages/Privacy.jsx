import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const INTRO =
  'This Privacy Policy explains how Chaser ("Chaser", "we", "our") collects, uses, stores and shares your personal information. Chaser is operated by Midwest Ag Supplies (ABN 21 510 804 128), Morley, WA 6032, Australia. Chaser is a farm operations app for broadacre spraying and machinery record-keeping, and complies with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth).';

const SECTIONS = [
  {
    title: "1. What we collect",
    bullets: [
      "Account information: your email address, password (hashed by Supabase), business name and role (owner / manager / operator).",
      "Farm data you enter: farms, paddocks, paddock boundaries, machinery, maintenance records, chemicals in your register, spray jobs, tank mixes, operators, and any photos or notes you upload.",
      "Device data during a spray job: GPS latitude/longitude at weather-capture and when recording paddock boundaries.",
      "Weather data: retrieved from the public Open-Meteo API using the coordinates of your current location.",
      "Team invitations: when you invite a team member we send a one-time invitation email to the address you provide via our email service providers (Resend and Emergent).",
      "Push notification token: if you enable notifications, we store your device's push token to deliver weather and maintenance alerts, via Expo's push notification service.",
      "Subscription status: Chaser offers a free trial, then requires a paid subscription. The Apple App Store or Google Play Store (depending on your device) handles your payment directly — we never see or store your card details, only whether your subscription is active.",
    ],
  },
  {
    title: "2. How we use your information",
    body: "We use the information you enter solely to operate Chaser for you and your team: to authenticate you, to store your farm records, to display your data back to you and any team members you have granted access to, to send transactional emails such as invitations, to deliver notifications you've opted into, and to check your subscription status. We do not use your data to train AI models. We do not sell your data. We do not use it for advertising or profiling.",
  },
  {
    title: "3. Where your data is stored",
    body: "Your data is stored in a Supabase-hosted PostgreSQL database. Each farm business's data is protected by row-level security (RLS), so team members from other businesses cannot access your records. Our backend, hosted on Railway, connects to this database to handle account deletion and to deliver the notifications described above. Supabase's data centres may be outside Australia — by using Chaser you consent to this cross-border storage.",
  },
  {
    title: "4. Who can see your data",
    body: "Only you and the team members you have invited (and accepted) into your farm business can read your farm data. Chaser support staff can, with your consent, access your data to investigate a support request. Separately, our backend runs limited automated processes — such as checking whether a weather or maintenance condition you've asked to be alerted about has been met — that read across businesses only for that narrow purpose; this is an automated process, not manual access by a person. Sub-processors are: Supabase (database, authentication), Railway (backend hosting), Open-Meteo (weather lookup — coordinates only, no account), Resend and Emergent (transactional email delivery), Expo (push notification delivery), and Apple and/or Google (App Store / Google Play subscription billing, depending on your device).",
  },
  {
    title: "5. Location, camera & other permissions",
    body: "Chaser only reads your device GPS when you explicitly capture weather, record a paddock boundary, or record a spray job. Location is not tracked in the background. If you deny the location permission, Chaser falls back to a default regional weather lookup and you can still enter data manually. Chaser only accesses your camera or photo library when you choose to attach a photo to a fault report or spray record — photos are never accessed in the background.",
  },
  {
    title: "6. Your rights",
    body: "You may delete your Chaser account at any time from within the app (More → Account → Delete my account), or request access, correction or export of your data by contacting chaserapp@outlook.com. If you sign out, your data remains in your business's account until you or another owner deletes it. If you are an invited member and are removed from a business, you will lose access to that business's records but will retain your own login.",
  },
  {
    title: "7. Retention",
    body: "We retain your data for as long as your account remains active. Deleted records are soft-deleted for up to 30 days to allow recovery, then permanently removed on request. Backups may retain data for up to 90 days.",
  },
  {
    title: "8. Security",
    body: "We use HTTPS/TLS for all data in transit, Supabase-managed encryption at rest, salted-and-hashed passwords, and RLS to isolate each business's data. No system is perfectly secure; we recommend a strong, unique password and that you notify us immediately if you suspect unauthorised access.",
  },
  {
    title: "9. Complaints",
    body: "If you believe we have handled your personal information contrary to the APPs, contact chaserapp@outlook.com. If you are not satisfied with our response you may complain to the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.",
  },
  {
    title: "10. Changes",
    body: "We will announce material changes to this policy inside the app and update this page. Continued use of Chaser after a change means you accept the updated policy.",
  },
];

const Privacy = () => {
  usePageMeta(
    "Privacy Policy — Chaser",
    "Privacy practices and data protection policy for Chaser app users and Midwest Ag Supplies customers."
  );

  return (
    <div data-testid="privacy-page" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Privacy Policy
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
          >
            <h2 className="font-display text-xl font-bold text-pine">{s.title}</h2>
            {s.body && <p className="mt-3 leading-relaxed text-sage">{s.body}</p>}
            {s.bullets && (
              <ul className="mt-3 list-disc space-y-2.5 pl-5 leading-relaxed text-sage marker:text-gold">
                {s.bullets.map((b) => (
                  <li key={b.slice(0, 32)}>{b}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-creamline bg-sand/70 p-8"
          data-testid="privacy-contact-block"
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

export default Privacy;
