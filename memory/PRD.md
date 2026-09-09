# Chaser — Public Website PRD

## Original problem statement
Build a simple, professional, mobile-first public website for Chaser, an Australian
agricultural operations app by Midwest Ag Supplies (ABN 21 510 804 128, Morley WA).
Tagline: "Behind every good operation." Contact: chaserapp@outlook.com.
Goals: credible landing page supporting the iOS/Android app launch; legitimate public
Privacy / Terms / Support URLs for Apple App Store and Google Play submissions;
beta interest capture; prepare for custom domain chaserag.com.au (do NOT register
without asking). Must not change or break the existing Chaser mobile app.
User choices: Light & earthy palette (warm cream, deep green, wheat-gold);
award-level motion (framer-motion reveals, lenis smooth scroll, kinetic hero,
numbered manifesto chapters, editorial marquee); forms save submissions AND email
them to chaserapp@outlook.com; real legal text pasted by user; user-supplied logos;
preview URL first, custom domain later.

## Architecture
- Frontend: React (CRA/craco) + Tailwind, framer-motion, lenis, react-router-dom,
  sonner toasts. Pages: Home (/), Privacy (/privacy), Terms (/terms), Support (/support).
- Backend: FastAPI on 0.0.0.0:8001, routes prefixed /api. MongoDB via MONGO_URL/DB_NAME.
  - POST /api/beta-interest -> db.beta_interest + email to OWNER_EMAIL + confirmation to registrant
  - POST /api/contact -> db.contact_messages + email to OWNER_EMAIL
  - GET /api/health
- Email: Emergent managed Resend proxy (EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME=Chaser,
  EMAIL_REPLY_TO/OWNER_EMAIL=chaserapp@outlook.com) with guardrail gate.
- Assets: user logos in /app/frontend/public/assets/ (chaser-icon.jpeg, chaser-wordmark.jpeg);
  favicon.png + apple-touch-icon.png generated from the icon.

## User personas
- WA broadacre farmer / farm manager evaluating the beta
- Apple App Store / Google Play reviewer checking support + privacy URLs
- Team member of a farm business looking for support

## Implemented (July 2026)
- Home: kinetic masked-reveal hero with 3D-tilt phone mockup + floating stats pill,
  editorial marquee, 5 numbered "Built for the paddock" manifesto chapters,
  tabbed app-screenshot placeholder section, 4-card "Why Chaser?" grid,
  dark beta section with working registration form + App Store / Google Play
  "coming soon" badges, full footer with entity + ABN + legal links
- Privacy Policy page with the app's REAL policy text (pasted by user) incl. ABN,
  APPs, Supabase/Resend/Open-Meteo sub-processors, OAIC complaints path
- Terms of Use page with the app's REAL terms text (pasted by user) incl. agricultural
  disclaimer, APVMA/label obligations, limitation of liability, WA governing law
- Support page: chaserapp@outlook.com prominent + working contact form
- Sticky glassmorphic header, mobile drawer, per-page titles/meta, favicon,
  HTTPS via preview domain, Lenis smooth scroll, grain overlay, data-testids throughout
- Emails verified sending (owner notification + beta confirmation)
- Real app screenshots integrated (July 2026): hero phone frame shows the live app
  dashboard; tabbed showcase with Spray Jobs, Spray Record, Machinery and
  Calculators & Tools screens (optimized copies in public/assets/screens/)

## Backlog
- P0: Deploy + connect custom domain chaserag.com.au (DNS: exact A/CNAME values come
  from the Emergent custom-domain panel at deploy time; typically CNAME for www and
  A record for @)
- P1: Activate App Store / Google Play buttons at launch
- P2: Founder note / about snippet for trust; OG share image; analytics
