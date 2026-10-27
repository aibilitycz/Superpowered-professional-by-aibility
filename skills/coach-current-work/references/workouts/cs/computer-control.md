# Použijte Computer control: AI za vás ovládá programy v počítači

Program v počítači, který nemá propojení s AI, ovládne AI sama a údaje z něj přepíše za vás.

## Použijte Computer control: AI za vás ovládá programy v počítači

**Obtížnost: střední.**\
**Čas: přibližně 20 minut** s jedním programem v počítači.
## K čemu se hodí

Na konci měsíce přepisujete faktury za svůj projekt z fakturačního programu do
přehledu nákladů v Excelu. Program máte jen ve firemním počítači, nemá
propojení s AI ani webovou verzi a přepis trvá čtyřicet minut.

Computer control znamená, že AI vidí vaši obrazovku a ovládá programy myší a
klávesnicí podobně jako vy, takže si poradí i s takovým programem.
## Co si připravit

- jednu úlohu, kterou pravidelně děláte ručně v programu bez webové verze,
- odhad, kolik minut vám úloha ručně trvá,
- složku v počítači, kam ukládáte práci k úloze; AI do ní uloží výsledek a
  postup,
- AI, která ovládá počítač; jestli to umí ta vaše, ukazuje blok „Ve vašem
  nástroji“.
## Jak na to

1. Otevřete AI v režimu Cowork nebo Code ve složce z přípravy a vložte prompt.
   Do posledních dvou řádků doplňte úlohu (program, co v něm udělat, kam
   výsledek) a kolik minut vám trvá.
2. Když AI pro program nenajde konektor, požádá o přístup k němu a na Macu i o
   nahrávání obrazovky; povolte to. Když si ve Windows vezme myš, nepracujte,
   dokud neskončí.
3. V programu zkontrolujte jednu nebo dvě položky z výsledku a napište AI,
   kolik minut jste u úlohy strávili. AI zapíše postup a srovnání do
   `ulohy-v-aplikacich.md`.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce, a na poslední dva řádky doplňte svou úlohu a čas:

Udělej za mě úlohu v programu v mém počítači, kterou pravidelně dělám ručně. Úloha a čas, který mi ručně trvá, jsou na posledních dvou řádcích.

Nejdřív zjisti, jestli pro program máš konektor. Když ano, udělej úlohu přes něj. Když ne, ovládej program přes obrazovku myší a klávesnicí. V programu dělej jen to, co žádá úloha; když jde o přepis údajů, jen čti a exportuj. Když nevíš, kterou možnost v programu zvolit, zeptej se mě. Poznamenej si, kdy jsi začal a kdy skončil.

Výsledek ulož tam, kam říká úloha, napiš mi, kde v programu ho můžu ověřit, a zeptej se mě, kolik minut jsem u úlohy strávil já.

Pak zapiš postup pro příště do souboru ulohy-v-aplikacich.md ve složce, ve které pracuješ; když soubor existuje, připiš úlohu na konec. Pod nadpis s názvem úlohy napiš: program a jestli pro něj existuje konektor, kroky, které fungovaly (názvy oken, nabídek a tlačítek), jak má vypadat výsledek a srovnání času: kolik minut jsi pracoval ty, kolik minut mi úloha trvá ručně a kolik minut jsem u ní strávil já.

Nakonec přidej do souboru AGENTS.md ve stejné složce pravidlo: „Když úloha potřebuje program v počítači, použij konektor, pokud existuje. Když neexistuje, ovládej obrazovku podle postupu v ulohy-v-aplikacich.md.“ Když AGENTS.md neexistuje, založ ho. Zařiď, aby sis ho v tomhle nástroji přečetl na začátku každé práce; v Cowork to zapiš do instrukcí složky.

Úloha:
Ručně mi trvá:

## Ve vašem nástroji

### Microsoft Copilot

Copilot Cowork programy ve vašem počítači neovládá, prompt z karty proto
nevkládejte. Export udělejte sami, uložte ho na OneDrive, v Cowork na
`copilot.cloud.microsoft` ho přiložte tlačítkem + a napište „Z exportu udělej
[úloha], postup ulož jako skill.“ Dostanete hotovou tabulku, klikání v
programu zůstává na vás. Na pravidelnou úlohu ať Copilot napíše IT žádost o
computer use z Copilot Studia.

### ChatGPT

Režim Code je v ChatGPT Codex v aplikaci ChatGPT pro počítač: zvolte Codex a
otevřete složku (open a folder). Ovládání počítače přidáte v nabídce Plugins,
Computer Use tlačítkem Install plugin; ve firemním účtu ho může správce
omezit. Naplánovaná úloha v Codexu programy v počítači spolehlivě neovládne,
proto opakovanou úlohu spouštějte jednou větou.

### Claude

V aplikaci Claude pro počítač zapnete ovládání počítače v Settings, General
přepínačem Enable computer use; AI ho pak použije v Cowork i v Claude Code.
Mají ho tarify Pro a Max, firemní Claude Team a Enterprise zatím ne.
Naplánované úlohy jsou v Cowork v levém panelu pod Scheduled.

### Gemini

Aplikace Gemini pro Mac a Windows vidí okno, které jí nasdílíte, programy ale
za vás neovládá. Když program umí export, uložte ho na Disk, v aplikaci Gemini
ho přiložte přes Add from Drive a napište, co z něj chcete; tabulku uložíte
tlačítkem Export to Sheets. Na pravidelnou úlohu ať Gemini napíše IT žádost,
ve kterém programu a kterou úlohu chcete AI svěřit.
## Co je Computer control

Computer control je anglický název pro ovládání počítače; v nastavení AI
nástrojů se mu obvykle říká Computer use. AI si dělá snímky obrazovky, podle
nich pozná, kde je které okno a tlačítko, a kliká a píše do programu podobně
jako vy. Před prací v každém programu se zeptá, jestli do něj smí. Na Macu
obvykle pracuje v okně na pozadí, ve Windows si někdy vezme myš a klávesnici.
Zastavit ji můžete kdykoli tlačítkem stop v aplikaci.

Konektor, tedy přímé propojení AI s aplikací, najdete v nastavení svého AI
nástroje. AI přes něj čte a zapisuje data přímo, bez klikání, takže je
rychlejší a méně chybuje. Když pro aplikaci konektor není, dá se někdy
připojit přes službu Composio, která propojí víc než tisíc aplikací; u
firemních systémů ji musí povolit IT. A když má program webovou verzi, je
rychlejší nechat AI pracovat v ní přes prohlížeč. Ovládání obrazovky proto
přijde na řadu až u programů, pro které nic z toho nejde. Pravidlo v
`AGENTS.md` to AI připomene u každé práce.

`ulohy-v-aplikacich.md` je obyčejný textový soubor s vašimi úlohami v
programech, s kroky, které fungovaly, a se srovnáním času. `AGENTS.md` je
soubor s pravidly pro AI ve stejné složce; AI si ho přečte na začátku každé
práce, takže pravidlo o konektoru nemusíte opakovat.
## Ať AI úlohu dělá sama každý měsíc

Úlohu, která se pravidelně opakuje, nemusíte ani spouštět. Vložte do AI,
která umí naplánované úlohy i ovládání počítače, tohle zadání, jen název
úlohy a čas změňte na svoje, a požádejte ji, ať z něj naplánovanou úlohu
založí. Kde naplánované úlohy ve svém nástroji najdete, ukazuje blok „Ve
vašem nástroji“.

```text
Každý první pracovní den v měsíci v 8:00 udělej úlohu „Faktury za projekt“ podle souboru ulohy-v-aplikacich.md za předchozí měsíc. Výsledek ulož do stejné složky s měsícem v názvu souboru a do shrnutí mi napiš počet faktur a celkovou částku.
```

Úloha ovládá program ve vašem počítači, takže poběží jen tehdy, když je
počítač zapnutý, neuspaný a aplikace s AI otevřená. Když váš nástroj takovou
úlohu naplánovat neumí, spusťte ji jednou větou, třeba „Udělej faktury za
projekt podle `ulohy-v-aplikacich.md`“, a zbytek udělá AI sama.
## Příklad

Martin koordinuje projekt nového e-shopu v distribuční firmě. Na konci
měsíce přepisuje faktury dodavatelů za projekt z fakturačního programu do
přehledu nákladů. Program běží jen na firemních počítačích a konektor ani
webovou verzi nemá. Ve středu 30. 9. 2026 otevře AI v režimu Code ve složce
`E-shop`, vloží prompt a na poslední dva řádky napíše:

```text
Úloha: Ve fakturačním programu najdi přijaté faktury za září se střediskem E-shop a zapiš je do tabulky naklady-projektu.xlsx v této složce: dodavatel, číslo faktury, částka bez DPH, splatnost.
Ručně mi trvá: 40 minut
```

AI zjistí, že pro program konektor není, a požádá o přístup k němu. Martin
ho povolí, a protože má Mac, AI pracuje v okně na pozadí a on se mezitím
věnuje poště. Jednou se AI zeptá, jestli patří do přehledu
i středisko E-shop marketing, a za 14 minut je v tabulce 23 faktur od 9
dodavatelů za 412 600 Kč bez DPH. Martin v programu otevře dvě faktury,
částky sedí, a na otázku AI odpoví, že ho úloha stála 3 minuty. Do
`ulohy-v-aplikacich.md` AI zapíše:

```text
### Faktury za projekt
- Program: fakturační program v počítači, konektor neexistuje.
- Kroky: nabídka Doklady, Přijaté faktury, filtr Středisko E-shop (bez E-shop marketing) a měsíc, tlačítko Export do Excelu.
- Výsledek: tabulka naklady-projektu.xlsx se sloupci dodavatel, číslo faktury, částka bez DPH, splatnost.
- Čas: AI 14 minut, ručně 40 minut, Martin 3 minuty (otázka na středisko a kontrola).
```

Na konci října Martin napíše jen „Udělej faktury za projekt podle
`ulohy-v-aplikacich.md`“ a na středisko se AI už neptá.
## Když se zaseknete

- **AI odpoví, že počítač ovládat neumí:** pracujete v běžném chatu nebo
  ve webové verzi. Ovládání počítače funguje jen v aplikaci pro počítač v
  režimu Cowork nebo Code. Víc v kartě
  [Chat, Cowork nebo Code](card:when-chat-is-not-enough).
- **Volbu v nastavení nevidíte:** aktualizujte aplikaci. Firemní Claude
  Team a Enterprise ovládání počítače nemají; když máte i ChatGPT, použijte
  Codex. Ve firemním ChatGPT může správce ovládání počítače omezit.
- **Aplikaci nebo povolení musí schválit IT:** požádejte AI v běžném chatu,
  ať pro IT napíše krátkou žádost: kterou aplikaci potřebujete, které
  povolení a k jaké úloze.
- **Na Macu AI program nevidí nebo do něj nekliká:** v Nastavení systému,
  Soukromí a zabezpečení zaškrtněte aplikaci s AI u položek Nahrávání
  obrazovky a Zpřístupnění.
## Co bude hotové

Máte hotovou jednu úlohu v programu, který nemá konektor, a výsledek jste
ověřili přímo v programu. V `ulohy-v-aplikacich.md` leží postup s kroky,
které fungovaly, a srovnání s časem ruční práce, takže příště stačí napsat,
kterou úlohu z něj má AI udělat. Pravidlo v `AGENTS.md` říká, kdy AI
použije konektor a kdy ovládání obrazovky.
## Co dál

Když má úloha běžet spolehlivě a sama hlásit chyby, nastavte ji jako
[naplánovanou úlohu](card:recurring-ai-task).
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
