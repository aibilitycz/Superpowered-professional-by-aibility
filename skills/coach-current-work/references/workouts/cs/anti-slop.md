# Projeďte text anti-slopem: ať nezní jako od AI

AI najde v textu obraty a sliby, podle kterých čtenář pozná AI, přepíše je a další texty pohlídá sama.

## Projeďte text anti-slopem: ať nezní jako od AI

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním textem, který chcete poslat.
## K čemu se hodí

Ve čtvrtek posíláte paní Horákové z nákupu nabídku na servis firemních
dodávek. Úvod napsala AI a začíná větou o spolehlivém partnerovi v náročné
době, stejně jako čtyři další nabídky na jejím stole. Navíc v ní stojí, že
opravu zvládnete do 24 hodin, i když to nikdo z firmy neslíbil.

Obecné fráze a nepotvrzené sliby zmizí, když je AI porovná s poptávkou a
ceníkem a nahradí tím, co v nich opravdu stojí.
## Co si připravit

- text, který chcete poslat a který celý nebo zčásti napsala AI,
- podklady, ze kterých vychází: poptávku, ceník nebo poznámky z hovoru,
- AI, kterou v práci používáte, nebo AI v [režimu Cowork nebo Code](glossary:workmode).
## Jak na to

1. Vložte prompt a pod řádek „Text:“ dejte text nebo název souboru ve
   složce; v chatu přiložte podklady. AI vrátí nálezy a přepsaný text a
   části o souborech v chatu vynechá.
2. Napište AI, které opravy nechcete, a doplňte místa `[DOPLNIT]`, nebo je
   nechte vyškrtnout. AI text dokončí, uloží seznam obratů s pravidlem a
   řekne vám, kam.
3. V novém chatu nechte AI napsat jiný text, třeba odpověď zákazníkovi.
   Obraty ze seznamu by v něm být neměly.

Do seznamu patří jen obraty, které se můžou objevit i v dalších textech.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Zkontroluj text na konci této zprávy, než ho pošlu. Je tam název souboru ve složce, nebo celý text. Najdi místa, podle kterých by čtenář poznal, že ho psala AI, a přepiš je tak, aby zněla jako od člověka, který věc zná.

Projdi text čtyřmi filtry:
- Konkrétnost: tvrzení a přívlastky bez důkazu, třeba „spolehlivý partner“ nebo „výrazně ušetříte“. Nahraď je číslem, jménem, datem nebo situací z podkladů.
- Vzorce: ohrané obraty („v dnešní uspěchané době“, „posuneme vás na další úroveň“, „neváhejte se ozvat“), protiklady typu „nejde jen o X, ale o Y“ a efektní závěry, které nic neříkají.
- Rytmus: tři a víc stejně dlouhých vět za sebou, řetěz krátkých vět a automatické trojice slov.
- Formát: dlouhé pomlčky, emoji místo odrážek a hvězdičky z Markdownu v textu, kde se z nich tučné písmo nestane, třeba v e-mailu.
Nakonec se u celého textu zeptej: mohl by viset na webu jakékoli firmy? Když ano, přepiš ho konkrétněji.

Čísla, termíny, jména a sliby nevymýšlej. Porovnej je s podklady ve složce nebo v chatu. Co v nich není, označ [DOPLNIT] a zeptej se mě.

Vrať nejdřív nálezy: citaci z textu, filtr, který porušuje, a lepší verzi. Pod ně dej celý přepsaný text. Řeknu ti, které opravy nechci, a doplním, co chybí. Hotový text ulož do nového souboru vedle původního a napiš mi jeho název. Když jsem text vložil do chatu, vrať ho celý.

Pak ulož nejvýš pět obratů z nálezů, které se nejspíš objeví i v dalších textech, do souboru anti-slop.md ve složce, ve které pracuješ. Ke každému obratu napiš, čím ho nahradit, a pod seznam stručně čtyři filtry. Když soubor existuje, připiš jen nové obraty. Do souboru AGENTS.md ve stejné složce přidej pravidlo: „Než mi ukážeš text, který půjde ven pod mým jménem, zkontroluj ho podle anti-slop.md.“ Když AGENTS.md neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Když pracuješ v běžném chatu bez složky, soubory nezakládej a do své paměti si ulož samotný seznam obratů s pravidlem: „Než mi ukážeš text, který půjde ven pod mým jménem, zkontroluj ho podle tohoto seznamu.“ Nakonec mi napiš, kam jsi seznam a pravidlo uložil.

Text:

## Ve vašem nástroji

### Microsoft Copilot

Text vložte do Copilot Chat a podklady přiložte přes + u pole pro zprávu.
Uložení do paměti Copilot potvrdí hláškou Memory updated; přehled je v
nastavení pod Chat settings › Personalization › Saved memories. Bez paměti
napište „Vypiš seznam jako text“ a vložte ho do Custom instructions na
stejném místě. Skilly má Copilot v
režimu Cowork (Customize › Skills), když ho firma zapnula.

### ChatGPT

V běžném chatu si ChatGPT seznam uloží do paměti (nastavení, Personalization
› Memory); bez paměti ho vložte do Custom Instructions na stejném místě. Se
složkou pracuje Codex v aplikaci ChatGPT pro počítač: zvolte otevření složky
(open a folder) a `anti-slop.md` i pravidlo v `AGENTS.md` uloží sám. Skilly
má ChatGPT v tarifech Business, Enterprise a Edu.

### Claude

V běžném chatu si Claude seznam s pravidlem uloží do paměti. V Cowork
vyberete složku s textem při zadávání úkolu a AI si odkaz na `AGENTS.md`
zapíše do instrukcí složky; Claude Code čte `AGENTS.md` sám. Skilly umí
Claude v chatu, v Cowork i v Claude Code.

### Gemini

Trvalé místo pro seznam je v Gemini Gem, protože pracovní účet nemá paměť.
Na konci napište „Vypiš jen seznam obratů s pravidlem“ a uložte ho přes
Share & export › Export to Docs. Pak Gems › New Gem: do instrukcí „Zkontroluj
každý text podle seznamu v připojeném dokumentu“, dokument přes Knowledge ›
Add from Drive. Krok 3 i další texty dělejte v tomto Gemu.
## Co je anti-slop

Anti-slop je kontrola, při které AI v textu najde věty typické pro AI a
přepíše je na konkrétní věty z vašich podkladů. Slop je anglické slovo pro
pomyje; na internetu se tak říká textům, které AI vyrobí bez péče a které by
mohly viset na webu jakékoli firmy. Čísla a termíny si AI přitom nevymýšlí;
co v podkladech nenajde, označí a zeptá se vás.

Kontrola stojí na čtyřech filtrech z promptu. Konkrétnost hlídá věty, které
by šly napsat o jakékoli firmě, a nahrazuje je čísly, jmény a situacemi z
vašich podkladů. Vzorce jsou fráze, které AI používá pořád dokola, třeba úvod
o náročné době nebo závěr s výzvou, ať se ozvete. Rytmus prozradí AI, když
píše několik stejně dlouhých vět za sebou nebo vyjmenovává vždycky po třech,
třeba „rychle, levně a spolehlivě“. Formát hlídá dlouhou pomlčku, kterou lidé
na klávesnici skoro nepíšou, a emoji místo odrážek.

`anti-slop.md` je obyčejný textový soubor ve složce s textem. Je v něm seznam
obratů, které nechcete, a čím je nahradit. Koncovka `.md` znamená zápis v
[Markdownu](glossary:markdown). `AGENTS.md` je soubor s pravidly pro AI ve
stejné složce. AI v režimu Cowork nebo Code si ho přečte na začátku každé
práce, takže kontrolu nemusíte zadávat znovu; kde to nástroj potřebuje
nastavit, zařídí to AI podle promptu. V běžném chatu si AI seznam s pravidlem
uloží do paměti; kde nástroj paměť nemá, najdete náhradu v bloku „Ve vašem
nástroji“.
## Ať se kontrola spouští sama

Ze seznamu obratů udělejte [skill](glossary:skill), tedy uložený návod, a
kontrola poběží ve všech vašich projektech, ne jen ve složce s `AGENTS.md`.
AI si ho otevře sama pokaždé, když pro vás píše text pro lidi. Kde skilly
váš nástroj má, ukazuje blok Ve vašem nástroji. Když
pracujete jen v běžném chatu a seznam má AI v paměti, tenhle krok
nepotřebujete. Ve složce s `anti-slop.md` stačí zadat:

```text
Udělej skill s názvem anti-slop ze seznamu obratů v anti-slop.md; když soubor nevidíš, vezmi seznam ze své paměti. Má se spustit pokaždé, když pro mě píšeš nebo upravuješ text, který půjde ven pod mým jménem: e-mail, nabídku, příspěvek nebo text na web. Skill projde text čtyřmi filtry ze souboru, opraví obraty ze seznamu a čísla ani sliby si nevymýšlí. Když ti řeknu o dalším obratu, který nechci, připiš ho do skillu. Ulož skill tak, aby fungoval ve všech mých projektech; když ho musím uložit nebo zapnout sám, řekni mi přesně, kam kliknout.
```
## Příklad

Martin Dvořák ze servisu firemních aut posílá 15. 10. 2026 nabídku paní
Horákové z logistické firmy. V poptávce stojí, že firma má 38 dodávek v Brně
a v Olomouci a na opravu teď čeká až týden. Úvod nabídky napsala AI:

```text
V dnešní uspěchané době je spolehlivý partner pro správu vozového parku klíčový. Nabízíme komplexní servis, rychlou reakci a individuální přístup. Opravu zvládneme do 24 hodin. Neváhejte se na nás obrátit.
```

AI vrátí čtyři nálezy. První větu nahradí situací z poptávky: „Píšete, že
na opravu jedné z vašich 38 dodávek teď čekáte až týden.“ Místo celé druhé
věty vyjmenuje podle ceníku, co servis obsahuje: pravidelné prohlídky a
náhradní vůz po dobu opravy. Opravu do 24 hodin označí `[DOPLNIT]`, protože
v podkladech není. Závěr změní na jeden další krok: „Napište mi, kterou
dodávku máme prohlédnout jako první.“

Martin si u mistra v dílně ověří, že běžnou opravu zvládnou do dvou
pracovních dnů. AI to do textu doplní a do `anti-slop.md` zapíše:

```text
### Obraty, které nechci
- „v dnešní uspěchané době“: začít situací zákazníka z poptávky
- „komplexní servis“: vyjmenovat, co servis obsahuje
- „neváhejte se na nás obrátit“: napsat jeden konkrétní další krok
```

V pondělí 19. 10. Martin ve stejné složce nechá AI odpovědět jinému
zákazníkovi. Odpověď končí otázkou, který den se zákazníkovi hodí první
prohlídka, a obraty ze seznamu v ní nejsou.
## Když se zaseknete

- **AI opraví jen pár slov a text zní pořád stejně:** napište jí, ať
  přepíše celý odstavec a začne situací čtenáře, a přiložte podklad, ze
  kterého ji má vzít, třeba poptávku nebo poznámky z hovoru.
- **V textu je hodně `[DOPLNIT]`:** AI nemá z čeho čísla vzít. Přiložte
  ceník, smlouvu nebo poptávku. Tvrzení, která potvrdit nedokážete, nechte AI
  z textu vyškrtnout.
- **AI tvrdí, že `anti-slop.md` uložila, ale ve složce není:** pracujete
  nejspíš v běžném chatu, který soubory měnit neumí. Přepněte do
  [Cowork nebo Code](card:when-chat-is-not-enough), nebo AI požádejte, ať
  seznam uloží do paměti.
- **Nový chat obraty ze seznamu znovu píše:** v Cowork nebo Code otevřete
  chat ve stejné složce a napište AI, ať si přečte `AGENTS.md` a zařídí,
  aby ho v tomhle nástroji četla na začátku každé práce. V běžném chatu
  se vraťte do chatu, kde kontrola proběhla, a napište AI, ať si seznam
  obratů s pravidlem uloží do paměti. Paměť musí být zapnutá v nastavení.
## Co bude hotové

Máte text, který můžete odeslat: bez obratů typických pro AI a s čísly a
sliby, které jste potvrdili. Ve složce leží `anti-slop.md` se seznamem
obratů, které už nechcete, a v `AGENTS.md` pravidlo, podle kterého AI každý
další text zkontroluje sama; v běžném chatu má AI seznam s pravidlem v
paměti nebo ve vlastních instrukcích nástroje. V novém
chatu jste si ověřili, že AI pravidlo opravdu použije.
## Co dál

Fakta, čísla a zdroje v reportu nebo prezentaci zkontrolujete s kartou
[Zkontrolujte výstup AI](card:kontrola-vysledku). Když má AI psát rovnou
vaším stylem, uložte si ho do
[vlastních Custom Instructions](card:custom-instructions).
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

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
