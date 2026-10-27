# Připravte idea file: nápad na jedné stránce

AI sepíše váš nápad na jednu stránku tak, aby s ním kolega nebo jiná AI uměli pracovat i bez vás.

## Připravte idea file: nápad na jedné stránce

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním nápadem.
## K čemu se hodí

Na úterní poradě řeknete nápad, aby každý nováček dostal na první dva týdny
parťáka z jiného oddělení. Manažerka odpoví: „Sepiš to a pošli Lence z HR, ať
to do pátku rozpracuje.“ Napíšete tři řádky do e-mailu. Lenka se v pátek vrátí
s návrhem, aby se nováčkům víc věnoval jejich vlastní manažer, protože z
e-mailu nepoznala, proč má parťák být právě z jiného oddělení.

Idea file je jedna stránka o tom, co chcete udělat a proč; jak to udělat,
nechává na tom, kdo nápad převezme.
## Co si připravit

- jeden nápad, který chcete předat kolegovi nebo AI; stačí ho mít v hlavě,
- AI, kterou v práci používáte,
- druhou AI na kontrolu, nebo v té první nový chat bez paměti.
## Jak na to

1. Vložte prompt a za řádek „Nápad:“ napište nebo
   [nadiktujte](card:voice-as-primary-ai-input) nápad i s tím, co vás k němu
   přivedlo. AI se zeptá nejvýš na tři věci a idea file uloží.
2. Přiložte idea file do druhé AI a napište: „Přečti si tenhle soubor a
   řekni mi vlastními slovy, co chce autor udělat a proč. Na co by ses ho
   zeptal, než začneš?“
3. Odpověď druhé AI vložte první AI, ať idea file doplní tam, kde ho druhá
   pochopila jinak. Hotový soubor pošlete kolegovi, nebo ho dejte AI k
   rozpracování.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Udělej z mého nápadu idea file: jednu stránku, se kterou může kolega nebo jiná AI pracovat beze mě. Nápad najdeš na konci za řádkem „Nápad:“.

Nejdřív se mě zeptej nejvýš na tři věci, bez kterých by nápad nikdo jiný nepochopil. Na nic dalšího se neptej; co nevíš, zapiš do otevřených otázek.

Idea file napiš česky, nejvýš na jednu stranu, v tomto tvaru:

### Název nápadu
Jedna až dvě věty: co to je.

### Proč
Jaký problém nápad řeší, komu pomůže a jak se to dělá dnes.

### Hlavní myšlenka
V čem je nápad jiný než dnešní postup.

### Jak by to fungovalo
Jak by to vypadalo pro lidi, kterých se nápad týká, na jednom konkrétním příkladu.

### Co je rozhodnuté a co je otevřené
Dva seznamy: co už platí a na co zatím nemáme odpověď.

Popiš, co chci udělat a proč. Nástroje a postup, jak to udělat, nech na tom, kdo nápad převezme, pokud nejsou jádrem nápadu. Nevymýšlej čísla ani dohody, které ode mě nemáš.

Když pracuješ ve složce, ulož idea file jako soubor .md do složky napady a pojmenuj ho podle nápadu. Pak přidej do souboru AGENTS.md v téže složce pravidlo: „Když řeknu ‚udělej z toho idea file‘, zeptej se mě nejvýš na tři věci, sepiš nápad ve stejném tvaru jako soubory ve složce napady a ulož ho tam.“ Když AGENTS.md neexistuje, založ ho, a zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.

Když se soubory ve složce pracovat neumíš, nic nezakládej. Dej mi idea file jako soubor .md ke stažení a do paměti si ulož, že když řeknu „udělej z toho idea file“, zeptáš se mě nejvýš na tři věci a sepíšeš nápad v tomto tvaru. Po každé úpravě mi dej nový soubor ke stažení.

Nápad:

## Ve vašem nástroji

### Microsoft Copilot

V Copilot Chatu vyberte před vložením promptu v nabídce Tools nebo Agents
agenta Word a nad řádek „Nápad:“ připište „Dej mi idea file jako dokument
Word.“ Copilot pravidlo uloží do paměti (Saved memories) a používá ji i v
novém chatu, takže idea file dejte na kontrolu přečíst kolegovi. Skilly má
Cowork (Customize, Skills).

### ChatGPT

V běžném chatu ChatGPT dostanete idea file v odpovědi a pravidlo si AI uloží
do paměti (Settings, Personalization, Memory). Na kontrolu otevřete Dočasný
chat (Temporary chat), který paměť nepoužívá. Skilly mají firemní tarify
Business a Enterprise v postranním panelu pod Plugins, na kartě Skills.

### Claude

V běžném chatu Claude vytvoří AI soubor ke stažení, když máte zapnuté Code
execution and file creation (Settings, Capabilities), a pravidlo si uloží do
paměti (Settings, Memory). Na kontrolu otevřete incognito chat, který paměť
nepoužívá. Skilly najdete v Customize, Skills a fungují v chatu i v Cowork.

### Gemini

Hotový idea file uložte přes Share & export, Export to Docs a kolegovi ho
nasdílíte odkazem. Firemní účty nemají paměť, takže na kontrolu stačí nový
chat. Pravidlo pro příště si nechte uložit jako skill: napište „Ulož to jako
skill“ a najdete ho v Customize, Skills.
## Co je idea file

Idea file, česky soubor s nápadem, je obyčejný textový soubor s příponou
`.md`, psaný v [Markdownu](glossary:markdown): mřížky `###` na začátku řádku
označují nadpis. Napíše ho AI z toho, co jí řeknete, a vy jen odpovíte na
pár otázek. Přečte ho každá AI, ať ji kolega používá jakoukoli, a kolega si
ho otevře třeba v Poznámkovém bloku.

Od zadání úkolu se idea file liší tím, že neříká, jak postupovat. Kolega nebo
jeho AI si provedení vymyslí podle svých možností, a i když zvolí jinou cestu,
než byste zvolili vy, nápad zůstane stejný. Ověřujete ho na druhé AI, protože
ta stejně jako kolega nezná chat, ve kterém idea file vznikl.

`AGENTS.md` je soubor s pravidly pro AI ve stejné složce. Řada nástrojů v
režimu Code si ho přečte sama na začátku každé práce; kde to nástroj sám
neumí, AI pravidlo uloží do jeho nastavení, nebo vám napíše, kam ho vložit. Příště
tak v nové úloze ve stejné složce stačí napsat „udělej z toho idea file“.

V režimu Cowork nebo Code uloží AI idea file do složky `napady` a pravidlo
pro příště do `AGENTS.md`; když složku nemáte, založte si novou prázdnou. V
běžném chatu vám dá idea file ke stažení nebo do odpovědi a pravidlo si
uloží do paměti, pokud ji máte zapnutou. Kdy se vyplatí přepnout, ukazuje
karta [Chat, Cowork nebo Code](card:when-chat-is-not-enough).

Do idea filu patří hlavně to, proč nápad dává smysl; jak ho uskutečnit,
nechte na tom, kdo ho převezme.
## Ať AI píše idea file všude

Pravidlo v `AGENTS.md` platí jen ve složce, kam ho AI zapsala. Nápady ale
přicházejí i jinde, třeba uprostřed práce na jiném projektu. Když chcete idea
file psát kdekoli, nechte AI udělat z tohoto postupu [skill](glossary:skill):
uložený návod, který AI použije sama, kdykoli řeknete „udělej z toho idea
file“. Skilly neumí každý nástroj; které je umějí, ukazuje blok „Ve vašem
nástroji“. V chatu, ve kterém idea file vznikl, napište:

```text
Z toho, jak jsme teď psali idea file, udělej skill s názvem idea-file. Použij ho, kdykoli řeknu „udělej z toho idea file“, v jakékoli složce i chatu. Zachovej tvar souboru a nejvýš tři otázky. Ulož skill tak, aby ho tenhle nástroj načetl sám, a když to tady nejde, řekni mi, kde ho přidám.
```
## Příklad

Petra koordinuje projekty ve strojírenské firmě. Ve středu 7. 10. 2026 vloží
prompt do AI v režimu Cowork, otevřené ve složce projektu, a za poslední
řádek nadiktuje: „Chci, aby každý nováček dostal na první dva týdny parťáka z
jiného oddělení, kterého se může zeptat na cokoli, co nechce řešit s
manažerem.“ AI se zeptá, proč zrovna z jiného oddělení, co dnes nováčkům
chybí a kolika lidí se to týká. Petra odpoví, že nováčci se manažera bojí
ptát na drobnosti, že loni ze dvanácti nováčků čtyři odešli do tří měsíců a
že letos firma přijme kolem patnácti lidí. AI uloží
`napady/partak-pro-novacky.md`:

```text
### Parťák pro nováčky
Každý nováček dostane na první dva týdny parťáka z jiného oddělení, kterého se může zeptat na cokoli.

### Proč
Nováčci se manažera bojí ptát na drobnosti, třeba kde najdou šablony nebo jak vyúčtovat služební cestu. Loni ze dvanácti nováčků čtyři odešli do tří měsíců. Letos firma přijme kolem patnácti lidí.

### Hlavní myšlenka
Parťák z jiného oddělení nováčka nehodnotí, takže se ho nováček nebojí zeptat na cokoli.

### Jak by to fungovalo
První den jdou nováček a parťák spolu na oběd. Další dva týdny se potkají dvakrát týdně na čtvrt hodiny. Nová konstruktérka se tak třeba zeptá parťačky z účtárny, jak vyúčtovat první služební cestu, a nemusí s tím chodit za manažerem.

### Co je rozhodnuté a co je otevřené
- Rozhodnuté: parťák je vždy z jiného oddělení, program trvá dva týdny.
- Otevřené: kdo parťáky vybere? Dostanou na to čas v pracovní době?
```

Druhá AI shrne nápad správně, ale zeptá se, jestli je parťák pro nováčka
povinný. Petra její odpověď vloží první AI, dopíše, že povinný je, a AI to
doplní do rozhodnutých věcí. Ještě ten den Petra soubor pošle Lence z HR,
která ho dá své AI jako podklad pro program na listopad.
## Když se zaseknete

- **AI tvrdí, že idea file uložila, ale ve složce není:** pracujete nejspíš v
  běžném chatu, který do složky ukládat neumí. Požádejte o soubor ke stažení,
  nebo přepněte do [Cowork nebo Code](card:when-chat-is-not-enough).
- **Nápad zatím nejde říct jednou větou:** nadiktujte ho tak, jak ho máte, i s
  tím, co vám na dnešním stavu vadí; jak na to, ukazuje karta
  [Nadiktujte AI zadání](card:voice-as-primary-ai-input). Co AI z diktování
  nepozná, zapíše do otevřených otázek.
- **AI místo nápadu píše podrobný postup:** napište jí: „Vyhoď nástroje a
  kroky, nech jen co a proč.“
- **Druhá AI pochopila nápad jinak:** nevysvětlujte jí ho v chatu, protože
  kolega takové vysvětlení nedostane. Vložte její odpověď první AI, ať podle
  ní idea file doplní, a dejte ho druhé AI znovu.
## Co bude hotové

Máte idea file s nápadem, který jiná AI pochopila stejně jako vy, a můžete ho
poslat kolegovi nebo dát AI k rozpracování. V Cowork nebo Code leží ve složce
`napady` a pravidlo pro příště je v `AGENTS.md`; v běžném chatu si pravidlo
pamatuje AI. Příští nápad tak AI sepíše, když napíšete „udělej z toho idea
file“.
## Co dál

Když si nápadem nejste jistí, nechte ho prověřit z několika stran v
[panelu expertů](card:panel-expertu). Když jde o nápad na nástroj nebo
aplikaci, nechte si ho podle idea filu postavit [vibe codingem](card:risk-based-prototyping).
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Skill

**Co to je:** Opakovaně použitelná procedura pro určitý typ úkolu. Může obsahovat instrukce, pravidla, příklady, šablony a další potřebné zdroje. Způsob vytvoření a spuštění se liší podle nástroje.

**Co to není:** Není to obecná role asistenta ani jedna povedená konverzace uložená beze změny.

**Proč to student potřebuje:** Pomáhá převést osvědčený postup do stabilní podoby, kterou lze konzistentně použít znovu.

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
