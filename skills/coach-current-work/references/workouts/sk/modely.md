# Prepínajte model podľa úlohy: rýchly na triedenie, silný na rozhodnutie

Na dvoch svojich úlohách porovnáte rýchly a silný model a AI si zapíše, ktorý použiť na akú prácu.

## Prepínajte model podľa úlohy: rýchly na triedenie, silný na rozhodnutie

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** so dvoma úlohami z tohto týždňa.
## Na čo sa hodí

Zákazník chce do piatku vedieť, či jeho zákazku stihnete do konca
novembra. Dáte AI tabuľku s kapacitami tímu a za pár sekúnd máte odpoveď,
že áno. AI však prehliadla, že dvaja ľudia z tímu majú v novembri dovolenku,
pretože bežala na východiskovom modeli a vy ste nevedeli, že sa dá prepnúť.

Rýchly model stačí na triedenie a prepísanie, a keď rozhodnutie necháte silnému
modelu s dlhším premýšľaním, skôr si všimne podmienky, ktoré rýchly preskočí.
## Čo si pripraviť

- hromadnú prácu z tohto týždňa, napríklad 30 až 50 úloh z porád alebo otázok na roztriedenie,
- jedno rozhodnutie, napríklad výber z troch ponúk podľa ceny, termínu a podmienok,
- podklady k obom úlohám,
- AI, ktorú v práci používate, alebo AI v [režime Cowork alebo Code](glossary:workmode).
## Ako na to

1. V ponuke modelu zvoľte najrýchlejšie nastavenie; kde je, ukazuje blok Vo
   vašom nástroji. Vložte prompt a na posledné dva riadky napíšte každú
   úlohu jednou vetou.
2. Prepnete na najsilnejšie nastavenie a napíšte „Druhé kolo“, v Cowork alebo
   Code v novom chate „Druhé kolo podľa `ulohy.md`“. AI úlohy spraví znova a
   kolá porovná.
3. Pri každej úlohe vyberte výsledok, ktorý by ste použili. AI podľa toho zapíše
   prehľad, ktorý model na čo, a uloží si pravidlo, aby vám nabudúce povedala,
   kedy prepnúť.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Porovnávame, ako dve moje pracovné úlohy zvládne rýchly a silný model. Úlohy sú na posledných dvoch riadkoch, podklady nájdeš v priečinku, v ktorom pracuješ, alebo v prílohách. Keď nepracuješ priamo v priečinku v mojom počítači, žiadne súbory nevytváraj a všetko nechaj v chate.

Prvé kolo:
- Napíš, na akom modeli a s akým nastavením premýšľania bežíš. Keď to nevieš presne, spýtaj sa ma.
- Urob obe úlohy celé. Chýbajúce podklady si vyžiadaj.
- Pri každej úlohe na začiatku a na konci zisti aktuálny čas a zapíš, ako dlho trvala. Keď to nejde, napíš „nemerané“ a pri porovnaní sa ma spýtaj, ako dlho som na ktoré kolo približne čakal.
- Zadanie oboch úloh a celý zvyšok tohto promptu od „Druhé kolo“ ďalej ulož do súboru ulohy.md. Výsledky ulož do súboru porovnani-modelu.md pod nadpis s názvom modelu a nastavením premýšľania.

Druhé kolo spustím správou „Druhé kolo“ na silnejšom nastavení:
- Keď bežíš na rovnakom modeli a nastavení ako v prvom kole, upozorni ma, aby som prepol.
- Vezmi úlohy z ulohy.md alebo z prvého kola vyššie v chate a urob ich znova od začiatku rovnako ako v prvom kole. Výsledky prvého kola nepoužívaj; porovnani-modelu.md otvor, až budeš mať vlastné výsledky, a pripíš ich pod nový nadpis.
- Potom obe kolá porovnaj. Pri každej úlohe ukáž najviac tri rozdiely, podľa ktorých sa pozná, či sa výsledok dá použiť, a ako dlho každé kolo trvalo. Dlhší text ani dlhšie čakanie samé o sebe lepší výsledok neznamenajú.
- Spýtaj sa ma, ktorý výsledok pri ktorej úlohe použijem, a v porovnani-modelu.md ho označ ako vybraný.

Nakoniec podľa mojej voľby založ súbor modely.md s prehľadom: typ práce, model a nastavenie premýšľania a jedna veta prečo. Na koniec prehľadu pridaj riadok: „Hotové rozhodnutie alebo rozbor pred použitím skontroluje iný model.“ Do súboru AGENTS.md v tom istom priečinku pridaj pravidlo: „Pred začatím úlohy sa pozri do modely.md. Keď sa na ňu hodí iný model alebo iné premýšľanie, než s ktorým bežíš, povedz mi to jednou vetou hneď na začiatku.“ Keď AGENTS.md neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka. Keď nepracuješ v priečinku, ulož si prehľad aj pravidlo do pamäte, a keď pamäť nemáš, napíš mi prehľad do chatu.

Hromadná práca:
Rozhodnutie alebo rozbor:

## Vo vašom nástroji

### Microsoft Copilot
V Copilot Chate je výber vpravo hore: v prvom kole Quick response, v druhom Think deeper, a rovnako odpovedzte, keď sa AI spýta, na čom beží. Iný model v Copilot Chate nevyberiete, porovnávate dĺžku premýšľania. Prehľad si Copilot uloží do pamäte (hláška Memory updated), bez pamäte ho vložte do Custom instructions pod Chat settings › Personalization.

### ChatGPT
Ponuka je na webe v poli pre správu, v mobile hore v konverzácii: v prvom kole Instant, v druhom najvyšší stupeň, ktorý máte (High alebo Extra High), na účte zdarma voľba Think. Prehľad si ChatGPT uloží do pamäte (Personalization › Memory), bez nej ho vložte do Custom Instructions. V Codexe je ponuka pod poľom pre správu.

### Claude
Ponuka modelu je vedľa tlačidla pre odoslanie: rýchly je napríklad Haiku,
silnejší Sonnet a najsilnejší Opus. V položke Effort nastavíte premýšľanie od
Low po Max. V Claude Code prepnete model príkazom `/model` a premýšľanie
príkazom `/effort`.

### Gemini
Dole v poli pre správu kliknite na názov modelu: v prvom kole zvoľte Flash
alebo Flash-Lite, v druhom Pro a hneď po ňom úroveň premýšľania High; kde sa
voľby volajú Fast, Thinking a Pro, zvoľte Fast a potom Pro. Pamäť aplikácie
Gemini pri pracovnom účte nemá, a tak prehľad s pravidlom vložte do
inštrukcií Gemu (Gems › New Gem) a úlohy zadávajte v ňom.
## Čo je model a premýšľanie

[Model](glossary:ai-model) je AI, ktorá vám odpovedá, a každá aplikácia ich
ponúka niekoľko. [Premýšľanie](glossary:reasoning-mode) je nastavenie, ako
dlho si model úlohu rozoberá, než odpovie; anglicky sa mu podľa aplikácie
hovorí thinking, reasoning alebo effort. Rýchly model s krátkym premýšľaním
stačí na hromadnú prácu a odpovie hneď. Silný model s dlhším premýšľaním sa
vyplatí na rozhodnutia a ťažké rozbory, odpovedá však pomalšie, takže ho na
všetko používať nechcete. Oboje prepnete v ponuke modelu; kde ju ktorý
nástroj má, nájdete v bloku „Vo vašom nástroji“.

`ulohy.md`, `porovnani-modelu.md` a `modely.md` sú obyčajné textové
súbory v priečinku s podkladmi, otvoríte ich napríklad v Poznámkovom bloku.
`AGENTS.md` je súbor s pravidlami pre AI v tom istom priečinku. AI v režime
Cowork alebo Code si ho prečíta na začiatku každej práce, a kde to nástroj
potrebuje nastaviť, zariadi to AI podľa promptu, takže pravidlo o výbere
modelu nemusíte opakovať.
## Nech výsledok skontroluje druhý model

Rozhodnutie, podľa ktorého budete konať, nechajte pred použitím skontrolovať
iným modelom, než ktorý ho napísal. Každý model prehliada niečo iné, takže
druhý často nájde, čo prvý preskočil. Najlepšie funguje AI inej firmy, než
ktorá rozhodnutia písala. V režime Cowork alebo Code ju otvorte v tom istom
priečinku, do bežného chatu priložte podklady a rozhodnutie vložte do správy pod
zadanie. Keď máte len jednu AI, zvoľte v nej iný silný model, a keď ani
ten nemáte, zadajte kontrolu aspoň v novom chate s rovnakým nastavením ako
v druhom kole. Zadanie na kontrolu:

```text
Skontroluj vybrané rozhodnutie (v porovnani-modelu.md, vyššie v tomto chate alebo v prílohe) proti podkladom. Nájdite podmienky, ktoré autor prehliadol, tvrdenia, ktoré podklady nepodporujú, a čísla, ktoré nesedia. Pri každom náleze napíš, kde v podkladoch je, a navrhni opravu. Keď je rozhodnutie v poriadku, napíš to jednou vetou.
```

Riadok na konci prehľadu `modely.md` vám kontrolu pri ďalších rozhodnutiach
pripomenie.
## Príklad

Lenka vedie prevádzku malého e-shopu s kozmetikou. V pondelok 5. 10. 2026
otvorí AI v priečinku Doprava a dá jej dve úlohy: roztriediť 48
zákazníckych otázok z minulého týždňa na reklamácie, dopravu a platby a
vybrať z troch ponúk nového dopravcu.

V prvom kole na najrýchlejšom modeli s krátkym premýšľaním má AI otázky
roztriedené za minútu a ako dopravcu odporučí najlacnejšiu ponuku. V druhom
kole na najsilnejšom modeli s dlhým premýšľaním roztriedi otázky rovnako,
len to trvá štyri minúty. Pri dopravcoch si
všimne, že najlacnejšia ponuka účtuje pokutu, keď e-shop pošle menej
ako 200 balíkov mesačne, a Lenka ich posiela 120. Odporučí preto druhú
najlacnejšiu.

Lenka vyberie triedenie z prvého kola a dopravcu z druhého. AI zapíše do
`modely.md`:

```text
### Ktorý model na čo
- Triedenie a prepísanie (otázky, zoznamy, tabuľky): rýchly model, krátke premýšľanie. Výsledok rovnaký ako u silného, hotový za minútu.
- Výber z ponúk a zmlúv: najsilnejší model, dlhé premýšľanie. Rýchly prehliadol pokutu v podmienkach dopravcu.
- Hotové rozhodnutie alebo rozbor pred použitím skontroluje iný model.
```

O týždeň neskôr zadá Lenka na najsilnejšom modeli prepísanie cenníka do tabuľky. AI
hned na začiatku napíše, že na toto stačí rýchly model.
## Keď sa zaseknete

- **V ponuke nemáte silnejší model ani dlhšie premýšľanie:** vo verzii zdarma
  býva namiesto výberu modelu len voľba dlhšieho premýšľania; zapnite ju pre
  druhé kolo. Vo firemnom účte môžu modely skrývať správcovia; požiadajte ich o
  prístup k silnejšiemu modelu.
- **AI v druhom kole nevie, čo má robiť:** v režime Cowork alebo Code
  otvorte nový chat v tom istom priečinku a napíšte „Druhé kolo podľa
  `ulohy.md`“. V bežnom chate zostaňte v tom istom chate a len prepnete model.
- **Oba modely urobia rovnakú chybu:** potom je chyba pravdepodobne v zadaní alebo
  v podkladoch. Ako ju nájsť, ukazuje karta [Skontrolujte výstup AI](card:kontrola-vysledku).
- **AI vám nabudúce nič nepripomenie:** skontrolujte, že `AGENTS.md` leží v
  priečinku a pravidlo v ňom je. V bežnom chate overte v nastaveniach, že máte
  zapnutú pamäť. Keď ju firma vypla, [prepnete do Cowork alebo Code](card:when-chat-is-not-enough).
## Čo bude hotové

Máte dve úlohy z tohto týždňa hotové a pri každej výsledok, ktorý ste vybrali.
Viete, kde vo svojej aplikácii prepnete model a dĺžku premýšľania, a máte prehľad,
ktorý model na akú prácu. V Cowork alebo Code leží prehľad v `modely.md`
a pravidlo v `AGENTS.md`, takže vám AI na začiatku úlohy povie, keď beží
na nevhodnom modeli. V bežnom chate má AI prehľad aj pravidlo v pamäti.
## Čo ďalej

Výsledok silného modelu pred odoslaním
[skontrolujte proti podkladom](card:kontrola-vysledku). Keď rozhodnutie
potrebuje zdroje z internetu, ktoré v priečinku nemáte, zadajte
[Deep Research](card:deep-research).
## AI model

**Čo to je:** Systém, ktorý spracováva vstup a vytvára odpoveď. Jeden AI nástroj môže ponúkať viacero modelov alebo ich voľbu skryť za názvy režimov.

**Čo to nie je:** Nie je to celý AI nástroj ani záruka určitej kvality výsledku.

**Prečo to študent potrebuje:** Pomáha oddeliť schopnosti modelu od kontextu, zadania, dostupných nástrojov a prostredia, v ktorom model beží.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Režim hlbšieho uvažovania

**Čo to je:** Voľba, pri ktorej AI venuje viac výpočtového času analýze úlohy pred vytvorením odpovede. Konkrétne prevedenie a názov závisia od produktu.

**Čo to nie je:** Nie je to automatická záruka správnosti ani vždy najlepšia voľba pre každú úlohu.

**Prečo to študent potrebuje:** Pomáha rozhodnúť, kedy zložitosť alebo význam úlohy odôvodňuje dlhšie čakanie, vyššiu spotrebu alebo obmedzenú dostupnosť.

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
