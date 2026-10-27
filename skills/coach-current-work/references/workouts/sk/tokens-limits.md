# Šetrite tokeny: nech vám limit AI vydrží celý týždeň

Prácu z dlhého chatu presuniete do nového, AI prestane zabúdať a limit vám vydrží dlhšie.

## Šetrite tokeny: nech vám limit AI vydrží celý týždeň

**Obtiažnosť: ľahká.**\
**Čas: približne 15 minút** s jedným dlhým chatom.
## Na čo sa hodí

Už tri týždne pripravujete s AI veľtrh v jednom chate. Posledné dni v ňom AI
odpovedá pomalšie, mýli si staré verzie cenníka s novými a v stredu popoludní
vám oznámi, že ste vyčerpali týždenný limit. Ponuku, ktorú máte odovzdať v
piatok, tak dokončujete bez AI.

AI s každou novou správou číta celý chat znova, takže najviac ušetríte, keď
dlhý chat vymeníte za nový, ktorý nadviaže podľa krátkeho zhrnutia.
## Čo si pripraviť

- chat, v ktorom na jednom projekte pracujete najdlhšie,
- AI, v ktorej ten chat vediete.
## Ako na to

1. Vložte prompt do chatu, v ktorom pracujete najdlhšie. V Cowork alebo Code
   AI uloží zhrnutie do `handoff.md` a pravidlá do `AGENTS.md`, v bežnom
   chate ich dá do odpovede a pamäte.
2. Prečítajte zhrnutie, opravte, čo nesedí, a otvorte nový chat: v Cowork alebo
   Code napíšte „Pokračuj podľa `handoff.md`“, v bežnom chate vložte zhrnutie
   a súbory z neho.
3. Keď váš nástroj limit ukazuje, pozrite sa, koľko vám ho zostáva a kedy sa
   obnoví. Kde to nájdete, ukazuje blok „Vo vašom nástroji“.

Do zhrnutia patrí len to, čo nový chat potrebuje k ďalšej práci.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Tento chat je dlhý a s každou novou správou ho čítaš celý znova, takže mi uberá limit a odpovedáš v ňom horšie. Priprav presun práce do nového chatu a nastav pravidlá, aby sa to neopakovalo.

Najprv napíš zhrnutie, podľa ktorého nový chat nadviaže, bez čítania tohto chatu. Rozdeľ ho pod tieto nadpisy a zapíš ich s mriežkami ###:
- Cieľ,
- Hotovo,
- Platí: rozhodnutia a pravidlá, na ktorých sme sa dohodli,
- Zostáva: ďalšie kroky v poradí,
- Súbory pre ďalšiu prácu: len tie, ktoré ďalšie kroky naozaj potrebujú.
Vejdi sa na jednu stránku. Priebeh chatu neprepíš a slepé uličky vynechaj. Keď si nie si istý, či niečo stále platí, spýtaj sa ma.

Potom si zapíš tieto pravidlá pre ďalšiu prácu:
- Keď sa chat natiahne alebo dokončíme úlohu a začíname inú, napíš nové zhrnutie v rovnakom tvare a navrhni mi pokračovať v novom chate.
- Na začiatku práce vychádzaj zo zhrnutia a pracuj len so súbormi, ktoré úloha potrebuje. Celú zložku neprechádzaj a nežiadaj odo mňa prílohy, ktoré úloha nepotrebuje.
- Hromadnú prácu, kde sa rovnaké rozhodnutie opakuje u desiatok alebo stoviek položiek, rob lacnejším modelom: keď to vieš, pusť na ňu podagentov s menším modelom, inak mi povedz, na ktorý model mám prepnúť. Do hlavného chatu vráť len výsledok.

Kam čo uložiť:
- Keď pracuješ v zložke projektu, ulož zhrnutie do súboru handoff.md, a keď už existuje, prepíš ho a drž sa jeho tvaru. Pravidlá pridaj do súboru AGENTS.md, a keď neexistuje, založ ho. Zabezpeč, aby si si AGENTS.md v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky.
- Keď k zložke projektu prístup nemáš, nevytváraj súbory na stiahnutie. Zhrnutie mi napíš do odpovede a pravidlá si ulož do pamäte; keď pamäť nemáš zapnutú, napíš mi pravidlá pod zhrnutie, aby som ich vložil do nového chatu.

Nakoniec mi jednou vetou napíš, čo v tomto chate zabralo najviac miesta, aby som sa tomu nabudúce vyhol.

## Vo vašom nástroji

### Microsoft Copilot
Microsoft limity pre Copilot s licenciou nezverejňuje a prehľad spotreby v ňom
nenájdete; licencia dáva prednostný prístup. Presun do nového chatu však
pomôže aj tu, pretože AI potom číta len zhrnutie a prestane si pliesť staré
verzie s novými. Pravidlá si Copilot uloží do pamäte (Saved memories v
Settings and more, Chat settings, Personalization).

### ChatGPT
Vo firemných tarifách je bežný model takmer bez limitu, limit však majú
modely, ktoré dlhšie premýšľajú, a Codex. Keď ho vyčerpáte, ChatGPT pokračuje
s iným modelom a ukáže, kedy sa limit obnoví. Spotrebu Codexu ukazuje
Settings, Usage a v Codexe príkaz `/status` (aj voľné miesto v chate); bežný
chat tam prehľad nemá.
Pravidlá si AI v bežnom chate uloží do pamäte (Settings, Personalization,
Memory).

### Claude
Claude má limit na každých päť hodín a k tomu týždenný limit; do oboch sa
počítajú bežný chat, Cowork aj Claude Code. Koľko zostáva, uvidíte v Settings,
Usage a v Claude Code príkazom `/usage`; príkaz `/context` ukáže, čo zaberá
miesto v chate. Na hromadnú prácu stačí menší model Haiku alebo Sonnet namiesto
najsilejšieho modelu Opus.

### Gemini
Koľko limitu vám zostáva, nájdete v Gemini v Settings (vľavo dole), Usage
Limits. Silnejšie modely majú limit správ na niekoľko hodín alebo na deň, a
keď dôjde, môžete v tom istom chate pokračovať s rýchlym modelom Fast.
Firemné účty nemajú pamäť, a tak pravidlá uložte do Gemu (Gems, New Gem,
Instructions) a nový chat z kroku 2 otvorte v ňom.
## Čo sú tokeny a limity

AI číta a píše text po kúskach, ktorým sa hovorí tokeny; token je približne časť
slova. Z tokenov sa počíta limit, ktorý máte v predplatnom alebo ktorý vám
nastavila firma. Ako ho počíta váš nástroj, nájdete v bloku „Vo vašom
nástroji“.

Dlhý chat je drahý, pretože AI s každou novou správou číta celý chat od
začiatku, vrátane všetkých príloh. Preto aj krátka otázka v chate, ktorý beží od
rána, uberie limit za celý chat. Každý chat má navyše kontextové okno, teda
koľko textu AI udrží naraz. Keď sa zaplní, AI zo staršej časti chatu
udrží len skrátené zhrnutie, a preto zabúda, na čom ste sa dohodli.

`handoff.md` je obyčajný textový súbor v zložke projektu, v ktorom je
vždy len aktuálny stav práce. Rovnaký súbor slúži aj na
[predanie práce](card:handoff) kolegovi. Mriežky `###` v ňom označujú nadpisy;
takému zápisu sa hovorí [Markdown](glossary:markdown). `AGENTS.md` je súbor
s pravidlami pre AI v rovnakej zložke. Mnohé nástroje v režime Code si ho prečítajú
sami na začiatku každej práce; kde to nástroj sám nevie, AI pravidlo uloží do jeho nastavení,
alebo vám napíše, kam ho vložiť.
[Podagent](glossary:subagent) je pomocná AI, ktorú hlavná AI pustí na
čiastkovú úlohu. Pracuje vo vlastnom chate a vráti len výsledok, takže hlavný
chat zostane krátky.

Keď pamäť zapnutú nemáte, napíše vám AI pravidlá pod zhrnutie a vy ich
vložíte do nového chatu. Aby AI ukladala zhrnutia k projektu sama,
potrebujete AI v [režime](glossary:workmode) Cowork alebo Code; ako prepnúť,
ukazuje karta [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
## Nech AI šetrí sama

Pravidlá v `AGENTS.md` platia v každom novom chate v zložke projektu. AI vám
sama navrhne nový chat, keď sa ten súčasný natiahne, číta len súbory, ktoré
úloha potrebuje, a hromadnú prácu posiela na lacnejší model. Na triedenie alebo
prepísanie stoviek položiek menší model stačí a z limitu uberie oveľa menej.

Keď pracujete na viacerých projektoch, nechajte pravidlá platiť všade. Nástroje v
režime Code majú okrem pravidiel projektu aj pravidlá, ktoré platia pre všetky
vaše projekty. Stačí v ktoromkoľvek projekte zadať:

```text
Pridaj pravidlá o šetrení tokenov z AGENTS.md v tejto zložke aj do svojich pravidiel, ktoré platia pre všetky moje projekty.
```

Ako ušetriť aj na výpisoch príkazov a dĺžke odpovedí, ukazuje blok „Ako šetriť
v režime Code“.
## Ako šetriť v režime Code

V [režime Code](glossary:workmode) AI ušetrí najviac, keď veľké vyhľadávania pustí
mimo hlavný chat a skráti texty, ktoré počas práce číta aj píše.

Veľké vyhľadávanie, napríklad zmluvné pokuty v 300 zmluvách, AI pošle
[podagentovi](glossary:subagent), ktorý do hlavného chatu vráti len výsledok.
Podagent limit tiež čerpá, a preto ho AI púšťa len na vyhľadávanie, ktorého výsledky
by inak zaplnili hlavný chat.

Keď sa chat napriek tomu zaplní, AI jeho staršiu časť sama nahradí krátkym zhrnutím
a pracuje ďalej. Aj to uberie z limitu, pretože AI pri tom číta celý chat, a zo
starších správ zostanú len hlavné body. Po dokončenej úlohe je preto
lacnejšie začať nový chat podľa `handoff.md`. Čo v chate zaberá miesto, ukáže
príkaz, ktorý napíšete do poľa pre správu; aký to je, nájdete v bloku „Vo
vašom nástroji“.

Ďalšie dve úspory potrebujú inštaláciu. AI v režime Code počas práce spúšťa
príkazy, napríklad keď prevádza tabuľku alebo prechádza zmeny v súboroch, a číta
všetko, čo vypíšu. Nástroj RTK, ktorý je zadarmo, výpisy bežných príkazov podľa
autorov skráti o 60 až 90 % skôr, než ich AI prečíta. Plugin Caveman, teda doplnok pre
AI, skráti jej odpovede v chate na pár slov, ako keby hovoril jaskynný muž.
Keď vám krátke odpovede nevyhovujú, napíšte „stop caveman“ a do konca chatu
bude AI odpovedať ako predtým; natrvalo ho AI vypne, keď ju o to požiadate.

AI podľa promptu najprv zapíše pravidlá a nástroje nainštaluje, až to
potvrdíte. Keď na firemnom počítači inštalovať nesmiete alebo to neviete, AI vám
pripraví správu pre správcu IT.

Vložte tento prompt do AI v režime Code, otvorenej vo vašej zložke:

```text
Nastav si šetrenie tokenov pre prácu v režime Code.

1. Do AGENTS.md pridaj tieto pravidlá (keď neexistuje, založ ho) a zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce:
- Keď úloha potrebuje hľadať v celej zložke alebo čítať dlhé výpisy, pusť na to podagenta s menším modelom, keď to vieš, a do hlavného chatu vráť len výsledok.
- Keď používaš RTK, súbory porovnávaj príkazom, ktorý RTK nezkracuje (na Macu a v Linuxe /usr/bin/diff, vo Windows fc.exe), pretože skrátené porovnanie môže prehliadnuť rozdiel.
- Texty, ktoré pre mňa píšeš do súborov, píš celé, aj keď mi v chate odpovedáš stručne.

2. Potom mi dvoma vetami povedz, čo nainštaluješ, odkiaľ a čo sa tým zmení vo všetkých mojich projektoch, a počkaj, kým potvrdím, že to vo firme smiem a chcem nainštalovať:
- RTK podľa README na github.com/rtk-ai/rtk, nie cez cargo install rtk. V Claude Code ho zapoj príkazom rtk init -g --auto-patch, v Codexe príkazom rtk init -g --codex. Over, že rtk gain ukáže prehľad úspor; keď príkaz nepoznáš, máš iný balík so menom rtk, tak ho odinštaluj a nainštaluj RTK znova.
- Caveman podľa návodu pre tento nástroj na github.com/JuliusBrussee/caveman, aby mi v chate odpovedal stručne a zapol sa sám na začiatku každej práce.

Keď inštalácii niečo bráni, napríklad chýbajú oprávnenia, potrebuješ heslo správcu počítača alebo neviem, či inštalovať smiem, nechaj ju byť a napíš mi krátku správu pre správcu IT. Keď ju musím dokončiť ja, napíš mi presne, čo urobiť. Nakoniec mi povedz, čo si nastavil, či mám otvoriť nový chat alebo nástroj reštartovať a ako to celé vrátim, keby niečo prestalo fungovať.
```
## Príklad

Lucia koordinuje účasť svojej firmy na októbrovom veľtrhu. Od 21. 9. ho
pripravuje s AI v režime Code v jednom chate v zložke projektu. V stredu
7. 10. vidí, že má vyčerpaných 85 % týždenného limitu, a AI jej do pozvánky
napíše ceny v korunách, hoci pred dvoma týždňami rozhodla, že budú v
eurách. Lucia vloží prompt a AI zapíše do `handoff.md`:

```text
### Cieľ
Pripraviť stánok na veľtrhu 20. až 23. 10. a pozvať naň zákazníkov.

### Hotovo
- Stánok objednaný, grafika schválená 2. 10.
- Text pozvánky hotový, ceny je potrebné prepísať na eurá.

### Platí
- Ceny uvádzame len v eurách.
- Pozvánku dostanú len zákazníci, ktorí nakúpili za posledné dva roky.

### Zostáva
1. Roztriediť 1 400 kontaktov z minuloročného veľtrhu.
2. Opraviť ceny v pozvánke a rozoslať ju do 14. 10.

### Súbory pre ďalšiu prácu
- kontakty-veletrh-2025.xlsx
- cennik-2026.pdf
```

AI ešte dodá, že chat najviac zaberal tri celé verzie cenníka, ktoré doň
Lucia postupne nahrala. Lucia otvorí nový chat, napíše „Pokračuj podľa
`handoff.md`“ a AI rovno prepíše ceny v pozvánke na eurá. Na triedenie
kontaktov AI podľa pravidla pustí podagentov s menším modelom a do chatu vráti
len výsledok: 230 zákazníkov pozvať osobne, 760 poslať pozvánku e-mailom a
410 vyradiť, pretože za posledné dva roky nenakúpili alebo sú v zozname
dvakrát.
## Keď sa zaseknete

- **Limit vám už došiel:** počkajte, kým sa obnoví; presný čas uvidíte vo
  správe o limite. Workout potom urobte ako prvú vec, ešte predtým, než budete
  pokračovať v starom chate.
- **AI tvrdí, že zhrnutie uložila, ale `handoff.md` v zložke nie je:**
  pravdepodobne pracujete v bežnom chate, ktorý súbory ukladať nevie. Zhrnutie
  máte v odpovedi; keď ho chcete mať v zložke projektu, prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough).
- **Nový chat nepozná niečo, na čom ste sa dohodli:** napíšte mu to a povedzte,
  nech to doplní do zhrnutia pod nadpis Platí.
- **Lacnejší model robí pri hromadnej práci chyby:** prejdite náhodne desať
  položiek. Upresnite pravidlo, podľa ktorého AI triedi, a keď to nepomôže,
  pusťte silnejší model len na sporné položky.
## Čo bude hotové

Rozpracovanú prácu máte v novom, krátkom chate, ktorý nadviazal podľa
zhrnutia, a starý dlhý chat už nepotrebujete. V Cowork alebo Code leží
zhrnutie v `handoff.md` a v `AGENTS.md` sú pravidlá, podľa ktorých AI
šetří tokeny sama; v bežnom chate má AI pravidlá v pamäti, alebo ich dostala
v novom chate spolu so zhrnutím.
## Čo ďalej

Kedy sa naopak oplatí silnejší model, zistíte pri
[voľbe modelu pre svoj úloh](card:modely). Keď sa k projektu po dlhšej dobe
vraciate vy alebo kolega, dajte mu trvalú
[úvodnú stránku projektu](card:project-start-here); v `handoff.md` potom
ostane len rozrobená úloha.
## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Podagent

**Čo to je:** Samostatný agent, ktorého koordinujúci agent vytvorí na konkrétnu čiastkovú úlohu. Dostane vlastné zadanie a kontext, pracuje oddelene a výsledok vráti koordinátorovi.

**Čo to nie je:** Nie je to len odbočka jednej konverzácie. Fork vytvára novú vetvu pre človeka; podagenta môže koordinátor sám spustiť, riadiť a zahrnúť do spoločného výsledku.

**Prečo to študent potrebuje:** Pomáha rozlíšiť ručnú paralelnú prácu vo viacerých chatoch od agentnej zostavy, v ktorej delegovanie a sledovanie čiastkových úloh preberá koordinátor.

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
