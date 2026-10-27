# Préparez le handoff : transmission du travail en cours

L’IA rédige un handoff d’une page, permettant à un collègue ou à un nouveau chat de reprendre sans lire l’historique.

## Préparez le handoff : transmission du travail en cours

**Difficulté : facile.**\
**Durée : environ 15 minutes** avec un travail en cours.
## À quoi ça sert

Depuis vendredi, vous êtes en congé pour une semaine et votre collègue Pavel doit finaliser le choix du nouveau prestataire de nettoyage. Vous lui écrivez trois phrases par e-mail. Lundi, Pavel passe une demi-matinée à vérifier quelles offres sont encore valides, puis vous appelle depuis la mer pour demander s’il peut renégocier le prix avec le prestataire.

Un court handoff d’une page suffirait, rédigé par l’IA à partir du chat et des documents, pour que Pavel sache où en est le travail et quelle est la première tâche à faire.
## Ce qu’il faut préparer

- un travail en cours que vous transmettez, mettez en pause ou déplacez dans un nouveau chat,
- le chat où vous avez travaillé dessus, ou les e-mails et notes principaux,
- l’IA que vous utilisez au travail ; idéalement en [mode](glossary:workmode) Cowork ou Code.
## Comment faire

1. Insérez le prompt dans le chat où vous avez travaillé sur ce travail en dernier. Si cela s’est fait hors IA, insérez-le dans un nouveau chat avec les documents principaux et quelques phrases sur l’état d’avancement.
2. Lisez le handoff comme un collègue qui n’a pas suivi le travail, dites à l’IA ce qui manque ou est superflu. En Cowork ou Code, il l’enregistre dans `handoff.md`, dans un chat classique vous le recevez en réponse.
3. Ouvrez un nouveau chat et écrivez « Continue selon `handoff.md` », dans un chat classique insérez le handoff avec les documents. L’IA doit indiquer sans question où en est le travail et proposer la prochaine étape.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail :

Prépare un handoff : transmission courte d’un travail en cours. Un collègue ou un nouveau chat doit pouvoir continuer sans lire tout l’historique ni poser de questions.

Base-toi sur notre chat, les documents que je joins, insère ou écris sous cette consigne, et sur les fichiers du dossier projet si tu y as accès. Si quelque chose manque sur un point, demande-moi, au maximum cinq questions à la fois. Rédige le handoff sous cette forme :

### Handoff : nom du travail (date)
- Objectif : ce qui doit être réalisé, pour qui et quand.
- Fait et vérifié : ce qui est terminé et comment on le sait, par exemple un fichier, un lien ou une confirmation d’une personne.
- En cours : ce qui est commencé et son état.
- Prochaine étape : une tâche précise que le destinataire doit faire en premier.
- Terminé quand : comment reconnaître que le travail est achevé.
- Limites : ce qui ne doit pas être modifié ou fait sans accord.
- Manques : questions ouvertes et documents ou accès que le destinataire n’a pas encore.
- Documents : fichiers et liens à utiliser.

Écris pour une personne qui n’a pas suivi le travail, tiens-toi à une page. Ne recopie pas le chat, évite les impasses, mots de passe et données personnelles inutiles au destinataire. Ce que tu ne peux pas confirmer dans le chat, les documents ou mes réponses, écris-le dans « Manques » sans supposer.

Si tu travailles dans un dossier projet, enregistre le handoff dans le fichier handoff.md. S’il existe déjà, écrase-le car seul le dernier handoff compte. Si tu ne sais pas gérer les fichiers, ne sauvegarde rien et écris-moi le handoff complet en réponse.

Enfin, crée une règle pour la prochaine fois : « Quand j’écris ‘handoff’, prépare la transmission sous cette forme. » Dans un chat classique, l’IA mémorise la règle et la forme du handoff, sinon dis-le-moi. En mode projet, écris la règle et la forme dans AGENTS.md, crée-le s’il n’existe pas. Ajoute : « Enregistre le handoff dans handoff.md. Si handoff.md existe dans le dossier, lis-le au début de chaque nouveau travail. Quand le travail est terminé, écris ‘Clos’ et la date sur la première ligne et ne considère plus ce handoff comme une tâche. » Assure-toi que AGENTS.md soit lu au début de chaque travail dans cet outil ; en Cowork, inscris-le dans les instructions du dossier.

## Dans votre outil

### Microsoft Copilot
Dans Copilot Chat, vous recevez le handoff en réponse. Si Work IQ est activé, Copilot voit aussi vos e-mails, réunions et fichiers, donc pas besoin de les insérer ; il suffit d’indiquer le travail concerné. La règle est mémorisée (Saved memories dans Settings and more, Chat settings, Personalization), sauf si l’administrateur l’a désactivée.

### ChatGPT
Dans un chat classique ChatGPT, vous recevez le handoff en réponse et l’IA mémorise la règle (Settings, Personalization, Memory), sauf si l’entreprise l’a désactivée. Pour travailler avec un dossier sur ordinateur, Codex est utilisé : dans l’application ChatGPT pour PC, passez en Codex et choisissez ouvrir un dossier (open a folder). Codex lit `AGENTS.md` automatiquement et les tâches planifiées sont sous Scheduled.

### Claude
Dans un chat classique Claude, vous recevez le handoff en réponse et l’IA mémorise la règle (Settings, Memory), activée par l’administrateur sur compte entreprise. En Cowork dans l’application Claude pour PC, l’IA enregistre `handoff.md` dans le dossier choisi et écrit la règle dans les instructions du dossier (Folder instructions) ; Claude Code lit `AGENTS.md`.

### Gemini
Dans Gemini, vous recevez le handoff en réponse et via Share & export, Export to Docs, vous l’enregistrez comme Document Google. Il trouve les e-mails Gmail si vous écrivez @Gmail dans le prompt avec le sujet du fil. Les comptes entreprise n’ont pas de mémoire, donc sauvegardez la forme du handoff comme skill (écrivez « Enregistre comme skill ») et la prochaine fois, il suffira d’écrire « handoff ».
## Qu’est-ce qu’un handoff

Le handoff est la transmission, comme un relais ou un passage de service entre deux équipes. Il contient l’objectif, ce qui est fait et vérifié, la prochaine étape, comment savoir que c’est fini, ce qui ne doit pas être modifié, et ce qui manque encore. En Cowork ou Code, c’est un simple fichier texte `handoff.md` dans le dossier projet, éditable avec n’importe quel éditeur. Seul le dernier handoff compte : l’IA l’écrase à chaque transmission et marque comme clos quand le travail est terminé.

Le handoff est utile aussi quand vous vous absentez quelques jours, ou quand le chat est trop long et que l’IA oublie les accords initiaux. L’IA ne peut gérer qu’une quantité limitée de texte par chat, donc dans un chat très long, elle perd le début et confond anciennes et nouvelles versions. Le handoff transmet dans un nouveau chat uniquement ce qui est actuel.

`AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. Plusieurs outils en mode Code le lisent automatiquement au début de chaque travail ; là où ce n’est pas possible, l’IA enregistre la règle dans ses paramètres ou vous indique où la placer. Ensuite, il suffit d’écrire « handoff » et l’IA sait quoi écrire et où.

Le handoff contient uniquement ce dont le destinataire a besoin pour reprendre ; l’IA exclut chat complet, impasses, mots de passe et données personnelles inutiles selon le prompt. Dans un chat classique, l’IA mémorise la règle. Envoyez le handoff par e-mail au collègue avec les documents référencés.
## Pour que le handoff s’écrive tout seul

Si vous travaillez sur plusieurs projets dans un même dossier en Cowork ou Code, les handoffs peuvent s’écrire automatiquement chaque vendredi avant de quitter le travail pour le week-end. Il suffit d’une tâche planifiée. Ouvrez l’IA en mode Cowork ou Code dans ce dossier commun, insérez cette consigne et demandez-lui de créer la tâche planifiée :

```text
Chaque vendredi à 16h00, parcours les sous-dossiers de ce dossier où il y a eu du travail cette semaine et où le travail n’est pas terminé. Dans chacun, enregistre un nouveau handoff.md selon la forme d’AGENTS.md du sous-dossier. Si la règle manque, utilise la forme du handoff.md existant, et si les deux manquent, saute le sous-dossier. À la fin, indique-moi pour quels projets il reste des éléments dans « Manques ».
```

La tâche ne fonctionnera que si l’ordinateur est allumé et l’application ouverte.

Lundi, ouvrez un nouveau chat dans le dossier projet et écrivez simplement « Continue selon `handoff.md`. »
## Exemple

Eva choisit un nouveau prestataire de nettoyage pour l’entreprise. Le jeudi 15/10, veille de ses congés, elle insère le prompt dans le chat Cowork où elle a comparé les offres avec l’IA. En lisant, elle remarque qu’il manque à qui appeler chez EkoClean ; l’IA complète et dans `handoff.md` se trouve :

```text
### Handoff : choix du prestataire de nettoyage (15/10/2026)
- Objectif : contrat signé avec le prestataire qui commencera le 1/12, avant le 30/10.
- Fait et vérifié : comparaison de trois offres dans le fichier srovnani-nabidek.xlsx ; Čistota Plus et Úklid Brno ont confirmé les prix par e-mail le 13/10.
- En cours : EkoClean a promis une offre révisée pour le 20/10.
- Prochaine étape : appeler Petra Horáková d’EkoClean le lundi 19/10 pour vérifier si l’offre arrive à temps.
- Terminé quand : la directrice financière approuve un prestataire et le contrat est signé.
- Limites : ne pas renégocier le prix, plafond à 42 000 CZK par mois.
- Manques : modèle de contrat du service juridique ; Pavel n’a pas encore accès au dossier partagé Achats.
- Documents : srovnani-nabidek.xlsx et offres dans le dossier nabidky.
```

Eva ouvre ensuite un nouveau chat dans le même dossier et écrit « Continue selon `handoff.md`. » L’IA répond que le choix attend l’offre d’EkoClean et propose d’appeler Mme Horáková lundi. Sans poser de questions, Eva envoie le handoff par e-mail à Pavel avec le tableau comparatif. Si l’IA avait demandé de quel choix il s’agissait, le nouveau chat aurait probablement été dans un autre dossier que le handoff.

Dans un chat classique, Eva insérerait les e-mails des prestataires dans le nouveau chat avec le tableau comparatif. Elle recevrait le même handoff en réponse, l’insérerait dans un autre nouveau chat avec la phrase « Continue selon ce handoff. » et l’enverrait à Pavel par e-mail.
## En cas de blocage

- **Dans un chat classique, l’IA ne sauvegarde rien :** elle ne gère pas les fichiers et si la mémoire est désactivée, elle ne mémorise pas la règle. Vous avez le handoff en réponse et devez réinsérer le prompt la prochaine fois ; pour que l’IA sauvegarde automatiquement, passez en [mode Cowork ou Code](card:when-chat-is-not-enough).
- **Le nouveau chat pose des questions déjà décidées :** écrivez ses questions dans le chat original, laissez l’IA compléter le handoff, puis ouvrez à nouveau le nouveau chat.
- **Le handoff est presque aussi long que le chat :** demandez à l’IA de réduire chaque point à une ou deux phrases et de laisser les détails dans les documents référencés.
- **Le chat est trop long et l’IA a oublié le début :** ouvrez un nouveau chat, insérez les documents principaux et le prompt, puis ajoutez quelques phrases sur l’état d’avancement.
## Ce qui sera prêt

Vous avez un handoff qui permet au nouveau chat de poursuivre sans questions, et vous pouvez envoyer ce même handoff à un collègue. En Cowork ou Code, il est dans `handoff.md` du dossier projet et la règle dans `AGENTS.md` pour que l’IA prépare le handoff à la simple écriture de « handoff ». Dans un chat classique, l’IA mémorise la règle ; si la mémoire est absente, vous réinsérez le prompt. Vous pouvez fermer l’ancien chat surchargé.
## Et ensuite

Si la tâche transmise est suivie d’une étape avec l’IA, par exemple un contrat issu de l’offre choisie puis un rapport pour la direction, et que vous répétez cela, [enregistrez toute la procédure comme skill](card:create-skill-from-proven-process). L’état du projet est résumé par la [page d’accueil du projet](card:project-start-here), que l’IA rédige comme le handoff.
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
