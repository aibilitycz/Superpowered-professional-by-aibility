# Divisez le travail en fils parallèles : l'IA traite toutes les parties simultanément

Un travail plus important est terminé plus rapidement car l'IA le divise en morceaux et lance chacun simultanément dans son propre fil.

## Divisez le travail en fils parallèles : l'IA traite toutes les parties simultanément

**Difficulté : moyenne.**\
**Durée : environ 15 minutes** avec un travail plus important, les fils s'exécutent ensuite seuls.
## À quoi ça sert

Jeudi, vous présentez à la direction un bilan trimestriel : chiffres issus d'une exportation, plaintes clients et nouveautés chez la concurrence. Une IA traiterait ces parties une par une, alors qu'aucune ne dépend de l'autre et elles peuvent s'exécuter simultanément.

Les [fils parallèles](glossary:parallel-ai-workstreams) aident : chaque partie reçoit son propre fil, c’est-à-dire un chat indépendant avec sa propre tâche, et tous tournent en même temps. En fin de processus, le premier fil, le coordinateur, compare les résultats et prépare les points pour votre décision.
## Ce qu'il faut préparer

- un travail plus important comportant au moins deux parties indépendantes,
- les documents associés dans un même dossier,
- une IA en mode Cowork ou Code ; où la trouver est expliqué dans le bloc « Dans votre outil ».
## Comment faire

1. Faites diviser le travail en parties indépendantes par l’IA. Ouvrez l’IA dans le dossier contenant les documents, insérez le prompt et décrivez ce qui est nécessaire. Confirmez la division.
2. Lancez tous les fils simultanément. L’IA les lancera automatiquement ou vous donnera une phrase par partie ; insérez-la dans un nouveau fil dans le même dossier. Répondez aux questions du fil.
3. Décidez des points ouverts issus de la comparaison. Quand tous les fils ont terminé, écrivez « terminé » dans le premier fil. L’IA affichera les divergences et, après votre décision, fusionnera les résultats.

Chaque fil écrit uniquement dans son propre dossier.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code, ouverte dans votre dossier, et ajoutez à la dernière ligne ce qu’il faut faire :

Aide-moi à réaliser un travail plus important plus rapidement : divise-le en parties qui s’exécuteront simultanément, chacune dans son propre fil. Tu seras le coordinateur. Le travail est à la dernière ligne.

Parcours les documents dans le dossier et propose de deux à cinq parties. Pour chacune, écris en une phrase pourquoi elle peut se terminer sans connaître les résultats des autres. Ce qui dépend d’une autre partie reste dans la même partie ou est laissé à la fin pour la fusion. Montre-moi la division et attends ma confirmation ou correction.

Pour chaque partie confirmée, crée un dossier fil/01-nom, fil/02-nom, etc., avec un fichier zadani.md. La tâche contient : l’objectif de la partie, les documents sources, deux à trois critères pour reconnaître qu’elle est terminée, et la consigne « Écris uniquement dans ce dossier, ne modifie rien d’autre. À la fin, sauvegarde ici resultat.md : ce qui est terminé, ce qui ne colle pas et ce sur quoi tu interroges. » Dans fil/srovnani.md, inscris la liste des parties et leur état.

Dans le fichier AGENTS.md du dossier, enregistre la règle : « Quand tu reçois un travail avec au moins deux parties indépendantes, propose une division en fils parallèles. Chaque fil a sa propre tâche et son propre dossier ; deux fils n’écrivent jamais dans le même dossier. Quand tu lances les parties comme sous-agents, lance au maximum dix en même temps et avant la prochaine série, donne-moi un bref état des retours. À la fin, compare les résultats côte à côte et soumets-moi les points ouverts pour décision. » Si AGENTS.md n’existe pas, crée-le. Si cet outil ne le lit pas automatiquement, configure-le pour qu’il le lise au début de chaque travail ; en Cowork, inscris-le dans les instructions du dossier. Si tu n’as pas accès au dossier, mémorise la règle ; si tu ne sais pas comment faire, dis-moi précisément où la placer.

Puis lance les parties simultanément comme fils indépendants que je peux voir et dans lesquels je peux écrire. Si tu sais lancer ou proposer un fil toi-même, fais-le. Sinon, écris-moi une phrase par partie que je collerai dans un nouveau fil dans le même dossier, par exemple « Fais la tâche du fichier fil/01-chiffres/zadani.md. » Si tu ne sais pas travailler avec un dossier, écris-moi la tâche complète à la place, et je te collerai les résultats.

Quand j’écris « terminé », lis côte à côte tous les fichiers resultat.md et les sorties ou résultats que je te fournirai. Dans fil/srovnani.md, écris pour chaque partie si elle a rempli les critères, où les résultats se contredisent ou manquent, et les points ouverts que je décide. Ne fusionne pas les divergences en compromis, montre-moi les deux côtés. Après ma décision, fusionne les sorties en un seul résultat au format dont j’ai besoin (par exemple Word ou présentation) et sauvegarde-le dans le dossier ; si je ne précise pas le format, demande-le.

Travail :

## Dans votre outil

### Microsoft Copilot
Activez Copilot Cowork sur `copilot.cloud.microsoft` avec le bouton en haut à côté de Chat et ajoutez les documents avec le bouton +. Une nouvelle tâche ne voit pas ce que les autres ont écrit, donc ajoutez sous votre tâche « Écris-moi la tâche complète. » Créez chaque tâche avec les documents nommés ; insérez les résultats avec « terminé » dans la première tâche que vous rouvrez sous Tasks. La règle est sauvegardée comme skill, c’est-à-dire un guide enregistré.

### ChatGPT
Dans l’application ChatGPT pour ordinateur, passez en mode Codex et choisissez d’ouvrir un dossier (open a folder) ; si Codex n’est pas visible, demandez à l’administrateur de l’activer. Lancez chaque fil comme un nouveau chat dans le même projet, donc dans le dossier ouvert ; vous trouverez les chats sous Chats et pouvez écrire dans celui en cours. Pour le code, choisissez Worktree sous le champ de message.

### Claude
Dans l’application Claude pour ordinateur, lancez chaque partie comme une nouvelle tâche en Cowork, ou comme une nouvelle session dans Claude Code (New session) ; Claude Code propose lui-même les nouvelles sessions, il suffit de cliquer. Ils tournent côte à côte dans la barre latérale et vous pouvez écrire dans chaque fil. Pour le code, choisissez worktree au démarrage de la session pour avoir une copie propre du dépôt.

### Gemini
Gemini ne travaille pas avec un dossier sur ordinateur et l’agent qui mène la tâche seul est réservé aux comptes personnels hors UE. Il vous écrira donc les tâches des fils dans la réponse : insérez chacune dans un nouveau chat, ajoutez les documents via Add from Drive et insérez les résultats terminés dans le premier chat pour comparaison. Si vous le faites souvent, demandez à l’IT un outil en mode Code.
## Qu’est-ce que les fils parallèles

Un fil est un chat ou une tâche indépendante avec sa propre mission, visible dans la barre latérale de l’outil et dans lequel vous pouvez écrire à tout moment. Les fils parallèles s’exécutent simultanément, chacun sur une partie du travail. Le premier fil, où vous avez lancé le travail, est le coordinateur : il divise, rédige les tâches et compare les résultats à la fin.

La division fonctionne uniquement si les parties sont indépendantes. Avant de lancer une partie, demandez-vous : ce fil la terminera-t-il sans connaître les résultats des autres ? Sinon, elle appartient à la partie dont elle dépend. La deuxième règle est un seul rédacteur par dossier : deux fils modifiant le même fichier écraseraient mutuellement leur travail, donc chaque fil a son propre dossier. Les tâches et résultats des fils sont des fichiers texte `.md`, principalement lus par l’IA ; le résultat final vous est sauvegardé dans le format dont vous avez besoin.

Pour un travail important avec de nombreuses parties, le coordinateur peut lancer les parties lui-même comme [sous-agents](glossary:subagent), assistants en arrière-plan dont il récupère les résultats et vous transmet les questions. La règle, enregistrée dans `AGENTS.md`, un fichier texte de règles pour l’IA dans votre dossier, limite à dix lancements simultanés et donne un bref état avant la série suivante pour que vous sachiez ce qui est revenu.
## Exemple

Jana est responsable du service client dans un e-shop de mobilier. Le mardi 13 octobre 2026 au matin, elle reçoit la tâche de préparer pour la réunion de direction jeudi un bilan du troisième trimestre. Dans le dossier Bilan T3, elle a une exportation de 2 300 tickets du trimestre avec les textes des plaintes et les liens vers les sites de trois concurrents. Elle insère le prompt et ajoute à la dernière ligne :

```text
Bilan du service client pour le T3 en vue de la réunion de direction jeudi : chiffres issus de l’export des tickets, cinq plaintes les plus fréquentes extraites des tickets et ce que trois concurrents ont changé ce trimestre.
```

L’IA propose trois parties (chiffres, plaintes, concurrence) et pour chacune explique pourquoi elle ne dépend pas des autres. Jana confirme la division et lance les trois fils simultanément. Le fil des plaintes demande au bout de dix minutes s’il faut compter les réclamations pour produits endommagés comme plaintes. Jana répond « oui, séparément » et au bout de 40 minutes, les trois sont terminés.

Le coordinateur trouve une divergence dans la comparaison : selon les chiffres, le temps de réponse est passé de 14 à 6 heures, mais la deuxième plainte la plus fréquente est une réponse lente. La plupart de ces plaintes datent de juillet, avant la mise en place du changement. Jana décide d’afficher le temps de réponse et les plaintes par mois, et l’IA fusionne les parties dans un document Word `bilan-t3.docx`.
Le bilan est prêt mardi avant midi et Jana dispose de mercredi pour préparer la réunion.
## En cas de blocage

- **Une partie attend le résultat d’une autre :** écrivez dans le premier fil de la fusion avec la partie dont elle dépend ou laissez-la pour la fusion finale.
- **Deux fils ont modifié le même fichier :** la tâche manque d’un dossier propre. Demandez au premier fil de corriger la tâche et relancez la partie.
- **L’IA dit ne pas voir les fichiers dans le dossier :** vous travaillez dans un chat classique. Passez en [Cowork ou Code](card:when-chat-is-not-enough) selon le bloc « Dans votre outil ».
- **Les résultats se contredisent :** laissez la divergence dans la comparaison et décidez vous-même. Pour parcourir tout le résultat, l’[inspection de sortie IA](card:kontrola-vysledku) aide.
## Ce qui sera prêt

Vous aurez un travail plus important terminé, dont les parties ont tourné simultanément, chacune dans son propre fil et dossier, avec une comparaison des divergences et vos décisions. Dans `AGENTS.md`, ou dans les instructions du dossier ou la mémoire de l’IA, la règle permettra à l’IA de diviser seule un travail similaire la prochaine fois.
## Et ensuite

Si la division vous convient et que le travail se répète, par exemple chaque trimestre, sauvegardez-la comme [skill](card:create-skill-from-proven-process).
## Flux parallèles

**Qu'est-ce que c'est :** Deux ou plusieurs parties d'un même projet, chacune avec sa propre mission, pouvant travailler simultanément dans des flux ou outils d'IA distincts. Leurs résultats sont ensuite réunis de manière contrôlée.

**Ce que ce n'est pas :** Ce n'est pas plusieurs rôles commentant une même décision ni une série d'étapes où la seconde attend le résultat de la première.

**Pourquoi l'étudiant en a besoin :** Cela aide à comprendre quand un travail parallèle augmente réellement la capacité et quand il complique simplement la coordination.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Sous-agent

**Qu'est-ce que c'est :** Un agent autonome créé par un agent coordinateur pour une tâche partielle spécifique. Il reçoit sa propre mission et son contexte, travaille de manière indépendante et renvoie le résultat au coordinateur.

**Ce que ce n'est pas :** Ce n'est pas un simple embranchement d'une conversation. Un fork crée une nouvelle branche pour un humain ; un sous-agent peut être lancé, dirigé et intégré au résultat commun par le coordinateur lui-même.

**Pourquoi l'étudiant en a besoin :** Cela aide à distinguer le travail manuel parallèle dans plusieurs chats d'une configuration d'agents où la délégation et le suivi des tâches partielles sont pris en charge par le coordinateur.

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
