# Gebruik Browser control: AI klikt voor u in de browser

Een webtaak die u wekelijks handmatig uitvoert, zoals het downloaden van een rapport, doet AI automatisch in de browser.

## Gebruik Browser control: AI klikt voor u in de browser

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met één taak op het web.
## Waarvoor is het nuttig

Elke vrijdagmiddag downloadt u uit het systeem werkrapporten en schrijft u de urenoverzichten handmatig over in een tabel voor het management. U filtert het project en de week telkens handmatig. Niemand anders kan het, dus als u op vakantie bent, krijgt het management de cijfers niet.

Browser control betekent dat de browser door AI wordt bestuurd: deze opent zelf de pagina, klikt, vult in en downloadt terwijl u ander werk doet.
## Wat u moet voorbereiden

- één taak op het web die u herhaaldelijk handmatig uitvoert, bijvoorbeeld het downloaden van een rapport,
- een account op de website waar de taak wordt uitgevoerd; u logt zelf in zodra AI daarom vraagt,
- een map met het werk waar de taak bij hoort; AI slaat daarin de procedure op voor de volgende keer,
- AI die de browser kan besturen; als uw AI dit kan, ziet u de sectie „In uw tool“.
## Hoe te werk te gaan

1. Open de AI die de browser bestuurt in de map uit de voorbereiding en plak de prompt. Schrijf achter de regel „Taak:“ waar naartoe, wat er gedaan moet worden en in welke vorm u het resultaat wilt.
2. Log zelf in op de inlogpagina en zeg tegen AI dat het door kan gaan. Doe ondertussen ander werk; AI meldt zich zodra het klaar is of een beslissing nodig heeft.
3. Controleer op de pagina die AI bij het resultaat vermeldt één of twee cijfers. AI slaat de procedure voor de volgende keer op in het bestand `ulohy-v-prohlizeci.md`.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de modus Cowork of Code, geopend in uw map, en voeg achter de laatste regel uw taak toe:

Doe voor mij in de browser een taak die ik regelmatig handmatig op het web uitvoer. De taak staat op de laatste regel.

Open de pagina en doorloop deze tot het resultaat: klik, vul in, filter en download wat nodig is. Als je bij het inloggen komt, zeg het me; ik log in en zeg je dat je door kunt gaan. Als je niet weet welke optie je moet kiezen, vraag het me.

Geef het resultaat terug in de vorm die ik in de taak vraag. Voeg bij elk cijfer of elke wijziging het adres van de pagina toe waar het vandaan komt, zodat ik het kan controleren.

Schrijf tot slot de procedure voor de volgende keer op: onder de kop met de taaknaam schrijf je waar naartoe, de stappen die werkten (pagina-adres, filters, knoppennamen) en hoe het resultaat eruit moet zien. Sla dit op in het bestand ulohy-v-prohlizeci.md in de map waarin je werkt; als het bestand bestaat, voeg de taak dan onderaan toe. Als je geen toegang hebt tot de map, sla deze stap dan over.

Taak:

## In uw tool

### Microsoft Copilot
De browser wordt bestuurd door Copilot Cowork, alleen op de website `copilot.cloud.microsoft` geopend in Edge en na toestemming van de beheerder. Plak de prompt in Cowork (schakelaar boven naast Chat); AI werkt in uw Edge, waar u al bent ingelogd. Als de website om een wachtwoord vraagt, toont het u een browsertab en gaat na inloggen verder. Als het klaar is, zegt u „Sla procedure op als skill“; geplande taken staan op de pagina Automations.

### ChatGPT
In ChatGPT bestuurt de Work-modus de browser: schakel in de ChatGPT-desktopapp over naar Work en plak de prompt. Work heeft een ingebouwde browser waarin u zelf inlogt; met de ChatGPT-extensie voor Chrome, bevestigd in de Computer Use-instellingen, werkt het ook in uw Chrome. Work slaat de procedure niet op in een bestand, dus laat het van de taak een geplande taak maken (Scheduled in het linker paneel).

### Claude
De Claude in Chrome-extensie voor betaalde abonnementen voegt u toe via de Chrome Web Store en logt u in met uw Claude-account; werkt alleen in Google Chrome, niet in Edge. In de Claude-app schakelt u deze in onder connectors (Connectors) bij Claude in Chrome en AI werkt dan in Cowork of Claude Code in uw ingelogde Chrome. Geplande taken staan in Cowork in het linker paneel onder Scheduled.

### Gemini
Gemini in Chrome, die de browser bestuurt, is niet beschikbaar in de EU inclusief Nederland, dus doe de taak halfautomatisch. Download de export zelf van het web, voeg deze in de Gemini-app toe via Add from Drive of vanaf de computer en zeg wat u ermee wilt, bijvoorbeeld „tel de uren per persoon op“. Als de taak zich herhaalt, laat Gemini dan een IT-verzoek schrijven voor automatische data-download.
## Wat is Browser control

Browser control is de Engelse term voor browserbesturing. AI ziet de pagina die geopend is en klikt en typt erin zoals u dat zou doen. Zo kan het ook websites aan die anders ontoegankelijk zijn: het stelt iets in een app in of doorloopt uw website en vindt niet-werkende links. Als een app een connector heeft, dus een directe koppeling met AI, gebruik dan liever die, want die is sneller en betrouwbaarder. Voor een stap die uw goedkeuring nodig heeft, bijvoorbeeld voor aankoop, verzending of werk aan een nieuwe website, stopt AI en vraagt om toestemming.

Sommige tools werken in uw browser waarin u al bent ingelogd en hebben toegang tot alles waar u ook toegang toe heeft, inclusief bedrijfsystemen achter VPN. Andere hebben een eigen ingebouwde browser waarin u apart inlogt.

`ulohy-v-prohlizeci.md` is een gewoon tekstbestand met een lijst van uw browsertaken en de stappen die werkten. De extensie `.md` betekent dat het in [Markdown](glossary:markdown) is geschreven, een eenvoudige notatie waarbij hekken `###` aan het begin van een regel een kop aanduiden.
## Laat de taak automatisch starten

Een taak die elke week terugkeert hoeft u niet eens te starten. Plak deze opdracht in AI die geplande taken kan uitvoeren, verander alleen de taaknaam naar uw eigen naam en vraag het een geplande taak aan te maken. Waar u die in uw tool vindt, staat in de sectie „In uw tool“.

```text
Elke vrijdag om 15:00 voer de taak „Wekelijkse uren per project“ uit volgens het bestand ulohy-v-prohlizeci.md. Sla het resultaat op in dezelfde map met de datum van vandaag in de bestandsnaam en geef mij de drie belangrijkste cijfers in een samenvatting.
```

De taak werkt met een bestand op uw computer en uw browser, dus het draait alleen als de computer aanstaat, de AI-app open is en eventueel de VPN verbonden is.
## Voorbeeld

Jana coördineert de bouw van een nieuw magazijn bij een logistiek bedrijf en stuurt elke vrijdag aan het management hoeveel uur het team aan het project heeft gewerkt. Op vrijdag 9-10-2026 opent ze de projectmap in AI die de browser kan besturen, plakt de prompt en voegt achter de laatste regel toe:

```text
Download in het werkrapportensysteem de uren van deze week voor het project Nieuw magazijn en geef mij de som per teamlid en totaal.
```

AI opent het werkrapportensysteem, filtert het project en de week van 5 tot 9 oktober en downloadt de export. Het team werkte 86 uur, het meest Petr (31) en Lucie (24); bij elk cijfer vermeldt AI het pagina-adres. Jana opent het overzicht in het systeem en het totaal klopt. AI schrijft in `ulohy-v-prohlizeci.md`:

```text
### Wekelijkse uren per project
- Waarheen: werkrapportensysteem, sectie Rapporten.
- Stappen: filter Project Nieuw magazijn, periode van maandag tot vrijdag deze week, knop Export naar Excel.
- Resultaat: uren per teamlid en totaal, bij elk cijfer het pagina-adres.
```

De volgende vrijdag zegt Jana alleen „Doe wekelijkse uren per project volgens `ulohy-v-prohlizeci.md`“ en krijgt de cijfers voor de nieuwe week.
## Als u vastloopt

- **AI zegt dat het de browser niet kan besturen:** gewone chat kan dat niet. Zet browserbesturing aan volgens de sectie „In uw tool“. Meer in de kaart [Chat, Cowork of Code](card:when-chat-is-not-enough).
- **IT staat installatie van extensies niet toe:** gebruik een browser die geen installatie vereist: ingebouwde browser in ChatGPT Work, Copilot Cowork in Edge, of in Claude Cowork de eigen browser die u in de instellingen kiest als Preferred browser. Log daar apart in.
- **AI dwaalt lang rond op het web:** voeg in de taak de naam van de sectie of het pagina-adres toe waar gezocht moet worden en start opnieuw.
- **AI slaat de procedure niet op voor de volgende keer:** u werkt zonder toegang tot de map. Zet de taak als gepland, of start hem de volgende keer in Cowork- of Code-modus geopend in de map.
## Wat klaar zal zijn

U hebt één webtaak klaar die u eerder handmatig klikte en het resultaat gecontroleerd op de pagina waar het vandaan komt. De procedure met werkende stappen ligt in `ulohy-v-prohlizeci.md`, zodat u de taak de volgende keer met één zin kunt geven.
## Wat nu

Van het rapport dat AI downloadt kan het direct een onderlegger voor een vergadering maken; als u dit elke week doet, [sla dan beide stappen op als skill](card:create-skill-from-proven-process). Als een collega het resultaat ook moet ontvangen en de taak fouten moet melden, stel hem dan in als [geplande taak](card:recurring-ai-task).
## Markdown

**Wat het is:** Een eenvoudig platte-tekstformaat waarin koppen, lijsten, links en andere structuren worden geschreven met een paar gewone tekens. Bestanden gebruiken meestal de extensie `.md`.

**Wat het niet is:** Het is geen programmeertaal en ook geen formaat dat uitsluitend voor ontwikkelaars bedoeld is.

**Waarom studenten het nodig hebben:** Het blijft gemakkelijk leesbaar en bewerkbaar voor zowel mensen als AI en kan worden overgedragen tussen verschillende tools.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

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
