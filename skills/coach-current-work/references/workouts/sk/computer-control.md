# Použite Computer control: AI za vás ovláda programy v počítači

Program v počítači, ktorý nemá prepojenie s AI, ovládne AI sama a údaje z neho prepíše za vás.

## Použite Computer control: AI za vás ovláda programy v počítači

**Náročnosť: stredná.**\
**Čas: približne 20 minút** s jedným programom v počítači.
## Na čo sa hodí

Na konci mesiaca prepisujete faktúry za svoj projekt z fakturačného programu do
prehľadu nákladov v Exceli. Program máte len vo firemnom počítači, nemá
prepojenie s AI ani webovú verziu a prepis trvá štyridsať minút.

Computer control znamená, že AI vidí vašu obrazovku a ovláda programy myšou a
klávesnicou podobne ako vy, takže si poradí aj s takýmto programom.
## Čo si pripraviť

- jednu úlohu, ktorú pravidelne robíte ručne v programe bez webovej verzie,
- odhad, koľko minút vám úloha ručne trvá,
- priečinok v počítači, kam ukladáte prácu k úlohe; AI do neho uloží výsledok a
  postup,
- AI, ktorá ovláda počítač; či to vie tá vaša, ukazuje blok „Vo vašom
  nástroji“.
## Ako na to

1. Otvorte AI v režime Cowork alebo Code v priečinku z prípravy a vložte prompt.
   Do posledných dvoch riadkov doplňte úlohu (program, čo v ňom urobiť, kam
   výsledok) a koľko minút vám trvá.
2. Keď AI pre program nenájde konektor, požiada o prístup k nemu a na Macu aj o
   nahrávanie obrazovky; povoľte to. Keď si vo Windows vezme myš, nepracujte,
   kým neskončí.
3. V programe skontrolujte jednu alebo dve položky z výsledku a napíšte AI,
   koľko minút ste pri úlohe strávili. AI zapíše postup a porovnanie do
   `ulohy-v-aplikacich.md`.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
 otvorené vo vašom priečinku, a na posledné dva riadky doplňte svoju úlohu a čas:

Urob za mňa úlohu v programe v mojom počítači, ktorú pravidelne robím ručne. Úloha a čas, ktorý mi ručne trvá, sú na posledných dvoch riadkoch.

Najprv zisti, či pre program máš konektor. Ak áno, urob úlohu cez neho. Ak nie, ovládaj program cez obrazovku myšou a klávesnicou. V programe rob len to, čo žiada úloha; keď ide o prepis údajov, len čítaj a exportuj. Ak nevieš, ktorú možnosť v programe zvoliť, opýtaj sa ma. Poznač si, kedy si začal a kedy skončil.

Výsledok ulož tam, kam hovorí úloha, napíš mi, kde v programe ho môžem overiť, a opýtaj sa ma, koľko minút som pri úlohe strávil ja.

Potom zapíš postup na ďalšie použitie do súboru ulohy-v-aplikacich.md v priečinku, v ktorom pracuješ; ak súbor existuje, dopíš úlohu na koniec. Pod nadpisom s názvom úlohy napíš: program a či preň existuje konektor, kroky, ktoré fungovali (názvy okien, ponúk a tlačidiel), ako má vyzerať výsledok a porovnanie času: koľko minút si pracoval ty, koľko minút mi úloha trvá ručne a koľko minút som pri nej strávil ja.

Nakoniec pridaj do súboru AGENTS.md v tom istom priečinku pravidlo: „Keď úloha potrebuje program v počítači, použi konektor, ak existuje. Ak neexistuje, ovládaj obrazovku podľa postupu v ulohy-v-aplikacich.md.“ Ak AGENTS.md neexistuje, založ ho. Zabezpeč, aby si si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka.

Úloha:
Ručne mi trvá:

## Vo vašom nástroji

### Microsoft Copilot
Copilot Cowork programy vo vašom počítači neovláda, prompt z karty preto
nevkladajte. Export urobte sami, uložte ho na OneDrive, v Cowork na
`copilot.cloud.microsoft` ho priložte tlačidlom + a napíšte „Z exportu urob
[úloha], postup ulož ako skill.“ Dostanete hotovú tabuľku, klikanie v
programe zostáva na vás. Na pravidelnú úlohu nech Copilot napíše IT žiadosť o
computer use z Copilot Studia.

### ChatGPT
Režim Code je v ChatGPT Codex v aplikácii ChatGPT pre počítač: zvoľte Codex a
otvorte priečinok (open a folder). Ovládanie počítača pridáte v ponuke Plugins,
Computer Use tlačidlom Install plugin; vo firemnom účte ho môže správca
obmedziť. Naplánovaná úloha v Codexe programy v počítači spoľahlivo neovláda,
preto opakovanú úlohu spúšťajte jednou vetou.

### Claude
V aplikácii Claude pre počítač zapnete ovládanie počítača v Settings, General
prepínačom Enable computer use; AI ho potom použije v Cowork aj v Claude Code.
Majú ho tarify Pro a Max, firemný Claude Team a Enterprise zatiaľ nie.
Naplánované úlohy sú v Cowork v ľavom paneli pod Scheduled.

### Gemini
Aplikácia Gemini pre Mac a Windows vidí okno, ktoré jej nasdielite, programy ale
za vás neovláda. Keď program vie export, uložte ho na Disk, v aplikácii Gemini
ho priložte cez Add from Drive a napíšte, čo z neho chcete; tabuľku uložíte
tlačidlom Export to Sheets. Na pravidelnú úlohu nech Gemini napíše IT žiadosť,
vo ktorom programe a ktorú úlohu chcete AI zveriť.
## Čo je Computer control

Computer control je anglický názov pre ovládanie počítača; v nastaveniach AI
nástrojov sa mu zvyčajne hovorí Computer use. AI si robí snímky obrazovky, podľa
nich spozná, kde je ktoré okno a tlačidlo, a kliká a píše do programu podobne
ako vy. Pred prácou v každom programe sa opýta, či do neho smie. Na Macu
zvyčajne pracuje v okne na pozadí, vo Windows si niekedy vezme myš a klávesnicu.
Zastaviť ju môžete kedykoľvek tlačidlom stop v aplikácii.

Konektor, teda priame prepojenie AI s aplikáciou, nájdete v nastavení svojho AI
nástroja. AI cez neho číta a zapisuje dáta priamo, bez klikania, takže je
rýchlejšia a menej chybí. Keď pre aplikáciu konektor nie je, dá sa niekedy
pripojiť cez službu Composio, ktorá prepojí viac než tisíc aplikácií; u
firemných systémov ju musí povoliť IT. A keď má program webovú verziu, je
rýchlejšie nechať AI pracovať v nej cez prehliadač. Ovládanie obrazovky preto
príde na rad až u programov, pre ktoré nič z toho nejde. Pravidlo v
`AGENTS.md` to AI pripomenie pri každej práci.

`ulohy-v-aplikacich.md` je obyčajný textový súbor s vašimi úlohami v
programoch, s krokmi, ktoré fungovali, a s porovnaním času. `AGENTS.md` je
súbor s pravidlami pre AI v tom istom priečinku; AI si ho prečíta na začiatku každej
práce, takže pravidlo o konektore nemusíte opakovať.
## Nech AI úlohu robí sama každý mesiac

Úlohu, ktorá sa pravidelne opakuje, nemusíte ani spúšťať. Vložte do AI,
ktorá vie naplánované úlohy aj ovládanie počítača, toto zadanie, len názov
úlohy a čas zmeňte na svoje, a požiadajte ju, nech z neho naplánovanú úlohu
založí. Kde naplánované úlohy vo svojom nástroji nájdete, ukazuje blok „Vo
vašom nástroji“.

```text
Každý prvý pracovný deň v mesiaci o 8:00 urob úlohu „Faktúry za projekt“ podľa súboru ulohy-v-aplikacich.md za predchádzajúci mesiac. Výsledok ulož do toho istého priečinka s mesiacom v názve súboru a do zhrnutia mi napíš počet faktúr a celkovú sumu.
```

Úloha ovláda program vo vašom počítači, takže pobehne len vtedy, keď je
počítač zapnutý, neuspávajúci a aplikácia s AI otvorená. Keď váš nástroj takú
úlohu naplánovať nevie, spustite ju jednou vetou, napríklad „Urob faktúry za
projekt podľa `ulohy-v-aplikacich.md`“, a zvyšok urobí AI sama.
## Príklad

Martin koordinuje projekt nového e-shopu v distribučnej firme. Na konci
mesiaca prepisuje faktúry dodávateľov za projekt z fakturačného programu do
prehľadu nákladov. Program beží len na firemných počítačoch a konektor ani
webovú verziu nemá. V stredu 30. 9. 2026 otvorí AI v režime Code v priečinku
`E-shop`, vloží prompt a na posledné dva riadky napíše:

```text
Úloha: Vo fakturačnom programe nájdi prijaté faktúry za september so strediskom E-shop a zapíš ich do tabuľky naklady-projektu.xlsx v tomto priečinku: dodávateľ, číslo faktúry, suma bez DPH, splatnosť.
Ručne mi trvá: 40 minút
```

AI zistí, že pre program konektor nie je, a požiada o prístup k nemu. Martin
ho povolí, a keďže má Mac, AI pracuje v okne na pozadí a on sa medzitým
venuje pošte. Raz sa AI opýta, či patrí do prehľadu aj stredisko E-shop marketing, a za 14 minút je v tabuľke 23 faktúr od 9
dodávateľov za 412 600 Kč bez DPH. Martin v programe otvorí dve faktúry,
sumy sedia, a na otázku AI odpovie, že ho úloha stála 3 minúty. Do
`ulohy-v-aplikacich.md` AI zapíše:

```text
### Faktúry za projekt
- Program: fakturačný program v počítači, konektor neexistuje.
- Kroky: ponuka Doklady, Prijaté faktúry, filter Stredisko E-shop (bez E-shop marketing) a mesiac, tlačidlo Export do Excelu.
- Výsledok: tabuľka naklady-projektu.xlsx so stĺpcami dodávateľ, číslo faktúry, suma bez DPH, splatnosť.
- Čas: AI 14 minút, ručne 40 minút, Martin 3 minúty (otázka na stredisko a kontrola).
```

Na konci októbra Martin napíše len „Urob faktúry za projekt podľa
`ulohy-v-aplikacich.md`“ a na stredisko sa AI už nepýta.
## Keď sa zaseknete

- **AI odpovie, že počítač ovládať nevie:** pracujete v bežnom chate alebo
  vo webovej verzii. Ovládanie počítača funguje len v aplikácii pre počítač v
  režime Cowork alebo Code. Viac v karte
  [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
- **Voľbu v nastavení nevidíte:** aktualizujte aplikáciu. Firemný Claude
  Team a Enterprise ovládanie počítača nemajú; ak máte aj ChatGPT, použite
  Codex. Vo firemnom ChatGPT môže správca ovládanie počítača obmedziť.
- **Aplikáciu alebo povolenie musí schváliť IT:** požiadajte AI v bežnom chate,
  nech pre IT napíše krátku žiadosť: ktorú aplikáciu potrebujete, ktoré
  povolenie a na akú úlohu.
- **Na Macu AI program nevidí alebo do neho nekliká:** v Nastaveniach systému,
  Súkromie a zabezpečenie zaškrtnite aplikáciu s AI pri položkách Nahrávanie
  obrazovky a Sprístupnenie.
## Čo bude hotové

Máte hotovú jednu úlohu v programe, ktorý nemá konektor, a výsledok ste
overili priamo v programe. V `ulohy-v-aplikacich.md` je uložený postup s krokmi,
ktoré fungovali, a porovnanie s časom ručnej práce, takže nabudúce stačí napísať,
ktorú úlohu z neho má AI urobiť. Pravidlo v `AGENTS.md` hovorí, kedy AI
použije konektor a kedy ovládanie obrazovky.
## Čo ďalej

Keď má úloha bežať spoľahlivo a sama hlásiť chyby, nastavte ju ako
[naplánovanú úlohu](card:recurring-ai-task).
## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

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
