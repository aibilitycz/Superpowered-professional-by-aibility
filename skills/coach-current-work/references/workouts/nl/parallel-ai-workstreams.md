# Verdeel werk in parallelle threads: AI doet alle delen tegelijk

Groter werk is sneller klaar omdat AI het opsplitst in stukken die elk in een eigen thread tegelijk draaien.

## Verdeel werk in parallelle threads: AI doet alle delen tegelijk

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** bij groter werk, threads draaien daarna zelfstandig.
## Waarvoor is het nuttig

Op donderdag presenteert u aan het management een kwartaaloverzicht: cijfers uit export, klachten van klanten en nieuws bij concurrenten. Eén AI zou de delen één voor één doen, terwijl ze onafhankelijk zijn en tegelijk kunnen draaien.

Helpen doen [parallelle threads](glossary:parallel-ai-workstreams): elk stuk krijgt een eigen thread, dus een aparte chat met eigen opdracht, en ze draaien allemaal tegelijk. Aan het einde vergelijkt de eerste thread, de coördinator, de resultaten en bereidt beslispunten voor.
## Wat voorbereiden

- één groter werkstuk met minstens twee delen die niet op elkaar wachten,
- de onderlagen in één map,
- AI in de Cowork- of Code-modus; waar te vinden, staat in het blok „In uw tool“.
## Hoe te doen

1. Laat AI het werk opdelen in delen die niet op elkaar wachten. Open AI in de map met onderlagen, plak de prompt en schrijf wat nodig is. Bevestig de verdeling.
2. Start alle threads tegelijk. AI start ze zelf, of schrijft voor elk stuk een zin; die plakt u in een nieuwe thread in dezelfde map. Als de thread iets vraagt, antwoord dan.
3. Beslis over open punten uit de vergelijking. Als de threads klaar zijn, schrijf "klaar" in de eerste thread. AI toont tegenstrijdigheden en na uw beslissing voegt het de resultaten samen.

Elke thread schrijft alleen in zijn eigen map.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in Cowork- of Code-modus, geopend in uw map, en schrijf achter de laatste regel wat er gedaan moet worden:

Help me groter werk sneller te doen: verdeel het in stukken die tegelijk draaien, elk in een eigen thread. Jij bent de coördinator. Het werk staat op de laatste regel.

Bekijk de onderlagen in de map en stel twee tot vijf stukken voor. Schrijf bij elk in één zin waarom het kan eindigen zonder de uitkomst van de anderen te kennen. Wat van een ander stuk afhangt, laat je in één stuk samen, of zet je pas aan het einde bij het samenvoegen. Laat me de verdeling zien en wacht op mijn bevestiging of correctie.

Voor elk bevestigd stuk maak je een map threads/01-naam, threads/02-naam enzovoort, met daarin een bestand opdracht.md. De opdracht bevat: doel van het stuk, welke onderlagen het gebruikt, twee tot drie voorwaarden waaraan ik zie dat het klaar is, en de instructie “Schrijf alleen in deze map, verander niets anders. Sla aan het einde hier resultaat.md op: wat klaar is, wat niet klopt en waar je vragen over hebt.” In threads/vergelijking.md schrijf je een lijst van stukken en hun status.

Sla in het bestand AGENTS.md in de map de regel op: “Als je werk krijgt met minstens twee stukken die niet op elkaar wachten, stel dan een verdeling in parallelle threads voor. Elke thread heeft eigen opdracht en eigen map; nooit schrijven twee threads in dezelfde map. Als je stukken als subagenten start, start er maximaal tien tegelijk en geef me voor de volgende batch een korte status van wat terugkwam. Vergelijk aan het einde de resultaten naast elkaar en geef open punten aan mij voor beslissing.” Als AGENTS.md niet bestaat, maak het aan. Als deze tool het niet zelf leest, stel dan in dat je het bij elke start leest; in Cowork schrijf dat in de mapinstructies. Als je geen toegang hebt tot de map, onthoud de regel; als je dat niet kunt, vertel me precies waar ik het moet plaatsen.

Start daarna de stukken tegelijk als aparte threads die ik kan zien en waarin ik kan schrijven. Als je een thread zelf kunt starten of aanbieden, doe dat. Anders schrijf je voor elk stuk één zin die ik in een nieuwe thread in dezelfde map plak, bijvoorbeeld “Maak opdracht uit bestand threads/01-cijfers/opdracht.md.” Als je niet met mappen kunt werken, schrijf dan de hele opdracht in plaats van de zin en ik plak de resultaten terug.

Als ik “klaar” schrijf, lees je alle bestanden resultaat.md en outputs of resultaten die ik geef naast elkaar. Schrijf in threads/vergelijking.md per stuk of het aan de voorwaarden voldoet, waar resultaten tegenstrijdig zijn of iets ontbreekt, en open punten waar ik over beslis. Los tegenstrijdigheden niet op door compromis, toon beide kanten. Na mijn beslissing voeg je de outputs samen in één resultaat in het formaat dat ik nodig heb (bijvoorbeeld Word of presentatie) en sla je het op in de map; als ik het formaat niet zeg, vraag dan.

Werk:

## In uw tool

### Microsoft Copilot
Copilot Cowork zet u aan op `copilot.cloud.microsoft` met de schakelaar bovenaan naast Chat en voegt onderlagen toe met +. Nieuwe taak ziet niet wat een ander schreef, dus schrijf onder uw taak “Schrijf de opdracht volledig uit.” Voeg elke toe in een nieuwe taak met onderlagen die u benoemt; resultaten plakt u met “klaar” in de eerste taak die u opnieuw opent onder Tasks. De regel slaat het op als skill, dus als opgeslagen instructie.

### ChatGPT
In de ChatGPT-app voor desktop schakelt u over naar Codex en kiest map openen (open a folder); als u Codex niet ziet, vraag de beheerder het aan te zetten. Start elke thread als nieuwe chat in hetzelfde project, dus in dezelfde geopende map; chats vindt u onder Chats en u kunt in lopende chat schrijven. Voor code kiest u onder het berichtveld Worktree.

### Claude
In de Claude-desktopapp start u elk stuk als nieuwe taak in Cowork, of als nieuwe sessie in Claude Code (New session); Claude Code biedt nieuwe sessies zelf aan, klik erop. Ze draaien naast elkaar in de zijbalk en u kunt in elke thread schrijven. Voor code kiest u bij start worktree, zodat het een eigen kopie van de repo heeft.

### Gemini
Gemini werkt niet met mappen op de computer en de agent die taken zelf afhandelt is alleen voor persoonlijke accounts buiten de EU. Threads-opdrachten schrijft het daarom in het antwoord: plak elk in een nieuwe chat, voeg onderlagen toe via Add from Drive en plak de resultaten terug in de eerste chat voor vergelijking. Als u dit vaak doet, vraag IT om een tool met Code-modus.
## Wat zijn parallelle threads

Een thread is een aparte chat of taak met eigen opdracht, die u in de zijbalk van de tool ziet en waarin u altijd kunt schrijven. Parallelle threads draaien gelijktijdig, elk aan een deel van het werk. De eerste thread waarin u het werk gaf is de coördinator: die verdeelt, schrijft opdrachten en vergelijkt aan het einde de resultaten.

Verdeling werkt alleen als delen niet op elkaar wachten. Vraag voordat u een deel start: maakt de thread het af zonder de uitkomst van anderen te kennen? Zo niet, hoort het bij het deel waarop het afhangt. De tweede regel is één schrijver per map: twee threads die hetzelfde bestand bewerken overschrijven elkaars werk, daarom heeft elk een eigen map. Opdrachten en resultaten van threads zijn tekstbestanden `.md` die vooral AI leest; het eindresultaat slaat het op in het door u gevraagde formaat.

Bij groot werk met veel delen kan de coördinator de delen zelf starten als [subagenten](glossary:subagent), helpers op de achtergrond die resultaten overnemen en vragen aan u doorgeven. De regel die de prompt opslaat in `AGENTS.md`, een tekstbestand met regels voor AI in uw map, geeft ze een limiet van tien tegelijk en voor de volgende batch een korte status, zodat u weet wat terugkwam.
## Voorbeeld

Jana is klantenservicemanager bij een meubelwebshop. Op dinsdag 13-10-2026 ’s ochtends krijgt ze de opdracht om voor de donderdagse managementvergadering een overzicht van het derde kwartaal te maken. In de map Overzicht Q3 staat een export van 2.300 tickets met klachten en links naar websites van drie concurrenten. Ze plakt de prompt en schrijft achter de laatste regel:

```text
Klantenserviceoverzicht Q3 voor donderdagse managementvergadering: cijfers uit ticketexport, vijf meest voorkomende klachten uit tickets en wat drie concurrenten dit kwartaal veranderden.
```

AI stelt drie delen voor (cijfers, klachten, concurrenten) en schrijft bij elk waarom het niet op de anderen wacht. Jana bevestigt de verdeling en start drie threads tegelijk. De thread met klachten vraagt na tien minuten of retouren van beschadigde goederen als klacht meegeteld moeten worden. Jana antwoordt “ja, apart” en na 40 minuten zijn alle drie klaar.

De coördinator vindt in de vergelijking één tegenstrijdigheid: volgens de cijfers daalde de reactietijd van 14 naar 6 uur, maar de tweede meest voorkomende klacht is trage reactie. De meeste klachten zijn van juli, toen de verandering nog niet gold. Jana besluit reactietijd en klachten per maand te tonen en AI voegt de delen samen in een Word-document `overzicht-q3.docx`.
Het overzicht is dinsdag voor de middag klaar en Jana heeft woensdag om de vergadering voor te bereiden.
## Als u vastloopt

- **Een deel wacht op resultaat van een ander:** schrijf in de eerste thread dat het samen met het afhankelijke deel moet worden samengevoegd of aan het einde.
- **Twee threads bewerkten hetzelfde bestand:** in de opdracht ontbreekt een eigen map. Vraag de eerste thread de opdracht te corrigeren en start het deel opnieuw.
- **AI zegt dat het de bestanden in de map niet ziet:** u werkt in een gewone chat. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) volgens het blok „In uw tool“.
- **Resultaten zijn tegenstrijdig:** laat de tegenstrijdigheid in de vergelijking staan en beslis zelf. Wilt u het hele resultaat doorlopen, helpt [AI outputcontrole](card:kontrola-vysledku).
## Wat klaar is

U heeft een groter werkstuk klaar met delen die tegelijk draaiden, elk in eigen thread en map, en een vergelijking met tegenstrijdigheden en uw beslissingen. In `AGENTS.md`, of in mapinstructies of AI-geheugen, staat de regel waarmee AI volgende keer zelf zo’n werk verdeelt.
## Wat nu

Als de verdeling bevalt en het werk zich herhaalt, bijvoorbeeld elk kwartaal, sla het dan op als [skill](card:create-skill-from-proven-process).
## Parallelle werkstromen

**Wat het is:** Twee of meer onderdelen van één project die elk een eigen opdracht krijgen en gelijktijdig in aparte AI-werkstromen of tools kunnen werken. Hun resultaten worden uiteindelijk gecontroleerd samengevoegd.

**Wat het niet is:** Het zijn niet meerdere rollen die hetzelfde besluit bespreken, noch een reeks stappen waarbij de tweede wacht op het resultaat van de eerste.

**Waarom de student dit nodig heeft:** Het helpt te begrijpen wanneer parallel werk echt de capaciteit verhoogt en wanneer het alleen maar complexere coördinatie toevoegt.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Subagent

**Wat het is:** Een zelfstandige agent die door de coördinerende agent wordt aangemaakt voor een specifieke deeltaak. Hij krijgt een eigen opdracht en context, werkt afzonderlijk en levert het resultaat terug aan de coördinator.

**Wat het niet is:** Het is geen simpele aftakking van één gesprek. Een fork creëert een nieuwe tak voor een mens; een subagent kan door de coördinator zelf worden gestart, aangestuurd en in het gezamenlijke resultaat worden opgenomen.

**Waarom de student dit nodig heeft:** Het helpt om handmatig parallel werk in meerdere chats te onderscheiden van een agentensamenstelling waarbij de coördinator de delegatie en het volgen van deelopdrachten overneemt.

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
