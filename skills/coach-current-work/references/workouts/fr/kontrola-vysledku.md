# Vérifiez la sortie de l'IA : chiffres et affirmations contre les sources

L'IA compare les chiffres et affirmations de la sortie avec les sources, corrige les erreurs et mémorise une règle pour éviter leur réapparition.

## Vérifiez la sortie de l'IA : chiffres et affirmations contre les sources

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec une sortie IA et ses sources.
## À quoi ça sert

Le mardi matin, vous envoyez au directeur le rapport mensuel des ventes. Le commentaire sur les chiffres a été rédigé par l'IA à partir d'un export, et il indique que le chiffre d'affaires de septembre a augmenté de 12 % principalement grâce à la Slovaquie. Lors de la réunion, le directeur demande d'où viennent ces 12 %, et vous ne savez pas si l'IA a vu tout le tableau ou seulement sa première feuille.

Quand l'IA retrouve chaque chiffre dans les sources et explique pourquoi l'erreur est survenue, vous pouvez dire précisément au directeur d'où viennent ces 12 %.
## Ce qu'il faut préparer

- la sortie de l'IA que vous souhaitez transmettre : rapport, offre, compte-rendu ou tableau,
- les sources à l'origine de cette sortie : export, tarif, contrat ou transcription de réunion,
- l'IA que vous utilisez au travail, ou une IA en [mode Cowork ou Code](glossary:workmode).
## Comment faire

1. Saisissez le prompt et sous « Sortie : » et « Sources : » insérez le texte ou les noms des fichiers ; dans le chat, joignez les sources. Si la sortie a été créée via un [skill](glossary:skill) ou une tâche planifiée, indiquez-le sous le prompt.
2. L'IA renvoie les constats, la sortie corrigée et un chiffre clé avec son emplacement dans la source. Ouvrez la source et vérifiez vous-même ce chiffre, car l'IA peut à nouveau manquer sa propre erreur.
3. Indiquez les corrections que vous ne souhaitez pas et ajoutez les emplacements marqués `[VÉRIFIER]`, ou laissez-les barrés. L'IA finalise la sortie, enregistre la règle contre la cause de l'erreur et vous indique où.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l'IA que vous utilisez au travail :

Vérifie la sortie préparée par l'IA avant que je ne la transmette. La sortie et les sources dont elle provient sont à la fin du message : sous forme de texte, de noms de fichiers dans un dossier, ou en pièce jointe.

Commence par indiquer quels fichiers tu as chargés et si c'est complet : combien de pages, feuilles ou lignes. Si tu n'as pas tout, vérifie ce que tu as et dis-moi quelles feuilles ou pages je dois envoyer séparément, car la sortie en dépend. Puis trouve dans la sortie chaque chiffre, prix, date, nom, affirmation et décision vérifiable dans les sources, et compare-les. Parcours aussi dans l'autre sens : ce qui est dans les sources mais absent de la sortie, par exemple un poste de la demande ou une tâche de la réunion. Recalcule les chiffres issus de calculs et montre le calcul. Ne corrige pas le style ni le ton, vérifie seulement la cohérence du contenu.

Dans ta première réponse, rends :
- un tableau des constats : citation de la sortie, ce que disent les sources et où précisément (fichier, page ou feuille et ligne comme je le verrai en ouvrant le fichier), correction et cause,
- la sortie corrigée complète,
- un chiffre sur lequel la sortie repose le plus, et où exactement je peux le vérifier dans la source.

Choisis la cause parmi : source manquante, consigne floue, IA a mal compris la source, source incomplète ou chat trop long, source obsolète, erreur de calcul. Si tu n'es pas sûr, indique que c'est une estimation. Ne devine pas ce qui manque dans les sources : marque-le [VÉRIFIER] et demande-moi.

Puis attends. Je t'indiquerai les corrections que je ne veux pas et ajouterai les emplacements avec [VÉRIFIER]. Ensuite, sauvegarde la version corrigée dans un nouveau fichier à côté de l'original et donne-moi son nom ; dans le chat sans dossier, rends-la en entier.

Enfin, écris en une phrase une règle contre la cause qui pourrait revenir. Si aucune ne peut revenir, prends la règle « Pour chaque chiffre, indique le fichier et la page ou feuille d'origine. » Si je te dis que la sortie vient d'un skill ou d'une tâche planifiée, corrige la règle directement dedans. Sinon, sauvegarde-la dans un fichier AGENTS.md dans le dossier où tu travailles ; s'il n'existe pas, crée-le. Assure-toi que tu le lises au début de chaque travail dans cet outil ; dans Cowork, inscris-le dans les instructions du dossier. Dans un chat classique sans dossier, mémorise la règle, et si ce n'est pas possible, dis-moi précisément où la placer dans les paramètres. Dis-moi où la règle est sauvegardée.

Sortie :
Sources :

## Dans votre outil

### Microsoft Copilot
Dans Copilot Chat, vous pouvez joindre jusqu'à 20 fichiers, chacun jusqu'à 50 Mo, y compris Excel et PDF. Copilot mémorise la règle et affiche le message Memory updated ; vous trouverez le résumé dans les paramètres sous Chat settings › Personalization › Saved memories. La règle générale pour tous les chats se place dans Custom instructions au même endroit.

### ChatGPT
Dans un chat classique, joignez les sources via + près du champ de message. ChatGPT mémorise la règle dans la mémoire accessible dans les paramètres sous Personalization › Memory ; la règle générale pour tous les chats se place dans Custom Instructions au même endroit. Le dossier est géré par Codex, mode de l'application ChatGPT pour ordinateur, qui lit `AGENTS.md` et ouvre les fichiers directement dans le dossier.

### Claude
Dans un chat classique, Claude mémorise la règle dans la mémoire. Dans Cowork, vous sélectionnez le dossier avec la sortie et les sources lors de la tâche, et l'IA inscrit le lien vers `AGENTS.md` dans les instructions du dossier ; Claude Code lit `AGENTS.md` automatiquement.

### Gemini
Joignez les sources via Add files depuis l'ordinateur ou Google Drive, jusqu'à 10 fichiers de 100 Mo maximum. Si une feuille manque dans Google Sheets, ouvrez-la et téléchargez-la via File › Download au format CSV. Gemini n'a ni mémoire ni instructions personnalisées dans le compte professionnel, donc sauvegardez tout le prompt et la règle comme skill (écrivez « Sauvegarde comme skill ») ; pour la prochaine vérification, il suffira de fournir la sortie et les sources.
## Pourquoi la sortie IA ne correspond pas

L'erreur dans la sortie a généralement une des six causes, chacune nécessitant une règle différente pour la prévenir :

| Cause | Comment la reconnaître | Règle pour la prochaine fois |
|---|---|---|
| Source manquante | L'IA a inventé un chiffre ou une promesse, absent des sources | Ce que l'IA ne trouve pas dans les sources, elle marque `[VÉRIFIER]`. |
| Consigne floue | Les prix sont parfois TTC, parfois HT, ou pour une autre période | Les prix sont toujours HT et pour le mois calendaire complet. |
| IA a mal compris la source | La sortie contient une décision qui n'était qu'une proposition en réunion, ou des chiffres d'une autre colonne | Seule la décision explicitement approuvée dans la source compte. |
| Source incomplète | Dernières pages PDF, deuxième feuille du tableau ou début d'un long chat manquent | L'IA indique au début combien de pages et feuilles elle a chargées. |
| Source obsolète | Un ancien tarif est dans le dossier à côté du nouveau, et l'IA a pris l'ancien | Les prix proviennent uniquement du tarif le plus récent, dont le nom est sous la sortie. |
| Erreur de calcul | Somme ou pourcentage ne correspondent pas au recalcul | L'IA recalcule chaque chiffre et montre le calcul. |

`AGENTS.md` est un fichier texte simple avec les règles pour l'IA dans le dossier où vous travaillez. L'IA en mode Cowork ou Code le lit au début de chaque travail, donc vous n'avez pas à répéter la règle ; là où l'outil doit le configurer, l'IA le fait selon le prompt. Dans un chat classique, l'IA mémorise la règle.

Un skill est une instruction sauvegardée pour l'IA et une tâche planifiée que l'IA lance elle-même à l'heure définie. Si l'erreur vient de là, l'IA corrige la règle directement dedans, et la correction s'applique à toutes les sorties suivantes.
## Laissez l'IA contrôler elle-même

Une règle générale fait que l'IA compare chaque sortie avec chiffres aux sources avant de vous la montrer ; la règle de l'exercice ne couvre qu'une cause. Dans le dossier, l'IA écrit la règle dans `AGENTS.md`, dans un chat classique dans la mémoire. Il suffit de saisir :

```text
Sauvegarde une règle pour tout travail avec moi : Avant de me montrer un rapport, une offre, une présentation ou un e-mail avec des chiffres, compare chaque chiffre et affirmation avec les sources. Sous la sortie, écris en une phrase de quels fichiers elle provient et ce qui n'a pas pu être vérifié. Ce qui manque dans les sources, marque [VÉRIFIER]. Dans le dossier, écris la règle dans AGENTS.md et assure-toi de la lire au début de chaque travail dans cet outil ; dans Cowork, inscris-la dans les instructions du dossier. Dans un chat classique sans dossier, mémorise-la.
```
## Exemple

Lucie Benešová, d'une agence organisant des événements d'entreprise, envoie le 16/10/2026 à l'entreprise Kovo Jihlava une offre pour une soirée de Noël pour 120 invités. L'offre a été préparée par l'IA dans le dossier `Offres` à partir de la demande et des tarifs. La vérification renvoie trois constats :

| Dans la sortie | Dans la source | Cause |
|---|---|---|
| buffet 120 × 690 CZK | `tarif-2026-10.pdf`, page 2 : 740 CZK par personne | source obsolète, l'IA a pris le tarif de l'an dernier dans le même dossier |
| location de salle 18 000 CZK TTC | idem : 18 000 CZK HT | consigne floue, il n'était pas précisé si les prix devaient être TTC |
| vestiaire absent de l'offre | `demande-kovo.pdf`, page 3 : vestiaire pour 120 invités | source incomplète, l'IA n'a lu que les deux premières pages de la demande |

L'IA recalcule le buffet à 88 800 CZK, ajoute le vestiaire selon le tarif et corrige le prix total. Lucie ouvre le tarif et vérifie elle-même le prix du buffet à la page 2. Dans `AGENTS.md` du dossier `Offres`, l'IA écrit :

```text
Prends les prix uniquement dans le tarif le plus récent du dossier, indique pour chacun s'il est TTC ou HT, et sous l'offre mentionne le nom du tarif. Lis toute la demande et indique au début combien de pages elle contient.
```

L'offre suivante préparée par l'IA dans le même dossier une semaine plus tard se termine par la ligne « Prix HT selon `tarif-2026-10.pdf` ».
## En cas de blocage

- **L'IA ne charge pas toute la source ou signale qu'elle est trop volumineuse :** elle vous dira quelles feuilles ou pages manquent. Sauvegardez chaque feuille manquante d'Excel en CSV via Enregistrer sous, qui ne sauvegarde qu'une feuille, et envoyez-la dans le même chat avec le message « Voici les feuilles manquantes, termine la vérification. » L'IA vérifiera toute la source d'un coup dans
  [Cowork ou Code](card:when-chat-is-not-enough), où elle ouvrira le fichier directement dans le dossier.
- **Une affirmation n'a pas de source dans vos documents :** si c'est une donnée externe, par exemple un prix concurrent ou un chiffre de marché, laissez l'IA chercher la source sur internet via [Deep Research](card:deep-research). Sinon, rayez l'affirmation de la sortie.
- **Presque toute la sortie est erronée :** la cause est dans la consigne ou les sources, et corriger au cas par cas ne suffit pas. Ajoutez la source manquante, ajoutez la règle issue du contrôle à la consigne et faites refaire la sortie par l'IA.
- **L'IA fera la même erreur la prochaine fois :** demandez-lui où la règle est sauvegardée. Dans le dossier, elle doit être dans `AGENTS.md`. Dans un chat classique, la mémoire doit être activée ; si l'entreprise l'a désactivée, sauvegardez la règle selon le bloc « Dans votre outil », ou [passez en Cowork ou Code](card:when-chat-is-not-enough), où l'IA l'écrira dans `AGENTS.md`.
## Ce qui sera prêt

Vous avez une sortie corrigée où chiffres et affirmations correspondent aux sources, et pour chaque erreur corrigée vous savez pourquoi elle est survenue. Vous avez vérifié vous-même un chiffre clé sur lequel la sortie repose le plus. L'IA a sauvegardé la règle contre la cause de l'erreur dans `AGENTS.md`, dans un skill, dans la tâche ou en mémoire, pour l'utiliser automatiquement lors du travail suivant.
## Et ensuite

Quand les chiffres sont justes et que le texte doit encore sonner humain, passez-le au [anti-slop](card:anti-slop), c’est-à-dire un contrôle des tournures qui trahissent l’IA. Si vous contrôlez chaque semaine le même type de sortie, créez un [skill](card:create-skill-from-proven-process), c’est-à-dire un guide que l’IA ouvrira elle-même.
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
