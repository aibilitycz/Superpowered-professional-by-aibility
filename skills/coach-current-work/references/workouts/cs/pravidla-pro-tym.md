# Sepište týmu pravidla pro AI: jedna stránka pro kolegy i jejich AI

AI ze směrnice a dvou skutečných situací sepíše týmu, co s AI smí a co vždy rozhoduje člověk.

## Sepište týmu pravidla pro AI: jedna stránka pro kolegy i jejich AI

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** se směrnicí a dvěma situacemi po ruce.
## K čemu se hodí

Karta je pro manažera nebo team leadera, který rozhoduje, jak tým pracuje s
AI. V pondělí se vás Ondra ptá, jestli smí dát export reklamací se jmény a
telefony zákazníků do svého osobního účtu AI. Ve středu zjistíte, že Lucie
nechala AI navrhnout, kterým zákazníkům zamítnout reklamaci, a tři zamítnutí
odeslala, aniž by otevřela objednávky.

Když pravidla týmu leží na jedné stránce ve sdílené složce a AI kolegů je
čte na začátku každé práce, kdo zaváhá, zeptá se své AI a ta mu odpoví podle
vašich pravidel.
## Co si připravit

- firemní směrnici o AI nebo e-mail od IT; když nic takového nemáte, nevadí,
- dvě situace, kdy někdo z týmu s AI váhal, aspoň jednu o rozhodnutí o
  lidech,
- sdílenou složku týmu otevřenou v pracovní AI v režimu Cowork nebo Code,
- kolegu, který stránku nepsal a má na konci pět minut.
## Jak na to

1. Otevřete sdílenou složku v AI v režimu Cowork nebo Code, vložte prompt z
   AI cvičení a směrnici a pod prompt napište obě situace. AI stránku
   `pravidla-ai.md` uloží do složky.
2. Přečtěte si stránku a opravte, co nesedí: jména lidí pro IT, osobní údaje
   a právo a to, co vždy rozhoduje člověk. Otevřené otázky AI vypíše na
   konec.
3. Kolega, který stránku nepsal, otevře složku ve své AI a zeptá se na nový
   případ, třeba na roční odměny. Kde neví, co dělat, ať AI stránku doplní.

Jen s běžným chatem poradí část Když se zaseknete.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code, otevřené ve vaší složce:

Sepiš pro náš tým pravidla pro práci s AI na jednu stránku. Číst je budou kolegové i AI, se kterou pracují.

Vycházej z firemních pravidel, která ti dám nebo najdeš v této složce, a ze dvou situací z naší práce, ve kterých kolegové nevěděli, jak s AI postupovat. Firemní pravidla a smlouvy s klienty mají přednost. Co v podkladech není, nedomýšlej a napiš to do části Otevřené otázky, ke každé otázce se jménem člověka, který ji rozhodne. Když ho nevíš, zeptej se mě.

Stránka má pět částí:
- Nástroje: které AI nástroje tým používá a na jakou práci.
- Data: co do kterého nástroje smí, co se před vložením nahradí obecným označením (třeba Klient A) a co do AI nepatří nikdy, třeba hesla.
- Co vždy rozhoduje člověk: rozhodnutí o lidech (výběr uchazečů, hodnocení, odměny, rozdělení práce), odpovědi zákazníkům, ve kterých jde o peníze nebo slib, a všechno, co nejde snadno vzít zpět. U každého napiš, kdo rozhoduje a co zkontroluje, než výsledek AI použije, včetně případů, které AI vyřadila.
- Koho se zeptat: jména a kontakty pro IT, osobní údaje a právo.
- Co dělat při chybě: co udělat hned, komu to nahlásit a jak rychle.

Každé pravidlo ukaž na příkladu z našich situací, bez jmen kolegů. Piš krátce, aby to pochopil i nový kolega, a vejdi se na jednu obrazovku. Nahoru napiš, kdo pravidla vlastní a kdy je příště zkontrolujeme. Když tým používá AI při výběru uchazečů, hodnocení lidí nebo rozdělování práce, přidej otevřenou otázku pro člověka, který ve firmě řeší právo nebo HR: jak takové použití posuzuje evropský AI Act.

Stránku ulož jako pravidla-ai.md do této složky. Pak do AGENTS.md v této složce zapiš: „Na začátku každé práce v této složce si přečti pravidla-ai.md a řiď se jimi. Když narazíš na situaci, kterou neřeší, řekni to a připiš ji s datem, bez jmen a osobních údajů, do části Otevřené otázky. Pravidla sama neměň.“ Když AGENTS.md neexistuje, založ ho. V Cowork stejný pokyn zapiš i do instrukcí složky.

Nakonec mi stránku ukaž a vypiš otevřené otázky.

## Ve vašem nástroji

### Microsoft Copilot

Cowork v Copilotu pracuje jen se soubory na OneDrivu a SharePointu a že čte
`AGENTS.md`, Microsoft neuvádí, proto postupujte podle bodu „Firma dovoluje
jen běžný chat“. Dokument Pravidla AI přidejte do Notebooku (Poznámkové
bloky, Nový poznámkový blok), do Instructions vložte „Řiď se dokumentem
Pravidla AI; co neřeší, navrhni jako otázku pro [jméno].“ a Notebook
nasdílejte týmu přes Share.

### ChatGPT

Se sdílenou složkou pracuje Codex v aplikaci ChatGPT pro počítač (přepněte
na Codex, open a folder) a `AGENTS.md` čte sám. Bez Codexu postupujte podle
bodu „Firma dovoluje jen běžný chat“: dokument dejte do projektu, do jeho
pokynů vložte „Řiď se dokumentem Pravidla AI; co neřeší, navrhni jako otázku
pro [jméno].“ a projekt sdílejte přes Share.

### Claude

V aplikaci Claude pro počítač zvolte Cowork a Work in a folder, nebo
otevřete složku v Claude Code, který čte `AGENTS.md` sám. V Cowork si AI
podle promptu zapíše pokyn do instrukcí složky a každý kolega v Cowork řekne
své AI, ať to udělá taky. Kdo pracuje jen v chatu, nahraje si stránku do
projektu (Projects).

### Gemini

Gemini s pracovním účtem se složkou v počítači nepracuje, proto postupujte
podle bodu „Firma dovoluje jen běžný chat“ s robotem Gem. V Roboti Gem, Nový
Gem přidejte dokument do Vědomostí, do instrukcí vložte „Řiď se dokumentem
Pravidla AI; co neřeší, navrhni jako otázku pro [jméno].“ a Gem nasdílejte
přes Sdílet. Novou verzi stránky pak nahrajte do Vědomostí místo staré.
## Co vždy rozhoduje člověk

AI smí připravit podklad, pořadí nebo návrh. Rozhodnutí, které mění situaci
konkrétního člověka, dělá člověk: kdo půjde na pohovor, komu přidáte, kdo
dostane jakou práci a komu zamítnete reklamaci. Ten člověk zná kritéria, vidí
podklady, má na kontrolu čas a smí návrh AI odmítnout. Když mu jedna z těch
věcí chybí, je kontrola jen kliknutí na „souhlasím“.

Chyba se často schová v tom, co AI vyřadila. Ať proto člověk otevře i pár
vyřazených případů, třeba pět náhodných životopisů z těch, které AI odložila.
Kdo rozhoduje, má umět rozhodnutí dotčenému člověku vysvětlit vlastními slovy,
bez věty „vyšlo to z AI“.

Když AI v týmu pomáhá vybírat uchazeče, hodnotit lidi, rozhodovat o povýšení
nebo propuštění, rozdělovat práci podle chování nebo osobních vlastností
lidí nebo sledovat jejich výkon, může jít podle evropského
[AI Actu](glossary:ai-act) o vysoce rizikový systém. U něj bude firma od 2. prosince 2027 mimo jiné muset svěřit dohled
člověku, který tomu rozumí a má pravomoc výsledek změnit, a zaměstnance i
jejich zástupce předem informovat, že takovou AI nasadí. Jestli se to týká
vašeho použití, posoudí člověk, který ve firmě řeší právo nebo HR. Rozpoznávat
pomocí AI emoce lidí na pracovišti AI Act zakazuje už od února 2025, s
výjimkou lékařských a bezpečnostních důvodů.
## Jak se pravidly řídí AI kolegů

Kromě stránky zapíše AI do souboru `AGENTS.md` ve sdílené složce pokyn, ať
se jí AI řídí; v Cowork ho zapíše i do instrukcí složky.

Když kolega otevře přímo sdílenou složku, AI si `AGENTS.md` přečte na
začátku práce. Nástroj, který to sám nedělá, si nechá pokyn z `AGENTS.md`
zapsat do svého nastavení pro tuto složku; jak, ukazuje blok „Ve vašem
nástroji“. Pak AI kolegy pravidla čte a situace, které neřeší, zapisuje do
otevřených otázek.

Kdo z týmu pracuje jen v běžném chatu, nahraje si stránku do
[projektu](card:asistent), tedy místa v AI nástroji, kde AI ve všech
konverzacích vidí stejné soubory a pokyny. Otevřené otázky z chatu ale musí
kolega poslat vám.
## Ať pravidla rostou s týmem

Pokyn v `AGENTS.md` zařídí, že AI kolegů připíše do otevřených otázek každou
situaci, kterou stránka neřeší. Jednou za měsíc je může projít naplánovaná
úloha a připravit vám návrh, jak stránku doplnit. Vložte do AI v režimu
Cowork nebo Code tohle zadání a požádejte ji, ať z něj naplánovanou úlohu
založí:

```text
Každý první pracovní den v měsíci projdi pravidla-ai.md ve sdílené složce týmu. Když v části Otevřené otázky přibyly nové situace, navrhni mi ke každé jedno pravidlo s příkladem a napiš, kdo ho má schválit. Když je datum příští kontroly za námi, připomeň mi ho. Když nic nepřibylo, napiš jen jednu větu.
```

Když úloha pracuje se složkou ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Martina vede šestičlennou zákaznickou podporu v e-shopu s elektronikou. Firma
má směrnici IT z března: pracovní data patří jen do firemní AI, kterou firma
platí. Martina otevřela složku týmu „Podpora“ v režimu Cowork, vložila
prompt, směrnici a obě situace z pondělí a ze středy. AI napsala stránku,
Martina opravila jedno jméno a zkrátila část o tom, jaká data kam smí:

```text
Pravidla AI v podpoře (vlastník: Martina Horáková, příští kontrola: 15. 1. 2027)

Nástroje: firemní AI na odpovědi zákazníkům, přehledy a návrhy. Osobní účty AI na práci nepoužíváme.
Data: export reklamací jen do firemní AI. Jména a telefony zákazníků do osobních účtů nikdy, hesla nikam.
Co vždy rozhoduje člověk: zamítnutí reklamace, sleva nad 500 Kč a hodnocení kolegů. AI připraví návrh s důvodem. O reklamaci rozhoduje operátor, o hodnocení Martina. Před zamítnutím reklamace operátor otevře objednávku a fotky.
Koho se zeptat: IT Pavel Krejčí, osobní údaje Jana Malá (pověřenkyně pro ochranu osobních údajů), všechno ostatní Martina.
Při chybě: konverzaci dál nepoužívat a ještě týž den napsat Pavlovi a Janě Malé, co a kam odešlo.
Otevřené otázky: smíme dát hodnocení hovorů od zákazníků do firemní AI a nechat ji navrhnout, komu pomoct s náročnými hovory? Rozhodne Jana Malá s HR.
```

Druhý den otevřel Ondra stejnou složku ve své AI a zeptal se: zákazník chce
za zpožděnou zásilku slevu 800 Kč a AI navrhuje vyhovět, smí to poslat? AI
mu podle stránky odpověděla, že slevu nad 500 Kč rozhoduje člověk a ona ji
sama neslíbí. Kdo to má být, ale stránka neříkala. Martina řekla AI, ať do
části o rozhodování doplní „Slevu nad 500 Kč schvaluje Martina“, a AI to
připsala.
## Když se zaseknete

- **Firma dovoluje jen běžný chat:** vložte prompt bez odstavce, který
  začíná slovy „Stránku ulož jako“, přidejte směrnici jako soubor a
  obě situace napište pod prompt. AI vám stránku napíše přímo do chatu.
  Uložte ji jako dokument s názvem Pravidla AI do sdílené složky týmu a
  dejte ji do sdíleného
  [projektu](card:asistent), ve kterém se kolegové ptají; jak na to ve vašem
  nástroji, ukazuje blok „Ve vašem nástroji“. Tam se kolega zeptá i na nový
  případ z kroku 3 a otevřené otázky vám pošle sám.
- **AI tvrdí, že stránku uložila, ale ve složce není:** pracujete nejspíš v
  běžném chatu, který soubory ukládat neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) a otevřete v něm sdílenou
  složku. Když je používat nesmíte, postupujte podle bodu výš.
- **AI kolegy se pravidly neřídí:** ať kolega otevře přímo sdílenou složku,
  ne její podsložku, a zeptá se AI, jestli vidí `pravidla-ai.md`. Když jeho
  nástroj `AGENTS.md` sám nečte, ať si pokyn z něj nechá zapsat do nastavení
  složky.
- **Stránka je dlouhá nebo samý zákaz:** požádejte AI, ať každou část zkrátí
  na tři řádky a ke každému zákazu napíše, co místo toho tým smí.
## Co bude hotové

Ve sdílené složce týmu máte stránku pravidel AI s příklady z vaší práce,
jmény a otevřenými otázkami. AI kolegů se jí řídí díky `AGENTS.md` nebo
nastavení složky a situace, které stránka zatím neřeší, zapisuje do
otevřených otázek. V týmu, který pracuje jen v běžném chatu, mají kolegové
stránku ve svém projektu. Kolega, který stránku nepsal, podle ní vyřešil
nový případ.
## Právní hranice

Karta vám pomůže sepsat pravidla týmu, nenahrazuje právní radu a sama
nepotvrzuje, že pravidla splňují GDPR nebo AI Act. Co smíte, určují pravidla
vaší firmy, smlouvy s klienty,
[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces) a
[AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces). AI Act ukládá
firmám, které AI používají, přijímat opatření na podporu AI gramotnosti lidí,
kteří s ní pracují. Stránka pravidel týmu může být jedním z nich.
## Co dál

Pravidla ukažte týmu na poradě a z toho, na co se kolegové ptají, nechte AI
stránku doplnit. Jak na to, ukazuje karta
[ukažte týmu AI postup](card:team-adoption-cycle). Další pokyny pro AI ve
sdílené složce, třeba jak psát odpovědi zákazníkům, přidáte do `AGENTS.md`.
Jak na to, ukazuje [samostatná karta](card:agents-md).
## EU AI Act

**Co to je:** Evropské nařízení o umělé inteligenci. Rozlišuje různé role, způsoby použití a úrovně rizika a ukládá konkrétní povinnosti poskytovatelům a subjektům, které AI zavádějí či používají v profesní praxi.

**Co to není:** Není to obecný zákaz AI ani jedno pravidlo platné stejně pro každý nástroj a úkol. Samotná informace, že něco používá AI, ještě neurčuje právní kategorii ani konkrétní povinnost.

**Proč to student potřebuje:** Pomáhá poznat, která praktická situace vyžaduje další kontrolu a kam v knihovně pokračovat.

| Vaše situace | Pokračujte zde |
|---|---|
| AI ovlivňuje rozhodnutí o konkrétním člověku | [Pravidla AI pro tým](card:pravidla-pro-tym) |
| Rozhodujete o použití AI za organizaci, klienta nebo vlastní profesní praxi | [Pravidla AI pro tým](card:pravidla-pro-tym) |
| V podkladu jsou údaje o lidech | [Co smíte dát do AI](card:bezpecne-pouzivani); tady se současně uplatní pravidla GDPR |

AI gramotnost lidí, kteří AI za organizaci používají, i to, co při práci s AI vždy rozhoduje člověk, řeší karta `pravidla-pro-tym`.

**Zdroj:** [Nařízení (EU) 2024/1689, zejména článek 4 a článek 50](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces)

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

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
