# Vytvorte si skill: návod, ktorý si AI pamätá

Z úlohy, ktorú ste s AI raz dokončili, AI napíše skill a ďalší cyklus zadáte jednou vetou.

## Vytvorte si skill: návod, ktorý si AI pamätá

**Náročnosť: stredná.**\
**Čas: približne 15 minút** s chatom, kde ste úlohu dokončili.
## Na čo sa hodí

Každý piatok posielate vedeniu stav svojich troch projektov. AI vám s tým pomáha, ale
vždy jej znova vysvetľujete, z akých podkladov ho zostaviť, že hore majú byť
tri vety, pod nimi tabuľka termínov a riziká až na konci. Keď na niečo
zabudnete, stav vyzerá inak ako minulý týždeň a riaditeľ sa pýta, čo sa
zmenilo.

[Skill](glossary:skill) je návod pre AI na jeden druh práce, ktorý AI napíše
z hotového chatu a nabudúce použije sama, takže nič znova nevysvetľujete.
## Čo si pripraviť

- chat, v ktorom ste s AI dokončili úlohu, ktorú robíte pravidelne a
  rovnako,
- podklady k ďalšej úlohe rovnakého druhu; na nich skill hneď použijete,
- AI, ktorá vie ukladať skilly, napríklad v [režime](glossary:workmode) Cowork
  alebo Code.
## Ako na to

1. Otvorte chat, v ktorom ste úlohu s AI dokončili. Ak taký nemáte,
   spravte s AI úlohu, ktorú máte pred sebou, a opravujte ju, kým výsledok
   nesedí.
2. Na koniec chatu vložte prompt. AI z chatu napíše skill, uloží ho a povie
   vám, kde ho nájdete; keď potrebuje vaše kliknutie, povie kam.
3. Otvorte nový chat, priložte podklady k ďalšej úlohe a zadajte ju jednou
   vetou, napríklad „Napíš stav projektu Sťahovanie skladu“. AI by mala skill
   použiť sama.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Túto úlohu budem robiť znova. Napíš z toho, čo sme v tomto chate urobili, skill, aby stačilo nabudúce zadať ju jednou vetou a nič nevysvetľovať.

Prejdi celý chat a vezmi z neho, čo fungovalo: kroky, podklady, ktoré si potreboval, a podobu výsledku, ktorá mi nakoniec sedela. Moje opravy počas práce zapracuj rovno do krokov. Čo sa nabudúce zmení, napríklad názov projektu, dátum alebo čísla, do skillu nepis; zapíš len, že si to máš vyžiadať.

Skill má tieto časti:
- názov podľa práce, napríklad Stav projektu pre vedenie,
- kedy sa použije: vety, ktorými takúto úlohu obvykle zadávam,
- čo potrebuješ dostať a na čo sa opýtať, keď to chýba,
- kroky,
- ako vyzerá hotový výsledok.

Na koniec skillu pridaj pravidlo: keď výsledok opravím, ponúkni, že skill podľa opravy upravíš.

Ulož skill tak, aby ho tento nástroj pri ďalšej práci našiel a použil sám. Keď na uloženie potrebuješ moje kliknutie, povedz mi presne kam. Ak tento nástroj skilly ukladať nevie, povedz mi to rovno. Nakoniec mi napíš, kde skill nájdem, a vetu, ktorou úlohu nabudúce zadám.

## Vo vašom nástroji

### Microsoft Copilot
Skilly má Cowork vedľa prepínača Chat; keď tam nie je, požiadajte oňho
správcu IT. V Cowork skill vytvoríte v Customize, Skills (Add, Create new),
prípadne oňho AI požiadajte v úlohe. Bez Cowork si v Copilot Chate nechajte skill
napísať ako text a vložte ho do nového agenta (New agent, Skip to configure,
Instructions); v kroku 3 potom úlohu zadáte v tomto agentovi.

### ChatGPT
Skilly majú firemné tarify Business a Enterprise v bočnom paneli pod
Plugins, na karte Skills, a vo firme ich zapína správca. Keď ChatGPT o skill
v chate požiadate, napíše ho a ponúkne inštaláciu (Install). Ak skilly
zapnuté nemáte, nechajte si skill napísať ako text, vložte ho do inštrukcií
projektu (New project, Project settings) a v kroku 3 zadajte úlohu v tom
projekte.

### Claude
Skilly vie Claude vo všetkých tarifách, v bežnom chate aj v Cowork, a nájdete ich
v Customize, Skills. Potrebujú zapnuté Code execution and file creation v
Settings, Capabilities; vo firemnom účte ich zapína správca. Claude počas
práce ukáže názov skillu, ktorý používa.

### Gemini
Ak v ponuke Customize vidíte Skills, vytvoríte skill tam (Create alebo
Upload); firemným účtom ich Google zapína postupne. Do tej doby si nechajte od
Gemini skill napísať ako text a uložte ho ako Gem, teda uloženého asistenta
s vlastnými inštrukciami: v Gems, New Gem vložte text do Instructions a
výsledok z minula pridajte do Knowledge. V kroku 3 potom otvorte tento Gem a
úlohu zadáte v ňom.
## Čo je skill

Skill, anglicky dovednosť, je návod pre AI na jeden druh práce: kedy ho
použiť, čo k nemu potrebuje, kroky a ako má vyzerať výsledok. Píše ho AI:
úlohu s ňou raz dotiahnete do konca a ona z toho, čo fungovalo, skill napíše
a uloží. Je to obyčajný textový súbor, ku ktorému AI môže pridať šablónu
alebo vzorový výsledok.

Ktorý skill použiť, AI spozná podľa popisu, kedy sa použije. Preto v ňom sú
vety, ktorými úlohu obvykle zadávate, a preto môžete mať skillov desiatky a AI
si vyberie ten správny. Nástroje, ktoré skilly vedia, väčšinou používajú
rovnaký tvar, takže skill sa dá preniesť aj do iného nástroja.

Skilly vie AI v režime Cowork alebo Code a v niektorých nástrojoch aj bežný
chat; keď ho vaša AI uložiť nevie, prepnite podľa karty [Chat, Cowork alebo
Code](card:when-chat-is-not-enough). Ak AI skill použila, spoznáte to podľa
jeho názvu počas práce (v Cowork v novej úlohe); ak ho nevidíte,
spýtajte sa jej. Výsledok má mať rovnakú podobu ako minule a názov projektu,
dátum alebo čísla si AI vyžiada znova.

Do skillu patrí, čo sa opakuje: postup, podoba výsledku a vaše opravy.
## Nech skilly vznikajú samy

Najlepšie chvíle na skill je koniec práce, ktorá sa podarila. Aby vám tú chvíľu
AI pripomenula sama, nechajte ju uložiť si jedno pravidlo. V Cowork alebo Code,
kde AI pracuje so zložkou vo vašom počítači, ho zapíše do súboru
`AGENTS.md`. To je obyčajný textový súbor s pravidlami pre AI, ktorý si veľa
nástrojov v režime Code číta na začiatku každej práce; kde to nástroj sám
nevie, AI pravidlo uloží do jeho nastavení, alebo vám napíše, kam ho vložiť. V bežnom
chate si AI pravidlo uloží do pamäti. Vložte jej toto:

```text
Ulož si pravidlo pre každú ďalšiu prácu: „Keď spolu dokončíme úlohu, ktorú budem robiť znova, ponúkni mi, že z nej napíšeš skill.“ Keď pracuješ v zložke, zapíš ho do súboru AGENTS.md, a keď súbor neexistuje, založ ho. Zaisti, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky. V bežnom chate si pravidlo ulož do pamäti.
```
## Príklad

Jana koordinuje tri projekty vo stavebnej firme a každý piatok posiela vedeniu
ich stav. V piatok 9. 10. spraví s AI v režime Cowork stav projektu Nový
sklad. Dá jej zápis z porady a tabuľku termínov a dvakrát ju opraví: vedenie
chce hore tri vety a riziká až na konci, nie skryté v texte. Potom vloží
prompt a AI uloží skill:

```text
Stav projektu pre vedenie
- Kedy sa použije: „stav projektu“, „report pre vedenie“, „ako sme na tom s projektom“.
- Čo potrebuješ: názov projektu, posledný zápis z porady a tabuľku termínov. Keď niečo chýba, povedz si o to.
- Kroky: z podkladov vyber, čo sa tento týždeň urobilo, porovnaj termíny s plánom a nájdi, čo sa oneskoruje.
- Výsledok: tri vety hore, pod nimi tabuľka míľnikov s termínom a stavom, na konci riziká a kto ich rieši.
- Keď výsledok opravím, ponúkni, že tento skill podľa opravy upravíš.
```

Ten istý deň popoludní otvorí nový chat, priloží zápis a termíny projektu
Sťahovanie skladu a napíše len „Napíš stav projektu Sťahovanie skladu“. AI počas
práce ukáže, že používa skill Stav projektu pre vedenie, a vráti tri vety,
tabuľku a riziká, bez toho, aby jej Jana čokoľvek vysvetľovala. Tretí projekt má
hotový za päť minút. Do konca mesiaca si rovnako spraví skilly na zápis z porady
a na objednávku materiálu.
## Keď sa zaseknete

- **AI odpovie, že skill uložiť nevie:** vo firemnom účte skilly často
  zapína správca, tak mu napíšte; čo kde zapnúť, ukazuje blok „Vo vašom
  nástroji“. Dočasne prepnite do režimu Cowork alebo Code. Chat sa do neho
  neprenesie, takže tam začnite znova od kroku 1. Viac v karte
  [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
- **AI v novom chate skill nepoužila:** popis, kedy sa skill použije, nesedí
  na slová, ktorými úlohu zadávate. Napíšte AI svoju vetu a požiadajte ju, aby
  podľa nej popis vo skillu upravila. Dočasne napíšte rovno „Použi skill“
  a jeho názov.
- **Skill opisuje jednu konkrétnu úlohu:** názov projektu, dátum alebo čísla z
  minula vo skillu nemajú čo robiť. Požiadajte AI, aby ich zo skillu vyňala a
  nabudúce si ich vyžiadala.
- **Výsledok stále nesedí:** opravte ho v chate a prijmite, keď AI ponúkne
  úpravu skillu. Ak sa rovnaká chyba opakuje, nájdite s AI príčinu podľa karty [Skontrolujte výstup AI](card:kontrola-vysledku).
## Čo bude hotové

Máte skill na úlohu, ktorú robíte pravidelne, a viete, kde ho nájdete. V novom
chate ho AI použila sama a ďalšiu úlohu rovnakého druhu vrátila v rovnakej podobe
ako minule. Keď výsledok opravíte, AI ponúkne, že skill podľa opravy
upravi.
## Čo ďalej

Skill sa sám nespustí, čaká, kým úlohu zadáte. Ak má stav projektov vzniknúť
každý piatok o 12:00 bez vás, nastavte ho ako
[naplánovanú úlohu](card:recurring-ai-task). Ak výsledok jedného skillu
používate ako podklad pre ďalšiu prácu, napríklad zo stavov projektov súhrn pre
celé oddelenie, pridajte druhý krok rovno do skillu.
## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Zručnosť

**Čo to je:** Opakovane použiteľný postup pre určitý typ úlohy. Môže obsahovať inštrukcie, pravidlá, príklady, šablóny a ďalšie potrebné zdroje. Spôsob vytvorenia a spustenia sa líši podľa nástroja.

**Čo to nie je:** Nie je to všeobecná rola asistenta ani jedna vydarená konverzácia uložená bez úprav.

**Prečo to študent potrebuje:** Pomáha preniesť osvedčený postup do stabilnej podoby, ktorú možno konzistentne opakovane používať.

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
