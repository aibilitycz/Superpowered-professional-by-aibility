# Vytvorte si README: úvodná stránka projektu

AI napíše úvodnú stránku projektu, z ktorej kolega aj nový chat hneď spoznajú stav a platný dokument.

## Vytvorte si README: úvodná stránka projektu

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s jedným rozpracovaným projektom.
## Na čo sa hodí

O týždeň idete na dovolenku a prípravu firemnej konferencie v Olomouci
preberá kolega Marek. V priečinku projektu sú `catering_final.docx`,
`catering_final_2.docx`, poznámky z porady a minuloročný program. Vy viete, že
platí druhá ponuka cateringu a že minuloročný program slúži len ako vzor.
Marek ani nový chat to z názvov súborov nespoznajú a vy by ste mu to v
ponáhľaní vysvetľovali po telefóne.

Pomohla by úvodná stránka projektu, anglicky README. AI ju napíše z podkladov
v priečinku a Marek aj nový chat z nej hneď spoznajú, ktorý dokument platí a čo
je ďalší krok.
## Čo si pripraviť

- priečinok s jedným rozpracovaným projektom v počítači alebo synchronizovaný
  do neho,
- poznámky alebo e-maily k projektu, ktoré v priečinku nie sú,
- AI v [režime](glossary:workmode) Cowork alebo Code, ktorá pracuje so
  súbormi v počítači.
## Ako na to

1. Otvorte Cowork alebo Code v priečinku projektu a vložte prompt, pod neho
   poznámky, ktoré v priečinku nie sú. AI prejde podklady a spýta sa na to, čo
   z nich nespozná.
2. Odpovedzte na otázky. AI uloží `README.md` a do `AGENTS.md` pridá
   pravidlo, aby ho čítala a udržiavala. Skontrolujte hlavne, či správne
   určila, ktorý dokument platí.
3. V novom chate v tom istom priečinku sa opýtajte, podľa ktorého dokumentu sa
   pracuje a čo je ďalší krok. Dobrá odpoveď uvedie dokument, ktorý README
   označuje ako platný.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorenej vo vašom priečinku:

Napíš pre tento projekt README: úvodnú stránku, z ktorej kolega aj nový chat hneď pochopia, o čo ide a ako pokračovať. Keď nemáš prístup k priečinku projektu a nemôžeš do neho sám ukladať súbory, povedz mi to hneď, aby som mohol prepnúť do Cowork alebo Code.

Prejdi všetky podklady v priečinku projektu a poznámky, ktoré ti dám pod týmto zadaním. Keď už v priečinku README alebo iná úvodná stránka je, uprav ju a druhú nezakladaj.

Napíš README tak, aby sa zmestilo na jednu stránku, a daj mu tieto časti:
- O čo ide: cieľ projektu, pre koho je a do kedy.
- Kde sme: čo je hotové, čo ešte nie, aký je ďalší krok a kto ho urobí.
- Čo do projektu nepatrí: čo sme vyradili alebo odložili.
- Ktoré dokumenty platia: pri každom dôležitom súbore odkaz, na čo slúži a či platí, slúži len ako vzor, alebo už neplatí.
- Kde čo je: krátky prehľad priečinkov a súborov.
- Aktualizované: dnešný dátum.

Obsah dokumentov neprepíš, odkazuj na ne. Keď dva dokumenty hovoria niečo iné alebo nespoznáš, ktorý platí, spýtaj sa ma. Nerozhoduj podľa slova „final“ ani podľa dátumu. Otázky polož všetky naraz a len tie, na ktoré podklady neodpovedia. Po mojich odpovediach ulož stránku ako README.md do hlavného priečinka projektu.

Nakoniec pridaj do súboru AGENTS.md v priečinku projektu pravidlo: „Pred prácou na projekte si prečítaj README.md. Keď sa zmení cieľ, stav, ďalší krok alebo platný dokument, uprav README.md.“ Keď AGENTS.md neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka.

## Vo vašom nástroji

### Microsoft Copilot
Cowork nájdete vedľa prepínača Chat; keď tam nie je, požiadajte oň správcu
IT. Vidí len súbory na OneDrive a SharePointe, preto na koniec promptu
pripíšte: „Pracuj v priečinku projektu na OneDrive, README ved ako dokument
Word a pravidlo mi napíš pre Customize, Preferences.“ V kroku 3 napíšte v
novej úlohe, kde projekt leží. Naplánované úlohy nájdete na stránke
Automations.

### ChatGPT
V aplikácii ChatGPT pre počítač prepnite na Codex, zvoľte otvorenie priečinka
(open a folder) a vyberte priečinok projektu. Codex číta `AGENTS.md` sám a
naplánovanú úlohu založí, keď ho o ňu požiadate; nájdete ju pod Scheduled.
Keď Codex nevidíte, vo firme ho pravdepodobne vypol správca, tak ho požiadajte,
ať ho zapne.

### Claude
V aplikácii Claude pre počítač otvorte Cowork a vyberte priečinok projektu,
prípadne ho otvorte v Claude Code; oboje majú platené tarify. Cowork si
pravidlo zapíše do inštrukcií priečinka (Folder instructions), Claude Code číta
`AGENTS.md`. Naplánovanú úlohu AI založí, keď ju o to požiadate, a nájdete
ju v ľavom paneli pod Scheduled.

### Gemini
Gemini do priečinka v počítači neukladá. Priložte dokumenty cez Add from
Drive, na koniec promptu pripíšte „K priečinku prístup nemáš, neprepínaj ma a
pracuj s priloženými dokumentmi.“ a README uložte cez Share & export, Export
to Docs. Krok 3 urobte v Gemu (Gems, New Gem) s README v Knowledge a pokynom „Odpovedaj podľa README“;
kolegovi ho nasdielate cez Share.
## Čo je README

[README](glossary:readme) znamená po anglicky „prečítaj si ma“. Tak sa volá
úvodný súbor, ktorý človek v priečinku projektu otvorí ako prvý. Na jednej
stránke hovorí, o čo v projekte ide, v akom je stave, aký je ďalší krok,
ktorý dokument platí a kde čo nájdete. Pomôže aj vám, keď sa k projektu
vrátite po dvoch týždňoch.

Prípona `.md` znamená zápis v [Markdowne](glossary:markdown): je to obyčajný
text, v ktorom mriežky `#` na začiatku riadku označujú nadpis. Otvorte ho v
akomkoľvek textovom editore, vo Windows napríklad v Poznámkovom bloku, a AI ho
prečíta aj upraví bez prevodu.

`AGENTS.md` je súbor s pravidlami pre AI v tom istom priečinku. Mnohé nástroje v
režime Code si ho prečítajú samy na začiatku každej práce, takže AI nemusíte
pripomínať, aby si README prečítala. Kde to nástroj sám nevie, AI pravidlo uloží
do jeho nastavení, alebo vám napíše, kam ho vložiť.

README na dokumenty len odkazuje a pri každom povie, na čo slúži; keď AI z
obsahu nespozná, ktorý dokument platí, spýta sa vás. U Marka by správna
odpoveď v kroku 3 pomenovala `catering_final_2.docx`.

Bežný chat README do priečinka neuloží, pretože do neho nevidí. Keď zatiaľ inú
AI nemáte, založte si aspoň [projekt v chate](card:asistent), alebo sa
pozrite, ako [prepnuť do Cowork alebo Code](card:when-chat-is-not-enough).

Slovo `final` v názve ani najnovší dátum nedokazujú, že dokument platí.
## Aby README nezostarol

Naplánovaná úloha raz týždenne upraví README aj podľa porád a e-mailov.
Pravidlo v `AGENTS.md` pokryje prácu, ktorú robíte s AI v priečinku projektu.
Stav projektu sa však mení aj inde, napríklad na porade alebo v e-maile. Vložte AI
v režime Cowork alebo Code toto zadanie a požiadajte ju, aby z neho naplánovala
úlohu:

```text
Každý piatok o 15:00 prejdí priečinok projektu a k tomu e-maily a stretnutia z tohto týždňa, ktoré sa projektu týkajú a ku ktorým máš prístup. Keď sa zmenil stav, ďalší krok alebo platný dokument, uprav README.md: zmeň len dotknuté riadky a dátum aktualizácie. Keď sa nič nezmenilo, README nechaj, ako je. Na konci mi napíš, čo si zmenil.
```

Keď úloha pracuje so súbormi vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená.
## Príklad

Lucia vyberá nového dodávateľa upratovania pre pobočky v Brne a Zlíne. AI
prejde priečinok a spýta sa na dve veci: ktorá z dvoch ponúk firmy Čistota
platí a či je firma Blesk ešte v hre. Potom zapíše:

```text
# Výber dodávateľa upratovania
Aktualizované: 9. 10. 2026

### O čo ide
Nový dodávateľ upratovania pre pobočky Brno a Zlín od 1. 1. 2027.

### Kde sme
Prehliadky budov prebehli, vo výbere zostali dve firmy.
Ďalší krok: Lucia do 20. 10. dohodne stretnutie s oboma firmami.

### Čo do projektu nepatrí
Umývanie okien zostáva u súčasnej firmy.

### Ktoré dokumenty platia
- nabidka_cistota_v2.pdf: platí, cena po prehliadke.
- nabidka_cistota.pdf: neplatí, nahradila ju v2.
- nabidka_uklidplus.pdf: platí.
- porovnani-cen.xlsx: platí, porovnanie oboch ponúk.
- nabidka_blesk.pdf: neplatí, firma Blesk z výberu vypadla.

### Kde čo je
Ponuky v priečinku nabidky, fotky a poznámky z prehliadok v priečinku prehlidky.
```

O týždeň neskôr sa Lucia v novom chate opýta, ktorú cenu firmy Čistota má dať do porovnania. Dobrá odpoveď vezme cenu z `nabidka_cistota_v2.pdf` a firmu Blesk vôbec nespomenie. Keď AI siahne po starej ponuke, napíšte jej, aby v
README opravila riadok pri tom dokumente.
## Keď sa zaseknete

- **AI tvrdí, že README uložila, ale v priečinku nie je:** pravdepodobne pracujete v
  bežnom chate, ktorý súbory meniť nevie. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough) a otvorte v ňom priečinok
  projektu.
- **Neviete ani vy, ktorý dokument platí:** požiadajte AI, aby vám ukázala, v čom
  sa dokumenty líšia. Rozhodnite vy alebo ten, kto projekt vedie, a AI to
  zapíše.
- **README je dlhé alebo opisuje dokumenty:** požiadajte AI, aby ho skrátila na
  jednu stránku a namiesto obsahu dokumentov nechala len odkazy.
- **Nový chat odpovedá podľa starého dokumentu:** otvorte chat v tom istom
  priečinku projektu a skontrolujte, že `README.md` aj `AGENTS.md` ležia priamo v
  ňom. Potom AI požiadajte, aby si README prečítala.
## Čo bude hotové

Máte `README.md`, podľa ktorého na projekte pokračuje ktokoľvek bez ďalších
otázok. V `AGENTS.md` je pravidlo, vďaka ktorému si ho AI pred prácou prečíta
a po zmene upraví. V novom chate ste si overili, že AI podľa README nájde
platný dokument a vie, čo je ďalší krok.
## Čo ďalej

Keď chcete mať takto v poriadku všetky projekty naraz, založte si [PACT](card:pact-workspace). Ak chcete
nastaviť aj iné úlohy, ktoré AI robí pravidelne sama, pozrite sa na
[naplánovanú úlohu](card:recurring-ai-task).
## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## README / Začnite tu

**Čo to je:** Krátky úvodný súbor alebo stránka, ktorá vysvetľuje, čo sa v projekte nachádza, čo je aktuálne, kde hľadať dôležité zdroje a ako s nimi má pracovať človek alebo AI.

**Čo to nie je:** Nie je to kópia všetkých dokumentov ani ďalší dlhý manuál k projektu.

**Prečo to študent potrebuje:** Pomáha ľuďom aj AI rýchlo zistiť, kde začať a ktoré podklady sú aktuálne a záväzné.

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
