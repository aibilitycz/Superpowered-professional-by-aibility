# Pripravte idea file: nápad na jednej stránke

AI napíše váš nápad na jednu stránku tak, aby s ním kolega alebo iná AI vedeli pracovať aj bez vás.

## Pripravte idea file: nápad na jednej stránke

**Obtiažnosť: ľahká.**\
**Čas: približne 15 minút** s jedným nápadom.
## Na čo sa hodí

Na utorkovej porade poviete nápad, aby každý nováčik dostal na prvé dva týždne
parťáka z iného oddelenia. Manažérka odpovie: „Napíš to a pošli Lenke z HR, nech
to do piatku rozpracuje.“ Napíšete tri riadky do e-mailu. Lenka sa v piatok vráti
s návrhom, aby sa nováčikom viac venoval ich vlastný manažér, pretože z
e-mailu nepochopila, prečo má byť parťák práve z iného oddelenia.

Idea file je jedna stránka o tom, čo chcete urobiť a prečo; ako to urobiť,
necháva na tom, kto nápad prevezme.
## Čo si pripraviť

- jeden nápad, ktorý chcete odovzdať kolegovi alebo AI; stačí ho mať v hlave,
- AI, ktorú v práci používate,
- druhú AI na kontrolu, alebo v tej prvej nový chat bez pamäte.
## Ako na to

1. Vložte prompt a za riadok „Nápad:“ napíšte alebo
   [nadiktujte](card:voice-as-primary-ai-input) nápad aj s tým, čo vás k nemu
   priviedlo. AI sa spýta najviac na tri veci a idea file uloží.
2. Priložte idea file do druhej AI a napíšte: „Prečítaj si tento súbor a
   povedz mi vlastnými slovami, čo chce autor urobiť a prečo. Na čo by si sa ho
   spýtal, než začneš?“
3. Odpoveď druhej AI vložte prvej AI, nech idea file doplní tam, kde ho druhá
   pochopila inak. Hotový súbor pošlite kolegovi, alebo ho dajte AI k
   rozpracovaniu.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Urob z môjho nápadu idea file: jednu stránku, s ktorou môže kolega alebo iná AI pracovať bez mňa. Nápad nájdeš na konci za riadkom „Nápad:“.

Najprv sa ma spýtaj najviac na tri veci, bez ktorých by nápad nikto iný nepochopil. Na nič ďalšie sa nepýtaj; čo nevieš, zapíš do otvorených otázok.

Idea file napíš po slovensky, najviac na jednu stranu, v tomto tvare:

### Názov nápadu
Jedna až dve vety: čo to je.

### Prečo
Aký problém nápad rieši, komu pomôže a ako sa to robí dnes.

### Hlavná myšlienka
V čom je nápad iný než dnešný postup.

### Ako by to fungovalo
Ako by to vyzeralo pre ľudí, ktorých sa nápad týka, na jednom konkrétnom príklade.

### Čo je rozhodnuté a čo je otvorené
Dva zoznamy: čo už platí a na čo zatiaľ nemáme odpoveď.

Popíš, čo chcem urobiť a prečo. Nástroje a postup, ako to urobiť, nechaj na tom, kto nápad prevezme, ak nie sú jadrom nápadu. Nevymýšľaj čísla ani dohody, ktoré odo mňa nemáš.

Keď pracuješ v priečinku, ulož idea file ako súbor .md do priečinka napady a pomenuj ho podľa nápadu. Potom pridaj do súboru AGENTS.md v tom istom priečinku pravidlo: „Keď poviem ‚urob z toho idea file‘, spýtaj sa ma najviac na tri veci, napíš nápad v rovnakom tvare ako súbory v priečinku napady a ulož ho tam.“ Ak AGENTS.md neexistuje, založ ho a zariadi, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka.

Ak so súbormi v priečinku nevieš pracovať, nič nezakladaj. Daj mi idea file ako súbor .md na stiahnutie a do pamäte si ulož, že keď poviem „urob z toho idea file“, spýtaš sa ma najviac na tri veci a napíšeš nápad v tomto tvare. Po každej úprave mi daj nový súbor na stiahnutie.

Nápad:

## Vo vašom nástroji

### Microsoft Copilot
V Copilot Chate vyber pred vložením promptu v ponuke Tools alebo Agents
agenta Word a nad riadok „Nápad:“ pripíš „Daj mi idea file ako dokument
Word.“ Copilot pravidlo uloží do pamäte (Saved memories) a používa ho aj v
novom chate, takže idea file daj na kontrolu prečítať kolegovi. Skilly má
Cowork (Customize, Skills).

### ChatGPT
V bežnom chate ChatGPT dostaneš idea file v odpovedi a pravidlo si AI uloží
do pamäte (Settings, Personalization, Memory). Na kontrolu otvor Dočasný
chat (Temporary chat), ktorý pamäť nepoužíva. Skilly majú firemné tarify
Business a Enterprise v bočnom paneli pod Plugins, na karte Skills.

### Claude
V bežnom chate Claude vytvorí AI súbor na stiahnutie, keď máš zapnuté Code
execution and file creation (Settings, Capabilities), a pravidlo si uloží do
pamäte (Settings, Memory). Na kontrolu otvor incognito chat, ktorý pamäť
nepoužíva. Skilly nájdeš v Customize, Skills a fungujú v chate aj v Cowork.

### Gemini
Hotový idea file ulož cez Share & export, Export to Docs a kolegovi ho
nasdielaj odkazom. Firemné účty nemajú pamäť, takže na kontrolu stačí nový
chat. Pravidlo na budúce si nechaj uložiť ako skill: napíš „Ulož to ako
skill“ a nájdeš ho v Customize, Skills.
## Čo je idea file

Idea file, slovensky súbor s nápadom, je obyčajný textový súbor s príponou
`.md`, písaný v [Markdowne](glossary:markdown): mriežky `###` na začiatku riadku
označujú nadpis. Napíše ho AI z toho, čo jej povieš, a ty len odpovieš na
pár otázok. Prečíta ho každá AI, nech ju kolega používa akokoľvek, a kolega si
ho otvorí napríklad v Poznámkovom bloku.

Od zadania úlohy sa idea file líši tým, že nehovorí, ako postupovať. Kolega alebo
jeho AI si vykonanie vymyslí podľa svojich možností, a aj keď zvolí inú cestu,
než by si zvolil ty, nápad zostane rovnaký. Overuješ ho na druhej AI, pretože
ta rovnako ako kolega nepozná chat, v ktorom idea file vznikol.

`AGENTS.md` je súbor s pravidlami pre AI v tom istom priečinku. Mnohé nástroje v
režime Code si ho prečítajú samy na začiatku každej práce; kde to nástroj sám
nevie, AI pravidlo uloží do jeho nastavení, alebo ti napíše, kam ho vložiť. Nabudúce
v novej úlohe v tom istom priečinku stačí napísať „urob z toho idea file“.

V režime Cowork alebo Code uloží AI idea file do priečinka `napady` a pravidlo
na budúce do `AGENTS.md`; keď priečinok nemáš, založ si nový prázdny. V
bežnom chate ti dá idea file na stiahnutie alebo do odpovede a pravidlo si
uloží do pamäte, ak ju máš zapnutú. Kedy sa oplatí prepnúť, ukazuje
karta [Chat, Cowork alebo Code](card:when-chat-is-not-enough).

Do idea file patrí hlavne to, prečo nápad dáva zmysel; ako ho uskutočniť,
nechaj na tom, kto ho prevezme.
## Nech AI píše idea file všade

Pravidlo v `AGENTS.md` platí len v priečinku, kam ho AI zapísala. Nápady však
prichádzajú aj inde, napríklad uprostred práce na inom projekte. Keď chceš idea
file písať kdekoľvek, nechaj AI urobiť z tohto postupu [skill](glossary:skill):
uložený návod, ktorý AI použije sama, kedykoľvek povieš „urob z toho idea
file“. Skilly nevie každý nástroj; ktoré ich vedia, ukazuje blok „Vo vašom
nástroji“. V chate, v ktorom idea file vznikol, napíš:

```text
Z toho, ako sme teraz písali idea file, urob skill s názvom idea-file. Použi ho, kedykoľvek poviem „urob z toho idea file“, v akomkoľvek priečinku aj chate. Zachovaj tvar súboru a najviac tri otázky. Ulož skill tak, aby ho tento nástroj načítal sám, a keď to tu nejde, povedz mi, kde ho pridám.
```
## Príklad

Petra koordinuje projekty v strojárskej firme. V stredu 7. 10. 2026 vloží
prompt do AI v režime Cowork, otvorenej v priečinku projektu, a za posledný
riadok nadiktuje: „Chcem, aby každý nováčik dostal na prvé dva týždne parťáka z
iného oddelenia, ktorého sa môže spýtať na čokoľvek, čo nechce riešiť s
manažérom.“ AI sa spýta, prečo práve z iného oddelenia, čo dnes nováčikom
chýba a koľko ľudí sa to týka. Petra odpovie, že nováčik sa manažéra bojí
pýtať na drobnosti, že vlani zo dvanástich nováčikov štyria odišli do troch mesiacov a
že tento rok firma prijme okolo pätnásť ľudí. AI uloží
`napady/partak-pre-novacikov.md`:

```text
### Parťák pre nováčikov
Každý nováčik dostane na prvé dva týždne parťáka z iného oddelenia, ktorého sa môže spýtať na čokoľvek.

### Prečo
Nováčik sa manažéra bojí pýtať na drobnosti, napríklad kde nájde šablóny alebo ako vyúčtovať služobnú cestu. Vlani zo dvanástich nováčikov štyria odišli do troch mesiacov. Tento rok firma prijme okolo pätnásť ľudí.

### Hlavná myšlienka
Parťák z iného oddelenia nováčika nehodnotí, takže sa ho nováčik nebojí spýtať na čokoľvek.

### Ako by to fungovalo
Prvý deň idú nováčik a parťák spolu na obed. Ďalšie dva týždne sa stretnú dvakrát týždenne na štvrť hodiny. Nová konštruktérka sa tak napríklad spýta parťačky z účtárne, ako vyúčtovať prvú služobnú cestu, a nemusí s tým chodiť za manažérom.

### Čo je rozhodnuté a čo je otvorené
- Rozhodnuté: parťák je vždy z iného oddelenia, program trvá dva týždne.
- Otvorené: kto parťákov vyberie? Dostanú na to čas v pracovnej dobe?
```

Druhá AI zhrnie nápad správne, ale spýta sa, či je parťák pre nováčika
povinný. Petra jej odpoveď vloží prvej AI, dopíše, že povinný je, a AI to
doplní do rozhodnutých vecí. Ešte ten deň Petra súbor pošle Lenke z HR,
ktorá ho dá svojej AI ako podklad pre program na november.
## Keď sa zaseknete

- **AI tvrdí, že idea file uložila, ale v priečinku nie je:** pravdepodobne pracujete v
  bežnom chate, ktorý do priečinka ukladať nevie. Požiadajte o súbor na stiahnutie,
  alebo prepnite do [Cowork alebo Code](card:when-chat-is-not-enough).
- **Nápad zatiaľ nejde povedať jednou vetou:** nadiktujte ho tak, ako ho máte, aj s
  tým, čo vám na dnešnom stave vadí; ako na to, ukazuje karta
  [Nadiktujte AI zadanie](card:voice-as-primary-ai-input). Čo AI z diktovania
  nepozná, zapíše do otvorených otázok.
- **AI namiesto nápadu píše podrobný postup:** napíšte jej: „Vyhoď nástroje a
  kroky, nechaj len čo a prečo.“
- **Druhá AI pochopila nápad inak:** nevysvetľujte jej ho v chate, pretože
  kolega také vysvetlenie nedostane. Vložte jej odpoveď prvej AI, nech podľa
  nej idea file doplní, a dajte ho druhej AI znova.
## Čo bude hotové

Máte idea file s nápadom, ktorý iná AI pochopila rovnako ako vy, a môžete ho
poslať kolegovi alebo dať AI k rozpracovaniu. V Cowork alebo Code leží v priečinku
`napady` a pravidlo na budúce je v `AGENTS.md`; v bežnom chate si pravidlo
pamätá AI. Budúci nápad tak AI napíše, keď napíšete „urob z toho idea
file“.
## Čo ďalej

Keď si nápadom nie ste istí, nechajte ho preveriť z viacerých strán v
[panely expertov](card:panel-expertu). Keď ide o nápad na nástroj alebo
aplikáciu, nechajte si ho podľa idea file postaviť [vibe codingom](card:risk-based-prototyping).
## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Zručnosť

**Čo to je:** Opakovane použiteľný postup pre určitý typ úlohy. Môže obsahovať inštrukcie, pravidlá, príklady, šablóny a ďalšie potrebné zdroje. Spôsob vytvorenia a spustenia sa líši podľa nástroja.

**Čo to nie je:** Nie je to všeobecná rola asistenta ani jedna vydarená konverzácia uložená bez úprav.

**Prečo to študent potrebuje:** Pomáha preniesť osvedčený postup do stabilnej podoby, ktorú možno konzistentne opakovane používať.

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
