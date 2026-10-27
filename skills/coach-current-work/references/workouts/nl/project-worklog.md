# Maak een worklog aan: projectdagboek

AI houdt een projectdagboek bij, zodat een nieuwe chat of collega verder kan waar u bent gestopt.

## Maak een worklog aan: projectdagboek

**Moeilijkheidsgraad: gemakkelijk.**\
**Tijd: ongeveer 15 minuten** met één lopend project.
## Waar is het goed voor

Vorige week heeft u in de vergadering besloten dat het aanbod zonder korting gaat en de deadline wordt verplaatst naar november. Vandaag opent u een nieuwe chat, AI weet dit niet en schrijft in de e-mailvoorstel een korting. Een collega die het project ondertussen heeft overgenomen vraagt u of er korting gegeven moet worden.

Een worklog, een projectdagboek, helpt: AI schrijft na elke beslissing een korte aantekening en een nieuwe chat of collega leest daarin wat vanaf nu geldt.
## Wat u moet voorbereiden

- een map met één lopend project,
- notities, e-mails, vergaderverslagen of chat van het laatste werk eraan,
- AI in de [modus](glossary:workmode) Cowork of Code die met bestanden op de computer werkt.
## Hoe u het doet

1. Open de projectmap in Cowork of Code en plak de prompt. AI schrijft de eerste aantekeningen in `worklog.md` en slaat de regel op dat het deze na elk werk aanvult.
2. Lees de eerste aantekeningen en corrigeer wat niet klopt.
3. Open een nieuwe chat in dezelfde map en vraag iets wat al besloten is. AI zou moeten antwoorden op basis van de worklog.

In de aantekening komt alleen wat een nieuwe persoon moet weten om het werk niet opnieuw te doen.
## AI-oefening

Plak deze [prompt](glossary:prompt) in AI in de modus Cowork of Code,
geopend in uw map:

Maak voor dit project een worklog: een dagboek waarin wordt bijgehouden wat er aan het project is gedaan, waarom en wat is besloten.

Doorzoek de documenten in de projectmap en de notities die ik je geef en schrijf de eerste aantekeningen. Elke aantekening heeft deze vorm:

### JJJJ-MM-DD: korte titel
- Wat is gedaan: één of twee zinnen.
- Waarom: reden of probleem dat wordt opgelost.
- Besluit: wat vanaf nu geldt. Als er niets is besloten, laat deze regel weg.
- Volgende stap: wat volgt en wie het doet.

De nieuwste aantekening bovenaan. Schrijf zo dat een collega die niet bij het werk was het begrijpt. Herschrijf niet de hele chat en noteer geen kleine aanpassingen. Als je uit de documenten de datum of reden niet kunt halen, vraag het mij.

Sla de aantekeningen op in het bestand worklog.md in de projectmap. Als het al bestaat, voeg dan nieuwe aantekeningen bovenaan toe.

Sla tenslotte de regel "Na elk afgerond werk aan het project voeg je bovenaan in worklog.md een aantekening toe in dezelfde vorm." op in het bestand AGENTS.md in de projectmap. Als het niet bestaat, maak het aan. Zorg dat je het in dit hulpmiddel aan het begin van elk werk leest; in Cowork schrijf je het in de mapinstructies.

## In uw hulpmiddel

### Microsoft Copilot
Cowork vindt u naast de Chat-schakelaar; als het er niet is, vraag het aan uw IT-beheerder. Het ziet alleen bestanden op OneDrive en SharePoint, dus voeg aan het einde van de prompt toe: "Werk in de projectmap op OneDrive, houd de worklog bij als Word-document en schrijf de regel voor Customize, Preferences." In stap 3 schrijft u in een nieuwe taak waar het project ligt. Geplande taken vindt u op de pagina Automations.

### ChatGPT
In de ChatGPT-app voor desktop schakelt u over naar Codex, kiest map openen (open a folder) en selecteert de projectmap. Codex leest `AGENTS.md` automatisch en maakt een geplande taak aan als u erom vraagt; u vindt deze onder Scheduled. Als u Codex niet ziet, heeft uw organisatie het waarschijnlijk uitgeschakeld, vraag dan uw beheerder het aan te zetten.

### Claude
In de Claude-desktopapp opent u Cowork en kiest u de projectmap, of opent u deze in Claude Code; beide hebben betaalde abonnementen. Cowork schrijft de regel in de mapinstructies (Folder instructions), Claude Code leest `AGENTS.md`. AI maakt een geplande taak aan als u erom vraagt, deze vindt u in het linker paneel onder Scheduled.

### Gemini
Gemini werkt niet met mappen op de computer en zakelijke accounts hebben geen geheugen, dus het vult de worklog na het werk niet automatisch aan. Het schrijft wel de eerste aantekeningen: voeg notities toe via Add from Drive en sla de worklog op via Share & export, Export to Docs. Stap 3 doet u in Gem (Gems, New Gem) met de worklog in Knowledge en de instructie "Beantwoord op basis van de worklog" in Instructions.
## Wat is een worklog

Een worklog, in het Engels een work diary, is een gewoon tekstbestand `worklog.md` in de projectmap met de nieuwste aantekening bovenaan.
De aantekeningen schrijft en slaat AI op, dus het dagboek kost u geen extra tijd. De `###` aan het begin van een regel betekent een kop; zo’n notatie heet [Markdown](glossary:markdown).

`AGENTS.md` is een bestand met regels voor AI in dezelfde map. Veel tools in Code-modus lezen het automatisch aan het begin van elk werk, dus u hoeft de worklogregel niet steeds te herhalen. Waar het hulpmiddel dat niet kan, slaat AI de regel op in de instellingen of vertelt u waar u het moet plaatsen.

Als u nog gewone chat gebruikt, slaat de worklog niet in de map op; hoe u [overschakelt naar Cowork of Code](card:when-chat-is-not-enough) staat op een aparte kaart. De hele chat en kleine aanpassingen horen niet in de aantekeningen.
## Laat de worklog automatisch schrijven

Een geplande taak vult de worklog ook aan voor werk buiten de projectmap. De opgeslagen regel dekt het werk dat u met AI in de projectmap doet. Een deel van het werk gebeurt elders: in e-mails, vergaderingen of een andere chat. De taak start elke werkdag om 18:00 en vult de worklogs aan op basis van wat die dag is gebeurd. Geef AI in Cowork of Code deze opdracht en vraag het een geplande taak te maken:

```text
Elke werkdag om 18:00 doorzoek wat er vandaag is gebeurd in mijn chats, gewijzigde bestanden, e-mails en vergaderingen in de agenda. Voor elk project waar vandaag iets is gedaan of besloten, voeg bovenaan in de worklog één aantekening toe in dezelfde vorm als eerdere aantekeningen. Als er niets is gebeurd, schrijf dan niets.
```

Als de taak met bestanden op uw computer werkt, draait deze alleen als de computer aanstaat en de app open is.
## Voorbeeld

Project: nieuwe nieuwsbrief voor klanten. Uit de notities van de eerste vergadering schrijft AI:

```text
### 2026-10-08: Tool en frequentie nieuwsbrief
- Wat is gedaan: we hebben drie verzendtools vergeleken en gekozen voor degene die de verkoop al gebruikt.
- Waarom: de verkoop heeft daar contacten, we hoeven ze niet over te zetten.
- Besluit: de nieuwsbrief verschijnt maandelijks, het eerste nummer komt in november uit.
- Volgende stap: Petra maakt de sjabloon klaar voor 15-10.
```

Een week later vraagt u in een nieuwe chat hoe vaak de nieuwsbrief moet verschijnen. Een goed antwoord is: maandelijks, volgens de aantekening van 8-10. Als AI anders antwoordt, werkt het waarschijnlijk buiten de projectmap.
## Als u vastloopt

- **AI zegt dat het de aantekening heeft opgeslagen, maar het staat niet in het bestand:** u werkt waarschijnlijk in een gewone chat die bestanden niet kan wijzigen. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough) en open daar de projectmap.
- **Nieuwe chat ziet de worklog niet:** open de chat in dezelfde projectmap, niet in een gewoon chatvenster.
- **AI vult de worklog na het werk niet aan:** vraag AI waar de regel over de worklog is opgeslagen. Het moet in `AGENTS.md` in de projectmap staan, en als uw tool het niet automatisch leest, ook een verwijzing in de toolinstellingen.
- **Aantekeningen zijn te lang:** vraag AI om elke aantekening tot vier regels te beperken.
## Wat klaar zal zijn

U heeft een projectworklog met eerste aantekeningen en een opgeslagen regel waardoor AI het na elk werk aanvult. In een nieuwe chat heeft u gecontroleerd dat AI uw besluiten uit de worklog kent en niet opnieuw voorstelt wat u al hebt afgewezen.
## Wat nu

Vat de huidige projectstatus samen op een [introductiepagina van het project](card:project-start-here). Andere regels waarmee AI in het project werkt, noteert u in het [bestand met regels voor AI](card:agents-md).
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
