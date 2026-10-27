# Mettez en place une revue hebdomadaire : nettoyage de vos réglages AI

Chaque semaine, l'IA identifie un obstacle récurrent dans vos chats, le corrige et nettoie ce que vous n’utilisez pas.

## Mettez en place une revue hebdomadaire : nettoyage de vos réglages AI

**Difficulté : moyenne.**\
**Durée : environ 15 minutes** avec une semaine de travail en mode Code derrière vous.
## À quoi ça sert

Jeudi, vous avez corrigé pour la troisième fois cette semaine les prix dans une offre, car l’IA les avait de nouveau écrits avec TVA. Vous envoyez pourtant les offres sans TVA aux clients, vous l’avez expliqué à chaque fois, et l’erreur est revenue dans un autre chat. De plus, l’IA suit toujours la règle du printemps selon laquelle l’offre est valable 14 jours, alors qu’elle est valable 30 jours depuis septembre.

La revue hebdomadaire est un nettoyage régulier : l’IA passe en revue vos chats de la semaine passée et corrige les répétitions à la source des règles qu’elle utilise.
## Ce qu’il faut préparer

- Une IA en [mode](glossary:workmode) Code, qui voit l’historique des chats sur votre ordinateur,
- un dossier dans lequel vous travaillez le plus souvent avec l’IA ; le rapport y sera enregistré,
- les chats de la semaine passée menés en mode Code.
## Comment faire

1. En mode Code, ouvrez votre dossier et insérez le prompt ; vous n’avez pas besoin de comprendre les chemins des dossiers. Lorsque l’application demande l’accès à l’historique des chats et aux fichiers, autorisez-le.
2. Lisez le rapport et pour chaque obstacle, dites si vous souhaitez la correction. L’IA l’écrira à l’endroit proposé et vous restituera ce que vous souhaitez récupérer de l’archive.
3. Dans un nouveau chat, lancez la tâche où l’obstacle apparaissait et vérifiez que l’IA la réalise correctement. Ensuite, insérez-lui la consigne du bloc « Que la revue ait lieu chaque vendredi » comme tâche planifiée.
## Exercice AI

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Code, ouverte dans votre dossier :

Fais une revue hebdomadaire de mes réglages AI : identifie ce qui a posé problème de façon répétée avec toi la semaine dernière et propose comment le corriger.

Parcours mes chats avec toi des sept derniers jours. Claude Code les stocke dans ~/.claude/projects, Codex dans ~/.codex/sessions. Si tu n’y as pas accès, dis-le-moi immédiatement et conseille-moi quoi activer ou où basculer. Parcours aussi mes réglages : règles pour l’IA, par exemple le fichier AGENTS.md, compétences et connecteurs associés.

Trouve les obstacles apparus dans au moins deux chats différents : les choses que je t’explique ou corrige sans cesse, et les erreurs d’outils qui reviennent. Ne compte pas ce qui est arrivé une fois, les pannes de service ni les erreurs résolues immédiatement après. Choisis au maximum trois et classe-les du plus chronophage au moins chronophage. Pour chacun, indique dans quels chats et quand il est apparu, et propose une correction au bon endroit :
- s’il concerne un travail spécifique, par exemple les offres : la correction va dans la compétence correspondante, et si la compétence manque, propose d’en créer une nouvelle,
- s’il concerne tout le travail : la correction va dans les règles pour l’IA,
- si un outil ou connecteur échoue : la correction va dans ses réglages.
Pour chaque correction, écris le texte exact que tu ajouteras ou modifieras.

Puis trouve les compétences jamais déclenchées dans toute l’historique visible, ainsi que les règles pour un travail que je ne fais plus ou les règles contradictoires. Ne touche pas aux compétences pour un travail fait une fois par mois ou par trimestre. Déplace au maximum trois de ces éléments dans le dossier revize-ai/archiv sans rien supprimer : déplace la compétence entière, retire la règle d’AGENTS.md et ajoute-la dans revize-ai/archiv/pravidla.md. Si tu ne sais pas quoi déplacer, indique-moi où désactiver.

Écris tout dans un court rapport revize-ai/RRRR-MM-DD.md daté d’aujourd’hui : combien de chats la revue a couvert, les obstacles avec propositions de correction et ce qui est nouvellement archivé avec leur origine. Montre-moi le rapport et demande-moi quelles corrections je veux.
Les corrections approuvées seront écrites là où tu les liras vraiment lors du travail suivant, et le rapport sera mis à jour avec les changements.

## Dans votre outil

### Microsoft Copilot
Microsoft ne précise pas que Copilot peut parcourir vos chats de la semaine passée. Faites donc la revue dans un outil avec mode Code, comme Claude Code ou Codex dans l’application ChatGPT, et demandez-le à votre administrateur IT. En attendant, les corrections déjà connues vont dans Custom instructions ou Saved memories (Paramètres et plus, Paramètres de chat, Personnalisation).

### ChatGPT
La revue est faite par Codex, qui stocke les chats sur l’ordinateur : dans l’application ChatGPT pour ordinateur, passez à Codex, choisissez ouvrir un dossier (open a folder) et insérez le prompt. La revue compte sur les chats menés dans Codex. La tâche planifiée est créée par Codex quand vous la demandez en chat, et vous la trouverez dans la barre latérale sous Scheduled.

### Claude
La revue est faite par Claude Code dans l’application Claude pour ordinateur, qui stocke les chats sur l’ordinateur : sélectionnez votre dossier et insérez le prompt. La revue compte sur les chats menés dans Claude Code, pas dans le chat classique ni Cowork. La tâche planifiée est créée par l’IA quand vous la demandez, et vous la trouverez dans le panneau gauche sous Scheduled.

### Gemini
Les comptes d’entreprise Gemini n’ont pas de mémoire des chats passés, donc l’IA ne peut pas les parcourir sur une semaine. Gemini CLI, qui travaille avec des fichiers sur l’ordinateur, sera remplacé par Google en juin 2026 par l’outil Antigravity CLI, et le prompt avec son historique de chats n’est pas pris en compte. Faites donc la revue dans un outil avec mode Code, comme Claude Code ou Codex dans ChatGPT, et demandez-le à votre administrateur IT.
## Qu’est-ce que la revue hebdomadaire

Un obstacle est un détail qui rallonge un peu chaque fois le travail avec l’IA : une chose que vous expliquez sans cesse à l’IA ou un connecteur qui se déconnecte chaque semaine. Un obstacle coûte quelques minutes, mais en un mois, cela fait des heures. La revue ne compte que les obstacles répétés dans au moins deux chats, et n’écrit la correction qu’après votre accord. Ce qui est trouvé et modifié est écrit dans un rapport, pour que vous voyiez au bout d’un mois quels obstacles ont disparu.

L’IA écrit la correction là où elle doit être :
- obstacle dans un travail spécifique, par exemple les offres, dans la compétence correspondante,
- obstacle dans tout le travail, par exemple la formule d’appel ou le format de date, dans les règles pour l’IA,
- outil qui échoue, dans ses réglages.

Les règles pour l’IA se trouvent dans le fichier `AGENTS.md` du dossier où vous travaillez. Si votre outil lit les règles d’un autre fichier, l’IA écrira la correction là. La revue en mode Code ne voit pas les règles des chats classiques, et la correction dans `AGENTS.md` ne vaut que pour le travail en mode Code. Le rapport est un fichier texte simple avec extension `.md` que l’IA vous montre directement dans le chat.

Au bout de quelques mois, vous avez des dizaines de compétences et règles, dont beaucoup ne sont jamais utilisées par l’IA. L’IA continue de suivre les règles obsolètes et les compétences inutilisées compliquent le choix de la bonne. La revue les déplace donc dans le dossier `revize-ai/archiv`, où l’IA ne les charge pas en travaillant, et indique dans le rapport leur origine. La revue ne déplace pas vos documents, seulement règles et compétences, et si vous n’avez rien d’inutilisé, le rapport le mentionne.

La revue passe aussi vos réglages en revue : règles pour l’IA, [compétences](glossary:skill) et connecteurs. Une compétence est une procédure enregistrée pour un type de travail, un connecteur est un lien entre l’IA et une autre application, par exemple la messagerie. Une erreur survenue une fois ne nécessite pas une nouvelle règle, car l’IA lit les règles à chaque travail et peut en oublier certaines dans une longue liste.

Les outils en mode Code stockent l’historique des chats sur l’ordinateur, donc l’IA peut le parcourir seule ; le chat classique ne fait pas cette revue. Si vous avez surtout travaillé la semaine dernière en chat classique ou Cowork, [passez en Code](card:when-chat-is-not-enough), travaillez-y une semaine et faites la revue ensuite.
## Que la revue ait lieu chaque vendredi

La revue est la plus utile si elle est répétée. Une tâche planifiée suffit, que l’IA lancera chaque vendredi après-midi. Vous trouverez le nouveau rapport dans `revize-ai` à côté des précédents et verrez quels obstacles de la semaine passée ont disparu.
Insérez dans l’IA en mode Code cette consigne et demandez-lui de créer la tâche planifiée :

```text
Chaque vendredi à 14h00, fais une revue hebdomadaire de mes réglages AI. Commence par consulter le dernier rapport dans le dossier revize-ai et identifie quels obstacles ont disparu et lesquels persistent. Puis parcours mes chats avec toi des sept derniers jours, trouve les obstacles apparus dans au moins deux chats, et propose pour chacun une correction au bon endroit. Déplace au maximum trois compétences inutilisées ou règles invalides dans revize-ai/archiv et indique leur origine. Enregistre le rapport dans revize-ai avec la date d’aujourd’hui et demande-moi quelles corrections je souhaite.
```

La tâche s’exécute sur votre ordinateur, donc seulement si l’ordinateur est allumé et l’application ouverte. Si vous n’êtes pas à l’ordinateur vendredi à 14h00, indiquez dans la consigne l’heure où vous êtes habituellement présent. Le résumé avec la question sur les corrections souhaitées se trouve parmi les tâches planifiées, où vous pourrez aussi répondre.
## Exemple

Pavla gère les commandes dans une petite imprimerie. Le vendredi 16/10, l’IA parcourt ses chats de la semaine et écrit dans `revize-ai/2026-10-16.md` :

```text
### Revue hebdomadaire 16/10/2026
La revue a couvert 14 chats du 9 au 16/10.

### Obstacles
1. Prix dans les offres avec TVA, alors que vous les envoyez sans TVA aux clients. Vous l’avez corrigé dans trois chats (12, 14 et 15/10).
   Correction : dans la compétence « Offre pour client », j’ajoute la ligne « Indique les prix hors TVA, écris la TVA séparément sous le total. »
2. Dates dans les e-mails écrites au format 10/14/2026. Vous les avez corrigées dans deux chats (13 et 15/10).
   Correction : dans AGENTS.md, j’ajoute la règle « Écris la date en français, par exemple 14/10/2026. »

### Mis en archive
- Compétence « Traduction en allemand » du dossier compétences : jamais déclenchée dans l’historique.
- Règle avec ancienne signature d’e-mail dans AGENTS.md : contradictoire avec la règle plus récente de signature d’entreprise.
```

Pavla approuve les deux corrections. Le lundi, elle lance dans un nouveau chat une offre pour une agence publicitaire et l’IA écrit les prix hors TVA sans qu’elle ait à le rappeler. Le vendredi suivant, le rapport indique que les deux obstacles ont disparu.
## En cas de blocage

- **L’IA affirme ne pas voir vos chats passés :** vous avez probablement inséré le prompt dans un chat classique, qui ne voit pas l’historique sur votre ordinateur. Insérez-le dans l’IA en [mode Code](card:when-chat-is-not-enough), ouverte dans votre dossier.
- **L’IA trouve peu ou pas d’obstacles récurrents :** vous avez probablement surtout travaillé la semaine dernière en chat classique ou Cowork. Travaillez une semaine en Code et relancez la revue. Si vous travaillez plus longtemps en Code, demandez à l’IA de parcourir une période plus longue, par exemple le dernier mois.
- **L’obstacle réapparaît dans un nouveau chat :** dites à l’IA : « Cet obstacle se répète. Vérifie d’où tu lis vraiment les règles et écris la correction là. »
- **Il vous manque quelque chose de l’archive :** demandez à l’IA de le restaurer depuis le dossier `revize-ai/archiv` à son emplacement d’origine selon le rapport.
## Ce qui sera prêt

Dans le dossier `revize-ai`, vous avez le rapport de la première revue. La correction de l’obstacle récurrent cette semaine est écrite là où l’IA la lit, et vous avez vérifié dans un nouveau chat que l’obstacle ne revient plus. Les compétences inutilisées et règles invalides, si vous en aviez, sont dans l’archive, d’où vous pouvez les restaurer à tout moment. La revue est planifiée chaque vendredi, donc le prochain rapport arrivera automatiquement.
## Et après

Si la revue propose une nouvelle compétence, peaufinez-la selon la fiche de la [compétence](card:create-skill-from-proven-process). Pour que la revue du vendredi fonctionne de façon fiable et signale les erreurs automatiquement, poursuivez avec la [tâche planifiée](card:recurring-ai-task).
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
