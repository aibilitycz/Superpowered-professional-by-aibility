# Rédigez les règles d’IA pour l’équipe : une page pour les collègues et leur IA

L’IA, à partir de la directive et de deux situations réelles, rédige pour l’équipe ce qui est permis avec l’IA et ce qui relève toujours de la décision humaine.

## Rédigez les règles d’IA pour l’équipe : une page pour les collègues et leur IA

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec la directive et deux situations à portée de main.
## À quoi ça sert

Cette fiche s’adresse au manager ou au team leader qui décide comment l’équipe travaille avec l’IA. Lundi, Ondra vous demande s’il peut mettre un export des réclamations avec noms et téléphones des clients dans son compte personnel d’IA. Mercredi, vous découvrez que Lucie a laissé l’IA proposer quels clients voir leur réclamation refusée, et a envoyé trois refus sans ouvrir les commandes.

Quand les règles de l’équipe tiennent sur une page dans un dossier partagé et que l’IA des collègues les lit au début de chaque travail, celui qui hésite demande à son IA, qui répond selon vos règles.
## Ce qu’il faut préparer

- la directive d’entreprise sur l’IA ou un e-mail de l’IT ; si vous n’en avez pas, ce n’est pas grave,
- deux situations où un membre de l’équipe a hésité à utiliser l’IA, au moins une concernant une décision sur des personnes,
- un dossier partagé de l’équipe ouvert dans l’IA en mode Cowork ou Code,
- un collègue qui n’a pas rédigé la page et dispose de cinq minutes à la fin.
## Comment faire

1. Ouvrez le dossier partagé dans l’IA en mode Cowork ou Code, insérez le prompt de l’exercice IA et la directive, puis sous le prompt, écrivez les deux situations. L’IA enregistrera la page `pravidla-ai.md` dans le dossier.
2. Lisez la page et corrigez ce qui ne va pas : noms des personnes pour l’IT, données personnelles et droit, et ce qui relève toujours de la décision humaine. L’IA inscrira les questions ouvertes à la fin.
3. Le collègue qui n’a pas rédigé la page ouvre le dossier dans son IA et pose une question sur un nouveau cas, par exemple les primes annuelles. Là où il ne sait pas quoi faire, il demande à l’IA de compléter la page.

Avec un chat classique, reportez-vous à la section Quand vous êtes bloqué.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code, ouverte dans votre dossier :

Rédigez pour notre équipe une page de règles pour le travail avec l’IA. Elle sera lue par les collègues et par l’IA avec laquelle ils travaillent.

Basez-vous sur les règles d’entreprise que je vous fournirai ou que vous trouverez dans ce dossier, ainsi que sur deux situations de notre travail où des collègues ne savaient pas comment procéder avec l’IA. Les règles d’entreprise et les contrats clients ont la priorité. Ne complétez pas ce qui manque dans les documents, inscrivez-le dans la section Questions ouvertes, avec le nom de la personne qui prendra la décision. Si vous ne le savez pas, demandez-moi.

La page comporte cinq parties :
- Outils : quels outils IA l’équipe utilise et pour quel travail.
- Données : ce qui peut être mis dans quel outil, ce qui doit être remplacé par une désignation générale avant insertion (par exemple Client A) et ce qui ne doit jamais être mis dans l’IA, comme les mots de passe.
- Ce qui relève toujours de la décision humaine : décisions concernant les personnes (sélection des candidats, évaluations, primes, répartition du travail), réponses aux clients impliquant de l’argent ou une promesse, et tout ce qui ne peut pas être facilement annulé. Pour chaque point, indiquez qui décide et ce qu’il vérifie avant d’utiliser le résultat de l’IA, y compris les cas écartés par l’IA.
- Qui consulter : noms et contacts pour l’IT, les données personnelles et le droit.
- Que faire en cas d’erreur : actions immédiates, à qui signaler et dans quels délais.

Illustrez chaque règle par un exemple tiré de nos situations, sans noms de collègues. Soyez concis pour que même un nouveau collègue comprenne, et tenez-vous sur une seule page. En haut, indiquez qui est responsable des règles et quand aura lieu la prochaine révision. Si l’équipe utilise l’IA pour la sélection des candidats, l’évaluation des personnes ou la répartition du travail, ajoutez une question ouverte pour la personne en charge du droit ou des RH dans l’entreprise : comment le règlement européen sur l’IA (AI Act) évalue-t-il cet usage ?

Enregistrez la page sous le nom pravidla-ai.md dans ce dossier. Puis, dans AGENTS.md de ce dossier, écrivez : « Au début de chaque travail dans ce dossier, lis pravidla-ai.md et suis ses règles. Si tu rencontres une situation non couverte, signale-la en l’ajoutant avec la date, sans noms ni données personnelles, dans la section Questions ouvertes. Ne modifie pas les règles toi-même. » Si AGENTS.md n’existe pas, crée-le. Dans Cowork, inscrivez la même consigne dans les instructions du dossier.

Enfin, montre-moi la page et liste les questions ouvertes.

## Dans votre outil

### Microsoft Copilot
Cowork dans Copilot travaille uniquement avec les fichiers sur OneDrive et SharePoint et Microsoft ne précise pas qu’il lit `AGENTS.md`, donc suivez la consigne « L’entreprise autorise uniquement le chat classique ». Ajoutez le document Règles IA dans un Notebook (Bloc-notes, Nouveau bloc-notes), insérez dans Instructions « Suis le document Règles IA ; ce qu’il ne couvre pas, propose-le comme question pour [nom]. » et partagez le Notebook à l’équipe via Share.

### ChatGPT
Codex travaille avec un dossier partagé dans l’application ChatGPT pour ordinateur (passez en Codex, ouvrez un dossier) et lit `AGENTS.md` automatiquement. Sans Codex, suivez la consigne « L’entreprise autorise uniquement le chat classique » : mettez le document dans un projet, insérez dans ses consignes « Suis le document Règles IA ; ce qu’il ne couvre pas, propose-le comme question pour [nom]. » et partagez le projet via Share.

### Claude
Dans l’application Claude pour ordinateur, choisissez Cowork et Work in a folder, ou ouvrez le dossier dans Claude Code, qui lit `AGENTS.md` automatiquement. En Cowork, l’IA inscrit la consigne dans les instructions du dossier selon le prompt, et chaque collègue en Cowork demande à son IA de faire de même. Ceux qui travaillent uniquement en chat téléchargent la page dans un projet (Projects).

### Gemini
Gemini avec un compte professionnel ne travaille pas avec un dossier sur l’ordinateur, donc suivez la consigne « L’entreprise autorise uniquement le chat classique » avec le robot Gem. Dans Robots Gem, Nouveau Gem, ajoutez le document dans les Connaissances, insérez dans les instructions « Suis le document Règles IA ; ce qu’il ne couvre pas, propose-le comme question pour [nom]. » et partagez Gem via Share. Chargez la nouvelle version de la page dans les Connaissances en remplacement de l’ancienne.
## Ce qui relève toujours de la décision humaine

L’IA peut préparer un support, un ordre ou une proposition. La décision qui modifie la situation d’une personne est prise par un humain : qui sera convoqué à un entretien, qui obtient une augmentation, qui fait quel travail, qui voit sa réclamation refusée. Cette personne connaît les critères, voit les documents, a le temps de vérifier et peut refuser la proposition de l’IA. Si l’un de ces éléments manque, la vérification se limite à cliquer sur « j’accepte ».

L’erreur se cache souvent dans ce que l’IA a écarté. C’est pourquoi la personne doit aussi ouvrir quelques cas écartés, par exemple cinq CV choisis au hasard parmi ceux rejetés par l’IA. Celui qui décide doit pouvoir expliquer la décision à la personne concernée avec ses propres mots, sans dire « c’est sorti de l’IA ».

Quand l’IA aide l’équipe à sélectionner des candidats, évaluer des personnes, décider de promotions ou licenciements, répartir le travail selon le comportement ou les caractéristiques personnelles, ou suivre leur performance, cela peut être un système à haut risque selon le [AI Act européen](glossary:ai-act). À partir du 2 décembre 2027, l’entreprise devra notamment confier la supervision à une personne compétente et habilitée à modifier le résultat, et informer à l’avance les employés et leurs représentants du déploiement de cette IA. Si cela concerne votre usage, la personne en charge du droit ou des RH l’évaluera. L’AI Act interdit aussi, dès février 2025, la reconnaissance des émotions des personnes au travail par l’IA, sauf pour raisons médicales ou de sécurité.
## Comment l’IA des collègues suit les règles

En plus de la page, l’IA inscrit dans le fichier `AGENTS.md` du dossier partagé la consigne de s’y conformer ; en Cowork, elle l’inscrit aussi dans les instructions du dossier.

Quand un collègue ouvre directement le dossier partagé, l’IA lit `AGENTS.md` au début du travail. L’outil qui ne le fait pas automatiquement doit enregistrer la consigne de `AGENTS.md` dans ses paramètres pour ce dossier ; comment faire est expliqué dans la section « Dans votre outil ». Ensuite, l’IA des collègues lit les règles et inscrit dans les questions ouvertes les situations non couvertes.

Celui qui travaille uniquement en chat classique télécharge la page dans un [projet](card:asistent), c’est-à-dire un espace dans l’outil IA où l’IA voit les mêmes fichiers et consignes dans toutes les conversations. Les questions ouvertes issues du chat doivent cependant être envoyées à vous par le collègue.
## Que les règles évoluent avec l’équipe

La consigne dans `AGENTS.md` fait que l’IA des collègues ajoute dans les questions ouvertes chaque situation non couverte par la page. Une tâche planifiée peut les examiner une fois par mois et vous proposer des règles à ajouter. Insérez dans l’IA en mode Cowork ou Code cette consigne et demandez-lui de créer la tâche planifiée :

```text
Chaque premier jour ouvré du mois, passe en revue pravidla-ai.md dans le dossier partagé de l’équipe. Si de nouvelles situations sont apparues dans la section Questions ouvertes, propose-moi pour chacune une règle avec un exemple et indique qui doit l’approuver. Si la date de la prochaine révision est dépassée, rappelle-la-moi. Si rien n’a été ajouté, écris juste une phrase.
```

Si la tâche travaille avec un dossier sur votre ordinateur, elle ne fonctionnera que si l’ordinateur est allumé et l’application ouverte.
## Exemple

Martina dirige un support client de six personnes dans une boutique en ligne d’électronique. L’entreprise a une directive IT de mars : les données professionnelles ne doivent aller que dans l’IA d’entreprise, payée par l’entreprise. Martina a ouvert le dossier d’équipe « Support » en mode Cowork, inséré le prompt, la directive et les deux situations de lundi et mercredi. L’IA a rédigé la page, Martina a corrigé un nom et raccourci la partie sur les données autorisées :

```text
Règles IA dans le support (responsable : Martina Horáková, prochaine révision : 15/01/2027)

Outils : IA d’entreprise pour réponses clients, rapports et propositions. Pas de comptes IA personnels pour le travail.
Données : export des réclamations uniquement dans l’IA d’entreprise. Noms et téléphones des clients jamais dans les comptes personnels, mots de passe nulle part.
Ce qui relève toujours de la décision humaine : refus de réclamation, remise au-delà de 500 CZK et évaluation des collègues. L’IA prépare une proposition avec motif. L’opérateur décide pour la réclamation, Martina pour l’évaluation. Avant un refus, l’opérateur ouvre la commande et les photos.
Qui consulter : IT Pavel Krejčí, données personnelles Jana Malá (déléguée à la protection des données), tout le reste Martina.
En cas d’erreur : ne plus utiliser la conversation et informer Pavel et Jana Malá le jour même de ce qui a été envoyé et où.
Questions ouvertes : peut-on mettre les évaluations d’appels clients dans l’IA d’entreprise et la laisser proposer qui aider pour les appels difficiles ? Décision par Jana Malá avec les RH.
```

Le lendemain, Ondra a ouvert le même dossier dans son IA et a demandé : un client veut une remise de 800 CZK pour un retard de livraison et l’IA propose d’accepter, peut-il l’envoyer ? L’IA lui a répondu selon la page que la remise au-delà de 500 CZK est décidée par un humain et qu’elle ne la promet pas elle-même. Mais la page ne précisait pas qui. Martina a dit à l’IA d’ajouter dans la partie décision « La remise au-delà de 500 CZK est approuvée par Martina », ce que l’IA a fait.
## Quand vous êtes bloqué

- **L’entreprise autorise uniquement le chat classique :** insérez le prompt sans le paragraphe commençant par « Enregistrez la page sous », ajoutez la directive en fichier et écrivez les deux situations sous le prompt. L’IA vous rédigera la page directement dans le chat. Enregistrez-la comme document nommé Règles IA dans le dossier partagé de l’équipe et mettez-la dans un [projet partagé](card:asistent) où les collègues posent leurs questions ; comment faire dans votre outil est expliqué dans la section « Dans votre outil ». Là, le collègue posera aussi la question du nouveau cas du point 3 et vous enverra les questions ouvertes.
- **L’IA affirme avoir enregistré la page mais elle n’est pas dans le dossier :** vous travaillez probablement dans un chat classique qui ne peut pas enregistrer les fichiers. Passez en [Cowork ou Code](card:when-chat-is-not-enough) et ouvrez le dossier partagé. Si vous n’êtes pas autorisé à les utiliser, suivez la consigne ci-dessus.
- **L’IA des collègues ne suit pas les règles :** demandez au collègue d’ouvrir directement le dossier partagé, pas un sous-dossier, et de demander à l’IA si elle voit `pravidla-ai.md`. Si son outil ne lit pas automatiquement `AGENTS.md`, qu’il fasse enregistrer la consigne dans les paramètres du dossier.
- **La page est trop longue ou trop restrictive :** demandez à l’IA de réduire chaque partie à trois lignes et pour chaque interdiction d’écrire ce que l’équipe peut faire à la place.
## Ce qui sera prêt

Dans le dossier partagé de l’équipe, vous avez une page de règles IA avec des exemples de votre travail, des noms et des questions ouvertes. L’IA des collègues suit ces règles grâce à `AGENTS.md` ou aux paramètres du dossier et inscrit dans les questions ouvertes les situations non couvertes. Dans une équipe qui travaille uniquement en chat classique, les collègues ont la page dans leur projet. Un collègue qui n’a pas rédigé la page a résolu un nouveau cas selon celle-ci.
## Limites juridiques

Cette fiche vous aide à rédiger les règles d’équipe, ne remplace pas un conseil juridique et ne garantit pas que les règles respectent le RGPD ou l’AI Act. Ce que vous pouvez faire est défini par les règles de votre entreprise, les contrats clients, le [RGPD](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces) et l’[AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces). L’AI Act impose aux entreprises utilisant l’IA de prendre des mesures pour soutenir la littératie en IA des personnes qui l’utilisent. La page de règles d’équipe peut en faire partie.
## Et ensuite

Présentez les règles à l’équipe en réunion et, à partir des questions des collègues, faites compléter la page par l’IA. Comment faire est expliqué dans la fiche [montrez à l’équipe la procédure IA](card:team-adoption-cycle). D’autres consignes pour l’IA dans le dossier partagé, par exemple comment rédiger les réponses aux clients, sont ajoutées dans `AGENTS.md`. Comment faire est expliqué dans une [fiche séparée](card:agents-md).
## Règlement européen sur l'IA

**Qu'est-ce que c'est :** Le règlement européen sur l'intelligence artificielle. Il distingue différents rôles, modes d'utilisation et niveaux de risque, et impose des obligations spécifiques aux fournisseurs ainsi qu'aux entités qui déploient ou utilisent l'IA dans la pratique professionnelle.

**Ce que ce n'est pas :** Ce n'est pas une interdiction générale de l'IA ni une règle unique applicable de manière identique à chaque outil et tâche. Le simple fait qu'un élément utilise l'IA ne détermine pas à lui seul une catégorie juridique ni une obligation spécifique.

**Pourquoi l'étudiant en a besoin :** Il aide à identifier quelles situations pratiques nécessitent un contrôle supplémentaire et où poursuivre dans la bibliothèque.

| Votre situation | Poursuivez ici |
|---|---|
| L'IA influence une décision concernant une personne spécifique | [Règles IA pour l'équipe](card:pravidla-pro-tym) |
| Vous décidez de l'utilisation de l'IA pour une organisation, un client ou votre pratique professionnelle | [Règles IA pour l'équipe](card:pravidla-pro-tym) |
| Les données concernent des personnes | [Ce que vous pouvez soumettre à l'IA](card:bezpecne-pouzivani); ici s'appliquent également les règles du RGPD |

La maîtrise de l'IA par les personnes qui l'utilisent pour l'organisation, ainsi que le fait que la décision finale dans le travail avec l'IA revient toujours à un humain, sont traités dans la fiche `pravidla-pro-tym`.

**Source :** [Règlement (UE) 2024/1689, en particulier l'article 4 et l'article 50](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces)

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Panne de service, limite ou chat saturé

Fallback commun pour les interruptions opérationnelles lors du travail avec l'IA. Accessible depuis chaque carte via l'entrée **Panne ou limite atteinte**. Ne crée pas de carte propre, de check-in ni plusieurs copies du même texte.

La section spécifique **Quand quelque chose ne fonctionne pas** dans la carte traite les erreurs d'entrée, de données, d’outil ou de procédure. Ce mécanisme se déclenche lorsque l’IA ne peut techniquement pas poursuivre le passage.

## Distinguez d’abord ce qui s’est passé

| Ce que vous voyez | Situation probable | Première étape |
|---|---|---|
| L’outil signale une limite atteinte, trop de requêtes ou un délai de réinitialisation | limite tarifaire ou opérationnelle temporaire | notez l’heure de réinitialisation et sauvegardez un point de reprise |
| L’IA oublie le début, refuse une pièce jointe supplémentaire ou signale une entrée trop longue | contexte, fichier ou tâche trop volumineux | créez un transfert et poursuivez dans un nouveau contexte ou environnement plus adapté |
| L’outil ne répond pas, renvoie une erreur serveur ou plusieurs modèles échouent | panne de service | vérifiez le statut officiel et choisissez un remplacement approuvé ou une pause |

Si l’IA répond encore, elle peut nommer la situation et préparer un point de reprise. Sinon, passez cette étape. Répéter la même requête ne sauvera pas l’état du travail.

## Sauvegardez un point de reprise

Avant d’attendre ou de changer d’environnement, conservez le plus petit ensemble permettant de poursuivre en toute sécurité :

```text
Objectif : ...
Ce qui est fait et où : ...
Décisions confirmées et contraintes : ...
Sources ou fichiers utilisés : ...
Prochaine étape la plus proche : ...
Ce qui ne doit pas être modifié ou recréé : ...
```

Si l’IA répond toujours, utilisez :

> Prépare-moi un point de reprise succinct pour continuer dans un nouveau chat ou outil. Conserve l’objectif, les parties terminées, les décisions confirmées, les sources, les contraintes et une prochaine étape. Ne crée rien qui ne figure pas dans la conversation.

Pour un travail plus long, enregistrez le point de reprise dans le README du projet ou un autre espace de travail approuvé. Les entrées sensibles restent uniquement dans un stockage approuvé.

## Limite tarifaire ou opérationnelle atteinte

1. Identifiez quand la limite sera réinitialisée et si elle concerne un modèle, une fonction ou tout le compte.
2. Choisissez entre pause, réduction de l’étendue et modèle ou environnement de remplacement approuvé.
3. Lors du passage, transférez le point de reprise et uniquement les données nécessaires à l’étape suivante.
4. Vérifiez que le remplacement supporte les fichiers, outils et actions requis. Un modèle plus faible peut suffire pour la mise en forme mais échouer en analyse ou travail avec outils.

## Contexte, fichier ou tâche trop volumineux

1. Faites créer un transfert par l’IA avant qu’elle ne perde les décisions antérieures, si elle répond encore.
2. Lancez un nouveau chat ou projet avec le point de reprise et les liens vers les fichiers canoniques.
3. Divisez le travail en unités cohérentes et conservez des critères communs de résultat. Une découpe aléatoire peut perdre les relations entre parties.
4. Si la tâche nécessite plusieurs fichiers, un travail en masse ou des modifications de projet, poursuivez via la carte `when-chat-is-not-enough`.

## Panne d’outil ou de modèle

1. Vérifiez le statut officiel du fournisseur. Traitez les erreurs de compte uniquement si le service fonctionne globalement.
2. Sauvegardez un point de reprise hors de la conversation actuellement défaillante, si elle est encore accessible.
3. Utilisez un outil de remplacement approuvé uniquement s’il possède les capacités nécessaires et que les mêmes données peuvent y être introduites.
4. Si aucun remplacement adapté n’existe, suspendez le travail et notez précisément la prochaine étape. Reprenez après restauration à partir du dernier résultat confirmé.

## Limites de sécurité

- Une limite ou panne ne justifie pas d’introduire des données professionnelles, clients ou personnelles dans un outil personnel non approuvé.
- Un nouveau compte, un forfait gratuit ou un autre fournisseur peut avoir des conditions différentes concernant les données, leur conservation et leur entraînement.
- Le passage entre modèles peut modifier le format, la précision et les outils disponibles. Comparez la première sortie après reprise avec le dernier point confirmé.
- Ne renvoyez pas une action qui a pu s’exécuter avant l’erreur sans vérifier son état. Cela concerne notamment l’écriture dans un système, l’envoi d’un message, un achat ou une suppression.

## Retour à la carte

Après restauration du service ou passage dans un environnement adapté :

1. chargez le point de reprise,
2. montrez à l’IA le dernier résultat confirmé,
3. demandez uniquement la prochaine étape la plus proche,
4. terminez la carte d’origine sans répéter le travail déjà fait,
5. si l’outil ou modèle a changé, notez la différence pouvant avoir influencé le résultat.

## Traçabilité

Le mécanisme ne crée pas de réalisation autonome. Il peut uniquement ajouter au résultat de la carte principale un point de reprise, le chemin choisi et une éventuelle différence après changement d’outil.
