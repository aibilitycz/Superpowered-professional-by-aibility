# Skontrolujte výstup AI: čísla a tvrdenia proti podkladom

AI porovná čísla a tvrdenia vo výstupe s podkladmi, chyby opraví a uloží si pravidlo, aby sa nevracali.

## Skontrolujte výstup AI: čísla a tvrdenia proti podkladom

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s jedným výstupom AI a jeho podkladmi.
## Na čo sa hodí

V utorok ráno posielate riaditeľovi mesačný prehľad predaja. Komentár k číslam
napísala AI z exportu a stojí v ňom, že tržby v septembri vzrástli o 12 % hlavne
vďaka Slovensku. Na porade sa riaditeľ spýta, odkiaľ tých 12 % je, a vy neviete,
či AI videla celú tabuľku, alebo len jej prvý list.

Keď AI dohľadá každé číslo v podkladoch a pomenúva, prečo chyba vznikla,
riaditeľovi presne poviete, odkiaľ tých 12 % je.
## Čo si pripraviť

- výstup od AI, ktorý chcete poslať ďalej: report, ponuku, zápis alebo tabuľku,
- podklady, z ktorých vznikol: export, cenník, zmluvu alebo prepis stretnutia,
- AI, ktorú v práci používate, alebo AI v [režime Cowork alebo Code](glossary:workmode).
## Ako na to

1. Vložte prompt a pod „Výstup:“ a „Podklady:“ dajte text alebo názvy
   súborov; v chate podklady priložte. Keď výstup vznikol podľa
   [skillu](glossary:skill) alebo naplánovanej úlohy, napíšte to pod prompt.
2. AI vráti nálezy, opravený výstup a jedno kľúčové číslo s miestom v
   podklade. Otvorte podklad a číslo porovnajte sami, pretože AI svoju chybu
   môže prehliadnuť znova.
3. Napíšte, ktoré opravy nechcete, a doplňte miesta `[OVERIŤ]`, alebo ich
   nechajte vyškrtnúť. AI výstup dokončí, uloží pravidlo proti príčine chyby a
   povie vám, kam.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Skontroluj výstup, ktorý pripravila AI, než ho pošlem ďalej. Výstup a podklady, z ktorých vznikol, sú na konci správy: ako text, ako názvy súborov v zložke, alebo v prílohe.

Na začiatku napíš, ktoré súbory máš načítané a či celé: koľko strán, listov alebo riadkov. Keď niektorý nemáš celý, skontroluj, čo máš, a napíš mi, ktoré listy alebo strany mám poslať zvlášť, pretože z nich výstup vychádza. Potom nájdi vo výstupe každé číslo, cenu, dátum, meno, tvrdenie a rozhodnutie, ktoré sa dá overiť v podkladoch, a porovnaj ich. Prejdi aj opačný smer: čo v podkladoch je a vo výstupe chýba, napríklad položka z dopytu alebo úloha z porady. Čísla, ktoré vznikli výpočtom, spočítaj znova a výpočet ukáž. Štýl a tón neopravuj, kontroluj len to, či obsah sedí.

V prvej odpovedi vráť:
- tabuľku nálezov: citácia z výstupu, čo hovorí podklad a kde presne (súbor, strana alebo list a riadok tak, ako ho uvidím po otvorení súboru), oprava a príčina,
- celý opravený výstup,
- jedno číslo, na ktorom výstup stojí najviac, a kde presne ho v podklade nájdem, aby som ho mohol overiť.

Príčinu vyber z týchto: chýbal podklad, zadanie bolo nejasné, AI podklad pochopila inak, nenačítal sa celý podklad alebo bol chat príliš dlhý, podklad je zastaraný, chyba vo výpočte. Keď príčinu nevieš istotne, napíš, že je to odhad. Čo v podkladoch nenájdeš, nedomýšľaj: označ to [OVERIŤ] a spýtaj sa ma.

Potom počkaj. Napíšem ti, ktoré opravy nechcem, a doplním miesta s [OVERIŤ]. Potom opravenú verziu ulož do nového súboru vedľa pôvodného a napíš mi jeho názov; v chate bez zložky ju vráť celú.

Nakoniec napíš v jednej vete pravidlo proti príčine, ktorá sa môže vrátiť. Keď sa žiadna vrátiť nemôže, vezmi pravidlo „Pri každom čísle uveď súbor a stranu alebo list, z ktorého je.“ Keď ti napíšem, že výstup vznikol podľa skillu alebo naplánovanej úlohy, oprav pravidlo priamo v nich. Inak ho ulož do súboru AGENTS.md v zložke, v ktorej pracuješ; keď neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky. V bežnom chate bez zložky si pravidlo ulož do pamäte, a keď to nejde, napíš mi presne, kam ho v nastavení vložiť. Napíš mi, kam je pravidlo uložené.

Výstup:
Podklady:

## Vo vašom nástroji

### Microsoft Copilot
V Copilot Chate priložíte cez + až 20 súborov, každý do 50 MB, vrátane
Excelu a PDF. Pravidlo si Copilot uloží do pamäte a ukáže hlásenie Memory
updated; prehľad nájdete v nastavení pod Chat settings › Personalization ›
Saved memories. Všeobecné pravidlo pre všetky chaty patrí do Custom
instructions na rovnakom mieste.

### ChatGPT
V bežnom chate podklady priložte cez + pri poli pre správu. Pravidlo si
ChatGPT uloží do pamäte, ktorú nájdete v nastavení pod Personalization ›
Memory; všeobecné pravidlo pre všetky chaty patrí do Custom Instructions na
rovnakom mieste. So zložkou pracuje Codex, režim v aplikácii ChatGPT pre
počítač, ktorý číta `AGENTS.md` a súbory otvorí priamo v zložke.

### Claude
V bežnom chate si Claude pravidlo uloží do pamäte. V Cowork vyberiete zložku s
výstupom a podkladmi pri zadávaní úlohy a AI si odkaz na `AGENTS.md` zapíše do
inštrukcií zložky; Claude Code číta `AGENTS.md` sám.

### Gemini
Podklady priložte cez Add files z počítača alebo z Disku Google, naraz
maximálne 10 súborov do 100 MB. Chýbajúci list z Tabuliek Google otvorte a
stiahnite cez File › Download vo formáte CSV. Pamäť ani vlastné inštrukcie
aplikácia Gemini v pracovnom účte nemá, a tak si celý prompt aj pravidlo nechajte
uložiť ako skill (napíšte „Ulož to ako skill“); pri ďalšej kontrole potom stačí
dať výstup a podklady.
## Prečo výstup AI nesedí

Chyba vo výstupe má obvykle jednu zo šiestich príčin a každá potrebuje iné
pravidlo, ktoré ju nabudúce ohlídá:

| Príčina | Ako sa spozná | Pravidlo na nabudúce |
|---|---|---|
| Chýbal podklad | AI číslo alebo sľub domyslela, v podkladoch nie je | Čo AI v podkladoch nenájde, označí `[OVERIŤ]`. |
| Zadanie bolo nejasné | Ceny sú raz s DPH a raz bez, alebo za iné obdobie | Ceny sú vždy bez DPH a za celý kalendárny mesiac. |
| AI podklad pochopila inak | Vo výstupe je rozhodnutie, ktoré na porade zaznelo len ako návrh, alebo čísla z iného stĺpca | Za rozhodnutie sa považuje len to, čo v podklade niekto výslovne odsúhlasil. |
| Nenačítal sa celý podklad | Chýbajú posledné strany PDF, druhý list tabuľky alebo začiatok dlhého chatu | AI na začiatku napíše, koľko strán a listov načítala. |
| Podklad je zastaraný | V zložke leží minuloročný cenník vedľa nového a AI vzala ten starý | Ceny sa berú len z najnovšieho cenníka a jeho názov je pod výstupom. |
| Chyba vo výpočte | Súčet alebo percento nesedí, keď ho spočítate znova | AI každé číslo spočíta a výpočet ukáže. |

`AGENTS.md` je obyčajný textový súbor s pravidlami pre AI v zložke, v ktorej
pracujete. AI v režime Cowork alebo Code si ho prečíta na začiatku každej práce,
takže pravidlo nemusíte opakovať; kde to nástroj potrebuje nastaviť, zariadi
to AI podľa promptu. V bežnom chate si AI pravidlo uloží do pamäte.

Skill je uložený návod pre AI a naplánovaná úloha zadanie, ktoré AI spúšťa
sama v nastavený čas. Keď chyba vznikla v nich, AI opraví pravidlo priamo
tam a oprava platí pre každý ďalší výstup.
## Nech AI kontroluje sama

Všeobecné pravidlo zabezpečí, že AI každý výstup s číslami porovná s podkladmi skôr,
ako vám ho ukáže; pravidlo z cvičenia ohlídá len jednu príčinu. V zložke ho
AI zapíše do `AGENTS.md`, v bežnom chate do pamäte. Stačí zadať:

```text
Ulož si pravidlo pre všetku prácu so mnou: Než mi ukážeš report, ponuku, prezentáciu alebo e-mail s číslami, porovnaj každé číslo a tvrdenie s podkladmi. Pod výstup napíš jednou vetou, z ktorých súborov vychádza a čo sa overiť nepodarilo. Čo v podkladoch nie je, označ [OVERIŤ]. V zložke pravidlo zapíš do AGENTS.md a zabezpeč, aby si ho v tomto nástroji čítal na začiatku každej práce; v Cowork do inštrukcií zložky. V bežnom chate bez zložky si ho ulož do pamäte.
```
## Príklad

Lucia Benešová z agentúry, ktorá organizuje firemné akcie, posiela 16. 10. 2026
spoločnosti Kovo Jihlava ponuku na vianočný večierok pre 120 hostí. Ponuku
pripravila AI v zložke `Nabidky` z dopytu a cenníkov. Kontrola vráti tri
nálezy:

| Vo výstupe | V podklade | Príčina |
|---|---|---|
| raut 120 × 690 Kč | `cenik-2026-10.pdf`, strana 2: 740 Kč za osobu | podklad je zastaraný, AI vzala minuloročný cenník z rovnakej zložky |
| prenájom sály 18 000 Kč s DPH | tamtiež: 18 000 Kč bez DPH | zadanie bolo nejasné, nebolo povedané, či písať ceny s DPH |
| šatňa v ponuke chýba | `poptavka-kovo.pdf`, strana 3: šatňa pre 120 hostí | nenačítal sa celý podklad, AI prečítala len prvé dve strany dopytu |

AI prepočíta raut na 88 800 Kč, doplní šatňu podľa cenníka a opraví celkovú
cenu. Lucia otvorí cenník a cenu rautu na strane 2 porovná sama. Do
`AGENTS.md` v zložke `Nabidky` AI zapíše:

```text
Ceny ber len z najnovšieho cenníka v zložke, pri každej napíš, či je s DPH, alebo bez, a pod ponuku uveď názov cenníka. Dopyt prečítaj celý a na začiatku napíš, koľko má strán.
```

Ďalšia ponuka, ktorú AI v rovnakej zložke pripraví o týždeň neskôr, končí
riadkom „Ceny bez DPH podľa `cenik-2026-10.pdf`“.
## Keď sa zaseknete

- **AI nenačíta celý podklad alebo hlási, že je príliš veľký:** napíše vám,
  ktoré listy alebo strany jej chýbajú. Každý chýbajúci list uložte z Excelu
  voľbou Uložiť ako vo formáte CSV, ktorý uloží len jeden list, a pošlite do
  rovnakého chatu so správou „Tu sú chýbajúce listy, dokonči kontrolu.“ Celý podklad
  naraz skontroluje AI v
  [Cowork alebo Code](card:when-chat-is-not-enough), kde súbor otvorí
  priamo v zložke.
- **Tvrdenie nemá zdroj vo vašich podkladoch:** keď ide o údaj zvonku, napríklad
  cenu konkurencie alebo číslo o trhu, nechajte AI zdroj dohľadať na internete
  cez [Deep Research](card:deep-research). Inak tvrdenie z výstupu
  vyškrtnite.
- **Zle je takmer celý výstup:** príčina je v zadaní alebo v podkladoch a
  oprava po častiach ju neodstráni. Doplňte chýbajúci podklad, pripíšte k
  zadaniu pravidlo z kontroly a nechajte AI výstup urobiť znova.
- **AI nabudúce urobí rovnakú chybu:** spýtajte sa jej, kde má pravidlo
  uložené. V zložke má byť v `AGENTS.md`. V bežnom chate musí byť zapnutá
  pamäť; keď ju firma vypla, uložte pravidlo podľa bloku „Vo vašom
  nástroji“, alebo [prepnite do Cowork alebo Code](card:when-chat-is-not-enough),
  kde ho AI zapíše do `AGENTS.md`.
## Čo bude hotové

Máte opravený výstup, v ktorom čísla a tvrdenia sedia s podkladmi, a pri každej
oprave chyby viete, prečo vznikla. Jedno číslo, na ktorom výstup stojí
najviac, ste v podklade overili sami. Pravidlo proti príčine chyby má AI
uložené v `AGENTS.md`, v skille, v zadaní úlohy alebo v pamäti, takže ho pri
ďalšej práci použije sama.
## Čo ďalej

Keď čísla sedia a text má ešte znieť ako od človeka, prejdite ho
[anti-slopom](card:anti-slop), teda kontrolou obratov, podľa ktorých čitateľ
spozná AI. Keď rovnaký druh výstupu kontrolujete každý týždeň, urobte z
kontroly [skill](card:create-skill-from-proven-process), teda návod, ktorý
si AI otvorí sama.
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
