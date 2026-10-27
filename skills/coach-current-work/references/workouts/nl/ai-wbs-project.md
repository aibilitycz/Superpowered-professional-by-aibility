# Maak een AI-WBS: projectplanning verdeeld tussen mensen en AI

AI maakt een projectplanning, bepaalt per stap of een mens of AI deze uitvoert, en voert direct de eerste stap uit.

## Maak een AI-WBS: projectplanning verdeeld tussen mensen en AI

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met één project dat start.
## Waar is het goed voor

Tijdens een vergadering krijgt u van het management de opdracht om het kantoor naar een nieuw gebouw te verhuizen. De verhuizing vindt plaats op 2 oktober, in uw agenda staat voorlopig alleen de afspraak "verhuizing" en u weet nog niet wat AI kan doen en wanneer u collega’s van IT en facilitaire dienst nodig heeft.

Een planning waarin bij elke stap staat wie deze uitvoert en wat het resultaat is, ligt in de projectmap. Zo weten zowel een nieuwe chat als een collega wat al klaar is en wat er nog komt.
## Wat u moet voorbereiden

- projectmap met documenten: opdracht, e-mail van het management of notulen van de vergadering,
- een paar zinnen over het doel van het project, de deadline en de mensen die eraan werken,
- AI in de Cowork- of Code-modus die direct met bestanden in uw map werkt.
## Hoe te werk te gaan

1. Open de projectmap in AI in de Cowork- of Code-modus (waar u deze vindt, toont het blok "In uw tool"), plak de prompt uit de AI-oefening en schrijf eronder het doel, de deadline en de mensen die aan het project werken.
2. AI toont de planning als een tabel met vragen. Beantwoord deze, corrigeer de kolom "Wie doet het" en schrijf "Opslaan": AI slaat de planning op, voert de eerste stap uit en schrijft de regel in `AGENTS.md`.
3. Open het resultaat van de eerste stap en controleer het. Wat niet klopt, schrijft u aan AI en zij corrigeert het in het bestand en in de planning.

Met een gewone chat helpt het deel "Als u vastloopt".
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de Cowork- of Code-modus, geopend in uw map:

Maak voor dit project een AI-WBS: een volledige projectplanning verdeeld tussen mensen en AI. Als je geen toegang hebt tot de projectmap en er zelf geen bestanden kunt opslaan, zeg het dan meteen zodat ik kan overschakelen naar Cowork of Code.

Bekijk de documenten in de projectmap en mijn notities onder deze opdracht. Als er al een projectplanning in de map staat, pas die dan aan en maak geen nieuwe.

Werk het hele project uit van begin tot eind in vijf tot tien hoofdtaken. Elke taak eindigt met iets dat getoond kan worden: een bestand, lijst, besluit of bestelling. Sla latere taken niet over, maar beschrijf ze korter. Rangschik de taken zo dat er zo snel mogelijk iets bruikbaars ontstaat. Schrijf de planning als een tabel met drie kolommen:
- Taak: wat er gedaan wordt.
- Wie doet het: specifieke persoon, of AI en de naam van de persoon die het resultaat controleert.
- Resultaat: concreet resultaat van de taak.

Alles wat uit de documenten voorbereid kan worden, geef je aan AI. Besluiten, overleg met mensen en taken waarbij iets wordt verzonden, gepubliceerd, ondertekend of betaald, geef je aan een mens. Als je niet weet wie de taak doet, zet dan een vraagteken en verzin geen naam.

Toon me de planning en schrijf eronder alle vragen die de documenten niet beantwoorden en die de planning zouden veranderen. Wacht tot ik antwoord geef en de planning corrigeer of bevestig. Sla hem daarna op als plan-project.md in de hoofdmap van het project en schrijf bovenaan de projectnaam, deadline en datum van vandaag. Als er een README.md in de map staat, voeg dan een regel toe met een link naar de planning.

Voer direct daarna de eerste taak uit die in de planning aan jou is toegewezen en waarvoor je documenten hebt. Kies een taak die je binnen een paar minuten kunt doen. Sla het resultaat op in de projectmap, schrijf in de kolom Resultaat bij die taak de bestandsnaam en het woord voltooid en vertel me wat ik moet controleren.

Voeg tenslotte in het bestand AGENTS.md in de projectmap de regel toe: "Lees plan-project.md voordat je aan het project werkt. Als een taak uit de planning voltooid is, schrijf dan in de kolom Resultaat waar het resultaat staat en het woord voltooid." Als AGENTS.md niet bestaat, maak het dan aan. Zorg dat je dit bestand in deze tool leest bij het begin van elk werk; in Cowork schrijf je dit in de mapinstructies.

Doel, deadline en wie aan het project werkt:

## In uw tool

### Microsoft Copilot
Cowork zit in Copilot naast de Chat-schakelaar; als u het niet ziet, vraag dan IT.
Het werkt met bestanden op OneDrive en SharePoint, vertel waar het project staat en laat de planning opslaan als Excel-tabel; in Cowork onder Customize, Preferences laat u "Lees de planning voordat je aan het project werkt" aanstaan. Zonder Cowork geldt de tip "AI slaat planning niet op in map" in het deel Als u vastloopt, met het project in Notebook (Notitieblokken).

### ChatGPT
Met de map werkt Codex in de ChatGPT-app voor desktop: schakel over naar Codex, kies open en folder en selecteer de projectmap; programmeren is niet nodig. Codex leest `AGENTS.md` zelf en maakt op verzoek de geplande taak aan. Als u Codex niet ziet, vraag dan de beheerder om "Allow members to use Codex locally" of volg de tip over gewone chat.

### Claude
In de Claude-desktopapp kiest u Cowork en in het berichtveld Work in a folder. Claude Code leest `AGENTS.md` zelf, in Cowork schrijft AI volgens de prompt in de mapinstructies dat het bestand gelezen moet worden. De geplande taak maakt AI op verzoek aan en het overzicht vindt u in het linker paneel onder Scheduled.

### Gemini
De Gemini-app met werkaccount werkt niet met mappen op de computer, volg daarom de tip over gewone chat: gebruik in plaats van het project de robot Gem en sla de planningstabel op via Exporteren naar Tabellen. Met de map werkt Gemini CLI als het bedrijf een Gemini Code Assist Standard of Enterprise-licentie heeft; `AGENTS.md` leest het alleen als het in de instellingen staat.
## Wat is AI-WBS

AI-WBS is de afkorting van AI Work Breakdown Structure. Work Breakdown Structure, het opdelen van werk in onderdelen, gebruiken projectmanagers al tientallen jaren. [AI-WBS](glossary:aiwbs) voegt hier per taak de vraag aan toe of deze door een mens of AI wordt uitgevoerd. Voor het resultaat van elke taak is een mens verantwoordelijk, ook als AI het voorbereidt, daarom staat bij AI-taken ook de naam van degene die het resultaat controleert.

De planning is een gewone tekstbestand `plan-project.md` in de projectmap. De extensie `.md` betekent Markdown-notatie [Markdown](glossary:markdown), die AI makkelijk leest en bewerkt. Open het in elke teksteditor en als u het aan collega’s als tabel of document wilt sturen, vraag AI dat dan.
Als het project een [README](card:project-start-here) heeft, de startpagina van het project, voegt AI daar een link naar de planning aan toe.

`AGENTS.md` is een bestand met regels voor AI in dezelfde map. AI leest het bij het begin van elk werk, zodat het de planning kent zonder dat u het hoeft te herinneren; waar de tool dat niet zelf doet, schrijft AI volgens de prompt de instructie in zijn mapinstellingen. Als de map gedeeld is met het team, ziet het hele team beide bestanden en AI-collega’s lezen dezelfde regels als u.

Een gewone chat slaat de planning niet op in de map omdat die geen toegang heeft tot mappen op de computer; als u niets anders hebt, helpt de tip over gewone chat in het deel Als u vastloopt. Als het project in een gedeelde cloudopslag staat, volstaat het dat de map gesynchroniseerd is naar de computer.

Als AI vraagt of het bestanden mag opslaan in de map, geef dan toestemming.
## Zorg dat de planning actueel blijft

De regel in `AGENTS.md` dekt het werk dat u met AI in de projectmap doet. Collega’s maken hun taken af buiten de map, bijvoorbeeld in e-mail of tijdens een vergadering, en hun bestanden komen zonder AI in de map. Daarvoor volstaat een geplande taak die AI wekelijks uitvoert: AI markeert voltooide taken en doet de volgende taak die in de planning aan haar is toegewezen. Plak deze opdracht in AI in Cowork- of Code-modus en vraag AI een geplande taak aan te maken:

```text
Elke maandag om 8:00 uur doorloop plan-project.md, de projectmap en e-mails en vergaderingen van de vorige week die met het project te maken hebben en waartoe je toegang hebt. Bij voltooide taken schrijf je in de kolom Resultaat waar het resultaat staat en het woord voltooid. Doe daarna de volgende taak die in de planning aan jou is toegewezen en waarvoor je documenten hebt, en sla het resultaat op in de projectmap. Schrijf aan het eind wat er nieuw voltooid is, wat je hebt gedaan en welke taak op wie wacht.
```

AI doorloopt e-mails en vergaderingen alleen als het gekoppeld is aan mail en agenda; anders werkt het alleen met de projectmap. Als de taak met de map op uw computer werkt, draait die alleen als de computer aanstaat en de app open is.
## Voorbeeld

Jitka is marketingcoördinator bij een bedrijf dat tuinmeubelen maakt. De lentecatalogus 2027 moet op 15 januari naar de drukker. In de map staan de catalogus van vorig jaar, de prijslijst van nieuwigheden en een export van de verkoopcijfers van dit jaar. Op maandag 12 oktober opent ze de map in Cowork-modus, plakt de prompt en schrijft eronder: "Lentecatalogus 2027, druk 15 januari. Ik werk eraan, samen met commercieel directeur Pavel, fotograaf Ondřej en grafisch bureau." AI toont de planning en vraagt eronder hoeveel pagina’s de catalogus moet hebben en of alleen de nieuwigheden gefotografeerd worden:

```text
| Taak | Wie doet het | Resultaat |
|---|---|---|
| 1. Productselectie | AI selecteert op basis van verkoop, Jitka controleert | lijst van 60 producten |
| 2. Specificaties en prijzen | AI, Jitka controleert | tabel met specificaties |
| 3. Foto’s van nieuwigheden | fotograaf Ondřej | 14 foto’s |
| 4. Teksten bij producten | AI, Jitka controleert | teksten in bestand |
| 5. Opmaak | grafisch bureau | PDF-catalogus |
| 6. Correctie prijzen | AI vergelijkt met prijslijst, Jitka controleert | lijst met correcties |
| 7. Goedkeuring en druk | Jitka, goedkeuring Pavel | drukopdracht |
```

Jitka beantwoordt beide vragen. Bij de eerste taak zou AI de producten zelf selecteren en Jitka alleen controleren. Daarom past ze de taak aan naar "AI maakt voorstel, Jitka en Pavel selecteren": de verkoopafdeling weet waar klanten naar vragen, dat is nog niet zichtbaar in de verkoopcijfers. Daarna schrijft ze "Opslaan".

AI slaat de planning op in `plan-project.md` en voert direct de eerste taak uit: uit de verkoopexport en prijslijst maakt AI `voorstel-producten.xlsx` met 60 producten gerangschikt op verkoop en alle 14 nieuwigheden. Jitka vindt in de tabel twee sets die niet meer gemaakt worden, ze meldt dit aan AI en die verwijdert ze uit het voorstel. Met het voltooide voorstel gaat Jitka woensdag naar Pavel en ze maken samen de selectie definitief tijdens een vergadering.
## Als u vastloopt

- **AI slaat de planning niet op in de map omdat u alleen een gewone chat hebt:** schakel over naar [Cowork of Code](card:when-chat-is-not-enough). Als het bedrijf alleen gewone chat toestaat, voeg dan de documenten toe aan de prompt en vraag AI door te gaan in de chat en de planning direct in het antwoord te schrijven. Vraag AI om de planning als bestand te geven, upload die in het [project](card:asistent) in uw tool (naam wordt getoond in het blok "In uw tool") en voeg in de projectinstructies de zin toe "Lees de projectplanning voordat je begint. Als ik je vertel wat voltooid is, stuur me dan de hele planning opnieuw met gemarkeerde taken." Upload de nieuwe versie van de planning in het project ter vervanging van de oude; de eerste taak voert AI uit in de chat in het project.
- **De planning heeft dertig kleine taken:** vraag AI om ze samen te voegen tot hoofdtaken, elk met een eigen resultaat.
- **De planning is algemeen en past op elk project:** vraag AI welke documenten het heeft gelezen in de map. Een bestand dat alleen in de cloud staat, wordt pas gedownload als AI het opent, dus als het niet gelezen is, laat AI het bij internetverbinding opnieuw proberen. Wat in de map ontbreekt, bijvoorbeeld de opdracht of notulen, voeg toe en vraag AI de planning aan te passen. Bij een groot project schakel over naar een [sterker model](card:modely).
- **Het resultaat van de eerste taak klopt niet:** vertel AI precies wat niet klopt en uit welk document het moet halen. Bij cijfers of beweringen helpt [controle van AI-uitvoer](card:kontrola-vysledku).
## Wat klaar zal zijn

U hebt in de projectmap `plan-project.md` met de hoofdtaken van het hele project en bij elke taak weet u wie deze uitvoert en wat het resultaat is. AI heeft haar eerste taak uitgevoerd en het resultaat ligt naast de planning. In `AGENTS.md` staat een regel waardoor AI de planning leest voordat het werkt en voltooide taken markeert.
## Wat nu

Als een taak in de planning een langdurige klus voor AI is, bijvoorbeeld het doorlezen van zestig contracten, geef die dan aan een [agent](card:agent-task) die het zelfstandig afmaakt. Als het project nog geen startpagina heeft, laat AI een [README](card:project-start-here) schrijven. Wat er in het project besloten en gedaan is, noteer u in de [worklog](card:project-worklog).
## AI-WBS

**Wat het is:** AI Work Breakdown Structure: het opdelen van een project in deliverables, fasen en rollen van mens, AI, expert of automatisering.

**Wat het niet is:** Het is niet zomaar een gewone lijst met projecttaken.

**Waarom het team het nodig heeft:** Het toont precies waar AI in het project werkt en waar een menselijke of deskundige stap blijft.

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

## Blok plannen

Optionele productmechaniek na het afronden van een kaart, waarvan het resultaat leidt tot werk dat niet binnen vijftien minuten past. Het is geen zelfstandige kaart, heeft geen eigen voltooiing en verhoogt het aantal voltooide methoden niet.

Kaarten zijn vijftien minuten lang en eindigen met een artefact. Sommige kaarten beginnen echter pas met een artefact: er ontstaat een fasekaart, een onderzoeksbrief, een skill-ontwerp of twee takken voor integratie. De persoon vertrekt met een plan maar zonder tijd, en keert daarna na tien minuten tussen vergaderingen terug naar het werk, waar niets afgerond kan worden.

## Wanneer wordt het aangeboden

- de kaart is geëindigd met een bruikbaar resultaat en dat resultaat is een opdracht voor vervolgwerk,
- dat werk heeft een duidelijk einde dat in één zin benoemd kan worden,
- bij normale opsplitsing in korte stukken zou het uiteenvallen, omdat elke terugkeer begint met het opnieuw laden van de context.

De mechaniek verschijnt niet als het werk na de kaart echt binnen vijftien minuten past, als de volgende stap op iemand anders wacht of op goedkeuring, of als het resultaat van de kaart geen vervolgwerk heeft.

## Wat de gebruiker ziet

Een korte keuze **Blok plannen** naast de gezamenlijke check-in. Na openen vraagt de AI slechts één ding: wanneer die tijd daadwerkelijk beschikbaar is. De rest stelt zij zelf voor op basis van wat in de kaart is ontstaan.

## Wat de AI creëert

Een brief van het blok. De bron is het resultaat van de zojuist voltooide kaart; de mechaniek verzint geen nieuw onderwerp. Het bevat vijf onderdelen:

- **één ding**, benoemd zoals het er voltooid uitziet,
- **duur** tussen 60 en 120 minuten, met wat erin past en wat niet,
- **wat vooraf klaar moet zijn**: toegang, data, onderlagen, prompt uit de kaart,
- **wat aan het einde af moet zijn**, dus een concreet resultaat, geen "voortgang" of "in bewerking",
- **wat er met de rest gebeurt** die niet in het blok past, zodat er geen onafgemaakte zaken blijven hangen.

Als blijkt dat één ding eigenlijk drie zijn, zegt de AI dat en biedt aan welke daarvan in het eerste blok hoort. Ze stelt niet van tevoren een verdeling in drie blokken voor.

## Actieve tijd versus wachten

Een blok met AI heeft een andere opbouw dan een blok zelfstandig werk, omdat een deel van de tijd een tool draait. Onderzoek, agent, langere generatie of dataverwerking duren minuten tot tientallen minuten en de persoon hoeft er niet bij te zitten.

De brief onderscheidt daarom drie soorten tijd: actieve menselijk werk, AI-run en wachten op iemand anders. Voor de AI-run stelt hij voor wat er tussendoor gedaan kan worden, meestal de voorbereiding van de volgende stap van hetzelfde resultaat. Overschakelen naar niet-gerelateerd werk breekt het blok, ook al lijkt het benut tijd.

Als wachten het grootste deel van het blok zou innemen, zegt de mechaniek dat direct: zo’n taak hoort eerder in [Laat AI werken als je er niet bij bent](card:recurring-ai-task).

## Kalender

De mechaniek bereidt een evenementtekst voor: naam volgens het ene ding, duur en in de beschrijving wat vooraf klaar moet zijn. De gebruiker kan die zelf invoeren.

De mechaniek schrijft niets in de kalender of een ander gedeeld systeem zonder toestemming en stuurt niemand een uitnodiging.

## Afbakening ten opzichte van kaarten

| Wat het niet is | Waar het is |
|---|---|
| Gereserveerde tijd voor een team dat een besluit van de leiding nodig heeft, geannuleerde vergaderingen en een mentor binnen handbereik | kaart [Geef het team een blok voor een echt AI-project](card:ai-sprint) |
| AI-werk terwijl de persoon er niet bij is | kaart [Laat AI werken als je er niet bij bent](card:recurring-ai-task) |
| Opsplitsing van een project in stappen en rollen | kaart [Maak een AI-WBS voor de eerste fase van een project](card:ai-wbs-project) |

Een blok plant de persoon zelf en heeft geen toestemming van anderen nodig. Daarmee verschilt het van een sprint, waar die toestemming juist een belangrijk deel van het werk is.

## Wat de mechaniek niet bevat

Instructies voor concentratie, aanbevelingen voor telefoon, notificaties en omgeving. De bibliotheek leert doorlopen. Adviezen van dit soort zouden van de mechaniek een preek over werk maken in plaats van de voorbereiding van één concreet blok.

## Registratie

In de check-in kan worden toegevoegd dat er een brief van het blok is gemaakt. Het is geen zelfstandige voltooiing van een kaart. Of het blok heeft plaatsgevonden, volgt de mechaniek niet.

## Eerste ondersteunde kaarten

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Andere kaarten met vervolgwerk langer dan vijftien minuten, zoals `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` en `sjednotit-data-z-vice-zdroju`, zijn kandidaten voor een tweede golf. De mechaniek meteen op de helft van de bibliotheek hangen zou van de keuze ruis maken.
