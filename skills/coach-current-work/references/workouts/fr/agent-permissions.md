# Définissez les autorisations de l’agent : ce qu’il peut faire seul et jamais sans vous

L’IA cesse de poser des questions sur les étapes routinières et attend votre confirmation avant tout e-mail externe ou suppression de données.

## Définissez les autorisations de l’agent : ce qu’il peut faire seul et jamais sans vous

**Difficulté : intermédiaire.**\
**Temps : environ 15 minutes** avec le dossier dans lequel l’IA travaille.
## À quoi cela sert

L’agent doit compléter pendant la pause déjeuner un nouveau tarif dans 20 offres commerciales et, au bout d’une heure, il attend dès la première
avec une question pour savoir s’il peut enregistrer le fichier. Une collègue a réglé cela en autorisant tout à son
agent, et lors d’une tâche similaire, il a directement envoyé
au client une offre que personne n’avait encore vérifiée.

Cela aide à répartir le travail de l’[agent](glossary:agent) entre la routine qu’il peut exécuter sans demander selon le
mode d’autorisation de l’outil, et les limites strictes dans `AGENTS.md`,
le fichier de règles pour l’IA, devant lesquelles il s’arrête et vous attend.
## Ce qu’il faut préparer

- le dossier dans lequel vous travaillez avec l’IA ; `AGENTS.md` n’a pas besoin d’y être,
- une tâche réelle qui se termine par un e-mail externe, par exemple un rapport ou une réponse
  à un client,
- une messagerie connectée à l’IA via un [connecteur](card:plugin-connector), pour qu’elle puisse envoyer elle-même l’e-mail
  après votre « ENVOYER »,
- l’IA en [mode](glossary:workmode) Cowork ou Code ([comment y basculer depuis
  le chat](card:when-chat-is-not-enough)).
## Comment faire

1. Collez le prompt et dites à l’IA ce qui est routinier chez vous et ce qui est irréversible. L’IA
   identifie comment ses autorisations sont configurées et propose deux listes.
2. Corrigez et validez les listes. L’IA les écrit dans `AGENTS.md` et vous indique
   quel mode d’autorisation choisir et où le changer.
3. Dans un nouveau chat, donnez la tâche préparée. L’IA doit exécuter la routine sans questions et
   s’arrêter sur l’e-mail : elle montre le brouillon et, sans votre « ENVOYER », rien ne part.

La liste « Jamais sans moi » doit contenir les étapes irréversibles ou qui sortent
hors de l’entreprise, et cinq à huit points suffisent généralement.
## Exercice IA

Collez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code,
ouverte dans votre dossier :

Définis ce que tu peux faire seul dans ce dossier et ce sur quoi tu dois toujours t’arrêter et m’attendre. Tu ne dois pas me demander pour la routine ; pour les étapes irréversibles, arrête-toi à chaque fois.

Commence par vérifier dans quel mode d’autorisation tu travailles actuellement et quelles autorisations ou interdictions sont enregistrées dans cet outil. Si le mode ne peut pas être déterminé ou si l’outil n’en a pas, écris-le et ne suppose rien. S’il y a un AGENTS.md dans le dossier, lis-le. Puis demande-moi deux choses : pour quelles étapes routinières je dois encore toujours te valider, et quelles actions dans mon travail sont irréversibles ou sortent vers l’extérieur, par exemple des e-mails à des clients, des paiements, des suppressions, des publications ou des modifications dans des tableaux et systèmes partagés.

À partir de mes réponses, propose deux listes :
- Tu peux faire seul : la routine que tu exécutes sans demander, par exemple lire et modifier des fichiers dans ce dossier, lancer des commandes courantes et préparer des brouillons.
- Jamais sans moi : cinq à huit limites strictes, donc des étapes irréversibles ou qui sortent vers l’extérieur, et pour chacune la procédure selon laquelle tu t’arrêtes. Pour les e-mails et messages hors de l’entreprise : prépare un brouillon, montre-moi le destinataire, l’objet et le texte complet, et envoie-le seulement après que je t’ai envoyé un message séparé avec le mot ENVOYER ; si tu ne sais pas envoyer, enregistre le brouillon dans la messagerie et dis-le-moi. Pour la suppression de données irréversibles : liste exactement ce que tu vas supprimer et attends deux confirmations dans deux messages. Après chaque écriture dans une autre application, recharge le résultat et montre-le-moi. N’insère jamais de mots de passe ni de clés d’accès dans le chat ou dans les fichiers ; si une connexion est nécessaire, demande-moi de la faire via le gestionnaire de mots de passe.
Si je veux une exception, note-la sous le titre « Exceptions » en une phrase avec sa condition, par exemple « Tu peux enregistrer seul une offre dans le dossier partagé si je l’ai validée dans le chat. »

Montre-moi les deux listes et attends que je les corrige ou les valide. Ensuite, écris-les dans AGENTS.md sous les titres « Tu peux faire seul » et « Jamais sans moi » ; si le fichier n’existe pas, crée-le. S’il contient déjà des interdictions, déplace-les dans « Jamais sans moi » pour qu’elles ne soient pas à deux endroits. Ajoute la règle : « Si tu me demandes une étape routinière que je valide, propose de l’ajouter à Tu peux faire seul. Si tu rencontres une étape irréversible qui manque dans la liste Jamais sans moi, arrête-toi et propose de l’ajouter. » Fais en sorte de lire AGENTS.md dans cet outil au début de chaque travail ; dans Cowork, inscris-le dans les instructions du dossier. Si tu ne travailles pas avec un dossier, enregistre les listes en mémoire, ou donne-moi le texte que je collerai dans les instructions personnalisées.

Pour finir, dis-moi quel mode d’autorisation je dois choisir dans cet outil pour que tu ne me demandes pas la routine et que l’outil vérifie à l’avance les étapes risquées, et où le changer. S’il est possible dans les paramètres d’autoriser durablement les commandes routinières que j’ai validées, configure-le ; si tu ne peux pas le configurer toi-même, indique-moi exactement où coller quoi.

## Dans votre outil

### Microsoft Copilot
Copilot en mode Cowork (le sélecteur en haut à côté de Chat) n’a pas de mode d’autorisation
et demande lui-même avant l’envoi d’un e-mail, d’un message Teams ou d’une invitation. Vous
n’ouvrez pas de dossier ; ajoutez à la fin du prompt « Ne crée pas de fichier, écris-moi les listes
comme texte pour Customize, Preferences. » puis collez ce texte dans Customize sur la page d’accueil
de Cowork. N’utilisez pas Always allow pour les e-mails externes : cela laisserait passer les suivants sans
poser de question.

### ChatGPT
Dans l’application ChatGPT pour ordinateur, passez à Codex, choisissez l’ouverture d’un dossier
(open a folder) et, sous le champ de message, sélectionnez Approve for me (approuver pour moi) :
Codex ne demande alors que pour les étapes qu’il évalue comme risquées. Avec Full access,
il fonctionne entièrement sans validation. `AGENTS.md` est lu automatiquement par Codex ; s’il
n’a pas de messagerie connectée, l’étape 3 s’arrête au brouillon d’e-mail.

### Claude
Dans Claude Code, choisissez Auto dans le menu des modes à côté du bouton d’envoi :
il laisse passer la routine sans demander et un second modèle évalue à l’avance les étapes risquées. Les
autorisations permanentes et les exceptions décrites en toutes lettres s’enregistrent avec la commande `/permissions`. Dans Cowork,
laissez le paramètre par défaut Automatically approve ; la suppression définitive de fichiers sera toujours confirmée avec
vous. Avec Gmail connecté, Claude ne fait que préparer l’e-mail comme brouillon.

### Gemini
Gemini Agent, qui exécute des étapes seul, n’est disponible que pour les comptes personnels Google AI Pro et
Ultra et n’est pas disponible dans l’UE ; avec un compte professionnel, vous ne pourrez donc pas définir de mode d’autorisation. Si vous
avez besoin que l’IA exécute des étapes seule, demandez à l’IT un outil avec mode Cowork
ou Code. Pour la liste « Jamais sans moi », faites-la enregistrer comme skill pour la rédaction
d’e-mails : écrivez « Enregistre cela comme skill » et vous la trouverez dans Customize, Skills.
## Ce qu’est le mode d’autorisation

Le mode d’autorisation (permissions en anglais dans les outils) est le paramètre qui
détermine ce que l’IA vous demande avant de le faire. Les outils ont généralement trois
niveaux : l’IA demande pour presque tout, elle demande seulement pour les étapes qu’elle juge
risquées, ou elle ne demande jamais. Le niveau intermédiaire est un bon réglage de départ pour
le travail quotidien. Le niveau sans demande est un choix délibéré pour les personnes qui ont
déjà formalisé leurs limites et contrôlent les résultats ; ne le définissez pas par défaut pour vos
collègues.

L’outil reconnaît lui-même les commandes risquées, par exemple une suppression en masse. Mais il ne sait pas qu’un
e-mail à un client précis ou la suppression d’un tableau de commandes est un risque pour
vous. L’IA l’apprend depuis `AGENTS.md`, un fichier en
[Markdown](glossary:markdown), qu’elle lit au début de chaque travail ;
c’est pourquoi chaque limite comprend une procédure avec un moment clair où c’est vous qui décidez.
Le message séparé « ENVOYER » sert de sécurité : la phrase « puis envoie-le » au milieu
d’une consigne plus longue ne déclenche pas l’envoi. Après une écriture dans une autre application,
l’IA vous rouvre le résultat pour que vous voyiez qu’il a bien été enregistré.

Écrivez toute exception en toutes lettres avec sa condition ; l’IA l’inscrira sous le titre Exceptions. Si
vous restez uniquement dans le chat classique, une fiche distincte montre [comment basculer vers Cowork ou
Code](card:when-chat-is-not-enough).
## Faire en sorte que les listes se complètent d’elles-mêmes

La règle du prompt permet à l’IA de proposer une nouvelle étape à la liste chaque fois
qu’elle vous la demande. Mais une fois par mois, il est utile de revoir où l’IA vous a demandé des validations inutilement,
et une tâche planifiée peut le faire pour vous. Collez dans l’IA en mode
Code cette consigne et demandez-lui de créer la tâche planifiée à partir de celle-ci :

```text
Chaque premier lundi du mois à 9:00, passe en revue AGENTS.md dans ce dossier et mes chats qui s’y rapportent sur le dernier mois. Liste les étapes pour lesquelles tu m’as demandé une validation et que j’ai validées à chaque fois, et propose lesquelles déplacer vers « Tu peux faire seul ». Liste aussi les nouvelles actions irréversibles qui manquent dans la liste « Jamais sans moi ». Ne modifie les listes qu’après validation de ma proposition.
```

Si la tâche travaille avec des fichiers sur votre ordinateur, elle ne s’exécutera que si l’ordinateur
est allumé et l’application ouverte. Si vous avez déjà une
[revue hebdomadaire](card:weekly-ai-review), ajoutez-y ce point au lieu d’une
tâche séparée.
## Exemple

Tereza gère des missions dans une petite agence publicitaire et prépare avec l’IA en mode Cowork
des rapports mensuels pour six clients. Elle a activé la validation de chaque
étape ; en une heure de travail, l’IA lui a donc demandé onze fois si elle pouvait
enregistrer un fichier. Le lundi 19/10/2026, elle ouvre le dossier Rapports et colle le prompt.
À la question de savoir ce qui est irréversible, elle répond : les e-mails aux clients et la suppression d’exports ;
l’IA ne doit en aucun cas modifier les factures dans le système comptable. L’IA écrit :

```text
### Tu peux faire seul
- Lire et modifier les fichiers dans le dossier Rapports et en créer de nouveaux.
- Télécharger les exports des comptes publicitaires et en calculer des tableaux.
- Préparer des brouillons d’e-mails aux clients.

### Jamais sans moi
- E-mail hors de l’entreprise : montre le destinataire, l’objet et le texte complet et ne l’envoie qu’après mon message séparé ENVOYER.
- Suppression d’exports et de fichiers irréversibles : liste ce que tu vas supprimer et attends deux confirmations dans deux messages.
- Ne modifie pas les factures dans le système comptable ; écris-moi ce qu’il faut modifier.
- Après chaque écriture dans une autre application, recharge le résultat et montre-le-moi.
- N’insère jamais de mots de passe ni de clés d’accès dans le chat ou dans les fichiers ; je ferai la connexion via le gestionnaire de mots de passe.

### Exceptions
- Tu peux envoyer seul le rapport finalisé à mon collègue Martin dans le chat d’équipe si je l’ai validé.
```

L’IA lui écrit qu’elle travaille dans un mode où Tereza valide chaque étape, et
montre où le basculer vers celui qui ne demande que pour les étapes risquées. Le mardi 20/10,
Tereza écrit dans un nouveau chat : « Prépare le rapport d’octobre pour la Boulangerie Novák et
envoie-le à Madame Nováková. » L’IA télécharge l’export du compte publicitaire et enregistre le rapport
sans une seule question. Puis elle montre le brouillon d’e-mail avec l’adresse, l’objet et le texte
et attend. Tereza corrige la formule d’appel, envoie « ENVOYER » et l’IA lui
montre depuis les messages envoyés que l’e-mail est parti avec la pièce jointe.
## Si vous bloquez

- **L’IA continue à demander pour les étapes routinières :** l’outil est probablement en mode où vous
  validez chaque étape. Basculez-le selon le bloc « Dans votre outil »
  et demandez à l’IA d’autoriser durablement les commandes routinières.
- **L’IA a exécuté une étape de la liste « Jamais sans moi » sans demander :** écrivez « Liste
  les règles chargées au début du travail. » Si `AGENTS.md` n’en fait pas partie,
  la fiche sur le [fichier de règles pour l’IA](card:agents-md) montre comment faire pour
  qu’il soit chargé ; s’il y figure, demandez à l’IA de reformuler la limite comme une
  procédure avec une étape, par exemple « montre le brouillon et attends ENVOYER ».
- **L’outil bloque une étape que vous vouliez :** confirmez-la dans la fenêtre
  de validation, ou écrivez précisément à l’IA ce qu’elle doit faire et avec quoi, par exemple « déplace
  le rapport dans le dossier partagé `Klienti/Pekárna Novák` ».
- **Vous ne voyez pas l’offre de modes :** vous travaillez dans le chat classique, ou elle a été
  limitée par l’administrateur dans votre entreprise. Basculez vers [Cowork ou
  Code](card:when-chat-is-not-enough), ou demandez à l’IT de vous y donner
  accès.
## Ce qui sera prêt

Vous aurez deux courtes listes indiquant ce que l’IA peut faire seule et ce sur quoi elle doit toujours s’arrêter,
enregistrées dans `AGENTS.md` ou dans les paramètres de votre outil. Si l’outil propose des modes
d’autorisation, il fonctionne dans celui qui ne demande pas pour la routine. Sur une tâche réelle,
vous avez vérifié que l’IA mène le travail à bien sans questions et qu’avant l’envoi
d’un e-mail elle attend votre « ENVOYER ». La prochaine fois qu’elle vous demandera une nouvelle étape routinière,
elle proposera elle-même de l’ajouter à la liste.
## Pour aller plus loin

Quand l’IA sait où s’arrêter, confiez-lui une [longue tâche qu’elle mènera
seule](card:agent-task), par exemple pendant la nuit. Une tâche qui se répète chaque semaine,
configurez-la comme [tâche planifiée](card:recurring-ai-task).
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
