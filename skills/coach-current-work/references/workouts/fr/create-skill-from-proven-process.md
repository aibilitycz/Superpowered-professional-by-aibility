# Créez une compétence : un guide que l'IA retient

À partir d'une tâche que vous avez menée à bien avec l'IA, celle-ci rédige une compétence et vous lancez le prochain cycle en une seule phrase.

## Créez une compétence : un guide que l'IA retient

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec le chat où vous avez terminé la tâche.
## À quoi ça sert

Chaque vendredi, vous envoyez à la direction l’état de vos trois projets. L’IA vous aide, mais vous devez à chaque fois lui réexpliquer quels documents utiliser, que le haut doit contenir trois phrases, en dessous un tableau des échéances, et les risques à la fin. Si vous oubliez quelque chose, le rapport diffère de la semaine précédente et le directeur demande ce qui a changé.

La [compétence](glossary:skill) est un guide pour l’IA sur un type de travail : elle l’écrit à partir d’un chat terminé et l’utilise seule la prochaine fois, sans que vous ayez à tout réexpliquer.
## Ce qu’il faut préparer

- le chat dans lequel vous avez terminé la tâche avec l’IA, que vous faites régulièrement et de la même façon,
- les documents pour la prochaine tâche du même type ; vous utiliserez la compétence immédiatement,
- une IA capable d’enregistrer des compétences, par exemple en [mode](glossary:workmode) Cowork ou Code.
## Comment faire

1. Ouvrez le chat où vous avez terminé la tâche avec l’IA. Si vous n’en avez pas, faites la tâche avec l’IA et corrigez-la jusqu’à obtenir le résultat attendu.
2. À la fin du chat, insérez le prompt. L’IA écrira la compétence à partir du chat, l’enregistrera et vous dira où la trouver ; si elle a besoin d’un clic de votre part, elle vous indiquera où.
3. Ouvrez un nouveau chat, joignez les documents pour la prochaine tâche et lancez-la en une phrase, par exemple « Rédige l’état du projet Déménagement de l’entrepôt ». L’IA devrait utiliser la compétence automatiquement.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Je vais refaire cette tâche. Rédige une compétence à partir de ce que nous avons fait dans ce chat, pour que la prochaine fois il suffise de la lancer en une phrase sans rien expliquer.

Parcours tout le chat et retiens ce qui a fonctionné : les étapes, les documents nécessaires, et la forme finale qui me convenait. Intègre mes corrections en cours de travail directement dans les étapes. Ne mets pas dans la compétence ce qui change d’une fois à l’autre, comme le nom du projet, la date ou les chiffres ; indique seulement qu’il faut les demander.

La compétence doit contenir :
- un titre selon le travail, par exemple État du projet pour la direction,
- quand l’utiliser : les phrases habituelles pour lancer ce type de tâche,
- ce dont tu as besoin et ce qu’il faut demander si c’est manquant,
- les étapes,
- à quoi ressemble le résultat final.

Ajoute à la fin une règle : si je corrige le résultat, propose de modifier la compétence en fonction de la correction.

Enregistre la compétence pour que cet outil la retrouve et l’utilise automatiquement la prochaine fois. Si tu as besoin d’un clic de ma part pour l’enregistrer, dis-moi précisément où. Si cet outil ne sait pas enregistrer les compétences, dis-le-moi clairement. Enfin, indique-moi où trouver la compétence et la phrase à utiliser pour lancer la tâche la prochaine fois.

## Dans votre outil

### Microsoft Copilot
Les compétences sont dans Cowork à côté du bouton Chat ; si elles n’y sont pas, demandez à votre administrateur IT. Dans Cowork, créez la compétence dans Customize, Skills (Add, Create new), ou demandez-la à l’IA dans la tâche. Sans Cowork, faites écrire la compétence comme texte dans le chat Copilot et insérez-la dans un nouvel agent (New agent, Skip to configure, Instructions) ; à l’étape 3, lancez la tâche dans cet agent.

### ChatGPT
Les compétences sont disponibles dans les abonnements Business et Enterprise dans la barre latérale sous Plugins, onglet Skills, activées par l’administrateur. Si vous demandez une compétence dans le chat, ChatGPT la rédige et propose de l’installer (Install). Si vous n’avez pas les compétences activées, faites écrire la compétence comme texte, insérez-la dans les instructions du projet (New project, Project settings) et lancez la tâche dans ce projet à l’étape 3.

### Claude
Claude gère les compétences dans tous les abonnements, en chat classique ou Cowork, accessibles dans Customize, Skills. Il faut activer Code execution and file creation dans Settings, Capabilities ; en compte entreprise, c’est l’administrateur qui active. Claude affiche le nom de la compétence utilisée pendant le travail.

### Gemini
Si vous voyez Skills dans Customize, créez la compétence là (Create ou Upload) ; Google active progressivement cette fonction pour les comptes entreprise. Sinon, faites écrire la compétence comme texte par Gemini et enregistrez-la comme Gem, un assistant enregistré avec ses propres instructions : dans Gems, New Gem, collez le texte dans Instructions et ajoutez le résultat précédent dans Knowledge. À l’étape 3, ouvrez ce Gem et lancez la tâche dedans.
## Qu’est-ce qu’une compétence

Une compétence est un guide pour l’IA sur un type de travail : quand l’utiliser, ce dont elle a besoin, les étapes et à quoi doit ressembler le résultat. L’IA la rédige : vous menez la tâche à terme une fois avec elle, et elle écrit et enregistre la compétence à partir de ce qui a fonctionné. C’est un simple fichier texte auquel l’IA peut ajouter un modèle ou un exemple de résultat.

L’IA reconnaît quelle compétence utiliser grâce à la description de quand l’utiliser. C’est pourquoi elle contient les phrases habituelles pour lancer la tâche, et vous pouvez avoir des dizaines de compétences parmi lesquelles l’IA choisira la bonne. Les outils qui gèrent les compétences utilisent généralement le même format, ce qui permet de transférer une compétence d’un outil à un autre.

Les compétences fonctionnent avec l’IA en mode Cowork ou Code, et dans certains outils aussi en chat classique ; si votre IA ne sait pas enregistrer la compétence, changez de mode selon l’onglet [Chat, Cowork ou Code](card:when-chat-is-not-enough). Vous saurez si l’IA a utilisé la compétence au nom affiché pendant le travail (dans Cowork sur la nouvelle tâche) ; si vous ne le voyez pas, demandez-lui. Le résultat doit avoir la même forme que la fois précédente, et l’IA redemandera le nom du projet, la date ou les chiffres.

La compétence contient ce qui se répète : la procédure, la forme du résultat et vos corrections.
## Pour que les compétences se créent toutes seules

Le meilleur moment pour créer une compétence est à la fin d’un travail réussi. Pour que l’IA vous le rappelle d’elle-même, faites-lui enregistrer une règle. En Cowork ou Code, où l’IA travaille dans un dossier sur votre ordinateur, elle l’écrit dans le fichier `AGENTS.md`. C’est un simple fichier texte avec des règles pour l’IA, que plusieurs outils en mode Code lisent au début de chaque travail ; si l’outil ne sait pas le faire, l’IA enregistre la règle dans ses paramètres ou vous indique où la mettre. En chat classique, l’IA garde la règle en mémoire. Insérez ceci :

```text
Enregistre une règle pour chaque travail futur : « Quand nous terminons ensemble une tâche que je vais refaire, propose-moi d’en faire une compétence. » Si tu travailles dans un dossier, écris-la dans le fichier AGENTS.md, et s’il n’existe pas, crée-le. Assure-toi que cet outil la lise au début de chaque travail ; dans Cowork, inscris-la dans les instructions du dossier. En chat classique, garde la règle en mémoire.
```
## Exemple

Jana coordonne trois projets dans une entreprise de construction et envoie chaque vendredi à la direction leur état. Le vendredi 9/10, elle fait avec l’IA en mode Cowork l’état du projet Nouveau entrepôt. Elle lui donne le compte-rendu de réunion et le tableau des échéances, et la corrige deux fois : la direction veut trois phrases en haut et les risques à la fin, pas cachés dans le texte. Puis elle insère le prompt et l’IA enregistre la compétence :

```text
État du projet pour la direction
- Quand l’utiliser : « état du projet », « rapport pour la direction », « où en est le projet ».
- Ce dont tu as besoin : nom du projet, dernier compte-rendu de réunion et tableau des échéances. Si quelque chose manque, demande-le.
- Étapes : sélectionne dans les documents ce qui a été fait cette semaine, compare les échéances au planning et repère les retards.
- Résultat : trois phrases en haut, sous un tableau des jalons avec échéance et état, puis les risques et qui les gère.
- Si je corrige le résultat, propose de modifier cette compétence en fonction de la correction.
```

Le même jour l’après-midi, elle ouvre un nouveau chat, joint le compte-rendu et les échéances du projet Déménagement de l’entrepôt et écrit simplement « Rédige l’état du projet Déménagement de l’entrepôt ». L’IA montre qu’elle utilise la compétence État du projet pour la direction et renvoie trois phrases, un tableau et les risques, sans que Jana ait à rien expliquer. Le troisième projet est prêt en cinq minutes. D’ici la fin du mois, elle créera aussi des compétences pour le compte-rendu de réunion et la commande de matériel.
## En cas de blocage

- **L’IA répond qu’elle ne sait pas enregistrer la compétence :** dans un compte entreprise, les compétences sont souvent activées par l’administrateur, contactez-le ; ce qu’il faut activer est indiqué dans le bloc « Dans votre outil ». En attendant, passez en mode Cowork ou Code. Le chat ne se transfère pas, donc recommencez à l’étape 1. Plus d’infos dans l’onglet [Chat, Cowork ou Code](card:when-chat-is-not-enough).
- **L’IA n’a pas utilisé la compétence dans le nouveau chat :** la description de quand utiliser la compétence ne correspond pas aux mots que vous employez pour lancer la tâche. Donnez votre phrase à l’IA et demandez-lui de modifier la description dans la compétence. En attendant, écrivez directement « Utilise la compétence » et son nom.
- **La compétence décrit une tâche spécifique :** le nom du projet, la date ou les chiffres de la fois précédente ne doivent pas figurer dans la compétence. Demandez à l’IA de les retirer et de les redemander la prochaine fois.
- **Le résultat ne convient toujours pas :** corrigez-le dans le chat et acceptez la proposition de l’IA de modifier la compétence. Si la même erreur revient, cherchez la cause avec l’IA selon l’onglet [Vérifiez la sortie de l’IA](card:kontrola-vysledku).
## Ce que vous aurez

Vous avez une compétence pour une tâche régulière, et vous savez où la trouver. Dans un nouveau chat, l’IA l’a utilisée seule et a rendu la tâche du même type dans la même forme que la fois précédente. Si vous corrigez le résultat, l’IA proposera de modifier la compétence en fonction.
## Et ensuite

La compétence ne se lance pas toute seule, elle attend que vous lanciez la tâche. Si l’état des projets doit être créé chaque vendredi à midi sans vous, configurez-le comme une [tâche planifiée](card:recurring-ai-task). Si vous utilisez le résultat d’une compétence comme base pour un autre travail, par exemple un résumé des états pour tout le département, ajoutez la deuxième étape directement dans la compétence.
## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Compétence

**Qu'est-ce que c'est :** Une procédure réutilisable pour un type spécifique de tâche. Elle peut contenir des instructions, des règles, des exemples, des modèles et d'autres ressources nécessaires. La méthode de création et d'exécution varie selon l'outil.

**Ce que ce n'est pas :** Ce n'est pas un rôle général d'assistant ni une conversation réussie enregistrée sans modification.

**Pourquoi l'étudiant en a besoin :** Elle aide à transformer une bonne pratique en une forme stable pouvant être utilisée de manière cohérente et répétée.

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
