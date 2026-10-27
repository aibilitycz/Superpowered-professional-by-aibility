# Dictez la tâche à l’IA : la voix plutôt que l’écriture

Parlez deux minutes de la tâche telle qu’elle vous vient, et l’IA en fera un cahier des charges clair, puis un travail après votre correction.

## Dictez la tâche à l’IA : la voix plutôt que l’écriture

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec une tâche réelle.
## À quoi ça sert

Le fournisseur vous écrit jeudi qu’il ne respectera pas le délai, et vous avez besoin d’un e-mail pour la direction d’ici vendredi. Vous tapez dans l’IA « Écris un e-mail à la direction pour annoncer le retard du projet » et vous obtenez un texte poli et général. Vous n’avez pas écrit pourquoi le retard, quelles options vous avez, ni que le directeur ne lit pas les longs e-mails, parce que vous ne vouliez pas détailler.

En parlant, vous dites aussi les contextes que vous n’auriez pas mis dans un cahier des charges écrit, par exemple pourquoi le délai a été repoussé et ce que le directeur ne lira pas dans l’e-mail.
## Ce qu’il faut préparer

- une tâche réelle, par exemple un e-mail à la direction ou un support pour une réunion,
- deux minutes où vous pouvez parler à voix haute, par exemple dans une salle de réunion,
- l’IA que vous utilisez au travail, ou une IA en [mode Cowork ou Code](glossary:workmode).
## Comment faire

1. Entrez le prompt et envoyez-le. Puis cliquez sur l’icône micro dans le champ de message et parlez deux minutes : ce que vous voulez, pour qui, ce que vous savez et ce qui vous préoccupe. Envoyez le texte, dans le chat avec les documents.
2. L’IA renvoie un cahier des charges en points avec des points d’interrogation sur les noms et chiffres qu’elle n’a pas compris. Corrigez-le, même à voix haute, puis laissez l’IA faire le travail et enregistrer la règle pour la prochaine fois.
3. Dans un nouveau chat, dictez une autre tâche sans prompt. L’IA doit d’abord vous rendre le cahier des charges en points.

Ne corrigez pas les bafouillages ni les digressions, l’IA s’en sortira.
## Exercice IA

Entrez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Dans le message suivant, je vais te dicter une tâche professionnelle. Je parlerai comme ça me vient, donc le texte contiendra des digressions, répétitions et erreurs de transcription vocale. Réponds juste que tu écoutes.

Fais d’abord un cahier des charges en ces points :
- Objectif : ce qui doit être produit et à quoi ça sert.
- Pour qui : qui va lire ou utiliser.
- Ce que nous savons : faits, décisions et documents sur lesquels tu dois t’appuyer. Si je mentionne un fichier dans le dossier projet, trouve-le et utilise-le.
- Points d’attention : ce qui ne doit pas manquer, ce que je ne veux pas et ce qui me préoccupe.
- Résultat : forme et longueur.

Marque d’un point d’interrogation les noms, chiffres, dates et termes techniques que la transcription a pu déformer. Si quelque chose manque pour bien faire le travail, pose-moi au maximum deux questions. Montre-moi le cahier des charges et attends que je le corrige ou confirme. Puis fais le travail selon le cahier corrigé.

Enfin, enregistre une règle pour la prochaine fois : quand je te dicterai un nouveau travail, traite-le de la même façon, c’est-à-dire d’abord les points du cahier avec les points d’interrogation sur les incertitudes, puis après ma confirmation, le travail. Ajoute à la règle les noms et termes que la transcription a déformés, avec leur orthographe correcte. Si tu travailles dans un dossier projet, écris cela dans le fichier AGENTS.md, et s’il n’existe pas, crée-le. Assure-toi de le lire au début de chaque travail dans cet outil ; dans Cowork, inscris-le dans les instructions du dossier. Sinon, garde-le en mémoire.

## Dans votre outil

### Microsoft Copilot
Dans Copilot Chat, lancez la dictée avec l’icône micro dans le champ de message (Start dictation) ; le tchèque est parmi les langues supportées. Copilot enregistre la règle dans sa mémoire et affiche le message Memory updated ; vous la trouverez dans les paramètres sous Chat settings › Personalization › Saved memories. Si vous n’avez pas de mémoire, entrez la règle dans Custom instructions au même endroit.

### ChatGPT
Lancez la dictée avec l’icône micro dans le champ de message, dans l’application desktop avec le bouton Dictate ; l’icône Voice active le mode vocal. ChatGPT enregistre la règle en mémoire (paramètres, Personalization › Memory), sinon entrez-la dans Custom Instructions. Codex dans l’application ChatGPT desktop l’écrit dans `AGENTS.md` dans le dossier projet.

### Claude
Dans l’application Claude, dictez avec l’icône micro près du champ message, l’icône avec onde sonore lance le mode vocal. La dictée fonctionne aussi en Cowork, où vous choisissez le dossier projet lors de la tâche et l’IA inscrit le lien vers `AGENTS.md` dans les instructions du dossier. Dans Claude Code, activez la dictée avec la commande `/voice` et réglez le tchèque dans `/config`.

### Gemini
Lancez la dictée avec le micro dans le champ message ; la langue de transcription suit celle du navigateur, donc réglez-le en tchèque. L’application Gemini n’a pas de mémoire sur compte professionnel, donc à la fin de l’exercice, écrivez « Écris-moi la règle en texte ». Mettez la règle dans les instructions d’un nouveau Gem (Gems › New Gem) et dictez l’étape 4 et les tâches suivantes dans ce Gem.
## Qu’est-ce que la dictée

La dictée est la transcription de la parole en texte. Vous parlez et les mots s’écrivent dans le champ message, donc vous les voyez avant d’envoyer et pouvez corriger. Le mode vocal est une autre fonction : l’IA dialogue avec vous et répond à voix haute. Pour un cahier des charges, la dictée est adaptée. Sur téléphone, il suffit de l’icône micro sur le clavier.

`AGENTS.md` est un fichier de règles pour l’IA dans le dossier projet. L’IA en mode Cowork ou Code le lit au début de chaque travail, donc vous n’avez pas à répéter la règle de dictée ; là où l’outil doit le configurer, l’IA le fait selon le prompt. En chat classique, la mémoire joue ce rôle : l’IA y garde ce qui doit rester valable dans d’autres chats.
## Où dicter

Le plus simple est de dicter directement dans l’IA. Microsoft Copilot, ChatGPT, Claude et Gemini ont une icône micro dans le champ message, donc rien à installer. Où la trouver est expliqué dans le bloc « Dans votre outil ».

Dans un e-mail ou document, vous dictez avec la dictée intégrée à l’ordinateur :

- **Windows :** appuyez sur les touches Windows + H et parlez.
- **Mac :** activez la dictée dans Réglages système › Clavier › Dictée, où vous pouvez aussi définir un raccourci clavier.

Si la dictée intégrée vous comprend mal, essayez une application de dictée. **Wispr Flow** dicte en plus de 100 langues et détecte la langue automatiquement, **Soniox** propose explicitement le tchèque. Les deux fonctionnent sur Mac, Windows, iPhone et Android et ont une version gratuite avec limite hebdomadaire. Sur un ordinateur d’entreprise, l’installation peut être soumise à l’autorisation IT.
## Exemple

Lenka coordonne le lancement d’un nouveau système de gestion de stock. Jeudi 8/10/2026, le fournisseur lui écrit qu’il ne pourra pas connecter la comptabilité avant le 2/11. Le cahier des charges écrit serait « Écris un e-mail à la direction pour annoncer le retard du lancement ». Lenka ouvre l’IA dans le dossier projet, entre le prompt puis parle deux minutes. Elle dit que le système peut fonctionner sans la connexion, mais que deux collègues devront saisir manuellement les factures pendant deux semaines. Le directeur financier Hrubeš voudra savoir le coût, et le directeur ne lit pas les longs e-mails. L’IA renvoie :

```text
Objectif : informer la direction du retard de la connexion du système de stock à la comptabilité.
Pour qui : directeur et directeur financier (nom « hrubě » ?).
Ce que nous savons : le fournisseur ne livrera pas la connexion avant le 2/11 ; le système peut fonctionner sans, les factures seront saisies manuellement par deux collègues.
Points d’attention : le directeur financier voudra connaître le coût ; le directeur ne lit pas les longs e-mails.
Résultat : e-mail de cinq lignes.
```

La transcription a transformé M. Hrubeš en « hrubě » et l’IA l’a marqué d’un point d’interrogation. Lenka corrige deux choses : le nom et l’objectif. La direction doit choisir d’ici mercredi 14/10 si le système démarre le 2/11 sans connexion ou si le lancement est repoussé au 16/11. L’IA écrit un e-mail avec deux variantes et indique pour chacune le surcroît de travail manuel. Elle ajoute la règle dans `AGENTS.md` avec la ligne « Hrubeš (transcription : hrubě) ». Une semaine plus tard, Lenka parle dans un nouveau chat et l’IA lui rend d’abord le cahier des charges en points.
## En cas de blocage

- **L’IA commence à répondre à voix haute :** vous avez activé le mode vocal. Désactivez-le et utilisez l’icône micro dans le champ message. La dictée ne fait que transcrire la parole en texte.
- **La transcription est en anglais ou incompréhensible :** la dictée n’est pas réglée en tchèque. Vérifiez la langue de l’application et du navigateur, et si la transcription reste en anglais, dictez la tâche sur téléphone avec l’icône micro du clavier, ou utilisez la dictée ordinateur du bloc « Où dicter ».
- **Après 30 secondes, vous ne savez plus quoi faire :** envoyez ce que vous avez. L’IA vous posera les questions manquantes, et vous répondrez à voix haute.
- **Dans un nouveau chat, l’IA n’applique pas la règle :** demandez-lui « Que te souviens-tu de la dictée ? ». En Cowork ou Code, vérifiez que vous avez ouvert le même dossier que la fois précédente. Si la mémoire manque en chat classique ou est désactivée par l’entreprise, enregistrez la règle selon le bloc « Dans votre outil », ou passez en [Cowork ou Code](card:when-chat-is-not-enough).
## Ce qui sera prêt

Vous avez un travail finalisé que l’IA a fait selon votre cahier des charges dicté et corrigé. Dans `AGENTS.md` ou la mémoire de l’IA, la règle indique que l’IA organise d’abord la dictée, avec les noms mal transcrits. Dans un nouveau chat, vous avez vérifié qu’il suffit de parler la prochaine fois.
## Et ensuite

Si l’IA ne fait pas ce que vous voulez même avec un bon cahier des charges, corrigez le résultat avec des remarques précises, comme l’explique la carte [Résolvez la tâche du jour avec l’IA](card:first-ai-use-case). Traitez l’enregistrement d’une réunion ou d’un entretien avec d’autres personnes selon la carte [Traitez la transcription de réunion](card:konverzace-do-struktury).
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
