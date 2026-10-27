# Voer een wekelijkse review in: opruimen van uw AI-instellingen

AI vindt elke week een terugkerend probleem in uw chats, lost het op en ruimt op wat u niet gebruikt.

## Voer een wekelijkse review in: opruimen van uw AI-instellingen

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met een week werk in de Code-modus achter de rug.
## Waar is het goed voor

Donderdag corrigeerde u voor de derde keer deze week AI-prijzen in een offerte, omdat deze opnieuw inclusief btw werden geschreven. U stuurt ze echter zonder btw naar klanten, u heeft dit elke keer uitgelegd en in de volgende chat kwam de fout terug. Daarnaast volgt AI nog steeds de regel van het voorjaar dat een offerte 14 dagen geldig is, terwijl dit sinds september 30 dagen is.

De wekelijkse review is een regelmatige opruimbeurt: AI doorloopt uw chats van de afgelopen week en corrigeert wat zich herhaalde op de plek waar de regels tijdens het werk worden gelezen.
## Wat u moet voorbereiden

- AI in de [Code-modus](glossary:workmode) die de chatgeschiedenis op uw computer kan zien,
- de map waarin u het meest met AI werkt; het rapport wordt daarin opgeslagen,
- chats van de afgelopen week gevoerd in de Code-modus.
## Hoe te werk te gaan

1. Open in de Code-modus uw map en plak de prompt; u hoeft de padnamen niet te begrijpen. Wanneer de applicatie om toegang tot de chatgeschiedenis en bestanden vraagt, geef deze toestemming.
2. Lees het rapport en geef per probleem aan of u de correctie wilt. AI schrijft deze op de voorgestelde plek en haalt terug wat u uit het archief nodig heeft.
3. Voer in een nieuwe chat het werk in waarbij het probleem zich voordeed en controleer of AI het correct uitvoert. Voeg daarna de opdracht uit het blok „Laat de review elke vrijdag plaatsvinden“ toe als geplande taak.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de Code-modus, geopend in uw map:

Voer een wekelijkse review uit van mijn AI-instellingen: ontdek welke problemen zich de afgelopen week herhaaldelijk voordeden en stel voor hoe deze op te lossen.

Doorzoek mijn chats met jou van de afgelopen zeven dagen. Claude Code slaat ze op in ~/.claude/projects, Codex in ~/.codex/sessions. Als je er geen toegang toe hebt, meld dat meteen en adviseer wat aan te zetten of waar naartoe te schakelen. Doorzoek ook mijn instellingen: AI-regels, bijvoorbeeld het bestand AGENTS.md, skills en gekoppelde connectors.

Vind problemen die in ten minste twee verschillende chats voorkwamen: zaken die ik je steeds opnieuw uitleg of corrigeer, en terugkerende fouten van tools. Tel incidenten die één keer gebeurden, storingen of fouten die direct werden opgelost niet mee. Kies maximaal drie en rangschik ze van het meest tijdrovende. Geef per probleem aan in welke chats en wanneer het voorkwam en stel één correctie voor op de juiste plek:
- betreft het één taak, bijvoorbeeld offertes: de correctie hoort in de skill voor die taak, en als die ontbreekt, stel een nieuwe voor,
- betreft het al het werk: de correctie hoort in de AI-regels,
- faalt een tool of connector: de correctie hoort in de instellingen daarvan.
Schrijf per correctie de exacte tekst die u toevoegt of wijzigt.

Zoek vervolgens skills die in de hele zichtbare geschiedenis nooit zijn uitgevoerd en regels voor werk dat ik niet meer doe, of regels die elkaar tegenspreken. Skills voor werk dat eens per maand of kwartaal wordt gedaan, laat u ongemoeid. Maximaal drie van zulke zaken verplaatst u naar de map revize-ai/archiv zonder iets te verwijderen: verplaats de skill volledig, haal de regel uit AGENTS.md en voeg deze toe aan revize-ai/archiv/pravidla.md. Wat u niet kunt verplaatsen, meldt u waar het uit te schakelen is.

Schrijf alles in een kort rapport revize-ai/JJJJ-MM-DD.md met de datum van vandaag: hoeveel chats de review besloeg, problemen met correctievoorstellen en wat nieuw in het archief staat en waar vandaan. Toon het rapport en vraag welke correcties ik wil. Goedgekeurde correcties schrijft u op de plek waar AI ze bij het volgende werk echt leest en vult u in het rapport aan met wat er is veranderd.

## In uw tool

### Microsoft Copilot
Microsoft vermeldt niet dat Copilot uw chats van de afgelopen week kan doorzoeken. Doe de review daarom in een tool met Code-modus, bijvoorbeeld Claude Code of Codex in de ChatGPT-app, en vraag uw IT-beheerder om toegang. Ondertussen horen bekende correcties in Custom instructions of Saved memories (Instellingen en meer, Chat-instellingen, Personalisatie).

### ChatGPT
De review wordt uitgevoerd door Codex, die chats op de computer opslaat: schakel in de ChatGPT-app voor desktop over naar Codex, kies map openen (open a folder) en plak de prompt. De review werkt met chats die in Codex zijn gevoerd. Codex maakt de geplande taak aan als u er in de chat om vraagt en u vindt deze in de zijbalk onder Scheduled.

### Claude
De review wordt uitgevoerd door Claude Code in de Claude-desktopapp, die chats op de computer opslaat: selecteer uw map en plak de prompt. De review werkt met chats in Claude Code, niet in gewone chat of Cowork. AI maakt de geplande taak aan als u erom vraagt en u vindt deze in het linker paneel onder Scheduled.

### Gemini
Bedrijfsaccounts in Gemini hebben geen geheugen van eerdere chats, dus AI kan ze niet wekelijks doorzoeken. Gemini CLI, dat met bestanden op de computer werkt, wordt vanaf juni 2026 door Google vervangen door Antigravity CLI en de prompt houdt geen rekening met chatgeschiedenis. Doe de review daarom in een tool met Code-modus, bijvoorbeeld Claude Code of Codex in de ChatGPT-app, en vraag uw IT-beheerder om toegang.
## Wat is een wekelijkse review

Een probleem is een kleinigheid waardoor het werken met AI telkens iets langer duurt: iets wat u AI steeds opnieuw uitlegt of een connector die zich elke week afmeldt. Eén probleem kost enkele minuten, maar in een maand lopen die op tot uren. De review telt alleen problemen die zich in ten minste twee chats herhaalden en schrijft correcties pas na uw akkoord op. Wat gevonden en veranderd is, wordt in een rapport vastgelegd zodat u na een maand ziet welke problemen verdwenen zijn.

AI schrijft de correctie op de juiste plek:
- probleem in één taak, bijvoorbeeld offertes, in de skill voor die taak,
- probleem in al het werk, bijvoorbeeld aanhef of datumformaat, in de AI-regels,
- falende tool in de instellingen daarvan.

De AI-regels staan in het bestand `AGENTS.md` in de map waarin u werkt. Als uw tool regels uit een ander bestand leest, schrijft AI de correctie daar. Regels uit de gewone chatinstellingen ziet de review in Code niet en correcties in `AGENTS.md` gelden alleen voor werk in de Code-modus. Het rapport is een gewone tekstbestand met extensie `.md` en AI toont het direct in de chat.

Na enkele maanden heeft u tientallen skills en regels waarvan veel nooit door AI worden uitgevoerd. Verouderde regels blijven AI sturen en ongebruikte skills bemoeilijken de juiste keuze. De review verplaatst ze daarom naar de map `revize-ai/archiv`, waar AI ze tijdens het werk niet laadt, en vermeldt in het rapport per item waar het vandaan komt. Uw documenten verplaatst de review niet, alleen regels en skills, en als u niets ongebruikt heeft, noteert het rapport dat.

De review doorzoekt ook uw instellingen: AI-regels, [skills](glossary:skill) en connectors. Een skill is een opgeslagen procedure voor één type werk en een connector koppelt AI aan een andere applicatie, bijvoorbeeld e-mail. Een fout die één keer gebeurde, vereist geen nieuwe regel omdat AI de regels bij elk werk leest en in een lange lijst sommige kan missen.

Tools in Code-modus slaan chatgeschiedenis lokaal op, zodat AI die zelf doorloopt; gewone chat doet deze review niet. Als u vorige week vooral in gewone chat of Cowork werkte, [schakel dan over naar Code](card:when-chat-is-not-enough), werk daar een week en voer daarna de review uit.
## Laat de review elke vrijdag plaatsvinden

De review helpt het meest als deze zich herhaalt. Een geplande taak die AI elke vrijdagmiddag uitvoert is voldoende. Het nieuwe rapport vindt u in `revize-ai` naast eerdere en u ziet welke problemen van vorige week verdwenen zijn. Geef AI in Code-modus deze opdracht en vraag om een geplande taak aan te maken:

```text
Elke vrijdag om 14:00 voer je een wekelijkse review uit van mijn AI-instellingen. Bekijk eerst het laatste rapport in de map revize-ai en bepaal welke problemen verdwenen zijn en welke blijven. Doorzoek daarna mijn chats met jou van de afgelopen zeven dagen, vind problemen die in ten minste twee chats voorkwamen en stel per probleem een correctie voor op de juiste plek. Maximaal drie ongebruikte skills of ongeldige regels verplaats je naar revize-ai/archiv en noteer je waar ze vandaan komen. Sla het rapport op in revize-ai met de datum van vandaag en vraag mij welke correcties ik wil.
```

De taak draait op uw computer, dus start alleen als de computer aanstaat en de applicatie open is. Als u op vrijdag om 14:00 niet bij de computer bent, geef dan in de opdracht een tijd op waarop u meestal aanwezig bent. De samenvatting met de vraag welke correcties u wilt vindt u tussen de geplande taken en daar kunt u ook antwoorden.
## Voorbeeld

Pavla verwerkt bestellingen in een kleine drukkerij. Op vrijdag 16-10 doorloopt AI haar chats van de week en schrijft in `revize-ai/2026-10-16.md`:

```text
### Wekelijkse review 16-10-2026
De review besloeg 14 chats van 9 tot 16 oktober.

### Problemen
1. Prijzen in offertes inclusief btw, terwijl u ze zonder btw naar klanten stuurt. U corrigeerde dit in drie chats (12, 14 en 15 oktober).
   Correctie: voeg in de skill „Offerte voor klant“ de regel toe „Prijzen zonder btw vermelden, btw apart onder het totaal.“
2. Datums in e-mails schrijf ik als 10/14/2026. U corrigeerde dit in twee chats (13 en 15 oktober).
   Correctie: voeg in AGENTS.md de regel toe „Schrijf datum in Nederlands formaat, bijvoorbeeld 14-10-2026.“

### Verplaatst naar archief
- Skill „Vertaling naar Duits“ uit de skills-map: nooit uitgevoerd in de geschiedenis.
- Regel met oude e-mailhandtekening uit AGENTS.md: conflicteert met nieuwere regel met bedrijfs-handtekening.
```

Pavla keurt beide correcties goed. Maandag voert ze in een nieuwe chat een offerte in voor een reclamebureau en AI schrijft prijzen zonder btw zonder herinnering. De volgende vrijdag meldt het rapport dat beide problemen verdwenen zijn.
## Als u vastloopt

- **AI zegt dat het uw vorige chats niet ziet:** u plakte de prompt waarschijnlijk in een gewone chat die de geschiedenis op uw computer niet kan lezen. Plak deze in AI in [Code-modus](card:when-chat-is-not-enough), geopend in uw map.
- **AI vond maar een paar chats of niets wat zich herhaalde:** u werkte vorige week waarschijnlijk vooral in gewone chat of Cowork. Werk een week in Code en voer de review opnieuw uit. Als u langer in Code werkt, vraag AI dan een langere periode te doorzoeken, bijvoorbeeld de afgelopen maand.
- **Het probleem verschijnt opnieuw in een nieuwe chat:** zeg tegen AI: „Dit probleem komt terug. Zoek uit waar je de regels echt leest en schrijf de correctie daar op.“
- **Iets uit het archief mist u:** vraag AI het volgens het rapport terug te zetten vanuit de map `revize-ai/archiv` naar de oorspronkelijke plek.
## Wat klaar zal zijn

In de map `revize-ai` staat het rapport van de eerste review. De correctie van het probleem dat deze week terugkwam, is op de plek geschreven waar AI het leest, en u heeft in een nieuwe chat bevestigd dat het probleem niet terugkeert. Ongebruikte skills en ongeldige regels, als u die had, liggen in het archief waar u ze altijd kunt terugzetten. De review is gepland voor elke vrijdag, dus het volgende rapport komt vanzelf.
## Wat nu

Als de review een nieuwe skill voorstelt, werk deze dan bij volgens de kaart van de [skill](card:create-skill-from-proven-process). Om de vrijdagreview betrouwbaar te laten draaien en zelf fouten te laten melden, gaat u verder met de [geplande taak](card:recurring-ai-task).
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
