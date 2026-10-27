# Économisez vos tokens : faites durer votre quota AI toute la semaine

Transférez le travail d’une longue conversation vers une nouvelle, l’IA cesse d’oublier et votre quota dure plus longtemps.

## Économisez vos tokens : faites durer votre quota AI toute la semaine

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec une longue conversation.
## À quoi ça sert

Vous préparez depuis trois semaines un salon avec l’IA dans une seule conversation. Ces derniers jours, l’IA répond plus lentement, confond les anciennes versions des tarifs avec les nouvelles et mercredi après-midi, elle vous annonce que vous avez épuisé votre quota hebdomadaire. Vous devez donc finaliser votre offre, à rendre vendredi, sans l’IA.

L’IA relit toute la conversation à chaque nouveau message, donc vous économisez le plus en remplaçant la longue conversation par une nouvelle, qui reprend à partir d’un résumé court.
## Ce qu’il faut préparer

- la conversation où vous travaillez le plus longtemps sur un projet,
- l’IA avec laquelle vous menez cette conversation.
## Comment faire

1. Insérez le prompt dans la conversation la plus ancienne. Dans Cowork ou Code AI, le résumé est enregistré dans `handoff.md` et les règles dans `AGENTS.md`; dans une conversation classique, ils sont dans la réponse et la mémoire.
2. Lisez le résumé, corrigez ce qui ne va pas, puis ouvrez une nouvelle conversation : dans Cowork ou Code, écrivez « Continue selon `handoff.md` », dans une conversation classique, copiez le résumé et les fichiers associés.
3. Si votre outil affiche un quota, vérifiez combien il vous reste et quand il sera réinitialisé. Où trouver cette info est indiqué dans le bloc « Dans votre outil ».

Le résumé doit contenir uniquement ce dont la nouvelle conversation a besoin pour continuer le travail.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Cette conversation est longue et tu relis tout à chaque nouveau message, ce qui réduit mon quota et dégrade tes réponses. Prépare le transfert du travail vers une nouvelle conversation et établis des règles pour éviter que cela se reproduise.

Commence par écrire un résumé que la nouvelle conversation pourra utiliser sans relire celle-ci. Divise-le sous ces titres avec des dièses ### :
- Objectif,
- Terminé,
- Valide : décisions et règles convenues,
- Reste : prochaines étapes dans l’ordre,
- Fichiers pour la suite : uniquement ceux nécessaires aux prochaines étapes.
Tiens-toi à une page. Ne réécris pas le déroulement de la conversation et évite les impasses. Si tu doutes qu’une information soit toujours valide, demande-moi.

Ensuite, note ces règles pour la suite :
- Quand la conversation s’allonge ou qu’une tâche est terminée et qu’on en commence une autre, écris un nouveau résumé au même format et propose-moi de continuer dans une nouvelle conversation.
- Au début du travail, base-toi sur le résumé et utilise uniquement les fichiers nécessaires à la tâche. Ne parcours pas tout le dossier ni ne me demande des pièces jointes inutiles.
- Pour un travail en masse où la même décision se répète sur des dizaines ou centaines d’éléments, utilise un modèle moins coûteux : si tu peux, lance des sous-agents avec un modèle plus petit, sinon dis-moi quel modèle utiliser. Ne ramène dans la conversation principale que le résultat.

Où enregistrer quoi :
- Si tu travailles dans un dossier projet, enregistre le résumé dans le fichier handoff.md, écrase-le s’il existe et respecte sa forme. Ajoute les règles dans AGENTS.md, crée-le s’il n’existe pas. Assure-toi que AGENTS.md soit lu au début de chaque travail dans cet outil ; dans Cowork, inscris-le dans les instructions du dossier.
- Si tu n’as pas accès au dossier projet, ne crée pas de fichiers à télécharger. Écris-moi le résumé dans la réponse et garde les règles en mémoire ; si la mémoire n’est pas activée, écris-les sous le résumé pour que je les insère dans la nouvelle conversation.

Enfin, dis-moi en une phrase ce qui prenait le plus de place dans cette conversation pour que je l’évite la prochaine fois.

## Dans votre outil

### Microsoft Copilot
Microsoft ne publie pas les quotas pour Copilot avec licence et il n’y a pas de suivi de consommation ; la licence donne un accès prioritaire. Le transfert vers une nouvelle conversation aide aussi ici, car l’IA ne lit alors que le résumé et cesse de confondre anciennes et nouvelles versions. Copilot enregistre les règles en mémoire (Saved memories dans Settings and more, Chat settings, Personalization).

### ChatGPT
Dans les forfaits entreprise, le modèle standard est presque sans limite, mais les modèles plus longs à réfléchir et Codex ont des quotas. Quand vous les épuisez, ChatGPT continue avec un autre modèle et affiche la date de réinitialisation. La consommation de Codex se voit dans Settings, Usage et avec la commande `/status` dans Codex (y compris l’espace libre dans la conversation) ; la conversation classique n’a pas ce suivi.
L’IA en conversation classique garde les règles en mémoire (Settings, Personalization, Memory).

### Claude
Claude a un quota toutes les cinq heures et un quota hebdomadaire ; les conversations classiques, Cowork et Claude Code comptent pour les deux. Le reste est visible dans Settings, Usage et dans Claude Code avec la commande `/usage` ; la commande `/context` montre ce qui prend de la place dans la conversation. Pour un travail en masse, un modèle plus petit comme Haiku ou Sonnet suffit au lieu du plus puissant Opus.

### Gemini
Le quota restant se trouve dans Gemini sous Settings (en bas à gauche), Usage Limits. Les modèles plus puissants ont un quota de messages sur plusieurs heures ou par jour, et quand il est épuisé, vous pouvez continuer dans la même conversation avec le modèle rapide Fast. Les comptes entreprise n’ont pas de mémoire, donc enregistrez les règles dans Gemu (Gems, New Gem, Instructions) et ouvrez la nouvelle conversation du point 2 dedans.
## Qu’est-ce que les tokens et les quotas

L’IA lit et écrit du texte par morceaux appelés tokens ; un token est environ une partie de mot. Les tokens comptent pour le quota que vous avez dans votre abonnement ou que votre entreprise a défini. Comment votre outil calcule cela est indiqué dans le bloc « Dans votre outil ».

Une longue conversation coûte cher car l’IA relit tout depuis le début à chaque nouveau message, y compris toutes les pièces jointes. Donc une question courte dans une conversation qui dure depuis le matin consomme le quota pour toute la conversation. Chaque conversation a aussi une fenêtre contextuelle, c’est-à-dire la quantité de texte que l’IA peut garder en mémoire à la fois. Quand elle est pleine, l’IA ne garde qu’un résumé abrégé de la partie ancienne, ce qui fait qu’elle oublie les accords.

`handoff.md` est un fichier texte simple dans le dossier projet, qui contient toujours l’état actuel du travail. Ce même fichier sert aussi à [transférer le travail](card:handoff) à un collègue. Les dièses `###` marquent les titres ; ce format s’appelle [Markdown](glossary:markdown). `AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. Plusieurs outils en mode Code le lisent automatiquement au début de chaque travail ; là où ce n’est pas possible, l’IA enregistre la règle dans ses paramètres ou vous indique où la placer.
Un [sous-agent](glossary:subagent) est une IA auxiliaire que l’IA principale lance pour une tâche partielle. Il travaille dans sa propre conversation et ne renvoie que le résultat, gardant la conversation principale courte.

Si vous n’avez pas la mémoire activée, l’IA vous écrit les règles sous le résumé et vous les insérez dans la nouvelle conversation. Pour que l’IA enregistre elle-même les résumés au projet, vous avez besoin de l’IA en [mode](glossary:workmode) Cowork ou Code ; comment changer est expliqué dans la carte [Chat, Cowork ou Code](card:when-chat-is-not-enough).
## Laissez l’IA économiser elle-même

Les règles dans `AGENTS.md` s’appliquent dans chaque nouvelle conversation du dossier projet. L’IA vous proposera une nouvelle conversation quand l’actuelle s’allonge, lira uniquement les fichiers nécessaires à la tâche et enverra le travail en masse à un modèle moins coûteux. Pour trier ou réécrire des centaines d’éléments, un modèle plus petit suffit et consomme beaucoup moins.

Si vous travaillez sur plusieurs projets, appliquez les règles partout. Les outils en mode Code ont, en plus des règles du projet, des règles valables pour tous vos projets. Il suffit dans n’importe quel projet de saisir :

```text
Ajoute les règles d’économie de tokens de AGENTS.md dans ce dossier aussi à tes règles valables pour tous mes projets.
```

Comment économiser aussi sur les sorties de commandes et la longueur des réponses est expliqué dans le bloc « Comment économiser en mode Code ».
## Comment économiser en mode Code

En [mode Code](glossary:workmode), l’IA économise le plus en déléguant les grandes recherches hors de la conversation principale et en raccourcissant les textes qu’elle lit et écrit pendant le travail.

Une grande recherche, par exemple des pénalités contractuelles dans 300 contrats, est confiée à un [sous-agent](glossary:subagent) qui ne renvoie que le résultat dans la conversation principale. Le sous-agent consomme aussi du quota, donc l’IA ne l’utilise que pour des recherches dont les résultats rempliraient autrement la conversation principale.

Si la conversation se remplit malgré tout, l’IA remplace elle-même la partie ancienne par un résumé court et continue. Cela réduit aussi le quota, car l’IA relit toute la conversation, mais ne garde des messages anciens que les points principaux. Après une tâche terminée, il est donc moins coûteux de commencer une nouvelle conversation selon `handoff.md`. Ce qui prend de la place dans la conversation s’affiche avec une commande que vous tapez dans le champ message ; laquelle, vous la trouvez dans le bloc « Dans votre outil ».

Deux autres économies nécessitent une installation. En mode Code, l’IA lance des commandes pendant le travail, par exemple pour convertir un tableau ou parcourir les modifications dans des fichiers, et lit tout ce qu’elles affichent. L’outil RTK, gratuit, réduit les sorties des commandes courantes selon les auteurs de 60 à 90 % avant que l’IA ne les lise. Le plugin Caveman, un complément pour l’IA, raccourcit ses réponses dans la conversation à quelques mots, comme si un homme des cavernes parlait. Si vous n’aimez pas les réponses courtes, écrivez « stop caveman » et l’IA répondra comme avant jusqu’à la fin de la conversation ; elle le désactive définitivement si vous le demandez.

Selon le prompt, l’IA écrit d’abord les règles et installe les outils après votre confirmation. Si vous ne pouvez pas installer sur un ordinateur d’entreprise ou ne savez pas, l’IA prépare un message pour l’administrateur IT.

Insérez ce prompt dans l’IA en mode Code, ouverte dans votre dossier :

```text
Configure l’économie de tokens pour le travail en mode Code.

1. Ajoute ces règles dans AGENTS.md (crée-le s’il n’existe pas) et assure-toi qu’il soit lu au début de chaque travail dans cet outil :
- Pour une tâche nécessitant une recherche dans tout le dossier ou la lecture de longues sorties, lance un sous-agent avec un modèle plus petit si tu peux, et ne ramène dans la conversation principale que le résultat.
- Si tu utilises RTK, compare les fichiers avec une commande que RTK ne raccourcit pas (sur Mac et Linux /usr/bin/diff, sous Windows fc.exe), car une comparaison raccourcie peut manquer une différence.
- Les textes que tu écris dans les fichiers pour moi doivent être complets, même si tes réponses dans la conversation sont brèves.

2. Ensuite, dis-moi en deux phrases ce que tu vas installer, d’où et ce que cela changera dans tous mes projets, puis attends ma confirmation que je peux et veux installer cela en entreprise :
- RTK selon le README sur github.com/rtk-ai/rtk, pas via cargo install rtk. Dans Claude Code, active-le avec la commande rtk init -g --auto-patch, dans Codex avec rtk init -g --codex. Vérifie que rtk gain affiche un résumé des économies ; si la commande est inconnue, tu as un autre paquet nommé rtk, désinstalle-le et réinstalle RTK.
- Caveman selon la documentation pour cet outil sur github.com/JuliusBrussee/caveman, pour que tu répondes brièvement dans la conversation et qu’il s’active automatiquement au début de chaque travail.

Si quelque chose bloque l’installation, par exemple un manque d’autorisations, un mot de passe administrateur ou un doute sur la permission, laisse tomber et écris-moi un message court pour l’administrateur IT. Si je dois finir l’installation, écris-moi précisément quoi faire. Enfin, dis-moi ce que tu as configuré, si je dois ouvrir une nouvelle conversation ou redémarrer l’outil, et comment tout revenir en arrière si quelque chose ne fonctionne plus.
```
## Exemple

Lucie coordonne la participation de son entreprise au salon d’octobre. Depuis le 21/09, elle le prépare avec l’IA en mode Code dans une seule conversation dans le dossier projet. Le mercredi 7/10, elle voit qu’elle a consommé 85 % du quota hebdomadaire, et l’IA écrit dans l’invitation les prix en couronnes, alors qu’il y a deux semaines, elle avait décidé qu’ils seraient en euros. Lucie insère le prompt et l’IA écrit dans `handoff.md` :

```text
### Objectif
Préparer le stand pour le salon du 20 au 23 octobre et inviter les clients.

### Terminé
- Stand commandé, graphisme approuvé le 2/10.
- Texte de l’invitation prêt, les prix doivent être convertis en euros.

### Valide
- Les prix sont indiqués uniquement en euros.
- L’invitation est envoyée uniquement aux clients ayant acheté ces deux dernières années.

### Reste
1. Trier 1 400 contacts du salon de l’an dernier.
2. Corriger les prix dans l’invitation et l’envoyer avant le 14/10.

### Fichiers pour la suite
- contacts-salon-2025.xlsx
- tarif-2026.pdf
```

L’IA ajoute que la conversation était surtout occupée par trois versions complètes du tarif que Lucie a téléchargées successivement. Lucie ouvre une nouvelle conversation, écrit « Continue selon `handoff.md` » et l’IA corrige directement les prix dans l’invitation en euros. Pour trier les contacts, l’IA lance des sous-agents avec un modèle plus petit selon la règle et ne ramène que le résultat : 230 clients à inviter personnellement, 760 à qui envoyer l’invitation par e-mail et 410 à exclure car ils n’ont pas acheté ces deux dernières années ou sont en double.
## En cas de blocage

- **Votre quota est épuisé :** attendez sa réinitialisation ; l’heure exacte s’affiche dans le message de quota. Faites cet exercice en priorité avant de continuer dans l’ancienne conversation.
- **L’IA dit avoir enregistré le résumé mais `handoff.md` n’est pas dans le dossier :** vous travaillez probablement dans une conversation classique qui ne peut pas enregistrer de fichiers. Vous avez le résumé dans la réponse ; pour l’avoir dans le dossier projet, passez en [Cowork ou Code](card:when-chat-is-not-enough).
- **La nouvelle conversation ignore un accord :** dites-le lui et demandez-lui de l’ajouter au résumé sous le titre Valide.
- **Le modèle moins coûteux fait des erreurs sur le travail en masse :** vérifiez au hasard dix éléments. Précisez la règle selon laquelle l’IA trie, et si cela ne suffit pas, lancez un modèle plus puissant uniquement sur les éléments litigieux.
## Ce qui sera prêt

Le travail en cours est dans une nouvelle conversation courte qui reprend selon le résumé, et l’ancienne longue conversation n’est plus nécessaire. Dans Cowork ou Code, le résumé est dans `handoff.md` et les règles dans `AGENTS.md` selon lesquelles l’IA économise les tokens automatiquement ; dans une conversation classique, l’IA garde les règles en mémoire ou les a reçues dans la nouvelle conversation avec le résumé.
## Et ensuite

Quand un modèle plus puissant est utile, vous le verrez lors du [choix du modèle pour votre tâche](card:modely). Si vous ou un collègue revenez sur un projet après un certain temps, donnez-lui une [page d’accueil permanente du projet](card:project-start-here) ; dans `handoff.md` restera uniquement la tâche en cours.
## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Sous-agent

**Qu'est-ce que c'est :** Un agent autonome créé par un agent coordinateur pour une tâche partielle spécifique. Il reçoit sa propre mission et son contexte, travaille de manière indépendante et renvoie le résultat au coordinateur.

**Ce que ce n'est pas :** Ce n'est pas un simple embranchement d'une conversation. Un fork crée une nouvelle branche pour un humain ; un sous-agent peut être lancé, dirigé et intégré au résultat commun par le coordinateur lui-même.

**Pourquoi l'étudiant en a besoin :** Cela aide à distinguer le travail manuel parallèle dans plusieurs chats d'une configuration d'agents où la délégation et le suivi des tâches partielles sont pris en charge par le coordinateur.

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
