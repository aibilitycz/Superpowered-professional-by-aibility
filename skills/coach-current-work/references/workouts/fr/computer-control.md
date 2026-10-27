# Utilisez Computer control : l’IA contrôle les programmes sur votre ordinateur

Un programme sur votre ordinateur sans connexion à l’IA est contrôlé par l’IA elle-même, qui y saisit les données pour vous.

## Utilisez Computer control : l’IA contrôle les programmes sur votre ordinateur

**Difficulté : intermédiaire.**\
**Durée : environ 20 minutes** avec un seul programme sur l’ordinateur.
## À quoi ça sert

À la fin du mois, vous retranscrivez les factures de votre projet depuis un programme de facturation vers un tableau de suivi des coûts dans Excel. Ce programme est uniquement sur l’ordinateur de l’entreprise, sans connexion à l’IA ni version web, et la retranscription prend quarante minutes.

Computer control signifie que l’IA voit votre écran et contrôle les programmes à la souris et au clavier comme vous, elle peut donc gérer ce type de programme.
## Ce qu’il faut préparer

- une tâche que vous faites régulièrement à la main dans un programme sans version web,
- une estimation du temps manuel nécessaire pour cette tâche,
- un dossier sur l’ordinateur où vous enregistrez le travail lié à la tâche ; l’IA y sauvegardera le résultat et la procédure,
- une IA capable de contrôler l’ordinateur ; si la vôtre le peut, le bloc « Dans votre outil » le montre.
## Comment faire

1. Ouvrez l’IA en mode Cowork ou Code dans le dossier préparé et insérez le prompt. Complétez les deux dernières lignes avec la tâche (programme, ce qu’il faut faire, où enregistrer le résultat) et le temps manuel.
2. Si l’IA ne trouve pas de connecteur pour le programme, elle demandera l’accès à celui-ci et, sur Mac, l’enregistrement d’écran ; autorisez cela. Sous Windows, quand l’IA prend la souris, ne travaillez pas jusqu’à la fin.
3. Dans le programme, vérifiez une ou deux entrées du résultat et dites à l’IA combien de minutes vous avez passé sur la tâche. L’IA enregistrera la procédure et la comparaison dans `ulohy-v-aplikacich.md`.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA en mode Cowork ou Code, ouverte dans votre dossier, et complétez les deux dernières lignes avec votre tâche et le temps :

Fais pour moi une tâche dans un programme sur mon ordinateur que je fais régulièrement à la main. La tâche et le temps manuel sont sur les deux dernières lignes.

D’abord, vérifie si tu as un connecteur pour ce programme. Si oui, réalise la tâche via ce connecteur. Sinon, contrôle le programme via l’écran à la souris et au clavier. Dans le programme, fais uniquement ce que la tâche demande ; si c’est une retranscription de données, lis et exporte seulement. Si tu ne sais pas quelle option choisir dans le programme, demande-moi. Note quand tu commences et quand tu finis.

Enregistre le résultat là où la tâche le demande, indique-moi où je peux le vérifier dans le programme, et demande-moi combien de minutes j’ai passé sur la tâche.

Ensuite, écris la procédure pour la prochaine fois dans le fichier ulohy-v-aplikacich.md dans le dossier où tu travailles ; si le fichier existe, ajoute la tâche à la fin. Sous le titre avec le nom de la tâche, écris : le programme et s’il existe un connecteur, les étapes qui ont fonctionné (noms des fenêtres, menus et boutons), à quoi doit ressembler le résultat et la comparaison des temps : combien de minutes tu as travaillé, combien de minutes la tâche prend manuellement et combien de minutes j’y ai passé.

Enfin, ajoute dans le fichier AGENTS.md dans le même dossier la règle : « Quand une tâche nécessite un programme sur l’ordinateur, utilise le connecteur s’il existe. Sinon, contrôle l’écran selon la procédure dans ulohy-v-aplikacich.md. » Si AGENTS.md n’existe pas, crée-le. Assure-toi de le lire dans cet outil au début de chaque travail ; dans Cowork, inscris-le dans les instructions du dossier.

Tâche :
Temps manuel :

## Dans votre outil

### Microsoft Copilot
Copilot Cowork ne contrôle pas les programmes sur votre ordinateur, ne collez donc pas le prompt de cette carte. Faites l’export vous-même, enregistrez-le sur OneDrive, dans Cowork sur `copilot.cloud.microsoft` joignez-le avec le bouton + et écrivez « Fais [tâche] à partir de l’export, enregistre la procédure comme compétence. » Vous recevrez un tableau prêt, le clic dans le programme reste à vous. Pour une tâche régulière, demandez à Copilot d’écrire une demande IT pour l’utilisation de l’ordinateur depuis Copilot Studio.

### ChatGPT
Le mode Code est dans ChatGPT Codex dans l’application ChatGPT pour ordinateur : choisissez Codex et ouvrez un dossier (open a folder). Le contrôle de l’ordinateur s’ajoute dans le menu Plugins, Computer Use avec le bouton Install plugin ; dans un compte d’entreprise, l’administrateur peut le restreindre. Une tâche planifiée dans Codex ne contrôle pas fiablement les programmes sur l’ordinateur, lancez donc la tâche répétée en une phrase.

### Claude
Dans l’application Claude pour ordinateur, activez le contrôle de l’ordinateur dans Settings, General avec le bouton Enable computer use ; l’IA l’utilisera alors dans Cowork et Claude Code. Les forfaits Pro et Max l’ont, Claude Team et Enterprise d’entreprise pas encore. Les tâches planifiées sont dans Cowork dans le panneau gauche sous Scheduled.

### Gemini
L’application Gemini pour Mac et Windows voit la fenêtre que vous partagez, mais ne contrôle pas les programmes pour vous. Si le programme peut exporter, enregistrez-le sur Drive, dans Gemini joignez-le via Add from Drive et dites ce que vous en voulez ; vous enregistrez le tableau avec le bouton Export to Sheets. Pour une tâche régulière, demandez à Gemini d’écrire une demande IT précisant dans quel programme et quelle tâche vous voulez confier à l’IA.
## Qu’est-ce que Computer control

Computer control est le nom anglais pour le contrôle de l’ordinateur ; dans les réglages des outils IA, on l’appelle généralement Computer use. L’IA fait des captures d’écran, reconnaît où sont les fenêtres et boutons, et clique et tape dans le programme comme vous. Avant de travailler dans chaque programme, elle demande la permission. Sur Mac, elle travaille généralement dans une fenêtre en arrière-plan, sous Windows elle prend parfois la souris et le clavier. Vous pouvez l’arrêter à tout moment avec le bouton stop dans l’application.

Le connecteur, c’est la connexion directe entre l’IA et l’application, que vous trouvez dans les réglages de votre outil IA. L’IA lit et écrit les données directement via lui, sans clic, donc c’est plus rapide et moins sujet aux erreurs. S’il n’y a pas de connecteur pour l’application, on peut parfois se connecter via le service Composio, qui relie plus de mille applications ; dans les systèmes d’entreprise, IT doit l’autoriser. Et si le programme a une version web, il est plus rapide de laisser l’IA travailler dans celle-ci via le navigateur. Le contrôle d’écran intervient donc pour les programmes où rien de tout cela n’est possible. La règle dans `AGENTS.md` le rappelle à l’IA à chaque travail.

`ulohy-v-aplikacich.md` est un fichier texte simple avec vos tâches dans les programmes, les étapes qui ont fonctionné et la comparaison des temps. `AGENTS.md` est un fichier de règles pour l’IA dans le même dossier ; l’IA le lit au début de chaque travail, vous n’avez donc pas à répéter la règle sur le connecteur.
## Faites faire la tâche par l’IA automatiquement chaque mois

Une tâche qui se répète régulièrement n’a même pas besoin d’être lancée. Insérez dans l’IA qui gère les tâches planifiées et le contrôle de l’ordinateur cette consigne, changez juste le nom de la tâche et le temps pour les vôtres, et demandez-lui de créer la tâche planifiée. Où trouver les tâches planifiées dans votre outil est montré dans le bloc « Dans votre outil ».

```text
Chaque premier jour ouvré du mois à 8h00, fais la tâche « Factures du projet » selon le fichier ulohy-v-aplikacich.md pour le mois précédent. Enregistre le résultat dans le même dossier avec le mois dans le nom du fichier et dans le résumé indique-moi le nombre de factures et le montant total.
```

La tâche contrôle un programme sur votre ordinateur, elle ne fonctionnera donc que si l’ordinateur est allumé, non en veille et que l’application avec l’IA est ouverte. Si votre outil ne peut pas planifier cette tâche, lancez-la en une phrase, par exemple « Fais les factures du projet selon `ulohy-v-aplikacich.md` », et le reste sera fait par l’IA.
## Exemple

Martin coordonne un projet de nouveau e-shop dans une entreprise de distribution. À la fin du mois, il retranscrit les factures des fournisseurs du projet depuis un programme de facturation vers un tableau de suivi des coûts. Le programme ne fonctionne que sur les ordinateurs de l’entreprise et n’a ni connecteur ni version web. Le mercredi 30/09/2026, il ouvre l’IA en mode Code dans le dossier `E-shop`, insère le prompt et écrit dans les deux dernières lignes :

```text
Tâche : Dans le programme de facturation, trouve les factures reçues de septembre avec le centre de coûts E-shop et inscris-les dans le tableau naklady-projektu.xlsx dans ce dossier : fournisseur, numéro de facture, montant hors TVA, échéance.
Temps manuel : 40 minutes
```

L’IA constate qu’il n’y a pas de connecteur pour ce programme et demande l’accès. Martin l’autorise, et comme il a un Mac, l’IA travaille dans une fenêtre en arrière-plan pendant qu’il s’occupe de ses mails. Une fois, l’IA demande si le centre de coûts E-shop marketing doit aussi être inclus, et en 14 minutes, 23 factures de 9 fournisseurs pour 412 600 CZK hors TVA sont dans le tableau. Martin ouvre deux factures dans le programme, les montants correspondent, et à la question de l’IA, il répond que la tâche lui a pris 3 minutes. L’IA écrit dans `ulohy-v-aplikacich.md` :

```text
### Factures du projet
- Programme : programme de facturation sur ordinateur, pas de connecteur.
- Étapes : menu Documents, Factures reçues, filtre Centre de coûts E-shop (sans E-shop marketing) et mois, bouton Exporter vers Excel.
- Résultat : tableau naklady-projektu.xlsx avec colonnes fournisseur, numéro de facture, montant hors TVA, échéance.
- Temps : IA 14 minutes, manuel 40 minutes, Martin 3 minutes (question sur le centre de coûts et vérification).
```

Fin octobre, Martin écrit juste « Fais les factures du projet selon `ulohy-v-aplikacich.md` » et l’IA ne demande plus le centre de coûts.
## En cas de blocage

- **L’IA répond qu’elle ne sait pas contrôler l’ordinateur :** vous travaillez dans un chat classique ou la version web. Le contrôle de l’ordinateur fonctionne uniquement dans l’application pour ordinateur en mode Cowork ou Code. Plus d’infos dans la carte [Chat, Cowork ou Code](card:when-chat-is-not-enough).
- **Vous ne voyez pas l’option dans les réglages :** mettez à jour l’application. Claude Team et Enterprise d’entreprise n’ont pas le contrôle de l’ordinateur ; si vous avez aussi ChatGPT, utilisez Codex. Dans ChatGPT d’entreprise, l’administrateur peut restreindre le contrôle de l’ordinateur.
- **L’application ou les autorisations doivent être approuvées par IT :** demandez à l’IA dans un chat classique d’écrire une courte demande pour IT : quelle application, quelles autorisations et pour quelle tâche.
- **Sur Mac, l’IA ne voit pas le programme ou ne clique pas dedans :** dans Réglages système, Confidentialité et sécurité, cochez l’application IA pour Enregistrement d’écran et Accessibilité.
## Ce qui sera prêt

Vous aurez une tâche terminée dans un programme sans connecteur, et le résultat vérifié directement dans le programme. Dans `ulohy-v-aplikacich.md` se trouve la procédure avec les étapes qui ont fonctionné et la comparaison avec le temps manuel, donc la prochaine fois il suffira d’indiquer la tâche à l’IA. La règle dans `AGENTS.md` indique quand l’IA utilise le connecteur et quand elle contrôle l’écran.
## Et après

Pour que la tâche s’exécute de façon fiable et signale les erreurs automatiquement, configurez-la comme [tâche planifiée](card:recurring-ai-task).
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
