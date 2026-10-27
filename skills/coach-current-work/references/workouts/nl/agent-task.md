# Geef een taak aan de agent: AI maakt het zelf af

Een lange taak met veel stappen maakt de AI zelf af, bijvoorbeeld ’s nachts, en u neemt het over op basis van bewijs.

## Geef een taak aan de agent: AI maakt het zelf af

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met een map met onderliggende bestanden voor één taak.
## Waar is het goed voor

De financieel directeur moet vrijdag een overzicht krijgen welke van de zestig contracten met leveranciers in januari automatisch verlengd worden. Van elk contract wil hij ook de datum weten tot wanneer het opgezegd kan worden. Elk contract openen, het artikel over duur en opzegging vinden en de gegevens in een tabel zetten is twee middagen nauwkeurig werk.

[Agent](glossary:agent) is AI die zo’n taak zelf uitvoert, bijvoorbeeld ’s nachts, en doorgaat totdat de voorwaarden die u aan het begin afspreekt, zijn voldaan, bijvoorbeeld „elke van de 60 contracten heeft een eigen regel in de tabel“.
## Wat voorbereiden

- één taak met veel stappen waarbij u niet wilt meekijken, bijvoorbeeld contractcontrole of onderzoek,
- de onderliggende bestanden in één map,
- AI in de modus Cowork of Code; waar u die vindt, staat in het blok „In uw tool“.
## Hoe te werk gaan

1. Open AI in de modus Cowork of Code in de map met onderliggende bestanden, plak de prompt en schrijf achter de regel „Taak:“ wat de agent moet doen. AI stelt voltooiingsvoorwaarden voor; corrigeer ze en schrijf „Ja, werk“.
2. Als AI vraagt of het bestanden mag aanpassen, geef toestemming voor de hele taak, zodat het ’s nachts niet stopt. De agent werkt dan zelfstandig en schrijft aan het einde een overdrachtsbericht.
3. In het overdrachtsbericht vindt u waar het resultaat staat. Open bij elke voorwaarde het bewijs en controleer een of twee zaken met de bron; wat niet klopt, stuurt u met de voorwaarde terug naar de agent.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de modus Cowork of Code, geopend in uw map, en schrijf achter de laatste regel uw taak:

Doe voor mij een taak met veel stappen en werk er zelfstandig aan totdat het klaar is. De taak staat op de laatste regel.

Bekijk eerst de onderliggende bestanden in de map of bijlagen en stel drie tot vijf voltooiingsvoorwaarden voor, waaraan ik kan zien dat het klaar is. Elke voorwaarde moet met één blik te controleren zijn: een aantal, bestand, record of nummer dat ik met de bron kan vergelijken. Laat ze zien en wacht tot ik ze bevestig of corrigeer.

Zodra ik de voorwaarden bevestig, voeg je in het bestand AGENTS.md in de map de regel toe: „Bij elke langere taak stel je eerst drie tot vijf controleerbare voltooiingsvoorwaarden voor en laat je mij die bevestigen. Je werkt door totdat ze allemaal gelden en voegt aan het einde voor elke voorwaarde bewijs toe.“ Als AGENTS.md niet bestaat, maak het aan. Als deze tool het zelf niet leest, stel dan in dat je het aan het begin van elke taak leest; in Cowork schrijf je dat in de mapinstructies. Als je geen toegang hebt tot de map, sla de regel dan op in het geheugen; als je dat niet kunt, vertel me precies waar ik het moet plaatsen.

Werk daarna zelfstandig. Controleer na elke grotere stap de voorwaarden en ga door totdat ze allemaal gelden. Kleine beslissingen neem je zelf. Kom je een beslissing tegen die van mij is, kies dan de voorzichtigere optie, markeer die en ga door; de vraag schrijf je in het overdrachtsbericht. Stop alleen als je zonder mijn antwoord niets meer kunt doen. Als een voorwaarde niet te vervullen is, schrijf dan waarom en wat je voorstelt.

Als je klaar bent, schrijf je een overdrachtsbericht. Geef bij elke voorwaarde aan of die is voldaan en het bewijs waarmee ik dat kan controleren: het pad naar het bestand of link, nummer en pagina waar het vandaan komt, gewijzigd record of screenshot. Onder de voorwaarden schrijf je wat je zelf hebt besloten, waar je mij over vraagt en waar je onzeker over bent.

Taak:

## In uw tool

### Microsoft Copilot
Copilot Cowork zet u aan op `copilot.cloud.microsoft` met de schakelaar bovenaan naast Chat. U voegt de map met onderliggende bestanden toe met de knop + vanuit OneDrive of SharePoint, of sleept bestanden vanaf uw computer erin. Het werkt in de cloud, dus u kunt uw laptop dichtklappen; de voltooide bestanden vindt u in het paneel rechts en de regel slaat u op als skill.
Copilot heeft geen opdracht `/goal`, u bevestigt de voorwaarden met de zin „Ja, werk“.

### ChatGPT
De eenvoudigste modus is Work: die zet u aan met de schakelaar bovenaan op de website en in de ChatGPT-app voor de computer, u uploadt de onderliggende bestanden en de taak die op de website draait, gaat door ook als u de laptop dichtklapt. Het resultaat vindt u in het overdrachtsbericht in de chat. Als de onderliggende bestanden in een map op de computer staan, gebruik dan Codex in de ChatGPT-app voor de computer, waar u de voorwaarden bevestigt met de opdracht `/goal`.

### Claude
Open in de Claude-app voor de computer Cowork of Claude Code met de map met onderliggende bestanden. De taak loopt zolang de computer aanstaat en de app open is. In Claude Code bevestigt u de voorwaarden met de opdracht `/goal` en de app stuurt u een melding als de taak klaar is.

### Gemini
Gemini Agent, die een lange taak zelfstandig afmaakt, is alleen voor persoonlijke Google AI Pro- of Ultra-accounts en is niet beschikbaar in de EU. Met een zakelijk account geeft u de taak in delen op in de Gemini-app: voeg tot 10 bestanden toe via Add from Drive en plak de prompt, voeg daarna telkens tien toe en laat de tabel aanvullen. Sla de voltooide tabel op met de knop Export to Sheets en de regel als skill: schrijf „Sla dit op als skill“.
## Wat is een agent

Een agent is AI die zelf stappen voor u uitvoert: bestanden en apps opent, op basis van het resultaat de volgende stap kiest en doorgaat totdat het doel is bereikt. In de modus Cowork of Code werkt AI zo zodra u een taak geeft.

Voltooiingsvoorwaarden zijn het doel waar de agent naartoe werkt: zolang niet alle gelden, gaat hij door, en u neemt het resultaat aan op basis van die voorwaarden. Bij elke voorwaarde toont hij bewijs, zodat het overnemen een paar minuten kost. Bij een grote taak kunnen het er twintig zijn, voor een eerste taak zijn drie tot vijf voldoende. Een goede voorwaarde is met één blik te controleren: een aantal, bestand, record of nummer dat u met de bron vergelijkt. Woorden als „overzichtelijk“ of „kwalitatief“ kan de agent niet vervullen of bewijzen, herschrijf die daarom naar iets dat te tellen of openen is.

`AGENTS.md` is een gewone tekstbestand met regels voor AI in de map waarin u werkt; de extensie `.md` betekent tekst in [Markdown](glossary:markdown), een eenvoudige notatie die u in elke editor opent. AI leest het bestand aan het begin van elke taak, zodat u de volgende keer alleen de taak schrijft en AI zelf de voorwaarden voorstelt. Een tool zonder toegang tot de map slaat de regel op in het geheugen of vertelt u waar u het moet plaatsen.
## Laat de agent doorwerken tot het klaar is

Voor een taak van een hele middag of nacht is het handig een borging te hebben zodat de agent niet stopt voordat alle voorwaarden gelden. Sommige tools hebben daarvoor de opdracht `/goal`, een woord dat u aan het begin van het bericht schrijft; welke dat zijn, staat in het blok „In uw tool“. In plaats van „Ja, werk“ schrijft u `/goal` en plakt u de voorwaarden die AI voorstelde erachter. De agent begint meteen te werken, controleert na elke stap de voorwaarden en gaat door zolang niet alle gelden:

```text
/goal In de tabel contracten-verlenging.xlsx is een regel voor elk van de 60 contracten in de map Contracten. Van elk contract is de einddatum, opzegtermijn, artikelnummer waar het uit komt en de jaarprijs exclusief btw vermeld. Bovenaan staan de contracten die voor eind november opgezegd moeten worden.
```
## Voorbeeld

Petra is assistent van de financieel directeur bij een bouwbedrijf. Op donderdagmiddag 8-10-2026 krijgt ze van hem de opdracht: voor vrijdag een overzicht welke van de 60 contracten met leveranciers in januari automatisch verlengd worden. Petra opent de map Contracten in AI in de modus Cowork, plakt de prompt en schrijft achter de laatste regel:

```text
Bekijk alle 60 contracten in de map Contracten en bepaal welke in januari automatisch verlengd worden en tot wanneer ze opgezegd kunnen worden.
```

AI stelt vier voorwaarden voor. Petra voegt een vijfde toe over de jaarprijs, zodat de directeur ziet om hoeveel geld het gaat, en antwoordt „Ja, werk“:

```text
1. In de tabel contracten-verlenging.xlsx is een regel voor elk van de 60 contracten in de map Contracten.
2. Van elk contract is de einddatum, opzegtermijn en artikelnummer waar het uit komt vermeld.
3. Van elk contract is aangegeven of het automatisch verlengd wordt.
4. Bovenaan staan de contracten die voor eind november opgezegd moeten worden, gesorteerd op datum.
5. Van elk contract is de jaarprijs exclusief btw vermeld.
```

Petra laat de computer aanstaan en gaat naar huis. Vrijdagochtend vindt ze in de chat het overdrachtsbericht: 60 contracten en 60 regels in de tabel, elf contracten worden in januari automatisch verlengd en vier moeten voor 30-11 worden opgezegd. Twee contracten waren gescand en de agent markeerde gegevens daarvan ter controle. Petra opent drie gegevens in de originele contracten en alles klopt, bij één gescand contract corrigeert ze de einddatum en stuurt de tabel naar de directeur. De volgende lange taak geeft ze alleen nog met een zin, want AI stelt de voorwaarden zelf voor volgens de regel in `AGENTS.md`.
## Als u vastloopt

- **AI stopt na één antwoord of zegt dat het bestanden niet kan openen:** u werkt in een gewone chat. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) volgens het blok „In uw tool“.
- **Agent stopt voordat alle voorwaarden gelden:** schrijf welke niet is voldaan en laat hem doorgaan. Als uw tool het kan, bevestig de voorwaarden de volgende keer met de opdracht `/goal`, zoals beschreven in het blok „Laat de agent doorwerken tot het klaar is“.
- **U vindt ’s ochtends een taak halverwege gestopt:** de computer is waarschijnlijk in slaapstand gegaan of de agent wachtte op toestemming om bestanden te wijzigen. Schrijf dat hij door moet gaan en geef volgende keer toestemming voor wijzigingen voor de hele taak en laat de computer in het stopcontact.
- **Bewijs klopt niet met de bron:** schrijf aan de agent welke voorwaarde en wat niet klopt, laat het corrigeren en opnieuw bewijzen. Wilt u het hele resultaat doorlopen, dan helpt de [AI-uitvoercontrole](card:kontrola-vysledku).
## Wat klaar zal zijn

U heeft één lange taak afgerond waarbij u niet hoefde mee te kijken en u nam het over op basis van bewijs voor elke voltooiingsvoorwaarde. In `AGENTS.md` in de map, of in het geheugen van AI, staat de regel waardoor AI bij de volgende langere taak zelf voorwaarden voorstelt, doorwerkt totdat ze allemaal gelden en ze aan het einde bewijst.
## Wat nu

Als dezelfde taak elke week terugkomt, stel die dan in als [geplande taak](card:recurring-ai-task).

Als een grotere taak in delen kan worden opgesplitst die niet op elkaar wachten, start ze dan tegelijk in [parallelle threads](card:parallel-ai-workstreams).
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
