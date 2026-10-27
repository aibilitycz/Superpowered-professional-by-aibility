# Vytvořte si README: úvodní stránka projektu

AI napíše úvodní stránku projektu, ze které kolega i nový chat hned poznají stav a platný dokument.

## Vytvořte si README: úvodní stránka projektu

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním rozpracovaným projektem.
## K čemu se hodí

Za týden jedete na dovolenou a přípravu firemní konference v Olomouci
přebírá kolega Marek. Ve složce projektu leží `catering_final.docx`,
`catering_final_2.docx`, poznámky z porady a loňský program. Vy víte, že
platí druhá nabídka cateringu a že loňský program slouží jen jako vzor.
Marek ani nový chat to z názvů souborů nepoznají a vy byste mu to ve
spěchu vysvětlovali po telefonu.

Pomohla by úvodní stránka projektu, anglicky README. AI ji napíše z podkladů
ve složce a Marek i nový chat z ní hned poznají, který dokument platí a co
je další krok.
## Co si připravit

- složku s jedním rozpracovaným projektem v počítači nebo synchronizovanou
  do něj,
- poznámky nebo e-maily k projektu, které ve složce nejsou,
- AI v [režimu](glossary:workmode) Cowork nebo Code, která pracuje se
  soubory v počítači.
## Jak na to

1. Otevřete Cowork nebo Code ve složce projektu a vložte prompt, pod něj
   poznámky, které ve složce nejsou. AI projde podklady a zeptá se na to, co
   z nich nepozná.
2. Odpovězte na otázky. AI uloží `README.md` a do `AGENTS.md` přidá
   pravidlo, aby ho četla a udržovala. Zkontrolujte hlavně, jestli správně
   určila, který dokument platí.
3. V novém chatu ve stejné složce se zeptejte, podle kterého dokumentu se
   pracuje a co je další krok. Dobrá odpověď jmenuje dokument, který README
   označuje jako platný.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce:

Napiš pro tenhle projekt README: úvodní stránku, ze které kolega i nový chat hned pochopí, o co jde a jak pokračovat. Když nemáš přístup ke složce projektu a nemůžeš do ní sám ukládat soubory, řekni mi to hned, ať můžu přepnout do Cowork nebo Code.

Projdi všechny podklady ve složce projektu a poznámky, které ti dám pod tímto zadáním. Když už ve složce README nebo jiná úvodní stránka je, uprav ji a druhou nezakládej.

Napiš README tak, aby se vešlo na jednu stránku, a dej mu tyto části:
- O co jde: cíl projektu, pro koho je a do kdy.
- Kde jsme: co je hotové, co ještě ne, jaký je další krok a kdo ho udělá.
- Co do projektu nepatří: co jsme vyřadili nebo odložili.
- Které dokumenty platí: u každého důležitého souboru odkaz, k čemu slouží a jestli platí, slouží jen jako vzor, nebo už neplatí.
- Kde co je: krátký přehled složek a souborů.
- Aktualizováno: dnešní datum.

Obsah dokumentů nepřepisuj, odkazuj na ně. Když dva dokumenty říkají něco jiného nebo nepoznáš, který platí, zeptej se mě. Nerozhoduj podle slova „final“ ani podle data. Otázky mi polož všechny najednou a jen ty, na které podklady neodpoví. Po mých odpovědích ulož stránku jako README.md do hlavní složky projektu.

Nakonec přidej do souboru AGENTS.md ve složce projektu pravidlo: „Před prací na projektu si přečti README.md. Když se změní cíl, stav, další krok nebo platný dokument, uprav README.md.“ Když AGENTS.md neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky.

## Ve vašem nástroji

### Microsoft Copilot

Cowork najdete vedle přepínače Chat; když tam není, požádejte o něj správce
IT. Vidí jen soubory na OneDrivu a SharePointu, proto na konec promptu
připište: „Pracuj ve složce projektu na OneDrivu, README veď jako dokument
Word a pravidlo mi napiš pro Customize, Preferences.“ V kroku 3 napište v
nové úloze, kde projekt leží. Naplánované úlohy najdete na stránce
Automations.

### ChatGPT

V aplikaci ChatGPT pro počítač přepněte na Codex, zvolte otevření složky
(open a folder) a vyberte složku projektu. Codex čte `AGENTS.md` sám a
naplánovanou úlohu založí, když ho o ni požádáte; najdete ji pod Scheduled.
Když Codex nevidíte, ve firmě ho nejspíš vypnul správce, tak ho požádejte,
ať ho zapne.

### Claude

V aplikaci Claude pro počítač otevřete Cowork a vyberte složku projektu,
nebo ji otevřete v Claude Code; obojí mají placené tarify. Cowork si
pravidlo zapíše do instrukcí složky (Folder instructions), Claude Code čte
`AGENTS.md`. Naplánovanou úlohu AI založí, když ji o to požádáte, a najdete
ji v levém panelu pod Scheduled.

### Gemini

Gemini do složky v počítači neukládá. Přiložte dokumenty přes Add from
Drive, na konec promptu připište „Ke složce přístup nemáš, nepřepínej mě a
pracuj s přiloženými dokumenty.“ a README uložte přes Share & export, Export
to Docs. Krok 3 udělejte v Gemu (Gems, New Gem) s README v Knowledge a pokynem „Odpovídej podle README“;
kolegovi ho nasdílíte přes Share.
## Co je README

[README](glossary:readme) znamená anglicky „přečti si mě“. Tak se jmenuje
úvodní soubor, který člověk ve složce projektu otevře jako první. Na jedné
stránce říká, o co v projektu jde, v jakém je stavu, jaký je další krok,
který dokument platí a kde co najdete. Pomůže i vám, když se k projektu
vrátíte po dvou týdnech.

Přípona `.md` znamená zápis v [Markdownu](glossary:markdown): je to obyčejný
text, ve kterém mřížky `#` na začátku řádku označují nadpis. Otevřete ho v
jakémkoli textovém editoru, ve Windows třeba v Poznámkovém bloku, a AI ho
přečte i upraví bez převádění.

`AGENTS.md` je soubor s pravidly pro AI ve stejné složce. Řada nástrojů v
režimu Code si ho přečte sama na začátku každé práce, takže AI nemusíte
připomínat, ať si README přečte. Kde to nástroj sám neumí, AI pravidlo uloží
do jeho nastavení, nebo vám napíše, kam ho vložit.

README na dokumenty jen odkazuje a u každého řekne, k čemu slouží; když AI z
obsahu nepozná, který dokument platí, zeptá se vás. U Marka by správná
odpověď v kroku 3 jmenovala `catering_final_2.docx`.

Běžný chat README do složky neuloží, protože do ní nevidí. Když zatím jinou
AI nemáte, založte si aspoň [projekt v chatu](card:asistent), nebo se
podívejte, jak [přepnout do Cowork nebo Code](card:when-chat-is-not-enough).

Slovo `final` v názvu ani nejnovější datum nedokazují, že dokument platí.
## Ať README nezastará

Naplánovaná úloha jednou týdně upraví README i podle porad a e-mailů.
Pravidlo v `AGENTS.md` pokryje práci, kterou děláte s AI ve složce projektu.
Stav projektu se ale mění i jinde, třeba na poradě nebo v e-mailu. Vložte AI
v režimu Cowork nebo Code toto zadání a požádejte ji, ať z něj naplánovanou
úlohu založí:

```text
Každý pátek v 15:00 projdi složku projektu a k tomu e-maily a schůzky z tohoto týdne, které se projektu týkají a ke kterým máš přístup. Když se změnil stav, další krok nebo platný dokument, uprav README.md: změň jen dotčené řádky a datum aktualizace. Když se nic nezměnilo, README nech, jak je. Na konci mi napiš, co jsi změnil.
```

Když úloha pracuje se soubory ve vašem počítači, poběží, jen když je počítač
zapnutý a aplikace otevřená.
## Příklad

Lucie vybírá nového dodavatele úklidu pro pobočky v Brně a ve Zlíně. AI
projde složku a zeptá se na dvě věci: která ze dvou nabídek firmy Čistota
platí a jestli je firma Blesk ještě ve hře. Pak zapíše:

```text
# Výběr dodavatele úklidu
Aktualizováno: 9. 10. 2026

### O co jde
Nový dodavatel úklidu pro pobočky Brno a Zlín od 1. 1. 2027.

### Kde jsme
Prohlídky budov proběhly, ve výběru zůstaly dvě firmy.
Další krok: Lucie domluví do 20. 10. jednání s oběma firmami.

### Co do projektu nepatří
Mytí oken zůstává u současné firmy.

### Které dokumenty platí
- nabidka_cistota_v2.pdf: platí, cena po prohlídce.
- nabidka_cistota.pdf: neplatí, nahradila ji v2.
- nabidka_uklidplus.pdf: platí.
- porovnani-cen.xlsx: platí, porovnání obou nabídek.
- nabidka_blesk.pdf: neplatí, firma Blesk z výběru vypadla.

### Kde co je
Nabídky ve složce nabidky, fotky a poznámky z prohlídek ve složce prohlidky.
```

O týden později se Lucie v novém chatu zeptá, kterou cenu firmy Čistota
má dát do porovnání. Dobrá odpověď vezme cenu z `nabidka_cistota_v2.pdf` a
firmu Blesk vůbec nezmíní. Když AI sáhne po staré nabídce, napište jí, ať v
README opraví řádek u toho dokumentu.
## Když se zaseknete

- **AI tvrdí, že README uložila, ale ve složce není:** pracujete nejspíš v
  běžném chatu, který soubory měnit neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough) a otevřete v něm složku
  projektu.
- **Nevíte ani vy, který dokument platí:** požádejte AI, ať vám ukáže, v čem
  se dokumenty liší. Rozhodněte vy nebo ten, kdo projekt vede, a AI to
  zapíše.
- **README je dlouhé nebo opisuje dokumenty:** požádejte AI, ať ho zkrátí na
  jednu stránku a místo obsahu dokumentů nechá jen odkazy.
- **Nový chat odpovídá podle starého dokumentu:** otevřete chat ve stejné
  složce projektu a zkontrolujte, že `README.md` i `AGENTS.md` leží přímo v
  ní. Pak AI požádejte, ať si README přečte.
## Co bude hotové

Máte `README.md`, podle kterého na projektu pokračuje kdokoli bez dalších
otázek. V `AGENTS.md` je pravidlo, díky kterému si ho AI před prací přečte
a po změně upraví. V novém chatu jste si ověřili, že AI podle README najde
platný dokument a ví, co je další krok.
## Co dál

Když chcete mít takhle v pořádku všechny projekty najednou, založte si [PACT](card:pact-workspace). Pokud chcete
nastavit i jiné úlohy, které AI dělá pravidelně sama, podívejte se na
[naplánovanou úlohu](card:recurring-ai-task).
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

## README / Začněte tady

**Co to je:** Krátký úvodní soubor nebo stránka, která vysvětluje, co v projektu je, co je aktuální, kde hledat důležité zdroje a jak s nimi má pracovat člověk nebo AI.

**Co to není:** Není to kopie všech dokumentů ani další dlouhý manuál k projektu.

**Proč to student potřebuje:** Pomáhá lidem i AI rychle zjistit, kde začít a které podklady jsou aktuální a závazné.

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
