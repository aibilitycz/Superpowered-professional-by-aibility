# Configurez vos Custom Instructions : directives permanentes pour chaque chat

L’IA rédige des instructions permanentes à partir de vos cinq réponses, et chaque nouveau chat vous répond ensuite comme vous le souhaitez.

## Configurez vos Custom Instructions : directives permanentes pour chaque chat

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec une tâche réelle pour validation.
## À quoi ça sert

Le lundi, vous voulez extraire cinq tâches pour l’équipe à partir des notes de réunion, et l’IA les cache jusqu’au troisième paragraphe. Vous ajoutez « sans introduction, juste les points, je suis coordinatrice de projets » et le mercredi, dans un nouveau chat, vous écrivez la même chose à nouveau.

Les Custom Instructions sont des directives personnalisées dans les paramètres de l’IA, que l’IA reçoit à chaque nouveau chat, donc vous n’écrivez qui vous êtes et comment elle doit vous répondre qu’une seule fois.
## Ce qu’il faut préparer

- L’IA que vous utilisez au travail,
- les consignes que vous répétez sans cesse à l’IA, par exemple « de façon concise » ou « sans introduction »,
- une tâche de cette semaine, par exemple un compte rendu de réunion ; vous vérifierez les instructions avec.
## Comment faire

1. Ouvrez un nouveau chat et insérez le prompt de l’exercice IA. L’IA vous posera des questions sur ce qu’elle ne sait pas de vous et rédigera les Custom Instructions.
2. Ce qui ne convient pas, dites-le à l’IA, par exemple que vous souhaitez le vouvoiement. Collez la version finale dans le champ des instructions personnalisées ; où le trouver est indiqué dans le bloc « Dans votre outil ».
3. Dans un nouveau chat, soumettez la tâche préparée sans explication sur vous. Si la réponse ne convient pas, dites à l’IA ce qu’elle doit faire différemment la prochaine fois, elle s’en souviendra.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Rédige-moi des Custom Instructions : directives courtes que je pourrai insérer dans les paramètres de cet outil IA, pour que chaque nouveau chat sache qui je suis et comment me répondre.

Tu as besoin de ces cinq informations de ma part :
1. Quel est mon rôle et quelles sont mes responsabilités.
2. Dans quel secteur et pour qui je travaille.
3. En quoi l’IA m’aide le plus souvent au travail.
4. La longueur et la forme des réponses que je souhaite.
5. Ce que je ne veux pas dans les réponses.

Si tu sais déjà quelque chose de moi par mémoire ou par des chats précédents, écris d’abord ce que tu sais, puis demande uniquement ce qui manque. Pose toutes les questions manquantes en une fois, je répondrai brièvement. Si j’ai déjà des instructions dans les paramètres, prends-les comme base.

Rédige les instructions en deux parties avec les titres « Qui je suis : » et « Comment me répondre : ». Mets dans la première mon rôle, secteur, pour qui je travaille et en quoi l’IA m’aide, dans la seconde la langue, la longueur et la forme des réponses, et ce que je ne veux pas.

Formule chaque directive en une phrase claire, permettant de vérifier si la réponse la respecte. Transforme les conseils généraux comme « écris de façon concise » en directives précises, par exemple « réponds en cinq points maximum ». Ne mets pas dans les instructions les dates, chiffres, noms de clients ou détails d’un projet du jour. Garde l’ensemble sous 1 500 caractères pour que ça tienne même dans la version gratuite de ChatGPT.

À la fin de la partie « Comment me répondre : », ajoute la directive : « Si je te corrige et que la correction doit s’appliquer aussi la prochaine fois, mémorise-la. Si tu n’as pas la mémoire activée, écris-moi une phrase que j’ajouterai aux Custom Instructions. »

Enfin, montre-moi les instructions dans un seul bloc à copier et demande-moi ce qui ne convient pas. Intègre les corrections et montre-moi la version corrigée complète.

## Dans votre outil

### Microsoft Copilot
Les instructions personnalisées se trouvent dans le Copilot Chat sur `copilot.cloud.microsoft` sous les trois points en haut à droite : Paramètres et plus, Paramètres du chat, Personnalisation, Instructions personnalisées. Collez les instructions via Modifier les instructions et Enregistrer les instructions. Si vous dites à Copilot « mémorise… », il l’enregistre en mémoire. Si le champ manque, collez les instructions dans les instructions du Notebook (Bloc-notes, Nouveau bloc-notes).

### ChatGPT
Dans le menu du compte (cliquez sur votre nom), ouvrez Paramètres, puis Personnalisation, et collez les instructions dans le champ Custom Instructions ; le bouton Activer la personnalisation doit être activé. Dans la version française, les éléments sont au même endroit, juste en français. Les abonnements payants et professionnels acceptent 5 000 caractères, le compte gratuit 1 500. La mémoire se trouve dans Paramètres, Personnalisation, Mémoire.

### Claude
En bas à gauche, cliquez sur vos initiales, puis sur Paramètres. Le champ s’appelle Instructions for Claude et s’applique à toutes les conversations. La mémoire est dans Paramètres sous Mémoire ; dans les abonnements professionnels Team et Enterprise, elle est activée par le propriétaire de l’organisation.

### Gemini
Les instructions permanentes se mettent dans Gemini dans le robot Gem, car le compte professionnel n’a ni instructions personnalisées ni mémoire : sur `gemini.google.com`, ouvrez Robots Gem, Nouveau Gem, collez les instructions et Enregistrez. Ouvrez ensuite les nouveaux chats dans ce Gem. La phrase que l’IA vous écrit pour les Custom Instructions, ajoutez-la dans les instructions du Gem dans la section Mes robots Gem.
## Qu’est-ce que les Custom Instructions

Votre outil utilise vos Custom Instructions à chaque nouveau chat. L’IA les connaît donc même si vous ne les mentionnez pas dans le chat, et si vous en avez déjà, le prompt de cet exercice en tient compte. Elles restent valides tant que vous ne les modifiez pas dans les paramètres.

Par ailleurs, la plupart des outils IA ont une mémoire où l’IA stocke elle-même des éléments de vos chats et les met à jour en continu. Elle sert pour les corrections accumulées au fil du travail. Ce qui doit toujours s’appliquer, transférez-le de temps en temps dans les Custom Instructions, car celles-ci ne changent pas d’elles-mêmes.

Les instructions doivent contenir uniquement ce qui s’applique à chaque chat. Donnez à l’IA directement dans le chat la date, le chiffre ou le nom du client du jour, sinon elle les intégrera dans les réponses où ils n’ont pas leur place.
## Modèle de Custom Instructions

Le modèle complète les instructions avec des règles selon lesquelles l’IA recherche sur le web les informations actuelles et vous avertit si elle n’est pas sûre.

Vous n’avez rien à remplir, l’IA remplit les crochets selon ce qu’elle sait de vous et vous demande ce qu’elle ignore. Le mieux est de l’insérer juste après l’exercice dans le même chat, avant d’enregistrer les instructions dans les paramètres. Si vous les avez déjà, ouvrez un nouveau chat ; l’IA les voit. Dans les deux cas, insérez ce prompt :

```text
Ajoute aux mes Custom Instructions les règles de ce modèle. Remplis les crochets selon ce que tu sais de moi, et demande-moi ce que tu ignores. Ne duplique pas les règles déjà dans les instructions, et si une règle du modèle contredit la mienne, garde la mienne. L’instruction sur la mémorisation des corrections reste à la fin. Garde l’ensemble sous 1 500 caractères et montre-moi tout dans un seul bloc à copier.

Qui je suis :
[role] chez [nom de l’entreprise], je gère principalement [deux à trois sujets].

Comment me répondre :
- Réponds en français et tutoie-moi ou vouvoie-moi.
- Commence par le résultat ou la réponse, les détails après. Sans introduction ni résumé final.
- Explique en une phrase les termes que je ne connais pas.
- Pour les sujets actuels, comme les réglementations, prix ou nouveautés du secteur, cherche sur le web et cite les sources.
- Si tu n’es pas sûr, dis-le et indique ce qui doit être vérifié. Ne fabrique pas de chiffres.
- N’envoie jamais d’e-mail ou message à ma place sans ma confirmation explicite.
- Sous un document ou tableau long, ajoute une phrase sur ce qui manque encore.
```

Collez tout le bloc que l’IA vous renvoie dans le champ des instructions personnalisées. Si vous avez déjà des instructions, remplacez-les.

La ligne sur l’e-mail est une sécurité : une IA avec accès à votre messagerie peut envoyer un e-mail, cette ligne garantit qu’elle ne le fera pas sans votre accord. Si elle n’a pas accès, cette ligne ne gêne pas.

Si l’IA ne cite pas de sources sur un sujet actuel, dites-lui « cherche ça sur le web ». Si elle ne cherche toujours pas, activez la recherche web ; dans certains outils, elle est sous le bouton + à côté du champ de message, ailleurs dans les paramètres. Dans un compte professionnel, l’administrateur peut la désactiver.
## Pour que l’IA mémorise elle-même les corrections

La directive à la fin des instructions fait que si vous corrigez l’IA et que la correction doit s’appliquer aussi la prochaine fois, l’IA la mémorise. Si vous avez la mémoire activée, pas besoin de vérifier. Dans un compte professionnel, c’est l’administrateur qui décide, et si l’IA n’a pas de mémoire, elle vous écrit une phrase à ajouter aux Custom Instructions.

Au bout de quelques mois, la mémoire accumule tellement de corrections qu’il vaut la peine de les transférer dans les instructions. Ouvrez un nouveau chat et écrivez :

```text
Prends mes Custom Instructions actuelles et ajoute ce que tu as mémorisé sur moi et qui s’applique à chaque chat. Fusionne les directives redondantes et supprime celles qui ne conviennent plus. Garde le résultat sous 1 500 caractères et montre-moi ce que tu as changé.
```

Collez ensuite la nouvelle version dans les paramètres à la place de l’ancienne.
## Exemple

Jana coordonne des projets dans une entreprise qui implémente des systèmes de gestion de stock pour des e-shops. Le lundi 12/10/2026, elle insère le prompt dans l’IA qu’elle utilise au travail. Celle-ci se souvient des chats précédents que Jana coordonne des projets et ne demande que la longueur des réponses et ce qu’elle ne veut pas dans celles-ci. Jana répond « court, pour les tâches toujours qui fait quoi et pour quand, et ne m’explique pas les termes de gestion de projet ». L’IA écrit :

```text
Qui je suis :
Je coordonne des projets d’implémentation de systèmes de gestion de stock pour des e-shops. Je gère les délais, les fournisseurs et les réunions. L’IA m’aide surtout avec les comptes rendus de réunion, les e-mails aux fournisseurs et les rapports pour la direction.

Comment me répondre :
- Écris en tchèque et commence directement par le résultat, sans introduction ni résumé final.
- Réponds en cinq points ou cinq phrases maximum, sauf si je veux plus.
- Formule les tâches ainsi : qui, quoi, pour quand.
- N’explique pas les termes de gestion de projet, je les connais.
- Si je te corrige et que la correction doit s’appliquer aussi la prochaine fois, mémorise-la. Si tu n’as pas la mémoire activée, écris-moi une phrase que j’ajouterai aux Custom Instructions.
```

Jana insère ces instructions dans les paramètres. Le mardi, elle ouvre un nouveau chat, colle les notes de la réunion avec le fournisseur et écrit juste « fais-en un compte rendu pour l’équipe ». Elle reçoit cinq tâches formulées qui, qui, quoi, pour quand, sans introduction. La date de lancement 02/11 est prise des notes du mardi ; il n’y a pas de date dans les instructions, donc elle ne sera pas reprise dans un autre compte rendu un mois plus tard. Pour « qui », il n’y a que les initiales, alors Jana écrit « écris les noms complets ». L’IA mémorise cela et le compte rendu du jeudi a les noms complets.
## En cas de blocage

- **L’IA répond comme avant :** ouvrez un nouveau chat et vérifiez dans les paramètres que les instructions sont bien enregistrées. Dans ChatGPT, le bouton Activer la personnalisation doit être activé, dans Gemini ouvrez un nouveau chat directement dans le robot Gem.
- **Le champ pour les instructions manque dans un compte professionnel :** la fonction est probablement désactivée par l’administrateur. Enregistrez les instructions dans un [projet](card:asistent), où elles s’appliquent à tous les chats du projet.
- **Les instructions ne tiennent pas dans le champ :** dites à l’IA « réduis les instructions à moins de 1 500 caractères. Fusionne les directives redondantes et supprime celles dont l’absence ne changerait pas la réponse. »
- **L’IA respecte la directive seulement parfois :** la directive est probablement trop générale, par exemple « écris de façon concise ». Demandez à l’IA de la reformuler en directive précise, par exemple « au maximum cinq points », et collez la nouvelle version dans les paramètres.
## Ce que vous aurez

Dans les paramètres de votre IA, les Custom Instructions décrivent votre travail et le type de réponses que vous souhaitez. Dans un nouveau chat sur une tâche réelle, vous avez vu que l’IA répond dans la longueur et la forme que vous avez définies. Quand vous la corrigerez la prochaine fois, elle mémorisera la correction ou vous écrira une phrase à ajouter aux instructions.
## Et ensuite

Le style avec lequel l’IA rédige vos e-mails et publications ne tient pas en quelques lignes d’instructions. L’IA le rédige dans un document séparé selon la carte [Tone of voice](card:tone-of-voice). Les consignes pour un projet ou un travail récurrent se stockent dans un [projet](card:asistent). Quand vous travaillerez avec l’IA en mode Cowork ou Code, c’est-à-dire directement avec un dossier sur votre ordinateur, laissez-la reprendre les instructions dans le fichier `AGENTS.md` selon la carte [Règles pour l’IA dans un seul fichier](card:agents-md).
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

## Sauvegarder pour la prochaine fois

Mécanique produit optionnelle après la création d'un résultat utilisable. Ce n’est pas une carte autonome, elle n’a pas de finalisation propre et n’augmente pas le nombre de méthodes complétées.

## Quand elle est proposée
- la personne a marqué le résultat comme utilisable,
- une instruction corrigée, un style, un arbre de décision, un transfert ou un autre élément répétable a été créé pendant le travail,
- le même type de travail est susceptible de revenir.

La mécanique ne s’affiche pas pour un résultat ponctuel sans partie transférable ou lorsque la sauvegarde sécurisée n’est pas claire.

## Ce que la personne voit
Un choix court **Sauvegarder pour la prochaine fois** à côté du check-in commun. Après ouverture, l’IA propose automatiquement :

- ce qui du résultat est réutilisable,
- ce qui changera à chaque fois,
- ce que la personne doit vérifier lors de la prochaine utilisation.

La personne confirme ou corrige la proposition. La mécanique ne crée pas de formulaire obligatoire supplémentaire.

## Ce que crée l’IA
Le plus petit résultat réutilisable correspondant au travail réel :

- une préférence personnelle courte,
- une instruction ou un prompt,
- une note en Markdown ou dans un second cerveau,
- une mise à jour de projet ou d’assistant,
- une base pour une compétence,
- une modification d’un workflow existant.

Si un artefact approprié existe déjà, l’IA met à jour sa version actuelle au lieu de créer une copie supplémentaire.

## Où le contenu appartient
| Type de contenu | Emplacement par défaut |
|---|---|
| Petite préférence personnelle sans étapes de processus | mémoire ou profil, si cette fonction est disponible et adaptée |
| Instruction canonique, exemple ou description de procédure | Markdown, document ou second cerveau personnel |
| Contexte limité à un seul projet | instructions et fichiers du projet |
| Rôle répétée avec contexte stable | assistant |
| Procédure stable avec règles, exemples et modèles | compétence |
| Plusieurs étapes consécutives | workflow ; pour le choix des étapes et actions, éventuellement branche agentielle |

La mémoire n’est pas un stockage canonique de procédure versionnée. Elle peut conserver une préférence ou un lien vers la source actuelle.

## Quand la forme cible n’est pas claire
La mécanique crée un transfert succinct vers la carte [Créez un projet dans votre outil IA](card:asistent). Elle ne choisit pas de forme sans intervention humaine et ne remplace pas une carte compétence autonome.

## Sécurité et partage
- La mécanique utilise des stockages approuvés connus et les règles d’entreprise.
- Les données du cas spécifique sont séparées de la partie stable.
- Sans autorisation, rien n’est écrit dans le système partagé ni aucun accès modifié.
- Le partage en équipe commence après réutilisation répétée, désignation d’un propriétaire et validation par une autre personne.

## Traçabilité
Une information peut être ajoutée au check-in indiquant qu’un artefact réutilisable a été créé ou modifié. Ce n’est pas une complétion de carte indépendante.

## Premières cartes supportées
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
