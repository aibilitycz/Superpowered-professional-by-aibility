# Použite vibe coding: AI postaví nástroj pre vašich kolegov

Kolegovia si cenu ponuky spočítajú sami v malom nástroji, ktorý vám AI postaví z vašej tabuľky.

## Použite vibe coding: AI postaví nástroj pre vašich kolegov

**Náročnosť: stredná.**\
**Čas: približne 15 minút** s cenníkom a jedným hotovým prípadom.
## Na čo sa hodí

Kolegovia z obchodu vám niekoľkokrát týždenne volajú, aby ste im spočítali cenu ponuky.
Tabuľku s cenníkom a vzorcami totiž ovládate len vy. Minulý týždeň ste boli na
dovolenke a kolega poslal klientovi cenu bez príplatku za víkend.

S [vibe codingom](glossary:vibe-coding), teda programovaním popisom, len
popíšete, čo sa má počítať, a AI napíše nástroj, v ktorom kolega zadá počet
hostí a hneď vidí cenu s rozpisom.
## Čo si pripraviť

- cenník, z ktorého kolegovia počítajú, v zdieľanej zložke, ktorú máte aj v
  počítači,
- v rovnakej zložke jeden hotový prípad so správnym výsledkom, napríklad poslanú
  ponuku,
- jedného kolegu, ktorý nástroj vyskúša ako prvý,
- AI v režime Cowork alebo Code; kde ho nájdete, ukazuje blok „Vo vašom
  nástroji“.
## Ako na to

1. Otvorte AI v režime Cowork alebo Code v zdieľanej zložke s cenníkom a vložte
   prompt. Na posledný riadok doplňte, čo má nástroj počítať, kto ho bude
   používať a kde je hotový prípad.
2. AI uloží nástroj ako `kalkulacka.html`. Otvorte ho dvojklikom, zadajte
   hotový prípad a porovnajte výsledok; čo nesedí alebo nejde, napíšte AI a
   nechajte ho opraviť.
3. Napíšte kolegovi, kde `kalkulacka.html` v zdieľanej zložke nájde, nech v ňom
   spočíta svoj najbližší prípad. Čo mu nešlo, pošlite AI jeho slovami.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorené vo vašej zložke s cenníkom, a na jeho posledný riadok doplňte, čo má
nástroj počítať, kto ho bude používať a v ktorom súbore je hotový prípad. Ako taký riadok
vyzerá, uvidíte v Príklade.

Postav z výpočtu, ktorý kolegovia opakovane robia ručne v tabuľke, malý nástroj, ktorý si otvoria sami. Čo má počítať, kto ho bude používať a v ktorom súbore je hotový prípad so správnym výsledkom, nájdeš na poslednom riadku. Keď nepracuješ priamo v zložke s cenníkom, povedz mi to hneď.

Prejdi cenník alebo tabuľku v zložke a zisti z nich všetky pravidlá výpočtu: ceny, príplatky, zľavy, zaokrúhľovanie a podmienky. Keď pravidlo nespoznáš ani zo vzorcov v tabuľke alebo si podklady odporujú, spýtaj sa ma a ukáž mi to na príklade.

Nástroj ulož do jedného súboru kalkulacka.html v rovnakej zložke ako cenník. Musí sa otvoriť dvojklikom v bežnom prehliadači bez inštalácie a bez internetu, takže cenník daj priamo do neho. Hore budú polia, ktoré kolega vyplní, pod nimi výsledok s rozpisom, z ktorého je vidieť, ako sa k číslu dospelo, a tlačidlo, ktoré rozpis skopíruje, aby ho kolega vložil do e-mailu alebo ponuky. Popisky píš slovami, ktoré kolegovia používajú. Keď pole zostane prázdne alebo v ňom je nezmysel, nech nástroj zrozumiteľne napíše, čo opraviť.

Spočítaj v nástroji hotový prípad a porovnaj výsledok so správnym. Keď sa líši, nájdi pravidlo, ktoré počíta zle, oprav ho a porovnaj znova. Potom mi napíš, kde kalkulacka.html nájdem a čo do neho mám zadať, aby som výsledok overil sám.

Pravidlá výpočtu zapíš obyčajnými slovami do súboru kalkulacka-pravidla.md v rovnakej zložke, aj s dátumom cenníka a hotovým prípadom, na ktorom si nástroj overil. Do súboru AGENTS.md v tejto zložke pridaj pravidlo: „Keď sa zmení cenník alebo pravidlá výpočtu, uprav podľa nich kalkulacka.html aj kalkulacka-pravidla.md. Potom spočítaj hotový prípad podľa nového cenníka a napíš, o koľko a kvôli ktorým položkám sa výsledok líši od pôvodného.“ Keď AGENTS.md neexistuje, založ ho. Zabezpeč, aby si AGENTS.md prečítal na začiatku každej práce v tejto zložke; v Cowork to zapíš do inštrukcií zložky.

Čo má nástroj počítať, kto ho bude používať a v ktorom súbore je hotový prípad:

## Vo vašom nástroji

### Microsoft Copilot
Copilot Cowork na `copilot.cloud.microsoft` ukladá nové súbory do svojej zložky
Cowork na OneDrive, nie do vašej zdieľanej zložky. Priložte mu cenník aj hotový
prípad tlačidlom +, vložte prompt a pripíšte „Postav kalkulačku ako zošit v
Exceli, v zložke pracovať nemusíš.“ Zošit presuňte do zdieľanej zložky a
kolegom pošlite odkaz; pravidlo si Cowork uloží ako skill.

### ChatGPT
Režim Code je v ChatGPT Codex v aplikácii ChatGPT pre počítač: zvoľte Codex a
otvorte zdieľanú zložku s cenníkom (open a folder). Codex uloží
`kalkulacka.html` priamo do nej a pravidlo zapíše do `AGENTS.md`.

### Claude
V aplikácii Claude pre počítač otvorte Cowork alebo Claude Code so zdieľanou
zložkou s cenníkom. AI uloží `kalkulacka.html` priamo do nej; v Cowork si
pravidlo zapíše do inštrukcií zložky.

### Gemini
Nástroj postaví Gemini v Canvase: v aplikácii Gemini zvoľte pod + Canvas,
priložte cenník a hotový prípad a vložte prompt. Keď napíše, že nepracuje v
zložke, odpovedzte „pokračuj v Canvase“ a prípad vyskúšajte v náhľade. Kolegom
ho pošlite cez Share & export a Share; kto má odkaz, vidí aj cenník. Po zmene
cenníka napíšte do rovnakého chatu, nech nástroj upraví.
## Čo je vibe coding

Vibe coding je anglický názov pre programovanie popisom: kód píše AI a vy ju
riadite obyčajnými vetami. Vy popíšete, čo má nástroj počítať, AI napíše kód
a vy nástroj vyskúšate na prípade, pri ktorom poznáte správny výsledok.
Programovať nemusíte a nástroj len počíta, takže v tabuľke ani vo firemných
systémoch nič nemení. Hodí sa na čokoľvek, čo sa počíta vždy podľa
rovnakých pravidiel: cenu ponuky z cenníka, cestovné náhrady, rozpočet firemnej
akcie alebo počet ľudí na smene. Do nástroja patria len polia, ktoré kolegovia
naozaj vyplňujú, a výsledok, ktorý potrebujú poslať ďalej; ďalšie funkcie
pridajte, až si o ne niekto z nich povie.

Nástroj z tejto karty je jedna webová stránka, ktorá počíta. Súbor `kalkulacka.html` sa otvorí v prehliadači ako každá
iná stránka, len k nemu kolega nepotrebuje internet ani AI. Bežný chat
nástroj napíše tiež, ale do zložky ho neuloží a po zmene cenníka ho tam
neupraví.

Na rozdiel od stránky z karty [Pošlite odkaz namiesto
prílohy](card:web-page-output), ktorá všetkým ukazuje rovnaký obsah, do nástroja
kolega zadá svoje čísla a dostane svoj výsledok. Keď potrebujete z dát jednu
odpoveď len pre seba, stačí sa [spýtať svojich dát](card:prace-s-daty).

Kým nástroj počíta len z kópie cenníka a výsledok si kolega prečíta sám,
môžete ho kolegom dať hneď; keď má zapisovať do firemného systému, napríklad do
CRM so zákazníkmi, alebo ho majú otvárať priamo klienti, dohodnite sa najskôr
so správcom toho systému.

`kalkulacka-pravidla.md` a `AGENTS.md` sú obyčajné textové súbory, ktoré
AI zapíše sama a otvárať ich nemusíte. V `AGENTS.md` sú pravidlá pre AI
v zdieľanej zložke a AI si ich prečíta na začiatku každej práce.
## Nech nástroj drží krok s cenníkom

Pravidlo v `AGENTS.md` zabezpečí, že AI po každej zmene cenníka upraví nástroj
a zapísané pravidlá a ukáže vám, ako sa zmenila cena hotového prípadu. Keď
od januára platí nový cenník, uložte ho do rovnakej zložky a napíšte:

```text
Od 1. 1. platí nový cenník cenik-2027.xlsx. Uprav podľa neho kalkulačku a napíš mi, ktoré ceny sa zmenili.
```

Pretože nástroj leží v zdieľanej zložke, kolegovia po úprave otvoria rovno
novú verziu a nikomu nemusíte nič posielať.
## Príklad

Petra je obchodná asistentka v cateringovej firme v Brne. Cenu rautu počítajú
obchodníci v tabuľke: menu na osobu, jeden čašník na každých 20 hostí,
v sobotu a v nedeľu príplatok 15 % a doprava 30 Kč za kilometer tam
aj späť. 13. 10. 2026 otvorí AI v režime Cowork v zdieľanej zložke
Ponuky, kde leží `cenik-2026.xlsx` a ponuka, ktorú minulý týždeň poslala účtovníčka
kancelárii z Boskovíc: raut pre 80 hostí v sobotu 24. 10., 42 km od Brna,
52 200 Kč bez DPH. Vloží prompt a na posledný riadok doplní:

```text
Cenu rautu z cenik-2026.xlsx pre obchodníkov, ktorí ju hovoria klientom do telefónu. Hotový prípad je ponuka-boskovice.pdf.
```

Na prvý pokus ukáže kalkulačka 52 578 Kč. Pri porovnaní AI zistí, že
víkendový príplatok počíta aj z dopravy, opraví to a dostane rovnaké číslo
ako v ponuke. Petra si nástroj otvorí, zadá rovnaký raut a tlačidlom
skopíruje rozpis:

```text
Raut Standard, 80 hostí × 450 Kč: 36 000 Kč
Obsluha, 4 čašníci × 1 800 Kč: 7 200 Kč
Príplatok za sobotu 15 %: 6 480 Kč
Doprava 42 km tam aj späť: 2 520 Kč
Spolu bez DPH: 52 200 Kč
```

Potom napíše Ondrejovi, nech v kalkulačke zo zložky Ponuky spočíta svadbu,
ktorú práve rieši. Ondrej odpíše, že nevedel, či kilometre zadať len
tam, alebo tam aj späť. Petra jeho vetu pošle AI a pole sa teraz volá
„Vzdialenosť z Brna, jedna cesta (km)“.
## Keď sa zaseknete

- **AI tvrdí, že nástroj uložila, ale v zložke nie je:** pravdepodobne
  pracujete v bežnom chate, ktorý súbory ukladať nevie. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough) a otvorte v ňom
  zdieľanú zložku s cenníkom.
- **AI sa pýta na pravidlo, ktoré sami neviete:** napíšte jej, nech vám ukáže
  vzorec z tabuľky, z ktorého pravidlo odhaduje, a spočíta podľa neho jeden
  prípad. Keď ani tak neviete, spýtajte sa kolegu, ktorý s tabuľkou počíta
  najčastejšie.
- **Kolega namiesto nástroja vidí kód alebo ho neotvorí:** nech si
  `kalkulacka.html` stiahne do počítača a otvorí ho dvojklikom, nie cez
  webovú stránku OneDrive alebo Teams. Kolegom môžete poslať aj odkaz:
  požiadajte AI, nech z nástroja urobí stránku so zdieľaným odkazom, a
  zdieľajte ju len s ľuďmi z firmy ako v karte
  [Pošlite odkaz namiesto prílohy](card:web-page-output).
- **Nástroj počíta inak ako tabuľka:** napíšte AI, čo ste zadali, čo
  nástroj ukázal a aký výsledok je správny. AI nájde chybné pravidlo
  a opraví ho v nástroji aj v `kalkulacka-pravidla.md`.
## Čo bude hotové

V zdieľanej zložke máte nástroj `kalkulacka.html`, ktorý spočítal hotový
prípad rovnako ako vaša tabuľka, a prvý kolega vie, kde ho nájde. Vedľa
neho leží `kalkulacka-pravidla.md` s pravidlami výpočtu a v `AGENTS.md`
pravidlo, podľa ktorého AI po zmene cenníka nástroj upraví a ukáže, ako sa
zmenila cena hotového prípadu. Zmenu cenníka tak zadáte jednou vetou.
## Čo ďalej

Predtým, než nástroj dáte celému tímu, nechajte AI porovnať niekoľko jeho výsledkov
s tabuľkou, ako ukazuje [kontrola výstupu AI](card:kontrola-vysledku). Keď
nástroje s AI začne stavať viac ľudí v tíme, spíšte spoločné
[pravidlá pre AI](card:pravidla-pro-tym).
## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Vibe coding

**Čo to je:** Spôsob tvorby webu, aplikácie, skriptu alebo iného softvérového výstupu, pri ktorom človek popisuje zámer a požadované správanie a AI vytvára alebo upravuje kód. Človek priebežne skúša výsledok a upravuje ho.

**Čo to nie je:** Nie je to samostatný programovací jazyk ani záruka, že vytvorený kód je správny, bezpečný alebo pripravený na ostrú prevádzku.

**Prečo to študent potrebuje:** Pomáha pomenovať dostupnú cestu k vlastnému prototypu a zároveň rozlíšiť rýchly experiment od riešenia, ktoré potrebuje testovanie a odbornú kontrolu.

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
