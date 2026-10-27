# Vytvorte si AI-WBS: plán projektu rozdelený medzi ľudí a AI

AI rozdelí plán projektu, pri každom kroku určí, či ho vykoná človek alebo AI, a svoj prvý krok rovno spraví.

## Vytvorte si AI-WBS: plán projektu rozdelený medzi ľudí a AI

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s jedným projektom, ktorý začína.
## Na čo je to dobré

Na porade vám vedenie zverí presťahovanie kancelárie do novej budovy. Sťahovanie je
naplánované na 1. a 2., v kalendári máte zatiaľ jedinú položku „sťahovanie“ a neviete, čo z toho zvládne AI a kedy budete potrebovať kolegov z IT a prevádzky.

Plán, v ktorom pri každom kroku stojí, kto ho vykoná a čo z neho vznikne,
leží v priečinku projektu, takže nový chat aj kolega z neho spoznajú, čo je hotové a čo príde ďalej.
## Čo si pripraviť

- priečinok projektu s podkladmi: zadanie, e-mail od vedenia alebo zápis z porady,
- pár viet o cieli projektu, termíne a ľuďoch, ktorí na ňom pracujú,
- AI v režime Cowork alebo Code, ktorá pracuje priamo so súbormi vo vašom
  priečinku.
## Ako na to

1. Otvorte priečinok projektu v AI v režime Cowork alebo Code (kde ho nájdete,
   ukazuje blok „Vo vašom nástroji“), vložte prompt z AI cvičenia a pod neho
   napíšte cieľ, termín a ľudí na projekte.
2. AI zobrazí plán ako tabuľku a otázky. Odpovedzte, opravte stĺpec „Kto ho
   vykoná“ a napíšte „Ulož to“: AI plán uloží, spraví svoj prvý krok a zapíše
   pravidlo do `AGENTS.md`.
3. Otvorte výsledok prvého kroku a skontrolujte ho. Čo nesedí, napíšte AI
   a ona to opraví v súbore aj v pláne.

Len s bežným chatom poradí časť Keď sa zaseknete.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code, otvorenom vo vašom priečinku:

Vytvor pre tento projekt AI-WBS: plán celého projektu rozdelený medzi ľudí a AI. Ak nemáš prístup k priečinku projektu a nemôžeš do neho sám ukladať súbory, povedz mi to hneď, aby som mohol prepnúť do Cowork alebo Code.

Prejdi podklady v priečinku projektu a moje poznámky pod týmto zadaním. Ak už v priečinku plán projektu je, uprav ho a druhý nezakladaj.

Rozpíš celý projekt od začiatku po dokončenie na päť až desať hlavných krokov. Každý krok končí niečím, čo sa dá ukázať: súbor, zoznam, rozhodnutie alebo objednávka. Neskoršie kroky nevynechávaj, len ich popíš stručnejšie. Zoraď kroky tak, aby čo najskôr vzniklo niečo použiteľné. Plán napíš ako tabuľku s tromi stĺpcami:
- Krok: čo sa urobí.
- Kto ho vykoná: konkrétny človek, alebo AI a meno človeka, ktorý výsledok skontroluje.
- Čo vznikne: konkrétny výsledok kroku.

Všetko, čo sa dá pripraviť z podkladov, daj AI. Rozhodnutia, rokovania s ľuďmi a kroky, pri ktorých sa niečo odosiela, zverejňuje, podpisuje alebo platí, daj človeku. Ak nevieš, kto krok vykoná, napíš otáznik a meno si nevymýšľaj.

Ukáž mi plán a pod neho napíš všetky otázky, na ktoré podklady neodpovedali a ktoré by plán zmenili. Počkám, kým odpoviem a plán opravíš alebo potvrdíš. Potom ho ulož ako plan-projektu.md do hlavného priečinka projektu a hore napíš názov projektu, termín a dnešný dátum. Ak je v priečinku README.md, pridaj do neho riadok s odkazom na plán.

Hneď potom sprav prvý krok, ktorý je v pláne na teba a máš k nemu podklady. Vyber taký, ktorý zvládneš za pár minút. Výsledok ulož do priečinka projektu, do stĺpca Čo vznikne pri tom kroku dopíš názov súboru a slovo hotovo a povedz mi, čo mám skontrolovať.

Nakoniec pridaj do súboru AGENTS.md v priečinku projektu pravidlo: „Pred prácou na projekte si prečítaj plan-projektu.md. Keď je krok z plánu hotový, dopíš do stĺpca Čo vznikne, kde je výsledok, a slovo hotovo.“ Ak AGENTS.md neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka.

Cieľ, termín a kto na projekte pracuje:

## Vo vašom nástroji

### Microsoft Copilot
Cowork je v Copilote vedľa prepínača Chat; ak ho nevidíte, požiadajte IT.
Pracuje so súbormi na OneDrive a SharePointe, tak mu povedzte, kde je projekt
a nech plán uloží ako tabuľku Excel; v Cowork pod Customize, Preferences mu
nechajte „Pred prácou na projekte si prečítaj plán.“ Bez Cowork platí bod „AI
plán do priečinka neuloží“ v časti Keď sa zaseknete, s projektom v Notebooku
(Poznámkové bloky).

### ChatGPT
So priečinkom pracuje Codex v aplikácii ChatGPT pre počítač: prepnete na Codex,
zvolíte open a folder a vyberiete priečinok projektu; programovať nemusíte. Codex
číta `AGENTS.md` sám a naplánovanú úlohu založí na požiadanie. Ak Codex
nevidíte, požiadajte správcu o Allow members to use Codex locally, alebo
postupujte podľa bodu o bežnom chate.

### Claude
V aplikácii Claude pre počítač zvoľte Cowork a v poli pre správu Work in a
folder. Claude Code číta `AGENTS.md` sám, v Cowork si AI podľa promptu zapíše
do inštrukcií priečinka, aby ho čítal. Naplánovanú úlohu založí AI na požiadanie a
prehľad nájdete v ľavom paneli pod Scheduled.

### Gemini
Aplikácia Gemini s pracovným účtom so priečinkom v počítači nepracuje, a tak
postupujte podľa bodu o bežnom chate: namiesto projektu použite robota Gem a
tabuľku s plánom uložte cez Exportovať do Tabuliek. So priečinkom pracuje
Gemini CLI, ak má firma licenciu Gemini Code Assist Standard alebo
Enterprise; `AGENTS.md` číta, len ak ho má v nastavení.
## Čo je AI-WBS

AI-WBS je skratka z anglického AI Work Breakdown Structure. Work Breakdown
Structure, teda rozpad práce na časti, používajú projektoví manažéri už
desiatky rokov. [AI-WBS](glossary:aiwbs) k tomu pri každom kroku pridáva
otázku, či ho vykoná človek alebo AI. Za výsledok každého kroku zodpovedá
človek, aj keď ho pripraví AI, a preto pri krokoch AI stojí aj meno toho, kto
výsledok skontroluje.

Plán je obyčajný textový súbor `plan-projektu.md` v priečinku projektu.
Prípona `.md` znamená zápis v [Markdowne](glossary:markdown), ktorý AI
ľahko číta aj upravuje. Otvorte ho v akomkoľvek textovom editore, a keď ho
chcete poslať kolegom ako tabuľku alebo dokument, stačí o to AI požiadať.
Ak má projekt [README](card:project-start-here), úvodnú stránku projektu,
AI do neho pridá odkaz na plán.

`AGENTS.md` je súbor s pravidlami pre AI v tom istom priečinku. AI si ho prečíta na
začiatku každej práce, takže plán pozná, bez toho aby ste jej ho pripomínali; kde to
nástroj sám nerobí, zapíše si podľa promptu pokyn do svojho nastavenia
priečinka. Ak je priečinok zdieľaný s tímom, oba súbory uvidia všetci členovia a AI
kolegov si prečíta rovnaké pravidlá ako tie vaše.

Bežný chat plán do priečinka neuloží, pretože do priečinkov v počítači nevidí; keď
nič iné nemáte, poradí bod o bežnom chate v časti Keď sa zaseknete. Ak
projekt leží v zdieľanom úložisku v cloude, stačí jeho priečinok
synchronizovaný do počítača.

Keď sa AI spýta, či smie do priečinka ukladať súbory, povoľte jej to.
## Aby plán nezostarol

Pravidlo v `AGENTS.md` pokryje prácu, ktorú s AI robíte v priečinku
projektu. Kolegovia však svoje kroky dokončujú mimo priečinka, napríklad v e-maile
alebo na schôdzke, a ich súbory do neho pribudnú bez AI. Na to stačí
naplánovaná úloha, ktorú AI spustí raz týždenne: označí hotové kroky a
spraví ďalší krok, ktorý je v pláne na ňu. Vložte do AI v režime Cowork alebo
Code toto zadanie a požiadajte ju, aby z neho naplánovala úlohu:

```text
Každé pondelok o 8:00 prejdite plan-projektu.md, priečinok projektu a e-maily a schôdzky z minulého týždňa, ktoré sa projektu týkajú a ku ktorým máte prístup. Pri krokoch, ktoré sú hotové, dopíšte do stĺpca Čo vznikne, kde je výsledok, a slovo hotovo. Potom spravte ďalší krok, ktorý je v pláne na vás a má hotové podklady, a výsledok uložte do priečinka projektu. Na konci mi napíšte, čo je novo hotové, čo ste urobili a ktorý krok čaká na koho.
```

E-maily a schôdzky AI prejde len, ak má pripojenú poštu a kalendár; inak
pracuje len s priečinkom projektu. Keď úloha pracuje s priečinkom vo vašom počítači, pobehne len, keď je počítač
zapnutý a aplikácia otvorená.
## Príklad

Jitka je marketingová koordinátorka vo firme, ktorá vyrába záhradný
nábytok. Jarný katalóg 2027 musí ísť do tlače 15. 1. V priečinku má minuloročný
katalóg, cenník noviniek a export tohtoročných predajov. V pondelok 12. 10.
otvorí priečinok v režime Cowork, vloží prompt a pod neho napíše: „Jarný
katalóg 2027, tlač 15. 1. Pracujem na ňom ja, obchodný riaditeľ Pavel,
fotograf Ondrej a grafická agentúra.“ AI ukáže plán a pod ním sa spýta,
koľko strán má katalóg mať a či sa fotia len novinky:

```text
| Krok | Kto ho vykoná | Čo vznikne |
|---|---|---|
| 1. Výber výrobkov | AI vyberie podľa predajov, kontroluje Jitka | zoznam 60 výrobkov |
| 2. Parametre a ceny | AI, kontroluje Jitka | tabuľka parametrov |
| 3. Fotky noviniek | fotograf Ondrej | 14 fotiek |
| 4. Texty k výrobkom | AI, kontroluje Jitka | texty v súbore |
| 5. Sadzba | grafická agentúra | PDF katalógu |
| 6. Korektúra cien | AI proti cenníku, kontroluje Jitka | zoznam opráv |
| 7. Schválenie a tlač | Jitka, schvaľuje Pavel | objednávka tlače |
```

Jitka odpovie na obe otázky. Pri prvom kroku by AI výrobky sama vybrala a
Jitka by výber len kontrolovala. Krok preto prepíše na „AI pripraví
návrh, vyberajú Jitka a Pavel“: obchod vie, na čo sa zákazníci pýtajú, a v
predajoch to zatiaľ vidieť nie je. Potom napíše „Ulož to“.

AI uloží plán do `plan-projektu.md` a hneď spraví svoj prvý krok: z
exportu predajov a cenníka pripraví `navrh-vyrobku.xlsx` so 60 výrobkami
zoradenými podľa predajov a so všetkými 14 novinkami. Jitka v tabuľke nájde
dve zostavy, ktoré sa už nevyrábajú, napíše to AI a tá ich z návrhu
vynechá. S hotovým návrhom ide Jitka v stredu za Pavlom a výber spolu
uzavrú na jednej schôdzke.
## Keď sa zaseknete

- **AI plán do priečinka neuloží, pretože máte len bežný chat:** prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough). Ak firma povoľuje len bežný chat, priložte podklady k promptu a napíšte
  AI, aby pokračovala v chate a plán napísala priamo do odpovede. Nechajte si od AI dať plán ako súbor, nahrajte ho do
  [projektu](card:asistent) vo vašom nástroji (ako sa volá,
  ukazuje blok „Vo vašom nástroji“) a do pokynov projektu dajte vetu „Pred
  prácou si prečítaj plán projektu. Keď ti napíšem, čo je hotové, napíš mi celý
  plán znova s označenými krokmi.“ Novú verziu plánu potom nahrajte do projektu
  namiesto starej; prvý krok AI spraví v chate v projekte.
- **Plán má tridsať drobných úloh:** napíšte AI, aby ich zlúčila do hlavných
  krokov, z ktorých každý má vlastný výsledok.
- **Plán je všeobecný a sedí na akýkoľvek projekt:** spýtajte sa AI, ktoré
  podklady v priečinku prečítala. Súbor, ktorý leží len v cloude, sa stiahne,
  až ho AI otvorí, takže ak ho neprečítala, nech to pri pripojení na internet
  skúsi znova. Čo v priečinku chýba, napríklad zadanie alebo
  zápis z porady, pridajte a napíšte AI, aby plán podľa toho prepísala. Pri
  veľkom projekte prepnite na [silnejší model](card:modely).
- **Výsledok prvého kroku nesedí:** napíšte AI, čo presne nesedí a z
  akého podkladu to má vziať. Ak ide o čísla alebo tvrdenia, pomôže
  [kontrola výstupu AI](card:kontrola-vysledku).
## Čo bude hotové

Máte v priečinku projektu `plan-projektu.md` s hlavnými krokmi celého
projektu a pri každom kroku viete, kto ho vykoná a čo z neho vznikne. Svoj
prvý krok AI spravila a jeho výsledok leží vedľa plánu. V `AGENTS.md` je
pravidlo, vďaka ktorému si AI plán pred prácou prečíta a hotové kroky v ňom
označí.
## Čo ďalej

Ak je niektorý krok v pláne dlhá práca pre AI, napríklad prejsť šesťdesiat
zmlúv, zadajte ho [agentovi](card:agent-task), ktorý ho dokončí sám. Ak
projekt ešte nemá úvodnú stránku, nechajte AI napísať
[README](card:project-start-here). Čo sa na projekte rozhodlo a urobilo,
zapisujte do [worklogu](card:project-worklog).
## AI-WBS

**Čo to je:** AI Work Breakdown Structure: rozdelenie projektu na výstupy, fázy a úlohy človeka, AI, experta alebo automatizácie.

**Čo to nie je:** Nie je to len bežný zoznam projektových úloh.

**Prečo to tím potrebuje:** Ukazuje, kde presne v projekte pracuje AI a kde zostáva ľudský alebo expertný krok.

## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

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

## Naplánovať blok

Voliteľná produktová mechanika po dokončení karty, ktorej výsledok pokračuje prácou, ktorá sa do pätnástich minút nezmestí. Nie je samostatnou kartou, nemá vlastné dokončenie a nezvyšuje počet absolvovaných metód.

Karty sú pätnásťminútové a končia artefaktom. Časť z nich však artefaktom iba začína: vznikne mapa fázy, zadanie rešerše, návrh zručnosti alebo dve vetvy na integráciu. Človek odchádza s plánom a bez času a k práci sa potom vracia po desiatich minútach medzi stretnutiami, kde sa nedá nič dokončiť.

## Kedy sa ponúkne

- karta skončila použiteľným výsledkom a tento výsledok je zadaním ďalšej práce,
- táto práca má jasný koniec, ktorý sa dá pomenovať jednou vetou,
- pri bežnom rozdelení na krátke úseky by sa rozpadla, pretože každý návrat začína opätovným načítaním kontextu.

Mechanika sa nezobrazí, ak sa práca po karte naozaj zmestí do pätnástich minút, ak ďalší krok čaká na iného človeka alebo na schválenie, ani ak výsledok karty nemá žiadnu nadväzujúcu prácu.

## Čo človek uvidí

Krátku voľbu **Naplánovať blok** vedľa spoločného check-inu. Po otvorení sa AI opýta iba na jednu vec: kedy má naozaj taký čas. Zvyšok navrhne sama z toho, čo v karte vzniklo.

## Čo vytvorí AI

Brief bloku. Zdrojom je výsledok práve dokončenej karty; nové témy si mechanika nevymýšľa. Obsahuje päť položiek:

- **jedna vec**, pomenovaná tak, ako vyzerá hotová,
- **dĺžka** v rozmedzí 60 až 120 minút, s tým, čo sa do nej zmestí a čo nie,
- **čo musí byť pripravené vopred**: prístupy, dáta, podklady, prompt z karty,
- **čo bude na konci hotové**, teda konkrétny výsledok, nie „pokročilo" ani „rozpracované",
- **čo so zvyškom**, ktorý sa do bloku nezmestí, aby zvyšok nezostal visieť bez rozhodnutia.

Ak sa ukáže, že jedna vec sú v skutočnosti tri, AI to povie a ponúkne, ktorá z nich patrí do prvého bloku. Rozdelenie na tri bloky dopredu nenavrhuje.

## Aktívny čas verzus čakanie

Blok s AI má inú štruktúru ako blok samostatnej práce, pretože časť času beží nástroj. Rešerš, agent, dlhšie generovanie alebo spracovanie dát trvajú minúty až desiatky minút a človek pri tom nemusí sedieť.

Brief preto rozlišuje tri druhy času: aktívnu prácu človeka, beh AI a čakanie na niekoho ďalšieho. K behu AI navrhne, čo sa robí medzičasom, a tou činnosťou je najčastejšie príprava ďalšieho kroku toho istého výsledku. Skákanie do nesúvisiacej práce blok rozbije, aj keď vyzerá ako využitý čas.

Ak by čakanie zabralo väčšinu bloku, mechanika to povie rovno: takáto úloha patrí skôr do [Nechajte AI pracovať, keď pri tom nie ste](card:recurring-ai-task).

## Kalendár

Mechanika pripraví text udalosti: názov podľa jednej veci, dĺžku a do popisu to, čo má byť pripravené vopred. Zapísať si ho človek môže sám.

Do kalendára ani do iného zdieľaného systému mechanika nič nezapisuje bez oprávnenia a nikomu neposiela pozvánku.

## Hranica voči kartám

| Čo to nie je | Kde to je |
|---|---|
| Vyhradený čas pre tím, ktorý potrebuje rozhodnutie vedúceho, zrušené stretnutia a mentora po ruke | karta [Dajte tímu blok na jeden skutočný AI projekt](card:ai-sprint) |
| Práca AI v čase, keď pri tom človek nie je | karta [Nechajte AI pracovať, keď pri tom nie ste](card:recurring-ai-task) |
| Rozpad projektu na kroky a roly | karta [Vytvorte AI-WBS pre prvú fázu projektu](card:ai-wbs-project) |

Blok si človek plánuje sám a nepotrebuje naň povolenie od nikoho. Tým sa líši od sprintu, kde je práve toto povolenie podstatnou časťou práce.

## Čo mechanika neobsahuje

Návody na sústredenie, odporúčania k telefónu, notifikáciám a prostrediu. Knižnica učí postupy. Rady tohto druhu by z mechaniky urobili kázanie o práci namiesto prípravy jedného konkrétneho bloku.

## Evidencia

Do check-inu sa môže pridať informácia, že vznikol brief bloku. Nejde o samostatné splnenie karty. Či blok prebehol, mechanika nesleduje.

## Prvé podporované karty

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Ďalšie karty s nadväzujúcou prácou dlhšou ako pätnásť minút, teda `risk-based-prototyping`, `optimize-then-automate`, `praca-s-datami` a `zjednotit-data-z-viac-zdrojov`, sú kandidáti na druhú vlnu. Pripojiť mechaniku na polovicu knižnice hneď na začiatku by z voľby urobilo šum.
