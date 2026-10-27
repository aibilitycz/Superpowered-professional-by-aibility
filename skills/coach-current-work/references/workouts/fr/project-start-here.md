# Créez votre README : page d'accueil du projet

L'IA rédige la page d'accueil du projet, permettant à un collègue ou à un nouveau chat de connaître immédiatement l'état et le document valide.

## Créez votre README : page d'accueil du projet

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec un projet en cours.
## À quoi ça sert

Dans une semaine, vous partez en vacances et votre collègue Marek prend en charge la préparation de la conférence d'entreprise à Olomouc. Dans le dossier du projet se trouvent `catering_final.docx`, `catering_final_2.docx`, des notes de réunion et le programme de l'année dernière. Vous savez que la deuxième offre de catering est celle qui est valide et que le programme de l'année dernière sert seulement de modèle. Ni Marek ni un nouveau chat ne peuvent le deviner d'après les noms des fichiers, et vous devriez lui expliquer cela à la hâte par téléphone.

Une page d'accueil du projet, un README en anglais, serait utile. L'IA la rédige à partir des documents du dossier, et Marek comme un nouveau chat sauront immédiatement quel document est valide et quelle est la prochaine étape.
## Ce qu'il faut préparer

- un dossier avec un projet en cours sur votre ordinateur ou synchronisé avec celui-ci,
- des notes ou e-mails relatifs au projet qui ne sont pas dans le dossier,
- une IA en [mode](glossary:workmode) Cowork ou Code, capable de travailler avec les fichiers sur l'ordinateur.
## Comment faire

1. Ouvrez Cowork ou Code dans le dossier du projet et insérez le prompt, suivi des notes qui ne sont pas dans le dossier. L'IA analysera les documents et posera des questions sur ce qu'elle ne comprend pas.
2. Répondez aux questions. L'IA enregistrera `README.md` et ajoutera dans `AGENTS.md` une règle pour qu'elle le lise et le maintienne à jour. Vérifiez surtout si elle a bien identifié quel document est valide.
3. Dans un nouveau chat dans le même dossier, demandez quel document est utilisé et quelle est la prochaine étape. Une bonne réponse nommera le document que le README désigne comme valide.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans une IA en mode Cowork ou Code, ouverte dans votre dossier :

Rédige un README pour ce projet : une page d'accueil qui permet à un collègue ou à un nouveau chat de comprendre immédiatement de quoi il s'agit et comment continuer. Si tu n'as pas accès au dossier du projet et ne peux pas y enregistrer de fichiers toi-même, dis-le-moi tout de suite pour que je puisse passer en mode Cowork ou Code.

Parcours tous les documents dans le dossier du projet ainsi que les notes que je te donne sous cette consigne. S'il y a déjà un README ou une autre page d'accueil dans le dossier, modifie-le sans en créer un nouveau.

Rédige le README pour qu'il tienne sur une page, avec ces sections :
- De quoi il s'agit : objectif du projet, pour qui, et échéance.
- Où en sommes-nous : ce qui est terminé, ce qui ne l'est pas, la prochaine étape et qui la fera.
- Ce qui ne fait pas partie du projet : ce que nous avons exclu ou mis de côté.
- Quels documents sont valides : pour chaque fichier important, un lien, son usage, et s'il est valide, sert de modèle ou n'est plus valide.
- Où trouver quoi : bref aperçu des dossiers et fichiers.
- Mis à jour : date du jour.

Ne réécris pas le contenu des documents, réfère-toi à eux. Si deux documents disent des choses différentes ou si tu ne sais pas lequel est valide, demande-moi. Ne te base pas sur le mot « final » ni sur la date. Pose-moi toutes les questions en une fois, uniquement celles auxquelles les documents ne répondent pas. Après mes réponses, enregistre la page sous README.md dans le dossier principal du projet.

Enfin, ajoute dans le fichier AGENTS.md du dossier du projet la règle : « Avant de travailler sur le projet, lis README.md. Si l'objectif, l'état, la prochaine étape ou le document valide changent, modifie README.md. » Si AGENTS.md n'existe pas, crée-le. Assure-toi que cet outil le lise au début de chaque travail ; dans Cowork, inscris-le dans les instructions du dossier.

## Dans votre outil

### Microsoft Copilot
Vous trouverez Cowork à côté du bouton Chat ; s'il n'y est pas, demandez-le à votre administrateur IT. Il ne voit que les fichiers sur OneDrive et SharePoint, donc ajoutez à la fin du prompt : « Travaille dans le dossier du projet sur OneDrive, tiens le README comme un document Word et écris la règle pour Customize, Preferences. » À l'étape 3, indiquez dans une nouvelle tâche où se trouve le projet. Les tâches planifiées se trouvent sur la page Automations.

### ChatGPT
Dans l'application ChatGPT pour ordinateur, passez en mode Codex, choisissez ouvrir un dossier (open a folder) et sélectionnez le dossier du projet. Codex lit `AGENTS.md` automatiquement et crée une tâche planifiée si vous le lui demandez ; vous la trouverez sous Scheduled. Si vous ne voyez pas Codex, il est probablement désactivé par votre administrateur, demandez-lui de l'activer.

### Claude
Dans l'application Claude pour ordinateur, ouvrez Cowork et sélectionnez le dossier du projet, ou ouvrez-le dans Claude Code ; les deux nécessitent un abonnement payant. Cowork inscrit la règle dans les instructions du dossier (Folder instructions), Claude Code lit `AGENTS.md`. L'IA crée une tâche planifiée si vous le lui demandez, visible dans le panneau gauche sous Scheduled.

### Gemini
Gemini n'enregistre pas dans un dossier sur l'ordinateur. Joignez les documents via Add from Drive, ajoutez à la fin du prompt : « Tu n'as pas accès au dossier, ne me change pas de mode et travaille avec les documents joints. » et enregistrez le README via Share & export, Export to Docs. Faites l'étape 3 dans Gemu (Gems, New Gem) avec le README dans Knowledge et la consigne « Réponds selon le README » ; partagez-le à votre collègue via Share.
## Qu'est-ce que le README

[README](glossary:readme) signifie en anglais « lis-moi ». C'est le fichier d'accueil qu'on ouvre en premier dans un dossier de projet. Sur une page, il explique de quoi le projet traite, son état, la prochaine étape, quel document est valide et où trouver quoi. Il vous sera utile aussi si vous revenez au projet après deux semaines.

L'extension `.md` signifie un fichier en [Markdown](glossary:markdown) : un texte simple où les dièses `#` en début de ligne indiquent les titres. Ouvrez-le dans n'importe quel éditeur de texte, par exemple le Bloc-notes sous Windows, et l'IA peut le lire et le modifier sans conversion.

`AGENTS.md` est un fichier de règles pour l'IA dans le même dossier. Plusieurs outils en mode Code le lisent automatiquement au début de chaque travail, donc vous n'avez pas à rappeler à l'IA de lire le README. Là où l'outil ne le fait pas, l'IA enregistre la règle dans ses paramètres ou vous indique où la placer.

Le README ne fait que référencer les documents et indique leur usage ; si l'IA ne sait pas quel document est valide d'après leur contenu, elle vous demande. Pour Marek, la bonne réponse à l'étape 3 nommerait `catering_final_2.docx`.

Un chat classique ne peut pas enregistrer le README dans le dossier car il n'y a pas accès. Si vous n'avez pas d'autre IA, créez au moins un [projet dans le chat](card:asistent) ou voyez comment [passer en Cowork ou Code](card:when-chat-is-not-enough).

Le mot `final` dans le nom ou la date la plus récente ne prouvent pas qu'un document est valide.
## Pour que le README ne devienne pas obsolète

Une tâche planifiée met à jour le README chaque semaine selon les réunions et e-mails. La règle dans `AGENTS.md` couvre le travail que vous faites avec l'IA dans le dossier du projet. Mais l'état du projet change aussi ailleurs, par exemple en réunion ou par e-mail. Donnez cette consigne à l'IA en mode Cowork ou Code et demandez-lui de créer une tâche planifiée :

```text
Chaque vendredi à 15h00, parcours le dossier du projet ainsi que les e-mails et réunions de la semaine qui concernent le projet et auxquels tu as accès. Si l'état, la prochaine étape ou le document valide ont changé, modifie README.md : ne change que les lignes concernées et la date de mise à jour. Si rien n'a changé, laisse le README tel quel. À la fin, écris-moi ce que tu as modifié.
```

Si la tâche travaille avec des fichiers sur votre ordinateur, elle ne fonctionnera que si l'ordinateur est allumé et l'application ouverte.
## Exemple

Lucie choisit un nouveau prestataire de nettoyage pour les agences de Brno et Zlín. L'IA parcourt le dossier et pose deux questions : quelle des deux offres de la société Čistota est valide et si la société Blesk est toujours en lice. Puis elle écrit :

```text
# Choix du prestataire de nettoyage
Mis à jour : 9. 10. 2026

### De quoi il s'agit
Nouveau prestataire de nettoyage pour les agences de Brno et Zlín à partir du 1. 1. 2027.

### Où en sommes-nous
Les visites des bâtiments ont eu lieu, deux sociétés restent en sélection.
Prochaine étape : Lucie organise d'ici le 20. 10. des réunions avec les deux sociétés.

### Ce qui ne fait pas partie du projet
Le nettoyage des fenêtres reste confié à la société actuelle.

### Quels documents sont valides
- nabidka_cistota_v2.pdf : valide, prix après visite.
- nabidka_cistota.pdf : non valide, remplacée par la v2.
- nabidka_uklidplus.pdf : valide.
- porovnani-cen.xlsx : valide, comparaison des deux offres.
- nabidka_blesk.pdf : non valide, la société Blesk a été éliminée.

### Où trouver quoi
Les offres dans le dossier nabidky, photos et notes des visites dans le dossier prohlidky.
```

Une semaine plus tard, dans un nouveau chat, Lucie demande quel prix de la société Čistota doit être pris pour la comparaison. Une bonne réponse prendra le prix dans `nabidka_cistota_v2.pdf` et ne mentionnera pas la société Blesk. Si l'IA utilise l'ancienne offre, dites-lui de corriger la ligne correspondante dans le README.
## En cas de blocage

- **L'IA affirme avoir enregistré le README, mais il n'est pas dans le dossier :** vous travaillez probablement dans un chat classique qui ne peut pas modifier les fichiers. Passez en [mode Cowork ou Code](card:when-chat-is-not-enough) et ouvrez le dossier du projet.
- **Vous ne savez pas quel document est valide :** demandez à l'IA de vous montrer les différences entre les documents. Décidez vous-même ou la personne qui dirige le projet, et l'IA l'enregistrera.
- **Le README est trop long ou recopie les documents :** demandez à l'IA de le réduire à une page et de ne laisser que des liens au lieu du contenu.
- **Le nouveau chat répond selon un ancien document :** ouvrez un chat dans le même dossier du projet et vérifiez que `README.md` et `AGENTS.md` s'y trouvent. Puis demandez à l'IA de lire le README.
## Ce qui sera prêt

Vous avez un `README.md` qui permet à quiconque de continuer le projet sans questions supplémentaires. Dans `AGENTS.md` se trouve une règle qui fait que l'IA le lit avant de travailler et le modifie en cas de changement. Dans un nouveau chat, vous avez vérifié que l'IA trouve le document valide selon le README et connaît la prochaine étape.
## Et après

Si vous voulez avoir tous vos projets ainsi organisés en même temps, créez un [PACT](card:pact-workspace). Si vous souhaitez configurer d'autres tâches que l'IA effectue régulièrement seule, consultez la [tâche planifiée](card:recurring-ai-task).
## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## README / Commencez ici

**Qu'est-ce que c'est :** Un fichier ou une page d'introduction courte qui explique ce que contient le projet, ce qui est à jour, où trouver les ressources importantes et comment les utiliser, que ce soit par une personne ou une IA.

**Ce que ce n'est pas :** Ce n'est pas une copie de tous les documents ni un manuel long supplémentaire pour le projet.

**Pourquoi l'étudiant en a besoin :** Cela aide les personnes et l'IA à savoir rapidement où commencer et quels documents sont à jour et obligatoires.

## Mode de travail

**Qu'est-ce que c'est :** Type d'interaction avec l'IA : chat, canvas/artifact, agent, codage, recherche. Différentes tâches nécessitent différents modes.

**Ce que ce n'est pas :** Ce n'est pas un niveau de maturité. Le mode est choisi par l'utilisateur selon la tâche, pas selon son score.

**Pourquoi l'étudiant en a besoin :** Apprend à reconnaître quand passer du chat à un autre environnement pour un meilleur résultat.

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
