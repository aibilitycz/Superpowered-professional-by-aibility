# Pripojte si konektor: AI pracuje priamo vo vašich aplikáciách

AI sama prejde vašu poštu a koncepty odpovedí uloží priamo do schránky.

## Pripojte si konektor: AI pracuje priamo vo vašich aplikáciách

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s pracovnou poštou a kalendárom.
## Na čo je to dobré

Pred utorkovým mítingom chcete vybaviť päť e-mailov, ktoré čakajú od minulého týždňa.
Každý kopírujete do chatu a odpoveď späť do pošty. Pri treťom zistíte, že
termín, ktorý AI navrhla, máte v kalendári už obsadený.

Konektor je prepojenie AI s aplikáciou: AI cez neho číta poštu aj kalendár, takže
nič nekopírujete a nenavrhne termín, ktorý máte obsadený.
## Čo si pripraviť

- prístup k pracovnej pošte a kalendáru; prepojenie s AI niekedy zapína správca,
- AI, ktorú v práci používate; kde má konektory, ukazuje blok „Vo vašom
  nástroji“,
- pre režim Cowork alebo Code priečinok na pravidlá, napríklad nový prázdny `Pošta`.
## Ako na to

1. Vložte prompt. AI zistí, aké konektory pre poštu a kalendár má, dostupné
   pripojí a pri ostatných povie, kam kliknúť. Prihlásenie potvrdíte sami.
2. AI vyberie najviac päť e-mailov z posledného týždňa, na ktoré máte odpovedať
   vy; newslettery a kópie len spočíta. Koncepty uloží do schránky, vy ich
   prejdete, upravíte a odošlete.
3. V novom chate napíšte len „Odpovedz na najnovší e-mail, ktorý čaká na
   odpoveď.“ AI by mala sama uložiť koncept a overiť termín v kalendári.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Prepoj sa s mojím pracovným e-mailom a kalendárom a rovno v nich urob prvú prácu, aby som do chatu nič nekopíroval.

Opýtaj sa ma, aký e-mail a kalendár v práci používam. Potom zisti, aké konektory alebo pluginy pre ne tu máš. Keď plugin pokrýva viac mojich aplikácií naraz, daj mu prednosť. Čo môžeš pripojiť sám, pripoj. Kde musím niečo urobiť ja, napríklad sa prihlásiť alebo povoliť prístup, povedz mi presne, kam kliknúť, a počkaj, kým to urobím. Do pošty a kalendára pristupuj len cez konektory. Po pripojení over, že konektor vie ukladať koncepty e-mailov. Keď nevie, nájdi iný konektor alebo plugin. Keď žiadny nenájdeš, prepoj poštu cez službu Composio, a keď to tu nejde, povedz mi, kam prepnúť.

Keď bude všetko pripojené, urob toto:
- Prejdi poštu z posledných siedmich dní a vyber najviac päť e-mailov, na ktoré som ešte neodpovedal a mám odpovedať, od najnaliehavejšieho. Ku každému uveď odosielateľa, o čo ide a do kedy odpovedať.
- Ku každému napíš odpoveď a ulož ju ako koncept priamo do mojej schránky. Keď odpoveď závisí od termínu, pozri sa do kalendára, kedy mám voľno.
- Koncepty neodosielaj, prejdeme ich a odošleme sami.

Nakoniec si ulož pravidlo pre ďalšie použitie: ktoré aplikácie máš pripojené, že odpovede na poštu ukladáš ako koncepty a termíny overuješ v kalendári. Keď pracuješ v priečinku, zapíš ho do súboru AGENTS.md, a keď súbor neexistuje, založ ho. Zabezpeč, aby si AGENTS.md v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka. V bežnom chate si pravidlo ulož do pamäte.

## Vo vašom nástroji

### Microsoft Copilot
Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (prepínač Cowork
hore vedľa Chatu); poštu a kalendár má pripojené priamo a priečinok nepotrebuje.
Odpovede uloží medzi koncepty v Outlooku a pravidlo ako skill. Bez Cowork
pripraví koncept aj Copilot Chat, pravidlo si zapamätá pod Personalization.
Naplánované úlohy sú na stránke Automations.

### ChatGPT
Konektor pre Outlook alebo Gmail zapnete v nastavení pod Plugins, v novom chate
cez + pri poli pre správu. Koncepty ukladá v tarifách Plus, Pro, Business a
Enterprise; vo firme zápis zapína správca. Pravidlo si ChatGPT uloží do
pamäte, Codex do `AGENTS.md`. Naplánované úlohy sú pod Scheduled.

### Claude
Konektory nájdete v ľavom paneli v Customize, Connectors, v novom chate ich
zapnete cez + pri poli pre správu. Konektor Microsoft 365 ukladá koncepty, len
keď správca povolí zápis. V Cowork AI konektor pripojí sama a pravidlo zapíše
do inštrukcií priečinka. Naplánované úlohy sú pod Scheduled.

### Gemini
V aplikácii Gemini napíšte @, vyberte Gmail aj Kalendár a vložte prompt; na
ponuku Composia odpovedzte „pokračuj len s Gmailom a Kalendárom“. Gemini
nájde e-maily a odpovede navrhne, koncept ale uloží až Gemini v Gmaili cez
Ask Gemini vpravo hore. Pravidlo si nechajte uložiť ako skill (Customize,
Skills), naplánované úlohy sú pod Scheduled.
## Čo je konektor a plugin

Konektor je prepojenie AI s jednou aplikáciou. Podľa toho, čo vie, v nej AI len
hľadá a číta, alebo aj zapisuje: uloží koncept e-mailu alebo založí schôdzku v
kalendári. Rovnako pripojíte aj CRM, teda systém, v ktorom vediete
zákazníkov a obchody, alebo zdieľaný disk. V nastavení sa konektoru niekedy hovorí
MCP server; MCP je technický štandard, cez ktorý sa AI pripája k
aplikáciám, a nič viac o ňom vedieť nemusíte.

Plugin je balík pre určitú prácu. Pridá naraz niekoľko konektorov a
návody, podľa ktorých v nich AI pracuje, napríklad pre obchod: CRM, e-mail a
postup, ako písať ponuku.

Keď pre vašu aplikáciu konektor neexistuje alebo poštu len číta, použite
Composio. Je to služba, cez ktorú sa AI napojí na viac než tisíc aplikácií,
napríklad na Outlook, Gmail alebo CRM, a v pošte vie ukladať aj koncepty odpovedí.
Nastavuje sa v režime Cowork alebo Code a AI to urobí sama; vy si len založíte
účet v Composio a potvrdíte prístup k aplikáciám. Základný účet je zadarmo a
platobnú kartu nevyžaduje. Vo firemnom účte sa pred pripojením opýtajte IT,
či ho smiete použiť.

`AGENTS.md` je obyčajný textový súbor s pravidlami pre AI v priečinku, v ktorom
pracujete. AI v režime Code si ho prečíta na začiatku každej práce, takže
pripojené aplikácie nabudúce nemusíte vysvetľovať.
## Nech AI prejde poštu sama

S pripojeným e-mailom a kalendárom môže AI každé ráno prejsť poštu za vás.
Stačí naplánovaná úloha, ktorú AI spustí každý pracovný deň ráno a koncepty
odpovedí vám nechá v schránke. Vložte do AI toto zadanie a požiadajte ju, aby
z neho naplánovanú úlohu založila. Kde naplánované úlohy vo svojom nástroji
nájdete, ukazuje blok „Vo vašom nástroji“.

```text
Každý pracovný deň o 7:30 prejdite cez konektor poštu, ktorá prišla od posledného spustenia. Vyber e-maily, na ktoré som ešte neodpovedal a mám odpovedať, od najnaliehavejšieho, a ku každému ulož do schránky koncept odpovede. Termíny overuj v kalendári. Keď neprišlo nič, na čo je potrebné odpovedať, nič nepíš.
```
## Príklad

Jana koordinuje sťahovanie kancelárie do novej budovy. V pondelok 12. 10. ráno má
v schránke 38 neprečítaných e-mailov. Po pripojení Outlooku a kalendára AI vráti:

```text
Na čo odpovedať (4 z 38 e-mailov)

1. Sťahovacia firma: chce potvrdiť sťahovanie 24. 10. Odpovedať dnes.
   Koncept: termín potvrdzujeme, v kalendári je ten deň voľno.
2. Peter z IT: pýta sa, kedy môže zapojiť sieť v novom poschodí. Odpovedať do stredy.
   Koncept: navrhujem štvrtok 15. 10. o 9:00, keď je v kalendári voľno.
3. Dodávateľ nábytku: potrebuje termín podpisu odovzdávacieho protokolu. Odpovedať do piatku.
   Koncept: protokol podpíšem pri prevzatí nábytku 22. 10.
4. Vedenie: chce krátky stav projektu na piatkový míting.
   Koncept: sťahovanie 24. 10., sieť 15. 10., nábytok 22. 10.

Koncepty sú uložené v schránke. Zvyšných 34 e-mailov tvoria newslettery a kópie na informáciu.
```

Jana koncepty prejde, u Petra zmení čas na 10:00 a všetky štyri odošle. Na druhý
deň ráno v novom chate napíše len „Odpovedz na najnovší e-mail, ktorý čaká na
odpoveď.“ AI nájde otázku recepcie na počet parkovacích kariet, termín odovzdania
overí v kalendári a koncept uloží do schránky.
## Keď sa zaseknete

- **Konektor v nastavení chýba alebo nejde zapnúť:** opýtajte sa AI, či
  pre vašu aplikáciu existuje. Ak áno, vo firemnom účte ho pravdepodobne zapína
  správca a AI mu napíše krátku žiadosť: ktorý konektor potrebujete a na čo.
  Ak neexistuje, prepojte aplikáciu cez Composio.
- **Konektor vie poštu len čítať:** v režime Cowork alebo Code požiadajte AI, aby
  poštu prepojila cez Composio alebo našla iný konektor, ktorý vie ukladať aj
  koncepty. Z bežného chatu prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough).
- **AI tvrdí, že poštu nevidí:** skontrolujte, či je konektor v tomto chate
  zapnutý; v ChatGPT a Claude cez tlačidlo + pri poli pre správu, v Gemini
  zmienkou @Gmail v každom novom chate. Ak je zapnutý, prihlásenie pravdepodobne
  neprebehlo alebo ste sa prihlásili do iného účtu. Nechajte AI overiť účet a
  pripojte ho znova.
- **AI v novom chate koncept neuloží alebo termín neoverí:** v režime Cowork
  alebo Code napíšte: „Prečítaj si `AGENTS.md` a zabezpeč, aby si ho čítala na začiatku
  každej práce sama.“ V bežnom chate sa AI opýtajte, či pravidlo má v
  pamäti alebo v pokynoch, a ak nie, nech vám povie, kam ho uložiť.
## Čo bude hotové

Máte k AI pripojený e-mail a kalendár a odoslali ste odpovede na
najnaliehavejšiu poštu z posledného týždňa. AI má uložené pravidlo pre koncepty a
kalendár a v novom chate ste si overili, že podľa neho pracuje.
## Čo ďalej

Keď chcete, aby ranný prechod poštou bežal spoľahlivo a sám hlásil chyby,
pokračujte k [naplánovanej úlohe](card:recurring-ai-task). Keď z
jednej práce vznikajú dva naväzujúce kroky, napríklad z e-mailov tabuľka a z tabuľky
odpovede, nastavte si [workflow cez viac aplikácií](card:cross-app-workflow).
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
