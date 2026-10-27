# Použijte vibe coding: AI postaví nástroj pro vaše kolegy

Kolegové si cenu nabídky spočítají sami v malém nástroji, který vám AI postaví z vaší tabulky.

## Použijte vibe coding: AI postaví nástroj pro vaše kolegy

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s ceníkem a jedním hotovým případem.
## K čemu se hodí

Kolegové z obchodu vám několikrát týdně volají, ať jim spočítáte cenu nabídky.
Tabulku s ceníkem a vzorci totiž umíte jen vy. Minulý týden jste byli na
dovolené a kolega poslal klientovi cenu bez příplatku za víkend.

S [vibe codingem](glossary:vibe-coding), tedy programováním popisem, jen
popíšete, co se má počítat, a AI napíše nástroj, ve kterém kolega zadá počet
hostů a hned vidí cenu s rozpisem.
## Co si připravit

- ceník, ze kterého kolegové počítají, ve sdílené složce, kterou máte i v
  počítači,
- ve stejné složce jeden hotový případ se správným výsledkem, třeba poslanou
  nabídku,
- jednoho kolegu, který nástroj vyzkouší jako první,
- AI v režimu Cowork nebo Code; kde ho najdete, ukazuje blok „Ve vašem
  nástroji“.
## Jak na to

1. Otevřete AI v režimu Cowork nebo Code ve sdílené složce s ceníkem a vložte
   prompt. Na poslední řádek doplňte, co má nástroj počítat, kdo ho bude
   používat a kde je hotový případ.
2. AI uloží nástroj jako `kalkulacka.html`. Otevřete ho dvojklikem, zadejte
   hotový případ a porovnejte výsledek; co nesedí nebo nejde, napište AI a
   nechte ho opravit.
3. Napište kolegovi, kde `kalkulacka.html` ve sdílené složce najde, ať v něm
   spočítá svůj nejbližší případ. Co mu nešlo, pošlete AI jeho slovy.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce s ceníkem, a na jeho poslední řádek doplňte, co má
nástroj počítat, kdo ho bude používat a ve kterém souboru je hotový případ. Jak takový řádek
vypadá, uvidíte v Příkladu.

Postav z výpočtu, který kolegové opakovaně dělají ručně v tabulce, malý nástroj, který si otevřou sami. Co má počítat, kdo ho bude používat a ve kterém souboru je hotový případ se správným výsledkem, najdeš na posledním řádku. Když nepracuješ přímo ve složce s ceníkem, řekni mi to hned.

Projdi ceník nebo tabulku ve složce a zjisti z nich všechna pravidla výpočtu: ceny, příplatky, slevy, zaokrouhlení a podmínky. Když pravidlo nepoznáš ani ze vzorců v tabulce nebo si podklady odporují, zeptej se mě a ukaž mi to na příkladu.

Nástroj ulož do jednoho souboru kalkulacka.html ve stejné složce jako ceník. Musí se otevřít dvojklikem v běžném prohlížeči bez instalace a bez internetu, takže ceník dej přímo do něj. Nahoře budou políčka, která kolega vyplní, pod nimi výsledek s rozpisem, ze kterého je vidět, jak se k číslu došlo, a tlačítko, které rozpis zkopíruje, aby ho kolega vložil do e-mailu nebo nabídky. Popisky piš slovy, která kolegové používají. Když políčko zůstane prázdné nebo v něm je nesmysl, ať nástroj srozumitelně napíše, co opravit.

Spočítej v nástroji hotový případ a porovnej výsledek se správným. Když se liší, najdi pravidlo, které počítá špatně, oprav ho a porovnej znovu. Pak mi napiš, kde kalkulacka.html najdu a co do něj mám zadat, abych výsledek ověřil sám.

Pravidla výpočtu zapiš obyčejnými slovy do souboru kalkulacka-pravidla.md ve stejné složce, i s datem ceníku a hotovým případem, na kterém jsi nástroj ověřil. Do souboru AGENTS.md v této složce přidej pravidlo: „Když se změní ceník nebo pravidla výpočtu, uprav podle nich kalkulacka.html i kalkulacka-pravidla.md. Pak spočítej hotový případ podle nového ceníku a napiš, o kolik a kvůli kterým položkám se výsledek liší od původního.“ Když AGENTS.md neexistuje, založ ho. Zařiď, ať si AGENTS.md přečteš na začátku každé práce v této složce; v Cowork to zapiš do instrukcí složky.

Co má nástroj počítat, kdo ho bude používat a ve kterém souboru je hotový případ:

## Ve vašem nástroji

### Microsoft Copilot

Copilot Cowork na `copilot.cloud.microsoft` ukládá nové soubory do své složky
Cowork na OneDrivu, ne do vaší sdílené složky. Přiložte mu ceník i hotový
případ tlačítkem +, vložte prompt a připište „Postav kalkulačku jako sešit v
Excelu, ve složce pracovat nemusíš.“ Sešit přesuňte do sdílené složky a
kolegům pošlete odkaz; pravidlo si Cowork uloží jako skill.

### ChatGPT

Režim Code je v ChatGPT Codex v aplikaci ChatGPT pro počítač: zvolte Codex a
otevřete sdílenou složku s ceníkem (open a folder). Codex uloží
`kalkulacka.html` přímo do ní a pravidlo zapíše do `AGENTS.md`.

### Claude

V aplikaci Claude pro počítač otevřete Cowork nebo Claude Code se sdílenou
složkou s ceníkem. AI uloží `kalkulacka.html` přímo do ní; v Cowork si
pravidlo zapíše do instrukcí složky.

### Gemini

Nástroj postaví Gemini v Canvasu: v aplikaci Gemini zvolte pod + Canvas,
přiložte ceník a hotový případ a vložte prompt. Když napíše, že nepracuje ve
složce, odpovězte „pokračuj v Canvasu“ a případ vyzkoušejte v náhledu. Kolegům
ho pošlete přes Share & export a Share; kdo má odkaz, vidí i ceník. Po změně
ceníku napište do stejného chatu, ať nástroj upraví.
## Co je vibe coding

Vibe coding je anglický název pro programování popisem: kód píše AI a vy ji
řídíte obyčejnými větami. Vy popíšete, co má nástroj počítat, AI napíše kód
a vy nástroj vyzkoušíte na případu, u kterého znáte správný výsledek.
Programovat nemusíte a nástroj jen počítá, takže v tabulce ani ve firemních
systémech nic nezmění. Hodí se na cokoli, co se počítá pokaždé podle
stejných pravidel: cenu nabídky z ceníku, cestovní náhrady, rozpočet firemní
akce nebo počet lidí na směnu. Do nástroje patří jen políčka, která kolegové
opravdu vyplňují, a výsledek, který potřebují poslat dál; další funkce
přidejte, až si o ně někdo z nich řekne.

Nástroj z této karty je jedna webová stránka, která počítá. Soubor `kalkulacka.html` se otevře v prohlížeči jako každá
jiná stránka, jen k němu kolega nepotřebuje internet ani AI. Běžný chat
nástroj napíše taky, ale do složky ho neuloží a po změně ceníku ho tam
neupraví.

Na rozdíl od stránky z karty [Pošlete odkaz místo
přílohy](card:web-page-output), která všem ukazuje stejný obsah, do nástroje
kolega zadá svá čísla a dostane svůj výsledek. Když potřebujete z dat jednu
odpověď jen pro sebe, stačí se [zeptat svých dat](card:prace-s-daty).

Dokud nástroj počítá jen z kopie ceníku a výsledek si kolega přečte sám,
můžete ho kolegům dát hned; když má zapisovat do firemního systému, třeba do
CRM se zákazníky, nebo ho mají otevírat přímo klienti, domluvte se nejdřív
se správcem toho systému.

`kalkulacka-pravidla.md` a `AGENTS.md` jsou obyčejné textové soubory, které
AI zapíše sama a otevírat je nemusíte. V `AGENTS.md` jsou pravidla pro AI
ve sdílené složce a AI si je přečte na začátku každé práce.
## Ať nástroj drží krok s ceníkem

Pravidlo v `AGENTS.md` zajistí, že AI po každé změně ceníku upraví nástroj
i sepsaná pravidla a ukáže vám, jak se změnila cena hotového případu. Když
od ledna platí nový ceník, uložte ho do stejné složky a napište:

```text
Od 1. 1. platí nový ceník cenik-2027.xlsx. Uprav podle něj kalkulačku a napiš mi, které ceny se změnily.
```

Protože nástroj leží ve sdílené složce, kolegové po úpravě otevřou rovnou
novou verzi a nikomu nemusíte nic posílat.
## Příklad

Petra je obchodní asistentka v cateringové firmě v Brně. Cenu rautu počítají
obchodníci v tabulce: menu za osobu, jeden číšník na každých 20 hostů,
v sobotu a v neděli příplatek 15 % a doprava 30 Kč za kilometr tam
i zpátky. 13. 10. 2026 otevře AI v režimu Cowork ve sdílené složce
Nabídky, kde leží `cenik-2026.xlsx` a nabídka, kterou minulý týden poslala účetní
kanceláři z Boskovic: raut pro 80 hostů v sobotu 24. 10., 42 km od Brna,
52 200 Kč bez DPH. Vloží prompt a na poslední řádek doplní:

```text
Cenu rautu z cenik-2026.xlsx pro obchodníky, kteří ji říkají klientům do telefonu. Hotový případ je nabidka-boskovice.pdf.
```

Na první pokus ukáže kalkulačka 52 578 Kč. Při porovnání AI zjistí, že
víkendový příplatek počítá i z dopravy, opraví to a dostane stejné číslo
jako v nabídce. Petra si nástroj otevře, zadá stejný raut a tlačítkem
zkopíruje rozpis:

```text
Raut Standard, 80 hostů × 450 Kč: 36 000 Kč
Obsluha, 4 číšníci × 1 800 Kč: 7 200 Kč
Příplatek za sobotu 15 %: 6 480 Kč
Doprava 42 km tam i zpátky: 2 520 Kč
Celkem bez DPH: 52 200 Kč
```

Pak napíše Ondřejovi, ať v kalkulačce ze složky Nabídky spočítá svatbu,
kterou zrovna řeší. Ondřej odepíše, že nevěděl, jestli kilometry zadat jen
tam, nebo tam i zpátky. Petra jeho větu pošle AI a políčko se teď jmenuje
„Vzdálenost z Brna, jedna cesta (km)“.
## Když se zaseknete

- **AI tvrdí, že nástroj uložila, ale ve složce není:** pracujete nejspíš
  v běžném chatu, který soubory ukládat neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) a otevřete v něm
  sdílenou složku s ceníkem.
- **AI se ptá na pravidlo, které sami nevíte:** napište jí, ať vám ukáže
  vzorec z tabulky, ze kterého pravidlo odhaduje, a spočítá podle něj jeden
  případ. Když ani tak nevíte, zeptejte se kolegy, který s tabulkou počítá
  nejčastěji.
- **Kolega místo nástroje vidí kód nebo ho neotevře:** ať si
  `kalkulacka.html` stáhne do počítače a otevře ho dvojklikem, ne přes
  webovou stránku OneDrivu nebo Teams. Kolegům můžete poslat i odkaz:
  požádejte AI, ať z nástroje udělá stránku se sdíleným odkazem, a
  sdílejte ji jen s lidmi z firmy jako v kartě
  [Pošlete odkaz místo přílohy](card:web-page-output).
- **Nástroj počítá jinak než tabulka:** napište AI, co jste zadali, co
  nástroj ukázal a jaký výsledek je správný. AI najde chybné pravidlo
  a opraví ho v nástroji i v `kalkulacka-pravidla.md`.
## Co bude hotové

Ve sdílené složce máte nástroj `kalkulacka.html`, který spočítal hotový
případ stejně jako vaše tabulka, a první kolega ví, kde ho najde. Vedle
něj leží `kalkulacka-pravidla.md` s pravidly výpočtu a v `AGENTS.md`
pravidlo, podle kterého AI po změně ceníku nástroj upraví a ukáže, jak se
změnila cena hotového případu. Změnu ceníku tak zadáte jednou větou.
## Co dál

Než nástroj dáte celému týmu, nechte AI porovnat několik jeho výsledků
s tabulkou, jak ukazuje [kontrola výstupu AI](card:kontrola-vysledku). Když
nástroje s AI začne stavět víc lidí v týmu, sepište společná
[pravidla pro AI](card:pravidla-pro-tym).
## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## Vibe coding

**Co to je:** Způsob tvorby webu, aplikace, skriptu nebo jiného softwarového výstupu, při kterém člověk popisuje záměr a požadované chování a AI vytváří či upravuje kód. Člověk výsledek průběžně zkouší a koriguje.

**Co to není:** Není to samostatný programovací jazyk ani záruka, že vytvořený kód je správný, bezpečný nebo připravený pro ostrý provoz.

**Proč to student potřebuje:** Pomáhá pojmenovat dostupnou cestu k vlastnímu prototypu a současně rozlišit rychlý experiment od řešení, které potřebuje testování a odbornou kontrolu.

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
