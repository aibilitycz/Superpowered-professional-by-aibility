# Gebruik vibe coding: AI bouwt een tool voor je collega’s

Collega’s berekenen zelf de prijs van een offerte in een kleine tool die AI voor je maakt op basis van jouw spreadsheet.

## Gebruik vibe coding: AI bouwt een tool voor je collega’s

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met prijslijst en één afgerond voorbeeld.
## Waar is het goed voor

Collega’s van sales bellen je meerdere keren per week om de prijs van een offerte te berekenen.
Jij bent de enige die de prijslijst en formules in de spreadsheet beheerst. Vorige week was je op vakantie en een collega stuurde de klant een prijs zonder weekendtoeslag.

Met [vibe coding](glossary:vibe-coding), oftewel programmeren door beschrijving, beschrijf je alleen wat er berekend moet worden, en AI schrijft een tool waarin de collega het aantal gasten invoert en direct de prijs met uitsplitsing ziet.
## Wat je moet voorbereiden

- de prijslijst die collega’s gebruiken om te rekenen, in een gedeelde map die je ook op je computer hebt,
- in dezelfde map een afgerond voorbeeld met het juiste resultaat, bijvoorbeeld een verzonden offerte,
- een collega die de tool als eerste test,
- AI in de Cowork- of Code-modus; waar je die vindt, zie je in het blok “In jouw tool”.
## Hoe pak je het aan

1. Open AI in de Cowork- of Code-modus in de gedeelde map met de prijslijst en plak de prompt. Vul op de laatste regel in wat de tool moet berekenen, wie hem gaat gebruiken en waar het afgeronde voorbeeld staat.
2. AI slaat de tool op als `kalkulacka.html`. Open die met een dubbele klik, voer het afgeronde voorbeeld in en vergelijk het resultaat; wat niet klopt of niet werkt, schrijf je aan AI en laat het corrigeren.
3. Vertel je collega waar hij `kalkulacka.html` in de gedeelde map kan vinden, zodat hij zijn eerstvolgende case kan berekenen. Wat niet lukte, stuur je in zijn woorden naar AI.
## AI oefening

Plak deze [prompt](glossary:prompt) in AI in de Cowork- of Code-modus,
geopend in jouw map met de prijslijst, en vul op de laatste regel in wat de tool moet berekenen, wie hem gaat gebruiken en in welk bestand het afgeronde voorbeeld staat. Hoe zo’n regel eruitziet, zie je in het Voorbeeld.

Bouw een kleine tool van een berekening die collega’s herhaaldelijk handmatig in een spreadsheet doen, zodat ze die zelf kunnen openen. Wat hij moet berekenen, wie hem gebruikt en in welk bestand het afgeronde voorbeeld met het juiste resultaat staat, vind je op de laatste regel. Als je niet direct in de map met de prijslijst werkt, zeg dat dan meteen.

Bekijk de prijslijst of spreadsheet in de map en haal daar alle rekenregels uit: prijzen, toeslagen, kortingen, afrondingen en voorwaarden. Als je een regel niet herkent uit de formules in de spreadsheet of als de gegevens tegenstrijdig zijn, vraag het mij en laat het zien aan de hand van een voorbeeld.

Sla de tool op in één bestand kalkulacka.html in dezelfde map als de prijslijst. Hij moet met een dubbele klik openen in een gewone browser zonder installatie en zonder internet, dus stop de prijslijst direct in het bestand. Bovenaan komen velden die de collega invult, daaronder het resultaat met een uitsplitsing waaruit blijkt hoe het getal is berekend, en een knop die de uitsplitsing kopieert zodat de collega die in een e-mail of offerte kan plakken. Gebruik termen die collega’s zelf gebruiken. Als een veld leeg blijft of onzin bevat, moet de tool duidelijk aangeven wat er moet worden aangepast.

Bereken in de tool het afgeronde voorbeeld en vergelijk het resultaat met het juiste. Als ze verschillen, vind dan de regel die verkeerd rekent, corrigeer die en vergelijk opnieuw. Schrijf me daarna waar ik kalkulacka.html kan vinden en wat ik moet invoeren om het resultaat zelf te controleren.

Schrijf de rekenregels in gewone woorden in het bestand kalkulacka-pravidla.md in dezelfde map, inclusief de datum van de prijslijst en het afgeronde voorbeeld waarmee je de tool hebt getest. Voeg in het bestand AGENTS.md in deze map de regel toe: “Als de prijslijst of rekenregels veranderen, pas dan kalkulacka.html en kalkulacka-pravidla.md aan. Bereken daarna het afgeronde voorbeeld met de nieuwe prijslijst en schrijf hoeveel en door welke items het resultaat afwijkt van het oorspronkelijke.” Als AGENTS.md niet bestaat, maak het aan. Zorg dat je AGENTS.md leest bij het begin van elk werk in deze map; in Cowork schrijf je dat in de mapinstructies.

Wat de tool moet berekenen, wie hem gebruikt en in welk bestand het afgeronde voorbeeld staat:

## In jouw tool

### Microsoft Copilot
Copilot Cowork op `copilot.cloud.microsoft` slaat nieuwe bestanden op in zijn eigen Cowork-map op OneDrive, niet in jouw gedeelde map. Voeg de prijslijst en het afgeronde voorbeeld toe met de + knop, plak de prompt en schrijf erbij: “Bouw een rekenblad als Excel-bestand, je hoeft niet in de map te werken.” Verplaats het bestand naar de gedeelde map en stuur collega’s de link; Copilot slaat de regel op als skill.

### ChatGPT
De Code-modus is in ChatGPT Codex in de ChatGPT-app voor desktop: kies Codex en open de gedeelde map met de prijslijst (open a folder). Codex slaat `kalkulacka.html` direct daarin op en schrijft de regel in `AGENTS.md`.

### Claude
Open in de Claude-desktopapp Cowork of Claude Code met de gedeelde map met de prijslijst. AI slaat `kalkulacka.html` direct daarin op; in Cowork schrijft hij de regel in de mapinstructies.

### Gemini
De tool bouwt Gemini in Canvas: kies in de Gemini-app onder + Canvas, voeg de prijslijst en het afgeronde voorbeeld toe en plak de prompt. Als hij zegt dat hij niet in een map werkt, antwoord dan “ga door in Canvas” en test het voorbeeld in de preview. Stuur collega’s de tool via Share & export en Share; wie de link heeft, ziet ook de prijslijst. Na een prijswijziging schrijf je in dezelfde chat dat de tool moet worden aangepast.
## Wat is vibe coding

Vibe coding is de Engelse term voor programmeren door beschrijving: AI schrijft de code en jij stuurt met gewone zinnen aan. Jij beschrijft wat de tool moet berekenen, AI schrijft de code en jij test de tool met een voorbeeld waarvan je het juiste resultaat kent.
Je hoeft niet te programmeren en de tool doet alleen berekeningen, dus verandert er niets in de spreadsheet of bedrijfssoftware.
Het is geschikt voor alles wat steeds volgens dezelfde regels wordt berekend: de prijs van een offerte uit een prijslijst, reiskostenvergoeding, budget voor een bedrijfsfeest of het aantal mensen op een dienst. In de tool komen alleen de velden die collega’s echt invullen en het resultaat dat ze moeten doorgeven; extra functies voeg je toe als iemand erom vraagt.

De tool uit deze kaart is één webpagina die rekent. Het bestand `kalkulacka.html` opent in een browser als elke andere pagina, maar de collega heeft er geen internet of AI voor nodig. Een gewone chat schrijft ook een tool, maar slaat die niet in de map op en past hem niet aan na een prijslijstwijziging.

In tegenstelling tot de pagina uit de kaart [Stuur een link in plaats van een bijlage](card:web-page-output), die iedereen dezelfde inhoud toont, voert de collega in deze tool zijn eigen cijfers in en krijgt zijn eigen resultaat. Als je één antwoord uit de data alleen voor jezelf wilt, kun je [je data bevragen](card:prace-s-daty).

Zolang de tool alleen rekent met een kopie van de prijslijst en de collega het resultaat zelf leest, kun je hem meteen aan collega’s geven; als hij moet schrijven in bedrijfssoftware, bijvoorbeeld CRM met klanten, of als klanten hem direct moeten openen, overleg dan eerst met de beheerder van dat systeem.

`kalkulacka-pravidla.md` en `AGENTS.md` zijn gewone tekstbestanden die AI zelf schrijft en die je niet hoeft te openen. In `AGENTS.md` staan regels voor AI in de gedeelde map en AI leest die bij het begin van elk werk.
## Zorg dat de tool bijblijft met de prijslijst

De regel in `AGENTS.md` zorgt ervoor dat AI na elke wijziging van de prijslijst de tool en de geschreven regels aanpast en laat zien hoe de prijs van het afgeronde voorbeeld is veranderd. Als er vanaf januari een nieuwe prijslijst geldt, sla die dan in dezelfde map op en schrijf:

```text
Vanaf 1-1 geldt de nieuwe prijslijst cenik-2027.xlsx. Pas de calculator aan en vertel me welke prijzen zijn veranderd.
```

Omdat de tool in de gedeelde map staat, openen collega’s na de aanpassing direct de nieuwe versie en hoef je niets te versturen.
## Voorbeeld

Petra is salesassistent bij een cateringbedrijf in Brno. De prijs van een buffet berekenen de verkopers in een spreadsheet: menu per persoon, één ober per 20 gasten, op zaterdag en zondag een toeslag van 15% en vervoer 30 CZK per kilometer heen en terug. Op 13-10-2026 opent AI in Cowork-modus in de gedeelde map Offertes, waar `cenik-2026.xlsx` en de offerte liggen die vorige week door de boekhouding naar een kantoor in Boskovice is gestuurd: buffet voor 80 gasten op zaterdag 24-10, 42 km van Brno, 52.200 CZK exclusief btw. Ze plakt de prompt en vult op de laatste regel in:

```text
Prijs buffet uit cenik-2026.xlsx voor verkopers die die telefonisch aan klanten doorgeven. Het afgeronde voorbeeld is nabidka-boskovice.pdf.
```

De eerste keer toont de calculator 52.578 CZK. Bij vergelijking ontdekt AI dat de weekendtoeslag ook over het vervoer wordt berekend, corrigeert dat en krijgt hetzelfde bedrag als in de offerte. Petra opent de tool, voert hetzelfde buffet in en kopieert met een knop de uitsplitsing:

```text
Buffet Standard, 80 gasten × 450 CZK: 36.000 CZK
Bediening, 4 obers × 1.800 CZK: 7.200 CZK
Toeslag zaterdag 15%: 6.480 CZK
Vervoer 42 km heen en terug: 2.520 CZK
Totaal exclusief btw: 52.200 CZK
```

Daarna schrijft ze aan Ondřej dat hij in de calculator in de map Offertes de bruiloft moet berekenen waar hij mee bezig is. Ondřej antwoordt dat hij niet wist of hij alleen de kilometers heen of heen en terug moest invoeren. Petra stuurt zijn zin naar AI en het veld heet nu “Afstand vanaf Brno, enkele reis (km)”.
## Als je vastloopt

- **AI zegt dat de tool is opgeslagen, maar hij staat niet in de map:** je werkt waarschijnlijk in een gewone chat die geen bestanden kan opslaan. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) en open daarin de gedeelde map met de prijslijst.
- **AI vraagt naar een regel die je zelf niet kent:** vraag haar het formule uit de spreadsheet te tonen waaruit ze de regel afleidt en één voorbeeld te berekenen volgens die regel. Als je het dan nog niet weet, vraag een collega die het vaakst met de spreadsheet rekent.
- **Collega ziet code in plaats van de tool of opent hem niet:** laat hem `kalkulacka.html` downloaden naar zijn computer en openen met een dubbele klik, niet via de OneDrive- of Teams-webpagina. Je kunt collega’s ook een link sturen: vraag AI om van de tool een pagina met gedeelde link te maken en deel die alleen met mensen binnen het bedrijf zoals in de kaart [Stuur een link in plaats van een bijlage](card:web-page-output).
- **De tool rekent anders dan de spreadsheet:** vertel AI wat je invoerde, wat de tool liet zien en wat het juiste resultaat is. AI vindt de fout in de regel en corrigeert die in de tool en in `kalkulacka-pravidla.md`.
## Wat klaar zal zijn

In de gedeelde map staat de tool `kalkulacka.html` die het afgeronde voorbeeld net zo berekent als jouw spreadsheet, en de eerste collega weet waar hij hem vindt. Daarnaast ligt `kalkulacka-pravidla.md` met de rekenregels en in `AGENTS.md` een regel waarmee AI na een prijslijstwijziging de tool aanpast en laat zien hoe de prijs van het afgeronde voorbeeld is veranderd. Zo geef je een prijslijstwijziging met één zin door.
## Wat nu

Voordat je de tool aan het hele team geeft, laat AI meerdere resultaten vergelijken met de spreadsheet, zoals getoond in [AI outputcontrole](card:kontrola-vysledku). Als meerdere mensen in het team tools met AI gaan bouwen, stel dan gezamenlijke [regels voor AI](card:pravidla-pro-tym) op.
## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Vibe coding

**Wat het is:** Een methode voor het maken van een website, applicatie, script of andere software-output waarbij een mens de intentie en het gewenste gedrag beschrijft en AI de code creëert of aanpast. De mens test en corrigeert het resultaat continu.

**Wat het niet is:** Het is geen zelfstandige programmeertaal en garandeert niet dat de gegenereerde code correct, veilig of klaar voor productie is.

**Waarom de student het nodig heeft:** Het helpt om een beschikbare weg naar een eigen prototype te benoemen en tegelijkertijd een snel experiment te onderscheiden van een oplossing die testen en deskundige controle vereist.

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
