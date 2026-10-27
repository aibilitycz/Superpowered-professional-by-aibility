# Připravte handoff: předání rozdělané práce

AI napíše předání rozdělané práce na jednu stránku, podle kterého kolega i nový chat navážou bez čtení historie.

## Připravte handoff: předání rozdělané práce

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jednou rozdělanou prací.
## K čemu se hodí

Od pátku jste týden na dovolené a výběr nového dodavatele úklidu má dotáhnout
kolega Pavel. Napíšete mu do e-mailu tři věty. V pondělí Pavel půl dopoledne
zjišťuje, která nabídka ještě platí, a pak vám volá k moři, jestli smí s
dodavatelem znovu jednat o ceně.

Stačilo by krátké předání na jednu stránku, kterému se říká handoff. Napíše
ho AI z chatu a podkladů a Pavel z něj pozná, kde práce stojí a co má udělat
jako první.
## Co si připravit

- jednu rozdělanou práci, kterou předáváte, odkládáte nebo přesouváte do
  nového chatu,
- chat, ve kterém jste na ní pracovali, nebo hlavní e-maily a poznámky k ní,
- AI, kterou v práci používáte; nejlépe v [režimu](glossary:workmode) Cowork
  nebo Code.
## Jak na to

1. Vložte prompt do chatu, ve kterém jste na práci naposledy pracovali. Když
   proběhla mimo AI, vložte ho do nového chatu s hlavními podklady a pár
   větami o tom, kde práce stojí.
2. Přečtěte handoff jako kolega, který u práce nebyl, a co chybí nebo
   přebývá, řekněte AI. V Cowork nebo Code ho uloží do `handoff.md`, v
   běžném chatu ho máte v odpovědi.
3. Otevřete nový chat a napište „Pokračuj podle `handoff.md`“, v běžném
   chatu vložte handoff s podklady. AI by měla bez doptávání říct, kde práce
   stojí, a navrhnout další krok.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Připrav handoff: krátké předání rozdělané práce. Kolega nebo nový chat z něj má pokračovat bez čtení celé historie a bez doptávání.

Vycházej z našeho chatu, z podkladů, které ti přikládám, vkládám nebo píšu pod toto zadání, a ze souborů ve složce projektu, pokud k nim máš přístup. Když ti k některému bodu něco chybí, zeptej se mě, nejvýš na pět věcí najednou. Napiš handoff v tomto tvaru:

### Handoff: název práce (datum)
- Cíl: co má na konci vzniknout, pro koho a do kdy.
- Hotové a ověřené: co je udělané a podle čeho to víme, třeba soubor, odkaz nebo potvrzení od konkrétního člověka.
- Rozpracované: co je načaté a v jakém stavu.
- Další krok: jedna konkrétní věc, kterou má příjemce udělat jako první.
- Hotovo je, když: podle čeho pozná, že je práce dokončená.
- Hranice: co nemá měnit nebo dělat bez domluvy.
- Co chybí: otevřené otázky a podklady nebo přístupy, které příjemce zatím nemá.
- Podklady: soubory a odkazy, se kterými má pracovat.

Piš pro člověka, který u práce nebyl, a vejdi se na jednu stránku. Nepřepisuj chat a vynech slepé uličky, hesla a osobní údaje, které příjemce nepotřebuje. Co z chatu, podkladů ani mých odpovědí nepoznáš jistě, napiš do „Co chybí“ a nedomýšlej.

Když pracuješ ve složce projektu, ulož handoff do souboru handoff.md. Když už existuje, přepiš ho, protože platí jen poslední předání. Když se soubory pracovat neumíš, nic neukládej a napiš mi celý handoff do odpovědi.

Nakonec si ulož pravidlo pro příště: „Když napíšu ‚handoff‘, připrav předání v tomto tvaru.“ V běžném chatu si pravidlo i tvar handoffu ulož do paměti, a když paměť nemáš, řekni mi to. Když pracuješ ve složce projektu, zapiš pravidlo i tvar do souboru AGENTS.md, a když neexistuje, založ ho. K pravidlu připiš: „Ulož předání do handoff.md. Když ve složce leží handoff.md, přečti si ho na začátku každé nové práce. Až bude práce z něj hotová, napiš na jeho první řádek ‚Uzavřeno‘ a datum a uzavřený handoff už neber jako zadání.“ Zařiď, ať si AGENTS.md v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.

## Ve vašem nástroji

### Microsoft Copilot

V Copilot Chatu dostanete předání v odpovědi. Když je zapnuté tlačítko Work
IQ, Copilot vidí i vaše e-maily, schůzky a soubory, takže je nemusíte
vkládat; stačí napsat, kterých se práce týká. Pravidlo pro příště si Copilot
uloží do paměti (Saved memories v Settings and more, Chat settings,
Personalization), pokud ji správce nevypnul.

### ChatGPT

V běžném chatu ChatGPT dostanete předání v odpovědi a pravidlo si AI uloží
do paměti (Settings, Personalization, Memory), pokud ji firma nevypnula. Se
složkou v počítači pracuje Codex: v aplikaci ChatGPT pro počítač přepněte na
Codex a zvolte otevření složky (open a folder). Codex čte `AGENTS.md` sám a naplánované úlohy
najdete pod Scheduled.

### Claude

V běžném chatu Claude dostanete předání v odpovědi a pravidlo si AI uloží do
paměti (Settings, Memory), kterou ve firemním účtu povoluje správce. V
Cowork v aplikaci Claude pro počítač AI uloží `handoff.md` do vybrané složky
a pravidlo zapíše do instrukcí složky (Folder instructions); Claude Code čte
`AGENTS.md`.

### Gemini

V Gemini dostanete předání v odpovědi a přes Share & export, Export to Docs ho
uložíte jako Dokument Google. E-maily z Gmailu najde, když v promptu napíšete
@Gmail a o čem vlákno je. Firemní účty nemají paměť, a tak si tvar předání
nechte uložit jako skill (napište „Ulož to jako skill“) a příště stačí napsat
„handoff“.
## Co je handoff

Handoff je anglický název pro předání, třeba štafety nebo služby mezi dvěma
směnami. Obsahuje cíl, co je hotové a ověřené, další krok, podle čeho se
pozná, že je hotovo, co se nesmí měnit a co ještě chybí. V Cowork nebo Code
je to obyčejný textový soubor `handoff.md` ve složce projektu, který otevřete
v jakémkoli textovém editoru. Platí vždy jen poslední handoff: AI ho při
dalším předání přepíše, a když je práce hotová, označí ho jako uzavřený.

Handoff se hodí i tehdy, když od práce odcházíte na pár dní, nebo když je chat
tak dlouhý, že AI zapomíná, na čem jste se domluvili na začátku. AI v jednom
chatu udrží jen omezené množství textu, a v hodně dlouhém chatu se jí proto
ztrácí začátek a plete si staré verze s novými. Handoff přenese do nového
chatu jen to, co platí teď.

`AGENTS.md` je soubor s pravidly pro AI ve stejné složce. Řada nástrojů v
režimu Code si ho přečte sama na začátku každé práce; kde to nástroj sám
neumí, AI pravidlo uloží do jeho nastavení, nebo vám napíše, kam ho vložit. Příště
pak stačí napsat „handoff“ a AI ví, co a kam napsat.

Do handoffu patří jen to, bez čeho příjemce nenaváže; celý chat, slepé
uličky a osobní údaje, které nepotřebuje, AI podle promptu vynechá. V běžném
chatu si pravidlo pro příště AI uloží do paměti. Kolegovi pak handoff vložte
do e-mailu a přiložte podklady, na které odkazuje.
## Ať se handoff píše sám

Když v Cowork nebo Code pracujete na víc projektech, které máte v jedné
složce, můžou se handoffy psát samy každý pátek, než od rozdělané práce
odejdete na víkend. Stačí naplánovaná úloha. Otevřete AI v režimu Cowork
nebo Code v té společné složce, vložte toto zadání a požádejte ji, ať z něj
naplánovanou úlohu založí:

```text
Každý pátek v 16:00 projdi podsložky této složky, ve kterých se tento týden pracovalo a práce ještě není hotová. Do každé ulož nový handoff.md v tvaru z AGENTS.md té podsložky. Když tam pravidlo není, použij tvar ze stávajícího handoff.md, a když chybí obojí, podsložku přeskoč. Na konci mi napiš, u kterých projektů zůstalo něco v „Co chybí“.
```

Když úloha pracuje se soubory ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.

V pondělí pak otevřete nový chat ve složce projektu a napíšete jen „Pokračuj
podle `handoff.md`.“
## Příklad

Eva vybírá pro firmu nového dodavatele úklidu kanceláří. Ve čtvrtek 15. 10.,
den před dovolenou, vloží prompt do chatu v režimu Cowork, ve kterém s AI
srovnávala nabídky. Při čtení si všimne, že chybí, komu v EkoCleanu volat;
AI to doplní a v `handoff.md` pak leží:

```text
### Handoff: výběr dodavatele úklidu (15. 10. 2026)
- Cíl: do 30. 10. podepsaná smlouva s dodavatelem, který začne uklízet 1. 12.
- Hotové a ověřené: srovnání tří nabídek je v souboru srovnani-nabidek.xlsx; Čistota Plus a Úklid Brno potvrdily ceny e-mailem 13. 10.
- Rozpracované: EkoClean slíbil upravenou nabídku do 20. 10.
- Další krok: v pondělí 19. 10. zavolat Petře Horákové z EkoCleanu, jestli nabídka přijde včas.
- Hotovo je, když: finanční ředitelka schválí jednoho dodavatele a smlouva je podepsaná.
- Hranice: o ceně znovu nejednat, strop je 42 000 Kč měsíčně.
- Co chybí: vzor smlouvy od právního oddělení; Pavel zatím nemá přístup do sdílené složky Nákup.
- Podklady: srovnani-nabidek.xlsx a nabídky ve složce nabidky.
```

Eva pak otevře nový chat ve stejné složce a napíše „Pokračuj podle
`handoff.md`.“ AI odpoví, že výběr čeká na nabídku EkoCleanu, a navrhne v
pondělí zavolat paní Horákové. Na nic se neptá, takže Eva vloží handoff do
e-mailu Pavlovi a přiloží srovnávací tabulku. Kdyby se AI ptala, o jaký
výběr jde, nový chat by nejspíš běžel v jiné složce než handoff.

V běžném chatu by Eva do nového chatu vložila e-maily od dodavatelů a
přiložila srovnávací tabulku. Stejný handoff by dostala v odpovědi, vložila
ho do dalšího nového chatu s větou „Pokračuj podle tohoto handoffu.“ a
Pavlovi ho poslala v e-mailu.
## Když se zaseknete

- **V běžném chatu AI nic neuloží:** soubory ukládat neumí, a když chat
  nemá zapnutou paměť, neuloží ani pravidlo. Handoff máte v odpovědi a prompt
  příště vložte znovu; aby AI handoff ukládala k projektu sama, přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough).
- **Nový chat se doptává na věci, které už jsou rozhodnuté:** napište jeho
  otázky do původního chatu, nechte AI handoff doplnit a nový chat otevřete
  znovu.
- **Handoff je dlouhý skoro jako chat:** požádejte AI, ať každý bod zkrátí na
  jednu až dvě věty a podrobnosti nechá v podkladech, na které odkazuje.
- **Chat je tak dlouhý, že AI zapomněla začátek práce:** otevřete nový chat,
  vložte do něj hlavní podklady i prompt a pod prompt napište pár vět o
  tom, kde práce stojí.
## Co bude hotové

Máte handoff, ze kterého nový chat pokračoval bez doptávání, a stejný
handoff můžete poslat kolegovi. V Cowork nebo Code leží v `handoff.md` ve
složce projektu a v `AGENTS.md` je pravidlo, podle kterého AI příště napíše
handoff, když napíšete jen „handoff“. V běžném chatu má AI pravidlo v
paměti; když ji chat nemá, příště vložíte stejný prompt. Starý přeplněný
chat můžete zavřít.
## Co dál

Když na předanou práci navazuje další krok s AI, třeba z vybrané nabídky
vznikne smlouva a z ní zpráva pro vedení, a děláte to opakovaně, [uložte celý postup jako skill](card:create-skill-from-proven-process). Stav celého projektu shrne
[úvodní stránka projektu](card:project-start-here), kterou vám AI napíše
stejně jako handoff.
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
