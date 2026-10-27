# Pripravte handoff: odovzdanie rozpracovanej práce

AI napíše odovzdanie rozpracovanej práce na jednu stránku, podľa ktorého kolega aj nový chat nadviažu bez čítania histórie.

## Pripravte handoff: odovzdanie rozpracovanej práce

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s jednou rozpracovanou prácou.
## Na čo sa hodí

Od piatku ste týždeň na dovolenke a výber nového dodávateľa upratovania má dokončiť
kolega Pavel. Napíšete mu do e-mailu tri vety. V pondelok Pavel pol dopoludnia
zisťuje, ktorá ponuka ešte platí, a potom vám volá pri mori, či smie s
dodávateľom znova rokovať o cene.

Stačilo by krátke odovzdanie na jednu stránku, ktoré sa nazýva handoff. Napíše
ho AI z chatu a podkladov a Pavel z neho spozná, kde práca stojí a čo má urobiť
ako prvé.
## Čo si pripraviť

- jednu rozpracovanú prácu, ktorú odovzdávate, odkladáte alebo presúvate do
  nového chatu,
- chat, v ktorom ste na nej pracovali, alebo hlavné e-maily a poznámky k nej,
- AI, ktorú v práci používate; najlepšie v [režime](glossary:workmode) Cowork
  alebo Code.
## Ako na to

1. Vložte prompt do chatu, v ktorom ste na práci naposledy pracovali. Ak
   prebehla mimo AI, vložte ho do nového chatu s hlavnými podkladmi a pár
   vetami o tom, kde práca stojí.
2. Prečítajte handoff ako kolega, ktorý pri práci nebol, a čo chýba alebo
   prebytočné, povedzte AI. V Cowork alebo Code ho uloží do `handoff.md`, v
   bežnom chate ho máte v odpovedi.
3. Otvorte nový chat a napíšte „Pokračuj podľa `handoff.md`“, v bežnom
   chate vložte handoff s podkladmi. AI by mala bez dopĺňania povedať, kde práca
   stojí, a navrhnúť ďalší krok.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Priprav handoff: krátke odovzdanie rozpracovanej práce. Kolega alebo nový chat z neho má pokračovať bez čítania celej histórie a bez dopĺňania.

Vychádzaj z nášho chatu, z podkladov, ktoré ti prikladám, vkladám alebo píšem pod toto zadanie, a zo súborov v zložke projektu, ak k nim máš prístup. Keď ti k niektorému bodu niečo chýba, opýtaj sa ma, najviac na päť vecí naraz. Napíš handoff v tomto tvare:

### Handoff: názov práce (dátum)
- Cieľ: čo má na konci vzniknúť, pre koho a do kedy.
- Hotové a overené: čo je urobené a podľa čoho to vieme, napríklad súbor, odkaz alebo potvrdenie od konkrétnej osoby.
- Rozpracované: čo je načaté a v akom stave.
- Ďalší krok: jedna konkrétna vec, ktorú má príjemca urobiť ako prvú.
- Hotovo je, keď: podľa čoho spozná, že je práca dokončená.
- Hranice: čo nesmie meniť alebo robiť bez dohody.
- Čo chýba: otvorené otázky a podklady alebo prístupy, ktoré príjemca zatiaľ nemá.
- Podklady: súbory a odkazy, s ktorými má pracovať.

Píš pre človeka, ktorý pri práci nebol, a zmesti sa na jednu stránku. Neprepíš chat a vynech slepé uličky, heslá a osobné údaje, ktoré príjemca nepotrebuje. Čo z chatu, podkladov ani mojich odpovedí nepoznáš iste, napíš do „Čo chýba“ a nedohaduj.

Keď pracuješ v zložke projektu, ulož handoff do súboru handoff.md. Ak už existuje, prepíš ho, pretože platí len posledné odovzdanie. Ak so súbormi pracovať nevieš, nič neukladaj a napíš mi celý handoff do odpovede.

Nakoniec si ulož pravidlo na nabudúce: „Keď napíšem ‚handoff‘, priprav odovzdanie v tomto tvare.“ V bežnom chate si pravidlo aj tvar handoffu ulož do pamäti, a keď pamäť nemáš, povedz mi to. Keď pracuješ v zložke projektu, zapíš pravidlo aj tvar do súboru AGENTS.md, a keď neexistuje, založ ho. K pravidlu pripíš: „Ulož odovzdanie do handoff.md. Keď v zložke leží handoff.md, prečítaj si ho na začiatku každej novej práce. Keď bude práca z neho hotová, napíš na jeho prvý riadok ‚Uzavreté‘ a uzavretý handoff už neber ako zadanie.“ Zabezpeč, aby si si AGENTS.md v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky.

## Vo vašom nástroji

### Microsoft Copilot
V Copilot Chate dostanete odovzdanie v odpovedi. Keď je zapnuté tlačidlo Work
IQ, Copilot vidí aj vaše e-maily, schôdzky a súbory, takže ich nemusíte
vkladať; stačí napísať, ktorých sa práca týka. Pravidlo na nabudúce si Copilot
uloží do pamäti (Saved memories v Settings and more, Chat settings,
Personalization), ak ju správca nevypol.

### ChatGPT
V bežnom chate ChatGPT dostanete odovzdanie v odpovedi a pravidlo si AI uloží
do pamäti (Settings, Personalization, Memory), ak ju firma nevypla. So
zložkou v počítači pracuje Codex: v aplikácii ChatGPT pre počítač prepnite na
Codex a zvoľte otvorenie zložky (open a folder). Codex číta `AGENTS.md` sám a naplánované úlohy
nájdete pod Scheduled.

### Claude
V bežnom chate Claude dostanete odovzdanie v odpovedi a pravidlo si AI uloží do
pamäti (Settings, Memory), ktorú vo firemnom účte povoľuje správca. V
Cowork v aplikácii Claude pre počítač AI uloží `handoff.md` do vybranej zložky
a pravidlo zapíše do inštrukcií zložky (Folder instructions); Claude Code číta
`AGENTS.md`.

### Gemini
V Gemini dostanete odovzdanie v odpovedi a cez Share & export, Export to Docs ho
uložíte ako Dokument Google. E-maily z Gmailu nájde, keď v prompte napíšete
@Gmail a o čom vlákno je. Firemné účty nemajú pamäť, a tak si tvar odovzdania
nechajte uložiť ako skill (napíšte „Ulož to ako skill“) a nabudúce stačí napísať
„handoff“.
## Čo je handoff

Handoff je anglický názov pre odovzdanie, napríklad štafety alebo služby medzi dvoma
zmenami. Obsahuje cieľ, čo je hotové a overené, ďalší krok, podľa čoho sa
spozná, že je hotovo, čo sa nesmie meniť a čo ešte chýba. V Cowork alebo Code
je to obyčajný textový súbor `handoff.md` v zložke projektu, ktorý otvoríte
v akomkoľvek textovom editore. Platí vždy len posledný handoff: AI ho pri
ďalšom odovzdaní prepíše, a keď je práca hotová, označí ho ako uzavretý.

Handoff sa hodí aj vtedy, keď od práce odchádzate na pár dní, alebo keď je chat
taký dlhý, že AI zabúda, na čom ste sa dohodli na začiatku. AI v jednom
chate udrží len obmedzené množstvo textu, a v veľmi dlhom chate sa jej preto
stráca začiatok a mýli si staré verzie s novými. Handoff prenesie do nového
chatu len to, čo platí teraz.

`AGENTS.md` je súbor s pravidlami pre AI v rovnakej zložke. Mnohé nástroje v
režime Code si ho prečítajú samy na začiatku každej práce; kde to nástroj sám
nevie, AI pravidlo uloží do jeho nastavení, alebo vám napíše, kam ho vložiť. Nabudúce
potom stačí napísať „handoff“ a AI vie, čo a kam napísať.

Do handoffu patrí len to, bez čoho príjemca nenadviaže; celý chat, slepé
uličky a osobné údaje, ktoré nepotrebuje, AI podľa promptu vynechá. V bežnom
chate si pravidlo na nabudúce AI uloží do pamäti. Kolegu potom handoff vložte
do e-mailu a priložte podklady, na ktoré odkazuje.
## Nech sa handoff píše sám

Keď v Cowork alebo Code pracujete na viacerých projektoch, ktoré máte v jednej
zložke, môžu sa handoffy písať samy každý piatok, než od rozpracovanej práce
odídete na víkend. Stačí naplánovaná úloha. Otvorte AI v režime Cowork
alebo Code v tej spoločnej zložke, vložte toto zadanie a požiadajte ju, nech z neho
naplánovanú úlohu založí:

```text
Každý piatok o 16:00 prejdite podsložky tejto zložky, v ktorých sa tento týždeň pracovalo a práca ešte nie je hotová. Do každej ulož nový handoff.md v tvare z AGENTS.md tej podsložky. Keď tam pravidlo nie je, použite tvar zo súčasného handoff.md, a keď chýba oboje, podsložku preskoč. Na konci mi napíš, pri ktorých projektoch zostalo niečo v „Čo chýba“.
```

Keď úloha pracuje so súbormi vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená.

V pondelok potom otvorte nový chat v zložke projektu a napíšte len „Pokračuj
podľa `handoff.md`.“
## Príklad

Eva vyberá pre firmu nového dodávateľa upratovania kancelárií. Vo štvrtok 15. 10.,
deň pred dovolenkou, vloží prompt do chatu v režime Cowork, v ktorom s AI
porovnávala ponuky. Pri čítaní si všimne, že chýba, komu v EkoCleane volať;
AI to doplní a v `handoff.md` potom leží:

```text
### Handoff: výber dodávateľa upratovania (15. 10. 2026)
- Cieľ: do 30. 10. podpísaná zmluva s dodávateľom, ktorý začne upratovať 1. 12.
- Hotové a overené: porovnanie troch ponúk je v súbore porovnanie-ponuk.xlsx; Čistota Plus a Upratovanie Brno potvrdili ceny e-mailom 13. 10.
- Rozpracované: EkoClean sľúbil upravenú ponuku do 20. 10.
- Ďalší krok: v pondelok 19. 10. zavolať Petre Horákovej z EkoCleanu, či ponuka príde včas.
- Hotovo je, keď: finančná riaditeľka schváli jedného dodávateľa a zmluva je podpísaná.
- Hranice: o cene znova nerokovať, strop je 42 000 Kč mesačne.
- Čo chýba: vzor zmluvy od právneho oddelenia; Pavel zatiaľ nemá prístup do zdieľanej zložky Nákup.
- Podklady: porovnanie-ponuk.xlsx a ponuky v zložke ponuky.
```

Eva potom otvorí nový chat v rovnakej zložke a napíše „Pokračuj podľa
`handoff.md`.“ AI odpovie, že výber čaká na ponuku EkoCleanu, a navrhne v
pondelok zavolať pani Horákovej. Na nič sa nepýta, takže Eva vloží handoff do
e-mailu Pavlovi a priloží porovnávaciu tabuľku. Keby sa AI pýtala, o aký
výber ide, nový chat by pravdepodobne bežal v inej zložke než handoff.

V bežnom chate by Eva do nového chatu vložila e-maily od dodávateľov a
priložila porovnávaciu tabuľku. Rovnaký handoff by dostala v odpovedi, vložila
ho do ďalšieho nového chatu s vetou „Pokračuj podľa tohto handoffu.“ a
Pavlovi ho poslala v e-maile.
## Keď sa zaseknete

- **V bežnom chate AI nič neuloží:** súbory ukladať nevie, a keď chat
  nemá zapnutú pamäť, neuloží ani pravidlo. Handoff máte v odpovedi a prompt
  nabudúce vložte znova; aby AI handoff ukladala k projektu sama, prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough).
- **Nový chat sa pýta na veci, ktoré už sú rozhodnuté:** napíšte jeho
  otázky do pôvodného chatu, nechajte AI handoff doplniť a nový chat otvorte
  znova.
- **Handoff je dlhý takmer ako chat:** požiadajte AI, nech každý bod skráti na
  jednu až dve vety a podrobnosti nechá v podkladoch, na ktoré odkazuje.
- **Chat je taký dlhý, že AI zabudla začiatok práce:** otvorte nový chat,
  vložte do neho hlavné podklady aj prompt a pod prompt napíšte pár viet o
  tom, kde práca stojí.
## Čo bude hotové

Máte handoff, z ktorého nový chat pokračoval bez dopĺňania, a rovnaký
handoff môžete poslať kolegovi. V Cowork alebo Code leží v `handoff.md` v
zložke projektu a v `AGENTS.md` je pravidlo, podľa ktorého AI nabudúce napíše
handoff, keď napíšete len „handoff“. V bežnom chate má AI pravidlo v
pamäti; keď ju chat nemá, nabudúce vložíte rovnaký prompt. Starý preplnený
chat môžete zatvoriť.
## Čo ďalej

Keď na odovzdanú prácu nadväzuje ďalší krok s AI, napríklad z vybranej ponuky
vznikne zmluva a z nej správa pre vedenie, a robíte to opakovane, [uložte celý postup ako skill](card:create-skill-from-proven-process). Stav celého projektu zhrnie
[úvodná stránka projektu](card:project-start-here), ktorú vám AI napíše
rovnako ako handoff.
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
