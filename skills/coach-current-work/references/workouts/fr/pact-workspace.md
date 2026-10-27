# Créez votre PACT : espace de travail pour l'IA

L'IA rassemble tout votre travail en cours dans un seul dossier avec une carte, pour que chaque nouveau chat reprenne sans explications.

## Créez votre PACT : espace de travail pour l'IA

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec des projets en cours sur l'ordinateur.
## À quoi ça sert

Le lundi, vous ouvrez un nouveau chat pour le budget du département et passez dix minutes à chercher des documents partout sur l’ordinateur. Le tableau de l’an dernier est dans Documents, les notes de réunion sur le Bureau, et l’offre du fournisseur dans Téléchargements. L’IA calcule alors avec les prix de l’an dernier, car vous avez oublié d’intégrer l’offre de cette année dans le chat.

PACT est un dossier unique avec quatre parties où l’IA trouve elle-même projets, documents et règles.
## Ce qu’il faut préparer

- les fichiers des projets sur lesquels vous travaillez actuellement, en sachant où ils se trouvent sur l’ordinateur,
- une IA en [mode](glossary:workmode) Cowork ou Code, qui travaille avec les fichiers sur l’ordinateur.
## Comment faire

1. Ouvrez Cowork ou Code dans le dossier à votre nom, où se trouvent Documents, Bureau et Téléchargements, et insérez le prompt. L’IA affichera par projet ce qu’elle propose de déplacer dans un nouveau dossier `PACT`.
2. Confirmez la proposition ; pour un projet dont vous n’êtes pas sûr, laissez-le de côté pour l’instant. L’IA déplacera les fichiers et écrira dans `AGENTS.md` la carte du PACT : où se trouve quoi et quelles règles s’appliquent.
3. Ouvrez un nouveau chat dans le dossier `PACT` et donnez directement une tâche sur un projet, par exemple « Continuons avec le budget. Qu’est-ce qui manque encore ? » L’IA prendra elle-même les documents.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans une IA en mode Cowork ou Code, ouverte dans votre dossier :

Crée-moi dans Documents un dossier PACT : un espace de travail où tout mon travail a sa place. Si tu ne sais pas travailler avec les fichiers sur l’ordinateur, dis-le-moi tout de suite pour que je puisse passer en mode Cowork ou Code.

À l’intérieur, crée quatre parties :
- 1_Projects : projets en cours, chacun dans son propre dossier,
- 2_Agents : instructions pour l’IA, par exemple des prompts que j’utilise régulièrement,
- 3_Context : documents valables pour plusieurs projets, comme un tarif, des règles d’entreprise ou des textes réussis comme modèles,
- 4_Tools : outils pour le travail, comme des modèles de documents ou des calculatrices.

Parcours Documents, Bureau et Téléchargements et demande-moi si j’ai des fichiers de travail ailleurs, par exemple sur OneDrive. En fonction du contenu et de la date de dernière modification, devine sur quels projets je travaille actuellement. Montre-moi ensuite une proposition par projet : nom du projet et quels fichiers seront déplacés, sans lister chaque fichier individuellement. Après ma confirmation, déplace les fichiers et enregistre la liste des déplacements (d’où vers où) dans un fichier presuny.md dans le dossier PACT, pour pouvoir les annuler à tout moment. Ce qui ne fait pas partie du travail en cours reste à sa place. Ne déplace pas les fichiers dans des dossiers partagés utilisés aussi par des collègues ; note seulement leur emplacement dans la carte.

Enfin, crée dans le dossier PACT un fichier AGENTS.md avec la carte du PACT : ce qui est dans chaque partie et quels projets s’y trouvent, avec une phrase par projet indiquant son état. Ajoute la règle : « Crée un nouveau projet comme dossier dans 1_Projects. Chaque nouveau fichier est enregistré dans la partie correspondante. Quand un projet est ajouté ou que son état change, mets à jour la carte dans ce fichier. Avant de travailler sur un projet, lis son dossier. » Assure-toi que je puisse lire ce fichier dans cet outil au début de chaque travail ; dans Cowork, inscris-le dans les instructions du dossier.

## Dans votre outil

### Microsoft Copilot
Vous trouverez Cowork à côté du sélecteur Chat ; s’il n’est pas là, demandez-le à votre administrateur IT. Il ne voit que OneDrive et SharePoint, donc vous ne choisissez pas le dossier et ajoutez à la fin du prompt : « Au lieu de Documents, Bureau et Téléchargements, parcours mon OneDrive et crée PACT là-bas. Enregistre la carte comme document Word et écris-moi les règles pour Personnaliser, Préférences. » À l’étape 3, indiquez dans la nouvelle tâche que PACT est sur OneDrive.

### ChatGPT
Dans l’application ChatGPT pour ordinateur, passez en mode Codex, choisissez ouvrir un dossier (open a folder) et sélectionnez le dossier à votre nom. Codex lit `AGENTS.md` automatiquement et crée la tâche planifiée quand vous la demandez ; vous la trouverez sous Scheduled. Si vous ne voyez pas Codex, il est probablement désactivé par l’administrateur de votre entreprise, demandez-lui de l’activer.

### Claude
Dans l’application Claude pour ordinateur, ouvrez Cowork et sélectionnez le dossier à votre nom, ou ouvrez-le dans Claude Code ; les deux sont payants. Cowork inscrit la règle dans les instructions du dossier (Folder instructions), Claude Code lit `AGENTS.md`. L’IA crée la tâche planifiée quand vous la demandez, que vous trouverez dans le panneau gauche sous Scheduled.

### Gemini
Gemini sur Google Drive ne crée pas de dossiers ni ne déplace les fichiers, donc vous ne pouvez pas construire un PACT avec lui. Pour cet exercice, vous avez besoin d’une IA en mode Cowork ou Code, comme Claude Cowork, Claude Code ou Codex dans ChatGPT ; demandez à votre administrateur IT si votre entreprise en dispose.
## Qu’est-ce que PACT

[PACT](glossary:pact) est une méthode pour organiser le travail afin que l’humain et l’IA s’y retrouvent. Le nom vient des initiales anglaises Projects (projets), Agents (instructions pour l’IA), Context (documents de référence) et Tools (outils). La forme la plus simple est quatre dossiers comme dans cet exercice ; grâce aux numéros devant les noms, ils sont toujours triés dans cet ordre. Vous décidez quels projets entrent dans le PACT, et l’IA fait le déplacement et l’organisation. Aucun programme spécial n’est nécessaire, et si une partie du travail est ailleurs, par exemple des documents d’entreprise sur un disque partagé, elle peut y rester et l’IA l’indiquera dans la carte où la trouver.

`AGENTS.md` est un fichier texte simple dans le dossier principal du PACT, contenant les règles pour l’IA. Son nom vient des [agents](glossary:agent), c’est-à-dire l’IA qui travaille elle-même avec les fichiers, et l’extension `.md` signifie un format en [Markdown](glossary:markdown). Plusieurs outils en mode Code le lisent automatiquement au début de chaque travail, donc vous n’avez pas à répéter la carte ni les règles. Là où l’outil ne sait pas le faire, l’IA enregistre la règle dans ses paramètres ou vous indique où la placer.

Un chat classique ne suffit pas pour PACT, car il ne voit pas les dossiers sur l’ordinateur ; comment [passer en mode Cowork ou Code](card:when-chat-is-not-enough) est expliqué sur une carte séparée. Seuls les projets en cours et leurs documents entrent dans PACT ; les archives anciennes restent à leur place et l’IA les déplacera sur demande.
## Pour que PACT s’entretienne seul

Une tâche planifiée trie chaque semaine dans PACT les fichiers ajoutés ailleurs. La règle dans `AGENTS.md` couvre le travail que vous faites avec l’IA dans le dossier `PACT`. Les pièces jointes d’e-mails finissent dans Téléchargements et les notes rapides sur le Bureau. Donnez à l’IA en mode Cowork ou Code cette consigne et demandez-lui de créer la tâche planifiée :

```text
Chaque vendredi à 16h00, parcours le Bureau et Téléchargements. Les fichiers de la semaine appartenant aux projets dans PACT, déplace-les dans la partie correcte selon la carte dans AGENTS.md. Si un nouveau projet est apparu, crée-lui un dossier dans 1_Projects et ajoute-le à la carte. À la fin, écris-moi ce que tu as déplacé où et pour quels fichiers tu ne sais pas où les mettre.
```

Quand la tâche travaille avec les fichiers sur votre ordinateur, elle ne s’exécute que si l’ordinateur est allumé et l’application ouverte.
## Exemple

Jana prépare le stand de son entreprise pour le salon de Brno et un voyage d’automne dans les Dolomites pour ses collègues. Les fichiers des deux projets sont dispersés partout sur l’ordinateur. L’IA reconnaît les deux projets et, après confirmation de Jana, crée :

```text
PACT/
  AGENTS.md
  1_Projects/
    salon-brno/         brief, budget du stand, offres de trois imprimeurs
    voyage-dolomites/   programme et calculs
  2_Agents/
    prompt-invitation.md
  3_Context/
    tarif-2026.xlsx
    logo-et-couleurs.pdf      utile pour le stand et l’invitation au voyage
  4_Tools/
    calculatrice-voyage.xlsx
```

Le mercredi 14/10, elle ouvre un nouveau chat dans le dossier `PACT` et écrit : « Continuons avec le salon. Quelle est l’imprimerie la moins chère ? » Une bonne réponse comparera les trois offres dans le dossier projet, sans que Jana ait à insérer quoi que ce soit. Si l’IA demande de quel salon il s’agit, elle travaille probablement hors du dossier `PACT`.
## En cas de blocage

- **L’IA affirme avoir créé les dossiers, mais ils n’apparaissent pas sur l’ordinateur :** vous travaillez probablement dans un chat classique qui ne peut pas manipuler les fichiers sur l’ordinateur. Passez en [mode Cowork ou Code](card:when-chat-is-not-enough) et sélectionnez le dossier à votre nom.
- **L’IA ne voit pas ou ne peut pas déplacer les fichiers dans un dossier :** vérifiez que vous avez bien sélectionné le dossier à votre nom dans Cowork ou Code. Si les fichiers sont en dehors, demandez à l’IA comment lui donner accès.
- **Vous voulez annuler un déplacement :** dites à l’IA dans le dossier `PACT` de remettre les fichiers en place selon le fichier `presuny.md`, pour tous ou un seul projet.
- **Le nouveau chat pose des questions sur des éléments déjà dans le dossier :** ouvrez le chat dans le dossier `PACT`, pas dans une fenêtre de chat classique, et vérifiez que `AGENTS.md` est bien à la racine. Demandez ensuite à l’IA de le lire.
## Ce qui sera prêt

Vous avez un dossier `PACT` avec quatre parties, contenant les projets en cours et leurs documents, et dans `AGENTS.md` une carte qui permet à chaque nouveau chat de s’y retrouver. Vous avez vérifié sur une tâche réelle que l’IA poursuit le projet sans que vous ayez à insérer ou expliquer quoi que ce soit.
## Et ensuite

Laissez l’IA rédiger pour chaque projet une [page d’introduction](card:project-start-here) qui montre immédiatement son état. À partir des procédures que vous répétez sans cesse à l’IA, faites-lui créer un [mode d’emploi réutilisable](card:create-skill-from-proven-process).
## Agent

**Qu'est-ce que c'est :** Un système d'IA capable, dans le cadre d'un objectif donné, de planifier plusieurs étapes, d'utiliser les outils disponibles, de gérer l'état et d'exécuter les actions autorisées. L'étendue des capacités et le degré d'autonomie dépendent de l'outil spécifique et des permissions.

**Ce que ce n'est pas :** Ce n'est pas simplement un prompt enregistré ni un assistant renommé en une fonction plus avancée.

**Pourquoi l'étudiant en a besoin :** Il aide à identifier les tâches nécessitant des outils, des permissions, des points de contrôle et une responsabilité claire pour les actions.

## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

## PACT

**Qu'est-ce que c'est :** Un modèle d'organisation de l'environnement de travail IA en quatre types d'éléments : Projects, Agents, Context et Tools, c'est-à-dire projets, assistants ou agents, contexte et outils.

**Ce que ce n'est pas :** Ce n'est pas un ensemble obligatoire de quatre composants ni un logiciel prêt à l'emploi. La forme concrète dépend de la manière de travailler de la personne et de ce qu'elle utilise déjà.

**Pourquoi l'étudiant en a besoin :** Il aide à organiser plusieurs projets, des procédures IA répétées, un contexte stable et des outils afin qu'ils soient accessibles aussi bien par la personne que par l'IA.

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
