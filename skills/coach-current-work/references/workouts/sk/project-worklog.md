# Založte si worklog: denník projektu

AI vám bude viesť denník projektu, takže nový chat aj kolega nadviažu tam, kde ste skončili.

## Založte si worklog: denník projektu

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s jedným rozpracovaným projektom.
## Na čo je to dobré

Minulý týždeň ste na porade rozhodli, že ponuka pôjde bez zľavy a termín sa
posunie na november. Dnes otvoríte nový chat, AI o tom nevie a do návrhu e-mailu
zľavu napíše. Kolega, ktorý projekt medzitým prevzal, sa vás pýta, či zľavu
dať.

Pomôže worklog, denník projektu: AI do neho po každom rozhodnutí zapíše krátky
záznam a nový chat aj kolega si v ňom prečítajú, čo odteraz platí.
## Čo si pripraviť

- priečinok s jedným rozpracovaným projektom,
- poznámky, e-maily, zápis z porady alebo chat z poslednej práce na ňom,
- AI v [režime](glossary:workmode) Cowork alebo Code, ktorá pracuje so
  súbormi v počítači.
## Ako na to

1. Otvorte priečinok projektu v Cowork alebo Code a vložte prompt. AI zapíše
   prvé záznamy do `worklog.md` a uloží si pravidlo, že ho bude dopĺňať
   po každej práci.
2. Prečítajte si prvé záznamy a opravte, čo nesedí.
3. Otvorte nový chat v tom istom priečinku a opýtajte sa na niečo, čo už je
   rozhodnuté. AI by mala odpovedať podľa worklogu.

Do záznamu patrí len to, čo nový človek potrebuje, aby nerobil veci znova.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorené vo vašom priečinku:

Založ pre tento projekt worklog: denník, do ktorého sa zapisuje, čo sa na projekte urobilo, prečo a čo sa rozhodlo.

Prejdi podklady v priečinku projektu a poznámky, ktoré ti dám, a napíš z nich prvé záznamy. Každý záznam má tento tvar:

### RRRR-MM-DD: krátky názov
- Čo sa urobilo: jedna až dve vety.
- Prečo: dôvod alebo problém, ktorý to rieši.
- Rozhodnutie: čo odteraz platí. Keď sa nič nerozhodlo, riadok vynechaj.
- Ďalší krok: čo príde ďalej a kto to urobí.

Najnovší záznam daj hore. Píš tak, aby to pochopil kolega, ktorý pri práci nebol. Neprepisuj celý chat a nevypisuj drobné úpravy. Keď z podkladov nepoznáš dátum alebo dôvod, opýtaj sa ma.

Ulož záznamy do súboru worklog.md v priečinku projektu. Keď už existuje, pripíš nové záznamy hore.

Nakoniec ulož pravidlo „Po každej dokončenej práci na projekte pripíš hore do worklog.md záznam v rovnakom tvare.“ do súboru AGENTS.md v priečinku projektu. Keď neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka.

## Vo vašom nástroji

### Microsoft Copilot
Cowork nájdete vedľa prepínača Chat; keď tam nie je, požiadajte oňho správcu
IT. Vidí len súbory na OneDrive a SharePointe, preto na koniec promptu
pripíšte: „Pracuj v priečinku projektu na OneDrive, worklog ved ako dokument
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
Gemini so súbormi v počítači nepracuje a firemné účty nemajú pamäť, takže
worklog po práci sám nedoplní. Prvé záznamy však napíše: priložte poznámky
cez Add from Drive a worklog uložte cez Share & export, Export to Docs.
Krok 3 urobte v Gemu (Gems, New Gem) s worklogom v Knowledge a pokynom
„Odpovedaj podľa worklogu“ v Instructions.
## Čo je worklog

Worklog, anglicky pracovný denník, je obyčajný textový súbor `worklog.md` v
priečinku projektu s najnovším záznamom hore.
Záznamy píše a ukladá AI, takže vás denník nestojí čas navyše. Mriežky `###` na
začiatku riadku znamenajú nadpis; takému zápisu sa hovorí
[Markdown](glossary:markdown).

`AGENTS.md` je súbor s pravidlami pre AI v tom istom priečinku. Mnohé nástroje v
režime Code si ho prečítajú samy na začiatku každej práce, takže pravidlo o
worklogu nemusíte opakovať. Kde to nástroj sám nevie, AI pravidlo uloží do jeho nastavení,
prípadne vám napíše, kam ho vložiť.

Keď zatiaľ používate len bežný chat, worklog do priečinka neuloží; ako
[přepnúť do Cowork alebo Code](card:when-chat-is-not-enough), ukazuje
samostatná karta. Celý chat a drobné úpravy do záznamov nepatria.
## Nech sa worklog píše sám

Naplánovaná úloha dopíše worklog aj za prácu mimo priečinka projektu. Uložené
pravidlo pokryje prácu, ktorú robíte s AI v priečinku projektu. Časť práce sa
ale odohrá inde: v e-mailoch, na stretnutiach alebo v inom chate. Úloha sa
spustí každý pracovný deň večer a worklogy dopíše podľa toho, čo sa ten deň
udialo. Vložte AI v režime Cowork alebo Code toto zadanie a požiadajte ju, nech z
neho naplánovanú úlohu založí:

```text
Každý pracovný deň o 18:00 prejdime, čo sa dnes dialo v mojich chatoch, upravených súboroch, e-mailoch a stretnutiach v kalendári. Za každý projekt, na ktorom sa dnes niečo urobilo alebo rozhodlo, pripíš hore do jeho worklogu jeden záznam v rovnakom tvare ako predchádzajúce záznamy. Keď sa na projekte nič nestalo, nič nepíš.
```

Keď úloha pracuje so súbormi vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená.
## Príklad

Projekt: nový newsletter pre zákazníkov. Z poznámok z prvej porady AI zapíše:

```text
### 2026-10-08: Nástroj a frekvencia newsletteru
- Čo sa urobilo: porovnali sme tri nástroje na rozosielanie a vybrali ten, ktorý už používa obchod.
- Prečo: obchod v ňom má kontakty, nemusíme ich prenášať.
- Rozhodnutie: newsletter chodí raz mesačne, prvé číslo vyjde v novembri.
- Ďalší krok: Petra pripraví šablónu do 15. 10.
```

O týždeň neskôr sa v novom chate opýtate, ako často má newsletter chodiť.
Dobrá odpoveď znie: raz mesačne, podľa záznamu z 8. 10. Keď AI odpovie
inak, pravdepodobne pracuje mimo priečinka projektu.
## Keď sa zaseknete

- **AI tvrdí, že záznam uložila, ale v súbore nie je:** pravdepodobne pracujete v
  bežnom chate, ktorý súbory meniť nevie. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough) a otvorte v ňom priečinok
  projektu.
- **Nový chat worklog nevidí:** otvorte chat v tom istom priečinku projektu, nie v
  obyčajnom okne chatu.
- **AI worklog po práci nedoplní:** opýtajte sa AI, kde má pravidlo o
  worklogu uložené. Má byť v `AGENTS.md` v priečinku projektu, a keď ho váš
  nástroj sám nečíta, aj odkaz naň v nastavení nástroja.
- **Záznamy sú dlhé:** požiadajte AI, nech každý skráti na štyri riadky.
## Čo bude hotové

Máte worklog projektu s prvými záznamami a uložené pravidlo, vďaka ktorému ho
AI dopĺňa po každej práci. V novom chate ste si overili, že AI z worklogu
pozná vaše rozhodnutia a nenavrhuje znova to, čo ste už zamietli.
## Čo ďalej

Súčasný stav projektu zhrňte na jednej
[úvodnej stránke projektu](card:project-start-here). Ostatné pravidlá, podľa ktorých AI v projekte pracuje, sepíšete do [súboru s pravidlami pre AI](card:agents-md).
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
