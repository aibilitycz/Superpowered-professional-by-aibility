# Maak uw README: de startpagina van het project

AI schrijft de startpagina van het project, zodat collega’s en een nieuwe chat direct de status en het geldige document herkennen.

## Maak uw README: de startpagina van het project

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met één lopend project.
## Waar is het goed voor

Over een week gaat u op vakantie en collega Marek neemt de voorbereiding van de bedrijfsconferentie in Olomouc over. In de projectmap liggen `catering_final.docx`, `catering_final_2.docx`, notities van de vergadering en het programma van vorig jaar. U weet dat het tweede cateringaanbod geldt en dat het programma van vorig jaar alleen als voorbeeld dient. Marek en een nieuwe chat herkennen dat niet aan de bestandsnamen en u zou het hem haastig telefonisch moeten uitleggen.

Een startpagina van het project, een README, zou helpen. AI schrijft die op basis van de bestanden in de map en Marek en een nieuwe chat zien meteen welk document geldig is en wat de volgende stap is.
## Wat u moet voorbereiden

- een map met één lopend project op uw computer of gesynchroniseerd met uw computer,
- notities of e-mails over het project die niet in de map staan,
- AI in de [modus](glossary:workmode) Cowork of Code die met bestanden op de computer werkt.
## Hoe u het doet

1. Open Cowork of Code in de projectmap en plak de prompt, daaronder de notities die niet in de map staan. AI doorloopt de onderlagen en stelt vragen over wat het niet herkent.
2. Beantwoord de vragen. AI slaat `README.md` op en voegt in `AGENTS.md` een regel toe om het te lezen en actueel te houden. Controleer vooral of het correct heeft vastgesteld welk document geldig is.
3. Vraag in een nieuwe chat in dezelfde map welk document wordt gebruikt en wat de volgende stap is. Een goed antwoord noemt het document dat in de README als geldig staat.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de modus Cowork of Code, geopend in uw map:

Schrijf voor dit project een README: een startpagina waar collega’s en een nieuwe chat direct begrijpen waar het over gaat en hoe verder te gaan. Als je geen toegang hebt tot de projectmap en er zelf geen bestanden kunt opslaan, zeg dat dan meteen zodat ik kan overschakelen naar Cowork of Code.

Doorloop alle onderlagen in de projectmap en de notities die ik onder deze opdracht geef. Als er al een README of andere startpagina in de map staat, pas die dan aan en maak geen nieuwe aan.

Schrijf de README zo dat het op één pagina past en geef deze onderdelen:
- Waar het om gaat: doel van het project, voor wie en tot wanneer.
- Waar we staan: wat klaar is, wat nog niet, wat de volgende stap is en wie die doet.
- Wat niet bij het project hoort: wat we hebben uitgesloten of uitgesteld.
- Welke documenten gelden: voor elk belangrijk bestand een link, waarvoor het dient en of het geldig is, alleen als voorbeeld dient of niet meer geldt.
- Waar wat is: een korte overzicht van mappen en bestanden.
- Bijgewerkt: de datum van vandaag.

Schrijf de inhoud van documenten niet over, verwijs ernaar. Als twee documenten iets anders zeggen of je niet weet welk document geldt, vraag het mij. Baseer je niet op het woord "final" of op de datum. Stel alle vragen tegelijk en alleen die waarop de onderlagen geen antwoord geven. Na mijn antwoorden sla de pagina op als README.md in de hoofdmap van het project.

Voeg tot slot in het bestand AGENTS.md in de projectmap de regel toe: "Lees README.md voordat je aan het project werkt. Als het doel, de status, de volgende stap of het geldige document verandert, pas README.md aan." Als AGENTS.md niet bestaat, maak het dan aan. Zorg dat je dit bestand in dit hulpmiddel aan het begin van elke sessie leest; in Cowork zet je dit in de mapinstructies.

## In uw tool

### Microsoft Copilot
Cowork vindt u naast de Chat-schakelaar; als het er niet is, vraag het aan uw IT-beheerder. Het ziet alleen bestanden op OneDrive en SharePoint, dus voeg aan het einde van de prompt toe: "Werk in de projectmap op OneDrive, houd README bij als Word-document en schrijf de regel voor Customize, Preferences." In stap 3 geeft u in een nieuwe taak aan waar het project staat. Geplande taken vindt u op de pagina Automations.

### ChatGPT
Schakel in de ChatGPT-app voor desktop over naar Codex, kies map openen (open a folder) en selecteer de projectmap. Codex leest `AGENTS.md` automatisch en maakt een geplande taak aan als u daarom vraagt; die vindt u onder Scheduled. Als u Codex niet ziet, heeft uw beheerder het waarschijnlijk uitgeschakeld, vraag hem het aan te zetten.

### Claude
Open in de Claude-desktopapp Cowork en selecteer de projectmap, of open deze in Claude Code; beide hebben betaalde abonnementen. Cowork schrijft de regel in de mapinstructies, Claude Code leest `AGENTS.md`. AI maakt een geplande taak aan als u daarom vraagt, die vindt u in het linker paneel onder Scheduled.

### Gemini
Gemini slaat niet op in mappen op de computer. Voeg documenten toe via Add from Drive, voeg aan het einde van de prompt toe: "Je hebt geen toegang tot de map, schakel me niet om en werk met de bijgevoegde documenten." en sla README op via Share & export, Export to Docs. Stap 3 doet u in Gem (Gems, New Gem) met README in Knowledge en de instructie "Beantwoord volgens README"; deel het met uw collega via Share.
## Wat is een README

[README](glossary:readme) betekent in het Engels "lees mij". Zo heet het startbestand dat iemand als eerste opent in een projectmap. Op één pagina vertelt het waar het project over gaat, wat de status is, wat de volgende stap is, welk document geldig is en waar wat te vinden is. Het helpt ook u als u na twee weken terugkomt bij het project.

De extensie `.md` betekent een [Markdown](glossary:markdown)-bestand: gewone tekst waarin hekken `#` aan het begin van een regel een kop aanduiden. Open het in elke teksteditor, bijvoorbeeld Kladblok in Windows, en AI leest en bewerkt het zonder conversie.

`AGENTS.md` is een bestand met regels voor AI in dezelfde map. Veel tools in Code-modus lezen het automatisch aan het begin van elke sessie, zodat u AI niet hoeft te herinneren om README te lezen. Waar dat niet kan, slaat AI de regel op in de instellingen van het hulpmiddel of vertelt u waar u het moet plaatsen.

README verwijst alleen naar documenten en zegt waarvoor ze dienen; als AI uit de inhoud niet herkent welk document geldig is, vraagt het u. Voor Marek zou het juiste antwoord in stap 3 `catering_final_2.docx` noemen.

Een gewone chat slaat README niet op in de map omdat die er geen toegang toe heeft. Als u nog geen andere AI hebt, maak dan ten minste een [project in chat](card:asistent) aan of kijk hoe u [overschakelt naar Cowork of Code](card:when-chat-is-not-enough).

Het woord `final` in de naam of de nieuwste datum bewijzen niet dat een document geldig is.
## Zorg dat README actueel blijft

Een geplande taak werkt README wekelijks bij op basis van vergaderingen en e-mails. De regel in `AGENTS.md` dekt het werk dat u met AI in de projectmap doet. De projectstatus verandert ook elders, bijvoorbeeld in een vergadering of e-mail. Geef AI in Cowork- of Code-modus deze opdracht en vraag het een geplande taak aan te maken:

```text
Elke vrijdag om 15:00 doorloop je de projectmap en de e-mails en vergaderingen van die week die betrekking hebben op het project en waar je toegang toe hebt. Als de status, volgende stap of het geldige document is veranderd, pas dan README.md aan: wijzig alleen de betreffende regels en de update-datum. Als er niets is veranderd, laat README dan zoals het is. Schrijf aan het einde wat je hebt aangepast.
```

Als de taak met bestanden op uw computer werkt, draait die alleen als de computer aanstaat en de app open is.
## Voorbeeld

Lucie kiest een nieuwe schoonmaakleverancier voor de vestigingen in Brno en Zlín. AI doorloopt de map en vraagt twee dingen: welk van de twee aanbiedingen van bedrijf Čistota geldt en of bedrijf Blesk nog in beeld is. Daarna schrijft het:

```text
# Keuze schoonmaakleverancier
Bijgewerkt: 9-10-2026

### Waar het om gaat
Nieuwe schoonmaakleverancier voor de vestigingen Brno en Zlín vanaf 1-1-2027.

### Waar we staan
Gebouwen zijn geïnspecteerd, twee bedrijven zijn overgebleven.
Volgende stap: Lucie regelt vóór 20-10 een gesprek met beide bedrijven.

### Wat niet bij het project hoort
Ramen wassen blijft bij het huidige bedrijf.

### Welke documenten gelden
- nabidka_cistota_v2.pdf: geldig, prijs na inspectie.
- nabidka_cistota.pdf: niet geldig, vervangen door v2.
- nabidka_uklidplus.pdf: geldig.
- porovnani-cen.xlsx: geldig, vergelijking van beide aanbiedingen.
- nabidka_blesk.pdf: niet geldig, bedrijf Blesk is uit de selectie.

### Waar wat is
Aanbiedingen in map nabidky, foto’s en notities van inspecties in map prohlidky.
```

Een week later vraagt Lucie in een nieuwe chat welke prijs van bedrijf Čistota in de vergelijking moet. Een goed antwoord neemt de prijs uit `nabidka_cistota_v2.pdf` en noemt bedrijf Blesk niet. Als AI de oude aanbieding gebruikt, zeg dan dat het de regel in README moet corrigeren.
## Als u vastloopt

- **AI zegt dat README is opgeslagen, maar het staat niet in de map:** u werkt waarschijnlijk in een gewone chat die bestanden niet kan wijzigen. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) en open daar de projectmap.
- **U weet zelf ook niet welk document geldig is:** vraag AI om te laten zien waarin de documenten verschillen. U of de projectleider beslist en AI schrijft het op.
- **README is te lang of schrijft documenten over:** vraag AI het te beperken tot één pagina en alleen links naar documenten te laten staan.
- **Nieuwe chat antwoordt op basis van oud document:** open de chat in dezelfde projectmap en controleer dat `README.md` en `AGENTS.md` er direct in staan. Vraag AI dan README te lezen.
## Wat klaar is

U hebt `README.md` waarmee iedereen zonder vragen aan het project kan verderwerken. In `AGENTS.md` staat een regel waardoor AI het leest voor het werk begint en bij wijzigingen aanpast. In een nieuwe chat hebt u geverifieerd dat AI het geldige document vindt en weet wat de volgende stap is.
## Wat nu

Wilt u zo alle projecten tegelijk op orde hebben, maak dan [PACT](card:pact-workspace) aan. Wilt u ook andere taken instellen die AI regelmatig automatisch uitvoert, kijk dan naar de [geplande taak](card:recurring-ai-task).
## Markdown

**Wat het is:** Een eenvoudig platte-tekstformaat waarin koppen, lijsten, links en andere structuren worden geschreven met een paar gewone tekens. Bestanden gebruiken meestal de extensie `.md`.

**Wat het niet is:** Het is geen programmeertaal en ook geen formaat dat uitsluitend voor ontwikkelaars bedoeld is.

**Waarom studenten het nodig hebben:** Het blijft gemakkelijk leesbaar en bewerkbaar voor zowel mensen als AI en kan worden overgedragen tussen verschillende tools.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## README / Begin hier

**Wat het is:** Een kort introductiebestand of pagina die uitlegt wat er in het project zit, wat actueel is, waar belangrijke bronnen te vinden zijn en hoe mensen of AI ermee moeten werken.

**Wat het niet is:** Het is geen kopie van alle documenten of een andere uitgebreide handleiding voor het project.

**Waarom een student het nodig heeft:** Het helpt mensen en AI snel te bepalen waar te beginnen en welke materialen actueel en bindend zijn.

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
