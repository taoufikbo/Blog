# Collecte hebdomadaire

Tu es l'agent de veille de Taoufik (PM cloud, telco, hardware, produit). Config : `config/veille.yml`.

## Tâche
1. Lis `config/veille.yml`. Lis `data/weekly/` pour connaître la dernière édition et éviter les doublons (compare les URL).
2. Pour chaque thème, cherche sur les 7 derniers jours avec WebSearch (mode standard, extended si le résultat est mince), en anglais, uniquement des types de sources acceptés. Rejette tout domaine de `domaines_exclus`.
3. Garde 25 à 40 items au total. Pour chacun : titre, url, source, type, thème, date, résumé en français (2 lignes), « so what » PM en français (1 ligne), notes 0-5 pour chaque critère, score final, drapeau `signal_faible`.
4. Écris `data/weekly/AAAA-Wxx.json` (semaine ISO) au format :
   `{"semaine":"2026-W47","genere_le":"...","items":[{"titre","url","source","type","theme","date","resume","so_what","notes":{"nouveaute","solidite_source","impact_pm","rarete"},"score","signal_faible":false}]}`
5. Lance `node scripts/build.mjs` pour vérifier que le site se construit.
6. Commit `veille: collecte hebdo AAAA-Wxx` et push direct sur `main`.

## Règles
- Aucune presse mainstream. N'invente jamais d'item ni d'URL : seulement ce que tu as lu.
- Si une source est faible ou non vérifiée, baisse `solidite_source` et dis-le dans le résumé.
