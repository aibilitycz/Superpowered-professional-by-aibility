# Controleer AI-uitvoer: cijfers en beweringen tegen de onderliggende gegevens

AI vergelijkt cijfers en beweringen in de uitvoer met de onderliggende gegevens, corrigeert fouten en slaat een regel op om herhaling te voorkomen.

## Controleer AI-uitvoer: cijfers en beweringen tegen de onderliggende gegevens

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met één AI-uitvoer en de onderliggende gegevens.
## Waar is het goed voor

Op dinsdagochtend stuur je de directeur het maandelijkse verkoopoverzicht. De commentaar op de cijfers is door AI geschreven op basis van een export en stelt dat de omzet in september met 12% is gestegen, vooral dankzij Slowakije. Tijdens de vergadering vraagt de directeur waar die 12% vandaan komt, en jij weet niet of AI de hele tabel heeft gezien of alleen het eerste blad.

Als AI elk cijfer in de onderliggende gegevens opzoekt en uitlegt waarom een fout is ontstaan, kun je de directeur precies vertellen waar die 12% vandaan komt.
## Wat je moet voorbereiden

- AI-uitvoer die je wilt doorsturen: rapport, offerte, notulen of tabel,
- onderliggende gegevens waaruit het is ontstaan: export, prijslijst, contract of vergaderverslag,
- AI die je op het werk gebruikt, of AI in [Cowork- of Code-modus](glossary:workmode).
## Hoe te werk te gaan

1. Plaats de prompt en zet onder “Uitvoer:” en “Onderliggende gegevens:” de tekst of bestandsnamen; in de chat voeg je de onderliggende gegevens toe. Als de uitvoer is gemaakt volgens een [skill](glossary:skill) of een geplande taak, vermeld dat dan onder de prompt.
2. AI geeft bevindingen terug, de gecorrigeerde uitvoer en één cruciaal cijfer met de locatie in de onderliggende gegevens. Open de onderliggende gegevens en controleer het cijfer zelf, want AI kan dezelfde fout over het hoofd zien.
3. Schrijf welke correcties je niet wilt en voeg plaatsen met `[CONTROLEREN]` toe, of laat ze doorstrepen. AI maakt de uitvoer af, slaat een regel op tegen de oorzaak van de fout en vertelt je waar.
## AI-oefening

Voer deze [prompt](glossary:prompt) in de AI in die je op het werk gebruikt:

Controleer de uitvoer die AI heeft gemaakt voordat ik die verder verstuur. De uitvoer en de onderliggende gegevens waaruit die is ontstaan staan onderaan het bericht: als tekst, als bestandsnamen in een map, of als bijlage.

Begin met te vermelden welke bestanden je hebt geladen en of volledig: hoeveel pagina’s, bladen of regels. Als je niet alles hebt, controleer wat je hebt en vertel me welke bladen of pagina’s ik apart moet sturen, omdat de uitvoer daarop gebaseerd is. Zoek dan in de uitvoer elk cijfer, prijs, datum, naam, bewering en besluit dat in de onderliggende gegevens te verifiëren is, en vergelijk ze. Loop ook de andere kant op: wat in de onderliggende gegevens staat maar ontbreekt in de uitvoer, bijvoorbeeld een item uit een aanvraag of een taak uit een vergadering. Herbereken cijfers die uit een berekening komen en toon de berekening. Corrigeer stijl en toon niet, controleer alleen of de inhoud klopt.

Geef in je eerste antwoord:
- een tabel met bevindingen: citaat uit de uitvoer, wat de onderliggende gegevens zeggen en waar precies (bestand, pagina of blad en regel zoals ik die zie bij het openen), correctie en oorzaak,
- de volledige gecorrigeerde uitvoer,
- één cijfer waarop de uitvoer het meest steunt en waar ik dat precies in de onderliggende gegevens kan vinden, zodat ik het kan verifiëren.

Kies de oorzaak uit: ontbrak onderliggende gegevens, opdracht was onduidelijk, AI begreep de onderliggende gegevens anders, niet alle onderliggende gegevens geladen of chat was te lang, onderliggende gegevens zijn verouderd, fout in berekening. Als je de oorzaak niet zeker weet, geef aan dat het een inschatting is. Wat je niet in de onderliggende gegevens vindt, verzin niet: markeer het met [CONTROLEREN] en vraag het mij.

Wacht daarna. Ik zal aangeven welke correcties ik niet wil en waar [CONTROLEREN] staat. Sla daarna de gecorrigeerde versie op in een nieuw bestand naast het origineel en geef me de naam; in de chat zonder map geef je het hele bestand terug.

Schrijf tenslotte in één zin een regel tegen de oorzaak die kan terugkeren. Als er geen terugkerende oorzaak is, neem dan de regel “Bij elk cijfer vermeld je het bestand en de pagina of het blad waar het vandaan komt.” Als ik je vertel dat de uitvoer is gemaakt volgens een skill of geplande taak, corrigeer de regel dan direct daarin. Anders sla je die op in het bestand AGENTS.md in de map waar je werkt; als die niet bestaat, maak die aan. Zorg dat je die regel in dit hulpmiddel bij elke start van werk leest; in Cowork schrijf je die in de mapinstructies. In een gewone chat zonder map sla je de regel op in het geheugen, en als dat niet kan, vertel me precies waar je die in de instellingen moet plaatsen. Vertel me waar de regel is opgeslagen.

Uitvoer:
Onderliggende gegevens:

## In jouw hulpmiddel

### Microsoft Copilot
In Copilot Chat voeg je via + tot 20 bestanden toe, elk tot 50 MB, inclusief Excel en PDF. Copilot slaat de regel op in het geheugen en toont de melding Memory updated; overzicht vind je in instellingen onder Chat settings › Personalization › Saved memories. Algemene regels voor alle chats horen in Custom instructions op dezelfde plek.

### ChatGPT
In een gewone chat voeg je onder het berichtveld de onderliggende gegevens toe via +. ChatGPT slaat de regel op in het geheugen dat je vindt in instellingen onder Personalization › Memory; algemene regels voor alle chats horen in Custom Instructions op dezelfde plek. Met een map werkt Codex, de modus in de ChatGPT-app voor desktop, die AGENTS.md leest en bestanden direct in de map opent.

### Claude
In een gewone chat slaat Claude de regel op in het geheugen. In Cowork kies je bij het aanmaken van de taak de map met uitvoer en onderliggende gegevens en AI schrijft de link naar AGENTS.md in de mapinstructies; Claude Code leest AGENTS.md zelf.

### Gemini
Voeg onderliggende gegevens toe via Add files vanaf je computer of Google Drive, maximaal 10 bestanden tegelijk tot 100 MB. Ontbrekend blad uit Google Sheets open je en download je via File › Download als CSV. Gemini heeft geen geheugen of eigen instructies in de werkaccount-app, dus laat prompt en regel opslaan als skill (zeg “Sla dit op als skill”); bij volgende controle volstaat dan uitvoer en onderliggende gegevens aanleveren.
## Waarom klopt AI-uitvoer niet

Een fout in de uitvoer heeft meestal één van zes oorzaken en elke oorzaak vraagt om een andere regel die het voortaan voorkomt:

| Oorzaak | Hoe herken je het | Regel voor de volgende keer |
|---|---|---|
| Ontbrak onderliggende gegevens | AI heeft een cijfer of belofte verzonnen, staat niet in de onderliggende gegevens | Wat AI niet in de onderliggende gegevens vindt, markeert het met `[CONTROLEREN]`. |
| Opdracht was onduidelijk | Prijzen zijn soms inclusief BTW en soms exclusief, of voor een andere periode | Prijzen zijn altijd exclusief BTW en voor de hele kalendermaand. |
| AI begreep onderliggende gegevens anders | In de uitvoer staat een besluit dat in de vergadering slechts als voorstel werd genoemd, of cijfers uit een andere kolom | Alleen wat in de onderliggende gegevens expliciet is goedgekeurd, telt als besluit. |
| Niet alle onderliggende gegevens geladen | Ontbreken laatste pagina’s PDF, tweede blad tabel of begin van lange chat | AI vermeldt aan het begin hoeveel pagina’s en bladen het heeft geladen. |
| Onderliggende gegevens zijn verouderd | In de map ligt een prijslijst van vorig jaar naast de nieuwe en AI nam de oude | Prijzen komen alleen uit de nieuwste prijslijst en de naam daarvan staat onder de uitvoer. |
| Fout in berekening | Som of percentage klopt niet bij herberekening | AI berekent elk cijfer opnieuw en toont de berekening. |

`AGENTS.md` is een gewone tekstbestand met regels voor AI in de map waar je werkt. AI in Cowork- of Code-modus leest het aan het begin van elk werk, dus hoef je de regel niet steeds te herhalen; waar het hulpmiddel het moet instellen, regelt AI dat volgens de prompt. In een gewone chat slaat AI de regel op in het geheugen.

Een skill is een opgeslagen handleiding voor AI en een geplande taak is een opdracht die AI automatisch op een ingesteld tijdstip uitvoert. Als de fout daarin is ontstaan, corrigeert AI de regel direct daar en geldt de correctie voor elke volgende uitvoer.
## Laat AI zelf controleren

Een algemene regel zorgt dat AI elke uitvoer met cijfers vergelijkt met de onderliggende gegevens voordat die aan jou wordt getoond; de regel uit de oefening controleert slechts één oorzaak. In de map schrijft AI die in `AGENTS.md`, in een gewone chat in het geheugen. Je hoeft alleen maar in te voeren:

```text
Sla een regel op voor al het werk met mij: Voordat je me een rapport, offerte, presentatie of e-mail met cijfers toont, vergelijk elk cijfer en elke bewering met de onderliggende gegevens. Zet onder de uitvoer in één zin uit welke bestanden het komt en wat niet kon worden geverifieerd. Wat niet in de onderliggende gegevens staat, markeer je met [CONTROLEREN]. In een map schrijf je de regel in AGENTS.md en zorg je dat je die in dit hulpmiddel bij elke start van werk leest; in Cowork in de mapinstructies. In een gewone chat zonder map sla je die op in het geheugen.
```
## Voorbeeld

Lucie Benešová van het bureau dat bedrijfsfeesten organiseert, stuurt op 16-10-2026 een offerte voor het kerstfeest voor 120 gasten naar het bedrijf Kovo Jihlava. De offerte is door AI gemaakt in de map `Nabidky` op basis van de aanvraag en prijslijsten. De controle levert drie bevindingen op:

| In de uitvoer | In de onderliggende gegevens | Oorzaak |
|---|---|---|
| buffet 120 × 690 Kč | `cenik-2026-10.pdf`, pagina 2: 740 Kč per persoon | onderliggende gegevens zijn verouderd, AI nam de prijslijst van vorig jaar uit dezelfde map |
| zaalhuur 18.000 Kč inclusief BTW | zelfde bestand: 18.000 Kč exclusief BTW | opdracht was onduidelijk, er stond niet of prijzen inclusief BTW moesten zijn |
| garderobe ontbreekt in de offerte | `poptavka-kovo.pdf`, pagina 3: garderobe voor 120 gasten | niet alle onderliggende gegevens geladen, AI las alleen de eerste twee pagina’s van de aanvraag |

AI herberekent het buffet op 88.800 Kč, voegt de garderobe toe volgens de prijslijst en corrigeert de totaalprijs. Lucie opent de prijslijst en controleert het buffetbedrag op pagina 2 zelf. In `AGENTS.md` in de map `Nabidky` schrijft AI:

```text
Neem prijzen alleen uit de nieuwste prijslijst in de map, vermeld bij elke prijs of die inclusief of exclusief BTW is, en zet onder de offerte de naam van de prijslijst. Lees de hele aanvraag en vermeld aan het begin hoeveel pagina’s die heeft.
```

Een volgende offerte die AI een week later in dezelfde map maakt, eindigt met de regel “Prijzen exclusief BTW volgens `cenik-2026-10.pdf`.”
## Als je vastloopt

- **AI laadt niet alle onderliggende gegevens of meldt dat het te groot is:** het vertelt welke bladen of pagina’s ontbreken. Sla elk ontbrekend blad uit Excel op als CSV via Opslaan als, dat slaat één blad op, en stuur het in dezelfde chat met het bericht “Hier zijn de ontbrekende bladen, maak de controle af.” De hele onderliggende gegevens controleert AI in [Cowork of Code](card:when-chat-is-not-enough), waar het bestand direct in de map wordt geopend.
- **Bewering heeft geen bron in jouw onderliggende gegevens:** als het om externe gegevens gaat, bijvoorbeeld een concurrentieprijs of marktgetal, laat AI de bron opzoeken op internet via [Deep Research](card:deep-research). Anders streep je de bewering in de uitvoer door.
- **Bijna de hele uitvoer is fout:** de oorzaak ligt in de opdracht of onderliggende gegevens en correctie in stukjes lost het niet op. Voeg ontbrekende onderliggende gegevens toe, schrijf de regel uit de controle bij de opdracht en laat AI de uitvoer opnieuw maken.
- **AI maakt dezelfde fout opnieuw:** vraag waar de regel is opgeslagen. In een map moet die in `AGENTS.md` staan. In een gewone chat moet geheugen aanstaan; als dat door het bedrijf is uitgeschakeld, sla de regel op volgens het blok “In jouw hulpmiddel”, of [schakel over naar Cowork of Code](card:when-chat-is-not-enough), waar AI het in `AGENTS.md` schrijft.
## Wat klaar zal zijn

Je hebt een gecorrigeerde uitvoer waarin cijfers en beweringen kloppen met de onderliggende gegevens, en bij elke gecorrigeerde fout weet je waarom die is ontstaan. Eén cijfer waarop de uitvoer het meest steunt, heb je zelf in de onderliggende gegevens geverifieerd. De regel tegen de oorzaak van de fout heeft AI opgeslagen in `AGENTS.md`, in de skill, in de taakopdracht of in het geheugen, zodat AI die bij volgende werkzaamheden zelf gebruikt.
## Wat nu verder

Als de cijfers kloppen en de tekst nog menselijk moet klinken, controleer die dan met [anti-slop](card:anti-slop), een controle van zinswendingen waaraan de lezer AI herkent. Als je hetzelfde soort uitvoer elke week controleert, maak er dan een [skill](card:create-skill-from-proven-process) van, een handleiding die AI zelf opent.
## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Vaardigheid

**Wat het is:** Een herbruikbare procedure voor een bepaald type taak. Kan instructies, regels, voorbeelden, sjablonen en andere benodigde bronnen bevatten. De manier van maken en uitvoeren verschilt per tool.

**Wat het niet is:** Het is geen algemene rol van een assistent, noch een enkele succesvolle conversatie die ongewijzigd is opgeslagen.

**Waarom de student het nodig heeft:** Helpt een bewezen werkwijze om te zetten in een stabiele vorm die consequent opnieuw kan worden gebruikt.

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

## Opslaan voor de volgende keer

Optionele productmechaniek na het ontstaan van een bruikbare output. Geen aparte kaart, heeft geen eigen voltooiing en verhoogt het aantal voltooide methoden niet.

## Wanneer wordt het aangeboden
- de gebruiker heeft de output als bruikbaar gemarkeerd,
- tijdens het werk is een verbeterde instructie, stijl, beslisboom, handoff of ander herhaalbaar element ontstaan,
- hetzelfde type werk zal waarschijnlijk terugkeren.

De mechaniek verschijnt niet bij een eenmalig resultaat zonder overdraagbaar onderdeel of waar veilige opslag niet duidelijk is.

## Wat de gebruiker ziet
Een korte optie **Opslaan voor de volgende keer** naast de algemene check-in. Na openen stelt AI zelf voor:

- wat uit de output herhaaldelijk geldt,
- wat elke keer zal veranderen,
- wat de gebruiker bij volgend gebruik moet controleren.

De gebruiker bevestigt of corrigeert het voorstel alleen. De mechaniek creëert geen extra verplicht formulier.

## Wat AI creëert
De kleinst mogelijke herbruikbare output die overeenkomt met het werk:

- een korte persoonlijke voorkeur,
- instructie of prompt,
- notitie in Markdown of second brain,
- project- of assistentupdate,
- basis voor skill,
- wijziging van een bestaand workflow.

Als er al een geschikt artefact bestaat, werkt AI de actuele versie bij in plaats van een nieuwe kopie te maken.

## Waar de inhoud hoort
| Inhoudstype | Standaardlocatie |
|---|---|
| Kleine persoonlijke voorkeur zonder processtappen | geheugen of profiel, als deze functie beschikbaar en geschikt is |
| Canonieke instructie, voorbeeld of procedurebeschrijving | Markdown, document of persoonlijk second brain |
| Context beperkt tot één project | projectinstructies en bestanden |
| Herhaalde rol met vaste context | assistent |
| Stabiele procedure met regels, voorbeelden en sjablonen | skill |
| Meerdere opeenvolgende stappen | workflow; bij keuze van stappen en acties eventueel agentvertakking |

Geheugen is geen canonieke opslag voor versiebeheer van procedures. Kan voorkeur of link naar actuele bron bewaren.

## Als de doelvorm niet duidelijk is
De mechaniek maakt een korte handoff naar de kaart [Start een project in jouw AI-tool](card:asistent). Selecteert geen vorm zonder gebruiker en vervangt geen aparte skillkaart.

## Veiligheid en delen
- Mechaniek gebruikt bekende goedgekeurde opslag en bedrijfsregels.
- Gegevens van specifieke gevallen worden gescheiden van stabiele delen.
- Zonder toestemming schrijft het niets in gedeelde systemen of wijzigt toegangen.
- Teamdeling start pas na herhaald gebruik, toewijzing van eigenaar en verificatie door een andere persoon.

## Registratie
Er kan informatie worden toegevoegd aan de check-in dat een herbruikbaar artefact is gemaakt of gewijzigd. Dit is geen aparte voltooiing van de kaart.

## Eerste ondersteunde kaarten
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
