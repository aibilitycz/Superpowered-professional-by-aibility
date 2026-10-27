# Zadejte úlohu agentovi: AI ji dotáhne sama

Dlouhou úlohu o mnoha krocích dotáhne AI sama, třeba přes noc, a vy ji převezmete podle důkazů.

## Zadejte úlohu agentovi: AI ji dotáhne sama

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** se složkou podkladů k jedné úloze.
## K čemu se hodí

Do pátku má finanční ředitel dostat přehled, které ze šedesáti smluv s
dodavateli se v lednu samy prodlouží. Ke každé chce i termín, do kdy ji jde
vypovědět. Otevřít každou smlouvu, najít článek o trvání a výpovědi a zapsat
data do tabulky jsou dvě odpoledne pečlivé práce.

[Agent](glossary:agent) je AI, která takovou úlohu udělá sama, třeba přes noc,
a pokračuje, dokud nesplní podmínky, které s ní na začátku ujasníte, třeba
„každá ze 60 smluv má v tabulce svůj řádek“.
## Co si připravit

- jednu úlohu o mnoha krocích, u které nechcete sedět, třeba kontrolu smluv
  nebo rešerši,
- podklady k ní v jedné složce,
- AI v režimu Cowork nebo Code; kde ho najdete, ukazuje blok „Ve vašem
  nástroji“.
## Jak na to

1. Otevřete AI v režimu Cowork nebo Code ve složce s podklady, vložte prompt a
   za řádek „Úloha:“ napište, co má agent udělat. AI navrhne podmínky
   dokončení; opravte je a napište „Ano, pracuj“.
2. Když se AI zeptá, jestli smí upravovat soubory, povolte to pro celou úlohu,
   ať se v noci nezastaví. Agent pak pracuje sám a na konci napíše předávací
   zprávu.
3. V předávací zprávě najdete, kde je výsledek. U každé podmínky otevřete
   důkaz a věc nebo dvě porovnejte se zdrojem; co nesedí, vraťte agentovi i s
   podmínkou.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce, a za poslední řádek napište svou úlohu:

Udělej za mě úlohu o mnoha krocích a pracuj na ní sám, dokud nebude hotová. Úloha je na posledním řádku.

Nejdřív projdi podklady ve složce nebo v přílohách a navrhni tři až pět podmínek dokončení, podle kterých poznám, že je hotovo. Každá podmínka musí jít ověřit jedním pohledem: počet, soubor, záznam nebo číslo, které porovnám se zdrojem. Ukaž mi je a počkej, až je potvrdím nebo opravím.

Jakmile podmínky potvrdím, přidej do souboru AGENTS.md ve složce pravidlo: „U každé delší úlohy nejdřív navrhni tři až pět ověřitelných podmínek dokončení a nech mě je potvrdit. Pracuj, dokud neplatí všechny, a na konci ke každé přilož důkaz.“ Když AGENTS.md neexistuje, založ ho. Když ho tenhle nástroj sám nečte, nastav, ať si ho přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Když ke složce přístup nemáš, ulož si pravidlo do paměti; když to neumíš, řekni mi přesně, kam ho vložit.

Pak pracuj sám. Po každém větším kroku si podmínky zkontroluj a pokračuj, dokud neplatí všechny. Drobnosti rozhodni sám. Když narazíš na rozhodnutí, které je moje, zvol opatrnější možnost, označ ji a pokračuj; otázku mi napiš do předávací zprávy. Zastav se, jen když bez mé odpovědi nejde dělat nic dalšího. Když některou podmínku splnit nejde, napiš proč a co navrhuješ.

Až skončíš, napiš mi předávací zprávu. Ke každé podmínce uveď, jestli je splněná, a důkaz, podle kterého to ověřím: cestu k souboru nebo odkaz, číslo i stránku, ze které pochází, změněný záznam nebo snímek obrazovky. Pod podmínky napiš, co jsi rozhodl sám, na co se mě ptáš a u čeho si nejsi jistý.

Úloha:

## Ve vašem nástroji

### Microsoft Copilot

Copilot Cowork zapnete na `copilot.cloud.microsoft` přepínačem nahoře vedle
Chat. Složku s podklady přiložíte tlačítkem + z OneDrivu nebo SharePointu,
soubory z počítače do něj přetáhnete. Pracuje v cloudu, takže notebook můžete
zavřít; hotové soubory najdete v panelu vpravo a pravidlo si uloží jako skill.
Příkaz `/goal` Copilot nemá, podmínky potvrdíte větou „Ano, pracuj“.

### ChatGPT

Nejjednodušší je režim Work: zapnete ho přepínačem nahoře na webu i v aplikaci
ChatGPT pro počítač, podklady nahrajete a úloha spuštěná na webu běží dál, i
když notebook zavřete. Výsledek najdete v předávací zprávě v chatu. Když
podklady leží ve složce v počítači, použijte Codex v aplikaci ChatGPT pro
počítač, kde podmínky potvrdíte příkazem `/goal`.

### Claude

V aplikaci Claude pro počítač otevřete Cowork nebo Claude Code se složkou s
podklady. Úloha běží, dokud je počítač zapnutý a aplikace otevřená. V Claude
Code potvrdíte podmínky příkazem `/goal` a aplikace vám pošle upozornění, až
úloha skončí.

### Gemini

Gemini Agent, který dlouhou úlohu dotáhne sám, je jen pro osobní účty Google
AI Pro nebo Ultra a v EU není. S firemním účtem zadejte úlohu po částech v
aplikaci Gemini: přes Add from Drive přiložte až 10 souborů a vložte prompt,
další přidávejte po desíti a nechte tabulku doplnit. Hotovou tabulku uložte
tlačítkem Export to Sheets a pravidlo jako skill: napište „Ulož to jako
skill“.
## Co je agent

Agent je AI, která sama dělá kroky za vás: otevírá soubory a aplikace, podle
výsledku volí další krok a pokračuje, dokud nedojde k cíli. V režimu Cowork
nebo Code takhle AI pracuje, kdykoli jí zadáte úlohu.

Podmínky dokončení jsou cíl, ke kterému agent pracuje: dokud neplatí všechny,
pokračuje, a vy podle nich na konci výsledek převezmete. Ke každé podmínce
vám ukáže důkaz, takže převzetí zabere pár minut. U velké práce jich může být
i dvacet, pro první úlohu stačí tři až pět. Dobrá podmínka jde ověřit jedním
pohledem: počet, soubor, záznam nebo číslo, které porovnáte se zdrojem. Slova
jako „přehledné“ nebo „kvalitní“ agent splnit ani doložit neumí, proto je
přepište na něco, co jde spočítat nebo otevřít.

`AGENTS.md` je obyčejný textový soubor s pravidly pro AI ve složce, ve které
pracujete; koncovka `.md` znamená text v [Markdownu](glossary:markdown),
jednoduchém zápisu, který otevřete v každém editoru. AI si soubor přečte na
začátku každé práce, takže příště napíšete jen úlohu a podmínky vám navrhne
sama. Nástroj bez přístupu ke složce si pravidlo uloží do paměti, nebo vám
řekne, kam ho vložit.
## Ať agent pracuje, dokud není hotovo

U úlohy na celé odpoledne nebo noc se hodí pojistka, aby agent neskončil
dřív, než platí všechny podmínky. Některé nástroje na to mají příkaz `/goal`,
tedy slovo, které napíšete na začátek zprávy; které to jsou, ukazuje blok
„Ve vašem nástroji“. Místo „Ano, pracuj“ napište `/goal` a za něj zkopírujte
podmínky, které AI navrhla. Agent hned začne pracovat, po každém kroku se
podmínky zkontrolují, a dokud neplatí všechny, pokračuje sám dál:

```text
/goal V tabulce smlouvy-prodlouzeni.xlsx je řádek pro každou ze 60 smluv ve složce Smlouvy. U každé smlouvy je datum konce, výpovědní lhůta, číslo článku, ze kterého pochází, a roční cena bez DPH. Nahoře jsou smlouvy, které je potřeba vypovědět do konce listopadu.
```
## Příklad

Petra je asistentka finančního ředitele ve stavební firmě. Ve čtvrtek
8. 10. 2026 odpoledne od něj dostane úkol: do pátku přehled, které ze 60
smluv s dodavateli se v lednu samy prodlouží. Petra otevře složku Smlouvy v
AI v režimu Cowork, vloží prompt a za poslední řádek napíše:

```text
Projdi všech 60 smluv ve složce Smlouvy a zjisti, které se v lednu samy prodlouží a do kdy je jde vypovědět.
```

AI navrhne čtyři podmínky. Petra přidá pátou o roční ceně, aby ředitel
viděl, o kolik peněz jde, a odpoví „Ano, pracuj“:

```text
1. V tabulce smlouvy-prodlouzeni.xlsx je řádek pro každou ze 60 smluv ve složce Smlouvy.
2. U každé smlouvy je datum konce, výpovědní lhůta a číslo článku, ze kterého pochází.
3. U každé smlouvy je vyznačené, jestli se sama prodlouží.
4. Nahoře jsou smlouvy, které je potřeba vypovědět do konce listopadu, seřazené podle termínu.
5. U každé smlouvy je roční cena bez DPH.
```

Petra nechá počítač zapnutý a jde domů. V pátek ráno najde v chatu
předávací zprávu: 60 smluv a 60 řádků v tabulce, jedenáct smluv se v lednu
prodlouží samo a čtyři je potřeba vypovědět do 30. 11. Dvě smlouvy byly
naskenované a data z nich agent označil k ověření. Petra otevře tři data v
původních smlouvách a všechna sedí, u jedné naskenované opraví datum konce a
tabulku pošle řediteli. Další dlouhou úlohu už zadá jen větou, protože
podmínky jí AI navrhne sama podle pravidla v `AGENTS.md`.
## Když se zaseknete

- **AI skončí po jedné odpovědi, nebo tvrdí, že soubory otevřít nemůže:**
  pracujete v běžném chatu. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) podle bloku „Ve vašem
  nástroji“.
- **Agent skončí dřív, než platí všechny podmínky:** napište mu, kterou
  nesplnil, a ať pokračuje. Když to váš nástroj umí, příště potvrďte
  podmínky příkazem `/goal`, jak popisuje blok „Ať agent pracuje, dokud
  není hotovo“.
- **Ráno najdete úlohu zastavenou uprostřed:** počítač nejspíš usnul, nebo
  agent čekal na povolení upravovat soubory. Napište mu, ať pokračuje, a
  příště mu úpravy povolte pro celou úlohu a počítač nechte v zásuvce.
- **Důkaz nesedí se zdrojem:** napište agentovi, u které podmínky a co
  nesedí, ať to opraví a znovu doloží. Když chcete projít celý výsledek,
  pomůže [kontrola výstupu AI](card:kontrola-vysledku).
## Co bude hotové

Máte hotovou jednu dlouhou úlohu, u které jste nemuseli sedět, a převzali jste
ji podle důkazu ke každé podmínce dokončení. V `AGENTS.md` ve složce, případně
v paměti AI, je pravidlo, podle kterého AI u další delší úlohy sama navrhne
podmínky, pracuje, dokud neplatí všechny, a na konci je doloží.
## Co dál

Když se stejná úloha opakuje každý týden, nastavte ji jako
[naplánovanou úlohu](card:recurring-ai-task).

Když se větší práce dá rozdělit na části, které na sebe nečekají, pusťte je
najednou v [paralelních vláknech](card:parallel-ai-workstreams).
## Agent

**Co to je:** AI systém, který může v rámci zadaného cíle plánovat více kroků, používat dostupné nástroje, pracovat se stavem a provádět povolené akce. Rozsah schopností a míra samostatnosti závisejí na konkrétním nástroji a oprávněních.

**Co to není:** Není to jen uložený prompt ani asistent přejmenovaný na pokročilejší funkci.

**Proč to student potřebuje:** Pomáhá rozpoznat úkoly, které vyžadují nástroje, oprávnění, kontrolní body a jasnou odpovědnost za akce.

## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

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
