# Usporiadajte AI sprint: za popoludnie hotová vec, ktorú tím používa

AI navrhne, čo tím za popoludnie s AI postaví, napíše zadanie, pozve tím a po sprinte uloží postup, ktorý fungoval.

## Usporiadajte AI sprint: za popoludnie hotová vec, ktorú tím používa

**Obtiažnosť: ľahká.**\
**Čas: približne 15 minút** s podkladmi tímu v zdieľanej zložke.
## Na čo sa hodí

Na poradách sa už mesiac opakuje, že by AI mohla skladať mesačnú správu pre vedenie. Všetci súhlasia, no medzi stretnutiami sa k tomu nikto nedostane, a tak ju Petra na konci mesiaca opäť dve hodiny skladá ručne z exportov.

Keď si tím vyhradí jedno popoludnie len na túto vec a stavá ju s AI pre svoju bežnú prácu, na druhý deň ju už používa.
## Čo si pripraviť

- zdieľanú zložku tímu so zoznamom úloh a zápismi z porád,
- mená účastníkov a popoludnie, kedy môžu dve až štyri hodiny pracovať len na sprinte,
- AI v režime Cowork alebo Code pre vás aj pre každého účastníka sprintu,
- AI s pripojeným kalendárom, v ktorom zakladáte stretnutia.
## Ako na to

1. Otvorte zložku tímu v AI v režime Cowork alebo Code, vložte prompt z AI cvičenia a pod neho napíšte, kto sa sprintu zúčastní a kedy. Z návrhov AI vyberte jednu úlohu.
2. AI napíše zadanie; opravte ho a napíšte „Pošli to“. AI zadanie uloží a založí pozvánku pre tím. Počas sprintu každý vloží do svojej AI vetu zo zadania a pracuje na svojej časti.
3. Po ukážke napíšte AI „Sprint skončil“ a čo fungovalo. AI zapíše výsledok do worklogu a postup uloží ako [skill](glossary:skill) alebo pravidlo.

Len s bežným chatom poradí časť Keď sa zaseknete.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Cowork alebo Code, otvorenej vo vašej zložke:

Priprav s nami AI sprint: popoludnie, v ktorom tím s AI postaví jednu vec, ktorú potrebuje, a na druhý deň ju začne používať. Ak nemáš prístup ku zložke tímu a nemôžeš do nej sám ukladať súbory, povedz mi to hneď, aby som mohol prepnúť do Cowork alebo Code.

Prejdi podklady v zložke tímu: zoznam úloh, zápisy z porád, worklog a ďalšie súbory, z ktorých je vidieť, čo tím robí a čo ho zdržuje. Navrhni tri úlohy, ktoré sa počas sprintu dajú dokončiť tak, aby ich tím potom bežne používal. Ku každej napíš jednou vetou, čo vznikne, kto to bude používať a z akých podkladov. Veľkú úlohu zmenši na prvú verziu, ktorá sa do sprintu zmestí. Počkaj, až jednu vyberiem.

Pre vybranú úlohu napíš zadanie na jednu stranu:
- Čo vznikne a kto to bude používať.
- Kto na čom pracuje. Prácu rozdeľ medzi ľudí, ktorých ti napíšem na konci správy, tak, aby každý zadával svoju časť AI. Ku každému napíš súbor, do ktorého svoju časť uloží, a vetu, ktorú na začiatku sprintu vloží do svojej AI. Tá veta vždy začína slovami: Prečítaj si AGENTS.md v tejto zložke a zariadi, aby si ho čítal na začiatku každej práce.
- Aké prístupy a súbory sú potrebné a kde ležia.
- Kto na konci časti spojí do jedného súboru, čo tím ukáže a na ktorých prípadoch z bežnej práce to vyskúša.

Pod zadanie pridaj časť Po sprinte s týmto pokynom pre AI: „Keď niekto napíše, že sprint skončil, prejdi, čo počas sprintu vo zložke vzniklo, a poznámky z ukážky. Hore do worklog.md zapíš záznam s dátumom sprintu: čo tím postavil, ako to fungovalo v ukážke a kto čo urobí ďalej. Ak worklog.md neexistuje, založ ho. Z postupu, ktorý fungoval, napíš skill, ulož ho do zložky tímu a do AGENTS.md pridaj pravidlo, kedy ho AI použije a v ktorom súbore leží. Ak postup stojí na jednej vete, stačí namiesto skillu samotné pravidlo.“

Zadanie mi ukáž a počkaj na opravy. Keď napíšem, aby si to poslal, ulož zadanie do zložky tímu ako zadanie-sprintu-RRRR-MM-DD.md s dátumom sprintu. Do AGENTS.md v rovnakej zložke pridaj pravidlo, že zadania AI sprintov ležia v súboroch zadanie-sprintu a počas sprintu sa AI drží toho najnovšieho. Ak AGENTS.md neexistuje, založ ho. Zariadi, aby si ho v tomto nástroji čítal na začiatku každej práce; v Cowork to zapíš do inštrukcií zložky. Potom cez konektor ku kalendáru založ na termín sprintu pozvánku pre všetkých ľudí zo zadania. Do jej popisu daj zadanie bez časti Po sprinte a názov súboru, v ktorom leží. E-mailové adresy dohľadaj v pošte alebo v kalendári a ktoré nenájdeš, si odo mňa vyžiadaj. Ak konektor ku kalendáru nemáš alebo kalendár len číta, prepoj kalendár cez službu Composio. Kde sa musím prihlásiť ja, povedz mi presne kam. Nakoniec mi napíš, komu pozvánka odišla.

Kto sa sprintu zúčastní, kedy a ako dlho bude trvať:

## Vo vašom nástroji

### Microsoft Copilot
Cowork je v Copilote vedľa prepínača Chat; kto ho nevidí, požiada IT. Pracuje so súbormi na OneDrive a SharePointe, tak mu napíšte, kde je zložka tímu; pozvánku v Outlooku založí aj s účastníkmi, takže Composio z promptu nepoužije. Ak Cowork nemajú všetci, choďte celý tím podľa bodu „Tím má len bežný chat“: projektom je Notebook (Poznámkové bloky, Nový poznámkový blok), zdieľaný cez Share, Invite.

### ChatGPT
So zložkou pracuje Codex v aplikácii ChatGPT pre počítač: prepni na Codex a zvoľ open a folder; `AGENTS.md` číta sám. Ak Codex nevidíte, požiadajte správcu o Allow members to use Codex locally, alebo postupujte podľa bodu „Tím má len bežný chat“. Kalendár pripojíte v Settings pod Plugins; stretnutia AI založí, až správca zapne zápisové akcie.

### Claude
V aplikácii Claude pre počítač zvoľ Cowork a v poli pre správu Work in a folder; v Cowork si AI podľa promptu zapíše do inštrukcií zložky, aby čítal `AGENTS.md`. Konektor Microsoft 365 vie v Outlooku zakladať stretnutia, keď správca zapne zápisové akcie. Konektor Google Calendar kalendár len číta, a tak AI pozvánku založí cez Composio.

### Gemini
Aplikácia Gemini s pracovným účtom so zložkou v počítači nepracuje, a tak sprint pripravte podľa bodu „Tím má len bežný chat“ so zdieľaným robotom Gem. Udalosť v Kalendári Google založíte, keď napíšete @Google Calendar a čo má založiť; hostí doplňte v kalendári. So zložkou pracuje Gemini CLI, ak má firma licenciu Gemini Code Assist.
## Čo je AI sprint

Sprint je v angličtine krátky závod na plno. Vo firmách sa tak hovorí vyhradenému času, v ktorom tím pracuje na jednej veci a na konci ukáže výsledok. [AI sprint](glossary:ai-sprint) trvá dve až štyri hodiny a tím v ňom prácu zadáva AI. Výsledkom je obyčajne súbor v zložke tímu: šablóna ponuky, report alebo návod, podľa ktorého AI odpovedá zákazníkom. Na ten čas si ľudia nedávajú iné stretnutia, takže vec, ktorá na poradách čaká mesiace, je hotová za popoludnie.

Zadanie sprintu je obyčajný textový súbor v zložke tímu, takže ho každý účastník má po ruke aj so svojou AI. `AGENTS.md` je súbor s pravidlami pre AI v rovnakej zložke, ktorý si AI prečíta na začiatku každej práce. Viac nájdete v kartách o [worklogu](card:project-worklog) a o [súbore s pravidlami pre AI](card:agents-md).

Na konci sprintu človek, ktorého určí zadanie, nechá AI časti spojiť do jedného súboru a tím výsledok vyskúša na práci z toho dňa. Úlohu, ktorá sa do popoludnia nezmestí, AI zmenší na prvú verziu, ktorú tím začne používať na druhý deň. Worklog je denník projektu v zložke a pozvánku AI založí cez konektor, teda prepojenie s kalendárom.

Keď sa AI spýta, či smie do zložky ukladať súbory, povoľte jej to. Úlohu môžete vybrať aj neskôr s tímom: vráťte sa do toho istého chatu a napíšte, ktorú ste vybrali. Počas sprintu ukladá každý do vlastného súboru, takže si ľudia prácu neprepíšu. Ako prejsť z bežného chatu do režimu Cowork alebo Code, ukazuje karta [Cowork alebo Code](card:when-chat-is-not-enough).
## Nech sa sprint opakuje

Jeden sprint postaví jednu vec. Keď sa sprint opakuje napríklad raz mesačne, tím postupne urobí aj to, o čom sa na poradách zatiaľ len hovorí. Na to stačí naplánovaná úloha, ktorú AI spustí prvý pondelok v mesiaci a návrhy na ďalší sprint uloží do zložky tímu. Vložte do AI v režime Cowork alebo Code toto zadanie a požiadajte ju, aby z neho naplánovala úlohu:

```text
Každé prvé pondelok v mesiaci o 9:00 prejdi v zložke tímu worklog.md, zoznam úloh, zápisy z porád za posledný mesiac a zadania minulých sprintov. Navrhni tri úlohy na ďalší AI sprint, ktoré sa dajú za popoludnie postaviť tak, aby ich tím potom bežne používal. Ku každej uveď, kto ju bude používať a prečo sa oplatí práve teraz. Nenavrhuj nič, čo tím postavil v minulých sprintoch. Návrhy pripíš hore do súboru navrhy-na-sprint.md v zložke tímu.
```

Keď úloha pracuje so zložkou vo vašom počítači, pobehne len keď je počítač zapnutý a aplikácia otvorená.
## Príklad

Markéta vedie šesťčlennú zákaznícku podporu e-shopu s kuchynskými spotrebičmi. Tím odpovedá na štyridsať otázok denne a odpovede hľadá v troch dokumentoch: v reklamačnom poriadku, záručných podmienkach a návodoch. V pondelok 12. 10. otvorí zdieľanú zložku Podpora v režime Cowork, vloží prompt a pod neho napíše: „Markéta, Lucia, Pavel, Jana, Ondrej a Karel, štvrtok 22. 10. od 13:00 do 16:00.“ AI zo zápisov z porád a exportu otázok za september navrhne:

```text
1. Pomocník na odpovede zákazníkom: z otázky napíše koncept odpovede a pod ňu dokument a článok, z ktorého vychádza. Používa celý tím, podkladom sú tri dokumenty v zložke.
2. Mesačný report reklamácií pre vedenie. Používa Markéta, podkladom je export otázok.
3. Odpovede na 20 najčastejších otázok pre nápovedu na webe. Používajú zákazníci, podkladom je export otázok.
```

V utorok na porade tím vyberie pomocníka. AI napíše zadanie: Lucia a Pavel s AI vyberú z exportu 30 najčastejších otázok, Jana a Ondrej s AI spíšu, ako má pomocník odpovedať a ako uvádzať zdroj, Markéta a Karel ho na konci spoja a vyskúšajú na piatich otázkach z dopoludnia. Lucia má pri svojom mene vetu „Prečítaj si `AGENTS.md` v tejto zložke a zariadi, aby si ho čítal na začiatku každej práce. Potom nájdi v exporte otázok za september 30 najčastejších otázok a ulož ich do súboru `najcastejsie-otazky.md`.“ Markéta napíše „Pošli to“ a AI založí v kalendári pozvánku pre všetkých šesť ľudí.

Vo štvrtok o 15:30 pomocník správne odpovie na štyri z piatich otázok a pri každej ukáže článok reklamačného poriadku alebo záručných podmienok. Na piatu otázku, výmenu dielu po záruke, žiadny dokument odpoveď nemá. Markéta napíše AI, že sprint skončil, a tá zapíše do worklogu:

```text
### 2026-10-22: AI sprint, pomocník na odpovede zákazníkom
- Čo vzniklo: pomocník, ktorý z otázky napíše koncept odpovede a pod ňu dokument a článok, z ktorého vychádza.
- Ako to fungovalo: na piatich otázkach z dopoludnia odpovedal správne štyrikrát. Výmenu dielu po záruke žiadny dokument nepopisuje.
- Ďalej: od piatku 23. 10. píše tím koncepty odpovedí cez pomocníka. Karel do 30. 10. doplní výmenu dielov po záruke do záručných podmienok.
```

Postup uloží do zložky ako skill Odpoveď zákazníkovi a do `AGENTS.md` pridá pravidlo, aby AI na otázky zákazníkov odpovedala podľa neho. V piatok ráno vloží Lucia do AI v zložke Podpora prvú otázku dňa a AI napíše koncept odpovede aj so zdrojom, bez ďalších vysvetlení.
## Keď sa zaseknete

- **Pozvánka nevznikla:** spýtajte sa AI, či má ku kalendáru konektor, ktorý vie zakladať stretnutia. Ak nemá, nech kalendár prepojí cez Composio, službu, cez ktorú sa AI napojí na viac než tisíc aplikácií; či ju smiete použiť, rozhoduje vaše IT. Bez nej vám AI pripraví text pozvánky a vy ju odošlete zo svojho kalendára. Vo firemnom kalendári právo zakladať stretnutia cez AI niekedy zapína správca; ako ho o to požiadať, nájdete v karte [Pripojte si konektor](card:plugin-connector).
- **Všetky tri návrhy sú na sprint príliš veľké:** napíšte AI, aby každú úlohu rozdelila na kroky a do sprintu vybrala len prvý, ktorý tím začne používať. Celý projekt rozdelený medzi ľudí a AI vám rozpíše [AI-WBS](card:ai-wbs-project).
- **Tím má len bežný chat:** vložte prompt do chatu, priložte podklady tímu a pripíšte: „Pracujeme len v bežnom chate a Composio nepoužívame. Zadanie napíš tak, aby som ho vložil do pokynov zdieľaného projektu, a namiesto súborov a `AGENTS.md` daj každému vetu, ktorú vloží do chatu v tomto projekte.“ Zadanie vložte do pokynov zdieľaného [projektu](card:asistent) tímu; ako sa projekt vo vašom nástroji volá, ukazuje blok „Vo vašom nástroji“. Počas sprintu pracuje každý v chate v tomto projekte a svoju časť na konci pošle človeku zo zadania, ktorý ich vloží do jedného chatu a nechá AI spojiť. Po ukážke napíšte AI v tomto chate, že sprint skončil; záznam a postup, ktorý fungoval, vám napíše na vloženie do pokynov projektu.
- **AI kolega skill zo sprintu nepoužíva:** nech kolega svojej AI v zložke tímu napíše: „Prečítaj si `AGENTS.md` a zariadi, aby si ho čítal na začiatku každej práce.“
## Čo bude hotové

Po príprave leží v zložke tímu zadanie sprintu a celý tím má v kalendári pozvánku. Po sprinte tím používa vec, ktorú za popoludnie postavil. Vo worklogu je záznam o tom, čo vzniklo a ako sa pokračuje, a skill alebo pravidlo v `AGENTS.md` zabezpečí, že AI tímu výsledok použije sama.
## Čo ďalej

Keď chcete výsledok sprintu ukázať ďalším kolegom alebo inému oddeleniu, stačí na to [desať minút na porade](card:team-adoption-cycle). Ak skill zo sprintu odpovedá inak, než má, upravte ho podľa karty [Vytvorte si skill](card:create-skill-from-proven-process).
## AI sprint

**Čo to je:** Súvislý pracovný blok pre malý tím, počas ktorého vznikne a otestuje sa prvá použiteľná verzia jedného alebo viacerých skutočných AI projektov. Má vopred pripravený čas, prístupy, podporu a ďalšie kroky pre výsledok.

**Čo to nie je:** Nie je to bežné školenie, súťaž ani práca pridaná ľuďom medzi ostatné stretnutia.

**Prečo to študent potrebuje:** Pomáha odlíšiť chránený čas na skutočnú tvorbu od krátkeho cvičenia a ukazuje, čo musí byť pripravené, aby blok priniesol použiteľný výsledok.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Zručnosť

**Čo to je:** Opakovane použiteľný postup pre určitý typ úlohy. Môže obsahovať inštrukcie, pravidlá, príklady, šablóny a ďalšie potrebné zdroje. Spôsob vytvorenia a spustenia sa líši podľa nástroja.

**Čo to nie je:** Nie je to všeobecná rola asistenta ani jedna vydarená konverzácia uložená bez úprav.

**Prečo to študent potrebuje:** Pomáha preniesť osvedčený postup do stabilnej podoby, ktorú možno konzistentne opakovane používať.

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
