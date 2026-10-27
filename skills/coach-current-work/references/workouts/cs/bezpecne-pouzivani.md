# Zjistěte, co smíte dát do AI: pravidlo pro váš účet

AI dohledá v podmínkách vašeho účtu, co se děje s vloženými daty, a uloží si z toho krátké pravidlo.

## Zjistěte, co smíte dát do AI: pravidlo pro váš účet

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním účtem a jedním podkladem.
## K čemu se hodí

Ve čtvrtek posíláte nabídku firmě Novák Stavby a chcete ji s AI zkrátit na
jednu stranu. V práci máte firemní AI, doma osobní účet, ve kterém se vám
píše líp. Smí nabídka se jménem klienta a cenou do osobního účtu?

Záleží na účtu: osobní účty smí konverzace často používat k trénování
modelů, dokud to v nastavení nevypnete, kdežto u firemních platí smlouva
vaší firmy s poskytovatelem, a proto AI dohledá pravidla přesně pro ten
váš.
## Co si připravit

- účet AI, u kterého nevíte, co do něj smíte dát, osobní nebo firemní,
- co o AI říkají pravidla vaší firmy a smlouva s klientem; celé je do AI
  nevkládejte,
- jeden skutečný podklad na tento týden: nabídku, tabulku nebo e-mail,
- chat s AI, která umí hledat na webu.
## Jak na to

1. Vložte prompt z AI cvičení do AI, pro kterou pravidlo chcete, a odpovězte
   na její otázky. AI dohledá v podmínkách poskytovatele, co se s daty děje,
   a ukáže pravidlo.
2. Opravte, co nesedí, a jednu citaci najděte přes odkaz a Ctrl+F. Napište
   „sedí“ a AI pravidlo uloží, nebo řekne kam. V novém chatu se jí zeptejte,
   jaké pravidlo má.
3. Popište AI podklad a údaje v něm. Podle pravidla řekne, co nahradit,
   třeba „Klient A“ místo firmy, a pak s ním pracuje.

Pravidla firmy a smlouva s klientem mají přednost před podmínkami
poskytovatele.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

Zjisti, co smím dávat do tohohle AI účtu, a ulož si z toho pravidlo, kterým se budeš řídit i v dalších chatech.

Nejdřív se mě zeptej, jaký nástroj a tarif používám, třeba osobní ChatGPT Plus nebo Microsoft Copilot s pracovním účtem, jestli mi účet dala firma a co o AI říkají pravidla mé firmy nebo smlouva s klientem. Když tarif nevím, řekni mi, kde ho v nastavení najdu. Stačí mi, když ti pravidla firmy shrnu vlastními slovy.

Pak dohledej v oficiálních podmínkách a nápovědě poskytovatele, co pro přesně tenhle tarif platí:
- jestli se moje konverzace a soubory používají k trénování modelů a kde se to vypíná,
- jak dlouho se konverzace uchovávají a kdo k nim má přístup,
- jestli pro účet platí smlouva mé firmy s poskytovatelem.
U každého zjištění uveď odkaz, datum, kdy jsi stránku četl, a krátkou doslovnou citaci v jazyce stránky, ve které to stojí. Co nenajdeš, nedomýšlej.

Z toho napiš pravidlo pro tenhle účet, nejvýš deset řádků, ve třech částech:
- Patří sem: co můžu vkládat bez úprav.
- Nahradit: co před vložením nahradím zástupnou hodnotou, třeba jméno klienta za „Klient A“, a údaje o lidech, které úkol nepotřebuje.
- Nikdy: hesla, přístupové kódy, čísla platebních karet a všechno, co firemní pravidla zakazují.
Do části Nikdy dej také údaje o zdraví, náboženství a členství v odborech, pokud je firma pro tenhle účet výslovně nepovolila. Firemní pravidla a smlouva s klientem mají přednost před tím, co dovolují podmínky poskytovatele. Co nejde dohledat, napiš na konec jako otázku pro konkrétního člověka, třeba správce IT nebo klienta. Pod pravidlo dej odkazy na zdroje s datem.

Pravidlo mi ukaž, zapracuj moje opravy a ulož si ho do paměti, až napíšu, že sedí. Když paměť nemáš, zkrať ho tak, aby se vešlo do vlastních instrukcí (Custom Instructions), a řekni mi, kde je v nastavení najdu. Když pracuješ se složkami v počítači, zapiš pravidlo do svých pravidel, která platí ve všech složkách, ne jen do jednoho projektu.

Nakonec se mě zeptej, s jakým podkladem chci dnes pracovat a jaké údaje v něm jsou, zatím bez údajů samotných. Podle pravidla mi řekni, jestli ho můžu vložit celý, nebo co v něm před vložením nahradit. Až podklad vložím, udělej s ním práci, kterou potřebuju.

## Ve vašem nástroji

### Microsoft Copilot

S pracovním účtem platí v Copilotu ochrana firemních dat: dotazy, odpovědi
ani firemní data Microsoft nepoužívá k trénování modelů a na webu Copilot
hledá, pokud to firma nevypnula. Když napíšete, že pravidlo sedí, uloží ho
do paměti, a kdyby ne, napište „zapamatuj si toto pravidlo“. Naplánovanou
úlohu založíte s licencí Microsoft Copilot přes Naplánovat tuto výzvu u
odeslaného promptu.

### ChatGPT

Osobní účty ChatGPT smí konverzace používat k trénování, dokud v Settings
pod Data controls nevypnete Improve the model for everyone; Business a
Enterprise je ve výchozím nastavení nepoužívají. Pravidlo si AI uloží do
paměti, a když ji nemáte, připište ho pod Custom Instructions. Naplánovanou
úlohu založí AI na požádání, přehled je pod Scheduled.

### Claude

Osobní účty Free, Pro a Max mají v nastavení soukromí (Privacy) volbu Model
Improvement, která určuje, jestli smí Anthropic chaty použít ke zlepšování
modelů; Team a Enterprise je k trénování ve výchozím nastavení nepoužívají.
Pravidlo si AI uloží do paměti. V Cowork ho mějte i v Instructions for
Claude v Settings.

### Gemini

S pracovním účtem Google Workspace Google vaše data bez svolení k trénování
nepoužívá; osobní účet je používá a část chatů čtou lidé, vypnete to v
Gemini Apps Activity. Paměť ani vlastní pokyny pracovní účet nemá, a tak
pravidlo vložte do instrukcí robota Gem (Roboti Gem, Nový Gem) a nový chat
otevřete v něm.
## Když už se to stalo

Do AI odešlo něco, co tam nepatří, třeba export zákazníků do osobního účtu.
Hned udělejte tři věci:

1. **Konverzaci dál nepoužívejte** a nesdílejte. Nemažte ji, dokud vám to
   neřekne ten, komu to hlásíte. Smazání nevrátí, co už odešlo, a záznam bude
   potřeba k posouzení.
2. **Zapište pět faktů:** co se stalo (druh údajů, ne jejich obsah), kdy se to
   stalo a kdy jste to zjistili, kam to odešlo (nástroj a účet), koho se to
   může týkat a co už jste udělali. Co nevíte, napište jako neznámé.
3. **Nahlaste to hned** člověku, který to ve firmě řeší, třeba IT nebo
   pověřenci pro ochranu osobních údajů. U práce pro klienta to nahlaste i
   kontaktní osobě u klienta. U osobních údajů firma často musí únik ohlásit
   úřadu, a to pokud možno do 72 hodin od chvíle, kdy se o něm dozví.

Hlášení vám z pěti faktů sepíše AI. Původní obsah do ní znovu nevkládejte.
## Ať pravidlo nezastará

Poskytovatelé AI mění podmínky i to, co dělají s daty osobních účtů. Pravidlo
udrží aktuální [naplánovaná úloha](card:recurring-ai-task), kterou AI spustí
jednou za čtvrt roku a kterou můžete založit kdykoli po workoutu. Vložte
tohle zadání do chatu, kde jste pravidlo psali, a požádejte AI, ať z něj
naplánovanou úlohu založí. Když váš nástroj naplánované úlohy nemá, dejte si
připomínku do kalendáře a zadání mu jednou za čtvrt roku pošlete sami.

```text
Jednou za čtvrt roku projdi oficiální podmínky a nápovědu k mému tarifu. Když se změnilo něco, co ovlivňuje moje pravidlo pro data, napiš mi, co se změnilo, s odkazem a datem, a navrhni novou verzi pravidla. Když se nic nezměnilo, napiš jen jednu větu. Při zakládání úlohy do ní zapiš přesný název mého tarifu a celé současné pravidlo.
```
## Příklad

Jana koordinuje zakázky ve stavební firmě. Doma píše v osobním účtu AI s
placeným tarifem, v práci má firemní AI. AI v podmínkách našla, že Janin
tarif konverzace k trénování používá, dokud se v nastavení nevypne. Jana
přepínač vypnula a napsala AI, co o AI stojí ve směrnici IT: klientské
podklady jen do firemní AI. AI jí ukázala pravidlo, Jana doplnila čísla
zakázek a AI si ho uložila do paměti:

```text
Pravidlo pro můj osobní účet AI, placený tarif (ověřeno 9. 10. 2026)
- Patří sem: moje vlastní texty a části podkladů bez jmen klientů a cen.
- Nahradit: jména klientů a firem (Klient A, Firma B), kontakty, čísla zakázek a jména lidí, která úkol nepotřebuje.
- Nikdy: hesla, přístupové kódy, čísla karet, údaje o zdraví a celé klientské podklady s cenami. Ty patří do firemní AI (směrnice IT, bod 3).
- Otázka pro IT: smím sem dávat interní ceník bez jmen klientů?
- Zdroje: nápověda poskytovatele, článek o nastavení dat (9. 10. 2026); směrnice IT z 1. 3. 2026.
```

Jana chtěla v osobním účtu přepsat úvod nabídky pro Novák Stavby. AI podle
pravidla řekla, ať místo „Novák Stavby“ napíše „Klient A“ a jméno
stavbyvedoucího vynechá, protože ho úvod nepotřebuje. Jana nahradila dvě
jména, úvod vložila a AI ho přepsala. Celou nabídku s cenou pak zkrátila ve
firemní AI.
## Když se zaseknete

- **AI nenašla podmínky nebo neumí hledat na webu:** napište jí přesný název
  nástroje a tarifu, jak ho vidíte v nastavení účtu. Když hledání na webu ve
  firemním účtu vypnul správce, ať AI napíše pravidlo ze směrnice firmy a co
  nejde ověřit, nechá jako otázku pro IT.
- **Firemní pravidla pro AI nemáte:** AI napíše pravidlo podle podmínek
  poskytovatele a na konec dá otázku pro vašeho manažera nebo IT. Než
  odpoví, patří jména klientů a jejich podklady do části „Nahradit“.
- **Nový chat pravidlo nezná:** když je pravidlo v pokynech projektu,
  otevřete nový chat přímo v projektu. Jinak máte paměť nejspíš vypnutou, nebo ji ve
  firemním účtu vypnul správce. Připište zkrácené pravidlo pod svoje vlastní
  instrukce, tedy pole v nastavení, které AI čte na začátku každého chatu.
  Jak na to, ukazuje karta [Custom Instructions](card:custom-instructions).
- **Úkol bez skutečných jmen nedává smysl:** udělejte ho v AI, kam podle
  pravidla patří, třeba ve firemní AI. Když chcete hotový text potom použít
  v osobním účtu, nechte jména nahradit rovnou ve firemní AI.
- **V podkladu je pár jmen, která tam pravidlo nedovoluje:** nahraďte je v
  textovém editoru nebo tabulce funkcí Najít a nahradit a podklad vložte až
  potom.
## Co bude hotové

Máte pravidlo pro svůj AI účet se zdroji a datem. AI si ho uložila a v novém
chatu jste si ověřili, že ho zná. Podle něj jste připravili první skutečný
podklad a AI s ním udělala práci, kterou jste potřebovali. Víte také, co
udělat v prvních minutách, když do AI odejde něco, co tam nepatří.
## Právní hranice

Karta vám pomůže zorientovat se a nenahrazuje právní radu: co smíte, určují
pravidla vaší firmy, smlouva s klientem a
[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces).
## Co dál

Pravidlo si udělejte i pro druhý účet, který používáte, třeba osobní účet
vedle firemní AI. Když má AI vědět i to, kdo jste a jak vám odpovídat,
nastavte si [Custom Instructions](card:custom-instructions). Společná
pravidla pro celý tým řeší karta
[pravidla pro AI v týmu](card:pravidla-pro-tym).
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
