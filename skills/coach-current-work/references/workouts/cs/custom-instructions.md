# Nastavte si Custom Instructions: stálé pokyny pro každý chat

AI z pěti vašich odpovědí napíše stálé pokyny a každý nový chat vám pak odpovídá tak, jak chcete.

## Nastavte si Custom Instructions: stálé pokyny pro každý chat

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním skutečným úkolem na ověření.
## K čemu se hodí

V pondělí chcete z poznámek z porady pět úkolů pro tým a AI je schová až do
třetího odstavce. Dopíšete „bez úvodu, jen body, jsem koordinátorka
projektů“ a ve středu v novém chatu píšete totéž znovu.

Custom Instructions jsou vlastní pokyny v nastavení AI, které AI dostane v
každém novém chatu, takže kdo jste a jak vám má odpovídat, napíšete jen
jednou.
## Co si připravit

- AI, kterou v práci používáte,
- pokyny, které AI píšete pořád dokola, třeba „stručně“ nebo „bez úvodu“,
- jeden úkol z tohoto týdne, třeba zápis z porady; na něm instrukce ověříte.
## Jak na to

1. Otevřete nový chat a vložte prompt z AI cvičení. AI se zeptá na to, co o
   vás neví, a napíše Custom Instructions.
2. Co nesedí, napište AI, třeba že vedení vykáte. Hotovou verzi vložte do
   pole pro vlastní pokyny; kde ho máte, ukazuje blok „Ve vašem nástroji“.
3. V novém chatu zadejte připravený úkol bez vysvětlování o sobě. Když
   odpověď nesedí, napište AI, co má příště dělat jinak, a ona si to
   zapamatuje.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Napiš mi Custom Instructions: krátké pokyny, které vložím do nastavení tohoto AI nástroje, aby každý nový chat věděl, kdo jsem a jak mi odpovídat.

Potřebuješ ode mě těchto pět věcí:
1. Jakou mám roli a co mám na starosti.
2. V jakém oboru a pro koho pracuji.
3. S čím mi AI v práci nejčastěji pomáhá.
4. Jak dlouhé a v jaké podobě chci odpovědi.
5. Co v odpovědích nechci.

Když o mně něco víš z paměti nebo z dřívějších chatů, napiš nejdřív, co víš, a ptej se jen na to, co chybí. Na chybějící věci se zeptej najednou, odpovím pár slovy. Když už v nastavení nějaké instrukce mám, vezmi je jako základ.

Instrukce napiš ve dvou částech s nadpisy „Kdo jsem:“ a „Jak mi odpovídat:“. Do první dej roli, obor, pro koho pracuji a s čím mi AI pomáhá, do druhé jazyk, délku a podobu odpovědí a co v nich nechci.

Každý pokyn napiš jako jednu větu, podle které jde poznat, jestli ho odpověď dodržela. Obecnou radu typu „piš stručně“ přepiš na konkrétní pokyn, třeba „odpověz nejvýš pěti body“. Dnešní termíny, čísla, jména klientů a podrobnosti jednoho projektu do instrukcí nedávej. Celé instrukce drž pod 1 500 znaků, ať se vejdou i do bezplatného ChatGPT.

Na konec části „Jak mi odpovídat:“ přidej pokyn: „Když tě opravím a oprava má platit i příště, ulož si ji do paměti. Když paměť nemáš zapnutou, napiš mi větu, kterou doplním do Custom Instructions.“

Nakonec mi instrukce ukaž v jednom bloku ke zkopírování a zeptej se, co v nich nesedí. Opravy zapracuj a ukaž mi celou opravenou verzi.

## Ve vašem nástroji

### Microsoft Copilot

Vlastní pokyny najdete v Copilot Chatu na `copilot.cloud.microsoft` pod
třemi tečkami vpravo nahoře: Nastavení a další, Chat nastavení,
Přizpůsobení, Vlastní pokyny. Instrukce vložte přes Upravit pokyny a Uložit
pokyny. Když Copilotu napíšete „zapamatuj si…“, uloží to do paměti. Když
pole chybí, vložte instrukce do pokynů Notebooku (Poznámkové bloky, Nový
poznámkový blok).

### ChatGPT

V menu účtu (kliknete na své jméno) otevřete Settings, pak Personalization,
a vložte instrukce do pole Custom Instructions; přepínač Enable
customization musí být zapnutý. V české verzi jsou položky na stejném místě,
jen česky. Placené a firemní tarify vezmou 5 000 znaků, účet zdarma 1 500.
Paměť je pod Settings, Personalization, Memory.

### Claude

Vlevo dole klikněte na své iniciály, pak na Settings. Pole se jmenuje
Instructions for Claude a platí ve všech konverzacích. Paměť je v Settings
pod Memory; ve firemních tarifech Team a Enterprise ji zapíná vlastník
organizace.

### Gemini

Stálé pokyny vložíte v Gemini do robota Gem, protože vlastní pokyny ani paměť
pracovní účet nemá: na `gemini.google.com` otevřete Roboti Gem, Nový Gem,
vložte instrukce a dejte Uložit. Nové chaty pak otevírejte v tomto Gemu. Větu,
kterou vám AI napíše pro Custom Instructions, doplňte do instrukcí Gemu v
části Moji roboti Gem.
## Co jsou Custom Instructions

Nástroj vaše Custom Instructions použije v každém novém chatu. AI je proto
zná, i když je v chatu nezmíníte, a když už nějaké máte, prompt z tohoto
cvičení z nich vyjde. Platí, dokud je v nastavení nezměníte.

Vedle toho má většina AI nástrojů paměť, do které si AI sama ukládá věci z
vašich chatů a průběžně je přepisuje. Hodí se na opravy, které se nasbírají
během práce. Co má platit vždy, jednou za čas přeneste do Custom
Instructions, protože ty se samy nezmění.

Do instrukcí patří jen to, co platí v každém chatu. Dnešní termín, číslo
nebo jméno klienta dejte AI rovnou v chatu s úkolem, jinak by je tahala i do
odpovědí, kam nepatří.
## Šablona Custom Instructions

Šablona doplní do instrukcí pravidla, podle kterých AI u aktuálních věcí
hledá na webu a řekne vám, když si není jistá.

Vyplňovat nic nemusíte, AI doplní místa v hranatých závorkách z toho, co o
vás ví, a na zbytek se zeptá. Nejlíp ji vložíte hned po cvičení do stejného
chatu, dřív než instrukce uložíte do nastavení. Když už je v nastavení máte,
otevřete nový chat; AI je v něm vidí. V obou případech vložte tento prompt:

```text
Doplň do mých Custom Instructions pravidla z této šablony. Hranaté závorky vyplň podle toho, co o mně víš, a na co nevíš, se mě zeptej. Pravidla, která už v instrukcích mám, nezdvojuj, a když pravidlo šablony odporuje mému, nech moje. Pokyn o ukládání oprav do paměti nech na konci. Celé instrukce drž pod 1 500 znaků a ukaž mi je v jednom bloku ke zkopírování.

Kdo jsem:
[role] v [název firmy], hlavně řeším [dvě až tři agendy].

Jak mi odpovídat:
- Odpovídej česky a [tykej, nebo vykej] mi.
- Začni výsledkem nebo odpovědí, detaily dej až za ně. Bez úvodu a bez shrnutí na konci.
- Pojem, který nemusím znát, vysvětli jednou větou.
- U aktuálních věcí, třeba předpisů, cen nebo novinek v oboru, hledej na webu a uveď zdroje.
- Když si nejsi jistý, řekni to a napiš, co je potřeba ověřit. Čísla si nevymýšlej.
- Nikdy neposílej e-mail ani zprávu za mě bez mého výslovného potvrzení.
- Pod delší dokument nebo tabulku připiš jednu větu o tom, co v nich ještě chybí.
```

Celý blok, který vám AI vrátí, vložte do pole pro vlastní pokyny. Když v něm
už instrukce máte, nahraďte je.

Řádek o e-mailu je pojistka: AI s přístupem k vaší poště umí e-mail i
odeslat a tenhle řádek zařídí, že to bez vašeho potvrzení neudělá. Když
přístup nemá, řádek nevadí.

Když AI u aktuální otázky zdroje neuvede, napište jí „vyhledej to na webu“.
Kdyby ani pak nehledala, zapněte vyhledávání na webu; v některých nástrojích
je pod tlačítkem + vedle pole pro zprávu, jinde v nastavení. Ve firemním
účtu ho může mít vypnuté správce.
## Ať si AI opravy pamatuje sama

Pokyn na konci instrukcí zařídí, že když AI opravíte a oprava má platit i
příště, AI si ji uloží do paměti. Jestli paměť máte zapnutou, zjišťovat
nemusíte. Ve firemním účtu o ní stejně rozhoduje správce, a když ji AI
nemá, napíše vám místo uložení větu, kterou doplníte do Custom
Instructions.

Za pár měsíců se v paměti nasbírá tolik oprav, že stojí za to přenést je
do instrukcí. Otevřete nový chat a napište:

```text
Vezmi moje současné Custom Instructions a doplň do nich, co sis o mně uložil do paměti a platí to v každém chatu. Pokyny, které říkají totéž, slouč, a ty, které se už nehodí, vyřaď. Výsledek drž pod 1 500 znaků a ukaž mi, co jsi změnil.
```

Novou verzi pak vložte do nastavení místo staré.
## Příklad

Jana koordinuje projekty ve firmě, která e-shopům zavádí skladové systémy.
V pondělí 12. 10. 2026 vloží prompt do AI, kterou v práci používá. Ta si z
dřívějších chatů pamatuje, že Jana koordinuje projekty, a zeptá se jen na
délku odpovědí a na to, co v nich nechce. Jana odpoví „krátce, u úkolů vždy
kdo a do kdy, a nevysvětluj mi projektové pojmy“. AI napíše:

```text
Kdo jsem:
Koordinuji projekty zavádění skladových systémů pro e-shopy. Hlídám termíny, dodavatele a porady. AI mi nejčastěji pomáhá se zápisy z porad, e-maily dodavatelům a přehledy pro vedení.

Jak mi odpovídat:
- Piš česky a začni rovnou výsledkem, bez úvodu a bez shrnutí na konci.
- Odpověz nejvýš pěti body nebo pěti větami, pokud nechci víc.
- Úkoly piš ve tvaru: kdo, co, do kdy.
- Nevysvětluj pojmy z řízení projektů, znám je.
- Když tě opravím a oprava má platit i příště, ulož si ji do paměti. Když paměť nemáš zapnutou, napiš mi větu, kterou doplním do Custom Instructions.
```

Jana instrukce vloží do nastavení. V úterý otevře nový chat, vloží
poznámky z porady s dodavatelem a napíše jen „udělej z toho zápis pro tým“.
Dostane pět úkolů ve tvaru kdo, co, do kdy a žádný úvod. Datum spuštění
2. 11. AI vzala z úterních poznámek; v instrukcích žádné datum není, takže
se za měsíc nedostane do jiného zápisu. U „kdo“ ale stojí jen iniciály, a
tak Jana napíše „jména piš celá“. AI si to uloží do paměti a zápis ve
čtvrtek už má celá jména.
## Když se zaseknete

- **AI odpovídá stejně jako dřív:** otevřete nový chat a v nastavení
  zkontrolujte, že se instrukce uložily. V ChatGPT musí být zapnutý přepínač
  Enable customization, v Gemini otevřete nový chat přímo v robotovi Gem.
- **Ve firemním účtu pole pro instrukce chybí:** funkci nejspíš vypnul
  správce. Uložte instrukce do [projektu](card:asistent), kde platí pro
  všechny chaty v něm.
- **Instrukce se do pole nevejdou:** napište AI: „Zkrať instrukce pod 1 500
  znaků. Slouč pokyny, které říkají totéž, a vyhoď ty, bez kterých by
  odpověď vypadala stejně.“
- **AI pokyn dodržuje jen někdy:** pokyn je nejspíš obecný, třeba „piš
  stručně“. Požádejte AI, ať ho přepíše na konkrétní, třeba „nejvýš pět
  bodů“, a novou verzi vložte do nastavení.
## Co bude hotové

V nastavení vaší AI jsou Custom Instructions o vaší práci a o tom, jaké
odpovědi chcete. V novém chatu jste na skutečném úkolu viděli, že AI
odpovídá v délce a podobě, kterou jste si nastavili. Když ji příště
opravíte, uloží si opravu do paměti, nebo vám napíše větu, kterou do
instrukcí doplníte.
## Co dál

Styl, kterým za vás AI píše e-maily a příspěvky, se do pár řádků
instrukcí nevejde. AI ho sepíše do samostatného dokumentu podle karty
[Tone of voice](card:tone-of-voice). Pokyny pro jeden projekt nebo
opakovanou práci uložte do [projektu](card:asistent). Až budete s AI
pracovat v režimu Cowork nebo Code, tedy přímo se složkou ve vašem
počítači, nechte ji převzít instrukce do souboru `AGENTS.md` podle karty
[Pravidla pro AI v jednom souboru](card:agents-md).
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
