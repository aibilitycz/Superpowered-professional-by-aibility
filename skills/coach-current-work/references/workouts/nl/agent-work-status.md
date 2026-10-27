# Laat AI de status van taken bijhouden: collega weet waar uw werk staat

AI vindt of maakt voor elk werk zelf een taak aan in het teamtool, verplaatst deze en sluit hem af.

## Laat AI de status van taken bijhouden: collega weet waar uw werk staat

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met één werk dat u vandaag doet.
## Waarvoor is het nuttig

De vergelijking van drie offertes voor nieuwe ramen is sinds dinsdag klaar, maar de taak in
takenbeheer staat nog steeds op Te doen. Donderdag krijgt u daarom een bericht van de manager
en ondertussen is een collega opnieuw offertes aan het vergelijken.

Een regel voor AI helpt: de taak wordt tijdens het werk automatisch verplaatst en aan het einde
schrijft AI het resultaat met een link erin, zodat de status klopt, ook als u het vergeet.
## Wat voorbereiden

- één werk dat u vandaag met AI doet, bijvoorbeeld het vergelijken van offertes of voorbereidingen voor een vergadering,
- het teamtakenhulpmiddel, bijvoorbeeld Planner, Asana of Jira; soms moet IT toestemming geven voor koppeling,
- een projectmap gedeeld met het team, bijvoorbeeld gesynchroniseerd vanuit OneDrive of SharePoint,
- AI in [modus](glossary:workmode) Cowork of Code; waar die is, toont het blok In uw hulpmiddel.
## Hoe te doen

1. Plak de prompt in AI in de Cowork- of Code-modus en vul het takenhulpmiddel
   en het werk van vandaag aan. AI maakt verbinding met het hulpmiddel; u bevestigt zelf de aanmelding.
2. Bevestig het account waarmee AI schrijft en geef aan welke statussen
   "in uitvoering" en "klaar" betekenen. AI slaat statussen of kolommen op in de regel en voert het werk uit.
3. Open de taak in het takenhulpmiddel en kijk wat een collega ziet.
   Status en link moeten overeenkomen met het AI-rapport.

In de taak volstaat status, een zin over het resultaat en een link; de rest hoort in de worklog,
de projectdagboek.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de Cowork- of Code-modus,
open in de projectmap, en vul op de laatste twee regels het hulpmiddel en het werk aan:

Ik wil dat de status van mijn werk automatisch wordt bijgehouden in het takenhulpmiddel dat ons team gebruikt, zodat collega’s weten waar het werk staat zonder mij te hoeven vragen. Stel dit in en gebruik het meteen voor het werk dat ik je geef. Hulpmiddel en werk staan op de laatste twee regels.

1. Maak verbinding met het takenhulpmiddel. Gebruik de connector die hier beschikbaar is. Als die ontbreekt of alleen-lezen is, verbind dan zelf het hulpmiddel, bijvoorbeeld via een MCP-server (bij Planner Work IQ van Microsoft) of de Composio-service. Als ik ergens moet inloggen of iets moet toestaan, vertel me precies waar en wacht. Als IT in het bedrijf de verbinding moet toestaan, schrijf dan een korte aanvraag voor IT met wat en waarom te verbinden. Als het team taken in een tabel of bestand beheert, werk daarin. Als je hier niet in bestanden in de projectmap kunt schrijven, zeg het meteen en adviseer waar naartoe te schakelen.

2. Zoek direct in het hulpmiddel op met welk account je schrijft en geef dat aan mij door, inclusief project of bord waar je schrijft. Als je met meerdere accounts kunt schrijven, vraag dan welk account te gebruiken. Geef me de statussen en kolommen van taken die je in het hulpmiddel ziet en vraag welke "in uitvoering" en "klaar" betekenen.

3. Schrijf deze regel in AGENTS.md in de projectmap en vul de vierkante haken erin zelf in op basis van wat we hebben ontdekt. Als AGENTS.md niet bestaat, maak het aan. Zorg dat je het in dit hulpmiddel leest bij het begin van elk werk; in Cowork schrijf je de regel in de mapinstructies.

### Status van werk
- Taken beheren we in [hulpmiddel, project of bord]. Schrijf er altijd in met account [account] en noem dat in elk rapport.
- Begin het werk met het vinden van de taak die erbij hoort en zet die op [in uitvoering]. Als er geen is, maak er dan een aan met een korte naam en wijs die aan mij toe.
- Als het werk op iemand anders wacht, schrijf dan in de taak in één zin wie en waarop.
- Schrijf aan het einde bovenaan in worklog.md in de projectmap een registratie met een link naar het resultaat in de vorm van eerdere registraties. Als worklog.md niet bestaat, maak het aan en schrijf de registratie zo: datum, wat gedaan is, link naar resultaat en volgende stap. Als er al een regel voor worklog in AGENTS.md staat, sla deze regel dan over en voeg alleen de link aan die regel toe.
- Schrijf in de taak een opmerking met het resultaat in één zin en een link die een collega kan openen, en zet de taak op [klaar]. Als het resultaat alleen op deze computer staat, vraag me waar het op te slaan. Als het werk niet klaar is, laat het dan op in uitvoering en schrijf wat nog rest.
- Na elke registratie laad je taak en worklog opnieuw en controleer je of alles klopt. Pas dan meld je dat het klaar is. Als de registratie niet klopt, corrigeer die dan, en als dat niet lukt, meld het me.

4. Doe dan het werk van de laatste regel volgens die regel. Schrijf me aan het einde een link naar de taak, de status, hoe je die nu in het hulpmiddel ziet, en met welk account je hebt geschreven.

Takenhulpmiddel:
Werk:

## In uw hulpmiddel

### Microsoft Copilot
Plak de prompt in Copilot Cowork op `copilot.cloud.microsoft` (schakelaar naast
Chat; licentie Microsoft 365 Copilot). Voeg het takenhulpmiddel toe via Customize,
Plugins, anders vraag IT. Voeg aan het einde van de prompt toe: “Ik heb geen map:
houd worklog als Word op OneDrive, maak geen regelbestand aan en schrijf de regel
als tekst beginnend met ‘Bij project [naam]:’.” Plak de tekst links in
Customize, Preferences.

### ChatGPT
De Code-modus is in ChatGPT Codex: kies die in de ChatGPT-desktopapp en open de projectmap (open a folder). Codex leest `AGENTS.md` zelf en verbindt het takenhulpmiddel via MCP-server; die vind je in Settings, MCP servers, waar je eventueel met Authenticate inlogt. Als je Codex niet ziet, heeft de beheerder die waarschijnlijk uitgeschakeld, vraag hem die aan te zetten.

### Claude
Open in de Claude-desktopapp Cowork of Claude Code en kies de projectmap; beide zijn in betaalde abonnementen. Cowork schrijft de regel in mapinstructies (Folder instructions), Claude Code leest `AGENTS.md`. Verbind het takenhulpmiddel, bijvoorbeeld Asana of Linear, via Customize, Connectors in het linker paneel; in het bedrijf voegt de organisatie-eigenaar het toe.

### Gemini
De Gemini-app voegt een taak toe aan Google Tasks en markeert die als klaar als je in de prompt @Google Tasks schrijft. Worklog in de map wordt niet automatisch bijgehouden, omdat de map op de computer niet wordt gebruikt. De hele oefening doet Antigravity, een Google-tool die direct in uw map werkt en `AGENTS.md` leest; met een bedrijfsaccount gebruikt u die via Gemini Enterprise, vraag IT.
## Taak, worklog en regelbestand

AI schrijft op twee plaatsen en volgt één regelbestand. De taak in het takenhulpmiddel ziet het hele team: AI schrijft er status en aan het einde één zin met een link naar het resultaat in. Status is een kolom, label of voortgang van de taak,
bijvoorbeeld Te doen, In uitvoering of Klaar. Als het team geen hulpmiddel heeft, volstaat een tabel of bestand `ukoly.md` in de gedeelde map.

[Worklog](card:project-worklog), het projectdagboek, is het bestand `worklog.md` in de projectmap. AI schrijft er aan het einde bij wat gedaan is met een link naar het resultaat, zodat u het werk ook over een maand terugvindt.

`AGENTS.md` is het regelbestand voor AI in de projectmap, dat AI leest bij het begin van elk werk; in Cowork vervullen mapinstructies dezelfde rol. AI verbindt met het takenhulpmiddel via een connector of via [MCP](glossary:mcp), een open standaard voor app-verbindingen met AI. Als de connector ontbreekt, gebruikt AI een integratieservice, bijvoorbeeld Composio; hoe AI zo’n service instelt, toont de kaart over [gegevensoverdracht tussen apps](card:cross-app-workflow).
## Waarom AI het account noemt en de registratie controleert

Twee regels in de prompt, het account in elk rapport en controle na registratie, ontstonden door fouten die wij zelf maakten. Taken beheren we in Linear en AI schrijft erin via een service waar ook andere apps zijn verbonden, soms met meerdere accounts. Als het account niet expliciet werd gekozen, schreef AI soms onder een ander dan verwacht. Sindsdien kiest AI het altijd en noemt het in het rapport.

De tweede fout: het hulpmiddel bevestigde de registratie, maar de taakstatus veranderde niet. Daarom laadt AI na elke registratie de taak opnieuw en meldt pas klaar als het ziet wat het schreef.
## Voorbeeld

Jakub is projectmanager bij een bouwbedrijf en het team beheert taken in Asana. Op
dinsdag 20-10-2026 opent hij AI in Cowork-modus in de map `Rekonstrukce školy Lipová`, plakt de prompt en vult aan:

```text
Takenhulpmiddel: Asana, project Rekonstrukce školy Lipová
Werk: Vergelijk drie offertes voor het vervangen van ramen uit de map Offertes in de tabel (prijs, termijn, garantie) en schrijf een aanbeveling voor de technisch directeur.
```

Jakub bevestigt aanmelding met zijn bedrijfsaccount. AI toont kolommen Te doen,
In uitvoering, Wacht op goedkeuring en Klaar en Jakub zegt dat klaar werk naar Wacht op goedkeuring gaat, omdat de technisch directeur de offertes goedkeurt. AI vindt de taak “Vergelijk offertes voor ramen”, zet die op In uitvoering en vergelijkt de offertes. Na de laatste registratie laadt AI de taak opnieuw en ziet dat die op In uitvoering bleef. AI verplaatst hem opnieuw, controleert de status en geeft terug:

```text
Geschreven via account Jakub Dvořák (Asana, Stavby Morava).
- Taak “Vergelijk offertes voor ramen” staat in kolom Wacht op goedkeuring, met aanbeveling en link naar de tabel Vergelijking ramen.xlsx op SharePoint.
- De eerste verplaatsing werd niet opgeslagen; na de tweede poging is de verplaatsing bevestigd.
- Worklog: registratie 2026-10-20 staat bovenaan in worklog.md.
```

Woensdagmorgen opent technisch directeur Hana het project in Asana, ziet de taak in kolom Wacht op goedkeuring met link naar de tabel en keurt de aanbeveling goed zonder Jakub te hoeven berichten.
## Als u vastloopt

- **AI kan niet bij het takenhulpmiddel:** de connector ontbreekt of kan niet worden ingeschakeld in het bedrijf. Vraag AI een korte aanvraag voor IT te maken. AI verbindt in Code-modus met Planner via Work IQ, een MCP-server van Microsoft die IT eenmalig inschakelt. Zodra IT verbinding toestaat, schrijf in dezelfde chat “IT heeft het ingeschakeld, ga door”. Hoe AI andere apps verbindt, toont de kaart [Verbind een connector](card:plugin-connector).
- **AI maakt een nieuwe taak aan terwijl er al een bestaat:** vertel AI hoe de taak te herkennen, bijvoorbeeld op project en naam, en laat dat in de regel opnemen.
- **AI meldt klaar, maar taak staat nog in oude status:** schrijf “Laad taak opnieuw en laat zien wat je ziet”. Als de controle niet in het rapport staat, vraag AI te controleren of de regel in `AGENTS.md` of mapinstructies staat.
- **AI werkt buiten de projectmap en kent de regel niet:** u werkt waarschijnlijk in een gewone chat. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough)
en open daar de projectmap.
## Wat klaar zal zijn

Het werk van vandaag heeft een taak die AI zelf naar klaar heeft verplaatst en het resultaat met link erin heeft geschreven, en in de worklog staat haar registratie. De regel in `AGENTS.md`, mapinstructies of AI-instellingen zorgt dat dit bij elk volgend werk ook gebeurt. Een collega vindt de status van uw werk in het takenhulpmiddel zonder u te hoeven vragen.
## Wat daarna

Om de status ook bij te werken voor werk in e-mails en vergaderingen, stel een [geplande taak](card:recurring-ai-task) in die elke avond taken aanvult op basis van e-mails, chats en vergaderingen van die dag. Of de regel na enkele weken nog werkt, controleert de [wekelijkse instellingenreview](card:weekly-ai-review).
## MCP

**Wat het is:** Een open technische standaard (Model Context Protocol) waarmee AI verbinding maakt met applicaties en databronnen. Een applicatie of dataleverancier biedt een MCP-server aan en AI leest via deze server data of voert toegestane acties uit. In toolinstellingen wordt zo'n verbinding vaak een connector of MCP-server genoemd.

**Wat het niet is:** Het is geen zelfstandige applicatie of AI-model. De standaard zelf downloadt niets; het heeft een server van een leverancier nodig, vaak een account daarbij en toestemming die door een persoon of beheerder wordt geactiveerd.

**Waarom de student het nodig heeft:** Het helpt te begrijpen wanneer AI toegang krijgt tot data buiten het openbare web en wie de verbinding moet activeren.

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
