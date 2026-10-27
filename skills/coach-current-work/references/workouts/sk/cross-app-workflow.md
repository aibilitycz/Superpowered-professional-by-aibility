# Nastavte workflow cez viac aplikácií: AI za vás prenesie dáta

Dáta, ktoré prepíšete medzi aplikáciami, napríklad prihlášky z e-mailu do tabuľky, prenesie AI sama.

## Nastavte workflow cez viac aplikácií: AI za vás prenesie dáta

**Náročnosť: stredná.**\
**Čas: približne 15 minút** s dátami, ktoré prepíšete ručne.
## Na čo sa hodí

Za týždeň vám prišlo 23 prihlášok na miesto asistentky výroby a do piatku má
manažér výroby dostať ich zoznam. Každú prepíšete do tabuľky, uchádzačom
odpovedáte, že ju máte, a pri pätnástej zistíte, že ste jeden telefón
zapísali s chybou.

Takáto práca sa nazýva [workflow](glossary:workflow) cez viac aplikácií a AI ju
vykoná celú: prečíta e-maily, údaje zapíše do tabuľky a z tabuľky pripraví
koncepty odpovedí.
## Čo si pripraviť

- prácu, pri ktorej prepíšete dáta, napríklad prihlášky z e-mailu do tabuľky,
- prístup k obom aplikáciám; vo firemnom účte prepojenie s AI niekedy schvaľuje
  správca,
- AI v režime Cowork alebo Code; kde ho nájdete, ukazuje blok „Vo vašom
  nástroji“,
- priečinok na zadanie na ďalšie použitie, napríklad nový prázdny `Nábor`.
## Ako na to

1. Otvorte AI v režime Cowork alebo Code vo svojej zložke a v novom chate vložte
   prompt. Za riadok „Zadanie:“ napíšte jednou vetou, odkiaľ dáta berie, kam ich
   zapíše a čo nasleduje.
2. AI pripojí aplikácie, ktoré chýbajú; prihlásenie potvrdíte sami. Potom vykoná
   celú prácu a e-maily uloží len ako koncepty, vy sa zatiaľ venujete niečomu
   inému.
3. Dva-tri záznamy v cieľovej aplikácii porovnajte so zdrojom a koncepty
   odošlite. Čo má AI nabudúce urobiť inak, jej napíšte a ona to doplní do
   zadania.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otevrenej vo vašej zložke, a za posledný riadok napíšte svoju prácu:

Urob za mňa prácu, pri ktorej ručne prepíšem dáta z jednej aplikácie do druhej. Zadanie je na poslednom riadku.

Najskôr zisti, do ktorých aplikácií zo zadania sa dostaneš a či do cieľovej aplikácie vieš zapisovať. Použi konektory, ktoré tu máš. Ak niektorý chýba alebo vie len čítať, pripoj aplikáciu sám, napríklad cez službu Composio. Kde musím niečo urobiť ja, napríklad sa prihlásiť, povedz mi presne, kam kliknúť, a počkaj. Ak tu nejde zapisovať do aplikácií alebo ukladať súbory do zložky, povedz mi to hneď a poraď, kam prepnúť.

Potom urob celú prácu. Prejdi zdroj, vytiahni z neho údaje a zapíš ich do cieľovej aplikácie. Ak tabuľka alebo zoznam ešte neexistuje, založ ho a stĺpce navrhni podľa zadania. Údaj, ktorý v zdroji chýba, nedomýšľaj: pole nechaj prázdne a záznam označ. Ak po zápise nasledujú e-maily alebo správy, ulož ich ako koncepty, odošlem ich sám.

Potom zapíš zadanie na ďalšie použitie do súboru postupy-medzi-aplikaciami.md v zložke, v ktorej pracuješ. Pod nadpis ### s názvom práce napíš, odkiaľ dáta berieš, kam ich zapisuješ, ktoré údaje, čo nasleduje a ako spoznáš záznamy, ktoré už sú hotové. Ak súbor existuje, pripíš prácu na koniec.

Na konci mi napíš, koľko záznamov si preniesol, kde ich nájdem, ktoré si nezvládol a prečo a kde je uložené zadanie. Keď výsledok skontrolujem a poviem ti, čo urobiť inak, oprav to a doplň do zadania.

Zadanie:

## Vo vašom nástroji

### Microsoft Copilot
Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (prepínač Cowork
hore vedľa Chatu), Outlook číta priamo. Excel z OneDrivu alebo SharePointu
priložte tlačidlom +, novú tabuľku Cowork založí sám. Zložku nepotrebujete,
zadanie na ďalšie použitie Cowork uloží ako skill; naplánované úlohy sú na stránke
Automations. CRM a iné aplikácie pridáte cez Browse plugins, ak ich správca
povolil.

### ChatGPT
Režim Code je v ChatGPT Codex v aplikácii ChatGPT pre počítač: zvoľte Codex,
New chat a otvorte zložku (open a folder). Tabuľku z OneDrivu majte v
zložke, ktorú OneDrive synchronizuje do počítača, a Codex do nej zapíše priamo.
Outlook pripojíte v nastavení pod Plugins; ak vo firemnom účte chýba, zapína
ho správca. Naplánované úlohy sú v ľavom paneli pod Scheduled.

### Claude
V aplikácii Claude pre počítač otvorte Cowork alebo Claude Code a vyberte
zložku; oboje je v platených tarifách. Konektory nájdete v ľavom paneli v
Customize, Connectors, tie chýbajúce AI pripojí sama. Naplánované úlohy sú v
Cowork v ľavom paneli pod Scheduled.

### Gemini
Opakovanú prácu medzi aplikáciami Google postaví Workspace Studio
(`studio.workspace.google.com`): zvoľte Describe it with AI a popíšte ju
jednou vetou. Test run vykoná skutočné kroky, Turn on postup zapne a ten potom
beží sám. Bez Studia napíšte v aplikácii Gemini „@Gmail vypíš prihlášky z
tohto týždňa ako tabuľku“ a uložte ju tlačidlom Export to Sheets.
## Čo je workflow cez viac aplikácií

Workflow je anglické slovo pre pracovný postup s viacerými krokmi, v ktorom
je výsledok jedného kroku vstupom ďalšieho. Rovnako ako prihlášky prenesie AI
poptávky z webového formulára do CRM, teda systému, v ktorom vediete
zákazníkov, alebo z 33 e-mailov od klienta sepíše do tabuľky všetkých 27 otázok, na
ktoré ešte nedostal odpoveď.

Konektor, cez ktorý AI do aplikácie vstupuje, v režime Cowork alebo Code
pripojí AI sama, ako ukazuje karta [Pripojte si konektor](card:plugin-connector);
v bežnom chate ho zapnete v nastavení. Podľa toho, čo
konektor vie, AI v aplikácii len číta, alebo do nej aj zapisuje.

Ak pre aplikáciu konektor nemáte alebo vie len čítať, použije AI službu
Composio. Cez ňu sa napojí na viac než tisíc aplikácií, napríklad na Outlook,
Gmail, Excel, Google Tabuľky, Airtable alebo CRM. V režime Cowork alebo Code ju
AI nastaví sama. Vy si založíte účet a ku každej aplikácii potvrdíte prístup
samostatne, takže Composio vidí len aplikácie, ktoré ste potvrdili. Základný účet
je zadarmo a platobnú kartu nevyžaduje. Vo firemnom účte sa pred pripojením
opýtajte IT, či ho môžete použiť.

`postupy-medzi-aplikaciami.md` je obyčajný textový súbor so zadaniami vašich
prác medzi aplikáciami. Každá práca v ňom má vlastný nadpis, takže nabudúce AI
napíšete len jej názov a názov súboru. Koncovka `.md` znamená, že je písaný
v [Markdowne](glossary:markdown), jednoduchom zápise, v ktorom mriežky `###`
na začiatku riadku označujú nadpis.
## Nech sa práca spúšťa sama

Práca, ktorá sa opakuje každý deň alebo týždeň, sa môže spúšťať sama. Vložte
do AI, ktorá vie naplánované úlohy, toto zadanie, len názov práce zmente na
svoj, a požiadajte ju, nech z neho založí naplánovanú úlohu. Kde ich vo svojom
nástroji nájdete, ukazuje blok „Vo vašom nástroji“.

```text
Každý pracovný deň o 8:00 urob prácu „Prihlášky do tabuľky“ podľa súboru postupy-medzi-aplikaciami.md. Spracuj len to, čo pribudlo od posledného spustenia. V zhrnutí mi napíš, koľko záznamov pribudlo a koľko konceptov čaká v schránke. Ak nič nepribudlo, nič nepíš.
```

Úloha číta súbor v zložke v počítači, takže pobehne len, keď je počítač
zapnutý a aplikácia s AI otvorená.
## Príklad

Lucia z personálneho oddelenia strojárskej firmy hľadá asistentku výroby. Od
5. do 9. 10. 2026 jej prišlo 23 prihlášok e-mailom. V pondelok 12. 10. otvorí
AI v režime Cowork v zložke `Nábor asistentky`, vloží prompt a za posledný
riadok napíše:

```text
Z e-mailov s prihláškou na miesto asistentky výroby, ktoré prišli od 5. 10., zapíš do tabuľky Uchádzači v Exceli na SharePointe meno, telefón, prax v rokoch, možný nástup a odkaz na e-mail. Každému uchádzačovi priprav koncept odpovede, že prihlášku máme a ozveme sa do 10 pracovných dní.
```

AI si pripojí Outlook a Excel, Lucia potvrdí prihlásenie do svojho
firemného účtu a AI prejde 23 e-mailov. Potom vráti:

```text
Prenesených 23 prihlášok do tabuľky Uchádzači.
- 21 záznamov je kompletných.
- 2 prihlášky neuvádzajú prax, riadky sú v tabuľke označené žlto.
- 23 konceptov odpovede čaká v Outlooku medzi konceptmi.
Zadanie je uložené v postupy-medzi-aplikaciami.md pod nadpisom Prihlášky do tabuľky.
```

Lucia otvorí tabuľku a u dvoch uchádzačov porovná telefón a prax s ich
e-mailom; sedí. Potom Lucia AI napíše: „Pridaj stĺpec, odkiaľ sa o mieste
zistili, a pri neúplných prihláškach sa v odpovedi opýtaj na prax.“ AI tabuľku
a dva koncepty doplní a zadanie v súbore upraví takto:

```text
### Prihlášky do tabuľky
- Odkiaľ: e-maily s prihláškou na otvorené miesto.
- Kam: tabuľka Uchádzači v Exceli na SharePointe, jeden riadok na uchádzača.
- Údaje: meno, telefón, prax v rokoch, možný nástup, odkiaľ sa o mieste dozvedel, odkaz na e-mail.
- Čo nasleduje: koncept odpovede, že prihlášku máme a ozveme sa do 10 pracovných dní. Ak chýba prax, v odpovedi sa na ňu opýtať.
- Hotové záznamy: e-mail, ktorý už má riadok v tabuľke, znova nespracovávať.
```

Koncepty Lucia prejde v Outlooku a odošle. Keď vo štvrtok prídu ďalšie štyri
prihlášky, napíše len „Urob prihlášky do tabuľky podľa
`postupy-medzi-aplikaciami.md`“ a AI spracuje len tie štyri nové.
## Ak sa zaseknete

- **AI sa do aplikácie nedostane:** opýtajte sa jej, či pre aplikáciu
  existuje konektor. Ak áno a vo firemnom účte ho nejde zapnúť, AI napíše
  krátku žiadosť správcovi. Ak neexistuje, nechajte AI pripojiť aplikáciu cez
  Composio; vo firemnom účte sa predtým opýtajte IT.
- **AI aplikáciu číta, ale nezapíše do nej:** konektor vie len čítať. V režime
  Cowork alebo Code napíšte AI, nech aplikáciu pripojí cez Composio. Z bežného
  chatu prepnite do [Cowork alebo Code](card:when-chat-is-not-enough).
- **Údaje v cieli nesedia so zdrojom:** ukážte AI jeden chybný záznam a povedzte,
  kde správny údaj nájde. Nech opraví všetky podobné záznamy a pravidlo doplní
  do zadania.
- **Záznamy sú v tabuľke dvakrát:** povedzte AI, nech duplicity vymaže a do
  zadania doplní, podľa čoho spozná hotové záznamy, napríklad podľa odkazu na
  e-mail.
## Čo bude hotové

Dáta, ktoré by ste inak prepísali ručne, sú v cieľovej aplikácii, dva-tri
záznamy ste porovnali so zdrojom a koncepty ste prešli a odoslali. Zadanie s
vašimi úpravami leží v `postupy-medzi-aplikaciami.md`, takže nabudúce prácu
spustíte jednou vetou.
## Čo ďalej

Ak má po prenose dát nasledovať ďalšia AI práca, napríklad z tabuľky uchádzačov
podklad na pohovory, pridajte ju do zadania a celý postup si
[uložte ako skill](card:create-skill-from-proven-process). Ak chcete, aby
naplánovaná práca sledovala vlastné chyby a hlásila ich, nastavte ju ako
[naplánovanú úlohu](card:recurring-ai-task).
## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## AI workflow

**Čo to je:** Opakovateľný prechod viacerými nadväzujúcimi krokmi, kde výstup jedného kroku slúži ako vstup pre ďalší. Jednotlivé kroky môžu vykonávať ľudia, AI alebo rôzne nástroje.

**Čo to nie je:** Nie je to automaticky automatizácia ani agent. Kroky môžu byť riadené človekom a odovzdávanie môže prebiehať medzi rôznymi prostrediami.

**Prečo to študent potrebuje:** Pomáha spojiť samostatne zvládnuté AI úlohy do postupu, ktorý možno otestovať, zlepšovať a neskôr prípadne automatizovať.

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
