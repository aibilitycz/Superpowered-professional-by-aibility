# Vytvořte si skill: návod, který si AI pamatuje

Z úkolu, který jste s AI jednou dotáhli do konce, AI napíše skill a další kolo zadáte jednou větou.

## Vytvořte si skill: návod, který si AI pamatuje

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s chatem, kde jste úkol dokončili.
## K čemu se hodí

Každý pátek posíláte vedení stav svých tří projektů. AI vám s ním pomáhá, ale
pokaždé jí znovu vysvětlujete, ze kterých podkladů ho skládat, že nahoře mají
být tři věty, pod nimi tabulka termínů a rizika až na konci. Když na něco
zapomenete, stav vypadá jinak než minulý týden a ředitel se ptá, co se
změnilo.

[Skill](glossary:skill) je návod pro AI na jeden druh práce, který AI napíše
z hotového chatu a příště použije sama, takže nic znovu nevysvětlujete.
## Co si připravit

- chat, ve kterém jste s AI dokončili úkol, který děláte pravidelně a
  stejně,
- podklady k dalšímu úkolu stejného druhu; na něm skill hned použijete,
- AI, která umí ukládat skilly, třeba v [režimu](glossary:workmode) Cowork
  nebo Code.
## Jak na to

1. Otevřete chat, ve kterém jste úkol s AI dokončili. Když takový nemáte,
   udělejte s AI úkol, který máte před sebou, a opravujte ji, dokud výsledek
   nesedí.
2. Na konec chatu vložte prompt. AI z chatu napíše skill, uloží ho a řekne
   vám, kde ho najdete; když potřebuje vaše kliknutí, řekne kam.
3. Otevřete nový chat, přiložte podklady k dalšímu úkolu a zadejte ho jednou
   větou, třeba „Napiš stav projektu Stěhování skladu“. AI by měla skill
   použít sama.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Tenhle úkol budu dělat znovu. Napiš z toho, co jsme v tomhle chatu udělali, skill, ať ho příště stačí zadat jednou větou a nic nevysvětlovat.

Projdi celý chat a vezmi z něj, co fungovalo: kroky, podklady, které jsi potřeboval, a podobu výsledku, která mi nakonec sedla. Moje opravy z průběhu práce zapracuj rovnou do kroků. Co se příště změní, třeba název projektu, datum nebo čísla, do skillu nepiš; zapiš jen, že si to máš vyžádat.

Skill má tyto části:
- název podle práce, třeba Stav projektu pro vedení,
- kdy se použije: věty, kterými takový úkol obvykle zadávám,
- co potřebuješ dostat a na co se zeptat, když to chybí,
- kroky,
- jak vypadá hotový výsledek.

Na konec skillu přidej pravidlo: když výsledek opravím, nabídni, že skill podle opravy upravíš.

Ulož skill tak, aby ho tenhle nástroj při další práci našel a použil sám. Když k uložení potřebuješ moje kliknutí, řekni mi přesně kam. Když tenhle nástroj skilly ukládat neumí, řekni mi to rovnou. Nakonec mi napiš, kde skill najdu, a větu, kterou úkol příště zadám.

## Ve vašem nástroji

### Microsoft Copilot

Skilly má Cowork vedle přepínače Chat; když tam není, požádejte o něj
správce IT. V Cowork skill vytvoříte v Customize, Skills (Add, Create new),
nebo o něj AI požádáte v úloze. Bez Cowork si v Copilot Chatu nechte skill
napsat jako text a vložte ho do nového agenta (New agent, Skip to configure,
Instructions); v kroku 3 pak úkol zadáte v tomto agentovi.

### ChatGPT

Skilly mají firemní tarify Business a Enterprise v postranním panelu pod
Plugins, na kartě Skills, a ve firmě je zapíná správce. Když ChatGPT o skill
v chatu požádáte, napíše ho a nabídne instalaci (Install). Když skilly
zapnuté nemáte, nechte si skill napsat jako text, vložte ho do instrukcí
projektu (New project, Project settings) a v kroku 3 zadejte úkol v tom
projektu.

### Claude

Skilly umí Claude ve všech tarifech, v běžném chatu i v Cowork, a najdete je
v Customize, Skills. Potřebují zapnuté Code execution and file creation v
Settings, Capabilities; ve firemním účtu je zapíná správce. Claude v průběhu
práce ukáže název skillu, který používá.

### Gemini

Když v nabídce Customize vidíte Skills, vytvoříte skill tam (Create nebo
Upload); firemním účtům je Google zapíná postupně. Do té doby si nechte od
Gemini skill napsat jako text a uložte ho jako Gem, tedy uloženého asistenta
s vlastními instrukcemi: v Gems, New Gem vložte text do Instructions a
výsledek z minula přidejte do Knowledge. V kroku 3 pak otevřete tento Gem a
úkol zadáte v něm.
## Co je skill

Skill, anglicky dovednost, je návod pro AI na jeden druh práce: kdy ho
použít, co k němu potřebuje, kroky a jak má vypadat výsledek. Píše ho AI:
úkol s ní jednou dotáhnete do konce a ona z toho, co fungovalo, skill napíše
a uloží. Je to obyčejný textový soubor, ke kterému AI může přidat šablonu
nebo vzorový výsledek.

Který skill použít, AI pozná podle popisu, kdy se použije. Proto v něm jsou
věty, kterými úkol obvykle zadáváte, a proto můžete mít skillů desítky a AI
si vybere ten správný. Nástroje, které skilly umějí, většinou používají
stejný tvar, takže skill jde přenést i do jiného nástroje.

Skilly umí AI v režimu Cowork nebo Code a v některých nástrojích i běžný
chat; když ho vaše AI uložit neumí, přepněte podle karty [Chat, Cowork nebo
Code](card:when-chat-is-not-enough). Jestli AI skill použila, poznáte podle
jeho názvu v průběhu práce (v Cowork v novém úkolu); když ho nevidíte,
zeptejte se jí. Výsledek má mít stejnou podobu jako minule a název projektu,
datum nebo čísla si AI vyžádá znovu.

Do skillu patří, co se opakuje: postup, podoba výsledku a vaše opravy.
## Ať skilly vznikají samy

Nejlepší chvíle na skill je konec práce, která se povedla. Aby vám tu chvíli
AI připomněla sama, nechte ji uložit si jedno pravidlo. V Cowork nebo Code,
kde AI pracuje se složkou ve vašem počítači, ho zapíše do souboru
`AGENTS.md`. To je obyčejný textový soubor s pravidly pro AI, který si řada
nástrojů v režimu Code čte na začátku každé práce; kde to nástroj sám
neumí, AI pravidlo uloží do jeho nastavení, nebo vám napíše, kam ho vložit. V běžném
chatu si AI pravidlo uloží do paměti. Vložte jí tohle:

```text
Ulož si pravidlo pro každou další práci: „Když spolu dokončíme úkol, který budu dělat znovu, nabídni mi, že z něj napíšeš skill.“ Když pracuješ ve složce, zapiš ho do souboru AGENTS.md, a když soubor neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. V běžném chatu si pravidlo ulož do paměti.
```
## Příklad

Jana koordinuje tři projekty ve stavební firmě a každý pátek posílá vedení
jejich stav. V pátek 9. 10. udělá s AI v režimu Cowork stav projektu Nový
sklad. Dá jí zápis z porady a tabulku termínů a dvakrát ji opraví: vedení
chce nahoře tři věty a rizika až na konci, ne schovaná v textu. Pak vloží
prompt a AI uloží skill:

```text
Stav projektu pro vedení
- Kdy se použije: „stav projektu“, „report pro vedení“, „jak jsme na tom s projektem“.
- Co potřebuješ: název projektu, poslední zápis z porady a tabulku termínů. Když něco chybí, řekni si o to.
- Kroky: z podkladů vyber, co se tento týden udělalo, porovnej termíny s plánem a najdi, co se zpožďuje.
- Výsledek: tři věty nahoře, pod nimi tabulka milníků s termínem a stavem, na konci rizika a kdo je řeší.
- Když výsledek opravím, nabídni, že tento skill podle opravy upravíš.
```

Týž den odpoledne otevře nový chat, přiloží zápis a termíny projektu
Stěhování skladu a napíše jen „Napiš stav projektu Stěhování skladu“. AI v
průběhu ukáže, že používá skill Stav projektu pro vedení, a vrátí tři věty,
tabulku a rizika, aniž by jí Jana cokoli vysvětlovala. Třetí projekt má
hotový za pět minut. Do konce měsíce si stejně udělá skilly na zápis z porady
a na objednávku materiálu.
## Když se zaseknete

- **AI odpoví, že skill uložit neumí:** ve firemním účtu skilly často
  zapíná správce, tak mu napište; co kde zapnout, ukazuje blok „Ve vašem
  nástroji“. Do té doby přejděte do režimu Cowork nebo Code. Chat se do něj
  nepřenese, takže tam začněte znovu od kroku 1. Víc v kartě
  [Chat, Cowork nebo Code](card:when-chat-is-not-enough).
- **AI v novém chatu skill nepoužila:** popis, kdy se skill použije, nesedí
  na slova, kterými úkol zadáváte. Napište AI svou větu a požádejte ji, ať
  podle ní popis ve skillu upraví. Do té doby napište rovnou „Použij skill“
  a jeho název.
- **Skill opisuje jeden konkrétní úkol:** název projektu, datum nebo čísla z
  minula ve skillu nemají co dělat. Požádejte AI, ať je ze skillu vyndá a
  příště si je vyžádá.
- **Výsledek pořád nesedí:** opravte ho v chatu a přijměte, když AI nabídne
  úpravu skillu. Když se stejná chyba vrací, najděte s AI příčinu podle karty [Zkontrolujte výstup AI](card:kontrola-vysledku).
## Co bude hotové

Máte skill na úkol, který děláte pravidelně, a víte, kde ho najdete. V novém
chatu ho AI použila sama a další úkol stejného druhu vrátila ve stejné podobě
jako minule. Když výsledek opravíte, AI nabídne, že skill podle opravy
upraví.
## Co dál

Skill se sám nespustí, čeká, až úkol zadáte. Když má stav projektů vzniknout
každý pátek ve 12:00 bez vás, nastavte ho jako
[naplánovanou úlohu](card:recurring-ai-task). Když výsledek jednoho skillu
používáte jako podklad pro další práci, třeba ze stavů projektů souhrn pro
celé oddělení, přidejte druhý krok rovnou do skillu.
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
