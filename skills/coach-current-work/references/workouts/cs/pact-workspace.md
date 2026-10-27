# Založte si PACT: pracovní prostor pro AI

AI vám dá všechnu rozpracovanou práci do jedné složky s mapou, takže nový chat pokračuje bez vysvětlování.

## Založte si PACT: pracovní prostor pro AI

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s rozpracovanými projekty v počítači.
## K čemu se hodí

V pondělí otevřete nový chat kvůli rozpočtu oddělení a deset minut hledáte
podklady po celém počítači. Loňská tabulka je v Dokumentech, poznámky z
porady na Ploše a nabídka dodavatele ve Stažených souborech. AI pak stejně
počítá s loňskými cenami, protože letošní nabídku jste do chatu zapomněli
vložit.

PACT je jedna složka se čtyřmi částmi, ve které AI sama najde projekty,
podklady i pravidla.
## Co si připravit

- soubory k projektům, na kterých teď pracujete, a vědět, kde v počítači
  leží,
- AI v [režimu](glossary:workmode) Cowork nebo Code, která pracuje se
  soubory v počítači.
## Jak na to

1. Otevřete Cowork nebo Code ve složce s vaším jménem, kde jsou Dokumenty,
   Plocha i Stažené soubory, a vložte prompt. AI ukáže po projektech, co
   přesune do nové složky `PACT`.
2. Potvrďte návrh; projekt, u kterého si nejste jistí, nechte zatím
   vynechat. AI soubory přesune a do `AGENTS.md` zapíše mapu PACTu: co kde
   leží a jaká platí pravidla.
3. Otevřete nový chat ve složce `PACT` a zadejte rovnou úkol na jednom
   projektu, třeba „Pokračujme s rozpočtem. Co v něm ještě chybí?“ AI si
   podklady vezme sama.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce:

Založ mi v Dokumentech složku PACT: pracovní prostor, ve kterém má všechna moje práce svoje místo. Když se soubory v počítači pracovat neumíš, řekni mi to hned, ať můžu přepnout do Cowork nebo Code.

Uvnitř vytvoř čtyři části:
- 1_Projects: rozpracované projekty, každý ve vlastní složce,
- 2_Agents: instrukce pro AI, třeba prompty, které používám opakovaně,
- 3_Context: podklady, které platí pro víc projektů, třeba ceník, firemní pravidla nebo povedené texty jako vzor,
- 4_Tools: pomůcky k práci, třeba šablony dokumentů nebo kalkulačky.

Projdi Dokumenty, Plochu a Stažené soubory a zeptej se mě, jestli mám pracovní soubory ještě jinde, třeba v OneDrivu. Podle obsahu a data poslední změny poznej, na kterých projektech teď pracuji. Pak mi ukaž návrh po projektech: název projektu a jakých souborů se přesun týká, ne každý soubor zvlášť. Po mém potvrzení soubory přesuň a seznam přesunů (odkud kam) ulož do souboru presuny.md ve složce PACT, aby šly kdykoli vrátit. Co nepatří k rozpracované práci, nech na místě. Soubory ve sdílených složkách, se kterými pracují i kolegové, nepřesouvej; jen do mapy zapiš, kde leží.

Nakonec vytvoř ve složce PACT soubor AGENTS.md s mapou PACTu: co je v které části a jaké projekty tam jsou, u každého jednou větou, v jakém je stavu. Přidej pravidlo: „Nový projekt založ jako složku v 1_Projects. Každý nový soubor ulož do části, kam patří. Když přibude projekt nebo se změní jeho stav, uprav mapu v tomto souboru. Před prací na projektu si přečti jeho složku.“ Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.

## Ve vašem nástroji

### Microsoft Copilot

Cowork najdete vedle přepínače Chat; když tam není, požádejte o něj správce
IT. Vidí jen OneDrive a SharePoint, takže složku nevybíráte a na konec
promptu připíšete: „Místo Dokumentů, Plochy a Stažených souborů projdi můj
OneDrive a PACT založ tam. Mapu ulož jako dokument Word a pravidla mi napiš
pro Customize, Preferences.“ V kroku 3 napište v nové úloze, že PACT je na
OneDrivu.

### ChatGPT

V aplikaci ChatGPT pro počítač přepněte na Codex, zvolte otevření složky
(open a folder) a vyberte složku s vaším jménem. Codex čte `AGENTS.md` sám a
naplánovanou úlohu založí, když ho o ni požádáte; najdete ji pod Scheduled.
Když Codex nevidíte, ve firmě ho nejspíš vypnul správce, tak ho požádejte,
ať ho zapne.

### Claude

V aplikaci Claude pro počítač otevřete Cowork a vyberte složku s vaším
jménem, nebo ji otevřete v Claude Code; obojí mají placené tarify. Cowork si
pravidlo zapíše do instrukcí složky (Folder instructions), Claude Code čte
`AGENTS.md`. Naplánovanou úlohu AI založí, když ji o to požádáte, a najdete
ji v levém panelu pod Scheduled.

### Gemini

Gemini na Disku Google složky nezakládá a soubory do nich nepřesouvá, takže
PACT s ním nepostavíte. Na tenhle workout potřebujete AI v režimu Cowork
nebo Code, třeba Claude Cowork, Claude Code nebo Codex v aplikaci ChatGPT;
zeptejte se správce IT, jestli ji firma má.
## Co je PACT

[PACT](glossary:pact) je způsob, jak uspořádat práci, aby se v ní vyznal
člověk i AI. Název tvoří počáteční písmena anglických slov Projects
(projekty), Agents (instrukce pro AI), Context (podklady, o které se
opíráte) a Tools (pomůcky). Nejjednodušší podoba jsou čtyři složky jako v
tomto cvičení; díky číslům před názvy jsou vždy seřazené v tomto pořadí.
Vy rozhodujete, které projekty do PACTu patří, a přesun i uspořádání udělá
AI. Žádný zvláštní program na to nepotřebujete, a když máte část práce jinde,
třeba firemní dokumenty na sdíleném disku, může tam zůstat a AI si do mapy
zapíše, kde ji najde.

`AGENTS.md` je obyčejný textový soubor v hlavní složce PACTu, ve kterém jsou
pravidla pro AI. Jmenuje se podle [agentů](glossary:agent), tedy AI, která
sama pracuje se soubory, a přípona `.md` znamená zápis v
[Markdownu](glossary:markdown). Řada nástrojů v režimu Code si ho přečte sama
na začátku každé práce, takže mapu ani pravidla nemusíte opakovat. Kde to
nástroj sám neumí, AI pravidlo uloží do jeho nastavení, nebo vám napíše, kam ho vložit.

Běžný chat na PACT nestačí, protože do složek v počítači nevidí; jak
[přepnout do Cowork nebo Code](card:when-chat-is-not-enough), ukazuje
samostatná karta. Do PACTu patří jen rozpracované projekty a jejich podklady; staré archivy nechte, kde jsou, a AI je přesune, až o to požádáte.
## Ať se PACT udržuje sám

Naplánovaná úloha jednou týdně roztřídí do PACTu i soubory, které přibyly
jinde. Pravidlo v `AGENTS.md` pokryje práci, kterou děláte s AI ve složce
`PACT`. Přílohy z e-mailů totiž končí ve
Stažených souborech a rychlé poznámky na Ploše. Vložte AI v režimu Cowork
nebo Code toto zadání a požádejte ji, ať z něj naplánovanou úlohu založí:

```text
Každý pátek v 16:00 projdi Plochu a Stažené soubory. Soubory z tohoto týdne, které patří k projektům v PACTu, přesuň do správné části podle mapy v AGENTS.md. Když přibyl nový projekt, založ mu složku v 1_Projects a doplň ho do mapy. Na konci mi napiš, co jsi kam přesunul a u kterých souborů nevíš, kam patří.
```

Když úloha pracuje se soubory ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Jana připravuje stánek firmy na veletrh v Brně a podzimní zájezd do Dolomit
pro kolegy. Soubory k obojímu má rozházené po celém počítači. AI pozná oba
projekty a po Janině potvrzení vytvoří:

```text
PACT/
  AGENTS.md
  1_Projects/
    veletrh-brno/         brief, rozpočet stánku, nabídky tří tiskáren
    zajezd-dolomity/      program a kalkulace
  2_Agents/
    prompt-pozvanka.md
  3_Context/
    cenik-2026.xlsx
    logo-a-barvy.pdf      hodí se ke stánku i k pozvánce na zájezd
  4_Tools/
    kalkulacka-zajezdu.xlsx
```

Ve středu 14. 10. otevře nový chat ve složce `PACT` a napíše: „Pokračujme
s veletrhem. Která tiskárna je nejlevnější?“ Dobrá odpověď porovná tři
nabídky ze složky projektu, aniž by Jana cokoli vkládala. Když se AI ptá, o
jaký veletrh jde, nejspíš pracuje mimo složku `PACT`.
## Když se zaseknete

- **AI tvrdí, že složky založila, ale v počítači nejsou:** pracujete nejspíš
  v běžném chatu, který se soubory v počítači pracovat neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) a vyberte v něm složku s
  vaším jménem.
- **AI nevidí nebo nemůže přesunout soubory v některé složce:** zkontrolujte,
  že jste v Cowork nebo Code vybrali složku s vaším jménem. Když soubory
  leží mimo ni, zeptejte se AI, jak jí k nim dát přístup.
- **Chcete přesun vrátit:** řekněte AI ve složce `PACT`, ať podle souboru
  `presuny.md` vrátí soubory zpátky, všechny nebo jen jeden projekt.
- **Nový chat se ptá na věci, které ve složce jsou:** otevřete chat ve
  složce `PACT`, ne v obyčejném okně chatu, a zkontrolujte, že `AGENTS.md`
  leží přímo v ní. Pak AI požádejte, ať si ho přečte.
## Co bude hotové

Máte složku `PACT` se čtyřmi částmi, v ní rozpracované projekty a podklady a
v `AGENTS.md` mapu, podle které se ve složce vyzná každý nový chat. Na
skutečném úkolu jste si ověřili, že AI na projektu pokračuje, aniž byste jí
cokoli vkládali nebo vysvětlovali.
## Co dál

Nechte AI napsat každému projektu [úvodní stránku](card:project-start-here),
ze které je hned vidět, v jakém je stavu. Z postupu, který AI vysvětlujete
pořád dokola, ať udělá
[návod, který použije znovu](card:create-skill-from-proven-process).
## Agent

**Co to je:** AI systém, který může v rámci zadaného cíle plánovat více kroků, používat dostupné nástroje, pracovat se stavem a provádět povolené akce. Rozsah schopností a míra samostatnosti závisejí na konkrétním nástroji a oprávněních.

**Co to není:** Není to jen uložený prompt ani asistent přejmenovaný na pokročilejší funkci.

**Proč to student potřebuje:** Pomáhá rozpoznat úkoly, které vyžadují nástroje, oprávnění, kontrolní body a jasnou odpovědnost za akce.

## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

## PACT

**Co to je:** Model uspořádání AI pracovního prostředí do čtyř typů prvků: Projects, Agents, Context a Tools, tedy projekty, asistenti nebo agenti, kontext a nástroje.

**Co to není:** Není to povinná sada čtyř složek ani hotový software. Konkrétní podoba závisí na tom, jak člověk pracuje a co už používá.

**Proč to student potřebuje:** Pomáhá zorientovat více projektů, opakovaných AI postupů, stabilního kontextu a nástrojů tak, aby je našel člověk i AI.

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
