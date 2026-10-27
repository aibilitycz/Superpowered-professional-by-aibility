# Configurez une tâche planifiée : l'IA travaille seule à heure fixe

Un rapport que vous créez manuellement chaque semaine sera désormais préparé automatiquement par l'IA à l'heure que vous définissez.

## Configurez une tâche planifiée : l'IA travaille seule à heure fixe

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec un rapport que vous faites régulièrement.
## À quoi ça sert

Chaque lundi matin, vous sélectionnez dans un tableau les commandes avec une échéance dans les deux semaines et vous vérifiez où les documents manquent. Vous envoyez le résultat à la direction, cela prend une demi-heure, et la semaine où vous êtes en congé, la réunion commence sans rapport.

Il suffit de créer une fois le rapport complet avec l'IA et de lui faire rédiger la consigne ; la [tâche planifiée](glossary:task) la répétera ensuite automatiquement à l'heure définie.
## Ce qu'il faut préparer

- un rapport que vous faites régulièrement, avec sa dernière version comme modèle,
- l'accès aux documents dans un dossier, une application connectée, par exemple dans la messagerie ou sur le web,
- une IA capable de gérer des tâches planifiées ; où les trouver est indiqué dans le bloc « Dans votre outil ».
## Comment faire

1. Insérez le prompt et, après sa dernière ligne, décrivez le rapport souhaité et la source des documents. Pour des documents dans un dossier, ouvrez l'IA en mode Cowork ou Code dans ce dossier.
2. Indiquez à l'IA ce qui manque ou est superflu dans le rapport : ne gardez que ce qui sert à agir. Puis dites-lui quand la tâche doit s'exécuter et où livrer le résultat.
3. L'IA crée la tâche ou rédige la consigne et vous indique où la planifier. Vérifiez dans la liste des tâches planifiées la date de la première exécution ; ce qui manquera ensuite, l'IA l'ajoutera dans la consigne.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l'IA que vous utilisez au travail et, après la dernière ligne, écrivez votre rapport :

Je souhaite qu’un rapport que je fais régulièrement soit généré automatiquement. Je décris quel rapport c’est et d’où viennent les documents à la dernière ligne.

Commence par le faire entièrement avec les données d’aujourd’hui. Trouve toi-même les documents dans le dossier où tu travailles, dans les applications connectées ou sur le web. Si tu trouves une version précédente de mon rapport, respecte sa forme. À la fin du rapport, indique les sources. Si tu ne sais pas où chercher les documents, demande-moi.

Ensuite, attends que je révise le rapport et intègre mes corrections. Puis rédige la consigne pour la tâche planifiée : d’où prendre les documents, quoi en extraire et à quoi doit ressembler le rapport. Ajoute la règle : si une source manque ou n’est pas entièrement chargée, ne fais pas le rapport et informe-moi de ce qui manque.

Demande-moi quand la tâche doit s’exécuter et où livrer le résultat, et propose-moi les options disponibles ici. Ensuite, crée la tâche planifiée toi-même et indique-moi la date de la première exécution et où trouver le résultat. Si tu ne sais pas la créer ici, rédige la consigne pour que je puisse la copier dans un outil qui le permet, et dis-moi où.

Rapport :

## Dans votre outil

### Microsoft Copilot
Insérez le prompt dans Copilot Cowork sur `copilot.cloud.microsoft` (sélecteur Cowork en haut à côté de Chat) et joignez le tableau avec le bouton + depuis OneDrive. La tâche sera créée automatiquement quand vous indiquerez l’heure d’exécution ; vous la trouverez avec les résultats dans la page Automations. Elle s’exécute dans le cloud, vous pouvez donc fermer votre ordinateur portable. Sans Cowork, dans Copilot Chat, survolez le message avec la consigne et choisissez Schedule this prompt.

### ChatGPT
Dans ChatGPT, la tâche est créée sur demande dans le chat ; les tâches et leurs résultats sont dans le panneau gauche sous Scheduled. Cette tâche utilise les documents des applications connectées, par exemple un disque partagé configuré dans Plugins, et du web, et s’exécute même hors ligne. Pour un dossier local, Codex dans l’application ChatGPT pour ordinateur travaille avec ; cette tâche nécessite que l’ordinateur soit allumé et l’application ouverte.

### Claude
Dans Claude Cowork, l’IA prépare la tâche que vous confirmez avec le bouton Schedule ; le rapport est dans le panneau gauche sous Scheduled. La tâche avec connecteurs s’exécute même ordinateur éteint, la tâche avec dossier local nécessite ordinateur allumé et application Claude ouverte. Avec la messagerie connectée, l’IA peut aussi livrer le résultat sous forme de brouillon d’e-mail.

### Gemini
Dans l’application Gemini, tapez @, choisissez Disk ou Gmail et insérez le prompt ; pour un tableau sur Disk, ajoutez son nom. Quand vous indiquez à Gemini quand et à quelle fréquence exécuter la tâche, elle est planifiée ; les tâches sont dans le panneau gauche sous Scheduled et le résultat final apparaît comme non lu, avec notification sur mobile. Vous pouvez avoir jusqu’à 10 tâches simultanées, et votre édition Google Workspace doit le permettre avec un compte professionnel.
## Qu’est-ce qu’une tâche planifiée

Une tâche planifiée (scheduled task en anglais) est une consigne que l’IA exécute seule à l’heure définie, par exemple chaque jour ouvré à 8h00 ou une fois par semaine. Quand la tâche s’exécute, l’IA ne peut pas poser de questions, donc la consigne doit contenir tout ce dont elle a besoin. Vous pouvez consulter et modifier la consigne à tout moment dans la liste des tâches planifiées.

Une tâche qui utilise uniquement des documents des applications connectées et du web s’exécute même ordinateur éteint. Une tâche qui travaille avec un dossier local nécessite que l’ordinateur soit allumé et l’application IA ouverte. Il est donc plus simple de commencer avec un rapport basé sur le web, par exemple des actualités de votre secteur, car rien n’est à connecter. Vous connectez les applications dans les paramètres de votre outil IA ; dans un compte professionnel, l’administrateur doit parfois l’autoriser.
## Autres rapports pouvant être automatisés

Quand vous recevez votre premier rapport, vous pouvez créer les suivants dans le même chat en une ou deux phrases, et l’IA vous demandera ce qui manque. Par exemple :

- « Chaque jour ouvré à 9h00 et 15h00, indique-moi combien nous avons dépensé en publicité et le coût d’acquisition d’un nouveau client. Si ce coût augmente de plus de 20 %, mets-le en première ligne. »
- « Chaque jour ouvré à 17h30, vérifie les changements dans le dossier projet et ajoute en haut du journal projet un bref résumé des actions et décisions. »
- « Chaque lundi à 7h30, trouve sur le web les nouveautés de notre secteur de la semaine passée et résume-moi les cinq plus importantes avec un lien vers la source. »

Pour un rapport qui surveille des changements, par exemple les dépenses publicitaires, il est utile d’ajouter « Si rien n’a changé, ne rien envoyer. » Un rapport vide sera vite ignoré.
## Exemple

Tereza coordonne les commandes dans une petite entreprise de construction et chaque lundi envoie à la direction un rapport des commandes avec échéance dans les deux semaines et documents manquants. Elle a le tableau des commandes sur OneDrive professionnel et l’IA est connectée à Microsoft 365, donc OneDrive et Outlook. Le lundi 28 septembre 2026, elle insère le prompt et écrit après la dernière ligne :

```text
Rapport hebdomadaire des commandes pour la direction depuis le tableau Commandes 2026 sur OneDrive : échéances dans 14 jours et documents manquants.
```

L’IA inclut dans le rapport deux commandes clôturées. Tereza écrit « seulement ouvertes » et l’IA corrige le rapport. Elle choisit ensuite chaque lundi à 8h30 et le résultat comme brouillon d’e-mail pour la direction. L’IA crée la tâche, et comme elle travaille uniquement avec OneDrive et la messagerie, elle s’exécute même ordinateur éteint. Le lundi 5 octobre à 8h30, le brouillon est prêt :

```text
### Commandes au 5 octobre 2026
Échéance dans 14 jours :
- École Kolín, rénovation : livraison le 12/10, rapport de contrôle électrique manquant.
- Halle Mladá Boleslav : réception le 16/10, documents complets.
Documents manquants :
- Immeuble résidentiel Nymburk : procès-verbal signé de réception de la façade.
Source : tableau Commandes 2026 sur OneDrive, feuille Ouvertes.
```

Tereza envoie l’e-mail et écrit dans le chat qu’elle veut aussi le nom du chef de chantier pour chaque commande. L’IA ajoute cela à la consigne et à partir du 12 octobre, le rapport l’inclut.
## En cas de blocage

- **L’IA répond qu’elle ne sait pas planifier les tâches :** votre outil ne propose pas de tâches planifiées ou elles ne sont pas activées dans votre compte professionnel. L’IA vous fournira la consigne complète ; copiez-la dans un outil qui gère les tâches et demandez à l’administrateur d’activer la fonction si besoin. Plus d’infos dans la fiche [Chat, Cowork ou Code](card:when-chat-is-not-enough).
- **La tâche ne s’est pas lancée ou n’a pas trouvé le fichier :** elle travaille avec un dossier local et l’ordinateur était éteint ou l’application fermée. Programmez l’exécution quand vous êtes à l’ordinateur ou placez les documents sur un disque partagé connecté à l’IA.
- **Le rapport affiche chaque semaine les mêmes chiffres :** la tâche lit un fichier que vous avez téléchargé dans le chat, qui ne se met pas à jour automatiquement. Placez le tableau sur un disque partagé connecté à l’IA et demandez-lui d’ajuster la consigne.
- **Le rapport contient des chiffres anciens ou manquants :** dites à l’IA ce qui ne va pas pour qu’elle trouve la cause et corrige la consigne. Plus d’infos dans la fiche [Vérifiez la sortie IA](card:kontrola-vysledku).
## Ce qui sera prêt

Vous avez un premier rapport avec des données actuelles, que vous avez révisé et corrigé, et une tâche planifiée qui le préparera automatiquement à la prochaine échéance. Vous savez quand elle s’exécutera pour la première fois et où trouver le résultat. Ce qui manquera après la première exécution sera ajouté par l’IA dans la consigne.
## Et ensuite

Si vous souhaitez préparer directement l’étape suivante à partir du rapport, par exemple les documents pour une réunion, ajoutez-le à la consigne de la tâche et [enregistrez la procédure comme compétence](card:create-skill-from-proven-process).
## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Tâche planifiée

**Qu'est-ce que c'est :** Un travail que l'outil lance selon un horaire ou un événement et dont le résultat est livré sans que vous ayez à le demander à chaque fois. La disponibilité et le nom varient selon l'outil et le compte.

**Ce que ce n'est pas :** Une compétence ni un assistant. Ceux-ci attendent qu'on les utilise, la tâche se lance automatiquement.

**Pourquoi l'étudiant en a besoin :** Cela aide à distinguer quand une procédure enregistrée suffit et quand il faut quelque chose qui s'exécute sans demande. Cela soulève aussi la question de qui surveille le résultat et ce qui se passe si la tâche s'exécute sur de mauvaises données.

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

## Sauvegarder pour la prochaine fois

Mécanique produit optionnelle après la création d'un résultat utilisable. Ce n’est pas une carte autonome, elle n’a pas de finalisation propre et n’augmente pas le nombre de méthodes complétées.

## Quand elle est proposée
- la personne a marqué le résultat comme utilisable,
- une instruction corrigée, un style, un arbre de décision, un transfert ou un autre élément répétable a été créé pendant le travail,
- le même type de travail est susceptible de revenir.

La mécanique ne s’affiche pas pour un résultat ponctuel sans partie transférable ou lorsque la sauvegarde sécurisée n’est pas claire.

## Ce que la personne voit
Un choix court **Sauvegarder pour la prochaine fois** à côté du check-in commun. Après ouverture, l’IA propose automatiquement :

- ce qui du résultat est réutilisable,
- ce qui changera à chaque fois,
- ce que la personne doit vérifier lors de la prochaine utilisation.

La personne confirme ou corrige la proposition. La mécanique ne crée pas de formulaire obligatoire supplémentaire.

## Ce que crée l’IA
Le plus petit résultat réutilisable correspondant au travail réel :

- une préférence personnelle courte,
- une instruction ou un prompt,
- une note en Markdown ou dans un second cerveau,
- une mise à jour de projet ou d’assistant,
- une base pour une compétence,
- une modification d’un workflow existant.

Si un artefact approprié existe déjà, l’IA met à jour sa version actuelle au lieu de créer une copie supplémentaire.

## Où le contenu appartient
| Type de contenu | Emplacement par défaut |
|---|---|
| Petite préférence personnelle sans étapes de processus | mémoire ou profil, si cette fonction est disponible et adaptée |
| Instruction canonique, exemple ou description de procédure | Markdown, document ou second cerveau personnel |
| Contexte limité à un seul projet | instructions et fichiers du projet |
| Rôle répétée avec contexte stable | assistant |
| Procédure stable avec règles, exemples et modèles | compétence |
| Plusieurs étapes consécutives | workflow ; pour le choix des étapes et actions, éventuellement branche agentielle |

La mémoire n’est pas un stockage canonique de procédure versionnée. Elle peut conserver une préférence ou un lien vers la source actuelle.

## Quand la forme cible n’est pas claire
La mécanique crée un transfert succinct vers la carte [Créez un projet dans votre outil IA](card:asistent). Elle ne choisit pas de forme sans intervention humaine et ne remplace pas une carte compétence autonome.

## Sécurité et partage
- La mécanique utilise des stockages approuvés connus et les règles d’entreprise.
- Les données du cas spécifique sont séparées de la partie stable.
- Sans autorisation, rien n’est écrit dans le système partagé ni aucun accès modifié.
- Le partage en équipe commence après réutilisation répétée, désignation d’un propriétaire et validation par une autre personne.

## Traçabilité
Une information peut être ajoutée au check-in indiquant qu’un artefact réutilisable a été créé ou modifié. Ce n’est pas une complétion de carte indépendante.

## Premières cartes supportées
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
