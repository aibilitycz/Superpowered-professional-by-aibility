# Použite Browser control: AI za vás kliká v prehliadači

Webovú úlohu, ktorú každý týždeň klikáte ručne, napríklad stiahnutie výkazu, urobí AI sama v prehliadači.

## Použite Browser control: AI za vás kliká v prehliadači

**Náročnosť: stredná.**\
**Čas: približne 15 minút** s jednou úlohou na webe.
## Na čo sa hodí

Každý piatok popoludní sťahujete zo systému na výkazy práce export a súčty
hodín prepíšete do tabuľky pre vedenie. Projekt a týždeň pritom zakaždým
filtrujete ručne. Nikto iný to nevie, takže keď ste na dovolenke, vedenie
čísel nedostane.

Browser control znamená, že prehliadač ovláda AI: sama otvorí stránku, kliká,
vypĺňa a sťahuje, zatiaľ čo vy robíte inú prácu.
## Čo si pripraviť

- jednu úlohu na webe, ktorú opakujete ručne, napríklad stiahnutie reportu,
- účet na webe, kde sa úloha vykonáva; prihlásite sa do neho sami, keď o to AI
  požiada,
- priečinok s prácou, ku ktorej úloha patrí; AI do neho uloží postup pre ďalšie použitie,
- AI, ktorá ovláda prehliadač; či to vie tá vaša, ukazuje blok „Vo vašom
  nástroji“.
## Ako na to

1. Otvorte AI, ktorá ovláda prehliadač, v priečinku z prípravy a vložte prompt.
   Za riadok „Úloha:“ napíšte, kam má ísť, čo tam urobiť a v akej podobe chcete
   výsledok.
2. Na prihlasovacej stránke sa prihláste sami a napíšte AI, aby pokračovala. Potom
   robte inú prácu, AI sa ozve, keď bude hotová alebo bude potrebovať
   rozhodnutie.
3. Na stránke, ktorú AI pri výsledku uviedla, overte jedno alebo dve čísla.
   Postup pre ďalšie použitie AI uloží do súboru `ulohy-v-prohlizeci.md`.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorenej vo vašom priečinku, a za posledný riadok doplňte svoju úlohu:

Urob za mňa v prehliadači úlohu, ktorú na webe robím pravidelne ručne. Úloha je na poslednom riadku.

Otvori stránku a prejdí ju až k výsledku: klikaj, vypĺňaj, filtruj a sťahuj, čo je potrebné. Keď narazíš na prihlásenie, povedz mi; prihlásim sa a napíšem ti, aby si pokračoval. Keď nevieš, ktorú možnosť zvoliť, spýtaj sa ma.

Výsledok mi vráť v podobe, o ktorú žiadam v úlohe. Ku každému číslu alebo zmene pripoj adresu stránky, odkiaľ pochádza, aby som ho mohol overiť.

Nakoniec zapíš postup pre ďalšie použitie: pod nadpis s názvom úlohy napíš, kam ísť, kroky, ktoré fungovali (adresa stránky, filtre, názvy tlačidiel), a ako má vyzerať výsledok. Ulož ho do súboru ulohy-v-prohlizeci.md v priečinku, v ktorom pracuješ; keď súbor existuje, pripoj úlohu na koniec. Ak k priečinku nemáš prístup, tento krok vynechaj.

Úloha:

## Vo vašom nástroji

### Microsoft Copilot
Prehliadač ovláda Copilot Cowork, len na webe `copilot.cloud.microsoft`
otvorenom v Edgi a po povolení od správcu. Prompt vložte do Cowork (prepínač
hore vedľa Chatu); AI pracuje vo vašom Edgi, kde ste už prihlásení. Keď web
žiada heslo, ukáže vám kartu prehliadača a po prihlásení pokračuje. Keď skončí,
napište „Ulož postup ako skill“; naplánované úlohy sú na stránke
Automations.

### ChatGPT
V ChatGPT ovláda prehliadač režim Work: v aplikácii ChatGPT pre počítač prepnite
na Work a vložte prompt. Work má vstavaný prehliadač, kde sa prihlásite sami;
s rozšírením ChatGPT pre Chrome, potvrdeným v nastavení Computer Use, pracuje
i vo vašom Chrome. Postup Work do súboru neuloží, preto nech z úlohy urobí
naplánovanú úlohu (Scheduled v ľavom paneli).

### Claude
Rozšírenie Claude in Chrome pre platené tarify pridáte z Internetového obchodu
Chrome a prihlásite sa v ňom účtom Claude; funguje len v Google Chrome, v Edge
nie. V aplikácii Claude ho zapnete medzi konektormi (Connectors) pri položke Claude
in Chrome a AI potom v Cowork alebo Claude Code pracuje vo vašom prihlásenom
Chrome. Naplánované úlohy sú v Cowork v ľavom paneli pod Scheduled.

### Gemini
Gemini v Chrome, ktorý prehliadač ovláda, v EÚ vrátane Slovenska dostupný nie je,
preto úlohu urobte polovične. Export z webu stiahnite sami, v aplikácii Gemini ho
priložte cez Add from Drive alebo z počítača a napíšte, čo z neho chcete, napríklad
„sčítaj hodiny za každého človeka“. Keď sa úloha opakuje, nech Gemini napíše IT
žiadosť o automatické sťahovanie týchto dát.
## Čo je Browser control

Browser control je anglický názov pre ovládanie prehliadača. AI vidí stránku,
ktorú má otvorenú, a kliká a píše do nej podobne ako vy. Zvládne tak aj
weby, ku ktorým sa inak nedostane: nastaví niečo v aplikácii alebo prejde váš
web a nájde odkazy, ktoré nefungujú. Keď má aplikácia konektor, teda priame
prepojenie s AI, použite radšej ten, pretože je rýchlejší a spoľahlivejší.
Pred krokom, ktorý potrebuje vaše schválenie, napríklad pred nákupom, odoslaním
alebo prácou na novom webe, sa AI zastaví a spýta.

Niektoré nástroje pracujú vo vašom prehliadači, kde ste už prihlásení, a
dostanú sa všade, kam vy, aj do firemných systémov za VPN. Iné majú vlastný
vstavaný prehliadač, v ktorom sa prihlásite zvlášť.

`ulohy-v-prohlizeci.md` je obyčajný textový súbor so zoznamom vašich úloh
v prehliadači a s krokmi, ktoré fungovali. Koncovka `.md` znamená, že je písaný
v [Markdowne](glossary:markdown), jednoduchom zápise, v ktorom mriežky `###`
na začiatku riadku označujú nadpis.
## Nech sa úloha spúšťa sama

Úlohu, ktorá sa opakuje každý týždeň, nemusíte ani spúšťať. Vložte do AI,
ktorá vie naplánované úlohy, toto zadanie, len názov úlohy zmeňte na svoj, a
požiadajte ju, aby z neho naplánovanú úlohu založila. Kde ich vo svojom nástroji
nájdete, ukazuje blok „Vo vašom nástroji“.

```text
Každý piatok o 15:00 urob úlohu „Týždenné hodiny na projekte“ podľa súboru ulohy-v-prohlizeci.md. Výsledok ulož do rovnakého priečinka s dnešným dátumom v názve súboru a tri hlavné čísla mi napíš do zhrnutia.
```

Úloha pracuje so súborom vo vašom počítači a s vaším prehliadačom, takže
pobeží, len keď je počítač zapnutý, aplikácia s AI otvorená a prípadne
pripojená VPN.
## Príklad

Jana koordinuje stavbu nového skladu v logistickej firme a každý piatok
posiela vedeniu, koľko hodín na projekte tím odpracoval. V piatok 9. 10. 2026
otvorí priečinok projektu v AI, ktorá vie ovládať prehliadač, vloží prompt a za
posledný riadok napíše:

```text
V systéme na výkazy práce stiahni hodiny za tento týždeň pre projekt Nový sklad a vráť mi súčet za každého člena tímu a celkovo.
```

AI otvorí systém výkazov, vyfiltruje projekt a týždeň od 5. do 9. 10. a stiahne
export. Tím odpracoval 86 hodín, najviac Peter (31) a Lucia (24); pri každom
číslach AI uvedie adresu stránky. Jana otvorí prehľad v systéme a celkový
súčet sedí. Do `ulohy-v-prohlizeci.md` AI zapíše:

```text
### Týždenné hodiny na projekte
- Kam: systém na výkazy práce, sekcia Reporty.
- Kroky: filter Projekt Nový sklad, obdobie od pondelka do piatku tohto týždňa, tlačidlo Export do Excelu.
- Výsledok: hodiny za každého člena tímu a celkovo, pri každom čísle adresa stránky.
```

Ďalší piatok Jana napíše len „Urob týždenné hodiny na projekte podľa
`ulohy-v-prohlizeci.md`“ a dostane čísla za nový týždeň.
## Keď sa zaseknete

- **AI odpovie, že prehliadač ovládať nevie:** bežný chat to nezvládne.
  Zapnite ovládanie prehliadača podľa bloku „Vo vašom nástroji“. Viac v karte
  [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
- **IT nedovolí rozšírenie nainštalovať:** použite prehliadač, ktorý nič
  inštalovať nepotrebuje: vstavaný prehliadač v ChatGPT Work, Copilot Cowork
  v Edgi, alebo v Claude Cowork vlastný prehliadač, na ktorý prepnete v
  nastavení voľbou Preferred browser. Prihlásite sa v ňom zvlášť.
- **AI dlho blúdi po webe:** doplňte do úlohy názov sekcie alebo adresu
  stránky, kde má hľadať, a pustite ju znova.
- **AI postup pre ďalšie použitie neuloží:** pracujete bez prístupu k priečinku.
  Nastavte úlohu ako naplánovanú, alebo ju nabudúce spustite v režime Cowork
  alebo Code otvorenom v priečinku.
## Čo bude hotové

Máte hotovú jednu webovú úlohu, ktorú ste predtým klikali ručne, a výsledok
ste overili na stránke, odkiaľ pochádza. Postup s krokmi, ktoré fungovali,
leží v `ulohy-v-prohlizeci.md`, takže nabudúce úlohu zadáte jednou vetou.
## Čo ďalej

Z výkazu, ktorý AI stiahne, môže rovno pripraviť podklad na poradu; keď to
robíte každý týždeň, [uložte oba kroky ako skill](card:create-skill-from-proven-process).
Keď má výsledok dostávať aj kolega a úloha má hlásiť chyby, nastavte ju ako
[naplánovanú úlohu](card:recurring-ai-task).
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
