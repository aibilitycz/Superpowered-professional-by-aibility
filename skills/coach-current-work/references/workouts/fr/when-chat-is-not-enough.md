# Intégrez l'IA à votre dossier : quand le chat classique ne suffit pas

Quand le chat ne suffit pas pour plusieurs fichiers à la fois, passez en mode Cowork ou Code et l'IA enregistrera directement le résultat dans le dossier.

## Intégrez l'IA à votre dossier : quand le chat classique ne suffit pas

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec un dossier de travail en cours.
## À quoi ça sert

Vous devez recommander un fournisseur de nouveaux ordinateurs portables à la direction avant le jeudi 15/10. Cinq offres sont dans un dossier au format PDF. Vous les téléchargez une par une dans le chat, copiez le tableau comparatif dans Word, et quand une sixième offre arrive mercredi, vous recommencez tout.

En [mode travail](glossary:workmode) Cowork ou Code, l'IA a accès à tout le dossier, donc elle ajoute simplement la sixième offre au tableau déjà fait.
## Ce qu'il faut préparer

- un dossier avec le travail en cours pour un projet, sur votre ordinateur ou sur un disque d’entreprise,
- une tâche que vous n’avez pas pu faire dans le chat ; si vous n’en avez pas, l’IA fera un résumé des documents,
- l’IA que vous utilisez ; si elle propose Cowork ou Code, vous verrez le bloc « Dans votre outil ».
## Comment faire

1. Ouvrez dans votre outil IA le mode Cowork ou Code. Pour certains outils, c’est une application ordinateur à installer d’abord.
2. Donnez à l’IA l’accès au dossier, et quand elle demande la permission de travailler dessus, acceptez. Entrez le prompt et ajoutez en une phrase la tâche que vous n’avez pas pu faire dans le chat.
3. Ouvrez le fichier que l’IA a enregistré dans le dossier. Si quelque chose ne va pas, écrivez-le à l’IA dans le même chat, elle corrigera le fichier.

Ce qui manque dans les documents, l’IA le marque [À COMPLÉTER] et vous le complétez.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code,
ouverte dans votre dossier, et ajoutez en dessous votre tâche :

Tu travailles dans mon dossier avec le travail en cours. Si tu ne peux pas voir dedans ou enregistrer un fichier, dis-le-moi tout de suite : je suis probablement dans un chat classique et dois passer en mode Cowork ou Code.

Parcours tous les fichiers du dossier et écris-moi en deux phrases ce qu’il contient.

Puis réalise la tâche que je t’écris sous cette consigne. S’il n’y en a pas, fais un résumé des documents dans le dossier : pour chacun, le titre, son sujet, les chiffres et dates importants, et ce que cela implique pour moi. Prends chiffres et faits uniquement dans les documents ; ce que tu ne trouves pas, marque [À COMPLÉTER].

Enregistre le résultat dans un nouveau fichier dans ce dossier, en document Word, et si c’est un tableau ou des chiffres, en tableau Excel. Dis-moi le nom du fichier et ce qu’il contient.

Enfin, enregistre les règles pour ce dossier : en une phrase ce qu’il contient, le nom du fichier résultat, et la règle « Quand un document est ajouté ou modifié dans le dossier, complète-le dans le résultat de la même façon. » En mode Cowork, écris-les dans les instructions du dossier. Sinon, écris-les dans un fichier AGENTS.md dans le dossier, et s’il n’existe pas, crée-le. Dis-moi où tu as enregistré les règles.

## Dans votre outil

### Microsoft Copilot
Le mode Cowork s’appelle Copilot Cowork : sur `copilot.cloud.microsoft`, sélectionnez-le avec le bouton en haut à côté de Chat ; il nécessite une licence Copilot et une activation par l’administrateur. Il n’accède pas aux fichiers sur l’ordinateur, mettez le dossier sur OneDrive ou SharePoint et joignez-le avec le bouton +. Les nouveaux fichiers sont enregistrés dans le dossier Cowork sur OneDrive et visibles dans le panneau à droite. Les règles sont sauvegardées comme compétence.

### ChatGPT
Le mode Code est ChatGPT Codex dans l’application ChatGPT pour ordinateur, téléchargeable sur le site ChatGPT ; vous n’avez pas besoin de programmer. Après connexion, choisissez Codex, puis New chat et ouvrez un dossier (open a folder). Codex est disponible dans tous les forfaits ChatGPT, même gratuit, mais peut être désactivé par l’administrateur dans un compte entreprise. L’IA enregistre les règles dans un fichier `AGENTS.md` dans le dossier.

### Claude
Les modes Cowork et Code sont disponibles dans l’application Claude pour ordinateur, téléchargeable sur `claude.com/download` ; Cowork est dans les forfaits payants. Dans le champ de message, passez de Chat à Cowork ; si vous ne voyez pas cette option, vous avez une version où Cowork est intégré à chaque chat. Ouvrez le dossier dans le panneau gauche via Projects, + et Use an existing folder. L’IA enregistre les règles dans les instructions du dossier.

### Gemini
Gemini n’a pas de mode Cowork ni Code, mais gère plusieurs fichiers dans l’application Gemini : via Add from Drive, joignez jusqu’à 10 fichiers, entrez le prompt et à l’invite de changer de mode, écrivez « continue ici ». Vous enregistrez le résultat avec Export to Sheets, le texte via Share & export puis Export to Docs. Pour tout le dossier sur Drive, utilisez le clic droit et Ask Gemini. Enregistrez les règles comme compétence (Customize, Skills).
## Qu’est-ce que le mode Cowork et Code

Le mode Cowork sert à travailler avec des documents : l’IA lit et enregistre les fichiers du dossier que vous ouvrez, et travaille seule sur la tâche. Le mode Code est surtout pour le code, sites web et scripts, mais fonctionne pareil avec un dossier, donc vous pouvez aussi l’utiliser pour des documents.

L’IA enregistre les règles dans un fichier `AGENTS.md` dans le dossier ou dans les instructions mémorisées par l’outil, donc elles s’appliquent à chaque nouveau chat sur ce dossier. Dans un dossier partagé, le fichier `AGENTS.md` est visible par les collègues ; ne le supprimez pas, l’IA s’y réfère. En mode Cowork ou Code, vous pouvez aussi planifier des tâches qui s’exécutent automatiquement à heure fixe.
## Quand le chat classique suffit

Le chat classique dans n’importe quel outil suffit dans deux cas :

- **Sortie ponctuelle à partir de ce que vous mettez dans le chat :** réponse à un e-mail, résumé d’un document, points pour une réunion. Vous fournissez la base une fois et utilisez le résultat immédiatement.
- **Travail dans la messagerie, calendrier ou documents d’entreprise connectés au chat [intégré](card:plugin-connector) :** par exemple un brouillon de réponse dans Outlook ou un aperçu des réunions de la semaine prochaine.

Passez en mode Cowork ou Code quand les bases sont plusieurs fichiers dans un dossier, ou quand le résultat doit rester un fichier auquel vous reviendrez.
## Exemple

Ondřej coordonne la rénovation des bureaux et doit envoyer à l’investisseur avant le vendredi 16/10 la liste des défauts non réparés. Dans le dossier `Rénovation bureaux`, il a sept rapports de contrôle en Word. Il ouvre l’IA en mode Cowork, lui donne accès au dossier et ajoute sous le prompt : « Fais la liste des défauts encore non réparés selon les rapports, avec la date limite et l’entreprise responsable. »

L’IA enregistre dans le dossier un tableau `defauts-ouverts.xlsx` avec quatorze défauts. Deux rapports manquent la date, donc ils sont marqués [À COMPLÉTER]. Dans les règles du dossier, elle note qu’il contient les rapports de contrôle et la liste des défauts ouverts, avec la règle de compléter les défauts à chaque nouveau rapport et de marquer les réparés.

Le lundi 19/10, Ondřej ajoute un nouveau rapport dans le dossier, ouvre un nouveau chat dans le même dossier et écrit simplement « Un nouveau rapport a été ajouté. » L’IA complète la liste et marque deux défauts comme réparés.
## En cas de blocage

- **L’IA répond qu’elle ne voit pas le dossier ou ne peut pas enregistrer un fichier :** vous êtes dans un chat classique. Passez en mode Cowork ou Code selon le bloc « Dans votre outil » et donnez accès à l’IA.
- **Le mode Cowork ou Code manque dans votre outil :** dans un compte entreprise, l’administrateur l’active souvent, demandez-lui. Claude gratuit n’a pas Cowork, Copilot Cowork nécessite une licence Microsoft 365 Copilot, et Gemini n’a pas ce mode, la procédure est dans « Dans votre outil ». Si Codex manque dans l’application ChatGPT personnelle, téléchargez la nouvelle application ChatGPT pour ordinateur.
- **Vous ne pouvez rien installer :** Copilot Cowork et Gemini sur Google Drive fonctionnent dans le navigateur et travaillent avec le dossier sur disque d’entreprise sans installation. Sinon, envoyez un message IT : « J’ai besoin d’une application IA pour ordinateur afin que l’IA puisse travailler avec les fichiers projet dans un dossier sur mon ordinateur. »
- **L’IA a ignoré certains fichiers :** donnez-lui leurs noms pour qu’elle les ajoute. S’il y a des centaines de fichiers, ouvrez seulement le sous-dossier lié à la tâche.
## Ce qui sera prêt

Vous avez une IA en mode Cowork ou Code qui travaille avec votre dossier. Un nouveau fichier contient le résultat de la tâche impossible en chat, et l’IA vous a indiqué où elle a enregistré les règles : ce que contient le dossier et comment compléter le résultat quand un document arrive. La prochaine fois, ouvrez le même dossier dans un nouveau chat et écrivez seulement ce qui a changé.
## Et ensuite

Pour préparer ainsi tout votre travail en cours, créez un [espace de travail PACT](card:pact-workspace). Pour que le résultat se mette à jour automatiquement, par exemple chaque lundi matin, configurez une [tâche planifiée](card:recurring-ai-task).
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
