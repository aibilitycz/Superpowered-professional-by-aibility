# Použijte Browser control: AI za vás kliká v prohlížeči

Webovou úlohu, kterou každý týden klikáte ručně, třeba stažení výkazu, udělá AI sama v prohlížeči.

## Použijte Browser control: AI za vás kliká v prohlížeči

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** s jednou úlohou na webu.
## K čemu se hodí

Každý pátek odpoledne stahujete ze systému na výkazy práce export a součty
hodin přepisujete do tabulky pro vedení. Projekt a týden přitom pokaždé
filtrujete ručně. Nikdo jiný to neumí, takže když jste na dovolené, vedení
čísla nedostane.

Browser control znamená, že prohlížeč ovládá AI: sama otevře stránku, kliká,
vyplňuje a stahuje, zatímco vy děláte jinou práci.
## Co si připravit

- jednu úlohu na webu, kterou opakujete ručně, třeba stažení reportu,
- účet na webu, kde se úloha dělá; přihlásíte se do něj sami, až o to AI
  požádá,
- složku s prací, ke které úloha patří; AI do ní uloží postup pro příště,
- AI, která ovládá prohlížeč; jestli to umí ta vaše, ukazuje blok „Ve vašem
  nástroji“.
## Jak na to

1. Otevřete AI, která ovládá prohlížeč, ve složce z přípravy a vložte prompt.
   Za řádek „Úloha:“ napište, kam má jít, co tam udělat a v jaké podobě chcete
   výsledek.
2. Na přihlašovací stránce se přihlaste sami a napište AI, ať pokračuje. Pak
   dělejte jinou práci, AI se ozve, až bude hotová nebo bude potřebovat
   rozhodnutí.
3. Na stránce, kterou AI u výsledku uvedla, ověřte jedno nebo dvě čísla.
   Postup pro příště AI uloží do souboru `ulohy-v-prohlizeci.md`.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce, a za poslední řádek doplňte svou úlohu:

Udělej za mě v prohlížeči úlohu, kterou na webu dělám pravidelně ručně. Úloha je na posledním řádku.

Otevři stránku a projdi ji až k výsledku: klikej, vyplňuj, filtruj a stahuj, co je potřeba. Když narazíš na přihlášení, řekni mi; přihlásím se a napíšu ti, ať pokračuješ. Když nevíš, kterou možnost zvolit, zeptej se mě.

Výsledek mi vrať v podobě, o kterou žádám v úloze. Ke každému číslu nebo změně připiš adresu stránky, odkud pochází, ať ho můžu ověřit.

Nakonec zapiš postup pro příště: pod nadpis s názvem úlohy napiš, kam jít, kroky, které fungovaly (adresa stránky, filtry, názvy tlačítek), a jak má vypadat výsledek. Ulož ho do souboru ulohy-v-prohlizeci.md ve složce, ve které pracuješ; když soubor existuje, připiš úlohu na konec. Když ke složce přístup nemáš, tenhle krok vynech.

Úloha:

## Ve vašem nástroji

### Microsoft Copilot

Prohlížeč ovládá Copilot Cowork, jen na webu `copilot.cloud.microsoft`
otevřeném v Edgi a po povolení od správce. Prompt vložte do Cowork (přepínač
nahoře vedle Chat); AI pracuje ve vašem Edgi, kde už jste přihlášení. Když web
chce heslo, ukáže vám kartu prohlížeče a po přihlášení pokračuje. Až skončí,
napište „Ulož postup jako skill“; naplánované úlohy jsou na stránce
Automations.

### ChatGPT

V ChatGPT ovládá prohlížeč režim Work: v aplikaci ChatGPT pro počítač přepněte
na Work a vložte prompt. Work má vestavěný prohlížeč, kde se přihlásíte sami;
s rozšířením ChatGPT pro Chrome, potvrzeným v nastavení Computer Use, pracuje
i ve vašem Chromu. Postup Work do souboru neuloží, proto ať z úlohy udělá
naplánovanou úlohu (Scheduled v levém panelu).

### Claude

Rozšíření Claude in Chrome pro placené tarify přidáte z Internetového obchodu
Chrome a přihlásíte se v něm účtem Claude; funguje jen v Google Chrome, v Edge
ne. V aplikaci Claude ho zapnete mezi konektory (Connectors) u položky Claude
in Chrome a AI pak v Cowork nebo Claude Code pracuje ve vašem přihlášeném
Chromu. Naplánované úlohy jsou v Cowork v levém panelu pod Scheduled.

### Gemini

Gemini v Chromu, který prohlížeč ovládá, v EU včetně Česka dostupný není,
proto úlohu udělejte napůl. Export z webu stáhněte sami, v aplikaci Gemini ho
přiložte přes Add from Drive nebo z počítače a napište, co z něj chcete, třeba
„sečti hodiny za každého člověka“. Když se úloha opakuje, ať Gemini napíše IT
žádost o automatické stahování těch dat.
## Co je Browser control

Browser control je anglický název pro ovládání prohlížeče. AI vidí stránku,
kterou má otevřenou, a kliká a píše do ní podobně jako vy. Zvládne tak i
weby, ke kterým se jinak nedostane: nastaví něco v aplikaci nebo projde váš
web a najde odkazy, které nefungují. Když má aplikace konektor, tedy přímé
propojení s AI, použijte raději ten, protože je rychlejší a spolehlivější.
Před krokem, který potřebuje vaše schválení, třeba před nákupem, odesláním
nebo prací na novém webu, se AI zastaví a zeptá.

Některé nástroje pracují ve vašem prohlížeči, kde už jste přihlášení, a
dostanou se všude, kam vy, i do firemních systémů za VPN. Jiné mají vlastní
vestavěný prohlížeč, ve kterém se přihlásíte zvlášť.

`ulohy-v-prohlizeci.md` je obyčejný textový soubor se seznamem vašich úloh
v prohlížeči a s kroky, které fungovaly. Koncovka `.md` znamená, že je psaný
v [Markdownu](glossary:markdown), jednoduchém zápisu, ve kterém mřížky `###`
na začátku řádku označují nadpis.
## Ať se úloha spouští sama

Úlohu, která se opakuje každý týden, nemusíte ani spouštět. Vložte do AI,
která umí naplánované úlohy, tohle zadání, jen název úlohy změňte na svůj, a
požádejte ji, ať z něj naplánovanou úlohu založí. Kde je ve svém nástroji
najdete, ukazuje blok „Ve vašem nástroji“.

```text
Každý pátek v 15:00 udělej úlohu „Týdenní hodiny na projektu“ podle souboru ulohy-v-prohlizeci.md. Výsledek ulož do stejné složky s dnešním datem v názvu souboru a tři hlavní čísla mi napiš do shrnutí.
```

Úloha pracuje se souborem ve vašem počítači a s vaším prohlížečem, takže
poběží, jen když je počítač zapnutý, aplikace s AI otevřená a případně
připojená VPN.
## Příklad

Jana koordinuje stavbu nového skladu v logistické firmě a každý pátek
posílá vedení, kolik hodin na projektu tým odpracoval. V pátek 9. 10. 2026
otevře složku projektu v AI, která umí ovládat prohlížeč, vloží prompt a za
poslední řádek napíše:

```text
V systému na výkazy práce stáhni hodiny za tento týden pro projekt Nový sklad a vrať mi součet za každého člena týmu a celkem.
```

AI otevře systém výkazů, vyfiltruje projekt a týden od 5. do 9. 10. a stáhne
export. Tým odpracoval 86 hodin, nejvíc Petr (31) a Lucie (24); u každého
čísla AI uvede adresu stránky. Jana otevře přehled v systému a celkový
součet sedí. Do `ulohy-v-prohlizeci.md` AI zapíše:

```text
### Týdenní hodiny na projektu
- Kam: systém na výkazy práce, sekce Reporty.
- Kroky: filtr Projekt Nový sklad, období od pondělí do pátku tohoto týdne, tlačítko Export do Excelu.
- Výsledek: hodiny za každého člena týmu a celkem, u každého čísla adresa stránky.
```

Další pátek Jana napíše jen „Udělej týdenní hodiny na projektu podle
`ulohy-v-prohlizeci.md`“ a dostane čísla za nový týden.
## Když se zaseknete

- **AI odpoví, že prohlížeč ovládat neumí:** běžný chat to nezvládne.
  Zapněte ovládání prohlížeče podle bloku „Ve vašem nástroji“. Víc v kartě
  [Chat, Cowork nebo Code](card:when-chat-is-not-enough).
- **IT nedovolí rozšíření nainstalovat:** použijte prohlížeč, který nic
  instalovat nepotřebuje: vestavěný prohlížeč v ChatGPT Work, Copilot Cowork
  v Edgi, nebo v Claude Cowork vlastní prohlížeč, na který přepnete v
  nastavení volbou Preferred browser. Přihlásíte se v něm zvlášť.
- **AI dlouho bloudí po webu:** doplňte do úlohy název sekce nebo adresu
  stránky, kde má hledat, a pusťte ji znovu.
- **AI postup pro příště neuloží:** pracujete bez přístupu ke složce.
  Nastavte úlohu jako naplánovanou, nebo ji příště spusťte v režimu Cowork
  nebo Code otevřeném ve složce.
## Co bude hotové

Máte hotovou jednu webovou úlohu, kterou jste dřív klikali ručně, a výsledek
jste ověřili na stránce, odkud pochází. Postup s kroky, které fungovaly,
leží v `ulohy-v-prohlizeci.md`, takže příště úlohu zadáte jednou větou.
## Co dál

Z výkazu, který AI stáhne, může rovnou připravit podklad pro poradu; když to
děláte každý týden, [uložte oba kroky jako skill](card:create-skill-from-proven-process).
Když má výsledek dostávat i kolega a úloha má hlásit chyby, nastavte ji jako
[naplánovanou úlohu](card:recurring-ai-task).
## Markdown

**Co to je:** Jednoduchý formát čistého textu, ve kterém se nadpisy, seznamy, odkazy a další struktura zapisují pomocí několika běžných znaků. Soubory obvykle používají příponu `.md`.

**Co to není:** Není to programovací jazyk ani formát určený pouze vývojářům.

**Proč to student potřebuje:** Zůstává snadno čitelný a upravitelný pro lidi i AI a lze ho přenášet mezi různými nástroji.

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
