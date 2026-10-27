# Nechajte AI zapisovať stav úloh: kolega vie, kde je vaša práca

AI pri každej práci sama nájde alebo založí úlohu v nástroji vášho tímu, posunie ju a uzavrie.

## Nechajte AI zapisovať stav úloh: kolega vie, kde je vaša práca

**Obtiažnosť: stredná.**\
**Čas: približne 15 minút** s jednou prácou, ktorú dnes robíte.
## Na čo sa hodí

Porovnanie troch ponúk na nové okná máte od utorka hotové, ale úloha je v
nástroji na úlohy stále v stave Na spracovanie. Vo štvrtok vám kvôli tomu píše manažérka
a kolegyňa medzitým začala ponuky porovnávať znova.

Pomôže pravidlo pre AI: úlohu prepína sama počas práce a na konci do nej
zapíše výsledok s odkazom, takže stav sedí, aj keď na ňu zabudnete.
## Čo si pripraviť

- jednu prácu, ktorú dnes s AI urobíte, napríklad porovnanie ponúk alebo podklady na poradu,
- nástroj na úlohy tímu, napríklad Planner, Asana alebo Jira; pripojenie niekedy povoľuje IT,
- priečinok projektu zdieľaný s tímom, napríklad synchronizovaný z OneDrivu alebo SharePointu,
- AI v [režime](glossary:workmode) Cowork alebo Code; kde je, ukazuje blok Vo vašom nástroji.
## Ako na to

1. Vložte prompt do AI v režime Cowork alebo Code a dopíšte nástroj na úlohy
   a dnešnú prácu. AI sa k nástroju pripojí; prihlásenie potvrdíte sami.
2. Potvrďte účet, cez ktorý AI zapisuje, a povedzte, ktoré stavy znamenajú
   rozpracované a hotové. AI stavy alebo stĺpce uloží do pravidla a prácu
   urobí.
3. Otvorte úlohu v nástroji na úlohy a pozrite sa, čo v nej uvidí kolega.
   Stav aj odkaz majú sedieť s hlásením AI.

Do úlohy stačí stav, veta o výsledku a odkaz; zvyšok patrí do worklogu,
denníka projektu.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorené v priečinku projektu, a na posledné dva riadky dopíšte nástroj a prácu:

Chcem, aby sa stav mojej práce zapisoval sám do nástroja na úlohy, ktorý používa náš tím, a kolegovia videli, kde práca je, bez toho, aby sa ma pýtali. Nastav to a hneď to použij na prácu, ktorú ti zadám. Nástroj a práca sú na posledných dvoch riadkoch.

1. Pripoj sa k nástroju na úlohy. Použi konektor, ktorý tu máš. Keď chýba alebo vie len čítať, pripoj nástroj sám, napríklad cez MCP server (pri Planneri Work IQ od Microsoftu) alebo službu Composio. Kde sa musím prihlásiť alebo niečo povoliť ja, povedz mi presne kde a počkaj. Keď pripojenie musí vo firme povoliť IT, napíš mi pre IT krátku žiadosť, čo a prečo pripojiť. Keď tím vedie úlohy v tabuľke alebo v súbore, pracuj v ňom. Keď tu nemôžeš zapisovať do súborov v priečinku projektu, povedz mi to hneď a poraď, kam prepnúť.

2. Zisti priamo v nástroji, pod akým účtom zapisuješ, a napíš mi ho aj s projektom alebo nástenkou, kam budeš zapisovať. Keď môžeš zapisovať cez viac účtov, opýtaj sa ma, ktorý použiť. Vypíš mi stavy a stĺpce úloh, ktoré v nástroji vidíš, a opýtaj sa, ktoré znamenajú rozpracované a hotové.

3. Zapíš do AGENTS.md v priečinku projektu toto pravidlo a hranaté zátvorky v ňom vyplň sám podľa toho, čo sme zistili. Keď AGENTS.md neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork pravidlo zapíš do inštrukcií priečinka.

### Stav práce
- Úlohy vedieme v [nástroj, projekt alebo nástenka]. Zapisuj do neho vždy cez účet [účet] a v každom hlásení ho menuj.
- Na začiatku práce nájdi úlohu, ku ktorej patrí, a prepni ju na [rozpracované]. Keď žiadna nie je, založ ju s krátkym názvom a priraď ju mne.
- Keď práca čaká na niekoho ďalšieho, napíš do úlohy jednou vetou, na koho a na čo.
- Na konci pripíš hore do worklog.md v priečinku projektu záznam s odkazom na výsledok v tvare predchádzajúcich záznamov. Keď worklog.md neexistuje, založ ho a záznam napíš takto: dátum, čo sa urobilo, odkaz na výsledok a ďalší krok. Keď v AGENTS.md pravidlo pre worklog už je, tento riadok vynechaj a k tomu pravidlu len pripíš odkaz na výsledok.
- Do úlohy napíš komentár s výsledkom v jednej vete a s odkazom, ktorý kolega otvorí, a prepni ju na [hotové]. Keď výsledok leží len v tomto počítači, opýtaj sa ma, kam ho uložiť. Keď práca hotová nie je, nechaj ju rozpracovanú a napíš do nej, čo zostáva.
- Po každom zápise si úlohu aj worklog znova načítaj a over, že je v nich, čo si zapísal. Až potom mi povedz, že je hotové. Keď zápis nesedí, oprav ho, a keď to nejde, povedz mi to.

4. Potom urob prácu z posledného riadku podľa toho pravidla. Na konci mi napíš odkaz na úlohu, jej stav, ako ju teraz vidíš v nástroji, a cez ktorý účet si zapisoval.

Nástroj na úlohy:
Práca:

## Vo vašom nástroji

### Microsoft Copilot
Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (prepínač vedľa
Chatu; licencia Microsoft 365 Copilot). Nástroj na úlohy pridáte v Customize,
Plugins, inak požiadajte IT. Na koniec promptu dopíšte: „Priečinok nemám:
worklog ved ako Word na OneDrive, súbor s pravidlami nezakladaj a pravidlo
napíš ako text začínajúci ‚U projektu [názov]:‘.“ Text vložte vľavo do
Customize, Preferences.

### ChatGPT
Režim Code je v ChatGPT Codex: v aplikácii ChatGPT pre počítač ho zvoľte a
otvorte priečinok projektu (open a folder). Codex číta `AGENTS.md` sám a nástroj
na úlohy pripojí cez MCP server; nájdete ho potom v Settings, MCP servers, kde
sa k nemu prípadne prihlásite tlačidlom Authenticate. Keď Codex nevidíte, vo
firme ho pravdepodobne vypol správca, tak ho požiadajte, aby ho zapol.

### Claude
V aplikácii Claude pre počítač otvorte Cowork alebo Claude Code a vyberte
priečinok projektu; oboje je v platených tarifách. Cowork si pravidlo zapíše do
inštrukcií priečinka (Folder instructions), Claude Code číta `AGENTS.md`. Nástroj
na úlohy, napríklad Asanu alebo Linear, pripojíte v ľavom paneli v Customize,
Connectors; vo firme ho pridáva vlastník organizácie.

### Gemini
Aplikácia Gemini pridá úlohu do Google Tasks a označí ju ako hotovú, keď v
prompte napíšete @Google Tasks. Worklog v priečinku však sama nevedie, pretože
s priečinkom v počítači nepracuje. Celé cvičenie urobí Antigravity, nástroj
Google, ktorý pracuje priamo vo vašom priečinku a číta `AGENTS.md`; s firemným
účtom ho používate cez Gemini Enterprise, o ktorý požiadajte IT.
## Úloha, worklog a súbor s pravidlami

AI zapisuje na dve miesta a riadi sa jedným súborom s pravidlami. Úloha v
nástroji na úlohy vidí celý tím: AI do nej zapisuje stav a na konci jednu
vetu s odkazom na výsledok. Stav je stĺpec, štítok alebo priebeh úlohy,
napríklad Na spracovanie, Rozpracované alebo Hotové. Keď tím nemá žiadny nástroj, poslúži
tabuľka alebo súbor `ukoly.md` v zdieľanom priečinku.

[Worklog](card:project-worklog), denník projektu, je súbor `worklog.md` v
priečinku projektu. AI do neho na konci pripíše, čo sa urobilo, s odkazom na
výsledok, takže sa k práci vrátite aj o mesiac.

`AGENTS.md` je súbor s pokynmi pre AI v priečinku projektu, ktorý si AI prečíta
na začiatku každej práce; v Cowork rovnakú úlohu majú inštrukcie priečinka. K
nástroju na úlohy sa AI pripojí cez konektor alebo cez [MCP](glossary:mcp), otvorený
štandard pre pripojenie aplikácií k AI. Keď konektor chýba, použije
integračnú službu, napríklad Composio; ako AI takú službu nastaví, ukazuje
karta o [prenose dát medzi aplikáciami](card:cross-app-workflow).
## Prečo AI mení účet a overuje zápis

Dve pravidlá v prompte, účet v každom hlásení a kontrola po zápise, vznikli
z chýb, ktoré sme sami urobili. Úlohy vedieme v nástroji Linear a
AI do neho zapisuje cez službu, v ktorej má pripojené aj ďalšie aplikácie, u
niektorých s viacerými účtami. Keď účet nevybrala výslovne, občas zapísala pod iným, než
sme čakali. Odvtedy ho vyberie vždy a v hlásení ho menuje.

Druhá chyba: nástroj zápis potvrdil, ale stav úlohy sa nezmenil. AI preto po
každom zápise úlohu znova načíta a hotovo hlási, až keď v nej vidí, čo
zapísala.
## Príklad

Jakub je projektový manažér vo stavebnej firme a tím vedie úlohy v Asane. V
utorok 20. 10. 2026 otvorí AI v režime Cowork v priečinku `Rekonštrukcia školy
Lipová`, vloží prompt a dopíše:

```text
Nástroj na úlohy: Asana, projekt Rekonštrukcia školy Lipová
Práca: Porovnaj tri ponuky na výmenu okien zo zložky Ponuky v tabuľke (cena, termín, záruka) a napíš odporúčanie pre technickú riaditeľku.
```

Jakub potvrdí prihlásenie firemným účtom. AI vypíše stĺpce Na spracovanie,
Rozpracované, Čaká na schválenie a Dokončené a Jakub povie, že hotová práca
ide do Čaká na schválenie, pretože ponuky schvaľuje technická riaditeľka. AI
nájde úlohu „Porovnať ponuky na okná“, prepne ju na Rozpracované a ponuky porovná. Po
poslednom zápise úlohu znova načíta a zistí, že zostala v Rozpracované. Presunie
ju znova, stav overí a vráti:

```text
Zapísané cez účet Jakub Dvořák (Asana, Stavby Morava).
- Úloha „Porovnať ponuky na okná“ je v stĺpci Čaká na schválenie, s odporúčaním a odkazom na tabuľku Porovnanie okien.xlsx na SharePointe.
- Prvý presun sa neuložil; po druhom pokuse je presun overený.
- Worklog: záznam 2026-10-20 je hore vo worklog.md.
```

V stredu ráno technická riaditeľka Hana otvorí projekt v Asane, vidí úlohu v
stĺpci Čaká na schválenie s odkazom na tabuľku a odporúčanie schváli, bez toho, aby Jakubovi
písala.
## Keď sa zaseknete

- **AI sa k nástroju na úlohy nedostane:** konektor chýba alebo ho vo firme
  nejde zapnúť. Napíšte AI, nech pripraví krátku žiadosť pre správcu IT. K
  Planneru sa AI v režime Code pripojí cez Work IQ, MCP server od Microsoftu,
  ktorý IT vo firme raz zapne. Keď IT pripojenie povolí, napíšte v tom istom
  chate „IT to zaplo, pokračuj“. Ako AI pripojí iné aplikácie, ukazuje karta
  [Pripojte si konektor](card:plugin-connector).
- **AI zakladá novú úlohu, aj keď jedna už existuje:** povedzte jej, podľa čoho
  úlohu spozná, napríklad podľa projektu a názvu, a nech to doplní do pravidla.
- **AI hlási hotové, ale v nástroji je úloha v starom stave:** napíšte
  „Načítaj úlohu znova a ukáž mi, čo v nej vidíš“. Keď sa overenie v hlásení
  neobjavilo, požiadajte AI, nech skontroluje, že má pravidlo v `AGENTS.md` alebo
  v inštrukciách priečinka.
- **AI pracuje mimo priečinka projektu a pravidlo nepozná:** pravdepodobne pracujete v
  bežnom chate. Prepnite do [Cowork alebo Code](card:when-chat-is-not-enough)
  a otvorte v ňom priečinok projektu.
## Čo bude hotové

Dnešná práca má úlohu, ktorú AI sama posunula až do hotové a zapísala do nej
výsledok s odkazom, a vo worklogu je jej záznam. Pravidlo v `AGENTS.md`, v
inštrukciách priečinka alebo v nastavení vašej AI zabezpečí to isté pri každej ďalšej
práci. Kolega stav vašej práce
nájde v nástroji na úlohy, bez toho, aby sa vás pýtal.
## Čo ďalej

Aby sa stav dopísal aj za prácu v e-mailoch a na stretnutiach, nastavte si
[naplánovanú úlohu](card:recurring-ai-task), ktorá úlohy každý večer doplní
podľa e-mailov, chatov a stretnutí z toho dňa. Ak pravidlo po pár týždňoch stále funguje,
skontroluje [týždenná revízia nastavení](card:weekly-ai-review).
## MCP

**Čo to je:** Otvorený technický štandard (Model Context Protocol), cez ktorý sa AI pripája k aplikáciám a dátovým zdrojom. Aplikácia alebo poskytovateľ dát ponúkne MCP server a AI cez neho číta dáta alebo vykonáva povolené akcie. V nastaveniach nástrojov sa takéto pripojenie často nazýva konektor alebo MCP server.

**Čo to nie je:** Nie je to samostatná aplikácia ani AI model. Samotný štandard nič nesťahuje; potrebuje server od poskytovateľa, často účet u neho a oprávnenie, ktoré aktivuje človek alebo správca.

**Prečo to študent potrebuje:** Pomáha pochopiť, kedy AI pristupuje k dátam mimo verejného webu a kto musí pripojenie povoliť.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Pracovný režim

**Čo to je:** Typ interakcie s AI: chat, plátno/artefakt, agent, kódovanie, vyhľadávanie. Rôzne úlohy vyžadujú rôzne režimy.

**Čo to nie je:** Nie je to úroveň vyspelosti. Režim si volí človek podľa úlohy, nie podľa svojho skóre.

**Prečo to študent potrebuje:** Učí rozpoznať, kedy prepnúť z chatu do iného prostredia pre lepší výsledok.

## Výpadok služby, limit alebo preplnený chat

Spoločný fallback pre prevádzkové prerušenie práce s AI. Je dostupný z každej karty cez vstup **Výpadok alebo vyčerpaný limit**. Nevytvára vlastnú kartu, check-in ani viacero kópií toho istého textu.

Špecifická sekcia **Keď niečo nefunguje** v karte ďalej rieši chybu zadania, podkladov, nástroja alebo postupu. Táto mechanika sa spustí, keď AI nemôže technicky pokračovať v procese.

## Najskôr rozlíšte, čo sa stalo

| Čo vidíte | Pravdepodobná situácia | Prvý krok |
|---|---|---|
| Nástroj hlási vyčerpaný limit, príliš veľa požiadaviek alebo čas obnovenia | tarifný alebo dočasný prevádzkový limit | poznačte si čas obnovenia a uložte bod návratu |
| AI zabúda začiatok, odmieta ďalšiu prílohu alebo hlási príliš dlhý vstup | príliš veľký kontext, súbor alebo úloha | vytvorte handoff a pokračujte v novom kontexte alebo vhodnejšom prostredí |
| Nástroj neodpovedá, vracia serverovú chybu alebo zlyháva viacero modelov | výpadok služby | overte oficiálny status a zvoľte schválenú náhradu alebo pauzu |

Ak AI ešte odpovedá, môže situáciu sama pomenovať a pripraviť bod návratu. Ak neodpovedá, tento krok preskočte. Opakované odosielanie tej istej požiadavky stav práce nezachráni.

## Uložte bod návratu

Pred čakaním alebo prechodom inam zachovajte najmenší balík, z ktorého sa dá bezpečne pokračovať:

```text
Cieľ: ...
Čo je hotové a kde to je: ...
Potvrdené rozhodnutia a obmedzenia: ...
Použité zdroje alebo súbory: ...
Najbližší ďalší krok: ...
Čo sa nemá znova meniť alebo vyrábať: ...
```

Ak AI stále reaguje, použite:

> Priprav mi stručný bod návratu na pokračovanie v novom chate alebo nástroji. Zachovaj cieľ, hotové časti, potvrdené rozhodnutia, zdroje, obmedzenia a jeden najbližší krok. Nevymýšľaj, čo v konverzácii nie je.

Pri dlhšej práci uložte bod návratu do projektového README alebo iného schváleného pracovného priestoru. Citlivé vstupy zostávajú iba v schválenom úložisku.

## Došiel tarifný alebo prevádzkový limit

1. Zistite, kedy sa limit obnoví a či sa týka modelu, funkcie alebo celého účtu.
2. Rozhodnite medzi pauzou, menším rozsahom a schváleným náhradným modelom alebo prostredím.
3. Pri prechode preneste bod návratu a len podklady nevyhnutné pre ďalší krok.
4. Overte, že náhrada zvládne potrebné súbory, nástroje a akcie. Slabší model môže stačiť na formátovanie, ale zlyhať pri analýze alebo práci s nástrojmi.

## Kontext, súbor alebo úloha je príliš veľká

1. Nechajte AI vytvoriť handoff skôr, než stratí staršie rozhodnutia, ak ešte odpovedá.
2. Začnite nový chat alebo projekt s bodom návratu a odkazmi na kanonické súbory.
3. Rozdeľte prácu podľa zmysluplných celkov a zachovajte spoločné kritériá výsledku. Náhodné rozdelenie textu môže stratiť vzťahy medzi časťami.
4. Ak úloha vyžaduje viac súborov, hromadnú prácu alebo zmeny v projekte, pokračujte cez kartu `when-chat-is-not-enough`.

## Nástroj alebo model má výpadok

1. Overte oficiálny status poskytovateľa. Chybu účtu riešte až vtedy, keď služba všeobecne funguje.
2. Uložte bod návratu mimo práve nefunkčnej konverzácie, ak je k nej ešte prístup.
3. Použite schválený náhradný nástroj len vtedy, ak má potrebné schopnosti a rovnaké podklady doň môžu vstúpiť.
4. Ak vhodná náhrada nie je, prácu pozastavte a zapíšte presný ďalší krok. Po obnovení pokračujte od posledného potvrdeného výsledku.

## Bezpečnostné hranice

- Limit ani výpadok nie je dôvod vložiť pracovné, klientské alebo osobné údaje do neschváleného osobného nástroja.
- Nový účet, bezplatný tarif alebo iný poskytovateľ môže mať iné podmienky pre údaje, uchovávanie a trénovanie.
- Prechod medzi modelmi môže zmeniť formát, presnosť aj dostupné nástroje. Prvý výstup po návrate porovnajte s posledným potvrdeným bodom.
- Neodosielajte znova akciu, ktorá mohla prebehnúť pred chybou, kým neoveríte jej stav. Platí to najmä pre zápis do systému, odoslanie správy, nákup alebo vymazanie.

## Návrat do karty

Po obnovení služby alebo prechode do vhodného prostredia:

1. načítajte bod návratu,
2. ukážte AI posledný potvrdený výsledok,
3. vyžiadajte iba najbližší ďalší krok,
4. dokončite pôvodnú kartu bez opakovania hotovej práce,
5. ak sa zmenil nástroj alebo model, poznačte rozdiel, ktorý mohol ovplyvniť výsledok.

## Evidencia

Mechanika nevytvára samostatné splnenie. Do výsledku hlavnej karty môže pridať iba bod návratu, zvolenú cestu a prípadný rozdiel po zmene nástroja.
