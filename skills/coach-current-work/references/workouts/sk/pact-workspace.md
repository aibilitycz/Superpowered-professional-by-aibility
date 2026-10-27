# Založte si PACT: pracovný priestor pre AI

AI vám dá všetku rozpracovanú prácu do jednej zložky s mapou, takže nový chat pokračuje bez vysvetľovania.

## Založte si PACT: pracovný priestor pre AI

**Náročnosť: stredná.**\
**Čas: približne 15 minút** s rozpracovanými projektmi v počítači.
## Na čo sa hodí

V pondelok otvoríte nový chat kvôli rozpočtu oddelenia a desať minút hľadáte
podklady po celom počítači. Minuloročná tabuľka je v Dokumentoch, poznámky z
porady na Ploše a ponuka dodávateľa v Stiahnutých súboroch. AI potom aj tak
počítala s minuloročnými cenami, pretože ste do chatu zabudli vložiť aktuálnu ponuku.

PACT je jedna zložka so štyrmi časťami, v ktorej AI sama nájde projekty,
podklady aj pravidlá.
## Čo si pripraviť

- súbory k projektom, na ktorých práve pracujete, a vedieť, kde v počítači
  sa nachádzajú,
- AI v [režime](glossary:workmode) Cowork alebo Code, ktorá pracuje so
  súbormi v počítači.
## Ako na to

1. Otvorte Cowork alebo Code v zložke s vaším menom, kde sú Dokumenty,
   Plocha aj Stiahnuté súbory, a vložte prompt. AI vám po projektoch ukáže, čo
   presunie do novej zložky `PACT`.
2. Potvrďte návrh; projekt, pri ktorom si nie ste istí, zatiaľ vynechajte.
   AI súbory presunie a do `AGENTS.md` zapíše mapu PACTu: čo kde leží a aké platia pravidlá.
3. Otvorte nový chat v zložke `PACT` a zadajte rovno úlohu na jednom
   projekte, napríklad „Pokračujme s rozpočtom. Čo v ňom ešte chýba?“ AI si
   podklady vezme sama.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorenej vo vašej zložke:

Založ mi v Dokumentoch zložku PACT: pracovný priestor, v ktorom má všetka moja práca svoje miesto. Ak so súbormi v počítači pracovať nevieš, povedz mi to hneď, aby som mohol prepnúť do Cowork alebo Code.

Vo vnútri vytvor štyri časti:
- 1_Projects: rozpracované projekty, každý v samostatnej zložke,
- 2_Agents: inštrukcie pre AI, napríklad prompty, ktoré používam opakovane,
- 3_Context: podklady, ktoré platia pre viac projektov, napríklad cenník, firemné pravidlá alebo dobré texty ako vzor,
- 4_Tools: pomôcky k práci, napríklad šablóny dokumentov alebo kalkulačky.

Prejdi Dokumenty, Plochu a Stiahnuté súbory a spýtaj sa ma, či mám pracovné súbory ešte niekde inde, napríklad v OneDrive. Podľa obsahu a dátumu poslednej zmeny spoznaj, na ktorých projektoch práve pracujem. Potom mi ukáž návrh po projektoch: názov projektu a akých súborov sa presun týka, nie každý súbor zvlášť. Po mojom potvrdení súbory presuň a zoznam presunov (odkiaľ kam) ulož do súboru presuny.md v zložke PACT, aby sa dali kedykoľvek vrátiť. Čo nepatrí k rozpracovanej práci, nechaj na mieste. Súbory v zdieľaných zložkách, s ktorými pracujú aj kolegovia, nepresúvaj; len do mapy zapíš, kde sa nachádzajú.

Nakoniec vytvor v zložke PACT súbor AGENTS.md s mapou PACTu: čo je v ktorej časti a aké projekty tam sú, pri každom jednou vetou, v akom je stave. Pridaj pravidlo: „Nový projekt založ ako zložku v 1_Projects. Každý nový súbor ulož do časti, kam patrí. Keď pribudne projekt alebo sa zmení jeho stav, uprav mapu v tomto súbore. Pred prácou na projekte si prečítaj jeho zložku.“ Zabezpeč, aby si si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky.

## Vo vašom nástroji

### Microsoft Copilot
Cowork nájdete vedľa prepínača Chat; ak tam nie je, požiadajte oňho správcu
IT. Vidí len OneDrive a SharePoint, takže zložku nevyberáte a na koniec
promptu pripíšete: „Namiesto Dokumentov, Plochy a Stiahnutých súborov prejdi môj
OneDrive a PACT založ tam. Mapu ulož ako dokument Word a pravidlá mi napíš
pre Customize, Preferences.“ V kroku 3 napíšte v novej úlohe, že PACT je na
OneDrive.

### ChatGPT
V aplikácii ChatGPT pre počítač prepnite na Codex, zvoľte otvorenie zložky
(open a folder) a vyberte zložku s vaším menom. Codex číta `AGENTS.md` sám a
naplánovanú úlohu založí, keď ho o ňu požiadate; nájdete ju pod Scheduled.
Ak Codex nevidíte, pravdepodobne ho vo firme vypol správca, tak ho požiadajte,
aby ho zapol.

### Claude
V aplikácii Claude pre počítač otvorte Cowork a vyberte zložku s vaším
menom, alebo ju otvorte v Claude Code; oboje majú platené tarify. Cowork si
pravidlo zapíše do inštrukcií zložky (Folder instructions), Claude Code číta
`AGENTS.md`. Naplánovanú úlohu AI založí, keď ju o to požiadate, a nájdete
ju v ľavom paneli pod Scheduled.

### Gemini
Gemini na Disku Google zložky nezakladá a súbory do nich nepresúva, takže
PACT s ním nepostavíte. Na tento workout potrebujete AI v režime Cowork
alebo Code, napríklad Claude Cowork, Claude Code alebo Codex v aplikácii ChatGPT;
spýtajte sa správcu IT, či ju firma má.
## Čo je PACT

[PACT](glossary:pact) je spôsob, ako usporiadať prácu, aby sa v nej vyznal
človek aj AI. Názov tvorí počiatočné písmená anglických slov Projects
(projekty), Agents (inštrukcie pre AI), Context (podklady, o ktoré sa
opierate) a Tools (pomôcky). Najjednoduchšia podoba sú štyri zložky ako v
tomto cvičení; vďaka číslam pred názvami sú vždy zoradené v tomto poradí.
Vy rozhodujete, ktoré projekty do PACTu patria, a presun aj usporiadanie urobí
AI. Žiadny špeciálny program na to nepotrebujete, a keď máte časť práce inde,
napríklad firemné dokumenty na zdieľanom disku, môže tam zostať a AI si do mapy
zapíše, kde ju nájde.

`AGENTS.md` je obyčajný textový súbor v hlavnej zložke PACTu, v ktorom sú
pravidlá pre AI. Volá sa podľa [agentov](glossary:agent), teda AI, ktorá
sama pracuje so súbormi, a prípona `.md` znamená zápis v
[Markdowne](glossary:markdown). Mnohé nástroje v režime Code si ho prečítajú samy
na začiatku každej práce, takže mapu ani pravidlá nemusíte opakovať. Kde to
nástroj sám nevie, AI pravidlo uloží do jeho nastavení, alebo vám napíše, kam ho vložiť.

Bežný chat na PACT nestačí, pretože do zložiek v počítači nevidí; ako
[prepnuť do Cowork alebo Code](card:when-chat-is-not-enough), ukazuje
samostatná karta. Do PACTu patria len rozpracované projekty a ich podklady; staré archívy nechajte, kde sú, a AI ich presunie, až o to požiadate.
## Nech sa PACT udržiava sám

Naplánovaná úloha raz týždenne roztriedi do PACTu aj súbory, ktoré pribudli
inde. Pravidlo v `AGENTS.md` pokryje prácu, ktorú robíte s AI v zložke
`PACT`. Prílohy z e-mailov totiž končia v
Stiahnutých súboroch a rýchle poznámky na Ploše. Vložte AI v režime Cowork
alebo Code toto zadanie a požiadajte ju, aby z neho naplánovala úlohu:

```text
Každý piatok o 16:00 prejdi Plochu a Stiahnuté súbory. Súbory z tohto týždňa, ktoré patria k projektom v PACTu, presuň do správnej časti podľa mapy v AGENTS.md. Ak pribudol nový projekt, založ mu zložku v 1_Projects a doplň ho do mapy. Na konci mi napíš, čo si kam presunul a pri ktorých súboroch nevieš, kam patria.
```

Keď úloha pracuje so súbormi vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená.
## Príklad

Jana pripravuje stánok firmy na veľtrh v Brne a jesenný zájazd do Dolomit
pre kolegov. Súbory k obom má rozhádzané po celom počítači. AI spozná oba
projekty a po Janinom potvrdení vytvorí:

```text
PACT/
  AGENTS.md
  1_Projects/
    veltrh-brno/         brief, rozpočet stánku, ponuky troch tlačiarní
    zajazd-dolomity/     program a kalkulácie
  2_Agents/
    prompt-pozvanka.md
  3_Context/
    cennik-2026.xlsx
    logo-a-farby.pdf      hodí sa ku stánku aj k pozvánke na zájazd
  4_Tools/
    kalkulacka-zajazdu.xlsx
```

V stredu 14. 10. otvorí nový chat v zložke `PACT` a napíše: „Pokračujme
s veľtrhom. Ktorá tlačiareň je najlacnejšia?“ Dobrá odpoveď porovná tri
ponuky zo zložky projektu, bez toho, aby Jana čokoľvek vkladala. Ak sa AI pýta, o
aký veľtrh ide, pravdepodobne pracuje mimo zložky `PACT`.
## Ak sa zaseknete

- **AI tvrdí, že zložky založila, ale v počítači nie sú:** pravdepodobne
  pracujete v bežnom chate, ktorý so súbormi v počítači pracovať nevie. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough) a vyberte v ňom zložku s
  vaším menom.
- **AI nevidí alebo nemôže presunúť súbory v niektorej zložke:** skontrolujte,
  že ste v Cowork alebo Code vybrali zložku s vaším menom. Ak súbory
  ležia mimo nej, spýtajte sa AI, ako jej dať prístup k nim.
- **Chcete presun vrátiť:** povedzte AI v zložke `PACT`, nech podľa súboru
  `presuny.md` vráti súbory späť, všetky alebo len jeden projekt.
- **Nový chat sa pýta na veci, ktoré sú v zložke:** otvorte chat v
  zložke `PACT`, nie v bežnom okne chatu, a skontrolujte, že `AGENTS.md`
  leží priamo v nej. Potom AI požiadajte, nech si ho prečíta.
## Čo bude hotové

Máte zložku `PACT` so štyrmi časťami, v nej rozpracované projekty a podklady a
v `AGENTS.md` mapu, podľa ktorej sa v zložke vyzná každý nový chat. Na
skutočnej úlohe ste si overili, že AI na projekte pokračuje, bez toho, aby ste jej
čokoľvek vkladali alebo vysvetľovali.
## Čo ďalej

Nechajte AI napísať každému projektu [úvodnú stránku](card:project-start-here),
z ktorej je hneď vidieť, v akom je stave. Z postupu, ktorý AI vysvetľujete
stále dokola, nech urobí
[návod, ktorý použije znova](card:create-skill-from-proven-process).
## Agent

**Čo to je:** AI systém, ktorý dokáže v rámci zadaného cieľa plánovať viacero krokov, používať dostupné nástroje, pracovať so stavom a vykonávať povolené akcie. Rozsah schopností a miera samostatnosti závisia od konkrétneho nástroja a oprávnení.

**Čo to nie je:** Nie je to len uložený prompt ani asistent premenovaný na pokročilejšiu funkciu.

**Prečo to študent potrebuje:** Pomáha rozpoznať úlohy, ktoré vyžadujú nástroje, oprávnenia, kontrolné body a jasnú zodpovednosť za akcie.

## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

## PACT

**Čo to je:** Model usporiadania AI pracovného prostredia do štyroch typov prvkov: Projects, Agents, Context a Tools, teda projekty, asistenti alebo agenti, kontext a nástroje.

**Čo to nie je:** Nie je to povinná sada štyroch zložiek ani hotový softvér. Konkrétna podoba závisí od toho, ako človek pracuje a čo už používa.

**Prečo to študent potrebuje:** Pomáha zorientovať viac projektov, opakovaných AI postupov, stabilného kontextu a nástrojov tak, aby ich našiel človek aj AI.

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
