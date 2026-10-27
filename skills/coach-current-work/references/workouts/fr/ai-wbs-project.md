# Créez un AI-WBS : plan de projet réparti entre humains et IA

L'IA détaille le plan du projet, indique pour chaque étape si elle est réalisée par un humain ou par l'IA, et exécute immédiatement sa première étape.

## Créez un AI-WBS : plan de projet réparti entre humains et IA

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec un projet qui démarre.
## À quoi ça sert

Lors d’une réunion, la direction vous confie le déménagement du bureau dans un nouveau bâtiment. Le déménagement a lieu le
1er février, et dans votre calendrier, vous n’avez pour l’instant qu’un seul élément « déménagement » sans savoir ce que l’IA peut gérer et quand vous aurez besoin des collègues IT et exploitation.

Un plan où chaque étape indique qui la réalise et ce qu’elle produit est stocké dans le dossier du projet, de sorte que le nouveau chat ou un collègue peuvent voir ce qui est terminé et ce qui vient ensuite.
## Ce qu’il faut préparer

- un dossier projet avec les documents : cahier des charges, e-mail de la direction ou compte rendu de réunion,
- quelques phrases sur l’objectif du projet, la date butoir et les personnes impliquées,
- une IA en mode Cowork ou Code, qui travaille directement avec les fichiers dans votre dossier.
## Comment faire

1. Ouvrez le dossier projet dans l’IA en mode Cowork ou Code (vous le trouverez dans le bloc « Dans votre outil »), insérez le prompt de l’exercice IA et en dessous, écrivez l’objectif, la date butoir et les personnes sur le projet.
2. L’IA affichera le plan sous forme de tableau et posera des questions. Répondez, corrigez la colonne « Qui le fera » et écrivez « Enregistre-le » : l’IA sauvegardera le plan, réalisera sa première étape et inscrira la règle dans `AGENTS.md`.
3. Ouvrez le résultat de la première étape et vérifiez-le. Si quelque chose ne va pas, écrivez-le à l’IA qui corrigera le fichier et le plan.

Avec un chat classique, reportez-vous à la section Quand vous êtes bloqué.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code, ouverte dans votre dossier :

Crée un AI-WBS pour ce projet : un plan complet du projet réparti entre humains et IA. Si tu n’as pas accès au dossier projet et ne peux pas y enregistrer toi-même des fichiers, dis-le-moi immédiatement pour que je puisse passer en mode Cowork ou Code.

Parcours les documents dans le dossier projet et mes notes sous cette consigne. Si un plan existe déjà dans le dossier, modifie-le sans en créer un nouveau.

Décompose tout le projet du début à la fin en cinq à dix étapes principales. Chaque étape se termine par un livrable visible : fichier, liste, décision ou commande. Ne saute pas les étapes ultérieures, mais décris-les plus brièvement. Classe les étapes pour produire rapidement quelque chose d’utilisable. Présente le plan sous forme de tableau à trois colonnes :
- Étape : ce qui sera fait.
- Qui le fera : personne précise ou IA avec le nom de la personne qui vérifiera le résultat.
- Résultat : livrable concret de l’étape.

Confie à l’IA tout ce qui peut être préparé à partir des documents. Confie à un humain les décisions, les interactions avec les personnes et les étapes impliquant envoi, publication, signature ou paiement. Si tu ne sais pas qui fera l’étape, écris un point d’interrogation sans inventer de nom.

Montre-moi le plan et écris en dessous toutes les questions auxquelles les documents ne répondent pas et qui pourraient modifier le plan. Attends ma réponse pour corriger ou confirmer le plan. Ensuite, sauvegarde-le sous plan-projet.md dans le dossier principal du projet et écris en haut le nom du projet, la date butoir et la date d’aujourd’hui. Si un README.md existe dans le dossier, ajoute-lui une ligne avec un lien vers le plan.

Fais immédiatement la première étape qui t’est assignée dans le plan et pour laquelle tu as les documents. Choisis une étape réalisable en quelques minutes. Enregistre le résultat dans le dossier projet, ajoute dans la colonne Résultat de cette étape le nom du fichier et le mot terminé, puis dis-moi ce que je dois vérifier.

Enfin, ajoute dans le fichier AGENTS.md du dossier projet la règle : « Avant de travailler sur le projet, lis plan-projet.md. Quand une étape du plan est terminée, ajoute dans la colonne Résultat où se trouve le livrable et le mot terminé. » Si AGENTS.md n’existe pas, crée-le. Assure-toi que tu le lises au début de chaque travail dans cet outil ; en mode Cowork, inscris-le dans les instructions du dossier.

Objectif, date butoir et personnes sur le projet :

## Dans votre outil

### Microsoft Copilot
Cowork est disponible dans Copilot à côté du bouton Chat ; si vous ne le voyez pas, demandez au service IT.
Il travaille avec les fichiers sur OneDrive et SharePoint, indiquez-lui où se trouve le projet et demandez-lui de sauvegarder le plan sous forme de tableau Excel ; dans Cowork, sous Customize, Preferences, laissez-lui « Avant de travailler sur le projet, lis le plan. » Sans Cowork, reportez-vous au point « L’IA ne sauvegarde pas le plan dans le dossier » dans la section Quand vous êtes bloqué, avec un projet dans Notebook (Bloc-notes).

### ChatGPT
Le dossier est géré par Codex dans l’application ChatGPT pour ordinateur : passez en mode Codex, choisissez open and folder et sélectionnez le dossier projet ; pas besoin de programmer. Codex lit `AGENTS.md` automatiquement et crée la tâche planifiée sur demande. Si vous ne voyez pas Codex, demandez à l’administrateur d’activer Allow members to use Codex locally, ou suivez la procédure pour un chat classique.

### Claude
Dans l’application Claude pour ordinateur, choisissez Cowork et dans le champ message Work in a folder. Claude Code lit `AGENTS.md` automatiquement, en mode Cowork l’IA inscrit dans les instructions du dossier, selon le prompt, de le lire. L’IA crée la tâche planifiée sur demande et vous la trouverez dans le panneau gauche sous Scheduled.

### Gemini
L’application Gemini avec un compte professionnel ne gère pas les dossiers sur ordinateur, procédez donc comme pour un chat classique : utilisez le robot Gem et exportez le tableau du plan via Exporter vers Sheets. Gemini CLI gère les dossiers si l’entreprise a une licence Gemini Code Assist Standard ou Enterprise ; il lit `AGENTS.md` uniquement s’il est activé dans les paramètres.
## Qu’est-ce que AI-WBS

AI-WBS signifie AI Work Breakdown Structure. La Work Breakdown Structure, soit la décomposition du travail en parties, est utilisée par les chefs de projet depuis des décennies. [AI-WBS](glossary:aiwbs) ajoute à chaque étape la question de savoir si elle est réalisée par un humain ou par l’IA. Un humain est responsable du résultat de chaque étape, même si l’IA la prépare, c’est pourquoi le nom du vérificateur figure à côté des étapes IA.

Le plan est un simple fichier texte `plan-projet.md` dans le dossier projet.
L’extension `.md` signifie un format [Markdown](glossary:markdown), facile à lire et modifier par l’IA. Ouvrez-le dans n’importe quel éditeur de texte, et si vous voulez l’envoyer aux collègues sous forme de tableau ou document, demandez-le simplement à l’IA.
Si le projet a un [README](card:project-start-here), page d’accueil du projet, l’IA y ajoute un lien vers le plan.

`AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. L’IA le lit au début de chaque travail, elle connaît donc le plan sans que vous ayez à le lui rappeler ; si l’outil ne le fait pas automatiquement, l’IA inscrit la consigne dans les paramètres du dossier selon le prompt. Si le dossier est partagé avec l’équipe, tous voient ces fichiers et l’IA lit les mêmes règles que vous.

Un chat classique ne sauvegarde pas le plan dans le dossier car il ne voit pas les dossiers sur l’ordinateur ; si vous n’avez rien d’autre, reportez-vous à la section chat classique dans Quand vous êtes bloqué. Si le projet est dans un stockage cloud partagé, il suffit que son dossier soit synchronisé sur l’ordinateur.

Si l’IA vous demande la permission d’enregistrer des fichiers dans le dossier, autorisez-la.
## Pour que le plan reste à jour

La règle dans `AGENTS.md` couvre le travail que vous faites avec l’IA dans le dossier projet. Mais les collègues terminent leurs étapes hors dossier, par exemple par e-mail ou réunion, et leurs fichiers y sont ajoutés sans l’IA. Pour cela, créez une tâche planifiée que l’IA exécutera chaque semaine : elle marquera les étapes terminées et fera la prochaine étape qui lui est assignée. Insérez dans l’IA en mode Cowork ou Code cette consigne et demandez-lui de créer la tâche planifiée :

```text
Chaque lundi à 8h00, parcours plan-projet.md, le dossier projet, les e-mails et réunions de la semaine passée liés au projet et accessibles. Pour les étapes terminées, ajoute dans la colonne Résultat où se trouve le livrable et le mot terminé. Puis réalise la prochaine étape qui t’est assignée dans le plan et pour laquelle tu as les documents, et enregistre le résultat dans le dossier projet. À la fin, informe-moi de ce qui est nouveau, ce que tu as fait et quelle étape attend qui.
```

L’IA analysera les e-mails et réunions uniquement si elle a accès à la messagerie et au calendrier ; sinon, elle travaille uniquement avec le dossier projet. Si la tâche travaille avec le dossier sur votre ordinateur, elle ne s’exécutera que si l’ordinateur est allumé et l’application ouverte.
## Exemple

Jitka est coordinatrice marketing dans une entreprise qui fabrique du mobilier de jardin. Le catalogue printemps 2027 doit être imprimé pour le 15 janvier. Dans le dossier, elle a le catalogue de l’an dernier, la liste de prix des nouveautés et l’export des ventes de cette année. Le lundi 12 octobre, elle ouvre le dossier en mode Cowork, insère le prompt et écrit dessous : « Catalogue printemps 2027, impression 15 janvier. Je travaille dessus avec Pavel, directeur commercial, Ondřej, photographe, et une agence graphique. » L’IA affiche le plan et pose des questions sur le nombre de pages du catalogue et si seules les nouveautés sont photographiées :

```text
| Étape | Qui le fera | Résultat |
|---|---|---|
| 1. Sélection des produits | IA sélectionne selon les ventes, Jitka vérifie | liste de 60 produits |
| 2. Paramètres et prix | IA, vérification Jitka | tableau des paramètres |
| 3. Photos des nouveautés | photographe Ondřej | 14 photos |
| 4. Textes produits | IA, vérification Jitka | textes dans un fichier |
| 5. Mise en page | agence graphique | PDF du catalogue |
| 6. Correction des prix | IA contre la liste de prix, vérification Jitka | liste des corrections |
| 7. Validation et impression | Jitka, validation Pavel | commande d’impression |
```

Jitka répond aux deux questions. Pour la première étape, l’IA aurait sélectionné les produits seule et Jitka aurait juste vérifié. Elle modifie donc l’étape en « IA prépare une proposition, Jitka et Pavel sélectionnent » : le commercial connaît les demandes clients, ce qui n’apparaît pas encore dans les ventes. Puis elle écrit « Enregistre-le ».

L’IA sauvegarde le plan dans `plan-projet.md` et réalise immédiatement sa première étape : à partir de l’export des ventes et de la liste de prix, elle prépare `proposition-produits.xlsx` avec 60 produits classés par ventes et toutes les 14 nouveautés. Jitka trouve dans le tableau deux séries qui ne sont plus fabriquées, elle le signale à l’IA qui les retire de la proposition. Avec la proposition finalisée, Jitka rencontre Pavel mercredi et ils finalisent la sélection ensemble en réunion.
## Quand vous êtes bloqué

- **L’IA ne sauvegarde pas le plan dans le dossier car vous n’avez qu’un chat classique :** passez en [Cowork ou Code](card:when-chat-is-not-enough). Si l’entreprise n’autorise que le chat classique, joignez les documents au prompt et demandez à l’IA de continuer dans le chat en écrivant le plan directement dans la réponse. Demandez à l’IA de vous fournir le plan en fichier, téléversez-le dans le [projet](card:asistent) dans votre outil (nom indiqué dans le bloc « Dans votre outil ») et ajoutez dans les instructions du projet la phrase « Avant de travailler, lis le plan projet. Si je t’indique ce qui est terminé, renvoie-moi le plan complet avec les étapes marquées. » Téléversez la nouvelle version du plan dans le projet en remplacement de l’ancienne ; la première étape sera réalisée par l’IA dans le chat du projet.
- **Le plan comporte trente petites tâches :** demandez à l’IA de les fusionner en étapes principales, chacune avec un livrable propre.
- **Le plan est générique et convient à tout projet :** demandez à l’IA quels documents elle a lus dans le dossier. Un fichier présent uniquement dans le cloud sera téléchargé à l’ouverture, donc si elle ne l’a pas lu, qu’elle réessaie avec connexion internet. Ajoutez ce qui manque dans le dossier, par exemple cahier des charges ou compte rendu de réunion, et demandez à l’IA de réécrire le plan en conséquence. Pour un grand projet, passez à un [modèle plus puissant](card:modely).
- **Le résultat de la première étape ne convient pas :** dites à l’IA ce qui ne va pas précisément et sur quel document elle doit se baser. Pour les chiffres ou affirmations, la [vérification de sortie IA](card:kontrola-vysledku) aide.
## Ce qui sera prêt

Vous avez dans le dossier projet `plan-projet.md` avec les étapes principales du projet, et pour chaque étape vous savez qui la fera et ce qu’elle produira. L’IA a réalisé sa première étape et son résultat est à côté du plan. Dans `AGENTS.md` figure la règle qui fait que l’IA lit le plan avant de travailler et marque les étapes terminées.
## Et ensuite

Si une étape du plan est un travail long pour l’IA, par exemple parcourir soixante contrats, confiez-la à un [agent](card:agent-task) qui la mènera à bien seul. Si le projet n’a pas encore de page d’accueil, faites écrire un [README](card:project-start-here) par l’IA. Consignez les décisions et réalisations du projet dans un [worklog](card:project-worklog).
## AI-WBS

**Qu'est-ce que c'est :** AI Work Breakdown Structure : décomposition du projet en livrables, phases et rôles de l'humain, de l'IA, de l'expert ou de l'automatisation.

**Ce que ce n'est pas :** Ce n'est pas une simple liste classique des tâches du projet.

**Pourquoi l'équipe en a besoin :** Cela montre précisément où l'IA intervient dans le projet et où subsiste une étape humaine ou experte.

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

## Planifier un bloc

Mécanique produit optionnelle après la complétion d’une carte, dont le résultat donne lieu à un travail qui ne tient pas dans un créneau de quinze minutes. Ce n’est pas une carte autonome, elle n’a pas de complétion propre et n’augmente pas le nombre de méthodes accomplies.

Les cartes durent quinze minutes et se terminent par un artefact. Certaines cartes ne font que commencer un artefact : une carte produit une carte mentale de phase, un brief de recherche, une proposition de compétence ou deux branches à intégrer. La personne repart avec un plan mais sans temps, et revient au travail après dix minutes entre deux réunions, où rien ne peut être achevé.

## Quand elle est proposée

- la carte s’est terminée par un résultat utilisable qui constitue la consigne d’un travail ultérieur,
- ce travail a une fin claire, qu’on peut nommer en une phrase,
- en découpant en segments courts habituels, le travail se désagrégerait, car chaque reprise commence par recharger le contexte.

La mécanique ne s’affiche pas si le travail après la carte tient vraiment dans quinze minutes, si l’étape suivante attend une autre personne ou une validation, ni si le résultat de la carte ne génère aucun travail ultérieur.

## Ce que la personne voit

Un choix court **Planifier un bloc** à côté du check-in commun. En l’ouvrant, l’IA ne demande qu’une chose : quand la personne a réellement ce temps. Le reste est proposé automatiquement à partir de ce qui a été produit dans la carte.

## Ce que crée l’IA

Un brief de bloc. La source est le résultat de la carte juste terminée ; la mécanique n’invente pas de nouveau sujet. Il contient cinq éléments :

- **une chose**, nommée comme si elle était terminée,
- **la durée** entre 60 et 120 minutes, avec ce qui tient dedans et ce qui n’y tient pas,
- **ce qui doit être préparé à l’avance** : accès, données, documents, prompt de la carte,
- **ce qui sera terminé à la fin**, c’est-à-dire un résultat concret, pas « avancé » ni « en cours »,
- **ce qu’il advient du reste**, qui ne tient pas dans le bloc, pour que rien ne reste en suspens sans décision.

Si une chose s’avère en réalité être trois, l’IA le signale et propose lesquelles appartiennent au premier bloc. Elle ne propose pas de diviser en trois blocs à l’avance.

## Temps actif versus attente

Le bloc avec IA a une structure différente d’un bloc de travail autonome, car une partie du temps est occupée par un outil. Recherche, agent, génération longue ou traitement de données durent de quelques minutes à plusieurs dizaines, et la personne n’a pas besoin d’être présente.

Le brief distingue donc trois types de temps : travail actif de la personne, exécution de l’IA et attente d’une autre personne. Pour l’exécution de l’IA, il propose ce qu’on peut faire en attendant, le plus souvent la préparation de l’étape suivante du même résultat. Passer à un travail non lié casse le bloc, même si cela semble du temps utilisé.

Si l’attente occupe la majeure partie du bloc, la mécanique le signale clairement : une telle tâche relève plutôt de [Laissez l’IA travailler quand vous n’êtes pas là](card:recurring-ai-task).

## Calendrier

La mécanique prépare un texte d’événement : titre selon la chose, durée et dans la description ce qui doit être préparé à l’avance. La personne peut l’inscrire elle-même.

La mécanique n’écrit rien dans le calendrier ni dans un autre système partagé sans autorisation et n’envoie aucune invitation.

## Limites par rapport aux cartes

| Ce que ce n’est pas | Où c’est |
|---|---|
| Temps réservé pour une équipe qui a besoin d’une décision du responsable, réunions annulées et mentor à portée de main | carte [Donnez à l’équipe un bloc pour un vrai projet IA](card:ai-sprint) |
| Travail de l’IA quand la personne n’est pas là | carte [Laissez l’IA travailler quand vous n’êtes pas là](card:recurring-ai-task) |
| Découpage du projet en étapes et rôles | carte [Créez un AI-WBS pour la première phase du projet](card:ai-wbs-project) |

La personne planifie elle-même le bloc et n’a besoin d’aucune autorisation. Cela la distingue du sprint, où cette autorisation est une partie essentielle du travail.

## Ce que la mécanique ne contient pas

Des conseils pour la concentration, recommandations sur le téléphone, les notifications et l’environnement. La bibliothèque enseigne les passages. Ce type de conseils transformerait la mécanique en sermon sur le travail au lieu de préparer un bloc précis.

## Suivi

Une information peut être ajoutée au check-in indiquant qu’un brief de bloc a été créé. Ce n’est pas une complétion autonome de carte. La mécanique ne suit pas si le bloc a eu lieu.

## Premières cartes prises en charge

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

D’autres cartes avec travail ultérieur de plus de quinze minutes, comme `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` et `sjednotit-data-z-vice-zdroju`, sont candidates pour une deuxième vague. Attacher la mécanique à la moitié de la bibliothèque dès le début ferait du bruit dans le choix.
