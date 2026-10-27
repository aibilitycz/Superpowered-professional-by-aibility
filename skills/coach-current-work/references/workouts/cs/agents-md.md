# Založte si AGENTS.md: pravidla pro AI v jednom souboru

AI zapíše pokyny, které jí pořád opakujete, do jednoho souboru a bude se jimi řídit při každé práci.

## Založte si AGENTS.md: pravidla pro AI v jednom souboru

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** se složkou, ve které s AI pracujete.
## K čemu se hodí

V pondělí píšete AI k nové nabídce totéž co minulý týden: zákazníkovi vykat
a ceny uvádět s DPH. Ve středu otevřete kvůli druhé nabídce nový chat a
pokyny píšete znovu. Kolegyně, která nabídky dělá za vás, když máte
dovolenou, má v AI jiná pravidla, a zákazník tak dostane ceny jednou s DPH a
podruhé bez.

`AGENTS.md` je soubor s pravidly ve vaší pracovní složce, který si AI přečte
na začátku každé práce, takže pokyny řeknete jednou a platí i pro kolegyni,
která pracuje ve stejné složce.
## Co si připravit

- složku, ve které s AI pracujete, třeba složku rozpracovaného projektu,
- pokyny, které AI pořád opakujete, nebo vlastní instrukce ze svého AI,
- AI v [režimu](glossary:workmode) Cowork nebo Code, která pracuje se
  soubory v počítači.
## Jak na to

1. Otevřete Cowork nebo Code ve složce z přípravy, povolte úpravy souborů a
   vložte prompt. AI se zeptá na pokyny, zapíše je do `AGENTS.md` a zařídí,
   aby ho četla při každé práci.
2. Přečtěte si pravidla, která vám AI ukáže. Co nesedí nebo chybí, řekněte
   AI a ona soubor opraví.
3. V novém chatu, nejlépe v druhém nástroji, zadejte úkol a napište: „Vypiš
   soubory s pravidly, které se načetly na začátku práce, a pravidla, podle
   kterých výsledek vznikl.“
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce:

Založ v této složce soubor AGENTS.md s pravidly pro AI, abych ti stejné pokyny nemusel opakovat v každém chatu a v každém AI nástroji.

Zeptej se mě na pokyny, které AI opakuji nejčastěji. Ptej se po okruzích: jazyk a oslovení, jak psát, co nikdy nedělat a co ověřit před odevzdáním. Když ti vložím vlastní instrukce z jiného AI nástroje nebo když v této složce najdeš soubor s pravidly pro AI, převezmi z nich pokyny, které platí pro každou práci.

Každé pravidlo napiš jako jeden řádek s konkrétním pokynem, třeba „Ceny piš s DPH a měnou“. Obecnou radu typu „buď přesný“ přepiš na konkrétní pokyn. Když není jasné, proč pravidlo platí, připiš důvod. Pravidla seřaď pod nadpisy podle okruhů a celý soubor drž krátký, ať se vejde na jednu obrazovku.

Na konec souboru přidej pravidlo: „Když tě opravím a oprava má platit i příště, zapiš ji do AGENTS.md jako nové pravidlo a řekni mi, co jsi přidal.“

Pak zjisti, jestli tenhle nástroj čte AGENTS.md sám na začátku každé práce v této složce. Když ne, nastav to tak, aby se při každé práci načetl automaticky; v Cowork to zapiš do instrukcí složky. Když jsi pravidla převzal z jiného souboru s pravidly pro AI, nech v něm místo nich jen jeden řádek, který načte AGENTS.md, ať pravidla nejsou na dvou místech, a řekni mi, co jsi v něm změnil. Když to sám nastavit nemůžeš, napiš mi, kde v nastavení to udělám a co tam vložím.

Nakonec mi ukaž hotový AGENTS.md a napiš, jestli ho tenhle nástroj čte sám, nebo co jsi nastavil.

## Ve vašem nástroji

### Microsoft Copilot

Copilot Chat soubor nečte: na konec promptu připište „Složku nemáš, pravidla
mi napiš jako text pro Custom instructions.“ a text vložte do Settings and
more, Chat settings, Personalization. Krok 3 udělejte v novém chatu otázkou,
podle kterých pokynů výsledek vznikl. V Cowork vedle přepínače Chat patří
pravidla do Customize, Preferences.

### ChatGPT

V aplikaci ChatGPT pro počítač přepněte na Codex a zvolte otevření složky
(open a folder); Codex čte `AGENTS.md` sám. V běžném chatu vám AI pravidla
napíše jako text pro Custom instructions (Settings, Personalization) nebo
pro instrukce projektu (Project settings). Krok 3 pak udělejte v novém chatu
a zeptejte se, podle kterých pokynů výsledek vznikl.

### Claude

V Claude Code čte AI `AGENTS.md` sama. V Cowork, který otevřete v aplikaci
Claude pro počítač a vyberete v něm složku, si AI do instrukcí složky
(Folder instructions) zapíše, ať soubor čte. V běžném chatu Claude patří
pravidla do instrukcí projektu (Set project instructions).

### Gemini

Gemini `AGENTS.md` nečte a firemní účty nemají paměť. Vložte prompt do
Gemini a pravidla uložte přes Share & export, Export to Docs. V Gems, New
Gem pak napište do Instructions „Řiď se pravidly z přiloženého dokumentu“ a
dokument přidejte do Knowledge. Krok 3 udělejte v novém chatu s tímto Gemem,
který kolegům nasdílíte přes Share.
## Co je AGENTS.md

`AGENTS.md` je obyčejný textový soubor s pravidly pro AI: jaký jazyk
používat, jak psát, co nikdy nedělat a co ověřit před odevzdáním. Jmenuje se
podle [agentů](glossary:agent), tedy AI, která sama pracuje se soubory a dělá
kroky za vás. Přípona `.md` znamená zápis v [Markdownu](glossary:markdown),
ve kterém mřížky `###` na začátku řádku označují nadpis.

Řada nástrojů v režimu Code si soubor přečte sama na začátku každé práce ve
složce, ve které leží. Kde to nástroj sám neumí, AI pravidlo uloží do jeho nastavení, nebo vám
napíše, kam ho vložit. A když AI opravíte, nové pravidlo si do
souboru připíše.

Do souboru patří pokyny, které platí pro každou práci v té složce; podklady k jednomu úkolu a jednorázové prosby nechte v chatu. Když vám AI v kroku 3 vynechá pravidlo, které se k úkolu hodilo,
napište jí, ať ho v souboru přepíše jasněji.

Běžný chat si `AGENTS.md` sám nepřečte. Když zůstáváte jen u chatu, uložte
si pokyny do [vlastních instrukcí](card:custom-instructions); jak přepnout
do Cowork nebo Code, ukazuje karta [Chat, Cowork nebo
Code](card:when-chat-is-not-enough).
## Ať se pravidla doplňují sama

Pravidlo na konci `AGENTS.md` zařídí, že když AI opravíte a oprava má
platit i příště, AI ji do souboru připíše. Za pár týdnů se ale pravidla
začnou opakovat nebo si odporovat a delší soubor AI dodržuje hůř. Když
chcete, aby zůstal krátký, nechte ho AI jednou za měsíc uklidit
naplánovanou úlohou. Vložte AI v režimu Cowork nebo Code toto zadání a
požádejte ji, ať z něj naplánovanou úlohu založí:

```text
Každý první pátek v měsíci v 16:00 projdi AGENTS.md v této složce. Pravidla, která říkají totéž, slouč do jednoho a seřaď je pod správné nadpisy. Na konci mi napiš, co jsi změnil, a vypiš dvojice pravidel, která si odporují, ať rozhodnu, které platí.
```

Když úloha pracuje se soubory ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Lucie vede zákaznickou podporu v e-shopu s kuchyňskými spotřebiči a
odpovědi na reklamace píše s AI ve dvou nástrojích, které pracují se
složkou v počítači. V pondělí 12. 10. otevře v prvním z nich složku
`Reklamace` a vloží prompt. Odpoví na otázky, vloží do něj vlastní instrukce, které má uložené v běžném chatu, a AI zapíše:

```text
### Jazyk a oslovení
- Piš česky a zákazníkům vykej.
- Podepisuj se „Lucie Králová, zákaznická podpora“.

### Jak psát
- V první větě napiš, co pro zákazníka uděláme.
- Odpověď má nejvýš šest vět a žádné úvodní fráze typu „Doufám, že se máte dobře“.

### Co nikdy nedělat
- Neslibuj vrácení peněz. O tom rozhoduje manažerka reklamací.

### Co ověřit před odevzdáním
- Číslo objednávky a termíny porovnej s e-mailem zákazníka.

### Jak pravidla doplňovat
- Když tě opravím a oprava má platit i příště, zapiš ji do AGENTS.md jako nové pravidlo a řekni mi, co jsi přidal.
```

AI soubor uloží a zařídí, aby ho nástroj četl na začátku každé práce. V
úterý Lucie otevře stejnou složku v druhém nástroji a napíše jen: „Odpověz
paní Dvořákové na reklamaci mixéru z jejího e-mailu ve složce.“ Pak
připíše: „Vypiš soubory s pravidly, které se načetly na začátku práce, a
pravidla, podle kterých odpověď vznikla.“ AI uvede `AGENTS.md`, odpověď
napíše s vykáním a podpisem a vyjmenuje čtyři pravidla. Pravidlo o první
větě vynechala a odpověď začíná omluvou. Lucie napíše, ať ho AI přepíše
jasněji, a v `AGENTS.md` teď stojí: „Odpověď začni větou, co pro zákazníka
uděláme a do kdy, třeba ‚Mixér vám vyměníme do pátku 16. 10.‘ Omluvu
napiš až potom.“
## Když se zaseknete

- **AI tvrdí, že soubor uložila, ale ve složce není:** pracujete nejspíš v
  běžném chatu, který soubory v počítači měnit neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) a otevřete v něm složku.
- **`AGENTS.md` mezi načtenými soubory chybí:** otevřete chat přímo ve
  složce, ve které `AGENTS.md` leží, ne v její podsložce. Když chybí i
  pak, napište: „Zařiď, ať se `AGENTS.md` v tomhle nástroji načte na
  začátku každé práce.“
- **AI pravidlo dodržuje jen někdy:** pravidlo je nejspíš obecné, třeba
  „piš stručně“. Požádejte AI, ať ho přepíše na konkrétní pokyn, třeba
  „nejvýš šest vět“.
- **Pravidla potřebujete i v jiné složce:** požádejte AI, ať je v tomhle
  nástroji uloží i do společných instrukcí, které platí ve všech složkách.
## Co bude hotové

Máte ve složce soubor `AGENTS.md` s pokyny, které jste AI dřív opakovali,
a nástroje, ve kterých jste to vyzkoušeli, si ho čtou na začátku každé
práce. V novém chatu jste si ověřili, že se soubor načetl a která pravidla
AI použila, a nejasná pravidla AI přepsala. Když ji příště opravíte, nové
pravidlo si do souboru zapíše.
## Co dál

Když z pravidla vyroste celý postup o několika krocích, třeba jak připravit
měsíční report, nechte z něj AI udělat
[návod, který použije znovu](card:create-skill-from-proven-process). Když
mají stejné podklady a pravidla používat celý tým, nechte AI napsat [README projektu](card:project-start-here).
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
