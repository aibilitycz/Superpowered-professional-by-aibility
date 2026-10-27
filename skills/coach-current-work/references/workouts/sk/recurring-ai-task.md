# Nastavte si naplánovanú úlohu: AI pracuje sama v pravidelný čas

Prehľad, ktorý každý týždeň zostavujete ručne, vám AI začne pripravovať sama v čase, ktorý určíte.

## Nastavte si naplánovanú úlohu: AI pracuje sama v pravidelný čas

**Obtiažnosť: stredná.**\
**Čas: približne 15 minút** s prehľadom, ktorý robíte pravidelne.
## Na čo sa hodí

Každé pondelok ráno vyberáte z tabuľky zákazky s termínom do dvoch týždňov a
dohľadávate, kde chýbajú podklady. Výsledok posielate vedeniu, zaberie to pol
hodiny a v týždni, keď máte dovolenku, začne porada bez prehľadu.

Stačí raz s AI urobiť prehľad celý a z hotovej práce jej nechať napísať
zadanie; [naplánovaná úloha](glossary:task) ho potom v určený čas zopakuje bez
vás.
## Čo si pripraviť

- jeden prehľad, ktorý robíte pravidelne, a jeho poslednú verziu ako vzor,
- prístup k podkladom v zložke, v pripojenej aplikácii, napríklad v pošte, alebo na
  webe,
- AI, ktorá vie naplánované úlohy; kde ich nájdete, ukazuje blok „Vo vašom
  nástroji“.
## Ako na to

1. Vložte prompt a za jeho posledný riadok napíšte, aký prehľad chcete a odkiaľ
   sú podklady. Pri podkladoch v zložke otvorte AI v režime Cowork alebo Code v
   tej zložke.
2. Napíšte AI, čo v prehľade chýba a čo je nadbytočné: nechajte v ňom len to, podľa
   čoho niečo urobíte. Potom povedzte, kedy sa má úloha spúšťať a kam doručiť
   výsledok.
3. AI úlohu založí, alebo napíše zadanie a povie, kde ho naplánujete. V zozname
   naplánovaných úloh overte, kedy sa prvýkrát spustí; čo potom bude chýbať, AI
   doplní do zadania.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate, a za
posledný riadok napíšte svoj prehľad:

Chcem, aby mi jeden prehľad, ktorý robím pravidelne, chodil sám. Aký prehľad to je a odkiaľ sa berú podklady, píšem na poslednom riadku.

Najprv ho urob celý z dnešných dát. Podklady si nájdi sám v zložke, v ktorej pracuješ, v pripojených aplikáciách alebo na webe. Keď nájdeš moju staršiu verziu prehľadu, drž sa jej tvaru. Na konci prehľadu napíš, z akých zdrojov je. Keď nevieš, kde podklad hľadať, opýtaj sa ma.

Potom počkaj, kým prehľad prejdem, a zapracuj, čo ti poviem. Z celej práce potom napíš zadanie pre naplánovanú úlohu: odkiaľ brať podklady, čo z nich vybrať a ako má prehľad vyzerať. Pridaj pravidlo: keď zdroj chýba alebo sa nenahraje celý, prehľad nerob a napíš mi, čo chýba.

Opýtaj sa ma, kedy sa má úloha spúšťať a kam mi má výsledok doručiť, a ponúkni mi, čo tu ide. Potom naplánovanú úlohu sám založ a napíš mi, kedy sa prvýkrát spustí a kde výsledok nájdem. Keď ju tu založiť nevieš, napíš mi zadanie tak, aby som ho mohol vložiť do nástroja, ktorý to vie, a povedz mi, kam.

Prehľad:

## Vo vašom nástroji

### Microsoft Copilot
Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (prepínač Cowork
hore vedľa Chat) a tabuľku priložte tlačidlom + z OneDrivu. Úlohu založí
sám, keď mu napíšete, kedy sa má spúšťať; nájdete ju aj s výsledkami na stránke
Automations. Beží v cloude, takže notebook môžete zatvoriť. Bez Cowork v Copilot
Chat najeďte na správu so zadaním a zvoľte Schedule this prompt.

### ChatGPT
V ChatGPT AI úlohu založí, keď ju o to v chate požiadate; úlohy aj ich
výsledky sú v ľavom paneli pod Scheduled. Taká úloha berie podklady z
pripojených aplikácií, napríklad zo zdieľaného disku pripojeného v nastavení pod
Plugins, a z webu a beží, aj keď nie ste online. So zložkou v počítači pracuje
Codex v aplikácii ChatGPT pre počítač; jeho úloha potrebuje zapnutý počítač a
bežiacu aplikáciu.

### Claude
V Claude Cowork AI úlohu pripraví a vy ju potvrdíte tlačidlom Schedule;
prehľad je v ľavom paneli pod Scheduled. Úloha s konektormi beží aj pri vypnutom
počítači, úloha so zložkou v počítači len pri zapnutom počítači a otvorenej
aplikácii Claude. S pripojenou poštou vám AI môže výsledok nechať aj ako
koncept e-mailu.

### Gemini
V aplikácii Gemini napíšte @, vyberte Disk alebo Gmail a vložte prompt; pri
tabuľke na Disku pripíšte jej názov. Keď Gemini napíšete, kedy a ako často sa
má úloha spúšťať, naplánuje ju; úlohy sú v ľavom paneli pod Scheduled a
hotový výsledok tam nájdete ako neprečítaný, v mobile vám príde upozornenie.
Naraz môžete mať 10 úloh a s firemným účtom to musí umožňovať vaša edícia
Google Workspace.
## Čo je naplánovaná úloha

Naplánovaná úloha, anglicky scheduled task, je zadanie, ktoré AI spustí sama
v čase, ktorý určíte, napríklad každý pracovný deň o 8:00 alebo raz týždenne.
Keď úloha beží, AI sa nemá koho opýtať, preto musí byť v zadaní všetko, čo
potrebuje. Zadanie si kedykoľvek prečítate a upravíte v zozname naplánovaných
úloh.

Úloha, ktorá berie podklady len z pripojených aplikácií a z webu, prebehne aj
pri vypnutom počítači. Úloha, ktorá pracuje so zložkou vo vašom počítači,
potrebuje v tom čase zapnutý počítač a otvorenú aplikáciu s AI. Najrýchlejšie
preto začnete prehľadom z webu, napríklad noviniek z vášho odboru, pretože nič
nepripájate. Aplikáciu pripojíte v nastavení svojho AI nástroja; vo firemnom
účte to niekedy musí povoliť správca.
## Ďalšie prehľady, ktoré môžu chodiť samy

Keď vám chodí prvý prehľad, ďalší založíte v tom istom chate jednou až
dvoma vetami a AI sa opýta, čo jej chýba. Takto môže chodiť napríklad:

- „Každý pracovný deň o 9:00 a o 15:00 mi napíš, koľko sme minuli za
  reklamy a koľko nás stál jeden nový zákazník. Keď cena za zákazníka
  stúpne o viac než 20 %, daj to do prvého riadku.“
- „Každý pracovný deň o 17:30 prejdí, čo sa dnes v zložke projektu zmenilo,
  a pripíš hore do denníka projektu krátky zápis, čo sa urobilo a
  rozhodlo.“
- „Každé pondelok o 7:30 nájdi na webe novinky z nášho odboru za minulý týždeň
  a zhrň mi päť najdôležitejších s odkazom na zdroj.“

Pri prehľade, ktorý stráži zmeny, napríklad výdavky za reklamy, sa hodí veta „Keď
sa nič nezmenilo, nič neposielaj.“ Prehľad, ktorý chodí aj prázdny, čoskoro
prestaneš otvárať.
## Príklad

Tereza koordinuje zákazky v menšej stavebnej firme a každé pondelok posiela
vedeniu prehľad zákaziek s termínom do dvoch týždňov a s chýbajúcimi podkladmi.
Tabuľku zákaziek má na firemnom OneDrive a k AI má pripojený Microsoft 365,
teda OneDrive aj Outlook. V pondelok 28. 9. 2026 vloží prompt a za posledný
riadok napíše:

```text
Pondelkový prehľad zákaziek pre vedenie z tabuľky Zákazky 2026 na OneDrive: termíny do 14 dní a čo kde chýba.
```

AI do prehľadu zahrnie aj dve uzavreté zákazky. Tereza napíše „len otvorené“ a
AI prehľad opraví. Potom zvolí každé pondelok o 8:30 a výsledok ako koncept
e-mailu pre vedenie. AI úlohu založí, a keďže pracuje len s OneDrivom a
poštou, spustí sa aj pri vypnutom počítači. V pondelok 5. 10. o 8:30 čaká v
konceptoch:

```text
### Zákazky k 5. 10. 2026
Termín do 14 dní:
- Škola Kolín, rekonštrukcia: odovzdanie 12. 10., chýba revízna správa elektro.
- Hala Mladá Boleslav: kolaudácia 16. 10., podklady sú kompletné.
Chýbajú podklady:
- Bytový dom Nymburk: podpísaný protokol o prevzatí fasády.
Zdroj: tabuľka Zákazky 2026 na OneDrive, list Otvorené.
```

Tereza e-mail odošle a do chatu napíše, že pri každej zákazke chce aj meno
stavbyvedúceho. AI to doplní do zadania a od 12. 10. ho prehľad obsahuje.
## Keď sa zaseknete

- **AI odpovie, že úlohy plánovať nevie:** váš nástroj naplánované úlohy nemá,
  alebo ich vo firemnom účte nemáte zapnuté. AI vám podľa promptu napíše hotové
  zadanie; vložte ho do nástroja, ktorý úlohy vie, a o zapnutí prípadne
  požiadajte správcu. Viac v karte
  [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
- **Úloha sa nespustila alebo nenašla súbor:** pracuje so zložkou vo vašom
  počítači a ten bol v tom čase vypnutý, alebo bola zatvorená aplikácia.
  Posuňte spustenie na čas, keď ste pri počítači, alebo dajte podklady na
  zdieľaný disk pripojený k AI.
- **Prehľad má každý týždeň rovnaké čísla:** úloha číta súbor, ktorý ste do
  chatu nahrali, a ten sa sám neobnoví. Dajte tabuľku na zdieľaný disk
  pripojený k AI a napíšte AI, aby zadanie upravila.
- **V prehľade sú staré alebo chýbajúce čísla:** napíšte AI, čo nesedí, nech
  nájde príčinu a opraví zadanie úlohy. Viac v karte [Skontrolujte výstup AI](card:kontrola-vysledku).
## Čo bude hotové

Máte prvý prehľad z aktuálnych dát, ktorý ste prešli a opravili, a
naplánovanú úlohu, ktorá vám ho od ďalšieho termínu pripraví sama. Viete, kedy
sa prvýkrát spustí a kde výsledok nájdete. Čo v ňom po prvom spustení bude
chýbať, doplní AI do zadania.
## Čo ďalej

Keď chcete z prehľadu rovno pripraviť ďalší krok, napríklad podklady na poradu,
pridajte ho do zadania úlohy a celý postup si [uložte ako skill](card:create-skill-from-proven-process).
## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Naplánovaná úloha

**Čo to je:** Práca, ktorú nástroj spustí podľa času alebo udalosti a výsledok doručí bez toho, aby ste oň zakaždým žiadali. Dostupnosť a názov sa líšia podľa nástroja a účtu.

**Čo to nie je:** Skill ani asistent. Tie čakajú, kým ich niekto použije, úloha sa spustí sama.

**Prečo to študent potrebuje:** Pomáha rozlíšiť, kedy stačí uložený postup a kedy je potrebné niečo, čo beží bez vyžiadania. S tým prichádza aj otázka, kto výsledok stráži a čo sa stane, keď sa úloha spustí nad nesprávnymi dátami.

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

## Uložiť na nabudúce

Voliteľná produktová mechanika po vzniku použiteľného výstupu. Nie je samostatnou kartou, nemá vlastné dokončenie a nezvyšuje počet absolvovaných metód.

## Kedy sa ponúkne
- človek označil výstup ako použiteľný,
- počas práce vznikla opravená inštrukcia, štýl, rozhodovací strom, handoff alebo iný opakovateľný prvok,
- rovnaký typ práce sa pravdepodobne vráti.

Mechanika sa nezobrazí pri jednorazovom výsledku bez prenositeľnej časti alebo tam, kde bezpečné uloženie nie je jasné.

## Čo človek uvidí
Krátku voľbu **Uložiť na nabudúce** vedľa spoločného check-inu. Po otvorení AI sama navrhne:

- čo z výsledku platí opakovane,
- čo sa bude zakaždým meniť,
- čo má človek pri ďalšom použití skontrolovať.

Človek návrh iba potvrdí alebo opraví. Mechanika nevytvára ďalší povinný formulár.

## Čo vytvorí AI
Najmenší znovupoužiteľný výstup, ktorý zodpovedá skutočnej práci:

- krátku osobnú preferenciu,
- inštrukciu alebo prompt,
- záznam v Markdown alebo second brain,
- aktualizáciu projektu alebo asistenta,
- podklad pre skill,
- zmenu existujúceho workflow.

Ak už vhodný artefakt existuje, AI aktualizuje jeho aktuálnu verziu namiesto vytvorenia ďalšej kópie.

## Kam obsah patrí
| Typ obsahu | Výchozí miesto |
|---|---|
| Drobná osobná preferencia bez procesných krokov | pamäť alebo profil, ak je táto funkcia dostupná a vhodná |
| Kanonická inštrukcia, príklad alebo popis postupu | Markdown, dokument alebo osobný second brain |
| Kontext obmedzený na jeden projekt | projektové inštrukcie a súbory |
| Opakovaná rola so stálym kontextom | asistent |
| Stabilná procedúra s pravidlami, príkladmi a šablónami | skill |
| Niekoľko naväzujúcich krokov | workflow; pri voľbe krokov a akciách prípadne agentná vetva |

Pamäť nie je kanonickým úložiskom verzovaného postupu. Môže uchovať preferenciu alebo odkaz na aktuálny zdroj.

## Keď cieľová forma nie je jasná
Mechanika vytvorí stručný handoff do karty [Založte si projekt vo svojom AI nástroji](card:asistent). Nevyberá formu bez človeka a nenahrádza samostatnú skill kartu.

## Bezpečnosť a zdieľanie
- Mechanika používa známe schválené úložiská a firemné pravidlá.
- Údaje konkrétneho prípadu oddelí od stabilnej časti.
- Bez oprávnení nič nezapisuje do zdieľaného systému ani nemení prístupy.
- Tímové zdieľanie začína až po opakovanom použití, určení vlastníka a overení ďalším človekom.

## Evidencia
Do check-inu sa môže pridať informácia, že vznikol alebo sa zmenil znovupoužiteľný artefakt. Nie je to samostatné splnenie karty.

## Prvé podporované karty
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
