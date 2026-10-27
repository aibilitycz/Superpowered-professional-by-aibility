# Rangez la mémoire de l’IA : ce qu’elle retient de vous entre les conversations

L’IA passe en revue ce qu’elle retient de vous, corrige les informations obsolètes et supprime les erreurs, pour que la nouvelle conversation parte de votre situation actuelle.

## Rangez la mémoire de l’IA : ce qu’elle retient de vous entre les conversations

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec l’IA que vous utilisez depuis quelques semaines.
## À quoi ça sert

Le projet de la nouvelle boutique en ligne s’est terminé en septembre, mais l’IA continue de le mentionner dans ses propositions d’e-mails et prend en compte ses échéances. De plus, elle met tout dans un tableau, même si ce tableau ne servait qu’à un seul rapport.

L’IA stocke dans sa [mémoire](glossary:memory) ce qu’elle apprend sur vous, sans savoir ce qui est terminé. En demandant de temps en temps ce qu’elle sait, vous pouvez corriger cela en quelques minutes.
## Ce qu’il faut préparer

- L’IA que vous utilisez au travail depuis quelques semaines,
- les réglages de la mémoire dans votre outil ; son emplacement est indiqué dans le bloc « Dans votre outil ».
## Comment faire

1. Collez le prompt dans une nouvelle conversation et regardez ce que l’IA sait de vous. Pour chaque élément, elle proposera de le garder, corriger ou supprimer.
2. Dites à l’IA quelles propositions sont valides, par exemple « oui, sauf le point 3 », et elle effectuera les modifications dans la mémoire. Parcourez aussi vous-même la liste dans les réglages, l’IA ne liste pas forcément tout.
3. Dans une nouvelle conversation, posez une question sur un sujet que vous avez corrigé. Si l’IA répond encore avec l’ancienne version, dites-lui ce qui est correct ou supprimez l’élément dans les réglages.

Pour un élément incertain, demandez si cela sera encore valable dans un mois.
## Exercice IA

Collez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Passe en revue avec moi ce que tu sais de moi et range cela.

Liste tout ce que tu as enregistré dans ta mémoire ou ce que tu sais de nos conversations précédentes. Classe cela en quatre groupes : qui je suis et ce que je fais, la forme des réponses que je souhaite et comment travailler avec moi, sur quoi je travaille, où trouver quoi (documents, outils, personnes). Pour chaque élément, écris une phrase courte et précise, en précisant s’il est stocké en mémoire ou issu d’une conversation précédente.

Pour chaque élément, propose de le garder, corriger (en écrivant directement la nouvelle version) ou supprimer. Propose de supprimer ce qui est obsolète, mal compris ou ne concernait qu’une tâche unique. Fusionne les éléments qui disent la même chose. Si tu ne sais pas si quelque chose est encore valable, demande-moi.

Quand je t’aurai dit ce qui est valide, applique les changements directement dans la mémoire. Ce que tu ne peux pas modifier, liste-le avec l’emplacement dans les réglages. Pour les éléments issus de conversations précédentes qui ne sont plus valides, enregistre ce qui est vrai maintenant et, si tu sais de quelle conversation ils viennent, indique-le-moi.

Enfin, enregistre cette règle dans la mémoire, et remplace toute règle similaire existante : « Quand je te corrige et que la correction doit s’appliquer aussi la prochaine fois, enregistre-la en une phrase : ce qui est vrai, pourquoi et quand l’utiliser. Si tu as un ancien enregistrement à ce sujet, remplace-le pour éviter les doublons. » Montre-moi ensuite l’état actuel de la mémoire.

## Dans votre outil

### Microsoft Copilot
Dans Copilot Chat sur `copilot.cloud.microsoft`, ouvrez en haut à droite Paramètres et plus, Paramètres du chat, Personnalisation, puis dans la tuile Souvenirs enregistrés choisissez Gérer les souvenirs enregistrés. Supprimez un souvenir avec l’icône corbeille, ou tous avec le bouton Supprimer tous les souvenirs. Si vous demandez à Copilot dans le chat d’oublier quelque chose, il le supprime lui-même.

### ChatGPT
Dans Paramètres, Personnalisation, Mémoire (même emplacement en version française), vous avez soit un résumé (Memory summary) où vous pouvez corriger une ligne ou choisir Ne plus mentionner ceci, soit une liste de Souvenirs enregistrés avec suppression. Codex a sa propre mémoire, supprimable aussi via Supprimer les souvenirs Codex ; ajoutez au prompt « Ne modifie pas la mémoire, ce qui doit toujours être vrai, écris-le dans `AGENTS.md`. »

### Claude
Dans Paramètres, Mémoire est divisée en thèmes (Topics) : ouvrez un thème, corrigez-le avec l’icône d’édition ou supprimez-le via Supprimer. Dans les forfaits entreprise, la mémoire est activée par le propriétaire de l’organisation et vous pouvez l’activer vous-même. Claude Code a une mémoire par projet dans des fichiers listés dans `MEMORY.md`, lancez donc le prompt dans chaque projet ; ouvrez le dossier avec la commande `/memory`.

### Gemini
Gemini avec un compte professionnel n’a pas de mémoire, il ne stocke donc rien des conversations. Ce qui doit toujours être vrai est dans les instructions du robot Gem (Gems). Collez le prompt dans la conversation avec les instructions du Gem que vous utilisez le plus souvent : l’IA les traitera comme la mémoire et vous enregistrerez la version corrigée dans le Gem.
## Qu’est-ce que la mémoire IA

La mémoire IA, dans les réglages Memory ou Mémoire, est l’endroit où l’IA stocke ce qu’elle apprend de vous dans les conversations : qui vous êtes, comment vous souhaitez les réponses, sur quoi vous travaillez. Certains outils lisent aussi vos conversations précédentes, ce qui fait entrer dans la mémoire des données valables uniquement pour une tâche unique.

L’IA utilise la mémoire comme aide et choisit elle-même ce qu’elle utilise. Ce qui doit être vrai dans chaque conversation, mettez-le dans les [Instructions personnalisées](card:custom-instructions), c’est-à-dire les consignes permanentes que vous écrivez dans les réglages.

Les outils qui travaillent avec un dossier sur votre ordinateur conservent souvent la mémoire dans des fichiers texte simples. L’IA les modifie directement et vous pouvez les ouvrir et lire.
## Pour que la mémoire s’entretienne seule

La règle à la fin du prompt garantit que l’IA enregistre chaque nouvelle correction en une phrase avec la raison, et remplace l’ancienne version, évitant l’accumulation dans la mémoire.

Quand l’IA travaille en [mode](glossary:workmode) Code avec un dossier sur votre ordinateur et que la mémoire est dans des fichiers, le nettoyage peut se faire automatiquement une fois par mois. Donnez-lui cette consigne et demandez-lui de créer la tâche planifiée :

```text
Chaque premier lundi du mois à 9h00, passe en revue ta mémoire. Fusionne les enregistrements qui disent la même chose. Supprime ceux qui contredisent des informations plus récentes ou concernent des sujets terminés. Si tu n’es pas sûr, laisse l’enregistrement et demande-moi. Si l’outil gère la mémoire lui-même et que ses fichiers ne doivent pas être modifiés manuellement, ne change rien et écris-moi ce qui ne va pas. Termine par un résumé : ce qui a été fusionné, supprimé et ce sur quoi tu demandes.
```

La tâche ne s’exécutera que si l’ordinateur est allumé et l’application ouverte. Si vous avez déjà une [revue hebdomadaire](card:weekly-ai-review), vous pouvez y ajouter le nettoyage de la mémoire au lieu d’une tâche séparée. Dans une conversation classique, il suffit de coller le prompt de l’exercice IA tous les quelques mois.
## Exemple

Klára Novotná coordonne des projets dans une entreprise de mobilier de bureau. La nouvelle boutique en ligne a été lancée en septembre et depuis octobre, Klára prépare un stand pour le salon de printemps. Le mardi 3 novembre 2026, elle colle le prompt et l’IA affiche notamment :

```text
### La forme des réponses souhaitée
- Elle veut des réponses courtes, au maximum cinq points. Stocké en mémoire, fusionné de deux enregistrements. Proposition : garder.
- Elle veut toujours les résultats en tableau. Stocké en mémoire. Proposition : supprimer, le tableau ne servait qu’au rapport d’août.

### Sur quoi elle travaille
- Elle gère le lancement de la nouvelle boutique en ligne avec échéance au 30/09. Stocké en mémoire. Proposition : corriger en « La boutique est en ligne depuis septembre, elle prépare maintenant le stand pour le salon. »
- Elle traite une réclamation sur une livraison de chaises. Issu d’une conversation précédente « Réclamation chaise ». Proposition : enregistrer que la réclamation est clôturée.

### Où trouver quoi
- Les échéances du projet sont dans le tableau « Planning boutique en ligne ». Stocké en mémoire. Proposition : corriger en tableau « Salon 2027 ».
```

Klára répond « oui, sauf pour le tableau : je veux continuer à avoir les échéances en tableau ». L’IA modifie l’enregistrement du tableau, corrige les deux autres et enregistre que la réclamation est terminée. Dans une nouvelle conversation, Klára écrit « prépare un e-mail au fournisseur du stand, ce dont nous avons besoin avant fin novembre » et reçoit un e-mail court sans mention de la boutique en ligne.
## En cas de blocage

- **L’IA dit qu’elle ne se souvient de rien ou affiche deux phrases générales :** la mémoire est probablement désactivée ou presque vide, rien à nettoyer. Activez-la dans les réglages, et si ce n’est pas possible dans un compte entreprise, enregistrez des consignes permanentes dans les [Instructions personnalisées](card:custom-instructions).
- **L’IA dit avoir supprimé un enregistrement mais il est toujours dans les réglages :** supprimez-le directement dans la liste mémoire. Dans ChatGPT, supprimer une conversation ne supprime pas l’enregistrement en mémoire.
- **La nouvelle conversation utilise encore une ancienne information :** l’IA la prend probablement d’une conversation précédente, pas de la mémoire. Dites-lui ce qui est vrai maintenant pour qu’elle l’enregistre ; dans ChatGPT, choisissez Ne plus mentionner ceci dans le résumé mémoire de l’ancienne info. Si elle revient encore, supprimez la conversation source.
- **L’IA affiche peu d’éléments alors qu’il y en a plus dans les réglages :** demandez-lui de passer chaque groupe séparément. Ce qu’elle n’affiche toujours pas, corrigez ou supprimez directement dans les réglages.
## Ce qui sera prêt

La mémoire de votre IA ne contient plus que ce qui est vrai aujourd’hui, et dans une nouvelle conversation vous avez vérifié que l’IA part de la version corrigée. L’IA a enregistré la règle pour écrire les prochaines corrections afin d’éviter les doublons.
## Et ensuite

Les règles selon lesquelles l’IA doit travailler sur tout le projet sont écrites dans un [fichier de règles pour l’IA](card:agents-md). Quand vous voudrez nettoyer régulièrement toute la configuration IA, pas seulement la mémoire, poursuivez avec la [revue hebdomadaire](card:weekly-ai-review).
## Mémoire de l'IA

**Qu'est-ce que c'est :** Un espace où l'IA stocke ce qu'elle apprend sur la personne à partir des conversations : corrections, préférences, noms et travaux en cours. Dans les nouvelles conversations, l'IA sélectionne elle-même ce qui est pertinent. L'emplacement de la mémoire et qui peut l'activer varient selon l'outil.

**Ce que ce n'est pas :** Ce ne sont pas des instructions permanentes écrites par l'utilisateur (Custom Instructions), ni l'historique des conversations. Ce qui doit être valable dans chaque conversation appartient aux instructions, car l'IA utilise dans sa mémoire uniquement ce qu'elle juge important.

**Pourquoi l'étudiant en a besoin :** Cela aide à décider ce qu'il faut mémoriser, ce qu'il faut inscrire dans les instructions et quand nettoyer la mémoire pour éviter que l'IA travaille avec des informations obsolètes.

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
