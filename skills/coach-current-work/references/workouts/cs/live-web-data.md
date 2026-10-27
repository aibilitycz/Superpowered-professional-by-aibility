# Nechte AI stáhnout živá data: aktuální čísla se zdrojem a datem

Aktuální čísla o firmách, konkurenci nebo trhu AI stáhne z webu sama a u každého uvede zdroj a datum.

## Nechte AI stáhnout živá data: aktuální čísla se zdrojem a datem

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s jednou otázkou, ke které chybí čísla.
## K čemu se hodí

Ve čtvrtek podepisujete smlouvu s novým dodavatelem a chcete vědět, jak je
firma velká, jestli roste a nemá potíže. Chat vám napíše obecný odstavec z
jejího webu a údaje z rejstříků pak půl hodiny dohledáváte sami.

Pomůže, když AI čísla stáhne sama přímo ze zdroje, ke každému napíše odkaz a
datum a postup si uloží, takže dalšího dodavatele prověříte jednou větou.
## Co si připravit

- otázku z práce, ke které potřebujete aktuální čísla, a co podle nich rozhodnete,
- AI, kterou v práci používáte; kde v ní začít, ukazuje blok „Ve vašem nástroji“,
- AI v [režimu](glossary:workmode) Cowork nebo Code, jen když běžný chat data nenajde.
## Jak na to

1. Napište AI, o čem čísla potřebujete a co podle nich rozhodnete. AI najde,
   kde data opravdu jsou, a stáhne je sama. Když je potřeba přihlášení nebo
   správce IT, řekne vám to.
2. Otevřete odkaz u čísla, na kterém závěr nejvíc stojí, a zkontrolujte, že ho
   zdroj opravdu uvádí. Když nesedí, napište to AI a ať tabulku opraví.
3. V novém chatu zadejte stejnou úlohu jednou větou, třeba pro jinou firmu.
   V režimu Cowork nebo Code otevřete nový chat ve stejné složce.

Do tabulky patří jen čísla, podle kterých se rozhodnete.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte, a za
poslední řádek napište svou otázku:

Potřebuju aktuální data z webu k úkolu, který právě řeším. Co potřebuju a k čemu, je na posledním řádku.

Nejdřív zjisti, kde ta data opravdu jsou: veřejný rejstřík nebo statistika, web firmy, pracovní inzeráty, knihovna reklam, nástroj s hledaností klíčových slov nebo profil na sociální síti. Když existuje přímý zdroj, ber čísla z něj; články, které je opisují, použij jen tam, kde přímý zdroj chybí.

Data stáhni sám. Veřejné stránky přečti přes vyhledávání na webu. Když jsou data v nástroji, kam mám přístup v prohlížeči (třeba plánovač klíčových slov nebo knihovna reklam), a umíš ovládat prohlížeč, projdi ho tam. Když data leží v databázi, ke které potřebuješ datový konektor (MCP server), použij ten, který tu máš. Když žádný nemáš a umíš ho tady připojit, připoj ho; kde se musím přihlásit, řekni mi přesně kde a počkej. Když ho připojit neumíš, napiš mi, který zdroj by se hodil a kdo ho může zapnout, a zatím vrať, co zjistíš z veřejného webu. Když je zdroj placený, řekni mi cenu dřív, než ho použiješ.

Výsledek dej do tabulky se sloupci údaj, číslo, odkaz na zdroj a datum, ke kterému číslo platí. Co nenajdeš, označ jako chybějící a nic neodhaduj. Pod tabulku napiš dvěma větami, co z čísel plyne pro můj úkol, a které číslo mám ověřit ve zdroji a kde přesně ho tam najdu.

Když pracuješ ve složce, ulož tabulku nahoru do souboru zive-data.md ve složce projektu pod nadpis s dnešním datem a názvem úlohy; když soubor neexistuje, založ ho. Nakonec ulož postup jako skill: odkud data bereš, jak je stahuješ a jak vypadá tabulka, ať mi příště stačí jedna věta, třeba „stáhni stejná data pro jinou firmu“. Kde skill uložit nejde, ulož postup do paměti nebo vlastních pokynů tohoto nástroje.

Co potřebuju a k čemu:

## Ve vašem nástroji

### Microsoft Copilot

Prompt vložte do Copilot Chat na `copilot.cloud.microsoft`; řádky o souboru
a skillu přeskočí. Když v odpovědi chybí odkazy na weby, zapněte vyhledávání v
Settings, Personalization, a když nejde, vypnul ho správce. Postup si
zapamatuje po větě „Zapamatuj si tento postup“, Cowork ho uloží jako skill a
úlohy plánuje na stránce Automations. Placená data přinese Copilot
konektor od správce.

### ChatGPT

Prompt vložte do běžného chatu; řádky o souboru a skillu přeskočí. ChatGPT
hledá na webu sám, a když u čísel chybí odkazy, napište / a vyberte Search.
Postup si zapamatuje po větě „Zapamatuj si tento postup“; jestli paměť máte,
uvidíte v Settings, Personalization. Na veřejné rejstříky konektor
nepotřebujete, na placené databáze ho pod Plugins přidává správce a
naplánované úlohy jsou pod Scheduled.

### Claude

Prompt vložte do Cowork ve složce projektu nebo do chatu; když u čísel chybí
odkazy, zapněte Web search pod +. Knihovnu reklam nebo Plánovač klíčových slov
projde Cowork ve vašem Chromu přes rozšíření Claude in Chrome. Datový konektor
v tarifech Team a Enterprise přidává vlastník organizace (Organization
settings, Connectors).
Postup Claude uloží jako skill, úlohy jsou pod Scheduled.

### Gemini

Prompt vložte do běžného chatu; Gemini hledá Googlem sám a řádky o souboru a
skillu přeskočí. Vlastní datový konektor s pracovním účtem nepřidáte, proto
data ze specializovaných databází nechte stáhnout AI v režimu Cowork nebo
Code, nebo požádejte IT. Postup si nechte uložit jako skill (Customize,
Skills) a naplánované úlohy najdete pod Scheduled.
## Co jsou živá data a datový konektor

Živá data jsou čísla, která se mění každý den nebo týden, třeba tržby a
insolvence firmy nebo reklamy, které má teď spuštěné konkurence. AI je sama
od sebe nezná, protože se učila na starších datech, a bez stažení je jen
odhaduje. Veřejné stránky,
třeba obchodní rejstřík nebo web firmy, přečte přes vyhledávání na webu. Když
potřebujete zprávu z desítek zdrojů se srovnáním možností, použijte
[Deep Research](card:deep-research).

Část dat na běžných stránkách není. Hledanost slov, tedy kolik lidí je
měsíčně hledá, nebo návštěvnost webu konkurence leží v databázích
specializovaných nástrojů a AI se k nim dostane přes datový konektor. V nastavení se mu často říká MCP server; [MCP](glossary:mcp) je
technický standard, přes který se AI připojuje k aplikacím a zdrojům dat.
Konektor obvykle potřebuje účet u poskytovatele dat a některé zdroje se platí
za každý dotaz. Když k takovému nástroji máte přístup v prohlížeči, třeba k
Plánovači klíčových slov v Google Ads, AI ho projde přes
[ovládání prohlížeče](card:browser-control) i bez konektoru. Jinak vám tyto
údaje označí jako chybějící a napíše, kdo by konektor mohl zapnout.

Postup si AI uloží jako [skill](glossary:skill), tedy návod, který si sama
najde, když příště zadáte podobnou úlohu. Výsledky ukládá do `zive-data.md`,
obyčejného textového souboru ve složce projektu, kde je nejnovější stažení
nahoře.
## Ať se data stahují sama

Údaje, které sledujete pravidelně, třeba insolvenci u klíčových dodavatelů
nebo reklamy konkurence, může AI stahovat každý týden sama a hlásit vám jen
změny. Vložte do AI, která umí naplánované úlohy, tohle zadání a požádejte ji,
ať z něj naplánovanou úlohu založí. Kde je ve svém nástroji najdete, ukazuje
blok „Ve vašem nástroji“.

```text
Každé pondělí v 8:00 stáhni podle uloženého postupu stejná data jako minule a porovnej je s posledním stažením v zive-data.md, nebo s minulým výsledkem této úlohy. Když pracuješ se souborem, připiš nová data nahoru pod dnešní datum. Mně napiš jen, co se změnilo a co to znamená pro můj úkol; když se nic podstatného nezměnilo, stačí jedna věta.
```

Když úloha pracuje se soubory ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Lucie řídí nákup v logistické firmě a ve čtvrtek 22. 10. 2026 podepisuje
rámcovou smlouvu s novým dopravcem. V pondělí za poslední řádek promptu
napíše:

```text
Autodoprava Lipan, s.r.o.: jak dlouho firma existuje, jaké má tržby a jestli nemá insolvenci nebo potíže s DPH. Ve čtvrtek s nimi podepisuji rámcovou smlouvu na rozvoz.
```

AI projde obchodní a insolvenční rejstřík a registr plátců DPH. Do
`zive-data.md` zapíše:

```text
### 2026-10-19: Autodoprava Lipan, s.r.o., před podpisem 22. 10.
| Údaj | Číslo | Zdroj | Platí k |
|---|---|---|---|
| Firma vznikla | 2014 | or.justice.cz, výpis z obchodního rejstříku | 19. 10. 2026 |
| Tržby | 86 mil. Kč, rok předtím 79 mil. Kč | or.justice.cz, účetní závěrka ve sbírce listin | rok 2025 |
| Insolvence | žádná | isir.justice.cz | 19. 10. 2026 |
| Nespolehlivý plátce DPH | ne | registr plátců DPH | 19. 10. 2026 |
| Počet vozidel | chybí, žádný zdroj ho neuvádí | | |

Tržby vzrostly o 9 % a v rejstřících firma nemá žádný problém. Ověřit: tržby ve výkazu zisku a ztráty v účetní závěrce, řádek Tržby z prodeje výrobků a služeb.
```

Lucie otevře účetní závěrku z odkazu, ve výkazu zisku a ztráty najde řádek s
tržbami a číslo sedí. O týden později v novém chatu napíše jen „Prověř stejně
dopravce, se kterým jednáme v úterý“ a dostane tabulku ve stejném tvaru.
Kolega z marketingu stejným promptem stahuje reklamy konkurence a hledanost
slov přes datový konektor, který mu zapnul správce.
## Když se zaseknete

- **AI napíše čísla bez odkazu nebo „přibližně“:** nehledala na webu a
  odhaduje z paměti. Zapněte vyhledávání podle bloku „Ve vašem nástroji“ a
  napište: „Ke každému číslu dej odkaz na zdroj a datum; co nenajdeš, označ
  jako chybějící.“
- **AI odpoví, že k datům nemá přístup:** data jsou v databázi a AI potřebuje
  datový konektor. Ať vám napíše krátkou žádost pro správce firemního účtu
  AI: který zdroj a k čemu ho potřebujete. V režimu Code ho AI připojí sama;
  jak do něj přepnout, ukazuje karta [Chat, Cowork nebo Code](card:when-chat-is-not-enough).
- **Údaj je jen v PDF nebo na stránce s filtry:** napište AI, ať PDF otevře
  přímo z odkazu. Stránku, kterou je potřeba proklikat, třeba knihovnu
  reklam Meta, nechte AI projít v prohlížeči, jak ukazuje karta
  [Browser control](card:browser-control).
- **V novém chatu AI postup nenajde:** zeptejte se, co si o postupu pamatuje
  a kam ho uložila. Když paměť nemáte, ať ho v režimu Cowork nebo Code uloží
  jako skill, a nový chat pak otevřete ve stejné složce.
## Co bude hotové

Máte tabulku aktuálních čísel k vašemu úkolu, u každého odkaz a datum, a
číslo, na kterém závěr stojí, jste ověřili ve zdroji. AI má postup uložený jako
skill nebo v paměti a v novém chatu podle něj stáhla data na jednu větu.
## Co dál

Když chcete, aby pravidelný přehled chodil spolehlivě a sám hlásil chyby,
pokračujte k [naplánované úloze](card:recurring-ai-task). Jak z jiné povedené
práce udělat [skill](card:create-skill-from-proven-process), ukazuje
samostatná karta.
## MCP

**Co to je:** Otevřený technický standard (Model Context Protocol), přes který se AI připojuje k aplikacím a zdrojům dat. Aplikace nebo poskytovatel dat nabídne MCP server a AI přes něj čte data nebo provádí povolené akce. V nastavení nástrojů se takové připojení často jmenuje konektor nebo MCP server.

**Co to není:** Není to samostatná aplikace ani AI model. Samotný standard nic nestáhne; potřebuje server od poskytovatele, často účet u něj a oprávnění, které zapne člověk nebo správce.

**Proč to student potřebuje:** Pomáhá poznat, kdy AI dosáhne na data mimo veřejný web a kdo musí připojení zapnout.

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
