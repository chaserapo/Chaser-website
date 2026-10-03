# Chaser — Public Website

Public marketing website for **Chaser** (a product by Midwest Ag Supplies, Western Australia).
"Behind every good operation."

Pages: `/` (home) · `/privacy` · `/terms` · `/support`

## Structure

- `frontend/` — React static site (Create React App + craco + Tailwind + framer-motion + lenis). **This is the folder you deploy.**
- `backend/` — FastAPI dev backend used only in the Emergent preview environment (form submissions + managed email). Not required for the hosted site.

## Deploy on Vercel (free tier)

1. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import `github.com/chaserapo/Chaser-website`
2. **Root Directory:** click "Edit" and select `frontend`
3. **Framework Preset:** Create React App (auto-detected once root is `frontend`)
4. Leave the defaults:
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install`
5. **Environment variables:** none needed
6. Deploy

`frontend/vercel.json` already contains the SPA rewrite so `/privacy`, `/terms` and `/support`
load directly on the domain (required for App Store / Google Play review URLs).

## Custom domain: chaserag.com.au

1. Vercel → your project → **Settings → Domains** → add `chaserag.com.au` (Vercel will also prompt for `www.chaserag.com.au` — add both)
2. At your domain registrar's DNS settings, add the records Vercel shows. Vercel's standard values are:
   - **A record** — name `@` → `76.76.21.21`
   - **CNAME record** — name `www` → `cname.vercel-dns.com`
3. HTTPS is provisioned automatically once DNS propagates (usually minutes, up to 24h)
4. Confirm these load: `https://chaserag.com.au/privacy`, `/terms`, `/support`

## Spray Window at /spray

`/spray/*` is served from the Spray Window site, which is built twice daily by the
`Spray Window` GitHub Action in `chaserapo/Chaser-App` and hosted on GitHub Pages.
`frontend/vercel.json` proxies those paths (visitors only ever see this domain) and
adds the trailing slash to folder URLs so GitHub Pages never redirects to its own
address. The `/spray` rules must stay above the SPA catch-all rewrite.

## Forms on the static site

The beta and contact forms open the visitor's email app pre-addressed to
**chaserapp@outlook.com** (mailto fallback — no server or setup needed).
In the Emergent preview environment (where `frontend/.env` defines
`REACT_APP_BACKEND_URL`) the same forms use the FastAPI backend + managed email instead.
To upgrade hosted forms later, [Web3Forms](https://web3forms.com) is a free drop-in.

## Local development

```bash
cd frontend
yarn install
yarn start
```
