# Veille PM

Veille automatisée (cloud, telco, hardware, produit, biotech, éco/finance). Sources de fond, pas de presse mainstream.

- `config/veille.yml` : thèmes, sources acceptées, domaines exclus, scoring
- `prompts/` : instructions des agents (weekly, daily, monthly)
- `data/weekly/` : collectes hebdo (JSON, scorées) · `flash/` : flashs quotidiens · `monthly/` : synthèses
- `node scripts/build.mjs` → `public/` (déployé par Vercel)
