# Controleer tekst met anti-slop: zorg dat het niet als AI-tekst klinkt

AI herkent in teksten uitdrukkingen en beloften waaraan lezers AI herkennen, herschrijft ze en bewaakt volgende teksten zelf.

## Controleer tekst met anti-slop: zorg dat het niet als AI-tekst klinkt

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met één tekst die je wilt versturen.
## Waarvoor is het nuttig

Op donderdag stuur je mevrouw Horáková van inkoop een offerte voor het onderhoud van bedrijfsbusjes. De introductie is door AI geschreven en begint met een zin over een betrouwbare partner in moeilijke tijden, net als vier andere offertes op haar bureau. Bovendien staat erin dat de reparatie binnen 24 uur klaar is, terwijl niemand van het bedrijf dat heeft beloofd.

Algemene frasen en onbevestigde beloften verdwijnen zodra AI ze vergelijkt met de aanvraag en prijslijst en vervangt door wat er echt staat.
## Wat je moet voorbereiden

- de tekst die je wilt versturen en die geheel of gedeeltelijk door AI is geschreven,
- de onderliggende documenten: aanvraag, prijslijst of aantekeningen van een gesprek,
- de AI die je op het werk gebruikt, of AI in [Cowork- of Code-modus](glossary:workmode).
## Hoe te werk te gaan

1. Plaats de prompt en zet onder de regel „Tekst:“ de tekst of bestandsnaam in de map; voeg in de chat de onderliggende documenten toe. AI geeft de bevindingen en herschreven tekst terug en laat bestandsgedeelten in de chat weg.
2. Geef aan welke correcties je niet wilt en vul plekken met `[AANVULLEN]` aan, of laat ze doorstrepen. AI maakt de tekst af, slaat de lijst met uitdrukkingen en regel op en vertelt je waar.
3. Laat AI in een nieuwe chat een andere tekst schrijven, bijvoorbeeld een antwoord aan een klant. Uitdrukkingen uit de lijst mogen daarin niet voorkomen.

In de lijst horen alleen uitdrukkingen die ook in andere teksten kunnen voorkomen.
## AI-oefening

Voer deze [prompt](glossary:prompt) in de AI in die je op het werk gebruikt:

Controleer de tekst aan het einde van dit bericht voordat ik hem verstuur. Er staat een bestandsnaam in de map of de volledige tekst. Zoek zinnen waaraan de lezer kan herkennen dat AI het schreef en herschrijf ze zodat het klinkt alsof een deskundige mens het schreef.

Doorloop de tekst met vier filters:
- Specificiteit: uitspraken en bijvoeglijke naamwoorden zonder bewijs, zoals „betrouwbare partner“ of „bespaart aanzienlijk“. Vervang ze door een getal, naam, datum of situatie uit de onderliggende documenten.
- Patronen: afgezaagde uitdrukkingen („in deze drukke tijden“, „we tillen u naar een hoger niveau“, „neem gerust contact op“), tegenstellingen als „het gaat niet alleen om X, maar om Y“ en vage afsluitingen die niets zeggen.
- Ritme: drie of meer zinnen van gelijke lengte achter elkaar, ketens van korte zinnen en automatische drietalwoorden.
- Formaat: lange streepjes, emoji in plaats van opsommingstekens en sterretjes uit Markdown in tekst waar ze niet vet worden, bijvoorbeeld in e-mails.
Vraag tenslotte bij de hele tekst: zou deze op de website van elk bedrijf kunnen staan? Zo ja, herschrijf dan concreter.

Bedenk geen cijfers, data, namen of beloften. Vergelijk ze met de onderliggende documenten in de map of chat. Wat er niet in staat, markeer je met [AANVULLEN] en vraag je aan mij.

Geef eerst de bevindingen: citaat uit de tekst, overtreden filter en betere versie. Daaronder de volledige herschreven tekst. Ik zal aangeven welke correcties ik niet wil en aanvullen wat ontbreekt. Sla de definitieve tekst op in een nieuw bestand naast het origineel en geef me de naam. Als ik de tekst in de chat heb geplaatst, geef hem dan volledig terug.

Sla maximaal vijf uitdrukkingen uit de bevindingen op die waarschijnlijk ook in andere teksten voorkomen in het bestand anti-slop.md in de werkmap. Schrijf bij elke uitdrukking waarmee die vervangen moet worden en kort de vier filters. Als het bestand al bestaat, voeg dan alleen nieuwe uitdrukkingen toe. Voeg in het bestand AGENTS.md in dezelfde map de regel toe: „Controleer elke tekst die onder mijn naam naar buiten gaat eerst volgens anti-slop.md.“ Als AGENTS.md niet bestaat, maak het aan. Zorg dat je het in dit hulpmiddel aan het begin van elk werk leest; in Cowork zet je het in de mapinstructies. Werk je in een gewone chat zonder map, maak dan geen bestanden aan en sla alleen de lijst met uitdrukkingen en regel op in je geheugen: „Controleer elke tekst die onder mijn naam naar buiten gaat eerst volgens deze lijst.“ Vertel me tenslotte waar je de lijst en regel hebt opgeslagen.

Tekst:

## In jouw tool

### Microsoft Copilot
Plak de tekst in Copilot Chat en voeg de onderliggende documenten toe via + bij het berichtveld.
Copilot bevestigt opslag in het geheugen met de melding Memory updated; overzicht vind je in instellingen onder Chat settings › Personalization › Saved memories. Zonder geheugen typ „Geef lijst als tekst“ en plak die in Custom instructions op dezelfde plek. Copilot heeft skills in Cowork-modus (Customize › Skills) als het bedrijf die heeft ingeschakeld.

### ChatGPT
In gewone chat slaat ChatGPT de lijst op in het geheugen (instellingen, Personalization › Memory); zonder geheugen plak je hem in Custom Instructions op dezelfde plek. Met een map werkt Codex in de ChatGPT desktop-app: kies open a folder en `anti-slop.md` en regel in `AGENTS.md` worden automatisch opgeslagen. ChatGPT heeft skills in Business-, Enterprise- en Edu-abonnementen.

### Claude
In gewone chat slaat Claude de lijst met regel op in het geheugen. In Cowork kies je bij taakopdracht de map met tekst en AI noteert de link naar `AGENTS.md` in de mapinstructies; Claude Code leest `AGENTS.md` zelf. Claude heeft skills in chat, Cowork en Claude Code.

### Gemini
De vaste plek voor de lijst is in Gemini Gem, omdat het werkaccount geen geheugen heeft. Schrijf aan het einde „Geef alleen lijst met uitdrukkingen en regel“ en sla op via Share & export › Export to Docs. Maak dan Gems › New Gem: in instructies „Controleer elke tekst volgens de lijst in het bijgevoegde document“, voeg het document toe via Knowledge › Add from Drive. Stap 3 en volgende teksten maak je in deze Gem.
## Wat is anti-slop

Anti-slop is een controle waarbij AI zinnen herkent die typisch zijn voor AI en ze herschrijft naar concrete zinnen uit jouw onderliggende documenten. Slop is Engels voor afval; op internet worden zo teksten genoemd die AI zonder zorg maakt en die op de website van elk bedrijf zouden kunnen staan. Cijfers en data verzint AI niet; wat niet in de documenten staat, markeert het en vraagt het aan jou.

De controle werkt met vier filters uit de prompt. Specificiteit controleert zinnen die over elk bedrijf geschreven kunnen zijn en vervangt ze door cijfers, namen en situaties uit jouw documenten. Patronen zijn frasen die AI steeds herhaalt, zoals een introductie over moeilijke tijden of een afsluiting met de oproep om contact op te nemen. Ritme verraadt AI als het meerdere zinnen van gelijke lengte achter elkaar schrijft of altijd in drietallen opsomt, bijvoorbeeld „snel, goedkoop en betrouwbaar“. Formaat controleert lange streepjes die mensen bijna niet typen en emoji in plaats van opsommingstekens.

`anti-slop.md` is een gewone tekstbestand in de map met de tekst. Het bevat een lijst met ongewenste uitdrukkingen en waarmee ze vervangen moeten worden. De extensie `.md` betekent dat het in [Markdown](glossary:markdown) is geschreven. `AGENTS.md` is een bestand met regels voor AI in dezelfde map. AI in Cowork- of Code-modus leest het aan het begin van elk werk, dus je hoeft de controle niet steeds opnieuw te starten; waar het nodig is, regelt AI dat volgens de prompt. In gewone chat slaat AI de lijst met regel op in het geheugen; waar het hulpmiddel geen geheugen heeft, vind je een alternatief in het blok „In jouw tool“.
## Laat de controle automatisch starten

Maak van de lijst met uitdrukkingen een [skill](glossary:skill), een opgeslagen instructie, zodat de controle in al je projecten draait, niet alleen in de map met `AGENTS.md`. AI opent die automatisch telkens als het een tekst voor mensen schrijft onder jouw naam. Waar je tool skills heeft, zie je dat in het blok In jouw tool. Werk je alleen in gewone chat en heeft AI de lijst in het geheugen, dan is deze stap niet nodig. In de map met `anti-slop.md` volstaat:

```text
Maak een skill met de naam anti-slop van de lijst in anti-slop.md; als je het bestand niet ziet, neem dan de lijst uit je geheugen. Het moet elke keer starten als je voor mij een tekst schrijft of bewerkt die onder mijn naam naar buiten gaat: e-mail, offerte, bericht of webtekst. De skill doorloopt de tekst met vier filters uit het bestand, corrigeert uitdrukkingen uit de lijst en verzint geen cijfers of beloften. Als ik je een nieuwe ongewenste uitdrukking noem, voeg die dan toe aan de skill. Sla de skill zo op dat hij in al mijn projecten werkt; als ik hem zelf moet opslaan of activeren, vertel me dan precies waar ik moet klikken.
```
## Voorbeeld

Martin Dvořák van de bedrijfsautowerkplaats stuurt op 15-10-2026 een offerte naar mevrouw Horáková van een logistiek bedrijf. In de aanvraag staat dat het bedrijf 38 busjes heeft in Brno en Olomouc en dat de reparatie nu tot een week duurt. De introductie van de offerte is door AI geschreven:

```text
In deze drukke tijden is een betrouwbare partner voor wagenparkbeheer cruciaal. Wij bieden een complete service, snelle reactie en persoonlijke aanpak. De reparatie doen we binnen 24 uur. Neem gerust contact met ons op.
```

AI geeft vier bevindingen terug. De eerste zin vervangt het door een situatie uit de aanvraag: „U schrijft dat u voor de reparatie van een van uw 38 busjes nu tot een week wacht.“ In plaats van de hele tweede zin somt het volgens de prijslijst op wat de service omvat: periodieke controles en een vervangend voertuig tijdens de reparatie. De reparatie binnen 24 uur markeert het met `[AANVULLEN]`, omdat het niet in de documenten staat. De afsluiting verandert het in een concrete vervolgstap: „Laat me weten welk busje we als eerste moeten controleren.“

Martin controleert bij de werkplaatschef dat een gewone reparatie binnen twee werkdagen klaar is. AI vult dat in de tekst aan en schrijft in `anti-slop.md`:

```text
### Uitdrukkingen die ik niet wil
- „in deze drukke tijden“: begin met een situatie van de klant uit de aanvraag
- „complete service“: som op wat de service omvat
- „neem gerust contact met ons op“: schrijf één concrete vervolgstap
```

Op maandag 19-10 laat Martin in dezelfde map AI een andere klant beantwoorden. Het antwoord eindigt met de vraag welke dag de eerste controle uitkomt, en uitdrukkingen uit de lijst komen er niet in voor.
## Als je vastloopt

- **AI corrigeert maar een paar woorden en de tekst klinkt nog steeds hetzelfde:** vraag AI de hele alinea te herschrijven en te beginnen met een situatie van de lezer, en voeg het document toe waaruit het moet putten, bijvoorbeeld de aanvraag of aantekeningen van het gesprek.
- **Er staan veel `[AANVULLEN]` in de tekst:** AI heeft geen cijfers om te gebruiken. Voeg een prijslijst, contract of aanvraag toe. Uitspraken die je niet kunt bevestigen, laat AI uit de tekst schrappen.
- **AI zegt dat het `anti-slop.md` heeft opgeslagen, maar het staat niet in de map:** je werkt waarschijnlijk in een gewone chat die geen bestanden kan wijzigen. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough), of vraag AI de lijst in het geheugen op te slaan.
- **In een nieuwe chat schrijft AI uitdrukkingen uit de lijst weer:** open in Cowork of Code de chat in dezelfde map en vraag AI `AGENTS.md` te lezen en te zorgen dat het bij elk werk in dit hulpmiddel wordt gelezen. In gewone chat ga terug naar de chat waar de controle was en vraag AI de lijst met uitdrukkingen en regel in het geheugen op te slaan. Geheugen moet aanstaan in de instellingen.
## Wat klaar zal zijn

Je hebt een tekst die je kunt versturen: zonder AI-typische uitdrukkingen en met cijfers en beloften die je hebt bevestigd. In de map ligt `anti-slop.md` met de lijst uitdrukkingen die je niet meer wilt en in `AGENTS.md` de regel waarmee AI elke volgende tekst zelf controleert; in gewone chat heeft AI de lijst met regel in het geheugen of in eigen instructies van het hulpmiddel. In een nieuwe chat heb je gecontroleerd dat AI de regel echt gebruikt.
## Wat nu

Feiten, cijfers en bronnen in een rapport of presentatie controleer je met de kaart [Controleer AI-uitvoer](card:kontrola-vysledku). Wil je dat AI meteen in jouw stijl schrijft, sla die dan op in [eigen Custom Instructions](card:custom-instructions).
## Markdown

**Wat het is:** Een eenvoudig platte-tekstformaat waarin koppen, lijsten, links en andere structuren worden geschreven met een paar gewone tekens. Bestanden gebruiken meestal de extensie `.md`.

**Wat het niet is:** Het is geen programmeertaal en ook geen formaat dat uitsluitend voor ontwikkelaars bedoeld is.

**Waarom studenten het nodig hebben:** Het blijft gemakkelijk leesbaar en bewerkbaar voor zowel mensen als AI en kan worden overgedragen tussen verschillende tools.

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
