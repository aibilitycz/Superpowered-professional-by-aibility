# Stel een workflow in over meerdere apps: AI verplaatst data voor u

Data die u tussen apps overschrijft, zoals sollicitaties van e-mail naar spreadsheet, verplaatst AI automatisch.

## Stel een workflow in over meerdere apps: AI verplaatst data voor u

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met data die u handmatig overschrijft.
## Waar is het goed voor

In een week ontving u 23 sollicitaties voor de functie van productieassistent en de productiemanager moet uiterlijk vrijdag een lijst krijgen. U schrijft elke sollicitatie over in een spreadsheet, antwoordt de kandidaten dat u ze hebt ontvangen, en bij de vijftiende ontdekt u dat u een telefoonnummer verkeerd hebt genoteerd.

Zo’n taak heet een [workflow](glossary:workflow) over meerdere apps en AI doet het helemaal voor u: het leest e-mails, schrijft gegevens in een spreadsheet en maakt concepten van antwoorden.
## Wat u moet voorbereiden

- een taak waarbij u data overschrijft, bijvoorbeeld sollicitaties van e-mail naar spreadsheet,
- toegang tot beide apps; in een bedrijfsaccount moet de beheerder soms AI-koppelingen goedkeuren,
- AI in de Cowork- of Code-modus; waar u die vindt, staat in het blok „In uw tool”,
- een map voor instructies voor de volgende keer, bijvoorbeeld een nieuwe lege map `Werving`.
## Hoe u het doet

1. Open AI in de Cowork- of Code-modus in uw map en plak in een nieuw gesprek de prompt. Schrijf achter de regel „Opdracht:” in één zin waar de data vandaan komt, waar het naartoe gaat en wat er daarna volgt.
2. AI voegt de ontbrekende apps toe; u bevestigt zelf de aanmelding. Daarna doet AI het hele werk en slaat e-mails alleen op als concepten, terwijl u iets anders doet.
3. Vergelijk twee of drie records in de doelapp met de bron en verstuur de concepten. Wat AI de volgende keer anders moet doen, schrijft u erbij en AI voegt het toe aan de opdracht.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de Cowork- of Code-modus,
open in uw map, en schrijf achter de laatste regel uw taak:

Doe voor mij het werk waarbij ik data handmatig van de ene app naar de andere overschrijf. De opdracht staat op de laatste regel.

Bepaal eerst in welke apps uit de opdracht je kunt komen en of je in de doelapp kunt schrijven. Gebruik de connectors die hier beschikbaar zijn. Als er een ontbreekt of alleen lezen kan, verbind de app dan zelf, bijvoorbeeld via de dienst Composio. Als ik iets moet doen, zoals inloggen, vertel dan precies waar ik moet klikken en wacht. Als het hier niet mogelijk is om in apps te schrijven of bestanden in een map op te slaan, zeg het dan meteen en adviseer waar ik moet overschakelen.

Doe daarna het hele werk. Doorloop de bron, haal de gegevens eruit en schrijf ze in de doelapp. Als de spreadsheet of lijst nog niet bestaat, maak die dan aan en stel de kolommen voor volgens de opdracht. Vul een ontbrekend gegeven niet zelf in: laat het veld leeg en markeer het record. Als er na het schrijven e-mails of berichten volgen, sla die dan op als concepten, ik verstuur ze zelf.

Schrijf daarna de opdracht voor de volgende keer in het bestand procedures-tussen-apps.md in de map waar u werkt. Onder de kop ### met de naam van de taak schrijft u waar de data vandaan komt, waar het naartoe gaat, welke gegevens, wat er volgt en hoe u ziet welke records al klaar zijn. Als het bestand bestaat, voeg de taak dan onderaan toe.

Schrijf aan het einde hoeveel records je hebt overgezet, waar ze te vinden zijn, welke je niet hebt kunnen verwerken en waarom, en waar de opdracht is opgeslagen. Als ik het resultaat heb beoordeeld en zeg wat anders moet, pas het dan aan en voeg het toe aan de opdracht.

Opdracht:

## In uw tool

### Microsoft Copilot
Plak de prompt in Copilot Cowork op `copilot.cloud.microsoft` (schakelaar Cowork bovenaan naast Chat), Outlook leest direct mee. Excel van OneDrive of SharePoint voegt u toe met de + knop, een nieuwe spreadsheet maakt Cowork zelf aan. Een map is niet nodig, de opdracht voor de volgende keer slaat Cowork op als skill; geplande taken staan op de pagina Automations. CRM en andere apps voegt u toe via Browse plugins, als de beheerder ze heeft toegestaan.

### ChatGPT
De Code-modus is in ChatGPT Codex in de ChatGPT-app voor desktop: kies Codex, New chat en open een map (open en folder). De spreadsheet van OneDrive moet in een map staan die OneDrive synchroniseert naar de computer, zodat Codex er direct in kan schrijven. Outlook verbindt u in de instellingen onder Plugins; als het ontbreekt in het bedrijfsaccount, schakelt de beheerder het in. Geplande taken staan in het linker paneel onder Scheduled.

### Claude
Open in de Claude-desktopapp Cowork of Claude Code en kies een map; beide zijn in betaalde abonnementen. Connectors vindt u in het linker paneel onder Customize, Connectors; ontbrekende voegt AI zelf toe. Geplande taken staan in Cowork in het linker paneel onder Scheduled.

### Gemini
Herhalende taken tussen Google-apps bouwt u met Workspace Studio (`studio.workspace.google.com`): kies Describe it with AI en omschrijf het in één zin. Test run voert de echte stappen uit, Turn on zet de procedure aan en die draait daarna automatisch. Zonder Studio schrijft u in de Gemini-app „@Gmail geef sollicitaties van deze week als tabel” en slaat die op met Export to Sheets.
## Wat is een workflow over meerdere apps

Workflow is een Engels woord voor een werkproces met meerdere stappen, waarbij het resultaat van de ene stap de input is voor de volgende. Net zoals AI sollicitaties overzet van een webformulier naar een CRM, het systeem waarin u klanten beheert, of uit 33 e-mails van een klant een tabel maakt met 27 vragen waarop nog geen antwoord is.

De connector waarmee AI een app benadert, voegt AI zelf toe in de Cowork- of Code-modus, zoals de kaart [Verbind een connector](card:plugin-connector) laat zien; in een gewone chat zet u die aan in de instellingen. Afhankelijk van wat de connector kan, leest AI alleen of schrijft het ook in de app.

Als u geen connector voor een app hebt of die alleen lezen kan, gebruikt AI de dienst Composio. Daarmee koppelt het aan meer dan duizend apps, zoals Outlook, Gmail, Excel, Google Sheets, Airtable of CRM. In de Cowork- of Code-modus stelt AI die zelf in. U maakt een account aan en bevestigt per app de toegang, zodat Composio alleen de apps ziet die u hebt goedgekeurd. Het basisaccount is gratis en vraagt geen betaalkaart. Vraag in een bedrijfsaccount eerst IT of u het mag gebruiken.

`procedures-tussen-apps.md` is een gewoon tekstbestand met opdrachten voor uw taken tussen apps. Elke taak heeft een eigen kop, zodat u de volgende keer alleen de naam van de taak en het bestand hoeft te noemen. De extensie `.md` betekent dat het in [Markdown](glossary:markdown) is geschreven, een eenvoudige notatie waarbij hekken `###` aan het begin van een regel een kop aangeven.
## Laat het werk automatisch starten

Werk dat elke dag of week terugkomt, kan automatisch starten. Plak in AI die geplande taken kan, deze opdracht, verander alleen de taaknaam naar uw eigen naam, en vraag om er een geplande taak van te maken. Waar u die in uw tool vindt, staat in het blok „In uw tool”.

```text
Elke werkdag om 8:00 voer de taak „Sollicitaties naar spreadsheet” uit volgens het bestand procedures-tussen-apps.md. Verwerk alleen wat er sinds de laatste keer is bijgekomen. Geef in de samenvatting aan hoeveel records erbij zijn gekomen en hoeveel concepten in de mailbox wachten. Als er niets is bijgekomen, schrijf dan niets.
```

De taak leest het bestand in de map op de computer, dus het draait alleen als de computer aanstaat en de AI-app open is.
## Voorbeeld

Lucie van de HR-afdeling van een machinebouwbedrijf zoekt een productieassistent. Van 5 tot 9 oktober 2026 ontving ze 23 sollicitaties per e-mail. Op maandag 12 oktober opent ze AI in de Cowork-modus in de map `Werving productieassistent`, plakt de prompt en schrijft achter de laatste regel:

```text
Schrijf uit de e-mails met sollicitaties voor de functie productieassistent die vanaf 5 oktober zijn binnengekomen de naam, telefoon, jaren ervaring, mogelijke startdatum en link naar de e-mail in de spreadsheet Kandidaten in Excel op SharePoint. Maak voor elke kandidaat een conceptantwoord dat we de sollicitatie hebben ontvangen en binnen 10 werkdagen reageren.
```

AI koppelt Outlook en Excel, Lucie bevestigt de aanmelding bij haar bedrijfsaccount en AI doorloopt 23 e-mails. Daarna geeft AI terug:

```text
23 sollicitaties overgezet naar de spreadsheet Kandidaten.
- 21 records zijn compleet.
- 2 sollicitaties vermelden geen ervaring, die rijen zijn geel gemarkeerd in de spreadsheet.
- 23 conceptantwoorden wachten in Outlook bij de concepten.
De opdracht is opgeslagen in procedures-tussen-apps.md onder de kop Sollicitaties naar spreadsheet.
```

Lucie opent de spreadsheet en vergelijkt bij twee kandidaten telefoon en ervaring met de e-mail; het klopt. Daarna schrijft Lucie aan AI: „Voeg een kolom toe waar ze de bron van de vacature vermelden en vraag bij onvolledige sollicitaties in het antwoord naar ervaring.” AI vult de spreadsheet en twee concepten aan en past de opdracht in het bestand zo aan:

```text
### Sollicitaties naar spreadsheet
- Bron: e-mails met sollicitaties voor de openstaande functie.
- Doel: spreadsheet Kandidaten in Excel op SharePoint, één rij per kandidaat.
- Gegevens: naam, telefoon, jaren ervaring, mogelijke startdatum, bron vacature, link naar e-mail.
- Wat volgt: conceptantwoord dat we de sollicitatie hebben ontvangen en binnen 10 werkdagen reageren. Bij ontbrekende ervaring in het antwoord vragen.
- Voltooide records: e-mail die al een rij in de spreadsheet heeft, niet opnieuw verwerken.
```

Lucie bekijkt de concepten in Outlook en verstuurt ze. Als er donderdag vier nieuwe sollicitaties binnenkomen, schrijft ze alleen „Maak sollicitaties naar spreadsheet volgens `procedures-tussen-apps.md`” en AI verwerkt alleen die vier nieuwe.
## Als u vastloopt

- **AI kan niet in de app komen:** vraag of er een connector voor de app bestaat. Als die er is maar niet aan kan in het bedrijfsaccount, schrijft AI een korte aanvraag aan de beheerder. Als die er niet is, laat AI de app via Composio verbinden; vraag eerst IT in het bedrijfsaccount.
- **AI leest de app wel maar schrijft er niet in:** de connector kan alleen lezen. Schrijf in Cowork- of Code-modus dat AI de app via Composio moet verbinden. Schakel in een gewone chat over naar [Cowork of Code](card:when-chat-is-not-enough).
- **Gegevens in het doel kloppen niet met de bron:** laat AI een fout record zien en vertel waar het juiste gegeven staat. Laat AI alle vergelijkbare records corrigeren en de regel toevoegen aan de opdracht.
- **Records staan dubbel in de spreadsheet:** zeg tegen AI dat het duplicaten moet verwijderen en in de opdracht moet opnemen hoe het voltooide records herkent, bijvoorbeeld aan de link naar de e-mail.
## Wat klaar zal zijn

Data die u anders handmatig zou overschrijven, staan in de doelapp, u hebt twee of drie records vergeleken met de bron en de concepten bekeken en verstuurd. De opdracht met uw aanpassingen ligt in `procedures-tussen-apps.md`, zodat u de taak de volgende keer met één zin start.
## Wat daarna

Als na het overzetten van data een volgende AI-taak volgt, bijvoorbeeld uit de spreadsheet met kandidaten een voorbereiding voor sollicitatiegesprekken, voeg die dan toe aan de opdracht en [sla het hele proces op als skill](card:create-skill-from-proven-process). Wilt u dat de geplande taak eigen fouten bewaakt en meldt, stel die dan in als [geplande taak](card:recurring-ai-task).
## Markdown

**Wat het is:** Een eenvoudig platte-tekstformaat waarin koppen, lijsten, links en andere structuren worden geschreven met een paar gewone tekens. Bestanden gebruiken meestal de extensie `.md`.

**Wat het niet is:** Het is geen programmeertaal en ook geen formaat dat uitsluitend voor ontwikkelaars bedoeld is.

**Waarom studenten het nodig hebben:** Het blijft gemakkelijk leesbaar en bewerkbaar voor zowel mensen als AI en kan worden overgedragen tussen verschillende tools.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## AI-workflow

**Wat het is:** Een herhaalbare doorloop van meerdere opeenvolgende stappen, waarbij de output van de ene stap de input vormt voor de volgende. De afzonderlijke stappen kunnen worden uitgevoerd door mensen, AI of verschillende tools.

**Wat het niet is:** Het is niet automatisch automatisering of een agent. De stappen kunnen door mensen worden aangestuurd en de overdracht kan plaatsvinden tussen verschillende omgevingen.

**Waarom de student het nodig heeft:** Het helpt afzonderlijk beheerde AI-taken te verbinden tot een proces dat getest, verbeterd en later eventueel geautomatiseerd kan worden.

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
