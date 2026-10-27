# Envoyez un lien au lieu d’une pièce jointe : page web générée par l’IA

Au lieu d’un PDF en pièce jointe, envoyez un lien vers une page claire créée par l’IA à partir du document.

## Envoyez un lien au lieu d’une pièce jointe : page web générée par l’IA

**Difficulté : intermédiaire.**\
**Durée : environ 15 minutes** avec un seul document à envoyer.
## À quoi ça sert

Lundi, vous avez envoyé à la direction un rapport mensuel en PDF en pièce jointe. Mercredi, la directrice vous demande en réunion un chiffre de la deuxième page, car elle n’a pas ouvert la pièce jointe sur son téléphone, et entre-temps un collègue a fait suivre une ancienne version contenant une erreur de total.

La page créée par l’IA à partir du document affiche en haut le message principal, se lit sur téléphone sans zoom, et après correction tout le monde voit la version à jour.
## Ce qu’il faut préparer

- un document à envoyer, par exemple un rapport mensuel ou une offre, dans un dossier,
- le logo de l’entreprise en image dans le même dossier, ou à défaut l’adresse du site web de l’entreprise,
- une IA capable de créer la page avec un lien ; là où c’est possible, le bloc « Dans votre outil » l’indique.
## Comment faire

1. Ouvrez l’IA dans le dossier contenant le document, de préférence en mode Cowork ou Code, ou joignez-lui le document. Saisissez le prompt et ajoutez le nom du document, le destinataire de la page et l’adresse du site web.
2. Parcourez la page et dites à l’IA ce qu’il faut modifier. Puis définissez qui pourra ouvrir la page et copiez le lien ; là où c’est possible, le bloc « Dans votre outil » l’indique.
3. Ouvrez le lien sur téléphone, et s’il est destiné à l’extérieur de l’entreprise, aussi dans une fenêtre de navigation privée pour voir la page comme le destinataire. Ensuite, envoyez-le à la place de la pièce jointe.
## Exercice IA

Insérez ce [prompt](glossary:prompt) dans l’IA que vous utilisez au travail, et sur la dernière ligne ajoutez le nom du document, le destinataire de la page et éventuellement l’adresse du site web de l’entreprise :

Crée une page web à partir du document que j’enverrai par lien au lieu d’une pièce jointe. Le document concerné et le destinataire de la page sont indiqués sur la dernière ligne.

Lis tout le document et identifie ce que le lecteur doit savoir et faire. Mets en haut une phrase avec le message principal, et juste en dessous la prochaine étape pour le lecteur : date limite, décision ou contact. Ensuite, détaille dans de courtes sections avec titres. Reprends chiffres, prix, dates et noms exactement comme dans le document. Ne complète pas ce qui manque dans le document, mais indique-moi ce que je dois ajouter.

Utilise les couleurs, la police et le logo de l’entreprise. Le logo se trouve dans le dossier, prends les couleurs du logo ou du site web de l’entreprise si son adresse est indiquée sur la dernière ligne. La page doit être bien lisible sur téléphone.

Crée la page pour qu’elle soit partageable par lien : dans Claude comme artifact, dans ChatGPT comme Site (website). Montre-la-moi ensuite.

Sauvegarde immédiatement dans le fichier sablona-stranek.md dans le dossier où tu travailles un modèle pour la prochaine fois : couleurs, police, emplacement du logo et ordre des sections de la page. Si je te demande de changer l’apparence ou l’ordre, applique-le à la page et au modèle. Ajoute dans le fichier AGENTS.md du même dossier la règle : « Quand tu prépares un rapport, un guide ou une offre pour collègues, clients ou direction, crée aussi une page web selon sablona-stranek.md. » Si AGENTS.md n’existe pas, crée-le. Assure-toi que ce fichier soit lu au début de chaque travail dans cet outil ; en mode Cowork, inscris-le dans les instructions du dossier.

Document, destinataire de la page et éventuellement adresse du site web de l’entreprise :

## Dans votre outil

### Microsoft Copilot
Collez le prompt dans Copilot Chat et joignez le document ; si l’IA ne sauvegarde rien dans le dossier, ce n’est pas grave. Sous la réponse, cliquez sur les trois points puis Edit in Pages ; vous partagez la page via Copy link et les collègues l’ouvrent dans Loop. Elle n’a pas vos couleurs et les personnes hors entreprise ne peuvent pas l’ouvrir, donc envoyez-leur le document comme avant. Le modèle est mémorisé si vous écrivez « Mémorise l’apparence de la page pour la prochaine fois ».

### ChatGPT
La page en tant que Site est créée en mode Work ou Codex dans l’application ChatGPT pour ordinateur, Codex directement avec le dossier. Dans l’aperçu, cliquez sur Share, choisissez Anyone on the internet ou pour collègues Anyone in the workspace, puis Publish et Copy link. Les modifications se trouvent sous Sites dans le panneau gauche. Si vous n’avez pas Sites, l’administrateur doit l’activer ; en attendant, envoyez le document comme avant.

### Claude
Dans l’application Claude, choisissez Cowork et sélectionnez le dossier ; la page est créée comme artifact et le modèle est sauvegardé dans le dossier. En forfait entreprise, cliquez sur Share puis sous Who has access choisissez Anyone at suivi du nom de votre entreprise. En forfait Pro ou Max, publiez-la pour les personnes sans compte Claude via Publish. Copiez le lien avec Copy link ; le partage n’est pas possible en forfait gratuit.

### Gemini
Dans l’application Gemini, sous + Canvas, joignez le document et le logo, puis insérez le prompt ; si rien n’est sauvegardé dans le dossier, ce n’est pas grave. Créez la page avec Create a Web page, partagez le lien via Share & export puis Share. Avec un compte entreprise, c’est un fichier partagé via Drive : après modification, partagez-le à nouveau et hors entreprise seulement si Drive le permet. Sauvegardez le modèle dans Gemu (Gems, New Gem, instructions, Save).
## Qu’est-ce qu’une page par IA

Une page par IA est un produit fini que l’IA crée en parallèle du chat et qui a son propre lien. Ce lien s’ouvre dans un navigateur sur ordinateur et téléphone, donc le destinataire ne télécharge rien. Contrairement à un fichier partagé sur OneDrive ou Google Drive, la page réorganise le document : en haut une phrase avec le message principal et la date limite, le texte se lit sur téléphone sans zoom, et la page porte les couleurs et le logo de votre entreprise. Elle convient aux rapports, guides pour collègues ou clients, et offres.

Le lien public est accessible à toute personne à qui vous l’envoyez, même si elle est transmise à d’autres. En forfait entreprise, le partage hors entreprise est activé par l’administrateur.

`sablona-stranek.md` est un fichier texte simple avec couleurs, police, logo et ordre des sections. `AGENTS.md` est un fichier de règles pour l’IA dans le même dossier. Les deux sont écrits par l’IA et vous n’avez pas besoin de les ouvrir.
## Laissez l’IA créer les pages automatiquement

Les pages suivantes sont créées automatiquement par l’IA selon la règle enregistrée dans `AGENTS.md` ou dans les instructions du dossier ; elle ne l’enregistre dans le dossier qu’en [mode Cowork ou Code](card:when-chat-is-not-enough). Elle le lit au début de chaque travail, donc le prochain document que vous enverrez sera aussi préparé comme page dans vos couleurs. Pour créer immédiatement une page à partir d’un document précis, il suffit d’une phrase :

```text
Crée une page pour client à partir de nabidka-firemni-vylet.docx selon sablona-stranek.md.
```

Le rapport que vous envoyez chaque mois n’a pas besoin d’être renvoyé. Ouvrez la conversation où la page a été créée, demandez à l’IA de la mettre à jour avec les nouveaux chiffres, et publiez la modification comme la première fois. Les destinataires verront les nouveaux chiffres sur leur lien.
## Exemple

Lukáš travaille dans un cabinet comptable et s’occupe des nouveaux clients. Il leur envoie un PDF de huit pages expliquant comment télécharger les justificatifs sur le portail en ligne, mais les clients appellent quand même car ils n’ouvrent pas la pièce jointe sur téléphone. Le 14/10/2026, il ouvre l’IA en mode Code dans le dossier Nouveaux clients, où se trouvent le guide `nahravani-dokladu.docx` et le logo du cabinet. Il insère le prompt et ajoute sur la dernière ligne :

```text
nahravani-dokladu.docx, pour les nouveaux clients : ils doivent télécharger les justificatifs de septembre avant la fin du mois
```

L’IA crée la page et montre un aperçu. En haut : « Téléchargez les justificatifs de septembre avant le 31/10 via le portail, cela prend dix minutes. » En dessous, quatre étapes numérotées avec captures d’écran du guide et le téléphone de Lukáš en cas de problème. Lukáš demande à l’IA d’agrandir les étapes car les clients lisent sur téléphone. Puis il définit que la page est accessible à toute personne avec le lien, copie le lien et l’ouvre en navigation privée et sur téléphone. Il envoie aux trois premiers clients une phrase avec le lien au lieu du PDF.

En novembre, le portail déplace le bouton de téléchargement. Lukáš ouvre la conversation où la page a été créée et écrit :

```text
Le bouton Télécharger est maintenant en haut à droite du portail, modifie l’étape 2 en conséquence.
```

Après publication, les clients ouvrent le même lien et voient la nouvelle procédure.
## En cas de blocage

- **L’IA renvoie seulement du code ou un fichier au lieu d’une page :** dites-lui « crée une page avec un lien partageable ». Dans Claude, activez dans Settings, Capabilities l’option Code execution and file creation, dans ChatGPT commencez le prompt par `@Sites`, dans Gemini activez Canvas. En forfait entreprise, la création de pages est activée par l’administrateur.
- **L’option pour personnes hors entreprise est grisée ou absente :** en forfait entreprise, l’administrateur de votre outil IA doit activer le partage hors entreprise. Demandez-lui de l’activer ou partagez la page seulement avec des collègues pour l’instant.
- **Le destinataire voit une page de connexion au lieu de la page :** vérifiez dans les paramètres de partage à qui la page est accessible. Le lien Share dans Claude s’ouvre uniquement pour les personnes connectées ; envoyez aux clients sans compte une page publiée via Publish dans Claude Pro ou Max, ou un Site ChatGPT avec l’option Anyone on the internet.
- **La page affiche un chiffre différent du document :** demandez à l’IA de comparer tous les chiffres de la page avec le document et de lister les différences. Plus d’infos dans la carte [Contrôle du résultat](card:kontrola-vysledku).
## Ce que vous aurez

Vous disposez d’une page issue de votre document et d’un lien que vous avez ouvert sur téléphone comme le verra le destinataire, et que vous avez envoyé à la place de la pièce jointe. L’IA a enregistré le modèle de mise en page pour la prochaine fois, en mode Cowork ou Code dans le fichier `sablona-stranek.md`, ce qui vous permet de créer la prochaine page d’une phrase.
## Et ensuite

Si vous devez présenter le contenu en réunion, faites préparer à partir du document un [plan de présentation](card:tvorba-prezentace). Avant d’envoyer une page avec des chiffres importants, passez par le [Contrôle du résultat](card:kontrola-vysledku).
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
