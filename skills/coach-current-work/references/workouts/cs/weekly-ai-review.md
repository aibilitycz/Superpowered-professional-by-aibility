# Zaveďte si týdenní revizi: úklid vašeho AI nastavení

AI každý týden najde zádrhel, který se ve vašich chatech opakoval, opraví ho a uklidí, co nepoužíváte.

## Zaveďte si týdenní revizi: úklid vašeho AI nastavení

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s týdnem práce v režimu Code za sebou.
## K čemu se hodí

Ve čtvrtek jste AI potřetí za týden opravovali ceny v nabídce, protože je
znovu napsala s DPH. Zákazníkům je přitom posíláte bez DPH, pokaždé jste to
vysvětlili a v dalším chatu se chyba vrátila. K tomu se AI pořád řídí
pravidlem z jara, že nabídka platí 14 dní, přestože od září platí 30 dní.

Týdenní revize je pravidelný úklid: AI projde vaše chaty z posledního týdne,
a co se opakovalo, opraví tam, odkud pravidla při práci čte.
## Co si připravit

- AI v [režimu](glossary:workmode) Code, která vidí historii chatů ve vašem
  počítači,
- složku, ve které s AI nejčastěji pracujete; report se uloží do ní,
- chaty z posledního týdne vedené v režimu Code.
## Jak na to

1. V režimu Code otevřete svou složku a vložte prompt; cestám ke složkám v
   něm rozumět nemusíte. Když se aplikace zeptá na přístup k historii chatů
   a souborům, povolte ho.
2. Přečtěte si report a u každého zádrhele řekněte, jestli opravu chcete. AI
   ji zapíše, kam navrhla, a co potřebujete z archivu zpátky, vrátí.
3. V novém chatu zadejte práci, ve které se zádrhel objevoval, a ověřte, že
   ji AI udělá správně. Pak jí vložte zadání z bloku „Ať revize proběhne
   každý pátek“ jako naplánovanou úlohu.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Code, otevřené ve vaší
složce:

Udělej týdenní revizi mého AI nastavení: zjisti, co se mi s tebou za poslední týden opakovaně zadrhávalo, a navrhni, jak to opravit.

Projdi moje chaty s tebou z posledních sedmi dní. Claude Code je ukládá do ~/.claude/projects, Codex do ~/.codex/sessions. Když k nim přístup nemáš, řekni mi to hned a poraď, co zapnout nebo kam přepnout. Projdi také moje nastavení: pravidla pro AI, třeba soubor AGENTS.md, skilly a připojené konektory.

Najdi zádrhele, které se objevily aspoň ve dvou různých chatech: věci, které ti opakovaně vysvětluju nebo opravuju, a chyby nástrojů, které se vracejí. Nepočítej, co se stalo jednou, výpadky služeb ani chyby, které se hned v dalším kroku vyřešily. Vyber nejvýš tři a seřaď je od toho, který mě stál nejvíc času. U každého uveď, ve kterých chatech a kdy se objevil, a navrhni jednu opravu na správném místě:
- týká se jedné práce, třeba nabídek: oprava patří do skillu pro tu práci, a když skill chybí, navrhni nový,
- týká se veškeré práce: oprava patří do pravidel pro AI,
- selhává nástroj nebo konektor: oprava patří do jeho nastavení.
U každé opravy napiš přesné znění, které přidáš nebo změníš.

Pak najdi skilly, které se v celé historii, kterou vidíš, ani jednou nespustily, a pravidla k práci, kterou už nedělám, nebo pravidla, která si odporují. Skilly na práci, která se dělá jednou za měsíc nebo za čtvrtletí, nech být. Nejvýš tři takové věci přesuň do složky revize-ai/archiv a nic nemaž: skill přesuň celý, pravidlo z AGENTS.md vyjmi a připiš do revize-ai/archiv/pravidla.md. Co přesunout neumíš, napiš mi, kde to vypnout.

Všechno zapiš do krátkého reportu revize-ai/RRRR-MM-DD.md s dnešním datem: kolik chatů revize pokryla, zádrhele s návrhy oprav a co je nově v archivu i odkud to je. Report mi ukaž a zeptej se, které opravy chci. Schválené opravy pak zapiš tam, odkud je při další práci opravdu přečteš, a do reportu doplň, co se změnilo.

## Ve vašem nástroji

### Microsoft Copilot

Microsoft neuvádí, že by Copilot uměl projít vaše chaty za poslední týden.
Revizi proto dělejte v nástroji s režimem Code, třeba Claude Code nebo Codex
v aplikaci ChatGPT, a o ten požádejte správce IT. Mezitím patří opravy,
které už znáte, do Custom instructions nebo Saved memories (Settings and
more, Chat settings, Personalization).

### ChatGPT

Revizi udělá Codex, který si chaty ukládá do počítače: v aplikaci ChatGPT
pro počítač přepněte na Codex, zvolte otevření složky (open a folder) a
vložte prompt. Revize počítá s chaty vedenými v Codexu. Naplánovanou úlohu
Codex založí, když ho o ni v chatu požádáte, a najdete ji v postranním
panelu pod Scheduled.

### Claude

Revizi udělá Claude Code v aplikaci Claude pro počítač, který si chaty
ukládá do počítače: vyberte v něm svou složku a vložte prompt. Revize počítá
s chaty vedenými v Claude Code, ne v běžném chatu ani v Cowork. Naplánovanou
úlohu AI založí, když ji o to požádáte, a najdete ji v levém panelu pod
Scheduled.

### Gemini

Firemní účty v Gemini nemají paměť minulých chatů, takže je AI za týden
neprojde. Gemini CLI, které pracuje se soubory v počítači, Google od června
2026 nahrazuje nástrojem Antigravity CLI a prompt s jeho historií chatů
nepočítá. Revizi proto dělejte v nástroji s režimem Code, třeba Claude Code
nebo Codex v aplikaci ChatGPT, a požádejte o něj správce IT.
## Co je týdenní revize

Zádrhel je drobnost, kvůli které práce s AI pokaždé trvá o chvíli déle: věc,
kterou AI vysvětlujete pořád znovu, nebo konektor, který se každý týden
odhlásí. Jeden zádrhel stojí pár minut, ale za měsíc se z nich nasbírají
hodiny. Revize započítá jen zádrhel, který se opakoval aspoň ve dvou chatech,
a opravu zapíše až po vašem souhlasu. Co našla a co změnila, zapíše do
reportu, takže za měsíc uvidíte, které zádrhele zmizely.

Opravu AI zapíše tam, kam patří:
- zádrhel v jedné práci, třeba v nabídkách, do skillu pro tu práci,
- zádrhel ve veškeré práci, třeba v oslovení nebo ve formátu data, do
  pravidel pro AI,
- nástroj, který selhává, do jeho nastavení.

Pravidla pro AI leží v souboru `AGENTS.md` ve složce, ve které pracujete.
Když váš nástroj čte pravidla z jiného souboru, AI opravu zapíše tam.
Pravidla z nastavení běžného chatu revize v Code nevidí a oprava v
`AGENTS.md` platí jen pro práci v režimu Code. Report je obyčejný textový
soubor s koncovkou `.md` a AI vám ho ukáže přímo v chatu.

Za pár měsíců máte desítky skillů a pravidel a mnohé z nich AI nikdy nespustí.
Zastaralým pravidlem se AI dál řídí a nepoužívané skilly jí ztěžují výběr toho
správného. Revize je proto přesune do složky `revize-ai/archiv`, odkud je AI
při práci nenačítá, a v reportu u každé věci uvede, odkud ji vzala. Vaše
dokumenty revize nepřesouvá, jen pravidla a skilly, a když nic nepoužívaného
nemáte, report to jen zapíše.

Revize projde i vaše nastavení: pravidla pro AI, [skilly](glossary:skill) a
konektory. Skill je uložený postup pro jeden typ práce a konektor propojení
AI s jinou aplikací, třeba s poštou. Chyba, která se stala jednou, nové
pravidlo nepotřebuje, protože AI čte pravidla při každé práci a v dlouhém
seznamu snáz některé přehlédne.

Nástroje v režimu Code si historii chatů ukládají do počítače, takže ji AI
projde sama; běžný chat tuhle revizi neudělá. Když jste minulý týden
pracovali hlavně v běžném chatu nebo v Cowork, [přepněte do
Code](card:when-chat-is-not-enough), týden pracujte tam a revizi udělejte
potom.
## Ať revize proběhne každý pátek

Revize nejvíc pomůže, když se opakuje. Stačí naplánovaná úloha, kterou AI
spustí každý pátek odpoledne. Nový report najdete v `revize-ai` vedle
předchozích a uvidíte v něm, které zádrhele z minulého týdne zmizely.
Vložte AI v režimu Code toto zadání a požádejte ji, ať z něj naplánovanou
úlohu založí:

```text
Každý pátek ve 14:00 udělej týdenní revizi mého AI nastavení. Nejdřív se podívej do posledního reportu ve složce revize-ai a zjisti, které jeho zádrhele zmizely a které se objevují dál. Pak projdi moje chaty s tebou z posledních sedmi dní, najdi zádrhele, které se objevily aspoň ve dvou chatech, a ke každému navrhni opravu na správném místě. Nejvýš tři nepoužívané skilly nebo neplatná pravidla přesuň do revize-ai/archiv a zapiš, odkud jsou. Report ulož do revize-ai s dnešním datem a zeptej se mě, které opravy chci.
```

Úloha běží ve vašem počítači, takže se spustí, jen když je počítač zapnutý a
aplikace otevřená. Když v pátek ve 14:00 u počítače nebýváte, napište do
zadání čas, kdy u něj obvykle jste. Shrnutí s otázkou, které opravy chcete,
najdete mezi naplánovanými úlohami a tam také odpovíte.
## Příklad

Pavla vyřizuje objednávky v menší tiskárně. V pátek 16. 10. AI projde její
chaty z týdne a zapíše do `revize-ai/2026-10-16.md`:

```text
### Týdenní revize 16. 10. 2026
Revize pokryla 14 chatů od 9. do 16. 10.

### Zádrhele
1. Ceny v nabídkách s DPH, i když je zákazníkům posíláte bez DPH. Opravovala jste to ve třech chatech (12., 14. a 15. 10.).
   Oprava: do skillu „Nabídka pro zákazníka“ přidám řádek „Ceny uváděj bez DPH, DPH napiš zvlášť pod součet.“
2. Data v e-mailech píšu ve tvaru 10/14/2026. Přepisovala jste je ve dvou chatech (13. a 15. 10.).
   Oprava: do AGENTS.md přidám pravidlo „Datum piš česky, například 14. 10. 2026.“

### Odloženo do archivu
- Skill „Překlad do němčiny“ ze složky se skilly: v historii ani jednou nespuštěný.
- Pravidlo se starým podpisem e-mailu z AGENTS.md: odporuje novějšímu pravidlu s firemním podpisem.
```

Pavla schválí obě opravy. V pondělí zadá v novém chatu nabídku pro reklamní
agenturu a AI napíše ceny bez DPH, aniž by jí to připomínala. Další pátek
report uvede, že oba zádrhele zmizely.
## Když se zaseknete

- **AI tvrdí, že vaše minulé chaty nevidí:** prompt jste nejspíš vložili do
  běžného chatu, který do historie ve vašem počítači nevidí. Vložte ho do
  AI v [režimu Code](card:when-chat-is-not-enough), otevřené ve vaší
  složce.
- **AI našla jen pár chatů nebo nic, co by se opakovalo:** minulý týden jste
  nejspíš pracovali hlavně v běžném chatu nebo v Cowork. Týden pracujte v Code
  a revizi pusťte znovu. Když v Code pracujete déle, požádejte AI, ať projde
  delší období, třeba poslední měsíc.
- **Zádrhel se v novém chatu objeví znovu:** napište AI: „Tenhle zádrhel se
  opakuje. Zjisti, odkud opravdu čteš pravidla, a opravu zapiš tam.“
- **Něco z archivu vám chybí:** řekněte AI, ať to podle reportu vrátí ze
  složky `revize-ai/archiv` na původní místo.
## Co bude hotové

Ve složce `revize-ai` máte report z první revize. Oprava zádrhele, který se
tento týden opakoval, je zapsaná tam, odkud ji AI čte, a v novém chatu jste si
ověřili, že se zádrhel už nevrací. Nepoužívané skilly a neplatná pravidla,
pokud jste nějaké měli, leží v archivu, odkud je můžete kdykoli vrátit.
Revize je naplánovaná na každý
pátek, takže další report přijde sám.
## Co dál

Když revize navrhne nový skill, vylaďte ho podle karty
[skillu](card:create-skill-from-proven-process). Aby
páteční revize běžela spolehlivě a sama hlásila chyby, pokračujte k
[naplánované úloze](card:recurring-ai-task).
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
