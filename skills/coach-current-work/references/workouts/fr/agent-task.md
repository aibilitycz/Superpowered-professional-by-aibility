# Attribuez une tâche à un agent : l’IA la mène à bien seule

Une tâche longue en plusieurs étapes est menée à bien par l’IA, par exemple pendant la nuit, et vous la récupérez selon les preuves.

## Attribuez une tâche à un agent : l’IA la mène à bien seule

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec un dossier de documents pour une tâche.
## À quoi ça sert

Le directeur financier doit recevoir d’ici vendredi un aperçu des soixante contrats fournisseurs qui se renouvellent automatiquement en janvier. Pour chacun, il veut aussi la date limite de résiliation. Ouvrir chaque contrat, trouver l’article sur la durée et la résiliation, et saisir les données dans un tableau, c’est deux après-midis de travail minutieux.

[Agent](glossary:agent) est une IA qui réalise seule ce type de tâche, par exemple pendant la nuit, et continue jusqu’à ce qu’elle remplisse les conditions que vous aurez définies au départ, par exemple « chaque contrat sur 60 a sa ligne dans le tableau ».
## Ce qu’il faut préparer

- une tâche en plusieurs étapes que vous ne voulez pas suivre vous-même, par exemple une vérification de contrats ou une recherche,
- les documents dans un seul dossier,
- une IA en mode Cowork ou Code ; où la trouver est indiqué dans le bloc « Dans votre outil ».
## Comment faire

1. Ouvrez l’IA en mode Cowork ou Code dans le dossier avec les documents, insérez le prompt et après la ligne « Tâche : » écrivez ce que l’agent doit faire. L’IA proposera des conditions de fin ; corrigez-les et écrivez « Oui, travaille ».
2. Quand l’IA demande la permission de modifier les fichiers, autorisez-la pour toute la tâche afin qu’elle ne s’arrête pas la nuit. L’agent travaille alors seul et écrit un rapport de remise à la fin.
3. Dans le rapport de remise, vous trouverez où est le résultat. Pour chaque condition, ouvrez la preuve et comparez un ou deux éléments à la source ; ce qui ne correspond pas, renvoyez-le à l’agent avec la condition.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code, ouverte dans votre dossier, et après la dernière ligne écrivez votre tâche :

Fais pour moi une tâche en plusieurs étapes et travaille dessus seul jusqu’à ce qu’elle soit terminée. La tâche est sur la dernière ligne.

Commence d’abord par parcourir les documents dans le dossier ou les pièces jointes et propose trois à cinq conditions de fin vérifiables, qui me permettront de savoir que c’est terminé. Chaque condition doit pouvoir être vérifiée d’un coup d’œil : un nombre, un fichier, un enregistrement ou un chiffre que je comparerai à la source. Montre-les-moi et attends que je les confirme ou corrige.

Dès que je confirme les conditions, ajoute dans le fichier AGENTS.md du dossier la règle : « Pour chaque tâche longue, propose d’abord trois à cinq conditions de fin vérifiables et laisse-moi les confirmer. Travaille jusqu’à ce que toutes soient remplies, et à la fin joins une preuve pour chacune. » Si AGENTS.md n’existe pas, crée-le. Si cet outil ne le lit pas automatiquement, configure-le pour que tu le lises au début de chaque travail ; dans Cowork, inscris cela dans les instructions du dossier. Si tu n’as pas accès au dossier, mémorise la règle ; si tu ne sais pas comment faire, dis-moi précisément où la placer.

Puis travaille seul. Après chaque étape importante, vérifie les conditions et continue tant qu’elles ne sont pas toutes remplies. Décide toi-même des détails. Si tu rencontres une décision qui m’appartient, choisis l’option la plus prudente, marque-la et continue ; pose-moi la question dans le rapport de remise. Arrête-toi seulement si tu ne peux rien faire sans ma réponse. Si une condition ne peut être remplie, explique pourquoi et ce que tu proposes.

Quand tu as fini, écris-moi un rapport de remise. Pour chaque condition, indique si elle est remplie et la preuve pour que je vérifie : chemin ou lien vers le fichier, numéro et page d’où ça vient, enregistrement modifié ou capture d’écran. Sous les conditions, écris ce que tu as décidé toi-même, ce sur quoi tu me questionnes et ce dont tu n’es pas sûr.

Tâche :

## Dans votre outil

### Microsoft Copilot
Activez Copilot Cowork sur `copilot.cloud.microsoft` avec l’interrupteur en haut à côté de Chat. Joignez le dossier avec le bouton + depuis OneDrive ou SharePoint, ou glissez-y des fichiers depuis l’ordinateur. Il travaille dans le cloud, vous pouvez donc fermer l’ordinateur portable ; les fichiers terminés se trouvent dans le panneau à droite et la règle est enregistrée comme skill.
Copilot n’a pas la commande `/goal`, vous confirmez les conditions par la phrase « Oui, travaille ».

### ChatGPT
Le mode Work est le plus simple : activez-le avec l’interrupteur en haut sur le web ou dans l’application ChatGPT pour ordinateur, chargez les documents et la tâche lancée sur le web continue même si vous fermez l’ordinateur. Le résultat se trouve dans le rapport de remise dans le chat. Si les documents sont dans un dossier sur l’ordinateur, utilisez Codex dans l’application ChatGPT pour ordinateur, où vous confirmez les conditions avec la commande `/goal`.

### Claude
Dans l’application Claude pour ordinateur, ouvrez Cowork ou Claude Code avec le dossier de documents. La tâche tourne tant que l’ordinateur est allumé et l’application ouverte. Dans Claude Code, confirmez les conditions avec la commande `/goal` et l’application vous enverra une notification à la fin.

### Gemini
Gemini Agent, qui mène une longue tâche seul, est réservé aux comptes personnels Google AI Pro ou Ultra et n’est pas disponible dans l’UE. Avec un compte professionnel, saisissez la tâche par parties dans l’application Gemini : joignez jusqu’à 10 fichiers via Add from Drive et insérez le prompt, ajoutez-en dix autres et laissez compléter le tableau. Sauvegardez le tableau terminé avec Export to Sheets et la règle comme skill : écrivez « Enregistre-le comme skill ».
## Qu’est-ce qu’un agent

Un agent est une IA qui fait les étapes à votre place : ouvre fichiers et applications, choisit l’étape suivante selon le résultat et continue jusqu’à l’objectif. En mode Cowork ou Code, l’IA travaille ainsi dès que vous lui donnez une tâche.

Les conditions de fin sont l’objectif que l’agent poursuit : tant qu’elles ne sont pas toutes remplies, il continue, et vous reprenez le résultat selon elles à la fin. Pour chaque condition, il vous montre une preuve, donc la reprise prend quelques minutes. Pour un gros travail, il peut y en avoir vingt, pour une première tâche trois à cinq suffisent. Une bonne condition se vérifie d’un coup d’œil : nombre, fichier, enregistrement ou chiffre à comparer à la source. Des mots comme « clair » ou « de qualité » ne peuvent pas être remplis ni prouvés par l’agent, reformulez-les en quelque chose de comptable ou ouvrable.

`AGENTS.md` est un fichier texte simple avec des règles pour l’IA dans le dossier où vous travaillez ; l’extension `.md` signifie texte en [Markdown](glossary:markdown), un format simple lisible dans tout éditeur. L’IA lit ce fichier au début de chaque travail, ainsi la prochaine fois vous écrivez juste la tâche et elle proposera les conditions elle-même. Un outil sans accès au dossier mémorise la règle ou vous indique où la placer.
## Laissez l’agent travailler jusqu’à la fin

Pour une tâche d’un après-midi ou d’une nuit, il est utile d’avoir une sécurité pour que l’agent ne s’arrête pas avant que toutes les conditions soient remplies. Certains outils ont la commande `/goal`, un mot à écrire au début du message ; lesquels, c’est indiqué dans le bloc « Dans votre outil ». Au lieu de « Oui, travaille », écrivez `/goal` suivi des conditions proposées par l’IA. L’agent commence alors immédiatement, vérifie les conditions après chaque étape et continue seul tant qu’elles ne sont pas toutes remplies :

```text
/goal Dans le tableau contrats-renouvellement.xlsx, il y a une ligne pour chacun des 60 contrats dans le dossier Contrats. Pour chaque contrat, la date de fin, le délai de résiliation, le numéro de l’article d’origine et le prix annuel hors TVA. En haut, les contrats à résilier avant fin novembre.
```
## Exemple

Petra est assistante du directeur financier dans une entreprise de construction. Le jeudi 8 octobre 2026 après-midi, elle reçoit de lui la tâche : d’ici vendredi, un aperçu des 60 contrats fournisseurs qui se renouvellent automatiquement en janvier. Petra ouvre le dossier Contrats dans l’IA en mode Cowork, insère le prompt et écrit à la dernière ligne :

```text
Parcours les 60 contrats dans le dossier Contrats et identifie ceux qui se renouvellent automatiquement en janvier et jusqu’à quand ils peuvent être résiliés.
```

L’IA propose quatre conditions. Petra ajoute une cinquième sur le prix annuel pour que le directeur voie le montant, et répond « Oui, travaille » :

```text
1. Dans le tableau contrats-renouvellement.xlsx, il y a une ligne pour chacun des 60 contrats dans le dossier Contrats.
2. Pour chaque contrat, la date de fin, le délai de résiliation et le numéro de l’article d’origine.
3. Pour chaque contrat, il est indiqué s’il se renouvelle automatiquement.
4. En haut, les contrats à résilier avant fin novembre, triés par date limite.
5. Pour chaque contrat, le prix annuel hors TVA.
```

Petra laisse l’ordinateur allumé et rentre chez elle. Le vendredi matin, elle trouve dans le chat le rapport de remise : 60 contrats et 60 lignes dans le tableau, onze contrats se renouvellent automatiquement en janvier et quatre doivent être résiliés avant le 30/11. Deux contrats ont été scannés et l’agent a marqué les données à vérifier. Petra ouvre trois données dans les contrats originaux et tout correspond, pour un scanné elle corrige la date de fin et envoie le tableau au directeur. La prochaine longue tâche, elle la donnera en une phrase, car l’IA proposera elle-même les conditions selon la règle dans `AGENTS.md`.
## En cas de blocage

- **L’IA s’arrête après une réponse ou dit qu’elle ne peut pas ouvrir les fichiers :** vous travaillez dans un chat classique. Passez en [Cowork ou Code](card:when-chat-is-not-enough) selon le bloc « Dans votre outil ».
- **L’agent s’arrête avant que toutes les conditions soient remplies :** dites-lui laquelle il n’a pas remplie et demandez-lui de continuer. Si votre outil le permet, confirmez les conditions la prochaine fois avec la commande `/goal`, comme décrit dans le bloc « Laissez l’agent travailler jusqu’à la fin ».
- **Le matin, vous trouvez la tâche arrêtée en cours :** l’ordinateur s’est probablement mis en veille ou l’agent attendait la permission de modifier les fichiers. Dites-lui de continuer et la prochaine fois autorisez les modifications pour toute la tâche et laissez l’ordinateur branché.
- **La preuve ne correspond pas à la source :** dites à l’agent pour quelle condition et ce qui ne correspond pas, qu’il corrige et fournisse une nouvelle preuve. Pour vérifier tout le résultat, utilisez [vérification de sortie IA](card:kontrola-vysledku).
## Ce qui sera terminé

Vous avez une tâche longue terminée sans avoir dû rester devant, et vous l’avez reprise selon la preuve pour chaque condition de fin. Dans `AGENTS.md` du dossier, ou en mémoire de l’IA, il y a une règle selon laquelle l’IA propose elle-même les conditions pour la prochaine tâche longue, travaille jusqu’à ce qu’elles soient toutes remplies et les justifie à la fin.
## Et ensuite

Si la même tâche se répète chaque semaine, programmez-la comme [tâche planifiée](card:recurring-ai-task).

Si un gros travail peut être divisé en parties indépendantes, lancez-les simultanément en [threads parallèles](card:parallel-ai-workstreams).
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
