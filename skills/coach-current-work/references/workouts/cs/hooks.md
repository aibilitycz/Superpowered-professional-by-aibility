# Nastavte si hook: kontrola dokumentů, kterou AI nevynechá

Než vám AI ohlásí hotovo, projde každý dokument, který ve složce napsala, vaší kontrolou.

## Nastavte si hook: kontrola dokumentů, kterou AI nevynechá

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** se složkou, ve které AI píše dokumenty.
## K čemu se hodí

Zákazník v úterý dostal nabídku, ve které zůstal řádek s vaší marží z interní
kalkulace. Pokyn „marži do nabídky nepiš“ přitom AI v pravidlech měla, jen
ho při dlouhé práci přehlédla.

Hook je krok, který nástroj spustí sám pokaždé, když AI práci dokončí, takže
kontrola proběhne, i když AI na pravidlo zapomene.
## Co si připravit

- složku, ve které AI píše dokumenty rovnou do souborů, třeba nabídky ve Wordu,
- pravidla, která AI v těch dokumentech občas poruší,
- AI v [režimu](glossary:workmode) Code, která pracuje se soubory v počítači.
## Jak na to

1. Vyberte s AI pravidla, která má hook hlídat. Prompt vložte do AI v režimu
   Code otevřené ve složce s dokumenty; když se nástroj zeptá na povolení,
   povolte ho.
2. Projděte, co kontrola našla ve starších dokumentech; AI je jen přečte.
   Co kontrola hlásí zbytečně, řekněte AI a ona ji upraví.
3. U příští práce, kterou AI ve složce udělá, ověřte, že se na konci ukáže
   řádek s výsledkem kontroly. Co kontrola najde, AI opraví dřív, než vám
   řekne hotovo.

Do kontroly patří pravidla, která jde ověřit přesně: slovo, které v dokumentu
být nesmí, nebo údaj, který v něm chybět nesmí.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Code, otevřené ve vaší
složce:

Nastav v této složce hook: kontrolu dokumentů, kterou tenhle nástroj spustí sám pokaždé, když dokončíš práci. Když tady hooky neběží, třeba v Cowork nebo v běžném chatu, řekni mi to a nic nenastavuj.

Nejdřív mi navrhni pravidla pro kontrolu. Podívej se do AGENTS.md, jestli ve složce je, a do dokumentů tady a navrhni nejvýš pět pravidel, která jde ověřit přesně: slovo nebo údaj, který v dokumentu nesmí být nebo nesmí chybět. Například „V nabídce není marže ani nákupní cena.“ Zeptej se mě, která chci, a přidej i ta, která ti řeknu já.

Schválená pravidla převeď na kontrolu ve skriptu, který přečte i dokumenty ve Wordu a poběží bez instalace dalších programů. Skript ulož do podsložky kontrola a pravidla do samostatného souboru vedle něj, ať nové pravidlo nepotřebuje nové schválení hooku. Do AGENTS.md připiš, kde kontrola leží, ať ji v dalším chatu umíš upravit; když AGENTS.md ve složce není, založ ho.

Pak pusť kontrolu jednou na všech dokumentech, které ve složce už jsou, a ukaž mi, co našla. V nich nic neopravuj, mohly už odejít zákazníkům. Teprve potom zapni hook, který hlídá jen dokumenty, které od té chvíle vzniknou nebo se změní.

Hook nastav tak, aby kontrolu spustil vždy, když dokončíš práci. Když kontrola něco najde, ať ti práci vrátí a ty chybu oprav dřív, než mi řekneš hotovo. Když chyba trvá i po tvé opravě, ať tě kontrola pustí dál. Kdykoli hook nějaký dokument zkontroluje, ať mi sám vypíše řádek s výsledkem, třeba „Kontrola: 2 dokumenty v pořádku“, a když chyba zůstala, i co zůstalo. Když musím hook nebo složku v nástroji schválit, řekni mi přesně kde. Když hook začne platit až v novém chatu, řekni mi to.

Když ti později řeknu nové pravidlo, přidej ho do kontroly.

## Ve vašem nástroji

### Microsoft Copilot

Microsoft neuvádí, že by Copilot uměl spouštět hooky. Pravidla kontroly
uložte do Custom instructions (Settings and more, Chat settings,
Personalization) a na konci práce napište „Zkontroluj dokument podle mých
pravidel“. Hook nastavíte v nástroji s režimem Code, třeba v Claude Code
nebo v Codexu v aplikaci ChatGPT; požádejte o něj správce IT.

### ChatGPT

Hook nastaví Codex: v aplikaci ChatGPT pro počítač přepněte na Codex,
zvolte otevření složky (open a folder) a vložte prompt. Hook Codex spustí,
až složku označíte jako důvěryhodnou a hook schválíte; AI vám řekne kde. V běžném
chatu ChatGPT patří pravidla kontroly do Custom instructions (Settings,
Personalization).

### Claude

Hook nastaví Claude Code: v aplikaci Claude pro počítač přepněte na Code,
vyberte složku a vložte prompt; AI hook zapíše do nastavení sama. Cowork spouští hooky jen
jako součást pluginu, proto cvičení udělejte v Claude Code. V běžném chatu
Claude patří pravidla kontroly do instrukcí projektu (Set project
instructions).

### Gemini

Aplikace Gemini se složkou v počítači nepracuje, takže hook v ní nenastavíte.
Pravidla kontroly si nechte uložit jako skill (napište „Ulož to jako skill“) a
na konci práce o kontrolu požádejte. Hook nastavíte v nástroji s režimem Code,
třeba v Claude Code nebo v Codexu v aplikaci ChatGPT; požádejte o něj správce
IT.
## Co je hook

Hook, anglicky háček, je krok, který nástroj s AI spustí sám v daném
okamžiku práce, třeba na jejím začátku nebo když AI práci dokončí. Pravidlo v
`AGENTS.md`, souboru s pokyny pro AI ve vaší složce, AI čte a při dlouhé
práci ho může přehlédnout. Hook na pozornosti AI nezávisí.

Kontrolu AI napíše jako skript, tedy krátký program, který dokumenty projde
a vypíše, co nesedí. Skript pozná jen věci, které jde ověřit přesně, třeba
zakázané slovo nebo chybějící údaj. Jestli čísla sedí s podklady, nepozná;
na to je [kontrola výsledku](card:kontrola-vysledku).

Hook se uloží do nastavení nástroje v téhle složce, takže platí pro každou
práci AI v ní. Dokumenty, které píšete sami, kontrola projde, když AI napíšete
„Zkontroluj složku“. Běžný chat ani Cowork hook sám nenastaví; jak přepnout
do Code, ukazuje karta [Chat, Cowork nebo Code](card:when-chat-is-not-enough).
Kde režim Code nemáte, uložte pravidla kontroly do instrukcí svého nástroje a
o kontrolu na konci práce požádejte, jak ukazuje blok Ve vašem nástroji.
## Příklad

Tereza připravuje nabídky firemních akcí v cateringové firmě. V pondělí
19. 10. nastaví ve složce `Nabídky 2026` hook se dvěma pravidly: v nabídce
není marže ani nákupní cena a nabídka uvádí, do kdy platí. První kontrola
projde 23 dokumentů a vypíše:

```text
Kontrola: 23 dokumentů, 3 nálezy
- Nabídka Pekárna Novák.docx: chybí, do kdy nabídka platí.
- Nabídka Sklárny Horák.docx: chybí, do kdy nabídka platí.
- Nabídka Autoservis Dvořák.docx: v tabulce cen je řádek „Marže 18 %“.
```

Ve středu 21. 10. zadá Tereza nabídku na vánoční večírek pro 80 lidí z
e-mailu zákazníka a interní kalkulace. AI do tabulky převezme i sloupec s
nákupní cenou. Kontrola ho na konci práce najde a vrátí práci AI, která
sloupec smaže. Tereza pak dostane hotovou nabídku a pod ní řádek „Kontrola:
1 dokument v pořádku“.
## Když se zaseknete

- **AI píše, že hook nastavit neumí:** pracujete nejspíš v běžném chatu
  nebo v Cowork. Přepněte do [režimu Code](card:when-chat-is-not-enough) a
  otevřete v něm složku.
- **Řádek s výsledkem se neukáže nebo hook hlásí chybu:** napište AI: „Hook
  neproběhl správně. Zjisti proč a oprav to; když ho musím schválit, řekni
  mi kde.“
- **Kontrola hlásí chyby, které nejsou chyby:** pravidlo je moc široké,
  třeba slovo „marže“ ve větě o výhodách pro zákazníka nebo datum platnosti
  u dokumentu, který nabídkou není. Řekněte AI, ať kontrolu u toho pravidla
  zúží.
- **Kontrola nehlídá dokumenty, které píšete sami:** hook se spouští, když
  práci dokončí AI. Napište AI „Zkontroluj složku“ a projde i je.
## Co bude hotové

Ve složce máte hook, který po každé práci s AI projde nové a změněné
dokumenty podle vašich pravidel, a víte, co kontrola našla ve starších
dokumentech. U příští práce uvidíte řádek s výsledkem kontroly a chybu,
kterou kontrola najde, AI opraví dřív, než vám ukáže hotovou práci. Nové
pravidlo AI do kontroly přidá, když jí ho řeknete.
## Co dál

Čísla a tvrzení, která skript přesně ověřit neumí, nechte AI porovnat s
podklady v [kontrole výsledku](card:kontrola-vysledku). Když chcete projít
celou složku i bez práce v ní, třeba každé pondělí ráno, nastavte si
[naplánovanou úlohu](card:recurring-ai-task).
## Prompt

**Co to je:** Instrukce pro konkrétní interakci s AI.

**Co to není:** Není totéž jako dlouhodobý kontext, uložený asistent nebo agent.

**Proč to student potřebuje:** Spouští cvičení a vede jeho průběh; není hlavním učebním obsahem.

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
