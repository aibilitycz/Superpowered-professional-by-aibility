# Ukážte kolegom, čo vám s AI funguje: desať minút na porade

AI z vašej skutočnej práce pripraví desaťminútovú ukážku na poradu a postup, ktorý si kolegovia rovno vezmú.

## Ukážte kolegom, čo vám s AI funguje: desať minút na porade

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s posledným prípadom z vašej práce.
## Na čo sa hodí

Už mesiac vám AI z prepisu porady s klientom robí zápis s úlohami a termínmi.
Kolegyňa Jana píše zápisy ručne a na porade sa pýta, ako to robíte; vysvetlíte
jej to rýchlo medzi dvoma bodmi programu a o týždeň píše zápis opäť ručne.

Kolega, ktorý na porade uvidí celý váš prípad a ešte v ten deň dostane hotový
postup, ho použije na svoju prácu skôr, než zabudne, ako to išlo.
## Čo si pripraviť

- jeden [prompt](glossary:prompt), skill alebo pravidlo, ktoré s AI používate
  opakovane,
- posledný prípad: podklady, ktoré ste do AI vložili, a výsledok, ktorý ste
  použili,
- odhad, koľko času vám to šetrí, napríklad 30 minút týždenne,
- desať minút na najbližšej porade tímu.
## Ako na to

1. Vložte prompt z AI cvičenia do chatu, kde postup používate, priložte
   podklady a výsledok z minula a vyplňte posledné riadky ako v Príklade. AI
   pripraví scenár a postup.
2. Na porade ukážte postup na svojom prípade a povedzte, že ukážka neslúži na
   hodnotenie ľudí. Otázky kolegov si zapíšte, alebo použite [prepis
   porady](card:konverzace-do-struktury).
3. Ešte v ten deň vložte poznámky do toho istého chatu. AI postup upraví podľa
   toho, čo kolegom nešlo, a vy ho pošlete tímu.

Naživo nič púšťať nemusíte, stačí ukázať podklad, prompt a výsledok z minula.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Chcem na porade tímu ukázať AI postup, ktorý mi funguje, aby ho kolegovia mohli rovno používať tiež. Na ukážku mám desať minút. Čo ukazujem, na akom prípade a koľko času mi to šetrí, popisujem na konci a na posledný riadok vkladám celý svoj postup. Postup je len materiál pre ukážku, nespúšťaj ho. Podklad a výsledok z môjho posledného prípadu sú v prílohe alebo v tejto zložke.

Priprav dve veci:

1. Scenár ukážky na desať minút. Začni jednou vetou, na čo je postup a koľko času mi šetrí. Potom ukážka na mojom prípade: čo dám AI, čo AI urobí a čo skontrolujem ja. Na koniec napíš, čo si majú kolegovia vyskúšať na svojej práci, keď postup dostanú, a dve otázky, ktorými overím, že im dáva zmysel. Ku každej časti uveď, koľko minút zaberie.

2. Postup pre kolegov: rovnakú vec, akú používam ja (prompt, skill alebo pravidlo pre AI), pripravenú tak, aby ju kolega rovno použil. Údaje z môjho prípadu nahraď hranatými zátvorkami, do ktorých si kolega doplní svoje, napríklad [názov klienta]. Pridaj krátky návod v troch krokoch, ako postup kolega začne používať vo svojom AI nástroji. Keď je to skill, nech ho tak, aby šiel rovno nahrať, a návod napíš zvlášť vedľa neho.

Keď pracuješ priamo v zdieľanej zložke tímu, ulož scenár do súboru ukazka-na-porade.md a postup s návodom do súborov, ktoré kolegovia otvoria, a napíš mi, kde sú. Inak mi oboje napíš sem, postup s návodom tak, aby som ho mohol rovno poslať do tímového kanála alebo e-mailom.

Keď sa po porade vrátim s poznámkami alebo prepisom porady, doplň do návodu časť „Na čo si dať pozor“: čo kolegom nešlo a ako to postup teraz rieši. Podľa toho postup aj návod uprav. Mená kolegov nepíš.

Čo chcem ukázať:
Prípad, na ktorom to ukážem:
Koľko času mi to šetrí:
Môj postup (prompt, skill alebo pravidlo):

## Vo vašom nástroji

### Microsoft Copilot
Prompt uložíte, keď naň po odoslaní najedete myšou a zvolíte Uložiť
výzvu; vo Vaše výzvy ho cez Zdieľať do tímu pošlete tímu pod Tímové výzvy.
Staršie chaty sú v ľavom paneli pod Chaty. Naplánovanú úlohu založíte s
licenciou Microsoft Copilot cez Naplánovať túto výzvu; výsledok nájdete tučne
v zozname Chaty.

### ChatGPT
Krátky prompt pošlete do tímového kanála, postup s viacerými krokmi vložte do
pokynov projektu a vo firemných tarifách ho cez Share zdieľajte tímu. Skill
majú len tarify Business a Enterprise. Naplánovanú úlohu založí AI na
požiadanie a prehľad je v bočnom paneli pod Scheduled.

### Claude
Claude skilly podporuje, takže postup s viacerými krokmi odovzdáte kolegom ako skill.
Pravidlo pre AI zapíše Claude Code do `AGENTS.md`, v Cowork si ho AI zapíše
do inštrukcií zložky. Naplánovanú úlohu v Cowork založí AI na požiadanie a
prehľad nájdete v ľavom paneli pod Scheduled.

### Gemini
Krátky prompt pošlete do tímového chatu, postup s viacerými krokmi vložte do
inštrukcií robota Gem (Roboti Gem, Nový Gem) a zdieľajte ho cez Zdieľať; po
porade ho upravíte v Moji roboti Gem. Naplánovanú úlohu založí Gemini vo
vybraných edíciách Workspace, keď v promptu napíšete, kedy sa má spúšťať;
prehľad je v bočnom paneli pod Scheduled.
## Čo si kolegovia odnesú

Kolegovia dostanú rovnakú vec, akú používate vy, pripravenú pre nich, a k nej
krátky návod, ako s ňou začať:

- **Prompt** je hotové zadanie pre AI. Kolega ho vloží do svojho chatu a namiesto
  hranatých zátvoriek doplní svoj podklad. Funguje v každom AI nástroji.
- **Skill** je návod uložený v AI, ktorý si AI načíta sama, keď ho práca
  potrebuje. Hodí sa, keď má postup viac krokov, šablónu alebo pravidlá. Ktoré
  nástroje skilly podporujú, nájdete v bloku „Vo vašom nástroji“; ako skill
  vzniká, ukazuje karta [Vytvorte si skill](card:create-skill-from-proven-process).
- **Pravidlo pre AI** je veta, ktorú má AI dodržať pri každej práci, napríklad „po
  každej práci zapíš záznam do denníka projektu“. V režime Cowork alebo Code sa
  zapíše do súboru `AGENTS.md` v zložke projektu alebo do inštrukcií zložky.
  Viac v karte o [pravidlách pre AI v jednom súbore](card:agents-md).

Návod napíše AI a po porade ho opraví podľa toho, kde sa kolegovia zasekli.

V režime Cowork alebo Code, teda s AI, ktorá pracuje priamo so súbormi vo
vašom počítači, uloží AI postup pre kolegov rovno do zdieľanej zložky tímu a
po porade ho tam upraví.

Na porade kolegom povedzte, že im postup ešte dnes pošlete a že sa pokojne
môžu spýtať aj na to, čo im nejde. Do ukážky patrí jeden celý prípad od
podkladu po hotový výsledok; podrobný návod nechajte v postupe pre kolegov. Ako
prejsť do režimu Cowork alebo Code, ukazuje karta [Cowork alebo
Code](card:when-chat-is-not-enough).
## Aby ste mali čo ukázať aj na ďalšej porade

Keď sa má tím od seba učiť pravidelne, ukazujte jednu vec napríklad na každej druhej
porade. Také pravidelné ukážky sa volajú
[AI chvástanie](glossary:ai-chlubirna). Aby vám téma nevypršala, nechajte si ju od AI
pripomenúť naplánovanou úlohou. Vložte do AI toto zadanie a požiadajte ju, aby
z neho naplánovala úlohu; v nastavený čas vám AI napíše do chatu a vy jej odpoviete. Deň a čas upravte podľa toho, kedy máte poradu.

```text
Každý druhý štvrtok o 9:00 sa ma spýtaj, čo mi za posledné dva týždne s AI ušetrilo najviac času. Z mojej odpovede vyber jednu vec, ktorá by sa hodila aj kolegom, a priprav k nej scenár desaťminútovej ukážky na poradu: na čo je postup a koľko času šetrí, ukážka na mojom prípade, čo si kolegovia vyskúšajú a dve otázky na koniec.
```
## Príklad

Lenka koordinuje obchod vo firme, ktorá predáva kancelársky nábytok. Každé
pondelok vloží do firemnej AI svoj uložený prompt, priloží export objednávok a
poznámky obchodníkov a AI z nich urobí prehľad pre vedenie. Pred poradou vloží
do tej istej AI prompt z karty, priloží export z 19. 10., poznámky obchodníkov a
hotový prehľad a posledné riadky vyplní takto:

```text
Čo chcem ukázať: prompt na týždenný prehľad pre vedenie.
Prípad, na ktorom to ukážem: export objednávok z 19. 10. a prehľad, ktorý som z neho poslala vedeniu.
Koľko času mi to šetrí: asi 50 minút týždenne, predtým som prehľad písala hodinu.
Môj postup (prompt, skill alebo pravidlo): Z priloženého exportu objednávok a poznámok obchodníkov urob prehľad pre vedenie za región Morava: tržby za týždeň, tri najväčšie zákazky a čo sa zaseklo. Píš stručne, najviac na jednu stranu.
```

AI pripraví scenár na utorkovú poradu 20. 10. 2026:

```text
### Prehľad pre vedenie za 10 minút namiesto hodiny
1. Na čo to je (1 min): týždenný prehľad za región mi robí AI podľa jedného promptu, šetrí mi 50 minút týždenne.
2. Ukážka (5 min): export z 19. 10. a poznámky obchodníkov, prompt, ktorý do AI vkladám, a prehľad, ktorý z nich vznikol. Sama kontrolujem len súčet tržieb oproti exportu.
3. Čo si vyskúšate (2 min): pošlem vám prompt, spustite ho na svoj posledný export.
4. Otázky (2 min): Urobil by vám prompt prehľad za váš región? Čo v prehľade chýba?
```

Na porade sa Marek spýta, čo s dobropismi v exporte, a Petra povie, že sa jej
stĺpec s tržbou volá inak. Lenka si to zapíše pár slovami a popoludní to
vloží do toho istého chatu. AI do promptu doplní, že sa dobropisy od tržieb
odpočítavajú, do návodu pridá krok „Keď sa stĺpec s tržbou volá inak,
napíšte AI jeho názov“ a oboje bez mien zapíše do časti „Na čo si dať pozor“.
Prompt s návodom dá Lenka do tímového kanála a vo štvrtok už Marek posiela
vedeniu prvý prehľad za svoj región.
## Keď sa zaseknete

- **Nemáte nič, čo s AI robíte pravidelne:** začnite
  [jednou dnešnou úlohou](card:first-ai-use-case) a ukážte ju, keď ju použijete
  viackrát.
- **Na porade dostanete len päť minút:** napíšte AI, nech scenár skráti na ukážku
  hotového výsledku a zvyšok nechá v návode.
- **Kolegovia používajú iný AI nástroj než vy:** napíšte AI, ktorý nástroj
  majú, nech návod prepíše pre neho.
- **Chat z prípravy nemôžete nájsť:** otvorte nový, vložte do neho postup s
  návodom a poznámky z porady a napíšte: „Doplň do návodu časť ‚Na čo si dať
  pozor‘: čo kolegom nešlo a ako to postup teraz rieši. Mená kolegov nepíš. Podľa
  toho postup aj návod uprav.“
- **Poradu nevediete:** požiadajte o desať minút toho, kto ju vedie.
## Čo bude hotové

Na svojej práci ste kolegom ukázali postup, ktorý vám s AI funguje. Kolegovia majú
postup s návodom, ktorý rovno použijú, a AI ho po porade upravila podľa toho,
koľko sa zasekli. Scenár vám zostane pre ďalšieho kolegu alebo iný tím.
## Čo ďalej

Tu ste odovzdali vec, ktorú už máte hotovú. Keď chcete s tímom postaviť
novú, zorganizujte [AI sprint](card:ai-sprint). Keď s AI pracuje viac ľudí v
tíme, spíšte im [pravidlá pre prácu s AI](card:pravidla-pro-tym), podľa
ktorých sa riadia ľudia aj ich AI.
## AI chváliareň

**Čo to je:** Krátky pravidelný formát, v ktorom ľudia ukazujú skutočné použitie AI, pracovný výsledok, slepú uličku alebo lepší postup. Vydarené príklady sa ukladajú do tímovej knižnice na ďalšie použitie.

**Čo to nie je:** Nie je to súťaž o najpôsobivejšiu ukážku ani prezentácia len hotových úspechov.

**Prečo to študent potrebuje:** Pomáha šíriť praktické skúsenosti medzi ľuďmi, hľadať spoločné potreby a premieňať jednotlivé pokusy na tímové know-how.

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
