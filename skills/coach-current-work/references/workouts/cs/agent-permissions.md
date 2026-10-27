# Nastavte agentovi oprávnění: co smí sám a co nikdy bez vás

AI se přestane ptát na rutinní kroky a před e-mailem ven nebo mazáním dat počká na vaše potvrzení.

## Nastavte agentovi oprávnění: co smí sám a co nikdy bez vás

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** se složkou, ve které AI pracuje.
## K čemu se hodí

Agent má přes oběd doplnit nový ceník do 20 nabídek a po hodině čeká u první
s otázkou, jestli smí uložit soubor. Kolegyně to vyřešila tak, že svému
agentovi povolila všechno, a ten jí v podobné úloze rovnou poslal
zákazníkovi nabídku, kterou ještě nikdo nezkontroloval.

Pomůže rozdělit práci [agenta](glossary:agent) na rutinu, kterou podle
režimu oprávnění v nástroji udělá bez ptaní, a tvrdé hranice v `AGENTS.md`,
souboru s pravidly pro AI, před kterými se zastaví a počká na vás.
## Co si připravit

- složku, ve které s AI pracujete; `AGENTS.md` v ní být nemusí,
- jednu skutečnou úlohu, která končí e-mailem ven, třeba report nebo odpověď
  klientovi,
- poštu připojenou k AI přes [konektor](card:plugin-connector), aby e-mail
  po vašem „ODESLAT“ odeslala sama,
- AI v [režimu](glossary:workmode) Cowork nebo Code ([jak do něj přepnout z
  chatu](card:when-chat-is-not-enough)).
## Jak na to

1. Vložte prompt a řekněte AI, co je u vás rutina a co nejde vrátit. AI
   zjistí, jak má oprávnění nastavená, a navrhne dva seznamy.
2. Seznamy opravte a schvalte. AI je zapíše do `AGENTS.md` a řekne vám,
   který režim oprávnění zvolit a kde ho přepnete.
3. V novém chatu zadejte úlohu z přípravy. AI má rutinu udělat bez otázek a
   u e-mailu se zastavit: ukáže koncept a bez vašeho „ODESLAT“ nic neodejde.

Na seznam „Nikdy bez mě“ patří kroky, které nejdou vrátit nebo odcházejí
mimo firmu, a obvykle jich stačí pět až osm.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce:

Nastav, co smíš v této složce dělat sám a u čeho se vždy zastavíš a počkáš na mě. Na rutinu se mě ptát nemáš; u kroků, které nejdou vrátit, se zastav pokaždé.

Nejdřív zjisti, v jakém režimu oprávnění teď pracuješ a jaká povolení nebo zákazy máš v tomhle nástroji uložené. Když režim zjistit nejde nebo ho nástroj nemá, napiš to a neodhaduj. Když ve složce je AGENTS.md, přečti ho. Pak se mě zeptej na dvě věci: u kterých rutinních kroků tě musím pořád schvalovat a které akce v mé práci nejdou vrátit nebo odcházejí ven, třeba e-maily klientům, platby, mazání, zveřejnění nebo změny ve sdílených tabulkách a systémech.

Z odpovědí navrhni dva seznamy:
- Smíš sám: rutina, kterou děláš bez ptaní, třeba číst a upravovat soubory v této složce, spouštět běžné příkazy a připravovat koncepty.
- Nikdy bez mě: pět až osm tvrdých hranic, tedy kroků, které nejdou vrátit nebo odcházejí ven, a ke každé postup, podle kterého se zastavíš. U e-mailů a zpráv mimo firmu: připrav koncept, ukaž mi příjemce, předmět a celý text a odešli ho, až ti pošlu samostatnou zprávu se slovem ODESLAT; když odesílat neumíš, ulož koncept do pošty a napiš mi to. U mazání dat, která nejdou obnovit: vypiš, co přesně smažeš, a počkej na dvě potvrzení ve dvou zprávách. Po každém zápisu do jiné aplikace výsledek znovu načti a ukaž mi ho. Hesla a přístupové klíče nikdy nevkládej do chatu ani do souborů; když je potřeba přihlášení, požádej mě, ať ho udělám přes správce hesel.
Když chci výjimku, zapiš ji pod nadpis „Výjimky“ jednou větou i s podmínkou, třeba „Smíš sám uložit nabídku do sdílené složky, když jsem ji v chatu schválil.“

Ukaž mi oba seznamy a počkej, až je opravím nebo schválím. Pak je zapiš do AGENTS.md pod nadpisy „Smíš sám“ a „Nikdy bez mě“; když soubor neexistuje, založ ho. Když v něm už nějaké zákazy jsou, přesuň je do „Nikdy bez mě“, ať nejsou na dvou místech. Připiš pravidlo: „Když se mě zeptáš na rutinní krok, který schválím, navrhni ho přidat do Smíš sám. Když narazíš na krok, který nejde vrátit a v seznamu Nikdy bez mě chybí, zastav se a navrhni ho přidat.“ Zařiď, ať si AGENTS.md v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Když se složkou nepracuješ, ulož si seznamy do paměti, nebo mi napiš text, který vložím do vlastních instrukcí.

Nakonec mi napiš, který režim oprávnění mám v tomhle nástroji zvolit, aby ses na rutinu neptal a rizikové kroky nástroj předem zkontroloval, a kde ho přepnu. Když jde v nastavení trvale povolit rutinní příkazy, které jsem schválil, nastav to; když to sám nastavit nemůžeš, napiš mi přesně, kam co vložit.

## Ve vašem nástroji

### Microsoft Copilot

Copilot v režimu Cowork (přepínač nahoře vedle Chat) režim oprávnění nemá
a před odesláním e-mailu, zprávy v Teams nebo pozvánky se zeptá sám. Složku
neotevíráte; na konec promptu připište „Soubor nezakládej, seznamy mi napiš
jako text pro Customize, Preferences.“ a text vložte do Customize na úvodní
stránce Cowork. Always allow u e-mailů ven nepoužívejte, pustí další bez
ptaní.

### ChatGPT

V aplikaci ChatGPT pro počítač přepněte na Codex, zvolte otevření složky
(open a folder) a pod polem pro zprávu zvolte Approve for me (schval za mě):
Codex se pak ptá jen u kroků, které vyhodnotí jako rizikové. S Full access
pracuje úplně bez schvalování. `AGENTS.md` čte Codex sám; když nemá
připojenou poštu, skončí krok 3 u konceptu e-mailu.

### Claude

V Claude Code zvolte Auto v nabídce režimů vedle tlačítka pro odeslání:
rutinu pustí bez ptaní a rizikové kroky předem posoudí druhý model. Trvalá
povolení a výjimky popsané slovy uložíte příkazem `/permissions`. V Cowork
nechte výchozí Automatically approve; trvalé smazání souborů vždy potvrdí s
vámi. S připojeným Gmailem Claude e-mail jen připraví jako koncept.

### Gemini

Gemini Agent, který dělá kroky sám, je jen pro osobní účty Google AI Pro a
Ultra a v EU není, takže s firemním účtem režim oprávnění nenastavíte. Když
potřebujete, aby AI dělala kroky sama, požádejte IT o nástroj s režimem Cowork
nebo Code. Seznam „Nikdy bez mě“ si pro psaní e-mailů nechte uložit jako
skill: napište „Ulož to jako skill“ a najdete ho v Customize, Skills.
## Co je režim oprávnění

Režim oprávnění (v nástrojích anglicky permissions) je nastavení, které
určuje, na co se vás AI zeptá, než to udělá. Nástroje mají obvykle tři
stupně: AI se ptá skoro u všeho, ptá se jen u kroků, které vyhodnotí jako
rizikové, nebo se neptá vůbec. Prostřední stupeň je dobrý výchozí stav pro
každodenní práci. Stupeň bez ptaní je vědomá volba pro lidi, kteří mají
hranice sepsané a výsledky kontrolují, a kolegům ho jako výchozí
nenastavujte.

Nástroj sám pozná rizikové příkazy, třeba hromadné mazání. Neví ale, že
e-mail pro konkrétního klienta nebo smazání tabulky s objednávkami je pro
vás riziko. To AI ví z `AGENTS.md`, souboru v
[Markdownu](glossary:markdown), který si přečte na začátku každé práce, a
proto má každá hranice postup s jasným okamžikem, kdy rozhodujete vy.
Samostatná zpráva „ODESLAT“ je pojistka: věta „a pak to pošli“ uprostřed
delšího zadání odeslání nespustí. Po zápisu do jiné aplikace vám AI výsledek
znovu otevře, takže vidíte, že se opravdu uložil.

Výjimku napište slovy i s podmínkou; AI ji zapíše pod nadpis Výjimky. Když
zůstáváte jen u běžného chatu, jak [přepnout do Cowork nebo
Code](card:when-chat-is-not-enough), ukazuje samostatná karta.
## Ať se seznamy doplňují samy

Pravidlo z promptu zařídí, že AI navrhne nový krok do seznamu pokaždé,
když se vás na něj zeptá. Jednou za měsíc se ale hodí projít, kde se vás AI
ptala zbytečně, a naplánovaná úloha to udělá za vás. Vložte AI v režimu
Code toto zadání a požádejte ji, ať z něj naplánovanou úlohu založí:

```text
Každé první pondělí v měsíci v 9:00 projdi AGENTS.md v této složce a moje chaty v ní za poslední měsíc. Vypiš kroky, na které ses mě ptal a já je pokaždé schválil, a navrhni, které přesunout do „Smíš sám“. Vypiš i nové akce, které nejdou vrátit a v seznamu „Nikdy bez mě“ chybí. Seznamy uprav, až návrh schválím.
```

Když úloha pracuje se soubory ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená. Když už máte
[týdenní revizi](card:weekly-ai-review), přidejte tento bod do ní místo
samostatné úlohy.
## Příklad

Tereza vede zakázky v malé reklamní agentuře a s AI v režimu Cowork
připravuje měsíční reporty pro šest klientů. Má zapnuté schvalování každého
kroku, a tak se jí AI za hodinu práce jedenáctkrát zeptala, jestli smí
uložit soubor. V pondělí 19. 10. 2026 otevře složku Reporty a vloží prompt.
Na otázku, co nejde vrátit, odpoví: e-maily klientům a smazání exportů;
faktury v účetním systému AI nemá měnit vůbec. AI zapíše:

```text
### Smíš sám
- Číst a upravovat soubory ve složce Reporty a zakládat v ní nové.
- Stahovat exporty z reklamních účtů a počítat z nich tabulky.
- Připravovat koncepty e-mailů klientům.

### Nikdy bez mě
- E-mail mimo firmu: ukaž příjemce, předmět a celý text a odešli ho až po mé samostatné zprávě ODESLAT.
- Mazání exportů a souborů, které nejdou obnovit: vypiš, co smažeš, a počkej na dvě potvrzení ve dvou zprávách.
- Faktury v účetním systému neměň; napiš mi, co je potřeba změnit.
- Po každém zápisu do jiné aplikace výsledek znovu načti a ukaž mi ho.
- Hesla a přístupové klíče nikdy do chatu ani do souborů; přihlášení udělám přes správce hesel.

### Výjimky
- Smíš sám poslat hotový report kolegovi Martinovi do týmového chatu, když jsem ho schválila.
```

AI jí napíše, že pracuje v režimu, ve kterém Tereza schvaluje každý krok, a
ukáže, kde ho přepnout na ten, který se ptá jen u rizikových. V úterý 20. 10.
Tereza v novém chatu napíše: „Připrav říjnový report pro Pekárnu Novák a
pošli ho paní Novákové.“ AI stáhne export z reklamního účtu a report uloží
bez jediné otázky. Pak ukáže koncept e-mailu s adresou, předmětem a textem
a čeká. Tereza opraví oslovení, pošle „ODESLAT“ a AI jí z odeslané pošty
ukáže, že e-mail odešel s přílohou.
## Když se zaseknete

- **AI se pořád ptá na rutinní kroky:** nástroj je nejspíš v režimu, ve
  kterém schvalujete každý krok. Přepněte ho podle bloku „Ve vašem nástroji“
  a AI napište, ať rutinní příkazy povolí trvale.
- **AI udělala krok ze seznamu „Nikdy bez mě“ bez ptaní:** napište „Vypiš
  pravidla, která se načetla na začátku práce.“ Když `AGENTS.md` mezi nimi
  chybí, jak zařídit, aby se načítal, ukazuje karta [souboru s pravidly pro
  AI](card:agents-md); když tam je, nechte AI hranici přepsat na postup s
  krokem, třeba „ukaž koncept a čekej na ODESLAT“.
- **Nástroj zastaví krok, který jste chtěli:** potvrďte ho v okně
  schválení, nebo AI napište přesně, co má udělat a s čím, třeba „přesuň
  report do sdílené složky `Klienti/Pekárna Novák`“.
- **Nabídku režimů nevidíte:** pracujete v běžném chatu, nebo ji ve firmě
  omezil správce. Přepněte do [Cowork nebo
  Code](card:when-chat-is-not-enough), případně požádejte IT, ať vám ji
  zpřístupní.
## Co bude hotové

Máte dva krátké seznamy, co AI smí udělat sama a u čeho se vždy zastaví,
uložené v `AGENTS.md` nebo v nastavení vašeho nástroje. Když nástroj režimy
oprávnění má, běží v tom, který se na rutinu neptá. Na skutečné
úloze jste si ověřili, že AI práci dotáhne bez otázek a před odesláním
e-mailu čeká na vaše „ODESLAT“. Když se vás příště zeptá na nový rutinní
krok, navrhne ho do seznamu sama.
## Co dál

Když AI ví, kde se zastavit, svěřte jí [dlouhou úlohu, kterou dotáhne
sama](card:agent-task), třeba přes noc. Práci, která se opakuje každý týden,
nastavte jako [naplánovanou úlohu](card:recurring-ai-task).
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
