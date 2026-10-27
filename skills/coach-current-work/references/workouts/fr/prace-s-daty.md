# Interrogez vos données : l'IA calcule la réponse à partir d'un export

L'IA calcule à partir d'un export la réponse à une question qui guide votre décision, et sauvegarde la procédure pour le mois suivant.

## Interrogez vos données : l'IA calcule la réponse à partir d'un export

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec un export et une question.
## À quoi ça sert

Nous sommes le lundi 2 novembre et le directeur commercial veut savoir d'ici vendredi sur quels produits lancer la campagne de Noël. L'export des commandes des trois derniers mois contient quatorze mille lignes, et les prix d'achat, indispensables pour savoir sur quoi l'entreprise gagne, sont gérés dans un autre système.

L'IA fusionne les deux exports et calcule la réponse avec un court programme sur toutes les lignes, évitant ainsi toute estimation.
## Ce qu'il faut préparer

- un export depuis la boutique en ligne, la comptabilité ou le CRM au format `.xlsx`, `.csv` ou un tableau dans le cloud,
- la question à laquelle vous avez besoin d'une réponse et son usage,
- le tableau original ouvert dans un éditeur de feuilles de calcul pour vérifier un chiffre,
- une IA capable de calculer à partir de fichiers (indiqué par le bloc « Dans votre outil »).
## Comment faire

1. Téléversez l'export dans le chat (en mode Cowork ou Code, ouvrez le dossier contenant les exports), insérez le prompt de l'exercice IA puis écrivez en dessous la question et l'usage de la réponse.
2. L'IA décrit ce qu'elle a trouvé dans l'export, fusionne les exports et calcule la réponse. Vérifiez le chiffre donné dans le tableau original et dites-lui s'il correspond.
3. Si c'est correct, l'IA sauvegarde la procédure comme [skill](glossary:skill), en mémoire ou dans les instructions, et rédige une phrase pour le prochain export. Où, est indiqué dans le bloc « Dans votre outil ».

Vous décidez de l'usage du résultat.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l'IA que vous utilisez au travail :

J'ai besoin d'une réponse à une question à partir des données. Je t'écrirai la question et l'usage de la réponse sous ce texte. Les données sont dans l'export joint ou dans le dossier où tu travailles.

1. Charge tous les fichiers et décris-moi leur contenu : nombre de lignes, colonnes, période couverte. Si tu ignores la signification d'une colonne importante pour la réponse, demande-moi.
2. Si la réponse nécessite deux exports, fusionne-les selon la colonne commune, par exemple le code produit. Compare le nombre de lignes avant et après fusion pour éviter doublons ou pertes. Liste séparément les lignes non appariées et indique leur nombre.
3. Calcule la réponse avec du code sur toutes les lignes, sans estimation. Si des données manquent, par exemple les prix d'achat pour les ventes, indique ce qui manque et où le trouver probablement.
4. Présente le résultat ainsi : réponse en 1 à 3 phrases, tableau des chiffres utilisés, description simple du calcul. Termine par un chiffre clé à vérifier dans le tableau original, avec son emplacement : feuille, colonne, filtre.

Si je dis que le chiffre ne correspond pas, trouve pourquoi, corrige le calcul et donne-moi un nouveau chiffre à vérifier. Quand je confirme, sauvegarde la procédure pour que le prochain export suffise à être traité par une phrase. Nomme-la selon le sujet, par exemple "Marge par produit". Indique les fichiers et colonnes attendus, la méthode de fusion et le calcul ; ne mets pas les chiffres de cet export. Si tu travailles dans un dossier, sauvegarde-la comme fichier, par exemple procedure-marge-produit.md, avec le code utilisé. En chat classique, crée un skill à partir de la procédure, ou si l'outil ne gère pas les skills, garde-la en mémoire. Sinon, fournis-moi la procédure en fichier téléchargeable à réimporter avec l'export. Si un clic est nécessaire pour sauvegarder, indique-moi précisément où. Enfin, indique le nom de la procédure, son emplacement et la phrase à utiliser pour le prochain export, incluant le nom.

## Dans votre outil

### Microsoft Copilot
Copilot Chat avec compte professionnel calcule l'export joint en Python ; ajoutez le fichier avec le bouton + ou par glisser-déposer. Une fois le chiffre validé, Copilot sauvegarde la procédure en mémoire ; demandez-lui aussi de l'écrire intégralement et collez-la dans les instructions du Notebook (Bloc-notes, Nouveau bloc-notes) où vous chargerez le prochain export. Les exports réguliers sur OneDrive sont traités par Cowork à côté du commutateur Chat (licence Microsoft Copilot).

### ChatGPT
Joignez l'export au chat, l'IA lance elle-même le programme Python. Avec les forfaits Business et Enterprise, la procédure devient un skill sauvegardé dans votre compte ; accessible sous Plugins, onglet Skills. Les autres comptes conservent la procédure en mémoire, et Codex traite les gros exports dans l'application ChatGPT pour ordinateur directement dans le dossier.

### Claude
Les calculs sont assurés par la fonction Code execution and file creation dans Paramètres sous Capacités ; activée en comptes personnels, gérée par l'administrateur en comptes professionnels. Le fichier ne doit pas dépasser 30 Mo. Claude peut créer un skill à partir de la procédure. Les gros exports réguliers sont traités par Cowork ou Claude Code directement dans le dossier.

### Gemini
Chargez l'export dans l'application Gemini via Ajouter des fichiers ou depuis le disque ; un tableau Google suffit et vous pouvez joindre deux exports simultanément. Que Gemini calcule par code n'est pas indiqué dans l'aide Google, donc ne négligez pas le chiffre de vérification. Le compte professionnel n'a pas de mémoire, sauvegardez la procédure comme skill (écrivez « Sauvegarde comme skill ») ; au prochain export, sélectionnez-le en tapant « / » dans le champ message.
## Qu'est-ce que le calcul par code

Quand l'IA lit un tableau comme du texte, elle estime les chiffres et peut facilement omettre des lignes dans un gros export. C'est pourquoi on la fait calculer par code : elle écrit un court programme, l'exécute sur tout le fichier et vous donne la réponse issue du résultat. Vous n'avez pas besoin de lire le code, la validité se vérifie par le chiffre à contrôler dans le tableau. En mode Cowork ou Code, l'IA calcule directement sur les fichiers dans le dossier, gère les gros exports et sauvegarde la procédure à côté sous forme de fichier texte.

L'IA fusionne deux exports via une [clé commune](glossary:data-key) : une colonne présente dans les deux fichiers avec les mêmes valeurs, par exemple code produit ou numéro de commande. Le nom du produit ou le nom du client varie souvent d'un système à l'autre, donc ne suffit pas pour fusionner.

Si les exports arrivent chaque mois ou que le chat ne charge pas tout, travaillez avec l'IA en mode Cowork ou Code qui manipule directement le dossier sur votre ordinateur. Le démarrage est expliqué dans la carte [Cowork ou Code](card:when-chat-is-not-enough).
## Que le prochain export soit calculé automatiquement par l'IA

Après la première fois, l'IA a la procédure enregistrée. Le mois suivant, vous lui donnez un nouvel export et écrivez la phrase fournie, par exemple « Utilise la procédure Marge par produit pour l'export de novembre ». L'IA calcule comme la fois précédente, vous pouvez comparer directement les chiffres des deux mois.

Si l'export arrive chaque mois dans le même dossier sur votre ordinateur, l'IA en mode Cowork ou Code peut calculer la réponse sans intervention à la date programmée comme [tâche planifiée](card:recurring-ai-task). Donnez-lui cette consigne et demandez-lui de créer la tâche :

```text
Chaque mois, le 3 à 8h00, prends le dernier export dans le dossier et calcule la réponse selon la procédure enregistrée. Sauvegarde le résultat à côté de l'export sous un fichier nommé avec le mois et indique en haut ce qui a changé par rapport au mois précédent.
```

La tâche fonctionnera uniquement si l'ordinateur est allumé et l'application ouverte.
## Exemple

Martina coordonne les ventes dans une boutique en ligne de café et machines à café. Le lundi 2/11, elle télécharge l'export des commandes d'août à octobre (`commandes.xlsx`, 14 200 lignes) et le tarif d'achat du stock (`prix-achat.xlsx`). Elle charge les deux fichiers dans l'IA utilisée au travail, insère le prompt et écrit dessous : « Sur quels trois produits lancer la campagne de Noël ? Je veux ceux avec la meilleure marge. »

L'IA décrit ce qu'elle a chargé et signale que les commandes ne contiennent que les ventes. Selon elles, la machine Brio génère 1,24 M€ de chiffre d'affaires, mais cela ne montre pas la marge. Elle fusionne donc commandes et tarif selon le code produit. Six codes du tarif manquent ; l'IA les liste, Martina reconnaît les nouveautés de septembre et demande les prix au stock. La réponse : les meilleures marges sont sur le café Éthiopie 250 g, café Brésil 1 kg et moulin manuel Classic. Brio a une marge de 9 %, les cafés plus de 40 %.

Pour vérification, l'IA donne la vente du café Éthiopie : 386 450 €, feuille Commandes, colonne Vente, filtre Code produit ETI-250. Martina filtre dans le tableau et confirme la somme. Elle écrit à l'IA, qui crée un skill Marge par produit ; Martina confirme la sauvegarde d'un clic. Début décembre, elle charge dans un nouveau chat l'export de novembre avec le tarif et écrit simplement « Utilise la procédure Marge par produit pour l'export de novembre ». En deux minutes, elle obtient le même tableau pour novembre.
## En cas de blocage

- **L'IA donne des chiffres sans expliquer le calcul :** écrivez-lui « Calcule avec du code sur tout le fichier et montre-moi le calcul. » Si l'IA ne peut pas exécuter le code, vérifiez dans le bloc « Dans votre outil » si les calculs doivent être activés, et ne négligez jamais le chiffre de vérification dans le tableau.
- **Le chiffre vérifié ne correspond pas :** dites à l'IA ce que vous avez trouvé dans le tableau et le filtre utilisé. Souvent, elle a calculé sur une autre période, avec des commandes annulées, ou la fusion a doublé des lignes. Si le chiffre ne correspond qu'avec un export ultérieur, demandez à l'IA d'intégrer la correction dans la procédure enregistrée. Si les erreurs persistent, poursuivez par une [vérification des résultats](card:kontrola-vysledku).
- **L'IA dit qu'elle n'a pas chargé tout le fichier :** un gros export peut dépasser la capacité du chat. Passez en [mode Cowork ou Code](card:when-chat-is-not-enough) où l'IA travaille directement dans le dossier. Si vous n'avez pas ce mode, demandez à l'IA quelles colonnes et périodes elle nécessite, et téléchargez un export réduit.
- **L'IA ne sauvegarde pas la procédure ou ne l'utilise pas dans un nouveau chat :** activez la mémoire dans les paramètres ; en compte professionnel, la mémoire et les skills peuvent être désactivés par l'administrateur. Sinon, demandez à l'IA la procédure en fichier téléchargeable et importez-la avec l'export la fois suivante. Dans un nouveau chat, écrivez toujours la phrase pour la prochaine fois avec le nom de la procédure.
## Ce qui sera prêt

Vous avez la réponse à votre question calculée sur toutes les lignes de l'export et un chiffre vérifié dans le tableau original. Vous savez ce qui manque dans les données. La procédure est enregistrée comme skill, en mémoire, dans le dossier, ou sous forme de fichier, et la prochaine fois il suffira d'un nouvel export et de la phrase fournie par l'IA.
## Et ensuite

Vous pouvez améliorer la procédure enregistrée selon vos corrections. La carte [Créez votre skill](card:create-skill-from-proven-process) explique comment faire. Si vos collègues ont besoin du même calcul et que vous ne voulez pas le faire chaque mois pour eux, faites créer par l'IA une application simple où ils chargent eux-mêmes l'export. Cette approche s'appelle [vibe coding](card:risk-based-prototyping).
## Clé commune dans les données

**Qu'est-ce que c'est :** Une colonne ou une combinaison de colonnes permettant d'identifier de manière fiable le même enregistrement dans deux sources, par exemple un ID de commande ou la combinaison du mois et du centre de coûts.

**Ce que ce n'est pas :** Ce n'est ni un mot de passe ni une clé d'accès technique. Le même nom d'entreprise ou de personne ne constitue pas nécessairement une clé commune fiable.

**Pourquoi l'étudiant en a besoin :** Cela aide à relier les lignes correspondantes sans perte, confusion ou duplication involontaire.

## Invite

**Qu'est-ce que c'est :** Une instruction pour une interaction spécifique avec l'IA.

**Ce que ce n'est pas :** Ce n'est pas la même chose qu'un contexte à long terme, un assistant ou un agent stocké.

**Pourquoi l'étudiant en a besoin :** Elle déclenche l'exercice et guide son déroulement ; ce n'est pas le contenu principal d'apprentissage.

## Compétence

**Qu'est-ce que c'est :** Une procédure réutilisable pour un type spécifique de tâche. Elle peut contenir des instructions, des règles, des exemples, des modèles et d'autres ressources nécessaires. La méthode de création et d'exécution varie selon l'outil.

**Ce que ce n'est pas :** Ce n'est pas un rôle général d'assistant ni une conversation réussie enregistrée sans modification.

**Pourquoi l'étudiant en a besoin :** Elle aide à transformer une bonne pratique en une forme stable pouvant être utilisée de manière cohérente et répétée.

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

## Mécanique : Vérification de l’intention avant la production d’un livrable

Brève vérification au début des cartes qui produisent un livrable destiné à quelqu’un d’autre. Ce n’est pas une carte autonome et elle n’a pas de validation propre. À l’opposé de la mécanique `data-readiness-check` : celle-ci vérifie si les données sont prêtes, celle-ci vérifie si l’intention est claire.

## Quand elle s’active

Lorsqu’une personne prépare un livrable qui sera vu par autrui : présentation, rapport, recommandation, offre, e-mail à la direction, synthèse pour un client. Elle ne s’active pas pour les livrables destinés à soi-même, pour l’exploration ou pour des notes en cours de rédaction.

## Pourquoi cela existe

L’IA peut générer vingt diapositives ou trois pages de rapport à partir de n’importe quoi, et cela aura l’air fini. Un livrable vide ne se distingue pas d’un bon à première vue, car ce qui manque, c’est l’intention, pas la forme. Trois phrases de la part d’un humain sont le moyen le plus simple de s’en rendre compte avant la production, pas après.

## Ce qui est demandé à l’humain

Trois choses, et aucune n’est proposée par l’IA :

| Quoi | Pourquoi l’IA ne peut pas le déterminer |
|---|---|
| **Public** | seul l’humain sait qui il a en face et ce que ces personnes savent déjà |
| **Changement** | ce que le public doit faire ou décider différemment après lecture |
| **Phrase clé** | la seule phrase que le public doit retenir s’il oublie tout le reste |

## Test d’inversion

La phrase clé se reconnaît à deux critères : on peut ne pas être d’accord avec elle et elle tient en une seule respiration. Le test consiste à la formuler à l’envers.

- *Nous voulons améliorer l’expérience client* → l’inverse n’a pas de sens, donc la phrase ne dit rien.
- *Arrêtons le développement de la deuxième application et remettons les gens sur la première* → l’inverse a du sens et quelqu’un pourrait le défendre. C’est une phrase clé.

Si la phrase ne passe pas le test, l’IA le signale et laisse l’humain la reformuler. Elle ne la reformule pas à sa place.

## Ce que fait l’IA

1. Demande les trois phrases et attend leur saisie. Ne les propose pas et ne les commente pas.
2. Effectue le test d’inversion. Si la phrase ne passe pas, explique pourquoi et la renvoie à l’humain.
3. Demande si le format correspond à l’intention. Si un autre livrable serait plus adapté pour provoquer le changement, propose la carte `output-beyond-document` et laisse la décision à l’humain.
4. Quand les trois phrases sont prêtes, passe directement à l’exercice principal de la carte et n’y revient plus.

## Ce qui reste à l’humain

- définir le public et le changement,
- rédiger et éventuellement reformuler la phrase clé,
- décider si le format convient à l’intention,
- décider ce qui constitue le contexte et ce qui peut être omis si le temps manque.

## Livrable de la mécanique

Trois lignes à l’intérieur du livrable principal, pas de document séparé ni de check-in supplémentaire :

```text
Public : ...
Changement attendu : ...
Phrase clé : ...
```

## Routage

- **Les trois phrases sont claires :** poursuivre avec l’exercice principal de la carte.
- **La phrase clé échoue au test d’inversion :** laisser l’humain la reformuler, ne pas poursuivre.
- **Impossible de formuler la phrase :** généralement, la décision n’est pas prise ou le livrable a deux objectifs. Séparer en deux livrables.
- **Un autre format serait plus adapté au changement :** carte `output-beyond-document`.
- **Il manque des éléments ou du contexte :** carte `prace-s-kontextem`.
- **Le livrable existe déjà et va être diffusé :** carte `kontrola-vysledku`.

## Limites

- La mécanique n’évalue pas la qualité du contenu ni la véracité des affirmations. Cela relève du contrôle du livrable fini.
- Elle ne s’active pas pour les livrables personnels ; demander le public pour ses propres notes est un rituel, pas une aide.
- Si l’humain connaît les trois phrases et les écrit en trente secondes, la mécanique s’arrête. Elle ne ralentit pas celui qui a déjà l’intention claire.

## Bloc de prompt minimal

```text
Avant de commencer à produire quoi que ce soit, demande-moi trois choses et attends ma réponse : pour qui est ce livrable, quel changement il doit provoquer, et quelle est la seule phrase qui doit le porter. Ne me les propose pas.

Ensuite, essaie d’inverser ma phrase clé. Si l’inverse n’a pas de sens, dis-moi que la phrase n’affirme rien et laisse-moi la reformuler. Ne la reformule pas à ma place.

Quand les trois phrases sont prêtes, poursuis directement avec la tâche principale et n’y reviens plus. Si un autre format que celui que je souhaite provoquerait mieux le changement, dis-le-moi en une phrase et laisse-moi décider.
```

## Mécanique : Vérification de la préparation des données

Un contrôle adaptatif court au début des cartes de données. Ce n’est pas une carte autonome, elle n’a pas de validation propre et l’utilisateur n’a pas besoin de chercher artificiellement un tableau problématique.

## Quand cela se déclenche

L’utilisateur apporte une question concrète et les données sur lesquelles il souhaite travailler. Avant même d’insérer les données, il doit être clair qu’il utilise un environnement approuvé. Si ce n’est pas clair, la mécanique renvoie vers un parcours de sécurité et ne demande pas le contenu.

## Ce que fait l’IA

1. À partir de l’objectif et du fichier, elle vérifie si elle comprend ce que représente une ligne, les colonnes importantes, les unités et la période temporelle.
2. Elle effectue un contrôle technique rapide de la structure, des types de données, des valeurs manquantes, des doublons possibles et des catégories.
3. Elle répartit les constats en :
   - corrections techniques qu’elle peut proposer ou effectuer en toute sécurité,
   - questions sémantiques qui doivent être décidées par l’utilisateur ou le propriétaire des données,
   - problèmes nécessitant un autre environnement ou une carte dédiée.
4. Si rien d’essentiel ne bloque le travail, elle poursuit directement avec l’exercice principal de la carte.
5. Si une correction technique est nécessaire, elle montre le changement sur un exemple, demande une validation et crée une copie de travail. Le fichier original est conservé.
6. Si elle ne comprend pas le sens, elle pose uniquement des questions qui peuvent influencer le résultat. Elle n’invente pas de réponses.

## Ce qui reste à l’utilisateur

- confirmer la signification des données et l’intention du travail ultérieur,
- décider si les catégories peuvent être fusionnées et ce que signifie une valeur manquante,
- approuver une modification pouvant affecter le contenu factuel,
- déterminer si une ambiguïté nécessite l’intervention du propriétaire des données.

## Résultat de la mécanique

La mécanique crée un enregistrement prévol en trois points maximum à l’intérieur du résultat principal de travail :

```text
État des données : prêtes / modifiées / bloquées
Modifications effectuées ou hypothèses confirmées : ...
Ce qui reste à vérifier : ...
```

Aucun document séparé ni autre check-in n’est généré.

## Routage

- **Données prêtes :** poursuivre directement avec l’analyse ou la tâche décisionnelle.
- **Incohérence technique simple :** l’IA la corrige après validation et continue.
- **Signification métier ambiguë :** demander à l’utilisateur ou au propriétaire des données.
- **Plusieurs fichiers ou systèmes :** carte `sjednotit-data-z-vice-zdroju`.
- **Conversations, tickets ou retours :** carte dédiée pour convertir du contenu non structuré en structure.
- **Fichier trop volumineux ou capacité insuffisante de l’outil :** carte `when-chat-is-not-enough`.
- **Incertitude sur la possibilité d’insérer les données :** cartes `bezpecne-pouzivani` et `nakladani-s-daty`.

## Limites

- Les formats habituels et catégories connues sont corrigés automatiquement par l’IA, l’utilisateur n’a pas besoin de les rechercher manuellement.
- La mécanique ne crée pas de problème si elle n’en trouve aucun d’essentiel.
- La préparation est évaluée par rapport à la question spécifique. Le même tableau peut suffire pour une vue d’ensemble et ne pas être adapté à une conclusion financière ou RH précise.
- Le contrôle du format ne remplace pas la vérification des valeurs spécifiques et des calculs dans le résultat final.

## Bloc minimal de prompt

```text
Avant de commencer à analyser les données, fais un contrôle rapide de leur préparation par rapport à ma question.

Commence par résumer ce que tu penses qu’une ligne représente, les colonnes importantes, les unités et la période. Tu peux proposer de corriger les incohérences techniques. Pour toute ambiguïté sémantique, pose des questions sans inventer de réponses.

Si les données sont prêtes pour la tâche, dis-le en une phrase et continue directement. Si quelque chose peut changer le résultat, montre au maximum trois points. Toute modification du contenu factuel ou suppression de lignes doit être faite après mon approbation et uniquement dans une copie de travail.
```
