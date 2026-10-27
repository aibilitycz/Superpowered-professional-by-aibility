# Zpracujte přepis schůzky: rozhodnutí a úkoly k projektu

AI z přepisu schůzky uloží k projektu krátký zápis s rozhodnutími a úkoly a další schůzky zpracuje stejně.

## Zpracujte přepis schůzky: rozhodnutí a úkoly k projektu

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s přepisem jedné schůzky.
## K čemu se hodí

Ve středu jste měli hodinovou poradu k novému ceníku s financemi a
marketingem a po ní máte přepis na dvacet stran. V pátek se vás kolega z
obchodu ptá, jakou nejvyšší slevu smí velkým zákazníkům nabídnout, a vy si
nejste jistí, jestli 8 % zaznělo jako dohoda, nebo jen jako návrh.

Krátký zápis s rozhodnutími a úkoly najdete vy, kolega i nový chat s AI
ve složce projektu za minutu a přesná slova zůstanou v přepisu hned vedle.
## Co si připravit

- složku projektu, ke kterému schůzka patří,
- přepis jedné schůzky z posledních dní jako soubor nebo text,
- AI v [režimu Cowork nebo Code](glossary:workmode), nebo projekt v AI, kterou používáte.
## Jak na to

1. Otevřete AI v režimu Cowork nebo Code ve složce projektu, vložte prompt a
   přidejte přepis. AI uloží přepis do `prepisy`, zápis do `schuzky.md` a
   pravidlo do `AGENTS.md`.
2. U bodu, na kterém nejvíc záleží, napište „Ukaž mi přesné znění z
   přepisu.“ Když jde o peníze nebo termín, najděte ten čas v přepisu
   (Ctrl+F) a přečtěte si ho sami.
3. V novém chatu ve stejné složce se zeptejte „Kdo má co udělat a do kdy?“
   AI by měla odpovědět podle zápisu.

Návrhy, které nikdo nepřijal, do zápisu nepatří.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code, otevřené ve vaší složce:

Zpracuj přepis schůzky k tomuto projektu. Přepis ti přikládám, nebo ti napíšu, kde v počítači leží. Když v tomhle prostředí nemůžeš ukládat soubory do složky projektu, řekni mi to hned, ať můžu přepnout do Cowork nebo Code.

Přepis ulož beze změny do podsložky prepisy ve složce projektu a pojmenuj ho datem a tématem schůzky, třeba 2026-10-07-porada-cenik. Soubor tam přesuň tak, jak je, i s jeho příponou, třeba .docx. Když jsem ti přepis vložil jako text, ulož ho jako textový soubor a nic v něm nezkracuj ani nepřepisuj, ať v něm zůstanou časy a jména u promluv.

Pak z přepisu napiš krátký zápis a připiš ho nahoru do souboru schuzky.md ve složce projektu. Když soubor neexistuje, založ ho. Zápis má tento tvar:

### RRRR-MM-DD: téma schůzky
Kdo byl: jména.
Rozhodnutí:
- co se rozhodlo a od kdy to platí.
Úkoly:
- kdo, co a do kdy.
Otevřené otázky:
- co zůstalo nerozhodnuté a kdo to zjistí.
Přepis: odkaz na soubor v prepisy.

Do rozhodnutí a úkolů dej jen to, na čem se lidé na schůzce domluvili. Návrhy, které nikdo nepřijal, vynech. Když u úkolu nezazněl člověk nebo termín, napiš „neuvedeno“. Ke každému rozhodnutí a úkolu připiš do závorky čas nebo místo v přepisu, kde zazněl.

Nakonec přidej do souboru AGENTS.md ve složce projektu pravidlo: „Když dostaneš přepis schůzky, ulož ho beze změny do prepisy a nahoru do schuzky.md připiš zápis ve stejném tvaru jako předchozí: jen to, na čem se lidé domluvili, u každého bodu čas v přepisu a chybějící údaj jako ‚neuvedeno‘. Na otázky k úkolům a rozhodnutím odpovídej podle schuzky.md.“ Když AGENTS.md neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.

Na konci mi ukaž zápis a napiš, kam jsi co uložil.

## Ve vašem nástroji

### Microsoft Copilot

Přepis z Teams je na kartě Recap v chatu schůzky. K projektu
zápis uloží Cowork vedle přepínače Chat, když ho správce zapnul: složku z
OneDrivu připojíte přes Add attachments a na konec promptu připíšete
„Zápisy veď v dokumentu Word.“ Bez Cowork prompt nepoužijete: založte
notebook (Notebooks › New notebook) a větu z bloku Když nemáte Cowork ani
Code dejte do More options › Instructions.

### ChatGPT

Se složkou pracuje Codex: v aplikaci ChatGPT pro počítač přepněte na Codex,
zvolte otevření složky (open a folder) a vložte prompt; naplánované úlohy
najdete pod Scheduled. Bez Codexu je projektem projekt v ChatGPT: New
project, přepisy přes Add source, instrukce v ••• › Project settings a kolegy
pozvete přes Share.

### Claude

Cowork je v aplikaci Claude pro počítač v placených tarifech: složku
vyberete při zadávání úkolu a odkaz na `AGENTS.md` si AI zapíše do instrukcí
složky. Naplánované úlohy jsou v levém panelu pod Scheduled a běží jen při
zapnutém počítači. Bez Cowork je projektem projekt v Claude: New Project,
přepisy přes +, instrukce v Set project instructions a kolegy pozvete přes
Share project.

### Gemini

Přepis z Google Meet je jako dokument v Disku organizátora ve složce Meet
Recordings; Take notes for me zatím česky neumí. Se složkou v počítači
Gemini nepracuje, projektem je Gem: Gems › New Gem, přepisy přes Knowledge ›
Add from Drive. Zápis uložíte přes Share & export › Export to Docs a Gem s
kolegy sdílíte přes Share.
## Když nemáte Cowork ani Code

Bez režimu Cowork nebo Code zpracujete schůzky v projektu ve svém nástroji:
přepisy do něj přidáte a jeho instrukce platí pro každý chat v něm. Do
instrukcí projektu napište:

```text
Z každého přepisu napiš zápis: rozhodnutí, úkoly s člověkem a termínem a otevřené otázky. Jen to, na čem se lidé domluvili, u každého bodu čas v přepisu.
```

Po každé schůzce přidejte přepis do projektu a napište „Udělej zápis z
nového přepisu“. Na otázku „Kdo má co udělat?“ pak AI odpoví podle přepisů.
Kde projekt najdete, ukazuje blok Ve vašem nástroji, a jak
[přepnout do Cowork nebo Code](card:when-chat-is-not-enough), samostatná
karta.
## Co je přepis schůzky

Přepis je slovo od slova zapsaný text schůzky, obvykle s časem a jménem u
každé promluvy. Z hodinové porady vyjde na desítky stran. Udělá vám ho
nástroj, ve kterém schůzku nahráváte. Kde ho najdete v Teams a v Google
Meet, je v bloku „Ve vašem nástroji“. U dalších nástrojů:

- **Zoom:** najdete ho u záznamu v cloudu jako soubor s titulky `.vtt`,
  který AI přečte jako text. Až bude hotový, přijde vám e-mail.
- **Plaud**, nahrávací zařízení do kapsy: v aplikaci otevřete nahrávku a
  ikonou vpravo nahoře ji exportujete jako přepis v textu nebo ve Wordu.
- **tl;dv**, nahrávač online schůzek: na kartě přepisu ho zkopírujete
  tlačítkem pro kopírování a vložíte AI do chatu.

`schuzky.md` je obyčejný textový soubor ve složce projektu se zápisy ze
všech schůzek, nejnovější nahoře. Přípona `.md` znamená zápis v
[Markdownu](glossary:markdown), ve kterém mřížky `###` na začátku řádku
označují nadpis. V podsložce `prepisy` jsou celé přepisy, ke každé schůzce
jeden soubor.

`AGENTS.md` je soubor s pravidly pro AI ve stejné složce. AI v režimu
Cowork nebo Code si ho přečte na začátku každé práce, a kde to nástroj
potřebuje nastavit, zařídí to AI podle promptu. Po další schůzce pak stačí
přidat přepis do chatu ve složce projektu a napsat „Zpracuj schůzku podle
`AGENTS.md`“.
## Ať se schůzky zpracují samy

Když schůzky nahráváte často, stačí přepis stáhnout a zbytek udělá
naplánovaná úloha, kterou AI spustí každý pracovní den odpoledne. Najde
nové přepisy a každý zpracuje u správného projektu podle pravidla v
`AGENTS.md`. Zadání vložte do AI v režimu Cowork nebo Code a požádejte ji,
ať z něj naplánovanou úlohu založí; které nástroje to umějí, najdete v bloku
„Ve vašem nástroji“. Místo „Projekty“ napište složku, ve které máte projekty:

```text
Každý pracovní den v 17:00 projdi Stažené soubory a najdi v nich přepisy schůzek. U každého poznej podle názvu a obsahu, ke kterému projektu ve složce Projekty patří. Když už v souboru schuzky.md toho projektu zápis k té schůzce je, přepis přeskoč. Ostatní přesuň do podsložky prepisy toho projektu a zpracuj podle pravidla v jeho AGENTS.md. Když nevíš, kam přepis patří, nech ho na místě. Na konci mi napiš, které schůzky jsi zpracoval a u kterých přepisů nevíš, kam patří.
```

Úloha pracuje se soubory ve vašem počítači, takže poběží, jen když je
počítač zapnutý a aplikace otevřená.
## Příklad

Eva koordinuje zavedení nového ceníku pro velkoobchodní zákazníky. Ve
středu 7. 10. 2026 má online poradu s Martinem z financí a Petrou z
marketingu. Po poradě stáhne přepis, otevře AI ve složce `novy-cenik`,
vloží prompt a přetáhne přepis do okna. AI ho uloží jako
`prepisy/2026-10-07-porada-cenik.docx` a do `schuzky.md` připíše:

```text
### 2026-10-07: Porada k novému ceníku
Kdo byl: Eva, Martin (finance), Petra (marketing).
Rozhodnutí:
- Sleva pro velké odběratele bude nejvýš 8 %. (12:40)
- Nový ceník platí od 1. 1. 2027, zákazníci ho dostanou 1. 12. (31:05)
Úkoly:
- Martin spočítá marže pro nové ceny do 14. 10. (18:20)
- Petra připraví leták pro zákazníky, termín: neuvedeno. (35:50)
Otevřené otázky:
- Platí nový ceník i pro e-shop? Zjistí Eva s manažerkou e-shopu.
- Kdo pošle ceník obchodníkům? Na poradě to nikdo nepřevzal.
Přepis: prepisy/2026-10-07-porada-cenik.docx
```

Eva napíše „Ukaž mi přesné znění u slevy.“ AI vypíše větu z času 12:40,
ve které Martin 8 % odsouhlasil. V pátek se Eva v novém chatu ve stejné
složce zeptá, kdo má co udělat a do kdy. Dobrá odpověď zní: Martin
spočítá marže do 14. 10., u Petřina letáku termín chybí. Když se AI ptá, o
jakou poradu jde, nejspíš pracuje mimo složku projektu.
## Když se zaseknete

- **AI tvrdí, že zápis uložila, ale soubor `schuzky.md` ve složce není:**
  pracujete nejspíš v běžném chatu, který soubory měnit neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) a vyberte v něm složku
  projektu.
- **V zápisu je rozhodnutí, které jste neudělali:** AI vzala návrh za
  dohodu. Napište jí, co je jinak, ať zápis opraví a stejně projde ostatní
  body. Jak výsledek ověřit proti zdroji, ukazuje
  [Kontrola výsledku](card:kontrola-vysledku).
- **Přepis nemáte:** v Teams ho stahuje organizátor schůzky, požádejte ho
  o něj. Když schůzka nahraná nebyla, napište nebo nadiktujte AI, co si z
  ní pamatujete, a zápis vznikne stejně.
- **Příště AI pravidlo nepoužije:** napište „Zpracuj schůzku podle
  `AGENTS.md`“. Když to nepomůže, zkontrolujte, že `AGENTS.md` leží ve
  složce projektu a pravidlo v něm je.
## Co bude hotové

Máte zápis ze schůzky v `schuzky.md` ve složce projektu, celý přepis v
podsložce `prepisy` a v `AGENTS.md` pravidlo, podle kterého AI stejně
zpracuje každou další schůzku. Nejdůležitější bod jste ověřili podle
přesného znění z přepisu a v novém chatu jste si vyzkoušeli, že AI ze
zápisu ví, kdo má co udělat.
## Co dál

Z téhož přepisu vám AI připraví i jiný výstup než zápis, třeba brief pro
další poradu nebo odpověď klientovi. Stejně zpracuje i dlouhé vlákno
komentářů nebo e-mailů: místo přepisu jí dáte vlákno.
Pro schůzky u víc projektů si nechte z postupu udělat
[návod, který AI použije znovu](card:create-skill-from-proven-process).
Když mají zápisy dostávat i kolegové, pokračujte
[naplánovanou úlohou](card:recurring-ai-task).
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
