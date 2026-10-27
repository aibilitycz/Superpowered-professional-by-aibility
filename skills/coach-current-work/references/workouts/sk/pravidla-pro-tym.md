# Sepíšte tímu pravidlá pre AI: jedna stránka pre kolegov aj ich AI

AI zo smernice a dvoch reálnych situácií sepíše tímu, čo s AI smie a čo vždy rozhoduje človek.

## Sepíšte tímu pravidlá pre AI: jedna stránka pre kolegov aj ich AI

**Náročnosť: stredná.**\
**Čas: približne 15 minút** so smernicou a dvoma situáciami po ruke.
## Na čo sa hodí

Karta je pre manažéra alebo team leadera, ktorý rozhoduje, ako tím pracuje s
AI. V pondelok sa vás Ondrej pýta, či smie dať export reklamácií s menami a
telefónmi zákazníkov do svojho osobného účtu AI. V stredu zistíte, že Lucia
nechala AI navrhnúť, ktorým zákazníkom zamietnuť reklamáciu, a tri zamietnutia
odoslala, bez toho, aby otvorila objednávky.

Keď pravidlá tímu ležia na jednej stránke v zdieľanej zložke a AI kolegov ich
číta na začiatku každej práce, kto zaváha, spýta sa svojej AI a tá mu odpovie podľa
vašich pravidiel.
## Čo si pripraviť

- firemnú smernicu o AI alebo e-mail od IT; keď nič také nemáte, nevadí,
- dve situácie, kedy niekto z tímu s AI váhal, aspoň jednu o rozhodnutí o
  ľuďoch,
- zdieľanú zložku tímu otvorenú v pracovnej AI v režime Cowork alebo Code,
- kolegu, ktorý stránku nepísal a má na konci päť minút.
## Ako na to

1. Otvorte zdieľanú zložku v AI v režime Cowork alebo Code, vložte prompt z
   AI cvičenia a smernicu a pod prompt napíšte obe situácie. AI stránku
   `pravidla-ai.md` uloží do zložky.
2. Prečítajte si stránku a opravte, čo nesedí: mená ľudí pre IT, osobné údaje
   a právo a to, čo vždy rozhoduje človek. Otvorené otázky AI vypíše na
   koniec.
3. Kolega, ktorý stránku nepísal, otvorí zložku vo svojej AI a spýta sa na nový
   prípad, napríklad na ročné odmeny. Kde nevie, čo robiť, nech AI stránku doplní.

Len s bežným chatom poradí časť Keď sa zaseknete.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code, otvorenej vo vašej zložke:

Sepíš pre náš tím pravidlá pre prácu s AI na jednu stránku. Čítať ich budú kolegovia aj AI, s ktorou pracujú.

Vychádzaj z firemných pravidiel, ktoré ti dám alebo nájdeš v tejto zložke, a z dvoch situácií z našej práce, v ktorých kolegovia nevedeli, ako s AI postupovať. Firemné pravidlá a zmluvy s klientmi majú prednosť. Čo v podkladoch nie je, nedomyšľaj a napíš to do časti Otvorené otázky, ku každej otázke s menom človeka, ktorý ju rozhodne. Keď ho nevieš, spýtaj sa ma.

Stránka má päť častí:
- Nástroje: ktoré AI nástroje tím používa a na akú prácu.
- Dáta: čo do ktorého nástroja smie, čo sa pred vložením nahradí všeobecným označením (napríklad Klient A) a čo do AI nepatrí nikdy, napríklad heslá.
- Čo vždy rozhoduje človek: rozhodnutia o ľuďoch (výber uchádzačov, hodnotenie, odmeny, rozdelenie práce), odpovede zákazníkom, v ktorých ide o peniaze alebo sľub, a všetko, čo nejde ľahko vziať späť. Ku každému napíš, kto rozhoduje a čo skontroluje, než výsledok AI použije, vrátane prípadov, ktoré AI vyradila.
- Koho sa spýtať: mená a kontakty pre IT, osobné údaje a právo.
- Čo robiť pri chybe: čo urobiť hneď, komu to nahlásiť a ako rýchlo.

Každé pravidlo ukáž na príklade z našich situácií, bez mien kolegov. Píš krátko, aby to pochopil aj nový kolega, a zmest sa na jednu obrazovku. Hore napíš, kto pravidlá vlastní a kedy ich nabudúce skontrolujeme. Keď tím používa AI pri výbere uchádzačov, hodnotení ľudí alebo rozdeľovaní práce, pridaj otvorenú otázku pre človeka, ktorý vo firme rieši právo alebo HR: ako také použitie posudzuje európsky AI Act.

Stránku ulož ako pravidla-ai.md do tejto zložky. Potom do AGENTS.md v tejto zložke zapíš: „Na začiatku každej práce v tejto zložke si prečítaj pravidla-ai.md a riaď sa nimi. Keď narazíš na situáciu, ktorú nerieši, povedz to a pripíš ju s dátumom, bez mien a osobných údajov, do časti Otvorené otázky. Pravidlá sama nemen.“ Keď AGENTS.md neexistuje, založ ho. V Cowork rovnaký pokyn zapíš aj do inštrukcií zložky.

Nakoniec mi stránku ukáž a vypíš otvorené otázky.

## Vo vašom nástroji

### Microsoft Copilot
Cowork v Copilote pracuje len so súbormi na OneDrive a SharePointe a že číta
`AGENTS.md`, Microsoft neuvádza, preto postupujte podľa bodu „Firma dovolí
len bežný chat“. Dokument Pravidlá AI pridajte do Notebooku (Poznámkové
bloky, Nový poznámkový blok), do Instructions vložte „Riaď sa dokumentom
Pravidlá AI; čo nerieši, navrhni ako otázku pre [meno].“ a Notebook
zdieľajte tímu cez Share.

### ChatGPT
So zdieľanou zložkou pracuje Codex v aplikácii ChatGPT pre počítač (prepnete
na Codex, open a folder) a `AGENTS.md` číta sám. Bez Codexu postupujte podľa
bodu „Firma dovolí len bežný chat“: dokument dajte do projektu, do jeho
pokynov vložte „Riaď sa dokumentom Pravidlá AI; čo nerieši, navrhni ako otázku
pre [meno].“ a projekt zdieľajte cez Share.

### Claude
V aplikácii Claude pre počítač zvoľte Cowork a Work in a folder, alebo
otvorte zložku v Claude Code, ktorý číta `AGENTS.md` sám. V Cowork si AI
podľa promptu zapíše pokyn do inštrukcií zložky a každý kolega v Cowork povie
svojej AI, nech to urobí tiež. Kto pracuje len v chate, nahraje si stránku do
projektu (Projects).

### Gemini
Gemini s pracovným účtom so zložkou v počítači nepracuje, preto postupujte
podľa bodu „Firma dovolí len bežný chat“ s robotom Gem. V Roboti Gem, Nový
Gem pridajte dokument do Vedomostí, do inštrukcií vložte „Riaď sa dokumentom
Pravidlá AI; čo nerieši, navrhni ako otázku pre [meno].“ a Gem zdieľajte
cez Zdieľať. Novú verziu stránky potom nahrajte do Vedomostí namiesto starej.
## Čo vždy rozhoduje človek

AI smie pripraviť podklad, poradie alebo návrh. Rozhodnutie, ktoré mení situáciu
konkrétneho človeka, robí človek: kto pôjde na pohovor, komu pridáte, kto
dostane akú prácu a komu zamietnete reklamáciu. Ten človek pozná kritériá, vidí
podklady, má na kontrolu čas a smie návrh AI odmietnuť. Keď mu jedna z tých
vecí chýba, je kontrola len kliknutie na „súhlasím“.

Chyba sa často schová v tom, čo AI vyradila. Nech preto človek otvorí aj pár
vyradených prípadov, napríklad päť náhodných životopisov z tých, ktoré AI odložila.
Kto rozhoduje, má vedieť rozhodnutie dotknutému človeku vysvetliť vlastnými slovami,
bez vety „vyšlo to z AI“.

Keď AI v tíme pomáha vyberať uchádzačov, hodnotiť ľudí, rozhodovať o povýšení
alebo prepustení, rozdeľovať prácu podľa správania alebo osobných vlastností
ľudí alebo sledovať ich výkon, môže ísť podľa európskeho
[AI Actu](glossary:ai-act) o vysoko rizikový systém. Pri ňom bude firma od 2. decembra 2027 okrem iného musieť zveriť dohľad
človeku, ktorý tomu rozumie a má právomoc výsledok zmeniť, a zamestnancov aj
ich zástupcov vopred informovať, že takúto AI nasadí. Či sa to týka
vášho použitia, posúdi človek, ktorý vo firme rieši právo alebo HR. Rozpoznávanie
pomocou AI emócií ľudí na pracovisku AI Act zakazuje už od februára 2025, s
výnimkou lekárskych a bezpečnostných dôvodov.
## Ako sa pravidlami riadi AI kolegov

Okrem stránky zapíše AI do súboru `AGENTS.md` v zdieľanej zložke pokyn, nech
sa ňou AI riadi; v Cowork ho zapíše aj do inštrukcií zložky.

Keď kolega otvorí priamo zdieľanú zložku, AI si `AGENTS.md` prečíta na
začiatku práce. Nástroj, ktorý to sám nerobí, si nechá pokyn z `AGENTS.md`
zapísať do svojho nastavenia pre túto zložku; ako, ukazuje blok „Vo vašom
nástroji“. Potom AI kolegov pravidlá číta a situácie, ktoré nerieši, zapisuje do
otvorených otázok.

Kto z tímu pracuje len v bežnom chate, nahraje si stránku do
[projektu](card:asistent), teda miesta v AI nástroji, kde AI vo všetkých
konverzáciách vidí rovnaké súbory a pokyny. Otvorené otázky z chatu však musí
kolega poslať vám.
## Nech pravidlá rastú s tímom

Pokyn v `AGENTS.md` zabezpečí, že AI kolegov pripíše do otvorených otázok každú
situáciu, ktorú stránka nerieši. Raz za mesiac ich môže prejsť naplánovaná
úloha a pripraviť vám návrh, ako stránku doplniť. Vložte do AI v režime
Cowork alebo Code toto zadanie a požiadajte ju, nech z neho naplánovanú úlohu
založí:

```text
Každý prvý pracovný deň v mesiaci prejdite pravidla-ai.md v zdieľanej zložke tímu. Keď v časti Otvorené otázky pribudli nové situácie, navrhni mi ku každej jedno pravidlo s príkladom a napíš, kto ho má schváliť. Keď je dátum ďalšej kontroly za nami, pripomeň mi ho. Keď nič nepribudlo, napíš len jednu vetu.
```

Keď úloha pracuje so zložkou vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená.
## Príklad

Martina vedie šesťčlennú zákaznícku podporu v e-shope s elektronikou. Firma
má smernicu IT z marca: pracovné dáta patria len do firemnej AI, ktorú firma
platí. Martina otvorila zložku tímu „Podpora“ v režime Cowork, vložila
prompt, smernicu a obe situácie z pondelka a zo stredy. AI napísala stránku,
Martina opravila jedno meno a skrátila časť o tom, aké dáta kam smie:

```text
Pravidlá AI v podpore (vlastník: Martina Horáková, ďalšia kontrola: 15. 1. 2027)

Nástroje: firemná AI na odpovede zákazníkom, prehľady a návrhy. Osobné účty AI na prácu nepoužívame.
Dáta: export reklamácií len do firemnej AI. Mená a telefóny zákazníkov do osobných účtov nikdy, heslá nikam.
Čo vždy rozhoduje človek: zamietnutie reklamácie, zľava nad 500 € a hodnotenie kolegov. AI pripraví návrh s dôvodom. O reklamácii rozhoduje operátor, o hodnotení Martina. Pred zamietnutím reklamácie operátor otvorí objednávku a fotky.
Koho sa spýtať: IT Pavel Krejčí, osobné údaje Jana Malá (poverenkyňa pre ochranu osobných údajov), všetko ostatné Martina.
Pri chybe: konverzáciu ďalej nepoužívať a ešte ten istý deň napísať Pavlovi a Jane Malej, čo a kam odišlo.
Otvorené otázky: smieme dať hodnotenie hovorov od zákazníkov do firemnej AI a nechať ju navrhnúť, komu pomôcť s náročnými hovormi? Rozhodne Jana Malá s HR.
```

Druhý deň otvoril Ondrej rovnakú zložku vo svojej AI a spýtal sa: zákazník chce
za oneskorenú zásielku zľavu 800 € a AI navrhuje vyhovieť, smie to poslať? AI
mu podľa stránky odpovedala, že zľavu nad 500 € rozhoduje človek a ona ju
sama nesľúbi. Kto to má byť, ale stránka nehovorila. Martina povedala AI, nech do
časti o rozhodovaní doplní „Zľavu nad 500 € schvaľuje Martina“, a AI to
pripísala.
## Keď sa zaseknete

- **Firma dovolí len bežný chat:** vložte prompt bez odstavca, ktorý
  začína slovami „Stránku ulož ako“, pridajte smernicu ako súbor a
  obe situácie napíšte pod prompt. AI vám stránku napíše priamo do chatu.
  Uložte ju ako dokument s názvom Pravidlá AI do zdieľanej zložky tímu a
  dajte ju do zdieľaného
  [projektu](card:asistent), v ktorom sa kolegovia pýtajú; ako na to vo vašom
  nástroji, ukazuje blok „Vo vašom nástroji“. Tam sa kolega spýta aj na nový
  prípad z kroku 3 a otvorené otázky vám pošle sám.
- **AI tvrdí, že stránku uložila, ale v zložke nie je:** pravdepodobne pracujete v
  bežnom chate, ktorý súbory ukladať nevie. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough) a otvorte v ňom zdieľanú
  zložku. Keď ju používať nesmiete, postupujte podľa bodu vyššie.
- **AI kolegovia sa pravidlami neriadia:** nech kolega otvorí priamo zdieľanú zložku,
  nie jej podsložku, a spýta sa AI, či vidí `pravidla-ai.md`. Keď jeho
  nástroj `AGENTS.md` sám nečíta, nech si pokyn z neho nechá zapísať do nastavení
  zložky.
- **Stránka je dlhá alebo samý zákaz:** požiadajte AI, nech každú časť skráti
  na tri riadky a ku každému zákazu napíše, čo namiesto toho tím smie.
## Čo bude hotové

V zdieľanej zložke tímu máte stránku pravidiel AI s príkladmi z vašej práce,
menami a otvorenými otázkami. AI kolegov sa ňou riadi vďaka `AGENTS.md` alebo
nastaveniu zložky a situácie, ktoré stránka zatiaľ nerieši, zapisuje do
otvorených otázok. V tíme, ktorý pracuje len v bežnom chate, majú kolegovia
stránku vo svojom projekte. Kolega, ktorý stránku nepísal, podľa nej vyriešil
nový prípad.
## Právne hranice

Karta vám pomôže sepísať pravidlá tímu, nenahrádza právnu radu a sama
nepotvrdzuje, že pravidlá spĺňajú GDPR alebo AI Act. Čo smiete, určujú pravidlá
vašej firmy, zmluvy s klientmi,
[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces) a
[AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces). AI Act ukladá
firmám, ktoré AI používajú, prijímať opatrenia na podporu AI gramotnosti ľudí,
ktorí s ňou pracujú. Stránka pravidiel tímu môže byť jedným z nich.
## Čo ďalej

Pravidlá ukážte tímu na porade a z toho, na čo sa kolegovia pýtajú, nechajte AI
stránku doplniť. Ako na to, ukazuje karta
[ukažte tímu AI postup](card:team-adoption-cycle). Ďalšie pokyny pre AI v
zdieľanej zložke, napríklad ako písať odpovede zákazníkom, pridáte do `AGENTS.md`.
Ako na to, ukazuje [samostatná karta](card:agents-md).
## Zákon EÚ o umelej inteligencii

**Čo to je:** Európske nariadenie o umelej inteligencii. Rozlišuje rôzne úlohy, spôsoby použitia a úrovne rizika a ukladá konkrétne povinnosti poskytovateľom a subjektom, ktoré AI zavádzajú alebo používajú v profesionálnej praxi.

**Čo to nie je:** Nie je to všeobecný zákaz AI ani jedno pravidlo platné rovnako pre každý nástroj a úlohu. Samotná informácia, že niečo používa AI, ešte neurčuje právnu kategóriu ani konkrétnu povinnosť.

**Prečo to študent potrebuje:** Pomáha rozpoznať, ktorá praktická situácia vyžaduje ďalšiu kontrolu a kam v knižnici pokračovať.

| Vaša situácia | Pokračujte tu |
|---|---|
| AI ovplyvňuje rozhodnutie o konkrétnej osobe | [Pravidlá AI pre tím](card:pravidla-pro-tym) |
| Rozhodujete o použití AI za organizáciu, klienta alebo vlastnú profesionálnu prax | [Pravidlá AI pre tím](card:pravidla-pro-tym) |
| V podklade sú údaje o ľuďoch | [Čo smiete dať do AI](card:bezpecne-pouzivani); tu sa zároveň uplatnia pravidlá GDPR |

AI gramotnosť ľudí, ktorí AI za organizáciu používajú, aj to, čo pri práci s AI vždy rozhoduje človek, rieši karta `pravidla-pro-tym`.

**Zdroj:** [Nariadenie (EÚ) 2024/1689, najmä článok 4 a článok 50](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces)

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
