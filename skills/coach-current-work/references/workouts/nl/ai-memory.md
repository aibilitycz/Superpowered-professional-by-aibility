# Ruim uw AI-geheugen op: wat AI tussen chats over u onthoudt

AI doorloopt wat het over u onthoudt, corrigeert verouderde informatie en verwijdert onjuiste gegevens, zodat een nieuwe chat uitgaat van uw actuele situatie.

## Ruim uw AI-geheugen op: wat AI tussen chats over u onthoudt

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met AI die u al een paar weken gebruikt.
## Waar het nuttig voor is

Het project voor een nieuwe webshop eindigde in september, maar AI blijft het herinneren in e-mailvoorstellen en houdt rekening met de deadlines. Bovendien zet het alles in een tabel, ook al was die tabel alleen voor één rapport bedoeld.

AI slaat in het [geheugen](glossary:memory) op wat het over u ontdekt, maar herkent niet vanzelf wat al afgerond is. Als u af en toe laat zien wat het weet, corrigeert AI dit binnen enkele minuten.
## Wat u moet voorbereiden

- AI die u op het werk al een paar weken gebruikt,
- de geheugeninstellingen in uw tool; waar die zijn, toont het blok "In uw tool".
## Hoe u het aanpakt

1. Plak de prompt in een nieuwe chat en bekijk wat AI over u weet. Bij elk item stelt het voor om het te behouden, te corrigeren of te verwijderen.
2. Vertel AI welke voorstellen kloppen, bijvoorbeeld "ja, behalve punt 3", en het voert de wijzigingen in het geheugen door. Loop ook zelf de lijst in de instellingen na, AI hoeft niet alles te tonen.
3. Vraag in een nieuwe chat naar iets wat u hebt gecorrigeerd. Als AI nog het oude antwoord geeft, vertel dan wat klopt of verwijder het item in de instellingen.

Bij twijfel helpt de vraag of iets over een maand nog geldt.
## AI-oefening

Plak deze [prompt](glossary:prompt) in de AI die u op het werk gebruikt:

Loop met mij door wat je over mij onthoudt en ruim het op.

Noem alles wat je in het geheugen hebt opgeslagen of weet uit eerdere chats. Verdeel het in vier groepen: wie ik ben en wat ik doe, welke vorm van antwoorden ik wil en hoe je met mij werkt, waar ik aan werk, waar ik wat vind (documenten, tools, mensen). Schrijf elk item als één korte zin en vermeld of het in het geheugen staat of uit een eerdere chat komt.

Bij elk item stel je voor om het te behouden, te corrigeren (schrijf meteen de nieuwe tekst) of te verwijderen. Verwijder wat verouderd, verkeerd begrepen is of alleen voor één taak gold. Items die hetzelfde zeggen, voeg je samen. Als je niet weet of iets nog geldt, vraag het mij.

Als ik je vertel wat klopt, voer je de wijzigingen meteen in het geheugen door. Wat je niet kunt wijzigen, geef je aan met waar ik het in de instellingen kan vinden. Voor items uit eerdere chats die niet meer kloppen, sla je op wat nu geldt en als je weet uit welke chat het komt, vermeld dat dan.

Sla tot slot deze regel op in het geheugen, en vervang een vergelijkbare regel als die er al is: "Als ik je corrigeer en de correctie moet ook de volgende keer gelden, sla die dan op als één zin: wat geldt, waarom en wanneer het te gebruiken. Als er een ouder item in het geheugen staat, overschrijf dat zodat er geen twee versies zijn." Laat me daarna zien hoe het geheugen er nu uitziet.

## In uw tool

### Microsoft Copilot
Open in Copilot Chat op `copilot.cloud.microsoft` rechtsboven Instellingen en meer, Chatinstellingen, Aanpassen en kies bij de tegel Opgeslagen herinneringen voor Opgeslagen herinneringen beheren. Verwijder een herinnering met het prullenbak-icoon, alle herinneringen met de knop Alles verwijderen. Als u Copilot in de chat vraagt iets te vergeten, verwijdert het dat zelf.

### ChatGPT
In Instellingen, Personalisatie, Geheugen (in de Nederlandse versie op dezelfde plek) is er een overzicht (Geheugenoverzicht) waar u een regel kunt corrigeren of 'Nooit meer vermelden' kunt kiezen, of een lijst Opgeslagen herinneringen met verwijderopties. Codex heeft een eigen geheugen dat u daar verwijdert met 'Codex-geheugen verwijderen'; voeg aan de prompt toe: "Wijzig het geheugen niet, wat altijd moet gelden, schrijf in `AGENTS.md`."

### Claude
In Instellingen, Geheugen is het geheugen verdeeld in onderwerpen (Topics): open een onderwerp, corrigeer met het bewerk-icoon of verwijder met Delete. Bij zakelijke abonnementen wordt het door de organisatie-eigenaar ingeschakeld en kunt u het zelf aanzetten. Claude Code heeft per project een geheugen in bestanden met een lijst `MEMORY.md`, dus voer de prompt in elk project uit; de map opent u met het commando `/memory`.

### Gemini
Gemini met een werkaccount heeft geen geheugen en slaat dus niets uit chats op. Wat altijd moet gelden, staat in de instructies van de robot Gem (Gems). Plak de prompt in de chat samen met de instructies van de meest gebruikte Gem: AI verwerkt die net als geheugen en slaat de gecorrigeerde versie terug op in Gem.
## Wat is AI-geheugen

AI-geheugen, in de instellingen Memory of Geheugen, is de plek waar AI opslaat wat het over u ontdekt uit chats: wie u bent, hoe u antwoorden wilt en waar u aan werkt. Sommige tools lezen ook uw eerdere chats, waardoor ook informatie in het geheugen komt die alleen voor één taak gold.

AI gebruikt het geheugen als hint en kiest er zelf uit. Wat in elke chat moet gelden, zet u daarom in [Custom Instructions](card:custom-instructions), vaste richtlijnen in de instellingen die u schrijft.

Tools die met een map op uw computer werken, bewaren het geheugen vaak in gewone tekstbestanden. AI past die direct aan en u kunt ze openen en lezen.
## Laat het geheugen zichzelf onderhouden

De regel aan het einde van de prompt zorgt dat AI elke nieuwe correctie opslaat als één zin met reden en een oudere versie overschrijft, zodat het geheugen niet volloopt.

Als AI werkt in de [Code-modus](glossary:workmode) met een map op uw computer en het geheugen in bestanden bijhoudt, kan de opruiming maandelijks automatisch verlopen. Geef deze opdracht en vraag AI om er een geplande taak van te maken:

```text
Elke eerste maandag van de maand om 9:00 doorloop je je geheugen. Items die hetzelfde zeggen, voeg je samen. Items die tegen nieuwere informatie ingaan of over afgeronde zaken gaan, verwijder je. Als je twijfelt, laat het item staan en vraag het mij. Als het geheugen door de tool zelf wordt beheerd en de bestanden niet handmatig aangepast mogen worden, verander dan niets en vertel me alleen wat niet klopt. Tot slot geef je een overzicht: wat is samengevoegd, wat verwijderd en waar vraag je over.
```

De taak draait alleen als de computer aanstaat en de app open is. Als u al een [wekelijkse review](card:weekly-ai-review) hebt, kunt u de geheugenopruiming daarin opnemen in plaats van als aparte taak. In een gewone chat volstaat het om eens in de paar maanden de prompt uit de AI-oefening opnieuw te plakken.
## Voorbeeld

Klára Novotná coördineert projecten bij een bedrijf dat kantoormeubilair maakt. De nieuwe webshop ging in september live en vanaf oktober bereidt Klára een stand voor op de lentebeurs. Op dinsdag 3-11-2026 plakt ze de prompt en AI geeft onder andere:

```text
### Welke vorm van antwoorden ik wil
- Wil korte antwoorden, maximaal vijf punten. Opgeslagen in geheugen, samengevoegd uit twee items. Voorstel: behouden.
- Wil resultaten altijd in een tabel. Opgeslagen in geheugen. Voorstel: verwijderen, de tabel was alleen voor het rapport van augustus.

### Waar ik aan werk
- Beheert de lancering van de nieuwe webshop met deadline 30-9. Opgeslagen in geheugen. Voorstel: corrigeren naar "De webshop draait sinds september, nu bereidt ze de stand voor de beurs voor."
- Behandelt een klacht over een levering van stoelen. Uit eerdere chat "Stoelklacht". Voorstel: opslaan dat de klacht is afgesloten.

### Waar ik wat vind
- Projectdeadlines staan in de tabel "Webshop planning". Opgeslagen in geheugen. Voorstel: corrigeren naar de tabel "Beurs 2027".
```

Klára antwoordt "ja, behalve de tabel: ik wil planningen graag in een tabel blijven zien." AI past het tabelitem aan, corrigeert de twee andere en slaat op dat de klacht is afgesloten. In een nieuwe chat schrijft Klára dan "bereid een e-mail voor aan de standbouwer met wat we voor eind november nodig hebben" en krijgt een korte e-mail zonder verwijzing naar de webshop.
## Als u vastloopt

- **AI zegt dat het niets onthoudt of geeft twee algemene zinnen:** het geheugen staat waarschijnlijk uit of is bijna leeg en er is niets op te ruimen. Zet het aan in de instellingen, en als dat in een bedrijfsaccount niet kan, sla dan vaste richtlijnen op in [Custom Instructions](card:custom-instructions).
- **AI zegt dat het een item heeft verwijderd, maar het staat nog in de instellingen:** verwijder het direct in de geheugenlijst. In ChatGPT verwijdert het wissen van een chat het opgeslagen item in het geheugen niet.
- **Nieuwe chat gaat nog steeds uit van oude informatie:** AI haalt die waarschijnlijk uit een eerdere chat, niet uit het geheugen. Vertel AI wat nu geldt zodat het dat opslaat; in ChatGPT kiest u bij de oude info in het geheugenoverzicht 'Nooit meer vermelden'. Als het blijft terugkomen, verwijder dan de chat waar het uit komt.
- **AI toont maar een paar items, terwijl er meer in de instellingen staan:** vraag AI om elke groep apart door te nemen. Wat het dan nog niet toont, corrigeer of verwijder dan direct in de instellingen.
## Wat klaar zal zijn

In het geheugen van uw AI staat alleen wat nu geldt, en in een nieuwe chat hebt u geverifieerd dat AI uit de gecorrigeerde versie werkt. AI heeft de regel opgeslagen hoe het volgende correcties moet opslaan om duplicaten te voorkomen.
## Wat nu

De regels waarmee AI in het hele project moet werken, schrijft u in een [regelbestand voor AI](card:agents-md). Als u het hele AI-instellingenpakket regelmatig wilt opruimen, niet alleen het geheugen, ga dan verder met de [wekelijkse review](card:weekly-ai-review).
## AI-geheugen

**Wat het is:** De plek waar AI opslaat wat het over een persoon leert uit chats: correcties, voorkeuren, namen en lopend werk. In nieuwe chats selecteert AI zelf wat relevant is uit dit geheugen. Waar het geheugen te vinden is en wie het mag inschakelen, verschilt per tool.

**Wat het niet is:** Het zijn niet de vaste instructies die een persoon zelf schrijft (Custom Instructions), noch de chatgeschiedenis. Wat in elke chat moet gelden, hoort in de instructies, want AI gebruikt uit het geheugen alleen wat het belangrijk vindt.

**Waarom een student het nodig heeft:** Het helpt beslissen wat onthouden moet worden, wat in de instructies moet worden gezet en wanneer het geheugen opgeschoond moet worden, zodat AI niet met verouderde informatie werkt.

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
