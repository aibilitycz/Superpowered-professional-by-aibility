# Créez un worklog : journal de projet

L’IA tient le journal de projet, ainsi le nouveau chat ou collègue reprendront là où vous vous êtes arrêtés.

## Créez un worklog : journal de projet

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec un projet en cours.
## À quoi ça sert

La semaine dernière, lors d’une réunion, vous avez décidé que l’offre serait sans remise et que la date serait repoussée à novembre. Aujourd’hui, vous ouvrez un nouveau chat, l’IA ne le sait pas et écrit une remise dans le brouillon d’e-mail. Un collègue qui a repris le projet entre-temps vous demande s’il faut accorder une remise.

Le worklog, journal de projet, aide : l’IA y inscrit un court enregistrement après chaque décision, et le nouveau chat comme le collègue peuvent lire ce qui est désormais en vigueur.
## Ce qu’il faut préparer

- un dossier avec un projet en cours,
- notes, e-mails, compte-rendu de réunion ou chat du dernier travail sur ce projet,
- IA en [mode](glossary:workmode) Cowork ou Code, qui travaille avec les fichiers sur l’ordinateur.
## Comment faire

1. Ouvrez le dossier du projet dans Cowork ou Code et insérez le prompt. L’IA écrira les premiers enregistrements dans `worklog.md` et enregistrera la règle de le compléter après chaque travail.
2. Lisez les premiers enregistrements et corrigez ce qui ne va pas.
3. Ouvrez un nouveau chat dans le même dossier et posez une question sur une décision déjà prise. L’IA doit répondre selon le worklog.

Seules les informations nécessaires à un nouveau venu pour ne pas refaire le travail doivent figurer dans le journal.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code,
ouverte dans votre dossier :

Crée un worklog pour ce projet : un journal où l’on note ce qui a été fait, pourquoi et quelles décisions ont été prises.

Parcours les documents dans le dossier du projet et les notes que je te donne, puis écris les premiers enregistrements. Chaque enregistrement a cette forme :

### AAAA-MM-JJ : titre court
- Ce qui a été fait : une à deux phrases.
- Pourquoi : raison ou problème résolu.
- Décision : ce qui est désormais en vigueur. Si aucune décision, omets cette ligne.
- Étape suivante : ce qui vient ensuite et qui le fera.

L’enregistrement le plus récent doit être en haut. Écris pour qu’un collègue qui n’a pas participé comprenne. Ne réécris pas tout le chat et ne liste pas les petites modifications. Si tu ne trouves pas la date ou la raison dans les documents, demande-moi.

Sauvegarde les enregistrements dans le fichier worklog.md dans le dossier du projet. S’il existe déjà, ajoute les nouveaux enregistrements en haut.

Enfin, sauvegarde la règle « Après chaque travail terminé sur le projet, ajoute en haut de worklog.md un enregistrement dans le même format. » dans le fichier AGENTS.md du dossier projet. S’il n’existe pas, crée-le. Assure-toi que je puisse le lire au début de chaque travail dans cet outil ; dans Cowork, inscris-le dans les instructions du dossier.

## Dans votre outil

### Microsoft Copilot
Cowork se trouve à côté du sélecteur Chat ; s’il n’est pas visible, demandez-le à votre administrateur IT. Il ne voit que les fichiers sur OneDrive et SharePoint, donc ajoutez à la fin du prompt : « Travaille dans le dossier projet sur OneDrive, tiens le worklog comme un document Word et écris la règle pour Customize, Preferences. » À l’étape 3, indiquez dans la nouvelle tâche où se trouve le projet. Les tâches planifiées se trouvent sur la page Automations.

### ChatGPT
Dans l’application ChatGPT pour ordinateur, passez en mode Codex, choisissez ouvrir un dossier (open a folder) et sélectionnez le dossier projet. Codex lit `AGENTS.md` automatiquement et crée la tâche planifiée si vous le lui demandez ; elle se trouve sous Scheduled. Si vous ne voyez pas Codex, il est probablement désactivé par votre administrateur, demandez-lui de l’activer.

### Claude
Dans l’application Claude pour ordinateur, ouvrez Cowork et sélectionnez le dossier projet, ou ouvrez-le dans Claude Code ; les deux sont payants. Cowork inscrit la règle dans les instructions du dossier (Folder instructions), Claude Code lit `AGENTS.md`. L’IA crée la tâche planifiée sur demande, visible dans le panneau gauche sous Scheduled.

### Gemini
Gemini ne travaille pas avec les dossiers sur ordinateur et les comptes d’entreprise n’ont pas de mémoire, donc il ne complète pas automatiquement le worklog après le travail. Il écrit cependant les premiers enregistrements : joignez les notes via Add from Drive et sauvegardez le worklog via Share & export, Export to Docs. L’étape 3 se fait dans Gemu (Gems, New Gem) avec le worklog dans Knowledge et la consigne « Réponds selon le worklog » dans Instructions.
## Qu’est-ce que le worklog

Le worklog, journal de travail en anglais, est un simple fichier texte `worklog.md` dans le dossier projet avec l’enregistrement le plus récent en haut.
Les enregistrements sont écrits et sauvegardés par l’IA, donc le journal ne vous prend pas de temps supplémentaire. Les dièses `###` en début de ligne indiquent un titre ; ce format s’appelle [Markdown](glossary:markdown).

`AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. Plusieurs outils en mode Code le lisent automatiquement au début de chaque travail, donc vous n’avez pas à répéter la règle du worklog. Là où l’outil ne le fait pas, l’IA sauvegarde la règle dans ses paramètres ou vous indique où la placer.

Si vous utilisez seulement un chat classique, le worklog ne sera pas sauvegardé dans le dossier ; comment [passer en Cowork ou Code](card:when-chat-is-not-enough) est expliqué dans une carte séparée. Le chat complet et les petites modifications ne doivent pas figurer dans les enregistrements.
## Que le worklog s’écrive tout seul

La tâche planifiée complète le worklog même pour le travail hors dossier projet. La règle sauvegardée couvre le travail fait avec l’IA dans le dossier projet. Une partie du travail se fait ailleurs : e-mails, réunions ou autre chat. La tâche s’exécute chaque jour ouvré à 18h et complète les worklogs selon ce qui s’est passé ce jour-là. Donnez cette consigne à l’IA en mode Cowork ou Code et demandez-lui de créer la tâche planifiée :

```text
Chaque jour ouvré à 18h, passe en revue ce qui s’est passé aujourd’hui dans mes chats, fichiers modifiés, e-mails et réunions du calendrier. Pour chaque projet où quelque chose a été fait ou décidé aujourd’hui, ajoute en haut de son worklog un enregistrement dans le même format que les enregistrements précédents. Si rien ne s’est passé sur un projet, n’écris rien.
```

La tâche fonctionnera seulement si l’ordinateur est allumé et l’application ouverte.
## Exemple

Projet : nouvelle newsletter pour les clients. À partir des notes de la première réunion, l’IA écrit :

```text
### 2026-10-08 : Outil et fréquence de la newsletter
- Ce qui a été fait : nous avons comparé trois outils d’envoi et choisi celui déjà utilisé par le service commercial.
- Pourquoi : le service commercial y a les contacts, pas besoin de les transférer.
- Décision : la newsletter sera envoyée une fois par mois, le premier numéro sortira en novembre.
- Étape suivante : Petra préparera le modèle avant le 15/10.
```

Une semaine plus tard, dans un nouveau chat, vous demandez à quelle fréquence la newsletter doit être envoyée. La bonne réponse est : une fois par mois, selon l’enregistrement du 8/10. Si l’IA répond autrement, elle travaille probablement hors du dossier projet.
## En cas de blocage

- **L’IA affirme avoir sauvegardé l’enregistrement, mais il n’est pas dans le fichier :** vous travaillez probablement dans un chat classique qui ne peut pas modifier les fichiers. Passez en [Cowork ou Code](card:when-chat-is-not-enough) et ouvrez le dossier projet.
- **Le nouveau chat ne voit pas le worklog :** ouvrez le chat dans le même dossier projet, pas dans une fenêtre de chat classique.
- **L’IA ne complète pas le worklog après le travail :** demandez-lui où la règle du worklog est sauvegardée. Elle doit être dans `AGENTS.md` du dossier projet, et si votre outil ne la lit pas, aussi référencée dans ses paramètres.
- **Les enregistrements sont trop longs :** demandez à l’IA de les réduire à quatre lignes chacun.
## Ce qui sera prêt

Vous avez un worklog projet avec les premiers enregistrements et la règle sauvegardée qui permet à l’IA de le compléter après chaque travail. Dans un nouveau chat, vous avez vérifié que l’IA connaît vos décisions via le worklog et ne propose pas à nouveau ce que vous avez déjà rejeté.
## Et ensuite

Résumez l’état actuel du projet sur une [page d’accueil du projet](card:project-start-here). Les autres règles selon lesquelles l’IA travaille sur le projet seront consignées dans un [fichier de règles pour l’IA](card:agents-md).
## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

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
