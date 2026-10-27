# Laissez l'IA enregistrer l'état des tâches : votre collègue sait où en est votre travail

L'IA trouve ou crée automatiquement une tâche dans l'outil de votre équipe pour chaque travail, la fait avancer et la clôture.

## Laissez l'IA enregistrer l'état des tâches : votre collègue sait où en est votre travail

**Difficulté : moyenne.**\
**Durée : environ 15 minutes** avec un travail que vous réalisez aujourd'hui.
## À quoi ça sert

Vous avez terminé la comparaison de trois offres pour de nouvelles fenêtres depuis mardi, mais la tâche dans l'outil est toujours en statut À faire. Jeudi, votre manager vous contacte à ce sujet et une collègue a recommencé à comparer les offres.

Une règle pour l'IA aide : elle change automatiquement le statut de la tâche pendant le travail et y inscrit le résultat avec un lien à la fin, ainsi le statut est toujours à jour, même si vous oubliez.
## Ce qu'il faut préparer

- un travail que vous ferez aujourd'hui avec l'IA, par exemple comparer des offres ou préparer des documents pour une réunion,
- l'outil de gestion des tâches de votre équipe, comme Planner, Asana ou Jira ; la connexion est parfois autorisée par l'IT,
- un dossier projet partagé avec l'équipe, synchronisé depuis OneDrive ou SharePoint par exemple,
- l'IA en [mode](glossary:workmode) Cowork ou Code ; elle indique où elle se trouve dans le bloc Dans votre outil.
## Comment faire

1. Insérez le prompt dans l'IA en mode Cowork ou Code et ajoutez l'outil de gestion des tâches et le travail du jour. L'IA se connectera à l'outil ; vous validerez la connexion.
2. Confirmez le compte que l'IA utilisera pour écrire et indiquez quels statuts signifient en cours et terminé. L'IA enregistrera ces statuts ou colonnes dans la règle et réalisera le travail.
3. Ouvrez la tâche dans l'outil et vérifiez ce que votre collègue y verra. Le statut et le lien doivent correspondre au rapport de l'IA.

Dans la tâche, il suffit d'un statut, d'une phrase sur le résultat et d'un lien ; le reste va dans le journal de travail, le carnet de projet.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l'IA en mode Cowork ou Code, ouverte dans le dossier projet, et ajoutez sur les deux dernières lignes l'outil et le travail :

Je veux que l'état de mon travail s'enregistre automatiquement dans l'outil de gestion des tâches utilisé par notre équipe, pour que mes collègues sachent où en est le travail sans me demander. Configure ça et applique-le immédiatement au travail que je vais te donner. L'outil et le travail sont sur les deux dernières lignes.

1. Connecte-toi à l'outil de gestion des tâches. Utilise le connecteur disponible ici. S'il manque ou ne permet que la lecture, connecte-toi toi-même, par exemple via un serveur MCP (pour Planner, Work IQ de Microsoft) ou le service Composio. Si je dois m'identifier ou autoriser quelque chose, indique-moi précisément où et attends. Si la connexion doit être autorisée par l'IT, rédige une courte demande pour l'IT expliquant quoi et pourquoi connecter. Si l'équipe gère les tâches dans un tableau ou un fichier, travaille dedans. Si tu ne peux pas écrire dans les fichiers du dossier projet, dis-le-moi immédiatement et conseille-moi où basculer.

2. Vérifie directement dans l'outil sous quel compte tu écris et indique-le-moi avec le projet ou le tableau où tu écris. Si tu peux écrire avec plusieurs comptes, demande-moi lequel utiliser. Liste-moi les statuts et colonnes des tâches visibles dans l'outil et demande-moi lesquels signifient en cours et terminé.

3. Écris dans AGENTS.md dans le dossier projet cette règle et remplis les crochets selon ce que nous avons découvert. Si AGENTS.md n'existe pas, crée-le. Assure-toi de le lire dans cet outil au début de chaque travail ; en mode Cowork, inscris la règle dans les instructions du dossier.

### État du travail
- Les tâches sont gérées dans [outil, projet ou tableau]. Écris toujours via le compte [compte] et mentionne-le dans chaque rapport.
- Au début du travail, trouve la tâche correspondante et passe-la à [en cours]. Si aucune n'existe, crée-la avec un titre court et assigne-la à moi.
- Si le travail attend quelqu'un d'autre, écris dans la tâche en une phrase à qui et pourquoi.
- À la fin, ajoute en haut de worklog.md dans le dossier projet un enregistrement avec un lien vers le résultat, au format des enregistrements précédents. Si worklog.md n'existe pas, crée-le et écris l'enregistrement ainsi : date, ce qui a été fait, lien vers le résultat et prochaine étape. Si une règle pour le worklog existe déjà dans AGENTS.md, saute cette ligne et ajoute juste le lien au résultat à cette règle.
- Dans la tâche, écris un commentaire avec le résultat en une phrase et un lien que le collègue pourra ouvrir, puis passe-la à [terminé]. Si le résultat est uniquement sur cet ordinateur, demande-moi où le sauvegarder. Si le travail n'est pas terminé, laisse la tâche en cours et écris ce qui reste à faire.
- Après chaque écriture, recharge la tâche et le worklog et vérifie qu'ils contiennent ce que tu as écrit. Ce n'est qu'ensuite que tu me dis que c'est terminé. Si l'enregistrement ne correspond pas, corrige-le, et si tu ne peux pas, dis-le-moi.

4. Ensuite, réalise le travail de la dernière ligne selon cette règle. À la fin, donne-moi le lien vers la tâche, son statut tel que tu le vois dans l'outil, et le compte utilisé pour écrire.

Outil de gestion des tâches :
Travail :

## Dans votre outil

### Microsoft Copilot
Insérez le prompt dans Copilot Cowork sur `copilot.cloud.microsoft` (sélecteur à côté de Chat ; licence Microsoft 365 Copilot). Ajoutez l'outil de gestion des tâches dans Customize, Plugins, sinon demandez à l'IT. Ajoutez à la fin du prompt : « Je n'ai pas de dossier : tiens le worklog comme un document Word sur OneDrive, ne crée pas de fichier de règles et écris la règle comme un texte commençant par ‘Pour le projet [nom] :’. » Collez ce texte à gauche dans Customize, Preferences.

### ChatGPT
Le mode Code est dans ChatGPT Codex : dans l'application ChatGPT pour ordinateur, sélectionnez-le et ouvrez le dossier projet (open a folder). Codex lit `AGENTS.md` automatiquement et connecte l'outil via un serveur MCP ; vous le trouverez dans Settings, MCP servers, où vous pouvez vous authentifier. Si vous ne voyez pas Codex, l'administrateur l'a probablement désactivé, demandez-lui de l'activer.

### Claude
Dans l'application Claude pour ordinateur, ouvrez Cowork ou Claude Code et sélectionnez le dossier projet ; les deux sont dans les offres payantes. Cowork inscrit la règle dans les instructions du dossier (Folder instructions), Claude Code lit `AGENTS.md`. Connectez l'outil de gestion des tâches, comme Asana ou Linear, dans le panneau gauche sous Customize, Connectors ; dans l'entreprise, c'est le propriétaire de l'organisation qui l'ajoute.

### Gemini
L'application Gemini ajoute la tâche dans Google Tasks et la marque comme terminée si vous écrivez @Google Tasks dans le prompt. Elle ne tient pas le worklog dans le dossier car elle ne travaille pas avec le dossier local. L'exercice complet est réalisé par Antigravity, un outil Google qui travaille directement dans votre dossier et lit `AGENTS.md` ; avec un compte d'entreprise, vous l'utilisez via Gemini Enterprise, demandez-le à l'IT.
## Tâche, worklog et fichier de règles

L'IA écrit à deux endroits et suit un seul fichier de règles. La tâche dans l'outil est visible par toute l'équipe : l'IA y inscrit le statut et à la fin une phrase avec un lien vers le résultat. Le statut est une colonne, une étiquette ou la progression de la tâche, par exemple À faire, En cours ou Terminé. Si l'équipe n'a pas d'outil, un tableau ou un fichier `taches.md` dans un dossier partagé peut suffire.

Le [worklog](card:project-worklog), journal de projet, est un fichier `worklog.md` dans le dossier projet. L'IA y ajoute à la fin ce qui a été fait avec un lien vers le résultat, pour retrouver le travail même un mois plus tard.

`AGENTS.md` est un fichier d'instructions pour l'IA dans le dossier projet, que l'IA lit au début de chaque travail ; en mode Cowork, les instructions du dossier jouent ce rôle. L'IA se connecte à l'outil via un connecteur ou via [MCP](glossary:mcp), un standard ouvert pour connecter des applications à l'IA. Si le connecteur manque, elle utilise un service d'intégration comme Composio ; la carte sur le [transfert de données entre applications](card:cross-app-workflow) montre comment l'IA configure ce service.
## Pourquoi l'IA nomme le compte et vérifie l'écriture

Deux règles dans le prompt, le compte dans chaque rapport et la vérification après écriture, sont nées d'erreurs que nous avons faites. Nous gérons les tâches dans Linear et l'IA écrit via un service connecté à plusieurs applications, parfois avec plusieurs comptes. Sans sélection explicite, elle écrivait parfois avec un compte inattendu. Depuis, elle choisit toujours le compte et le mentionne dans le rapport.

La deuxième erreur : l'outil confirmait l'écriture mais le statut ne changeait pas. L'IA recharge donc la tâche après chaque écriture et ne dit terminé que si elle voit ce qu'elle a écrit.
## Exemple

Jakub est chef de projet dans une entreprise de construction et gère les tâches dans Asana. Le mardi 20/10/2026, il ouvre l'IA en mode Cowork dans le dossier `Rénovation école Lipová`, insère le prompt et ajoute :

```text
Outil de gestion des tâches : Asana, projet Rénovation école Lipová
Travail : Compare trois offres pour le remplacement des fenêtres dans le dossier Offres dans un tableau (prix, délai, garantie) et rédige une recommandation pour la directrice technique.
```

Jakub confirme la connexion avec son compte professionnel. L'IA liste les colonnes À faire, En cours, En attente d'approbation et Terminé, et Jakub indique que le travail terminé va en En attente d'approbation car la directrice technique valide les offres. L'IA trouve la tâche « Comparer les offres fenêtres », la passe en En cours et compare les offres. Après la dernière écriture, elle recharge la tâche et constate qu'elle est restée en En cours. Elle la déplace à nouveau, vérifie le statut et répond :

```text
Écrit via le compte Jakub Dvořák (Asana, Bâtiments Morava).
- La tâche « Comparer les offres fenêtres » est dans la colonne En attente d'approbation, avec la recommandation et un lien vers le tableau Comparaison_fenetres.xlsx sur SharePoint.
- Le premier déplacement n'a pas été enregistré ; après la deuxième tentative, le déplacement est confirmé.
- Worklog : l'enregistrement du 2026-10-20 est en haut de worklog.md.
```

Le mercredi matin, la directrice technique Hana ouvre le projet dans Asana, voit la tâche en En attente d'approbation avec le lien vers le tableau et approuve la recommandation sans écrire à Jakub.
## En cas de blocage

- **L'IA ne peut pas accéder à l'outil de gestion des tâches :** le connecteur manque ou ne peut pas être activé en entreprise. Demandez à l'IA de préparer une courte demande pour l'administrateur IT. En mode Code, l'IA se connecte à Planner via Work IQ, serveur MCP de Microsoft, que l'IT active une fois. Quand l'IT autorise la connexion, écrivez dans le même chat « IT a activé, continue ». La carte [Connectez un connecteur](card:plugin-connector) montre comment l'IA connecte d'autres applications.
- **L'IA crée une nouvelle tâche alors qu'une existe déjà :** dites-lui comment reconnaître la tâche, par exemple par projet et titre, et qu'elle ajoute cela à la règle.
- **L'IA annonce terminé mais la tâche est dans l'ancien statut :** écrivez « Recharge la tâche et montre-moi ce que tu vois ». Si la vérification n'apparaît pas dans le rapport, demandez à l'IA de vérifier qu'elle a la règle dans `AGENTS.md` ou dans les instructions du dossier.
- **L'IA travaille hors du dossier projet et ne connaît pas la règle :** vous êtes probablement dans un chat classique. Passez en [Cowork ou Code](card:when-chat-is-not-enough) et ouvrez le dossier projet.
## Ce qui sera prêt

Le travail d'aujourd'hui a une tâche que l'IA a elle-même déplacée jusqu'à Terminé et y a inscrit le résultat avec un lien, et son enregistrement est dans le worklog. La règle dans `AGENTS.md`, dans les instructions du dossier ou dans la configuration de votre IA fera de même pour chaque travail suivant. Votre collègue trouvera l'état de votre travail dans l'outil de gestion des tâches sans vous demander.
## Et après

Pour que l'état soit aussi mis à jour pour le travail dans les e-mails et réunions, configurez une [tâche planifiée](card:recurring-ai-task) qui complète chaque soir les tâches selon les e-mails, chats et réunions du jour. Pour vérifier que la règle fonctionne toujours après quelques semaines, consultez la [revue hebdomadaire de la configuration](card:weekly-ai-review).
## MCP

**Qu'est-ce que c'est :** Un standard technique ouvert (Model Context Protocol) par lequel l'IA se connecte aux applications et aux sources de données. Une application ou un fournisseur de données propose un serveur MCP, et l'IA lit les données ou exécute des actions autorisées via ce serveur. Dans la configuration des outils, cette connexion est souvent appelée connecteur ou serveur MCP.

**Ce que ce n'est pas :** Ce n'est ni une application autonome ni un modèle d'IA. Le standard lui-même ne télécharge rien ; il nécessite un serveur fourni par un prestataire, souvent un compte chez ce dernier, ainsi qu'une autorisation activée par un utilisateur ou un administrateur.

**Pourquoi l'étudiant en a besoin :** Cela aide à comprendre quand l'IA accède à des données en dehors du web public et qui doit activer cette connexion.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

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
