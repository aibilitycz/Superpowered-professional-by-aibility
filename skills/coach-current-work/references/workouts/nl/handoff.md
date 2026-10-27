# Bereid handoff voor: overdracht van lopend werk

AI schrijft een handoff van lopend werk op één pagina, zodat een collega of een nieuwe chat verder kan zonder de geschiedenis te lezen.

## Bereid handoff voor: overdracht van lopend werk

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met één lopend werk.
## Waar is het goed voor

Je bent vanaf vrijdag een week met vakantie en collega Pavel rondt de keuze van een nieuwe schoonmaakleverancier af. Je schrijft hem drie zinnen in een e-mail. Op maandag besteedt Pavel een halve ochtend aan het uitzoeken welke aanbieding nog geldig is en belt je dan vanaf het strand of hij opnieuw over de prijs met de leverancier mag onderhandelen.

Een korte overdracht op één pagina, een zogenaamde handoff, zou volstaan. AI schrijft die uit de chat en de onderliggende documenten, en Pavel ziet eruit waar het werk staat en wat hij als eerste moet doen.
## Wat je moet voorbereiden

- één lopend werk dat je overdraagt, uitstelt of naar een nieuwe chat verplaatst,
- de chat waarin je eraan werkte, of de belangrijkste e-mails en notities erbij,
- de AI die je op het werk gebruikt; bij voorkeur in de [Cowork- of Code-modus](glossary:workmode).
## Hoe pak je het aan

1. Plak de prompt in de chat waarin je het laatst aan het werk was. Als het buiten AI om ging, plak je het in een nieuwe chat met de belangrijkste documenten en een paar zinnen over waar het werk staat.
2. Lees de handoff als een collega die er niet bij was, en vertel AI wat ontbreekt of overbodig is. In Cowork of Code slaat AI het op in `handoff.md`, in een gewone chat krijg je het in het antwoord.
3. Open een nieuwe chat en typ „Ga verder volgens `handoff.md`“, in een gewone chat plak je de handoff met de documenten. AI zou zonder navragen moeten zeggen waar het werk staat en de volgende stap voorstellen.
## AI-oefening

Plak deze [prompt](glossary:prompt) in de AI die je op het werk gebruikt:

Bereid een handoff voor: een korte overdracht van lopend werk. Een collega of een nieuwe chat moet ermee verder kunnen zonder de hele geschiedenis te lezen en zonder navragen.

Ga uit van onze chat, de documenten die ik je bij dit verzoek toevoeg, plak of schrijf, en van bestanden in de projectmap als je daar toegang toe hebt. Als je iets mist bij een punt, vraag me dan, maximaal vijf dingen tegelijk. Schrijf de handoff in dit formaat:

### Handoff: naam van het werk (datum)
- Doel: wat er aan het eind moet zijn, voor wie en wanneer.
- Klaar en geverifieerd: wat gedaan is en hoe we dat weten, bijvoorbeeld een bestand, link of bevestiging van een specifieke persoon.
- Lopend werk: wat gestart is en in welke staat.
- Volgende stap: één concrete actie die de ontvanger als eerste moet doen.
- Klaar is het als: waaraan je ziet dat het werk af is.
- Grenzen: wat niet veranderd of gedaan mag worden zonder overleg.
- Wat ontbreekt: open vragen en documenten of toegang die de ontvanger nog niet heeft.
- Documenten: bestanden en links waarmee gewerkt moet worden.

Schrijf voor iemand die er niet bij was en houd het op één pagina. Herschrijf de chat niet en laat doodlopende paden, wachtwoorden en persoonlijke gegevens weg die de ontvanger niet nodig heeft. Wat je uit chat, documenten of mijn antwoorden niet zeker weet, zet je bij „Wat ontbreekt“ en verzin je niet.

Als je in een projectmap werkt, sla dan de handoff op in het bestand handoff.md. Als het al bestaat, overschrijf het, want alleen de laatste overdracht geldt. Als je niet met bestanden kunt werken, sla dan niets op en schrijf de hele handoff in het antwoord.

Bewaar tot slot een regel voor de volgende keer: „Als ik ‚handoff‘ typ, bereid dan een overdracht in dit formaat voor.“ In een gewone chat slaat AI de regel en het handoff-formaat op in het geheugen, en als er geen geheugen is, zeg dat dan. Als je in een projectmap werkt, schrijf de regel en het formaat in het bestand AGENTS.md, en maak het aan als het niet bestaat. Voeg aan de regel toe: „Sla de overdracht op in handoff.md. Als handoff.md in de map ligt, lees het dan aan het begin van elk nieuw werk. Als het werk klaar is, schrijf dan op de eerste regel ‚Gesloten‘ en de datum, en beschouw een gesloten handoff niet meer als opdracht.“ Zorg dat je AGENTS.md in dit hulpmiddel aan het begin van elk werk leest; in Cowork schrijf dat in de mapinstructies.

## In jouw tool

### Microsoft Copilot
In Copilot Chat krijg je de overdracht in het antwoord. Als de Work IQ-knop aanstaat, ziet Copilot ook je e-mails, afspraken en bestanden, dus die hoef je niet te plakken; je hoeft alleen te typen over welke het werk gaat. Copilot slaat de regel voor de volgende keer op in het geheugen (Saved memories in Settings and more, Chat settings, Personalization), tenzij de beheerder het heeft uitgeschakeld.

### ChatGPT
In een gewone ChatGPT-chat krijg je de overdracht in het antwoord en slaat AI de regel op in het geheugen (Settings, Personalization, Memory), tenzij het bedrijf dat heeft uitgeschakeld. Voor werken met een map op de computer gebruikt Codex: in de ChatGPT-desktopapp schakel je over naar Codex en kies je map openen (open a folder). Codex leest `AGENTS.md` zelf en geplande taken vind je onder Scheduled.

### Claude
In een gewone Claude-chat krijg je de overdracht in het antwoord en slaat AI de regel op in het geheugen (Settings, Memory), dat in een bedrijfsaccount door de beheerder wordt toegestaan. In Cowork in de Claude-desktopapp slaat AI `handoff.md` op in de gekozen map en schrijft de regel in de mapinstructies (Folder instructions); Claude Code leest `AGENTS.md`.

### Gemini
In Gemini krijg je de overdracht in het antwoord en via Share & export, Export to Docs sla je het op als Google Document. Gmail-e-mails vindt het als je in de prompt @Gmail typt en waar de thread over gaat. Bedrijfsaccounts hebben geen geheugen, dus laat het overdrachtsformaat opslaan als skill (typ „Sla dit op als skill“) en volgende keer volstaat „handoff“.
## Wat is handoff

Handoff is de Engelse term voor overdracht, bijvoorbeeld van een estafette of dienst tussen twee ploegen. Het bevat het doel, wat klaar en geverifieerd is, de volgende stap, waaraan je ziet dat het klaar is, wat niet veranderd mag worden en wat nog ontbreekt. In Cowork of Code is het een gewone tekstbestand `handoff.md` in de projectmap, dat je in elke teksteditor opent. Alleen de laatste handoff geldt: AI overschrijft het bij de volgende overdracht en markeert het als gesloten als het werk klaar is.

Handoff is ook handig als je een paar dagen van het werk weggaat, of als de chat zo lang is dat AI vergeet wat er aan het begin is afgesproken. AI kan in één chat maar een beperkte hoeveelheid tekst onthouden, en in een lange chat raakt het begin kwijt en verwart oude versies met nieuwe. Handoff neemt alleen mee wat nu geldt naar een nieuwe chat.

`AGENTS.md` is een bestand met regels voor AI in dezelfde map. Veel tools in Code-modus lezen het zelf aan het begin van elk werk; waar dat niet kan, slaat AI de regel op in de instellingen of vertelt waar je het moet plaatsen. Volgende keer volstaat „handoff“ typen en AI weet wat en waar te schrijven.

In handoff hoort alleen wat de ontvanger echt nodig heeft; hele chats, doodlopende paden en persoonlijke gegevens die niet nodig zijn, laat AI weg volgens de prompt. In een gewone chat slaat AI de regel voor de volgende keer op in het geheugen. Stuur de handoff dan in een e-mail naar je collega en voeg de documenten toe waarnaar verwezen wordt.
## Laat handoff zichzelf schrijven

Als je in Cowork of Code aan meerdere projecten werkt die in één map staan, kunnen handoffs elke vrijdag automatisch worden geschreven voordat je het lopende werk voor het weekend verlaat. Dat kan met een geplande taak. Open AI in Cowork- of Code-modus in die gedeelde map, plak deze opdracht en vraag AI om er een geplande taak van te maken:

```text
Elke vrijdag om 16:00 doorloop je de submappen van deze map waarin deze week gewerkt is en het werk nog niet klaar is. In elke sla je een nieuwe handoff.md op in het formaat uit AGENTS.md van die submap. Als die regel er niet is, gebruik dan het formaat van de bestaande handoff.md, en als beide ontbreken, sla die submap over. Schrijf aan het eind bij welke projecten er nog iets staat bij „Wat ontbreekt“.
```

Als de taak met bestanden op je computer werkt, draait die alleen als de computer aanstaat en de app open is.

Op maandag open je dan een nieuwe chat in de projectmap en typ je alleen „Ga verder volgens `handoff.md`.“
## Voorbeeld

Eva kiest voor het bedrijf een nieuwe schoonmaakleverancier voor de kantoren. Op donderdag 15-10, de dag voor haar vakantie, plakt ze de prompt in de chat in Cowork-modus waarin ze met AI de aanbiedingen vergeleek. Tijdens het lezen merkt ze dat het ontbreekt aan wie ze bij EkoClean moet bellen; AI vult dat aan en in `handoff.md` staat dan:

```text
### Handoff: keuze schoonmaakleverancier (15-10-2026)
- Doel: voor 30-10 een getekend contract met de leverancier die op 1-12 begint met schoonmaken.
- Klaar en geverifieerd: vergelijking van drie aanbiedingen in bestand srovnani-nabidek.xlsx; Čistota Plus en Úklid Brno bevestigden prijzen per e-mail op 13-10.
- Lopend werk: EkoClean beloofde een aangepaste aanbieding voor 20-10.
- Volgende stap: op maandag 19-10 bellen met Petra Horáková van EkoClean of de aanbieding op tijd komt.
- Klaar is het als: de financieel directeur één leverancier goedkeurt en het contract getekend is.
- Grenzen: niet opnieuw over de prijs onderhandelen, plafond is 42.000 Kč per maand.
- Wat ontbreekt: contractmodel van de juridische afdeling; Pavel heeft nog geen toegang tot de gedeelde map Inkoop.
- Documenten: srovnani-nabidek.xlsx en aanbiedingen in map nabidky.
```

Eva opent dan een nieuwe chat in dezelfde map en typt „Ga verder volgens `handoff.md`.“ AI antwoordt dat de keuze wacht op de aanbieding van EkoClean en stelt voor maandag mevrouw Horáková te bellen. AI vraagt niets, dus Eva plakt de handoff in een e-mail aan Pavel en voegt de vergelijkende tabel toe. Als AI zou vragen om welke keuze het gaat, zou de nieuwe chat waarschijnlijk in een andere map dan handoff draaien.

In een gewone chat zou Eva de e-mails van leveranciers in de nieuwe chat plakken en de vergelijkende tabel toevoegen. Ze zou dezelfde handoff in het antwoord krijgen, die in een nieuwe chat plakt met de zin „Ga verder volgens deze handoff.“ en die naar Pavel mailen.
## Als je vastloopt

- **In een gewone chat slaat AI niets op:** bestanden kan het niet opslaan, en als de chat geen geheugen heeft, slaat het ook de regel niet op. Je hebt de handoff in het antwoord en plakt de prompt de volgende keer opnieuw; wil je dat AI de handoff zelf opslaat bij het project, schakel dan over naar [Cowork of Code](card:when-chat-is-not-enough).
- **Nieuwe chat vraagt naar zaken die al beslist zijn:** schrijf zijn vragen in de oorspronkelijke chat, laat AI de handoff aanvullen en open de nieuwe chat opnieuw.
- **Handoff is bijna zo lang als de chat:** vraag AI elk punt in één of twee zinnen samen te vatten en details in de documenten te laten staan waarnaar verwezen wordt.
- **Chat is zo lang dat AI het begin van het werk vergeten is:** open een nieuwe chat, plak de belangrijkste documenten en prompt, en schrijf onder de prompt een paar zinnen over waar het werk staat.
## Wat klaar zal zijn

Je hebt een handoff waarmee een nieuwe chat zonder navragen verder ging, en dezelfde handoff kun je naar een collega sturen. In Cowork of Code ligt het in `handoff.md` in de projectmap en in `AGENTS.md` staat de regel waarmee AI de volgende keer een handoff schrijft als je alleen „handoff“ typt. In een gewone chat heeft AI de regel in het geheugen; als de chat dat niet heeft, plak je de prompt de volgende keer opnieuw. Je kunt de oude overvolle chat sluiten.
## Wat nu

Als op het overgedragen werk een volgende stap met AI volgt, bijvoorbeeld dat uit de gekozen aanbieding een contract ontstaat en daaruit een bericht voor het management, en je doet dat vaker, [sla dan het hele proces op als skill](card:create-skill-from-proven-process). De status van het hele project vat de [startpagina van het project](card:project-start-here) samen, die AI net als de handoff voor je schrijft.
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
