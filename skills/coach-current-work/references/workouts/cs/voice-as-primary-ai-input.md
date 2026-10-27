# Nadiktujte AI zadání: hlas místo psaní

Dvě minuty mluvíte o úkolu, jak vás napadá, a AI z toho udělá přehledné zadání a po vaší opravě i práci.

## Nadiktujte AI zadání: hlas místo psaní

**Obtížnost: snadná.**\
**Čas: přibližně 15 minut** s jedním skutečným úkolem.
## K čemu se hodí

Dodavatel vám ve čtvrtek napíše, že nestihne termín, a vy potřebujete do
pátku e-mail pro vedení. Do AI napíšete „Napiš vedení e-mail, že se projekt
zpozdí“ a dostanete zdvořilý obecný text. Proč se to zpozdilo, jaké máte
možnosti a že ředitel dlouhé e-maily nečte, jste nenapsali, protože se vám
to nechtělo vypisovat.

Mluvením řeknete i souvislosti, které byste do psaného zadání nedali, třeba
proč se termín posunul a co ředitel v e-mailu číst nebude.
## Co si připravit

- jeden skutečný úkol, třeba e-mail vedení nebo podklad pro poradu,
- dvě minuty, kdy můžete nahlas mluvit, třeba v zasedačce,
- AI, kterou v práci používáte, nebo AI v [režimu Cowork nebo Code](glossary:workmode).
## Jak na to

1. Vložte prompt a odešlete ho. Pak klikněte na ikonu mikrofonu v poli pro
   zprávu a dvě minuty mluvte: co chcete, pro koho, co víte a co vás trápí.
   Text odešlete, v chatu i s podklady.
2. AI vrátí zadání v bodech s otazníky u jmen a čísel, kterým nerozuměla.
   Opravte ho, klidně hlasem, a nechte AI práci udělat a uložit si pravidlo
   pro příště.
3. V novém chatu nadiktujte další úkol bez promptu. AI by vám měla nejdřív
   vrátit zadání v bodech.

Přeřeknutí a odbočky neopravujte, AI si s nimi poradí.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI, kterou v práci používáte:

V další zprávě ti nadiktuji pracovní úkol. Budu mluvit, jak mě to napadá, takže v textu budou odbočky, opakování a chyby z přepisu řeči. Teď jen odpověz, že posloucháš.

Z diktování nejdřív udělej zadání v těchto bodech:
- Cíl: co má vzniknout a k čemu to je.
- Pro koho: kdo to bude číst nebo používat.
- Co víme: fakta, rozhodnutí a podklady, ze kterých máš vycházet. Když zmíním soubor ve složce projektu, najdi ho a použij.
- Na co pozor: co nesmí chybět, co nechci a co mě na tom trápí.
- Výstup: podoba a délka.

Jména, čísla, data a odborné výrazy, které přepis mohl zkomolit, označ otazníkem. Když chybí něco, bez čeho práci dobře neuděláš, zeptej se mě nejvýš na dvě věci. Ukaž mi zadání a počkej, až ho opravím nebo potvrdím. Pak práci udělej podle opraveného zadání.

Nakonec si ulož pravidlo pro příště: když ti zadání nové práce nadiktuji, zpracuj ho stejně, tedy nejdřív body zadání s otazníky u nejistých míst a po mém potvrzení práci. K pravidlu připiš jména a výrazy, které přepis zkomolil, i s tím, jak se píšou správně. Když pracuješ ve složce projektu, zapiš to do souboru AGENTS.md, a když neexistuje, založ ho. Zařiď, ať si ho v tomhle nástroji přečteš na začátku každé práce; v Cowork to zapiš do instrukcí složky. Jinak to ulož do své paměti.

## Ve vašem nástroji

### Microsoft Copilot

V Copilot Chat spustíte diktování ikonou mikrofonu v poli pro zprávu (Start
dictation); čeština patří mezi podporované jazyky. Pravidlo pro příště si
Copilot uloží do paměti a ukáže hlášku Memory updated; přehled najdete v
nastavení pod Chat settings › Personalization › Saved memories. Když paměť
nemáte, vložte pravidlo do Custom instructions na stejném místě.

### ChatGPT

Diktování spustíte ikonou mikrofonu v poli pro zprávu, v aplikaci pro
počítač tlačítkem Dictate; ikona Voice spouští hlasový režim. Pravidlo si
ChatGPT uloží do paměti (nastavení, Personalization › Memory), bez paměti ho
vložte do Custom Instructions. Codex v aplikaci ChatGPT pro počítač ho
zapíše do `AGENTS.md` ve složce projektu.

### Claude

V aplikaci Claude diktujete ikonou mikrofonu u pole pro zprávu, ikona se
zvukovou vlnou spouští hlasový režim. Diktování funguje i v Cowork, kde
složku projektu vyberete při zadávání úkolu a AI si odkaz na `AGENTS.md`
zapíše do instrukcí složky. V Claude Code diktování zapnete příkazem `/voice`
a češtinu nastavíte v `/config`.

### Gemini

Diktování spustíte mikrofonem v poli pro zprávu; jazyk přepisu se řídí
jazykem prohlížeče, takže ho mějte nastavený na češtinu. Paměť aplikace
Gemini u pracovního účtu nemá, a tak na konci cvičení napište „Napiš mi
pravidlo jako text“. Pravidlo vložte do instrukcí nového Gemu (Gems › New
Gem) a krok 4 i další úkoly diktujte v tomto Gemu.
## Co je diktování

Diktování je přepis řeči na text. Mluvíte a slova se píšou do pole pro
zprávu, takže je před odesláním vidíte a můžete je opravit. Hlasový režim
(voice mode) je jiná funkce: AI s vámi vede rozhovor a odpovídá nahlas. Na
zadání práce se hodí diktování. V telefonu stačí ikona mikrofonu na
klávesnici.

`AGENTS.md` je soubor s pravidly pro AI ve složce projektu. AI v režimu
Cowork nebo Code si ho přečte na začátku každé práce, takže pravidlo o
diktování nemusíte opakovat; kde to nástroj potřebuje nastavit, zařídí to AI
podle promptu. V běžném chatu tutéž roli hraje paměť: AI si do ní ukládá, co
má platit i v dalších chatech.
## Kde diktovat

Nejjednodušší je diktovat přímo v AI. Microsoft Copilot, ChatGPT,
Claude i Gemini mají ikonu mikrofonu v poli pro zprávu, takže nic
neinstalujete. Kde ji najdete, ukazuje blok „Ve vašem nástroji“.

Do e-mailu nebo dokumentu nadiktujete text diktováním, které má počítač
v sobě:

- **Windows:** stiskněte klávesy Windows + H a mluvte.
- **Mac:** diktování zapnete v Nastavení systému › Klávesnice › Diktování,
  kde si nastavíte i klávesovou zkratku.

Když vám vestavěné diktování špatně rozumí, vyzkoušejte diktovací aplikaci.
**Wispr Flow** diktuje ve více než 100 jazycích a jazyk pozná sám,
**Soniox** má češtinu výslovně v nabídce. Obě běží na Macu, Windows, iPhonu
i Androidu a mají verzi zdarma s týdenním limitem. Na firemním počítači
může instalaci povolovat IT.
## Příklad

Lenka koordinuje spuštění nového skladového systému. Ve čtvrtek 8. 10. 2026
jí dodavatel napíše, že napojení na účetnictví do 2. 11. nestihne. Psané
zadání by znělo „Napiš vedení e-mail, že se spuštění zpozdí“. Lenka místo
toho otevře AI ve složce projektu, vloží prompt a pak dvě minuty
mluví. Řekne, že systém může běžet i bez napojení, ale faktury by pak dva
týdny ručně přepisovaly dvě kolegyně. Finanční ředitel Hrubeš bude chtít
vědět, kolik to stojí, a ředitel dlouhé e-maily nečte. AI vrátí:

```text
Cíl: informovat vedení o zpoždění napojení skladového systému na účetnictví.
Pro koho: ředitel a finanční ředitel (jméno „hrubě“?).
Co víme: dodavatel napojení do 2. 11. nestihne; systém může běžet bez něj, faktury pak ručně přepisují dvě kolegyně.
Na co pozor: finanční ředitel bude chtít vědět, kolik to stojí; ředitel dlouhé e-maily nečte.
Výstup: e-mail na pět řádků.
```

Přepis udělal z pana Hrubeše slovo „hrubě“ a AI ho označila otazníkem.
Lenka opraví dvě věci: jméno a cíl. Vedení má do středy 14. 10. vybrat,
jestli systém spustit 2. 11. bez napojení, nebo spuštění posunout na
16. 11. AI napíše e-mail se dvěma variantami a u každé uvede, kolik ruční
práce navíc znamená. Do `AGENTS.md` připíše pravidlo a pod něj řádek
„Hrubeš (přepis: hrubě)“. O týden později Lenka v novém chatu jen mluví a AI
jí nejdřív vrátí zadání v bodech.
## Když se zaseknete

- **AI začne odpovídat nahlas:** spustili jste hlasový režim. Ukončete ho a
  použijte ikonu mikrofonu přímo v poli pro zprávu. Diktování řeč jen
  přepíše na text.
- **Přepis je v angličtině nebo nedává smysl:** diktování nemá nastavenou
  češtinu. Zkontrolujte jazyk aplikace a prohlížeče, a když přepis zůstane
  anglický, nadiktujte zadání v telefonu ikonou mikrofonu na klávesnici,
  nebo použijte diktování v počítači z bloku „Kde diktovat“.
- **Po 30 vteřinách nevíte, co dál:** odešlete, co máte. AI se zeptá na
  to, co jí chybí, a vy odpovíte zase hlasem.
- **V novém chatu AI pravidlo nepoužije:** zeptejte se jí „Co si pamatuješ
  o diktování?“. V Cowork nebo Code zkontrolujte, že jste otevřeli stejnou
  složku jako minule. Když v běžném chatu paměť chybí nebo ji má firma
  vypnutou, uložte pravidlo podle bloku „Ve vašem nástroji“, nebo přepněte
  do [Cowork nebo Code](card:when-chat-is-not-enough).
## Co bude hotové

Máte hotovou práci, kterou AI udělala podle vašeho nadiktovaného a
opraveného zadání. V `AGENTS.md` nebo v paměti AI je pravidlo, podle kterého
AI nadiktované zadání nejdřív uspořádá, a pod ním jména, která přepis
komolí. V novém chatu jste si ověřili, že příště stačí mluvit.
## Co dál

Když AI ani z dobrého zadání nedělá to, co chcete,
opravujte výsledek konkrétními připomínkami, jak ukazuje karta [Vyřešte dnešní úkol s AI](card:first-ai-use-case). Nahrávku porady nebo
rozhovoru s dalšími lidmi zpracujte podle karty
[Zpracujte přepis schůzky](card:konverzace-do-struktury).
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
