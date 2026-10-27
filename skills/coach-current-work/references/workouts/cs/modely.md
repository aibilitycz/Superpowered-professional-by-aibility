# Přepínejte model podle úlohy: rychlý na třídění, silný na rozhodnutí

Na dvou svých úlohách porovnáte rychlý a silný model a AI si zapíše, který použít na jakou práci.

## Přepínejte model podle úlohy: rychlý na třídění, silný na rozhodnutí

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** se dvěma úlohami z tohoto týdne.
## K čemu se hodí

Zákazník chce do pátku vědět, jestli jeho zakázku stihnete do konce
listopadu. Dáte AI tabulku s kapacitami týmu a za pár vteřin máte odpověď,
že ano. AI ale přehlédla, že dva lidé z týmu mají v listopadu dovolenou,
protože běžela na výchozím modelu a vy jste nevěděli, že jde přepnout.

Rychlý model stačí na třídění a přepis, a když rozhodnutí necháte silnému
modelu s delším přemýšlením, spíš si všimne podmínek, které rychlý přeskočí.
## Co si připravit

- hromadnou práci z tohoto týdne, třeba 30 až 50 úkolů z porad nebo dotazů k roztřídění,
- jedno rozhodnutí, třeba výběr ze tří nabídek podle ceny, termínu a podmínek,
- podklady k oběma úlohám,
- AI, kterou v práci používáte, nebo AI v [režimu Cowork nebo Code](glossary:workmode).
## Jak na to

1. V nabídce modelu zvolte nejrychlejší nastavení; kde je, ukazuje blok Ve
   vašem nástroji. Vložte prompt a na poslední dva řádky napište každou
   úlohu jednou větou.
2. Přepněte na nejsilnější nastavení a napište „Druhé kolo“, v Cowork nebo
   Code v novém chatu „Druhé kolo podle `ulohy.md`“. AI úlohy udělá znovu a
   kola porovná.
3. U každé úlohy vyberte výsledek, který byste použili. AI podle toho zapíše
   přehled, který model na co, a uloží si pravidlo, aby vám příště řekla,
   kdy přepnout.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Porovnáváme, jak dvě moje pracovní úlohy zvládne rychlý a silný model. Úlohy jsou na posledních dvou řádcích, podklady najdeš ve složce, ve které pracuješ, nebo v přílohách. Když nepracuješ přímo ve složce v mém počítači, žádné soubory nevytvářej a všechno nech v chatu.

První kolo:
- Napiš, na jakém modelu a s jakým nastavením přemýšlení běžíš. Když to nevíš jistě, zeptej se mě.
- Udělej obě úlohy celé. Chybějící podklady si vyžádej.
- U každé úlohy si na začátku a na konci zjisti aktuální čas a zapiš, jak dlouho trvala. Když to nejde, napiš „neměřeno“ a při porovnání se mě zeptej, jak dlouho jsem na které kolo zhruba čekal.
- Zadání obou úloh a celý zbytek tohoto promptu od „Druhé kolo“ dál ulož do souboru ulohy.md. Výsledky ulož do souboru porovnani-modelu.md pod nadpis s názvem modelu a nastavením přemýšlení.

Druhé kolo spustím zprávou „Druhé kolo“ na silnějším nastavení:
- Když běžíš na stejném modelu a nastavení jako v prvním kole, upozorni mě, ať přepnu.
- Vezmi úlohy z ulohy.md nebo z prvního kola výš v chatu a udělej je znovu od začátku stejně jako v prvním kole. Výsledky prvního kola nepoužívej; porovnani-modelu.md otevři, až budeš mít vlastní výsledky, a připiš je pod nový nadpis.
- Pak obě kola porovnej. U každé úlohy ukaž nejvýš tři rozdíly, podle kterých se pozná, jestli se výsledek dá použít, a jak dlouho každé kolo trvalo. Delší text ani delší čekání samy o sobě lepší výsledek neznamenají.
- Zeptej se mě, který výsledek u které úlohy použiju, a v porovnani-modelu.md ho označ jako vybraný.

Nakonec podle mé volby založ soubor modely.md s přehledem: typ práce, model a nastavení přemýšlení a jedna věta proč. Na konec přehledu přidej řádek: „Hotové rozhodnutí nebo rozbor před použitím zkontroluje jiný model.“ Do souboru AGENTS.md ve stejné složce přidej pravidlo: „Než začneš úkol, podívej se do modely.md. Když se na něj hodí jiný model nebo jiné přemýšlení, než se kterým běžíš, řekni mi to jednou větou hned na začátku.“ Když AGENTS.md neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Když nepracuješ ve složce, ulož si přehled i pravidlo do paměti, a když paměť nemáš, napiš mi přehled do chatu.

Hromadná práce:
Rozhodnutí nebo rozbor:

## Ve vašem nástroji

### Microsoft Copilot

V Copilot Chat je výběr vpravo nahoře: v prvním kole Quick response, ve
druhém Think deeper, a stejně odpovězte, když se AI zeptá, na čem běží. Jiný
model v Copilot Chat nevyberete, porovnáváte délku přemýšlení. Přehled si
Copilot uloží do paměti (hláška Memory updated), bez paměti ho vložte do
Custom instructions pod Chat settings › Personalization.

### ChatGPT

Nabídka je na webu v poli pro zprávu, v mobilu nahoře v konverzaci: v prvním
kole Instant, ve druhém nejvyšší stupeň, který máte (High nebo Extra High),
na účtu zdarma volba Think. Přehled si ChatGPT uloží do paměti
(Personalization › Memory), bez ní ho vložte do Custom Instructions. V
Codexu je nabídka pod polem pro zprávu.

### Claude

Nabídka modelu je vedle tlačítka pro odeslání: rychlý je třeba Haiku,
silnější Sonnet a nejsilnější Opus. V položce Effort nastavíte přemýšlení od
Low po Max. V Claude Code přepnete model příkazem `/model` a přemýšlení
příkazem `/effort`.

### Gemini

Dole v poli pro zprávu klikněte na název modelu: v prvním kole zvolte Flash
nebo Flash-Lite, ve druhém Pro a hned po něm úroveň přemýšlení High; kde se
volby jmenují Fast, Thinking a Pro, zvolte Fast a pak Pro. Paměť aplikace
Gemini u pracovního účtu nemá, a tak přehled s pravidlem vložte do
instrukcí Gemu (Gems › New Gem) a úkoly zadávejte v něm.
## Co je model a přemýšlení

[Model](glossary:ai-model) je AI, která vám odpovídá, a každá aplikace jich
nabízí několik. [Přemýšlení](glossary:reasoning-mode) je nastavení, jak
dlouho si model úlohu rozebírá, než odpoví; anglicky se mu podle aplikace
říká thinking, reasoning nebo effort. Rychlý model s krátkým přemýšlením
stačí na hromadnou práci a odpoví hned. Silný model s delším přemýšlením se
vyplatí na rozhodnutí a těžký rozbor, odpovídá ovšem pomaleji, takže ho na
všechno používat nechcete. Obojí přepnete v nabídce modelu; kde ji který
nástroj má, najdete v bloku „Ve vašem nástroji“.

`ulohy.md`, `porovnani-modelu.md` a `modely.md` jsou obyčejné textové
soubory ve složce s podklady, otevřete je třeba v Poznámkovém bloku.
`AGENTS.md` je soubor s pravidly pro AI ve stejné složce. AI v režimu
Cowork nebo Code si ho přečte na začátku každé práce, a kde to nástroj
potřebuje nastavit, zařídí to AI podle promptu, takže pravidlo o výběru
modelu nemusíte opakovat.
## Ať výsledek zkontroluje druhý model

Rozhodnutí, podle kterého budete jednat, nechte před použitím zkontrolovat
jiným modelem, než který ho napsal. Každý model přehlíží něco jiného, takže
druhý často najde, co první přeskočil. Nejlépe funguje AI jiné firmy, než
která rozhodnutí napsala. V režimu Cowork nebo Code ji otevřete ve stejné
složce, do běžného chatu podklady přiložte a rozhodnutí vložte do zprávy pod
zadání. Když máte jen jednu AI, zvolte v ní jiný silný model, a když ani
ten nemáte, zadejte kontrolu aspoň v novém chatu se stejným nastavením jako
ve druhém kole. Zadání pro kontrolu:

```text
Zkontroluj vybrané rozhodnutí (v porovnani-modelu.md, výš v tomhle chatu nebo v příloze) proti podkladům. Najdi podmínky, které autor přehlédl, tvrzení, která podklady nepodkládají, a čísla, která nesedí. U každého nálezu napiš, kde v podkladech je, a navrhni opravu. Když je rozhodnutí v pořádku, napiš to jednou větou.
```

Řádek na konci přehledu `modely.md` vám kontrolu u dalších rozhodnutí
připomene.
## Příklad

Lenka vede provoz malého e-shopu s kosmetikou. V pondělí 5. 10. 2026
otevře AI ve složce Doprava a dá jí dvě úlohy: roztřídit 48
zákaznických dotazů z minulého týdne na reklamace, dopravu a platby a
vybrat ze tří nabídek nového dopravce.

V prvním kole na nejrychlejším modelu s krátkým přemýšlením má AI dotazy
roztříděné za minutu a jako dopravce doporučí nejlevnější nabídku. Ve druhém
kole na nejsilnějším modelu s dlouhým přemýšlením roztřídí dotazy stejně,
jen to trvá čtyři minuty. U dopravců si
ale všimne, že nejlevnější nabídka účtuje pokutu, když e-shop pošle méně
než 200 balíků měsíčně, a Lenka jich posílá 120. Doporučí proto druhou
nejlevnější.

Lenka vybere třídění z prvního kola a dopravce z druhého. AI zapíše do
`modely.md`:

```text
### Který model na co
- Třídění a přepis (dotazy, seznamy, tabulky): rychlý model, krátké přemýšlení. Výsledek stejný jako u silného, hotový za minutu.
- Výběr z nabídek a smluv: nejsilnější model, dlouhé přemýšlení. Rychlý přehlédl pokutu v podmínkách dopravce.
- Hotové rozhodnutí nebo rozbor před použitím zkontroluje jiný model.
```

O týden později zadá Lenka na nejsilnějším modelu přepis ceníku do tabulky. AI
hned na začátku napíše, že na tohle stačí rychlý model.
## Když se zaseknete

- **V nabídce nemáte silnější model ani delší přemýšlení:** ve verzi zdarma
  bývá místo výběru modelu jen volba delšího přemýšlení; zapněte ji pro
  druhé kolo. Ve firemním účtu může modely skrývat správce; požádejte ho o
  přístup k silnějšímu modelu.
- **AI ve druhém kole neví, co má dělat:** v režimu Cowork nebo Code
  otevřete nový chat ve stejné složce a napište „Druhé kolo podle
  `ulohy.md`“. V běžném chatu zůstaňte v tomtéž chatu a jen přepněte model.
- **Oba modely udělají stejnou chybu:** pak je chyba nejspíš v zadání nebo
  v podkladech. Jak ji najít, ukazuje karta [Zkontrolujte výstup AI](card:kontrola-vysledku).
- **AI vám příště nic nepřipomene:** zkontrolujte, že `AGENTS.md` leží ve
  složce a pravidlo v něm je. V běžném chatu ověřte v nastavení, že máte
  zapnutou paměť. Když ji firma vypnula,
  [přepněte do Cowork nebo Code](card:when-chat-is-not-enough).
## Co bude hotové

Máte dvě úlohy z tohoto týdne hotové a u každé výsledek, který jste vybrali.
Víte, kde ve své aplikaci přepnout model a délku přemýšlení, a máte přehled,
který model na jakou práci. V Cowork nebo Code leží přehled v `modely.md`
a pravidlo v `AGENTS.md`, takže vám AI na začátku úkolu řekne, když běží
na nevhodném modelu. V běžném chatu má AI přehled i pravidlo v paměti.
## Co dál

Výsledek silného modelu před odesláním
[zkontrolujte proti podkladům](card:kontrola-vysledku). Když rozhodnutí
potřebuje zdroje z internetu, které ve složce nemáte, zadejte
[Deep Research](card:deep-research).
## AI model

**Co to je:** Systém, který zpracovává vstup a vytváří odpověď. Jeden AI nástroj může nabízet více modelů nebo jejich volbu skrýt za názvy režimů.

**Co to není:** Není to celý AI nástroj ani záruka určité kvality výsledku.

**Proč to student potřebuje:** Pomáhá oddělit schopnosti modelu od kontextu, zadání, dostupných nástrojů a prostředí, ve kterém model běží.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Režim hlubšího uvažování

**Co to je:** Volba, při které AI věnuje více výpočetního času rozboru úkolu před vytvořením odpovědi. Konkrétní provedení a název závisejí na produktu.

**Co to není:** Není to automatická záruka správnosti ani vždy nejlepší volba pro každý úkol.

**Proč to student potřebuje:** Pomáhá rozhodnout, kdy složitost nebo význam úkolu ospravedlní delší čekání, vyšší spotřebu nebo omezenou dostupnost.

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
