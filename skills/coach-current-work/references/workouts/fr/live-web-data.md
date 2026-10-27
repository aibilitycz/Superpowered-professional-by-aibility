# Laissez l'IA télécharger des données en direct : chiffres actuels avec source et date

L'IA télécharge elle-même les chiffres actuels sur les entreprises, la concurrence ou le marché, en indiquant pour chacun la source et la date.

## Laissez l'IA télécharger des données en direct : chiffres actuels avec source et date

**Difficulté : moyenne.**\
**Durée : environ 15 minutes** avec une question manquant de chiffres.
## À quoi ça sert

Jeudi, vous signez un contrat avec un nouveau fournisseur et souhaitez savoir
quelle est la taille de l'entreprise, si elle est en croissance et si elle n'a
pas de problèmes. Le chat vous rédige un paragraphe général depuis son site
web et vous passez ensuite une demi-heure à chercher vous-même les données
dans les registres.

C’est utile quand l’IA télécharge elle-même les chiffres directement à la source,
indique un lien et une date pour chacun, et sauvegarde la procédure, pour que
vous puissiez vérifier un autre fournisseur en une seule phrase.
## Ce qu’il faut préparer

- une question professionnelle nécessitant des chiffres actuels et la décision
  que vous prendrez en fonction,
- l’IA que vous utilisez au travail ; où commencer y est indiqué dans le bloc
  « Dans votre outil »,
- l’IA en [mode](glossary:workmode) Cowork ou Code, uniquement si le chat classique ne
  trouve pas les données.
## Comment faire

1. Dites à l’IA quels chiffres vous voulez et quelle décision vous en tirerez.
   L’IA trouvera où les données se trouvent vraiment et les téléchargera elle-même.
   Si une connexion ou un administrateur IT est nécessaire, elle vous le dira.
2. Ouvrez le lien du chiffre sur lequel repose le plus la conclusion et vérifiez
   que la source le mentionne bien. Si ce n’est pas le cas, dites-le à l’IA et
   demandez-lui de corriger le tableau.
3. Dans un nouveau chat, saisissez la même tâche en une phrase, par exemple pour
   une autre entreprise. En mode Cowork ou Code, ouvrez un nouveau chat dans le
   même dossier.

Seuls les chiffres qui servent à la décision doivent figurer dans le tableau.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail, puis
ajoutez votre question à la dernière ligne :

J’ai besoin de données actuelles du web pour une tâche que je traite. Ce dont j’ai
besoin et pourquoi est indiqué à la dernière ligne.

Commence d’abord par identifier où se trouvent vraiment ces données : registre
public ou statistiques, site de l’entreprise, offres d’emploi, bibliothèque de
publicités, outil de recherche de mots-clés ou profil sur un réseau social. Si
une source directe existe, prends les chiffres de là ; les articles qui les
reproduisent ne servent que si la source directe manque.

Télécharge les données toi-même. Lis les pages publiques via la recherche web.
Si les données sont dans un outil auquel j’ai accès dans le navigateur (par
exemple planificateur de mots-clés ou bibliothèque de publicités) et que tu sais
contrôler le navigateur, explore-le là. Si les données sont dans une base de
données nécessitant un connecteur de données (serveur MCP), utilise celui que
j’ai ici. Si je n’en ai pas et que tu sais le connecter ici, connecte-le ; si une
connexion est nécessaire, dis-moi exactement où et attends. Si tu ne sais pas
le connecter, dis-moi quelle source serait utile et qui peut l’activer, et
retourne pour l’instant ce que tu trouves sur le web public. Si la source est
payante, indique-moi le prix avant de l’utiliser.

Mets le résultat dans un tableau avec les colonnes donnée, chiffre, lien vers
la source et date à laquelle le chiffre s’applique. Ce que tu ne trouves pas,
marque-le comme manquant et ne fais aucune estimation. Sous le tableau, écris en
deux phrases ce que les chiffres impliquent pour ma tâche, quel chiffre je dois
vérifier à la source et où exactement le trouver.

Si tu travailles dans un dossier, sauvegarde le tableau en haut dans un fichier
zive-data.md dans le dossier projet sous un titre avec la date d’aujourd’hui et
le nom de la tâche ; crée le fichier s’il n’existe pas. Enfin, sauvegarde la
procédure comme skill : d’où tu prends les données, comment tu les télécharges
et à quoi ressemble le tableau, pour que la prochaine fois une phrase suffise,
par exemple « télécharge les mêmes données pour une autre entreprise ». Si tu ne
peux pas sauvegarder le skill, garde la procédure en mémoire ou dans les
instructions personnalisées de cet outil.

Ce dont j’ai besoin et pourquoi :

## Dans votre outil

### Microsoft Copilot
Insérez le prompt dans Copilot Chat sur `copilot.cloud.microsoft` ; les lignes
concernant le fichier et le skill sont ignorées. Si les réponses manquent de liens
web, activez la recherche dans Paramètres, Personnalisation ; si ce n’est pas
possible, c’est que l’administrateur l’a désactivée. La procédure est mémorisée
après la phrase « Mémorise cette procédure », Cowork la sauvegarde comme skill
et planifie les tâches sur la page Automations. Les données payantes sont
apportées par un connecteur Copilot fourni par l’administrateur.

### ChatGPT
Insérez le prompt dans un chat classique ; les lignes sur le fichier et le skill
sont ignorées. ChatGPT cherche lui-même sur le web, et si les chiffres manquent
de liens, tapez / et choisissez Search. La procédure est mémorisée après la
phrase « Mémorise cette procédure » ; si vous avez la mémoire, vous la verrez dans
Paramètres, Personnalisation. Pour les registres publics, aucun connecteur n’est
nécessaire, pour les bases payantes l’administrateur l’ajoute via Plugins et
les tâches planifiées sont sous Scheduled.

### Claude
Insérez le prompt dans Cowork dans le dossier projet ou dans un chat ; si les
chiffres manquent de liens, activez Web search sous +. Cowork explore la
bibliothèque de publicités ou le planificateur de mots-clés dans votre Chrome via
l’extension Claude in Chrome. Le connecteur de données est ajouté par le
propriétaire de l’organisation (Paramètres organisation, Connecteurs) dans les
formules Team et Enterprise. Claude sauvegarde la procédure comme skill, les
tâches sont sous Scheduled.

### Gemini
Insérez le prompt dans un chat classique ; Gemini cherche sur Google lui-même et
ignore les lignes sur le fichier et le skill. Vous ne pouvez pas ajouter un
connecteur de données personnel avec un compte professionnel, donc faites
télécharger les données des bases spécialisées par l’IA en mode Cowork ou Code,
ou demandez à l’IT. Sauvegardez la procédure comme skill (Customize, Skills) et
les tâches planifiées sont sous Scheduled.
## Qu’est-ce que les données en direct et un connecteur de données

Les données en direct sont des chiffres qui changent chaque jour ou semaine,
comme le chiffre d’affaires et les insolvabilités d’une entreprise ou les
publicités actuellement diffusées par la concurrence. L’IA ne les connaît pas
naturellement car elle a appris sur des données plus anciennes, et sans
téléchargement elle ne fait que les estimer. Les pages publiques, comme le
registre du commerce ou le site de l’entreprise, sont lues via la recherche web.
Si vous avez besoin d’un rapport de dizaines de sources avec comparaison, utilisez
[Deep Research](card:deep-research).

Certaines données ne figurent pas sur les pages classiques. La recherche de mots,
c’est-à-dire combien de personnes les cherchent chaque mois, ou la fréquentation
du site concurrent, se trouvent dans les bases spécialisées d’outils et l’IA y
accède via un connecteur de données. Dans les paramètres, on l’appelle souvent
serveur MCP ; [MCP](glossary:mcp) est une norme technique par laquelle l’IA se
connecte aux applications et sources de données. Le connecteur nécessite en
général un compte chez le fournisseur de données et certaines sources sont
payantes à chaque requête. Si vous avez accès à un tel outil dans le navigateur,
comme le planificateur de mots-clés Google Ads, l’IA peut l’explorer via le
[contrôle du navigateur](card:browser-control) même sans connecteur. Sinon, elle marque ces
données comme manquantes et vous indique qui peut activer le connecteur.

L’IA sauvegarde la procédure comme [skill](glossary:skill), c’est-à-dire un guide
qu’elle retrouvera elle-même quand vous donnerez une tâche similaire. Les
résultats sont enregistrés dans `zive-data.md`, un fichier texte simple dans le
dossier projet, où le téléchargement le plus récent est en haut.
## Que les données se téléchargent seules

Les données que vous suivez régulièrement, comme l’insolvabilité des fournisseurs
clés ou les publicités de la concurrence, peuvent être téléchargées chaque
semaine automatiquement par l’IA, qui ne vous signale que les changements. Insérez
cette consigne dans une IA capable de tâches planifiées et demandez-lui de créer
une tâche planifiée. Où la trouver dans votre outil est indiqué dans le bloc
« Dans votre outil ».

```text
Chaque lundi à 8h00, télécharge selon la procédure enregistrée les mêmes données
qu’auparavant et compare-les avec le dernier téléchargement dans zive-data.md ou
avec le dernier résultat de cette tâche. Si tu travailles avec un fichier, ajoute
les nouvelles données en haut sous la date d’aujourd’hui. Informe-moi seulement
des changements et de leur signification pour ma tâche ; si rien d’important n’a
changé, une phrase suffit.
```

Si la tâche travaille avec des fichiers sur votre ordinateur, elle ne fonctionnera
que si l’ordinateur est allumé et l’application ouverte.
## Exemple

Lucie gère les achats dans une entreprise logistique et signe jeudi 22/10/2026
un contrat-cadre avec un nouveau transporteur. Lundi, elle ajoute à la dernière
ligne du prompt :

```text
Autodoprava Lipan, s.r.o. : depuis combien de temps l’entreprise existe, quel
est son chiffre d’affaires et si elle n’a pas d’insolvabilité ou de problèmes
avec la TVA. Je signe avec eux un contrat-cadre de livraison jeudi.
```

L’IA consulte le registre commercial, le registre des insolvabilités et le registre
des assujettis à la TVA. Elle écrit dans `zive-data.md` :

```text
### 2026-10-19 : Autodoprava Lipan, s.r.o., avant signature 22/10
| Donnée | Chiffre | Source | Valable au |
|---|---|---|---|
| Création de l’entreprise | 2014 | or.justice.cz, extrait du registre commercial | 19/10/2026 |
| Chiffre d’affaires | 86 M CZK, année précédente 79 M CZK | or.justice.cz, bilan comptable dans la collection de documents | année 2025 |
| Insolvabilité | aucune | isir.justice.cz | 19/10/2026 |
| Assujetti TVA fiable | oui | registre des assujettis TVA | 19/10/2026 |
| Nombre de véhicules | manquant, aucune source ne le mentionne | | |

Le chiffre d’affaires a augmenté de 9 % et l’entreprise n’a aucun problème dans
les registres. À vérifier : chiffre d’affaires dans le compte de résultat du
bilan comptable, ligne Chiffre d’affaires des ventes de produits et services.
```

Lucie ouvre le bilan via le lien, trouve la ligne chiffre d’affaires dans le
compte de résultat et le chiffre correspond. Une semaine plus tard, dans un
nouveau chat, elle écrit simplement « Vérifie le même transporteur avec qui on
négocie mardi » et reçoit un tableau au même format. Un collègue marketing
télécharge les publicités concurrentes et la recherche de mots via le connecteur
de données activé par l’administrateur.
## En cas de blocage

- **L’IA donne des chiffres sans lien ou « environ » :** elle n’a pas cherché sur
  le web et estime d’après sa mémoire. Activez la recherche selon le bloc « Dans
  votre outil » et dites : « Pour chaque chiffre, donne un lien vers la source et
  une date ; ce que tu ne trouves pas, marque-le comme manquant. »
- **L’IA répond qu’elle n’a pas accès aux données :** les données sont dans une
  base et l’IA a besoin d’un connecteur de données. Demandez-lui une courte
  requête pour l’administrateur du compte entreprise : quelle source et pourquoi
  vous en avez besoin. En mode Code, l’IA le connecte elle-même ; comment passer
  en mode Code est expliqué dans la carte [Chat, Cowork ou Code](card:when-chat-is-not-enough).
- **La donnée est seulement dans un PDF ou sur une page avec filtres :** demandez
  à l’IA d’ouvrir le PDF directement depuis le lien. Pour une page à cliquer,
  comme la bibliothèque de publicités Meta, laissez l’IA la parcourir dans le
  navigateur, comme expliqué dans la carte [Contrôle du navigateur](card:browser-control).
- **Dans un nouveau chat l’IA ne retrouve pas la procédure :** demandez-lui ce
  qu’elle en retient et où elle l’a sauvegardée. Si vous n’avez pas la mémoire,
  demandez-lui de sauvegarder la procédure comme skill en mode Cowork ou Code,
  puis ouvrez un nouveau chat dans le même dossier.
## Ce que vous aurez

Vous disposez d’un tableau des chiffres actuels pour votre tâche, avec un lien et
une date pour chacun, et vous avez vérifié le chiffre clé à la source. L’IA a
sauvegardé la procédure comme skill ou en mémoire et dans un nouveau chat a
téléchargé les données à partir d’une phrase.
## Et ensuite

Si vous souhaitez que le rapport régulier arrive de façon fiable et signale
automatiquement les erreurs, poursuivez avec la [tâche planifiée](card:recurring-ai-task).
Comment transformer un travail réussi en [skill](card:create-skill-from-proven-process) est expliqué dans
une carte dédiée.
## MCP

**Qu'est-ce que c'est :** Un standard technique ouvert (Model Context Protocol) par lequel l'IA se connecte aux applications et aux sources de données. Une application ou un fournisseur de données propose un serveur MCP, et l'IA lit les données ou exécute des actions autorisées via ce serveur. Dans la configuration des outils, cette connexion est souvent appelée connecteur ou serveur MCP.

**Ce que ce n'est pas :** Ce n'est ni une application autonome ni un modèle d'IA. Le standard lui-même ne télécharge rien ; il nécessite un serveur fourni par un prestataire, souvent un compte chez ce dernier, ainsi qu'une autorisation activée par un utilisateur ou un administrateur.

**Pourquoi l'étudiant en a besoin :** Cela aide à comprendre quand l'IA accède à des données en dehors du web public et qui doit activer cette connexion.

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
