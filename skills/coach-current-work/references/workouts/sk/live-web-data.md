# Nechajte AI stiahnuť živé dáta: aktuálne čísla so zdrojom a dátumom

Aktuálne čísla o firmách, konkurencii alebo trhu AI stiahne z webu sama a pri každom uvedie zdroj a dátum.

## Nechajte AI stiahnuť živé dáta: aktuálne čísla so zdrojom a dátumom

**Náročnosť: stredná.**\
**Čas: približne 15 minút** s jednou otázkou, ku ktorej chýbajú čísla.
## Na čo sa hodí

Vo štvrtok podpisujete zmluvu s novým dodávateľom a chcete vedieť, aká je
firma veľká, či rastie a nemá problémy. Chat vám napíše všeobecný odsek z
jej webu a údaje z registrov potom pol hodiny dohľadávate sami.

Pomôže, keď AI čísla stiahne sama priamo zo zdroja, ku každému napíše odkaz a
dátum a postup si uloží, takže ďalšieho dodávateľa preveríte jednou vetou.
## Čo si pripraviť

- otázku z práce, ku ktorej potrebujete aktuálne čísla, a čo podľa nich rozhodnete,
- AI, ktorú v práci používate; kde v nej začať, ukazuje blok „Vo vašom nástroji“,
- AI v [režime](glossary:workmode) Cowork alebo Code, len keď bežný chat dáta nenájde.
## Ako na to

1. Napíšte AI, o aké čísla potrebujete a čo podľa nich rozhodnete. AI nájde,
   kde dáta naozaj sú, a stiahne ich sama. Keď je potrebné prihlásenie alebo
   správca IT, povie vám to.
2. Otvorte odkaz pri čísle, na ktorom záver najviac stojí, a skontrolujte, že ho
   zdroj naozaj uvádza. Keď nesedí, napíšte to AI a nech tabuľku opraví.
3. V novom chate zadajte rovnakú úlohu jednou vetou, napríklad pre inú firmu.
   V režime Cowork alebo Code otvorte nový chat v tej istej zložke.

Do tabuľky patria len čísla, podľa ktorých sa rozhodnete.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate, a za
posledný riadok napíšte svoju otázku:

Potrebujem aktuálne dáta z webu k úlohe, ktorú práve riešim. Čo potrebujem a na čo, je na poslednom riadku.

Najprv zisti, kde tie dáta naozaj sú: verejný register alebo štatistika, web firmy, pracovné inzeráty, knižnica reklám, nástroj s vyhľadávanosťou kľúčových slov alebo profil na sociálnej sieti. Keď existuje priamy zdroj, ber čísla z neho; články, ktoré ich opisujú, používaj len tam, kde priamy zdroj chýba.

Dáta stiahni sám. Verejné stránky prečítaj cez vyhľadávanie na webe. Keď sú dáta v nástroji, ku ktorému mám prístup v prehliadači (napríklad plánovač kľúčových slov alebo knižnica reklám), a vieš ovládať prehliadač, prejdi ho tam. Keď dáta ležia v databáze, ku ktorej potrebuješ dátový konektor (MCP server), použi ten, ktorý tu máš. Keď žiadny nemáš a vieš ho tu pripojiť, pripoj ho; kde sa musím prihlásiť, povedz mi presne kde a počkaj. Keď ho pripojiť nevieš, napíš mi, ktorý zdroj by sa hodil a kto ho môže zapnúť, a zatiaľ vráť, čo zistíš z verejného webu. Keď je zdroj platený, povedz mi cenu skôr, než ho použiješ.

Výsledok daj do tabuľky so stĺpcami údaj, číslo, odkaz na zdroj a dátum, ku ktorému číslo platí. Čo nenájdeš, označ ako chýbajúce a nič neodhadzuj. Pod tabuľku napíš dvoma vetami, čo z čísel vyplýva pre moju úlohu, a ktoré číslo mám overiť v zdroji a kde presne ho tam nájdem.

Keď pracuješ v zložke, ulož tabuľku hore do súboru zive-data.md v zložke projektu pod nadpis s dnešným dátumom a názvom úlohy; keď súbor neexistuje, založ ho. Nakoniec ulož postup ako skill: odkiaľ dáta berieš, ako ich sťahuješ a ako vyzerá tabuľka, aby mi nabudúce stačila jedna veta, napríklad „stiahni rovnaké dáta pre inú firmu“. Kde skill uložiť nejde, ulož postup do pamäte alebo vlastných pokynov tohto nástroja.

Čo potrebujem a na čo:

## Vo vašom nástroji

### Microsoft Copilot
Prompt vložte do Copilot Chat na `copilot.cloud.microsoft`; riadky o súbore
a skille preskočí. Keď v odpovedi chýbajú odkazy na weby, zapnite vyhľadávanie v
Settings, Personalization, a keď nejde, vypol ho správca. Postup si
zapamätá po vete „Zapamätaj si tento postup“, Cowork ho uloží ako skill a
úlohy plánuje na stránke Automations. Platené dáta prinesie Copilot
konektor od správcu.

### ChatGPT
Prompt vložte do bežného chatu; riadky o súbore a skille preskočí. ChatGPT
hľadá na webe sám, a keď pri číslach chýbajú odkazy, napíšte / a vyberte Search.
Postup si zapamätá po vete „Zapamätaj si tento postup“; či máte pamäť,
vidíte v Settings, Personalization. Na verejné registre konektor
nepotrebujete, na platené databázy ho pod Plugins pridáva správca a
naplánované úlohy sú pod Scheduled.

### Claude
Prompt vložte do Cowork v zložke projektu alebo do chatu; keď pri číslach chýbajú
odkazy, zapnite Web search pod +. Knižnicu reklám alebo Plánovač kľúčových slov
prejde Cowork vo vašom Chrome cez rozšírenie Claude in Chrome. Dátový konektor
v tarifoch Team a Enterprise pridáva vlastník organizácie (Organization
settings, Connectors).
Postup Claude uloží ako skill, úlohy sú pod Scheduled.

### Gemini
Prompt vložte do bežného chatu; Gemini hľadá Googlem sám a riadky o súbore a
skille preskočí. Vlastný dátový konektor s pracovným účtom nepridáte, preto
dáta zo špecializovaných databáz nechajte stiahnuť AI v režime Cowork alebo
Code, alebo požiadajte IT. Postup si nechajte uložiť ako skill (Customize,
Skills) a naplánované úlohy nájdete pod Scheduled.
## Čo sú živé dáta a dátový konektor

Živé dáta sú čísla, ktoré sa menia každý deň alebo týždeň, napríklad tržby a
insolventnosť firmy alebo reklamy, ktoré má teraz spustené konkurencia. AI ich sama
od seba nepozná, pretože sa učila na starších dátach, a bez stiahnutia ich len
odhaduje. Verejné stránky,
napríklad obchodný register alebo web firmy, prečíta cez vyhľadávanie na webe. Keď
potrebujete správu z desiatok zdrojov so zrovnaním možností, použite
[Deep Research](card:deep-research).

Časť dát na bežných stránkach nie je. Vyhľadávanosť slov, teda koľko ľudí ich
mesačne hľadá, alebo návštevnosť webu konkurencie leží v databázach
špecializovaných nástrojov a AI sa k nim dostane cez dátový konektor. V nastavení sa mu často hovorí MCP server; [MCP](glossary:mcp) je
technický štandard, cez ktorý sa AI pripája k aplikáciám a zdrojom dát.
Konektor obvykle potrebuje účet u poskytovateľa dát a niektoré zdroje sa platia
za každý dotaz. Keď k takému nástroju máte prístup v prehliadači, napríklad k
Plánovaču kľúčových slov v Google Ads, AI ho prejde cez
[ovládanie prehliadača](card:browser-control) aj bez konektora. Inak vám tieto
údaje označí ako chýbajúce a napíše, kto by konektor mohol zapnúť.

Postup si AI uloží ako [skill](glossary:skill), teda návod, ktorý si sama
nájde, keď nabudúce zadáte podobnú úlohu. Výsledky ukladá do `zive-data.md`,
obyčajného textového súboru v zložke projektu, kde je najnovšie stiahnutie
hore.
## Nech sa dáta sťahujú samy

Údaje, ktoré sledujete pravidelne, napríklad insolventnosť u kľúčových dodávateľov
alebo reklamy konkurencie, môže AI sťahovať každý týždeň sama a hlásiť vám len
zmeny. Vložte do AI, ktorá vie naplánované úlohy, toto zadanie a požiadajte ju,
aby z neho naplánovanú úlohu založila. Kde ich vo svojom nástroji nájdete, ukazuje
blok „Vo vašom nástroji“.

```text
Každé pondelok o 8:00 stiahni podľa uloženého postupu rovnaké dáta ako minule a porovnaj ich s posledným stiahnutím v zive-data.md, alebo s minulým výsledkom tejto úlohy. Keď pracuješ so súborom, pripíš nové dáta hore pod dnešný dátum. Mne napíš len, čo sa zmenilo a čo to znamená pre moju úlohu; keď sa nič podstatné nezmenilo, stačí jedna veta.
```

Keď úloha pracuje so súbormi vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená.
## Príklad

Lucia riadi nákup v logistickej firme a vo štvrtok 22. 10. 2026 podpisuje
rámcovú zmluvu s novým dopravcom. V pondelok za posledný riadok promptu
napíše:

```text
Autodoprava Lipan, s.r.o.: ako dlho firma existuje, aké má tržby a či nemá insolventnosť alebo problémy s DPH. Vo štvrtok s nimi podpisujem rámcovú zmluvu na rozvoz.
```

AI prejde obchodný a insolvenčný register a register platiteľov DPH. Do
`zive-data.md` zapíše:

```text
### 2026-10-19: Autodoprava Lipan, s.r.o., pred podpisom 22. 10.
| Údaj | Číslo | Zdroj | Platí k |
|---|---|---|---|
| Firma vznikla | 2014 | or.justice.cz, výpis z obchodného registra | 19. 10. 2026 |
| Tržby | 86 mil. Kč, rok predtým 79 mil. Kč | or.justice.cz, účtovná závierka v zbierke listín | rok 2025 |
| Insolventnosť | žiadna | isir.justice.cz | 19. 10. 2026 |
| Nespoľahlivý platiteľ DPH | nie | register platiteľov DPH | 19. 10. 2026 |
| Počet vozidiel | chýba, žiadny zdroj ho neuvádza | | |

Tržby vzrástli o 9 % a v registroch firma nemá žiadny problém. Overiť: tržby vo výkaze zisku a straty v účtovnej závierke, riadok Tržby z predaja výrobkov a služieb.
```

Lucia otvorí účtovnú závierku z odkazu, vo výkaze zisku a straty nájde riadok s
tržbami a číslo sedí. O týždeň neskôr v novom chate napíše len „Preverte rovnako
dopravcu, s ktorým rokujeme v utorok“ a dostane tabuľku v rovnakom tvare.
Kolega z marketingu rovnakým promptom sťahuje reklamy konkurencie a vyhľadávanosť
slov cez dátový konektor, ktorý mu zapol správca.
## Keď sa zaseknete

- **AI napíše čísla bez odkazu alebo „približne“:** nehľadala na webe a
  odhaduje z pamäti. Zapnite vyhľadávanie podľa bloku „Vo vašom nástroji“ a
  napíšte: „Ku každému číslu daj odkaz na zdroj a dátum; čo nenájdeš, označ
  ako chýbajúce.“
- **AI odpovie, že k dátam nemá prístup:** dáta sú v databáze a AI potrebuje
  dátový konektor. Nech vám napíše krátku žiadosť pre správcu firemného účtu
  AI: ktorý zdroj a na čo ho potrebujete. V režime Code ho AI pripojí sama;
  ako do neho prepnúť, ukazuje karta [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
- **Údaj je len v PDF alebo na stránke s filtrami:** napíšte AI, nech PDF otvorí
  priamo z odkazu. Stránku, ktorú treba preklikať, napríklad knižnicu
  reklám Meta, nech AI prejde v prehliadači, ako ukazuje karta
  [Browser control](card:browser-control).
- **V novom chate AI postup nenájde:** opýtajte sa, čo si o postupe pamätá
  a kam ho uložila. Keď pamäť nemáte, nech ho v režime Cowork alebo Code uloží
  ako skill, a nový chat potom otvorte v tej istej zložke.
## Čo bude hotové

Máte tabuľku aktuálnych čísel k vašej úlohe, pri každom odkaz a dátum, a
číslo, na ktorom záver stojí, ste overili v zdroji. AI má postup uložený ako
skill alebo v pamäti a v novom chate podľa neho stiahla dáta na jednu vetu.
## Čo ďalej

Keď chcete, aby pravidelný prehľad chodil spoľahlivo a sám hlásil chyby,
pokračujte k [naplánovanej úlohe](card:recurring-ai-task). Ako z inej vydarenej
práce urobiť [skill](card:create-skill-from-proven-process), ukazuje
samostatná karta.
## MCP

**Čo to je:** Otvorený technický štandard (Model Context Protocol), cez ktorý sa AI pripája k aplikáciám a dátovým zdrojom. Aplikácia alebo poskytovateľ dát ponúkne MCP server a AI cez neho číta dáta alebo vykonáva povolené akcie. V nastaveniach nástrojov sa takéto pripojenie často nazýva konektor alebo MCP server.

**Čo to nie je:** Nie je to samostatná aplikácia ani AI model. Samotný štandard nič nesťahuje; potrebuje server od poskytovateľa, často účet u neho a oprávnenie, ktoré aktivuje človek alebo správca.

**Prečo to študent potrebuje:** Pomáha pochopiť, kedy AI pristupuje k dátam mimo verejného webu a kto musí pripojenie povoliť.

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
