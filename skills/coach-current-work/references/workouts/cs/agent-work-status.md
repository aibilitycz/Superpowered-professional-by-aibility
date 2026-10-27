# Nechte AI zapisovat stav úkolů: kolega ví, kde je vaše práce

AI u každé práce sama najde nebo založí úkol v nástroji vašeho týmu, posune ho a uzavře.

## Nechte AI zapisovat stav úkolů: kolega ví, kde je vaše práce

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s jednou prací, kterou dnes děláte.
## K čemu se hodí

Porovnání tří nabídek na nová okna máte od úterka hotové, ale úkol je v
nástroji na úkoly pořád ve stavu K udělání. Ve čtvrtek vám kvůli tomu píše manažerka
a kolegyně mezitím začala nabídky porovnávat znovu.

Pomůže pravidlo pro AI: úkol přepíná sama během práce a na konci do něj
zapíše výsledek s odkazem, takže stav sedí, i když na něj zapomenete.
## Co si připravit

- jednu práci, kterou dnes s AI uděláte, třeba porovnání nabídek nebo podklady k poradě,
- nástroj na úkoly týmu, třeba Planner, Asana nebo Jira; připojení někdy povoluje IT,
- složku projektu sdílenou s týmem, třeba synchronizovanou z OneDrivu nebo SharePointu,
- AI v [režimu](glossary:workmode) Cowork nebo Code; kde je, ukazuje blok Ve vašem nástroji.
## Jak na to

1. Vložte prompt do AI v režimu Cowork nebo Code a dopište nástroj na úkoly
   a dnešní práci. AI se k nástroji připojí; přihlášení potvrdíte sami.
2. Potvrďte účet, přes který AI zapisuje, a řekněte, které stavy znamenají
   rozpracováno a hotovo. AI stavy nebo sloupce uloží do pravidla a práci
   udělá.
3. Otevřete úkol v nástroji na úkoly a podívejte se, co v něm uvidí kolega.
   Stav i odkaz mají sedět s hlášením AI.

Do úkolu stačí stav, věta o výsledku a odkaz; zbytek patří do worklogu,
deníku projektu.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve složce projektu, a na poslední dva řádky dopište nástroj a práci:

Chci, aby se stav mé práce zapisoval sám do nástroje na úkoly, který používá náš tým, a kolegové viděli, kde práce je, aniž by se mě ptali. Nastav to a hned to použij na práci, kterou ti zadám. Nástroj a práce jsou na posledních dvou řádcích.

1. Připoj se k nástroji na úkoly. Použij konektor, který tady máš. Když chybí nebo umí jen číst, připoj nástroj sám, třeba přes MCP server (u Planneru Work IQ od Microsoftu) nebo službu Composio. Kde se musím přihlásit nebo něco povolit já, řekni mi přesně kde a počkej. Když připojení musí ve firmě povolit IT, napiš mi pro IT krátkou žádost, co a proč připojit. Když tým vede úkoly v tabulce nebo v souboru, pracuj v něm. Když tady nemůžeš zapisovat do souborů ve složce projektu, řekni mi to hned a poraď, kam přepnout.

2. Zjisti přímo v nástroji, pod jakým účtem zapisuješ, a napiš mi ho i s projektem nebo nástěnkou, kam budeš zapisovat. Když můžeš zapisovat přes víc účtů, zeptej se mě, který použít. Vypiš mi stavy a sloupce úkolů, které v nástroji vidíš, a zeptej se, které znamenají rozpracováno a hotovo.

3. Zapiš do AGENTS.md ve složce projektu tohle pravidlo a hranaté závorky v něm vyplň sám podle toho, co jsme zjistili. Když AGENTS.md neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork pravidlo zapiš do instrukcí složky.

### Stav práce
- Úkoly vedeme v [nástroj, projekt nebo nástěnka]. Zapisuj do něj vždy přes účet [účet] a v každém hlášení ho jmenuj.
- Na začátku práce najdi úkol, ke kterému patří, a přepni ho na [rozpracováno]. Když žádný není, založ ho s krátkým názvem a přiřaď ho mně.
- Když práce čeká na někoho dalšího, napiš do úkolu jednou větou, na koho a na co.
- Na konci připiš nahoru do worklog.md ve složce projektu záznam s odkazem na výsledek ve tvaru předchozích záznamů. Když worklog.md neexistuje, založ ho a záznam napiš takhle: datum, co se udělalo, odkaz na výsledek a další krok. Když v AGENTS.md pravidlo pro worklog už je, tenhle řádek vynech a k tomu pravidlu jen připiš odkaz na výsledek.
- Do úkolu napiš komentář s výsledkem v jedné větě a s odkazem, který kolega otevře, a přepni ho na [hotovo]. Když výsledek leží jen v tomhle počítači, zeptej se mě, kam ho uložit. Když práce hotová není, nech ho rozpracovaný a napiš do něj, co zbývá.
- Po každém zápisu si úkol i worklog znovu načti a ověř, že je v nich, co jsi zapsal. Teprve pak mi řekni, že je hotovo. Když zápis nesedí, oprav ho, a když to nejde, řekni mi to.

4. Pak udělej práci z posledního řádku podle toho pravidla. Na konci mi napiš odkaz na úkol, jeho stav, jak ho teď vidíš v nástroji, a přes jaký účet jsi zapisoval.

Nástroj na úkoly:
Práce:

## Ve vašem nástroji

### Microsoft Copilot

Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (přepínač vedle
Chat; licence Microsoft 365 Copilot). Nástroj na úkoly přidáte v Customize,
Plugins, jinak požádejte IT. Na konec promptu připište: „Složku nemám:
worklog veď jako Word na OneDrivu, soubor s pravidly nezakládej a pravidlo
napiš jako text začínající ‚U projektu [název]:‘.“ Text vložte vlevo do
Customize, Preferences.

### ChatGPT

Režim Code je v ChatGPT Codex: v aplikaci ChatGPT pro počítač ho zvolte a
otevřete složku projektu (open a folder). Codex čte `AGENTS.md` sám a nástroj
na úkoly připojí přes MCP server; najdete ho pak v Settings, MCP servers, kde
se k němu případně přihlásíte tlačítkem Authenticate. Když Codex nevidíte, ve
firmě ho nejspíš vypnul správce, tak ho požádejte, ať ho zapne.

### Claude

V aplikaci Claude pro počítač otevřete Cowork nebo Claude Code a vyberte
složku projektu; obojí je v placených tarifech. Cowork si pravidlo zapíše do
instrukcí složky (Folder instructions), Claude Code čte `AGENTS.md`. Nástroj
na úkoly, třeba Asanu nebo Linear, připojíte v levém panelu v Customize,
Connectors; ve firmě ho přidává vlastník organizace.

### Gemini

Aplikace Gemini přidá úkol do Google Tasks a označí ho jako hotový, když v
promptu napíšete @Google Tasks. Worklog ve složce ale sama nepovede, protože
se složkou v počítači nepracuje. Celé cvičení udělá Antigravity, nástroj
Google, který pracuje přímo ve vaší složce a čte `AGENTS.md`; s firemním
účtem ho používáte přes Gemini Enterprise, o který požádejte IT.
## Úkol, worklog a soubor s pravidly

AI zapisuje na dvě místa a řídí se jedním souborem s pravidly. Úkol v
nástroji na úkoly vidí celý tým: AI do něj zapisuje stav a na konci jednu
větu s odkazem na výsledek. Stav je sloupec, štítek nebo průběh úkolu,
třeba K udělání, Rozpracováno nebo Hotovo. Když tým žádný nástroj nemá, poslouží
tabulka nebo soubor `ukoly.md` ve sdílené složce.

[Worklog](card:project-worklog), deník projektu, je soubor `worklog.md` ve
složce projektu. AI do něj na konci připíše, co se udělalo, s odkazem na
výsledek, takže se k práci vrátíte i za měsíc.

`AGENTS.md` je soubor s pokyny pro AI ve složce projektu, který si AI přečte
na začátku každé práce; v Cowork stejnou roli mají instrukce složky. K
nástroji na úkoly se AI připojí přes konektor nebo přes [MCP](glossary:mcp), otevřený
standard pro připojení aplikací k AI. Když konektor chybí, použije
integrační službu, třeba Composio; jak AI takovou službu nastaví, ukazuje
karta o [přenosu dat mezi aplikacemi](card:cross-app-workflow).
## Proč AI jmenuje účet a ověřuje zápis

Dvě pravidla v promptu, účet v každém hlášení a kontrola po zápisu, vznikla
z chyb, které jsme sami udělali. Úkoly vedeme v nástroji Linear a
AI do něj zapisuje přes službu, ve které má připojené i další aplikace, u
některých s několika účty. Když účet nevybrala výslovně, občas zapsala pod jiným, než
jsme čekali. Od té doby ho vybere vždy a v hlášení ho jmenuje.

Druhá chyba: nástroj zápis potvrdil, ale stav úkolu se nezměnil. AI proto po
každém zápisu úkol znovu načte a hotovo hlásí, až když v něm vidí, co
zapsala.
## Příklad

Jakub je projektový manažer ve stavební firmě a tým vede úkoly v Asaně. V
úterý 20. 10. 2026 otevře AI v režimu Cowork ve složce `Rekonstrukce školy
Lipová`, vloží prompt a dopíše:

```text
Nástroj na úkoly: Asana, projekt Rekonstrukce školy Lipová
Práce: Porovnej tři nabídky na výměnu oken ze složky Nabídky v tabulce (cena, termín, záruka) a napiš doporučení pro technickou ředitelku.
```

Jakub potvrdí přihlášení firemním účtem. AI vypíše sloupce K udělání,
Rozpracováno, Čeká na schválení a Dokončeno a Jakub řekne, že hotová práce
jde do Čeká na schválení, protože nabídky schvaluje technická ředitelka. AI
najde úkol „Porovnat nabídky na okna“, přepne ho na Rozpracováno a nabídky porovná. Po
posledním zápisu úkol znovu načte a zjistí, že zůstal v Rozpracováno. Přesune
ho znovu, stav ověří a vrátí:

```text
Zapsáno přes účet Jakub Dvořák (Asana, Stavby Morava).
- Úkol „Porovnat nabídky na okna“ je ve sloupci Čeká na schválení, s doporučením a odkazem na tabulku Porovnání oken.xlsx na SharePointu.
- První přesun se neuložil; po druhém pokusu je přesun ověřený.
- Worklog: záznam 2026-10-20 je nahoře ve worklog.md.
```

Ve středu ráno technická ředitelka Hana otevře projekt v Asaně, vidí úkol ve
sloupci Čeká na schválení s odkazem na tabulku a doporučení schválí, aniž by Jakubovi
psala.
## Když se zaseknete

- **AI se k nástroji na úkoly nedostane:** konektor chybí nebo ho ve firmě
  nejde zapnout. Napište AI, ať připraví krátkou žádost pro správce IT. K
  Planneru se AI v režimu Code připojí přes Work IQ, MCP server od Microsoftu,
  který IT ve firmě jednou zapne. Až IT připojení povolí, napište ve stejném
  chatu „IT to zapnulo, pokračuj“. Jak AI připojí jiné aplikace, ukazuje karta
  [Připojte si konektor](card:plugin-connector).
- **AI zakládá nový úkol, i když jeden už existuje:** řekněte jí, podle čeho
  úkol pozná, třeba podle projektu a názvu, a ať to doplní do pravidla.
- **AI hlásí hotovo, ale v nástroji je úkol ve starém stavu:** napište
  „Načti úkol znovu a ukaž mi, co v něm vidíš“. Když se ověření v hlášení
  neobjevilo, požádejte AI, ať zkontroluje, že má pravidlo v `AGENTS.md` nebo
  v instrukcích složky.
- **AI pracuje mimo složku projektu a pravidlo nezná:** pracujete nejspíš v
  běžném chatu. Přepněte do [Cowork nebo Code](card:when-chat-is-not-enough)
  a otevřete v něm složku projektu.
## Co bude hotové

Dnešní práce má úkol, který AI sama posunula až do hotovo a zapsala do něj
výsledek s odkazem, a ve worklogu je její záznam. Pravidlo v `AGENTS.md`, v
instrukcích složky nebo v nastavení vaší AI zařídí totéž u každé další
práce. Kolega stav vaší práce
najde v nástroji na úkoly, aniž by se vás ptal.
## Co dál

Aby se stav dopsal i za práci v e-mailech a na schůzkách, nastavte si
[naplánovanou úlohu](card:recurring-ai-task), která úkoly každý večer doplní
podle e-mailů, chatů a schůzek z toho dne. Jestli pravidlo po pár týdnech pořád funguje,
zkontroluje [týdenní revize nastavení](card:weekly-ai-review).
## MCP

**Co to je:** Otevřený technický standard (Model Context Protocol), přes který se AI připojuje k aplikacím a zdrojům dat. Aplikace nebo poskytovatel dat nabídne MCP server a AI přes něj čte data nebo provádí povolené akce. V nastavení nástrojů se takové připojení často jmenuje konektor nebo MCP server.

**Co to není:** Není to samostatná aplikace ani AI model. Samotný standard nic nestáhne; potřebuje server od poskytovatele, často účet u něj a oprávnění, které zapne člověk nebo správce.

**Proč to student potřebuje:** Pomáhá poznat, kdy AI dosáhne na data mimo veřejný web a kdo musí připojení zapnout.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Pracovní režim

**Co to je:** Typ interakce s AI: chat, canvas/artifact, agent, kódování, vyhledávání. Různé úkoly vyžadují různé režimy.

**Co to není:** Není to úroveň vyspělosti. Režim volí člověk podle úkolu, ne podle svého skóre.

**Proč to student potřebuje:** Učí rozpoznat, kdy přepnout z chatu do jiného prostředí pro lepší výsledek.

## Výpadek služby, limit nebo přeplněný chat

Společný fallback pro provozní přerušení práce s AI. Je dostupný z každé karty přes vstup **Výpadek nebo vyčerpaný limit** Nevytváří vlastní kartu, check-in ani několik kopií stejného textu.

Specifická sekce **Když něco nejde** v kartě dál řeší chybu zadání, podkladů, nástroje nebo postupu. Tato mechanika se spustí, když AI nemůže v průchodu technicky pokračovat.

## Nejdřív rozlište, co se stalo

| Co vidíte | Pravděpodobná situace | První krok |
|---|---|---|
| Nástroj hlásí vyčerpaný limit, příliš mnoho požadavků nebo čas obnovení | tarifní nebo dočasný provozní limit | poznamenejte čas obnovení a uložte bod návratu |
| AI zapomíná začátek, odmítá další přílohu nebo hlásí příliš dlouhý vstup | příliš velký kontext, soubor nebo úkol | vytvořte handoff a pokračujte v novém kontextu či vhodnějším prostředí |
| Nástroj neodpovídá, vrací serverovou chybu nebo selhává více modelů | výpadek služby | ověřte oficiální status a zvolte schválenou náhradu nebo pauzu |

Pokud AI ještě odpovídá, může situaci sama pojmenovat a připravit bod návratu. Pokud neodpovídá, tento krok přeskočte. Opakované odesílání stejného požadavku stav práce nezachrání.

## Uložte bod návratu

Před čekáním nebo přechodem jinam zachovejte nejmenší balíček, ze kterého lze bezpečně pokračovat:

```text
Cíl: ...
Co je hotové a kde to je: ...
Potvrzená rozhodnutí a omezení: ...
Použité zdroje nebo soubory: ...
Nejbližší další krok: ...
Co se nemá znovu měnit nebo vyrábět: ...
```

Pokud AI stále reaguje, použijte:

> Připrav mi stručný bod návratu pro pokračování v novém chatu nebo nástroji. Zachovej cíl, hotové části, potvrzená rozhodnutí, zdroje, omezení a jeden nejbližší krok. Nevymýšlej, co v konverzaci není.

U delší práce uložte bod návratu do projektového README nebo jiného schváleného pracovního prostoru. Citlivé vstupy zůstávají pouze ve schváleném úložišti.

## Došel tarifní nebo provozní limit

1. Zjistěte, kdy se limit obnoví a zda se týká modelu, funkce nebo celého účtu.
2. Rozhodněte mezi pauzou, menším rozsahem a schváleným náhradním modelem či prostředím.
3. Při přechodu přeneste bod návratu a jen podklady nezbytné pro další krok.
4. Ověřte, že náhrada umí potřebné soubory, nástroje a akce. Slabší model může stačit na formátování a selhat u analýzy nebo práce s nástroji.

## Kontext, soubor nebo úkol je příliš velký

1. Nechte AI vytvořit handoff dřív, než ztratí starší rozhodnutí, pokud ještě odpovídá.
2. Začněte nový chat nebo projekt s bodem návratu a odkazy na kanonické soubory.
3. Rozdělte práci podle smysluplných celků a zachovejte společná kritéria výsledku. Náhodné rozsekání textu může ztratit vztahy mezi částmi.
4. Pokud úkol vyžaduje více souborů, hromadnou práci nebo změny v projektu, pokračujte přes kartu `when-chat-is-not-enough`.

## Nástroj nebo model má výpadek

1. Ověřte oficiální status poskytovatele. Chybu účtu řešte až tehdy, když služba obecně funguje.
2. Uložte bod návratu mimo právě nefunkční konverzaci, pokud je k ní ještě přístup.
3. Použijte schválený náhradní nástroj pouze tehdy, když má potřebné schopnosti a stejné podklady do něj smějí vstoupit.
4. Pokud vhodná náhrada není, práci pozastavte a zapište přesný další krok. Po obnovení navazujte od posledního potvrzeného výsledku.

## Bezpečnostní hranice

- Limit ani výpadek není důvod vložit pracovní, klientská nebo osobní data do neschváleného osobního nástroje.
- Nový účet, bezplatný tarif nebo jiný poskytovatel může mít jiné podmínky pro data, uchování a trénování.
- Přechod mezi modely může změnit formát, přesnost i dostupné nástroje. První výstup po návratu porovnejte s posledním potvrzeným bodem.
- Neodesílejte znovu akci, která mohla proběhnout před chybou, dokud neověříte její stav. Platí to zejména pro zápis do systému, odeslání zprávy, nákup nebo smazání.

## Návrat do karty

Po obnovení služby nebo přechodu do vhodného prostředí:

1. načtěte bod návratu,
2. ukažte AI poslední potvrzený výsledek,
3. vyžádejte pouze nejbližší další krok,
4. dokončete původní kartu bez opakování hotové práce,
5. pokud se změnil nástroj nebo model, poznamenejte rozdíl, který mohl ovlivnit výsledek.

## Evidence

Mechanika nevytváří samostatné splnění. Do výsledku hlavní karty může přidat pouze bod návratu, zvolenou cestu a případný rozdíl po změně nástroje.
