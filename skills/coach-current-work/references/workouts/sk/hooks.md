# Nastavte si hook: kontrola dokumentov, ktorú AI nevynechá

Kým vám AI oznámi hotovo, prejde každý dokument, ktorý v zložke vytvorila, vašou kontrolou.

## Nastavte si hook: kontrola dokumentov, ktorú AI nevynechá

**Náročnosť: stredná.**\
**Čas: približne 15 minút** so zložkou, v ktorej AI píše dokumenty.
## Na čo sa hodí

Zákazník v utorok dostal ponuku, v ktorej zostal riadok s vašou maržou z internej
kalkulácie. Pokyn „maržu do ponuky nepíš“ pritom AI v pravidlách mala, len
ho pri dlhej práci prehliadla.

Hook je krok, ktorý nástroj spustí sám vždy, keď AI prácu dokončí, takže
kontrola prebehne, aj keď AI na pravidlo zabudne.
## Čo si pripraviť

- zložku, v ktorej AI píše dokumenty priamo do súborov, napríklad ponuky vo Worde,
- pravidlá, ktoré AI v týchto dokumentoch občas poruší,
- AI v [režime](glossary:workmode) Code, ktorá pracuje so súbormi v počítači.
## Ako na to

1. Vyberte s AI pravidlá, ktoré má hook strážiť. Prompt vložte do AI v režime
   Code otvorenom v zložke s dokumentmi; keď sa nástroj spýta na povolenie,
   povoľte ho.
2. Prejdite, čo kontrola našla v starších dokumentoch; AI ich len prečíta.
   Čo kontrola hlási zbytočne, povedzte AI a ona ju upraví.
3. Pri ďalšej práci, ktorú AI v zložke urobí, overte, že sa na konci zobrazí
   riadok s výsledkom kontroly. Čo kontrola nájde, AI opraví skôr, než vám
   oznámi hotovo.

Do kontroly patria pravidlá, ktoré sa dajú overiť presne: slovo, ktoré v dokumente
nesmie byť, alebo údaj, ktorý v ňom nesmie chýbať.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI v režime Code, otvorenom vo vašej
zložke:

Nastav v tejto zložke hook: kontrolu dokumentov, ktorú tento nástroj spustí sám vždy, keď dokončíš prácu. Ak tu hooky nebežia, napríklad v Cowork alebo v bežnom chate, povedz mi to a nič nenastavuj.

Najprv mi navrhni pravidlá pre kontrolu. Pozri sa do AGENTS.md, či je vo zložke, a do dokumentov tu a navrhni najviac päť pravidiel, ktoré sa dajú presne overiť: slovo alebo údaj, ktorý v dokumente nesmie byť alebo nesmie chýbať. Napríklad „V ponuke nie je marža ani nákupná cena.“ Spýtaj sa ma, ktoré chcem, a pridaj aj tie, ktoré ti poviem ja.

Schválené pravidlá preveď na kontrolu v skripte, ktorý prečíta aj dokumenty vo Worde a pobehne bez inštalácie ďalších programov. Skript ulož do podsložky kontrola a pravidlá do samostatného súboru vedľa neho, aby nové pravidlo nepotrebovalo nové schválenie hooku. Do AGENTS.md pripíš, kde kontrola leží, aby si ju v ďalšom chate vedel upraviť; ak AGENTS.md vo zložke nie je, založ ho.

Potom spusti kontrolu raz na všetkých dokumentoch, ktoré vo zložke už sú, a ukáž mi, čo našla. V nich nič neopravuj, mohli už odísť zákazníkom. Až potom zapni hook, ktorý stráži len dokumenty, ktoré od tej chvíle vzniknú alebo sa zmenia.

Hook nastav tak, aby kontrolu spustil vždy, keď dokončíš prácu. Keď kontrola niečo nájde, nech ti prácu vráti a ty chybu oprav skôr, než mi povieš hotovo. Ak chyba pretrváva aj po tvojej oprave, nech ťa kontrola pustí ďalej. Kedykoľvek hook nejaký dokument skontroluje, nech mi sám vypíše riadok s výsledkom, napríklad „Kontrola: 2 dokumenty v poriadku“, a keď chyba zostala, aj čo zostalo. Ak musím hook alebo zložku v nástroji schváliť, povedz mi presne kde. Ak hook začne platiť až v novom chate, povedz mi to.

Keď ti neskôr poviem nové pravidlo, pridaj ho do kontroly.

## Vo vašom nástroji

### Microsoft Copilot
Microsoft neuvádza, že by Copilot vedel spúšťať hooky. Pravidlá kontroly
uložte do Custom instructions (Nastavenia a viac, Nastavenia chatu,
Personalizácia) a na konci práce napíšte „Skontroluj dokument podľa mojich
pravidiel“. Hook nastavíte v nástroji s režimom Code, napríklad v Claude Code
alebo v Codexe v aplikácii ChatGPT; požiadajte oň správcu IT.

### ChatGPT
Hook nastaví Codex: v aplikácii ChatGPT pre počítač prepnite na Codex,
zvoľte otvorenie zložky (open a folder) a vložte prompt. Hook Codex spustí,
až zložku označíte za dôveryhodnú a hook schválite; AI vám povie kde. V bežnom
chate ChatGPT patria pravidlá kontroly do Custom instructions (Nastavenia,
Personalizácia).

### Claude
Hook nastaví Claude Code: v aplikácii Claude pre počítač prepnite na Code,
výberte zložku a vložte prompt; AI hook zapíše do nastavení sama. Cowork spúšťa hooky len
ako súčasť pluginu, preto cvičenie urobte v Claude Code. V bežnom chate
Claude patria pravidlá kontroly do inštrukcií projektu (Set project
instructions).

### Gemini
Aplikácia Gemini so zložkou v počítači nepracuje, takže hook v nej nenastavíte.
Pravidlá kontroly si nechajte uložiť ako skill (napíšte „Ulož to ako skill“) a
na konci práce o kontrolu požiadajte. Hook nastavíte v nástroji s režimom Code,
napríklad v Claude Code alebo v Codexe v aplikácii ChatGPT; požiadajte oň správcu
IT.
## Čo je hook

Hook, anglicky háčik, je krok, ktorý nástroj s AI spustí sám v danom
okamihu práce, napríklad na jej začiatku alebo keď AI prácu dokončí. Pravidlo v
`AGENTS.md`, súbore s pokynmi pre AI vo vašej zložke, AI číta a pri dlhej
práci ho môže prehliadnuť. Hook na pozornosti AI nezávisí.

Kontrolu AI napíše ako skript, teda krátky program, ktorý dokumenty prejde
a vypíše, čo nesedí. Skript pozná len veci, ktoré sa dajú presne overiť, napríklad
zakázané slovo alebo chýbajúci údaj. Či čísla sedia s podkladmi, nespozná;
na to je [kontrola výsledku](card:kontrola-vysledku).

Hook sa uloží do nastavení nástroja v tejto zložke, takže platí pre každú
prácu AI v nej. Dokumenty, ktoré píšete sami, kontrola prejde, keď AI napíšete
„Skontroluj zložku“. Bežný chat ani Cowork hook sám nenastaví; ako prepnúť
do Code, ukazuje karta [Chat, Cowork alebo Code](card:when-chat-is-not-enough).
Kde režim Code nemáte, uložte pravidlá kontroly do inštrukcií svojho nástroja a
na kontrolu na konci práce požiadajte, ako ukazuje blok Vo vašom nástroji.
## Príklad

Tereza pripravuje ponuky firemných akcií v cateringovej firme. V pondelok
19. 10. nastaví v zložke `Ponuky 2026` hook s dvoma pravidlami: v ponuke
nie je marža ani nákupná cena a ponuka uvádza, dokedy platí. Prvá kontrola
prejde 23 dokumentov a vypíše:

```text
Kontrola: 23 dokumentov, 3 nálezy
- Ponuka Pekáreň Novák.docx: chýba, dokedy ponuka platí.
- Ponuka Sklárne Horák.docx: chýba, dokedy ponuka platí.
- Ponuka Autoservis Dvořák.docx: v tabuľke cien je riadok „Marža 18 %“.
```

V stredu 21. 10. zadá Tereza ponuku na vianočný večierok pre 80 ľudí z
emailu zákazníka a internej kalkulácie. AI do tabuľky prevezme aj stĺpec s
nákupnou cenou. Kontrola ho na konci práce nájde a vráti prácu AI, ktorá
stĺpec zmaže. Tereza potom dostane hotovú ponuku a pod ňou riadok „Kontrola:
1 dokument v poriadku“.
## Keď sa zaseknete

- **AI píše, že hook nastaviť nevie:** pravdepodobne pracujete v bežnom chate
  alebo v Cowork. Prepnite do [režimu Code](card:when-chat-is-not-enough) a
  otvorte v ňom zložku.
- **Riadok s výsledkom sa neukáže alebo hook hlási chybu:** napíšte AI: „Hook
  neprebehol správne. Zisti prečo a oprav to; ak ho musím schváliť, povedz
  mi kde.“
- **Kontrola hlási chyby, ktoré nie sú chybami:** pravidlo je príliš široké,
  napríklad slovo „marža“ vo vete o výhodách pre zákazníka alebo dátum platnosti
  u dokumentu, ktorý ponukou nie je. Povedzte AI, aby kontrolu pri tom pravidle
  zúžila.
- **Kontrola nestráži dokumenty, ktoré píšete sami:** hook sa spúšťa, keď
  prácu dokončí AI. Napíšte AI „Skontroluj zložku“ a prejde aj ich.
## Čo bude hotové

Vo zložke máte hook, ktorý po každej práci s AI prejde nové a zmenené
dokumenty podľa vašich pravidiel, a viete, čo kontrola našla v starších
dokumentoch. Pri ďalšej práci uvidíte riadok s výsledkom kontroly a chybu,
ktorú kontrola nájde, AI opraví skôr, než vám ukáže hotovú prácu. Nové
pravidlo AI do kontroly pridá, keď jej ho poviete.
## Čo ďalej

Čísla a tvrdenia, ktoré skript presne overiť nevie, nechajte AI porovnať s
podkladmi v [kontrole výsledku](card:kontrola-vysledku). Ak chcete prejsť
celú zložku aj bez práce v nej, napríklad každý pondelok ráno, nastavte si
[naplánovanú úlohu](card:recurring-ai-task).
## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Pracovný režim

**Čo to je:** Typ interakcie s AI: chat, plátno/artefakt, agent, kódovanie, vyhľadávanie. Rôzne úlohy vyžadujú rôzne režimy.

**Čo to nie je:** Nie je to úroveň vyspelosti. Režim si volí človek podľa úlohy, nie podľa svojho skóre.

**Prečo to študent potrebuje:** Učí rozpoznať, kedy prepnúť z chatu do iného prostredia pre lepší výsledok.

## Výpadok služby, limit alebo preplnený chat

Spoločný fallback pre prevádzkové prerušenie práce s AI. Je dostupný z každej karty cez vstup **Výpadok alebo vyčerpaný limit**. Nevytvára vlastnú kartu, check-in ani viacero kópií toho istého textu.

Špecifická sekcia **Keď niečo nefunguje** v karte ďalej rieši chybu zadania, podkladov, nástroja alebo postupu. Táto mechanika sa spustí, keď AI nemôže technicky pokračovať v procese.

## Najskôr rozlíšte, čo sa stalo

| Čo vidíte | Pravdepodobná situácia | Prvý krok |
|---|---|---|
| Nástroj hlási vyčerpaný limit, príliš veľa požiadaviek alebo čas obnovenia | tarifný alebo dočasný prevádzkový limit | poznačte si čas obnovenia a uložte bod návratu |
| AI zabúda začiatok, odmieta ďalšiu prílohu alebo hlási príliš dlhý vstup | príliš veľký kontext, súbor alebo úloha | vytvorte handoff a pokračujte v novom kontexte alebo vhodnejšom prostredí |
| Nástroj neodpovedá, vracia serverovú chybu alebo zlyháva viacero modelov | výpadok služby | overte oficiálny status a zvoľte schválenú náhradu alebo pauzu |

Ak AI ešte odpovedá, môže situáciu sama pomenovať a pripraviť bod návratu. Ak neodpovedá, tento krok preskočte. Opakované odosielanie tej istej požiadavky stav práce nezachráni.

## Uložte bod návratu

Pred čakaním alebo prechodom inam zachovajte najmenší balík, z ktorého sa dá bezpečne pokračovať:

```text
Cieľ: ...
Čo je hotové a kde to je: ...
Potvrdené rozhodnutia a obmedzenia: ...
Použité zdroje alebo súbory: ...
Najbližší ďalší krok: ...
Čo sa nemá znova meniť alebo vyrábať: ...
```

Ak AI stále reaguje, použite:

> Priprav mi stručný bod návratu na pokračovanie v novom chate alebo nástroji. Zachovaj cieľ, hotové časti, potvrdené rozhodnutia, zdroje, obmedzenia a jeden najbližší krok. Nevymýšľaj, čo v konverzácii nie je.

Pri dlhšej práci uložte bod návratu do projektového README alebo iného schváleného pracovného priestoru. Citlivé vstupy zostávajú iba v schválenom úložisku.

## Došiel tarifný alebo prevádzkový limit

1. Zistite, kedy sa limit obnoví a či sa týka modelu, funkcie alebo celého účtu.
2. Rozhodnite medzi pauzou, menším rozsahom a schváleným náhradným modelom alebo prostredím.
3. Pri prechode preneste bod návratu a len podklady nevyhnutné pre ďalší krok.
4. Overte, že náhrada zvládne potrebné súbory, nástroje a akcie. Slabší model môže stačiť na formátovanie, ale zlyhať pri analýze alebo práci s nástrojmi.

## Kontext, súbor alebo úloha je príliš veľká

1. Nechajte AI vytvoriť handoff skôr, než stratí staršie rozhodnutia, ak ešte odpovedá.
2. Začnite nový chat alebo projekt s bodom návratu a odkazmi na kanonické súbory.
3. Rozdeľte prácu podľa zmysluplných celkov a zachovajte spoločné kritériá výsledku. Náhodné rozdelenie textu môže stratiť vzťahy medzi časťami.
4. Ak úloha vyžaduje viac súborov, hromadnú prácu alebo zmeny v projekte, pokračujte cez kartu `when-chat-is-not-enough`.

## Nástroj alebo model má výpadok

1. Overte oficiálny status poskytovateľa. Chybu účtu riešte až vtedy, keď služba všeobecne funguje.
2. Uložte bod návratu mimo práve nefunkčnej konverzácie, ak je k nej ešte prístup.
3. Použite schválený náhradný nástroj len vtedy, ak má potrebné schopnosti a rovnaké podklady doň môžu vstúpiť.
4. Ak vhodná náhrada nie je, prácu pozastavte a zapíšte presný ďalší krok. Po obnovení pokračujte od posledného potvrdeného výsledku.

## Bezpečnostné hranice

- Limit ani výpadok nie je dôvod vložiť pracovné, klientské alebo osobné údaje do neschváleného osobného nástroja.
- Nový účet, bezplatný tarif alebo iný poskytovateľ môže mať iné podmienky pre údaje, uchovávanie a trénovanie.
- Prechod medzi modelmi môže zmeniť formát, presnosť aj dostupné nástroje. Prvý výstup po návrate porovnajte s posledným potvrdeným bodom.
- Neodosielajte znova akciu, ktorá mohla prebehnúť pred chybou, kým neoveríte jej stav. Platí to najmä pre zápis do systému, odoslanie správy, nákup alebo vymazanie.

## Návrat do karty

Po obnovení služby alebo prechode do vhodného prostredia:

1. načítajte bod návratu,
2. ukážte AI posledný potvrdený výsledok,
3. vyžiadajte iba najbližší ďalší krok,
4. dokončite pôvodnú kartu bez opakovania hotovej práce,
5. ak sa zmenil nástroj alebo model, poznačte rozdiel, ktorý mohol ovplyvniť výsledok.

## Evidencia

Mechanika nevytvára samostatné splnenie. Do výsledku hlavnej karty môže pridať iba bod návratu, zvolenú cestu a prípadný rozdiel po zmene nástroja.
