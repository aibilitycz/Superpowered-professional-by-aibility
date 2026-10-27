# Nastavte si naplánovanou úlohu: AI pracuje sama v pravidelný čas

Přehled, který každý týden skládáte ručně, vám AI začne připravovat sama v čase, který určíte.

## Nastavte si naplánovanou úlohu: AI pracuje sama v pravidelný čas

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s přehledem, který děláte pravidelně.
## K čemu se hodí

Každé pondělí ráno vybíráte z tabulky zakázky s termínem do dvou týdnů a
dohledáváte, kde chybí podklady. Výsledek posíláte vedení, zabere to půl
hodiny a v týdnu, kdy máte dovolenou, začne porada bez přehledu.

Stačí jednou s AI udělat přehled celý a z hotové práce jí nechat napsat
zadání; [naplánovaná úloha](glossary:task) ho pak v určený čas zopakuje bez
vás.
## Co si připravit

- jeden přehled, který děláte pravidelně, a jeho poslední verzi jako vzor,
- přístup k podkladům ve složce, v připojené aplikaci, třeba v poště, nebo na
  webu,
- AI, která umí naplánované úlohy; kde je najdete, ukazuje blok „Ve vašem
  nástroji“.
## Jak na to

1. Vložte prompt a za jeho poslední řádek napište, jaký přehled chcete a odkud
   jsou podklady. U podkladů ve složce otevřete AI v režimu Cowork nebo Code v
   té složce.
2. Napište AI, co v přehledu chybí a co přebývá: nechte v něm jen to, podle
   čeho něco uděláte. Pak řekněte, kdy se má úloha spouštět a kam doručit
   výsledek.
3. AI úlohu založí, nebo napíše zadání a řekne, kde ho naplánujete. V seznamu
   naplánovaných úloh ověřte, kdy se poprvé spustí; co pak bude chybět, AI
   doplní do zadání.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte, a za
poslední řádek napište svůj přehled:

Chci, aby mi jeden přehled, který dělám pravidelně, chodil sám. Jaký přehled to je a odkud se berou podklady, píšu na posledním řádku.

Nejdřív ho udělej celý z dnešních dat. Podklady si najdi sám ve složce, ve které pracuješ, v připojených aplikacích nebo na webu. Když najdeš moji starší verzi přehledu, drž se jejího tvaru. Na konec přehledu napiš, z jakých zdrojů je. Když nevíš, kde podklad hledat, zeptej se mě.

Pak počkej, až přehled projdu, a zapracuj, co ti řeknu. Z celé práce potom napiš zadání pro naplánovanou úlohu: odkud brát podklady, co z nich vybrat a jak má přehled vypadat. Přidej pravidlo: když zdroj chybí nebo se nenačte celý, přehled nedělej a napiš mi, co chybí.

Zeptej se mě, kdy se má úloha spouštět a kam mi má výsledek doručit, a nabídni mi, co tady jde. Potom naplánovanou úlohu sám založ a napiš mi, kdy se poprvé spustí a kde výsledek najdu. Když ji tady založit neumíš, napiš mi zadání tak, ať ho můžu vložit do nástroje, který to umí, a řekni mi, kam.

Přehled:

## Ve vašem nástroji

### Microsoft Copilot

Prompt vložte do Copilot Cowork na `copilot.cloud.microsoft` (přepínač Cowork
nahoře vedle Chat) a tabulku přiložte tlačítkem + z OneDrivu. Úlohu založí
sám, když mu napíšete, kdy se má spouštět; najdete ji i s výsledky na stránce
Automations. Běží v cloudu, takže notebook můžete zavřít. Bez Cowork v Copilot
Chat najeďte na zprávu se zadáním a zvolte Schedule this prompt.

### ChatGPT

V ChatGPT AI úlohu založí, když ji o to v chatu požádáte; úlohy i jejich
výsledky jsou v levém panelu pod Scheduled. Taková úloha bere podklady z
připojených aplikací, třeba ze sdíleného disku připojeného v nastavení pod
Plugins, a z webu a běží, i když nejste online. Se složkou v počítači pracuje
Codex v aplikaci ChatGPT pro počítač; jeho úloha potřebuje zapnutý počítač a
běžící aplikaci.

### Claude

V Claude Cowork AI úlohu připraví a vy ji potvrdíte tlačítkem Schedule;
přehled je v levém panelu pod Scheduled. Úloha s konektory běží i při vypnutém
počítači, úloha se složkou v počítači jen při zapnutém počítači a otevřené
aplikaci Claude. S připojenou poštou vám AI může výsledek nechat i jako
koncept e-mailu.

### Gemini

V aplikaci Gemini napište @, vyberte Disk nebo Gmail a vložte prompt; u
tabulky na Disku připište její název. Až Gemini napíšete, kdy a jak často se
má úloha spouštět, naplánuje ji; úlohy jsou v levém panelu pod Scheduled a
hotový výsledek tam najdete jako nepřečtený, v mobilu vám přijde upozornění.
Najednou můžete mít 10 úloh a s firemním účtem je musí umožňovat vaše edice
Google Workspace.
## Co je naplánovaná úloha

Naplánovaná úloha, anglicky scheduled task, je zadání, které AI spustí sama
v čase, který určíte, třeba každý pracovní den v 8:00 nebo jednou týdně.
Když úloha běží, AI se nemá koho zeptat, proto musí být v zadání všechno, co
potřebuje. Zadání si kdykoli přečtete a upravíte v seznamu naplánovaných
úloh.

Úloha, která bere podklady jen z připojených aplikací a z webu, proběhne i
při vypnutém počítači. Úloha, která pracuje se složkou ve vašem počítači,
potřebuje v tu chvíli zapnutý počítač a otevřenou aplikaci s AI. Nejrychleji
proto začnete přehledem z webu, třeba novinek z vašeho oboru, protože nic
nepřipojujete. Aplikaci připojíte v nastavení svého AI nástroje; ve firemním
účtu to někdy musí povolit správce.
## Další přehledy, které můžou chodit samy

Když vám chodí první přehled, další založíte ve stejném chatu jednou až
dvěma větami a AI se doptá, co jí chybí. Takhle může chodit třeba:

- „Každý pracovní den v 9:00 a v 15:00 mi napiš, kolik jsme utratili za
  reklamy a kolik nás stál jeden nový zákazník. Když cena za zákazníka
  stoupne o víc než 20 %, dej to do prvního řádku.“
- „Každý pracovní den v 17:30 projdi, co se dnes ve složce projektu změnilo,
  a připiš nahoru do deníku projektu krátký zápis, co se udělalo a
  rozhodlo.“
- „Každé pondělí v 7:30 najdi na webu novinky z našeho oboru za minulý týden
  a shrň mi pět nejdůležitějších s odkazem na zdroj.“

U přehledu, který hlídá změny, třeba výdaje za reklamy, se hodí věta „Když
se nic nezměnilo, nic neposílej.“ Přehled, který chodí i prázdný, brzy
přestanete otevírat.
## Příklad

Tereza koordinuje zakázky v menší stavební firmě a každé pondělí posílá
vedení přehled zakázek s termínem do dvou týdnů a s chybějícími podklady.
Tabulku zakázek má na firemním OneDrivu a k AI má připojený Microsoft 365,
tedy OneDrive i Outlook. V pondělí 28. 9. 2026 vloží prompt a za poslední
řádek napíše:

```text
Pondělní přehled zakázek pro vedení z tabulky Zakázky 2026 na OneDrivu: termíny do 14 dnů a co kde chybí.
```

AI do přehledu zahrne i dvě uzavřené zakázky. Tereza napíše „jen otevřené“ a
AI přehled opraví. Pak zvolí každé pondělí v 8:30 a výsledek jako koncept
e-mailu pro vedení. AI úlohu založí, a protože pracuje jen s OneDrivem a
poštou, spustí se i při vypnutém počítači. V pondělí 5. 10. v 8:30 čeká v
konceptech:

```text
### Zakázky k 5. 10. 2026
Termín do 14 dnů:
- Škola Kolín, rekonstrukce: předání 12. 10., chybí revizní zpráva elektro.
- Hala Mladá Boleslav: kolaudace 16. 10., podklady jsou kompletní.
Chybí podklady:
- Bytový dům Nymburk: podepsaný protokol o převzetí fasády.
Zdroj: tabulka Zakázky 2026 na OneDrivu, list Otevřené.
```

Tereza e-mail odešle a do chatu napíše, že u každé zakázky chce i jméno
stavbyvedoucího. AI to doplní do zadání a od 12. 10. ho přehled obsahuje.
## Když se zaseknete

- **AI odpoví, že úlohy plánovat neumí:** váš nástroj naplánované úlohy nemá,
  nebo je ve firemním účtu nemáte zapnuté. AI vám podle promptu napíše hotové
  zadání; vložte ho do nástroje, který úlohy umí, a o zapnutí případně
  požádejte správce. Víc v kartě
  [Chat, Cowork nebo Code](card:when-chat-is-not-enough).
- **Úloha se nespustila nebo nenašla soubor:** pracuje se složkou ve vašem
  počítači a ten byl v tu chvíli vypnutý, nebo byla zavřená aplikace.
  Posuňte spuštění na dobu, kdy jste u počítače, nebo dejte podklady na
  sdílený disk připojený k AI.
- **Přehled má každý týden stejná čísla:** úloha čte soubor, který jste do
  chatu nahráli, a ten se sám neobnoví. Dejte tabulku na sdílený disk
  připojený k AI a napište AI, ať zadání upraví.
- **V přehledu jsou stará nebo chybějící čísla:** napište AI, co nesedí, ať
  najde příčinu a opraví zadání úlohy. Víc v kartě [Zkontrolujte výstup AI](card:kontrola-vysledku).
## Co bude hotové

Máte první přehled z aktuálních dat, který jste prošli a opravili, a
naplánovanou úlohu, která vám ho od příštího termínu připraví sama. Víte, kdy
se poprvé spustí a kde výsledek najdete. Co v něm po prvním spuštění bude
chybět, doplní AI do zadání.
## Co dál

Když chcete z přehledu rovnou připravit další krok, třeba podklady na poradu,
přidejte ho do zadání úlohy a celý postup si [uložte jako skill](card:create-skill-from-proven-process).
## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Naplánovaná úloha

**Co to je:** Práce, kterou nástroj spustí podle času nebo události a výsledek doručí, aniž byste o něj pokaždé žádali. Dostupnost a název se liší podle nástroje a účtu.

**Co to není:** Skill ani asistent. Ty čekají, až je někdo použije, úloha se spustí sama.

**Proč to student potřebuje:** Pomáhá rozlišit, kdy stačí uložený postup a kdy je potřeba něco, co běží bez vyžádání. S tím přichází i otázka, kdo výsledek hlídá a co se stane, když se úloha spustí nad špatnými daty.

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
