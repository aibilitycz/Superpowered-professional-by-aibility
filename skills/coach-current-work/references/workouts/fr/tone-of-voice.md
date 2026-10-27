# Enregistrez votre tone of voice : votre style d’écriture dans un fichier

L’IA analyse vos meilleurs textes pour décrire votre style d’écriture, et chaque premier brouillon d’e-mail sonne alors comme vous.

## Enregistrez votre tone of voice : votre style d’écriture dans un fichier

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec textes préparés.
## À quoi ça sert

Jeudi, vous devez écrire au client que la remise est reportée d’une semaine. L’IA écrit l’e-mail en une minute, mais commence par un paragraphe sur l’importance de la collaboration et finit par « N’hésitez pas à me contacter ». Ce n’est pas votre style, vous réécrivez donc l’e-mail pendant vingt minutes. Une semaine plus tard, cela se reproduit dans un autre chat.

Quand l’IA reçoit un fichier avec votre style et des exemples, vous changez un mot dans l’e-mail au lieu de réécrire vingt minutes.
## Ce qu’il faut préparer

- 3 à 5 textes personnels dont vous êtes satisfait : e-mails, messages, publications,
- un texte à écrire cette semaine, par exemple un e-mail au client,
- l’IA que vous utilisez au travail, ou une IA en [mode Cowork ou Code](glossary:workmode).
## Comment faire

1. Insérez le prompt et ajoutez vos textes, ou laissez l’IA les trouver dans votre boîte mail. L’IA rédige le style dans `tone-of-voice.md` : elle le sauvegarde dans un dossier ou le propose en téléchargement dans le chat.
2. Dites à l’IA ce qui ne va pas, par exemple que vous tutoyez ou vous vouvoyez. L’IA note les corrections ; si le fichier est proposé en téléchargement, téléchargez la dernière version.
3. Dans un nouveau chat, saisissez l’e-mail sans fichier, par exemple « Écris au client que la remise est reportée d’une semaine. » Puis joignez le fichier : « Réécris-le selon ce fichier. »

Les noms des clients ne doivent pas figurer dans les règles.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Rédige mon tone of voice : un fichier selon lequel toute IA écrira comme moi.

Parcours les textes que je joins ou que tu trouves dans le dossier où tu travailles. Ils sont tous de moi et me plaisent. Si je n’en joins aucun et que tu as accès à ma boîte mail, trouve dans les e-mails envoyés du dernier mois cinq longs textes de moi et montre-moi ceux que tu as choisis. S’il y en a moins de trois, dis-le-moi et demande-en d’autres.

Note mon style dans le fichier tone-of-voice.md en ces parties :

### En résumé
Trois phrases sur mon ton et à qui j’écris le plus souvent.

### Phrases et paragraphes
La longueur de mes phrases et paragraphes, comment je commence et termine un texte.

### Formules d’appel
À qui je tutoie, à qui je vouvoie et comment je salue.

### Mots
Les mots et expressions que j’utilise. En dessous, ceux que je n’écrirai jamais.

### Selon le type de texte
Ce qui change dans un e-mail, un message aux collègues et une publication. Omettez le type de texte absent des exemples.

### Extraits
Trois courts extraits de mes textes qui illustrent le mieux mon style.

### Contrôle
Une question à se poser pour chaque texte avant de me le donner.

Chaque règle doit s’appuyer sur une phrase concrète de mes textes. Ne considérez comme règle que ce qui se répète dans au moins deux textes. Décrivez comment j’écris, ne devinez pas ma personnalité. Ne transférez pas noms, chiffres ou dates dans les règles et remplacez-les dans les extraits par un mot générique, par exemple [client] ou [date].

Si tu travailles dans un dossier, sauvegarde-y tone-of-voice.md et ajoute dans le fichier AGENTS.md du même dossier la règle : « Quand tu écris un e-mail, message ou autre texte pour moi, respecte tone-of-voice.md. » Si AGENTS.md n’existe pas, crée-le. Assure-toi que AGENTS.md soit lu au début de chaque travail dans cet outil ; dans Cowork, inscris-le dans les instructions du dossier. Si tu n’as pas accès au dossier, propose-moi tone-of-voice.md en téléchargement.

Enfin, montre-moi le fichier complet et demande ce qui ne va pas. Note les corrections dans le fichier ; si tu travailles sans dossier, propose-moi la version corrigée en téléchargement.

## Dans votre outil

### Microsoft Copilot
Copilot Chat avec licence voit la boîte mail professionnelle et trouve les e-mails envoyés lui-même. Il ne propose pas de fichier à télécharger, donc faites l’étape 3 ainsi : dans un nouveau chat, faites écrire un e-mail sans style, puis insérez les règles dans Custom instructions (Paramètres du chat › Personnalisation) et donnez la même consigne dans un autre nouveau chat. Si les règles sont trop longues, demandez à l’IA de les raccourcir.

### ChatGPT
Avec Gmail ou Outlook connecté dans les Plugins, ChatGPT trouve les textes dans la boîte mail lui-même. Il propose le fichier en téléchargement et vous le joignez à l’étape 3 via +. Pour l’avoir dans chaque chat, téléchargez-le dans un projet (Nouveau projet, Ajouter source) et écrivez dans ses chats. ChatGPT gère les skills dans les forfaits Business, Enterprise, Edu et Codex.

### Claude
Avec la boîte mail connectée dans Customize, Connectors, Claude trouve les textes lui-même. Il crée un fichier à télécharger ; pour l’avoir dans chaque chat, téléchargez-le dans un projet (Nouveau projet). Dans Cowork, l’IA le sauvegarde dans le dossier et inscrit le lien vers `AGENTS.md` dans les instructions du dossier. Claude gère les skills en chat, Cowork et Claude Code, et dans les forfaits Team et Enterprise, l’administrateur les publie pour toute l’entreprise.

### Gemini
Écrivez au début du message @Gmail et Gemini trouve les e-mails envoyés lui-même si vous avez activé Keep Activity et les fonctions intelligentes de Gmail. Après corrections, écrivez « Enregistre la dernière version dans mon Google Drive » et joignez-la à l’étape 3 via Add from Drive. Créez un Gem permanent (Gems › New Gem) avec le fichier dans Knowledge ; dans Gmail, mettez les règles dans Ask Gemini › Settings › Personalization.
## Qu’est-ce que le tone of voice

Tone of voice est le terme anglais pour le style d’écriture d’une personne ou d’une entreprise ; en français, on le traduit par « ton de voix ». En écriture, ce sont les habitudes qui font reconnaître un texte comme venant de vous : la longueur de vos phrases, à qui vous tutoyez ou vouvoiez, la rapidité avec laquelle vous allez à l’essentiel et comment vous terminez un e-mail. Avec la même méthode, vous pouvez décrire le style d’un directeur pour qui vous écrivez des publications, ou celui d’une entreprise entière.

`tone-of-voice.md` est un fichier texte simple que vous ouvrez par exemple avec le Bloc-notes. L’extension `.md` signifie qu’il est écrit en [Markdown](glossary:markdown) ; les dièses `###` indiquent les titres. Toute IA capable de lire une pièce jointe peut le lire, vous pouvez donc l’utiliser dans n’importe quel outil et l’emporter avec vous si vous changez d’outil. Vous pouvez aussi l’insérer dans les instructions permanentes des paramètres de l’outil, comme le montre la carte [Configurez vos Custom Instructions](card:custom-instructions).

`AGENTS.md` est un fichier de règles pour l’IA dans un dossier. L’IA en mode Cowork ou Code le lit au début de chaque travail dans ce dossier, et là où l’outil doit le configurer, l’IA le fait selon le prompt. Vous n’avez donc pas besoin de joindre le fichier de style à chaque fois.
## Faites écrire l’IA dans votre style partout

Si vous ne voulez pas joindre le fichier à chaque fois, transformez `tone-of-voice.md` en [skill](glossary:skill) : un guide enregistré que l’IA ouvre automatiquement chaque fois qu’elle écrit pour vous. La règle dans `AGENTS.md` ne s’applique qu’au travail dans un dossier. Où votre outil gère les skills, vous le trouverez dans la section « Dans votre outil ». Dites à l’IA :

```text
Transforme tone-of-voice.md en skill que tu utiliseras chaque fois que tu écris un texte pour moi destiné à des personnes. Sauvegarde-le là où cet outil le charge et vérifie qu’un nouveau chat le voit aussi. Si tu ne peux pas le sauvegarder, dis-moi exactement où cliquer.
```

Le ton d’entreprise suffit à être écrit une fois. Dans les forfaits entreprise, le skill peut être partagé avec les collègues, ainsi chacun qui écrit pour l’entreprise y a accès.
## Exemple

Martin est chef de projet dans une entreprise de construction. Le lundi 12/10/2026, il donne à l’IA dans le dossier de travail quatre e-mails aux fournisseurs et un rapport du vendredi à la direction. L’IA écrit dans `tone-of-voice.md` notamment :

```text
### En résumé
J’écris court et factuel. La première phrase donne l’état des lieux ou ce dont j’ai besoin. Je vouvoie les fournisseurs et la direction, je tutoie les collègues du chantier.

### Phrases et paragraphes
Les phrases font généralement moins de 15 mots et le paragraphe au plus trois phrases. Je termine par la prochaine étape et une date.

### Mots
J’utilise : « état », « j’ai besoin de vous », « d’ici vendredi ».
Je n’utilise pas : « permettez-moi », « suite à », « n’hésitez pas à me contacter ».

### Contrôle
Est-ce que je dirais cela ainsi au fournisseur au téléphone ?
```

Jeudi 15/10, il doit écrire à l’investisseur que le bétonnage est reporté. Dans un nouveau chat sans fichier, il obtient un e-mail commençant par « Permettez-moi de vous informer de l’évolution actuelle » et la nouvelle date n’apparaît qu’au troisième paragraphe. Avec le fichier, l’e-mail commence par « Le bétonnage est reporté d’une semaine, au jeudi 22/10 » et se termine par ce que Martin attend de l’investisseur d’ici vendredi. Martin change un mot et envoie l’e-mail.
## En cas de blocage

- **Les règles sont générales, par exemple « écrit de façon amicale » :** dites à l’IA : « Pour chaque règle, donne une phrase de mes textes qui la justifie, et supprime les règles sans phrase. »
- **Le texte avec le fichier ne sonne toujours pas comme vous :** marquez la phrase que vous écririez autrement, ajoutez votre version et demandez à l’IA d’ajouter la règle correspondante dans `tone-of-voice.md`.
- **Vous n’avez pas assez de bons textes :** trois suffisent. Les e-mails que vous avez réécrits avec l’IA aident aussi : donnez à l’IA sa version et la vôtre, la différence montrera le mieux votre style.
- **Le fichier ne peut pas être téléchargé ou l’IA ne l’utilise pas dans le dossier :** dans le chat, écrivez « Donne-moi `tone-of-voice.md` en fichier à télécharger. » Si le chat ne sait pas faire, passez en [mode Cowork ou Code](card:when-chat-is-not-enough). Là, écrivez « Lis `AGENTS.md` et assure-toi de le lire au début de chaque travail automatiquement. »
## Ce que vous aurez

Vous avez le fichier `tone-of-voice.md` avec les règles de votre style et trois exemples. Dans Cowork ou Code, il est dans le dossier et la règle dans `AGENTS.md` fait que l’IA s’y conforme automatiquement ; dans le chat, vous l’avez téléchargé ou sauvegardé dans les paramètres de l’outil. Dans un nouveau chat, vous avez vu le même e-mail sans et avec le fichier, et le second sonnait comme vous.
## Et ensuite

Si vous écrivez seulement dans un chat classique, ajoutez le fichier dans un [projet avec documents et instructions](card:asistent) et l’IA l’aura dans chaque chat de ce projet. Avant d’envoyer le texte, révisez-le avec l’IA selon la carte [Vérifiez la sortie de l’IA](card:kontrola-vysledku).
## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Compétence

**Qu'est-ce que c'est :** Une procédure réutilisable pour un type spécifique de tâche. Elle peut contenir des instructions, des règles, des exemples, des modèles et d'autres ressources nécessaires. La méthode de création et d'exécution varie selon l'outil.

**Ce que ce n'est pas :** Ce n'est pas un rôle général d'assistant ni une conversation réussie enregistrée sans modification.

**Pourquoi l'étudiant en a besoin :** Elle aide à transformer une bonne pratique en une forme stable pouvant être utilisée de manière cohérente et répétée.

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
