# Laat AI live data downloaden: actuele cijfers met bron en datum

Actuele cijfers over bedrijven, concurrentie of de markt haalt AI zelf van het web en vermeldt bij elk cijfer de bron en datum.

## Laat AI live data downloaden: actuele cijfers met bron en datum

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met één vraag waarvoor cijfers ontbreken.
## Waarvoor is het nuttig

Op donderdag tekent u een contract met een nieuwe leverancier en wilt u weten hoe groot het bedrijf is, of het groeit en geen problemen heeft. De chat schrijft een algemene alinea van de website en u zoekt zelf een half uur gegevens uit registers.

Het helpt als AI de cijfers zelf direct uit de bron haalt, bij elk cijfer een link en datum vermeldt en de procedure opslaat, zodat u de volgende leverancier met één zin controleert.
## Wat u moet voorbereiden

- een werkgerelateerde vraag waarvoor u actuele cijfers nodig hebt en wat u daarmee beslist,
- de AI die u op het werk gebruikt; waar u begint, toont het blok "In uw tool",
- AI in [modus](glossary:workmode) Cowork of Code, alleen als de gewone chat de data niet vindt.
## Hoe te werk te gaan

1. Vertel AI welke cijfers u nodig hebt en wat u ermee beslist. AI zoekt waar de data echt zijn en haalt ze zelf binnen. Als inloggen of IT-beheer nodig is, meldt AI dat.
2. Open de link bij het cijfer waarop de conclusie het meest steunt en controleer of de bron het echt vermeldt. Als het niet klopt, zeg dat tegen AI en laat de tabel corrigeren.
3. Geef in een nieuwe chat dezelfde opdracht in één zin, bijvoorbeeld voor een ander bedrijf. Open in de modus Cowork of Code een nieuwe chat in dezelfde map.

In de tabel horen alleen cijfers die u gebruikt voor uw besluitvorming.
## AI-oefening

Plak deze [prompt](glossary:prompt) in de AI die u op het werk gebruikt en schrijf uw vraag onder de laatste regel:

Ik heb actuele webdata nodig voor een taak die ik nu behandel. Wat ik nodig heb en waarvoor, staat op de laatste regel.

Bepaal eerst waar de data echt zijn: openbaar register of statistiek, bedrijfswebsite, vacatures, advertentiebibliotheek, tool voor zoekvolumes of profiel op sociale media. Als er een directe bron is, neem dan de cijfers daarvan; artikelen die ze overnemen gebruik je alleen als er geen directe bron is.

Download de data zelf. Open openbare pagina's via websearch. Als de data in een tool staan waar ik via browser toegang toe heb (zoals zoekwoordplanner of advertentiebibliotheek) en je kunt de browser bedienen, doorzoek die dan. Als de data in een database staan waarvoor je een dataconnectie (MCP-server) nodig hebt, gebruik die die je hebt. Heb je die niet en kun je hem hier koppelen, koppel hem dan; als ik moet inloggen, vertel me precies waar en wacht. Kun je hem niet koppelen, vertel me welke bron geschikt is en wie hem kan activeren, en geef voorlopig wat je uit het openbare web vindt. Als de bron betaald is, vertel me de prijs voordat je hem gebruikt.

Zet het resultaat in een tabel met kolommen: gegeven, cijfer, link naar bron en datum waarop het cijfer geldt. Wat je niet vindt, markeer als ontbrekend en schat niets.

Schrijf onder de tabel in twee zinnen wat uit de cijfers volgt voor mijn taak, welk cijfer ik in de bron moet verifiëren en waar ik het precies vind.

Werk je in een map, sla de tabel dan bovenaan op in het bestand zive-data.md in de projectmap onder een kop met de datum van vandaag en de taaknaam; als het bestand niet bestaat, maak het aan. Sla tot slot de procedure op als skill: waar je de data vandaan haalt, hoe je ze downloadt en hoe de tabel eruitziet, zodat ik de volgende keer volsta met één zin, bijvoorbeeld "haal dezelfde data voor een ander bedrijf". Als skill opslaan niet kan, bewaar de procedure dan in het geheugen of eigen instructies van deze tool.

Wat ik nodig heb en waarvoor:

## In uw tool

### Microsoft Copilot
Plak de prompt in Copilot Chat op `copilot.cloud.microsoft`; regels over bestand en skill slaat hij over. Als links naar websites ontbreken in het antwoord, zet dan zoeken aan via Settings, Personalization; als dat niet kan, heeft de beheerder het uitgezet. De procedure onthoudt hij na de zin "Onthoud deze procedure", Cowork slaat hem op als skill en plant taken op de pagina Automations. Betaalde data levert Copilot via een connector van de beheerder.

### ChatGPT
Plak de prompt in een gewone chat; regels over bestand en skill slaat hij over. ChatGPT zoekt zelf op het web, en als links bij cijfers ontbreken, typ / en kies Search. De procedure onthoudt hij na de zin "Onthoud deze procedure"; als u geheugen hebt, ziet u dat in Settings, Personalization. Voor openbare registers is geen connector nodig, voor betaalde databases voegt de beheerder die toe onder Plugins en geplande taken staan onder Scheduled.

### Claude
Plak de prompt in Cowork in de projectmap of in de chat; als links bij cijfers ontbreken, zet Web search aan onder +. Advertentiebibliotheek of Zoekwoordplanner doorzoekt Cowork in uw Chrome via de extensie Claude in Chrome. Dataconnectors in Team- en Enterprise-tarieven voegt de organisatie-eigenaar toe (Organization settings, Connectors). Claude slaat de procedure op als skill, taken staan onder Scheduled.

### Gemini
Plak de prompt in een gewone chat; Gemini zoekt zelf via Google en slaat regels over bestand en skill over. U kunt geen eigen dataconnectors met een werkaccount toevoegen, dus laat AI data uit gespecialiseerde databases downloaden in Cowork- of Code-modus, of vraag IT. Laat de procedure opslaan als skill (Customize, Skills) en geplande taken vindt u onder Scheduled.
## Wat zijn live data en een dataconnectie

Live data zijn cijfers die dagelijks of wekelijks veranderen, zoals omzet en insolventies van een bedrijf of advertenties die concurrenten nu draaien. AI kent ze niet uit zichzelf, want hij is getraind op oudere data en schat ze zonder downloaden alleen.
Openbare pagina's, zoals het handelsregister of bedrijfswebsite, leest hij via websearch. Wilt u een rapport uit tientallen bronnen met vergelijking, gebruik dan [Deep Research](card:deep-research).

Sommige data staan niet op gewone pagina's. Zoekvolumes, hoeveel mensen een woord per maand zoeken, of het websiteverkeer van concurrenten staan in databases van gespecialiseerde tools en AI bereikt die via een dataconnectie. Die heet vaak MCP-server in de instellingen; [MCP](glossary:mcp) is een technische standaard waarmee AI verbinding maakt met apps en databronnen.
Een connector heeft meestal een account bij de dataleverancier nodig en sommige bronnen kosten per query. Heeft u via browser toegang tot zo’n tool, bijvoorbeeld de Zoekwoordplanner in Google Ads, dan doorzoekt AI die via [browserbesturing](card:browser-control) ook zonder connector. Anders markeert AI die data als ontbrekend en zegt wie de connector kan activeren.

AI slaat de procedure op als [skill](glossary:skill), een handleiding die hij zelf vindt bij een vergelijkbare taak. Resultaten bewaart hij in `zive-data.md`, een gewone tekstfile in de projectmap, met de nieuwste download bovenaan.
## Laat data automatisch downloaden

Gegevens die u regelmatig volgt, zoals insolventies bij belangrijke leveranciers of advertenties van concurrenten, kan AI wekelijks zelf downloaden en alleen veranderingen melden. Plak deze opdracht in een AI die geplande taken kan, en vraag hem een geplande taak aan te maken. Waar u die vindt in uw tool, toont het blok "In uw tool".

```text
Elke maandag om 8:00 download je volgens de opgeslagen procedure dezelfde data als de vorige keer en vergelijk je die met de laatste download in zive-data.md, of met het vorige resultaat van deze taak. Werk je met een bestand, voeg dan nieuwe data bovenaan toe onder de datum van vandaag. Schrijf mij alleen wat er veranderd is en wat dat betekent voor mijn taak; als er niets wezenlijks veranderd is, volstaat één zin.
```

Als de taak met bestanden op uw computer werkt, draait hij alleen als de computer aanstaat en de app open is.
## Voorbeeld

Lucie leidt de inkoop bij een logistiek bedrijf en tekent op donderdag 22-10-2026 een raamovereenkomst met een nieuwe vervoerder. Op maandag schrijft ze onder de laatste regel van de prompt:

```text
Autodoprava Lipan, s.r.o.: hoe lang bestaat het bedrijf, wat is de omzet en heeft het geen insolventie of problemen met btw. Op donderdag teken ik met hen een raamovereenkomst voor distributie.
```

AI doorzoekt het handels- en insolventieregister en het btw-plichtigenregister. In `zive-data.md` schrijft hij:

```text
### 2026-10-19: Autodoprava Lipan, s.r.o., voor ondertekening 22-10
| Gegeven | Cijfer | Bron | Geldig op |
|---|---|---|---|
| Bedrijf opgericht | 2014 | or.justice.cz, uittreksel handelsregister | 19-10-2026 |
| Omzet | 86 mln CZK, vorig jaar 79 mln CZK | or.justice.cz, jaarrekening in documentenverzameling | jaar 2025 |
| Insolventie | geen | isir.justice.cz | 19-10-2026 |
| Onbetrouwbare btw-plichtige | nee | btw-plichtigenregister | 19-10-2026 |
| Aantal voertuigen | ontbreekt, geen bron vermeld | | |

De omzet steeg met 9% en in de registers heeft het bedrijf geen problemen. Verifiëren: omzet in winst- en verliesrekening van de jaarrekening, regel Omzet uit verkoop van producten en diensten.
```

Lucie opent de jaarrekening via de link, vindt de omzetregel in de winst- en verliesrekening en het cijfer klopt. Een week later schrijft ze in een nieuwe chat alleen "Controleer dezelfde vervoerder waarmee we dinsdag onderhandelen" en krijgt een tabel in hetzelfde formaat. Een collega marketing haalt met dezelfde prompt concurrentiereclames en zoekvolumes via een dataconnectie die de beheerder voor hem activeerde.
## Als u vastloopt

- **AI geeft cijfers zonder link of met "ongeveer":** hij zocht niet op het web en schat uit geheugen. Zet zoeken aan volgens het blok "In uw tool" en zeg: "Geef bij elk cijfer een link naar bron en datum; wat je niet vindt, markeer als ontbrekend."
- **AI zegt dat hij geen toegang heeft tot data:** de data zitten in een database en AI heeft een dataconnectie nodig. Laat hem een korte aanvraag voor de beheerder van het bedrijfsaccount schrijven: welke bron en waarvoor. In Code-modus koppelt AI hem zelf; hoe overschakelen, staat op de kaart [Chat, Cowork of Code](card:when-chat-is-not-enough).
- **Gegeven staat alleen in PDF of op pagina met filters:** vraag AI het PDF direct van de link te openen. Laat AI pagina’s met klikfilters, zoals Meta advertentiebibliotheek, doorzoeken in de browser zoals op de kaart [Browser control](card:browser-control) staat.
- **AI vindt de procedure niet in een nieuwe chat:** vraag wat hij van de procedure onthoudt en waar hij die opsloeg. Heeft u geen geheugen, laat hem in Cowork- of Code-modus opslaan als skill en open dan een nieuwe chat in dezelfde map.
## Wat u krijgt

U hebt een tabel met actuele cijfers voor uw taak, bij elk cijfer een link en datum, en het cijfer waarop de conclusie steunt hebt u geverifieerd in de bron. AI heeft de procedure opgeslagen als skill of in het geheugen en in een nieuwe chat data gedownload op één zin.
## Wat nu

Wilt u dat het regelmatige overzicht betrouwbaar binnenkomt en zelf fouten meldt, ga dan verder met [geplande taak](card:recurring-ai-task). Hoe u van ander goed werk een [skill](card:create-skill-from-proven-process) maakt, staat op een aparte kaart.
## MCP

**Wat het is:** Een open technische standaard (Model Context Protocol) waarmee AI verbinding maakt met applicaties en databronnen. Een applicatie of dataleverancier biedt een MCP-server aan en AI leest via deze server data of voert toegestane acties uit. In toolinstellingen wordt zo'n verbinding vaak een connector of MCP-server genoemd.

**Wat het niet is:** Het is geen zelfstandige applicatie of AI-model. De standaard zelf downloadt niets; het heeft een server van een leverancier nodig, vaak een account daarbij en toestemming die door een persoon of beheerder wordt geactiveerd.

**Waarom de student het nodig heeft:** Het helpt te begrijpen wanneer AI toegang krijgt tot data buiten het openbare web en wie de verbinding moet activeren.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Vaardigheid

**Wat het is:** Een herbruikbare procedure voor een bepaald type taak. Kan instructies, regels, voorbeelden, sjablonen en andere benodigde bronnen bevatten. De manier van maken en uitvoeren verschilt per tool.

**Wat het niet is:** Het is geen algemene rol van een assistent, noch een enkele succesvolle conversatie die ongewijzigd is opgeslagen.

**Waarom de student het nodig heeft:** Helpt een bewezen werkwijze om te zetten in een stabiele vorm die consequent opnieuw kan worden gebruikt.

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
