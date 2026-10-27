# Passez le texte à l’anti-slop : qu’il ne sonne pas comme écrit par une IA

L’IA repère dans le texte les tournures et promesses qui trahissent une écriture IA, les réécrit et surveille les textes suivants elle-même.

## Passez le texte à l’anti-slop : qu’il ne sonne pas comme écrit par une IA

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec un seul texte que vous souhaitez envoyer.
## À quoi ça sert

Jeudi, vous envoyez à Mme Horáková du service achats une offre pour l’entretien des fourgons de l’entreprise. L’introduction a été rédigée par l’IA et commence par une phrase sur un partenaire fiable en période difficile, comme quatre autres offres sur son bureau. De plus, elle promet une réparation sous 24 heures, alors que personne dans l’entreprise ne l’a garanti.

Les phrases générales et promesses non confirmées disparaîtront quand l’IA les comparera à la demande et au tarif, et les remplacera par ce qui est réellement indiqué.
## Ce qu’il faut préparer

- le texte que vous souhaitez envoyer et qui a été entièrement ou partiellement écrit par l’IA,
- les documents sources : demande, tarif ou notes d’appel,
- l’IA que vous utilisez au travail, ou une IA en [mode Cowork ou Code](glossary:workmode).
## Comment faire

1. Insérez le prompt et sous la ligne « Texte : » mettez le texte ou le nom du fichier dans le dossier ; joignez les documents dans le chat. L’IA renverra les observations et le texte réécrit, en omettant les parties sur les fichiers dans le chat.
2. Dites à l’IA quelles corrections vous ne souhaitez pas, complétez les endroits marqués `[À COMPLÉTER]` ou laissez-les barrés. L’IA terminera le texte, enregistrera la liste des tournures avec la règle et vous dira où.
3. Dans un nouveau chat, demandez à l’IA d’écrire un autre texte, par exemple une réponse client. Les tournures de la liste ne devraient pas y apparaître.

Seules les tournures susceptibles d’apparaître dans d’autres textes doivent figurer dans la liste.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Vérifie le texte à la fin de ce message avant que je l’envoie. Il y a soit un nom de fichier dans le dossier, soit le texte complet. Trouve les passages qui feraient reconnaître au lecteur que c’est écrit par une IA, et réécris-les pour qu’ils sonnent comme écrits par une personne qui connaît le sujet.

Passe le texte à travers quatre filtres :
- Concrétude : remplace les affirmations et adjectifs sans preuve, comme « partenaire fiable » ou « vous ferez des économies significatives », par un chiffre, un nom, une date ou une situation tirée des documents.
- Formules : évite les tournures usées (« dans notre époque pressée », « nous vous faisons passer au niveau supérieur », « n’hésitez pas à nous contacter »), les oppositions du type « il ne s’agit pas seulement de X, mais de Y » et les conclusions creuses.
- Rythme : repère trois phrases ou plus de même longueur à la suite, les chaînes de phrases courtes et les trios automatiques de mots.
- Format : détecte les tirets longs, les emojis à la place des puces et les astérisques Markdown dans le texte où ils ne deviennent pas gras, par exemple dans un e-mail.
Enfin, demande-toi si ce texte pourrait figurer sur le site web de n’importe quelle entreprise. Si oui, rends-le plus précis.

Ne crée pas de chiffres, dates, noms ou promesses. Compare-les aux documents dans le dossier ou le chat. Ce qui manque, marque-le par [À COMPLÉTER] et demande-moi.

Commence par renvoyer les observations : citation du texte, filtre violé, et meilleure version. Ensuite, donne le texte réécrit complet. Je te dirai quelles corrections je ne veux pas et compléterai ce qui manque. Enregistre le texte final dans un nouveau fichier à côté de l’original et donne-moi son nom. Si j’ai inséré le texte dans le chat, renvoie-le en entier.

Puis, enregistre au maximum cinq tournures des observations, susceptibles d’apparaître dans d’autres textes, dans le fichier anti-slop.md du dossier où tu travailles. Pour chaque tournure, indique par quoi la remplacer et résume brièvement les quatre filtres. Si le fichier existe, ajoute seulement les nouvelles tournures. Dans le fichier AGENTS.md du même dossier, ajoute la règle : « Avant de me montrer un texte qui sera envoyé sous mon nom, vérifie-le selon anti-slop.md. » Si AGENTS.md n’existe pas, crée-le. Assure-toi que je puisse le lire dans cet outil au début de chaque travail ; dans Cowork, inscris-le dans les instructions du dossier. Si tu travailles dans un chat classique sans dossier, ne crée pas de fichiers et garde en mémoire la liste des tournures avec la règle : « Avant de me montrer un texte qui sera envoyé sous mon nom, vérifie-le selon cette liste. » Enfin, indique-moi où tu as enregistré la liste et la règle.

Texte :

## Dans votre outil

### Microsoft Copilot
Collez le texte dans Copilot Chat et joignez les documents via + près du champ de message.
La sauvegarde en mémoire est confirmée par le message Memory updated ; l’aperçu se trouve dans les paramètres sous Chat settings › Personalization › Saved memories. Sans mémoire, tapez « Liste en texte » et collez-la dans Custom instructions au même endroit. Copilot a des skills en mode Cowork (Customize › Skills) si l’entreprise les a activés.

### ChatGPT
Dans un chat classique, ChatGPT garde la liste en mémoire (paramètres, Personalization › Memory) ; sans mémoire, collez-la dans Custom Instructions au même endroit. Codex travaille avec un dossier dans l’application ChatGPT pour ordinateur : choisissez ouvrir un dossier (open a folder) et il enregistrera anti-slop.md et la règle dans AGENTS.md automatiquement. ChatGPT a des skills dans les forfaits Business, Enterprise et Edu.

### Claude
Dans un chat classique, Claude garde la liste avec la règle en mémoire. En Cowork, vous sélectionnez le dossier lors de la tâche et l’IA inscrit le lien vers AGENTS.md dans les instructions du dossier ; Claude Code lit AGENTS.md lui-même. Claude gère les skills en chat, Cowork et Claude Code.

### Gemini
Le lieu permanent pour la liste est dans Gemini Gem, car le compte professionnel n’a pas de mémoire. À la fin, écrivez « Liste uniquement des tournures avec la règle » et exportez-la via Share & export › Export to Docs. Puis Gems › New Gem : dans les instructions « Vérifie chaque texte selon la liste dans le document joint », ajoutez le document via Knowledge › Add from Drive. Faites l’étape 3 et les textes suivants dans ce Gem.
## Qu’est-ce que l’anti-slop

L’anti-slop est un contrôle où l’IA repère dans le texte les phrases typiques d’une IA et les réécrit en phrases concrètes tirées de vos documents. Slop est un terme anglais pour « ordures » ; sur internet, il désigne les textes produits par l’IA sans soin, qui pourraient figurer sur le site de n’importe quelle entreprise. L’IA ne crée pas les chiffres ni les dates ; ce qu’elle ne trouve pas dans les documents, elle le marque et vous demande.

Le contrôle repose sur quatre filtres du prompt. La concrétude surveille les phrases génériques applicables à n’importe quelle entreprise et les remplace par des chiffres, noms et situations issus de vos documents. Les formules sont des phrases répétées par l’IA, comme l’introduction sur la période difficile ou la conclusion invitant à prendre contact. Le rythme trahit l’IA quand elle écrit plusieurs phrases de même longueur à la suite ou énumère toujours par trois, par exemple « rapidement, à moindre coût et fiablement ». Le format détecte le tiret long, peu utilisé au clavier, et les emojis à la place des puces.

`anti-slop.md` est un fichier texte simple dans le dossier avec le texte. Il contient la liste des tournures à éviter et leurs remplacements. L’extension `.md` signifie format [Markdown](glossary:markdown). `AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. L’IA en mode Cowork ou Code le lit au début de chaque travail, donc vous n’avez pas à relancer le contrôle ; là où l’outil doit le configurer, l’IA s’en charge selon le prompt. Dans un chat classique, l’IA garde la liste avec la règle en mémoire ; si l’outil n’a pas de mémoire, voyez le bloc « Dans votre outil ».
## Pour que le contrôle se lance automatiquement

Faites de la liste des tournures un [skill](glossary:skill), c’est-à-dire une instruction enregistrée, et le contrôle s’exécutera dans tous vos projets, pas seulement dans le dossier avec `AGENTS.md`. L’IA l’ouvrira automatiquement chaque fois qu’elle écrit un texte destiné à des humains sous votre nom. Où votre outil gère les skills, voyez le bloc Dans votre outil. Si vous travaillez uniquement dans un chat classique et que l’IA a la liste en mémoire, cette étape n’est pas nécessaire. Dans le dossier avec `anti-slop.md`, il suffit de saisir :

```text
Crée un skill nommé anti-slop à partir de la liste dans anti-slop.md ; si tu ne vois pas le fichier, prends la liste dans ta mémoire. Il doit se lancer chaque fois que tu écris ou modifies un texte qui sera envoyé sous mon nom : e-mail, offre, publication ou texte web. Le skill passe le texte à travers les quatre filtres du fichier, corrige les tournures de la liste et ne crée pas de chiffres ni de promesses. Si je te signale une autre tournure à éviter, ajoute-la au skill. Enregistre le skill pour qu’il fonctionne dans tous mes projets ; si je dois l’enregistrer ou l’activer moi-même, indique-moi précisément où cliquer.
```
## Exemple

Martin Dvořák du service entretien des véhicules d’entreprise envoie le 15/10/2026 une offre à Mme Horáková d’une société logistique. La demande indique que l’entreprise possède 38 fourgons à Brno et Olomouc et qu’elle attend jusqu’à une semaine pour une réparation. L’introduction de l’offre a été écrite par l’IA :

```text
Dans notre époque pressée, un partenaire fiable pour la gestion de la flotte est essentiel. Nous proposons un service complet, une réaction rapide et une approche personnalisée. La réparation est assurée sous 24 heures. N’hésitez pas à nous contacter.
```

L’IA renvoie quatre observations. Elle remplace la première phrase par la situation issue de la demande : « Vous indiquez qu’une de vos 38 fourgons attend une réparation depuis une semaine. » Au lieu de la deuxième phrase entière, elle énumère selon le tarif ce que comprend le service : contrôles réguliers et véhicule de remplacement pendant la réparation. La promesse de réparation sous 24 heures est marquée `[À COMPLÉTER]` car absente des documents. La conclusion devient une étape suivante : « Dites-moi quel fourgon nous devons examiner en premier. »

Martin vérifie auprès du chef d’atelier que la réparation standard prend deux jours ouvrés. L’IA l’ajoute au texte et inscrit dans `anti-slop.md` :

```text
### Tournures à éviter
- « dans notre époque pressée » : commencer par la situation client issue de la demande
- « service complet » : énumérer ce que le service comprend
- « n’hésitez pas à nous contacter » : écrire une étape suivante concrète
```

Le lundi 19/10, Martin laisse l’IA répondre à un autre client dans le même dossier. La réponse se termine par une question sur le jour qui convient pour la première visite, sans les tournures de la liste.
## En cas de blocage

- **L’IA ne corrige que quelques mots et le texte sonne pareil :** demandez-lui de réécrire tout le paragraphe en commençant par la situation du lecteur, et joignez un document source, par exemple la demande ou les notes d’appel.
- **Beaucoup de `[À COMPLÉTER]` dans le texte :** l’IA n’a pas de chiffres à prendre. Joignez le tarif, le contrat ou la demande. Laissez l’IA barrer les affirmations que vous ne pouvez pas confirmer.
- **L’IA affirme avoir enregistré `anti-slop.md` mais il n’est pas dans le dossier :** vous travaillez probablement dans un chat classique qui ne peut pas modifier les fichiers. Passez en [Cowork ou Code](card:when-chat-is-not-enough), ou demandez à l’IA d’enregistrer la liste en mémoire.
- **Dans un nouveau chat, l’IA réécrit à nouveau les tournures de la liste :** en Cowork ou Code, ouvrez le chat dans le même dossier et demandez à l’IA de lire `AGENTS.md` et de faire en sorte qu’elle le lise au début de chaque travail. Dans un chat classique, revenez au chat où le contrôle a eu lieu et demandez à l’IA d’enregistrer la liste avec la règle en mémoire. La mémoire doit être activée dans les paramètres.
## Ce qui sera prêt

Vous avez un texte prêt à être envoyé : sans tournures typiques d’IA et avec des chiffres et promesses que vous avez confirmés. Dans le dossier se trouvent `anti-slop.md` avec la liste des tournures à éviter et `AGENTS.md` avec la règle selon laquelle l’IA contrôle chaque nouveau texte automatiquement ; dans un chat classique, l’IA a la liste avec la règle en mémoire ou dans ses instructions personnalisées. Dans un nouveau chat, vous avez vérifié que l’IA applique bien la règle.
## Et après

Vérifiez les faits, chiffres et sources dans un rapport ou une présentation avec la carte [Vérifiez la sortie IA](card:kontrola-vysledku). Si l’IA doit écrire directement dans votre style, enregistrez-le dans vos [Custom Instructions](card:custom-instructions).
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
