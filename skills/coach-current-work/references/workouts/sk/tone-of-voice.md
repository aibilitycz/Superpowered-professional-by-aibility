# Uložte si tone of voice: váš štýl písania v súbore

AI z vašich vydarených textov zostaví, ako píšete, a prvá verzia každého e-mailu potom znie ako od vás.

## Uložte si tone of voice: váš štýl písania v súbore

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s pripravenými textami.
## Na čo to slúži

Vo štvrtok potrebujete klientovi napísať, že sa odovzdanie posúva o týždeň. AI
e-mail napíše za minútu, ale začne odstavcom o tom, ako si spoluprácu vážite,
a skončí vetou „Neváhajte ma kontaktovať“. Takto nepíšete, a tak e-mail
dvadsať minút prepisujete. O týždeň sa to v inom chate stane znova.

Keď AI dostane súbor s vaším štýlom a ukážkami, zmeníte v e-maile jedno
slovo namiesto dvadsiatich minút prepisovania.
## Čo si pripraviť

- 3 až 5 vlastných textov, s ktorými ste spokojní: e-maily, správy, príspevky,
- jeden text, ktorý tento týždeň potrebujete napísať, napríklad e-mail klientovi,
- AI, ktorú v práci používate, alebo AI v [režime Cowork alebo Code](glossary:workmode).
## Ako na to

1. Vložte prompt a pridajte svoje texty, alebo nechajte AI, nech si ich nájde v
   pošte. AI zostaví štýl do `tone-of-voice.md`: v priečinku ho uloží, v chate
   ho dá na stiahnutie.
2. Napíšte AI, čo nesedí, napríklad že vedeniu vykáte. AI opravy zapíše; keď
   súbor ponúka na stiahnutie, stiahnite si poslednú verziu.
3. V novom chate zadajte e-mail bez súboru, napríklad „Napíš klientovi, že sa
   odovzdanie posúva o týždeň.“ Potom priložte súbor: „Napíš to znova podľa
   tohto súboru.“

Mená klientov do pravidiel nepatria.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Zostav môj tone of voice: súbor, podľa ktorého bude akákoľvek AI písať ako ja.

Prejdime texty, ktoré ti prikladám alebo ktoré nájdeš v priečinku, v ktorom pracuješ. Všetky sú odo mňa a páčia sa mi. Ak ti žiadne nepriložím a máš prístup k mojej pošte, nájdi v odoslaných e-mailoch z posledného mesiaca päť dlhších, ktoré sú odo mňa, a ukáž mi, ktoré si vybral. Ak je textov menej ako tri, povedz mi to a požiadaj o ďalšie.

Zapíš môj štýl do súboru tone-of-voice.md v týchto častiach:

### V skratke
Tri vety o tom, ako znejem a komu najčastejšie píšem.

### Vety a odstavce
Ako dlhé píšem vety a odstavce, ako text začínam a ako ho končím.

### Oslovenie
Komu tykám, komu vykám a ako zdravím.

### Slová
Slová a obraty, ktoré používam. Pod ne slová a obraty, ktoré nikdy nenapíšem.

### Podľa typu textu
Čo sa mení v e-maile, v správe kolegom a v príspevku. Typ textu, ktorý v ukážkach chýba, vynechaj.

### Ukážky
Tri krátke úryvky z mojich textov, ktoré môj štýl najlepšie ukazujú.

### Kontrola
Jedna otázka, ktorú si položíš nad každým textom, než mi ho dáš.

Každé pravidlo opieraj o konkrétnu vetu z mojich textov. Za pravidlo považuj len to, čo sa opakuje aspoň v dvoch textoch. Popisuj, ako píšem, a moju povahu nehádaj. Mená, čísla a termíny z textov do pravidiel neprenášaj a v ukážkach ich nahraď všeobecným slovom, napríklad [klient] alebo [dátum].

Keď pracuješ v priečinku, ulož tam tone-of-voice.md a pridaj do súboru AGENTS.md v tom istom priečinku pravidlo: „Keď za mňa píšeš e-mail, správu alebo iný text, drž sa tone-of-voice.md.“ Ak AGENTS.md neexistuje, založ ho. Zabezpeč, aby si AGENTS.md v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka. Ak k priečinku nemáš prístup, ponúkni mi tone-of-voice.md na stiahnutie.

Nakoniec mi ukáž celý súbor a opýtaj sa, čo nesedí. Opravy zapíš do súboru; keď pracuješ bez priečinka, ponúkni mi opravenú verziu na stiahnutie.

## Vo vašom nástroji

### Microsoft Copilot
Copilot Chat s licenciou vidí pracovnú poštu a odoslané e-maily nájde sám.
Súbor na stiahnutie nedáva, a tak krok 3 urobte takto: v novom chate si
nechajte napísať e-mail bez štýlu, potom pravidlá vložte do Custom instructions
(Chat settings › Personalization) a rovnaké zadanie dajte v ďalšom novom
chate. Ak sa pravidlá nezmestia, nechajte ich AI skrátiť.

### ChatGPT
S Gmailom alebo Outlookom pripojeným v nastavení pod Plugins nájde ChatGPT
texty v pošte sám. Súbor dá na stiahnutie a v kroku 3 ho priložíte cez +. Aby
ho mal v každom chate, nahrajte ho do projektu (New project, Add source) a
píšte v jeho chatoch. Skilly zvláda ChatGPT v tarifoch Business, Enterprise a
Edu aj Codex.

### Claude
S poštou pripojenou v Customize, Connectors nájde Claude texty sám. Súbor
vytvorí na stiahnutie; aby ho mal v každom chate, nahrajte ho do projektu (New
Project). V Cowork ho AI uloží do priečinka a odkaz na `AGENTS.md` zapíše do
inštrukcií priečinka. Skilly zvláda Claude v chate, Cowork aj Claude Code, v tarifoch
Team a Enterprise ich správca zverejní celej firme.

### Gemini
Napíšte na začiatok správy @Gmail a Gemini odoslané e-maily nájde sám, keď
máte zapnutú Keep Activity a inteligentné funkcie Gmailu. Po opravách napíšte „Ulož
poslednú verziu do môjho Disku Google“ a v kroku 3 ju priložte cez Add from
Drive. Natrvalo si vytvorte Gem (Gems › New Gem) so súborom v Knowledge; v
Gmaile dajte pravidlá do Ask Gemini › Settings › Personalization.
## Čo je tone of voice

Tone of voice je anglický názov pre štýl, ktorým píše človek alebo firma;
do slovenčiny sa prekladá ako „tón hlasu“. V písaní sú to zvyky, podľa ktorých
ľudia spoznajú, že text je od vás: ako dlhé máte vety, komu tykáte a komu
vykáte, ako rýchlo prejdete k veci a čím e-mail končíte. Rovnakým postupom
zostavíte aj štýl riaditeľa, za ktorého píšete príspevky, alebo štýl celej firmy.

`tone-of-voice.md` je obyčajný textový súbor, ktorý otvoríte napríklad v
Poznámkovom bloku. Koncovka `.md` znamená, že je písaný v
[Markdowne](glossary:markdown); mriežky `###` v ňom označujú nadpisy. Prečíta ho
každá AI, ktorá vie prijať prílohu, takže ho použijete v ktoromkoľvek nástroji
a vezmete si ho so sebou, keď nástroj zmeníte. Vložiť ho môžete aj do trvalých
pokynov v nastavení nástroja, ako ukazuje karta
[Nastavte si Custom Instructions](card:custom-instructions).

`AGENTS.md` je súbor s pravidlami pre AI v priečinku. AI v režime Cowork alebo
Code si ho prečíta na začiatku každej práce v tom priečinku, a kde to nástroj
potrebuje nastaviť, zariadi to AI podľa promptu. Súbor so štýlom potom nemusíte
prikladať zakaždým.
## Nech AI píše vaším štýlom všade

Keď nechcete súbor prikladať zakaždým, urobte z `tone-of-voice.md`
[skill](glossary:skill): uložený návod, ktorý si AI otvorí sama vždy, keď
za vás píše. Pravidlo v `AGENTS.md` totiž platí len pre prácu v priečinku. Kde
skilly váš nástroj má, nájdete v bloku „Vo vašom nástroji“. Napíšte AI:

```text
Urob z tone-of-voice.md skill, ktorý použiješ vždy, keď za mňa píšeš text, ktorý pošlem ľuďom. Ulož ho tam, kde ho tento nástroj načítava, a over, že ho vidí aj nový chat. Ak ho uložiť nemôžeš, povedz mi presne, kam kliknúť.
```

Firemný tón stačí zostaviť raz. Vo firemných tarifách sa skill dá zdieľať s
kolektívom, takže ho má k dispozícii každý, kto za firmu píše.
## Príklad

Martin je projektový manažér vo stavebnej firme. V pondelok 12. 10. 2026 dá AI
v priečinku s pracovnými textami štyri e-maily dodávateľom a jednu piatkovú správu
vedeniu. AI
zapíše do `tone-of-voice.md` okrem iného:

```text
### V skratke
Píšem krátko a vecne. V prvej vete je stav veci alebo to, čo potrebujem. Dodávateľom a vedeniu vykám, kolegom zo stavby tykám.

### Vety a odstavce
Vety majú väčšinou do 15 slov a odsek najviac tri vety. Končím ďalším krokom a dátumom.

### Slová
Používam: „stav“, „potrebujem od vás“, „do piatku“.
Nepoužívam: „dovoľte mi“, „v nadväznosti na“, „neváhajte ma kontaktovať“.

### Kontrola
Povedal by som to takto dodávateľovi do telefónu?
```

Vo štvrtok 15. 10. potrebuje investorovi napísať, že sa betonáž posúva. V
novom chate bez súboru dostane e-mail, ktorý začína „Dovoľte mi Vás informovať o
aktuálnom vývoji“ a nový termín má až v treťom odstavci. So súborom e-mail
začína vetou „Betonáž sa posúva o týždeň, na štvrtok 22. 10.“ a končí tým, čo
Martin od investora potrebuje do piatku. Martin zmení jedno slovo a e-mail
odosiela.
## Keď sa zaseknete

- **Pravidlá sú všeobecné, napríklad „píše priateľsky“:** napíšte AI: „Ku každému
  pravidlu daj vetu z mojich textov, z ktorej vychádza, a pravidlá bez vety
  vymaž.“
- **Text so súborom stále neznie ako vy:** označte vetu, ktorú by ste
  napísali inak, pripojte svoju verziu a požiadajte AI, nech podľa rozdielu doplní
  pravidlo do `tone-of-voice.md`.
- **Nemáte dosť vydarených textov:** stačia tri. Pomôžu aj e-maily, ktoré ste
  po AI prepisovali: dajte AI jej verziu aj tú svoju a rozdiel ukáže váš štýl
  najlepšie.
- **Súbor nejde stiahnuť, alebo ho AI v priečinku nepoužíva:** v chate napíšte
  „Daj mi `tone-of-voice.md` ako súbor na stiahnutie.“ Ak to chat nevie,
  prepnite do [Cowork alebo Code](card:when-chat-is-not-enough). Tam napíšte
  „Prečítaj si `AGENTS.md` a zariadi, aby ho čítala na začiatku každej práce sama.“
## Čo bude hotové

Máte súbor `tone-of-voice.md` s pravidlami vášho štýlu a tromi ukážkami. V
Cowork alebo Code leží v priečinku a pravidlo v `AGENTS.md` zabezpečí, že sa ním AI
riadi sama; z chatu ho máte stiahnutý alebo uložený v nastavení nástroja. V
novom chate ste
videli rovnaký e-mail bez súboru a s ním a ten druhý znel ako od vás.
## Čo ďalej

Keď píšete len v bežnom chate, vložte súbor do
[projektu s podkladmi a pokynmi](card:asistent) a AI ho bude mať v každom chate
tohto projektu. Pred odoslaním textu von prejdite ho s AI podľa karty
[Skontrolujte výstup AI](card:kontrola-vysledku).
## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

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
