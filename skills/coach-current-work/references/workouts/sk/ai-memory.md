# Upracte si pamäť AI: čo si o vás pamätá medzi chatmi

AI prejde, čo si o vás pamätá, opraví zastarané a vymaže nesprávne, takže nový chat vychádza z aktuálneho stavu.

## Upracte si pamäť AI: čo si o vás pamätá medzi chatmi

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s AI, ktorú používate pár týždňov.
## Na čo je to dobré

Projekt nového e-shopu skončil v septembri, ale AI ho stále pripomína v
návrhoch e-mailov a počíta s jeho termínmi. Navyše vám všetko dáva do tabuľky,
aj keď tabuľka bola len k jednému reportu.

AI si do [pamäti](glossary:memory) ukladá, čo o vás zistí, a sama nerozpozná, čo už skončilo.
Keď si raz za čas necháte ukázať, čo o vás vie, opraví to AI za pár minút.
## Čo si pripraviť

- AI, ktorú v práci používate už pár týždňov,
- nastavenie pamäti vo vašom nástroji; kde je, ukazuje blok „Vo vašom nástroji“.
## Ako na to

1. Vložte prompt do nového chatu a pozrite sa, čo o vás AI vie. Pri každom zázname navrhne, či ho nechať, opraviť alebo vymazať.
2. Napíšte AI, ktoré návrhy platia, napríklad „áno, okrem bodu 3“, a ona zmeny v pamäti vykoná. Zoznam v nastavení prejdite aj sami, AI nemusí vypísať všetko.
3. V novom chate sa opýtajte na vec, ktorú ste opravili. Ak AI odpovie starým spôsobom, napíšte jej, čo platí, alebo záznam vymažte v nastavení.

Pri neistom zázname pomôže otázka, či bude platiť aj o mesiac.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Prejdime spolu, čo si o mne pamätáš, a upracte to.

Vypíš všetko, čo o mne máš uložené v pamäti alebo vieš z predchádzajúcich chatov. Rozdeľ to do štyroch skupín: kto som a čo robím, akú chcem podobu odpovedí a ako so mnou pracovať, na čom pracujem, kde čo nájdem (dokumenty, nástroje, ľudia). Každú položku napíš ako jednu krátku vetu a pripíš, či je uložená v pamäti, alebo ju vieš z predchádzajúceho chatu.

Pri každej položke navrhni, či ju nechať, opraviť (rovno napíš nové znenie), alebo vymazať. Vymaž to, čo je zastarané, nesprávne pochopené alebo platilo len pre jeden úkol. Položky, ktoré hovoria to isté, rovno zlúč do jednej. Ak nerozpoznáš, či niečo ešte platí, opýtaj sa ma.

Keď ti napíšem, čo platí, vykonaj zmeny rovno v pamäti. Čo zmeniť nevieš, vypíš mi spolu s tým, kde to v nastavení nájdem. Pri položkách z predchádzajúcich chatov, ktoré neplatia, si do pamäti ulož, čo platí teraz, a ak vieš, z ktorého chatu sú, napíš mi to.

Nakoniec si do pamäti ulož toto pravidlo, a ak podobné už máš, nahraď ho: „Keď ťa opravím a oprava má platiť aj nabudúce, ulož ju ako jednu vetu: čo platí, prečo a kedy to použiť. Ak v pamäti máš starší záznam, prepíš ho, aby tam neboli dve verzie.“ Potom mi ukáž, ako pamäť teraz vyzerá.

## Vo vašom nástroji

### Microsoft Copilot
V Copilot Chate na `copilot.cloud.microsoft` otvorte vpravo hore
Nastavenia a ďalšie, Chat nastavenia, Prispôsobenie a pri dlaždici Uložené
spomienky vyberte Spravovať uložené spomienky. Jednotlivú spomienku vymažete
ikonou koša, všetky tlačidlom Odstrániť všetky pamäte. Keď Copilotu v
chate napíšete, aby niečo zabudol, vymaže to sám.

### ChatGPT
V Settings, Personalization, Memory (v slovenskej verzii na rovnakom mieste) je buď
zhrnutie (Memory summary), kde riadok opravíte alebo zvolíte Don't mention this
again, alebo zoznam Saved memories s možnosťou mazania. Codex má vlastnú pamäť, ktorú
na rovnakom mieste vymažete voľbou Delete Codex memories; k promptu v ňom pridajte „Pamäť
neupravuj, čo má platiť vždy, zapíš do `AGENTS.md`.“

### Claude
V Settings, Memory je pamäť rozdelená na témy (Topics): tému otvoríte,
opravíte ikonou úprav alebo vymažete cez Delete. Vo firemných tarifách ju
povoľuje vlastník organizácie a zapnete si ju sami. Claude Code má pamäť pre
každý projekt zvlášť v súboroch so zoznamom `MEMORY.md`, preto prompt spustite
v každom projekte; priečinok otvorí príkaz `/memory`.

### Gemini
Gemini s pracovným účtom pamäť nemá, takže si z chatov nič neukladá. Čo má
platiť vždy, máte v inštrukciách robota Gem (Gems). Prompt vložte do chatu
spolu s inštrukciami Gemu, ktorého používate najčastejšie: AI ich prejde rovnako
ako pamäť a opravenú verziu uložíte späť do Gemu.
## Čo je pamäť AI

Pamäť AI, v nastavení Memory alebo Pamäť, je miesto, kam si AI ukladá, čo o
vás zistí z chatov: kto ste, ako chcete odpovede a na čom pracujete. Niektoré
nástroje k tomu čítajú aj vaše predchádzajúce chaty, a tak sa do pamäti dostane aj to,
čo platilo len pre jeden úkol.

Pamäť AI používa ako nápovedu a vyberá si z nej sama. Čo musí platiť v
každom chate, dajte preto do [Custom Instructions](card:custom-instructions),
teda stálych pokynov v nastavení, ktoré píšete vy.

Nástroje, ktoré pracujú so zložkou v počítači, si pamäť často vedú v
obyčajných textových súboroch. AI ich potom upraví priamo a vy si ich môžete
otvoriť a prečítať.
## Nech sa pamäť udržiava sama

Pravidlo z konca promptu zabezpečí, že AI každú novú opravu uloží ako jednu
vetu s dôvodom a staršiu verziu toho istého prepíše, takže sa v pamäti nehromadí.

Keď AI pracuje v [režime](glossary:workmode) Code so zložkou vo vašom
počítači a pamäť si vedie v súboroch, upratovanie môže raz mesačne prebehnúť
samo. Vložte jej toto zadanie a požiadajte ju, nech z neho naplánuje úlohu:

```text
Každé prvé pondelok v mesiaci o 9:00 prejdite svoju pamäť. Záznamy, ktoré hovoria to isté, zlúčte do jedného. Záznamy, ktoré odporujú novším alebo sa týkajú vecí, ktoré skončili, vymažte. Ak si nie ste istý, nechajte záznam a opýtajte sa ma. Ak si pamäť vedie nástroj sám a jej súbory sa nemajú upravovať ručne, nič nemeníte a len mi napíšte, čo v nej nesedí. Nakoniec mi napíšte prehľad: čo je zlúčené, čo vymazané a na čo sa pýtate.
```

Úloha pobehne, len keď je počítač zapnutý a aplikácia otvorená. Ak už máte
[týždennú revíziu](card:weekly-ai-review), môžete upratovanie pamäti pridať do nej
namiesto samostatnej úlohy. V bežnom chate stačí raz za pár mesiacov vložiť
znova prompt z AI cvičenia.
## Príklad

Klára Novotná koordinuje projekty vo firme, ktorá vyrába kancelársky
nábytok. Nový e-shop spustili v septembri a od októbra Klára pripravuje stánok na
jarný veľtrh. V utorok 3. 11. 2026 vloží prompt a AI okrem iného vypíše:

```text
### Akú chcem podobu odpovedí
- Chce krátke odpovede, najviac päť bodov. Uložené v pamäti, zlúčené z dvoch záznamov. Návrh: nechať.
- Chce výsledky vždy v tabuľke. Uložené v pamäti. Návrh: vymazať, tabuľka bola len k reportu za august.

### Na čom pracujem
- Vedie spustenie nového e-shopu s termínom 30. 9. Uložené v pamäti. Návrh: opraviť na „E-shop beží od septembra, teraz pripravuje stánok na veľtrh.“
- Rieši reklamáciu dodávky stoličiek. Z predchádzajúceho chatu „Reklamácia stoličky“. Návrh: uložiť, že reklamácia je uzavretá.

### Kde čo nájdem
- Termíny projektu sú v tabuľke „E-shop harmonogram“. Uložené v pamäti. Návrh: opraviť na tabuľku „Veľtrh 2027“.
```

Klára odpovie „áno, okrem tabuľky: prehľady termínov chcem v tabuľke ďalej“. AI
upravi záznam o tabuľke, opraví dva ďalšie a uloží si, že reklamácia skončila. V
novom chate potom Klára napíše „priprav e-mail dodávateľovi stánku, čo od neho
potrebujeme do konca novembra“ a dostane krátky e-mail bez zmienky o
e-shope.
## Keď sa zaseknete

- **AI napíše, že si nič nepamätá, alebo vypíše dve všeobecné vety:** pamäť
  máte pravdepodobne vypnutú alebo takmer prázdnu a upratovať nie je čo. Zapnite ju v
  nastavení, a ak to vo firemnom účte nejde, uložte si stálych pokyny do
  [Custom Instructions](card:custom-instructions).
- **AI napíše, že záznam vymazala, ale v nastavení stále je:** vymažte ho
  priamo v zozname pamäti. V ChatGPT vymazanie chatu uložený záznam v pamäti
  neodstráni.
- **Nový chat stále vychádza zo starej informácie:** AI ju pravdepodobne berie z
  predchádzajúceho chatu, nie z pamäti. Napíšte AI, čo platí teraz, nech si to uloží; v
  ChatGPT pri starej informácii v zhrnutí pamäti zvoľte Don't mention this again. Ak sa vracia ďalej,
  vymažte chat, z ktorého ju berie.
- **AI vypíše len pár položiek, ale v nastavení ich je viac:** požiadajte ju,
  nech prejde každú skupinu zvlášť. Čo ani potom nevypíše, opravte alebo vymažte
  priamo v nastavení.
## Čo bude hotové

V pamäti vašej AI zostalo len to, čo dnes platí, a v novom chate ste si
overili, že AI vychádza z opraveného znenia. AI má uložené pravidlo, ako ďalšie
opravy zapisovať, aby sa v pamäti nezdvojovali.
## Čo ďalej

Pravidlá, podľa ktorých má AI pracovať v celom projekte, sepíšete do
[súboru s pravidlami pre AI](card:agents-md). Keď budete chcieť pravidelne
upratovať celé AI nastavenie, nielen pamäť, pokračujte k
[týždennej revízii](card:weekly-ai-review).
## Pamäť AI

**Čo to je:** Miesto, kde si AI ukladá, čo o človeku zistí z chatov: opravy, preferencie, mená a rozpracovanú prácu. V nových chatových konverzáciách z nej AI sama vyberá, čo sa hodí. Kde pamäť nájsť a kto ju môže zapnúť, závisí od nástroja.

**Čo to nie je:** Nie sú to trvalé pokyny, ktoré človek píše sám (Custom Instructions), ani história chatov. Čo musí platiť v každom chate, patrí do pokynov, pretože z pamäti AI používa len to, čo považuje za dôležité.

**Prečo to študent potrebuje:** Pomáha rozhodnúť, čo si nechať zapamätať, čo zapísať do pokynov a kedy pamäť vyčistiť, aby AI nepracovala so zastaranými informáciami.

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
