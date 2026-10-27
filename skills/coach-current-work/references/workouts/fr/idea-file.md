# Préparez un idea file : une idée en une page

L’IA rédige votre idée sur une page pour que votre collègue ou une autre IA puisse l’utiliser sans vous.

## Préparez un idea file : une idée en une page

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec une idée.
## À quoi ça sert

Lors de la réunion du mardi, vous proposez une idée : chaque nouveau collaborateur aurait un binôme d’un autre service pendant ses deux premières semaines. La manager répond : « Rédige ça et envoie-le à Lenka des RH pour qu’elle le développe d’ici vendredi. » Vous écrivez trois lignes dans un e-mail. Lenka revient vendredi avec une proposition que ce soit plutôt le manager direct qui s’occupe plus des nouveaux, car elle n’a pas compris dans l’e-mail pourquoi le binôme doit venir d’un autre service.

Un idea file est une page qui explique ce que vous voulez faire et pourquoi ; comment le faire est laissé à celui qui reprendra l’idée.
## Ce qu’il faut préparer

- une idée que vous voulez transmettre à un collègue ou à une IA ; il suffit de l’avoir en tête,
- l’IA que vous utilisez au travail,
- une seconde IA pour vérifier, ou un nouveau chat sans mémoire dans la première.
## Comment faire

1. Insérez le prompt et, après la ligne « Idée : », écrivez ou
   [dictez](card:voice-as-primary-ai-input) l’idée avec ce qui vous y a conduit. L’IA posera au maximum trois questions et enregistrera l’idea file.
2. Joignez l’idea file à la seconde IA et écrivez : « Lis ce fichier et dis-moi avec tes mots ce que l’auteur veut faire et pourquoi. Que lui demanderais-tu avant de commencer ? »
3. Insérez la réponse de la seconde IA dans la première pour qu’elle complète l’idea file là où la seconde l’a mal compris. Envoyez le fichier final au collègue ou donnez-le à l’IA pour qu’elle le développe.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Fais de mon idée un idea file : une page que mon collègue ou une autre IA peut utiliser sans moi. L’idée se trouve à la fin, après la ligne « Idée : ».

D’abord, pose-moi au maximum trois questions sans lesquelles personne ne comprendrait l’idée. Ne pose aucune autre question ; ce que tu ignores, note-le dans les questions ouvertes.

Rédige l’idea file en tchèque, sur une page maximum, dans ce format :

### Titre de l’idée
Une à deux phrases : ce que c’est.

### Pourquoi
Quel problème l’idée résout, à qui elle sert et comment c’est fait aujourd’hui.

### Idée principale
En quoi l’idée diffère de la méthode actuelle.

### Comment ça fonctionnerait
À quoi cela ressemblerait pour les personnes concernées, sur un exemple précis.

### Ce qui est décidé et ce qui reste ouvert
Deux listes : ce qui est déjà fixé et ce qui reste sans réponse.

Décris ce que je veux faire et pourquoi. Laisse les outils et la méthode à celui qui reprendra l’idée, sauf si c’est le cœur de l’idée. N’invente pas de chiffres ni d’accords que je ne t’ai pas donnés.

Si tu travailles dans un dossier, enregistre l’idea file en .md dans le dossier napady et nomme-le selon l’idée. Puis ajoute dans le fichier AGENTS.md du même dossier la règle : « Quand je dis ‘fais-en un idea file’, pose-moi au maximum trois questions, rédige l’idée dans le même format que les fichiers dans napady et enregistre-le là. » Si AGENTS.md n’existe pas, crée-le et fais en sorte que cet outil le lise au début de chaque travail ; dans Cowork, inscris-le dans les instructions du dossier.

Si tu ne sais pas travailler avec les fichiers dans le dossier, ne crée rien. Donne-moi l’idea file en .md à télécharger et garde en mémoire que quand je dis « fais-en un idea file », tu me poses au maximum trois questions et rédiges l’idée dans ce format. Après chaque modification, donne-moi un nouveau fichier à télécharger.

Idée :

## Dans votre outil

### Microsoft Copilot
Dans Copilot Chat, avant d’insérer le prompt, sélectionnez dans Tools ou Agents l’agent Word et ajoutez au-dessus de la ligne « Idée : » la phrase « Donne-moi un idea file en document Word. » Copilot enregistrera la règle en mémoire (Saved memories) et l’utilisera même dans un nouveau chat, donc faites relire l’idea file à un collègue. Les skills sont dans Cowork (Customize, Skills).

### ChatGPT
Dans un chat classique ChatGPT, vous recevrez l’idea file en réponse et l’IA enregistrera la règle en mémoire (Settings, Personalization, Memory). Pour vérifier, ouvrez un chat temporaire (Temporary chat) qui n’utilise pas la mémoire. Les skills sont disponibles dans les offres Business et Enterprise dans le panneau latéral sous Plugins, onglet Skills.

### Claude
Dans un chat classique Claude, l’IA crée un fichier à télécharger si vous avez activé Code execution and file creation (Settings, Capabilities), et la règle est enregistrée en mémoire (Settings, Memory). Pour vérifier, ouvrez un chat incognito qui n’utilise pas la mémoire. Les skills se trouvent dans Customize, Skills et fonctionnent en chat et dans Cowork.

### Gemini
Enregistrez l’idea file final via Share & export, Export to Docs et partagez le lien au collègue. Les comptes entreprise n’ont pas de mémoire, donc un nouveau chat suffit pour vérifier. Enregistrez la règle pour la prochaine fois comme skill : écrivez « Enregistre ça comme skill » et vous la trouverez dans Customize, Skills.
## Qu’est-ce qu’un idea file

Un idea file, fichier d’idée en tchèque, est un simple fichier texte avec l’extension `.md`, écrit en [Markdown](glossary:markdown) : les dièses `###` en début de ligne indiquent un titre. Il est rédigé par l’IA à partir de ce que vous lui dites, vous ne répondez qu’à quelques questions. Chaque IA peut le lire, quel que soit l’outil du collègue, et le collègue peut l’ouvrir dans un simple Bloc-notes.

Contrairement à une consigne, l’idea file ne dit pas comment procéder. Le collègue ou son IA invente la mise en œuvre selon ses possibilités, et même s’il choisit une autre voie que vous, l’idée reste la même. Vous la vérifiez avec une seconde IA, car elle ne connaît pas le chat où l’idea file a été créé, tout comme le collègue.

`AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. Plusieurs outils en mode Code le lisent automatiquement au début de chaque travail ; là où l’outil ne sait pas le faire, l’IA enregistre la règle dans ses paramètres ou vous indique où la placer. Ainsi, dans une nouvelle tâche dans le même dossier, il suffit d’écrire « fais-en un idea file ».

En mode Cowork ou Code, l’IA enregistre l’idea file dans le dossier `napady` et la règle pour la prochaine fois dans `AGENTS.md` ; si vous n’avez pas ce dossier, créez-en un vide. En chat classique, l’idea file est fourni en téléchargement ou en réponse, et la règle est enregistrée en mémoire si elle est activée. Quand changer de mode est utile est expliqué dans l’onglet [Chat, Cowork ou Code](card:when-chat-is-not-enough).

L’essentiel dans l’idea file est pourquoi l’idée a du sens ; comment la réaliser est laissé à celui qui la reprend.
## Que l’IA rédige l’idea file partout

La règle dans `AGENTS.md` ne vaut que dans le dossier où elle a été écrite. Les idées arrivent aussi ailleurs, par exemple en plein travail sur un autre projet. Pour que l’IA rédige un idea file partout, faites-en un [skill](glossary:skill) : une instruction enregistrée que l’IA utilise dès que vous dites « fais-en un idea file ». Tous les outils ne supportent pas les skills ; ceux qui le font sont listés dans le bloc « Dans votre outil ». Dans le chat où l’idea file a été créé, écrivez :

```text
À partir de la façon dont nous avons rédigé l’idea file, crée un skill nommé idea-file. Utilise-le chaque fois que je dis « fais-en un idea file », dans n’importe quel dossier ou chat. Garde le format du fichier et au maximum trois questions. Enregistre le skill pour que cet outil le charge automatiquement, et si ce n’est pas possible ici, dis-moi où je peux l’ajouter.
```
## Exemple

Petra coordonne des projets dans une entreprise de mécanique. Le mercredi 7 octobre 2026, elle insère un prompt dans l’IA en mode Cowork, ouverte dans le dossier du projet, et dicte après la dernière ligne : « Je veux que chaque nouveau collaborateur ait un binôme d’un autre service pendant ses deux premières semaines, à qui il peut poser toutes ses questions sans passer par le manager. » L’IA demande pourquoi un binôme d’un autre service, ce qui manque aux nouveaux aujourd’hui et combien de personnes sont concernées. Petra répond que les nouveaux ont peur de déranger leur manager pour des détails, que l’an dernier quatre des douze nouveaux sont partis en moins de trois mois, et que cette année l’entreprise embauche environ quinze personnes. L’IA enregistre
`napady/partak-pro-novacky.md` :

```text
### Binôme pour les nouveaux
Chaque nouveau a un binôme d’un autre service pendant ses deux premières semaines, à qui il peut poser toutes ses questions.

### Pourquoi
Les nouveaux ont peur de déranger leur manager pour des détails, comme où trouver des modèles ou comment faire une note de frais. L’an dernier, quatre des douze nouveaux sont partis en moins de trois mois. Cette année, l’entreprise embauche environ quinze personnes.

### Idée principale
Le binôme d’un autre service n’évalue pas le nouveau, donc celui-ci n’a pas peur de lui poser n’importe quelle question.

### Comment ça fonctionnerait
Le premier jour, le nouveau et le binôme déjeunent ensemble. Pendant les deux semaines suivantes, ils se rencontrent deux fois par semaine pendant un quart d’heure. Par exemple, une nouvelle conceptrice demande à sa binôme de la comptabilité comment faire sa première note de frais, sans avoir à déranger son manager.

### Ce qui est décidé et ce qui reste ouvert
- Décidé : le binôme est toujours d’un autre service, le programme dure deux semaines.
- Ouvert : qui choisit les binômes ? Ont-ils du temps de travail dédié ?
```

La seconde IA résume correctement l’idée mais demande si le binôme est obligatoire. Petra insère sa réponse dans la première IA, précise que c’est obligatoire, et l’IA l’ajoute aux points décidés. Le même jour, Petra envoie le fichier à Lenka des RH, qui le donne à son IA comme base pour le programme de novembre.
## En cas de blocage

- **L’IA affirme avoir enregistré l’idea file mais il n’est pas dans le dossier :** vous travaillez probablement dans un chat classique qui ne peut pas enregistrer dans un dossier. Demandez le fichier à télécharger ou passez en [Cowork ou Code](card:when-chat-is-not-enough).
- **L’idée ne peut pas encore être résumée en une phrase :** dictez-la telle quelle, avec ce qui vous dérange dans l’état actuel ; la carte [Dictez la consigne à l’IA](card:voice-as-primary-ai-input) montre comment faire. Ce que l’IA ne comprend pas sera noté dans les questions ouvertes.
- **L’IA écrit une procédure détaillée au lieu de l’idée :** dites-lui : « Supprime les outils et étapes, ne garde que le quoi et le pourquoi. »
- **La seconde IA a mal compris l’idée :** ne lui expliquez pas dans le chat, car le collègue ne recevra pas cette explication. Insérez sa réponse dans la première IA pour qu’elle complète l’idea file, puis donnez-le à la seconde IA à nouveau.
## Ce qui sera prêt

Vous avez un idea file avec une idée que l’autre IA comprend aussi bien que vous, prêt à être envoyé au collègue ou donné à l’IA pour développement. En Cowork ou Code, il se trouve dans le dossier `napady` et la règle pour la prochaine fois dans `AGENTS.md` ; en chat classique, l’IA garde la règle en mémoire. La prochaine idée sera ainsi rédigée quand vous écrirez « fais-en un idea file ».
## Et ensuite

Si vous doutez de l’idée, faites-la vérifier sous plusieurs angles dans le [panel d’experts](card:panel-expertu). Pour une idée d’outil ou d’application, faites-la développer selon l’idea file avec [vibe coding](card:risk-based-prototyping).
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
