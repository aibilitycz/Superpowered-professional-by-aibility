# Changez de modèle selon la tâche : rapide pour le tri, puissant pour la décision

Comparez un modèle rapide et un modèle puissant sur deux tâches, et l’IA retiendra lequel utiliser pour chaque travail.

## Changez de modèle selon la tâche : rapide pour le tri, puissant pour la décision

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec deux tâches de cette semaine.
## À quoi ça sert

Un client veut savoir d’ici vendredi si sa commande sera prête avant la fin
novembre. Vous donnez à l’IA un tableau des capacités de l’équipe et en quelques
secondes elle répond oui. Mais l’IA a ignoré que deux membres de l’équipe sont
en congé en novembre, car elle fonctionnait sur le modèle par défaut et vous
ignoriez qu’on pouvait changer de modèle.

Un modèle rapide suffit pour trier et reformuler, et si vous laissez la décision
au modèle puissant qui réfléchit plus longtemps, il remarquera plutôt les
conditions que le modèle rapide saute.
## Ce qu’il faut préparer

- un travail en masse de cette semaine, par exemple 30 à 50 tâches issues de réunions ou de questions à trier,
- une décision à prendre, par exemple choisir parmi trois offres selon le prix, le délai et les conditions,
- les documents pour les deux tâches,
- l’IA que vous utilisez au travail, ou l’IA en [mode Cowork ou Code](glossary:workmode).
## Comment faire

1. Dans le menu du modèle, choisissez le réglage le plus rapide ; où il se trouve est indiqué dans le bloc Dans votre outil. Insérez le prompt et écrivez en deux dernières lignes chaque tâche en une phrase.
2. Passez au réglage le plus puissant et écrivez « Deuxième tour », ou en Cowork ou Code dans un nouveau chat « Deuxième tour selon `ulohy.md` ». L’IA refait les tâches et compare les tours.
3. Pour chaque tâche, choisissez le résultat que vous utiliseriez. L’IA enregistre un aperçu indiquant quel modèle pour quelle tâche, et mémorise la règle pour vous rappeler quand changer de modèle.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Nous comparons comment deux tâches professionnelles sont traitées par un modèle rapide et un modèle puissant. Les tâches sont sur les deux dernières lignes, les documents sont dans le dossier où tu travailles ou en pièces jointes. Si tu ne travailles pas directement dans le dossier sur mon ordinateur, ne crée aucun fichier et garde tout dans le chat.

Premier tour :
- Indique sur quel modèle et avec quel réglage de réflexion tu fonctionnes. Si tu n’es pas sûr, demande-moi.
- Réalise entièrement les deux tâches. Demande les documents manquants.
- Pour chaque tâche, note l’heure au début et à la fin, et indique la durée. Si ce n’est pas possible, écris « non mesuré » et demande-moi combien de temps j’ai attendu environ pour chaque tour.
- Sauvegarde les consignes des deux tâches et le reste du prompt à partir de « Deuxième tour » dans un fichier ulohy.md. Sauvegarde les résultats dans porovnani-modelu.md sous un titre avec le nom du modèle et le réglage de réflexion.

Je lancerai le deuxième tour avec le message « Deuxième tour » sur un réglage plus puissant :
- Si tu es sur le même modèle et réglage que le premier tour, avertis-moi pour que je change.
- Prends les tâches de ulohy.md ou du premier tour plus haut dans le chat et refais-les depuis le début comme au premier tour. N’utilise pas les résultats du premier tour ; ouvre porovnani-modelu.md quand tu as tes résultats et ajoute-les sous un nouveau titre.
- Compare les deux tours. Pour chaque tâche, montre au maximum trois différences qui permettent de juger si le résultat est utilisable, et indique la durée de chaque tour. Un texte plus long ou un temps d’attente plus long ne signifient pas forcément un meilleur résultat.
- Demande-moi quel résultat utiliser pour chaque tâche et marque-le comme choisi dans porovnani-modelu.md.

Enfin, selon mon choix, crée un fichier modely.md avec un aperçu : type de travail, modèle et réglage de réflexion, et une phrase expliquant pourquoi. Ajoute à la fin de l’aperçu la ligne : « Une autre modèle vérifie la décision ou l’analyse avant utilisation. » Dans le fichier AGENTS.md du même dossier, ajoute la règle : « Avant de commencer une tâche, consulte modely.md. Si un autre modèle ou réglage est plus adapté que celui que tu utilises, dis-le-moi en une phrase au début. » Si AGENTS.md n’existe pas, crée-le. Assure-toi de le lire au début de chaque travail dans cet outil ; en Cowork, inscris-le dans les instructions du dossier. Si tu ne travailles pas dans un dossier, garde l’aperçu et la règle en mémoire, et si tu n’as pas de mémoire, écris-moi l’aperçu dans le chat.

Travail en masse :
Décision ou analyse :

## Dans votre outil

### Microsoft Copilot
Dans Copilot Chat, le choix est en haut à droite : au premier tour Quick response, au second Think deeper, et répondez pareil quand l’IA demande sur quel modèle elle fonctionne. Vous ne pouvez pas choisir un autre modèle dans Copilot Chat, vous comparez la durée de réflexion. Copilot mémorise l’aperçu (message Memory updated), sinon insérez-le dans Custom instructions sous Chat settings › Personalization.

### ChatGPT
Le menu est sur le web dans le champ de message, sur mobile en haut de la conversation : au premier tour Instant, au second le niveau le plus élevé que vous avez (High ou Extra High), sur compte gratuit option Think. ChatGPT mémorise l’aperçu (Personalization › Memory), sinon insérez-le dans Custom Instructions. Dans Codex, le menu est sous le champ de message.

### Claude
Le choix du modèle est à côté du bouton d’envoi : rapide est par exemple Haiku, plus puissant Sonnet, et le plus puissant Opus. Dans Effort, vous réglez la réflexion de Low à Max. Dans Claude Code, changez le modèle avec la commande `/model` et la réflexion avec `/effort`.

### Gemini
En bas dans le champ de message, cliquez sur le nom du modèle : au premier tour choisissez Flash ou Flash-Lite, au second Pro puis immédiatement le niveau de réflexion High ; si les options s’appellent Fast, Thinking et Pro, choisissez Fast puis Pro. Gemini n’a pas de mémoire sur compte professionnel, donc insérez l’aperçu et la règle dans les instructions Gemu (Gems › New Gem) et donnez les tâches dedans.
## Qu’est-ce que le modèle et la réflexion

[Le modèle](glossary:ai-model) est l’IA qui vous répond, chaque application en propose plusieurs. [La réflexion](glossary:reasoning-mode) est le réglage de la durée pendant laquelle le modèle analyse la tâche avant de répondre ; en anglais selon l’application on parle de thinking, reasoning ou effort. Un modèle rapide avec une réflexion courte suffit pour le travail en masse et répond immédiatement. Un modèle puissant avec une réflexion longue est utile pour les décisions et analyses complexes, mais répond plus lentement, donc on ne l’utilise pas pour tout. Vous changez les deux dans le menu du modèle ; où il se trouve selon l’outil est indiqué dans le bloc « Dans votre outil ».

`ulohy.md`, `porovnani-modelu.md` et `modely.md` sont des fichiers texte ordinaires dans le dossier des documents, ouvrez-les par exemple avec le Bloc-notes. `AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. L’IA en mode Cowork ou Code le lit au début de chaque travail, et là où l’outil doit le configurer, l’IA le fait selon le prompt, donc vous n’avez pas à répéter la règle sur le choix du modèle.
## Faites vérifier le résultat par un autre modèle

Faites vérifier la décision que vous utiliserez par un autre modèle que celui qui l’a produite. Chaque modèle néglige quelque chose de différent, donc le second trouve souvent ce que le premier a sauté. L’idéal est une IA d’une autre entreprise que celle qui a produit la décision. En mode Cowork ou Code, ouvrez-la dans le même dossier, joignez les documents dans un chat normal et insérez la décision dans le message sous la consigne. Si vous n’avez qu’une IA, choisissez un autre modèle puissant dans celle-ci, et si vous n’en avez pas, faites la vérification au moins dans un nouveau chat avec le même réglage que le deuxième tour. Consignes pour la vérification :

```text
Vérifie la décision choisie (dans porovnani-modelu.md, plus haut dans ce chat ou en pièce jointe) par rapport aux documents. Trouve les conditions que l’auteur a ignorées, les affirmations non étayées par les documents, et les chiffres incorrects. Pour chaque constat, indique où dans les documents il se trouve et propose une correction. Si la décision est correcte, écris-le en une phrase.
```

La ligne à la fin de l’aperçu dans modely.md vous rappellera de faire cette vérification pour d’autres décisions.
## Exemple

Lenka gère une petite boutique en ligne de cosmétiques. Le lundi 5/10/2026,
elle ouvre l’IA dans le dossier Livraison et lui donne deux tâches : trier 48
questions clients de la semaine précédente en réclamations, livraison et paiements,
et choisir parmi trois offres d’un nouveau transporteur.

Au premier tour sur le modèle le plus rapide avec réflexion courte, l’IA trie les
questions en une minute et recommande le transporteur le moins cher. Au second
tour sur le modèle le plus puissant avec réflexion longue, elle trie pareil,
mais en quatre minutes. Pour les transporteurs, elle remarque que l’offre la
moins chère applique une pénalité si la boutique envoie moins de 200 colis par
mois, et Lenka en envoie 120. Elle recommande donc la deuxième offre la moins
chère.

Lenka choisit le tri du premier tour et le transporteur du second. L’IA écrit dans
`modely.md` :

```text
### Quel modèle pour quoi
- Tri et reformulation (questions, listes, tableaux) : modèle rapide, réflexion courte. Résultat identique au puissant, prêt en une minute.
- Choix parmi offres et contrats : modèle le plus puissant, réflexion longue. Le modèle rapide a ignoré la pénalité dans les conditions du transporteur.
- Une autre modèle vérifie la décision ou l’analyse avant utilisation.
```

Une semaine plus tard, Lenka demande au modèle le plus puissant de reformuler une grille tarifaire dans un tableau. L’IA écrit tout de suite que le modèle rapide suffit.
## En cas de blocage

- **Vous n’avez pas de modèle plus puissant ni de réflexion plus longue dans le menu :** dans la version gratuite, il y a souvent seulement un choix de réflexion plus longue ; activez-le pour le deuxième tour. Dans un compte professionnel, les modèles peuvent être cachés par l’administrateur ; demandez-lui l’accès au modèle plus puissant.
- **L’IA ne sait pas quoi faire au deuxième tour :** en mode Cowork ou Code, ouvrez un nouveau chat dans le même dossier et écrivez « Deuxième tour selon `ulohy.md` ». En chat normal, restez dans le même chat et changez juste le modèle.
- **Les deux modèles font la même erreur :** alors l’erreur vient probablement de la consigne ou des documents. La carte [Vérifiez la sortie IA](card:kontrola-vysledku) montre comment la trouver.
- **L’IA ne vous rappelle rien la prochaine fois :** vérifiez que `AGENTS.md` est dans le dossier et que la règle y est. En chat normal, vérifiez dans les paramètres que la mémoire est activée. Si l’entreprise l’a désactivée, [passez en mode Cowork ou Code](card:when-chat-is-not-enough).
## Ce que vous aurez

Vous avez deux tâches de cette semaine terminées avec un résultat choisi pour chacune.
Vous savez où changer le modèle et la durée de réflexion dans votre application,
et vous avez un aperçu du modèle adapté à chaque travail. En Cowork ou Code,
l’aperçu est dans `modely.md` et la règle dans `AGENTS.md`, donc l’IA vous dira au début de la tâche si elle fonctionne sur un modèle inadapté. En chat normal, l’IA a l’aperçu et la règle en mémoire.
## Et après

Faites [vérifier le résultat du modèle puissant avant envoi](card:kontrola-vysledku). Si la décision nécessite des sources internet absentes du dossier, lancez une [Deep Research](card:deep-research).
## Modèle d'IA

**Qu'est-ce que c'est :** Un système qui traite une entrée et génère une réponse. Un outil d'IA peut proposer plusieurs modèles ou masquer leur choix derrière des noms de modes.

**Ce que ce n'est pas :** Ce n'est pas un outil d'IA complet ni une garantie d'une certaine qualité de résultat.

**Pourquoi l'étudiant en a besoin :** Cela aide à distinguer les capacités du modèle du contexte, de la consigne, des outils disponibles et de l'environnement dans lequel le modèle fonctionne.

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
