# Connectez le connecteur : l'IA travaille directement dans vos applications

L'IA parcourt elle-même vos e-mails et enregistre les brouillons de réponses directement dans la boîte de réception.

## Connectez le connecteur : l'IA travaille directement dans vos applications

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec messagerie et calendrier professionnels.
## À quoi ça sert

Avant la réunion de mardi, vous souhaitez traiter cinq e-mails en attente depuis la semaine dernière.
Vous copiez chacun dans le chat et recopiez la réponse dans la messagerie. Au troisième, vous découvrez que
le rendez-vous proposé par l'IA est déjà pris dans votre calendrier.

Le connecteur est un lien entre l'IA et l'application : l'IA lit la messagerie et le calendrier via ce lien, donc
vous ne copiez rien et elle ne proposera pas un rendez-vous déjà occupé.
## Ce qu'il faut préparer

- accès à la messagerie et au calendrier professionnels ; la connexion à l'IA est parfois activée par l'administrateur,
- l'IA que vous utilisez au travail ; les connecteurs disponibles sont indiqués dans le bloc « Dans votre
  outil »,
- pour le mode Cowork ou Code, un dossier pour les règles, par exemple un nouveau dossier vide `Messagerie`.
## Comment faire

1. Insérez le prompt. L'IA détectera les connecteurs disponibles pour la messagerie et le calendrier, connectera ceux
   accessibles et indiquera où cliquer pour les autres. Vous confirmez la connexion vous-même.
2. L'IA sélectionnera jusqu'à cinq e-mails de la dernière semaine auxquels vous devez répondre ; elle comptera les newsletters
   et copies. Les brouillons seront enregistrés dans la boîte de réception, vous les vérifierez, modifierez et enverrez.
3. Dans un nouveau chat, écrivez simplement « Réponds au dernier e-mail en attente de réponse. » L'IA doit enregistrer le brouillon
   et vérifier le rendez-vous dans le calendrier.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l'IA que vous utilisez au travail :

Connecte-toi à ma messagerie et mon calendrier professionnels et commence directement le travail, pour que je n’aie rien à copier dans le chat.

Demande-moi quelle messagerie et quel calendrier j’utilise au travail. Puis découvre quels connecteurs ou plugins tu as ici pour eux. Si un plugin couvre plusieurs de mes applications à la fois, privilégie-le. Connecte ce que tu peux automatiquement. Là où je dois agir, par exemple me connecter ou autoriser l’accès, indique-moi précisément où cliquer et attends que je le fasse. Accède à la messagerie et au calendrier uniquement via les connecteurs. Après connexion, vérifie que le connecteur peut enregistrer des brouillons d’e-mails. S’il ne peut pas, trouve un autre connecteur ou plugin. Si aucun n’est disponible, connecte la messagerie via le service Composio, et si ce n’est pas possible ici, indique-moi où basculer.

Une fois tout connecté, fais ceci :
- Parcours la messagerie des sept derniers jours et sélectionne jusqu’à cinq e-mails auxquels je n’ai pas encore répondu mais dois répondre, du plus urgent au moins urgent. Pour chacun, indique l’expéditeur, le sujet et la date limite de réponse.
- Rédige une réponse pour chacun et enregistre-la comme brouillon directement dans ma boîte de réception. Si la réponse dépend d’un rendez-vous, consulte le calendrier pour vérifier mes disponibilités.
- N’envoie pas les brouillons, je les vérifierai et enverrai moi-même.

Enfin, enregistre une règle pour la prochaine fois : quelles applications tu as connectées, que tu enregistres les réponses comme brouillons et que tu vérifies les rendez-vous dans le calendrier. Si tu travailles dans un dossier, écris-la dans le fichier AGENTS.md, et s’il n’existe pas, crée-le. Assure-toi que tu lis AGENTS.md au début de chaque travail dans cet outil ; dans Cowork, inscris-le dans les instructions du dossier. Dans un chat classique, mémorise la règle.

## Dans votre outil

### Microsoft Copilot
Insérez le prompt dans Copilot Cowork sur `copilot.cloud.microsoft` (sélecteur Cowork en haut à côté du chat) ; la messagerie et le calendrier sont connectés directement et aucun dossier n’est nécessaire.
Les réponses sont enregistrées comme brouillons dans Outlook et la règle comme compétence. Sans Cowork, Copilot Chat prépare aussi les brouillons et mémorise la règle sous Personalization.
Les tâches planifiées se trouvent dans la page Automations.

### ChatGPT
Le connecteur pour Outlook ou Gmail s’active dans les paramètres sous Plugins, dans un nouveau chat via + à côté du champ de message. Les brouillons sont enregistrés dans les abonnements Plus, Pro, Business et Enterprise ; en entreprise, l’administrateur active l’enregistrement. ChatGPT mémorise la règle en mémoire, Codex dans `AGENTS.md`. Les tâches planifiées sont sous Scheduled.

### Claude
Les connecteurs se trouvent dans le panneau gauche sous Customize, Connectors, dans un nouveau chat ils s’activent via + à côté du champ de message. Le connecteur Microsoft 365 enregistre les brouillons uniquement si l’administrateur autorise l’écriture. En mode Cowork, l’IA connecte automatiquement le connecteur et inscrit la règle dans les instructions du dossier. Les tâches planifiées sont sous Scheduled.

### Gemini
Dans l’application Gemini, tapez @, sélectionnez Gmail et Calendrier et insérez le prompt ; à la proposition Composio, répondez « continue seulement avec Gmail et Calendrier ». Gemini trouve les e-mails et propose les réponses, mais le brouillon est enregistré par Gemini dans Gmail via Ask Gemini en haut à droite. Faites enregistrer la règle comme compétence (Customize, Skills), les tâches planifiées sont sous Scheduled.
## Qu’est-ce qu’un connecteur et un plugin

Un connecteur relie l’IA à une application. Selon ses capacités, l’IA peut seulement chercher et lire, ou aussi écrire : enregistrer un brouillon d’e-mail ou créer un rendez-vous dans le calendrier. Vous connectez de même un CRM, c’est-à-dire un système de gestion clients et ventes, ou un disque partagé. Dans les paramètres, le connecteur est parfois appelé serveur MCP ; MCP est une norme technique par laquelle l’IA se connecte aux applications, sans autre détail nécessaire.

Un plugin est un package pour un travail spécifique. Il ajoute plusieurs connecteurs et instructions pour que l’IA travaille dans ces applications, par exemple pour la vente : CRM, e-mail et procédure pour rédiger une offre.

Si aucun connecteur n’existe pour votre application ou si la messagerie est en lecture seule, utilisez Composio. C’est un service qui connecte l’IA à plus de mille applications, comme Outlook, Gmail ou CRM, et peut enregistrer des brouillons dans la messagerie. Il se configure en mode Cowork ou Code et l’IA le fait automatiquement ; vous créez juste un compte Composio et confirmez l’accès aux applications. Le compte de base est gratuit et ne demande pas de carte bancaire. En entreprise, demandez à l’IT avant de l’utiliser.

`AGENTS.md` est un fichier texte simple avec les règles pour l’IA dans le dossier où vous travaillez. L’IA en mode Code le lit au début de chaque travail, vous n’avez donc pas à expliquer les applications connectées à chaque fois.
## Laissez l’IA parcourir la messagerie seule

Avec la messagerie et le calendrier connectés, l’IA peut chaque matin parcourir la messagerie pour vous.
Il suffit d’une tâche planifiée que l’IA lance chaque jour ouvré le matin et qui laisse les brouillons de réponses dans votre boîte. Insérez cette consigne dans l’IA et demandez-lui de créer la tâche planifiée. Où trouver les tâches planifiées dans votre outil est indiqué dans le bloc « Dans votre outil ».

```text
Chaque jour ouvré à 7h30, parcours via le connecteur les e-mails reçus depuis la dernière exécution. Sélectionne les e-mails auxquels je n’ai pas encore répondu mais dois répondre, du plus urgent au moins urgent, et pour chacun enregistre un brouillon de réponse dans la boîte. Vérifie les rendez-vous dans le calendrier. Si rien ne nécessite de réponse, ne rédige rien.
```
## Exemple

Jana coordonne le déménagement du bureau dans un nouveau bâtiment. Le lundi 12/10 au matin, elle a 38 e-mails non lus dans sa boîte. Après connexion d’Outlook et du calendrier, l’IA renvoie :

```text
À répondre (4 sur 38 e-mails)

1. Société de déménagement : souhaite confirmer le déménagement du 24/10. Répondre aujourd’hui.
   Brouillon : confirmation du rendez-vous, la date est libre dans le calendrier.
2. Petr de l’IT : demande quand il peut connecter le réseau au nouvel étage. Répondre avant mercredi.
   Brouillon : propose jeudi 15/10 à 9h00, date libre dans le calendrier.
3. Fournisseur de mobilier : a besoin de la date de signature du procès-verbal de réception. Répondre avant vendredi.
   Brouillon : je signerai le procès-verbal lors de la réception du mobilier le 22/10.
4. Direction : souhaite un bref état d’avancement pour la réunion de vendredi.
   Brouillon : déménagement 24/10, réseau 15/10, mobilier 22/10.

Les brouillons sont enregistrés dans la boîte. Les 34 autres e-mails sont des newsletters et copies pour information.
```

Jana vérifie les brouillons, modifie l’heure pour Petr à 10h00 et envoie les quatre. Le lendemain matin, dans un nouveau chat, elle écrit simplement « Réponds au dernier e-mail en attente de réponse. » L’IA trouve la demande de la réception pour le nombre de badges de parking, vérifie la date dans le calendrier et enregistre le brouillon dans la boîte.
## En cas de blocage

- **Le connecteur est absent ou ne s’active pas dans les paramètres :** demandez à l’IA s’il existe pour votre application. S’il existe, l’administrateur l’active probablement en entreprise et l’IA lui enverra une courte demande : quel connecteur vous voulez et pourquoi. S’il n’existe pas, connectez l’application via Composio.
- **Le connecteur ne fait que lire la messagerie :** en mode Cowork ou Code, demandez à l’IA de connecter la messagerie via Composio ou de trouver un autre connecteur qui peut aussi enregistrer des brouillons. Passez d’un chat classique à [Cowork ou Code](card:when-chat-is-not-enough).
- **L’IA dit qu’elle ne voit pas la messagerie :** vérifiez que le connecteur est activé dans ce chat ; dans ChatGPT et Claude via le bouton + à côté du champ de message, dans Gemini par la mention @Gmail dans chaque nouveau chat. Si activé, la connexion a probablement échoué ou vous êtes connecté à un autre compte. Faites vérifier le compte par l’IA et reconnectez-le.
- **L’IA ne sauvegarde pas le brouillon ou ne vérifie pas le rendez-vous dans un nouveau chat :** en mode Cowork ou Code, écrivez : « Lis `AGENTS.md` et assure-toi de le lire au début de chaque travail automatiquement. » Dans un chat classique, demandez à l’IA si la règle est en mémoire ou dans les instructions, et si non, demandez-lui où la sauvegarder.
## Ce qui sera fait

Vous avez connecté l’e-mail et le calendrier à l’IA et envoyé les réponses aux e-mails les plus urgents de la dernière semaine. L’IA a enregistré la règle pour les brouillons et le calendrier, et dans un nouveau chat vous avez vérifié qu’elle travaille selon cette règle.
## Et ensuite

Pour que le passage matinal dans la messagerie s’exécute de façon fiable et signale les erreurs automatiquement, poursuivez avec la [tâche planifiée](card:recurring-ai-task). Si un travail génère deux étapes successives, par exemple un tableau à partir d’e-mails puis des réponses à partir du tableau, configurez un [workflow multi-applications](card:cross-app-workflow).
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
