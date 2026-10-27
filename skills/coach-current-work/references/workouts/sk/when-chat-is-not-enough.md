# Pustite AI do svojej zložky: keď bežný chat nestačí

Keď chat nestačí na viac súborov naraz, prejdite do režimu Cowork alebo Code a AI výsledok uloží priamo do zložky.

## Pustite AI do svojej zložky: keď bežný chat nestačí

**Náročnosť: stredná.**\
**Čas: približne 15 minút** so zložkou rozpracovanej práce.
## Na čo sa hodí

Do štvrtka 15. 10. máte vedeniu odporučiť dodávateľa nových notebookov. Päť
ponúk leží v zložke ako PDF. Do chatu ich nahrávate po jednej, porovnávaciu
tabuľku z odpovede kopírujete do Wordu, a keď v stredu príde šiesta
ponuka, začínate odznova.

V [pracovnom režime](glossary:workmode) Cowork alebo Code má AI prístup k
celej zložke, takže šiestu ponuku len doplní do hotovej tabuľky.
## Čo si pripraviť

- zložku s rozpracovanou prácou k jednému projektu, v počítači alebo na firemnom
  disku,
- úlohu, ktorú vám v chate nešlo vyriešiť; keď žiadnu nemáte, AI spraví prehľad
  dokumentov,
- AI, ktorú používate; kde má Cowork alebo Code, ukazuje blok „Vo vašom
  nástroji“.
## Ako na to

1. Otvorte vo svojom AI nástroji režim Cowork alebo Code. U niektorých nástrojov
   je to aplikácia pre počítač, ktorú si najskôr nainštalujete.
2. Dajte AI prístup ku zložke, a keď sa spýta, či s ňou môže pracovať,
   povoľte to. Vložte prompt a pod neho jednou vetou pripíšte úlohu, ktorú vám v
   chate nešlo vyriešiť.
3. Otvorte súbor, ktorý AI do zložky uložila. Čo v ňom nesedí, napíšte AI do
   toho istého chatu a ona súbor opraví.

Čo v dokumentoch chýba, AI označí [DOPLNIŤ] a doplníte to vy.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code,
 otvorené vo vašej zložke, a pod neho pripíšte svoju úlohu:

Pracuješ v mojej zložke s rozpracovanou prácou. Keď do nej nevidíš alebo do nej nevieš uložiť súbor, povedz mi to hneď: som pravdepodobne v bežnom chate a musím prejsť do režimu Cowork alebo Code.

Prejdi všetky súbory v zložke a napíš mi dvoma vetami, čo v nej je.

Potom sprav úlohu, ktorú ti píšem pod týmto zadaním. Keď tam žiadna nie je, sprav prehľad dokumentov v zložke: pri každom názov, o čom je, dôležité čísla a termíny a čo z neho vyplýva pre mňa. Čísla a fakty ber len z dokumentov; čo v nich nenájdeš, označ [DOPLNIŤ].

Výsledok ulož do nového súboru v tejto zložke, ako dokument Word, a keď ide o tabuľku alebo čísla, ako tabuľku Excel. Napíš mi názov súboru a čo v ňom nájdem.

Nakoniec si ulož pravidlá pre túto zložku: jednou vetou, čo v nej je, názov súboru s výsledkom a pravidlo „Keď do zložky pribudne alebo sa zmení dokument, doplň ho do výsledku rovnakým spôsobom.“ Keď pracuješ v Cowork, zapíš ich do inštrukcií zložky. Inak ich zapíš do súboru AGENTS.md v zložke, a keď ho zložka nemá, založ ho. Napíš mi, kam si pravidlá uložil.

## Vo vašom nástroji

### Microsoft Copilot
Režim Cowork má Copilot ako Copilot Cowork: na `copilot.cloud.microsoft` ho
zvoľte prepínačom hore vedľa Chat; potrebuje licenciu Copilot a zapnutie od
správcu. K súborom v počítači sa nedostane, zložku dajte na OneDrive alebo
SharePoint a priložte ju tlačidlom +. Nové súbory ukladá do zložky Cowork na
OneDrive a nájdete ich v paneli vpravo. Pravidlá si uloží ako skill.

### ChatGPT
Režim Code má ChatGPT ako Codex v aplikácii ChatGPT pre počítač, ktorú
stiahnete na webe ChatGPT; programovať v ňom nemusíte. Po prihlásení zvoľte
Codex, potom New chat a otvorte zložku (open a folder). Codex majú všetky
tarify ChatGPT, aj ten zadarmo, vo firemnom účte ho však môže vypnúť správca.
Pravidlá pre nabudúce si AI zapíše do súboru `AGENTS.md` v zložke.

### Claude
Režim Cowork i Code má aplikácia Claude pre počítač, ktorú stiahnete na
`claude.com/download`; Cowork je v platených tarifách. Pri poli pre správu
prepnete z Chat na Cowork; keď tam možnosť nevidíte, máte novú verziu, v ktorej
Cowork zvláda každý chat. Zložku otvorte v ľavom paneli cez Projects, + a Use
an existing folder. Pravidlá pre nabudúce si AI zapíše do inštrukcií zložky.

### Gemini
Gemini režim Cowork ani Code nemá, viac súborov však zvládne v aplikácii Gemini:
cez Add from Drive priložte až 10 súborov, vložte prompt a na výzvu na zmenu
režimu napíšte „pokračuj tu“. Výsledok uložíte tlačidlom Export to Sheets,
text cez Share & export a Export to Docs. Nad celou zložkou v Disku sa pýtajte
cez pravé tlačidlo a Ask Gemini. Pravidlá uložte ako skill (Customize,
Skills).
## Čo je režim Cowork a Code

Režim Cowork je na prácu s dokumentmi: AI číta a ukladá súbory v zložke,
ktorú jej otvoríte, a pracuje na úlohe sama. Režim Code je určený hlavne na
kód, weby a skripty, so zložkou však pracuje rovnako, takže ho môžete použiť aj
na dokumenty.

Pravidlá pre nabudúce si AI zapíše do súboru `AGENTS.md` v zložke alebo do
pokynov, ktoré si nástroj pamätá, takže platia v každom ďalšom chate nad
tou istou zložkou. V zdieľanej zložke uvidia súbor `AGENTS.md` aj kolegovia;
nechajte ho tam, AI sa podľa neho riadi. V režime Cowork alebo Code sa tiež
môžu naplánovať úlohy, ktoré bežia samy v pravidelný čas.
## Kedy stačí bežný chat

Bežný chat v akomkoľvek nástroji stačí v dvoch situáciách:

- **Jednorazový výstup z toho, čo do chatu vložíte:** odpoveď na e-mail,
  zhrnutie jedného dokumentu alebo body na poradu. Podklad vložíte raz a
  výsledok hneď použijete.
- **Práca v pošte, kalendári alebo firemných dokumentoch, ktoré má chat
  [pripojené](card:plugin-connector):** napríklad koncept odpovede v Outlooku
  alebo prehľad stretnutí na budúci týždeň.

Do Cowork alebo Code prejdite, keď podklady tvoria viac súborov v zložke,
alebo keď má výsledok zostať ako súbor, ku ktorému sa budete vracať.
## Príklad

Ondrej koordinuje rekonštrukciu kancelárií a do piatku 16. 10. má investorovi
poslať zoznam závad, ktoré ešte nikto neopravili. V zložke
`Rekonštrukcia kancelárií` má sedem zápisov z kontrolných dní vo Worde. Otvorí
AI v režime Cowork, dá jej prístup ku zložke a pod prompt pripíše: „Urob
zoznam závad, ktoré podľa zápisov ešte nie sú opravené, s termínom a firmou,
ktorá ich má opraviť.“

AI uloží do zložky tabuľku `otevrene-zavady.xlsx` so štrnástimi závadami. Pri
dvoch v zápisoch chýba termín, takže ich označí [DOPLNIŤ]. Do pravidiel zložky
zapíše, že sú v nej zápisy z kontrolných dní a zoznam otvorených závad, a
pravidlo, aby z každého nového zápisu doplnil závady a opravené označil.

V pondelok 19. 10. Ondrej uloží do zložky zápis z ďalšieho kontrolného dňa,
otvorí nový chat v tej istej zložke a napíše len „Pribudol nový zápis.“ AI
zoznam doplní a dve závady označí ako opravené.
## Keď sa zaseknete

- **AI odpovie, že do zložky nevidí alebo súbor uložiť nevie:** píšete do
  bežného chatu. Prejdite do režimu Cowork alebo Code podľa bloku „Vo vašom
  nástroji“ a dajte AI prístup ku zložke.
- **Režim Cowork alebo Code vo vašom nástroji chýba:** vo firemnom účte ho
  často zapína správca, tak ho požiadajte o zapnutie. Claude zdarma Cowork
  nemá, Copilot Cowork potrebuje licenciu Microsoft 365 Copilot a Gemini
  taký režim nemá vôbec, postup pre neho je v bloku „Vo vašom nástroji“.
  Keď Codex chýba v aplikácii ChatGPT s osobným účtom, stiahnite si novú
  aplikáciu ChatGPT pre počítač.
- **Nesmiete nič inštalovať:** Copilot Cowork i Gemini v Google Disku bežia v
  prehliadači a so zložkou na firemnom disku pracujú bez inštalácie. Inak
  pošlite IT správu „Potrebujem aplikáciu s AI pre počítač, aby AI mohla
  pracovať so súbormi projektu v zložke v počítači.“
- **AI niektoré súbory vynechala:** napíšte jej ich názvy, nech ich doplní.
  Keď je v zložke stovky súborov, otvorte len podsložku, ktorá k úlohe
  patrí.
## Čo bude hotové

Máte AI v režime Cowork alebo Code, ktorá pracuje s vašou zložkou. V zložke je
nový súbor s výsledkom úlohy, ktorú vám v chate nešlo vyriešiť, a AI vám napísala, kam
uložila pravidlá: čo v zložke je a ako výsledok doplniť, keď pribudne
dokument. Nabudúce otvorte tú istú zložku v novom chate a napíšete len, čo sa
zmenilo.
## Čo ďalej

Keď chcete mať takto pripravenú všetku rozpracovanú prácu, založte si
[pracovný priestor PACT](card:pact-workspace). Aby sa výsledok dopĺňal
sám, napríklad každé pondelok ráno, nastavte si
[naplánovanú úlohu](card:recurring-ai-task).
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
