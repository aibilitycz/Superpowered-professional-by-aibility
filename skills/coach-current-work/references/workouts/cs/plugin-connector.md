# Připojte si konektor: AI pracuje přímo ve vašich aplikacích

AI sama projde vaši poštu a koncepty odpovědí uloží přímo do schránky.

## Připojte si konektor: AI pracuje přímo ve vašich aplikacích

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s pracovní poštou a kalendářem.
## K čemu se hodí

Před úterní poradou chcete vyřídit pět e-mailů, které čekají od minulého týdne.
Každý kopírujete do chatu a odpověď zpátky do pošty. U třetího zjistíte, že
termín, který AI navrhla, máte v kalendáři dávno obsazený.

Konektor je propojení AI s aplikací: AI přes něj čte poštu i kalendář, takže
nic nekopírujete a nenavrhne termín, který máte obsazený.
## Co si připravit

- přístup k pracovní poště a kalendáři; propojení s AI někdy zapíná správce,
- AI, kterou v práci používáte; kde má konektory, ukazuje blok „Ve vašem
  nástroji“,
- pro režim Cowork nebo Code složku na pravidla, třeba novou prázdnou `Pošta`.
## Jak na to

1. Vložte prompt. AI zjistí, jaké konektory pro poštu a kalendář má, dostupné
   připojí a u ostatních řekne, kam kliknout. Přihlášení potvrdíte sami.
2. AI vybere nejvýš pět e-mailů z posledního týdne, na které máte odpovědět
   vy; newslettery a kopie jen spočítá. Koncepty uloží do schránky, vy je
   projdete, upravíte a odešlete.
3. V novém chatu napište jen „Odpověz na nejnovější e-mail, který čeká na
   odpověď.“ AI by měla sama uložit koncept a ověřit termín v kalendáři.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Propoj se s mým pracovním e-mailem a kalendářem a rovnou v nich udělej první práci, ať do chatu nic nekopíruju.

Zeptej se mě, jaký e-mail a kalendář v práci používám. Pak zjisti, jaké konektory nebo pluginy pro ně tady máš. Když plugin pokryje víc mých aplikací najednou, dej mu přednost. Co můžeš připojit sám, připoj. Kde musím něco udělat já, třeba se přihlásit nebo povolit přístup, řekni mi přesně, kam kliknout, a počkej, až to udělám. Do pošty a kalendáře přistupuj jen přes konektory. Po připojení ověř, že konektor umí ukládat koncepty e-mailů. Když neumí, najdi jiný konektor nebo plugin. Když žádný nenajdeš, propoj poštu přes službu Composio, a když to tady nejde, řekni mi, kam přepnout.

Až bude všechno připojené, udělej tohle:
- Projdi poštu z posledních sedmi dní a vyber nejvýš pět e-mailů, na které jsem ještě neodpověděl a mám odpovědět, od nejnaléhavějšího. U každého uveď odesílatele, o co jde a do kdy odpovědět.
- Ke každému napiš odpověď a ulož ji jako koncept přímo do mé schránky. Když odpověď závisí na termínu, podívej se do kalendáře, kdy mám volno.
- Koncepty neodesílej, projdu je a odešlu sám.

Nakonec si ulož pravidlo pro příště: které aplikace máš připojené, že odpovědi na poštu ukládáš jako koncepty a termíny ověřuješ v kalendáři. Když pracuješ ve složce, zapiš ho do souboru AGENTS.md, a když soubor neexistuje, založ ho. Zařiď, ať si AGENTS.md v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. V běžném chatu si pravidlo ulož do paměti.

## Ve vašem nástroji

### Microsoft Copilot

Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (přepínač Cowork
nahoře vedle Chat); poštu a kalendář má připojené rovnou a složku nepotřebuje.
Odpovědi uloží mezi koncepty v Outlooku a pravidlo jako skill. Bez Cowork
připraví koncept i Copilot Chat, pravidlo si zapamatuje pod Personalization.
Naplánované úlohy jsou na stránce Automations.

### ChatGPT

Konektor pro Outlook nebo Gmail zapnete v nastavení pod Plugins, v novém chatu
přes + u pole pro zprávu. Koncepty ukládá v tarifech Plus, Pro, Business a
Enterprise; ve firmě zápis zapíná správce. Pravidlo si ChatGPT uloží do
paměti, Codex do `AGENTS.md`. Naplánované úlohy jsou pod Scheduled.

### Claude

Konektory najdete v levém panelu v Customize, Connectors, v novém chatu je
zapnete přes + u pole pro zprávu. Konektor Microsoft 365 ukládá koncepty, jen
když správce povolí zápis. V Cowork AI konektor připojí sama a pravidlo zapíše
do instrukcí složky. Naplánované úlohy jsou pod Scheduled.

### Gemini

V aplikaci Gemini napište @, vyberte Gmail i Kalendář a vložte prompt; na
nabídku Composia odpovězte „pokračuj jen s Gmailem a Kalendářem“. Gemini
e-maily najde a odpovědi navrhne, koncept ale uloží až Gemini v Gmailu přes
Ask Gemini vpravo nahoře. Pravidlo si nechte uložit jako skill (Customize,
Skills), naplánované úlohy jsou pod Scheduled.
## Co je konektor a plugin

Konektor je propojení AI s jednou aplikací. Podle toho, co umí, v ní AI jen
hledá a čte, nebo i zapisuje: uloží koncept e-mailu nebo založí schůzku v
kalendáři. Stejně připojíte i CRM, tedy systém, ve kterém vedete
zákazníky a obchody, nebo sdílený disk. V nastavení se konektoru někdy říká
MCP server; MCP je technický standard, přes který se AI připojuje k
aplikacím, a nic víc o něm vědět nemusíte.

Plugin je balíček pro určitou práci. Přidá najednou několik konektorů a
návody, podle kterých v nich AI pracuje, třeba pro obchod: CRM, e-mail a
postup, jak psát nabídku.

Když pro vaši aplikaci konektor neexistuje nebo poštu jen čte, použijte
Composio. Je to služba, přes kterou se AI napojí na víc než tisíc aplikací,
třeba na Outlook, Gmail nebo CRM, a v poště umí ukládat i koncepty odpovědí.
Nastavuje se v režimu Cowork nebo Code a AI to udělá sama; vy si jen založíte
účet v Composio a potvrdíte přístup k aplikacím. Základní účet je zdarma a
platební kartu nechce. Ve firemním účtu se před připojením zeptejte IT,
jestli ho smíte použít.

`AGENTS.md` je obyčejný textový soubor s pravidly pro AI ve složce, ve které
pracujete. AI v režimu Code si ho přečte na začátku každé práce, takže
připojené aplikace příště nemusíte vysvětlovat.
## Ať AI projde poštu sama

S připojeným e-mailem a kalendářem může AI každé ráno projít poštu za vás.
Stačí naplánovaná úloha, kterou AI spustí každý pracovní den ráno a koncepty
odpovědí vám nechá ve schránce. Vložte do AI tohle zadání a požádejte ji, ať
z něj naplánovanou úlohu založí. Kde naplánované úlohy ve svém nástroji
najdete, ukazuje blok „Ve vašem nástroji“.

```text
Každý pracovní den v 7:30 projdi přes konektor poštu, která přišla od posledního spuštění. Vyber e-maily, na které jsem ještě neodpověděl a mám odpovědět, od nejnaléhavějšího, a ke každému ulož do schránky koncept odpovědi. Termíny ověřuj v kalendáři. Když nepřišlo nic, na co je potřeba odpovědět, nic nepiš.
```
## Příklad

Jana koordinuje stěhování kanceláře do nové budovy. V pondělí 12. 10. ráno má
ve schránce 38 nepřečtených e-mailů. Po připojení Outlooku a kalendáře AI vrátí:

```text
Na co odpovědět (4 z 38 e-mailů)

1. Stěhovací firma: chce potvrdit stěhování 24. 10. Odpovědět dnes.
   Koncept: termín potvrzujeme, v kalendáři je ten den volno.
2. Petr z IT: ptá se, kdy může zapojit síť v novém patře. Odpovědět do středy.
   Koncept: navrhuji čtvrtek 15. 10. v 9:00, kdy je v kalendáři volno.
3. Dodavatel nábytku: potřebuje termín podpisu předávacího protokolu. Odpovědět do pátku.
   Koncept: protokol podepíšu při převzetí nábytku 22. 10.
4. Vedení: chce krátký stav projektu na páteční poradu.
   Koncept: stěhování 24. 10., síť 15. 10., nábytek 22. 10.

Koncepty jsou uložené ve schránce. Zbylých 34 e-mailů tvoří newslettery a kopie pro informaci.
```

Jana koncepty projde, u Petra změní čas na 10:00 a všechny čtyři odešle. Druhý
den ráno v novém chatu napíše jen „Odpověz na nejnovější e-mail, který čeká na
odpověď.“ AI najde dotaz recepce na počet parkovacích karet, termín předání
ověří v kalendáři a koncept uloží do schránky.
## Když se zaseknete

- **Konektor v nastavení chybí nebo nejde zapnout:** zeptejte se AI, jestli
  pro vaši aplikaci existuje. Když ano, ve firemním účtu ho nejspíš zapíná
  správce a AI mu napíše krátkou žádost: který konektor potřebujete a k čemu.
  Když neexistuje, propojte aplikaci přes Composio.
- **Konektor umí poštu jen číst:** v režimu Cowork nebo Code požádejte AI, ať
  poštu propojí přes Composio nebo najde jiný konektor, který umí ukládat i
  koncepty. Z běžného chatu přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough).
- **AI tvrdí, že poštu nevidí:** zkontrolujte, že je konektor v tomto chatu
  zapnutý; v ChatGPT a Claude přes tlačítko + u pole pro zprávu, v Gemini
  zmínkou @Gmail v každém novém chatu. Když je zapnutý, přihlášení nejspíš
  nedoběhlo nebo jste se přihlásili k jinému účtu. Nechte AI ověřit účet a
  připojte ho znovu.
- **AI v novém chatu koncept neuloží nebo termín neověří:** v režimu Cowork
  nebo Code napište: „Přečti si `AGENTS.md` a zařiď, ať ho čteš na začátku
  každé práce sama.“ V běžném chatu se AI zeptejte, jestli pravidlo má v
  paměti nebo v pokynech, a když ne, ať vám řekne, kam ho uložit.
## Co bude hotové

Máte k AI připojený e-mail a kalendář a odeslali jste odpovědi na
nejnaléhavější poštu z posledního týdne. AI má uložené pravidlo pro koncepty a
kalendář a v novém chatu jste si ověřili, že podle něj pracuje.
## Co dál

Když chcete, aby ranní průchod poštou běžel spolehlivě a sám hlásil chyby,
pokračujte k [naplánované úloze](card:recurring-ai-task). Když z
jedné práce vznikají dva navazující kroky, třeba z e-mailů tabulka a z tabulky
odpovědi, nastavte si [workflow přes víc aplikací](card:cross-app-workflow).
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
