# Flash quotidien

Config : `config/veille.yml`. Données : `data/weekly/`.

## Tâche
1. Cherche sur les dernières 24 h (WebSearch, sources anglaises acceptées uniquement, domaines exclus interdits) les nouveautés qui relèvent des thèmes.
2. Ajoute aussi les items de la dernière collecte hebdo dont le score est >= `seuil_flash` et qui n'ont pas encore été publiés en flash.
3. Écris `flash/AAAA-MM-JJ.md` en français : 3 à 5 items maximum, chacun avec titre-lien, une ligne de résumé, un « so what » PM, le score. Une section « Signal faible du jour » si pertinent. Pas de flash vide : s'il n'y a rien de solide, écris une ligne qui le dit.
4. Front matter : `---\ntitre: Flash AAAA-MM-JJ\ndate: AAAA-MM-JJ\n---`.
5. `node scripts/build.mjs`, commit `veille: flash AAAA-MM-JJ`, push direct sur `main`.
