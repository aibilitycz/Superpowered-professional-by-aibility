# Configurez un hook : contrôle des documents que l’IA ne manquera pas

Avant que l’IA ne vous annonce la fin, chaque document qu’elle a rédigé dans le dossier passe par votre contrôle.

## Configurez un hook : contrôle des documents que l’IA ne manquera pas

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec un dossier où l’IA rédige des documents.
## À quoi ça sert

Un client a reçu mardi une offre dans laquelle une ligne avec votre marge issue du calcul interne est restée. La consigne « ne pas écrire la marge dans l’offre » figurait pourtant dans les règles de l’IA, mais elle l’a négligée après un long travail.

Le hook est une étape que l’outil lance automatiquement à chaque fois que l’IA termine un travail, donc le contrôle s’effectue même si l’IA oublie la règle.
## Ce qu’il faut préparer

- un dossier où l’IA écrit directement les documents dans des fichiers, par exemple des offres Word,
- des règles que l’IA enfreint parfois dans ces documents,
- une IA en [mode](glossary:workmode) Code qui travaille avec les fichiers sur l’ordinateur.
## Comment faire

1. Choisissez avec l’IA les règles que le hook doit surveiller. Insérez le prompt dans l’IA en mode Code ouverte dans le dossier avec les documents ; quand l’outil demande l’autorisation, accordez-la.
2. Parcourez ce que le contrôle a trouvé dans les documents anciens ; l’IA les lit simplement. Dites à l’IA ce que le contrôle signale à tort et elle l’ajustera.
3. Pour le prochain travail que l’IA fera dans le dossier, vérifiez qu’une ligne avec le résultat du contrôle s’affiche à la fin. Ce que le contrôle détecte, l’IA le corrige avant de vous annoncer la fin.

Le contrôle comprend des règles vérifiables précisément : un mot qui ne doit pas apparaître dans le document ou une donnée qui ne doit pas manquer.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Code, ouverte dans votre dossier :

Configure dans ce dossier un hook : un contrôle des documents que cet outil lancera automatiquement à chaque fois que tu termineras un travail. Si les hooks ne fonctionnent pas ici, par exemple dans Cowork ou dans un chat classique, dis-le-moi et ne configure rien.

Propose-moi d’abord des règles pour le contrôle. Regarde dans AGENTS.md s’il est dans le dossier, et dans les documents ici, et propose au maximum cinq règles vérifiables précisément : un mot ou une donnée qui ne doit pas être dans le document ou qui ne doit pas manquer. Par exemple « L’offre ne contient ni marge ni prix d’achat. » Demande-moi lesquelles je veux, et ajoute aussi celles que je te dirai.

Transforme les règles approuvées en un contrôle sous forme de script, qui lit aussi les documents Word et fonctionne sans installer d’autres programmes. Enregistre le script dans un sous-dossier contrôle et les règles dans un fichier séparé à côté, pour que toute nouvelle règle n’ait pas besoin d’une nouvelle approbation du hook. Ajoute dans AGENTS.md où se trouve le contrôle, pour que tu puisses le modifier dans un chat ultérieur ; si AGENTS.md n’est pas dans le dossier, crée-le.

Ensuite, lance le contrôle une fois sur tous les documents déjà présents dans le dossier et montre-moi ce qu’il a trouvé. Ne corrige rien dans ces documents, ils ont peut-être déjà été envoyés aux clients. Ce n’est qu’après que tu activeras le hook qui surveille uniquement les documents créés ou modifiés à partir de ce moment.

Configure le hook pour qu’il lance le contrôle à chaque fois que tu termines un travail. Si le contrôle trouve quelque chose, qu’il te renvoie le travail et que tu corriges l’erreur avant de me dire que c’est fini. Si l’erreur persiste après ta correction, que le contrôle te laisse continuer. Chaque fois que le hook contrôle un document, qu’il affiche lui-même une ligne avec le résultat, par exemple « Contrôle : 2 documents conformes », et si une erreur reste, ce qui reste. Si je dois approuver le hook ou le dossier dans l’outil, dis-moi exactement où. Si le hook ne s’applique qu’à un nouveau chat, dis-le-moi.

Si je te donne plus tard une nouvelle règle, ajoute-la au contrôle.

## Dans votre outil

### Microsoft Copilot
Microsoft ne précise pas que Copilot peut lancer des hooks. Enregistrez les règles de contrôle dans Custom instructions (Paramètres et plus, Paramètres du chat, Personnalisation) et à la fin du travail écrivez « Contrôle du document selon mes règles ». Vous configurez le hook dans un outil avec mode Code, par exemple Claude Code ou Codex dans l’application ChatGPT ; demandez-le à votre administrateur IT.

### ChatGPT
Le hook est configuré par Codex : dans l’application ChatGPT pour ordinateur, passez à Codex, choisissez ouvrir un dossier (open a folder) et insérez le prompt. Codex lancera le hook après que vous aurez marqué le dossier comme fiable et approuvé le hook ; l’IA vous dira où. Dans un chat classique ChatGPT, les règles de contrôle vont dans Custom instructions (Paramètres, Personnalisation).

### Claude
Le hook est configuré par Claude Code : dans l’application Claude pour ordinateur, passez en Code, sélectionnez le dossier et insérez le prompt ; l’IA écrit le hook dans les paramètres elle-même. Cowork lance les hooks uniquement comme partie d’un plugin, faites donc l’exercice dans Claude Code. Dans un chat classique Claude, les règles de contrôle vont dans les instructions du projet (Set project instructions).

### Gemini
L’application Gemini ne travaille pas avec un dossier sur l’ordinateur, donc vous ne pouvez pas y configurer un hook. Faites enregistrer les règles de contrôle comme skill (écrivez « Enregistre ça comme skill ») et demandez le contrôle à la fin du travail. Configurez le hook dans un outil avec mode Code, par exemple Claude Code ou Codex dans l’application ChatGPT ; demandez-le à votre administrateur IT.
## Qu’est-ce qu’un hook

Un hook, littéralement « crochet », est une étape que l’outil avec IA lance automatiquement à un moment donné du travail, par exemple au début ou à la fin. La règle dans `AGENTS.md`, fichier avec les instructions pour l’IA dans votre dossier, est lue par l’IA mais peut être négligée lors d’un long travail. Le hook ne dépend pas de l’attention de l’IA.

Le contrôle est écrit par l’IA sous forme de script, un petit programme qui parcourt les documents et affiche ce qui ne va pas. Le script reconnaît uniquement ce qui est vérifiable précisément, par exemple un mot interdit ou une donnée manquante. Il ne vérifie pas si les chiffres correspondent aux sources ; pour cela, il y a le [contrôle du résultat](card:kontrola-vysledku).

Le hook est enregistré dans les paramètres de l’outil dans ce dossier, donc il s’applique à chaque travail de l’IA dans ce dossier. Les documents que vous écrivez vous-même sont contrôlés si vous dites à l’IA « Contrôle le dossier ». Un chat classique ni Cowork ne configurent le hook automatiquement ; comment passer en Code est expliqué dans la carte [Chat, Cowork ou Code](card:when-chat-is-not-enough). Là où vous n’avez pas le mode Code, enregistrez les règles de contrôle dans les instructions de votre outil et demandez le contrôle à la fin du travail, comme expliqué dans le bloc Dans votre outil.
## Exemple

Tereza prépare des offres pour des événements d’entreprise dans une société de catering. Le lundi 19/10, elle configure dans le dossier `Offres 2026` un hook avec deux règles : l’offre ne contient ni marge ni prix d’achat et l’offre indique sa date de validité. Le premier contrôle passe 23 documents et affiche :

```text
Contrôle : 23 documents, 3 détections
- Offre Boulangerie Novák.docx : manque la date de validité de l’offre.
- Offre Verrerie Horák.docx : manque la date de validité de l’offre.
- Offre Garage Dvořák.docx : dans le tableau des prix, une ligne « Marge 18 % ».
```

Le mercredi 21/10, Tereza saisit une offre pour une fête de Noël pour 80 personnes à partir d’un e-mail client et d’un calcul interne. L’IA reprend dans le tableau aussi la colonne du prix d’achat. Le contrôle la trouve à la fin du travail et renvoie le travail à l’IA, qui supprime la colonne. Tereza reçoit ensuite l’offre finalisée avec en dessous la ligne « Contrôle : 1 document conforme ».
## En cas de blocage

- **L’IA dit qu’elle ne peut pas configurer le hook :** vous travaillez probablement dans un chat classique ou Cowork. Passez en [mode Code](card:when-chat-is-not-enough) et ouvrez le dossier dedans.
- **La ligne avec le résultat ne s’affiche pas ou le hook signale une erreur :** dites à l’IA : « Le hook n’a pas fonctionné correctement. Découvre pourquoi et corrige ; si je dois l’approuver, dis-moi où. »
- **Le contrôle signale des erreurs qui ne sont pas des erreurs :** la règle est trop large, par exemple le mot « marge » dans une phrase sur les avantages client ou la date de validité dans un document qui n’est pas une offre. Dites à l’IA de restreindre le contrôle pour cette règle.
- **Le contrôle ne surveille pas les documents que vous écrivez vous-même :** le hook se lance quand l’IA termine un travail. Dites à l’IA « Contrôle le dossier » pour qu’elle les vérifie aussi.
## Ce qui sera prêt

Dans le dossier, vous avez un hook qui après chaque travail avec l’IA passe en revue les documents nouveaux et modifiés selon vos règles, et vous savez ce que le contrôle a trouvé dans les documents anciens. Pour le prochain travail, vous verrez une ligne avec le résultat du contrôle et l’IA corrigera l’erreur détectée avant de vous montrer le travail finalisé. L’IA ajoutera une nouvelle règle au contrôle quand vous la lui indiquerez.
## Et ensuite

Les chiffres et affirmations que le script ne peut pas vérifier précisément, faites-les comparer par l’IA avec les sources dans le [contrôle du résultat](card:kontrola-vysledku). Si vous voulez passer tout le dossier même sans travail dedans, par exemple chaque lundi matin, configurez une [tâche planifiée](card:recurring-ai-task).
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
