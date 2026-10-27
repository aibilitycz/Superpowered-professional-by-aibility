# Schakel het model om per taak: snel voor sorteren, krachtig voor beslissen

Vergelijk bij twee taken een snel en een krachtig model en laat AI onthouden welk model voor welke taak te gebruiken.

## Schakel het model om per taak: snel voor sorteren, krachtig voor beslissen

**Moeilijkheidsgraad: gemakkelijk.**\
**Tijd: ongeveer 15 minuten** met twee taken van deze week.
## Waarvoor is het geschikt

De klant wil voor vrijdag weten of zijn opdracht voor eind november klaar is. Je geeft AI een tabel met teamcapaciteiten en binnen enkele seconden krijg je het antwoord dat het lukt. AI heeft echter gemist dat twee teamleden in november vakantie hebben, omdat het op het standaardmodel draaide en jij niet wist dat je kon wisselen.

Een snel model is voldoende voor sorteren en herschrijven, en als je beslissingen aan een krachtig model met langere verwerkingstijd overlaat, merkt het eerder voorwaarden op die het snelle model overslaat.
## Wat je moet voorbereiden

- een bulktaak van deze week, bijvoorbeeld 30 tot 50 taken uit vergaderingen of vragen om te sorteren,
- één beslissing, bijvoorbeeld een keuze uit drie aanbiedingen op prijs, termijn en voorwaarden,
- onderlagen voor beide taken,
- AI die je op het werk gebruikt, of AI in [Cowork- of Code-modus](glossary:workmode).
## Hoe te werk te gaan

1. Kies in het modelmenu de snelste instelling; waar die staat, zie je in het blok In jouw tool. Plak de prompt en schrijf in de laatste twee regels elke taak in één zin.
2. Schakel over naar de krachtigste instelling en schrijf „Tweede ronde“, in Cowork of Code in een nieuw gesprek „Tweede ronde volgens `ulohy.md`“. AI maakt de taken opnieuw en vergelijkt de rondes.
3. Kies bij elke taak het resultaat dat je zou gebruiken. AI schrijft op basis daarvan een overzicht welk model waarvoor geschikt is en slaat een regel op om je voortaan te vertellen wanneer te wisselen.
## AI-oefening

Plak deze [prompt](glossary:prompt) in de AI die je op het werk gebruikt:

We vergelijken hoe twee van mijn werkopdrachten een snel en een krachtig model afhandelen. De taken staan op de laatste twee regels, de onderlagen vind je in de map waar je werkt of in de bijlagen. Als je niet direct in de map op mijn computer werkt, maak dan geen bestanden aan en laat alles in de chat.

Eerste ronde:
- Schrijf op welk model en welke denk-instelling je gebruikt. Als je het niet zeker weet, vraag het mij.
- Maak beide taken volledig. Vraag ontbrekende onderlagen op.
- Noteer bij elke taak aan het begin en einde de actuele tijd en hoe lang het duurde. Als dat niet kan, schrijf „niet gemeten“ en vraag mij bij de vergelijking hoe lang ik ongeveer op elke ronde heb gewacht.
- Sla de opdracht van beide taken en de rest van deze prompt vanaf „Tweede ronde“ op in het bestand ulohy.md. Sla de resultaten op in porovnani-modelu.md onder een kop met de naam van het model en de denk-instelling.

Ik start de tweede ronde met het bericht „Tweede ronde“ op een sterkere instelling:
- Als je op hetzelfde model en instelling draait als in de eerste ronde, waarschuw mij om te wisselen.
- Neem de taken uit ulohy.md of uit de eerste ronde hoger in de chat en maak ze opnieuw vanaf het begin zoals in de eerste ronde. Gebruik de resultaten van de eerste ronde niet; open porovnani-modelu.md pas als je eigen resultaten hebt en voeg ze toe onder een nieuwe kop.
- Vergelijk beide rondes. Toon per taak maximaal drie verschillen die aangeven of het resultaat bruikbaar is en hoe lang elke ronde duurde. Een langere tekst of langere wachttijd betekent niet automatisch een beter resultaat.
- Vraag mij welk resultaat ik bij welke taak gebruik en markeer dat in porovnani-modelu.md als gekozen.

Maak tenslotte op mijn keuze een bestand modely.md met een overzicht: type werk, model en denk-instelling en één zin waarom. Voeg onderaan het overzicht de regel toe: „Voltooide beslissing of analyse wordt vóór gebruik door een ander model gecontroleerd.“ Voeg in het bestand AGENTS.md in dezelfde map de regel toe: „Voordat je een taak start, kijk in modely.md. Als er een ander model of andere denk-instelling geschikt is dan waarmee je werkt, vertel het mij dan in één zin direct aan het begin.“ Als AGENTS.md niet bestaat, maak het aan. Zorg dat je het in deze tool bij elke taak aan het begin leest; in Cowork schrijf je het in de mapinstructies. Als je niet in een map werkt, sla het overzicht en de regel op in het geheugen, en als je geen geheugen hebt, schrijf het overzicht in de chat.

Bulktaak:
Beslissing of analyse:

## In jouw tool

### Microsoft Copilot
In Copilot Chat staat de keuze rechtsboven: in de eerste ronde Quick response, in de tweede Think deeper, en antwoord zo ook als AI vraagt op welk model het draait. Je kunt in Copilot Chat geen ander model kiezen, je vergelijkt de denkduur. Copilot slaat het overzicht op in het geheugen (melding Memory updated), zonder geheugen plak je het in Custom instructions onder Chat settings › Personalization.

### ChatGPT
De keuze staat op de website in het berichtveld, op mobiel bovenin het gesprek: in de eerste ronde Instant, in de tweede de hoogste graad die je hebt (High of Extra High), op een gratis account de optie Think. ChatGPT slaat het overzicht op in het geheugen (Personalization › Memory), zonder dat plak je het in Custom Instructions. In Codex staat de keuze onder het berichtveld.

### Claude
De modelkeuze staat naast de verzendknop: snel is bijvoorbeeld Haiku, krachtiger Sonnet en het krachtigst Opus. Bij Effort stel je de denkintensiteit in van Low tot Max. In Claude Code wissel je model met het commando `/model` en denkintensiteit met `/effort`.

### Gemini
Klik onderin het berichtveld op de modelnaam: in de eerste ronde kies je Flash of Flash-Lite, in de tweede Pro en direct daarna de denkintensiteit High; waar de opties Fast, Thinking en Pro heten, kies je Fast en daarna Pro. De Gemini-app heeft geen geheugen bij een werkaccount, dus plak het overzicht met regel in de instructies van Gem (Gems › New Gem) en geef taken daarin op.
## Wat is model en denken

[Model](glossary:ai-model) is de AI die je antwoordt, en elke app biedt er meerdere aan. [Denken](glossary:reasoning-mode) is de instelling hoe lang het model een taak analyseert voordat het antwoordt; in het Engels heet dat afhankelijk van de app thinking, reasoning of effort. Een snel model met korte denkduur is genoeg voor bulkwerk en antwoordt direct. Een krachtig model met langere denkduur is nuttig voor beslissingen en zware analyses, maar reageert langzamer, dus wil je het niet voor alles gebruiken. Je schakelt beide in het modelmenu; waar dat in welke tool zit, lees je in het blok „In jouw tool“.

`ulohy.md`, `porovnani-modelu.md` en `modely.md` zijn gewone tekstbestanden in de map met onderlagen, open ze bijvoorbeeld in Kladblok. `AGENTS.md` is een bestand met regels voor AI in dezelfde map. AI in Cowork- of Code-modus leest het aan het begin van elke taak, en waar de tool dat moet instellen, regelt AI dat volgens de prompt, dus hoef je de regel over modelkeuze niet steeds te herhalen.
## Laat het resultaat door een ander model controleren

Laat een beslissing die je gaat gebruiken vóór gebruik controleren door een ander model dan dat het schreef. Elk model mist iets anders, dus het tweede vindt vaak wat het eerste oversloeg. Het werkt het beste met AI van een ander bedrijf dan die de beslissing maakte. Open die in Cowork- of Code-modus in dezelfde map, voeg onderlagen toe in een gewone chat en plak de beslissing in het bericht onder de opdracht. Heb je maar één AI, kies dan een ander krachtig model daarin, en als je dat ook niet hebt, vraag dan controle in een nieuw gesprek met dezelfde instelling als in de tweede ronde. Opdracht voor controle:

```text
Controleer de gekozen beslissing (in porovnani-modelu.md, hoger in deze chat of in de bijlage) aan de hand van de onderlagen. Vind voorwaarden die de auteur over het hoofd zag, beweringen die niet door de onderlagen worden ondersteund, en cijfers die niet kloppen. Schrijf bij elke bevinding waar die in de onderlagen staat en stel een correctie voor. Als de beslissing klopt, schrijf dat in één zin.
```

De regel onderaan het overzicht in modely.md herinnert je aan controle bij volgende beslissingen.
## Voorbeeld

Lenka leidt de operatie van een kleine webshop met cosmetica. Op maandag 5-10-2026 opent ze AI in de map Transport en geeft twee taken: 48 klantvragen van vorige week sorteren op klachten, transport en betalingen en kiezen uit drie aanbiedingen van een nieuwe vervoerder.

In de eerste ronde op het snelste model met korte denkduur sorteert AI de vragen in een minuut en raadt als vervoerder de goedkoopste aan. In de tweede ronde op het krachtigste model met lange denkduur sorteert het de vragen hetzelfde, maar duurt het vier minuten. Bij de vervoerders merkt het echter dat de goedkoopste een boete rekent als de webshop minder dan 200 pakketten per maand verstuurt, en Lenka verstuurt er 120. Daarom raadt het de op één na goedkoopste aan.

Lenka kiest het sorteren uit de eerste ronde en de vervoerder uit de tweede. AI schrijft in `modely.md`:

```text
### Welk model voor wat
- Sorteren en herschrijven (vragen, lijsten, tabellen): snel model, korte denkduur. Resultaat gelijk aan krachtig model, klaar in een minuut.
- Keuze uit aanbiedingen en contracten: krachtigste model, lange denkduur. Het snelle model miste de boete in de vervoersvoorwaarden.
- Voltooide beslissing of analyse wordt vóór gebruik door een ander model gecontroleerd.
```

Een week later geeft Lenka op het krachtigste model het herschrijven van de prijslijst in een tabel op. AI schrijft meteen aan het begin dat hiervoor een snel model volstaat.
## Als je vastloopt

- **Je hebt geen krachtiger model of langere denkduur in het menu:** in de gratis versie is er vaak alleen een keuze voor langere denkduur; zet die aan voor de tweede ronde. In een zakelijk account kan de beheerder modellen verbergen; vraag toegang tot een krachtiger model.
- **AI weet in de tweede ronde niet wat te doen:** open in Cowork- of Code-modus een nieuw gesprek in dezelfde map en schrijf „Tweede ronde volgens `ulohy.md`“. In een gewone chat blijf je in hetzelfde gesprek en schakel je alleen het model om.
- **Beide modellen maken dezelfde fout:** dan zit de fout waarschijnlijk in de opdracht of onderlagen. Hoe die te vinden, zie je op de kaart [Controleer AI-uitvoer](card:kontrola-vysledku).
- **AI herinnert je niet aan iets:** controleer dat `AGENTS.md` in de map ligt en de regel erin staat. Controleer in een gewone chat in de instellingen of je geheugen aanstaat. Als het bedrijf het uit heeft gezet, [schakel dan over naar Cowork of Code](card:when-chat-is-not-enough).
## Wat klaar is

Je hebt twee taken van deze week afgerond met bij elke het gekozen resultaat. Je weet waar je in je app het model en de denkduur kunt wisselen en hebt een overzicht welk model voor welk werk geschikt is. In Cowork of Code ligt het overzicht in `modely.md` en de regel in `AGENTS.md`, zodat AI je bij het starten van een taak vertelt als het op een ongeschikt model draait. In een gewone chat heeft AI het overzicht en de regel in het geheugen.
## Wat nu

Controleer het resultaat van het krachtige model vóór verzending [tegen de onderlagen](card:kontrola-vysledku). Als de beslissing bronnen van internet nodig heeft die niet in de map staan, geef dan [Deep Research](card:deep-research) op.
## AI-model

**Wat het is:** Een systeem dat invoer verwerkt en een antwoord genereert. Eén AI-tool kan meerdere modellen aanbieden of de keuze daarvan verbergen achter modussenamen.

**Wat het niet is:** Het is niet de volledige AI-tool en geen garantie voor een bepaalde kwaliteit van het resultaat.

**Waarom de student het nodig heeft:** Het helpt om de capaciteiten van het model te scheiden van de context, de opdracht, beschikbare tools en de omgeving waarin het model draait.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Modus voor dieper redeneren

**Wat het is:** Een optie waarbij AI meer rekentijd besteedt aan het analyseren van een taak voordat een antwoord wordt gegenereerd. De specifieke uitvoering en naam hangen af van het product.

**Wat het niet is:** Het is geen automatische garantie voor juistheid en niet altijd de beste keuze voor elke taak.

**Waarom de student het nodig heeft:** Het helpt te bepalen wanneer de complexiteit of het belang van een taak een langere wachttijd, hoger verbruik of beperkte beschikbaarheid rechtvaardigt.

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
