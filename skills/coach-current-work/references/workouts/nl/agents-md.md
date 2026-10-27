# Maak AGENTS.md aan: regels voor AI in één bestand

AI schrijft instructies die je steeds herhaalt in één bestand en volgt ze bij elk werk.

## Maak AGENTS.md aan: regels voor AI in één bestand

**Moeilijkheidsgraad: makkelijk.**\
**Tijd: ongeveer 15 minuten** met de map waarin je met AI werkt.
## Waar is het goed voor

Op maandag schrijf je AI voor een nieuwe offerte hetzelfde als vorige week: de klant formeel aanspreken en prijzen inclusief btw vermelden. Op woensdag open je voor een tweede offerte een nieuw gesprek en schrijf je de instructies opnieuw. Een collega die de offertes maakt als jij vrij bent, heeft andere AI-regels, waardoor de klant de prijzen soms inclusief en soms exclusief btw krijgt.

`AGENTS.md` is een bestand met regels in jouw werkmap dat AI aan het begin van elk werk leest, zodat je instructies maar één keer hoeft te geven en ze ook gelden voor je collega die in dezelfde map werkt.
## Wat je moet voorbereiden

- een map waarin je met AI werkt, bijvoorbeeld een map van een lopend project,
- instructies die je AI steeds herhaalt, of eigen instructies uit je AI,
- AI in de [modus](glossary:workmode) Cowork of Code, die met bestanden op de computer werkt.
## Hoe je het doet

1. Open Cowork of Code in de voorbereide map, schakel bewerken van bestanden in en plak de prompt. AI zal vragen naar instructies, ze in `AGENTS.md` schrijven en regelen dat het bestand bij elk werk wordt gelezen.
2. Lees de regels die AI toont. Wat niet klopt of ontbreekt, zeg je tegen AI en zij past het bestand aan.
3. Geef in een nieuw gesprek, bij voorkeur in een tweede tool, een taak en schrijf: „Geef de bestanden met regels die aan het begin van het werk zijn geladen en de regels waarop het resultaat is gebaseerd.”
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de modus Cowork of Code, geopend in jouw map:

Maak in deze map een bestand AGENTS.md met regels voor AI, zodat ik je dezelfde instructies niet in elk gesprek en elke AI-tool hoef te herhalen.

Vraag me naar de instructies die ik het vaakst aan AI geef. Vraag per thema: taal en aanspreking, hoe te schrijven, wat nooit te doen en wat te controleren voor oplevering. Als ik je eigen instructies van een andere AI-tool geef of als je in deze map een bestand met AI-regels vindt, neem dan de instructies over die voor elk werk gelden.

Schrijf elke regel als één regel met een concrete instructie, bijvoorbeeld „Prijzen schrijf inclusief btw en valuta“. Algemene adviezen zoals „wees precies“ herschrijf je naar een concrete instructie. Als niet duidelijk is waarom de regel geldt, voeg dan een reden toe. Rangschik de regels onder koppen per thema en houd het bestand kort zodat het op één scherm past.

Voeg aan het einde van het bestand de regel toe: „Als ik je corrigeer en de correctie moet ook de volgende keer gelden, schrijf die dan als nieuwe regel in AGENTS.md en vertel me wat je hebt toegevoegd.“

Controleer daarna of deze tool AGENTS.md zelf leest aan het begin van elk werk in deze map. Zo niet, stel het dan zo in dat het automatisch bij elk werk wordt geladen; in Cowork schrijf je dat in de mapinstructies. Als je regels hebt overgenomen uit een ander AI-regelbestand, laat dan in dat bestand alleen één regel staan die AGENTS.md laadt, zodat de regels niet op twee plaatsen staan, en vertel me wat je hebt veranderd. Als je het zelf niet kunt instellen, schrijf me dan waar ik het in de instellingen kan doen en wat ik moet invoeren.

Laat me tenslotte het voltooide AGENTS.md zien en vertel of deze tool het zelf leest of wat je hebt ingesteld.

## In jouw tool

### Microsoft Copilot
Copilot Chat leest het bestand niet: voeg aan het einde van de prompt toe „Je hebt geen map, schrijf de regels als tekst voor Custom instructions.“ en plak de tekst in Settings and more, Chat settings, Personalization. Stap 3 doe je in een nieuw gesprek door te vragen volgens welke instructies het resultaat is ontstaan. In Cowork horen de regels naast de Chat-schakelaar in Customize, Preferences.

### ChatGPT
In de ChatGPT-app voor desktop schakel je over naar Codex en kies je map openen (open a folder); Codex leest `AGENTS.md` zelf. In een gewoon gesprek schrijft AI de regels als tekst voor Custom instructions (Settings, Personalization) of voor projectinstructies (Project settings). Stap 3 doe je dan in een nieuw gesprek en vraag je naar de gebruikte regels.

### Claude
In Claude Code leest AI `AGENTS.md` zelf. In Cowork, dat je opent in de Claude-desktopapp en waarin je een map kiest, schrijft AI in de mapinstructies (Folder instructions) dat het bestand gelezen moet worden. In een gewoon gesprek horen de regels bij projectinstructies (Set project instructions).

### Gemini
Gemini leest `AGENTS.md` niet en zakelijke accounts hebben geen geheugen. Plak de prompt in Gemini en sla de regels op via Share & export, Export to Docs. Maak in Gems, New Gem een instructie „Volg de regels uit het bijgevoegde document“ en voeg het document toe aan Knowledge. Stap 3 doe je in een nieuw gesprek met deze Gem, die je deelt met collega’s via Share.
## Wat is AGENTS.md

`AGENTS.md` is een gewoon tekstbestand met regels voor AI: welke taal te gebruiken, hoe te schrijven, wat nooit te doen en wat te controleren voor oplevering. Het heet naar [agenten](glossary:agent), AI die zelf met bestanden werkt en stappen voor je uitvoert. De extensie `.md` betekent dat het in [Markdown](glossary:markdown) is geschreven, waarbij hekken `###` aan het begin van een regel een kop aanduiden.

Veel tools in de Code-modus lezen het bestand zelf aan het begin van elk werk in de map waar het staat. Waar de tool dat niet kan, slaat AI de regel op in de instellingen of vertelt waar je het moet invoeren. En als je AI corrigeert, schrijft het nieuwe regel in het bestand.

In het bestand horen instructies die voor elk werk in die map gelden; onderlagen voor één taak en eenmalige verzoeken laat je in het gesprek. Als AI in stap 3 een regel weglaat die bij de taak hoorde, vraag dan om die regel duidelijker te herschrijven.

Een gewoon gesprek leest `AGENTS.md` niet zelf. Als je alleen met gesprekken werkt, sla je instructies op in [eigen instructies](card:custom-instructions); hoe je overschakelt naar Cowork of Code zie je in de kaart [Chat, Cowork of Code](card:when-chat-is-not-enough).
## Laat regels zichzelf aanvullen

De regel aan het einde van `AGENTS.md` zorgt ervoor dat als je AI corrigeert en de correctie ook de volgende keer moet gelden, AI die in het bestand schrijft. Na een paar weken beginnen regels zich te herhalen of tegen te spreken en een langer bestand volgt AI minder goed. Wil je het kort houden, laat AI het eens per maand opruimen met een geplande taak. Geef AI in de modus Cowork of Code deze opdracht en vraag om er een geplande taak van te maken:

```text
Elke eerste vrijdag van de maand om 16:00 uur doorloop AGENTS.md in deze map. Combineer regels die hetzelfde zeggen tot één en rangschik ze onder de juiste koppen. Schrijf aan het einde wat je hebt veranderd en noem paren regels die elkaar tegenspreken, zodat ik kan beslissen welke geldt.
```

Als de taak met bestanden op je computer werkt, draait die alleen als de computer aanstaat en de app open is.
## Voorbeeld

Lucie leidt de klantenservice van een webshop met keukenapparatuur en schrijft antwoorden op klachten met AI in twee tools die met een map op de computer werken. Op maandag 12-10 opent ze in de eerste tool de map `Reklamace` en plakt de prompt. Ze beantwoordt vragen, voegt eigen instructies toe die ze in een gewoon gesprek heeft opgeslagen, en AI schrijft:

```text
### Taal en aanspreking
- Schrijf in het Tsjechisch en spreek klanten formeel aan.
- Onderteken met „Lucie Králová, klantenservice“.

### Hoe te schrijven
- Begin de eerste zin met wat we voor de klant doen.
- Het antwoord mag maximaal zes zinnen bevatten en geen openingsfrasen zoals „Ik hoop dat het goed met u gaat“.

### Wat nooit te doen
- Beloof geen terugbetaling. Dat beslist de klachtenmanager.

### Wat te controleren voor oplevering
- Vergelijk het bestelnummer en data met de e-mail van de klant.

### Hoe regels aan te vullen
- Als ik je corrigeer en de correctie moet ook de volgende keer gelden, schrijf die dan als nieuwe regel in AGENTS.md en vertel me wat je hebt toegevoegd.
```

AI slaat het bestand op en zorgt dat de tool het leest aan het begin van elk werk. Op dinsdag opent Lucie dezelfde map in de tweede tool en schrijft alleen: „Beantwoord mevrouw Dvořáková over de klacht van de mixer uit haar e-mail in de map.“ Daarna voegt ze toe: „Geef de bestanden met regels die aan het begin van het werk zijn geladen en de regels waarop het antwoord is gebaseerd.“ AI noemt `AGENTS.md`, schrijft het antwoord met formele aanspreking en handtekening en noemt vier regels. De regel over de eerste zin liet het weg en het antwoord begint met een excuus. Lucie vraagt AI om die regel duidelijker te herschrijven en in `AGENTS.md` staat nu: „Begin het antwoord met een zin wat we voor de klant doen en tot wanneer, bijvoorbeeld ‘We vervangen de mixer voor vrijdag 16-10.’ Schrijf het excuus pas daarna.“
## Als je vastloopt

- **AI zegt dat het bestand is opgeslagen, maar het staat niet in de map:** je werkt waarschijnlijk in een gewoon gesprek dat bestanden op de computer niet kan wijzigen. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) en open daar de map.
- **`AGENTS.md` ontbreekt tussen geladen bestanden:** open het gesprek direct in de map waar `AGENTS.md` staat, niet in een submap. Als het dan nog ontbreekt, schrijf: „Zorg dat `AGENTS.md` in deze tool aan het begin van elk werk wordt geladen.“
- **AI volgt een regel maar soms niet:** de regel is waarschijnlijk algemeen, bijvoorbeeld „schrijf beknopt“. Vraag AI om het te herschrijven naar een concrete instructie, bijvoorbeeld „maximaal zes zinnen“.
- **Je hebt regels ook in een andere map nodig:** vraag AI om ze in deze tool ook op te slaan in gemeenschappelijke instructies die in alle mappen gelden.
## Wat klaar zal zijn

Je hebt in de map een bestand `AGENTS.md` met instructies die je AI eerder herhaalde, en de tools waarin je het hebt getest lezen het aan het begin van elk werk. In een nieuw gesprek heb je gecontroleerd dat het bestand is geladen en welke regels AI gebruikte, en onduidelijke regels herschreef je. Als je AI de volgende keer corrigeert, schrijft het nieuwe regels in het bestand.
## Wat nu

Als een regel uitgroeit tot een hele procedure met meerdere stappen, bijvoorbeeld hoe je een maandrapport voorbereidt, laat AI er een [handleiding van maken die je opnieuw gebruikt](card:create-skill-from-proven-process). Als hetzelfde materiaal en regels door het hele team moeten worden gebruikt, laat AI dan een [README van het project schrijven](card:project-start-here).
## Agent

**Wat het is:** Een AI-systeem dat binnen een gegeven doel meerdere stappen kan plannen, beschikbare tools kan gebruiken, met de status kan werken en toegestane acties kan uitvoeren. De reikwijdte van de mogelijkheden en de mate van zelfstandigheid hangen af van het specifieke hulpmiddel en de bevoegdheden.

**Wat het niet is:** Het is niet slechts een opgeslagen prompt of een assistent die een geavanceerdere functie heeft gekregen.

**Waarom de student het nodig heeft:** Het helpt bij het herkennen van taken die tools, bevoegdheden, controlepunten en duidelijke verantwoordelijkheid voor acties vereisen.

## Markdown

**Wat het is:** Een eenvoudig platte-tekstformaat waarin koppen, lijsten, links en andere structuren worden geschreven met een paar gewone tekens. Bestanden gebruiken meestal de extensie `.md`.

**Wat het niet is:** Het is geen programmeertaal en ook geen formaat dat uitsluitend voor ontwikkelaars bedoeld is.

**Waarom studenten het nodig hebben:** Het blijft gemakkelijk leesbaar en bewerkbaar voor zowel mensen als AI en kan worden overgedragen tussen verschillende tools.

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
