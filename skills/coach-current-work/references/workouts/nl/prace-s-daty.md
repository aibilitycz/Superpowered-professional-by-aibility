# Vraag uw data: AI berekent het antwoord uit een export

AI berekent uit een export het antwoord op een vraag die uw besluitvorming ondersteunt en slaat de werkwijze op voor de volgende maand.

## Vraag uw data: AI berekent het antwoord uit een export

**Moeilijkheidsgraad: eenvoudig.**\
**Tijd: ongeveer 15 minuten** met export en één vraag.
## Waar is het goed voor

Het is maandag 2 november en de commercieel directeur wil voor vrijdag weten op welke
producten de kerstcampagne gericht moet worden. De export van bestellingen over drie maanden bevat veertienduizend
regels en de inkoopprijzen, zonder welke u niet ziet waarop het bedrijf winst maakt, worden
in een ander systeem door het magazijn beheerd.

AI koppelt beide exports en berekent het antwoord met een kort programma uit alle regels,
waardoor het niet op een schatting berust.
## Wat u moet voorbereiden

- export uit webshop, boekhouding of CRM als `.xlsx`, `.csv` of een tabel in de
  cloud,
- de vraag waarop u een antwoord nodig hebt en waarvoor u het gebruikt,
- de originele tabel geopend in een spreadsheet-editor om één getal te controleren,
- AI die met bestanden kan rekenen (dit toont het blok "In uw tool").
## Hoe te werk te gaan

1. Upload de export in de chat (in de Cowork- of Code-modus opent u de map met
   exports), plak de prompt uit de AI-oefening en schrijf eronder uw vraag en waarvoor
   u het antwoord nodig hebt.
2. AI beschrijft wat het in de export vond, koppelt de exports en berekent het antwoord. Controleer het getal dat u krijgt in de originele tabel en vertel AI of het klopt.
3. Als het klopt, slaat AI de werkwijze op als [skill](glossary:skill), in het geheugen of in de instructies en schrijft een zin voor de volgende export. Waar, toont het blok "In uw tool".

Wat u met het resultaat doet, beslist u zelf.
## AI-oefening

Plak deze [prompt](glossary:prompt) in de AI die u op het werk gebruikt:

Ik heb uit data een antwoord op één vraag nodig. De vraag en waarvoor ik het antwoord gebruik, schrijf ik onder deze tekst. De data staan in de bijgevoegde export of in de map waar u werkt.

1. Lees de volledige bestanden in en vertel me wat erin staat: hoeveel regels, welke kolommen en over welke periode. Als u niet weet wat een kolom betekent en dat belangrijk is voor het antwoord, vraag het dan aan mij.
2. Als u voor het antwoord twee exports nodig hebt, koppel ze dan op basis van een gemeenschappelijke kolom, bijvoorbeeld productcode. Vergelijk het aantal regels voor en na het koppelen, zodat geen regel verdubbeld of verloren gaat. Schrijf regels die niet gekoppeld kunnen worden apart en vermeld hoeveel het er zijn.
3. Bereken het antwoord met code uit alle regels, schat niets. Als er iets ontbreekt in de data voor het antwoord, bijvoorbeeld inkoopprijzen bij omzet, schrijf wat ontbreekt en waar ik het waarschijnlijk kan vinden.
4. Schrijf het resultaat zo: antwoord in één tot drie zinnen, tabel met de cijfers waarop het gebaseerd is, en een beschrijving van de berekening in gewone woorden. Geef tenslotte één getal waarop het antwoord steunt en dat ik kan controleren in de originele tabel, en schrijf hoe ik het daar vind: blad, kolom en filter.

Als ik zeg dat het getal niet klopt, zoek dan waarom, corrigeer de berekening en geef me een nieuw getal om te controleren. Als ik zeg dat het klopt, sla dan de werkwijze op zodat de volgende export met één zin kan worden verwerkt. Geef het een naam volgens het onderwerp, bijvoorbeeld Winst per product. Schrijf in de werkwijze welke bestanden en kolommen u verwacht, hoe u ze koppelt en wat u berekent; schrijf er geen cijfers uit deze export in. Als u in een map werkt, sla het dan op als bestand, bijvoorbeeld werkwijze-winst-per-product.md, en daarnaast de code waarmee u rekent. In een gewone chat maakt u van de werkwijze een skill, en als deze tool geen skills ondersteunt, sla dan de werkwijze op in het geheugen. Als geen van beide kan, geef me de werkwijze als downloadbaar bestand dat ik de volgende keer samen met de export upload. Als u voor het opslaan mijn klik nodig hebt, vertel me dan precies waar. Schrijf tenslotte hoe de werkwijze heet, waar die is opgeslagen en met welke zin ik de volgende export kan invoeren; in die zin moet de naam van de werkwijze staan.

## In uw tool

### Microsoft Copilot
Copilot Chat met een werkaccount rekent de bijgevoegde export uit in Python;
het bestand voegt u toe met de + knop of door te slepen. Als het getal klopt, slaat Copilot de werkwijze op in het geheugen; zeg ook dat hij het volledig moet opschrijven en plak het in de instructies van de Notebook (Notitieblokken, Nieuwe notitie), waar u de volgende export uploadt. Regelmatige exports op OneDrive verwerkt Cowork naast de Chat-schakelaar (Microsoft Copilot-licentie).

### ChatGPT
Voeg de export toe in de chat, het Python-programma start AI zelf. In zakelijke abonnementen Business en Enterprise maakt het van de werkwijze een skill die u opslaat in uw account; overzicht onder Plugins, tab Skills. Andere accounts slaan de werkwijze op in het geheugen en grote exports verwerkt Codex in de ChatGPT-desktopapp direct in de map.

### Claude
Berekeningen worden verzorgd door de functie Code execution and file creation in Settings onder Capabilities; in persoonlijke accounts staat het aan, in zakelijke wordt het beheerd door de beheerder. Het bestand mag maximaal 30 MB zijn en Claude kan van de werkwijze een skill maken. Grote en regelmatige exports verwerkt Cowork of Claude Code direct in de map.

### Gemini
Upload de export in de Gemini-app via Bestanden toevoegen of vanaf Schijf; een Google-tabel is ook voldoende en u kunt twee exports tegelijk toevoegen. Dat Gemini met code rekent, vermeldt de Google-hulp niet, dus laat het controlegetal niet weg. Het werkaccount heeft geen geheugen, dus laat de werkwijze opslaan als skill (typ "Sla op als skill"); bij de volgende export kiest u die na het typen van "/" in het berichtveld.
## Wat is berekenen met code

Als AI een tabel alleen als tekst leest, schat het getallen en kan bij grote exports gemakkelijk regels overslaan. Daarom laat u het met code rekenen: AI schrijft een kort programma,
draait het over het hele bestand en schrijft u het antwoord uit het resultaat. U hoeft de code niet te lezen, de juistheid herkent u aan het getal dat u in de tabel controleert. In de Cowork- of Code-modus rekent AI direct op bestanden in de map, kan ook grote exports aan en slaat de werkwijze naast hen op als gewone tekstbestanden.

Twee exports koppelt AI via een [gemeenschappelijke sleutel](glossary:data-key): een kolom die in beide bestanden hetzelfde is, bijvoorbeeld productcode of ordernummer.
Productnaam of klantnaam wordt in elk systeem iets anders geschreven, dus dat is niet genoeg om te koppelen.

Als exports elke maand binnenkomen of de chat ze niet volledig laadt, werk dan met AI in de Cowork- of Code-modus, die direct met de map op uw computer werkt. Hoe te beginnen, toont de kaart [Cowork of Code](card:when-chat-is-not-enough).
## Laat de volgende export AI zelf berekenen

Na de eerste ronde heeft AI de werkwijze opgeslagen. Volgende maand geeft u een nieuwe export en schrijft u de zin die AI gaf, bijvoorbeeld "Gebruik de werkwijze Winst per product op de november-export". AI rekent hetzelfde als de vorige keer, zodat u de cijfers van beide maanden direct kunt vergelijken.

Als de export elke maand automatisch in dezelfde map op uw computer binnenkomt, kan AI in de Cowork- of Code-modus het antwoord ook zonder u op de ingestelde dag berekenen als een [geplande taak](card:recurring-ai-task). Geef deze opdracht en vraag AI om er een geplande taak van te maken:

```text
Elke maand op de 3e dag om 8:00 neem het nieuwste exportbestand in de map en bereken het antwoord volgens de opgeslagen werkwijze. Sla het resultaat naast de export op als bestand met de maand in de naam en schrijf bovenaan wat er veranderd is ten opzichte van vorige maand.
```

Als de taak met een map op uw computer werkt, draait die alleen als de computer aanstaat en de app open is.
## Voorbeeld

Martina coördineert de verkoop in een webshop met koffie en koffiemachines. Op maandag 2-11 downloadt ze de export van bestellingen van augustus tot oktober (`bestellingen.xlsx`, 14.200 regels) en van het magazijn de prijslijst met inkoopprijzen (`inkoopprijzen.xlsx`). Ze uploadt beide bestanden in de AI die ze op het werk gebruikt, plakt de prompt en schrijft eronder: "Op welke drie producten richten we de kerstcampagne? Ik wil die waarop we het meest verdienen."

AI schrijft wat het geladen heeft en waarschuwt dat in de bestellingen alleen omzet staat. Op basis daarvan zou de koffiemachine Brio met 1,24 miljoen CZK winnen, maar uit omzet alleen ziet u niet waarop het bedrijf winst maakt. Daarom koppelt AI bestellingen met prijslijst op productcode. Zes codes ontbreken in de prijslijst; AI schrijft ze apart op, Martina herkent er september-nieuwkomers in en vraagt de prijzen op bij het magazijn. Het antwoord: de meeste winst maakten koffie Ethiopië 250 g, koffie Brazilië 1 kg en handmatige molen Classic. Brio heeft 9% marge, koffie meer dan 40%.

Ter controle geeft AI de omzet van koffie Ethiopië: 386.450 CZK, blad Bestellingen, kolom Omzet, filter Productcode ETI-250. Martina filtert dit in de tabel en de som klopt. Ze schrijft dat aan AI en die maakt van de werkwijze een skill Winst per product; Martina bevestigt het opslaan met één klik. Begin december uploadt ze in een nieuwe chat de november-export met prijslijst en schrijft alleen "Gebruik de werkwijze Winst per product op de november-export". Binnen twee minuten heeft ze dezelfde tabel voor november.
## Als u vastloopt

- **AI schrijft getallen, maar u ziet niet hoe het berekend is:** schrijf "Bereken het met code over het hele bestand en laat me de berekening zien." Als AI code niet kan uitvoeren, controleer dan volgens het blok "In uw tool" of u berekeningen moet inschakelen en sla het controlegetal nooit over.
- **Het controlegetal klopt niet:** vertel AI wat u in de tabel vond en met welk filter. Meestal rekende het met een andere periode, met geannuleerde bestellingen of verdubbelde regels door koppeling. Als het getal pas bij een volgende export niet klopt, vraag AI dan de correctie ook in de opgeslagen werkwijze te zetten. Als fouten terugkomen, ga verder met [resultaatcontrole](card:kontrola-vysledku).
- **AI zegt dat het bestand niet volledig geladen is:** grote exports kan de chat niet aan. Schakel over naar [Cowork of Code](card:when-chat-is-not-enough), waar AI direct met het bestand in de map werkt. Als u die modus niet hebt, laat AI zeggen welke kolommen en periode het nodig heeft en download alleen die export.
- **AI slaat de werkwijze niet op of gebruikt die niet in een nieuwe chat:** zet geheugen aan in de instellingen; in zakelijke accounts schakelt de beheerder soms geheugen en skills uit. Als geen van beide kan, vraag AI om de werkwijze als downloadbaar bestand en upload die volgende keer samen met de export. Schrijf in een nieuwe chat altijd ook de zin voor de volgende keer met de naam van de werkwijze.
## Wat klaar is

U hebt het antwoord op uw vraag berekend uit alle regels van de export en één getal gecontroleerd in de originele tabel. U weet wat er in de data ontbreekt. De werkwijze is opgeslagen als skill, in het geheugen, in de map of als bestand bij u, en volgende keer volstaat een nieuwe export en de zin die AI u gaf.
## Wat nu

U kunt de opgeslagen werkwijze verder verbeteren op basis van uw correcties. Hoe, toont de kaart [Maak uw eigen skill](card:create-skill-from-proven-process). Als collega’s dezelfde berekening nodig hebben en u wilt het niet elke maand voor hen doen, laat AI dan een eenvoudige app bouwen waarin zij zelf de export uploaden. Die aanpak heet [vibe coding](card:risk-based-prototyping).
## Gemeenschappelijke sleutel in gegevens

**Wat het is:** Een kolom of een combinatie van kolommen waarmee dezelfde record in twee bronnen veilig kan worden herkend, bijvoorbeeld een bestel-ID of een combinatie van maand en kostenplaats.

**Wat het niet is:** Het is geen wachtwoord of technische toegangssleutel. Dezelfde bedrijfs- of persoonsnaam hoeft geen betrouwbare gemeenschappelijke sleutel te zijn.

**Waarom de student het nodig heeft:** Het helpt bij het koppelen van overeenkomende rijen zonder verlies, verwarring of ongewenste duplicatie.

## Prompt

**Wat het is:** Instructie voor een specifieke interactie met AI.

**Wat het niet is:** Het is niet hetzelfde als een langdurige context, een opgeslagen assistent of agent.

**Waarom de student het nodig heeft:** Het start de oefening en leidt het verloop ervan; het is niet de hoofdinhoud van de les.

## Vaardigheid

**Wat het is:** Een herbruikbare procedure voor een bepaald type taak. Kan instructies, regels, voorbeelden, sjablonen en andere benodigde bronnen bevatten. De manier van maken en uitvoeren verschilt per tool.

**Wat het niet is:** Het is geen algemene rol van een assistent, noch een enkele succesvolle conversatie die ongewijzigd is opgeslagen.

**Waarom de student het nodig heeft:** Helpt een bewezen werkwijze om te zetten in een stabiele vorm die consequent opnieuw kan worden gebruikt.

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

## Mechanica: Controle van argumenten vóór outputcreatie

Een korte controle aan het begin van kaarten waaruit een output voor iemand anders ontstaat. Het is geen zelfstandige kaart en heeft geen eigen voltooiing. Het is het tegenovergestelde van de mechanica `data-readiness-check`: die bewaakt of de data klaar zijn, deze bewaakt of de intentie klaar is.

## Wanneer wordt het geactiveerd

Een persoon bereidt een output voor die iemand anders zal zien: een presentatie, rapport, aanbeveling, voorstel, e-mail aan het management, samenvatting voor een klant. Het wordt niet geactiveerd voor outputs voor jezelf, voor onderzoek of voor onafgewerkte aantekeningen.

## Waarom bestaat het

AI kan twintig slides of drie pagina's rapport maken van wat dan ook en het zal er af lijken. Een lege output verschilt op het eerste gezicht niet van een goede, omdat het ontbrekende deel de intentie is, niet de vorm. Drie zinnen van een mens zijn de goedkoopste manier om dit te herkennen vóór het maken, niet erna.

## Wat het van de mens vraagt

Drie dingen, en geen van deze wordt door AI voorgesteld:

| Wat | Waarom kan AI dit niet bepalen |
|---|---|
| **Publiek** | wie er voor zit en wat die mensen al weten, dat weet alleen een mens |
| **Verandering** | wat het publiek na het lezen moet doen of anders moet besluiten |
| **Kernzin** | de enige zin die ze moeten onthouden als ze alles andere vergeten |

## Test door omkering

De kernzin herken je aan twee eigenschappen: je kunt het er niet mee eens zijn en het past in één ademhaling. De test is om het om te keren.

- *We willen de klantervaring verbeteren* → het tegenovergestelde is onzin, dus de zin zegt niets.
- *Stop de ontwikkeling van de tweede app en breng mensen terug naar de eerste* → het tegenovergestelde is logisch en iemand zal het verdedigen. Dit is de kernzin.

Als de zin niet standhoudt, zegt AI dat en laat het de mens herschrijven. Het herschrijft het niet voor hen.

## Wat AI doet

1. Vraagt om drie zinnen en wacht daarop. Biedt ze niet aan en geeft er geen commentaar op.
2. Voert de omkeringstest uit. Als de zin niet standhoudt, legt het uit waarom en geeft het terug aan de mens.
3. Vraagt of het formaat bij de intentie past. Als een andere output de verandering beter zou oproepen, biedt het de kaart `output-beyond-document` aan en laat de beslissing aan de mens.
4. Als de drie zinnen klaar zijn, gaat het direct door naar de hoofdopdracht van de kaart en komt er niet meer op terug.

## Wat blijft bij de mens

- het publiek en de verandering bepalen,
- de kernzin schrijven en eventueel herschrijven,
- beslissen of het formaat bij de intentie past,
- beslissen wat context is en wat wordt weggelaten als er tijd tekort is.

## Output van de mechanica

Drie regels binnen het hoofdresultaat, geen apart document en geen extra check-in:

```text
Publiek: ...
Verandering die de output moet oproepen: ...
Kernzin: ...
```

## Routing

- **Drie zinnen zijn duidelijk:** doorgaan met de hoofdopdracht van de kaart.
- **Kernzin houdt de omkeringstest niet stand:** de mens laten herschrijven, niet doorgaan.
- **Zin is helemaal niet te schrijven:** meestal is de beslissing nog niet genomen of heeft de output twee doelen. Splits in twee outputs.
- **Verandering wordt beter opgeroepen door een ander formaat:** kaart `output-beyond-document`.
- **Ontbrekende onderlagen of context:** kaart `prace-s-kontextem`.
- **Output bestaat al en gaat naar buiten:** kaart `kontrola-vysledku`.

## Grenzen

- De mechanica beoordeelt niet de kwaliteit van de inhoud of de waarheid van beweringen. Dat doet de resultaatcontrole op de voltooide output.
- Voor outputs voor jezelf wordt het niet geactiveerd; vragen naar publiek bij eigen aantekeningen is ritueel, geen hulp.
- Als een mens de drie zinnen kent en ze binnen een halve minuut schrijft, is de mechanica klaar. Het houdt degene die de intentie heeft niet op.

## Minimale promptblok

```text
Voordat je iets gaat maken, vraag mij drie dingen en wacht daarop: voor wie is de output, wat moet er na de output veranderen, en welke ene zin moet het dragen. Stel ze mij niet voor.

Probeer daarna mijn kernzin om te keren. Als het tegenovergestelde onzin klinkt, zeg dan dat de zin niets zegt en laat mij herschrijven. Herschrijf het niet voor mij.

Als de drie zinnen klaar zijn, ga dan direct door met de hoofdtaak en kom er niet meer op terug. Als een ander formaat de verandering beter zou oproepen dan het formaat dat ik wil, zeg dat dan in één zin en laat de beslissing aan mij.
```

## Mechanica: Controle van dataklaarheid

Korte adaptieve controle aan het begin van datakaarten. Het is geen aparte kaart, heeft geen eigen voltooiing en de gebruiker hoeft niet kunstmatig naar problematische tabellen te zoeken.

## Wanneer wordt het gestart

De gebruiker brengt een concrete vraag en de data mee waarmee hij wil werken. Nog vóór het invoeren van de data moet duidelijk zijn dat hij een goedgekeurde omgeving gebruikt. Als dat niet duidelijk is, verwijst de mechanica naar het veiligheidsproces en vraagt de inhoud niet op.

## Wat doet AI

1. Verifieert vanuit het doel en de dataset of het begrijpt wat één rij voorstelt, welke kolommen belangrijk zijn, de eenheden en de tijdsperiode.
2. Voert een snelle technische controle uit van de structuur, datatypes, lege waarden, mogelijke duplicaten en categorieën.
3. Verdeelt de bevindingen in:
   - technische correcties die veilig kunnen worden voorgesteld of uitgevoerd,
   - inhoudelijke vragen die door de gebruiker of data-eigenaar moeten worden beslist,
   - problemen die een andere omgeving of een aparte kaart vereisen.
4. Als er niets wezenlijks is dat het werk belemmert, gaat het direct door naar de hoofdopdracht van de kaart.
5. Als een technische correctie nodig is, toont het de wijziging aan de hand van een voorbeeld, vraagt goedkeuring en maakt een werkversie aan. Het originele bestand blijft behouden.
6. Als het de betekenis niet kent, stelt het alleen vragen die het resultaat kunnen beïnvloeden. Het verzint geen antwoorden.

## Wat blijft bij de gebruiker

- bevestigen van de betekenis van de data en het doel van het vervolgwerk,
- beslissen of categorieën mogen worden samengevoegd en wat een ontbrekende waarde betekent,
- goedkeuren van wijzigingen die de inhoud kunnen beïnvloeden,
- bepalen of onduidelijkheden een data-eigenaar vereisen.

## Output van de mechanica

De mechanica maakt maximaal een driepunten preflight-notitie binnen het hoofdwerkresultaat:

```text
Status van de data: klaar / aangepast / geblokkeerd
Uitgevoerde wijzigingen of bevestigde aannames: ...
Wat nog geverifieerd moet worden: ...
```

Er wordt geen apart document of extra check-in gemaakt.

## Routing

- **Data zijn klaar:** direct doorgaan met analyse of besluitvormingsopdracht.
- **Eenvoudige technische inconsistentie:** AI corrigeert deze na goedkeuring en gaat door.
- **Onduidelijke zakelijke betekenis:** vraag het aan de gebruiker of data-eigenaar.
- **Meerdere bestanden of systemen:** kaart `gegevens-samenvoegen-uit-meerdere-bronnen`.
- **Gesprekken, tickets of feedback:** aparte kaart voor het omzetten van ongestructureerde inhoud naar structuur.
- **Te groot bestand of ontbrekende toolcapaciteit:** kaart `wanneer-chat-niet-volstaat`.
- **Onzekerheid of data ingevoerd kunnen worden:** kaarten `veilig-gebruik` en `gegevensbeheer`.

## Grenzen

- Gebruikelijke formaten en bekende categorieën corrigeert AI zelf, de gebruiker hoeft deze niet handmatig te zoeken.
- De mechanica creëert geen probleem als er geen wezenlijk probleem wordt gevonden.
- Klaarheid wordt beoordeeld ten opzichte van de specifieke vraag. Dezelfde tabel kan voldoende zijn voor een overzicht, maar onvoldoende voor een nauwkeurige financiële of personele conclusie.
- Formaatcontrole vervangt geen controle van specifieke waarden en berekeningen in het eindresultaat.

## Minimale promptblok

```text
Voordat je begint met het analyseren van data, voer een korte controle uit van de dataklaarheid ten opzichte van mijn vraag.

Vat eerst samen wat volgens jou één rij voorstelt, welke kolommen belangrijk zijn, de eenheden en de periode. Je mag technische inconsistenties voorstellen te corrigeren. Vraag bij inhoudelijke onduidelijkheden en verzin niets.

Als de data klaar zijn voor de taak, zeg dat dan in één zin en ga direct door. Als iets het resultaat kan veranderen, toon maximaal drie punten. Wijzig inhoudelijke inhoud of verwijder rijen pas na mijn goedkeuring en alleen in een werkversie.
```
