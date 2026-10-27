# Rozdělte práci do paralelních vláken: AI dělá všechny části najednou

Větší práci máte hotovou dřív, protože ji AI rozdělí na kusy a každý pustí najednou ve vlastním vlákně.

## Rozdělte práci do paralelních vláken: AI dělá všechny části najednou

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s větší prací, vlákna pak běží sama.
## K čemu se hodí

Ve čtvrtek ukazujete vedení čtvrtletní přehled: čísla z exportu, stížnosti
zákazníků a novinky u konkurence. Jedna AI by kusy dělala jeden po druhém,
přitom žádný nečeká na jiný a mohou běžet najednou.

Pomohou [paralelní vlákna](glossary:parallel-ai-workstreams): každý kus
dostane vlastní vlákno, tedy samostatný chat se svým zadáním, a všechna běží
najednou. Na konci první vlákno, koordinátor, výsledky porovná a připraví vám
body k rozhodnutí.
## Co si připravit

- jednu větší práci, která má aspoň dva kusy, které na sebe nečekají,
- podklady k ní v jedné složce,
- AI v režimu Cowork nebo Code; kde ho najdete, ukazuje blok „Ve vašem
  nástroji“.
## Jak na to

1. Nechte AI práci rozdělit na kusy, které na sebe nečekají. Otevřete AI ve
   složce s podklady, vložte prompt a napište, co je potřeba. Rozdělení potvrďte.
2. Pusťte všechna vlákna najednou. AI je pustí sama, nebo vám pro každý kus
   napíše větu; tu vložte do nového vlákna ve stejné složce. Když se vlákno
   zeptá, odpovězte mu.
3. Rozhodněte otevřené body ze srovnání. Až vlákna doběhnou, napište
   „hotovo“ do prvního vlákna. AI ukáže rozpory a po vašem rozhodnutí
   výsledky spojí.

Každé vlákno píše jen do své složky.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce, a za poslední řádek napište, co je potřeba udělat:

Pomoz mi udělat větší práci rychleji: rozděl ji na kusy, které poběží najednou, každý ve vlastním vlákně. Ty budeš koordinátor. Práce je na posledním řádku.

Projdi podklady ve složce a navrhni dva až pět kusů. U každého jednou větou napiš, proč může skončit, i když nezná výsledek ostatních. Co na jiném kusu závisí, nech s ním v jednom kusu, nebo to dej až na konec ke spojení. Ukaž mi rozdělení a počkej, až ho potvrdím nebo opravím.

Pro každý potvrzený kus založ složku vlakna/01-nazev, vlakna/02-nazev a tak dál, a v ní soubor zadani.md. Zadání má: cíl kusu, ze kterých podkladů vychází, dvě až tři podmínky, podle kterých poznám, že je hotovo, a pokyn „Zapisuj jen do této složky, nic jiného neměň. Na konci sem ulož vysledek.md: co je hotové, co nesedí a na co se ptáš.“ Do vlakna/srovnani.md zapiš seznam kusů a jejich stav.

Do souboru AGENTS.md ve složce ulož pravidlo: „Když dostaneš práci, která má aspoň dva kusy, které na sebe nečekají, navrhni rozdělení do paralelních vláken. Každé vlákno má vlastní zadání a vlastní složku; do jedné složky nikdy nezapisují dvě vlákna. Když kusy pouštíš jako podagenty, pusť jich nejvýš deset najednou a před další várkou mi napiš krátký stav, co se vrátilo. Na konci výsledky porovnej vedle sebe a otevřené body mi dej k rozhodnutí.“ Když AGENTS.md neexistuje, založ ho. Když ho tenhle nástroj sám nečte, nastav, ať si ho přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Když ke složce přístup nemáš, ulož si pravidlo do paměti; když to neumíš, řekni mi přesně, kam ho vložit.

Pak kusy pusť najednou jako samostatná vlákna, která uvidím a do kterých můžu psát. Když umíš vlákno spustit nebo nabídnout sám, udělej to. Jinak mi ke každému kusu napiš jednu větu, kterou vložím do nového vlákna ve stejné složce, například „Udělej zadání ze souboru vlakna/01-cisla/zadani.md.“ Když se složkou pracovat neumíš, napiš mi místo věty celé zadání a výsledky ti vložím zpátky.

Až napíšu „hotovo“, přečti vedle sebe všechny soubory vysledek.md a výstupy, nebo výsledky, které ti vložím. Do vlakna/srovnani.md napiš ke každému kusu, jestli splnil podmínky, kde si výsledky odporují nebo kde něco chybí, a otevřené body, o kterých rozhoduju já. Rozpory neslučuj do kompromisu, ukaž mi obě strany. Po mém rozhodnutí spoj výstupy do jednoho výsledku ve formátu, který potřebuju (třeba Word nebo prezentace), a ulož ho do složky; když formát neřeknu, zeptej se.

Práce:

## Ve vašem nástroji

### Microsoft Copilot

Copilot Cowork zapnete na `copilot.cloud.microsoft` přepínačem nahoře vedle
Chat a podklady přiložíte tlačítkem +. Nová úloha nevidí, co napsala jiná,
proto pod svůj úkol připište „Zadání mi napiš celá“. Každé vložte do nové
úlohy s podklady, které jmenuje; výsledky pak vložte s „hotovo“ do první
úlohy, kterou znovu otevřete pod Tasks. Pravidlo si uloží jako skill, tedy
uložený návod.

### ChatGPT

V aplikaci ChatGPT pro počítač přepněte na Codex a zvolte otevření složky
(open a folder); když Codex nevidíte, požádejte správce, ať ho zapne. Každé
vlákno spusťte jako nový chat ve stejném projektu, tedy otevřené složce;
chaty najdete pod Chats a do běžícího můžete psát. U kódu zvolte pod polem
pro zprávu Worktree.

### Claude

V aplikaci Claude pro počítač pusťte každý kus jako nový úkol v Cowork, nebo
jako novou relaci v Claude Code (New session); Claude Code vám nové relace i
sám nabídne a stačí kliknout. Běží vedle sebe v postranním panelu a do
každého vlákna můžete psát. U kódu zvolte při startu relace worktree, ať má
vlastní kopii repozitáře.

### Gemini

Gemini se složkou v počítači nepracuje a agent, který úlohu dotáhne sám, je
jen pro osobní účty mimo EU. Zadání vláken vám proto napíše do odpovědi:
každé vložte do nového chatu, podklady přiložte přes Add from Drive a hotové
výsledky vložte zpátky do prvního chatu ke srovnání. Když to děláte často,
požádejte IT o nástroj s režimem Code.
## Co jsou paralelní vlákna

Vlákno je samostatný chat nebo úloha s vlastním zadáním, kterou vidíte v
postranním panelu nástroje a můžete do ní kdykoli napsat. Paralelní vlákna
běží souběžně, každé na jednom kusu práce. První vlákno, ve kterém jste
práci zadali, je koordinátor: rozdělí ji, napíše zadání a na konci výsledky
porovná.

Rozdělení funguje, jen když kusy na sebe nečekají. Než kus pustíte, zeptejte
se: dokončí ho vlákno, i když nezná výsledek ostatních? Když ne, patří k
tomu kusu, na kterém závisí. Druhé pravidlo je jeden zapisovatel na složku:
dvě vlákna, která upravují stejný soubor, si navzájem přepíšou práci, proto
má každé svou složku. Zadání a výsledky vláken jsou textové soubory `.md`,
které čte hlavně AI; hotový výsledek vám uloží ve formátu, který potřebujete.

U velké práce s mnoha kusy může koordinátor kusy pouštět sám jako
[podagenty](glossary:subagent), tedy pomocníky na pozadí, jejichž výsledky
převezme a otázky vám předá. Pravidlo, které prompt uloží do `AGENTS.md`,
textového souboru s pravidly pro AI ve vaší složce, jim dává strop deset
najednou a před další várkou krátký stav, ať víte, co se vrátilo.
## Příklad

Jana je manažerka zákaznické péče v e-shopu s nábytkem. V úterý 13. 10. 2026
ráno dostane za úkol připravit na čtvrteční poradu vedení přehled za třetí
čtvrtletí. Ve složce Přehled Q3 má export 2 300 ticketů za čtvrtletí i
s texty stížností a odkazy na weby tří konkurentů. Vloží prompt a za poslední
řádek napíše:

```text
Přehled zákaznické péče za Q3 pro čtvrteční poradu vedení: čísla z exportu ticketů, pět nejčastějších stížností z ticketů a co za čtvrtletí změnili tři konkurenti.
```

AI navrhne tři kusy (čísla, stížnosti, konkurence) a u každého napíše, proč
nečeká na ostatní. Jana rozdělení potvrdí a pustí tři vlákna najednou. Vlákno
se stížnostmi se po deseti minutách zeptá, jestli počítat reklamace
poškozeného zboží jako stížnosti. Jana odpoví „ano, zvlášť“ a za 40 minut
jsou všechna tři hotová.

Koordinátor ve srovnání najde jeden rozpor: podle čísel klesla doba odpovědi
z 14 na 6 hodin, ale druhá nejčastější stížnost je pomalá odpověď. Většina
těch stížností je z července, kdy změna ještě neplatila. Jana rozhodne ukázat
dobu odpovědi i stížnosti po měsících a AI spojí kusy do dokumentu
Word `prehled-q3.docx`.
Přehled je hotový v úterý před polednem a Jana má středu na přípravu porady.
## Když se zaseknete

- **Kus čeká na výsledek jiného:** napište do prvního vlákna, ať ho spojí s
  kusem, na kterém závisí, nebo ho nechá na konec ke spojení.
- **Dvě vlákna upravila stejný soubor:** v zadání chybí vlastní složka.
  Požádejte první vlákno, ať zadání opraví, a kus pusťte znovu.
- **AI tvrdí, že soubory ve složce nevidí:** pracujete v běžném chatu.
  Přepněte do [Cowork nebo Code](card:when-chat-is-not-enough) podle bloku
  „Ve vašem nástroji“.
- **Výsledky si odporují:** nechte rozpor ve srovnání a rozhodněte ho sami.
  Když chcete projít celý výsledek, pomůže
  [kontrola výstupu AI](card:kontrola-vysledku).
## Co bude hotové

Máte hotovou větší práci, jejíž kusy běžely najednou, každý ve vlastním
vlákně a složce, a srovnání s rozpory a rozhodnutími, které jste udělali. V
`AGENTS.md`, případně v instrukcích složky nebo paměti AI, je pravidlo,
podle kterého AI příště podobnou práci rozdělí sama.
## Co dál

Když se vám rozdělení osvědčí a práce se opakuje, třeba každé čtvrtletí,
uložte ho jako [skill](card:create-skill-from-proven-process).
## Paralelní vlákna

**Co to je:** Dvě nebo více částí jednoho projektu, které dostanou vlastní zadání a mohou v samostatných AI vláknech či nástrojích pracovat současně. Jejich výsledky se nakonec řízeně spojí.

**Co to není:** Není to několik rolí komentujících stejné rozhodnutí ani série kroků, ve které druhý čeká na výsledek prvního.

**Proč to student potřebuje:** Pomáhá poznat, kdy paralelní práce skutečně zvýší kapacitu a kdy jen přidá složitější koordinaci.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Podagent

**Co to je:** Samostatný agent, kterého koordinující agent vytvoří pro konkrétní dílčí úkol. Dostane vlastní zadání a kontext, pracuje odděleně a vrátí výsledek koordinátorovi.

**Co to není:** Není to pouhá odbočka jedné konverzace. Fork vytváří novou větev pro člověka; podagenta může koordinátor sám spustit, řídit a zahrnout do společného výsledku.

**Proč to student potřebuje:** Pomáhá rozlišit ruční paralelní práci ve více chatech od agentní sestavy, ve které delegování a sledování dílčích úkolů přebírá koordinátor.

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
