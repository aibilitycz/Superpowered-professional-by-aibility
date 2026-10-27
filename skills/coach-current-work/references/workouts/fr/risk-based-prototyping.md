# Utilisez le vibe coding : l’IA crée un outil pour vos collègues

Les collègues calculent eux-mêmes le prix de l’offre dans un petit outil que l’IA construit à partir de votre tableau.

## Utilisez le vibe coding : l’IA crée un outil pour vos collègues

**Difficulté : moyenne.**\
**Durée : environ 15 minutes** avec la tarification et un cas finalisé.
## À quoi ça sert

Vos collègues commerciaux vous appellent plusieurs fois par semaine pour que vous calculiez le prix d’une offre.
Vous êtes le seul à maîtriser le tableau avec la tarification et les formules. La semaine dernière, vous étiez en congé et un collègue a envoyé au client un prix sans le supplément week-end.

Avec le [vibe coding](glossary:vibe-coding), c’est-à-dire la programmation par description, vous décrivez simplement ce qui doit être calculé, et l’IA écrit un outil dans lequel le collègue saisit le nombre d’invités et voit immédiatement le prix détaillé.
## Ce qu’il faut préparer

- la tarification utilisée par les collègues pour calculer, dans un dossier partagé accessible aussi sur votre ordinateur,
- dans ce même dossier, un cas finalisé avec le résultat correct, par exemple une offre envoyée,
- un collègue qui testera l’outil en premier,
- l’IA en mode Cowork ou Code ; où la trouver est expliqué dans le bloc « Dans votre outil ».
## Comment faire

1. Ouvrez l’IA en mode Cowork ou Code dans le dossier partagé avec la tarification et insérez le prompt. Ajoutez à la dernière ligne ce que l’outil doit calculer, qui l’utilisera et où se trouve le cas finalisé.
2. L’IA sauvegarde l’outil sous `kalkulacka.html`. Ouvrez-le par double-clic, saisissez le cas finalisé et comparez le résultat ; si quelque chose ne correspond pas ou ne fonctionne pas, écrivez à l’IA et laissez-la corriger.
3. Informez le collègue où trouver `kalkulacka.html` dans le dossier partagé pour qu’il calcule son prochain cas. Envoyez à l’IA ce qui lui a posé problème, avec ses mots.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code,
ouverte dans votre dossier avec la tarification, et complétez sa dernière ligne avec ce que l’outil doit calculer, qui l’utilisera et dans quel fichier se trouve le cas finalisé. Vous verrez à quoi ressemble cette ligne dans l’Exemple.

Construis à partir d’un calcul que les collègues font manuellement et régulièrement dans un tableau, un petit outil qu’ils peuvent ouvrir eux-mêmes. Ce qu’il doit calculer, qui l’utilisera et dans quel fichier se trouve le cas finalisé avec le résultat correct se trouve à la dernière ligne. Si tu ne travailles pas directement dans le dossier avec la tarification, dis-le-moi tout de suite.

Parcours la tarification ou le tableau dans le dossier et identifie toutes les règles de calcul : prix, suppléments, remises, arrondis et conditions. Si tu ne reconnais pas une règle d’après les formules du tableau ou si les données se contredisent, demande-moi et montre-moi un exemple.

Sauvegarde l’outil dans un seul fichier kalkulacka.html dans le même dossier que la tarification. Il doit s’ouvrir par double-clic dans un navigateur classique sans installation ni internet, donc intègre la tarification directement dedans. En haut, il y aura des champs que le collègue remplira, en dessous le résultat avec le détail montrant comment on est arrivé au chiffre, et un bouton pour copier ce détail afin que le collègue puisse le coller dans un e-mail ou une offre. Utilise des libellés avec les mots que les collègues emploient. Si un champ reste vide ou contient une erreur, l’outil doit indiquer clairement ce qu’il faut corriger.

Calcule dans l’outil le cas finalisé et compare le résultat avec le bon. S’ils diffèrent, trouve la règle qui calcule mal, corrige-la et compare à nouveau. Ensuite, écris-moi où trouver kalkulacka.html et ce que je dois saisir pour vérifier moi-même le résultat.

Écris les règles de calcul en mots simples dans un fichier kalkulacka-pravidla.md dans le même dossier, avec la date de la tarification et le cas finalisé sur lequel tu as validé l’outil. Ajoute dans le fichier AGENTS.md de ce dossier la règle : « Quand la tarification ou les règles de calcul changent, adapte kalkulacka.html et kalkulacka-pravidla.md en conséquence. Puis calcule le cas finalisé avec la nouvelle tarification et indique de combien et pour quelles lignes le résultat diffère de l’original. » Si AGENTS.md n’existe pas, crée-le. Assure-toi que AGENTS.md est lu au début de chaque travail dans ce dossier ; dans Cowork, inscris-le dans les instructions du dossier.

Ce que l’outil doit calculer, qui l’utilisera et dans quel fichier se trouve le cas finalisé :

## Dans votre outil

### Microsoft Copilot
Copilot Cowork sur `copilot.cloud.microsoft` sauvegarde les nouveaux fichiers dans son dossier Cowork sur OneDrive, pas dans votre dossier partagé. Joignez-lui la tarification et le cas finalisé avec le bouton +, insérez le prompt et ajoutez « Construis une calculatrice comme un classeur Excel, tu n’as pas besoin de travailler dans le dossier. » Déplacez le classeur dans le dossier partagé et envoyez le lien aux collègues ; Cowork mémorisera la règle comme compétence.

### ChatGPT
Le mode Code est dans ChatGPT Codex dans l’application ChatGPT pour ordinateur : choisissez Codex et ouvrez le dossier partagé avec la tarification (open a folder). Codex sauvegarde `kalkulacka.html` directement dedans et écrit la règle dans `AGENTS.md`.

### Claude
Dans l’application Claude pour ordinateur, ouvrez Cowork ou Claude Code avec le dossier partagé contenant la tarification. L’IA sauvegarde `kalkulacka.html` directement dedans ; dans Cowork, elle inscrit la règle dans les instructions du dossier.

### Gemini
L’outil est construit par Gemini dans Canvas : dans l’application Gemini, sous + Canvas, joignez la tarification et le cas finalisé et insérez le prompt. Si elle dit qu’elle ne travaille pas dans un dossier, répondez « continue dans Canvas » et testez le cas en aperçu. Envoyez-le aux collègues via Share & export et Share ; ceux qui ont le lien voient aussi la tarification. Après modification de la tarification, écrivez dans le même chat pour que l’outil adapte.
## Qu’est-ce que le vibe coding

Le vibe coding est le terme anglais pour la programmation par description : le code est écrit par l’IA et vous la guidez avec des phrases simples. Vous décrivez ce que l’outil doit calculer, l’IA écrit le code et vous testez l’outil sur un cas dont vous connaissez le résultat.
Vous n’avez pas besoin de programmer et l’outil ne fait que calculer, donc il ne modifie rien dans le tableau ni dans les systèmes de l’entreprise.
C’est adapté à tout ce qui se calcule toujours selon les mêmes règles : prix d’une offre à partir d’une tarification, indemnités de déplacement, budget d’un événement d’entreprise ou nombre de personnes sur un poste.
L’outil contient uniquement les champs que les collègues remplissent vraiment et le résultat qu’ils doivent transmettre ; ajoutez d’autres fonctions seulement si quelqu’un en fait la demande.

L’outil de cette carte est une page web unique qui calcule. Le fichier `kalkulacka.html` s’ouvre dans un navigateur comme n’importe quelle page, mais le collègue n’a pas besoin d’internet ni d’IA. Un chat classique peut aussi écrire un outil, mais il ne le sauvegarde pas dans le dossier et ne l’adapte pas après modification de la tarification.

Contrairement à la page de la carte [Envoyez un lien au lieu d’une pièce jointe](card:web-page-output), qui montre le même contenu à tous, dans cet outil le collègue saisit ses propres chiffres et obtient son résultat. Si vous avez besoin d’une réponse unique à partir des données pour vous seul, il suffit de [poser la question à vos données](card:prace-s-daty).

Tant que l’outil calcule uniquement à partir d’une copie de la tarification et que le collègue lit lui-même le résultat, vous pouvez le distribuer immédiatement ; s’il doit écrire dans un système d’entreprise, par exemple un CRM client, ou s’il doit être ouvert directement par les clients, consultez d’abord l’administrateur de ce système.

`kalkulacka-pravidla.md` et `AGENTS.md` sont des fichiers texte simples que l’IA écrit elle-même et que vous n’avez pas besoin d’ouvrir. `AGENTS.md` contient les règles pour l’IA dans le dossier partagé et l’IA les lit au début de chaque session.
## Pour que l’outil suive la tarification

La règle dans `AGENTS.md` garantit qu’après chaque modification de la tarification, l’IA adapte l’outil et les règles écrites, et vous montre comment le prix du cas finalisé a changé. Si une nouvelle tarification est en vigueur depuis janvier, sauvegardez-la dans le même dossier et écrivez :

```text
Depuis le 1er janvier, la nouvelle tarification cenik-2027.xlsx est en vigueur. Adapte la calculatrice en conséquence et indique-moi quels prix ont changé.
```

Comme l’outil est dans un dossier partagé, les collègues ouvrent directement la nouvelle version après modification et vous n’avez rien à envoyer.
## Exemple

Petra est assistante commerciale dans une entreprise de catering à Brno. Les commerciaux calculent le prix du buffet dans un tableau : menu par personne, un serveur pour 20 invités, un supplément de 15 % le samedi et dimanche, et 30 CZK par kilomètre aller-retour pour le transport. Le 13 octobre 2026, Petra ouvre l’IA en mode Cowork dans le dossier partagé Offres, où se trouvent `cenik-2026.xlsx` et une offre que la comptable a envoyée la semaine dernière à un cabinet à Boskovice : buffet pour 80 invités un samedi 24 octobre, 42 km de Brno, 52 200 CZK hors TVA. Elle insère le prompt et complète la dernière ligne :

```text
Prix du buffet à partir de cenik-2026.xlsx pour les commerciaux qui le communiquent aux clients par téléphone. Le cas finalisé est nabidka-boskovice.pdf.
```

Au premier essai, la calculatrice affiche 52 578 CZK. En comparant, l’IA remarque que le supplément week-end est aussi appliqué au transport, corrige cela et obtient le même chiffre que dans l’offre. Petra ouvre l’outil, saisit le même buffet et copie le détail avec un bouton :

```text
Buffet Standard, 80 invités × 450 CZK : 36 000 CZK
Service, 4 serveurs × 1 800 CZK : 7 200 CZK
Supplément samedi 15 % : 6 480 CZK
Transport 42 km aller-retour : 2 520 CZK
Total hors TVA : 52 200 CZK
```

Puis elle écrit à Ondřej pour qu’il calcule dans la calculatrice du dossier Offres le mariage qu’il gère. Ondřej répond qu’il ne savait pas s’il fallait saisir les kilomètres aller ou aller-retour. Petra envoie sa phrase à l’IA et le champ s’appelle désormais « Distance depuis Brno, aller simple (km) ».
## En cas de blocage

- **L’IA affirme avoir sauvegardé l’outil mais il n’est pas dans le dossier :** vous travaillez probablement dans un chat classique qui ne peut pas sauvegarder de fichiers. Passez en [mode Cowork ou Code](card:when-chat-is-not-enough) et ouvrez le dossier partagé avec la tarification.
- **L’IA demande une règle que vous ne connaissez pas :** demandez-lui de vous montrer la formule du tableau d’où elle déduit la règle et de calculer un cas avec. Si vous ne savez toujours pas, demandez au collègue qui utilise le tableau le plus souvent.
- **Le collègue voit du code au lieu de l’outil ou ne peut pas l’ouvrir :** qu’il télécharge `kalkulacka.html` sur son ordinateur et l’ouvre par double-clic, pas via la page web OneDrive ou Teams. Vous pouvez aussi envoyer un lien : demandez à l’IA de transformer l’outil en page avec un lien partagé et partagez-le uniquement avec les personnes de l’entreprise comme dans la carte [Envoyez un lien au lieu d’une pièce jointe](card:web-page-output).
- **L’outil calcule différemment du tableau :** dites à l’IA ce que vous avez saisi, ce que l’outil a affiché et quel est le résultat correct. L’IA trouvera la règle erronée et la corrigera dans l’outil et dans `kalkulacka-pravidla.md`.
## Ce qui sera prêt

Dans le dossier partagé, vous avez l’outil `kalkulacka.html` qui a calculé le cas finalisé comme votre tableau, et le premier collègue sait où le trouver. À côté se trouvent `kalkulacka-pravidla.md` avec les règles de calcul et dans `AGENTS.md` la règle selon laquelle l’IA adapte l’outil après modification de la tarification et montre comment le prix du cas finalisé a changé. Vous modifiez la tarification d’une phrase.
## Et ensuite

Avant de distribuer l’outil à toute l’équipe, faites comparer plusieurs résultats avec le tableau, comme montré dans [contrôle des sorties IA](card:kontrola-vysledku). Si plusieurs personnes dans l’équipe commencent à construire des outils avec l’IA, rédigez des [règles communes pour l’IA](card:pravidla-pro-tym).
## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Vibe coding

**Qu'est-ce que c'est :** Une méthode de création de site web, d'application, de script ou d'autre livrable logiciel, où l'utilisateur décrit l'intention et le comportement souhaité, et l'IA génère ou modifie le code. L'utilisateur teste et ajuste le résultat en continu.

**Ce que ce n'est pas :** Ce n'est pas un langage de programmation autonome, ni une garantie que le code produit est correct, sécurisé ou prêt pour un environnement de production.

**Pourquoi l'étudiant en a besoin :** Cela aide à nommer une voie accessible vers son propre prototype, tout en distinguant une expérimentation rapide d'une solution nécessitant des tests et une validation experte.

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
