# Utilisez Browser control : l’IA clique pour vous dans le navigateur

Une tâche web que vous réalisez manuellement chaque semaine, comme télécharger un rapport, est effectuée automatiquement par l’IA dans le navigateur.

## Utilisez Browser control : l’IA clique pour vous dans le navigateur

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec une tâche web.
## À quoi ça sert

Chaque vendredi après-midi, vous téléchargez depuis le système un export des rapports de travail et retranscrivez les totaux d’heures dans un tableau pour la direction. Vous filtrez manuellement le projet et la semaine à chaque fois. Personne d’autre ne sait le faire, donc en cas de congé, la direction ne reçoit pas les chiffres.

Browser control signifie que le navigateur est contrôlé par l’IA : elle ouvre la page, clique, remplit les champs et télécharge, pendant que vous faites autre chose.
## Ce qu’il faut préparer

- une tâche web que vous répétez manuellement, par exemple télécharger un rapport,
- un compte sur le site où la tâche s’effectue ; vous vous y connectez vous-même quand l’IA le demande,
- un dossier pour le travail lié à la tâche ; l’IA y enregistrera la procédure pour la prochaine fois,
- une IA qui contrôle le navigateur ; si la vôtre le fait, le bloc « Dans votre outil » le montre.
## Comment faire

1. Ouvrez l’IA qui contrôle le navigateur dans le dossier préparé et collez le prompt. Après la ligne « Tâche : », décrivez où aller, ce qu’il faut faire et sous quelle forme vous voulez le résultat.
2. Sur la page de connexion, connectez-vous vous-même et dites à l’IA de continuer. Ensuite, faites autre chose ; l’IA vous préviendra quand elle aura fini ou aura besoin d’une décision.
3. Sur la page indiquée par l’IA avec le résultat, vérifiez un ou deux chiffres. L’IA enregistrera la procédure pour la prochaine fois dans le fichier `ulohy-v-prohlizeci.md`.
## Exercice IA

Collez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code, ouverte dans votre dossier, et ajoutez votre tâche à la dernière ligne :

Fais pour moi dans le navigateur une tâche que je réalise régulièrement à la main sur un site web. La tâche est à la dernière ligne.

Ouvre la page et parcours-la jusqu’au résultat : clique, remplis, filtre et télécharge ce qui est nécessaire. Si tu rencontres une connexion, dis-le-moi ; je me connecterai et te dirai de continuer. Si tu ne sais pas quelle option choisir, demande-moi.

Rends-moi le résultat sous la forme demandée dans la tâche. Pour chaque chiffre ou modification, ajoute l’adresse de la page d’où il provient pour que je puisse vérifier.

Enfin, écris la procédure pour la prochaine fois : sous un titre avec le nom de la tâche, indique où aller, les étapes qui ont fonctionné (adresse de la page, filtres, noms des boutons) et à quoi doit ressembler le résultat. Enregistre-la dans le fichier ulohy-v-prohlizeci.md dans le dossier où tu travailles ; si le fichier existe, ajoute la tâche à la fin. Si tu n’as pas accès au dossier, saute cette étape.

Tâche :

## Dans votre outil

### Microsoft Copilot
Le navigateur est contrôlé par Copilot Cowork, uniquement sur le site `copilot.cloud.microsoft` ouvert dans Edge et après autorisation de l’administrateur. Collez le prompt dans Cowork (sélecteur en haut à côté de Chat) ; l’IA travaille dans votre Edge où vous êtes déjà connecté. Si le site demande un mot de passe, il vous montre un onglet du navigateur et continue après connexion. Quand c’est fini, écrivez « Enregistre la procédure comme skill » ; les tâches planifiées sont sur la page Automations.

### ChatGPT
Dans ChatGPT, le navigateur est contrôlé par le mode Work : dans l’application ChatGPT pour ordinateur, passez en mode Work et collez le prompt. Work a un navigateur intégré où vous vous connectez vous-même ; avec l’extension ChatGPT pour Chrome, validée dans les paramètres Computer Use, il fonctionne aussi dans votre Chrome. Work ne sauvegarde pas la procédure dans un fichier, donc demandez-lui de créer une tâche planifiée (Scheduled dans le panneau gauche).

### Claude
L’extension Claude in Chrome pour les forfaits payants s’ajoute depuis le Chrome Web Store et vous vous connectez avec un compte Claude ; elle fonctionne uniquement dans Google Chrome, pas dans Edge. Dans l’application Claude, activez-la parmi les connecteurs (Connectors) sous Claude in Chrome, et l’IA travaille alors dans Cowork ou Claude Code dans votre Chrome connecté. Les tâches planifiées sont dans Cowork dans le panneau gauche sous Scheduled.

### Gemini
Gemini dans Chrome, qui contrôle le navigateur, n’est pas disponible dans l’UE, y compris en République tchèque, donc faites la tâche en deux temps. Téléchargez vous-même l’export depuis le site, joignez-le dans l’application Gemini via Add from Drive ou depuis l’ordinateur et dites ce que vous voulez en faire, par exemple « additionne les heures par personne ». Si la tâche se répète, demandez à Gemini d’écrire une demande IT pour un téléchargement automatique de ces données.
## Qu’est-ce que Browser control

Browser control est le terme anglais pour contrôle du navigateur. L’IA voit la page ouverte et clique ou écrit dedans comme vous. Elle peut ainsi gérer des sites inaccessibles autrement : configurer une application ou parcourir votre site pour trouver des liens cassés. Si l’application a un connecteur, c’est-à-dire une liaison directe avec l’IA, préférez-le car il est plus rapide et fiable. Avant une étape nécessitant votre approbation, par exemple un achat, un envoi ou un travail sur un nouveau site, l’IA s’arrête et demande.

Certains outils fonctionnent dans votre navigateur où vous êtes déjà connecté et accèdent à tout comme vous, y compris aux systèmes d’entreprise via VPN. D’autres ont leur propre navigateur intégré où vous vous connectez séparément.

`ulohy-v-prohlizeci.md` est un fichier texte simple listant vos tâches dans le navigateur avec les étapes qui ont fonctionné. L’extension `.md` signifie qu’il est écrit en [Markdown](glossary:markdown), un format simple où les dièses `###` en début de ligne indiquent un titre.
## Pour que la tâche se lance automatiquement

Une tâche répétée chaque semaine n’a même pas besoin d’être lancée manuellement. Collez dans l’IA qui gère les tâches planifiées cette consigne, en changeant juste le nom de la tâche pour la vôtre, et demandez-lui de créer la tâche planifiée. Où les trouver dans votre outil est expliqué dans le bloc « Dans votre outil ».

```text
Chaque vendredi à 15h00, exécute la tâche « Heures hebdomadaires sur projet » selon le fichier ulohy-v-prohlizeci.md. Enregistre le résultat dans le même dossier avec la date du jour dans le nom du fichier et écris-moi les trois chiffres principaux dans le résumé.
```

La tâche utilise un fichier sur votre ordinateur et votre navigateur, donc elle ne fonctionnera que si l’ordinateur est allumé, l’application IA ouverte et éventuellement la VPN connectée.
## Exemple

Jana coordonne la construction d’un nouveau entrepôt dans une entreprise logistique et chaque vendredi envoie à la direction le nombre d’heures travaillées par l’équipe sur le projet. Le vendredi 9 octobre 2026, elle ouvre le dossier du projet dans l’IA qui contrôle le navigateur, colle le prompt et ajoute à la dernière ligne :

```text
Dans le système de rapports de travail, télécharge les heures de cette semaine pour le projet Nouveau entrepôt et rends-moi le total par membre de l’équipe et le total général.
```

L’IA ouvre le système de rapports, filtre le projet et la semaine du 5 au 9 octobre, et télécharge l’export. L’équipe a travaillé 86 heures, les plus grosses parts sont Petr (31) et Lucie (24) ; pour chaque chiffre, l’IA indique l’adresse de la page. Jana ouvre le résumé dans le système et le total correspond. L’IA écrit dans `ulohy-v-prohlizeci.md` :

```text
### Heures hebdomadaires sur projet
- Où : système de rapports de travail, section Rapports.
- Étapes : filtre Projet Nouveau entrepôt, période du lundi au vendredi de cette semaine, bouton Exporter en Excel.
- Résultat : heures par membre de l’équipe et total, avec l’adresse de la page pour chaque chiffre.
```

Le vendredi suivant, Jana écrit juste « Fais les heures hebdomadaires sur projet selon `ulohy-v-prohlizeci.md` » et obtient les chiffres de la nouvelle semaine.
## En cas de blocage

- **L’IA répond qu’elle ne sait pas contrôler le navigateur :** un chat classique ne le peut pas. Activez le contrôle du navigateur selon le bloc « Dans votre outil ». Plus d’infos dans la fiche [Chat, Cowork ou Code](card:when-chat-is-not-enough).
- **L’IT interdit l’installation d’extensions :** utilisez un navigateur sans installation nécessaire : navigateur intégré dans ChatGPT Work, Copilot Cowork dans Edge, ou navigateur propre de Claude Cowork, sélectionnable dans les paramètres par l’option Preferred browser. Connectez-vous séparément.
- **L’IA erre longtemps sur le site :** ajoutez dans la tâche le nom de la section ou l’adresse où chercher et relancez.
- **L’IA n’enregistre pas la procédure pour la prochaine fois :** vous travaillez sans accès au dossier. Configurez la tâche comme planifiée ou lancez-la la prochaine fois en mode Cowork ou Code ouvert dans le dossier.
## Ce qui sera prêt

Vous aurez une tâche web terminée que vous faisiez manuellement, avec le résultat vérifié sur la page source. La procédure avec les étapes qui ont fonctionné est dans `ulohy-v-prohlizeci.md`, donc la prochaine fois vous lancerez la tâche en une phrase.
## Et après

L’IA peut préparer directement un support pour la réunion à partir du rapport téléchargé ; si vous le faites chaque semaine, [enregistrez les deux étapes comme skill](card:create-skill-from-proven-process). Si un collègue doit aussi recevoir le résultat et que la tâche doit signaler les erreurs, configurez-la comme [tâche planifiée](card:recurring-ai-task).
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
