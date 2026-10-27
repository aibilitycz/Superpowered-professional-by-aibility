# Configurez un workflow multi-applications : l'IA transfère les données pour vous

L'IA transfère automatiquement les données que vous recopiez entre applications, comme les candidatures d'e-mails vers un tableau.

## Configurez un workflow multi-applications : l'IA transfère les données pour vous

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec des données que vous recopiez manuellement.
## À quoi ça sert

Vous avez reçu 23 candidatures pour un poste d'assistant de production en une semaine, et le responsable doit avoir la liste pour vendredi. Vous recopiez chaque candidature dans un tableau, répondez aux candidats que vous avez bien reçu leur dossier, et au quinzième, vous découvrez une erreur dans un numéro de téléphone.

Ce type de tâche s'appelle un [workflow](glossary:workflow) multi-applications, et l'IA peut tout faire : lire les e-mails, saisir les données dans un tableau et préparer des brouillons de réponses.
## Ce qu'il faut préparer

- une tâche où vous recopiez des données, par exemple des candidatures d'e-mails vers un tableau,
- accès aux deux applications ; dans un compte professionnel, la connexion à l'IA est parfois validée par un administrateur,
- l'IA en mode Cowork ou Code ; où la trouver est indiqué dans le bloc « Dans votre outil »,
- un dossier pour les consignes futures, par exemple un nouveau dossier vide `Recrutement`.
## Comment faire

1. Ouvrez l'IA en mode Cowork ou Code dans votre dossier et dans un nouveau chat, collez le prompt. Après la ligne « Consigne : », écrivez en une phrase d'où viennent les données, où elles seront saisies et ce qui suit.
2. L'IA connectera les applications manquantes ; vous confirmez la connexion vous-même. Ensuite, elle fera tout le travail et enregistrera les e-mails uniquement en brouillons, vous pouvez vaquer à d'autres tâches.
3. Comparez deux ou trois enregistrements dans l'application cible avec la source et envoyez les brouillons. Dites à l'IA ce qu'elle doit faire différemment la prochaine fois, elle l'ajoutera à la consigne.
## Exercice IA

Collez ce [prompt](glossary:prompt) dans l'IA en mode Cowork ou Code, ouverte dans votre dossier, et après la dernière ligne, écrivez votre tâche :

Fais à ma place une tâche où je recopie manuellement des données d'une application à une autre. La consigne est à la dernière ligne.

D'abord, identifie les applications mentionnées dans la consigne, vérifie si tu peux écrire dans l'application cible. Utilise les connecteurs disponibles ici. Si un connecteur manque ou ne fait que lire, connecte l'application toi-même, par exemple via le service Composio. Si je dois faire quelque chose, comme me connecter, indique-moi précisément où cliquer et attends. Si ici il est impossible d'écrire dans les applications ou d'enregistrer des fichiers dans le dossier, dis-le-moi immédiatement et conseille-moi où basculer.

Ensuite, fais tout le travail. Parcours la source, extrait les données et saisis-les dans l'application cible. Si le tableau ou la liste n'existe pas encore, crée-le et propose les colonnes selon la consigne. Ne devine pas les données manquantes dans la source : laisse le champ vide et marque l'enregistrement. Si des e-mails ou messages suivent la saisie, enregistre-les en brouillons, je les enverrai moi-même.

Puis, écris la consigne pour la prochaine fois dans le fichier `postupy-mezi-aplikacemi.md` dans le dossier où tu travailles. Sous un titre ### avec le nom de la tâche, indique d'où viennent les données, où elles sont saisies, quelles données, ce qui suit et comment reconnaître les enregistrements déjà traités. Si le fichier existe, ajoute la tâche à la fin.

À la fin, indique-moi combien d'enregistrements tu as transférés, où les trouver, lesquels tu n'as pas pu traiter et pourquoi, et où la consigne est enregistrée. Une fois que j'aurai vérifié le résultat et dit ce qu'il faut changer, corrige et complète la consigne.

Consigne :

## Dans votre outil

### Microsoft Copilot
Collez le prompt dans Copilot Cowork sur `copilot.cloud.microsoft` (sélecteur Cowork en haut à côté de Chat), Outlook lit directement. Ajoutez un fichier Excel de OneDrive ou SharePoint avec le bouton +, Cowork crée un nouveau tableau automatiquement. Pas besoin de dossier, Cowork enregistre la consigne comme skill ; les tâches planifiées sont sur la page Automations. Ajoutez CRM et autres applications via Browse plugins, si l'administrateur les a autorisés.

### ChatGPT
Le mode Code est dans ChatGPT Codex dans l'application ChatGPT pour ordinateur : choisissez Codex, Nouveau chat et ouvrez un dossier (open a folder). Mettez le tableau OneDrive dans un dossier synchronisé sur l'ordinateur, Codex y écrira directement. Connectez Outlook dans les paramètres sous Plugins ; si absent dans un compte pro, l'administrateur l'active. Les tâches planifiées sont dans le panneau gauche sous Scheduled.

### Claude
Dans l'application Claude pour ordinateur, ouvrez Cowork ou Claude Code et choisissez un dossier ; les deux sont dans les offres payantes. Les connecteurs sont dans le panneau gauche sous Customize, Connectors ; l'IA connecte automatiquement ceux qui manquent. Les tâches planifiées sont dans Cowork sous Scheduled.

### Gemini
Le travail récurrent entre applications Google se crée avec Workspace Studio (`studio.workspace.google.com`) : choisissez Describe it with AI et décrivez-le en une phrase. Le test run effectue les étapes réelles, Turn on active le processus qui tourne ensuite seul. Sans Studio, dans Gemini tapez « @Gmail liste les candidatures de cette semaine en tableau » et enregistrez avec Export to Sheets.
## Qu'est-ce qu'un workflow multi-applications

Workflow est un terme anglais pour un processus de travail en plusieurs étapes où le résultat d'une étape est l'entrée de la suivante. Comme pour les candidatures, l'IA transfère les demandes d'un formulaire web vers un CRM, système de gestion clients, ou compile dans un tableau les 27 questions non répondues parmi 33 e-mails d'un client.

Le connecteur par lequel l'IA accède à l'application en mode Cowork ou Code est connecté automatiquement, comme expliqué dans la carte [Connectez un connecteur](card:plugin-connector) ; dans un chat classique, activez-le dans les paramètres. Selon ses capacités, l'IA lit seulement ou écrit aussi dans l'application.

Si vous n'avez pas de connecteur pour une application ou s'il ne fait que lire, l'IA utilise le service Composio. Il se connecte à plus de mille applications, comme Outlook, Gmail, Excel, Google Sheets, Airtable ou CRM. En mode Cowork ou Code, l'IA le configure seule. Vous créez un compte et validez l'accès à chaque application séparément, donc Composio ne voit que celles que vous avez autorisées. Le compte de base est gratuit et ne demande pas de carte bancaire. En compte professionnel, demandez à l'IT avant de l'utiliser.

`postupy-mezi-aplikacemi.md` est un fichier texte simple avec les consignes de vos tâches entre applications. Chaque tâche a son propre titre, donc la prochaine fois vous écrivez juste son nom et celui du fichier. L'extension `.md` signifie qu'il est écrit en [Markdown](glossary:markdown), un format simple où les dièses `###` en début de ligne marquent un titre.
## Automatisez le lancement des tâches

Une tâche répétée chaque jour ou semaine peut se lancer automatiquement. Collez dans l'IA qui gère les tâches planifiées cette consigne, changez juste le nom de la tâche par le vôtre, et demandez-lui de créer la tâche planifiée. Où les trouver dans votre outil est expliqué dans le bloc « Dans votre outil ».

```text
Chaque jour ouvré à 8h00, fais la tâche « Candidatures vers tableau » selon le fichier `postupy-mezi-aplikacemi.md`. Traite seulement ce qui est arrivé depuis la dernière exécution. Dans le résumé, indique-moi combien d'enregistrements ont été ajoutés et combien de brouillons attendent dans la boîte. Si rien n'est arrivé, ne dis rien.
```

La tâche lit le fichier dans le dossier sur l'ordinateur, donc elle ne tourne que si l'ordinateur est allumé et l'application IA ouverte.
## Exemple

Lucie, du service RH d'une entreprise de mécanique, cherche un assistant de production. Du 5 au 9 octobre 2026, elle a reçu 23 candidatures par e-mail. Le lundi 12 octobre, elle ouvre l'IA en mode Cowork dans le dossier `Recrutement assistant`, colle le prompt et écrit après la dernière ligne :

```text
Depuis les e-mails de candidatures reçus à partir du 5 octobre, saisis dans le tableau Candidats d'Excel sur SharePoint le nom, téléphone, années d'expérience, date possible d'entrée en poste et lien vers l'e-mail. Prépare un brouillon de réponse à chaque candidat indiquant que nous avons bien reçu sa candidature et que nous répondrons sous 10 jours ouvrés.
```

L'IA connecte Outlook et Excel, Lucie confirme la connexion à son compte pro et l'IA parcourt les 23 e-mails. Puis elle renvoie :

```text
23 candidatures transférées dans le tableau Candidats.
- 21 enregistrements complets.
- 2 candidatures sans expérience, lignes marquées en jaune dans le tableau.
- 23 brouillons de réponse en attente dans Outlook.
La consigne est enregistrée dans `postupy-mezi-aplikacemi.md` sous le titre Candidatures vers tableau.
```

Lucie ouvre le tableau et vérifie téléphone et expérience pour deux candidats avec leur e-mail ; c'est correct. Puis elle écrit à l'IA : « Ajoute une colonne pour indiquer la source de l'information sur le poste, et demande l'expérience dans la réponse pour les candidatures incomplètes. » L'IA complète le tableau et les deux brouillons, et modifie la consigne dans le fichier ainsi :

```text
### Candidatures vers tableau
- Source : e-mails de candidatures pour le poste ouvert.
- Destination : tableau Candidats dans Excel sur SharePoint, une ligne par candidat.
- Données : nom, téléphone, années d'expérience, date possible d'entrée, source d'information, lien vers l'e-mail.
- Suite : brouillon de réponse indiquant la réception de la candidature et un retour sous 10 jours ouvrés. Si l'expérience manque, la demander dans la réponse.
- Enregistrements terminés : ne pas retraiter un e-mail déjà présent dans le tableau.
```

Lucie vérifie les brouillons dans Outlook et les envoie. Quand quatre nouvelles candidatures arrivent jeudi, elle écrit juste « Fais les candidatures vers tableau selon `postupy-mezi-aplikacemi.md` » et l'IA traite uniquement ces quatre nouvelles.
## En cas de blocage

- **L'IA ne peut pas accéder à l'application :** demandez-lui s'il existe un connecteur pour cette application. Si oui et qu'il ne peut pas être activé dans le compte pro, l'IA écrira une courte demande à l'administrateur. Sinon, laissez l'IA connecter l'application via Composio ; demandez à l'IT avant dans un compte pro.
- **L'IA lit l'application mais ne peut pas écrire :** le connecteur est en lecture seule. En mode Cowork ou Code, demandez à l'IA de connecter via Composio. Dans un chat classique, passez en [Cowork ou Code](card:when-chat-is-not-enough).
- **Les données dans la cible ne correspondent pas à la source :** montrez à l'IA un enregistrement erroné et indiquez où trouver la bonne donnée. Demandez-lui de corriger tous les enregistrements similaires et d'ajouter la règle à la consigne.
- **Les enregistrements sont en double dans le tableau :** demandez à l'IA de supprimer les doublons et d'ajouter à la consigne comment reconnaître les enregistrements terminés, par exemple via le lien e-mail.
## Résultat attendu

Les données que vous auriez recopiées manuellement sont dans l'application cible, vous avez comparé deux ou trois enregistrements avec la source, et vous avez vérifié et envoyé les brouillons. La consigne avec vos modifications est dans `postupy-mezi-aplikacemi.md`, donc la prochaine fois vous lancez la tâche en une phrase.
## Et après

Si une autre tâche IA doit suivre le transfert, par exemple préparer les entretiens à partir du tableau des candidats, ajoutez-la à la consigne et [enregistrez tout comme un skill](card:create-skill-from-proven-process). Si vous voulez que la tâche planifiée surveille ses propres erreurs et les signale, configurez-la comme [tâche planifiée](card:recurring-ai-task).
## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Flux de travail IA

**Qu'est-ce que c'est :** Un passage répétable à travers plusieurs étapes successives, où la sortie d'une étape constitue l'entrée de la suivante. Les différentes étapes peuvent être réalisées par des humains, de l'IA ou divers outils.

**Ce que ce n'est pas :** Ce n'est pas automatiquement une automatisation ni un agent. Les étapes peuvent être contrôlées par un humain et le transfert peut se faire entre différents environnements.

**Pourquoi l'étudiant en a besoin :** Cela aide à relier des tâches IA maîtrisées individuellement en un processus qui peut être testé, amélioré et éventuellement automatisé plus tard.

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
