# Convoquez un panel d’experts : opposition par l’IA

L’IA joue le rôle de trois à cinq spécialistes, dont un sceptique, et analyse votre proposition avant que la direction ou le client ne la voient.

## Convoquez un panel d’experts : opposition par l’IA

**Difficulté : facile.**\
**Durée : environ 20 minutes** avec une proposition presque finalisée.
## À quoi ça sert

Jeudi, vous présentez à la direction un plan pour que l’entreprise adopte un nouveau système de pointage d’ici la fin de l’année. Vous le relisez pour la troisième fois et ne voyez plus d’erreurs. Vos collègues n’ont pas le temps, donc les faiblesses ne seront révélées qu’en réunion, où le plan risque d’être rejeté.

Le panel d’experts vous fournit une opposition, c’est-à-dire une évaluation critique de la proposition, avant la réunion : vous entendrez deux jours plus tôt les objections qui seraient soulevées, et vous déciderez vous-même des modifications.
## Ce qu’il faut préparer

- une proposition presque finalisée, par exemple un plan de projet ou une offre,
- les documents sources, comme le cahier des charges, le budget ou un e-mail,
- l’IA que vous utilisez au travail, ou une IA en [mode Cowork ou Code](glossary:workmode).
## Comment faire

1. Insérez le prompt ; dans le chat, joignez la proposition et les documents. L’IA vous demandera à qui s’adresse la proposition, proposera un panel et, après votre confirmation, laissera le panel analyser la proposition.
2. Sélectionnez parmi les modifications recommandées celles que vous acceptez, et pour les autres expliquez pourquoi vous refusez. L’IA intègre les modifications acceptées, sauvegarde la nouvelle version, le compte-rendu et la procédure pour la prochaine fois.
3. Donnez la nouvelle version avec le compte-rendu à une seconde IA, de préférence d’une autre entreprise : « Trouve ce que le panel a manqué. » Sans seconde IA, ouvrez un nouveau chat avec un modèle différent ou un [niveau de réflexion](glossary:reasoning-mode) plus élevé.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Convoque un panel d’experts qui s’oppose à ma proposition avant que je la transmette. La proposition est dans ce dossier, ou je peux te la joindre ; si tu ne sais pas quel fichier c’est, demande-moi.

Lis la proposition et demande-moi à qui elle s’adresse et ce qui ne doit pas échouer. En fonction, choisis trois à cinq experts comme rôles professionnels qui liraient vraiment la proposition, la mettraient en œuvre ou en subiraient les conséquences. L’un d’eux est un sceptique qui cherche pourquoi la proposition échouerait. Au maximum deux peuvent venir du même domaine. Pour chacun, écris en une phrase pourquoi il fait partie du panel, et attends que je confirme ou modifie la composition.

Puis laisse le panel discuter la proposition en quatre tours :
1. Positions : chaque expert dit ce qui tient dans la proposition et ce qui le dérange le plus.
2. Opposition : les experts réagissent les uns aux autres et le sceptique attaque l’hypothèse la plus faible.
3. Résumé : sur quoi ils sont d’accord, où le désaccord persiste et ce que le débat a produit de nouveau.
4. Faisabilité : ce qui peut mal tourner lors de la mise en œuvre et ce que cela coûterait selon les documents.

Chaque expert parle au maximum en deux phrases par tour. En cas de désaccord, laisse-le tel quel, ne cherche pas de compromis. Vérifie dans les documents les chiffres et faits sur lesquels reposent les arguments. Marque ce qui ne peut être vérifié.

À la fin, écris les modifications recommandées classées par bénéfice. Pour chacune, indique qui du panel l’a proposée et qui est en désaccord. Ne décide pas à ma place et attends que je choisisse les modifications à accepter.

Ensuite :
- Intègre les modifications acceptées et sauvegarde la proposition comme nouvelle version au même format à côté du fichier original.
- Sauvegarde le compte-rendu du panel dans un fichier nommé comme la proposition avec le suffixe -panel.md. Note-y la composition du panel, les objections principales, les modifications acceptées et refusées, et pourquoi.
- Note la procédure pour la prochaine fois dans un fichier expert-panel.md dans ce dossier : comment composer et diriger le panel, et qui nous avons choisi pour ce type de proposition. Si le fichier existe, complète-le.

Si tu n’as pas accès au dossier, donne-moi la nouvelle version de la proposition au même format que l’original, le compte-rendu et expert-panel.md en fichiers téléchargeables.

## Dans votre outil

### Microsoft Copilot
Joignez la proposition et les documents dans Copilot Chat via + près du champ de message. Copilot vous écrira la nouvelle version et le compte-rendu dans le chat et, avec la licence, les sauvegardera comme documents Word dans OneDrive via l’agent Word dans le menu Outils ou Agents. La procédure pour la prochaine fois est mémorisée si vous écrivez « Mémorise la procédure du panel d’experts. »
Pour la seconde lecture, ouvrez un nouveau chat et choisissez Think deeper en haut à droite.

### ChatGPT
Dans un chat classique, joignez la proposition ; ChatGPT vous fournira la nouvelle version, le compte-rendu et la procédure en fichiers téléchargeables. Codex, le mode dans l’application ChatGPT pour ordinateur, gère les dossiers et sauvegarde les fichiers à côté de la proposition. Pour la seconde lecture, ouvrez un nouveau chat et choisissez High ou Extra High dans le champ de message.

### Claude
Dans un chat classique, Claude crée la nouvelle version et le compte-rendu en fichiers téléchargeables. En mode Cowork, sélectionnez le dossier contenant la proposition lors de la tâche, et l’IA y sauvegarde les fichiers. Pour la seconde lecture, dans un nouveau chat, choisissez un modèle différent ou un Effort plus élevé dans le menu à côté du bouton d’envoi.

### Gemini
Joignez la proposition via Add files depuis l’ordinateur ou Google Drive. Écrivez « Écris seulement la nouvelle version de la proposition » et sauvegardez la réponse via Share & export › Export to Docs comme Document Google ; faites de même pour le compte-rendu et la procédure. Pour la seconde lecture, ouvrez un nouveau chat, cliquez sur le nom du modèle en bas du champ de message et choisissez Pro avec un niveau de réflexion High si votre licence le permet.
## Qu’est-ce qu’un panel d’experts

Un panel d’experts est un groupe de spécialistes qui évaluent ensemble une proposition. Ici, tous les experts sont joués par une seule IA : par exemple une personne de la direction qui approuve le plan, un collègue qui le réalisera, et un sceptique qui cherche pourquoi le plan échouerait. Les experts s’opposent entre eux et résument à la fin ce que le débat révèle. Leurs points de vue sont simulés et les chiffres sur lesquels ils s’appuient doivent être vérifiés. Utile pour toute proposition difficile à retirer après envoi.

Une IA jouant cinq experts peut avoir un angle mort commun. C’est pourquoi une seconde IA, de préférence d’une autre entreprise, lit la nouvelle version. Chaque modèle, donc chaque version d’IA, passe à côté de choses différentes, donc la seconde trouve souvent ce que le panel a manqué.

`expert-panel.md` et le compte-rendu finissant par `-panel.md` sont des fichiers texte ordinaires dans le dossier. L’extension `.md` signifie qu’ils sont écrits en [Markdown](glossary:markdown), un format simple de texte.
## Que le panel se convoque tout seul

Si vous rédigez les propositions avec l’IA dans le même dossier, vous n’avez pas besoin de convoquer le panel manuellement. Il suffit d’une règle dans `AGENTS.md`, le fichier des règles pour l’IA dans le dossier. L’IA en mode Cowork ou Code la lit au début de chaque travail et, là où l’outil doit la configurer, elle le fait selon l’instruction ci-dessous. Pour chaque plan ou offre finalisé, elle convoque automatiquement le panel et vous montre les modifications recommandées avant de vous transmettre la proposition. La règle s’écrit automatiquement si vous lui dites :

```text
Ajoute dans le fichier AGENTS.md de ce dossier la règle : « Avant de me transmettre un plan ou une offre finalisé, convoque un panel d’experts selon expert-panel.md et montre-moi les modifications recommandées. Je décide lesquelles j’accepte. » Si AGENTS.md n’existe pas, crée-le. Assure-toi que l’IA lise AGENTS.md au début de chaque travail dans cet outil ; en mode Cowork, inscris-le dans les instructions du dossier.
```
## Exemple

Petra coordonne dans une entreprise logistique de 140 personnes la transition vers un nouveau système de pointage. Le mardi 13/10/2026, elle a un plan prêt pour la direction : lancement le 1/12 dans les trois entrepôts simultanément et budget de 380 000 CZK. Jeudi, elle le présente en réunion. L’IA lui propose un panel : directeur financier qui approuve le plan, chef d’équipe de l’entrepôt, comptable paie et un sceptique. Petra confirme le panel et après quatre tours reçoit :

```text
Modifications recommandées, classées par bénéfice

1. Date : le 1/12 commence la pointe pré-Noël, les entrepôts fonctionnent en trois équipes et il n’y aura pas de temps pour la formation. Lancer d’abord un entrepôt en novembre, les deux autres en janvier.
   Proposé par : chef d’équipe. Désaccord : aucun.
2. Salaires : la transition en milieu de mois implique deux enregistrements pour un seul paiement. Chaque entrepôt doit démarrer le premier jour du mois.
   Proposé par : comptable paie. Désaccord : aucun.
3. Lecteurs : supprimer les nouveaux lecteurs à 120 000 CZK du plan, selon l’offre du fournisseur les anciens fonctionnent aussi avec le nouveau système.
   Proposé par : directeur financier. Désaccord : sceptique, dans l’entrepôt B deux des cinq anciens lecteurs sont hors service.
```

Petra accepte les deux premières modifications et conserve les nouveaux lecteurs dans le plan, car dans l’entrepôt B elle devrait de toute façon remplacer les anciens. L’IA sauvegarde la nouvelle version du plan, le compte-rendu dans `plan-dochazka-panel.md` et la procédure dans `expert-panel.md`. Puis Petra joint la nouvelle version avec le compte-rendu à une seconde IA utilisée par l’entreprise et provenant d’une autre société. Celle-ci remarque que le plan ne précise pas qui et quand informera les employés du changement, donc l’IA ajoute un e-mail à tous les employés une semaine avant le lancement. Jeudi, la direction approuve le plan.
## En cas de blocage

- **Tous les experts disent presque la même chose :** demandez à l’IA de remplacer l’un d’eux par une personne à qui la proposition ajoutera du travail ou coûtera de l’argent, et de rendre le sceptique plus sévère.
- **Le panel parle de façon générale et ne connaît pas votre situation :** ajoutez dans le dossier le cahier des charges ou l’e-mail source de la proposition, et faites répéter un tour d’opposition à l’IA. Pour que l’IA connaisse toujours votre contexte, inscrivez-le dans le [fichier de règles pour l’IA](card:agents-md).
- **Un argument repose sur un chiffre non vérifié :** faites-le rechercher via [Deep Research](card:deep-research), mode où l’IA consulte elle-même les sources web, puis modifiez la proposition en conséquence.
- **Les tours sont trop longs à lire :** contentez-vous de la liste des modifications recommandées à la fin. Consultez les tours seulement si vous ne comprenez pas pourquoi un expert propose quelque chose.
## Ce qui sera prêt

Vous avez une nouvelle version de la proposition analysée par le panel d’experts et relue par une seconde IA, avec uniquement les modifications que vous avez acceptées. À côté se trouve le compte-rendu, qui vous permet, ainsi qu’à un collègue, de comprendre pourquoi vous avez accepté ou refusé chaque modification. Dans `expert-panel.md` figure la procédure selon laquelle l’IA convoquera le panel la prochaine fois, quand vous écrirez « Convoque un panel d’experts selon expert-panel.md pour cette proposition ». Dans un chat classique, joignez cette phrase, `expert-panel.md` et la proposition ; si l’IA a la procédure en mémoire, la proposition suffit.
## Et ensuite

Comparez les chiffres et affirmations que le panel a marqués pour vérification avec les documents selon la carte [Vérifiez la sortie IA](card:kontrola-vysledku). Pour avoir le panel disponible dans chaque dossier, faites créer à l’IA un [skill](card:create-skill-from-proven-process) à partir de `expert-panel.md`, c’est-à-dire un guide que l’IA charge automatiquement dès que vous écrivez « convoque un panel d’experts ».
## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Mode de raisonnement approfondi

**Qu'est-ce que c'est :** Une option où l'IA consacre plus de temps de calcul à l'analyse de la tâche avant de générer une réponse. La mise en œuvre spécifique et le nom dépendent du produit.

**Ce que ce n'est pas :** Ce n'est pas une garantie automatique de justesse ni toujours le meilleur choix pour chaque tâche.

**Pourquoi l'étudiant en a besoin :** Cela aide à décider quand la complexité ou l'importance de la tâche justifie un temps d'attente plus long, une consommation accrue ou une disponibilité limitée.

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
