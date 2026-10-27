# Maak uw PACT aan: een werkruimte voor AI

AI verzamelt al uw lopende werk in één map met overzicht, zodat een nieuwe chat zonder uitleg kan doorgaan.

## Maak uw PACT aan: een werkruimte voor AI

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met lopende projecten op de computer.
## Waar is het goed voor

Op maandag opent u een nieuwe chat over het budget van de afdeling en bent u tien minuten bezig met het zoeken naar documenten verspreid over de computer. De tabel van vorig jaar staat in Documenten, notities van de vergadering op het Bureaublad en de offerte van de leverancier in Downloads. AI rekent dan nog steeds met de prijzen van vorig jaar, omdat u de nieuwe offerte vergeten bent in de chat te plaatsen.

PACT is één map met vier onderdelen waarin AI zelf projecten, documenten en regels vindt.
## Wat u moet voorbereiden

- bestanden van projecten waaraan u nu werkt en weten waar die op de computer staan,
- AI in de [modus](glossary:workmode) Cowork of Code die met bestanden op de computer werkt.
## Hoe u het doet

1. Open Cowork of Code in de map met uw naam, waar Documenten, Bureaublad en Downloads staan, en voer de prompt in. AI toont per project wat het naar de nieuwe map `PACT` zal verplaatsen.
2. Bevestig het voorstel; een project waar u niet zeker van bent, laat u voorlopig weg. AI verplaatst de bestanden en schrijft in `AGENTS.md` de PACT-kaart: wat waar ligt en welke regels gelden.
3. Open een nieuwe chat in de map `PACT` en geef meteen een taak voor een project, bijvoorbeeld “Laten we verdergaan met het budget. Wat ontbreekt er nog?” AI haalt zelf de documenten op.
## AI-oefening

Voer deze [prompt](glossary:prompt) in AI in de modus Cowork of Code, geopend in uw map:

Maak in Documenten een map PACT aan: een werkruimte waarin al mijn werk een eigen plek heeft. Als je niet met bestanden op de computer kunt werken, zeg het dan meteen, zodat ik kan overschakelen naar Cowork of Code.

Maak binnenin vier onderdelen:
- 1_Projects: lopende projecten, elk in een eigen map,
- 2_Agents: instructies voor AI, bijvoorbeeld prompts die ik herhaaldelijk gebruik,
- 3_Context: documenten die voor meerdere projecten gelden, zoals prijslijsten, bedrijfsregels of geslaagde teksten als voorbeeld,
- 4_Tools: hulpmiddelen voor het werk, zoals documenttemplates of rekenmachines.

Doorzoek Documenten, Bureaublad en Downloads en vraag me of ik werkbestanden nog ergens anders heb, bijvoorbeeld in OneDrive. Herken aan inhoud en datum van laatste wijziging aan welke projecten ik nu werk. Laat me dan een voorstel per project zien: de projectnaam en welke bestanden verplaatst worden, niet elk bestand apart. Na mijn bevestiging verplaats je de bestanden en sla je de lijst met verplaatsingen (van waar naar waar) op in het bestand presuny.md in de map PACT, zodat ze altijd teruggezet kunnen worden. Wat niet bij lopend werk hoort, laat je op zijn plek. Bestanden in gedeelde mappen waar ook collega’s mee werken, verplaats je niet; schrijf alleen in de kaart waar ze liggen.

Maak tenslotte in de map PACT het bestand AGENTS.md aan met de PACT-kaart: wat in welk onderdeel zit en welke projecten er zijn, bij elk in één zin in welke staat het is. Voeg de regel toe: “Een nieuw project maak je aan als map in 1_Projects. Elk nieuw bestand sla je op in het onderdeel waar het hoort. Als er een nieuw project bijkomt of de status verandert, pas je de kaart in dit bestand aan. Lees voor je aan een project werkt eerst de map ervan.” Zorg dat je dit bestand in dit hulpmiddel aan het begin van elk werk leest; in Cowork schrijf je het in de mapinstructies.

## In uw hulpmiddel

### Microsoft Copilot
Cowork vindt u naast de Chat-schakelaar; als die er niet is, vraag dan de IT-beheerder. Het ziet alleen OneDrive en SharePoint, dus u kiest de map niet en voegt aan het einde van de prompt toe: “In plaats van Documenten, Bureaublad en Downloads doorzoek mijn OneDrive en maak PACT daar aan. Sla de kaart op als Word-document en schrijf de regels voor Customize, Preferences.” In stap 3 schrijft u in de nieuwe taak dat PACT op OneDrive staat.

### ChatGPT
In de ChatGPT-app voor de computer schakelt u over naar Codex, kiest map openen (open a folder) en selecteert de map met uw naam. Codex leest `AGENTS.md` zelf en maakt de geplande taak aan als u erom vraagt; u vindt die onder Scheduled. Als u Codex niet ziet, heeft de beheerder die waarschijnlijk uitgeschakeld, vraag hem die aan te zetten.

### Claude
Open in de Claude-app voor de computer Cowork en kies de map met uw naam, of open die in Claude Code; beide hebben betaalde abonnementen. Cowork schrijft de regel in de mapinstructies, Claude Code leest `AGENTS.md`. AI maakt de geplande taak aan als u erom vraagt, en u vindt die in het linker paneel onder Scheduled.

### Gemini
Gemini maakt geen mappen aan op Google Drive en verplaatst geen bestanden, dus u kunt PACT er niet mee opzetten. Voor deze workout heeft u AI in de modus Cowork of Code nodig, bijvoorbeeld Claude Cowork, Claude Code of Codex in de ChatGPT-app; vraag de IT-beheerder of het bedrijf die heeft.
## Wat is PACT

[PACT](glossary:pact) is een manier om werk te organiseren zodat zowel mensen als AI het begrijpen. De naam bestaat uit de beginletters van de Engelse woorden Projects (projecten), Agents (instructies voor AI), Context (documenten waarop u steunt) en Tools (hulpmiddelen). De eenvoudigste vorm zijn vier mappen zoals in deze oefening; door de cijfers voor de namen staan ze altijd in deze volgorde. U bepaalt welke projecten in PACT horen en AI doet het verplaatsen en ordenen. U heeft er geen speciaal programma voor nodig, en als een deel van het werk ergens anders staat, bijvoorbeeld bedrijfsdocumenten op een gedeelde schijf, kan dat daar blijven en schrijft AI in de kaart waar het te vinden is.

`AGENTS.md` is een gewoon tekstbestand in de hoofdmap van PACT met regels voor AI. Het heet naar [agents](glossary:agent), AI die zelf met bestanden werkt, en de extensie `.md` betekent dat het in [Markdown](glossary:markdown) is geschreven. Veel tools in de Code-modus lezen het zelf aan het begin van elk werk, dus u hoeft de kaart en regels niet steeds te herhalen. Waar het hulpmiddel dat niet kan, slaat AI de regel op in de instellingen of vertelt u waar u die moet invoegen.

Een gewone chat is niet genoeg voor PACT, omdat die geen toegang heeft tot mappen op de computer; hoe u [overschakelt naar Cowork of Code](card:when-chat-is-not-enough) staat op een aparte kaart. Alleen lopende projecten en hun documenten horen in PACT; oude archieven laat u waar ze zijn en AI verplaatst ze pas als u dat vraagt.
## Laat PACT zichzelf onderhouden

Een geplande taak sorteert wekelijks ook bestanden die elders zijn bijgekomen in PACT. De regel in `AGENTS.md` dekt het werk dat u met AI in de map `PACT` doet. Bijlagen uit e-mails belanden namelijk in Downloads en snelle notities op het Bureaublad. Geef AI in de modus Cowork of Code deze opdracht en vraag om er een geplande taak van te maken:

```text
Elke vrijdag om 16:00 doorzoek Bureaublad en Downloads. Verplaats bestanden van deze week die bij projecten in PACT horen naar het juiste onderdeel volgens de kaart in AGENTS.md. Als er een nieuw project is, maak dan een map in 1_Projects en voeg het toe aan de kaart. Schrijf aan het einde wat je waar hebt verplaatst en bij welke bestanden je niet weet waar ze horen.
```

Als de taak met bestanden op uw computer werkt, draait die alleen als de computer aanstaat en de app open is.
## Voorbeeld

Jana bereidt de beursstand van het bedrijf in Brno voor en een herfstreis naar de Dolomieten voor collega’s. De bestanden van beide liggen verspreid over de computer. AI herkent beide projecten en maakt na Janas bevestiging:

```text
PACT/
  AGENTS.md
  1_Projects/
    beurs-brno/           briefing, budget stand, offertes van drie drukkerijen
    reis-dolomieten/      programma en berekeningen
  2_Agents/
    prompt-uitnodiging.md
  3_Context/
    prijslijst-2026.xlsx
    logo-en-kleuren.pdf   bruikbaar voor stand en uitnodiging voor de reis
  4_Tools/
    rekenmachine-reis.xlsx
```

Op woensdag 14-10 opent ze een nieuwe chat in de map `PACT` en schrijft: “Laten we verdergaan met de beurs. Welke drukkerij is het goedkoopst?” Een goed antwoord vergelijkt de drie offertes uit de projectmap zonder dat Jana iets hoeft toe te voegen. Als AI vraagt om welke beurs het gaat, werkt die waarschijnlijk buiten de map `PACT`.
## Als u vastloopt

- **AI zegt dat het mappen heeft aangemaakt, maar ze staan niet op de computer:** u werkt waarschijnlijk in een gewone chat die niet met bestanden op de computer kan werken. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) en kies daar de map met uw naam.
- **AI ziet of kan bestanden in een map niet verplaatsen:** controleer of u in Cowork of Code de map met uw naam hebt geselecteerd. Als bestanden daarbuiten staan, vraag AI hoe u toegang kunt geven.
- **U wilt een verplaatsing terugdraaien:** zeg tegen AI in de map `PACT` dat het volgens het bestand `presuny.md` de bestanden terugzet, allemaal of alleen van één project.
- **Nieuwe chat vraagt naar dingen die in de map staan:** open de chat in de map `PACT`, niet in een gewoon chatvenster, en controleer dat `AGENTS.md` er direct in ligt. Vraag AI het te lezen.
## Wat klaar zal zijn

U heeft de map `PACT` met vier onderdelen, lopende projecten en documenten erin, en in `AGENTS.md` een kaart waarmee elke nieuwe chat de map begrijpt. U heeft met een echte taak geverifieerd dat AI aan een project verderwerkt zonder dat u iets hoeft toe te voegen of uit te leggen.
## Wat nu

Laat AI voor elk project een [startpagina](card:project-start-here) schrijven waarin meteen te zien is in welke staat het is. Van het proces dat u AI steeds opnieuw uitlegt, laat u een [handleiding maken die u opnieuw gebruikt](card:create-skill-from-proven-process).
## Agent

**Wat het is:** Een AI-systeem dat binnen een gegeven doel meerdere stappen kan plannen, beschikbare tools kan gebruiken, met de status kan werken en toegestane acties kan uitvoeren. De reikwijdte van de mogelijkheden en de mate van zelfstandigheid hangen af van het specifieke hulpmiddel en de bevoegdheden.

**Wat het niet is:** Het is niet slechts een opgeslagen prompt of een assistent die een geavanceerdere functie heeft gekregen.

**Waarom de student het nodig heeft:** Het helpt bij het herkennen van taken die tools, bevoegdheden, controlepunten en duidelijke verantwoordelijkheid voor acties vereisen.

## Markdown

**Wat het is:** Een eenvoudig platte-tekstformaat waarin koppen, lijsten, links en andere structuren worden geschreven met een paar gewone tekens. Bestanden gebruiken meestal de extensie `.md`.

**Wat het niet is:** Het is geen programmeertaal en ook geen formaat dat uitsluitend voor ontwikkelaars bedoeld is.

**Waarom studenten het nodig hebben:** Het blijft gemakkelijk leesbaar en bewerkbaar voor zowel mensen als AI en kan worden overgedragen tussen verschillende tools.

## PACT

**Wat het is:** Een model voor het organiseren van een AI-werkomgeving in vier typen elementen: Projects, Agents, Context en Tools, oftewel projecten, assistenten of agenten, context en hulpmiddelen.

**Wat het niet is:** Het is geen verplichte set van vier componenten noch kant-en-klare software. De concrete vorm hangt af van hoe iemand werkt en wat die al gebruikt.

**Waarom de student het nodig heeft:** Het helpt om meerdere projecten, herhaalde AI-processen, een stabiele context en hulpmiddelen te ordenen zodat zowel de mens als de AI ze kan terugvinden.

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
