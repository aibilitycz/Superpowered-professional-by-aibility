# Créez votre AGENTS.md : règles pour l'IA dans un seul fichier

L'IA inscrit les consignes que vous répétez sans cesse dans un seul fichier et s'y réfère à chaque tâche.

## Créez votre AGENTS.md : règles pour l'IA dans un seul fichier

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec le dossier dans lequel vous travaillez avec l'IA.
## À quoi ça sert

Le lundi, vous donnez à l'IA les mêmes consignes pour une nouvelle offre que la semaine dernière : vouvoyer le client et indiquer les prix TTC. Le mercredi, vous ouvrez une nouvelle conversation pour une deuxième offre et vous répétez les consignes. Une collègue qui prépare les offres pendant vos congés a des règles différentes dans l'IA, et le client reçoit une fois les prix TTC et une autre fois hors taxes.

`AGENTS.md` est un fichier de règles dans votre dossier de travail que l'IA lit au début de chaque tâche, ainsi vous donnez les consignes une fois pour toutes, et elles s'appliquent aussi à la collègue qui travaille dans le même dossier.
## Ce qu'il faut préparer

- un dossier dans lequel vous travaillez avec l'IA, par exemple un dossier de projet en cours,
- les consignes que vous répétez sans cesse à l'IA, ou vos instructions personnelles issues d'une autre IA,
- une IA en [mode](glossary:workmode) Cowork ou Code, qui travaille avec les fichiers sur l'ordinateur.
## Comment faire

1. Ouvrez Cowork ou Code dans le dossier préparé, autorisez la modification des fichiers et insérez le prompt. L'IA vous demandera les consignes, les inscrira dans `AGENTS.md` et fera en sorte de les lire à chaque tâche.
2. Lisez les règles que l'IA vous montre. Si quelque chose ne convient pas ou manque, dites-le à l'IA qui corrigera le fichier.
3. Dans une nouvelle conversation, de préférence dans un second outil, donnez la tâche et écrivez : « Liste les fichiers de règles chargés au début de la tâche et les règles selon lesquelles le résultat a été produit. »
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans une IA en mode Cowork ou Code, ouverte dans votre dossier :

Crée dans ce dossier un fichier AGENTS.md avec des règles pour l'IA, pour que je n'aie pas à répéter les mêmes consignes dans chaque conversation et chaque outil IA.

Demande-moi les consignes que je répète le plus souvent à l'IA. Interroge-moi par thèmes : langue et formule d'adresse, style d'écriture, ce qu'il ne faut jamais faire et ce qu'il faut vérifier avant de rendre. Si je te fournis des instructions personnelles d'un autre outil IA ou si tu trouves dans ce dossier un fichier de règles pour l'IA, reprends les consignes qui s'appliquent à chaque tâche.

Écris chaque règle sur une ligne avec une consigne précise, par exemple « Indique les prix TTC avec la devise ». Transforme un conseil général comme « sois précis » en consigne concrète. Si la raison de la règle n'est pas claire, ajoute-la. Classe les règles sous des titres selon les thèmes et garde le fichier court pour qu'il tienne sur un seul écran.

Ajoute à la fin du fichier la règle : « Quand je te corrige et que la correction doit s'appliquer aussi la prochaine fois, inscris-la dans AGENTS.md comme nouvelle règle et dis-moi ce que tu as ajouté. »

Ensuite, vérifie si cet outil lit AGENTS.md automatiquement au début de chaque tâche dans ce dossier. Sinon, configure-le pour qu'il le charge automatiquement à chaque tâche ; dans Cowork, inscris cela dans les instructions du dossier. Si tu as repris des règles d'un autre fichier de règles pour l'IA, laisse dans ce fichier une seule ligne qui charge AGENTS.md pour éviter la duplication, et dis-moi ce que tu as modifié. Si tu ne peux pas configurer cela toi-même, indique-moi où dans les paramètres je dois le faire et ce que je dois y insérer.

Enfin, montre-moi le fichier AGENTS.md finalisé et dis-moi si cet outil le lit automatiquement ou ce que tu as configuré.

## Dans votre outil

### Microsoft Copilot
Le chat Copilot ne lit pas le fichier : ajoutez à la fin du prompt « Tu n’as pas de dossier, écris-moi les règles en texte pour les Custom instructions. » et insérez ce texte dans Paramètres et plus, Paramètres du chat, Personnalisation. Faites l’étape 3 dans une nouvelle conversation en demandant selon quelles consignes le résultat a été produit. Dans Cowork, à côté du bouton Chat, les règles vont dans Personnaliser, Préférences.

### ChatGPT
Dans l’application ChatGPT pour ordinateur, passez en mode Codex et choisissez d’ouvrir un dossier (open a folder) ; Codex lit `AGENTS.md` automatiquement. Dans une conversation classique, l’IA vous écrira les règles en texte pour les Custom instructions (Paramètres, Personnalisation) ou pour les instructions du projet (Paramètres du projet). Faites l’étape 3 dans une nouvelle conversation et demandez selon quelles consignes le résultat a été produit.

### Claude
Dans Claude Code, l’IA lit `AGENTS.md` automatiquement. Dans Cowork, que vous ouvrez dans l’application Claude pour ordinateur en sélectionnant un dossier, l’IA inscrit dans les instructions du dossier (Folder instructions) qu’elle doit lire ce fichier. Dans une conversation classique Claude, les règles vont dans les instructions du projet (Set project instructions).

### Gemini
Gemini ne lit pas `AGENTS.md` et les comptes d’entreprise n’ont pas de mémoire. Insérez le prompt dans Gemini et sauvegardez les règles via Partager & exporter, Exporter vers Docs. Dans Gems, New Gem, écrivez dans Instructions « Suis les règles du document joint » et ajoutez le document dans Knowledge. Faites l’étape 3 dans une nouvelle conversation avec ce Gem que vous partagez aux collègues via Partager.
## Qu’est-ce que AGENTS.md

`AGENTS.md` est un fichier texte simple avec des règles pour l’IA : quelle langue utiliser, comment écrire, ce qu’il ne faut jamais faire et ce qu’il faut vérifier avant de rendre. Son nom vient des [agents](glossary:agent), c’est-à-dire des IA qui travaillent elles-mêmes avec les fichiers et effectuent des étapes pour vous. L’extension `.md` signifie qu’il est écrit en [Markdown](glossary:markdown), où les dièses `###` en début de ligne indiquent un titre.

Beaucoup d’outils en mode Code lisent ce fichier automatiquement au début de chaque tâche dans le dossier où il se trouve. Là où l’outil ne le fait pas, l’IA enregistre la règle dans ses paramètres ou vous indique où l’insérer. Et quand vous corrigez l’IA, la nouvelle règle s’inscrit dans le fichier.

Le fichier contient les consignes qui s’appliquent à chaque tâche dans ce dossier ; les documents pour une tâche unique et les demandes ponctuelles restent dans la conversation. Si l’IA omet une règle utile pour la tâche à l’étape 3, demandez-lui de la reformuler plus clairement dans le fichier.

Une conversation classique ne lit pas `AGENTS.md` automatiquement. Si vous restez en conversation, sauvegardez vos consignes dans les [instructions personnelles](card:custom-instructions) ; comment passer en Cowork ou Code est expliqué dans la fiche [Chat, Cowork ou Code](card:when-chat-is-not-enough).
## Que les règles se complètent automatiquement

La règle à la fin de `AGENTS.md` fait que quand vous corrigez l’IA et que la correction doit s’appliquer aussi la prochaine fois, l’IA l’inscrit dans le fichier. Au bout de quelques semaines, les règles commencent à se répéter ou à se contredire, et un fichier plus long est plus difficile à respecter pour l’IA. Si vous voulez qu’il reste court, faites-le nettoyer une fois par mois par une tâche planifiée. Donnez à l’IA en mode Cowork ou Code cette consigne et demandez-lui de créer la tâche planifiée :

```text
Chaque premier vendredi du mois à 16h00, passe en revue AGENTS.md dans ce dossier. Fusionne les règles qui disent la même chose en une seule et classe-les sous les bons titres. À la fin, écris-moi ce que tu as changé et liste les paires de règles qui se contredisent pour que je décide lesquelles garder.
```

Si la tâche travaille avec des fichiers sur votre ordinateur, elle ne s’exécutera que si l’ordinateur est allumé et l’application ouverte.
## Exemple

Lucie gère le support client dans une boutique en ligne d’appareils de cuisine et rédige les réponses aux réclamations avec l’IA dans deux outils qui travaillent avec un dossier sur l’ordinateur. Le lundi 12/10, elle ouvre dans le premier outil le dossier `Reklamace` et insère le prompt. Elle répond aux questions, ajoute ses instructions personnelles qu’elle a sauvegardées dans une conversation classique, et l’IA écrit :

```text
### Langue et formule d’adresse
- Écris en tchèque et vouvoie les clients.
- Signe « Lucie Králová, support client ».

### Style d’écriture
- Dans la première phrase, indique ce que nous faisons pour le client.
- La réponse fait au maximum six phrases et ne contient aucune formule d’introduction comme « J’espère que vous allez bien ».

### Ce qu’il ne faut jamais faire
- Ne promettez pas de remboursement. C’est la responsable des réclamations qui décide.

### Ce qu’il faut vérifier avant de rendre
- Comparez le numéro de commande et les dates avec l’e-mail du client.

### Comment compléter les règles
- Quand je te corrige et que la correction doit s’appliquer aussi la prochaine fois, inscris-la dans AGENTS.md comme nouvelle règle et dis-moi ce que tu as ajouté.
```

L’IA sauvegarde le fichier et fait en sorte que l’outil le lise au début de chaque tâche. Le mardi, Lucie ouvre le même dossier dans le second outil et écrit simplement : « Réponds à Mme Dvořáková sur la réclamation du mixeur dans son e-mail dans ce dossier. » Puis elle ajoute : « Liste les fichiers de règles chargés au début de la tâche et les règles selon lesquelles la réponse a été produite. » L’IA mentionne `AGENTS.md`, rédige la réponse en vouvoyant et signant, et énumère quatre règles. Elle a omis la règle sur la première phrase et la réponse commence par des excuses. Lucie demande à l’IA de reformuler cette règle plus clairement, et dans `AGENTS.md` on trouve maintenant : « Commence la réponse par une phrase indiquant ce que nous faisons pour le client et d’ici quand, par exemple ‘Nous échangerons votre mixeur d’ici vendredi 16/10.’ Écris les excuses ensuite. »
## En cas de blocage

- **L’IA affirme avoir sauvegardé le fichier mais il n’est pas dans le dossier :** vous travaillez probablement dans une conversation classique qui ne peut pas modifier les fichiers sur l’ordinateur. Passez en [Cowork ou Code](card:when-chat-is-not-enough) et ouvrez le dossier.
- **`AGENTS.md` manque parmi les fichiers chargés :** ouvrez la conversation directement dans le dossier où se trouve `AGENTS.md`, pas dans un sous-dossier. S’il manque encore, écrivez : « Fais en sorte que `AGENTS.md` soit chargé automatiquement au début de chaque tâche dans cet outil. »
- **L’IA respecte la règle seulement parfois :** la règle est probablement trop générale, par exemple « écris de façon concise ». Demandez à l’IA de la reformuler en consigne précise, par exemple « au maximum six phrases ».
- **Vous avez besoin des règles dans un autre dossier :** demandez à l’IA de les enregistrer aussi dans les instructions communes qui s’appliquent à tous les dossiers dans cet outil.
## Ce que vous aurez

Vous avez dans le dossier un fichier `AGENTS.md` avec les consignes que vous répétiez auparavant à l’IA, et les outils dans lesquels vous avez testé le fichier le lisent au début de chaque tâche. Dans une nouvelle conversation, vous avez vérifié que le fichier a été chargé et quelles règles l’IA a utilisées, et vous avez reformulé les règles peu claires. Quand vous corrigerez l’IA la prochaine fois, la nouvelle règle s’inscrira dans le fichier.
## Et après

Quand une règle devient une procédure complète en plusieurs étapes, par exemple comment préparer un rapport mensuel, faites en sorte que l’IA crée un [guide réutilisable](card:create-skill-from-proven-process). Si toute l’équipe doit utiliser les mêmes documents et règles, faites écrire à l’IA un [README du projet](card:project-start-here).
## Agent

**Qu'est-ce que c'est :** Un système d'IA capable, dans le cadre d'un objectif donné, de planifier plusieurs étapes, d'utiliser les outils disponibles, de gérer l'état et d'exécuter les actions autorisées. L'étendue des capacités et le degré d'autonomie dépendent de l'outil spécifique et des permissions.

**Ce que ce n'est pas :** Ce n'est pas simplement un prompt enregistré ni un assistant renommé en une fonction plus avancée.

**Pourquoi l'étudiant en a besoin :** Il aide à identifier les tâches nécessitant des outils, des permissions, des points de contrôle et une responsabilité claire pour les actions.

## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

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
