# Verwerk de notulen van een vergadering: besluiten en taken voor het project

AI maakt van de notulen een kort verslag met besluiten en taken voor het project en verwerkt volgende vergaderingen op dezelfde manier.

## Verwerk de notulen van een vergadering: besluiten en taken voor het project

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met notulen van één vergadering.
## Waar is het goed voor

Op woensdag had je een uur durende vergadering over de nieuwe prijslijst met financiën en marketing, en daarna heb je twintig pagina’s notulen. Op vrijdag vraagt een collega van sales welke maximale korting grote klanten mogen krijgen, en je weet niet zeker of 8% als afspraak is genoemd of slechts als voorstel.

Een kort verslag met besluiten en taken vind je binnen een minuut terug, samen met de collega en een nieuwe AI-chat in de projectmap, en de exacte woorden blijven direct naast de notulen staan.
## Wat je moet voorbereiden

- de projectmap waar de vergadering bij hoort,
- notulen van één recente vergadering als bestand of tekst,
- AI in [Cowork- of Code-modus](glossary:workmode), of het project in de AI die je gebruikt.
## Hoe je het doet

1. Open AI in Cowork- of Code-modus in de projectmap, plak de prompt en voeg de notulen toe. AI slaat de notulen op in `prepisy`, het verslag in `schuzky.md` en de regel in `AGENTS.md`.
2. Bij het punt dat het meest telt, schrijf „Toon mij de exacte tekst uit de notulen.“ Als het over geld of een deadline gaat, zoek dan zelf de tijd in de notulen (Ctrl+F) en lees het na.
3. Vraag in een nieuwe chat in dezelfde map „Wie moet wat doen en wanneer?“ AI zou moeten antwoorden op basis van het verslag.

Voorstellen die niemand heeft aangenomen, horen niet in het verslag.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in Cowork- of Code-modus, geopend in jouw map:

Verwerk de notulen van een vergadering voor dit project. Ik voeg de notulen toe of vertel waar ze op de computer staan. Als je in deze omgeving geen bestanden in de projectmap kunt opslaan, zeg het dan meteen, zodat ik kan overschakelen naar Cowork of Code.

Sla de notulen ongewijzigd op in de submap prepisy binnen de projectmap en noem het bestand naar datum en onderwerp van de vergadering, bijvoorbeeld 2026-10-07-porada-cenik. Verplaats het bestand zoals het is, inclusief extensie, bijvoorbeeld .docx. Als ik de notulen als tekst heb gegeven, sla ze dan op als tekstbestand en verkort of herschrijf niets, zodat tijden en namen bij de uitspraken blijven.

Schrijf daarna een kort verslag van de notulen en voeg dat bovenaan toe in het bestand schuzky.md in de projectmap. Als het bestand niet bestaat, maak het dan aan. Het verslag heeft deze vorm:

### JJJJ-MM-DD: onderwerp vergadering
Wie was er: namen.
Besluiten:
- wat is besloten en vanaf wanneer het geldt.
Taken:
- wie, wat en wanneer.
Openstaande vragen:
- wat is onbeslist gebleven en wie gaat het uitzoeken.
Notulen: link naar bestand in prepisy.

Neem in besluiten en taken alleen op wat mensen tijdens de vergadering hebben afgesproken. Laat voorstellen die niemand heeft aangenomen weg. Als bij een taak geen persoon of deadline is genoemd, schrijf dan „niet vermeld“. Voeg bij elk besluit en elke taak tussen haakjes de tijd of plaats in de notulen toe waar het genoemd is.

Voeg tenslotte in het bestand AGENTS.md in de projectmap de regel toe: „Als je notulen van een vergadering ontvangt, sla ze dan ongewijzigd op in prepisy en voeg bovenaan in schuzky.md een verslag toe in dezelfde vorm als hierboven: alleen wat mensen hebben afgesproken, bij elk punt de tijd in de notulen en ontbrekende gegevens als ‘niet vermeld’. Beantwoord vragen over taken en besluiten op basis van schuzky.md.“ Als AGENTS.md niet bestaat, maak het dan aan. Zorg dat je het in dit hulpmiddel aan het begin van elke sessie leest; in Cowork schrijf je het in de mapinstructies.

Laat me aan het einde het verslag zien en vertel waar je wat hebt opgeslagen.

## In jouw hulpmiddel

### Microsoft Copilot
Notulen uit Teams staan op het tabblad Recap in de vergaderchat. Het verslag voor het project slaat Cowork op naast de Chat-schakelaar als de beheerder dat heeft ingeschakeld: je koppelt de map van OneDrive via Add attachments en voegt aan het einde van de prompt toe „Houd verslagen bij in een Word-document.“ Zonder Cowork gebruik je de prompt niet: maak een notitieboek aan (Notebooks › New notebook) en zet de zin uit het blok Als je geen Cowork of Code hebt in More options › Instructions.

### ChatGPT
Codex werkt met mappen: in de ChatGPT-app voor desktop schakel je over naar Codex, kies je open a folder en plak je de prompt; geplande taken vind je onder Scheduled. Zonder Codex is het project een project in ChatGPT: New project, notulen via Add source, instructies in ••• › Project settings en nodig je collega’s uit via Share.

### Claude
Cowork zit in de Claude-desktopapp in betaalde abonnementen: je kiest de map bij het aanmaken van een taak en AI noteert de link naar `AGENTS.md` in de mapinstructies. Geplande taken staan in het linker paneel onder Scheduled en draaien alleen als de computer aanstaat. Zonder Cowork is het project een project in Claude: New Project, notulen via +, instructies in Set project instructions en collega’s nodig je uit via Share project.

### Gemini
Notulen van Google Meet staan als document in de Drive van de organisator in de map Meet Recordings; Take notes for me ondersteunt nog geen Tsjechisch. Gemini werkt niet met mappen op de computer, het project is een Gem: Gems › New Gem, notulen via Knowledge › Add from Drive. Het verslag sla je op via Share & export › Export to Docs en deel je de Gem met collega’s via Share.
## Als je geen Cowork of Code hebt

Zonder Cowork- of Code-modus verwerk je vergaderingen in het project in je eigen hulpmiddel: je voegt notulen toe en de instructies gelden voor elke chat daarin. Schrijf in de projectinstructies:

```text
Maak van elke notulen een verslag: besluiten, taken met persoon en deadline en openstaande vragen. Alleen wat mensen hebben afgesproken, bij elk punt de tijd in de notulen.
```

Voeg na elke vergadering de notulen toe aan het project en schrijf „Maak een verslag van de nieuwe notulen“. Op de vraag „Wie moet wat doen?“ zal AI dan antwoorden op basis van de notulen. Waar je het project vindt, staat in het blok In jouw hulpmiddel, en hoe je [overschakelt naar Cowork of Code](card:when-chat-is-not-enough), aparte tab.
## Wat zijn notulen

Notulen zijn woord-voor-woord vastgelegde teksten van een vergadering, meestal met tijd en naam bij elke uitspraak. Van een uur durende vergadering zijn het tientallen pagina’s. Ze worden gemaakt door het hulpmiddel waarmee je de vergadering opneemt. Waar je ze vindt in Teams en Google Meet staat in het blok „In jouw hulpmiddel“. Bij andere hulpmiddelen:

- **Zoom:** je vindt ze bij de opname in de cloud als een bestand met ondertitels `.vtt`, dat AI als tekst leest. Je krijgt een e-mail als het klaar is.
- **Plaud**, een opnameapparaat voor in je zak: open de opname in de app en exporteer via het icoon rechtsboven als tekst- of Word-notulen.
- **tl;dv**, online vergaderopname: op het tabblad notulen kopieer je ze met de kopieerknop en plak je in de AI-chat.

`schuzky.md` is een gewone tekstbestand in de projectmap met verslagen van alle vergaderingen, nieuwste bovenaan. De extensie `.md` betekent verslag in [Markdown](glossary:markdown), waarin hekken `###` aan het begin van een regel een kop aanduiden. In de submap `prepisy` staan de volledige notulen, één bestand per vergadering.

`AGENTS.md` is een bestand met regels voor AI in dezelfde map. AI in Cowork- of Code-modus leest het aan het begin van elke sessie en stelt het in waar het hulpmiddel dat nodig heeft, volgens de prompt. Na een volgende vergadering voeg je de notulen toe aan de chat in de projectmap en schrijf je „Verwerk de vergadering volgens `AGENTS.md`“.
## Laat vergaderingen automatisch verwerken

Als je vaak vergaderingen opneemt, volstaat het om de notulen te downloaden en doet een geplande taak de rest, die AI elke werkdag ’s middags start. Die vindt nieuwe notulen en verwerkt ze per project volgens de regel in `AGENTS.md`. Zet de opdracht in AI in Cowork- of Code-modus en vraag AI een geplande taak aan te maken; welke hulpmiddelen dat kunnen, staat in het blok „In jouw hulpmiddel“. Schrijf in plaats van „Projecten“ de map waar je projecten staan:

```text
Elke werkdag om 17:00 doorzoek Downloads en vind daarin notulen van vergaderingen. Herken per bestand aan naam en inhoud bij welk project in de map Projecten ze horen. Als er in het bestand schuzky.md van dat project al een verslag van die vergadering staat, sla de notulen dan over. Verplaats de rest naar de submap prepisy van dat project en verwerk ze volgens de regel in AGENTS.md. Als je niet weet waar de notulen horen, laat ze dan staan. Schrijf aan het einde welke vergaderingen je hebt verwerkt en bij welke notulen je niet weet waar ze horen.
```

De taak werkt met bestanden op je computer, dus draait alleen als de computer aanstaat en de app open is.
## Voorbeeld

Eva coördineert de invoering van een nieuwe prijslijst voor groothandelsklanten. Op woensdag 7-10-2026 heeft ze een online vergadering met Martin van financiën en Petra van marketing. Na de vergadering downloadt ze de notulen, opent AI in de map `novy-cenik`, plakt de prompt en sleept de notulen in het venster. AI slaat ze op als `prepisy/2026-10-07-porada-cenik.docx` en voegt in `schuzky.md` toe:

```text
### 2026-10-07: Vergadering over nieuwe prijslijst
Wie was er: Eva, Martin (financiën), Petra (marketing).
Besluiten:
- Korting voor grote afnemers wordt maximaal 8%. (12:40)
- Nieuwe prijslijst geldt vanaf 1-1-2027, klanten krijgen hem op 1-12. (31:05)
Taken:
- Martin berekent marges voor nieuwe prijzen voor 14-10. (18:20)
- Petra maakt flyer voor klanten, deadline: niet vermeld. (35:50)
Openstaande vragen:
- Geldt de nieuwe prijslijst ook voor de webshop? Eva en de webshopmanager gaan dat uitzoeken.
- Wie stuurt de prijslijst naar de verkopers? Niemand nam dat op zich tijdens de vergadering.
Notulen: prepisy/2026-10-07-porada-cenik.docx
```

Eva schrijft „Toon mij de exacte tekst over de korting.“ AI toont de zin op tijd 12:40 waarin Martin 8% goedkeurt. Op vrijdag vraagt Eva in een nieuwe chat in dezelfde map wie wat moet doen en wanneer. Een goed antwoord is: Martin berekent marges voor 14-10, bij Petra’s flyer ontbreekt de deadline. Als AI vraagt om welke vergadering het gaat, werkt het waarschijnlijk buiten de projectmap.
## Als je vastloopt

- **AI zegt dat het verslag is opgeslagen, maar het bestand `schuzky.md` staat niet in de map:** je werkt waarschijnlijk in een gewone chat die geen bestanden kan wijzigen. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) en kies daar de projectmap.
- **In het verslag staat een besluit dat jullie niet hebben genomen:** AI heeft een voorstel als afspraak opgevat. Vertel AI wat anders is, zodat het verslag wordt aangepast en de rest ook wordt gecontroleerd. Hoe je het resultaat controleert aan de hand van de bron, staat in [Resultaatcontrole](card:kontrola-vysledku).
- **Je hebt de notulen niet:** in Teams downloadt de organisator de notulen, vraag die aan hem. Als de vergadering niet is opgenomen, vertel of dicteer dan aan AI wat je ervan weet, dan ontstaat het verslag toch.
- **Volgende keer gebruikt AI de regel niet:** schrijf „Verwerk de vergadering volgens `AGENTS.md`“. Helpt dat niet, controleer dan of `AGENTS.md` in de projectmap staat en de regel erin staat.
## Wat klaar zal zijn

Je hebt een verslag van de vergadering in `schuzky.md` in de projectmap, de volledige notulen in de submap `prepisy` en in `AGENTS.md` de regel waarmee AI elke volgende vergadering op dezelfde manier verwerkt. Het belangrijkste punt heb je gecontroleerd aan de hand van de exacte tekst uit de notulen en in een nieuwe chat heb je getest dat AI uit het verslag weet wie wat moet doen.
## Wat nu

Van dezelfde notulen maakt AI ook andere output dan een verslag, bijvoorbeeld een briefing voor een volgende vergadering of een antwoord aan een klant. Het verwerkt ook lange commentaardraden of e-mails: in plaats van notulen geef je dan de draad. Voor vergaderingen bij meerdere projecten laat je van de procedure een [handleiding maken die AI opnieuw gebruikt](card:create-skill-from-proven-process). Als collega’s ook de verslagen moeten krijgen, ga dan verder met een [geplande taak](card:recurring-ai-task).
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
