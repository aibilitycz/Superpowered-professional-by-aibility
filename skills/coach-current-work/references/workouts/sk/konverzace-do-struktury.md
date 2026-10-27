# Spracujte prepis stretnutia: rozhodnutia a úlohy k projektu

AI z prepisu stretnutia uloží k projektu krátky zápis s rozhodnutiami a úlohami a ďalšie stretnutia spracuje rovnako.

## Spracujte prepis stretnutia: rozhodnutia a úlohy k projektu

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s prepisom jedného stretnutia.
## Na čo sa hodí

V stredu ste mali hodinovú poradu k novému cenníku s financiami a
marketingom a po nej máte prepis na dvadsať strán. V piatok sa vás kolega z
obchodu pýta, akú najvyššiu zľavu môže veľkým zákazníkom ponúknuť, a vy si
nie ste istí, či 8 % zaznelo ako dohoda, alebo len ako návrh.

Krátky zápis s rozhodnutiami a úlohami nájdete vy, kolega aj nový chat s AI
v priečinku projektu za minútu a presné slová zostanú v prepise hneď vedľa.
## Čo si pripraviť

- priečinok projektu, ku ktorému stretnutie patrí,
- prepis jedného stretnutia z posledných dní ako súbor alebo text,
- AI v [režime Cowork alebo Code](glossary:workmode), alebo projekt v AI, ktorú používate.
## Ako na to

1. Otvorte AI v režime Cowork alebo Code v priečinku projektu, vložte prompt a
   pridajte prepis. AI uloží prepis do `prepisy`, zápis do `schuzky.md` a
   pravidlo do `AGENTS.md`.
2. Pri bode, na ktorom najviac záleží, napíšte „Ukáž mi presné znenie z
   prepisu.“ Keď ide o peniaze alebo termín, nájdite ten čas v prepise
   (Ctrl+F) a prečítajte si ho sami.
3. V novom chate v tom istom priečinku sa spýtajte „Kto má čo urobiť a do kedy?“
   AI by mala odpovedať podľa zápisu.

Návrhy, ktoré nikto neprijal, do zápisu nepatria.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code, otvorenej vo vašom priečinku:

Spracuj prepis stretnutia k tomuto projektu. Prepis ti prikladám, alebo ti napíšem, kde v počítači leží. Keď v tomto prostredí nemôžeš ukladať súbory do priečinka projektu, povedz mi to hneď, aby som mohol prepnúť do Cowork alebo Code.

Prepis ulož bez zmeny do podsložky prepisy v priečinku projektu a pomenuj ho dátumom a témou stretnutia, napríklad 2026-10-07-porada-cennik. Súbor tam presuň tak, ako je, aj s jeho príponou, napríklad .docx. Keď som ti prepis vložil ako text, ulož ho ako textový súbor a nič v ňom nezkracuj ani neprepíš, aby v ňom zostali časy a mená pri prejavoch.

Potom z prepisu napíš krátky zápis a pripíš ho hore do súboru schuzky.md v priečinku projektu. Keď súbor neexistuje, založ ho. Zápis má tento tvar:

### RRRR-MM-DD: téma stretnutia
Kto bol: mená.
Rozhodnutia:
- čo sa rozhodlo a od kedy to platí.
Úlohy:
- kto, čo a do kedy.
Otvorené otázky:
- čo zostalo nerozhodnuté a kto to zistí.
Prepis: odkaz na súbor v prepisy.

Do rozhodnutí a úloh daj len to, na čom sa ľudia na stretnutí dohodli. Návrhy, ktoré nikto neprijal, vynechaj. Keď pri úlohe nezaznelo meno alebo termín, napíš „neuvedené“. Ku každému rozhodnutiu a úlohe pripíš do zátvorky čas alebo miesto v prepise, kde zaznelo.

Nakoniec pridaj do súboru AGENTS.md v priečinku projektu pravidlo: „Keď dostaneš prepis stretnutia, ulož ho bez zmeny do prepisy a hore do schuzky.md pripíš zápis v rovnakom tvare ako predchádzajúci: len to, na čom sa ľudia dohodli, pri každom bode čas v prepise a chýbajúci údaj ako ‚neuvedené‘. Na otázky k úlohám a rozhodnutiam odpovedaj podľa schuzky.md.“ Keď AGENTS.md neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka.

Na konci mi ukáž zápis a napíš, kam si čo uložil.

## Vo vašom nástroji

### Microsoft Copilot
Prepis z Teams je na karte Recap v chate stretnutia. K projektu
zápis uloží Cowork vedľa prepínača Chat, keď ho správca zapol: priečinok z
OneDrivu pripojíte cez Add attachments a na koniec promptu pripíšete
„Zápisy ved v dokumente Word.“ Bez Cowork prompt nepoužijete: založte
notebook (Notebooks › New notebook) a vetu z bloku Keď nemáte Cowork ani
Code dajte do More options › Instructions.

### ChatGPT
So priečinkom pracuje Codex: v aplikácii ChatGPT pre počítač prepnete na Codex,
zvolíte otvorenie priečinka (open a folder) a vložíte prompt; naplánované úlohy
nájdete pod Scheduled. Bez Codexu je projektom projekt v ChatGPT: New
project, prepisy cez Add source, inštrukcie v ••• › Project settings a kolegov
pozvete cez Share.

### Claude
Cowork je v aplikácii Claude pre počítač v platených tarifách: priečinok
vyberiete pri zadávaní úlohy a odkaz na `AGENTS.md` si AI zapíše do inštrukcií
priečinka. Naplánované úlohy sú v ľavom paneli pod Scheduled a bežia len pri
zapnutom počítači. Bez Cowork je projektom projekt v Claude: New Project,
prepisy cez +, inštrukcie v Set project instructions a kolegov pozvete cez
Share project.

### Gemini
Prepis z Google Meet je ako dokument na Disku organizátora v priečinku Meet
Recordings; Take notes for me zatiaľ po slovensky nevie. So priečinkom v počítači
Gemini nepracuje, projektom je Gem: Gems › New Gem, prepisy cez Knowledge ›
Add from Drive. Zápis uložíte cez Share & export › Export to Docs a Gem s
kolegov zdieľate cez Share.
## Keď nemáte Cowork ani Code

Bez režimu Cowork alebo Code spracujete stretnutia v projekte vo vašom nástroji:
prepisy do neho pridáte a jeho inštrukcie platia pre každý chat v ňom. Do
inštrukcií projektu napíšte:

```text
Z každého prepisu napíš zápis: rozhodnutia, úlohy s menom a termínom a otvorené otázky. Len to, na čom sa ľudia dohodli, pri každom bode čas v prepise.
```

Po každom stretnutí pridajte prepis do projektu a napíšte „Urob zápis z
nového prepisu“. Na otázku „Kto má čo urobiť?“ potom AI odpovie podľa prepisov.
Kde projekt nájdete, ukazuje blok Vo vašom nástroji, a ako
[přepnúť do Cowork alebo Code](card:when-chat-is-not-enough), samostatná
karta.
## Čo je prepis stretnutia

Prepis je slovo od slova zapísaný text stretnutia, zvyčajne s časom a menom pri
každom prejave. Z hodinovej porady vyjde na desiatky strán. Urobí vám ho
nástroj, v ktorom stretnutie nahrávate. Kde ho nájdete v Teams a v Google
Meet, je v bloku „Vo vašom nástroji“. Pri ďalších nástrojoch:

- **Zoom:** nájdete ho pri zázname v cloude ako súbor s titulkami `.vtt`,
  ktorý AI prečíta ako text. Keď bude hotový, príde vám e-mail.
- **Plaud**, nahrávacie zariadenie do vrecka: v aplikácii otvoríte nahrávku a
  ikonou vpravo hore ju exportujete ako prepis v texte alebo vo Worde.
- **tl;dv**, nahrávač online stretnutí: na karte prepisu ho skopírujete
  tlačidlom pre kopírovanie a vložíte AI do chatu.

`schuzky.md` je obyčajný textový súbor v priečinku projektu so zápismi zo
všetkých stretnutí, najnovší hore. Prípona `.md` znamená zápis v
[Markdowne](glossary:markdown), v ktorom mriežky `###` na začiatku riadku
označujú nadpis. V podsložke `prepisy` sú celé prepisy, ku každému stretnutiu
jeden súbor.

`AGENTS.md` je súbor s pravidlami pre AI v tom istom priečinku. AI v režime
Cowork alebo Code si ho prečíta na začiatku každej práce, a kde to nástroj
potrebuje nastaviť, zariadi to AI podľa promptu. Po ďalšom stretnutí potom stačí
pridať prepis do chatu v priečinku projektu a napísať „Spracuj stretnutie podľa
`AGENTS.md`“.
## Nech sa stretnutia spracujú samy

Keď stretnutia nahrávate často, stačí prepis stiahnuť a zvyšok urobí
naplánovaná úloha, ktorú AI spustí každý pracovný deň popoludní. Nájde
nové prepisy a každý spracuje pri správnom projekte podľa pravidla v
`AGENTS.md`. Zadanie vložte do AI v režime Cowork alebo Code a požiadajte ju,
aby z neho naplánovanú úlohu založila; ktoré nástroje to vedia, nájdete v bloku
„Vo vašom nástroji“. Namiesto „Projekty“ napíšte priečinok, v ktorom máte projekty:

```text
Každý pracovný deň o 17:00 prejdite Stiahnuté súbory a nájdite v nich prepisy stretnutí. Pri každom spoznajte podľa názvu a obsahu, ku ktorému projektu v priečinku Projekty patrí. Keď už v súbore schuzky.md toho projektu je zápis k danému stretnutiu, prepis preskoč. Ostatné presuň do podsložky prepisy toho projektu a spracuj podľa pravidla v jeho AGENTS.md. Keď nevieš, kam prepis patrí, nechaj ho na mieste. Na konci mi napíš, ktoré stretnutia si spracoval a pri ktorých prepisoch nevieš, kam patria.
```

Úloha pracuje so súbormi vo vašom počítači, takže pobehne, len keď je
počítač zapnutý a aplikácia otvorená.
## Príklad

Eva koordinuje zavedenie nového cenníka pre veľkoobchodných zákazníkov. V
stredu 7. 10. 2026 má online poradu s Martinom z financií a Petrou z
marketingu. Po porade stiahne prepis, otvorí AI v priečinku `novy-cennik`,
vloží prompt a pretiahne prepis do okna. AI ho uloží ako
`prepisy/2026-10-07-porada-cennik.docx` a do `schuzky.md` pripíše:

```text
### 2026-10-07: Porada k novému cenníku
Kto bol: Eva, Martin (financie), Petra (marketing).
Rozhodnutia:
- Zľava pre veľkých odberateľov bude najviac 8 %. (12:40)
- Nový cenník platí od 1. 1. 2027, zákazníci ho dostanú 1. 12. (31:05)
Úlohy:
- Martin spočíta marže pre nové ceny do 14. 10. (18:20)
- Petra pripraví leták pre zákazníkov, termín: neuvedené. (35:50)
Otvorené otázky:
- Platí nový cenník aj pre e-shop? Zistí Eva s manažérkou e-shopu.
- Kto pošle cenník obchodníkom? Na porade to nikto neprevzal.
Prepis: prepisy/2026-10-07-porada-cennik.docx
```

Eva napíše „Ukáž mi presné znenie pri zľave.“ AI vypíše vetu z času 12:40,
vo ktorej Martin 8 % odsúhlasil. V piatok sa Eva v novom chate v tom istom
priečinku spýta, kto má čo urobiť a do kedy. Dobrá odpoveď znie: Martin
spočíta marže do 14. 10., pri Petrinom letáku termín chýba. Keď sa AI pýta, o
aké stretnutie ide, pravdepodobne pracuje mimo priečinka projektu.
## Keď sa zaseknete

- **AI tvrdí, že zápis uložila, ale súbor `schuzky.md` v priečinku nie je:**
  pravdepodobne pracujete v bežnom chate, ktorý súbory meniť nevie. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough) a vyberte v ňom priečinok
  projektu.
- **V zápise je rozhodnutie, ktoré ste neurobili:** AI vzala návrh za
  dohodu. Napíšte jej, čo je inak, nech zápis opraví a rovnako prejde ostatné
  body. Ako výsledok overiť proti zdroju, ukazuje
  [Kontrola výsledku](card:kontrola-vysledku).
- **Prepis nemáte:** v Teams ho sťahuje organizátor stretnutia, požiadajte ho
  oň. Keď stretnutie nahraté nebolo, napíšte alebo nadiktujte AI, čo si z
  neho pamätáte, a zápis vznikne rovnako.
- **Nabudúce AI pravidlo nepoužije:** napíšte „Spracuj stretnutie podľa
  `AGENTS.md`“. Keď to nepomôže, skontrolujte, že `AGENTS.md` leží v
  priečinku projektu a pravidlo v ňom je.
## Čo bude hotové

Máte zápis zo stretnutia v `schuzky.md` v priečinku projektu, celý prepis v
podsložke `prepisy` a v `AGENTS.md` pravidlo, podľa ktorého AI rovnako
spracuje každé ďalšie stretnutie. Najdôležitejší bod ste overili podľa
presného znenia z prepisu a v novom chate ste si vyskúšali, že AI zo
zápisu vie, kto má čo urobiť.
## Čo ďalej

Z toho istého prepisu vám AI pripraví aj iný výstup než zápis, napríklad brief pre
ďalšiu poradu alebo odpoveď klientovi. Rovnako spracuje aj dlhé vlákno
komentárov alebo e-mailov: namiesto prepisu jej dáte vlákno.
Pre stretnutia pri viacerých projektoch si nechajte z postupu urobiť
[návod, ktorý AI použije znova](card:create-skill-from-proven-process).
Keď majú zápisy dostávať aj kolegovia, pokračujte
[naplánovanou úlohou](card:recurring-ai-task).
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
