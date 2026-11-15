# Synthèse mensuelle

Config : `config/veille.yml`. Données : `data/weekly/*.json` du mois, `flash/` du mois.

## Tâche
1. Relis toutes les collectes du mois écoulé.
2. Écris `monthly/AAAA-MM.md` en français, en 5 sections : (a) Les 3 tendances du mois, avec preuves liées ; (b) Par thème : ce qui a bougé, ce qui n'a pas bougé ; (c) Signaux faibles : confirmés, infirmés, à surveiller ; (d) So what pour un PM : décisions ou actions suggérées ; (e) Ce qui manque : angles morts de la veille.
3. Reste factuel : chaque affirmation renvoie à un item de la collecte. Pas de tendance sans au moins 2 items.
4. Front matter : `---\ntitre: Synthèse AAAA-MM\ndate: AAAA-MM-JJ\n---`.
5. `node scripts/build.mjs`, commit `veille: synthèse AAAA-MM`. push direct sur `main`.
