# Založte si worklog: deník projektu

AI vám povede deník projektu, takže nový chat i kolega navážou tam, kde jste skončili.

## Založte si worklog: deník projektu

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním rozpracovaným projektem.
## K čemu se hodí

Minulý týden jste na poradě rozhodli, že nabídka půjde bez slevy a termín se
posune na listopad. Dnes otevřete nový chat, AI o tom neví a do návrhu e-mailu
slevu napíše. Kolega, který projekt mezitím převzal, se vás ptá, jestli slevu
dát.

Pomůže worklog, deník projektu: AI do něj po každém rozhodnutí zapíše krátký
záznam a nový chat i kolega si v něm přečtou, co od teď platí.
## Co si připravit

- složku s jedním rozpracovaným projektem,
- poznámky, e-maily, zápis z porady nebo chat z poslední práce na něm,
- AI v [režimu](glossary:workmode) Cowork nebo Code, která pracuje se
  soubory v počítači.
## Jak na to

1. Otevřete složku projektu v Cowork nebo Code a vložte prompt. AI zapíše
   první záznamy do `worklog.md` a uloží si pravidlo, že ho bude doplňovat
   po každé práci.
2. Přečtěte si první záznamy a opravte, co nesedí.
3. Otevřete nový chat ve stejné složce a zeptejte se na něco, co už je
   rozhodnuté. AI by měla odpovědět podle worklogu.

Do záznamu patří jen to, co nový člověk potřebuje, aby nedělal věci znovu.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce:

Založ pro tenhle projekt worklog: deník, do kterého se zapisuje, co se na projektu udělalo, proč a co se rozhodlo.

Projdi podklady ve složce projektu a poznámky, které ti dám, a napiš z nich první záznamy. Každý záznam má tento tvar:

### RRRR-MM-DD: krátký název
- Co se udělalo: jedna až dvě věty.
- Proč: důvod nebo problém, který to řeší.
- Rozhodnutí: co od teď platí. Když se nic nerozhodlo, řádek vynech.
- Další krok: co přijde dál a kdo to udělá.

Nejnovější záznam dej nahoru. Piš tak, aby to pochopil kolega, který u práce nebyl. Nepřepisuj celý chat a nevypisuj drobné úpravy. Když z podkladů nepoznáš datum nebo důvod, zeptej se mě.

Ulož záznamy do souboru worklog.md ve složce projektu. Když už existuje, připiš nové záznamy nahoru.

Nakonec ulož pravidlo „Po každé dokončené práci na projektu připiš nahoru do worklog.md záznam ve stejném tvaru.“ do souboru AGENTS.md ve složce projektu. Když neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.

## Ve vašem nástroji

### Microsoft Copilot

Cowork najdete vedle přepínače Chat; když tam není, požádejte o něj správce
IT. Vidí jen soubory na OneDrivu a SharePointu, proto na konec promptu
připište: „Pracuj ve složce projektu na OneDrivu, worklog veď jako dokument
Word a pravidlo mi napiš pro Customize, Preferences.“ V kroku 3 napište v
nové úloze, kde projekt leží. Naplánované úlohy najdete na stránce
Automations.

### ChatGPT

V aplikaci ChatGPT pro počítač přepněte na Codex, zvolte otevření složky
(open a folder) a vyberte složku projektu. Codex čte `AGENTS.md` sám a
naplánovanou úlohu založí, když ho o ni požádáte; najdete ji pod Scheduled.
Když Codex nevidíte, ve firmě ho nejspíš vypnul správce, tak ho požádejte,
ať ho zapne.

### Claude

V aplikaci Claude pro počítač otevřete Cowork a vyberte složku projektu,
nebo ji otevřete v Claude Code; obojí mají placené tarify. Cowork si
pravidlo zapíše do instrukcí složky (Folder instructions), Claude Code čte
`AGENTS.md`. Naplánovanou úlohu AI založí, když ji o to požádáte, a najdete
ji v levém panelu pod Scheduled.

### Gemini

Gemini se složkou v počítači nepracuje a firemní účty nemají paměť, takže
worklog po práci sám nedoplní. První záznamy ale napíše: přiložte poznámky
přes Add from Drive a worklog uložte přes Share & export, Export to Docs.
Krok 3 udělejte v Gemu (Gems, New Gem) s worklogem v Knowledge a pokynem
„Odpovídej podle worklogu“ v Instructions.
## Co je worklog

Worklog, anglicky pracovní deník, je obyčejný textový soubor `worklog.md` ve
složce projektu s nejnovějším záznamem nahoře.
Záznamy píše a ukládá AI, takže vás deník nestojí čas navíc. Mřížky `###` na
začátku řádku znamenají nadpis; takovému zápisu se říká
[Markdown](glossary:markdown).

`AGENTS.md` je soubor s pravidly pro AI ve stejné složce. Řada nástrojů v
režimu Code si ho přečte sama na začátku každé práce, takže pravidlo o
worklogu nemusíte opakovat. Kde to nástroj sám neumí, AI pravidlo uloží do jeho nastavení,
nebo vám napíše, kam ho vložit.

Když zatím používáte jen běžný chat, worklog do složky neuloží; jak
[přepnout do Cowork nebo Code](card:when-chat-is-not-enough), ukazuje
samostatná karta. Celý chat a drobné úpravy do záznamů nepatří.
## Ať se worklog píše sám

Naplánovaná úloha dopíše worklog i za práci mimo složku projektu. Uložené
pravidlo pokryje práci, kterou děláte s AI ve složce projektu. Část práce se
ale odehraje jinde: v e-mailech, na schůzkách nebo v jiném chatu. Úloha se
spustí každý pracovní den večer a worklogy dopíše podle toho, co se ten den
dělo. Vložte AI v režimu Cowork nebo Code toto zadání a požádejte ji, ať z
něj naplánovanou úlohu založí:

```text
Každý pracovní den v 18:00 projdi, co se dnes dělo v mých chatech, upravených souborech, e-mailech a schůzkách v kalendáři. Za každý projekt, na kterém se dnes něco udělalo nebo rozhodlo, připiš nahoru do jeho worklogu jeden záznam ve stejném tvaru jako předchozí záznamy. Když se na projektu nic nestalo, nic nepiš.
```

Když úloha pracuje se soubory ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Projekt: nový newsletter pro zákazníky. Z poznámek z první porady AI zapíše:

```text
### 2026-10-08: Nástroj a frekvence newsletteru
- Co se udělalo: porovnali jsme tři nástroje na rozesílání a vybrali ten, který už používá obchod.
- Proč: obchod v něm má kontakty, nemusíme je přenášet.
- Rozhodnutí: newsletter chodí jednou měsíčně, první číslo vyjde v listopadu.
- Další krok: Petra připraví šablonu do 15. 10.
```

O týden později se v novém chatu zeptáte, jak často má newsletter chodit.
Dobrá odpověď zní: jednou měsíčně, podle záznamu z 8. 10. Když AI odpoví
jinak, nejspíš pracuje mimo složku projektu.
## Když se zaseknete

- **AI tvrdí, že záznam uložila, ale v souboru není:** pracujete nejspíš v
  běžném chatu, který soubory měnit neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) a otevřete v něm složku
  projektu.
- **Nový chat worklog nevidí:** otevřete chat ve stejné složce projektu, ne v
  obyčejném okně chatu.
- **AI worklog po práci nedoplní:** zeptejte se AI, kde má pravidlo o
  worklogu uložené. Má být v `AGENTS.md` ve složce projektu, a když ho váš
  nástroj sám nečte, i odkaz na něj v nastavení nástroje.
- **Záznamy jsou dlouhé:** požádejte AI, ať každý zkrátí na čtyři řádky.
## Co bude hotové

Máte worklog projektu s prvními záznamy a uložené pravidlo, díky kterému ho
AI doplňuje po každé práci. V novém chatu jste si ověřili, že AI z worklogu
zná vaše rozhodnutí a nenavrhuje znovu to, co jste už zamítli.
## Co dál

Současný stav projektu shrňte na jedné
[úvodní stránce projektu](card:project-start-here). Ostatní pravidla, podle kterých AI v projektu pracuje, sepíšete do [souboru s pravidly pro AI](card:agents-md).
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

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
