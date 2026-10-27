# Zaveďte si týždennú revíziu: upracte si svoje AI nastavenia

AI každý týždeň nájde zádrheľ, ktorý sa vo vašich chatovacích konverzáciách opakoval, opraví ho a uprace, čo nepoužívate.

## Zaveďte si týždennú revíziu: upracte si svoje AI nastavenia

**Obtiažnosť: stredná.**\
**Čas: približne 15 minút** s týždňom práce v režime Code za sebou.
## Na čo je to dobré

Vo štvrtok ste AI tretíkrát za týždeň opravovali ceny v ponuke, pretože ich
znovu napísala s DPH. Zákazníkom ich pritom posielate bez DPH, vždy ste to
vysvetlili a v ďalšom chate sa chyba vrátila. K tomu sa AI stále riadi
pravidlom z jari, že ponuka platí 14 dní, hoci od septembra platí 30 dní.

Týždenná revízia je pravidelný upratovací proces: AI prejde vaše chaty z posledného týždňa,
a čo sa opakovalo, opraví tam, odkiaľ pravidlá pri práci číta.
## Čo si pripraviť

- AI v [režime](glossary:workmode) Code, ktorá vidí históriu chatov vo vašom
  počítači,
- priečinok, v ktorom s AI najčastejšie pracujete; report sa do neho uloží,
- chaty z posledného týždňa vedené v režime Code.
## Ako na to

1. V režime Code otvorte svoj priečinok a vložte prompt; cestám k priečinkom v
   ňom rozumieť nemusíte. Keď sa aplikácia spýta na prístup k histórii chatov
   a súborom, povoľte ho.
2. Prečítajte si report a pri každom zádrheli povedzte, či opravu chcete. AI
   ju zapíše tam, kam navrhla, a čo potrebujete z archívu späť, vráti.
3. V novom chate zadajte prácu, v ktorej sa zádrheľ objavoval, a overte, že
   ju AI spraví správne. Potom jej vložte zadanie z bloku „Nech revízia prebehne
   každý piatok“ ako naplánovanú úlohu.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Code, otvorenej vo vašom
priečinku:

Urob týždennú revíziu môjho AI nastavenia: zisti, čo sa mi s tebou za posledný týždeň opakovane zádrhlo, a navrhni, ako to opraviť.

Prejdi moje chaty s tebou z posledných siedmich dní. Claude Code ich ukladá do ~/.claude/projects, Codex do ~/.codex/sessions. Ak k nim nemáš prístup, povedz mi to hneď a poraď, čo zapnúť alebo kam prepnúť. Prejdi tiež moje nastavenia: pravidlá pre AI, napríklad súbor AGENTS.md, skilly a pripojené konektory.

Nájdi zádrhele, ktoré sa objavili aspoň v dvoch rôznych chatovacích konverzáciách: veci, ktoré ti opakovane vysvetľujem alebo opravujem, a chyby nástrojov, ktoré sa vracajú. Nezapočítavaj, čo sa stalo raz, výpadky služieb ani chyby, ktoré sa hneď v ďalšom kroku vyriešili. Vyber najviac tri a zoradi ich od toho, ktorý ma stál najviac času. Pri každom uveď, v ktorých chatoch a kedy sa objavil, a navrhni jednu opravu na správnom mieste:
- týka sa jednej práce, napríklad ponúk: oprava patrí do skillu pre tú prácu, a keď skill chýba, navrhni nový,
- týka sa všetkej práce: oprava patrí do pravidiel pre AI,
- zlyháva nástroj alebo konektor: oprava patrí do jeho nastavení.
Pri každej oprave napíš presné znenie, ktoré pridáš alebo zmeníš.

Potom nájdi skilly, ktoré sa v celej histórii, ktorú vidíš, ani raz nespustili, a pravidlá k práci, ktorú už nerobím, alebo pravidlá, ktoré si odporujú. Skilly na prácu, ktorá sa robí raz za mesiac alebo štvrťrok, nechaj byť. Najviac tri takéto veci presuň do priečinka revize-ai/archiv a nič nevymazávaj: skill presuň celý, pravidlo z AGENTS.md vyber a pripíš do revize-ai/archiv/pravidla.md. Čo presunúť nevieš, napíš mi, kde to vypnúť.

Všetko zapíš do krátkeho reportu revize-ai/RRRR-MM-DD.md s dnešným dátumom: koľko chatov revízia pokryla, zádrhele s návrhmi opráv a čo je nového v archíve aj odkiaľ to je. Report mi ukáž a spýtaj sa, ktoré opravy chcem. Schválené opravy potom zapíš tam, odkiaľ ich pri ďalšej práci naozaj prečítaš, a do reportu doplň, čo sa zmenilo.

## Vo vašom nástroji

### Microsoft Copilot
Microsoft neuvádza, že by Copilot vedel prejsť vaše chaty za posledný týždeň.
Revíziu preto robte v nástroji s režimom Code, napríklad Claude Code alebo Codex
v aplikácii ChatGPT, a o ten požiadajte správcu IT. Medzitým patria opravy,
ktoré už poznáte, do Custom instructions alebo Saved memories (Settings and
more, Chat settings, Personalization).

### ChatGPT
Revíziu urobí Codex, ktorý si chaty ukladá do počítača: v aplikácii ChatGPT
pre počítač prepnite na Codex, zvoľte otvorenie priečinka (open a folder) a
vložiť prompt. Revízia počíta s chatmi vedenými v Codexe. Naplánovanú úlohu
Codex založí, keď ho o ňu v chate požiadate, a nájdete ju v bočnom
paneli pod Scheduled.

### Claude
Revíziu urobí Claude Code v aplikácii Claude pre počítač, ktorý si chaty
ukladá do počítača: vyberte v ňom svoj priečinok a vložte prompt. Revízia počíta
s chatmi vedenými v Claude Code, nie v bežnom chate ani v Cowork. Naplánovanú
úlohu AI založí, keď ju o to požiadate, a nájdete ju v ľavom paneli pod
Scheduled.

### Gemini
Firemné účty v Gemini nemajú pamäť minulých chatov, takže ich AI za týždeň
neprejde. Gemini CLI, ktoré pracuje so súbormi v počítači, Google od júna
2026 nahrádza nástrojom Antigravity CLI a prompt s jeho históriou chatov
nepočítava. Revíziu preto robte v nástroji s režimom Code, napríklad Claude Code
alebo Codex v aplikácii ChatGPT, a požiadajte oň správcu IT.
## Čo je týždenná revízia

Zádrheľ je drobnosť, kvôli ktorej práca s AI vždy trvá o chvíľu dlhšie: vec,
ktorú AI vysvetľujete stále znova, alebo konektor, ktorý sa každý týždeň
odhlási. Jeden zádrheľ stojí pár minút, ale za mesiac sa z nich nazbierajú
hodiny. Revízia započíta len zádrheľ, ktorý sa opakoval aspoň v dvoch chatoch,
a opravu zapíše až po vašom súhlase. Čo našla a čo zmenila, zapíše do
reportu, takže za mesiac uvidíte, ktoré zádrhele zmizli.

Opravu AI zapíše tam, kam patrí:
- zádrheľ v jednej práci, napríklad v ponukách, do skillu pre tú prácu,
- zádrheľ vo všetkej práci, napríklad v oslovení alebo vo formáte dátumu, do
  pravidiel pre AI,
- nástroj, ktorý zlyháva, do jeho nastavení.

Pravidlá pre AI ležia v súbore `AGENTS.md` v priečinku, v ktorom pracujete.
Keď váš nástroj číta pravidlá z iného súboru, AI opravu zapíše tam.
Pravidlá z nastavení bežného chatu revízia v Code nevidí a oprava v
`AGENTS.md` platí len pre prácu v režime Code. Report je obyčajný textový
súbor s príponou `.md` a AI vám ho ukáže priamo v chate.

Za pár mesiacov máte desiatky skillov a pravidiel a mnohé z nich AI nikdy nespustí.
Zastaralým pravidlom sa AI stále riadi a nepoužívané skilly jej sťažujú výber toho
správneho. Revízia ich preto presunie do priečinka `revize-ai/archiv`, odkiaľ ich AI
pri práci nenačíta, a v reporte pri každej veci uvedie, odkiaľ ju vzala. Vaše
dokumenty revízia nepresúva, len pravidlá a skilly, a keď nič nepoužívaného
nemáte, report to len zapíše.

Revízia prejde aj vaše nastavenia: pravidlá pre AI, [skilly](glossary:skill) a
konektory. Skill je uložený postup pre jeden typ práce a konektor prepojenie
AI s inou aplikáciou, napríklad s poštou. Chyba, ktorá sa stala raz, nové
pravidlo nepotrebuje, pretože AI číta pravidlá pri každej práci a v dlhom
zozname ľahšie niektoré prehliadne.

Nástroje v režime Code si históriu chatov ukladajú do počítača, takže ju AI
prejde sama; bežný chat takúto revíziu neurobí. Keď ste minulý týždeň
pracovali hlavne v bežnom chate alebo v Cowork, [prepnite do
Code](card:when-chat-is-not-enough), týždeň pracujte tam a revíziu urobte
potom.
## Nech revízia prebehne každý piatok

Revízia najviac pomôže, keď sa opakuje. Stačí naplánovaná úloha, ktorú AI
spustí každý piatok popoludní. Nový report nájdete v `revize-ai` vedľa
predchádzajúcich a uvidíte v ňom, ktoré zádrhele z minulého týždňa zmizli.
Vložte AI v režime Code toto zadanie a požiadajte ju, nech z neho naplánovanú
úlohu založí:

```text
Každý piatok o 14:00 urob týždennú revíziu môjho AI nastavenia. Najprv sa pozri do posledného reportu v priečinku revize-ai a zisti, ktoré jeho zádrhele zmizli a ktoré sa objavujú ďalej. Potom prejdí moje chaty s tebou z posledných siedmich dní, nájdi zádrhele, ktoré sa objavili aspoň v dvoch chatoch, a ku každému navrhni opravu na správnom mieste. Najviac tri nepoužívané skilly alebo neplatné pravidlá presuň do revize-ai/archiv a zapíš, odkiaľ sú. Report ulož do revize-ai s dnešným dátumom a spýtaj sa ma, ktoré opravy chcem.
```

Úloha beží vo vašom počítači, takže sa spustí, len keď je počítač zapnutý a
aplikácia otvorená. Keď v piatok o 14:00 pri počítači nebývate, napíšte do
zadania čas, kedy pri ňom obvykle ste. Zhrnutie s otázkou, ktoré opravy chcete,
nájdete medzi naplánovanými úlohami a tam aj odpoviete.
## Príklad

Pavla vybavuje objednávky v menšej tlačiarni. V piatok 16. 10. AI prejde jej
chaty z týždňa a zapíše do `revize-ai/2026-10-16.md`:

```text
### Týždenná revízia 16. 10. 2026
Revízia pokryla 14 chatov od 9. do 16. 10.

### Zádrhele
1. Ceny v ponukách s DPH, hoci ich zákazníkom posielate bez DPH. Opravovali ste to v troch chatoch (12., 14. a 15. 10.).
   Oprava: do skillu „Ponuka pre zákazníka“ pridám riadok „Ceny uvádzaj bez DPH, DPH napíš zvlášť pod súčet.“
2. Dátumy v e-mailoch píšem vo formáte 10/14/2026. Prepisovali ste ich v dvoch chatoch (13. a 15. 10.).
   Oprava: do AGENTS.md pridám pravidlo „Dátum píš slovensky, napríklad 14. 10. 2026.“

### Odložené do archívu
- Skill „Preklad do nemčiny“ z priečinka so skillmi: v histórii ani raz nespustený.
- Pravidlo so starým podpisom e-mailu z AGENTS.md: odporuje novšiemu pravidlu s firemným podpisom.
```

Pavla schváli obe opravy. V pondelok zadá v novom chate ponuku pre reklamnú
agentúru a AI napíše ceny bez DPH, bez pripomienok. Ďalší piatok
report uvedie, že oba zádrhele zmizli.
## Keď sa zaseknete

- **AI tvrdí, že vaše minulé chaty nevidí:** prompt ste pravdepodobne vložili do
  bežného chatu, ktorý do histórie vo vašom počítači nevidí. Vložte ho do
  AI v [režime Code](card:when-chat-is-not-enough), otvorenej vo vašom
  priečinku.
- **AI našla len pár chatov alebo nič, čo by sa opakovalo:** minulý týždeň ste
  pravdepodobne pracovali hlavne v bežnom chate alebo v Cowork. Týždeň pracujte v Code
  a revíziu spustite znova. Keď v Code pracujete dlhšie, požiadajte AI, nech prejde
  dlhšie obdobie, napríklad posledný mesiac.
- **Zádrheľ sa v novom chate objaví znova:** napíšte AI: „Tento zádrheľ sa
  opakuje. Zisti, odkiaľ naozaj čítaš pravidlá, a opravu zapíš tam.“
- **Niečo z archívu vám chýba:** povedzte AI, nech to podľa reportu vráti z
  priečinka `revize-ai/archiv` na pôvodné miesto.
## Čo bude hotové

V priečinku `revize-ai` máte report z prvej revízie. Oprava zádrheľa, ktorý sa
v tomto týždni opakoval, je zapísaná tam, odkiaľ ju AI číta, a v novom chate ste si
overili, že sa zádrheľ už nevracia. Nepoužívané skilly a neplatné pravidlá,
ak ste nejaké mali, ležia v archíve, odkiaľ ich môžete kedykoľvek vrátiť.
Revízia je naplánovaná na každý
piatok, takže ďalší report príde sám.
## Čo ďalej

Keď revízia navrhne nový skill, dolaďte ho podľa karty
[skillu](card:create-skill-from-proven-process). Aby
piatková revízia bežala spoľahlivo a sama hlásila chyby, pokračujte k
[naplánovanej úlohe](card:recurring-ai-task).
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
