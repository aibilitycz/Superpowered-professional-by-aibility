# Traitez la transcription de la réunion : décisions et tâches du projet

L’IA extrait de la transcription une synthèse courte avec décisions et tâches pour le projet, et traite de la même façon les réunions suivantes.

## Traitez la transcription de la réunion : décisions et tâches du projet

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec la transcription d’une réunion.
## À quoi ça sert

Mercredi, vous avez eu une réunion d’une heure sur la nouvelle grille tarifaire avec les finances et le marketing, et vous avez une transcription de vingt pages. Vendredi, un collègue du commercial vous demande quelle est la remise maximale autorisée pour les gros clients, et vous n’êtes pas sûr si 8 % était une décision ou juste une proposition.

Vous trouverez en une minute une synthèse courte avec décisions et tâches, accessible à vous, au collègue et au nouveau chat IA dans le dossier du projet, et les mots exacts restent dans la transcription juste à côté.
## Ce qu’il faut préparer

- le dossier du projet auquel la réunion appartient,
- la transcription d’une réunion récente sous forme de fichier ou de texte,
- une IA en [mode Cowork ou Code](glossary:workmode), ou un projet dans l’IA que vous utilisez.
## Comment faire

1. Ouvrez l’IA en mode Cowork ou Code dans le dossier du projet, insérez le prompt et ajoutez la transcription. L’IA enregistrera la transcription dans `prepisy`, la synthèse dans `schuzky.md` et la règle dans `AGENTS.md`.
2. Sur le point le plus important, écrivez « Montre-moi le texte exact dans la transcription. » Pour l’argent ou les délais, trouvez l’heure dans la transcription (Ctrl+F) et lisez-la vous-même.
3. Dans un nouveau chat dans le même dossier, demandez « Qui doit faire quoi et pour quand ? » L’IA doit répondre selon la synthèse.

Les propositions non acceptées ne doivent pas figurer dans la synthèse.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code, ouverte dans votre dossier :

Traite la transcription de la réunion pour ce projet. Je te joins la transcription ou je te dis où elle se trouve sur l’ordinateur. Si dans cet environnement tu ne peux pas enregistrer les fichiers dans le dossier du projet, dis-le-moi tout de suite pour que je puisse passer en mode Cowork ou Code.

Enregistre la transcription sans modification dans le sous-dossier prepisy du dossier projet et nomme-la avec la date et le sujet de la réunion, par exemple 2026-10-07-porada-cenik. Déplace le fichier tel quel, avec son extension, par exemple .docx. Si je t’ai donné la transcription en texte, enregistre-la comme fichier texte sans rien raccourcir ni réécrire, pour garder les heures et les noms des interventions.

Puis rédige une synthèse courte à partir de la transcription et ajoute-la en haut du fichier schuzky.md dans le dossier projet. S’il n’existe pas, crée-le. La synthèse doit avoir cette forme :

### RRRR-MM-DD : sujet de la réunion
Présents : noms.
Décisions :
- ce qui a été décidé et à partir de quand c’est valable.
Tâches :
- qui, quoi et pour quand.
Questions ouvertes :
- ce qui reste non décidé et qui doit le vérifier.
Transcription : lien vers le fichier dans prepisy.

Dans décisions et tâches, mets seulement ce sur quoi les participants se sont mis d’accord. Omet les propositions non acceptées. Si une tâche n’a pas de personne ou de date, écris « non précisé ». Pour chaque décision et tâche, ajoute entre parenthèses l’heure ou l’endroit dans la transcription où elle a été mentionnée.

Enfin, ajoute dans le fichier AGENTS.md du dossier projet la règle : « Quand tu reçois une transcription de réunion, enregistre-la sans modification dans prepisy et ajoute en haut de schuzky.md une synthèse au même format que précédemment : seulement ce sur quoi les participants se sont mis d’accord, avec l’heure dans la transcription pour chaque point et les données manquantes comme ‘non précisé’. Pour les questions sur les tâches et décisions, réponds selon schuzky.md. » S’il n’existe pas, crée AGENTS.md. Assure-toi qu’il soit lu au début de chaque travail dans cet outil ; dans Cowork, inscris-le dans les instructions du dossier.

À la fin, montre-moi la synthèse et dis-moi où tu as tout enregistré.

## Dans votre outil

### Microsoft Copilot
La transcription de Teams se trouve dans l’onglet Recap du chat de la réunion. La synthèse est enregistrée par Cowork à côté du bouton Chat, si l’administrateur l’a activé : vous connectez le dossier OneDrive via Add attachments et ajoutez à la fin du prompt « Rédige les synthèses dans un document Word. » Sans Cowork, vous ne pouvez pas utiliser ce prompt : créez un notebook (Notebooks › New notebook) et mettez la phrase du bloc Si vous n’avez pas Cowork ni Code dans More options › Instructions.

### ChatGPT
Le dossier est géré par Codex : dans l’application ChatGPT pour ordinateur, passez à Codex, choisissez ouvrir un dossier (open a folder) et insérez le prompt ; les tâches planifiées se trouvent sous Scheduled. Sans Codex, le projet est un projet ChatGPT : New project, transcriptions via Add source, instructions dans ••• › Project settings et invitez les collègues via Share.

### Claude
Cowork est dans l’application Claude pour ordinateur dans les forfaits payants : vous choisissez le dossier en créant la tâche et l’IA note le lien vers `AGENTS.md` dans les instructions du dossier. Les tâches planifiées sont dans le panneau gauche sous Scheduled et ne tournent que si l’ordinateur est allumé. Sans Cowork, le projet est un projet Claude : New Project, transcriptions via +, instructions dans Set project instructions et invitez les collègues via Share project.

### Gemini
La transcription de Google Meet est un document dans le Drive de l’organisateur dans le dossier Meet Recordings ; Take notes for me ne supporte pas encore le tchèque. Gemini ne gère pas les dossiers sur ordinateur, le projet est un Gem : Gems › New Gem, transcriptions via Knowledge › Add from Drive. Vous enregistrez la synthèse via Share & export › Export to Docs et partagez le Gem avec les collègues via Share.
## Si vous n’avez ni Cowork ni Code

Sans mode Cowork ou Code, traitez les réunions dans un projet de votre outil : ajoutez-y les transcriptions et ses instructions s’appliquent à chaque chat. Dans les instructions du projet, écrivez :

```text
Pour chaque transcription, rédige une synthèse : décisions, tâches avec personne et date, questions ouvertes. Seulement ce sur quoi les participants se sont mis d’accord, avec l’heure dans la transcription pour chaque point.
```

Après chaque réunion, ajoutez la transcription au projet et écrivez « Fais la synthèse de la nouvelle transcription ». À la question « Qui doit faire quoi ? », l’IA répondra selon les transcriptions. Où trouver le projet est expliqué dans le bloc Dans votre outil, et comment [passer en Cowork ou Code](card:when-chat-is-not-enough), onglet séparé.
## Qu’est-ce qu’une transcription de réunion

La transcription est le texte mot à mot de la réunion, généralement avec l’heure et le nom pour chaque intervention. Une réunion d’une heure donne des dizaines de pages. Elle est produite par l’outil qui enregistre la réunion. Où la trouver dans Teams et Google Meet est dans le bloc « Dans votre outil ». Pour d’autres outils :

- **Zoom :** elle se trouve avec l’enregistrement dans le cloud sous forme de fichier de sous-titres `.vtt`, que l’IA lit comme texte. Vous recevez un e-mail quand c’est prêt.
- **Plaud**, enregistreur de poche : dans l’application, ouvrez l’enregistrement et exportez-le en transcription texte ou Word via l’icône en haut à droite.
- **tl;dv**, enregistreur de réunions en ligne : dans l’onglet transcription, copiez-la avec le bouton copier et collez dans le chat IA.

`schuzky.md` est un fichier texte simple dans le dossier projet avec les synthèses de toutes les réunions, la plus récente en haut. L’extension `.md` signifie synthèse en [Markdown](glossary:markdown), où les dièses `###` en début de ligne marquent un titre. Dans le sous-dossier `prepisy` se trouvent les transcriptions complètes, un fichier par réunion.

`AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. L’IA en mode Cowork ou Code le lit au début de chaque travail, et là où l’outil doit le configurer, l’IA le fait selon le prompt. Après une autre réunion, il suffit d’ajouter la transcription dans le chat du dossier projet et d’écrire « Traite la réunion selon `AGENTS.md`. »
## Pour automatiser le traitement des réunions

Si vous enregistrez souvent des réunions, il suffit de télécharger la transcription et le reste est fait par une tâche planifiée que l’IA lance chaque jour ouvré l’après-midi. Elle trouve les nouvelles transcriptions et traite chacune dans le bon projet selon la règle dans `AGENTS.md`. Mettez la consigne dans l’IA en mode Cowork ou Code et demandez-lui de créer la tâche planifiée ; quels outils le font est dans le bloc « Dans votre outil ». Au lieu de « Projets », écrivez le dossier où sont vos projets :

```text
Chaque jour ouvré à 17h00, parcours le dossier Téléchargements et trouve les transcriptions de réunions. Pour chacune, identifie par son nom et contenu à quel projet dans le dossier Projets elle appartient. Si dans le fichier schuzky.md de ce projet il y a déjà une synthèse pour cette réunion, saute la transcription. Déplace les autres dans le sous-dossier prepisy de ce projet et traite-les selon la règle dans son AGENTS.md. Si tu ne sais pas où mettre une transcription, laisse-la sur place. À la fin, dis-moi quelles réunions tu as traitées et pour quelles transcriptions tu ne sais pas où elles vont.
```

La tâche travaille avec les fichiers sur votre ordinateur, donc elle ne tourne que si l’ordinateur est allumé et l’application ouverte.
## Exemple

Eva coordonne la mise en place d’une nouvelle grille tarifaire pour les clients de gros. Mercredi 7/10/2026, elle a une réunion en ligne avec Martin des finances et Petra du marketing. Après la réunion, elle télécharge la transcription, ouvre l’IA dans le dossier `novy-cenik`, insère le prompt et glisse la transcription dans la fenêtre. L’IA l’enregistre comme
`prepisy/2026-10-07-porada-cenik.docx` et ajoute dans `schuzky.md` :

```text
### 2026-10-07 : Réunion sur la nouvelle grille tarifaire
Présents : Eva, Martin (finances), Petra (marketing).
Décisions :
- La remise pour les gros clients sera au maximum de 8 %. (12:40)
- La nouvelle grille tarifaire est valable à partir du 1er janvier 2027, les clients la recevront le 1er décembre. (31:05)
Tâches :
- Martin calculera les marges pour les nouveaux prix avant le 14 octobre. (18:20)
- Petra préparera un flyer pour les clients, date : non précisée. (35:50)
Questions ouvertes :
- La nouvelle grille tarifaire s’applique-t-elle aussi à la boutique en ligne ? Eva et la responsable boutique vérifieront.
- Qui enverra la grille aux commerciaux ? Personne ne l’a pris en charge lors de la réunion.
Transcription : prepisy/2026-10-07-porada-cenik.docx
```

Eva écrit « Montre-moi le texte exact sur la remise. » L’IA affiche la phrase à 12:40 où Martin a validé les 8 %. Vendredi, Eva demande dans un nouveau chat dans le même dossier qui doit faire quoi et pour quand. La bonne réponse est : Martin calcule les marges avant le 14/10, la date manque pour le flyer de Petra. Si l’IA demande de quelle réunion il s’agit, elle travaille probablement hors du dossier projet.
## En cas de blocage

- **L’IA affirme avoir enregistré la synthèse, mais le fichier `schuzky.md` n’est pas dans le dossier :** vous travaillez probablement dans un chat classique qui ne peut pas modifier les fichiers. Passez en [mode Cowork ou Code](card:when-chat-is-not-enough) et choisissez le dossier projet.
- **La synthèse contient une décision que vous n’avez pas prise :** l’IA a pris une proposition pour un accord. Dites-lui ce qui est différent pour qu’elle corrige la synthèse et vérifie les autres points. Comment vérifier le résultat dans la source est expliqué dans [Contrôle du résultat](card:kontrola-vysledku).
- **Vous n’avez pas la transcription :** dans Teams, elle est téléchargée par l’organisateur, demandez-la lui. Si la réunion n’a pas été enregistrée, dites ou dictez à l’IA ce dont vous vous souvenez, la synthèse sera quand même créée.
- **L’IA n’utilise pas la règle AGENTS.md la fois suivante :** écrivez « Traite la réunion selon `AGENTS.md`. » Si ça ne marche pas, vérifiez que `AGENTS.md` est bien dans le dossier projet et que la règle y figure.
## Ce qui sera prêt

Vous avez la synthèse de la réunion dans `schuzky.md` dans le dossier projet, la transcription complète dans le sous-dossier `prepisy` et dans `AGENTS.md` la règle pour que l’IA traite automatiquement chaque réunion suivante. Vous avez vérifié le point le plus important avec le texte exact de la transcription et testé dans un nouveau chat que l’IA sait qui doit faire quoi selon la synthèse.
## Et après

Avec la même transcription, l’IA peut aussi préparer d’autres livrables que la synthèse, par exemple un brief pour une autre réunion ou une réponse au client. Elle traite de la même façon un long fil de commentaires ou d’e-mails : au lieu de la transcription, vous lui donnez le fil.
Pour les réunions sur plusieurs projets, faites-vous créer une [procédure que l’IA réutilisera](card:create-skill-from-proven-process).
Si les synthèses doivent aussi être envoyées aux collègues, poursuivez avec une [tâche planifiée](card:recurring-ai-task).
## Markdown

**Qu'est-ce que c'est :** Un format texte simple dans lequel les titres, listes, liens et autres structures sont écrits à l'aide de quelques caractères courants. Les fichiers utilisent généralement l'extension `.md`.

**Ce que ce n'est pas :** Ce n'est ni un langage de programmation ni un format réservé aux développeurs.

**Pourquoi l'étudiant en a besoin :** Il reste facile à lire et à modifier, aussi bien pour les humains que pour l'IA, et peut être transféré entre différents outils.

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
