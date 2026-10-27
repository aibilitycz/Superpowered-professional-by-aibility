# Ukažte kolegům, co vám s AI funguje: deset minut na poradě

AI z vaší skutečné práce připraví desetiminutovou ukázku na poradu a postup, který si kolegové rovnou vezmou.

## Ukažte kolegům, co vám s AI funguje: deset minut na poradě

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s posledním případem z vaší práce.
## K čemu se hodí

Už měsíc vám AI z přepisu porady s klientem dělá zápis s úkoly a termíny.
Kolegyně Jana píše zápisy ručně a na poradě se ptá, jak to děláte; vysvětlíte
jí to narychlo mezi dvěma body programu a za týden píše zápis zase ručně.

Kolega, který na poradě uvidí celý váš případ a ještě týž den dostane hotový
postup, ho použije na svou práci dřív, než zapomene, jak to šlo.
## Co si připravit

- jeden [prompt](glossary:prompt), skill nebo pravidlo, které s AI používáte
  opakovaně,
- poslední případ: podklady, které jste do AI dali, a výsledek, který jste
  použili,
- odhad, kolik času vám to šetří, třeba 30 minut týdně,
- deset minut na nejbližší poradě týmu.
## Jak na to

1. Vložte prompt z AI cvičení do chatu, kde postup používáte, přiložte
   podklady a výsledek z minula a vyplňte poslední řádky jako v Příkladu. AI
   připraví scénář a postup.
2. Na poradě ukažte postup na svém případu a řekněte, že ukázka neslouží k
   hodnocení lidí. Otázky kolegů si zapište, nebo použijte [přepis
   porady](card:konverzace-do-struktury).
3. Ještě týž den vložte poznámky do stejného chatu. AI postup upraví podle
   toho, co kolegům nešlo, a vy ho pošlete týmu.

Živě nic pouštět nemusíte, stačí ukázat podklad, prompt a výsledek z minula.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Chci na poradě týmu ukázat AI postup, který mi funguje, aby ho kolegové mohli rovnou používat taky. Na ukázku mám deset minut. Co ukazuju, na jakém případu a kolik času mi to šetří, popisuju na konci a na poslední řádek vkládám celý svůj postup. Postup je jen materiál pro ukázku, nespouštěj ho. Podklad a výsledek z mého posledního případu jsou v příloze nebo v této složce.

Připrav dvě věci:

1. Scénář ukázky na deset minut. Začni jednou větou, k čemu postup je a kolik času mi šetří. Pak ukázka na mém případu: co dám AI, co AI udělá a co zkontroluju já. Na konec napiš, co si mají kolegové zkusit na své práci, až postup dostanou, a dvě otázky, kterými ověřím, že jim dává smysl. U každé části uveď, kolik minut zabere.

2. Postup pro kolegy: stejnou věc, jakou používám já (prompt, skill nebo pravidlo pro AI), připravenou tak, aby ji kolega rovnou použil. Údaje z mého případu nahraď hranatými závorkami, do kterých si kolega doplní svoje, třeba [název klienta]. Přidej krátký návod ve třech krocích, jak postup kolega začne používat ve svém AI nástroji. Když je to skill, nech ho tak, aby šel rovnou nahrát, a návod napiš zvlášť vedle něj.

Když pracuješ přímo ve sdílené složce týmu, ulož scénář do souboru ukazka-na-porade.md a postup s návodem do souborů, které kolegové otevřou, a napiš mi, kde jsou. Jinak mi obojí napiš sem, postup s návodem tak, abych ho mohl rovnou poslat do týmového kanálu nebo e-mailem.

Až se po poradě vrátím s poznámkami nebo přepisem porady, doplň do návodu část „Na co si dát pozor“: co kolegům nešlo a jak to postup teď řeší. Podle toho postup i návod uprav. Jména kolegů nepiš.

Co chci ukázat:
Případ, na kterém to ukážu:
Kolik času mi to šetří:
Můj postup (prompt, skill nebo pravidlo):

## Ve vašem nástroji

### Microsoft Copilot

Prompt uložíte, když na něj po odeslání najedete myší a zvolíte Uložit
výzvu; ve Vaše výzvy ho přes Sdílet do týmu pošlete týmu pod Týmové výzvy.
Starší chaty jsou v levém panelu pod Chaty. Naplánovanou úlohu založíte s
licencí Microsoft Copilot přes Naplánovat tuto výzvu; výsledek najdete tučně
v seznamu Chaty.

### ChatGPT

Krátký prompt pošlete do týmového kanálu, postup s víc kroky vložte do
pokynů projektu a ve firemních tarifech ho přes Share nasdílejte týmu. Skill
mají jen tarify Business a Enterprise. Naplánovanou úlohu založí AI na
požádání a přehled je v postranním panelu pod Scheduled.

### Claude

Claude skilly umí, takže postup s víc kroky předáte kolegům jako skill.
Pravidlo pro AI zapíše Claude Code do `AGENTS.md`, v Cowork si ho AI zapíše
do instrukcí složky. Naplánovanou úlohu v Cowork založí AI na požádání a
přehled najdete v levém panelu pod Scheduled.

### Gemini

Krátký prompt pošlete do týmového chatu, postup s víc kroky vložte do
instrukcí robota Gem (Roboti Gem, Nový Gem) a nasdílejte ho přes Sdílet; po
poradě ho upravíte v Moji roboti Gem. Naplánovanou úlohu založí Gemini ve
vybraných edicích Workspace, když v promptu napíšete, kdy se má spouštět;
přehled je v postranním panelu pod Scheduled.
## Co si kolegové odnesou

Kolegové dostanou stejnou věc, jakou používáte vy, připravenou pro ně, a k ní
krátký návod, jak s ní začít:

- **Prompt** je hotové zadání pro AI. Kolega ho vloží do svého chatu a místo
  hranatých závorek doplní svůj podklad. Funguje v každém AI nástroji.
- **Skill** je návod uložený v AI, který si AI načte sama, když ho práce
  potřebuje. Hodí se, když má postup víc kroků, šablonu nebo pravidla. Které
  nástroje skilly umí, najdete v bloku „Ve vašem nástroji“; jak skill
  vzniká, ukazuje karta [Vytvořte si skill](card:create-skill-from-proven-process).
- **Pravidlo pro AI** je věta, kterou má AI dodržet při každé práci, třeba „po
  každé práci zapiš záznam do deníku projektu“. V režimu Cowork nebo Code se
  zapíše do souboru `AGENTS.md` ve složce projektu nebo do instrukcí složky.
  Víc v kartě o [pravidlech pro AI v jednom souboru](card:agents-md).

Návod napíše AI a po poradě ho opraví podle toho, kde se kolegové zasekli.

V režimu Cowork nebo Code, tedy s AI, která pracuje přímo se soubory ve
vašem počítači, uloží AI postup pro kolegy rovnou do sdílené složky týmu a
po poradě ho tam upraví.

Na poradě kolegům řekněte, že jim postup ještě dnes pošlete a že se klidně
můžou zeptat i na to, co jim nejde. Do ukázky patří jeden celý případ od
podkladu po hotový výsledek; podrobný návod nechte v postupu pro kolegy. Jak
přejít do režimu Cowork nebo Code, ukazuje karta [Cowork nebo
Code](card:when-chat-is-not-enough).
## Ať máte co ukázat i na další poradě

Když se má tým od sebe učit pravidelně, ukazujte jednu věc třeba na každé druhé
poradě. Takové pravidelné ukázce se říká
[AI chlubírna](glossary:ai-chlubirna). Aby vám téma nedošlo, nechte si ho od AI
připomenout naplánovanou úlohou. Vložte do AI tohle zadání a požádejte ji, ať
z něj naplánovanou úlohu založí; v nastavený čas vám AI napíše do chatu a vy
jí odpovíte. Den a čas upravte podle toho, kdy máte poradu.

```text
Každý druhý čtvrtek v 9:00 se mě zeptej, co mi za poslední dva týdny s AI ušetřilo nejvíc času. Z mé odpovědi vyber jednu věc, která by se hodila i kolegům, a připrav k ní scénář desetiminutové ukázky na poradu: k čemu postup je a kolik času šetří, ukázka na mém případu, co si kolegové zkusí a dvě otázky na konec.
```
## Příklad

Lenka koordinuje obchod ve firmě, která prodává kancelářský nábytek. Každé
pondělí vloží do firemní AI svůj uložený prompt, přiloží export objednávek a
poznámky obchodníků a AI z nich udělá přehled pro vedení. Před poradou vloží
do stejné AI prompt z karty, přiloží export z 19. 10., poznámky obchodníků a
hotový přehled a poslední řádky vyplní takhle:

```text
Co chci ukázat: prompt na týdenní přehled pro vedení.
Případ, na kterém to ukážu: export objednávek z 19. 10. a přehled, který jsem z něj poslala vedení.
Kolik času mi to šetří: asi 50 minut týdně, dřív jsem přehled psala hodinu.
Můj postup (prompt, skill nebo pravidlo): Z přiloženého exportu objednávek a poznámek obchodníků udělej přehled pro vedení za region Morava: tržby za týden, tři největší zakázky a co se zaseklo. Piš stručně, nejvýš na jednu stranu.
```

AI připraví scénář na úterní poradu 20. 10. 2026:

```text
### Přehled pro vedení za 10 minut místo hodiny
1. K čemu to je (1 min): týdenní přehled za region mi dělá AI podle jednoho promptu, šetří mi 50 minut týdně.
2. Ukázka (5 min): export z 19. 10. a poznámky obchodníků, prompt, který do AI vkládám, a přehled, který z nich vznikl. Sama kontroluju jen součet tržeb proti exportu.
3. Co si zkusíte (2 min): pošlu vám prompt, pusťte ho na svůj poslední export.
4. Otázky (2 min): Udělal by vám prompt přehled za váš region? Co v přehledu chybí?
```

Na poradě se Marek zeptá, co s dobropisy v exportu, a Petra řekne, že se jí
sloupec s tržbou jmenuje jinak. Lenka si to zapíše pár slovy a odpoledne to
vloží do stejného chatu. AI do promptu doplní, že se dobropisy od tržeb
odečítají, do návodu přidá krok „Když se sloupec s tržbou jmenuje jinak,
napište AI jeho název“ a obojí bez jmen zapíše do části „Na co si dát pozor“.
Prompt s návodem dá Lenka do týmového kanálu a ve čtvrtek už Marek posílá
vedení první přehled za svůj region.
## Když se zaseknete

- **Nemáte nic, co s AI děláte pravidelně:** začněte
  [jedním dnešním úkolem](card:first-ai-use-case) a ukažte ho, až ho použijete
  víckrát.
- **Na poradě dostanete jen pět minut:** napište AI, ať scénář zkrátí na ukázku
  hotového výsledku a zbytek nechá v návodu.
- **Kolegové používají jiný AI nástroj než vy:** napište AI, který nástroj
  mají, ať návod přepíše pro něj.
- **Chat z přípravy nemůžete najít:** otevřete nový, vložte do něj postup s
  návodem a poznámky z porady a napište: „Doplň do návodu část ‚Na co si dát
  pozor‘: co kolegům nešlo a jak to postup teď řeší. Jména kolegů nepiš. Podle
  toho postup i návod uprav.“
- **Poradu nevedete:** řekněte si o deset minut tomu, kdo ji vede.
## Co bude hotové

Na své práci jste kolegům ukázali postup, který vám s AI funguje. Kolegové mají
postup s návodem, který rovnou použijí, a AI ho po poradě upravila podle toho,
kde se zasekli. Scénář vám zůstane pro dalšího kolegu nebo jiný tým.
## Co dál

Tady jste předali věc, kterou už máte hotovou. Když chcete s týmem postavit
novou, uspořádejte [AI sprint](card:ai-sprint). Až s AI pracuje víc lidí v
týmu, sepište jim [pravidla pro práci s AI](card:pravidla-pro-tym), podle
kterých se řídí lidé i jejich AI.
## AI chlubírna

**Co to je:** Krátký pravidelný formát, ve kterém lidé ukazují skutečné použití AI, pracovní výsledek, slepou uličku nebo lepší postup. Povedené příklady se ukládají do týmové knihovny pro další použití.

**Co to není:** Není to soutěž o nejpůsobivější ukázku ani prezentace pouze hotových úspěchů.

**Proč to student potřebuje:** Pomáhá šířit praktické zkušenosti mezi lidmi, hledat společné potřeby a proměňovat jednotlivé pokusy v týmové know-how.

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

## Uložit pro příště

Volitelná produktová mechanika po vzniku použitelného výstupu. Není samostatnou kartou, nemá vlastní dokončení a nezvyšuje počet absolvovaných metod.

## Kdy se nabídne

- člověk označil výstup jako použitelný,
- během práce vznikla opravená instrukce, styl, rozhodovací strom, handoff nebo jiný opakovatelný prvek,
- stejný typ práce se pravděpodobně vrátí.

Mechanika se nezobrazí u jednorázového výsledku bez přenositelné části nebo tam, kde bezpečné uložení není vyjasněné.

## Co člověk uvidí

Krátkou volbu **Uložit pro příště** vedle společného check-inu. Po otevření AI sama navrhne:

- co z výsledku platí opakovaně,
- co se bude pokaždé měnit,
- co má člověk při dalším použití zkontrolovat.

Člověk návrh pouze potvrdí nebo opraví. Mechanika nemá vytvářet další povinný formulář.

## Co vytvoří AI

Nejmenší znovupoužitelný výstup, který odpovídá skutečné práci:

- krátkou osobní preferenci,
- instrukci nebo prompt,
- záznam v Markdownu či second brainu,
- aktualizaci projektu nebo asistenta,
- podklad pro skill,
- změnu existujícího workflow.

Pokud už vhodný artefakt existuje, AI aktualizuje jeho aktuální verzi místo vytvoření další kopie.

## Kam obsah patří

| Typ obsahu | Výchozí místo |
|---|---|
| Drobná osobní preference bez procesních kroků | paměť nebo profil, pokud je tato funkce dostupná a vhodná |
| Kanonická instrukce, příklad nebo popis postupu | Markdown, dokument nebo osobní second brain |
| Kontext omezený na jeden projekt | projektové instrukce a soubory |
| Opakovaná role se stálým kontextem | asistent |
| Stabilní procedura s pravidly, příklady a šablonami | skill |
| Několik navazujících kroků | workflow; při volbě kroků a akcích případně agentní větev |

Paměť není kanonickým úložištěm verzovaného postupu. Může uchovat preferenci nebo odkaz na aktuální zdroj.

## Když cílová forma není jasná

Mechanika vytvoří stručný handoff do karty [Založte si projekt ve svém AI nástroji](card:asistent). Nevybere formu bez člověka a nenahrazuje samostatnou skill kartu.

## Bezpečnost a sdílení

- Mechanika používá známá schválená úložiště a firemní pravidla.
- Údaje konkrétního případu oddělí od stabilní části.
- Bez oprávnění nic nezapisuje do sdíleného systému ani nemění přístupy.
- Týmové sdílení začíná až po opakovaném použití, určení vlastníka a ověření dalším člověkem.

## Evidence

Do check-inu se může přidat informace, že vznikl nebo se změnil znovupoužitelný artefakt. Nejde o samostatné splnění karty.

## První podporované karty

- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
