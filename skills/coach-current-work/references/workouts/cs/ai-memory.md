# Ukliďte si paměť AI: co si o vás pamatuje mezi chaty

AI projde, co si o vás pamatuje, opraví zastaralé a smaže špatné, takže nový chat vychází z toho, jak to máte dnes.

## Ukliďte si paměť AI: co si o vás pamatuje mezi chaty

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s AI, kterou používáte pár týdnů.
## K čemu se hodí

Projekt nového e-shopu skončil v září, ale AI ho pořád připomíná v
návrzích e-mailů a počítá s jeho termíny. Navíc vám všechno dává do tabulky,
i když tabulka byla jen k jednomu reportu.

AI si do [paměti](glossary:memory) ukládá, co o vás zjistí, a sama nepozná, co už skončilo.
Když si jednou za čas necháte ukázat, co o vás ví, opraví to AI za pár minut.
## Co si připravit

- AI, kterou v práci používáte už pár týdnů,
- nastavení paměti ve vašem nástroji; kde je, ukazuje blok „Ve vašem nástroji“.
## Jak na to

1. Vložte prompt do nového chatu a podívejte se, co o vás AI ví. U
   každého záznamu navrhne, jestli ho nechat, opravit, nebo smazat.
2. Napište AI, které návrhy platí, třeba „ano, kromě bodu 3“, a ona změny
   v paměti provede. Seznam v nastavení projděte i sami, AI nemusí vypsat vše.
3. V novém chatu se zeptejte na věc, kterou jste opravili. Když AI
   odpoví postaru, napište jí, co platí, nebo záznam smažte v nastavení.

U nejistého záznamu pomůže otázka, jestli bude platit i za měsíc.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Projdi se mnou, co si o mně pamatuješ, a ukliď to.

Vypiš všechno, co o mně máš uložené v paměti nebo víš z dřívějších chatů. Rozděl to do čtyř skupin: kdo jsem a co dělám, jakou chci podobu odpovědí a jak se mnou pracovat, na čem pracuji, kde co najdu (dokumenty, nástroje, lidé). Každou položku napiš jako jednu krátkou větu a připiš, jestli je uložená v paměti, nebo ji víš z dřívějšího chatu.

U každé položky navrhni, jestli ji nechat, opravit (rovnou napiš nové znění), nebo smazat. Smazat navrhni u toho, co je zastaralé, špatně pochopené nebo platilo jen pro jeden úkol. Položky, které říkají totéž, rovnou slouč do jedné. Když nepoznáš, jestli něco ještě platí, zeptej se mě.

Až ti napíšu, co platí, proveď změny rovnou v paměti. Co změnit neumíš, mi vypiš i s tím, kde to v nastavení najdu. U položek z dřívějších chatů, které neplatí, si do paměti ulož, co platí teď, a když víš, ze kterého chatu jsou, napiš mi to.

Nakonec si do paměti ulož tohle pravidlo, a když podobné už máš, nahraď ho: „Když tě opravím a oprava má platit i příště, ulož ji jako jednu větu: co platí, proč a kdy to použít. Když k tomu v paměti máš starší záznam, přepiš ho, ať tam nejsou dvě verze.“ Pak mi ukaž, jak paměť vypadá teď.

## Ve vašem nástroji

### Microsoft Copilot

V Copilot Chatu na `copilot.cloud.microsoft` otevřete vpravo nahoře
Nastavení a další, Chat nastavení, Přizpůsobení a u dlaždice Uložené
vzpomínky zvolte Spravovat uložené vzpomínky. Jednotlivou vzpomínku smažete
ikonou koše, všechny tlačítkem Odstranit všechny paměti. Když Copilotu v
chatu napíšete, ať něco zapomene, smaže to sám.

### ChatGPT

V Settings, Personalization, Memory (v české verzi na stejném místě) je buď
souhrn (Memory summary), kde řádek opravíte nebo zvolíte Don't mention this
again, nebo seznam Saved memories s mazáním. Codex má vlastní paměť, kterou
tamtéž smažete volbou Delete Codex memories; k promptu v něm připište „Paměť
neupravuj, co má platit vždy, zapiš do `AGENTS.md`.“

### Claude

V Settings, Memory je paměť rozdělená na témata (Topics): téma otevřete,
opravíte ikonou úprav nebo smažete přes Delete. Ve firemních tarifech ji
povoluje vlastník organizace a zapnete si ji sami. Claude Code má paměť pro
každý projekt zvlášť v souborech se seznamem `MEMORY.md`, proto prompt pusťte
v každém projektu; složku otevře příkaz `/memory`.

### Gemini

Gemini s pracovním účtem paměť nemá, takže si z chatů nic neukládá. Co má
platit pokaždé, máte v instrukcích robota Gem (Gems). Prompt vložte do chatu
spolu s instrukcemi Gemu, kterého používáte nejčastěji: AI je projde stejně
jako paměť a opravenou verzi uložíte zpátky do Gemu.
## Co je paměť AI

Paměť AI, v nastavení Memory nebo Paměť, je místo, kam si AI ukládá, co o
vás zjistí z chatů: kdo jste, jak chcete odpovědi a na čem pracujete. Některé
nástroje k tomu čtou i vaše dřívější chaty, a tak se do paměti dostane i to,
co platilo jen pro jeden úkol.

Paměť AI používá jako nápovědu a vybírá si z ní sama. Co musí platit v
každém chatu, dejte proto do [Custom Instructions](card:custom-instructions),
tedy stálých pokynů v nastavení, které píšete vy.

Nástroje, které pracují se složkou v počítači, si paměť často vedou v
obyčejných textových souborech. AI je pak upraví přímo a vy si je můžete
otevřít a přečíst.
## Ať se paměť udržuje sama

Pravidlo z konce promptu zařídí, že AI každou novou opravu uloží jako jednu
větu s důvodem a starší verzi téhož přepíše, takže se v paměti nehromadí.

Když AI pracuje v [režimu](glossary:workmode) Code se složkou ve vašem
počítači a paměť si vede v souborech, úklid může jednou měsíčně proběhnout
sám. Vložte jí toto zadání a požádejte ji, ať z něj naplánovanou úlohu
založí:

```text
Každé první pondělí v měsíci v 9:00 projdi svou paměť. Záznamy, které říkají totéž, slouč do jednoho. Záznamy, které odporují novějším nebo se týkají věcí, které skončily, smaž. Když si nejsi jistý, nech záznam být a zeptej se mě. Když si paměť vede nástroj sám a její soubory se nemají upravovat ručně, nic neměň a jen mi napiš, co v ní nesedí. Nakonec mi napiš přehled: co je sloučené, co smazané a na co se ptáš.
```

Úloha poběží, jen když je počítač zapnutý a aplikace otevřená. Když už máte
[týdenní revizi](card:weekly-ai-review), můžete úklid paměti přidat do ní
místo samostatné úlohy. V běžném chatu stačí jednou za pár měsíců vložit
znovu prompt z AI cvičení.
## Příklad

Klára Novotná koordinuje projekty ve firmě, která vyrábí kancelářský
nábytek. Nový e-shop spustili v září a od října Klára připravuje stánek na
jarní veletrh. V úterý 3. 11. 2026 vloží prompt a AI mimo jiné vypíše:

```text
### Jakou chci podobu odpovědí
- Chce krátké odpovědi, nejvýš pět bodů. Uloženo v paměti, sloučeno ze dvou záznamů. Návrh: nechat.
- Chce výsledky vždy v tabulce. Uloženo v paměti. Návrh: smazat, tabulka byla jen k reportu za srpen.

### Na čem pracuji
- Vede spuštění nového e-shopu s termínem 30. 9. Uloženo v paměti. Návrh: opravit na „E-shop běží od září, teď připravuje stánek na veletrh.“
- Řeší reklamaci dodávky židlí. Z dřívějšího chatu „Reklamace židle“. Návrh: uložit, že reklamace je uzavřená.

### Kde co najdu
- Termíny projektu jsou v tabulce „E-shop harmonogram“. Uloženo v paměti. Návrh: opravit na tabulku „Veletrh 2027“.
```

Klára odpoví „ano, kromě tabulky: přehledy termínů chci v tabulce dál“. AI
upraví záznam o tabulce, opraví dva další a uloží si, že reklamace skončila. V
novém chatu pak Klára napíše „připrav e-mail dodavateli stánku, co od něj
potřebujeme do konce listopadu“ a dostane krátký e-mail bez zmínky o
e-shopu.
## Když se zaseknete

- **AI napíše, že si nic nepamatuje, nebo vypíše dvě obecné věty:** paměť
  máte nejspíš vypnutou nebo skoro prázdnou a uklízet není co. Zapněte ji v
  nastavení, a když to ve firemním účtu nejde, uložte si stálé pokyny do
  [Custom Instructions](card:custom-instructions).
- **AI napíše, že záznam smazala, ale v nastavení pořád je:** smažte ho
  přímo v seznamu paměti. V ChatGPT smazání chatu uložený záznam v paměti
  neodstraní.
- **Nový chat pořád vychází ze staré informace:** AI ji nejspíš bere z
  dřívějšího chatu, ne z paměti. Napište AI, co platí teď, ať si to uloží; v
  ChatGPT u staré informace v souhrnu paměti zvolte Don't mention this again. Když se vrací dál,
  smažte chat, ze kterého ji bere.
- **AI vypíše jen pár položek, ale v nastavení je jich víc:** požádejte ji,
  ať projde každou skupinu zvlášť. Co ani pak nevypíše, opravte nebo smažte
  přímo v nastavení.
## Co bude hotové

V paměti vaší AI zůstalo jen to, co dnes platí, a v novém chatu jste si
ověřili, že AI vychází z opravené verze. AI má uložené pravidlo, jak příští
opravy zapisovat, aby se v paměti nezdvojovaly.
## Co dál

Pravidla, podle kterých má AI pracovat v celém projektu, sepíšete do
[souboru s pravidly pro AI](card:agents-md). Až budete chtít pravidelně
uklízet celé AI nastavení, nejen paměť, pokračujte k
[týdenní revizi](card:weekly-ai-review).
## Paměť AI

**Co to je:** Místo, kam si AI ukládá, co o člověku zjistí z chatů: opravy, preference, jména a rozpracovanou práci. V nových chatech z ní AI sama vybírá, co se hodí. Kde paměť najít a kdo ji smí zapnout, se liší podle nástroje.

**Co to není:** Nejsou to stálé pokyny, které člověk píše sám (Custom Instructions), ani historie chatů. Co musí platit v každém chatu, patří do pokynů, protože z paměti AI používá jen to, co považuje za důležité.

**Proč to student potřebuje:** Pomáhá rozhodnout, co si nechat zapamatovat, co zapsat do pokynů a kdy paměť uklidit, aby AI nepracovala se zastaralými informacemi.

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
