# Zkontrolujte výstup AI: čísla a tvrzení proti podkladům

AI porovná čísla a tvrzení ve výstupu s podklady, chyby opraví a uloží si pravidlo, aby se nevracely.

## Zkontrolujte výstup AI: čísla a tvrzení proti podkladům

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním výstupem AI a jeho podklady.
## K čemu se hodí

V úterý ráno posíláte řediteli měsíční přehled prodeje. Komentář k číslům
napsala AI z exportu a stojí v něm, že tržby v září vzrostly o 12 % hlavně
díky Slovensku. Na poradě se ředitel zeptá, odkud těch 12 % je, a vy nevíte,
jestli AI viděla celou tabulku, nebo jen její první list.

Když AI dohledá každé číslo v podkladech a pojmenuje, proč chyba vznikla,
řediteli přesně řeknete, odkud těch 12 % je.
## Co si připravit

- výstup od AI, který chcete poslat dál: report, nabídku, zápis nebo tabulku,
- podklady, ze kterých vznikl: export, ceník, smlouvu nebo přepis schůzky,
- AI, kterou v práci používáte, nebo AI v [režimu Cowork nebo Code](glossary:workmode).
## Jak na to

1. Vložte prompt a pod „Výstup:“ a „Podklady:“ dejte text nebo názvy
   souborů; v chatu podklady přiložte. Když výstup vznikl podle
   [skillu](glossary:skill) nebo naplánované úlohy, napište to pod prompt.
2. AI vrátí nálezy, opravený výstup a jedno klíčové číslo s místem v
   podkladu. Otevřete podklad a číslo porovnejte sami, protože AI svou chybu
   může přehlédnout znovu.
3. Napište, které opravy nechcete, a doplňte místa `[OVĚŘIT]`, nebo je
   nechte vyškrtnout. AI výstup dokončí, uloží pravidlo proti příčině chyby a
   řekne vám, kam.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Zkontroluj výstup, který připravila AI, než ho pošlu dál. Výstup a podklady, ze kterých vznikl, jsou na konci zprávy: jako text, jako názvy souborů ve složce, nebo v příloze.

Na začátku napiš, které soubory máš načtené a jestli celé: kolik stran, listů nebo řádků. Když některý nemáš celý, zkontroluj, co máš, a napiš mi, které listy nebo strany mám poslat zvlášť, protože z nich výstup vychází. Pak najdi ve výstupu každé číslo, cenu, datum, jméno, tvrzení a rozhodnutí, které jde ověřit v podkladech, a porovnej je. Projdi i opačný směr: co v podkladech je a ve výstupu chybí, třeba položka z poptávky nebo úkol z porady. Čísla, která vznikla výpočtem, spočítej znovu a výpočet ukaž. Styl a tón neopravuj, hlídej jen to, jestli obsah sedí.

V první odpovědi vrať:
- tabulku nálezů: citace z výstupu, co říká podklad a kde přesně (soubor, strana nebo list a řádek tak, jak ho uvidím po otevření souboru), oprava a příčina,
- celý opravený výstup,
- jedno číslo, na kterém výstup stojí nejvíc, a kde přesně ho v podkladu najdu, ať ho můžu ověřit.

Příčinu vyber z těchto: chyběl podklad, zadání bylo nejasné, AI podklad pochopila jinak, nenačetl se celý podklad nebo byl chat moc dlouhý, podklad je zastaralý, chyba ve výpočtu. Když příčinu nevíš jistě, napiš, že je to odhad. Co v podkladech nenajdeš, nedomýšlej: označ to [OVĚŘIT] a zeptej se mě.

Pak počkej. Napíšu ti, které opravy nechci, a doplním místa s [OVĚŘIT]. Potom opravenou verzi ulož do nového souboru vedle původního a napiš mi jeho název; v chatu bez složky ji vrať celou.

Nakonec napiš na jednu větu pravidlo proti příčině, která se může vrátit. Když se žádná vrátit nemůže, vezmi pravidlo „U každého čísla uveď soubor a stranu nebo list, ze kterého je.“ Když ti napíšu, že výstup vznikl podle skillu nebo naplánované úlohy, oprav pravidlo přímo v nich. Jinak ho ulož do souboru AGENTS.md ve složce, ve které pracuješ; když neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. V běžném chatu bez složky si pravidlo ulož do paměti, a když to nejde, napiš mi přesně, kam ho v nastavení vložit. Napiš mi, kam je pravidlo uložené.

Výstup:
Podklady:

## Ve vašem nástroji

### Microsoft Copilot

V Copilot Chat přiložíte přes + až 20 souborů, každý do 50 MB, včetně
Excelu a PDF. Pravidlo si Copilot uloží do paměti a ukáže hlášku Memory
updated; přehled najdete v nastavení pod Chat settings › Personalization ›
Saved memories. Obecné pravidlo pro všechny chaty patří do Custom
instructions na stejném místě.

### ChatGPT

V běžném chatu podklady přiložte přes + u pole pro zprávu. Pravidlo si
ChatGPT uloží do paměti, kterou najdete v nastavení pod Personalization ›
Memory; obecné pravidlo pro všechny chaty patří do Custom Instructions na
stejném místě. Se složkou pracuje Codex, režim v aplikaci ChatGPT pro
počítač, který čte `AGENTS.md` a soubory otevře přímo ve složce.

### Claude

V běžném chatu si Claude pravidlo uloží do paměti. V Cowork vyberete složku s
výstupem a podklady při zadávání úkolu a AI si odkaz na `AGENTS.md` zapíše do
instrukcí složky; Claude Code čte `AGENTS.md` sám.

### Gemini

Podklady přiložte přes Add files z počítače nebo z Disku Google, najednou
nejvýš 10 souborů do 100 MB. Chybějící list z Tabulek Google otevřete a
stáhněte přes File › Download ve formátu CSV. Paměť ani vlastní instrukce
aplikace Gemini u pracovního účtu nemá, a tak si celý prompt i pravidlo nechte
uložit jako skill (napište „Ulož to jako skill“); při další kontrole pak stačí
dát výstup a podklady.
## Proč výstup AI nesedí

Chyba ve výstupu má obvykle jednu z šesti příčin a každá potřebuje jiné
pravidlo, které ji příště pohlídá:

| Příčina | Jak se pozná | Pravidlo na příště |
|---|---|---|
| Chyběl podklad | AI číslo nebo slib domyslela, v podkladech není | Co AI v podkladech nenajde, označí `[OVĚŘIT]`. |
| Zadání bylo nejasné | Ceny jsou jednou s DPH a jednou bez, nebo za jiné období | Ceny jsou vždy bez DPH a za celý kalendářní měsíc. |
| AI podklad pochopila jinak | Ve výstupu je rozhodnutí, které na poradě zaznělo jen jako návrh, nebo čísla z jiného sloupce | Za rozhodnutí se bere jen to, co v podkladu někdo výslovně odsouhlasil. |
| Nenačetl se celý podklad | Chybí poslední strany PDF, druhý list tabulky nebo začátek dlouhého chatu | AI na začátku napíše, kolik stran a listů načetla. |
| Podklad je zastaralý | Ve složce leží loňský ceník vedle nového a AI vzala ten starý | Ceny se berou jen z nejnovějšího ceníku a jeho název je pod výstupem. |
| Chyba ve výpočtu | Součet nebo procento nesedí, když ho spočítáte znovu | AI každé číslo spočítá a výpočet ukáže. |

`AGENTS.md` je obyčejný textový soubor s pravidly pro AI ve složce, ve které
pracujete. AI v režimu Cowork nebo Code si ho přečte na začátku každé práce,
takže pravidlo nemusíte opakovat; kde to nástroj potřebuje nastavit, zařídí
to AI podle promptu. V běžném chatu si AI pravidlo uloží do paměti.

Skill je uložený návod pro AI a naplánovaná úloha zadání, které AI spouští
sama v nastavený čas. Když chyba vznikla v nich, AI opraví pravidlo přímo
tam a oprava platí pro každý další výstup.
## Ať AI kontroluje sama

Obecné pravidlo zařídí, že AI každý výstup s čísly porovná s podklady dřív,
než vám ho ukáže; pravidlo z cvičení hlídá jen jednu příčinu. Ve složce ho
AI zapíše do `AGENTS.md`, v běžném chatu do paměti. Stačí zadat:

```text
Ulož si pravidlo pro veškerou práci se mnou: Než mi ukážeš report, nabídku, prezentaci nebo e-mail s čísly, porovnej každé číslo a tvrzení s podklady. Pod výstup napiš jednou větou, ze kterých souborů vychází a co se ověřit nepodařilo. Co v podkladech není, označ [OVĚŘIT]. Ve složce pravidlo zapiš do AGENTS.md a zařiď, ať ho v tomhle nástroji čteš na začátku každé práce; v Cowork do instrukcí složky. V běžném chatu bez složky si ho ulož do paměti.
```
## Příklad

Lucie Benešová z agentury, která pořádá firemní akce, posílá 16. 10. 2026
firmě Kovo Jihlava nabídku na vánoční večírek pro 120 hostů. Nabídku
připravila AI ve složce `Nabidky` z poptávky a ceníků. Kontrola vrátí tři
nálezy:

| Ve výstupu | V podkladu | Příčina |
|---|---|---|
| raut 120 × 690 Kč | `cenik-2026-10.pdf`, strana 2: 740 Kč za osobu | podklad je zastaralý, AI vzala loňský ceník ze stejné složky |
| pronájem sálu 18 000 Kč s DPH | tamtéž: 18 000 Kč bez DPH | zadání bylo nejasné, neříkalo, jestli psát ceny s DPH |
| šatna v nabídce chybí | `poptavka-kovo.pdf`, strana 3: šatna pro 120 hostů | nenačetl se celý podklad, AI přečetla jen první dvě strany poptávky |

AI přepočítá raut na 88 800 Kč, doplní šatnu podle ceníku a opraví celkovou
cenu. Lucie otevře ceník a cenu rautu na straně 2 porovná sama. Do
`AGENTS.md` ve složce `Nabidky` AI zapíše:

```text
Ceny ber jen z nejnovějšího ceníku ve složce, u každé napiš, jestli je s DPH, nebo bez, a pod nabídku uveď název ceníku. Poptávku přečti celou a na začátku napiš, kolik má stran.
```

Další nabídka, kterou AI ve stejné složce připraví o týden později, končí
řádkem „Ceny bez DPH podle `cenik-2026-10.pdf`“.
## Když se zaseknete

- **AI nenačte celý podklad nebo hlásí, že je moc velký:** napíše vám,
  které listy nebo strany jí chybí. Každý chybějící list uložte z Excelu
  volbou Uložit jako ve formátu CSV, který uloží jen jeden list, a pošlete do
  stejného chatu se zprávou „Tady jsou chybějící listy, dokonči kontrolu.“ Celý podklad
  najednou zkontroluje AI v
  [Cowork nebo Code](card:when-chat-is-not-enough), kde soubor otevře
  přímo ve složce.
- **Tvrzení nemá zdroj ve vašich podkladech:** když jde o údaj zvenku, třeba
  cenu konkurence nebo číslo o trhu, nechte AI zdroj dohledat na internetu
  přes [Deep Research](card:deep-research). Jinak tvrzení z výstupu
  vyškrtněte.
- **Špatně je skoro celý výstup:** příčina je v zadání nebo v podkladech a
  oprava po kouscích ji neodstraní. Doplňte chybějící podklad, připište k
  zadání pravidlo z kontroly a nechte AI výstup udělat znovu.
- **AI příště udělá stejnou chybu:** zeptejte se jí, kde má pravidlo
  uložené. Ve složce má být v `AGENTS.md`. V běžném chatu musí být zapnutá
  paměť; když ji firma vypnula, uložte pravidlo podle bloku „Ve vašem
  nástroji“, nebo [přepněte do Cowork nebo Code](card:when-chat-is-not-enough),
  kde ho AI zapíše do `AGENTS.md`.
## Co bude hotové

Máte opravený výstup, ve kterém čísla a tvrzení sedí s podklady, a u každé
opravené chyby víte, proč vznikla. Jedno číslo, na kterém výstup stojí
nejvíc, jste v podkladu ověřili sami. Pravidlo proti příčině chyby má AI
uložené v `AGENTS.md`, ve skillu, v zadání úlohy nebo v paměti, takže ho při
další práci použije sama.
## Co dál

Když čísla sedí a text má ještě znít jako od člověka, projeďte ho
[anti-slopem](card:anti-slop), tedy kontrolou obratů, podle kterých čtenář
pozná AI. Když stejný druh výstupu kontrolujete každý týden, udělejte z
kontroly [skill](card:create-skill-from-proven-process), tedy návod, který
si AI otevře sama.
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
