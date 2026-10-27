# Pusťte AI do své složky: když běžný chat nestačí

Když chat nestačí na víc souborů naráz, přejděte do režimu Cowork nebo Code a AI výsledek uloží rovnou do složky.

## Pusťte AI do své složky: když běžný chat nestačí

**Obtížnost: střední.**\
**Čas: přibližně 15 minut** se složkou rozpracované práce.
## K čemu se hodí

Do čtvrtka 15. 10. máte vedení doporučit dodavatele nových notebooků. Pět
nabídek leží ve složce jako PDF. Do chatu je nahráváte po jedné, srovnávací
tabulku z odpovědi kopírujete do Wordu, a když ve středu přijde šestá
nabídka, začínáte znovu.

V [pracovním režimu](glossary:workmode) Cowork nebo Code má AI přístup k
celé složce, takže šestou nabídku jen doplní do hotové tabulky.
## Co si připravit

- složku s rozpracovanou prací k jednomu projektu, v počítači nebo na firemním
  disku,
- úkol, který vám v chatu nešel; když žádný nemáte, AI udělá přehled
  dokumentů,
- AI, kterou používáte; kde má Cowork nebo Code, ukazuje blok „Ve vašem
  nástroji“.
## Jak na to

1. Otevřete ve svém AI nástroji režim Cowork nebo Code. U některých nástrojů
   je to aplikace pro počítač, kterou si nejdřív nainstalujete.
2. Dejte AI přístup ke složce, a když se zeptá, jestli s ní smí pracovat,
   povolte to. Vložte prompt a pod něj jednou větou připište úkol, který vám v
   chatu nešel.
3. Otevřete soubor, který AI do složky uložila. Co v něm nesedí, napište AI do
   stejného chatu a ona soubor opraví.

Co v dokumentech chybí, AI označí [DOPLNIT] a doplníte to vy.
## AI cvičení

Vložte tento [prompt](glossary:prompt) do AI v režimu Cowork nebo Code,
otevřené ve vaší složce, a pod něj připište svůj úkol:

Pracuješ v mé složce s rozpracovanou prací. Když do ní nevidíš nebo do ní neumíš uložit soubor, řekni mi to hned: jsem nejspíš v běžném chatu a musím přejít do režimu Cowork nebo Code.

Projdi všechny soubory ve složce a napiš mi dvěma větami, co v ní je.

Pak udělej úkol, který ti píšu pod tímhle zadáním. Když tam žádný není, udělej přehled dokumentů ve složce: u každého název, o čem je, důležitá čísla a termíny a co z něj plyne pro mě. Čísla a fakta ber jen z dokumentů; co v nich nenajdeš, označ [DOPLNIT].

Výsledek ulož do nového souboru v téhle složce, jako dokument Word, a když jde o tabulku nebo čísla, jako tabulku Excel. Napiš mi název souboru a co v něm najdu.

Nakonec si ulož pravidla pro tuhle složku: jednou větou, co v ní je, název souboru s výsledkem a pravidlo „Když ve složce přibude nebo se změní dokument, doplň ho do výsledku stejným způsobem.“ Když pracuješ v Cowork, zapiš je do instrukcí složky. Jinak je zapiš do souboru AGENTS.md ve složce, a když ho složka nemá, založ ho. Napiš mi, kam jsi pravidla uložil.

## Ve vašem nástroji

### Microsoft Copilot

Režim Cowork má Copilot jako Copilot Cowork: na `copilot.cloud.microsoft` ho
zvolte přepínačem nahoře vedle Chat; potřebuje licenci Copilot a zapnutí od
správce. K souborům v počítači se nedostane, složku dejte na OneDrive nebo
SharePoint a přiložte ji tlačítkem +. Nové soubory ukládá do složky Cowork na
OneDrivu a najdete je v panelu vpravo. Pravidla si uloží jako skill.

### ChatGPT

Režim Code má ChatGPT jako Codex v aplikaci ChatGPT pro počítač, kterou
stáhnete na webu ChatGPT; programovat v něm nemusíte. Po přihlášení zvolte
Codex, pak New chat a otevřete složku (open a folder). Codex mají všechny
tarify ChatGPT, i ten zdarma, ve firemním účtu ho ale může vypnout správce.
Pravidla pro příště si AI zapíše do souboru `AGENTS.md` ve složce.

### Claude

Režim Cowork i Code má aplikace Claude pro počítač, kterou stáhnete na
`claude.com/download`; Cowork je v placených tarifech. U pole pro zprávu
přepněte z Chat na Cowork; když tam volbu nevidíte, máte novou verzi, ve které
Cowork umí každý chat. Složku otevřete v levém panelu přes Projects, + a Use
an existing folder. Pravidla pro příště si AI zapíše do instrukcí složky.

### Gemini

Gemini režim Cowork ani Code nemá, víc souborů ale zvládne v aplikaci Gemini:
přes Add from Drive přiložte až 10 souborů, vložte prompt a na výzvu ke změně
režimu napište „pokračuj tady“. Výsledek uložíte tlačítkem Export to Sheets,
text přes Share & export a Export to Docs. Nad celou složkou v Disku se ptejte
přes pravé tlačítko a Ask Gemini. Pravidla uložte jako skill (Customize,
Skills).
## Co je režim Cowork a Code

Režim Cowork je pro práci s dokumenty: AI čte a ukládá soubory ve složce,
kterou jí otevřete, a pracuje na úkolu sama. Režim Code je určený hlavně pro
kód, weby a skripty, se složkou ale pracuje stejně, takže ho můžete použít i
na dokumenty.

Pravidla pro příště si AI zapíše do souboru `AGENTS.md` ve složce nebo do
pokynů, které si nástroj pamatuje, takže platí v každém dalším chatu nad
stejnou složkou. Ve sdílené složce uvidí soubor `AGENTS.md` i kolegové;
nechte ho tam, AI se podle něj řídí. V režimu Cowork nebo Code jde také
naplánovat úlohy, které běží samy v pravidelný čas.
## Kdy stačí běžný chat

Běžný chat v jakémkoli nástroji stačí ve dvou situacích:

- **Jednorázový výstup z toho, co do chatu vložíte:** odpověď na e-mail,
  shrnutí jednoho dokumentu nebo body na poradu. Podklad vložíte jednou a
  výsledek hned použijete.
- **Práce v poště, kalendáři nebo firemních dokumentech, které má chat
  [připojené](card:plugin-connector):** třeba koncept odpovědi v Outlooku
  nebo přehled schůzek na příští týden.

Do Cowork nebo Code přejděte, když podklady tvoří víc souborů ve složce,
nebo když má výsledek zůstat jako soubor, ke kterému se budete vracet.
## Příklad

Ondřej koordinuje rekonstrukci kanceláří a do pátku 16. 10. má investorovi
poslat seznam závad, které ještě nikdo neopravil. Ve složce
`Rekonstrukce kanceláří` má sedm zápisů z kontrolních dnů ve Wordu. Otevře
AI v režimu Cowork, dá jí přístup ke složce a pod prompt připíše: „Udělej
seznam závad, které podle zápisů ještě nejsou opravené, s termínem a firmou,
která je má opravit.“

AI uloží do složky tabulku `otevrene-zavady.xlsx` se čtrnácti závadami. U
dvou v zápisech chybí termín, takže je označí [DOPLNIT]. Do pravidel složky
zapíše, že jsou v ní zápisy z kontrolních dnů a seznam otevřených závad, a
pravidlo, ať z každého nového zápisu doplní závady a opravené označí.

V pondělí 19. 10. Ondřej uloží do složky zápis z dalšího kontrolního dne,
otevře nový chat ve stejné složce a napíše jen „Přibyl nový zápis.“ AI
seznam doplní a dvě závady označí jako opravené.
## Když se zaseknete

- **AI odpoví, že do složky nevidí nebo soubor uložit neumí:** píšete do
  běžného chatu. Přejděte do režimu Cowork nebo Code podle bloku „Ve vašem
  nástroji“ a dejte AI přístup ke složce.
- **Režim Cowork nebo Code ve vašem nástroji chybí:** ve firemním účtu ho
  často zapíná správce, tak ho požádejte o zapnutí. Claude zdarma Cowork
  nemá, Copilot Cowork potřebuje licenci Microsoft 365 Copilot a Gemini
  takový režim nemá vůbec, postup pro něj je v bloku „Ve vašem nástroji“.
  Když Codex chybí v aplikaci ChatGPT s osobním účtem, stáhněte si novou
  aplikaci ChatGPT pro počítač.
- **Nesmíte nic instalovat:** Copilot Cowork i Gemini v Google Disku běží v
  prohlížeči a se složkou na firemním disku pracují bez instalace. Jinak
  pošlete IT zprávu „Potřebuji aplikaci s AI pro počítač, aby AI mohla
  pracovat se soubory projektu ve složce v počítači.“
- **AI některé soubory vynechala:** napište jí jejich názvy, ať je doplní.
  Když je ve složce stovky souborů, otevřete jen podsložku, která k úkolu
  patří.
## Co bude hotové

Máte AI v režimu Cowork nebo Code, která pracuje s vaší složkou. Ve složce je
nový soubor s výsledkem úkolu, který vám v chatu nešel, a AI vám napsala, kam
uložila pravidla: co ve složce je a jak výsledek doplnit, když přibude
dokument. Příště otevřete stejnou složku v novém chatu a napíšete jen, co se
změnilo.
## Co dál

Když chcete mít takhle připravenou všechnu rozpracovanou práci, založte si
[pracovní prostor PACT](card:pact-workspace). Aby se výsledek doplňoval
sám, třeba každé pondělí ráno, nastavte si
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
