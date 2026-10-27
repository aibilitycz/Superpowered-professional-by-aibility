# Zadajte úlohu agentovi: AI ju dokončí sama

Dlhú úlohu s viacerými krokmi dokončí AI sama, napríklad cez noc, a vy ju prevezmete podľa dôkazov.

## Zadajte úlohu agentovi: AI ju dokončí sama

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** so zložkou podkladov k jednej úlohe.
## Na čo sa hodí

Do piatku má finančný riaditeľ dostať prehľad, ktoré zo šesťdesiatich zmlúv s
dodávateľmi sa v januári samé predĺžia. Ku každej chce aj termín, do kedy ju možno
vypovedať. Otvoriť každú zmluvu, nájsť článok o trvaní a výpovedi a zapísať
data do tabuľky sú dve popoludnia dôkladnej práce.

[Agent](glossary:agent) je AI, ktorá takúto úlohu urobí sama, napríklad cez noc,
a pokračuje, kým nesplní podmienky, ktoré s ňou na začiatku upresníte, napríklad
„každá zo 60 zmlúv má v tabuľke svoj riadok“.
## Čo si pripraviť

- jednu úlohu s viacerými krokmi, pri ktorej nechcete sedieť, napríklad kontrolu zmlúv
  alebo rešerš,
- podklady k nej v jednej zložke,
- AI v režime Cowork alebo Code; kde ho nájdete, ukazuje blok „Vo vašom
  nástroji“.
## Ako na to

1. Otvorte AI v režime Cowork alebo Code v zložke s podkladmi, vložte prompt a
   za riadok „Úloha:“ napíšte, čo má agent urobiť. AI navrhne podmienky
   dokončenia; opravte ich a napíšte „Áno, pracuj“.
2. Keď sa AI spýta, či môže upravovať súbory, povoľte to pre celú úlohu,
   aby sa v noci nezastavila. Agent potom pracuje sám a na konci napíše odovzdávaciu
   správu.
3. V odovzdávacej správe nájdete, kde je výsledok. Ku každej podmienke otvorte
   dôkaz a jednu-dve veci porovnajte so zdrojom; čo nesedí, vráťte agentovi aj s
   podmienkou.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorené vo vašej zložke, a za posledný riadok napíšte svoju úlohu:

Urob za mňa úlohu s viacerými krokmi a pracuj na nej sám, kým nebude hotová. Úloha je na poslednom riadku.

Najprv prejdí podklady v zložke alebo v prílohách a navrhni tri až päť podmienok dokončenia, podľa ktorých spoznám, že je hotovo. Každá podmienka musí ísť overiť jedným pohľadom: počet, súbor, záznam alebo číslo, ktoré porovnám so zdrojom. Ukáž mi ich a počkaj, kým ich potvrdím alebo opravím.

Akonáhle podmienky potvrdím, pridaj do súboru AGENTS.md v zložke pravidlo: „Pri každej dlhšej úlohe najprv navrhni tri až päť overiteľných podmienok dokončenia a nechaj ma ich potvrdiť. Pracuj, kým platia všetky, a na konci ku každej prilož dôkaz.“ Ak AGENTS.md neexistuje, založ ho. Ak ho tento nástroj sám nečíta, nastav, aby si ho prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky. Ak ku zložke nemáš prístup, ulož si pravidlo do pamäte; ak to nevieš, povedz mi presne, kam ho vložiť.

Potom pracuj sám. Po každom väčšom kroku si podmienky skontroluj a pokračuj, kým platia všetky. Drobnôstky rozhodni sám. Keď narazíš na rozhodnutie, ktoré je moje, zvoľ opatrnejšiu možnosť, označ ju a pokračuj; otázku mi napíš do odovzdávacej správy. Zastav sa, len keď bez mojej odpovede nejde robiť nič ďalšie. Ak niektorú podmienku splniť nejde, napíš prečo a čo navrhuješ.

Keď skončíš, napíš mi odovzdávaciu správu. Ku každej podmienke uveď, či je splnená, a dôkaz, podľa ktorého to overím: cestu k súboru alebo odkaz, číslo aj stranu, z ktorej pochádza, zmenený záznam alebo snímku obrazovky. Pod podmienky napíš, čo si rozhodol sám, na čo sa ma pýtaš a pri čom si neistý.

Úloha:

## Vo vašom nástroji

### Microsoft Copilot
Copilot Cowork zapnete na `copilot.cloud.microsoft` prepínačom hore vedľa
Chat. Zložku s podkladmi priložíte tlačidlom + z OneDrivu alebo SharePointu,
súbory z počítača do nej pretiahnete. Pracuje v cloude, takže notebook môžete
zatvoriť; hotové súbory nájdete v paneli vpravo a pravidlo si uloží ako skill.
Príkaz `/goal` Copilot nemá, podmienky potvrdíte vetou „Áno, pracuj“.

### ChatGPT
Najjednoduchší je režim Work: zapnete ho prepínačom hore na webe aj v aplikácii
ChatGPT pre počítač, podklady nahrajete a úloha spustená na webe beží ďalej, aj
keď notebook zatvoríte. Výsledok nájdete v odovzdávacej správe v chate. Keď
podklady ležia v zložke v počítači, použite Codex v aplikácii ChatGPT pre
počítač, kde podmienky potvrdíte príkazom `/goal`.

### Claude
V aplikácii Claude pre počítač otvorte Cowork alebo Claude Code so zložkou s
podkladmi. Úloha beží, kým je počítač zapnutý a aplikácia otvorená. V Claude
Code potvrdíte podmienky príkazom `/goal` a aplikácia vám pošle upozornenie, keď
úloha skončí.

### Gemini
Gemini Agent, ktorý dlhú úlohu dokončí sám, je len pre osobné účty Google
AI Pro alebo Ultra a v EÚ nie je. S firemným účtom zadajte úlohu po častiach v
aplikácii Gemini: cez Add from Drive priložte až 10 súborov a vložte prompt,
dalšie pridávajte po desiatich a nechajte tabuľku doplniť. Hotovú tabuľku uložte
tlačidlom Export to Sheets a pravidlo ako skill: napíšte „Ulož to ako
skill“.
## Čo je agent

Agent je AI, ktorá sama robí kroky za vás: otvára súbory a aplikácie, podľa
výsledku volí ďalší krok a pokračuje, kým nedosiahne cieľ. V režime Cowork
alebo Code takto AI pracuje, kedykoľvek jej zadáte úlohu.

Podmienky dokončenia sú cieľ, ku ktorému agent pracuje: kým neplatia všetky,
pokračuje, a vy podľa nich na konci výsledok prevezmete. Ku každej podmienke
vám ukáže dôkaz, takže prevzatie zaberie pár minút. Pri veľkej práci ich môže byť
aj dvadsať, pre prvú úlohu stačí tri až päť. Dobrá podmienka ide overiť jedným
pohľadom: počet, súbor, záznam alebo číslo, ktoré porovnáte so zdrojom. Slová
ako „prehľadné“ alebo „kvalitné“ agent splniť ani doložiť nevie, preto ich
prepíšte na niečo, čo ide spočítať alebo otvoriť.

`AGENTS.md` je obyčajný textový súbor s pravidlami pre AI v zložke, v ktorej
pracujete; prípona `.md` znamená text v [Markdowne](glossary:markdown),
jednoduchom zápise, ktorý otvoríte v každom editore. AI si súbor prečíta na
začiatku každej práce, takže nabudúce napíšete len úlohu a podmienky vám navrhne
sama. Nástroj bez prístupu ku zložke si pravidlo uloží do pamäte, alebo vám
povie, kam ho vložiť.
## Nech agent pracuje, kým nie je hotovo

Pri úlohe na celé popoludnie alebo noc sa hodí poistka, aby agent neskončil
skôr, než platia všetky podmienky. Niektoré nástroje na to majú príkaz `/goal`,
teda slovo, ktoré napíšete na začiatok správy; ktoré to sú, ukazuje blok
„Vo vašom nástroji“. Namiesto „Áno, pracuj“ napíšte `/goal` a za neho skopírujte
podmienky, ktoré AI navrhla. Agent hneď začne pracovať, po každom kroku sa
podmienky skontrolujú, a kým neplatia všetky, pokračuje sám ďalej:

```text
/goal V tabuľke zmluvy-prodlouzeni.xlsx je riadok pre každú zo 60 zmlúv v zložke Zmluvy. Ku každej zmluve je dátum konca, výpovedná lehota, číslo článku, z ktorého pochádza, a ročná cena bez DPH. Hore sú zmluvy, ktoré treba vypovedať do konca novembra.
```
## Príklad

Petra je asistentka finančného riaditeľa vo stavebnej firme. Vo štvrtok
8. 10. 2026 popoludní od neho dostane úlohu: do piatku prehľad, ktoré zo 60
zmlúv s dodávateľmi sa v januári samé predĺžia. Petra otvorí zložku Zmluvy v
AI v režime Cowork, vloží prompt a za posledný riadok napíše:

```text
Prejdi všetkých 60 zmlúv v zložke Zmluvy a zisti, ktoré sa v januári samé predĺžia a do kedy ich možno vypovedať.
```

AI navrhne štyri podmienky. Petra pridá piatu o ročnej cene, aby riaditeľ
videl, o koľko peňazí ide, a odpovie „Áno, pracuj“:

```text
1. V tabuľke zmluvy-prodlouzeni.xlsx je riadok pre každú zo 60 zmlúv v zložke Zmluvy.
2. Ku každej zmluve je dátum konca, výpovedná lehota a číslo článku, z ktorého pochádza.
3. Ku každej zmluve je označené, či sa sama predĺži.
4. Hore sú zmluvy, ktoré treba vypovedať do konca novembra, zoradené podľa termínu.
5. Ku každej zmluve je ročná cena bez DPH.
```

Petra nechá počítač zapnutý a ide domov. V piatok ráno nájde v chate
odovzdávaciu správu: 60 zmlúv a 60 riadkov v tabuľke, jedenásť zmlúv sa v januári
predĺži samo a štyri treba vypovedať do 30. 11. Dve zmluvy boli
naskenované a dáta z nich agent označil na overenie. Petra otvorí tri dáta v
pôvodných zmluvách a všetky sedia, pri jednej naskenovanej opraví dátum konca a
tabuľku pošle riaditeľovi. Ďalšiu dlhú úlohu už zadá len vetou, pretože
podmienky jej AI navrhne sama podľa pravidla v `AGENTS.md`.
## Keď sa zaseknete

- **AI skončí po jednej odpovedi, alebo tvrdí, že súbory otvoriť nemôže:**
  pracujete v bežnom chate. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough) podľa bloku „Vo vašom
  nástroji“.
- **Agent skončí skôr, než platia všetky podmienky:** napíšte mu, ktorú
  nesplnil, a nech pokračuje. Keď to váš nástroj vie, nabudúce potvrďte
  podmienky príkazom `/goal`, ako popisuje blok „Nech agent pracuje, kým
  nie je hotovo“.
- **Ráno nájdete úlohu zastavenú uprostred:** počítač pravdepodobne usnul, alebo
  agent čakal na povolenie upravovať súbory. Napíšte mu, nech pokračuje, a
  nabudúce mu úpravy povoľte pre celú úlohu a počítač nechajte v zásuvke.
- **Dôkaz nesedí so zdrojom:** napíšte agentovi, pri ktorej podmienke a čo
  nesedí, nech to opraví a znovu doloží. Ak chcete prejsť celý výsledok,
  pomôže [kontrola výstupu AI](card:kontrola-vysledku).
## Čo bude hotové

Máte hotovú jednu dlhú úlohu, pri ktorej ste nemuseli sedieť, a prevzali ste
ju podľa dôkazu ku každej podmienke dokončenia. V `AGENTS.md` v zložke, prípadne
v pamäti AI, je pravidlo, podľa ktorého AI pri ďalšej dlhšej úlohe sama navrhne
podmienky, pracuje, kým platia všetky, a na konci ich doloží.
## Čo ďalej

Keď sa tá istá úloha opakuje každý týždeň, nastavte ju ako
[naplánovanú úlohu](card:recurring-ai-task).

Keď sa väčšia práca dá rozdeliť na časti, ktoré na seba nečakajú, spustite ich
naraz v [paralelných vláknach](card:parallel-ai-workstreams).
## Agent

**Čo to je:** AI systém, ktorý dokáže v rámci zadaného cieľa plánovať viacero krokov, používať dostupné nástroje, pracovať so stavom a vykonávať povolené akcie. Rozsah schopností a miera samostatnosti závisia od konkrétneho nástroja a oprávnení.

**Čo to nie je:** Nie je to len uložený prompt ani asistent premenovaný na pokročilejšiu funkciu.

**Prečo to študent potrebuje:** Pomáha rozpoznať úlohy, ktoré vyžadujú nástroje, oprávnenia, kontrolné body a jasnú zodpovednosť za akcie.

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
