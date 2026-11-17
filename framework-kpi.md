# Économie de KPI : on part des décisions, pas des mesures

> **Légende des statuts**
> ✅ **Établi** : plusieurs sources primaires ou académiques convergent.
> 🟡 **Pratique reconnue** : méthode d'entreprise ou d'auteur, largement reprise, jamais testée rigoureusement.
> 🔶 **Synthèse personnelle** : assemblage ou règle proposés ici, sans source unique. À challenger.
> Les seuils chiffrés des exemples Bare Metal as a Service (BMaaS) sont **illustratifs**. Ils sont à calibrer sur vos données.

---

## Slide 1. La méthode : décision → leviers → 4 filtres → règle → KPI

**Schéma**

```
 DÉCISION ───▶ LEVIERS ───▶ 4 FILTRES ───▶ RÈGLE ───▶ KPI
 « qu'est-ce     prix, offre,   récurrente ?        « si X franchit S    entrée (levier)
 qu'on fera      cible, service, coûteuse/          pendant D,           + sortie (résultat)
 autrement       capacité,      irréversible ?      alors A, sinon B »   + contre-métrique
 selon la        roadmap,       incertaine ?        écrite AVANT         + sentinelle à part
 réponse ? »     existence      sensible au temps ?  la donnée
                                      │
                                      ▼
              verdict : KPI │ dossier ponctuel │ règle/politique │ écartée
```

**Une ligne par étape**

1. **Décision** : qui tranche quoi, avant quand. Si la réponse ne change aucune action, ce n'est pas une décision. ✅ (GQM, valeur de l'information, decision-first)
2. **Leviers** : lister les décisions levier par levier, pas métrique par métrique. 🟡 (« ce que le produit contrôle » : cadrage du demandeur, proche des « controllable inputs » d'Amazon)
3. **4 filtres** : récurrente ? coûteuse ou irréversible à rater ? incertaine ? sensible au temps ? 🔶 (chaque filtre a une source, la grille combinée est une synthèse)
4. **Règle** : « si X franchit S pendant D, alors A, sinon B », fixée avant de voir les chiffres. ✅ (règles précommises, politique de budget d'erreur Google)
5. **KPI** : ce que la règle lit, rien de plus. Une entrée pilotable, une sortie constatée, une contre-métrique. 🟡 (Amazon WBR, Grove)

**Verdict selon les filtres**

- Les 4 filtres sont oui → **KPI** (suivi vivant, règle écrite).
- Coûteuse ou irréversible, mais pas récurrente → **dossier ponctuel** : on analyse une fois, on écrit les critères d'arrêt.
- Récurrente, mais réponse déjà connue ou erreur peu coûteuse → **règle/politique** : on décide vite, on ne suit pas.
- Aucune décision derrière, ou information qui ne peut rien changer → **écartée**.
- Test de contrôle : si on ne peut citer ni l'action A ni l'action B, le KPI n'a pas lieu d'être. 🔶

**Exemple de tri sur un BMaaS**

- **Capacité** : « Commander un lot de serveurs ? » → **KPI** (récurrent, cher, délai d'appro long, demande incertaine).
- **Niveau de service** : « Livrer des nouveautés ou stabiliser ? » → **KPI** (SLO et budget d'erreur).
- **Prix** : « Augmenter le palier standard ? » → **KPI** (annuel, risque de départ, réaction incertaine).
- **Cible et existence** : « Ouvrir au B2B ? Arrêter une gamme ? » → **dossier ponctuel** (porte à sens unique), avec critères d'arrêt écrits.
- **Roadmap** : « Quel gabarit ajouter ? » → **règle** (grille de priorisation, pas de KPI).
- **Détail sans enjeu** : « Changer le thème du portail » → **écartée**.

**Consensus ou synthèse ?**

- ✅ Partir du but avant de mesurer : GQM (Basili, 1994), Goals-Signals-Metrics (Google, 2010).
- ✅ Ne mesurer que si le résultat peut changer la décision : valeur de l'information (Howard 1966, Hubbard).
- 🟡 Portes à sens unique et à double sens (Bezos, lettre 2015) : heuristique de dirigeant, pas une étude.
- 🔶 Les 4 filtres, les 4 verdicts et l'enchaînement complet sont ma synthèse. Aucun des cadres cités ne les combine ainsi.

---

## Slide 2. Les quatre familles : décision, finance, opérationnel, sentinelle

### Décision : « Que fait-on du prix, de la cible, de l'offre ? »

- **Rôle** : trancher prix, segment, rétention, vente additionnelle. La satisfaction n'est pas un KPI : c'est un signal qui doit déclencher l'une de ces décisions.
- **Entrée** : avantage de prix face à l'alternative du client (cloud public, achat direct) ; délai de mise à disposition.
- **Sortie** : rétention en serveurs-mois par segment (comportement, pas déclaratif). Client interne captif : mesurer plutôt la part du besoin servie hors produit.
- **Contre-métrique** : taux de réalisation du prix (facturé ÷ catalogue), sinon on « retient » à coup de remises.
- **Exemple BMaaS** : « +5 % sur le palier standard ? » Si avantage de prix ≥ 15 % **et** rétention ≥ 95 % pendant 2 trimestres → +5 % ; sinon gel et enquête sur les départs.
- **Statut** : 🟡 pratique courante. 🔶 la règle de hausse conditionnée à la rétention et à un écart de prix est mon montage.

### Finance : « Faut-il acheter, et à quel prix plancher ? »

- **Rôle** : décider les achats de capacité, le prix plancher, la rentabilité par segment.
- **Entrée** : taux d'occupation (réservé et réellement utilisé) ; délai d'approvisionnement.
- **Sortie** : coût complet par serveur-mois utilisé (amortissement, énergie, réseau, licences, support, personnel) comparé au prix ou à la refacturation ; retour sur investissement du lot.
- **Contre-métrique** : demandes refusées ou retardées faute de capacité. Elle empêche de gonfler la marge en sous-achetant.
- **Exemple BMaaS** : « Commander N serveurs ? » Si occupation > 80 % sur 8 semaines **et** délai d'appro > 12 semaines → commander ; si < 55 % sur 12 semaines → geler les achats et réaffecter.
- **Statut** : ✅ coût complet et coût unitaire. 🟡 LTV/CAC : seuil 3:1 issu du SaaS (Skok), sensible au churn, faussé si la rétention nette dépasse 100 %. 🔶 À réserver au B2B avec assez de cohortes ; en interne, pas de CAC : coût complet et showback. Utile quand il tranche (HubSpot : 1,5 en vente directe, 5 via revendeurs).

### Opérationnel : « Livre-t-on ou stabilise-t-on ? »

- **Rôle** : arbitrer nouveautés contre fiabilité. Le SLO est déjà une règle de décision : on n'invente rien.
- **Entrée** : délai de livraison d'un changement, taux d'échec des changements, taux de reprise (DORA).
- **Sortie** : SLI/SLO, par exemple « % de provisionnements réussis en moins de 30 min » sur 28 jours, et budget d'erreur restant.
- **Contre-métrique** : tickets « lent » ou « cassé » alors que le SLO est tenu (SLO trop lâche ou mal mesuré). Garder en tension vitesse et stabilité (DORA).
- **Exemple BMaaS** : budget d'erreur des 28 jours épuisé → gel des changements hors urgences P0 et sécurité jusqu'au retour sous le SLO ; sinon livraison normale. Modèle : annexe B du SRE Workbook.
- **Statut** : ✅ SLO, budgets d'erreur et DORA (désormais 5 métriques). DORA déconseille d'en faire des cibles. 🔶 le seuil de 30 min est une hypothèse.

### Sentinelle : « Le système se dégrade-t-il, avant que les KPI le disent ? »

- **Rôle** : alerte précoce, sur le modèle de Todd. Quatre tests : intègre tout le système, comportement révélé, difficile à truquer, bouge tôt. Elle s'observe, elle n'est jamais un objectif.
- **Nature** : sortie intégrative, sans levier direct, sans propriétaire intéressé. Lecture seule, hors primes et hors OKR.
- **Contre-métrique** : taux de fausses alertes, mesuré a posteriori (voir slide 3).
- **Sentinelle 1** : taux de premier déploiement réussi sans aide humaine par un nouveau client, de J0 à J30. Il touche documentation, API, réseau, images, capacité et support. Il bouge avant les départs. Il se calcule depuis les logs.
- **Sentinelle 2** : délai de bout en bout pour remettre en service un serveur défaillant (p90, de l'alerte à la première charge utile qui tourne dessus). Il révèle la dette d'exploitation et les pièces de rechange avant la pénurie de capacité.
- **Règle d'usage** : dégradation 2 mois de suite → on ouvre une enquête, jamais une action corrective automatique. 🔶 concept et exemples : synthèse personnelle ; le cas Todd lui-même est discuté (slide 3).

### Articulation des familles

- **Un KPI par décision**, pas un par produit. Visez 5 à 7 KPI au total. 🔶
- **Un seul KPI dominant par cycle** (One Metric That Matters, selon le stade) ; les autres servent de garde-fous. 🟡 DORA met en garde contre « un seul chiffre pour tout gouverner ».
- **Rythme** : entrées en revue hebdomadaire ou mensuelle, sorties en revue trimestrielle. 🟡 (Amazon WBR : les entrées sont pilotables, les sorties se constatent.)
- **Fiche KPI** : décision · règle (X, S, D, A, B) · entrée/sortie · contre-métrique · propriétaire · date de revue. 🔶
- **Péremption** : un KPI qui n'a déclenché aucune décision en 2 revues est supprimé. 🔶
- **Seuil et cible** : « tracer une ligne dans le sable » avant l'expérience (Lean Analytics). 🟡 Même logique que la règle précommise.

---

## Slide 3. Les écueils : symptôme et parade

### Dérives de mesure

| Écueil | Symptôme | Parade |
|---|---|---|
| **Goodhart** | Le chiffre monte, pas le résultat. Amazon : plus de fiches produit créées, pas plus de ventes. BMaaS : plus de serveurs livrés, plus de reprises. | Contre-métrique appariée (Grove). Réviser l'entrée si la sortie ne suit pas (WBR). Pas de cible sur un chiffre seul (DORA). |
| **Campbell** | La mesure sert à juger des personnes : pression, données arrangées (incidents reclassés pour « tenir » le SLO). | Données issues des logs, pas déclarées par l'équipe jugée. Séparer mesure d'apprentissage et évaluation individuelle (la politique SRE le dit : « pas une punition »). |
| **Surrogation** | Le chiffre remplace la stratégie : « notre stratégie, c'est 85 % d'occupation ». | Faire choisir ou relire la stratégie par ceux qui l'exécutent. Garder la phrase de décision écrite à côté du chiffre. Plusieurs mesures plutôt qu'une. |
| **McNamara** | Ce qui n'est pas chiffré est jugé sans importance (la confiance des clients internes). | Cinq entretiens clients par trimestre. Aucune décision ne sort de l'inventaire faute de mesure. La sentinelle couvre l'angle mort. |
| **Vanité** | Un nombre qui monte sans qu'aucune décision en dépende (serveurs déployés cumulés, comptes créés). | Test du « et alors ? » : sans seuil ni action écrite, on supprime. |
| **Inversion de mesure** | On mesure beaucoup ce qui est facile, peu ce dont l'ignorance coûterait cher. | Classer les inconnues par valeur de l'information (incertitude × coût d'erreur), mesurer la première en premier. |

### Dérives de la North Star et de la sentinelle

| Écueil | Symptôme | Parade |
|---|---|---|
| **Mise en objectif** | La North Star entre dans les primes et devient un Goodhart. | Boussole, pas cible. Les objectifs portent sur les entrées, avec garde-fous. |
| **Manipulation** | On la gonfle sans valeur client (serveurs « alloués » mais inactifs). | Définition par usage réel (charge active), contre-métrique, audit annuel de la définition. |
| **Sortie non pilotable** | Mauvais trimestre, aucune action possible. | La décomposer en 3 ou 4 entrées contrôlables, un propriétaire par entrée (WBR). |
| **Mauvais choix** | Métrique choisie pour un autre stade, ou pour l'investisseur, pas pour une décision. | Une métrique dominante par stade, revue à chaque changement de stade. Garder une tension entre deux métriques (DORA). |
| **Sentinelle promue en objectif** | Elle reçoit une cible, on la travaille, elle ne signale plus rien. | Lecture seule, hors primes. Ses seuils ouvrent une enquête, pas une action. 🔶 |

### Valider une sentinelle a posteriori (protocole en 6 lignes) 🔶

1. Lister les crises passées (au moins 5 ; sinon élargir aux produits voisins et aux quasi-incidents) et fixer l'avance attendue (par exemple 2 trimestres).
2. **Figer le seuil et la fenêtre avant** de regarder les données. Sinon on ajuste au passé.
3. Compter signaux justes, fausses alertes et crises ratées. Calculer le ratio bruit/signal (Kaminsky, Lizondo, Reinhart, 1998 : ✅ méthode établie, discutée depuis).
4. Comparer aux périodes calmes et au taux de base : une sentinelle qui sonne tout le temps ne vaut rien.
5. Chercher l'artefact de mesure. Cas Todd : la mortalité infantile soviétique passe de 24,4 à 26,3 ‰ entre 1970 et 1973, mais une partie de la hausse pourrait venir d'un meilleur enregistrement des décès. Le signal est donc contesté.
6. Rejouer hors échantillon sur des crises non utilisées, puis revalider chaque année.

---

## Annexe. Sources

**Statut de lecture** : 📖 lu directement (texte ou extrait) · 🔎 vu uniquement via résultats de recherche ou résumés, à vérifier avant citation. Le tour 1 couvre les méthodes qui partent de la décision, le tour 2 les familles de KPI, le tour 3 les écueils.

**Tour 1 : méthodes qui partent de la décision**

- 🔎 GQM, Basili, Caldiera, Rombach, *Encyclopedia of Software Engineering*, 1994 : https://umiacs.umd.edu/node/12160
- 📖 GQM+Strategies, Mandić et Basili, TR-TOL-2010-2802 (résumé et introduction) : https://www.cs.umd.edu/users/basili/publications/technical/T142.pdf
- 🔎 GQM+Strategies, Basili et al., ESEM 2007 et IEEE Computer 2010 : https://publica.fraunhofer.de/handle/publica/355624
- 🔎 Valeur de l'information : Howard, « Information Value Theory », 1966 (notice bibliographique seule) : https://doi.org/10.1109/tssc.1966.300074
- 🔎 Hubbard, inversion de mesure et valeur de l'information (diapositives de l'auteur, constat tiré de ses missions) : https://hubbardresearch.com/wp-content/uploads/2020/11/HTMA-The-Principles-of-AIE-Module-3-PDF-20-Nov-2020.pdf
- 📖 Taylor, « Putting Decisions First » (décisions opérationnelles, DMN) : https://www.brcommunity.com/articles.php?id=b746
- 📖 Google HEART et Goals-Signals-Metrics, Rodden, Hutchinson, Fu, CHI 2010 : https://research.google.com/pubs/archive/36299.pdf
- 📖 Bezos, lettre aux actionnaires 2015 (décisions de type 1 et 2) : https://www.sec.gov/Archives/edgar/data/1018724/000119312516530910/d168744dex991.htm
- 📖 Bezos, lettre 2016 (« 70 % de l'information », « Resist Proxies ») : https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders
- 🔎 Règles précommises et critères d'arrêt, Annie Duke (entretien, source secondaire) : https://www.toptradersunplugged.com/?p=12430
- 🔎 Decision Intelligence et diagrammes causaux de décision, Pratt : https://www.theuncertaintyproject.org/tools/causal-decision-diagrams-cdd

**Tour 2 : familles de KPI et articulation**

- 📖 Google SRE Workbook, annexe B, politique de budget d'erreur : https://sre.google/workbook/error-budget-policy/
- 📖 DORA, métriques de performance de livraison et pièges courants : https://dora.dev/guides/dora-metrics/
- 📖 Amazon, entrées contrôlables et sorties (citation de *Working Backwards*, Bryar et Carr, via Commoncog) : https://commoncog.com/c/cases/amazon-incentives-category-expansion/
- 📖 Lean Analytics, One Metric That Matters, Croll et Yoskovitz (extrait O'Reilly) : https://oreilly.com/ideas/four-reasons-to-use-the-one-metric-that-matters
- 📖 Skok, SaaS Metrics 2.0, LTV/CAC et délai de récupération du CAC : https://www.forentrepreneurs.com/saas-metrics-2/
- 🔎 Limites de LTV/CAC en B2B (blog de praticiens, source à réserve) : https://www.upsales.com/revenue-journal/articles/2022/why-the-best-saas-companies-dont-bother-thinking-about-ltvcac/
- 🔎 Showback, chargeback, coût unitaire en FinOps et TBM (blog d'éditeur, source à réserve) : https://www.apptio.com/blog/tbm-and-finops-how-they-work-together/
- 🔎 Indicateurs appariés quantité et qualité, Grove, *High Output Management* (notes de lecture) : https://danlebrero.com/2023/04/12/high-output-management-summary/
- 🔎 Métriques de garde-fou et OEC, Kohavi, Tang, Xu, *Trustworthy Online Controlled Experiments* (page éditeur) : https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/metrics-for-experimentation-and-the-overall-evaluation-criterion/4EA73D169EC43B58991D6824717E8FD3

**Tour 3 : écueils et parades**

- 🔎 Goodhart (1975), Strathern (1997), Campbell (1976-1979) : https://en.wikipedia.org/wiki/Goodhart%27s_law (secondaire ; consulter les textes d'origine)
- 🔎 Variantes de la loi de Goodhart, Manheim et Garrabrant, 2018 : https://arxiv.org/abs/1803.04585
- 🔎 Surrogation, Choi, Hecht, Tayler, *Journal of Accounting Research*, 2013 : https://ideas.repec.org/a/bla/joares/v51y2013i1p105-133.html
- 🔎 Sophisme de McNamara, Yankelovich, 1971-1972 (secondaire) : https://en.wikipedia.org/wiki/McNamara_fallacy
- 🔎 Métriques de vanité, Ries, *The Lean Startup* (secondaire) : https://www.productplan.com/glossary/vanity-metrics/
- 🔎 Dérives de la North Star (Amplitude) : https://www.amplitude.com/blog/good-bad-north-star-metric
- 🔎 Dérives de la North Star (ProductPlan) : https://www.productplan.com/?p=7937
- 🔎 Critique de la North Star, Balfour, Reforge : https://roadmunk.com/guides/north-star-product-metrics-brian-balfour-reforge
- 🔎 Todd, *La Chute finale* (1976), chiffres rapportés en entretien : https://www.herodote.net/_La_Russie_nous_surprendra_toujours_-article-1468.php
- 🔎 Débat de 1981 sur la mortalité infantile soviétique (Davis et Feshbach, Eberstadt) : https://www.nybooks.com/articles/1981/11/05/the-health-crisis-in-the-ussr-an-exchange/
- 🔎 Approche par signaux, Kaminsky, Lizondo, Reinhart, Banque mondiale WP 1852 : https://econpapers.repec.org/RePEc:wbk:wbrwps:1852
- 🔎 Critique du ratio bruit/signal et prévision ex ante des crises : https://mpra.ub.uni-muenchen.de/117863/
- 🔎 Tetlock, taux de base et indicateurs d'alerte précoce : https://faculty.wharton.upenn.edu/wp-content/uploads/2016/11/Long-range-subjective-probability.pdf

**Limites de la recherche**

- Les livres (Hubbard, Bryar et Carr, Croll et Yoskovitz, Todd) n'ont pas été consultés. Les citations passent par des extraits ou des résumés.
- La lettre Bezos de 2016 porte la règle des « 70 % » (un résumé secondaire la plaçait en 2015). Celle de 2015 porte la distinction type 1 et type 2.
- Le cas Todd repose sur des sources secondaires. Les données soviétiques d'origine n'ont pas été vérifiées.
- Aucune source n'a été trouvée pour les seuils des exemples BMaaS : ce sont des ordres de grandeur à calibrer.
