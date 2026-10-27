# Udělejte si AI-WBS: plán projektu rozdělený mezi lidi a AI

AI rozepíše plán projektu, u každého kroku určí, jestli ho udělá člověk, nebo AI, a svůj první krok rovnou udělá.

## Udělejte si AI-WBS: plán projektu rozdělený mezi lidi a AI

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním projektem, který začíná.
## K čemu se hodí

Na poradě vám vedení svěří stěhování kanceláře do nové budovy. Stěhuje se
1. 2., v kalendáři máte zatím jedinou položku „stěhování“ a nevíte, co z
toho zvládne AI a kdy budete potřebovat kolegy z IT a provozu.

Plán, ve kterém u každého kroku stojí, kdo ho udělá a co z něj vznikne,
leží ve složce projektu, takže nový chat i kolega z něj poznají, co je
hotové a co přijde dál.
## Co si připravit

- složku projektu s podklady: zadání, e-mail od vedení nebo zápis z porady,
- pár vět o cíli projektu, termínu a lidech, kteří na něm pracují,
- AI v režimu Cowork nebo Code, která pracuje přímo se soubory ve vaší
  složce.
## Jak na to

1. Otevřete složku projektu v AI v režimu Cowork nebo Code (kde ho najdete,
   ukazuje blok „Ve vašem nástroji“), vložte prompt z AI cvičení a pod něj
   napište cíl, termín a lidi na projektu.
2. AI ukáže plán jako tabulku a otázky. Odpovězte, opravte sloupec „Kdo ho
   udělá“ a napište „Ulož to“: AI plán uloží, udělá svůj první krok a zapíše
   pravidlo do `AGENTS.md`.
3. Otevřete výsledek prvního kroku a zkontrolujte ho. Co nesedí, napište AI
   a ona to opraví v souboru i v plánu.

Jen s běžným chatem poradí část Když se zaseknete.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code, otevřené ve vaší složce:

Udělej pro tenhle projekt AI-WBS: plán celého projektu rozdělený mezi lidi a AI. Když nemáš přístup ke složce projektu a nemůžeš do ní sám ukládat soubory, řekni mi to hned, ať můžu přepnout do Cowork nebo Code.

Projdi podklady ve složce projektu a moje poznámky pod tímto zadáním. Když už ve složce plán projektu je, uprav ho a druhý nezakládej.

Rozepiš celý projekt od začátku po dokončení na pět až deset hlavních kroků. Každý krok končí něčím, co jde ukázat: soubor, seznam, rozhodnutí nebo objednávka. Pozdější kroky nevynechávej, jen je popiš stručněji. Seřaď kroky tak, aby co nejdřív vzniklo něco použitelného. Plán napiš jako tabulku se třemi sloupci:
- Krok: co se udělá.
- Kdo ho udělá: konkrétní člověk, nebo AI a jméno člověka, který výsledek zkontroluje.
- Co vznikne: konkrétní výsledek kroku.

Všechno, co jde připravit z podkladů, dej AI. Rozhodnutí, jednání s lidmi a kroky, při kterých se něco odesílá, zveřejňuje, podepisuje nebo platí, dej člověku. Když nevíš, kdo krok udělá, napiš otazník a jméno si nevymýšlej.

Ukaž mi plán a pod něj napiš všechny otázky, na které podklady neodpověděly a které by plán změnily. Počkej, až odpovím a plán opravím nebo potvrdím. Pak ho ulož jako plan-projektu.md do hlavní složky projektu a nahoru napiš název projektu, termín a dnešní datum. Když je ve složce README.md, přidej do něj řádek s odkazem na plán.

Hned potom udělej první krok, který je v plánu na tebe a máš k němu podklady. Vyber takový, který zvládneš během pár minut. Výsledek ulož do složky projektu, do sloupce Co vznikne u toho kroku připiš název souboru a slovo hotovo a řekni mi, co mám zkontrolovat.

Nakonec přidej do souboru AGENTS.md ve složce projektu pravidlo: „Před prací na projektu si přečti plan-projektu.md. Když je krok z plánu hotový, připiš do sloupce Co vznikne, kde je výsledek, a slovo hotovo.“ Když AGENTS.md neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.

Cíl, termín a kdo na projektu pracuje:

## Ve vašem nástroji

### Microsoft Copilot

Cowork je v Copilotu vedle přepínače Chat; když ho nevidíte, požádejte IT.
Pracuje se soubory na OneDrivu a SharePointu, tak mu napište, kde projekt je
a ať plán uloží jako tabulku Excel; v Cowork pod Customize, Preferences mu
nechte „Před prací na projektu si přečti plán.“ Bez Cowork platí bod „AI
plán do složky neuloží“ v části Když se zaseknete, s projektem v Notebooku
(Poznámkové bloky).

### ChatGPT

Se složkou pracuje Codex v aplikaci ChatGPT pro počítač: přepněte na Codex,
zvolte open a folder a vyberte složku projektu; programovat nemusíte. Codex
čte `AGENTS.md` sám a naplánovanou úlohu založí na požádání. Když Codex
nevidíte, požádejte správce o Allow members to use Codex locally, nebo
postupujte podle bodu o běžném chatu.

### Claude

V aplikaci Claude pro počítač zvolte Cowork a v poli pro zprávu Work in a
folder. Claude Code čte `AGENTS.md` sám, v Cowork si AI podle promptu zapíše
do instrukcí složky, ať ho čte. Naplánovanou úlohu založí AI na požádání a
přehled najdete v levém panelu pod Scheduled.

### Gemini

Aplikace Gemini s pracovním účtem se složkou v počítači nepracuje, a tak
postupujte podle bodu o běžném chatu: místo projektu použijte robota Gem a
tabulku s plánem uložte přes Exportovat do Tabulek. Se složkou pracuje
Gemini CLI, pokud má firma licenci Gemini Code Assist Standard nebo
Enterprise; `AGENTS.md` čte, jen když ho má v nastavení.
## Co je AI-WBS

AI-WBS je zkratka z anglického AI Work Breakdown Structure. Work Breakdown
Structure, tedy rozpad práce na části, používají projektoví manažeři už
desítky let. [AI-WBS](glossary:aiwbs) k tomu u každého kroku přidává
otázku, jestli ho udělá člověk, nebo AI. Za výsledek každého kroku odpovídá
člověk, i když ho připraví AI, a proto u kroků AI stojí i jméno toho, kdo
výsledek zkontroluje.

Plán je obyčejný textový soubor `plan-projektu.md` ve složce projektu.
Přípona `.md` znamená zápis v [Markdownu](glossary:markdown), který AI
snadno čte i upravuje. Otevřete ho v jakémkoli textovém editoru, a když ho
chcete poslat kolegům jako tabulku nebo dokument, stačí o to AI požádat.
Když má projekt [README](card:project-start-here), úvodní stránku projektu,
AI do něj přidá odkaz na plán.

`AGENTS.md` je soubor s pravidly pro AI ve stejné složce. AI si ho přečte na
začátku každé práce, takže plán zná, aniž byste jí ho připomínali; kde to
nástroj sám nedělá, zapíše si podle promptu pokyn do svého nastavení
složky. Když je složka sdílená s týmem, oba soubory uvidí celý tým a AI
kolegy si přečte stejná pravidla jako ta vaše.

Běžný chat plán do složky neuloží, protože do složek v počítači nevidí; když
nic jiného nemáte, poradí bod o běžném chatu v části Když se zaseknete. Když
projekt leží ve sdíleném úložišti v cloudu, stačí jeho složka
synchronizovaná do počítače.

Když se AI zeptá, jestli smí do složky ukládat soubory, povolte jí to.
## Ať plán nezastará

Pravidlo v `AGENTS.md` pokryje práci, kterou s AI děláte ve složce
projektu. Kolegové ale své kroky dokončují mimo složku, třeba v e-mailu
nebo na schůzce, a jejich soubory do ní přibudou bez AI. Na to stačí
naplánovaná úloha, kterou AI spustí jednou týdně: označí hotové kroky a
udělá další krok, který je v plánu na ni. Vložte do AI v režimu Cowork nebo
Code toto zadání a požádejte ji, ať z něj naplánovanou úlohu založí:

```text
Každé pondělí v 8:00 projdi plan-projektu.md, složku projektu a e-maily a schůzky z minulého týdne, které se projektu týkají a ke kterým máš přístup. U kroků, které jsou hotové, připiš do sloupce Co vznikne, kde je výsledek, a slovo hotovo. Pak udělej další krok, který je v plánu na tebe a má hotové podklady, a výsledek ulož do složky projektu. Na konci mi napiš, co je nově hotové, co jsi udělal a který krok čeká na koho.
```

E-maily a schůzky AI projde, jen když má připojenou poštu a kalendář; jinak
pracuje jen se složkou projektu. Když úloha pracuje se složkou ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Jitka je marketingová koordinátorka ve firmě, která vyrábí zahradní
nábytek. Jarní katalog 2027 musí jít do tisku 15. 1. Ve složce má loňský
katalog, ceník novinek a export letošních prodejů. V pondělí 12. 10.
otevře složku v režimu Cowork, vloží prompt a pod něj napíše: „Jarní
katalog 2027, tisk 15. 1. Pracuju na něm já, obchodní ředitel Pavel,
fotograf Ondřej a grafická agentura.“ AI ukáže plán a pod ním se zeptá,
kolik stran má katalog mít a jestli se fotí jen novinky:

```text
| Krok | Kdo ho udělá | Co vznikne |
|---|---|---|
| 1. Výběr výrobků | AI vybere podle prodejů, kontroluje Jitka | seznam 60 výrobků |
| 2. Parametry a ceny | AI, kontroluje Jitka | tabulka parametrů |
| 3. Fotky novinek | fotograf Ondřej | 14 fotek |
| 4. Texty k výrobkům | AI, kontroluje Jitka | texty v souboru |
| 5. Sazba | grafická agentura | PDF katalogu |
| 6. Korektura cen | AI proti ceníku, kontroluje Jitka | seznam oprav |
| 7. Schválení a tisk | Jitka, schvaluje Pavel | objednávka tisku |
```

Jitka odpoví na obě otázky. U prvního kroku by AI výrobky sama vybrala a
Jitka by výběr jen kontrolovala. Krok proto přepíše na „AI připraví
návrh, vybírají Jitka a Pavel“: obchod ví, na co se zákazníci ptají, a v
prodejích to zatím vidět není. Pak napíše „Ulož to“.

AI uloží plán do `plan-projektu.md` a hned udělá svůj první krok: z
exportu prodejů a ceníku připraví `navrh-vyrobku.xlsx` s 60 výrobky
seřazenými podle prodejů a se všemi 14 novinkami. Jitka v tabulce najde
dvě sestavy, které se už nevyrábějí, napíše to AI a ta je z návrhu
vyřadí. S hotovým návrhem jde Jitka ve středu za Pavlem a výběr spolu
uzavřou na jedné schůzce.
## Když se zaseknete

- **AI plán do složky neuloží, protože máte jen běžný chat:** přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough). Když firma dovoluje jen běžný chat, přiložte podklady k promptu a napište
  AI, ať pokračuje v chatu a plán napíše přímo do odpovědi. Nechte si od AI dát plán jako soubor, nahrajte ho do
  [projektu](card:asistent) ve svém nástroji (jak se jmenuje,
  ukazuje blok „Ve vašem nástroji“) a do pokynů projektu dejte větu „Před
  prací si přečti plán projektu. Když ti napíšu, co je hotové, napiš mi celý
  plán znovu s označenými kroky.“ Novou verzi plánu pak nahrajte do projektu
  místo staré; první krok AI udělá v chatu v projektu.
- **Plán má třicet drobných úkolů:** napište AI, ať je sloučí do hlavních
  kroků, z nichž každý má vlastní výsledek.
- **Plán je obecný a sedí na jakýkoli projekt:** zeptejte se AI, které
  podklady ve složce přečetla. Soubor, který leží jen v cloudu, se stáhne,
  až ho AI otevře, takže když ho nepřečetla, ať to při připojení k internetu
  zkusí znovu. Co ve složce chybí, třeba zadání nebo
  zápis z porady, přidejte a napište AI, ať plán podle toho přepíše. U
  velkého projektu přepněte na [silnější model](card:modely).
- **Výsledek prvního kroku nesedí:** napište AI, co přesně nesedí a z
  jakého podkladu to má vzít. Když jde o čísla nebo tvrzení, pomůže
  [kontrola výstupu AI](card:kontrola-vysledku).
## Co bude hotové

Máte ve složce projektu `plan-projektu.md` s hlavními kroky celého
projektu a u každého kroku víte, kdo ho udělá a co z něj vznikne. Svůj
první krok AI udělala a jeho výsledek leží vedle plánu. V `AGENTS.md` je
pravidlo, díky kterému si AI plán před prací přečte a hotové kroky v něm
označí.
## Co dál

Když je některý krok v plánu dlouhá práce pro AI, třeba projít šedesát
smluv, zadejte ho [agentovi](card:agent-task), který ho dotáhne sám. Když
projekt ještě nemá úvodní stránku, nechte AI napsat
[README](card:project-start-here). Co se na projektu rozhodlo a udělalo,
zapisujte do [worklogu](card:project-worklog).
## AI-WBS

**Co to je:** AI Work Breakdown Structure: rozpad projektu na výstupy, fáze a role člověka, AI, experta nebo automatizace.

**Co to není:** Není to pouze běžný seznam projektových úkolů.

**Proč to potřebuje tým:** Ukazuje, kde přesně v projektu pracuje AI a kde zůstává lidský či expertní krok.

## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

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

## Naplánovat blok

Volitelná produktová mechanika po dokončení karty, jejíž výsledek pokračuje prací, která se do patnácti minut nevejde. Není samostatnou kartou, nemá vlastní dokončení a nezvyšuje počet absolvovaných metod.

Karty jsou patnáctiminutové a končí artefaktem. Část z nich ale artefaktem teprve začíná: vznikne mapa fáze, brief rešerše, návrh skillu nebo dvě větve k integraci. Člověk odchází s plánem a bez času a k práci se pak vrací po deseti minutách mezi schůzkami, kde se nedá dokončit nic.

## Kdy se nabídne

- karta skončila použitelným výsledkem a ten výsledek je zadáním další práce,
- ta práce má jasný konec, který jde pojmenovat jednou větou,
- při běžném rozkouskování na krátké úseky by se rozpadla, protože každý návrat začíná znovu načtením kontextu.

Mechanika se nezobrazí, když se práce po kartě opravdu vejde do patnácti minut, když další krok čeká na jiného člověka nebo na schválení, ani když výsledek karty žádnou navazující práci nemá.

## Co člověk uvidí

Krátkou volbu **Naplánovat blok** vedle společného check-inu. Po otevření se AI zeptá pouze na jednu věc: kdy takový čas reálně má. Zbytek navrhne sama z toho, co v kartě vzniklo.

## Co vytvoří AI

Brief bloku. Zdrojem je výsledek právě dokončené karty; nové téma si mechanika nevymýšlí. Obsahuje pět položek:

- **jedna věc**, pojmenovaná tak, jak vypadá hotová,
- **délka** v rozmezí 60 až 120 minut, s tím, co se do ní vejde a co ne,
- **co musí být připravené předem**: přístupy, data, podklady, prompt z karty,
- **co bude na konci hotové**, tedy konkrétní výsledek, ne „pokročeno" ani „rozpracováno",
- **co se zbytkem**, který se do bloku nevejde, aby zbytek nezůstal viset bez rozhodnutí.

Když se ukáže, že jedna věc je ve skutečnosti tři, AI to řekne a nabídne, která z nich patří do prvního bloku. Rozdělení na tři bloky dopředu nenavrhuje.

## Aktivní čas proti čekání

Blok s AI má jinou stavbu než blok samostatné práce, protože část času běží nástroj. Rešerše, agent, delší generování nebo zpracování dat trvají minuty až desítky minut a člověk u toho nemusí sedět.

Brief proto rozliší tři druhy času: aktivní práci člověka, běh AI a čekání na někoho dalšího. K běhu AI navrhne, co se dělá mezitím, a tou činností je nejčastěji příprava dalšího kroku téhož výsledku. Skákání do nesouvisející práce blok rozbije, i když vypadá jako využitý čas.

Když by čekání zabralo většinu bloku, mechanika to řekne rovnou: takový úkol patří spíš do [Nechte AI pracovat ve chvíli, kdy u toho nejste](card:recurring-ai-task).

## Kalendář

Mechanika připraví text události: název podle jedné věci, délku a do popisu to, co má být připravené předem. Zapsat si ho člověk může sám.

Do kalendáře ani do jiného sdíleného systému mechanika nic nezapisuje bez oprávnění a nikomu neposílá pozvánku.

## Hranice vůči kartám

| Co to není | Kde to je |
|---|---|
| Vyhrazený čas pro tým, který potřebuje rozhodnutí vedoucího, zrušené schůzky a mentora po ruce | karta [Dejte týmu blok na jeden skutečný AI projekt](card:ai-sprint) |
| Práce AI ve chvíli, kdy u toho člověk není | karta [Nechte AI pracovat ve chvíli, kdy u toho nejste](card:recurring-ai-task) |
| Rozpad projektu na kroky a role | karta [Vytvořte AI-WBS pro první fázi projektu](card:ai-wbs-project) |

Blok si člověk dává sám a nepotřebuje k němu ničí svolení. Tím se liší od sprintu, kde je právě to svolení podstatná část práce.

## Co mechanika neobsahuje

Návody na soustředění, doporučení k telefonu, notifikacím a prostředí. Knihovna učí průchody. Rady tohoto druhu by z mechaniky udělaly kázání o práci místo přípravy jednoho konkrétního bloku.

## Evidence

Do check-inu se může přidat informace, že vznikl brief bloku. Nejde o samostatné splnění karty. Jestli blok proběhl, mechanika nesleduje.

## První podporované karty

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

Další karty s navazující prací delší než patnáct minut, tedy `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` a `sjednotit-data-z-vice-zdroju`, jsou kandidáti na druhou vlnu. Zavěšovat mechaniku na půlku knihovny hned na začátku by z volby udělalo šum.
