# Založte si AGENTS.md: pravidlá pre AI v jednom súbore

AI zapíše pokyny, ktoré jej stále opakujete, do jedného súboru a bude sa nimi riadiť pri každej práci.

## Založte si AGENTS.md: pravidlá pre AI v jednom súbore

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** so zložkou, v ktorej s AI pracujete.
## Na čo sa hodí

V pondelok píšete AI k novej ponuke to isté čo minulý týždeň: zákazníkovi vykáte a ceny uvádzate s DPH. V stredu otvoríte kvôli druhej ponuke nový chat a pokyny píšete znova. Kolegyňa, ktorá ponuky robí za vás počas dovolenky, má v AI iné pravidlá, a zákazník tak dostane ceny raz s DPH a druhýkrát bez.

`AGENTS.md` je súbor s pravidlami vo vašej pracovnej zložke, ktorý si AI prečíta na začiatku každej práce, takže pokyny poviete raz a platia aj pre kolegyňu, ktorá pracuje v rovnakej zložke.
## Čo si pripraviť

- zložku, v ktorej s AI pracujete, napríklad zložku rozpracovaného projektu,
- pokyny, ktoré AI stále opakujete, alebo vlastné inštrukcie zo svojho AI,
- AI v [režime](glossary:workmode) Cowork alebo Code, ktorá pracuje so súbormi v počítači.
## Ako na to

1. Otvorte Cowork alebo Code v zložke z prípravy, povoľte úpravy súborov a vložte prompt. AI sa opýta na pokyny, zapíše ich do `AGENTS.md` a zariadi, aby ho čítala pri každej práci.
2. Prečítajte si pravidlá, ktoré vám AI ukáže. Čo nesedí alebo chýba, povedzte AI a ona súbor opraví.
3. V novom chate, najlepšie v druhom nástroji, zadajte úlohu a napíšte: „Vypíš súbory s pravidlami, ktoré sa načítali na začiatku práce, a pravidlá, podľa ktorých výsledok vznikol.“
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code, otvorené vo vašej zložke:

Založ v tejto zložke súbor AGENTS.md s pravidlami pre AI, aby som ti tie isté pokyny nemusel opakovať v každom chate a v každom AI nástroji.

Opýtaj sa ma na pokyny, ktoré AI opakujem najčastejšie. Pýtaj sa po okruhoch: jazyk a oslovenie, ako písať, čo nikdy nerobiť a čo overiť pred odovzdaním. Keď ti vložím vlastné inštrukcie z iného AI nástroja alebo keď v tejto zložke nájdeš súbor s pravidlami pre AI, prevezmi z nich pokyny, ktoré platia pre každú prácu.

Každé pravidlo napíš ako jeden riadok s konkrétnym pokynom, napríklad „Ceny píš s DPH a menou“. Všeobecnú radu typu „buď presný“ prepíš na konkrétny pokyn. Keď nie je jasné, prečo pravidlo platí, pripíš dôvod. Pravidlá zoradi pod nadpisy podľa okruhov a celý súbor drž krátky, aby sa zmestil na jednu obrazovku.

Na koniec súboru pridaj pravidlo: „Keď ťa opravím a oprava má platiť aj nabudúce, zapíš ju do AGENTS.md ako nové pravidlo a povedz mi, čo si pridal.“

Potom zisti, či tento nástroj číta AGENTS.md sám na začiatku každej práce v tejto zložke. Keď nie, nastav to tak, aby sa pri každej práci načítal automaticky; v Cowork to zapíš do inštrukcií zložky. Keď si pravidlá prevzal z iného súboru s pravidlami pre AI, nechaj v ňom miesto nich len jeden riadok, ktorý načíta AGENTS.md, aby pravidlá neboli na dvoch miestach, a povedz mi, čo si v ňom zmenil. Keď to sám nastaviť nemôžeš, napíš mi, kde v nastavení to urobím a čo tam vložím.

Nakoniec mi ukáž hotový AGENTS.md a napíš, či ho tento nástroj číta sám, alebo čo si nastavil.

## Vo vašom nástroji

### Microsoft Copilot
Copilot Chat súbor nečíta: na koniec promptu pripíšte „Zložku nemáš, pravidlá mi napíš ako text pre Custom instructions.“ a text vložte do Settings and more, Chat settings, Personalization. Krok 3 urobte v novom chate otázkou, podľa ktorých pokynov výsledok vznikol. V Cowork vedľa prepínača Chat patria pravidlá do Customize, Preferences.

### ChatGPT
V aplikácii ChatGPT pre počítač prepnite na Codex a zvoľte otvorenie zložky (open a folder); Codex číta `AGENTS.md` sám. V bežnom chate vám AI pravidlá napíše ako text pre Custom instructions (Settings, Personalization) alebo pre inštrukcie projektu (Project settings). Krok 3 potom urobte v novom chate a opýtajte sa, podľa ktorých pokynov výsledok vznikol.

### Claude
V Claude Code číta AI `AGENTS.md` sama. V Cowork, ktorý otvoríte v aplikácii Claude pre počítač a vyberiete v ňom zložku, si AI do inštrukcií zložky (Folder instructions) zapíše, aby súbor čítala. V bežnom chate Claude patria pravidlá do inštrukcií projektu (Set project instructions).

### Gemini
Gemini `AGENTS.md` nečíta a firemné účty nemajú pamäť. Vložte prompt do Gemini a pravidlá uložte cez Share & export, Export to Docs. V Gems, New Gem potom napíšte do Instructions „Riadi sa pravidlami z priloženého dokumentu“ a dokument pridajte do Knowledge. Krok 3 urobte v novom chate s týmto Gemom, ktorý kolegom nasdielate cez Share.
## Čo je AGENTS.md

`AGENTS.md` je obyčajný textový súbor s pravidlami pre AI: aký jazyk používať, ako písať, čo nikdy nerobiť a čo overiť pred odovzdaním. Volá sa podľa [agentov](glossary:agent), teda AI, ktorá sama pracuje so súbormi a robí kroky za vás. Prípona `.md` znamená zápis v [Markdowne](glossary:markdown), v ktorom mriežky `###` na začiatku riadku označujú nadpis.

Rad nástrojov v režime Code si súbor prečíta sám na začiatku každej práce v zložke, v ktorej leží. Kde to nástroj sám nevie, AI pravidlo uloží do jeho nastavení, alebo vám napíše, kam ho vložiť. A keď AI opravíte, nové pravidlo si do súboru zapíše.

Do súboru patria pokyny, ktoré platia pre každú prácu v tej zložke; podklady k jednému úlohe a jednorazové prosby nechajte v chate. Keď vám AI v kroku 3 vynechá pravidlo, ktoré sa k úlohe hodilo, napíšte jej, nech ho v súbore prepíše jasnejšie.

Bežný chat si `AGENTS.md` sám neprečíta. Keď zostávate len pri chate, uložte si pokyny do [vlastných inštrukcií](card:custom-instructions); ako prepnúť do Cowork alebo Code ukazuje karta [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
## Nech sa pravidlá dopĺňajú samy

Pravidlo na konci `AGENTS.md` zabezpečí, že keď AI opravíte a oprava má platiť aj nabudúce, AI ju do súboru zapíše. Za pár týždňov sa však pravidlá začnú opakovať alebo si protirečiť a dlhší súbor AI dodržiava horšie. Keď chcete, aby zostal krátky, nechajte ho AI raz za mesiac upratať naplánovanou úlohou. Vložte AI v režime Cowork alebo Code toto zadanie a požiadajte ju, nech z neho naplánovanú úlohu založí:

```text
Každý prvý piatok v mesiaci o 16:00 prejdí AGENTS.md v tejto zložke. Pravidlá, ktoré hovoria to isté, zlúč do jedného a zorad ich pod správne nadpisy. Na konci mi napíš, čo si zmenil, a vypíš dvojice pravidiel, ktoré si protirečia, aby som rozhodol, ktoré platia.
```

Keď úloha pracuje so súbormi vo vašom počítači, pobehne len keď je počítač zapnutý a aplikácia otvorená.
## Príklad

Lucia vedie zákaznícku podporu v e-shope s kuchynskými spotrebičmi a odpovede na reklamácie píše s AI v dvoch nástrojoch, ktoré pracujú so zložkou v počítači. V pondelok 12. 10. otvorí v prvom z nich zložku `Reklamácie` a vloží prompt. Odpovie na otázky, vloží do neho vlastné inštrukcie, ktoré má uložené v bežnom chate, a AI zapíše:

```text
### Jazyk a oslovenie
- Píš česky a zákazníkom vykajte.
- Podepisuj sa „Lucia Kráľová, zákaznícka podpora“.

### Ako písať
- V prvej vete napíš, čo pre zákazníka urobíme.
- Odpoveď má najviac šesť viet a žiadne úvodné frázy typu „Dúfam, že sa máte dobre“.

### Čo nikdy nerobiť
- Nesľubuj vrátenie peňazí. O tom rozhoduje manažérka reklamácií.

### Čo overiť pred odovzdaním
- Číslo objednávky a termíny porovnaj s e-mailom zákazníka.

### Ako pravidlá dopĺňať
- Keď ťa opravím a oprava má platiť aj nabudúce, zapíš ju do AGENTS.md ako nové pravidlo a povedz mi, čo si pridal.
```

AI súbor uloží a zariadi, aby ho nástroj čítal na začiatku každej práce. V utorok Lucia otvorí rovnakú zložku v druhom nástroji a napíše len: „Odpovedz pani Dvořákovej na reklamáciu mixéra z jej e-mailu v zložke.“ Potom pripíše: „Vypíš súbory s pravidlami, ktoré sa načítali na začiatku práce, a pravidlá, podľa ktorých odpoveď vznikla.“ AI uvedie `AGENTS.md`, odpoveď napíše s vykaním a podpisom a vymenuje štyri pravidlá. Pravidlo o prvej vete vynechala a odpoveď začína ospravedlnením. Lucia napíše, nech ho AI prepíše jasnejšie, a v `AGENTS.md` teraz stojí: „Odpoveď začni vetou, čo pre zákazníka urobíme a do kedy, napríklad ‚Mixér vám vymeníme do piatku 16. 10.‘ Ospravedlnenie napíš až potom.“
## Keď sa zaseknete

- **AI tvrdí, že súbor uložila, ale v zložke nie je:** pravdepodobne pracujete v bežnom chate, ktorý súbory v počítači meniť nevie. Prepnite do [Cowork alebo Code](card:when-chat-is-not-enough) a otvorte v ňom zložku.
- **`AGENTS.md` medzi načítanými súbormi chýba:** otvorte chat priamo v zložke, v ktorej `AGENTS.md` leží, nie v jej podsložke. Keď chýba aj potom, napíšte: „Zariadi, aby sa `AGENTS.md` v tomto nástroji načítal na začiatku každej práce.“
- **AI pravidlo dodržiava len niekedy:** pravidlo je pravdepodobne všeobecné, napríklad „píš stručne“. Požiadajte AI, nech ho prepíše na konkrétny pokyn, napríklad „najviac šesť viet“.
- **Pravidlá potrebujete aj v inej zložke:** požiadajte AI, nech ich v tomto nástroji uloží aj do spoločných inštrukcií, ktoré platia vo všetkých zložkách.
## Čo bude hotové

Máte v zložke súbor `AGENTS.md` s pokynmi, ktoré ste AI predtým opakovali, a nástroje, v ktorých ste to vyskúšali, si ho čítajú na začiatku každej práce. V novom chate ste si overili, že sa súbor načítal a ktoré pravidlá AI použila, a nejasné pravidlá AI prepísali. Keď ju nabudúce opravíte, nové pravidlo si do súboru zapíše.
## Čo ďalej

Keď z pravidla vyrastie celý postup o niekoľkých krokoch, napríklad ako pripraviť mesačnú správu, nechajte z neho AI urobiť [návod, ktorý použije znova](card:create-skill-from-proven-process). Keď majú rovnaké podklady a pravidlá používať celý tím, nechajte AI napísať [README projektu](card:project-start-here).
## Agent

**Čo to je:** AI systém, ktorý dokáže v rámci zadaného cieľa plánovať viacero krokov, používať dostupné nástroje, pracovať so stavom a vykonávať povolené akcie. Rozsah schopností a miera samostatnosti závisia od konkrétneho nástroja a oprávnení.

**Čo to nie je:** Nie je to len uložený prompt ani asistent premenovaný na pokročilejšiu funkciu.

**Prečo to študent potrebuje:** Pomáha rozpoznať úlohy, ktoré vyžadujú nástroje, oprávnenia, kontrolné body a jasnú zodpovednosť za akcie.

## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

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
