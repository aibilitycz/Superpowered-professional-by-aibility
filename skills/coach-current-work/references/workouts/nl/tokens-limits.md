# Bespaar tokens: laat uw AI-limiet een hele week meegaan

Verplaats werk uit een lange chat naar een nieuwe, AI vergeet minder en uw limiet gaat langer mee.

## Bespaar tokens: laat uw AI-limiet een hele week meegaan

**Moeilijkheidsgraad: gemakkelijk.**\
**Tijd: ongeveer 15 minuten** met één lange chat.
## Waarvoor is het nuttig

U werkt al drie weken met AI aan een beurs in één chat. De laatste dagen reageert de AI langzamer, verwart oude prijslijsten met nieuwe en meldt woensdagmiddag dat u uw weeklimiet hebt bereikt. Het aanbod dat u vrijdag moet inleveren, maakt u dus zonder AI af.

AI leest bij elk nieuw bericht de hele chat opnieuw, dus u bespaart het meest door de lange chat te vervangen door een nieuwe die voortbouwt op een korte samenvatting.
## Wat u moet voorbereiden

- de chat waarin u het langst aan één project werkt,
- de AI waarmee u die chat voert.
## Hoe u het doet

1. Plaats de prompt in de chat waarin u het langst werkt. In Cowork of Code AI wordt de samenvatting opgeslagen in `handoff.md` en de regels in `AGENTS.md`, in een gewone chat krijgt u ze in het antwoord en de geheugenfunctie.
2. Lees de samenvatting, corrigeer wat niet klopt en open een nieuwe chat: in Cowork of Code typt u „Ga verder volgens `handoff.md`“, in een gewone chat plakt u de samenvatting en de bestanden eruit.
3. Als uw tool een limiet toont, kijk hoeveel er nog over is en wanneer die wordt vernieuwd. Waar u dat vindt, staat in het blok „In uw tool“.

In de samenvatting staat alleen wat de nieuwe chat nodig heeft om verder te werken.
## AI-oefening

Plaats deze [prompt](glossary:prompt) in de AI die u op het werk gebruikt:

Deze chat is lang en bij elk nieuw bericht lees je de hele chat opnieuw, waardoor mijn limiet slinkt en je slechter reageert. Bereid een werkverplaatsing naar een nieuwe chat voor en stel regels in zodat dit niet opnieuw gebeurt.

Schrijf eerst een samenvatting waarmee de nieuwe chat verder kan zonder deze chat te lezen. Verdeel die onder deze koppen en schrijf ze met hekken ###:
- Doel,
- Klaar,
- Geldig: besluiten en regels waar we het over eens zijn,
- Nog te doen: volgende stappen in volgorde,
- Bestanden voor verder werk: alleen die echt nodig zijn voor de volgende stappen.
Beperk het tot één pagina. Herschrijf het chatverloop niet en laat doodlopende paden weg. Als je twijfelt of iets nog geldt, vraag het mij.

Schrijf daarna deze regels voor verder werk op:
- Als de chat te lang wordt of we een taak afronden en een nieuwe starten, schrijf dan een nieuwe samenvatting in hetzelfde formaat en stel voor om in een nieuwe chat verder te gaan.
- Begin het werk vanuit de samenvatting en werk alleen met bestanden die de taak nodig heeft. Doorzoek niet de hele map en vraag mij geen bijlagen die de taak niet nodig heeft.
- Doe bulkwerk waarbij dezelfde beslissing bij tientallen of honderden items herhaald wordt met een goedkoper model: als je het kunt, zet dan subagents met een kleiner model in, anders vertel me naar welk model ik moet overschakelen. Breng alleen het resultaat terug in de hoofdchat.

Waar wat opslaan:
- Werk je in een projectmap, sla dan de samenvatting op in `handoff.md`, overschrijf die als hij al bestaat en houd je aan het formaat. Voeg de regels toe aan `AGENTS.md`, maak die aan als hij ontbreekt. Zorg dat je `AGENTS.md` in dit tool bij elke start van werk leest; in Cowork zet dat in de mapinstructies.
- Heb je geen toegang tot de projectmap, maak dan geen downloadbestanden. Schrijf de samenvatting in het antwoord en bewaar de regels in het geheugen; heb je geen geheugen aan, schrijf dan de regels onder de samenvatting zodat ik ze in de nieuwe chat kan plakken.

Schrijf tenslotte in één zin wat in deze chat het meeste ruimte innam, zodat ik dat de volgende keer kan vermijden.

## In uw tool

### Microsoft Copilot
Microsoft publiceert geen limieten voor Copilot met licentie en toont geen verbruiksoverzicht; de licentie geeft voorrang op toegang. Verplaatsen naar een nieuwe chat helpt ook hier, want AI leest dan alleen de samenvatting en verwart oude versies niet meer met nieuwe. Copilot slaat de regels op in het geheugen (Saved memories in Settings and more, Chat settings, Personalization).

### ChatGPT
In zakelijke abonnementen heeft het standaardmodel bijna geen limiet, maar modellen die langer nadenken en Codex wel. Als u die limiet bereikt, gaat ChatGPT verder met een ander model en toont wanneer de limiet wordt vernieuwd. Het verbruik van Codex ziet u in Settings, Usage en met het commando `/status` in Codex (ook vrije ruimte in chat); gewone chat toont dat niet.
Regels slaat AI in gewone chat op in het geheugen (Settings, Personalization, Memory).

### Claude
Claude heeft een limiet per vijf uur en een weeklimiet; beide tellen gewone chat, Cowork en Claude Code mee. Wat er over is, ziet u in Settings, Usage en met het commando `/usage` in Claude Code; `/context` toont wat ruimte inneemt in de chat. Voor bulkwerk volstaat het kleinere model Haiku of Sonnet in plaats van het krachtigste model Opus.

### Gemini
Uw resterende limiet vindt u in Gemini onder Settings (linksonder), Usage Limits. Sterkere modellen hebben een berichtlimiet per enkele uren of per dag; is die op, dan kunt u in dezelfde chat verder met het snelle model Fast. Zakelijke accounts hebben geen geheugen, dus sla regels op in Gemu (Gems, New Gem, Instructions) en open de nieuwe chat uit stap 2 daarin.
## Wat zijn tokens en limieten

AI leest en schrijft tekst in stukjes die tokens heten; een token is ongeveer een deel van een woord. Tokens tellen mee voor de limiet die u in uw abonnement hebt of die uw bedrijf instelde. Hoe uw tool dat telt, leest u in het blok „In uw tool“.

Een lange chat is duur omdat AI bij elk nieuw bericht de hele chat vanaf het begin leest, inclusief alle bijlagen. Daarom kost zelfs een korte vraag in een chat die al de hele dag loopt limiet voor de hele chat. Elke chat heeft ook een contextvenster, hoeveel tekst AI tegelijk kan onthouden. Is dat vol, dan houdt AI van het oudere deel alleen een korte samenvatting bij, waardoor het afspraken vergeet.

`handoff.md` is een gewone tekstfile in de projectmap met altijd alleen de actuele werkstatus. Hetzelfde bestand dient ook voor [overdracht van werk](card:handoff) aan een collega. Hekken `###` markeren koppen; zo’n notatie heet [Markdown](glossary:markdown). `AGENTS.md` is een bestand met regels voor AI in dezelfde map. Veel tools in Code-modus lezen dat zelf bij elke start; waar dat niet kan, slaat AI de regel op in de instellingen of vertelt waar u hem moet plakken.
[Subagent](glossary:subagent) is een hulp-AI die de hoofd-AI op een deeltaak loslaat. Die werkt in een eigen chat en levert alleen het resultaat terug, zodat de hoofdchat kort blijft.

Heeft u geen geheugen aan, dan schrijft AI de regels onder de samenvatting en plakt u ze in de nieuwe chat. Wilt u dat AI samenvattingen zelf opslaat bij het project, dan heeft u AI in [modus](glossary:workmode) Cowork of Code nodig; hoe u overschakelt, leest u op de kaart [Chat, Cowork of Code](card:when-chat-is-not-enough).
## Laat AI zelf besparen

De regels in `AGENTS.md` gelden in elke nieuwe chat in de projectmap. AI stelt zelf een nieuwe chat voor als de huidige te lang wordt, leest alleen bestanden die de taak nodig heeft en stuurt bulkwerk naar een goedkoper model. Voor het sorteren of herschrijven van honderden items volstaat een kleiner model en dat scheelt veel limiet.

Werk u aan meerdere projecten, laat de regels dan overal gelden. Tools in Code-modus hebben naast projectregels ook regels die voor al uw projecten gelden. Typ in elk project:

```text
Voeg de tokenbesparingsregels uit AGENTS.md in deze map ook toe aan je regels die voor al mijn projecten gelden.
```

Hoe u ook bespaart op commando-uitvoer en antwoordlengte, leest u in het blok „Hoe besparen in Code-modus“.
## Hoe besparen in Code-modus

In [Code-modus](glossary:workmode) bespaart AI het meest door grote zoekopdrachten buiten de hoofdchat te laten lopen en teksten die het leest en schrijft te verkorten.

Grote zoekopdrachten, bijvoorbeeld contractboetes in 300 contracten, stuurt AI naar een [subagent](glossary:subagent) die alleen het resultaat terugbrengt in de hoofdchat. Ook subagent gebruikt limiet, daarom zet AI hem alleen in voor zoekopdrachten waarvan de resultaten de hoofdchat anders zouden vullen.

Raakt de chat toch vol, dan vervangt AI het oudere deel zelf door een korte samenvatting en werkt verder. Ook dat bespaart limiet, want AI leest dan de hele chat en van oudere berichten blijven alleen de hoofdlijnen over. Na een afgeronde taak is het daarom goedkoper een nieuwe chat te starten volgens `handoff.md`. Wat ruimte inneemt in de chat toont u met een commando dat u in het berichtveld typt; welk commando dat is, leest u in het blok „In uw tool“.

Twee andere besparingen vereisen installatie. AI in Code-modus voert tijdens het werk commando’s uit, bijvoorbeeld bij het omzetten van tabellen of het doorlopen van bestandswijzigingen, en leest alles wat ze uitspugen. De gratis tool RTK verkort de uitvoer van gewone commando’s volgens de makers met 60 tot 90 % voordat AI het leest. De Caveman-plugin, een AI-aanvulling, verkort AI-antwoorden in chat tot een paar woorden, alsof een holbewoner spreekt. Vindt u korte antwoorden niet prettig, typ dan „stop caveman“ en AI antwoordt tot het einde van de chat weer normaal; u schakelt het permanent uit als u dat vraagt.

AI schrijft volgens de prompt eerst de regels en installeert tools pas na uw bevestiging. Mag u op uw werkcomputer niet installeren of weet u het niet, dan maakt AI een bericht voor de IT-beheerder.

Plaats deze prompt in AI in Code-modus, geopend in uw map:

```text
Stel tokenbesparing in voor werk in Code-modus.

1. Voeg deze regels toe aan AGENTS.md (maak het aan als het ontbreekt) en zorg dat je het in dit tool bij elke start van werk leest:
- Heeft een taak zoeken in de hele map of lange uitvoer nodig, zet er dan een subagent met een kleiner model op als je dat kunt, en breng alleen het resultaat terug in de hoofdchat.
- Gebruik je RTK, vergelijk bestanden dan met een commando dat RTK niet inkort (op Mac en Linux /usr/bin/diff, op Windows fc.exe), want ingekorte vergelijking kan verschillen missen.
- Schrijf teksten die je voor mij in bestanden maakt volledig, ook al antwoord je in chat kort.

2. Vertel me daarna in twee zinnen wat je installeert, waarvandaan en wat dat in al mijn projecten verandert, en wacht tot ik bevestig dat ik het op het werk mag en wil installeren:
- RTK volgens README op github.com/rtk-ai/rtk, niet via cargo install rtk. In Claude Code activeer je het met rtk init -g --auto-patch, in Codex met rtk init -g --codex. Controleer met rtk gain of het besparingen toont; kent het commando het niet, dan heb je een ander pakket met de naam rtk, verwijder dat en installeer RTK opnieuw.
- Caveman volgens de handleiding voor dit tool op github.com/JuliusBrussee/caveman, zodat je in chat kort antwoordt en het automatisch aan gaat bij elke start van werk.

Als installatie wordt geblokkeerd, bijvoorbeeld door ontbrekende rechten, een beheerderswachtwoord of onduidelijkheid over toestemming, stop dan en schrijf een kort bericht voor de IT-beheerder. Moet ik het zelf afmaken, schrijf dan precies wat ik moet doen. Vertel me tenslotte wat je hebt ingesteld, of ik een nieuwe chat moet openen of het tool moet herstarten en hoe ik alles terugdraai als er iets niet werkt.
```
## Voorbeeld

Lucie coördineert de deelname van haar bedrijf aan de beurs in oktober. Vanaf 21 september werkt ze met AI in Code-modus in één chat in de projectmap. Woensdag 7 oktober ziet ze dat ze 85 % van haar weeklimiet heeft verbruikt en schrijft AI in de uitnodiging prijzen in kronen, terwijl ze twee weken geleden besloot dat die in euro’s komen. Lucie plaatst de prompt en AI schrijft in `handoff.md`:

```text
### Doel
Stand voorbereiden voor de beurs van 20 tot 23 oktober en klanten uitnodigen.

### Klaar
- Stand besteld, grafisch ontwerp goedgekeurd op 2 oktober.
- Tekst uitnodiging klaar, prijzen moeten naar euro’s worden aangepast.

### Geldig
- Prijzen alleen in euro’s vermelden.
- Uitnodiging krijgen alleen klanten die in de afgelopen twee jaar hebben gekocht.

### Nog te doen
1. 1.400 contacten van de beurs vorig jaar sorteren.
2. Prijzen in de uitnodiging corrigeren en versturen voor 14 oktober.

### Bestanden voor verder werk
- contacten-beurs-2025.xlsx
- prijslijst-2026.pdf
```

AI voegt toe dat de chat vooral werd gevuld door drie volledige versies van de prijslijst die Lucie er na elkaar in plaatste. Lucie opent een nieuwe chat, typt „Ga verder volgens `handoff.md`“ en AI past meteen de prijzen in de uitnodiging aan naar euro’s. Voor het sorteren van contacten zet AI volgens de regel subagents met een kleiner model in en brengt alleen het resultaat terug: 230 klanten persoonlijk uitnodigen, 760 per e-mail en 410 schrappen omdat ze in twee jaar niet kochten of dubbel in de lijst staan.
## Als u vastloopt

- **Uw limiet is op:** wacht tot hij wordt vernieuwd; de exacte tijd ziet u in het limietbericht. Doe de workout dan als eerste voordat u verdergaat in de oude chat.
- **AI zegt dat de samenvatting is opgeslagen, maar `handoff.md` staat niet in de map:** u werkt waarschijnlijk in een gewone chat die geen bestanden kan opslaan. U hebt de samenvatting in het antwoord; wilt u die in de projectmap, schakel dan over naar [Cowork of Code](card:when-chat-is-not-enough).
- **De nieuwe chat kent iets niet waarover u afspraken had:** vertel het en vraag om het toe te voegen onder de kop Geldig in de samenvatting.
- **Het goedkopere model maakt fouten bij bulkwerk:** controleer willekeurig tien items. Verfijn de regel waarmee AI sorteert en als dat niet helpt, zet dan het sterkere model alleen in voor de twijfelgevallen.
## Wat klaar zal zijn

U hebt lopend werk in een nieuwe korte chat die voortbouwt op de samenvatting, en de oude lange chat is niet meer nodig. In Cowork of Code ligt de samenvatting in `handoff.md` en in `AGENTS.md` staan de regels waarmee AI zelf tokens bespaart; in een gewone chat heeft AI de regels in het geheugen of kreeg ze in de nieuwe chat samen met de samenvatting.
## Wat nu

Wanneer een sterker model juist wel loont, ontdekt u bij de [modelkeuze voor uw taak](card:modely). Komt u na lange tijd terug bij een project, uzelf of een collega, geef die dan een permanente [startpagina van het project](card:project-start-here); in `handoff.md` blijft dan alleen de lopende taak staan.
## Markdown

**Wat het is:** Een eenvoudig platte-tekstformaat waarin koppen, lijsten, links en andere structuren worden geschreven met een paar gewone tekens. Bestanden gebruiken meestal de extensie `.md`.

**Wat het niet is:** Het is geen programmeertaal en ook geen formaat dat uitsluitend voor ontwikkelaars bedoeld is.

**Waarom studenten het nodig hebben:** Het blijft gemakkelijk leesbaar en bewerkbaar voor zowel mensen als AI en kan worden overgedragen tussen verschillende tools.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Subagent

**Wat het is:** Een zelfstandige agent die door de coördinerende agent wordt aangemaakt voor een specifieke deeltaak. Hij krijgt een eigen opdracht en context, werkt afzonderlijk en levert het resultaat terug aan de coördinator.

**Wat het niet is:** Het is geen simpele aftakking van één gesprek. Een fork creëert een nieuwe tak voor een mens; een subagent kan door de coördinator zelf worden gestart, aangestuurd en in het gezamenlijke resultaat worden opgenomen.

**Waarom de student dit nodig heeft:** Het helpt om handmatig parallel werk in meerdere chats te onderscheiden van een agentensamenstelling waarbij de coördinator de delegatie en het volgen van deelopdrachten overneemt.

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
