# Nastavte agentovi oprávnenia: čo smie sám a čo nikdy bez vás

AI prestane pýtať na rutinné kroky a pred odoslaním e-mailu alebo vymazaním dát počká na vaše potvrdenie.

## Nastavte agentovi oprávnenia: čo smie sám a čo nikdy bez vás

**Náročnosť: stredná.**\
**Čas: približne 15 minút** so zložkou, v ktorej AI pracuje.
## Na čo je to dobré

Agent má počas obeda doplniť nový cenník do 20 ponúk a po hodine čaká pri prvej
otázke, či smie uložiť súbor. Kolegyňa to vyriešila tak, že svojmu
agentovi povolila všetko, a ten jej v podobnej úlohe rovno poslal
zákazníkovi ponuku, ktorú ešte nikto neprekontroloval.

Pomôže rozdeliť prácu [agenta](glossary:agent) na rutinu, ktorú podľa
režimu oprávnení v nástroji urobí bez pýtania sa, a tvrdé hranice v `AGENTS.md`,
súbore s pravidlami pre AI, pred ktorými sa zastaví a počká na vás.
## Čo si pripraviť

- zložku, v ktorej s AI pracujete; `AGENTS.md` v nej byť nemusí,
- jednu reálnu úlohu, ktorá končí e-mailom von, napríklad report alebo odpoveď
  klientovi,
- poštu pripojenú k AI cez [konektor](card:plugin-connector), aby e-mail
  po vašom „ODESLAŤ“ odoslala sama,
- AI v [režime](glossary:workmode) Cowork alebo Code ([ako do neho prepnúť z
  chatu](card:when-chat-is-not-enough)).
## Ako na to

1. Vložte prompt a povedzte AI, čo je u vás rutina a čo nejde vrátiť späť. AI
   zistí, ako má oprávnenia nastavené, a navrhne dva zoznamy.
2. Zoznamy upravte a schváľte. AI ich zapíše do `AGENTS.md` a povie vám,
   ktorý režim oprávnení zvoliť a kde ho prepnete.
3. V novom chate zadajte úlohu z prípravy. AI má rutinu urobiť bez otázok a
   pri e-maile sa zastaviť: ukáže koncept a bez vášho „ODESLAŤ“ nič neodošle.

Do zoznamu „Nikdy bez mňa“ patria kroky, ktoré nejdú vrátiť späť alebo odchádzajú
mimo firmu, a zvyčajne ich stačí päť až osem.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
otvorené vo vašej zložke:

Nastav, čo smieš v tejto zložke robiť sám a pri čom sa vždy zastavíš a počkáš na mňa. Na rutinu sa ma pýtať nemusíš; pri krokoch, ktoré nejdú vrátiť späť, sa zastav vždy.

Najprv zisti, v akom režime oprávnení teraz pracuješ a aké povolenia alebo zákazy máš v tomto nástroji uložené. Ak režim zistiť nejde alebo ho nástroj nemá, napíš to a neodhaduj. Ak je v zložke AGENTS.md, prečítaj ho. Potom sa ma spýtaj na dve veci: pri ktorých rutinných krokoch ťa musím stále schvaľovať a ktoré akcie v mojej práci nejdú vrátiť späť alebo odchádzajú von, napríklad e-maily klientom, platby, mazanie, zverejnenie alebo zmeny v zdieľaných tabuľkách a systémoch.

Z odpovedí navrhni dva zoznamy:
- Smieš sám: rutina, ktorú robíš bez pýtania sa, napríklad čítať a upravovať súbory v tejto zložke, spúšťať bežné príkazy a pripravovať koncepty.
- Nikdy bez mňa: päť až osem tvrdých hraníc, teda krokov, ktoré nejdú vrátiť späť alebo odchádzajú von, a ku každej postup, podľa ktorého sa zastavíš. Pri e-mailoch a správach mimo firmy: priprav koncept, ukáž mi príjemcu, predmet a celý text a odošli ho až po mojej samostatnej správe so slovom ODESLAŤ; ak odoslať nevieš, ulož koncept do pošty a napíš mi to. Pri mazaniach dát, ktoré nejdú obnoviť: vypíš, čo presne zmažeš, a počkaj na dve potvrdenia v dvoch správach. Po každom zápise do inej aplikácie výsledok znovu načítaj a ukáž mi ho. Heslá a prístupové kľúče nikdy nevkladaj do chatu ani do súborov; keď je potrebné prihlásenie, požiadaj ma, aby som ho urobil cez správcu hesiel.
Ak chcem výnimku, zapíš ju pod nadpis „Výnimky“ jednou vetou aj s podmienkou, napríklad „Smieš sám uložiť ponuku do zdieľanej zložky, keď som ju v chate schválil.“

Ukáž mi oba zoznamy a počkaj, kým ich upravím alebo schválim. Potom ich zapíš do AGENTS.md pod nadpismi „Smieš sám“ a „Nikdy bez mňa“; ak súbor neexistuje, založ ho. Ak v ňom už nejaké zákazy sú, presuň ich do „Nikdy bez mňa“, aby neboli na dvoch miestach. Pripíš pravidlo: „Keď sa ma spýtaš na rutinný krok, ktorý schválim, navrhni ho pridať do Smieš sám. Keď narazíš na krok, ktorý nejde vrátiť a v zozname Nikdy bez mňa chýba, zastav sa a navrhni ho pridať.“ Zabezpeč, aby si AGENTS.md v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky. Ak so zložkou nepracuješ, ulož si zoznamy do pamäte alebo mi napíš text, ktorý vložím do vlastných inštrukcií.

Nakoniec mi napíš, ktorý režim oprávnení mám v tomto nástroji zvoliť, aby si sa na rutinu nepýtal a rizikové kroky nástroj predom skontroloval, a kde ho prepnem. Ak sa v nastavení trvalo dajú povoliť rutinné príkazy, ktoré som schválil, nastav to; ak to sám nastaviť nevieš, napíš mi presne, kam čo vložiť.

## Vo vašom nástroji

### Microsoft Copilot
Copilot v režime Cowork (prepínač hore vedľa Chatu) režim oprávnení nemá
a pred odoslaním e-mailu, správy v Teams alebo pozvánky sa pýta sám. Zložku
neotvárate; na koniec promptu pripíšte „Súbor nezakladaj, zoznamy mi napíš
ako text pre Customize, Preferences.“ a text vložte do Customize na úvodnej
stránke Cowork. Always allow pri e-mailoch von nepoužívajte, pustí ďalšie bez
pýtania.

### ChatGPT
V aplikácii ChatGPT pre počítač prepnite na Codex, zvoľte otvorenie zložky
(open a folder) a pod políčkom pre správu zvoľte Approve for me (schvaľ za mňa):
Codex sa potom pýta len pri krokoch, ktoré vyhodnotí ako rizikové. S Full access
pracuje úplne bez schvaľovania. `AGENTS.md` číta Codex sám; keď nemá
pripojenú poštu, skončí krok 3 pri koncepte e-mailu.

### Claude
V Claude Code zvoľte Auto v ponuke režimov vedľa tlačidla pre odoslanie:
rutinu pustí bez pýtania a rizikové kroky predom posúdi druhý model. Trvalé
povolenia a výnimky popísané slovami uložíte príkazom `/permissions`. V Cowork
nechajte východiskové Automatically approve; trvalé zmazanie súborov vždy potvrdí s
vami. S pripojeným Gmailem Claude e-mail len pripraví ako koncept.

### Gemini
Gemini Agent, ktorý robí kroky sám, je len pre osobné účty Google AI Pro a
Ultra a v EÚ nie je, takže s firemným účtom režim oprávnení nenastavíte. Keď
potrebujete, aby AI robila kroky sama, požiadajte IT o nástroj s režimom Cowork
alebo Code. Zoznam „Nikdy bez mňa“ si pre písanie e-mailov nechajte uložiť ako
skill: napíšte „Ulož to ako skill“ a nájdete ho v Customize, Skills.
## Čo je režim oprávnení

Režim oprávnení (v nástrojoch po anglicky permissions) je nastavenie, ktoré
určuje, na čo sa vás AI spýta, než to urobí. Nástroje majú zvyčajne tri
stupne: AI sa pýta takmer na všetko, pýta sa len pri krokoch, ktoré vyhodnotí ako
rizikové, alebo sa nepýta vôbec. Prostredný stupeň je dobrý východiskový stav pre
každodennú prácu. Stupeň bez pýtania je vedomá voľba pre ľudí, ktorí majú
hranice spísané a výsledky kontrolujú, a kolegom ho ako východiskový
nenastavujte.

Nástroj sám spozná rizikové príkazy, napríklad hromadné mazanie. Nevie však, že
e-mail pre konkrétneho klienta alebo zmazanie tabuľky s objednávkami je pre
vás riziko. To AI vie z `AGENTS.md`, súboru v
[Markdowne](glossary:markdown), ktorý si prečíta na začiatku každej práce, a
preto má každá hranica postup s jasným okamihom, kedy rozhodujete vy.
Samostatná správa „ODESLAŤ“ je poistka: veta „a potom to pošli“ uprostred
dlhšieho zadania odoslanie nespustí. Po zápise do inej aplikácie vám AI výsledok
znovu otvorí, takže vidíte, že sa naozaj uložil.

Výnimku napíšte slovami aj s podmienkou; AI ju zapíše pod nadpis Výnimky. Keď
zostávate len pri bežnom chate, ako [prepnúť do Cowork alebo
Code](card:when-chat-is-not-enough), ukazuje samostatná karta.
## Nech sa zoznamy dopĺňajú samy

Pravidlo z promptu zabezpečí, že AI navrhne nový krok do zoznamu vždy,
keď sa vás naň spýta. Raz za mesiac sa však hodí prejsť, kde sa vás AI
pýtala zbytočne, a naplánovaná úloha to urobí za vás. Vložte AI v režime
Code toto zadanie a požiadajte ju, nech z neho naplánovanú úlohu založí:

```text
Každé prvé pondelok v mesiaci o 9:00 prejdí AGENTS.md v tejto zložke a moje chaty v nej za posledný mesiac. Vypíš kroky, na ktoré si sa ma pýtal a ja ich vždy schválil, a navrhni, ktoré presunúť do „Smieš sám“. Vypíš aj nové akcie, ktoré nejdú vrátiť späť a v zozname „Nikdy bez mňa“ chýbajú. Zoznamy uprav, až návrh schválim.
```

Keď úloha pracuje so súbormi vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená. Ak už máte
[týždennú revíziu](card:weekly-ai-review), pridajte tento bod do nej namiesto
samostatnej úlohy.
## Príklad

Tereza vedie zákazky v malej reklamnej agentúre a s AI v režime Cowork
pripravuje mesačné reporty pre šesť klientov. Má zapnuté schvaľovanie každého
kroku, a tak sa jej AI za hodinu práce jedenásťkrát spýtala, či smie
uložiť súbor. V pondelok 19. 10. 2026 otvorí zložku Reporty a vloží prompt.
Na otázku, čo nejde vrátiť späť, odpovie: e-maily klientom a zmazanie exportov;
faktúry v účtovnom systéme AI nemá meniť vôbec. AI zapíše:

```text
### Smieš sám
- Čítať a upravovať súbory v zložke Reporty a zakladať v nej nové.
- Sťahovať exporty z reklamných účtov a počítať z nich tabuľky.
- Pripravovať koncepty e-mailov klientom.

### Nikdy bez mňa
- E-mail mimo firmu: ukáž príjemcu, predmet a celý text a odošli ho až po mojej samostatnej správe ODESLAŤ.
- Mazanie exportov a súborov, ktoré nejdú obnoviť: vypíš, čo zmažeš, a počkaj na dve potvrdenia v dvoch správach.
- Faktúry v účtovnom systéme nemeniť; napíš mi, čo je potrebné zmeniť.
- Po každom zápise do inej aplikácie výsledok znovu načítaj a ukáž mi ho.
- Heslá a prístupové kľúče nikdy do chatu ani do súborov; prihlásenie urobím cez správcu hesiel.

### Výnimky
- Smieš sám poslať hotový report kolegovi Martinovi do tímového chatu, keď som ho schválila.
```

AI jej napíše, že pracuje v režime, v ktorom Tereza schvaľuje každý krok, a
ukáže, kde ho prepnúť na ten, ktorý sa pýta len pri rizikových. V utorok 20. 10.
Tereza v novom chate napíše: „Priprav októbrový report pre Pekáreň Novák a
pošli ho pani Novákovej.“ AI stiahne export z reklamného účtu a report uloží
bez jedinej otázky. Potom ukáže koncept e-mailu s adresou, predmetom a textom
a čaká. Tereza opraví oslovenie, pošle „ODESLAŤ“ a AI jej z odoslanej pošty
ukáže, že e-mail odišiel s prílohou.
## Keď sa zaseknete

- **AI sa stále pýta na rutinné kroky:** nástroj je pravdepodobne v režime, v
  ktorom schvaľujete každý krok. Prepnite ho podľa bloku „Vo vašom nástroji“
  a AI napíšte, aby rutinné príkazy povolila trvalo.
- **AI urobila krok zo zoznamu „Nikdy bez mňa“ bez pýtania:** napíšte „Vypíš
  pravidlá, ktoré sa načítali na začiatku práce.“ Ak `AGENTS.md` medzi nimi
  chýba, ako zabezpečiť, aby sa načítal, ukazuje karta [súboru s pravidlami pre
  AI](card:agents-md); ak tam je, nechajte AI hranicu prepísať na postup s
  krokom, napríklad „ukáž koncept a čakaj na ODESLAŤ“.
- **Nástroj zastaví krok, ktorý ste chceli:** potvrďte ho v okne
  schválenia, alebo AI napíšte presne, čo má urobiť a s čím, napríklad „presuň
  report do zdieľanej zložky `Klienti/Pekáreň Novák`“.
- **Ponuku režimov nevidíte:** pracujete v bežnom chate, alebo ju vo firme
  obmedzil správca. Prepnite do [Cowork alebo
  Code](card:when-chat-is-not-enough), prípadne požiadajte IT, aby vám ju
  sprístupnili.
## Čo bude hotové

Máte dva krátke zoznamy, čo AI smie urobiť sama a pri čom sa vždy zastaví,
uložené v `AGENTS.md` alebo v nastavení vášho nástroja. Keď nástroj režimy
oprávnení má, beží v tom, ktorý sa na rutinu nepýta. Na reálnej
úlohe ste si overili, že AI prácu dokončí bez otázok a pred odoslaním
e-mailu čaká na vaše „ODESLAŤ“. Keď sa vás nabudúce spýta na nový rutinný
krok, navrhne ho do zoznamu sama.
## Čo ďalej

Keď AI vie, kde sa zastaviť, zverte jej [dlhú úlohu, ktorú dokončí
sama](card:agent-task), napríklad cez noc. Prácu, ktorá sa opakuje každý týždeň,
nastavte ako [naplánovanú úlohu](card:recurring-ai-task).
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
