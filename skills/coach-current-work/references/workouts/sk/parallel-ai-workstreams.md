# Rozdeľte prácu do paralelných vlákien: AI robí všetky časti naraz

Väčšiu prácu máte hotovú skôr, pretože ju AI rozdelí na časti a každú spustí naraz vo vlastnom vlákne.

## Rozdeľte prácu do paralelných vlákien: AI robí všetky časti naraz

**Náročnosť: stredná.**\
**Čas: približne 15 minút** s väčšou prácou, vlákna potom bežia samostatne.
## Na čo sa hodí

Vo štvrtok ukazujete vedeniu štvrťročný prehľad: čísla z exportu, sťažnosti
zákazníkov a novinky u konkurencie. Jedna AI by časti robila po jednom,
pritom žiadna nečaká na inú a môžu bežať naraz.

Pomôžu [paralelné vlákna](glossary:parallel-ai-workstreams): každý kus
získa vlastné vlákno, teda samostatný chat so svojím zadaním, a všetky bežia
naraz. Na konci prvé vlákno, koordinátor, výsledky porovná a pripraví vám
body na rozhodnutie.
## Čo si pripraviť

- jednu väčšiu prácu, ktorá má aspoň dva kusy, ktoré na seba nečakajú,
- podklady k nej v jednej zložke,
- AI v režime Cowork alebo Code; kde ho nájdete, ukazuje blok „Vo vašom
  nástroji“.
## Ako na to

1. Nechajte AI prácu rozdeliť na kusy, ktoré na seba nečakajú. Otvorte AI v
   zložke s podkladmi, vložte prompt a napíšte, čo treba. Rozdelenie potvrďte.
2. Spustite všetky vlákna naraz. AI ich spustí sama, alebo vám ku každému kusu
   napíše vetu; tú vložte do nového vlákna v rovnakej zložke. Keď sa vlákno
   spýta, odpovedzte mu.
3. Rozhodnite otvorené body z porovnania. Keď vlákna skončia, napíšte
   „hotovo“ do prvého vlákna. AI ukáže rozpory a po vašom rozhodnutí
   výsledky spojí.

Každé vlákno píše len do svojej zložky.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorené vo vašej zložke, a za posledný riadok napíšte, čo treba urobiť:

Pomôž mi urobiť väčšiu prácu rýchlejšie: rozdeľ ju na kusy, ktoré pobehnú naraz, každý vo vlastnom vlákne. Ty budeš koordinátor. Práca je na poslednom riadku.

Prejdi podklady v zložke a navrhni dva až päť kusov. Ku každému jednou vetou napíš, prečo môže skončiť, aj keď nepozná výsledok ostatných. Čo na inom kuse závisí, nechaj s ním v jednom kuse, alebo to daj až na koniec ku spojeniu. Ukáž mi rozdelenie a počkaj, kým ho potvrdím alebo opravím.

Pre každý potvrdený kus založ zložku vlakna/01-nazov, vlakna/02-nazov a tak ďalej, a v nej súbor zadani.md. Zadanie má: cieľ kusu, z ktorých podkladov vychádza, dve až tri podmienky, podľa ktorých spoznám, že je hotovo, a pokyn „Píš len do tejto zložky, nič iné nemen. Na konci sem ulož vysledok.md: čo je hotové, čo nesedí a na čo sa pýtaš.“ Do vlakna/srovnani.md zapíš zoznam kusov a ich stav.

Do súboru AGENTS.md v zložke ulož pravidlo: „Keď dostaneš prácu, ktorá má aspoň dva kusy, ktoré na seba nečakajú, navrhni rozdelenie do paralelných vlákien. Každé vlákno má vlastné zadanie a vlastnú zložku; do jednej zložky nikdy nepíšu dve vlákna. Keď kusy spúšťaš ako podagentov, spusti najviac desať naraz a pred ďalšou várkou mi napíš krátky stav, čo sa vrátilo. Na konci výsledky porovnaj vedľa seba a otvorené body mi daj na rozhodnutie.“ Ak AGENTS.md neexistuje, založ ho. Ak ho tento nástroj sám nečíta, nastav, aby si ho prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky. Ak k zložke nemáš prístup, ulož si pravidlo do pamäti; ak to nevieš, povedz mi presne, kam ho vložiť.

Potom kusy spusti naraz ako samostatné vlákna, ktoré uvidím a do ktorých môžem písať. Ak vieš vlákno spustiť alebo ponúknuť sám, urob to. Inak mi ku každému kusu napíš jednu vetu, ktorú vložím do nového vlákna v rovnakej zložke, napríklad „Urob zadanie zo súboru vlakna/01-cisla/zadani.md.“ Ak so zložkou pracovať nevieš, napíš mi namiesto vety celé zadanie a výsledky ti vložím späť.

Keď napíšem „hotovo“, prečítaj vedľa seba všetky súbory vysledok.md a výstupy, alebo výsledky, ktoré ti vložím. Do vlakna/srovnani.md zapíš ku každému kusu, či splnil podmienky, kde si výsledky odporujú alebo kde niečo chýba, a otvorené body, o ktorých rozhodujem ja. Rozpory neslučuj do kompromisu, ukáž mi obe strany. Po mojom rozhodnutí spoj výstupy do jedného výsledku vo formáte, ktorý potrebujem (napríklad Word alebo prezentácia), a ulož ho do zložky; ak formát nepoviem, spýtaj sa.

Práca:

## Vo vašom nástroji

### Microsoft Copilot
Copilot Cowork zapnete na `copilot.cloud.microsoft` prepínačom hore vedľa
Chatu a podklady priložíte tlačidlom +. Nová úloha nevidí, čo napísala iná,
preto pod svoj úkol pripíšte „Zadanie mi napíš celé“. Každé vložte do novej
úlohy s podkladmi, ktoré pomenúva; výsledky potom vložte s „hotovo“ do prvej
úlohy, ktorú znova otvoríte pod Tasks. Pravidlo si uloží ako skill, teda
uložený návod.

### ChatGPT
V aplikácii ChatGPT pre počítač prepnite na Codex a zvoľte otvorenie zložky
(open a folder); keď Codex nevidíte, požiadajte správcu, aby ho zapol. Každé
vlákno spustite ako nový chat v rovnakom projekte, teda otvorenej zložke;
chaty nájdete pod Chats a do bežiaceho môžete písať. Pri kóde zvoľte pod poľom
pre správu Worktree.

### Claude
V aplikácii Claude pre počítač spustite každý kus ako nový úkol v Cowork, alebo
ako novú reláciu v Claude Code (New session); Claude Code vám nové relácie aj
sám ponúkne a stačí kliknúť. Bežia vedľa seba v bočnom paneli a do
každého vlákna môžete písať. Pri kóde zvoľte pri štarte relácie worktree, nech má
vlastnú kópiu repozitára.

### Gemini
Gemini so zložkou v počítači nepracuje a agent, ktorý úlohu dokončí sám, je
len pre osobné účty mimo EÚ. Zadania vlákien vám preto napíše do odpovede:
každé vložte do nového chatu, podklady priložte cez Add from Drive a hotové
výsledky vložte späť do prvého chatu na porovnanie. Keď to robíte často,
požiadajte IT o nástroj s režimom Code.
## Čo sú paralelné vlákna

Vlákno je samostatný chat alebo úloha s vlastným zadaním, ktoré vidíte v
bočnom paneli nástroja a môžete do neho kedykoľvek písať. Paralelné vlákna
bežia súbežne, každé na jednom kuse práce. Prvé vlákno, v ktorom ste
prácu zadali, je koordinátor: rozdelí ju, napíše zadanie a na konci výsledky
porovná.

Rozdelenie funguje, len keď kusy na seba nečakajú. Pred spustením kusa sa spýtajte:
dokončí ho vlákno, aj keď nepozná výsledok ostatných? Ak nie, patrí k
tomu kusu, na ktorom závisí. Druhé pravidlo je jeden zapisovateľ na zložku:
dve vlákna, ktoré upravujú ten istý súbor, si navzájom prepíšu prácu, preto
má každé vlastnú zložku. Zadanie a výsledky vlákien sú textové súbory `.md`,
ktoré číta hlavne AI; hotový výsledok vám uloží vo formáte, ktorý potrebujete.

Pri veľkej práci s mnohými kusmi môže koordinátor kusy spúšťať sám ako
[podagentov](glossary:subagent), teda pomocníkov na pozadí, ktorých výsledky
prevezme a otázky vám odovzdá. Pravidlo, ktoré prompt uloží do `AGENTS.md`,
textového súboru s pravidlami pre AI vo vašej zložke, im dá strop desať
naraz a pred ďalšou várkou krátky stav, aby ste vedeli, čo sa vrátilo.
## Príklad

Jana je manažérka zákazníckej starostlivosti v e-shope s nábytkom. V utorok 13. 10. 2026
ráno dostane za úlohu pripraviť na štvrtkovú poradu vedenia prehľad za tretí
štvrťrok. V zložke Prehľad Q3 má export 2 300 ticketov za štvrťrok aj
s textami sťažností a odkazmi na weby troch konkurentov. Vloží prompt a za posledný
riadok napíše:

```text
Prehľad zákazníckej starostlivosti za Q3 pre štvrtkovú poradu vedenia: čísla z exportu ticketov, päť najčastejších sťažností z ticketov a čo za štvrťrok zmenili traja konkurenti.
```

AI navrhne tri kusy (čísla, sťažnosti, konkurencia) a ku každému napíše, prečo
nečaká na ostatné. Jana rozdelenie potvrdí a spustí tri vlákna naraz. Vlákno
so sťažnosťami sa po desiatich minútach spýta, či počítať reklamácie
poškodeného tovaru ako sťažnosti. Jana odpovie „áno, zvlášť“ a za 40 minút
sú všetky tri hotové.

Koordinátor v porovnaní nájde jeden rozpor: podľa čísel klesla doba odpovede
z 14 na 6 hodín, ale druhá najčastejšia sťažnosť je pomalá odpoveď. Väčšina
tých sťažností je z júla, keď zmena ešte neplatila. Jana rozhodne ukázať
dobu odpovede aj sťažnosti po mesiacoch a AI spojí kusy do dokumentu
Word `prehled-q3.docx`.
Prehľad je hotový v utorok pred poludním a Jana má stredu na prípravu porady.
## Keď sa zaseknete

- **Kus čaká na výsledok iného:** napíšte do prvého vlákna, nech ho spojí s
  kusom, na ktorom závisí, alebo ho nechá na koniec ku spojeniu.
- **Dve vlákna upravili ten istý súbor:** v zadaní chýba vlastná zložka.
  Požiadajte prvé vlákno, nech zadanie opraví, a kus spustite znova.
- **AI tvrdí, že súbory v zložke nevidí:** pracujete v bežnom chate.
  Prepnite do [Cowork alebo Code](card:when-chat-is-not-enough) podľa bloku
  „Vo vašom nástroji“.
- **Výsledky si odporujú:** nechajte rozpor v porovnaní a rozhodnite ho sami.
  Ak chcete prejsť celý výsledok, pomôže
  [kontrola výstupu AI](card:kontrola-vysledku).
## Čo bude hotové

Máte hotovú väčšiu prácu, ktorej kusy bežali naraz, každý vo vlastnom
vlákne a zložke, a porovnanie s rozporami a rozhodnutiami, ktoré ste urobili. V
`AGENTS.md`, prípadne v inštrukciách zložky alebo pamäti AI, je pravidlo,
podľa ktorého AI nabudúce podobnú prácu rozdelí sama.
## Čo ďalej

Keď sa vám rozdelenie osvedčí a práca sa opakuje, napríklad každé štvrťrok,
uložte ho ako [skill](card:create-skill-from-proven-process).
## Paralelné vlákna

**Čo to je:** Dve alebo viac častí jedného projektu, ktoré dostanú vlastné zadanie a môžu v samostatných AI vláknach či nástrojoch pracovať súčasne. Ich výsledky sa nakoniec riadene spoja.

**Čo to nie je:** Nie je to niekoľko rolí komentujúcich rovnaké rozhodnutie ani séria krokov, v ktorej druhý čaká na výsledok prvého.

**Prečo to študent potrebuje:** Pomáha spoznať, kedy paralelná práca skutočne zvýši kapacitu a kedy len pridá zložitejšiu koordináciu.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Podagent

**Čo to je:** Samostatný agent, ktorého koordinujúci agent vytvorí na konkrétnu čiastkovú úlohu. Dostane vlastné zadanie a kontext, pracuje oddelene a výsledok vráti koordinátorovi.

**Čo to nie je:** Nie je to len odbočka jednej konverzácie. Fork vytvára novú vetvu pre človeka; podagenta môže koordinátor sám spustiť, riadiť a zahrnúť do spoločného výsledku.

**Prečo to študent potrebuje:** Pomáha rozlíšiť ručnú paralelnú prácu vo viacerých chatoch od agentnej zostavy, v ktorej delegovanie a sledovanie čiastkových úloh preberá koordinátor.

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
