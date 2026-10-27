# Šetřete tokeny: ať vám limit AI vydrží celý týden

Práci z dlouhého chatu přesunete do nového, AI přestane zapomínat a limit vám vydrží déle.

## Šetřete tokeny: ať vám limit AI vydrží celý týden

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním dlouhým chatem.
## K čemu se hodí

Už tři týdny připravujete s AI veletrh v jednom chatu. Poslední dny v něm AI
odpovídá pomaleji, plete si staré verze ceníku s novými a ve středu odpoledne
vám oznámí, že jste vyčerpali týdenní limit. Nabídku, kterou máte odevzdat v
pátek, tak dokončujete bez AI.

AI s každou novou zprávou čte celý chat znovu, takže nejvíc ušetříte, když
dlouhý chat vyměníte za nový, který naváže podle krátkého shrnutí.
## Co si připravit

- chat, ve kterém na jednom projektu pracujete nejdéle,
- AI, ve které ten chat vedete.
## Jak na to

1. Vložte prompt do chatu, ve kterém pracujete nejdéle. V Cowork nebo Code
   AI uloží shrnutí do `handoff.md` a pravidla do `AGENTS.md`, v běžném
   chatu je dá do odpovědi a paměti.
2. Přečtěte shrnutí, opravte, co nesedí, a otevřete nový chat: v Cowork nebo
   Code napište „Pokračuj podle `handoff.md`“, v běžném chatu vložte shrnutí
   a soubory z něj.
3. Když váš nástroj limit ukazuje, podívejte se, kolik vám ho zbývá a kdy se
   obnoví. Kde to najdete, ukazuje blok „Ve vašem nástroji“.

Do shrnutí patří jen to, co nový chat potřebuje k další práci.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Tenhle chat je dlouhý a s každou novou zprávou ho čteš celý znovu, takže mi ubírá limit a odpovídáš v něm hůř. Připrav přesun práce do nového chatu a nastav pravidla, ať se to neopakuje.

Nejdřív napiš shrnutí, podle kterého nový chat naváže, aniž by tenhle chat četl. Rozděl ho pod tyto nadpisy a zapiš je s mřížkami ###:
- Cíl,
- Hotovo,
- Platí: rozhodnutí a pravidla, na kterých jsme se dohodli,
- Zbývá: další kroky v pořadí,
- Soubory pro další práci: jen ty, které další kroky opravdu potřebují.
Vejdi se na jednu stránku. Průběh chatu nepřepisuj a slepé uličky vynech. Když si nejsi jistý, jestli něco pořád platí, zeptej se mě.

Potom si zapiš tato pravidla pro další práci:
- Když se chat natáhne nebo dokončíme úkol a začínáme jiný, napiš nové shrnutí ve stejném tvaru a navrhni mi pokračovat v novém chatu.
- Na začátku práce vycházej ze shrnutí a pracuj jen se soubory, které úkol potřebuje. Celou složku neprocházej a nechtěj po mně přílohy, které úkol nepotřebuje.
- Hromadnou práci, kde se stejné rozhodnutí opakuje u desítek nebo stovek položek, dělej levnějším modelem: když to umíš, pusť na ni podagenty s menším modelem, jinak mi řekni, na který model mám přepnout. Do hlavního chatu vrať jen výsledek.

Kam co uložit:
- Když pracuješ ve složce projektu, ulož shrnutí do souboru handoff.md, a když už existuje, přepiš ho a drž se jeho tvaru. Pravidla přidej do souboru AGENTS.md, a když neexistuje, založ ho. Zařiď, ať si AGENTS.md v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.
- Když ke složce projektu přístup nemáš, nevytvářej soubory ke stažení. Shrnutí mi napiš do odpovědi a pravidla si ulož do paměti; když paměť nemáš zapnutou, napiš mi pravidla pod shrnutí, ať je vložím do nového chatu.

Nakonec mi jednou větou napiš, co v tomhle chatu zabíralo nejvíc místa, ať se tomu příště vyhnu.

## Ve vašem nástroji

### Microsoft Copilot

Microsoft limity pro Copilot s licencí nezveřejňuje a přehled spotřeby v něm
nenajdete; licence dává přednostní přístup. Přesun do nového chatu ale
pomůže i tady, protože AI pak čte jen shrnutí a přestane si plést staré
verze s novými. Pravidla si Copilot uloží do paměti (Saved memories v
Settings and more, Chat settings, Personalization).

### ChatGPT

Ve firemních tarifech je běžný model skoro bez limitu, limit ale mají
modely, které déle přemýšlejí, a Codex. Když ho vyčerpáte, ChatGPT pokračuje
s jiným modelem a ukáže, kdy se limit obnoví. Spotřebu Codexu ukazuje
Settings, Usage a v Codexu příkaz `/status` (i volné místo v chatu); běžný
chat tam přehled nemá.
Pravidla si AI v běžném chatu uloží do paměti (Settings, Personalization,
Memory).

### Claude

Claude má limit na každých pět hodin a k tomu týdenní limit; do obou se
počítá běžný chat, Cowork i Claude Code. Kolik zbývá, uvidíte v Settings,
Usage a v Claude Code příkazem `/usage`; příkaz `/context` ukáže, co zabírá
místo v chatu. Na hromadnou práci stačí menší model Haiku nebo Sonnet místo
nejsilnějšího modelu Opus.

### Gemini

Kolik limitu vám zbývá, najdete v Gemini v Settings (vlevo dole), Usage
Limits. Silnější modely mají limit zpráv na několik hodin nebo na den, a
když dojde, můžete ve stejném chatu pokračovat s rychlým modelem Fast.
Firemní účty nemají paměť, a tak pravidla uložte do Gemu (Gems, New Gem,
Instructions) a nový chat z kroku 2 otevřete v něm.
## Co jsou tokeny a limity

AI čte a píše text po kouscích, kterým se říká tokeny; token je zhruba část
slova. Z tokenů se počítá limit, který máte v předplatném nebo který vám
nastavila firma. Jak ho počítá váš nástroj, najdete v bloku „Ve vašem
nástroji“.

Dlouhý chat je drahý, protože AI s každou novou zprávou čte celý chat od
začátku, včetně všech příloh. Proto i krátká otázka v chatu, který běží od
rána, ubere limit za celý chat. Každý chat má navíc kontextové okno, tedy
kolik textu AI udrží najednou. Když se zaplní, AI ze starší části chatu
udrží jen zkrácené shrnutí, a proto zapomíná, na čem jste se dohodli.

`handoff.md` je obyčejný textový soubor ve složce projektu, ve kterém je
vždy jen aktuální stav práce. Stejný soubor slouží i k
[předání práce](card:handoff) kolegovi. Mřížky `###` v něm označují nadpisy;
takovému zápisu se říká [Markdown](glossary:markdown). `AGENTS.md` je soubor
s pravidly pro AI ve stejné složce. Řada nástrojů v režimu Code si ho přečte
sama na začátku každé práce; kde to nástroj sám neumí, AI pravidlo uloží do jeho nastavení,
nebo vám napíše, kam ho vložit.
[Podagent](glossary:subagent) je pomocná AI, kterou hlavní AI pustí na
dílčí úkol. Pracuje ve vlastním chatu a vrátí jen výsledek, takže hlavní
chat zůstane krátký.

Když paměť zapnutou nemáte, napíše vám AI pravidla pod shrnutí a vy je
vložíte do nového chatu. Aby AI ukládala shrnutí k projektu sama,
potřebujete AI v [režimu](glossary:workmode) Cowork nebo Code; jak přepnout,
ukazuje karta [Chat, Cowork nebo Code](card:when-chat-is-not-enough).
## Ať AI šetří sama

Pravidla v `AGENTS.md` platí v každém novém chatu ve složce projektu. AI vám
sama navrhne nový chat, když se ten současný natáhne, čte jen soubory, které
úkol potřebuje, a hromadnou práci posílá na levnější model. Na třídění nebo
přepis stovek položek menší model stačí a z limitu ubere mnohem méně.

Když pracujete na více projektech, nechte pravidla platit všude. Nástroje v
režimu Code mají kromě pravidel projektu i pravidla, která platí pro všechny
vaše projekty. Stačí v kterémkoli projektu zadat:

```text
Přidej pravidla o šetření tokenů z AGENTS.md v této složce i do svých pravidel, která platí pro všechny moje projekty.
```

Jak ušetřit i na výpisech příkazů a délce odpovědí, ukazuje blok „Jak šetřit
v režimu Code“.
## Jak šetřit v režimu Code

V [režimu Code](glossary:workmode) AI ušetří nejvíc, když velká hledání pustí
mimo hlavní chat a zkrátí texty, které během práce čte i píše.

Velké hledání, třeba smluvní pokuty ve 300 smlouvách, AI pošle
[podagentovi](glossary:subagent), který do hlavního chatu vrátí jen výsledek.
Podagent limit také čerpá, a proto ho AI pouští jen na hledání, jehož výsledky
by jinak zaplnily hlavní chat.

Když se chat přesto zaplní, AI jeho starší část sama nahradí krátkým shrnutím
a pracuje dál. I to ubere z limitu, protože AI při tom čte celý chat, a z
dřívějších zpráv zůstanou jen hlavní body. Po dokončeném úkolu je proto
levnější začít nový chat podle `handoff.md`. Co v chatu zabírá místo, ukáže
příkaz, který napíšete do pole pro zprávu; jaký to je, najdete v bloku „Ve
vašem nástroji“.

Další dvě úspory potřebují instalaci. AI v režimu Code během práce spouští
příkazy, třeba když převádí tabulku nebo prochází změny v souborech, a čte
všechno, co vypíšou. Nástroj RTK, který je zdarma, výpisy běžných příkazů podle
autorů zkrátí o 60 až 90 % dřív, než je AI přečte. Plugin Caveman, tedy doplněk pro
AI, zkrátí její odpovědi v chatu na pár slov, jako by mluvil jeskynní muž.
Když vám krátké odpovědi nevyhovují, napište „stop caveman“ a do konce chatu
bude AI odpovídat jako dřív; natrvalo ho AI vypne, když ji o to požádáte.

AI podle promptu nejdřív zapíše pravidla a nástroje nainstaluje, až to
potvrdíte. Když na firemním počítači instalovat nesmíte nebo to nevíte, AI vám
připraví zprávu pro správce IT.

Vložte tento prompt do AI v režimu Code, otevřené ve vaší složce:

```text
Nastav si šetření tokenů pro práci v režimu Code.

1. Do AGENTS.md přidej tato pravidla (když neexistuje, založ ho) a zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce:
- Když úkol potřebuje hledat v celé složce nebo číst dlouhé výpisy, pusť na to podagenta s menším modelem, když to umíš, a do hlavního chatu vrať jen výsledek.
- Když používáš RTK, soubory porovnávej příkazem, který RTK nezkracuje (na Macu a v Linuxu /usr/bin/diff, ve Windows fc.exe), protože zkrácené porovnání může přehlédnout rozdíl.
- Texty, které pro mě píšeš do souborů, piš celé, i když mi v chatu odpovídáš stručně.

2. Potom mi dvěma větami řekni, co nainstaluješ, odkud a co se tím změní ve všech mých projektech, a počkej, až potvrdím, že to ve firmě smím a chci nainstalovat:
- RTK podle README na github.com/rtk-ai/rtk, ne přes cargo install rtk. V Claude Code ho zapoj příkazem rtk init -g --auto-patch, v Codexu příkazem rtk init -g --codex. Ověř, že rtk gain ukáže přehled úspor; když příkaz nezná, máš jiný balíček se jménem rtk, tak ho odinstaluj a nainstaluj RTK znovu.
- Caveman podle návodu pro tenhle nástroj na github.com/JuliusBrussee/caveman, ať mi v chatu odpovídáš stručně a zapne se sám na začátku každé práce.

Když instalaci něco brání, třeba chybí oprávnění, potřebuješ heslo správce počítače nebo nevím, jestli instalovat smím, nech ji být a napiš mi krátkou zprávu pro správce IT. Když ji musím dokončit já, napiš mi přesně, co udělat. Nakonec mi řekni, co jsi nastavil, jestli mám otevřít nový chat nebo nástroj restartovat a jak to celé vrátím, kdyby něco přestalo fungovat.
```
## Příklad

Lucie koordinuje účast své firmy na říjnovém veletrhu. Od 21. 9. ho
připravuje s AI v režimu Code v jednom chatu ve složce projektu. Ve středu
7. 10. vidí, že má vyčerpáno 85 % týdenního limitu, a AI jí do pozvánky
napíše ceny v korunách, přestože před dvěma týdny rozhodla, že budou v
eurech. Lucie vloží prompt a AI zapíše do `handoff.md`:

```text
### Cíl
Připravit stánek na veletrhu 20. až 23. 10. a pozvat na něj zákazníky.

### Hotovo
- Stánek objednaný, grafika schválená 2. 10.
- Text pozvánky hotový, ceny je potřeba přepsat na eura.

### Platí
- Ceny uvádíme jen v eurech.
- Pozvánku dostanou jen zákazníci, kteří nakoupili za poslední dva roky.

### Zbývá
1. Roztřídit 1 400 kontaktů z loňského veletrhu.
2. Opravit ceny v pozvánce a rozeslat ji do 14. 10.

### Soubory pro další práci
- kontakty-veletrh-2025.xlsx
- cenik-2026.pdf
```

AI ještě dodá, že chat nejvíc zabíraly tři celé verze ceníku, které do něj
Lucie postupně nahrála. Lucie otevře nový chat, napíše „Pokračuj podle
`handoff.md`“ a AI rovnou přepíše ceny v pozvánce na eura. Na třídění
kontaktů AI podle pravidla pustí podagenty s menším modelem a do chatu vrátí
jen výsledek: 230 zákazníků pozvat osobně, 760 poslat pozvánku e-mailem a
410 vyřadit, protože za poslední dva roky nenakoupili nebo jsou v seznamu
dvakrát.
## Když se zaseknete

- **Limit už vám došel:** počkejte, až se obnoví; přesný čas uvidíte ve
  zprávě o limitu. Workout pak udělejte jako první věc, ještě než budete
  pokračovat ve starém chatu.
- **AI tvrdí, že shrnutí uložila, ale `handoff.md` ve složce není:**
  pracujete nejspíš v běžném chatu, který soubory ukládat neumí. Shrnutí
  máte v odpovědi; když ho chcete mít ve složce projektu, přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough).
- **Nový chat nezná něco, na čem jste se dohodli:** napište mu to a řekněte,
  ať to doplní do shrnutí pod nadpis Platí.
- **Levnější model dělá u hromadné práce chyby:** projděte namátkou deset
  položek. Upřesněte pravidlo, podle kterého AI třídí, a když to nepomůže,
  pusťte silnější model jen na sporné položky.
## Co bude hotové

Rozpracovanou práci máte v novém, krátkém chatu, který navázal podle
shrnutí, a starý dlouhý chat už nepotřebujete. V Cowork nebo Code leží
shrnutí v `handoff.md` a v `AGENTS.md` jsou pravidla, podle kterých AI
šetří tokeny sama; v běžném chatu má AI pravidla v paměti, nebo je dostala
v novém chatu spolu se shrnutím.
## Co dál

Kdy se naopak vyplatí silnější model, zjistíte při
[výběru modelu pro svůj úkol](card:modely). Když se k projektu po delší době
vracíte vy nebo kolega, dejte mu trvalou
[úvodní stránku projektu](card:project-start-here); v `handoff.md` pak
zůstane jen rozdělaný úkol.
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Podagent

**Co to je:** Samostatný agent, kterého koordinující agent vytvoří pro konkrétní dílčí úkol. Dostane vlastní zadání a kontext, pracuje odděleně a vrátí výsledek koordinátorovi.

**Co to není:** Není to pouhá odbočka jedné konverzace. Fork vytváří novou větev pro člověka; podagenta může koordinátor sám spustit, řídit a zahrnout do společného výsledku.

**Proč to student potřebuje:** Pomáhá rozlišit ruční paralelní práci ve více chatech od agentní sestavy, ve které delegování a sledování dílčích úkolů přebírá koordinátor.

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
