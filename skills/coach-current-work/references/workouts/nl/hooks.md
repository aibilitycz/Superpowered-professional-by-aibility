# Stel uw hook in: documentcontrole die AI niet mist

Voordat AI klaar meldt, doorloopt het elke door AI geschreven document in de map voor uw controle.

## Stel uw hook in: documentcontrole die AI niet mist

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met een map waarin AI documenten schrijft.
## Waarvoor is het nuttig

Een klant ontving dinsdag een offerte waarin een regel met uw marge uit de interne
calculatie bleef staan. De instructie „schrijf de marge niet in de offerte“ stond wel
in de AI-regels, maar werd bij langdurig werk over het hoofd gezien.

Een hook is een stap die het hulpmiddel automatisch uitvoert telkens wanneer AI het werk afrondt, zodat
de controle plaatsvindt, ook als AI de regel vergeet.
## Wat u moet voorbereiden

- een map waarin AI documenten direct in bestanden schrijft, bijvoorbeeld offertes in Word,
- regels die AI in die documenten soms overtreedt,
- AI in de [Code-modus](glossary:workmode) die met bestanden op de computer werkt.
## Hoe u het doet

1. Kies met AI de regels die de hook moet bewaken. Plaats de prompt in AI in Code-modus
   geopend in de map met documenten; als het hulpmiddel om toestemming vraagt,
   geef die dan.
2. Bekijk wat de controle in oudere documenten vond; AI leest ze alleen.
   Wat de controle onterecht meldt, zegt u tegen AI en zij past het aan.
3. Controleer bij het volgende werk dat AI in de map maakt of er aan het eind een
   regel met het controleresultaat verschijnt. Wat de controle vindt, corrigeert AI
   voordat het klaar meldt.

In de controle horen regels die exact te verifiëren zijn: een woord dat niet in het document
mag voorkomen, of een gegeven dat niet mag ontbreken.
## AI-oefening

Plaats deze [prompt](glossary:prompt) in AI in Code-modus, geopend in uw map:

Stel in deze map een hook in: documentcontrole die dit hulpmiddel automatisch uitvoert telkens wanneer je klaar bent met werken. Als hooks hier niet werken, bijvoorbeeld in Cowork of gewone chat, zeg het dan en stel niets in.

Stel eerst regels voor de controle voor. Kijk of AGENTS.md in de map staat en in de documenten hier, en stel maximaal vijf regels voor die exact te verifiëren zijn: een woord of gegeven dat niet in het document mag staan of niet mag ontbreken. Bijvoorbeeld „In de offerte staat geen marge of inkoopprijs.“ Vraag mij welke ik wil en voeg ook toe wat ik zeg.

Zet de goedgekeurde regels om in een controle in een script dat ook Word-documenten leest en draait zonder extra programma’s te installeren. Sla het script op in een submap controle en de regels in een apart bestand ernaast, zodat een nieuwe regel geen nieuwe hook-goedkeuring nodig heeft. Schrijf in AGENTS.md waar de controle staat, zodat je die in een volgende chat kunt aanpassen; als AGENTS.md er niet is, maak die dan aan.

Voer daarna de controle één keer uit op alle documenten die al in de map staan en laat zien wat het vond. Corrigeer niets daarin, ze kunnen al naar klanten zijn gegaan. Zet pas daarna de hook aan die alleen documenten controleert die vanaf dat moment nieuw zijn of gewijzigd.

Stel de hook zo in dat de controle altijd start als je klaar bent met werken. Als de controle iets vindt, laat het werk dan terugkeren zodat je de fout corrigeert voordat je zegt dat het klaar is. Als de fout na jouw correctie blijft, laat de controle je doorgaan. Telkens als de hook een document controleert, laat het dan zelf een regel met het resultaat zien, bijvoorbeeld „Controle: 2 documenten in orde“, en als er een fout blijft, ook wat er nog is. Als ik de hook of map in het hulpmiddel moet goedkeuren, zeg dan precies waar. Als de hook pas in een nieuwe chat werkt, zeg dat dan.

Als ik later een nieuwe regel geef, voeg die dan toe aan de controle.

## In uw hulpmiddel

### Microsoft Copilot
Microsoft vermeldt niet dat Copilot hooks kan uitvoeren. Sla de controleregels op in Custom instructions (Instellingen en meer, Chat-instellingen,
Personalisatie) en schrijf aan het eind van het werk „Controleer het document volgens mijn regels“. De hook stelt u in in een hulpmiddel met Code-modus, bijvoorbeeld Claude Code
of Codex in de ChatGPT-app; vraag uw IT-beheerder om hulp.

### ChatGPT
De hook stelt Codex in: schakel in de ChatGPT-app voor desktop over naar Codex,
open een map en plaats de prompt. Codex start de hook nadat u de map als vertrouwd hebt gemarkeerd en de hook hebt goedgekeurd; AI vertelt u waar. In gewone ChatGPT-chat horen de controleregels in Custom instructions (Instellingen,
Personalisatie).

### Claude
De hook stelt Claude Code in: schakel in de Claude-desktopapp over naar Code,
selecteer een map en plaats de prompt; AI schrijft de hook zelf in de instellingen. Cowork start hooks alleen als onderdeel van een plugin, doe de oefening daarom in Claude Code. In gewone Claude-chat horen de controleregels in projectinstructies (Set project
instructions).

### Gemini
De Gemini-app werkt niet met mappen op de computer, dus u kunt er geen hook instellen.
Sla de controleregels op als skill (zeg „Sla dit op als skill“) en vraag aan het eind van het werk om controle. De hook stelt u in een hulpmiddel met Code-modus in, bijvoorbeeld Claude Code of Codex in de ChatGPT-app; vraag uw IT-beheerder om hulp.
## Wat is een hook

Een hook is een stap die het AI-hulpmiddel automatisch uitvoert op een bepaald
moment in het werk, bijvoorbeeld aan het begin of als AI klaar is. Een regel in
`AGENTS.md`, het bestand met instructies voor AI in uw map, leest AI maar kan die bij langdurig werk over het hoofd zien. De hook is onafhankelijk van AI’s aandacht.

De AI schrijft de controle als script, een kort programma dat documenten doorloopt
en meldt wat niet klopt. Het script herkent alleen zaken die exact te verifiëren zijn, zoals
verboden woorden of ontbrekende gegevens. Of cijfers kloppen met de bron, herkent het niet;
daarvoor is de [resultaatcontrole](card:kontrola-vysledku).

De hook wordt opgeslagen in de instellingen van het hulpmiddel in deze map, dus geldt voor elk
werk van AI daarin. Documenten die u zelf schrijft, controleert u door AI „Controleer map“ te laten uitvoeren. Gewone chat of Cowork stelt de hook niet automatisch in; hoe u naar Code overschakelt, staat op de kaart [Chat, Cowork of Code](card:when-chat-is-not-enough).
Waar Code-modus ontbreekt, slaat u de controleregels op in de instructies van uw hulpmiddel en vraagt u om controle aan het eind van het werk, zoals in het blok In uw hulpmiddel.
## Voorbeeld

Tereza maakt offertes voor bedrijfsevenementen bij een cateringbedrijf. Op maandag
19-10 stelt ze in de map `Offertes 2026` een hook in met twee regels: in de offerte
mag geen marge of inkoopprijs staan en de offerte vermeldt tot wanneer die geldig is. De eerste controle
loopt 23 documenten door en meldt:

```text
Controle: 23 documenten, 3 bevindingen
- Offerte Bakkerij Novák.docx: ontbreekt tot wanneer de offerte geldig is.
- Offerte Glasblazerij Horák.docx: ontbreekt tot wanneer de offerte geldig is.
- Offerte Autoservice Dvořák.docx: in de prijzentabel staat de regel „Marge 18 %“.
```

Op woensdag 21-10 voert Tereza een offerte in voor een kerstfeest voor 80 personen uit
een klantmail en interne calculatie. AI neemt ook de kolom met inkoopprijs over in de tabel. De controle vindt die aan het eind van het werk en geeft het werk terug aan AI, die de kolom verwijdert. Tereza krijgt daarna de definitieve offerte met daaronder de regel „Controle: 1 document in orde“.
## Als u vastloopt

- **AI zegt dat het geen hook kan instellen:** u werkt waarschijnlijk in gewone chat
  of Cowork. Schakel over naar [Code-modus](card:when-chat-is-not-enough) en open daar de map.
- **De regel met het resultaat verschijnt niet of de hook meldt een fout:** zeg tegen AI: „Hook is niet goed uitgevoerd. Zoek uit waarom en repareer het; als ik het moet goedkeuren, zeg waar.“
- **De controle meldt fouten die geen fouten zijn:** de regel is te breed,
  bijvoorbeeld het woord „marge“ in een zin over klantvoordelen of een vervaldatum
  bij een document dat geen offerte is. Zeg tegen AI om de controle voor die regel te verscherpen.
- **De controle bewaakt geen documenten die u zelf schrijft:** de hook start als
  AI klaar is met werken. Zeg tegen AI „Controleer map“ en die controleert ook die documenten.
## Wat klaar zal zijn

In de map staat een hook die na elk AI-werk nieuwe en gewijzigde documenten controleert volgens uw regels, en u weet wat de controle in oudere documenten vond. Bij het volgende werk ziet u een regel met het controleresultaat en corrigeert AI fouten die de controle vindt voordat het werk klaar wordt getoond. Nieuwe regels voegt AI toe aan de controle als u ze opgeeft.
## Wat verder

Cijfers en beweringen die het script niet exact kan verifiëren, laat u AI vergelijken met
bronnen in de [resultaatcontrole](card:kontrola-vysledku). Wilt u de hele map doorlopen zonder werk erin, bijvoorbeeld elke maandagmorgen, stel dan een [geplande taak](card:recurring-ai-task) in.
## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Werkmodus

**Wat het is:** Type interactie met AI: chat, canvas/artifact, agent, codering, zoeken. Verschillende taken vereisen verschillende modi.

**Wat het niet is:** Het is geen niveau van geavanceerdheid. De modus wordt door de gebruiker gekozen op basis van de taak, niet op basis van zijn score.

**Waarom de student het nodig heeft:** Het leert herkennen wanneer te schakelen van chat naar een andere omgeving voor een beter resultaat.

## Dienstuitval, limiet of overbelaste chat

Gezamenlijke fallback voor operationele onderbrekingen bij het werken met AI. Deze is beschikbaar vanuit elke kaart via de invoer **Uitval of opgebruikt limiet**. Het maakt geen eigen kaart, check-in of meerdere kopieën van dezelfde tekst aan.

De specifieke sectie **Als er iets niet lukt** in de kaart behandelt verder fouten in invoer, bronnen, tools of procedures. Deze mechaniek wordt geactiveerd wanneer AI technisch niet verder kan in de doorloop.

## Bepaal eerst wat er is gebeurd

| Wat ziet u | Waarschijnlijke situatie | Eerste stap |
|---|---|---|
| Tool meldt opgebruikt limiet, te veel verzoeken of hersteltijd | tarief- of tijdelijk operationeel limiet | noteer hersteltijd en sla terugkeerpunt op |
| AI vergeet het begin, weigert extra bijlage of meldt te lange invoer | te grote context, bestand of taak | maak een handoff en ga verder in een nieuwe context of geschiktere omgeving |
| Tool reageert niet, geeft serverfout of meerdere modellen falen | dienstuitval | controleer officiële status en kies een goedgekeurde vervanging of pauze |

Als AI nog reageert, kan het de situatie zelf benoemen en een terugkeerpunt voorbereiden. Als het niet reageert, sla deze stap over. Herhaaldelijk hetzelfde verzoek sturen redt de voortgang niet.

## Sla een terugkeerpunt op

Bewaar voor wachten of overstappen het kleinste pakket waarmee veilig kan worden doorgegaan:

```text
Doel: ...
Wat is klaar en waar: ...
Bevestigde beslissingen en beperkingen: ...
Gebruikte bronnen of bestanden: ...
Dichtstbijzijnde volgende stap: ...
Wat mag niet opnieuw worden veranderd of gemaakt: ...
```

Als AI nog reageert, gebruik:

> Maak een beknopt terugkeerpunt voor voortzetting in een nieuwe chat of tool. Behoud doel, voltooide delen, bevestigde beslissingen, bronnen, beperkingen en één dichtstbijzijnde stap. Verzint niets wat niet in het gesprek staat.

Bij langere werkzaamheden sla het terugkeerpunt op in het project-README of een andere goedgekeurde werkruimte. Gevoelige invoer blijft alleen in de goedgekeurde opslag.

## Tarief- of operationeel limiet bereikt

1. Achterhaal wanneer het limiet wordt hersteld en of het betrekking heeft op model, functie of hele account.
2. Kies tussen pauzeren, kleinere scope en een goedgekeurd vervangend model of omgeving.
3. Bij overstap neem het terugkeerpunt en alleen de noodzakelijke bronnen voor de volgende stap mee.
4. Controleer of de vervanging de benodigde bestanden, tools en acties aankan. Een zwakker model kan volstaan voor formattering maar falen bij analyse of werken met tools.

## Context, bestand of taak is te groot

1. Laat AI een handoff maken voordat het oudere beslissingen vergeet, als het nog reageert.
2. Begin een nieuwe chat of project met het terugkeerpunt en verwijzingen naar canonieke bestanden.
3. Verdeel het werk in zinvolle delen en behoud gemeenschappelijke resultaatcriteria. Willekeurig tekst splitsen kan relaties tussen delen verliezen.
4. Als de taak meerdere bestanden, bulkwerk of projectwijzigingen vereist, ga verder via de kaart `when-chat-is-not-enough`.

## Tool of model heeft uitval

1. Controleer de officiële status van de aanbieder. Accountfouten los je pas op als de dienst over het algemeen werkt.
2. Sla het terugkeerpunt op buiten het momenteel niet-functionerende gesprek, als dat nog toegankelijk is.
3. Gebruik een goedgekeurde vervangende tool alleen als deze de benodigde capaciteiten heeft en dezelfde bronnen mag verwerken.
4. Is er geen geschikte vervanging, pauzeer het werk en noteer de precieze volgende stap. Na herstel ga verder vanaf het laatst bevestigde resultaat.

## Veiligheidsgrenzen

- Limiet of uitval is geen reden om werk-, klant- of persoonlijke data in een niet-goedgekeurde persoonlijke tool te plaatsen.
- Een nieuw account, gratis tarief of andere aanbieder kan andere voorwaarden hebben voor data, opslag en training.
- Overstappen tussen modellen kan formaat, nauwkeurigheid en beschikbare tools veranderen. Vergelijk de eerste output na terugkeer met het laatst bevestigde punt.
- Verstuur geen actie opnieuw die mogelijk vóór de fout is uitgevoerd zonder de status te verifiëren. Dit geldt vooral voor systeeminvoer, berichtverzending, aankoop of verwijdering.

## Terug naar de kaart

Na herstel van de dienst of overstap naar een geschikte omgeving:

1. laad het terugkeerpunt,
2. toon AI het laatst bevestigde resultaat,
3. vraag alleen de dichtstbijzijnde volgende stap op,
4. rond de oorspronkelijke kaart af zonder herhaling van voltooid werk,
5. noteer bij verandering van tool of model het verschil dat het resultaat kan hebben beïnvloed.

## Registratie

De mechaniek maakt geen aparte voltooiing aan. Het kan alleen een terugkeerpunt, gekozen route en eventuele verschillen na toolwissel toevoegen aan het resultaat van de hoofdkaart.
