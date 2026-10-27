# Stuur een link in plaats van een bijlage: webpagina door AI

Stuur in plaats van een PDF-bijlage een link naar een overzichtelijke pagina die AI van het document maakt.

## Stuur een link in plaats van een bijlage: webpagina door AI

**Moeilijkheidsgraad: gemiddeld.**\
**Tijd: ongeveer 15 minuten** met één document dat u wilt versturen.
## Waarvoor is het handig

Maandag stuurde u het maandrapport als PDF-bijlage naar het management. Woensdag vraagt de directeur tijdens de vergadering naar een getal van de tweede pagina, omdat ze de bijlage op haar telefoon niet opende, en ondertussen stuurde een collega per ongeluk een oudere versie met een fout in de optelling door.

De pagina die AI van het document maakt, heeft bovenaan de hoofdboodschap, is leesbaar op de telefoon zonder inzoomen en na correctie ziet iedereen de actuele versie.
## Wat u moet voorbereiden

- één document dat u wilt versturen, bijvoorbeeld een maandrapport of offerte, in een map,
- het bedrijfslogo als afbeelding in dezelfde map, of anders de URL van de bedrijfswebsite,
- AI die een pagina met link maakt; waar dit kan, toont het blok "In uw tool".
## Hoe u het doet

1. Open AI in de map met het document, bij voorkeur in de Cowork- of Code-modus, of voeg het document toe. Voer de prompt in en vul de naam van het document, voor wie de pagina is en de webadres aan.
2. Bekijk de pagina en vertel AI wat te wijzigen. Stel daarna in wie de pagina mag openen en kopieer de link; waar u dit doet, toont het blok "In uw tool".
3. Open de link op uw telefoon, en als het buiten het bedrijf is, ook in een anoniem browservenster, zodat u de pagina ziet zoals de ontvanger. Verstuur de link dan in plaats van de bijlage.
## AI-oefening

Voer deze [prompt](glossary:prompt) in de AI in die u op het werk gebruikt en voeg op de laatste regel de naam van het document, voor wie de pagina is en eventueel de URL van de bedrijfswebsite toe:

Maak van het document een webpagina die ik als link stuur in plaats van een bijlage. Welke document het is en voor wie de pagina is, staat op de laatste regel.

Lees het hele document en bepaal wat de lezer moet weten en doen. Zet bovenaan één zin met de hoofdboodschap en direct daaronder de volgende stap voor de lezer: een deadline, beslissing of contact. Daaronder werk je details uit in korte secties met koppen. Neem cijfers, prijzen, deadlines en namen precies over uit het document. Verzint niets wat ontbreekt en vertel mij wat ik moet aanvullen.

Gebruik kleuren, lettertype en het bedrijfslogo. Het logo staat in de map, kleuren neem je uit het logo of van de bedrijfswebsite als ik op de laatste regel het adres geef. De pagina moet goed leesbaar zijn op de telefoon.

Maak de pagina zo dat die gedeeld kan worden via een link: in Claude als artifact, in ChatGPT als Site (website). Laat hem mij daarna zien.

Sla direct daarna in het bestand sablona-stranek.md in de werkmap een template op voor de volgende keer: kleuren, lettertype, waar het logo staat en de volgorde van de paginaonderdelen. Als ik om een wijziging in uiterlijk of volgorde vraag, pas die dan aan op de pagina en in de template. Voeg in het bestand AGENTS.md in dezelfde map de regel toe: "Als je een rapport, handleiding of offerte voor collega’s, klanten of management maakt, maak er ook een webpagina bij volgens sablona-stranek.md." Als AGENTS.md niet bestaat, maak het aan. Zorg dat je het in deze tool aan het begin van elk werk leest; in Cowork zet je het in de mapinstructies.

Document, voor wie de pagina is en eventueel de URL van de bedrijfswebsite:

## In uw tool

### Microsoft Copilot
Voer de prompt in Copilot Chat in en voeg het document toe; als AI niets opslaat in de map, is dat geen probleem. Kies onder het antwoord de drie puntjes en Edit in Pages; de pagina deel je daarna via Copy link en collega’s openen die in Loop. De pagina heeft niet uw kleuren en mensen buiten het bedrijf kunnen hem niet openen, stuur klanten daarom het document zoals voorheen. De template onthoudt hij als u schrijft "Onthoud het uiterlijk van de pagina voor de volgende keer."

### ChatGPT
De pagina als Site maakt u in de Work- of Codex-modus in de ChatGPT-app voor desktop, Codex direct met map. Klik in de preview op Share, kies Anyone on the internet of voor collega’s Anyone in the workspace, dan Publish en Copy link. Wijzigingen vindt u onder Sites in het linker paneel. Als u Sites niet heeft, zet de beheerder ze aan; stuur voorlopig het document zoals voorheen.

### Claude
Kies in de Claude-app Cowork en selecteer de map; de pagina wordt een artifact en de template wordt in de map opgeslagen. Bij het bedrijfsabonnement klikt u op Share en onder Who has access kiest u Anyone at en de naam van uw bedrijf. In Pro- of Max-abonnement publiceert u de pagina voor mensen zonder Claude-account via Publish. Kopieer de link met Copy link; met het gratis abonnement is delen niet mogelijk.

### Gemini
Kies in Gemini onder + Canvas, voeg het document en logo toe en voer de prompt in; dat hij niets opslaat in de map is geen probleem. Maak de pagina met Create a Web page, de link via Share & export en Share. Met een bedrijfsaccount is het een snapshot gedeeld via Disk: na wijziging deelt u opnieuw en buiten het bedrijf alleen als Disk dat toestaat. Sla de template op in Gemu (Gems, New Gem, instructies, Save).
## Wat is een pagina door AI

Een pagina door AI is een kant-en-klaar product dat AI maakt naast de chat en een eigen link geeft. De link opent in een browser op computer en telefoon, dus de ontvanger hoeft niets te downloaden. In tegenstelling tot een gedeeld bestand in OneDrive of Google Drive herschikt de pagina het document: bovenaan staat één zin met de hoofdboodschap en deadline, de tekst is op de telefoon leesbaar zonder inzoomen en de pagina heeft de kleuren en het logo van uw bedrijf. Het is geschikt voor rapporten, handleidingen voor collega’s of klanten en offertes.

Een openbare link opent iedereen aan wie u hem stuurt, ook als iemand hem doorstuurt. In het bedrijfsabonnement schakelt de beheerder delen buiten het bedrijf in.

`sablona-stranek.md` is een gewone tekstfile met kleuren, lettertype, logo en volgorde van paginaonderdelen. `AGENTS.md` is een bestand met regels voor AI in dezelfde map. Beide schrijft AI zelf en u hoeft ze niet te openen.
## Laat AI pagina’s zelf maken

Volgende pagina’s maakt AI zelf volgens de regel die hij in `AGENTS.md` of in de mapinstructies opslaat; hij slaat die alleen op in [Cowork- of Code-modus](card:when-chat-is-not-enough). Hij leest die aan het begin van elk werk, dus het volgende document dat u verstuurt, maakt hij meteen ook als pagina in uw kleuren. Wilt u direct een pagina van een specifiek document, volstaat één zin:

```text
Maak van nabidka-firemni-vylet.docx een pagina voor de klant volgens sablona-stranek.md.
```

Een rapport dat u elke maand verstuurt hoeft u niet opnieuw te sturen. Open het gesprek waarin de pagina ontstond, vraag AI die bij te werken met nieuwe cijfers en publiceer de wijziging zoals de eerste keer. Mensen zien dan de nieuwe cijfers op hun link.
## Voorbeeld

Lukáš is bij het accountantskantoor verantwoordelijk voor nieuwe klanten. Hij stuurt iedereen een acht pagina’s tellende PDF over het uploaden van documenten in het online portaal, maar klanten bellen toch omdat ze de bijlage op hun telefoon niet openen. Op 14-10-2026 opent hij AI in Code-modus in de map Nieuwe klanten, waar de handleiding `nahravani-dokladu.docx` en het kantoorlogo liggen. Hij voert de prompt in en voegt op de laatste regel toe:

```text
nahravani-dokladu.docx, voor nieuwe klanten: upload documenten over september uiterlijk eind deze maand
```

AI maakt de pagina en toont de preview. Bovenaan staat: "Upload documenten over september uiterlijk 31-10 via het portaal, het duurt tien minuten." Daaronder vier genummerde stappen met screenshots uit de handleiding en Lukáš’ telefoonnummer voor het geval er iets misgaat. Lukáš vraagt AI de stappen groter te maken omdat klanten ze op de telefoon lezen. Daarna stelt hij in dat iedereen met de link de pagina kan openen, kopieert de link en opent die in een anoniem venster en op de telefoon. De eerste drie klanten stuurt hij in plaats van de PDF één zin met de link.

In november verplaatst het portaal de uploadknop. Lukáš opent het gesprek waarin de pagina ontstond en schrijft:

```text
De knop Upload staat nu rechtsboven in het portaal, pas stap 2 daarop aan.
```

Na publicatie openen klanten dezelfde link en zien de nieuwe procedure.
## Als u vastloopt

- **AI geeft alleen code of bestand in plaats van pagina:** zeg dan "maak er een pagina met gedeelde link van." Zet in Claude in Settings bij Capabilities Code execution and file creation aan, zet in ChatGPT bovenaan de prompt `@Sites`, zet in Gemini Canvas aan. In het bedrijfsabonnement schakelt de beheerder pagina-aanmaak in.
- **Optie voor mensen buiten het bedrijf is grijs of ontbreekt:** in het bedrijfsabonnement schakelt de beheerder van uw AI-tool dit in. Vraag hem om delen buiten het bedrijf aan te zetten, of deel de pagina voorlopig alleen met collega’s.
- **Ontvanger ziet in plaats van pagina een inlogscherm:** controleer in de deelinstellingen wie toegang heeft. Een link via Share in Claude opent alleen voor ingelogde gebruikers; stuur klanten zonder account een pagina die u publiceert via Publish in Claude Pro of Max, of een Site uit ChatGPT met Anyone on the internet.
- **Op de pagina staat een ander getal dan in het document:** vraag AI alle cijfers op de pagina te vergelijken met het document en de verschillen te melden. Meer in de kaart [Resultaatcontrole](card:kontrola-vysledku).
## Wat klaar is

U heeft een pagina van uw eigen document en een link die u op de telefoon en zoals de ontvanger ziet hebt geopend en in plaats van een bijlage hebt verstuurd. De opmaaktemplate heeft AI opgeslagen voor de volgende keer, in Cowork- of Code-modus in het bestand `sablona-stranek.md`, zodat u de volgende pagina met één zin kunt aanmaken.
## Wat nu

Als u de inhoud live op een vergadering wilt presenteren, laat dan van het document een [presentatieschema](card:tvorba-prezentace) maken. Controleer voor het versturen van een pagina met belangrijke cijfers de [Resultaatcontrole](card:kontrola-vysledku).
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
