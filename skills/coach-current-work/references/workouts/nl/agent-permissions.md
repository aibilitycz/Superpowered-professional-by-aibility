# Stel agentmachtigingen in: wat hij zelf mag en wat nooit zonder u mag

AI stopt met vragen bij routinetaken en wacht op uw bevestiging vóór het versturen van e-mail of het verwijderen van data.

## Stel agentmachtigingen in: wat hij zelf mag en wat nooit zonder u mag

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met de map waarin AI werkt.
## Waarvoor is het nuttig

Een agent moet tijdens de lunch een nieuwe prijslijst in 20 offertes aanvullen en wacht na een uur bij de eerste met de vraag of hij het bestand mag opslaan. Een collega loste dit op door haar agent alles toe te staan, en die stuurde bij een soortgelijke taak meteen een offerte naar de klant die nog door niemand was gecontroleerd.

Het helpt om het werk van de [agent](glossary:agent) te splitsen in routine die hij volgens de machtigingsmodus in het hulpmiddel zonder vragen uitvoert, en harde grenzen in `AGENTS.md`, het AI-regelbestand, waar hij stopt en op u wacht.
## Wat u moet voorbereiden

- de map waarin u met AI werkt; `AGENTS.md` hoeft er niet te zijn,
- een echte taak die eindigt met een uitgaande e-mail, bijvoorbeeld een rapport of antwoord aan een klant,
- e-mail gekoppeld aan AI via de [connector](card:plugin-connector), zodat de e-mail na uw "VERZENDEN" zelf wordt verstuurd,
- AI in de [modus](glossary:workmode) Cowork of Code ([hoe u overschakelt vanuit chat](card:when-chat-is-not-enough)).
## Hoe te werk te gaan

1. Voer de prompt in en vertel AI wat bij u routine is en wat niet teruggedraaid kan worden. AI bepaalt hoe de machtigingen zijn ingesteld en stelt twee lijsten voor.
2. Corrigeer en keur de lijsten goed. AI schrijft ze in `AGENTS.md` en vertelt u welke machtigingsmodus u moet kiezen en waar u die kunt wijzigen.
3. Voer in een nieuwe chat de voorbereidende taak in. AI voert de routine zonder vragen uit en stopt bij de e-mail: toont het concept en verstuurt niets zonder uw "VERZENDEN".

In de lijst "Nooit zonder mij" horen stappen die niet teruggedraaid kunnen worden of extern worden verzonden, meestal vijf tot acht.
## AI-oefening

Voer deze [prompt](glossary:prompt) in AI in de modus Cowork of Code, geopend in uw map:

Stel in wat je in deze map zelf mag doen en waarbij je altijd stopt en op mij wacht. Vraag me niet naar routine; bij stappen die niet teruggedraaid kunnen worden, stop je altijd.

Bepaal eerst in welke machtigingsmodus je nu werkt en welke toestemmingen of verboden in dit hulpmiddel zijn opgeslagen. Als je de modus niet kunt bepalen of het hulpmiddel die niet heeft, zeg dat dan en raad het niet. Als er een AGENTS.md in de map staat, lees die dan. Vraag me daarna twee dingen: bij welke routinetaken je steeds mijn goedkeuring moet vragen en welke acties in mijn werk niet teruggedraaid kunnen worden of extern gaan, zoals e-mails naar klanten, betalingen, verwijderen, publiceren of wijzigingen in gedeelde tabellen en systemen.

Maak op basis van de antwoorden twee lijsten:
- Mag je zelf: routine die je zonder vragen doet, bijvoorbeeld bestanden lezen en bewerken in deze map, gewone commando's uitvoeren en concepten voorbereiden.
- Nooit zonder mij: vijf tot acht harde grenzen, dus stappen die niet teruggedraaid kunnen worden of extern gaan, met voor elke stap de procedure waarbij je stopt. Bij e-mails en berichten buiten het bedrijf: maak een concept, toon mij de ontvanger, het onderwerp en de volledige tekst en verstuur pas na mijn aparte bericht met het woord VERZENDEN; als je niet kunt versturen, sla het concept dan op in de mail en vertel het mij. Bij het verwijderen van data die niet hersteld kunnen worden: schrijf precies op wat je verwijdert en wacht op twee bevestigingen in twee berichten. Na elke invoer in een andere applicatie laad je het resultaat opnieuw en toon je het mij. Plaats nooit wachtwoorden en toegangssleutels in chat of bestanden; als inloggen nodig is, vraag mij dat te doen via de wachtwoordbeheerder.
Als ik een uitzondering wil, schrijf die dan in één zin onder de kop "Uitzonderingen" met de voorwaarde, bijvoorbeeld "Je mag zelf een offerte opslaan in de gedeelde map als ik die in de chat heb goedgekeurd."

Toon mij beide lijsten en wacht tot ik ze corrigeer of goedkeur. Schrijf ze daarna in AGENTS.md onder de koppen "Mag je zelf" en "Nooit zonder mij"; als het bestand niet bestaat, maak het dan aan. Als er al verboden in staan, verplaats die dan naar "Nooit zonder mij" zodat ze niet op twee plaatsen staan. Voeg de regel toe: "Als je mij vraagt naar een routinetak die ik goedkeur, stel dan voor die toe te voegen aan Mag je zelf. Als je een stap tegenkomt die niet teruggedraaid kan worden en ontbreekt in Nooit zonder mij, stop dan en stel voor die toe te voegen." Zorg dat je AGENTS.md in dit hulpmiddel bij elke start van het werk leest; in Cowork schrijf dat in de mapinstructies. Als je niet met een map werkt, sla de lijsten dan in het geheugen op of schrijf mij een tekst die ik in eigen instructies kan plakken.

Schrijf mij tenslotte welke machtigingsmodus ik in dit hulpmiddel moet kiezen zodat je niet naar routine vraagt en risicovolle stappen vooraf controleert, en waar ik die kan wijzigen. Als het mogelijk is om routinetaken die ik heb goedgekeurd permanent toe te staan, stel dat dan in; als je dat zelf niet kunt, schrijf dan precies waar ik wat moet invoeren.

## In uw hulpmiddel

### Microsoft Copilot
Copilot in de Cowork-modus (schakelaar bovenaan naast Chat) heeft geen machtigingsmodus en vraagt zelf vóór het versturen van e-mail, Teams-bericht of uitnodiging. U opent de map niet; voeg aan het einde van de prompt toe "Maak geen bestand aan, schrijf de lijsten als tekst voor Customize, Preferences." en plak de tekst in Customize op de startpagina van Cowork. Gebruik nooit Always allow voor uitgaande e-mails, want dan worden andere ook zonder vragen verstuurd.

### ChatGPT
In de ChatGPT-app voor desktop schakelt u over naar Codex, kiest u map openen (open a folder) en onder het berichtveld kiest u Approve for me (keur voor mij goed): Codex vraagt dan alleen bij stappen die hij als risicovol beoordeelt. Met Full access werkt hij helemaal zonder goedkeuring. Codex leest AGENTS.md zelf; als er geen mail is gekoppeld, stopt stap 3 bij het e-mailconcept.

### Claude
In Claude Code kiest u Auto in het modusmenu naast de verzendknop: routine wordt zonder vragen uitgevoerd en risicovolle stappen worden vooraf door een tweede model beoordeeld. Permanente toestemmingen en uitzonderingen die in woorden zijn beschreven slaat u op met het commando `/permissions`. In Cowork laat u de standaard Automatically approve aan; permanent verwijderen van bestanden bevestigt hij altijd met u. Met gekoppelde Gmail maakt Claude alleen een e-mailconcept.

### Gemini
Gemini Agent die stappen zelf uitvoert is alleen voor persoonlijke Google AI Pro en Ultra-accounts en is niet beschikbaar in de EU, dus u kunt geen machtigingsmodus instellen met een zakelijk account. Als u wilt dat AI stappen zelf uitvoert, vraag dan IT om een hulpmiddel met Cowork- of Code-modus. Laat de lijst "Nooit zonder mij" voor e-mails opslaan als skill: zeg "Sla dit op als skill" en u vindt het in Customize, Skills.
## Wat is een machtigingsmodus

Een machtigingsmodus (permissions in het Engels) is een instelling die bepaalt waar AI u om toestemming vraagt voordat hij iets doet. Hulpmiddelen hebben meestal drie niveaus: AI vraagt bijna overal om toestemming, vraagt alleen bij stappen die als risicovol worden beoordeeld, of vraagt helemaal niet. Het middelste niveau is een goede standaard voor dagelijks werk. Het niveau zonder vragen is een bewuste keuze voor mensen die grenzen hebben vastgelegd en resultaten controleren; stel dit niet standaard in voor collega’s.

Het hulpmiddel herkent risicovolle commando’s, zoals massaal verwijderen. Het weet echter niet dat een e-mail voor een specifieke klant of het verwijderen van een bestellijst voor u risicovol is. Dat weet AI uit `AGENTS.md`, een bestand in [Markdown](glossary:markdown), dat hij bij elke start van het werk leest, en daarom heeft elke grens een procedure met een duidelijk moment waarop u beslist. Het aparte bericht "VERZENDEN" is een vangnet: de zin "en dan verstuur het" midden in een langer verzoek start het versturen niet. Na invoer in een andere applicatie opent AI het resultaat opnieuw, zodat u ziet dat het echt is opgeslagen.

Schrijf uitzonderingen in woorden met de voorwaarde; AI zet die onder de kop Uitzonderingen. Als u alleen chat gebruikt, toont een aparte kaart hoe u [overschakelt naar Cowork of Code](card:when-chat-is-not-enough).
## Laat lijsten zichzelf aanvullen

De regel uit de prompt zorgt dat AI bij elke vraag over een nieuwe stap voorstelt die aan de lijst toe te voegen. Het is echter nuttig om eens per maand te controleren waar AI onnodig vroeg, en een geplande taak doet dat voor u. Voer in AI in Code-modus deze opdracht in en vraag hem een geplande taak aan te maken:

```text
Elke eerste maandag van de maand om 9:00 uur doorzoek AGENTS.md in deze map en mijn chats daarin van de afgelopen maand. Schrijf de stappen op waarvoor je mij vroeg en die ik steeds goedkeurde, en stel voor welke naar "Mag je zelf" verplaatst kunnen worden. Schrijf ook nieuwe acties op die niet teruggedraaid kunnen worden en ontbreken in "Nooit zonder mij". Pas de lijsten aan zodra ik het voorstel goedkeur.
```

Als de taak met bestanden op uw computer werkt, draait die alleen als de computer aanstaat en de app open is. Als u al een [wekelijkse review](card:weekly-ai-review) heeft, voeg dit punt dan daarin toe in plaats van een aparte taak.
## Voorbeeld

Tereza beheert opdrachten in een klein reclamebureau en maakt met AI in Cowork-modus maandelijkse rapporten voor zes klanten. Ze heeft elke stap goedkeuringsplicht aanstaan, en AI vroeg haar in een uur elf keer of hij het bestand mocht opslaan. Op maandag 19-10-2026 opent ze de map Rapporten en voert de prompt in. Op de vraag wat niet teruggedraaid kan worden antwoordt ze: e-mails naar klanten en het verwijderen van exports; facturen in het boekhoudsysteem mag AI helemaal niet wijzigen. AI schrijft:

```text
### Mag je zelf
- Bestanden lezen en bewerken in de map Rapporten en nieuwe aanmaken.
- Exports downloaden uit reclame-accounts en tabellen daarvan berekenen.
- Concepten van e-mails aan klanten voorbereiden.

### Nooit zonder mij
- E-mail buiten het bedrijf: toon ontvanger, onderwerp en volledige tekst en verstuur pas na mijn aparte bericht VERZENDEN.
- Verwijderen van exports en bestanden die niet hersteld kunnen worden: schrijf op wat je verwijdert en wacht op twee bevestigingen in twee berichten.
- Wijzig geen facturen in het boekhoudsysteem; vertel mij wat er gewijzigd moet worden.
- Na elke invoer in een andere applicatie laad het resultaat opnieuw en toon het mij.
- Plaats nooit wachtwoorden en toegangssleutels in chat of bestanden; ik log in via de wachtwoordbeheerder.

### Uitzonderingen
- Je mag zelf het definitieve rapport naar collega Martin in de teamchat sturen als ik het heb goedgekeurd.
```

AI vertelt haar dat ze werkt in een modus waarin Tereza elke stap goedkeurt en toont waar ze kan overschakelen naar een modus die alleen bij risicovolle stappen vraagt. Op dinsdag 20-10 schrijft Tereza in een nieuwe chat: "Maak het oktober-rapport voor Bakkerij Novák en stuur het naar mevrouw Novák." AI downloadt de export uit het reclame-account en slaat het rapport zonder vragen op. Daarna toont hij het e-mailconcept met adres, onderwerp en tekst en wacht. Tereza corrigeert de aanhef, stuurt "VERZENDEN" en AI toont haar in de verzonden mail dat de e-mail met bijlage is verstuurd.
## Als u vastloopt

- **AI vraagt steeds om routinetaken:** het hulpmiddel staat waarschijnlijk in een modus waarin u elke stap goedkeurt. Schakel over volgens de sectie "In uw hulpmiddel" en vraag AI routinetaken permanent toe te staan.
- **AI voerde een stap uit uit de lijst "Nooit zonder mij" zonder te vragen:** schrijf "Toon de regels die bij het begin van het werk zijn geladen." Als `AGENTS.md` ontbreekt, toont de kaart [het AI-regelbestand](card:agents-md) hoe u het laadt; als het er is, laat AI de grens herschrijven naar een procedure met een stap, bijvoorbeeld "toon concept en wacht op VERZENDEN".
- **Het hulpmiddel stopt een stap die u wilde:** keur die goed in het goedkeuringsvenster of schrijf AI precies wat hij moet doen en waarmee, bijvoorbeeld "verplaats rapport naar gedeelde map `Klanten/Bakkerij Novák`."
- **U ziet de moduskeuze niet:** u werkt in gewone chat of de beheerder heeft die in het bedrijf beperkt. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) of vraag IT om toegang.
## Wat klaar zal zijn

U heeft twee korte lijsten wat AI zelf mag doen en waarbij hij altijd stopt, opgeslagen in `AGENTS.md` of in de instellingen van uw hulpmiddel. Als het hulpmiddel machtigingsmodi heeft, draait het in de modus die niet naar routine vraagt. In een echte taak heeft u geverifieerd dat AI het werk zonder vragen afmaakt en bij het versturen van e-mail op uw "VERZENDEN" wacht. Als AI u de volgende keer naar een nieuwe routinetak vraagt, stelt hij die zelf aan de lijst toe.
## Wat nu

Als AI weet waar hij moet stoppen, vertrouw hem dan een [lange taak toe die hij zelf afmaakt](card:agent-task), bijvoorbeeld ’s nachts. Stel werk dat elke week terugkeert in als een [geplande taak](card:recurring-ai-task).
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
