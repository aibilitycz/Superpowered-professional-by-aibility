# Nastavte workflow přes víc aplikací: AI za vás přenese data

Data, která přepisujete mezi aplikacemi, třeba přihlášky z e-mailu do tabulky, přenese AI sama.

## Nastavte workflow přes víc aplikací: AI za vás přenese data

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s daty, která přepisujete ručně.
## K čemu se hodí

Za týden vám přišlo 23 přihlášek na místo asistentky výroby a do pátku má
manažer výroby dostat jejich seznam. Každou přepisujete do tabulky, uchazeči
odpovídáte, že ji máte, a u patnácté zjistíte, že jste jeden telefon zapsali s
chybou.

Takové práci se říká [workflow](glossary:workflow) přes víc aplikací a AI ji
udělá celou: přečte e-maily, údaje zapíše do tabulky a z tabulky připraví
koncepty odpovědí.
## Co si připravit

- práci, při které přepisujete data, třeba přihlášky z e-mailu do tabulky,
- přístup k oběma aplikacím; ve firemním účtu propojení s AI někdy schvaluje
  správce,
- AI v režimu Cowork nebo Code; kde ho najdete, ukazuje blok „Ve vašem
  nástroji“,
- složku na zadání pro příště, třeba novou prázdnou `Nábor`.
## Jak na to

1. Otevřete AI v režimu Cowork nebo Code ve své složce a v novém chatu vložte
   prompt. Za řádek „Zadání:“ napište jednou větou, odkud data bere, kam je
   zapíše a co následuje.
2. AI připojí aplikace, které chybí; přihlášení potvrdíte sami. Pak udělá
   celou práci a e-maily uloží jen jako koncepty, vy se zatím věnujete něčemu
   jinému.
3. Dva tři záznamy v cílové aplikaci porovnejte se zdrojem a koncepty
   odešlete. Co má AI příště udělat jinak, jí napište a ona to doplní do
   zadání.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce, a za poslední řádek napište svou práci:

Udělej za mě práci, při které ručně přepisuju data z jedné aplikace do druhé. Zadání je na posledním řádku.

Nejdřív zjisti, do kterých aplikací ze zadání se dostaneš a jestli do cílové aplikace umíš zapisovat. Použij konektory, které tady máš. Když některý chybí nebo umí jen číst, připoj aplikaci sám, třeba přes službu Composio. Kde musím něco udělat já, třeba se přihlásit, řekni mi přesně, kam kliknout, a počkej. Když tady nejde zapisovat do aplikací nebo ukládat soubory do složky, řekni mi to hned a poraď, kam přepnout.

Pak udělej celou práci. Projdi zdroj, vytáhni z něj údaje a zapiš je do cílové aplikace. Když tabulka nebo seznam ještě neexistuje, založ ho a sloupce navrhni podle zadání. Údaj, který ve zdroji chybí, nedomýšlej: pole nech prázdné a záznam označ. Když po zápisu následují e-maily nebo zprávy, ulož je jako koncepty, odešlu je sám.

Potom zapiš zadání pro příště do souboru postupy-mezi-aplikacemi.md ve složce, ve které pracuješ. Pod nadpis ### s názvem práce napiš, odkud data bereš, kam je zapisuješ, které údaje, co následuje a jak poznáš záznamy, které už jsou hotové. Když soubor existuje, připiš práci na konec.

Na konci mi napiš, kolik záznamů jsi přenesl, kde je najdu, které jsi nezvládl a proč a kde je uložené zadání. Až výsledek projdu a řeknu ti, co udělat jinak, oprav to a doplň to do zadání.

Zadání:

## Ve vašem nástroji

### Microsoft Copilot

Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (přepínač Cowork
nahoře vedle Chat), Outlook čte rovnou. Excel z OneDrivu nebo SharePointu
přiložte tlačítkem +, novou tabulku Cowork založí sám. Složku nepotřebujete,
zadání pro příště Cowork uloží jako skill; naplánované úlohy jsou na stránce
Automations. CRM a jiné aplikace přidáte přes Browse plugins, pokud je správce
povolil.

### ChatGPT

Režim Code je v ChatGPT Codex v aplikaci ChatGPT pro počítač: zvolte Codex,
New chat a otevřete složku (open a folder). Tabulku z OneDrivu mějte ve
složce, kterou OneDrive synchronizuje do počítače, a Codex do ní zapíše přímo.
Outlook připojíte v nastavení pod Plugins; když ve firemním účtu chybí, zapíná
ho správce. Naplánované úlohy jsou v levém panelu pod Scheduled.

### Claude

V aplikaci Claude pro počítač otevřete Cowork nebo Claude Code a vyberte
složku; obojí je v placených tarifech. Konektory najdete v levém panelu v
Customize, Connectors, ty chybějící AI připojí sama. Naplánované úlohy jsou v
Cowork v levém panelu pod Scheduled.

### Gemini

Opakovanou práci mezi aplikacemi Google postaví Workspace Studio
(`studio.workspace.google.com`): zvolte Describe it with AI a popište ji
jednou větou. Test run provede skutečné kroky, Turn on postup zapne a ten pak
běží sám. Bez Studia napište v aplikaci Gemini „@Gmail vypiš přihlášky z
tohoto týdne jako tabulku“ a uložte ji tlačítkem Export to Sheets.
## Co je workflow přes víc aplikací

Workflow je anglické slovo pro pracovní postup o několika krocích, ve kterém
je výsledek jednoho kroku vstupem dalšího. Stejně jako přihlášky přenese AI
poptávky z webového formuláře do CRM, tedy systému, ve kterém vedete
zákazníky, nebo z 33 e-mailů od klienta sepíše do tabulky všech 27 otázek, na
které ještě nedostal odpověď.

Konektor, přes který AI do aplikace vstupuje, v režimu Cowork nebo Code
připojí AI sama, jak ukazuje karta [Připojte si konektor](card:plugin-connector);
v běžném chatu ho zapnete v nastavení. Podle toho, co
konektor umí, AI v aplikaci jen čte, nebo do ní i zapisuje.

Když pro aplikaci konektor nemáte nebo umí jen číst, použije AI službu
Composio. Přes ni se napojí na víc než tisíc aplikací, třeba na Outlook,
Gmail, Excel, Google Tabulky, Airtable nebo CRM. V režimu Cowork nebo Code ji
AI nastaví sama. Vy si založíte účet a ke každé aplikaci potvrdíte přístup
zvlášť, takže Composio vidí jen aplikace, které jste potvrdili. Základní účet
je zdarma a platební kartu nechce. Ve firemním účtu se před připojením
zeptejte IT, jestli ho smíte použít.

`postupy-mezi-aplikacemi.md` je obyčejný textový soubor se zadáními vašich
prací mezi aplikacemi. Každá práce v něm má vlastní nadpis, takže příště AI
napíšete jen její název a název souboru. Koncovka `.md` znamená, že je psaný
v [Markdownu](glossary:markdown), jednoduchém zápisu, ve kterém mřížky `###`
na začátku řádku označují nadpis.
## Ať se práce spouští sama

Práce, která se opakuje každý den nebo týden, se může spouštět sama. Vložte
do AI, která umí naplánované úlohy, tohle zadání, jen název práce změňte na
svůj, a požádejte ji, ať z něj naplánovanou úlohu založí. Kde je ve svém
nástroji najdete, ukazuje blok „Ve vašem nástroji“.

```text
Každý pracovní den v 8:00 udělej práci „Přihlášky do tabulky“ podle souboru postupy-mezi-aplikacemi.md. Zpracuj jen to, co přibylo od posledního spuštění. Ve shrnutí mi napiš, kolik záznamů přibylo a kolik konceptů čeká ve schránce. Když nic nepřibylo, nic nepiš.
```

Úloha čte soubor ve složce v počítači, takže poběží, jen když je počítač
zapnutý a aplikace s AI otevřená.
## Příklad

Lucie z personálního oddělení strojírenské firmy hledá asistentku výroby. Od
5. do 9. 10. 2026 jí přišlo 23 přihlášek e-mailem. V pondělí 12. 10. otevře
AI v režimu Cowork ve složce `Nábor asistentky`, vloží prompt a za poslední
řádek napíše:

```text
Z e-mailů s přihláškou na místo asistentky výroby, které přišly od 5. 10., zapiš do tabulky Uchazeči v Excelu na SharePointu jméno, telefon, praxi v letech, možný nástup a odkaz na e-mail. Každému uchazeči připrav koncept odpovědi, že přihlášku máme a ozveme se do 10 pracovních dnů.
```

AI si připojí Outlook a Excel, Lucie potvrdí přihlášení ke svému
firemnímu účtu a AI projde 23 e-mailů. Pak vrátí:

```text
Přeneseno 23 přihlášek do tabulky Uchazeči.
- 21 záznamů je kompletních.
- 2 přihlášky neuvádějí praxi, řádky jsou v tabulce označené žlutě.
- 23 konceptů odpovědi čeká v Outlooku mezi koncepty.
Zadání je uložené v postupy-mezi-aplikacemi.md pod nadpisem Přihlášky do tabulky.
```

Lucie otevře tabulku a u dvou uchazečů porovná telefon a praxi s jejich
e-mailem; sedí. Pak Lucie AI napíše: „Přidej sloupec, odkud se o místě
dozvěděli, a u neúplných přihlášek se v odpovědi zeptej na praxi.“ AI tabulku
i dva koncepty doplní a zadání v souboru upraví takhle:

```text
### Přihlášky do tabulky
- Odkud: e-maily s přihláškou na otevřené místo.
- Kam: tabulka Uchazeči v Excelu na SharePointu, jeden řádek na uchazeče.
- Údaje: jméno, telefon, praxe v letech, možný nástup, odkud se o místě dozvěděl, odkaz na e-mail.
- Co následuje: koncept odpovědi, že přihlášku máme a ozveme se do 10 pracovních dnů. Když chybí praxe, v odpovědi se na ni zeptat.
- Hotové záznamy: e-mail, který už má řádek v tabulce, znovu nezpracovávat.
```

Koncepty Lucie projde v Outlooku a odešle. Když ve čtvrtek přijdou další čtyři
přihlášky, napíše jen „Udělej přihlášky do tabulky podle
`postupy-mezi-aplikacemi.md`“ a AI zpracuje jen ty čtyři nové.
## Když se zaseknete

- **AI se do aplikace nedostane:** zeptejte se jí, jestli pro aplikaci
  existuje konektor. Když ano a ve firemním účtu ho nejde zapnout, AI napíše
  krátkou žádost správci. Když neexistuje, nechte AI připojit aplikaci přes
  Composio; ve firemním účtu se předtím zeptejte IT.
- **AI aplikaci čte, ale nezapíše do ní:** konektor umí jen číst. V režimu
  Cowork nebo Code napište AI, ať aplikaci připojí přes Composio. Z běžného
  chatu přepněte do [Cowork nebo Code](card:when-chat-is-not-enough).
- **Údaje v cíli nesedí se zdrojem:** ukažte AI jeden špatný záznam a řekněte,
  kde správný údaj najde. Ať opraví všechny podobné záznamy a pravidlo doplní
  do zadání.
- **Záznamy jsou v tabulce dvakrát:** řekněte AI, ať duplicity smaže a do
  zadání doplní, podle čeho pozná hotové záznamy, třeba podle odkazu na
  e-mail.
## Co bude hotové

Data, která byste jinak přepisovali ručně, jsou v cílové aplikaci, dva tři
záznamy jste porovnali se zdrojem a koncepty jste prošli a odeslali. Zadání s
vašimi úpravami leží v `postupy-mezi-aplikacemi.md`, takže příště práci
spustíte jednou větou.
## Co dál

Když má po přenosu dat následovat další AI práce, třeba z tabulky uchazečů
podklad pro pohovory, přidejte ji do zadání a celý postup si
[uložte jako skill](card:create-skill-from-proven-process). Když chcete, aby
naplánovaná práce hlídala vlastní chyby a hlásila je, nastavte ji jako
[naplánovanou úlohu](card:recurring-ai-task).
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## AI workflow

**Co to je:** Opakovatelný průchod několika navazujícími kroky, ve kterém výstup jednoho kroku tvoří vstup dalšího. Jednotlivé kroky mohou provádět lidé, AI nebo různé nástroje.

**Co to není:** Není automaticky automatizace ani agent. Kroky mohou být řízené člověkem a předávání může probíhat mezi různými prostředími.

**Proč to student potřebuje:** Pomáhá spojit jednotlivě zvládnuté AI úkoly do postupu, který lze otestovat, zlepšovat a později případně automatizovat.

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
