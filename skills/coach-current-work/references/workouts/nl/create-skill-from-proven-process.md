# Maak een skill: een handleiding die AI onthoudt

Van een taak die u met AI eenmaal hebt afgerond, maakt AI een skill en de volgende keer geeft u de opdracht in één zin.

## Maak een skill: een handleiding die AI onthoudt

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met de chat waarin u de taak hebt afgerond.
## Waar is het goed voor

Elke vrijdag stuurt u het management de status van uw drie projecten. AI helpt u daarbij, maar u legt telkens opnieuw uit uit welke bronnen het rapport moet worden samengesteld, dat er bovenaan drie zinnen moeten staan, daaronder een tabel met deadlines en de risico’s pas aan het einde. Als u iets vergeet, ziet de status er anders uit dan vorige week en vraagt de directeur wat er veranderd is.

[Skill](glossary:skill) is een handleiding voor AI voor één type werk, die AI schrijft van een afgeronde chat en de volgende keer zelf gebruikt, zodat u niets opnieuw hoeft uit te leggen.
## Wat u moet voorbereiden

- een chat waarin u met AI een taak hebt afgerond die u regelmatig en op dezelfde manier uitvoert,
- bronnen voor een volgende taak van hetzelfde type; daarmee gebruikt u de skill meteen,
- AI die skills kan opslaan, bijvoorbeeld in de [Cowork](glossary:workmode) of Code modus.
## Hoe u het doet

1. Open de chat waarin u de taak met AI hebt afgerond. Als u die niet hebt, voer dan met AI de taak uit die u voor u hebt en corrigeer haar totdat het resultaat klopt.
2. Voeg aan het einde van de chat een prompt toe. AI schrijft van de chat een skill, slaat die op en vertelt u waar u hem kunt vinden; als ze uw klik nodig heeft, zegt ze waar.
3. Open een nieuwe chat, voeg de bronnen toe voor de volgende taak en geef die in één zin, bijvoorbeeld “Schrijf de status van het project Magazijnverhuizing”. AI zou de skill zelf moeten gebruiken.
## AI-oefening

Voeg deze [prompt](glossary:prompt) in bij de AI die u op het werk gebruikt:

Deze taak ga ik opnieuw doen. Schrijf van wat we in deze chat hebben gedaan een skill, zodat ik hem de volgende keer in één zin kan geven en niets hoef uit te leggen.

Doorloop de hele chat en neem eruit wat werkte: stappen, bronnen die je nodig had, en de vorm van het resultaat die mij uiteindelijk beviel. Verwerk mijn correcties tijdens het werk direct in de stappen. Wat de volgende keer verandert, zoals projectnaam, datum of cijfers, schrijf je niet in de skill; noteer alleen dat je erom moet vragen.

De skill heeft deze onderdelen:
- naam volgens het werk, bijvoorbeeld Projectstatus voor het management,
- wanneer te gebruiken: zinnen waarmee ik zo’n taak gewoonlijk geef,
- wat je nodig hebt en waar je om moet vragen als het ontbreekt,
- stappen,
- hoe het eindresultaat eruitziet.

Voeg aan het einde van de skill een regel toe: als ik het resultaat corrigeer, bied dan aan om de skill volgens de correctie aan te passen.

Sla de skill zo op dat dit hulpmiddel hem bij het volgende werk vindt en zelf gebruikt. Als je voor het opslaan mijn klik nodig hebt, zeg dan precies waar. Als dit hulpmiddel skills niet kan opslaan, zeg dat dan meteen. Schrijf tenslotte waar ik de skill vind en de zin waarmee ik de taak de volgende keer geef.

## In uw hulpmiddel

### Microsoft Copilot
Skills zitten in Cowork naast de Chat-schakelaar; als die er niet is, vraag het aan uw IT-beheerder. In Cowork maakt u een skill aan via Customize, Skills (Add, Create new), of u vraagt AI erom in een taak. Zonder Cowork laat u de skill in Copilot Chat als tekst schrijven en plakt u die in een nieuwe agent (New agent, Skip to configure, Instructions); in stap 3 geeft u de taak dan in deze agent.

### ChatGPT
Skills zitten in de zakelijke abonnementen Business en Enterprise in de zijbalk onder Plugins, op het tabblad Skills, en worden door de beheerder ingeschakeld. Als u ChatGPT in de chat om een skill vraagt, schrijft ze die en biedt installatie aan (Install). Als u geen skills aan hebt staan, laat u de skill als tekst schrijven, plakt u die in de projectinstructies (New project, Project settings) en geeft u de taak in stap 3 in dat project.

### Claude
Claude kan skills in alle abonnementen, in gewone chat en in Cowork, en u vindt ze in Customize, Skills. Ze hebben Code execution and file creation aanstaan nodig in Settings, Capabilities; in zakelijke accounts zet de beheerder dat aan. Claude toont tijdens het werk de naam van de gebruikte skill.

### Gemini
Als u in Customize Skills ziet, maakt u daar een skill aan (Create of Upload); Google zet dat geleidelijk aan voor zakelijke accounts aan. Tot die tijd laat u Gemini de skill als tekst schrijven en slaat u die op als Gem, een opgeslagen assistent met eigen instructies: in Gems, New Gem plakt u de tekst in Instructions en voegt u het vorige resultaat toe aan Knowledge. In stap 3 opent u deze Gem en geeft u de taak daarin.
## Wat is een skill

Een skill is een handleiding voor AI voor één type werk: wanneer te gebruiken, wat nodig is, stappen en hoe het resultaat eruit moet zien. AI schrijft hem: u rondt een taak met haar af en zij schrijft en slaat de skill van wat werkte. Het is een gewone tekstbestand waaraan AI een sjabloon of voorbeeldresultaat kan toevoegen.

Welke skill te gebruiken, herkent AI aan de beschrijving wanneer die te gebruiken is. Daarom staan er zinnen in waarmee u de taak gewoonlijk geeft, en daarom kunt u tientallen skills hebben en kiest AI de juiste. Hulpmiddelen die skills ondersteunen, gebruiken meestal dezelfde vorm, zodat een skill ook in een ander hulpmiddel kan worden gebruikt.

Skills kan AI in de Cowork- of Code-modus gebruiken en in sommige hulpmiddelen ook in gewone chat; als uw AI niet kan opslaan, schakel dan over volgens het tabblad [Chat, Cowork of Code](card:when-chat-is-not-enough). Of AI een skill gebruikte, ziet u aan de naam tijdens het werk (in Cowork bij een nieuwe taak); als u die niet ziet, vraag het dan. Het resultaat moet dezelfde vorm hebben als de vorige keer en projectnaam, datum of cijfers vraagt AI opnieuw op.

In een skill hoort wat zich herhaalt: procedure, vorm van het resultaat en uw correcties.
## Laat skills vanzelf ontstaan

De beste momenten voor een skill zijn het einde van werk dat goed ging. Om u dat moment door AI te laten herinneren, laat u haar één regel opslaan. In Cowork of Code, waar AI werkt met een map op uw computer, schrijft ze die in het bestand `AGENTS.md`. Dat is een gewone tekstbestand met regels voor AI die veel hulpmiddelen in Code-modus aan het begin van elk werk lezen; waar het hulpmiddel het zelf niet kan, slaat AI de regel op in de instellingen of zegt waar u die moet plaatsen. In gewone chat slaat AI de regel in het geheugen op. Geef haar dit:

```text
Sla een regel op voor elk volgend werk: “Als we samen een taak afronden die ik opnieuw ga doen, bied me dan aan om er een skill van te maken.” Als je in een map werkt, schrijf die dan in het bestand AGENTS.md, en als het bestand niet bestaat, maak het aan. Zorg dat je het in dit hulpmiddel aan het begin van elk werk leest; in Cowork schrijf je het in de mapinstructies. In gewone chat sla je de regel in het geheugen op.
```
## Voorbeeld

Jana coördineert drie projecten bij een bouwbedrijf en stuurt elke vrijdag het management de status. Op vrijdag 9-10 maakt ze met AI in Cowork de status van het project Nieuw magazijn. Ze geeft haar het verslag van de vergadering en een tabel met deadlines en corrigeert haar twee keer: het management wil bovenaan drie zinnen en risico’s pas aan het einde, niet verborgen in de tekst. Daarna voegt ze de prompt toe en AI slaat de skill op:

```text
Projectstatus voor het management
- Wanneer te gebruiken: “projectstatus”, “rapport voor management”, “hoe staat het met het project”.
- Wat je nodig hebt: projectnaam, laatste vergaderverslag en tabel met deadlines. Als iets ontbreekt, vraag erom.
- Stappen: selecteer uit de bronnen wat deze week is gedaan, vergelijk deadlines met planning en zoek wat vertraagd is.
- Resultaat: drie zinnen bovenaan, daaronder een tabel met mijlpalen, deadline en status, aan het einde risico’s en wie ze oplost.
- Als ik het resultaat corrigeer, bied dan aan om deze skill volgens de correctie aan te passen.
```

Diezelfde middag opent ze een nieuwe chat, voegt het verslag en de deadlines van het project Magazijnverhuizing toe en schrijft alleen “Schrijf de status van het project Magazijnverhuizing”. AI toont tijdens het werk dat ze de skill Projectstatus voor het management gebruikt en levert drie zinnen, tabel en risico’s zonder dat Jana iets hoeft uit te leggen. Het derde project is klaar in vijf minuten. Voor het einde van de maand maakt ze ook skills voor het vergaderverslag en de materiaalaanvraag.
## Als u vastloopt

- **AI zegt dat ze de skill niet kan opslaan:** in zakelijke accounts schakelt de beheerder skills vaak aan, dus schrijf hem; wat waar aan te zetten staat in het blok “In uw hulpmiddel”. Tot die tijd schakel over naar Cowork of Code. De chat gaat niet mee, dus begin daar opnieuw bij stap 1. Meer in het tabblad [Chat, Cowork of Code](card:when-chat-is-not-enough).
- **AI gebruikte de skill niet in de nieuwe chat:** de beschrijving wanneer de skill te gebruiken is, past niet bij de woorden waarmee u de taak geeft. Schrijf uw zin aan AI en vraag haar de beschrijving in de skill aan te passen. Tot die tijd schrijft u direct “Gebruik skill” en de naam.
- **Skill beschrijft één specifieke taak:** projectnaam, datum of cijfers van vroeger horen niet in de skill. Vraag AI die eruit te halen en de volgende keer opnieuw op te vragen.
- **Resultaat klopt nog steeds niet:** corrigeer het in de chat en accepteer als AI aanbiedt de skill aan te passen. Als dezelfde fout terugkomt, zoek met AI de oorzaak volgens het tabblad [Controleer AI-uitvoer](card:kontrola-vysledku).
## Wat klaar zal zijn

U hebt een skill voor een taak die u regelmatig doet en weet waar u die vindt. In een nieuwe chat gebruikte AI hem zelf en leverde de volgende taak van hetzelfde type in dezelfde vorm als de vorige keer. Als u het resultaat corrigeert, biedt AI aan de skill volgens de correctie aan te passen.
## Wat nu

Een skill start niet vanzelf, hij wacht tot u de taak geeft. Als de projectstatus elke vrijdag om 12:00 zonder u moet ontstaan, stel hem dan in als een [geplande taak](card:recurring-ai-task). Als u het resultaat van één skill gebruikt als bron voor een volgende taak, bijvoorbeeld een samenvatting voor de hele afdeling uit projectstatussen, voeg dan de tweede stap direct toe aan de skill.
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

## Blok plannen

Optionele productmechaniek na het afronden van een kaart, waarvan het resultaat leidt tot werk dat niet binnen vijftien minuten past. Het is geen zelfstandige kaart, heeft geen eigen voltooiing en verhoogt het aantal voltooide methoden niet.

Kaarten zijn vijftien minuten lang en eindigen met een artefact. Sommige kaarten beginnen echter pas met een artefact: er ontstaat een fasekaart, een onderzoeksbrief, een skill-ontwerp of twee takken voor integratie. De persoon vertrekt met een plan maar zonder tijd, en keert daarna na tien minuten tussen vergaderingen terug naar het werk, waar niets afgerond kan worden.

## Wanneer wordt het aangeboden

- de kaart is geëindigd met een bruikbaar resultaat en dat resultaat is een opdracht voor vervolgwerk,
- dat werk heeft een duidelijk einde dat in één zin benoemd kan worden,
- bij normale opsplitsing in korte stukken zou het uiteenvallen, omdat elke terugkeer begint met het opnieuw laden van de context.

De mechaniek verschijnt niet als het werk na de kaart echt binnen vijftien minuten past, als de volgende stap op iemand anders wacht of op goedkeuring, of als het resultaat van de kaart geen vervolgwerk heeft.

## Wat de gebruiker ziet

Een korte keuze **Blok plannen** naast de gezamenlijke check-in. Na openen vraagt de AI slechts één ding: wanneer die tijd daadwerkelijk beschikbaar is. De rest stelt zij zelf voor op basis van wat in de kaart is ontstaan.

## Wat de AI creëert

Een brief van het blok. De bron is het resultaat van de zojuist voltooide kaart; de mechaniek verzint geen nieuw onderwerp. Het bevat vijf onderdelen:

- **één ding**, benoemd zoals het er voltooid uitziet,
- **duur** tussen 60 en 120 minuten, met wat erin past en wat niet,
- **wat vooraf klaar moet zijn**: toegang, data, onderlagen, prompt uit de kaart,
- **wat aan het einde af moet zijn**, dus een concreet resultaat, geen "voortgang" of "in bewerking",
- **wat er met de rest gebeurt** die niet in het blok past, zodat er geen onafgemaakte zaken blijven hangen.

Als blijkt dat één ding eigenlijk drie zijn, zegt de AI dat en biedt aan welke daarvan in het eerste blok hoort. Ze stelt niet van tevoren een verdeling in drie blokken voor.

## Actieve tijd versus wachten

Een blok met AI heeft een andere opbouw dan een blok zelfstandig werk, omdat een deel van de tijd een tool draait. Onderzoek, agent, langere generatie of dataverwerking duren minuten tot tientallen minuten en de persoon hoeft er niet bij te zitten.

De brief onderscheidt daarom drie soorten tijd: actieve menselijk werk, AI-run en wachten op iemand anders. Voor de AI-run stelt hij voor wat er tussendoor gedaan kan worden, meestal de voorbereiding van de volgende stap van hetzelfde resultaat. Overschakelen naar niet-gerelateerd werk breekt het blok, ook al lijkt het benut tijd.

Als wachten het grootste deel van het blok zou innemen, zegt de mechaniek dat direct: zo’n taak hoort eerder in [Laat AI werken als je er niet bij bent](card:recurring-ai-task).

## Kalender

De mechaniek bereidt een evenementtekst voor: naam volgens het ene ding, duur en in de beschrijving wat vooraf klaar moet zijn. De gebruiker kan die zelf invoeren.

De mechaniek schrijft niets in de kalender of een ander gedeeld systeem zonder toestemming en stuurt niemand een uitnodiging.

## Afbakening ten opzichte van kaarten

| Wat het niet is | Waar het is |
|---|---|
| Gereserveerde tijd voor een team dat een besluit van de leiding nodig heeft, geannuleerde vergaderingen en een mentor binnen handbereik | kaart [Geef het team een blok voor een echt AI-project](card:ai-sprint) |
| AI-werk terwijl de persoon er niet bij is | kaart [Laat AI werken als je er niet bij bent](card:recurring-ai-task) |
| Opsplitsing van een project in stappen en rollen | kaart [Maak een AI-WBS voor de eerste fase van een project](card:ai-wbs-project) |

Een blok plant de persoon zelf en heeft geen toestemming van anderen nodig. Daarmee verschilt het van een sprint, waar die toestemming juist een belangrijk deel van het werk is.

## Wat de mechaniek niet bevat

Instructies voor concentratie, aanbevelingen voor telefoon, notificaties en omgeving. De bibliotheek leert doorlopen. Adviezen van dit soort zouden van de mechaniek een preek over werk maken in plaats van de voorbereiding van één concreet blok.

## Registratie

In de check-in kan worden toegevoegd dat er een brief van het blok is gemaakt. Het is geen zelfstandige voltooiing van een kaart. Of het blok heeft plaatsgevonden, volgt de mechaniek niet.

## Eerste ondersteunde kaarten

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Andere kaarten met vervolgwerk langer dan vijftien minuten, zoals `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` en `sjednotit-data-z-vice-zdroju`, zijn kandidaten voor een tweede golf. De mechaniek meteen op de helft van de bibliotheek hangen zou van de keuze ruis maken.
