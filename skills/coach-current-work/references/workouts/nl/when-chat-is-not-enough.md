# Laat AI in uw map werken: wanneer gewone chat niet genoeg is

Als chat niet volstaat voor meerdere bestanden tegelijk, schakel dan over naar de Cowork- of Code-modus en laat AI het resultaat direct in de map opslaan.

## Laat AI in uw map werken: wanneer gewone chat niet genoeg is

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met de map met lopend werk.
## Waarvoor is het handig

U moet uiterlijk donderdag 15-10 het management een leverancier voor nieuwe laptops aanbevelen. Vijf offertes liggen als PDF in een map. U uploadt ze één voor één in de chat, kopieert de vergelijkende tabel uit het antwoord naar Word, en als er woensdag een zesde offerte binnenkomt, begint u opnieuw.

In de [werkmodus](glossary:workmode) Cowork of Code heeft AI toegang tot de hele map, dus voegt het gewoon de zesde offerte toe aan de bestaande tabel.
## Wat u moet voorbereiden

- een map met lopend werk voor één project, op uw computer of bedrijfsnetwerk,
- een taak die u niet in chat kon uitvoeren; als u die niet heeft, maakt AI een overzicht van de documenten,
- de AI die u gebruikt; als deze Cowork of Code ondersteunt, ziet u het blok „In uw tool“.
## Hoe te werk te gaan

1. Open in uw AI-tool de modus Cowork of Code. Bij sommige tools is dit een desktop-app die u eerst installeert.
2. Geef AI toegang tot de map en sta dit toe als er om gevraagd wordt. Voer de prompt in en voeg er één zin onder toe met de taak die u niet in chat kon uitvoeren.
3. Open het bestand dat AI in de map heeft opgeslagen. Als er iets niet klopt, schrijf dat dan in dezelfde chat en AI corrigeert het bestand.

Wat in de documenten ontbreekt, markeert AI met [AANVULLEN] en dat vult u zelf aan.
## AI-oefening

Voer deze [prompt](glossary:prompt) in AI in de modus Cowork of Code, geopend in uw map, en voeg er uw taak onder toe:

Je werkt in mijn map met lopend werk. Als je er niet in kunt kijken of er geen bestand in kunt opslaan, zeg dat dan meteen: ik zit waarschijnlijk in gewone chat en moet overschakelen naar Cowork of Code.

Bekijk alle bestanden in de map en geef me in twee zinnen een overzicht van wat erin staat.

Voer daarna de taak uit die ik onder deze opdracht schrijf. Als er geen taak is, maak dan een overzicht van de documenten in de map: voor elk de naam, waar het over gaat, belangrijke cijfers en deadlines, en wat dat voor mij betekent. Neem cijfers en feiten alleen uit de documenten; wat je niet vindt, markeer met [AANVULLEN].

Sla het resultaat op in een nieuw bestand in deze map, als Word-document, en als het een tabel of cijfers betreft, als Excel-tabel. Vertel me de bestandsnaam en wat erin staat.

Sla ten slotte de regels voor deze map op: in één zin wat erin staat, de bestandsnaam met het resultaat, en de regel „Als er een nieuw document aan de map wordt toegevoegd of gewijzigd, vul dat dan op dezelfde manier aan in het resultaat.“ Als je in Cowork werkt, schrijf ze dan in de mapinstructies. Anders schrijf je ze in het bestand AGENTS.md in de map, en als dat er niet is, maak het aan. Vertel me waar je de regels hebt opgeslagen.

## In uw tool

### Microsoft Copilot
De Cowork-modus heet Copilot Cowork: kies die op `copilot.cloud.microsoft` met de schakelaar bovenaan naast Chat; het vereist een Copilot-licentie en inschakeling door de beheerder. Toegang tot bestanden op de computer is er niet; zet de map op OneDrive of SharePoint en voeg die toe met de + knop. Nieuwe bestanden worden opgeslagen in de Cowork-map op OneDrive en zijn te vinden in het rechterpaneel. Regels worden opgeslagen als skill.

### ChatGPT
De Code-modus is ChatGPT met Codex in de ChatGPT-desktopapp, te downloaden op de ChatGPT-website; programmeren is niet nodig. Na inloggen kiest u Codex, dan New chat en opent u een map (open a folder). Codex is beschikbaar in alle ChatGPT-tarieven, ook gratis, maar kan in zakelijke accounts door de beheerder worden uitgeschakeld. Regels voor later slaat AI op in het bestand `AGENTS.md` in de map.

### Claude
De Cowork- en Code-modi zijn beschikbaar in de Claude-desktopapp, te downloaden op `claude.com/download`; Cowork zit in betaalde abonnementen. Schakel boven het berichtveld van Chat naar Cowork; als u die optie niet ziet, heeft u een nieuwe versie waarin Cowork in elke chat werkt. Open de map via het linker paneel onder Projects, + en Use an existing folder. Regels voor later slaat AI op in de mapinstructies.

### Gemini
Gemini heeft geen Cowork- of Code-modus, maar kan meerdere bestanden aan in de Gemini-app: voeg tot 10 bestanden toe via Add from Drive, voer de prompt in en als gevraagd wordt van modus te wisselen, typ „ga hier verder“. Resultaten exporteert u met Export to Sheets, tekst via Share & export en Export to Docs. Vraag over de hele map in Drive via rechtermuisknop en Ask Gemini. Regels slaat u op als skill (Customize, Skills).
## Wat is de Cowork- en Code-modus

Cowork is bedoeld voor werken met documenten: AI leest en slaat bestanden op in de map die u opent en werkt zelfstandig aan de taak. Code is vooral voor code, websites en scripts, maar werkt met mappen hetzelfde, dus u kunt het ook voor documenten gebruiken.

Regels voor later slaat AI op in het bestand `AGENTS.md` in de map of in instructies die de tool onthoudt, zodat ze gelden in elke volgende chat over dezelfde map. In een gedeelde map zien collega’s het bestand `AGENTS.md` ook; laat het staan, AI volgt die regels. In Cowork of Code kunt u ook taken plannen die automatisch op vaste tijden draaien.
## Wanneer volstaat gewone chat

Gewone chat in elke tool volstaat in twee situaties:

- **Eenmalige output van wat u in de chat zet:** een antwoord op een e-mail, samenvatting van één document of agendapunten. U levert één keer de input en gebruikt het resultaat direct.
- **Werk in mail, agenda of bedrijfsdocumenten die aan chat zijn [gekoppeld](card:plugin-connector):** bijvoorbeeld een conceptantwoord in Outlook of een overzicht van afspraken voor volgende week.

Schakel over naar Cowork of Code als uw input uit meerdere bestanden in een map bestaat, of als het resultaat als bestand moet blijven waar u op terugkomt.
## Voorbeeld

Ondřej coördineert de kantoorrenovatie en moet uiterlijk vrijdag 16-10 een lijst met nog niet gerepareerde gebreken aan de investeerder sturen. In de map `Kantoorrenovatie` staan zeven verslagen van inspectiedagen in Word. Hij opent AI in Cowork-modus, geeft toegang tot de map en voegt onder de prompt toe: „Maak een lijst van gebreken die volgens de verslagen nog niet zijn gerepareerd, met deadline en bedrijf dat moet repareren.“

AI slaat een tabel `openstaande-gebreken.xlsx` op met veertien gebreken. Bij twee ontbreken deadlines, die markeert AI met [AANVULLEN]. In de mapregels noteert AI dat er inspectieverslagen en een lijst met openstaande gebreken in staan, plus de regel om nieuwe verslagen toe te voegen en gerepareerde gebreken te markeren.

Op maandag 19-10 slaat Ondřej een verslag van een nieuwe inspectiedag op in de map, opent een nieuwe chat in dezelfde map en schrijft alleen „Er is een nieuw verslag toegevoegd.“ AI vult de lijst aan en markeert twee gebreken als gerepareerd.
## Als u vastloopt

- **AI zegt dat het de map niet kan zien of geen bestand kan opslaan:** u zit in gewone chat. Schakel over naar Cowork of Code volgens het blok „In uw tool“ en geef AI toegang tot de map.
- **Cowork- of Code-modus ontbreekt in uw tool:** in zakelijke accounts schakelt vaak de beheerder dit in, vraag die om inschakeling. Claude heeft geen gratis Cowork, Copilot Cowork vereist een Microsoft 365 Copilot-licentie en Gemini heeft deze modus niet; de procedure staat in „In uw tool“. Als Codex ontbreekt in de ChatGPT-app met persoonlijk account, download dan de nieuwe ChatGPT-desktopapp.
- **U mag niets installeren:** Copilot Cowork en Gemini in Google Drive werken in de browser en kunnen met mappen op het bedrijfsnetwerk werken zonder installatie. Anders stuur een IT-verzoek: „Ik heb een AI-app voor de computer nodig zodat AI met projectbestanden in een map op de computer kan werken.“
- **AI heeft sommige bestanden overgeslagen:** geef de namen door zodat AI ze aanvult. Bij honderden bestanden opent u alleen de submap die bij de taak hoort.
## Wat er klaar zal zijn

U heeft AI in Cowork- of Code-modus die met uw map werkt. In de map staat een nieuw bestand met het resultaat van de taak die u niet in chat kon doen, en AI heeft u verteld waar het de regels heeft opgeslagen: wat er in de map staat en hoe het resultaat aan te vullen bij nieuwe documenten. Volgende keer opent u dezelfde map in een nieuwe chat en schrijft u alleen wat er is veranderd.
## Wat nu

Wilt u al uw lopende werk zo gereed hebben, maak dan een [PACT-werkruimte](card:pact-workspace). Wilt u dat het resultaat automatisch wordt aangevuld, bijvoorbeeld elke maandagmorgen, stel dan een [geplande taak](card:recurring-ai-task) in.
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
