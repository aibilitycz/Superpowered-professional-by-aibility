# Sluit de connector aan: AI werkt direct in uw applicaties

AI doorzoekt zelfstandig uw e-mail en slaat antwoordconcepten direct in uw mailbox op.

## Sluit de connector aan: AI werkt direct in uw applicaties

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met werkmail en agenda.
## Waar is het goed voor

Voor de vergadering op dinsdag wilt u vijf e-mails afhandelen die sinds vorige week wachten.
U kopieert elke e-mail naar de chat en plakt het antwoord terug in de mail. Bij de derde ontdekt u dat
de datum die AI voorstelde al bezet is in uw agenda.

De connector is de koppeling tussen AI en de applicatie: AI leest via deze connector uw mail en agenda, zodat
u niets hoeft te kopiëren en er geen datum wordt voorgesteld die al bezet is.
## Wat u moet voorbereiden

- Toegang tot uw werkmail en agenda; soms schakelt de beheerder de koppeling met AI in,
- De AI die u op het werk gebruikt; waar de connectors zitten, ziet u in het blok „In uw
  tool“,
- Voor de Cowork- of Code-modus een map voor regels, bijvoorbeeld een nieuwe lege `Mail`.
## Hoe u het doet

1. Plak de prompt. AI detecteert welke connectors voor mail en agenda beschikbaar zijn, sluit de beschikbare
   aan en vertelt bij de rest waar u moet klikken. U bevestigt zelf de aanmelding.
2. AI selecteert maximaal vijf e-mails van de afgelopen week waarop u moet reageren;
   nieuwsbrieven en kopieën telt het alleen. Concepten worden in de mailbox opgeslagen, u bekijkt, bewerkt en verzendt ze.
3. Typ in een nieuwe chat alleen „Beantwoord de nieuwste e-mail die wacht op een antwoord.“ AI zou zelf het concept moeten opslaan en de datum in de agenda controleren.
## AI-oefening

Plak deze [prompt](glossary:prompt) in de AI die u op het werk gebruikt:

Verbind met mijn werkmail en agenda en voer meteen het eerste werk uit, zodat ik niets hoef te kopiëren naar de chat.

Vraag me welke mail en agenda ik op het werk gebruik. Zoek dan welke connectors of plugins je daarvoor hebt. Als een plugin meerdere van mijn apps tegelijk dekt, geef die dan voorrang. Wat je zelf kunt aansluiten, sluit je aan. Waar ik iets moet doen, bijvoorbeeld inloggen of toegang toestaan, vertel me precies waar ik moet klikken en wacht tot ik het gedaan heb. Toegang tot mail en agenda alleen via connectors. Controleer na aansluiting of de connector concepten van e-mails kan opslaan. Als dat niet kan, zoek een andere connector of plugin. Als je geen vindt, verbind de mail via de Composio-dienst, en als dat hier niet kan, vertel me waar ik moet overschakelen.

Als alles aangesloten is, doe dan het volgende:
- Doorzoek de mail van de afgelopen zeven dagen en selecteer maximaal vijf e-mails waarop ik nog niet heb geantwoord en moet antwoorden, van meest urgent naar minder. Geef bij elke afzender, onderwerp en antwoordtermijn.
- Schrijf bij elke een antwoord en sla het direct als concept op in mijn mailbox. Als het antwoord afhangt van een datum, kijk dan in de agenda wanneer ik beschikbaar ben.
- Verstuur de concepten niet, ik bekijk ze en verstuur zelf.

Sla tot slot een regel op voor de volgende keer: welke apps je hebt aangesloten, dat je antwoorden als concepten opslaat en dat je data controleert in de agenda. Als je in een map werkt, schrijf het in het bestand AGENTS.md, en als dat bestand niet bestaat, maak het aan. Zorg dat je AGENTS.md in deze tool aan het begin van elk werk leest; in Cowork schrijf je het in de mapinstructies. In een gewone chat sla je de regel op in het geheugen.

## In uw tool

### Microsoft Copilot
Plak de prompt in Copilot Cowork op `copilot.cloud.microsoft` (Cowork-schakelaar
bovenaan naast Chat); mail en agenda zijn direct aangesloten en een map is niet nodig.
Antwoorden worden opgeslagen als concepten in Outlook en de regel als skill. Zonder Cowork
maakt ook Copilot Chat een concept en onthoudt de regel onder Personalization.
Geplande taken staan op de pagina Automations.

### ChatGPT
De connector voor Outlook of Gmail activeert u in de instellingen onder Plugins, in een nieuwe chat via + bij het berichtveld.
Concepten worden opgeslagen in Plus-, Pro-, Business- en Enterprise-abonnementen; in bedrijven schakelt de beheerder de registratie in. ChatGPT slaat de regel op in het geheugen, Codex in `AGENTS.md`. Geplande taken staan onder Scheduled.

### Claude
Connectors vindt u in het linker paneel onder Customize, Connectors, in een nieuwe chat schakelt u ze in via + bij het berichtveld. De Microsoft 365-connector slaat concepten op, maar alleen als de beheerder schrijven toestaat. In Cowork sluit AI de connector zelf aan en schrijft de regel in de mapinstructies. Geplande taken staan onder Scheduled.

### Gemini
Typ in de Gemini-app @, selecteer Gmail en Agenda en plak de prompt; op het aanbod van Composio antwoordt u „ga alleen door met Gmail en Agenda“. Gemini vindt de e-mails en stelt antwoorden voor, maar slaat het concept pas op in Gmail via Ask Gemini rechtsboven. Laat de regel opslaan als skill (Customize, Skills), geplande taken staan onder Scheduled.
## Wat is een connector en plugin

Een connector is de koppeling van AI met één applicatie. Afhankelijk van wat het kan, zoekt en leest AI daarin alleen, of schrijft ook: het slaat een e-mailconcept op of maakt een afspraak in de agenda. Zo sluit u ook CRM aan, het systeem waarin u klanten en deals beheert, of een gedeelde schijf. In de instellingen wordt de connector soms MCP-server genoemd; MCP is een technische standaard waarmee AI verbinding maakt met applicaties, verder hoeft u er niets van te weten.

Een plugin is een pakket voor een specifieke taak. Het voegt meerdere connectors en instructies toe waarmee AI werkt, bijvoorbeeld voor sales: CRM, mail en de procedure om een offerte te schrijven.

Als er geen connector voor uw app bestaat of de mail alleen gelezen wordt, gebruik dan Composio. Dit is een dienst waarmee AI op meer dan duizend apps kan aansluiten,
zoals Outlook, Gmail of CRM, en in mail ook antwoordconcepten kan opslaan.
Het wordt ingesteld in de Cowork- of Code-modus en AI doet dat zelf; u maakt alleen een account aan bij Composio en bevestigt toegang tot de apps. Het basisaccount is gratis en vraagt geen betaalkaart. Vraag bij een bedrijfsaccount eerst IT of u het mag gebruiken.

`AGENTS.md` is een gewoon tekstbestand met regels voor AI in de map waarin u werkt. AI in Code-modus leest het aan het begin van elk werk, zodat u de aangesloten apps niet steeds hoeft uit te leggen.
## Laat AI zelf de mail doorzoeken

Met aangesloten mail en agenda kan AI elke ochtend uw mail voor u doorzoeken.
Een geplande taak die AI elke werkdag ’s ochtends uitvoert is voldoende, en de antwoordconcepten blijven in uw mailbox. Plak deze opdracht in AI en vraag het een geplande taak aan te maken. Waar u geplande taken vindt in uw tool, ziet u in het blok „In uw tool“.

```text
Doorzoek elke werkdag om 7:30 via de connector de mail die sinds de laatste uitvoering is binnengekomen. Selecteer e-mails waarop ik nog niet heb geantwoord en moet antwoorden, van meest urgent naar minder, en sla bij elke een antwoordconcept op in de mailbox. Controleer data in de agenda. Als er niets is om op te antwoorden, schrijf dan niets.
```
## Voorbeeld

Jana coördineert de verhuizing van het kantoor naar een nieuw gebouw. Op maandag 12-10 ’s ochtends heeft ze
38 ongelezen e-mails in haar mailbox. Na aansluiting van Outlook en agenda geeft AI:

```text
Te beantwoorden (4 van 38 e-mails)

1. Verhuisbedrijf: wil verhuizing op 24-10 bevestigen. Antwoord vandaag.
   Concept: bevestigen datum, in agenda is die dag vrij.
2. Petr van IT: vraagt wanneer hij het netwerk op de nieuwe verdieping kan aansluiten. Antwoord uiterlijk woensdag.
   Concept: voorstel donderdag 15-10 om 9:00, wanneer agenda vrij is.
3. Meubelleverancier: heeft datum nodig voor ondertekening overdrachtsprotocol. Antwoord uiterlijk vrijdag.
   Concept: protocol ondertekenen bij ontvangst meubels op 22-10.
4. Management: wil korte status update voor vergadering vrijdag.
   Concept: verhuizing 24-10, netwerk 15-10, meubels 22-10.

Concepten zijn opgeslagen in de mailbox. De overige 34 e-mails zijn nieuwsbrieven en kopieën ter informatie.
```

Jana bekijkt de concepten, verandert bij Petr de tijd naar 10:00 en verstuurt alle vier. De volgende ochtend typt ze in een nieuwe chat alleen „Beantwoord de nieuwste e-mail die wacht op een antwoord.“ AI vindt de vraag van de receptie over het aantal parkeerpassen, controleert de datum in de agenda en slaat het concept op in de mailbox.
## Als u vastloopt

- **Connector ontbreekt in instellingen of kan niet worden ingeschakeld:** vraag AI of er een connector voor uw app bestaat. Als die er is, schakelt de beheerder die waarschijnlijk in een bedrijfsaccount in en AI stuurt hem een korte aanvraag: welke connector u nodig hebt en waarvoor. Als die niet bestaat, verbind de app via Composio.
- **Connector kan mail alleen lezen:** vraag AI in Cowork- of Code-modus om mail via Composio te verbinden of een andere connector te zoeken die ook concepten kan opslaan. Schakel in een gewone chat over naar
  [Cowork of Code](card:when-chat-is-not-enough).
- **AI zegt dat het de mail niet ziet:** controleer of de connector in deze chat is ingeschakeld; in ChatGPT en Claude via de + knop bij het berichtveld, in Gemini door @Gmail te noemen in elke nieuwe chat. Als het aanstaat, is de aanmelding waarschijnlijk niet afgerond of bent u ingelogd met een ander account. Laat AI het account controleren en verbind opnieuw.
- **AI slaat in een nieuwe chat het concept niet op of controleert de datum niet:** typ in Cowork- of Code-modus: „Lees `AGENTS.md` en zorg dat je het aan het begin van elk werk zelf leest.“ Vraag in een gewone chat of AI de regel in het geheugen of in de instructies heeft, en als dat niet zo is, laat het u vertellen waar u het moet opslaan.
## Wat klaar zal zijn

U hebt mail en agenda aangesloten op AI en hebt antwoorden verzonden op de meest urgente mail van de afgelopen week. AI heeft de regel voor concepten en agenda opgeslagen en u hebt in een nieuwe chat gecontroleerd dat het volgens die regel werkt.
## Wat nu

Wilt u dat de ochtendmailroutine betrouwbaar draait en zelf fouten meldt, ga dan verder met de [geplande taak](card:recurring-ai-task). Als uit één werkstap twee opvolgende stappen ontstaan, bijvoorbeeld van mail een tabel en van tabel antwoorden, stel dan een [workflow over meerdere apps](card:cross-app-workflow) in.
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
