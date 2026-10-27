# Zeptejte se svých dat: AI spočítá odpověď z exportu

AI spočítá z exportu odpověď na otázku, podle které se rozhodujete, a postup si uloží na příští měsíc.

## Zeptejte se svých dat: AI spočítá odpověď z exportu

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s exportem a jednou otázkou.
## K čemu se hodí

Je pondělí 2. listopadu a obchodní ředitel chce do pátku vědět, na které
výrobky dát vánoční kampaň. Export objednávek za tři měsíce má čtrnáct tisíc
řádků a nákupní ceny, bez kterých nepoznáte, na čem firma vydělává, vede
sklad v jiném systému.

AI oba exporty spojí a odpověď spočítá krátkým programem ze všech řádků,
takže nestojí na odhadu.
## Co si připravit

- export z e-shopu, účetnictví nebo CRM jako `.xlsx`, `.csv` nebo tabulku v
  cloudu,
- otázku, na kterou potřebujete odpověď, a k čemu ji použijete,
- původní tabulku otevřenou v tabulkovém editoru, kde ověříte jedno číslo,
- AI, která umí počítat se soubory (ukazuje to blok „Ve vašem nástroji“).
## Jak na to

1. Nahrajte export do chatu (v režimu Cowork nebo Code otevřete složku s
   exporty), vložte prompt z AI cvičení a pod něj napište otázku a k čemu
   odpověď potřebujete.
2. AI popíše, co v exportu našla, spojí exporty a odpověď spočítá. Číslo,
   které vám dá ke kontrole, ověřte v původní tabulce a napište jí, jestli
   sedí.
3. Když sedí, AI postup uloží jako [skill](glossary:skill), do paměti nebo
   do pokynů a napíše větu na příští export. Kam, ukazuje blok „Ve vašem
   nástroji“.

Co s výsledkem uděláte, rozhodujete vy.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Potřebuju z dat odpověď na jednu otázku. Otázku a to, k čemu odpověď použiju, ti napíšu pod tenhle text. Data jsou v přiloženém exportu, nebo ve složce, ve které pracuješ.

1. Načti celé soubory a napiš mi, co v nich je: kolik řádků, jaké sloupce a za jaké období. Když nevíš, co některý sloupec znamená, a na odpovědi to záleží, zeptej se mě.
2. Když k odpovědi potřebuješ dva exporty, spoj je podle sloupce, který mají společný, třeba kódu výrobku. Porovnej počty řádků před spojením a po něm, ať se žádný řádek nezdvojí ani neztratí. Řádky, které se nespárují, vypiš zvlášť a napiš, kolik jich je.
3. Odpověď spočítej kódem ze všech řádků, nic neodhaduj. Když k odpovědi v datech něco chybí, třeba nákupní ceny k tržbám, napiš, co chybí a kde to asi najdu.
4. Výsledek napiš takhle: odpověď v jedné až třech větách, tabulka s čísly, ze kterých vychází, a popis výpočtu obyčejnými slovy. Nakonec mi dej jedno číslo, na kterém odpověď stojí a které si ověřím v původní tabulce, a napiš, jak ho tam najdu: list, sloupec a filtr.

Když napíšu, že číslo nesedí, najdi proč, výpočet oprav a dej mi nové číslo k ověření. Až napíšu, že sedí, ulož postup, ať příští export stačí zadat jednou větou. Pojmenuj ho podle tématu, třeba Zisk podle výrobků. Do postupu napiš, jaké soubory a sloupce čekáš, jak je spojíš a co spočítáš; čísla z tohohle exportu do něj nepiš. Když pracuješ ve složce, ulož ho do ní jako soubor, třeba postup-zisk-podle-vyrobku.md, a vedle něj kód, kterým jsi počítal. V běžném chatu z postupu udělej skill, a když tenhle nástroj skilly neumí, ulož si postup do paměti. Když nejde ani jedno, dej mi postup jako soubor ke stažení, který příště nahraju spolu s exportem. Když k uložení potřebuješ moje kliknutí, řekni mi přesně kam. Nakonec mi napiš, jak se postup jmenuje, kde je uložený a jakou větou příští export zadám; v té větě ať je název postupu.

## Ve vašem nástroji

### Microsoft Copilot

Copilot Chat s pracovním účtem spočítá přiložený export v jazyce Python;
soubor přidáte tlačítkem + nebo přetažením. Až číslo sedí, Copilot si postup
uloží do paměti; řekněte mu i, ať ho napíše celý, a vložte ho do pokynů
Notebooku (Poznámkové bloky, Nový poznámkový blok), kam nahrajete příští
export. Pravidelné exporty na OneDrivu zpracuje Cowork vedle přepínače Chat
(licence Microsoft Copilot).

### ChatGPT

Export přiložte do chatu, program v Pythonu si AI spustí sama. Ve firemních
tarifech Business a Enterprise z postupu udělá skill, který uložíte do svého
účtu; přehled je pod Plugins, karta Skills. Ostatní účty uloží postup do
paměti a velké exporty zpracuje Codex v aplikaci ChatGPT pro počítač přímo
ve složce.

### Claude

Výpočty zajišťuje funkce Code execution and file creation v Settings pod
Capabilities; v osobních účtech je zapnutá, ve firemních ji řídí správce.
Soubor smí mít nejvýš 30 MB a z postupu umí Claude udělat skill. Velké a
pravidelné exporty zpracuje Cowork nebo Claude Code přímo ve složce.

### Gemini

Export nahrajte do aplikace Gemini přes Přidat soubory nebo z Disku; stačí i
tabulka Google a dva exporty přiložíte najednou. Že Gemini počítá kódem,
nápověda Googlu neuvádí, proto ověřovací číslo nevynechávejte. Paměť pracovní
účet nemá, a tak si postup nechte uložit jako skill (napište „Ulož to jako
skill“); u dalšího exportu ho vyberete po napsání „/“ v poli pro zprávu.
## Co je výpočet kódem

Když AI tabulku jen čte jako text, čísla odhaduje a u velkého exportu snadno
vynechá řádky. Proto ji necháte počítat kódem: AI napíše krátký program,
spustí ho nad celým souborem a z výsledku vám napíše odpověď. Kód číst
nemusíte, správnost poznáte podle čísla, které ověříte v tabulce. V režimu
Cowork nebo Code AI počítá přímo nad soubory ve složce, zvládne i velké
exporty a postup uloží vedle nich jako obyčejný textový soubor.

Dva exporty AI spojí přes [společný klíč](glossary:data-key): sloupec, který
je v obou souborech zapsaný stejně, třeba kód výrobku nebo číslo objednávky.
Název výrobku nebo jméno zákazníka bývá v každém systému napsané trochu
jinak, proto ke spojení nestačí.

Když exporty chodí každý měsíc nebo je chat nenačte celé, pracujte s AI v
režimu Cowork nebo Code, která pracuje přímo se složkou ve vašem počítači.
Jak začít, ukazuje karta [Cowork nebo Code](card:when-chat-is-not-enough).
## Ať příští export spočítá AI sama

Po prvním kole má AI postup uložený. Příští měsíc jí dáte nový export a
napíšete větu, kterou vám AI dala, třeba „Použij postup Zisk podle výrobků
na listopadový export“. AI počítá stejně jako minule, takže čísla z obou
měsíců můžete rovnou porovnat.

Když vám export chodí každý měsíc sám do stejné složky v počítači, AI v
režimu Cowork nebo Code může odpověď spočítat i bez vás v nastavený den jako
[naplánovanou úlohu](card:recurring-ai-task). Vložte jí tohle zadání a
požádejte ji, ať z něj naplánovanou úlohu založí:

```text
Každý měsíc 3. den v 8:00 vezmi ve složce nejnovější export a spočítej z něj odpověď podle uloženého postupu. Výsledek ulož vedle exportu jako soubor s měsícem v názvu a nahoru napiš, co se změnilo proti minulému měsíci.
```

Když úloha pracuje se složkou ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Martina koordinuje prodej v e-shopu s kávou a kávovary. V pondělí 2. 11.
stáhne export objednávek za srpen až říjen (`objednavky.xlsx`, 14 200 řádků)
a od skladu ceník s nákupními cenami (`nakupni-ceny.xlsx`). Oba soubory
nahraje do AI, kterou v práci používá, vloží prompt a pod něj napíše: „Na
které tři výrobky dát vánoční kampaň? Chci ty, na kterých nejvíc vyděláme.“

AI napíše, co načetla, a upozorní, že v objednávkách jsou jen tržby. Podle
nich by vyhrál kávovar Brio s 1,24 mil. Kč, jenže z tržeb nepozná, na čem
firma vydělá. Spojí proto objednávky s ceníkem podle kódu výrobku. Šest kódů
v ceníku chybí; AI je vypíše zvlášť, Martina v nich pozná zářijové novinky a
ceny k nim si vyžádá od skladu. Odpověď: nejvíc vydělaly káva Etiopie 250 g,
káva Brazílie 1 kg a ruční mlýnek Classic. Brio má marži 9 %, kávy přes 40 %.

Ke kontrole AI dá tržbu kávy Etiopie: 386 450 Kč, list Objednávky, sloupec
Tržba, filtr Kód výrobku ETI-250. Martina si ho v tabulce vyfiltruje a součet
sedí. Napíše to AI a ta z postupu udělá skill Zisk podle výrobků; Martina
jeho uložení jedním kliknutím potvrdí. Na začátku prosince nahraje do nového
chatu listopadový export s ceníkem a napíše jen „Použij postup Zisk podle
výrobků na listopadový export“. Za dvě minuty má stejnou tabulku za
listopad.
## Když se zaseknete

- **AI píše čísla, ale nevidíte, jak je spočítala:** napište jí „Spočítej to
  kódem nad celým souborem a ukaž mi výpočet.“ Když AI kód spustit neumí, zkontrolujte podle bloku „Ve vašem nástroji“,
  jestli výpočty nemusíte zapnout, a ověřovací číslo v tabulce nikdy
  nevynechávejte.
- **Ověřované číslo nesedí:** napište AI, co jste v tabulce našli a jakým
  filtrem. Nejčastěji počítala s jiným obdobím, se stornovanými objednávkami
  nebo spojením zdvojila řádky. Když číslo nesedí až u dalšího exportu,
  požádejte AI, ať opravu zapíše i do uloženého postupu. Když se chyby
  vracejí, pokračujte
  [kontrolou výsledku](card:kontrola-vysledku).
- **AI napíše, že soubor nenačetla celý:** velký export chat nemusí zvládnout.
  Přepněte do [Cowork nebo Code](card:when-chat-is-not-enough), kde AI
  pracuje se souborem přímo ve složce. Když takový režim nemáte, ať vám AI
  řekne, které sloupce a období potřebuje, a stáhněte export jen s nimi.
- **AI postup neuloží nebo ho v novém chatu nepoužije:** zapněte v nastavení
  paměť; ve firemním účtu paměť i skilly někdy vypíná správce. Když nejde ani
  jedno, požádejte AI o postup jako soubor ke stažení a příště ho nahrajte
  spolu s exportem. V novém chatu vždy napište větu na příště i s názvem
  postupu.
## Co bude hotové

Máte odpověď na svou otázku spočítanou ze všech řádků exportu a jedno číslo z
ní jste si ověřili v původní tabulce. Víte, co v datech chybí. Postup je
uložený jako skill, v paměti, ve složce, nebo ho máte jako soubor u sebe, a
příště stačí nový export a věta, kterou vám AI napsala.
## Co dál

Uložený postup můžete dál vylepšovat podle svých oprav. Jak na to, ukazuje
karta [Vytvořte si skill](card:create-skill-from-proven-process). Když
stejný výpočet potřebují kolegové a nechcete ho za ně každý měsíc dělat vy,
nechte AI postavit jednoduchou aplikaci, do které si export nahrají sami. Té
cestě se říká [vibe coding](card:risk-based-prototyping).
## Společný klíč v datech

**Co to je:** Sloupec nebo kombinace sloupců, podle kterých lze bezpečně poznat stejný záznam ve dvou zdrojích, například ID objednávky nebo kombinace měsíce a nákladového střediska.

**Co to není:** Není to heslo ani technický přístupový klíč. Stejný název firmy nebo člověka nemusí být spolehlivým společným klíčem.

**Proč to student potřebuje:** Pomáhá spojit odpovídající řádky bez jejich ztráty, záměny nebo nechtěného násobení.

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

## Mechanika: Kontrola argumentu před tvorbou výstupu

Krátká kontrola na začátku karet, ze kterých vzniká výstup pro někoho dalšího. Není samostatnou kartou a nemá vlastní splnění. Protipól k mechanice `data-readiness-check`: ta hlídá, jestli jsou připravená data, tahle hlídá, jestli je připravený záměr.

## Kdy se spouští

Člověk chystá výstup, který uvidí někdo jiný: prezentaci, report, doporučení, nabídku, e-mail vedení, shrnutí pro klienta. Nespouští se u výstupů pro sebe, u průzkumu ani u rozpracovaných poznámek.

## Proč to existuje

AI vyrobí dvacet slidů nebo tři stránky reportu z čehokoliv a bude to vypadat hotově. Prázdný výstup se od dobrého na první pohled neliší, protože chybějící část je záměr, ne forma. Tři věty od člověka jsou nejlevnější způsob, jak to poznat před tvorbou, ne po ní.

## Co si vyžádá od člověka

Tři věci, a žádnou z nich nenavrhuje AI:

| Co | Proč to nemůže určit AI |
|---|---|
| **Publikum** | koho má před sebou a co už ti lidé vědí, ví jen člověk |
| **Změna** | co má publikum po přečtení udělat nebo rozhodnout jinak |
| **Nosná věta** | jediná věta, kterou si mají odnést, když zapomenou všechno ostatní |

## Zkouška obrácením

Nosná věta se pozná podle dvou vlastností: dá se s ní nesouhlasit a vejde se do jednoho dechu. Test je obrátit ji do opaku.

- *Chceme zlepšit zákaznickou zkušenost* → opak je nesmysl, takže věta nic neříká.
- *Zastavme vývoj druhé aplikace a vraťme lidi na tu první* → opak dává smysl a někdo ho bude hájit. Tohle je nosná věta.

Když věta neobstojí, AI to řekne a nechá člověka ji přepsat. Nepřepisuje ji za něj.

## Co udělá AI

1. Vyžádá si tři věty a počká na ně. Nenabízí je a nekomentuje je.
2. Provede zkoušku obrácením. Když věta neobstojí, řekne proč a vrátí ji člověku.
3. Zeptá se, jestli formát odpovídá záměru. Když by změnu líp vyvolal jiný výstup, nabídne kartu `output-beyond-document` a nechá rozhodnutí na člověku.
4. Když jsou tři věty hotové, pokračuje rovnou hlavním cvičením karty a dál se k nim nevrací.

## Co zůstává člověku

- určit publikum a změnu,
- napsat a případně přepsat nosnou větu,
- rozhodnout, jestli formát vyhovuje záměru,
- rozhodnout, co je kontext a co se vypustí, když dojde čas.

## Výstup mechaniky

Tři řádky uvnitř hlavního pracovního výsledku, žádný samostatný dokument a žádný další check-in:

```text
Publikum: ...
Změna, kterou má výstup vyvolat: ...
Nosná věta: ...
```

## Routing

- **Tři věty jsou jasné:** pokračovat hlavním cvičením karty.
- **Nosná věta neobstojí ve zkoušce obrácením:** nechat člověka ji přepsat, nepokračovat.
- **Věta nejde napsat vůbec:** obvykle rozhodnutí ještě nepadlo nebo má výstup dva cíle. Rozdělit na dva výstupy.
- **Změnu by líp vyvolal jiný formát:** karta `output-beyond-document`.
- **Chybí podklady nebo kontext:** karta `prace-s-kontextem`.
- **Výstup už existuje a jde ven:** karta `kontrola-vysledku`.

## Hranice

- Mechanika neposuzuje kvalitu obsahu ani pravdivost tvrzení. To dělá kontrola výsledku nad hotovým výstupem.
- U výstupů pro sebe se nespouští; ptát se na publikum u vlastních poznámek je obřad, ne pomoc.
- Když člověk tři věty zná a napíše je za půl minuty, mechanika skončila. Nezdržuje toho, kdo záměr má.

## Minimální promptový blok

```text
Než začneš cokoli tvořit, vyžádej si ode mě tři věci a počkej na ně: pro koho ten výstup je, co se má po něm změnit, a jaká jediná věta to má nést. Nenavrhuj mi je.

Potom zkus moji nosnou větu obrátit do opaku. Pokud opak zní jako nesmysl, řekni mi, že věta nic netvrdí, a nech mě ji přepsat. Nepřepisuj ji za mě.

Když jsou tři věty hotové, pokračuj rovnou hlavním úkolem a už se k nim nevracej. Pokud by změnu líp vyvolal jiný formát než ten, který chci, řekni to jednou větou a nech rozhodnutí na mně.
```

## Mechanika: Kontrola připravenosti dat

Krátká adaptivní kontrola na začátku datových karet. Není samostatnou kartou, nemá vlastní splnění a člověk kvůli ní nemusí hledat uměle problematickou tabulku.

## Kdy se spouští

Člověk přinese skutečnou otázku a data, nad kterými chce pracovat. Ještě před vložením dat musí být jasné, že používá schválené prostředí. Pokud to jasné není, mechanika odkáže na bezpečnostní cestu a obsah si nevyžádá.

## Co udělá AI

1. Z cíle a souboru ověří, zda rozumí tomu, co představuje jeden řádek, důležité sloupce, jednotky a časové období.
2. Provede rychlou technickou kontrolu struktury, datových typů, prázdných hodnot, možných duplicit a kategorií.
3. Rozdělí nálezy na:
   - technické opravy, které může bezpečně navrhnout nebo provést,
   - významové otázky, o kterých musí rozhodnout člověk nebo vlastník dat,
   - problémy vyžadující jiné prostředí nebo samostatnou kartu.
4. Pokud nic podstatného nebrání práci, pokračuje rovnou hlavním cvičením karty.
5. Pokud je potřeba technická oprava, ukáže změnu na příkladu, vyžádá si schválení a vytvoří pracovní kopii. Původní soubor zachová.
6. Pokud nezná význam, položí pouze otázky, které mohou změnit výsledek. Odpověď si nevymyslí.

## Co zůstává člověku

- potvrdit význam dat a záměr další práce,
- rozhodnout, zda se kategorie smějí sloučit a co znamená chybějící hodnota,
- schválit změnu, která může ovlivnit věcný obsah,
- určit, zda nejasnost vyžaduje vlastníka dat.

## Výstup mechaniky

Mechanika vytvoří nejvýše tříbodový preflight zápis uvnitř hlavního pracovního výsledku:

```text
Stav dat: připravená / upravená / blokovaná
Provedené změny nebo potvrzené předpoklady: ...
Co zůstává k ověření: ...
```

Samostatný dokument ani další check-in nevzniká.

## Routing

- **Data jsou připravená:** pokračovat rovnou analýzou nebo rozhodovacím úkolem.
- **Jednoduchá technická nekonzistence:** AI ji po schválení opraví a pokračuje.
- **Nejasný obchodní význam:** zeptat se člověka nebo vlastníka dat.
- **Několik souborů nebo systémů:** karta `sjednotit-data-z-vice-zdroju`.
- **Konverzace, tikety nebo feedback:** samostatná karta pro převod nestrukturovaného obsahu do struktury.
- **Příliš velký soubor nebo chybějící schopnost nástroje:** karta `when-chat-is-not-enough`.
- **Nejistota, zda lze data vložit:** karty `bezpecne-pouzivani` a `nakladani-s-daty`.

## Hranice

- Obvyklé formáty a známé kategorie AI opravuje sama, člověk je nemusí ručně vyhledávat.
- Mechanika nevytváří problém, pokud žádný podstatný nenajde.
- Připravenost se posuzuje vzhledem ke konkrétní otázce. Stejná tabulka může stačit pro přehled a nestačit pro přesný finanční nebo personální závěr.
- Kontrola formátu nenahrazuje kontrolu konkrétních hodnot a výpočtů v hotovém výsledku.

## Minimální promptový blok

```text
Než začneš analyzovat data, udělej krátkou kontrolu jejich připravenosti vzhledem k mojí otázce.

Nejdřív shrň, co podle tebe představuje jeden řádek, důležité sloupce, jednotky a období. Technické nekonzistence můžeš navrhnout opravit. Na významovou nejasnost se zeptej a nic si nedomýšlej.

Pokud jsou data pro úkol připravená, řekni to jednou větou a rovnou pokračuj. Pokud něco může změnit výsledek, ukaž nejvýše tři body. Změnu věcného obsahu nebo odstranění řádků proveď až po mém schválení a pouze v pracovní kopii.
```
