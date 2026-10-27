# Uložte si tone of voice: váš styl psaní v souboru

AI z vašich povedených textů sepíše, jak píšete, a první verze každého e-mailu pak zní jako od vás.

## Uložte si tone of voice: váš styl psaní v souboru

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s připravenými texty.
## K čemu se hodí

Ve čtvrtek potřebujete klientovi napsat, že se předání posouvá o týden. AI
e-mail napíše za minutu, ale začne odstavcem o tom, jak si spolupráce vážíte,
a skončí větou „Neváhejte mě kontaktovat“. Takhle nepíšete, a tak e-mail
dvacet minut přepisujete. Za týden se to v jiném chatu stane znovu.

Když AI dostane soubor s vaším stylem a ukázkami, změníte v e-mailu jedno
slovo místo dvaceti minut přepisování.
## Co si připravit

- 3 až 5 vlastních textů, se kterými jste spokojení: e-maily, zprávy, příspěvky,
- jeden text, který tento týden potřebujete napsat, třeba e-mail klientovi,
- AI, kterou v práci používáte, nebo AI v [režimu Cowork nebo Code](glossary:workmode).
## Jak na to

1. Vložte prompt a přidejte své texty, nebo nechte AI, ať si je najde v
   poště. AI sepíše styl do `tone-of-voice.md`: ve složce ho uloží, v chatu
   ho dá ke stažení.
2. Napište AI, co nesedí, třeba že vedení vykáte. AI opravy zapíše; když
   soubor nabízí ke stažení, stáhněte si poslední verzi.
3. V novém chatu zadejte e-mail bez souboru, třeba „Napiš klientovi, že se
   předání posouvá o týden.“ Pak přiložte soubor: „Napiš to znovu podle
   tohoto souboru.“

Jména klientů do pravidel nepatří.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Sepiš můj tone of voice: soubor, podle kterého bude jakákoli AI psát jako já.

Projdi texty, které ti přikládám nebo které najdeš ve složce, ve které pracuješ. Všechny jsou ode mě a líbí se mi. Když ti žádné nepřiložím a máš přístup k mé poště, najdi v odeslaných e-mailech z posledního měsíce pět delších, které jsou ode mě, a ukaž mi, které jsi vybral. Když je textů méně než tři, řekni mi to a požádej o další.

Zapiš můj styl do souboru tone-of-voice.md v těchto částech:

### V kostce
Tři věty o tom, jak zním a komu nejčastěji píšu.

### Věty a odstavce
Jak dlouhé píšu věty a odstavce, jak text začínám a jak ho končím.

### Oslovení
Komu tykám, komu vykám a jak zdravím.

### Slova
Slova a obraty, které používám. Pod ně slova a obraty, které nikdy nenapíšu.

### Podle typu textu
Co se mění v e-mailu, ve zprávě kolegům a v příspěvku. Typ textu, který v ukázkách chybí, vynech.

### Ukázky
Tři krátké úryvky z mých textů, které můj styl ukazují nejlíp.

### Kontrola
Jedna otázka, kterou si položíš nad každým textem, než mi ho dáš.

Každé pravidlo opři o konkrétní větu z mých textů. Za pravidlo považuj jen to, co se opakuje aspoň ve dvou textech. Popisuj, jak píšu, a moji povahu nehádej. Jména, čísla a termíny z textů do pravidel nepřenášej a v ukázkách je nahraď obecným slovem, třeba [klient] nebo [datum].

Když pracuješ ve složce, ulož tam tone-of-voice.md a přidej do souboru AGENTS.md ve stejné složce pravidlo: „Když za mě píšeš e-mail, zprávu nebo jiný text, drž se tone-of-voice.md.“ Když AGENTS.md neexistuje, založ ho. Zařiď, ať si AGENTS.md v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Když ke složce přístup nemáš, nabídni mi tone-of-voice.md ke stažení.

Nakonec mi ukaž celý soubor a zeptej se, co nesedí. Opravy zapiš do souboru; když pracuješ bez složky, nabídni mi opravenou verzi ke stažení.

## Ve vašem nástroji

### Microsoft Copilot

Copilot Chat s licencí vidí pracovní poštu a odeslané e-maily najde sám.
Soubor ke stažení nedává, a tak krok 3 udělejte takhle: v novém chatu si
nechte napsat e-mail bez stylu, pak pravidla vložte do Custom instructions
(Chat settings › Personalization) a stejné zadání dejte v dalším novém
chatu. Když se pravidla nevejdou, nechte je AI zkrátit.

### ChatGPT

S Gmailem nebo Outlookem připojeným v nastavení pod Plugins najde ChatGPT
texty v poště sám. Soubor dá ke stažení a v kroku 3 ho přiložíte přes +. Aby
ho měl v každém chatu, nahrajte ho do projektu (New project, Add source) a
pište v jeho chatech. Skilly umí ChatGPT v tarifech Business, Enterprise a
Edu i Codex.

### Claude

S poštou připojenou v Customize, Connectors najde Claude texty sám. Soubor
vytvoří ke stažení; aby ho měl v každém chatu, nahrajte ho do projektu (New
Project). V Cowork ho AI uloží do složky a odkaz na `AGENTS.md` zapíše do
instrukcí složky. Skilly umí Claude v chatu, Cowork i Claude Code, v tarifech
Team a Enterprise je správce zveřejní celé firmě.

### Gemini

Napište na začátek zprávy @Gmail a Gemini odeslané e-maily najde sám, když
máte zapnutou Keep Activity a chytré funkce Gmailu. Po opravách napište „Ulož
poslední verzi do mého Disku Google“ a v kroku 3 ji přiložte přes Add from
Drive. Natrvalo si udělejte Gem (Gems › New Gem) se souborem v Knowledge; v
Gmailu dejte pravidla do Ask Gemini › Settings › Personalization.
## Co je tone of voice

Tone of voice je anglický název pro styl, kterým píše člověk nebo firma;
do češtiny se překládá jako „tón hlasu“. V psaní to jsou zvyky, podle kterých
lidé poznají, že text je od vás: jak dlouhé máte věty, komu tykáte a komu
vykáte, jak rychle jdete k věci a čím e-mail končíte. Stejným postupem
sepíšete i styl ředitele, za kterého píšete příspěvky, nebo styl celé firmy.

`tone-of-voice.md` je obyčejný textový soubor, který otevřete třeba v
Poznámkovém bloku. Koncovka `.md` znamená, že je psaný v
[Markdownu](glossary:markdown); mřížky `###` v něm označují nadpisy. Přečte ho
každá AI, která umí přijmout přílohu, takže ho použijete v kterémkoli nástroji
a vezmete si ho s sebou, když nástroj změníte. Vložit ho můžete i do trvalých
pokynů v nastavení nástroje, jak ukazuje karta
[Nastavte si Custom Instructions](card:custom-instructions).

`AGENTS.md` je soubor s pravidly pro AI ve složce. AI v režimu Cowork nebo
Code si ho přečte na začátku každé práce v té složce, a kde to nástroj
potřebuje nastavit, zařídí to AI podle promptu. Soubor se stylem pak nemusíte
přikládat pokaždé.
## Ať AI píše vaším stylem všude

Když nechcete soubor přikládat pokaždé, udělejte z `tone-of-voice.md`
[skill](glossary:skill): uložený návod, který si AI otevře sama pokaždé, když
za vás píše. Pravidlo v `AGENTS.md` totiž platí jen pro práci ve složce. Kde
skilly váš nástroj má, najdete v bloku „Ve vašem nástroji“. Napište AI:

```text
Udělej z tone-of-voice.md skill, který použiješ pokaždé, když za mě píšeš text, který pošlu lidem. Ulož ho tam, kde ho tenhle nástroj načítá, a ověř, že ho vidí i nový chat. Když ho uložit nemůžeš, řekni mi přesně, kam kliknout.
```

Firemní tón stačí sepsat jednou. Ve firemních tarifech jde skill sdílet s
kolegy, takže ho má k dispozici každý, kdo za firmu píše.
## Příklad

Martin je projektový manažer ve stavební firmě. V pondělí 12. 10. 2026 dá AI
ve složce s pracovními texty čtyři e-maily dodavatelům a jednu páteční zprávu
vedení. AI
zapíše do `tone-of-voice.md` mimo jiné:

```text
### V kostce
Píšu krátce a věcně. V první větě je stav věci nebo to, co potřebuju. Dodavatelům a vedení vykám, kolegům ze stavby tykám.

### Věty a odstavce
Věty mají většinou do 15 slov a odstavec nejvýš tři věty. Končím dalším krokem a datem.

### Slova
Používám: „stav“, „potřebuju od vás“, „do pátku“.
Nepoužívám: „dovolte mi“, „v návaznosti na“, „neváhejte mě kontaktovat“.

### Kontrola
Řekl bych to takhle dodavateli do telefonu?
```

Ve čtvrtek 15. 10. potřebuje investorovi napsat, že se betonáž posouvá. V
novém chatu bez souboru dostane e-mail, který začíná „Dovolte mi Vás informovat o
aktuálním vývoji“ a nový termín má až ve třetím odstavci. Se souborem e-mail
začíná větou „Betonáž se posouvá o týden, na čtvrtek 22. 10.“ a končí tím, co
Martin od investora potřebuje do pátku. Martin změní jedno slovo a e-mail
odešle.
## Když se zaseknete

- **Pravidla jsou obecná, třeba „píše přátelsky“:** napište AI: „Ke každému
  pravidlu dej větu z mých textů, ze které vychází, a pravidla bez věty
  smaž.“
- **Text se souborem pořád nezní jako vy:** označte větu, kterou byste
  napsali jinak, připište svou verzi a požádejte AI, ať podle rozdílu doplní
  pravidlo do `tone-of-voice.md`.
- **Nemáte dost povedených textů:** stačí tři. Pomůžou i e-maily, které jste
  po AI přepsali: dejte AI její verzi i tu svou a rozdíl ukáže váš styl
  nejlíp.
- **Soubor nejde stáhnout, nebo ho AI ve složce nepoužívá:** v chatu napište
  „Dej mi `tone-of-voice.md` jako soubor ke stažení.“ Když to chat neumí,
  přepněte do [Cowork nebo Code](card:when-chat-is-not-enough). Tam napište
  „Přečti si `AGENTS.md` a zařiď, ať ho čteš na začátku každé práce sama.“
## Co bude hotové

Máte soubor `tone-of-voice.md` s pravidly vašeho stylu a třemi ukázkami. V
Cowork nebo Code leží ve složce a pravidlo v `AGENTS.md` zařídí, že se jím AI
řídí sama; z chatu ho máte stažený nebo uložený v nastavení nástroje. V
novém chatu jste
viděli stejný e-mail bez souboru a s ním a ten druhý zněl jako od vás.
## Co dál

Když píšete jen v běžném chatu, vložte soubor do
[projektu s podklady a pokyny](card:asistent) a AI ho bude mít v každém chatu
toho projektu. Než text pošlete ven, projděte ho s AI podle karty
[Zkontrolujte výstup AI](card:kontrola-vysledku).
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Skill

**Co to je:** Opakovaně použitelná procedura pro určitý typ úkolu. Může obsahovat instrukce, pravidla, příklady, šablony a další potřebné zdroje. Způsob vytvoření a spuštění se liší podle nástroje.

**Co to není:** Není to obecná role asistenta ani jedna povedená konverzace uložená beze změny.

**Proč to student potřebuje:** Pomáhá převést osvědčený postup do stabilní podoby, kterou lze konzistentně použít znovu.

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
