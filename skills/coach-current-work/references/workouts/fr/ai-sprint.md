# Organisez un sprint IA : un projet terminé en une après-midi, utilisé par l'équipe

L'IA propose ce que l'équipe construira en une après-midi, rédige le cahier des charges, invite l'équipe et, après le sprint, enregistre la méthode qui a fonctionné.

## Organisez un sprint IA : un projet terminé en une après-midi, utilisé par l'équipe

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec les documents de l'équipe dans un dossier partagé.
## À quoi ça sert

Depuis un mois, lors des réunions, on répète que l'IA pourrait composer le rapport mensuel pour la direction. Tout le monde est d'accord, mais entre les réunions, personne n'y parvient, et Petra le compose manuellement à partir des exports pendant deux heures à la fin du mois.

Quand l'équipe réserve une après-midi entière pour ce projet et le construit avec l'IA pour son travail quotidien, elle l'utilise dès le lendemain.
## Ce qu'il faut préparer

- un dossier partagé de l'équipe avec la liste des tâches et les comptes rendus de réunions,
- les noms des participants et l'après-midi où ils peuvent consacrer deux à quatre heures uniquement au sprint,
- l'IA en mode Cowork ou Code pour vous et chaque participant au sprint,
- une IA connectée au calendrier dans lequel vous créez les réunions.
## Comment faire

1. Ouvrez le dossier de l'équipe dans l'IA en mode Cowork ou Code, insérez le prompt de l'exercice IA et en dessous, indiquez qui participera au sprint et quand. Choisissez une tâche parmi les propositions de l'IA.
2. L'IA rédige le cahier des charges ; corrigez-le et écrivez « Envoie-le ». L'IA enregistre le cahier des charges et crée l'invitation pour l'équipe. Pendant le sprint, chacun insère dans son IA la phrase du cahier des charges et travaille sur sa partie.
3. Après la démonstration, écrivez à l'IA « Sprint terminé » et ce qui a fonctionné. L'IA inscrit le résultat dans le worklog et enregistre la méthode comme [skill](glossary:skill) ou règle.

Avec un chat classique, reportez-vous à la section Quand vous êtes bloqué.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l'IA en mode Cowork ou Code, ouverte dans votre dossier :

Prépare avec nous un sprint IA : une après-midi pendant laquelle l'équipe construit avec l'IA un outil dont elle a besoin et commence à l'utiliser le lendemain. Si tu n'as pas accès au dossier de l'équipe et ne peux pas y enregistrer toi-même des fichiers, dis-le-moi immédiatement pour que je puisse passer en mode Cowork ou Code.

Parcours les documents dans le dossier de l'équipe : liste des tâches, comptes rendus de réunions, worklog et autres fichiers montrant ce que fait l'équipe et ce qui la freine. Propose trois tâches réalisables pendant le sprint et que l'équipe pourra ensuite utiliser régulièrement. Pour chacune, écris en une phrase ce qui sera créé, qui l'utilisera et sur quels documents elle se base. Réduis une grande tâche à une première version réalisable pendant le sprint. Attends que je choisisse.

Pour la tâche choisie, rédige un cahier des charges d'une page :
- Ce qui sera créé et qui l'utilisera.
- Qui fait quoi. Répartis le travail entre les personnes que je t'indiquerai à la fin du message, de façon que chacun saisisse sa partie dans l'IA. Pour chaque personne, indique le fichier où elle enregistrera sa partie et la phrase qu'elle insérera au début du sprint dans son IA. Cette phrase commence toujours par : Lis AGENTS.md dans ce dossier et assure-toi de le lire au début de chaque travail.
- Quels accès et fichiers sont nécessaires et où ils se trouvent.
- Qui, à la fin de chaque partie, rassemblera en un seul fichier ce que l'équipe présentera et sur quels cas issus du travail quotidien cela sera testé.

Ajoute une section Après le sprint avec cette instruction pour l'IA : « Dès que quelqu'un écrit que le sprint est terminé, parcours ce qui a été créé dans le dossier pendant le sprint et les notes de la démonstration. Inscris en haut du worklog.md un enregistrement daté du sprint : ce que l'équipe a construit, comment cela a fonctionné lors de la démonstration et qui fera quoi ensuite. Si worklog.md n'existe pas, crée-le. À partir de la méthode qui a fonctionné, rédige un skill, enregistre-le dans le dossier de l'équipe et ajoute dans AGENTS.md une règle indiquant quand l'IA doit l'utiliser et dans quel fichier il se trouve. Si la méthode tient en une phrase, la règle seule suffit au lieu du skill. »

Montre-moi le cahier des charges et attends les corrections. Dès que je dis d'envoyer, enregistre le cahier des charges dans le dossier de l'équipe sous le nom zadani-sprintu-RRRR-MM-DD.md avec la date du sprint. Ajoute dans AGENTS.md du même dossier une règle indiquant que les cahiers des charges des sprints IA se trouvent dans les fichiers zadani-sprintu et que l'IA se réfère au plus récent pendant le sprint. Si AGENTS.md n'existe pas, crée-le. Assure-toi que l'IA le lise au début de chaque travail dans cet outil ; en mode Cowork, inscris-le dans les instructions du dossier. Puis, via le connecteur calendrier, crée une invitation pour tous les participants du cahier des charges à la date du sprint. Mets dans la description l'intégralité du cahier des charges sans la section Après le sprint et le nom du fichier où il se trouve. Trouve les adresses e-mail dans la messagerie ou le calendrier, et demande-moi celles que tu ne trouves pas. Si tu n'as pas de connecteur calendrier ou si le calendrier est en lecture seule, connecte-le via le service Composio. Indique-moi précisément où je dois me connecter si nécessaire. Enfin, informe-moi à qui l'invitation a été envoyée.

Qui participe au sprint, quand et combien de temps il dure :

## Dans votre outil

### Microsoft Copilot
Cowork est dans Copilot à côté du sélecteur Chat ; ceux qui ne le voient pas doivent demander au service informatique. Il travaille avec les fichiers sur OneDrive et SharePoint, indiquez-lui où se trouve le dossier de l'équipe ; il crée aussi l'invitation dans Outlook avec les participants, donc Composio du prompt n'est pas utilisé. Si tout le monde n'a pas Cowork, procédez comme dans la section « L'équipe n'a que le chat classique » : le projet est un Notebook (Bloc-notes, Nouveau bloc-notes), partagé via Share, Invite.

### ChatGPT
Le dossier est géré par Codex dans l'application ChatGPT pour ordinateur : passez en Codex et choisissez open and folder ; `AGENTS.md` est lu automatiquement. Si vous ne voyez pas Codex, demandez à l'administrateur d'activer Allow members to use Codex locally, ou suivez la section « L'équipe n'a que le chat classique ». Le calendrier se connecte dans Settings sous Plugins ; l'IA crée les réunions une fois que l'administrateur active les actions d'enregistrement.

### Claude
Dans l'application Claude pour ordinateur, choisissez Cowork et dans le champ message Work in a folder ; en mode Cowork, l'IA inscrit dans les instructions du dossier, selon le prompt, de lire `AGENTS.md`. Le connecteur Microsoft 365 peut créer des réunions dans Outlook si l'administrateur active les actions d'enregistrement. Le connecteur Google Calendar ne fait que lire le calendrier, donc l'IA crée l'invitation via Composio.

### Gemini
L'application Gemini avec un compte professionnel ne gère pas le dossier sur ordinateur, préparez donc le sprint selon la section « L'équipe n'a que le chat classique » avec le robot partagé Gem. L'événement dans Google Calendar est créé en écrivant @Google Calendar et ce qu'il doit créer ; ajoutez les invités dans le calendrier. Le dossier est géré par Gemini CLI si l'entreprise a une licence Gemini Code Assist.
## Qu'est-ce qu'un sprint IA

Sprint signifie en anglais une courte course à fond. En entreprise, c'est un temps réservé pendant lequel l'équipe travaille sur un seul projet et présente un résultat à la fin. [Le sprint IA](glossary:ai-sprint) dure deux à quatre heures et l'équipe confie le travail à l'IA. Le résultat est généralement un fichier dans le dossier de l'équipe : un modèle d'offre, un rapport ou un guide selon lequel l'IA répond aux clients. Pendant ce temps, les participants ne prennent pas d'autres réunions, donc un projet attendu depuis des mois est terminé en une après-midi.

Le cahier des charges du sprint est un fichier texte ordinaire dans le dossier de l'équipe, accessible à chaque participant avec son IA. `AGENTS.md` est un fichier de règles pour l'IA dans le même dossier, que l'IA lit au début de chaque travail. Plus d'informations dans les cartes sur le [worklog](card:project-worklog) et sur le [fichier de règles pour l'IA](card:agents-md).

À la fin du sprint, la personne désignée dans le cahier des charges fait fusionner les parties par l'IA en un seul fichier et l'équipe teste le résultat sur le travail du jour. Une tâche trop grande pour l'après-midi est réduite par l'IA à une première version que l'équipe commence à utiliser le lendemain. Le worklog est un journal de projet dans le dossier et l'invitation est créée par l'IA via le connecteur, c’est-à-dire la liaison avec le calendrier.

Si l'IA demande la permission d'enregistrer des fichiers dans le dossier, autorisez-la. Vous pouvez aussi choisir la tâche plus tard avec l'équipe : revenez dans le même chat et dites laquelle vous avez choisie. Pendant le sprint, chacun enregistre dans son propre fichier pour éviter d'écraser le travail des autres. Comment passer du chat classique aux modes Cowork ou Code est expliqué dans la carte [Cowork ou Code](card:when-chat-is-not-enough).
## Pour que le sprint se répète

Un sprint construit un outil. Si le sprint est répété, par exemple une fois par mois, l'équipe réalise progressivement ce qui est seulement évoqué en réunion. Il suffit d'une tâche planifiée que l'IA lance le premier lundi du mois et qui enregistre les propositions pour le sprint suivant dans le dossier de l'équipe. Insérez dans l'IA en mode Cowork ou Code ce cahier des charges et demandez-lui de créer la tâche planifiée :

```text
Chaque premier lundi du mois à 9h00, parcours dans le dossier de l'équipe worklog.md, la liste des tâches, les comptes rendus des réunions du mois précédent et les cahiers des charges des sprints passés. Propose trois tâches pour le prochain sprint IA, réalisables en une après-midi et que l'équipe pourra utiliser régulièrement. Pour chacune, indique qui l'utilisera et pourquoi c'est pertinent maintenant. Ne propose rien déjà construit dans les sprints précédents. Ajoute les propositions en haut du fichier navrhy-na-sprint.md dans le dossier de l'équipe.
```

Si la tâche travaille avec un dossier sur votre ordinateur, elle ne fonctionnera que si l'ordinateur est allumé et l'application ouverte.
## Exemple

Markéta dirige un support client de six personnes pour une boutique en ligne d'appareils de cuisine. L'équipe répond à quarante questions par jour en consultant trois documents : le règlement des réclamations, les conditions de garantie et les manuels. Le lundi 12/10, elle ouvre le dossier partagé Support en mode Cowork, insère le prompt et écrit dessous : « Markéta, Lucie, Pavel, Jana, Ondřej et Karel, jeudi 22/10 de 13h00 à 16h00. » L'IA, à partir des comptes rendus et des exports des questions de septembre, propose :

```text
1. Assistant pour répondre aux clients : à partir de la question, il rédige un brouillon de réponse et indique le document et l'article source. Utilisé par toute l'équipe, basé sur trois documents dans le dossier.
2. Rapport mensuel des réclamations pour la direction. Utilisé par Markéta, basé sur l'export des questions.
3. Réponses aux 20 questions les plus fréquentes pour l'aide en ligne. Utilisé par les clients, basé sur l'export des questions.
```

Mardi en réunion, l'équipe choisit l'assistant. L'IA rédige le cahier des charges : Lucie et Pavel sélectionnent avec l'IA les 30 questions les plus fréquentes dans l'export, Jana et Ondřej rédigent avec l'IA comment l'assistant doit répondre et citer la source, Markéta et Karel fusionnent et testent sur cinq questions du matin. Lucie a pour phrase au côté de son nom « Lis `AGENTS.md` dans ce dossier et assure-toi de le lire au début de chaque travail. Puis trouve dans l'export des questions de septembre les 30 questions les plus fréquentes et enregistre-les dans le fichier `nejcastejsi-dotazy.md`. » Markéta écrit « Envoie-le » et l'IA crée l'invitation dans le calendrier pour les six personnes.

Jeudi à 15h30, l'assistant répond correctement à quatre questions sur cinq et affiche pour chacune l'article du règlement des réclamations ou des conditions de garantie. Pour la cinquième question, le remplacement d'une pièce hors garantie, aucun document ne fournit de réponse. Markéta écrit à l'IA que le sprint est terminé, qui inscrit dans le worklog :

```text
### 2026-10-22 : Sprint IA, assistant pour réponses clients
- Ce qui a été créé : un assistant qui rédige un brouillon de réponse à partir de la question et indique le document et l'article source.
- Comment ça a fonctionné : sur cinq questions du matin, quatre réponses correctes. Le remplacement hors garantie n'est couvert par aucun document.
- Suite : à partir du vendredi 23/10, l'équipe rédige les brouillons de réponses via l'assistant. Karel complétera les conditions de garantie pour le remplacement hors garantie d'ici le 30/10.
```

La méthode est enregistrée dans le dossier comme skill Réponse client et une règle est ajoutée dans `AGENTS.md` pour que l'IA réponde aux questions clients selon ce skill. Vendredi matin, Lucie insère dans l'IA du dossier Support la première question du jour et l'IA rédige un brouillon de réponse avec la source sans explication.
## Quand vous êtes bloqué

- **L'invitation n'a pas été créée :** demandez à l'IA si elle a un connecteur calendrier capable de créer des réunions. Si non, qu'elle connecte le calendrier via Composio, un service qui relie l'IA à plus de mille applications ; l'autorisation d'utilisation dépend de votre informatique. Sans cela, l'IA prépare le texte de l'invitation que vous envoyez depuis votre calendrier. Dans le calendrier d'entreprise, le droit de créer des réunions via l'IA est parfois activé par l'administrateur ; comment le demander est expliqué dans la carte [Connectez un connecteur](card:plugin-connector).
- **Les trois propositions sont trop grandes pour un sprint :** demandez à l'IA de diviser chaque tâche en étapes et de choisir pour le sprint seulement la première que l'équipe commencera à utiliser. L'IA vous détaillera le projet complet réparti entre les personnes sous forme de [AI-WBS](card:ai-wbs-project).
- **L'équipe n'a que le chat classique :** insérez le prompt dans le chat, joignez les documents de l'équipe et ajoutez : « Nous travaillons uniquement dans le chat classique et n'utilisons pas Composio. Rédige le cahier des charges pour que je puisse l'insérer dans les instructions du projet partagé, et au lieu des fichiers et de `AGENTS.md`, donne à chacun une phrase à insérer dans le chat de ce projet. » Insérez le cahier des charges dans les instructions du [projet](card:asistent) partagé de l'équipe ; le nom du projet dans votre outil est indiqué dans la section « Dans votre outil ». Pendant le sprint, chacun travaille dans le chat de ce projet et envoie sa partie à la personne désignée dans le cahier des charges, qui les rassemble dans un seul chat et demande à l'IA de fusionner. Après la démonstration, écrivez à l'IA dans ce chat que le sprint est terminé ; elle vous fournira un enregistrement et la méthode qui a fonctionné à insérer dans les instructions du projet.
- **Les IA des collègues n'utilisent pas le skill du sprint :** demandez à votre collègue d'écrire à son IA dans le dossier de l'équipe : « Lis `AGENTS.md` et assure-toi de le lire au début de chaque travail. »
## Ce qui sera prêt

Après préparation, le cahier des charges du sprint est dans le dossier de l'équipe et toute l'équipe a l'invitation dans le calendrier. Après le sprint, l'équipe utilise l'outil construit en une après-midi. Le worklog contient un enregistrement de ce qui a été créé et des suites, et un skill ou une règle dans `AGENTS.md` garantit que l'IA de l'équipe utilise elle-même le résultat.
## Et ensuite

Si vous voulez présenter le résultat du sprint à d'autres collègues ou à un autre département, [dix minutes en réunion](card:team-adoption-cycle) suffisent. Si le skill du sprint répond différemment de ce qu'il devrait, modifiez-le selon la carte [Créez votre skill](card:create-skill-from-proven-process).
## Sprint IA

**Qu'est-ce que c'est :** Un bloc de travail continu pour une petite équipe, durant lequel une première version utilisable d'un ou plusieurs projets IA réels est créée et testée. Il dispose d'un temps défini, de méthodes, de soutien et d'une suite prévue pour le résultat.

**Ce que ce n'est pas :** Ce n'est pas une formation classique, une compétition ni un travail ajouté aux autres réunions des participants.

**Pourquoi l'étudiant en a besoin :** Cela aide à réserver un temps protégé pour une véritable construction, au-delà d'un simple exercice court, et montre ce qui doit être préparé pour que ce bloc produise un résultat utilisable.

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
