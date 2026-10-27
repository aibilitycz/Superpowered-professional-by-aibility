# Uspořádejte AI sprint: za odpoledne hotová věc, kterou tým používá

AI navrhne, co tým za odpoledne s AI postaví, napíše zadání, pozve tým a po sprintu uloží postup, který fungoval.

## Uspořádejte AI sprint: za odpoledne hotová věc, kterou tým používá

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s podklady týmu ve sdílené složce.
## K čemu se hodí

Na poradách se už měsíc opakuje, že by AI mohla skládat měsíční report pro
vedení. Všichni souhlasí, jenže mezi schůzkami se k tomu nikdo nedostane, a
tak ho Petra na konci měsíce zase dvě hodiny skládá ručně z exportů.

Když si tým vyhradí jedno odpoledne jen na tuhle věc a staví ji s AI pro
svou běžnou práci, druhý den ji už používá.
## Co si připravit

- sdílenou složku týmu se seznamem úkolů a zápisy z porad,
- jména účastníků a odpoledne, kdy můžou dvě až čtyři hodiny pracovat jen na
  sprintu,
- AI v režimu Cowork nebo Code pro vás i pro každého účastníka sprintu,
- AI s připojeným kalendářem, ve kterém zakládáte schůzky.
## Jak na to

1. Otevřete složku týmu v AI v režimu Cowork nebo Code, vložte prompt z AI
   cvičení a pod něj napište, kdo se sprintu zúčastní a kdy. Z návrhů AI
   vyberte jednu úlohu.
2. AI napíše zadání; opravte ho a napište „Pošli to“. AI zadání uloží a
   založí pozvánku pro tým. Při sprintu každý vloží do své AI větu ze zadání
   a pracuje na své části.
3. Po ukázce napište AI „Sprint skončil“ a co fungovalo. AI zapíše výsledek
   do worklogu a postup uloží jako [skill](glossary:skill) nebo pravidlo.

Jen s běžným chatem poradí část Když se zaseknete.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code, otevřené ve vaší složce:

Připrav s námi AI sprint: odpoledne, ve kterém tým s AI postaví jednu věc, kterou potřebuje, a druhý den ji začne používat. Když nemáš přístup ke složce týmu a nemůžeš do ní sám ukládat soubory, řekni mi to hned, ať můžu přepnout do Cowork nebo Code.

Projdi podklady ve složce týmu: seznam úkolů, zápisy z porad, worklog a další soubory, ze kterých je vidět, co tým dělá a co ho zdržuje. Navrhni tři úlohy, které jde během sprintu dotáhnout tak, aby je tým potom běžně používal. U každé napiš jednou větou, co vznikne, kdo to bude používat a z jakých podkladů. Velkou úlohu zmenši na první verzi, která se do sprintu vejde. Počkej, až jednu vyberu.

Pro vybranou úlohu napiš zadání na jednu stránku:
- Co vznikne a kdo to bude používat.
- Kdo na čem dělá. Práci rozděl mezi lidi, které ti napíšu na konec zprávy, tak, aby každý zadával svou část AI. U každého napiš soubor, do kterého svou část uloží, a větu, kterou na začátku sprintu vloží do své AI. Ta věta vždy začíná slovy: Přečti si AGENTS.md v této složce a zařiď, ať ho čteš na začátku každé práce.
- Jaké přístupy a soubory jsou potřeba a kde leží.
- Kdo na konci části spojí do jednoho souboru, co tým ukáže a na kterých případech z běžné práce to vyzkouší.

Pod zadání přidej část Po sprintu s tímto pokynem pro AI: „Až někdo napíše, že sprint skončil, projdi, co během sprintu ve složce vzniklo, a poznámky z ukázky. Nahoru do worklog.md zapiš záznam s datem sprintu: co tým postavil, jak to fungovalo v ukázce a kdo co udělá dál. Když worklog.md neexistuje, založ ho. Z postupu, který fungoval, napiš skill, ulož ho do složky týmu a do AGENTS.md přidej pravidlo, kdy ho AI použije a ve kterém souboru leží. Když postup stojí na jedné větě, stačí místo skillu samotné pravidlo.“

Zadání mi ukaž a počkej na opravy. Až napíšu, ať to pošleš, ulož zadání do složky týmu jako zadani-sprintu-RRRR-MM-DD.md s datem sprintu. Do AGENTS.md ve stejné složce přidej pravidlo, že zadání AI sprintů leží v souborech zadani-sprintu a při sprintu se AI drží toho nejnovějšího. Když AGENTS.md neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Pak přes konektor ke kalendáři založ na termín sprintu pozvánku pro všechny lidi ze zadání. Do jejího popisu dej zadání bez části Po sprintu a název souboru, ve kterém leží. E-mailové adresy dohledej v poště nebo v kalendáři a které nenajdeš, si ode mě vyžádej. Když konektor ke kalendáři nemáš nebo kalendář jen čte, propoj kalendář přes službu Composio. Kde se musím přihlásit já, řekni mi přesně kam. Nakonec mi napiš, komu pozvánka odešla.

Kdo se sprintu zúčastní, kdy a jak dlouho bude trvat:

## Ve vašem nástroji

### Microsoft Copilot

Cowork je v Copilotu vedle přepínače Chat; kdo ho nevidí, požádá IT. Pracuje
se soubory na OneDrivu a SharePointu, tak mu napište, kde je složka týmu;
pozvánku v Outlooku založí i s účastníky, takže Composio z promptu
nepoužije. Když Cowork nemají všichni, jeďte celý tým podle bodu „Tým má jen
běžný chat“: projektem je Notebook (Poznámkové bloky, Nový poznámkový blok),
sdílený přes Share, Invite.

### ChatGPT

Se složkou pracuje Codex v aplikaci ChatGPT pro počítač: přepněte na Codex a
zvolte open a folder; `AGENTS.md` čte sám. Když Codex nevidíte, požádejte
správce o Allow members to use Codex locally, nebo postupujte podle bodu
„Tým má jen běžný chat“. Kalendář připojíte v Settings pod Plugins; schůzky
AI založí, až správce zapne zápisové akce.

### Claude

V aplikaci Claude pro počítač zvolte Cowork a v poli pro zprávu Work in a
folder; v Cowork si AI podle promptu zapíše do instrukcí složky, ať čte
`AGENTS.md`. Konektor Microsoft 365 umí v Outlooku zakládat schůzky, když
správce zapne zápisové akce. Konektor Google Calendar kalendář jen čte, a
tak AI pozvánku založí přes Composio.

### Gemini

Aplikace Gemini s pracovním účtem se složkou v počítači nepracuje, a tak
sprint připravte podle bodu „Tým má jen běžný chat“ se sdíleným robotem Gem.
Událost v Kalendáři Google založí, když napíšete @Google Calendar a co má
založit; hosty doplňte v kalendáři. Se složkou pracuje Gemini CLI, pokud má
firma licenci Gemini Code Assist.
## Co je AI sprint

Sprint je v angličtině krátký závod naplno. Ve firmách se tak říká
vyhrazenému času, ve kterém tým pracuje na jedné věci a na konci ukáže
výsledek. [AI sprint](glossary:ai-sprint) trvá dvě až čtyři hodiny a tým v
něm práci zadává AI. Výsledkem je obvykle soubor ve složce týmu: šablona
nabídky, report nebo návod, podle kterého AI odpovídá zákazníkům. Na ten
čas si lidé nedávají jiné schůzky, takže věc, která na poradách čeká měsíce,
je hotová za odpoledne.

Zadání sprintu je obyčejný textový soubor ve složce týmu, takže ho každý
účastník má po ruce i se svou AI. `AGENTS.md` je soubor s pravidly pro AI ve
stejné složce, který si AI přečte na začátku každé práce. Víc najdete v
kartách o [worklogu](card:project-worklog) a o
[souboru s pravidly pro AI](card:agents-md).

Na konci sprintu člověk, kterého určilo zadání, nechá AI části spojit do
jednoho souboru a tým výsledek vyzkouší na práci z toho dne. Úlohu, která se
do odpoledne nevejde, AI zmenší na první verzi, kterou tým začne používat
druhý den. Worklog je deník projektu ve složce a pozvánku AI založí přes
konektor, tedy propojení s kalendářem.

Když se AI zeptá, jestli smí do složky ukládat soubory, povolte jí to. Úlohu
můžete vybrat i později s týmem: vraťte se do stejného chatu a napište,
kterou jste vybrali. Při sprintu ukládá každý do vlastního souboru, takže si
lidé práci nepřepisují. Jak přejít z běžného chatu do režimu Cowork nebo
Code, ukazuje karta [Cowork nebo Code](card:when-chat-is-not-enough).
## Ať se sprint opakuje

Jeden sprint postaví jednu věc. Když se sprint opakuje třeba jednou měsíčně,
tým postupně udělá i to, o čem se na poradách zatím jen mluví. Na to stačí
naplánovaná úloha, kterou AI spustí první pondělí v měsíci a návrhy na další
sprint uloží do složky týmu. Vložte do AI v režimu Cowork nebo Code toto
zadání a požádejte ji, ať z něj naplánovanou úlohu založí:

```text
Každé první pondělí v měsíci v 9:00 projdi ve složce týmu worklog.md, seznam úkolů, zápisy z porad za poslední měsíc a zadání minulých sprintů. Navrhni tři úlohy na další AI sprint, které jde za odpoledne postavit tak, aby je tým potom běžně používal. U každé uveď, kdo ji bude používat a proč se vyplatí právě teď. Nenavrhuj nic, co tým postavil v minulých sprintech. Návrhy připiš nahoru do souboru navrhy-na-sprint.md ve složce týmu.
```

Když úloha pracuje se složkou ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Markéta vede šestičlennou zákaznickou podporu e-shopu s kuchyňskými
spotřebiči. Tým odpovídá na čtyřicet dotazů denně a odpovědi hledá ve třech
dokumentech: v reklamačním řádu, záručních podmínkách a návodech. V
pondělí 12. 10. otevře sdílenou složku Podpora v režimu Cowork, vloží prompt
a pod něj napíše: „Markéta, Lucie, Pavel, Jana, Ondřej a Karel,
čtvrtek 22. 10. od 13:00 do 16:00.“ AI ze zápisů z porad a exportu dotazů za
září navrhne:

```text
1. Pomocník na odpovědi zákazníkům: z dotazu napíše koncept odpovědi a pod něj dokument a článek, ze kterého vychází. Používá celý tým, podkladem jsou tři dokumenty ve složce.
2. Měsíční report reklamací pro vedení. Používá Markéta, podkladem je export dotazů.
3. Odpovědi na 20 nejčastějších dotazů pro nápovědu na webu. Používají zákazníci, podkladem je export dotazů.
```

V úterý na poradě tým vybere pomocníka. AI napíše zadání: Lucie a Pavel s
AI vyberou z exportu 30 nejčastějších dotazů, Jana a Ondřej s AI sepíšou,
jak má pomocník odpovídat a jak uvádět zdroj, Markéta a Karel ho na konci
spojí a vyzkouší na pěti dotazech z dopoledne. Lucie má u svého jména větu
„Přečti si `AGENTS.md` v této složce a zařiď, ať ho čteš na začátku každé
práce. Pak najdi v exportu dotazů za září 30 nejčastějších dotazů a ulož je
do souboru `nejcastejsi-dotazy.md`.“ Markéta napíše „Pošli to“ a AI založí
v kalendáři pozvánku pro všech šest lidí.

Ve čtvrtek v 15:30 pomocník správně odpoví na čtyři z pěti dotazů a u
každého ukáže článek reklamačního řádu nebo záručních podmínek. Na pátý
dotaz, výměnu dílu po záruce, žádný dokument odpověď nemá. Markéta napíše AI,
že sprint skončil, a ta zapíše do worklogu:

```text
### 2026-10-22: AI sprint, pomocník na odpovědi zákazníkům
- Co vzniklo: pomocník, který z dotazu napíše koncept odpovědi a pod něj dokument a článek, ze kterého vychází.
- Jak to fungovalo: na pěti dotazech z dopoledne odpověděl správně čtyřikrát. Výměnu dílu po záruce žádný dokument nepopisuje.
- Dál: od pátku 23. 10. píše tým koncepty odpovědí přes pomocníka. Karel do 30. 10. doplní výměnu dílů po záruce do záručních podmínek.
```

Postup uloží do složky jako skill Odpověď zákazníkovi a do `AGENTS.md`
přidá pravidlo, ať AI na dotazy zákazníků odpovídá podle něj. V pátek ráno
vloží Lucie do AI ve složce Podpora první dotaz dne a AI napíše koncept
odpovědi i se zdrojem, aniž by jí cokoli vysvětlovala.
## Když se zaseknete

- **Pozvánka nevznikla:** zeptejte se AI, jestli má ke kalendáři konektor,
  který umí zakládat schůzky. Když nemá, ať kalendář propojí přes Composio,
  službu, přes kterou se AI napojí na víc než tisíc aplikací; jestli ji
  smíte použít, rozhoduje vaše IT. Bez ní vám AI připraví text pozvánky a vy
  ji odešlete ze svého kalendáře. Ve firemním kalendáři právo zakládat
  schůzky přes AI někdy zapíná správce; jak ho o to požádat, najdete v kartě
  [Připojte si konektor](card:plugin-connector).
- **Všechny tři návrhy jsou na sprint moc velké:** napište AI, ať každou
  úlohu rozdělí na kroky a do sprintu vybere jen první, který tým začne
  používat. Celý projekt rozdělený mezi lidi a AI vám rozepíše
  [AI-WBS](card:ai-wbs-project).
- **Tým má jen běžný chat:** vložte prompt do chatu, přiložte podklady týmu
  a připište: „Pracujeme jen v běžném chatu a Composio nepoužíváme. Zadání
  napiš tak, abych ho vložil do pokynů sdíleného projektu, a místo souborů a
  `AGENTS.md` dej každému větu, kterou vloží do chatu v tomto projektu.“
  Zadání vložte do pokynů sdíleného [projektu](card:asistent) týmu; jak se
  projekt ve vašem nástroji jmenuje, ukazuje blok „Ve vašem nástroji“. Při
  sprintu pracuje každý v chatu v tomto projektu a svou část na konci pošle
  člověku ze zadání, který je vloží do jednoho chatu a nechá AI spojit. Po
  ukázce napište AI v tomto chatu, že sprint skončil; záznam a postup, který
  fungoval, vám napíše k vložení do pokynů projektu.
- **AI kolegy skill ze sprintu nepoužívá:** ať kolega své AI ve složce týmu
  napíše: „Přečti si `AGENTS.md` a zařiď, ať ho čteš na začátku každé
  práce.“
## Co bude hotové

Po přípravě leží ve složce týmu zadání sprintu a celý tým má v kalendáři
pozvánku. Po sprintu tým používá věc, kterou za odpoledne postavil. Ve
worklogu je záznam o tom, co vzniklo a jak se pokračuje, a skill nebo
pravidlo v `AGENTS.md` zajistí, že AI týmu výsledek použije sama.
## Co dál

Když chcete výsledek sprintu ukázat dalším kolegům nebo jinému oddělení,
stačí na to [deset minut na poradě](card:team-adoption-cycle). Když skill ze
sprintu odpovídá jinak, než má, upravte ho podle karty
[Vytvořte si skill](card:create-skill-from-proven-process).
## AI sprint

**Co to je:** Souvislý pracovní blok pro malý tým, během kterého vznikne a otestuje se první použitelná verze jednoho nebo několika skutečných AI projektů. Má připravený čas, přístupy, podporu a další cestu výsledku.

**Co to není:** Není to běžné školení, soutěž ani práce přidaná lidem mezi ostatní schůzky.

**Proč to student potřebuje:** Pomáhá odlišit chráněný čas na skutečné stavění od krátkého cvičení a ukazuje, co musí být připravené, aby blok přinesl použitelný výsledek.

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
