# Nadiktujte AI zadanie: hlas namiesto písania

Dve minúty hovoríte o úlohe, ako vám napadne, a AI z toho vytvorí prehľadné zadanie a po vašej oprave aj prácu.

## Nadiktujte AI zadanie: hlas namiesto písania

**Obtiažnosť: ľahká.**\
**Čas: približne 15 minút** s jednou skutočnou úlohou.
## Na čo sa hodí

Dodávateľ vám vo štvrtok napíše, že nestihne termín, a vy potrebujete do
piatku e-mail pre vedenie. Do AI napíšete „Napíš vedeniu e-mail, že sa projekt
oneskorí“ a dostanete zdvorilý všeobecný text. Prečo sa to oneskorilo, aké máte
možnosti a že riaditeľ dlhé e-maily nečíta, ste nenapísali, lebo sa vám nechcelo
vypisovať.

Hovorením poviete aj súvislosti, ktoré by ste do písaného zadania nedali, napríklad
prečo sa termín posunul a čo riaditeľ v e-maile čítať nebude.
## Čo si pripraviť

- jednu skutočnú úlohu, napríklad e-mail vedeniu alebo podklad na poradu,
- dve minúty, kedy môžete nahlas hovoriť, napríklad v zasadačke,
- AI, ktorú v práci používate, alebo AI v [režime Cowork alebo Code](glossary:workmode).
## Ako na to

1. Vložte prompt a odošlite ho. Potom kliknite na ikonu mikrofónu v poli pre
   správu a dve minúty hovorte: čo chcete, pre koho, čo viete a čo vás trápi.
   Text odošlite, v chate aj s podkladmi.
2. AI vráti zadanie v bodoch s otáznikmi pri menách a číslach, ktorým nerozumela.
   Opravte ho, pokojne hlasom, a nechajte AI prácu urobiť a uložiť si pravidlo
   na nabudúce.
3. V novom chate nadiktujte ďalšiu úlohu bez promptu. AI by vám mala najskôr
   vrátiť zadanie v bodoch.

Prehovorenia a odbočky neopravujte, AI si s nimi poradí.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

V ďalšej správe ti nadiktujem pracovnú úlohu. Budem hovoriť, ako ma to napadne, takže v texte budú odbočky, opakovania a chyby z prepisu reči. Teraz len odpovedz, že počúvaš.

Z diktovania najskôr urob zadanie v týchto bodoch:
- Cieľ: čo má vzniknúť a na čo to je.
- Pre koho: kto to bude čítať alebo používať.
- Čo vieme: fakty, rozhodnutia a podklady, z ktorých máš vychádzať. Keď spomeniem súbor v priečinku projektu, nájdi ho a použij.
- Na čo pozor: čo nesmie chýbať, čo nechcem a čo ma na tom trápi.
- Výstup: podoba a dĺžka.

Mená, čísla, dátumy a odborné výrazy, ktoré prepis mohol skomoliť, označ otáznikom. Keď chýba niečo, bez čoho prácu dobre nespravíš, spýtaj sa ma najviac na dve veci. Ukáž mi zadanie a počkaj, kým ho opravím alebo potvrdím. Potom prácu urob podľa opraveného zadania.

Nakoniec si ulož pravidlo na nabudúce: keď ti zadanie novej práce nadiktujem, spracuj ho rovnako, teda najskôr body zadania s otáznikmi pri neistých miestach a po mojom potvrdení prácu. K pravidlu pripíš mená a výrazy, ktoré prepis skomolil, aj s tým, ako sa píšu správne. Keď pracuješ v priečinku projektu, zapíš to do súboru AGENTS.md, a keď neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka. Inak to ulož do svojej pamäti.

## Vo vašom nástroji

### Microsoft Copilot
V Copilot Chate spustíte diktovanie ikonou mikrofónu v poli pre správu (Start
dictation); čeština patrí medzi podporované jazyky. Pravidlo na nabudúce si
Copilot uloží do pamäti a ukáže hlásenie Memory updated; prehľad nájdete v
nastaveniach pod Chat settings › Personalization › Saved memories. Keď pamäť
nemáte, vložte pravidlo do Custom instructions na rovnakom mieste.

### ChatGPT
Diktovanie spustíte ikonou mikrofónu v poli pre správu, v aplikácii pre
počítač tlačidlom Dictate; ikona Voice spúšťa hlasový režim. Pravidlo si
ChatGPT uloží do pamäti (nastavenia, Personalization › Memory), bez pamäti ho
vložiť do Custom Instructions. Codex v aplikácii ChatGPT pre počítač ho
zapíše do `AGENTS.md` v priečinku projektu.

### Claude
V aplikácii Claude diktujete ikonou mikrofónu pri poli pre správu, ikona so
zvukovou vlnou spúšťa hlasový režim. Diktovanie funguje aj v Cowork, kde
priečinok projektu vyberiete pri zadávaní úlohy a AI si odkaz na `AGENTS.md`
zapíše do inštrukcií priečinka. V Claude Code diktovanie zapnete príkazom `/voice`
a češtinu nastavíte v `/config`.

### Gemini
Diktovanie spustíte mikrofónom v poli pre správu; jazyk prepisu sa riadi
jazykom prehliadača, takže ho majte nastavený na češtinu. Pamäť aplikácie
Gemini pri pracovnom účte nemá, a tak na konci cvičenia napíšte „Napíš mi
pravidlo ako text“. Pravidlo vložte do inštrukcií nového Gemu (Gems › New
Gem) a krok 4 aj ďalšie úlohy diktujte v tomto Gemu.
## Čo je diktovanie

Diktovanie je prepis reči na text. Hovoríte a slová sa píšu do poľa pre
správu, takže ich pred odoslaním vidíte a môžete opraviť. Hlasový režim
(voice mode) je iná funkcia: AI s vami vedie rozhovor a odpovedá nahlas. Na
zadanie práce sa hodí diktovanie. V telefóne stačí ikona mikrofónu na
klávesnici.

`AGENTS.md` je súbor s pravidlami pre AI v priečinku projektu. AI v režime
Cowork alebo Code si ho prečíta na začiatku každej práce, takže pravidlo o
diktovaní nemusíte opakovať; kde to nástroj potrebuje nastaviť, zariadi to AI
podľa promptu. V bežnom chate tú istú úlohu plní pamäť: AI si do nej ukladá, čo
má platiť aj v ďalších chatoch.
## Kde diktovať

Najjednoduchšie je diktovať priamo v AI. Microsoft Copilot, ChatGPT,
Claude aj Gemini majú ikonu mikrofónu v poli pre správu, takže nič
neinštalujete. Kde ju nájdete, ukazuje blok „Vo vašom nástroji“.

Do e-mailu alebo dokumentu nadiktujete text diktovaním, ktoré má počítač
v sebe:

- **Windows:** stlačte klávesy Windows + H a hovorte.
- **Mac:** diktovanie zapnete v Nastaveniach systému › Klávesnica › Diktovanie,
  kde si nastavíte aj klávesovú skratku.

Keď vám vstavané diktovanie zle rozumie, vyskúšajte diktovaciu aplikáciu.
**Wispr Flow** diktuje vo viac než 100 jazykoch a jazyk rozpozná sám,
**Soniox** má češtinu výslovne v ponuke. Obe bežia na Macu, Windows, iPhone
a Android a majú verziu zadarmo s týždenným limitom. Na firemnom počítači
môže inštaláciu povoľovať IT.
## Príklad

Lenka koordinuje spustenie nového skladového systému. Vo štvrtok 8. 10. 2026
jej dodávateľ napíše, že napojenie na účtovníctvo do 2. 11. nestihne. Písané
zadanie by znelo „Napíš vedeniu e-mail, že sa spustenie oneskorí“. Lenka namiesto
toho otvorí AI v priečinku projektu, vloží prompt a potom dve minúty
hovorí. Povie, že systém môže bežať aj bez napojenia, ale faktúry by potom dva
týždne ručne prepisovali dve kolegyne. Finančný riaditeľ Hrubeš bude chcieť
vedieť, koľko to stojí, a riaditeľ dlhé e-maily nečíta. AI vráti:

```text
Cieľ: informovať vedenie o oneskorení napojenia skladového systému na účtovníctvo.
Pre koho: riaditeľ a finančný riaditeľ (meno „hrubě“?).
Čo vieme: dodávateľ napojenie do 2. 11. nestihne; systém môže bežať bez neho, faktúry potom ručne prepisujú dve kolegyne.
Na čo pozor: finančný riaditeľ bude chcieť vedieť, koľko to stojí; riaditeľ dlhé e-maily nečíta.
Výstup: e-mail na päť riadkov.
```

Prepis urobil z pána Hrubeša slovo „hrubě“ a AI ho označila otáznikom.
Lenka opraví dve veci: meno a cieľ. Vedenie má do stredy 14. 10. vybrať,
či systém spustiť 2. 11. bez napojenia, alebo spustenie posunúť na
16. 11. AI napíše e-mail s dvoma variantami a pri každej uvedie, koľko ručnej
práce navyše znamená. Do `AGENTS.md` pripíše pravidlo a pod neho riadok
„Hrubeš (prepis: hrubě)“. O týždeň neskôr Lenka v novom chate len hovorí a AI
jej najskôr vráti zadanie v bodoch.
## Keď sa zaseknete

- **AI začne odpovedať nahlas:** spustili ste hlasový režim. Ukončite ho a
  použite ikonu mikrofónu priamo v poli pre správu. Diktovanie reč len
  prepíše na text.
- **Prepis je v angličtine alebo nedáva zmysel:** diktovanie nemá nastavenú
  češtinu. Skontrolujte jazyk aplikácie a prehliadača, a keď prepis zostane
  anglický, nadiktujte zadanie v telefóne ikonou mikrofónu na klávesnici,
  alebo použite diktovanie v počítači z bloku „Kde diktovať“.
- **Po 30 sekundách neviete, čo ďalej:** odošlite, čo máte. AI sa spýta na
  to, čo jej chýba, a vy odpoviete opäť hlasom.
- **V novom chate AI pravidlo nepoužije:** spýtajte sa jej „Čo si pamätáš
  o diktovaní?“. V Cowork alebo Code skontrolujte, že ste otvorili rovnaký
  priečinok ako minule. Keď v bežnom chate pamäť chýba alebo ju má firma
  vypnutú, uložte pravidlo podľa bloku „Vo vašom nástroji“, alebo prepnite
  do [Cowork alebo Code](card:when-chat-is-not-enough).
## Čo bude hotové

Máte hotovú prácu, ktorú AI urobila podľa vášho nadiktovaného a
opraveného zadania. V `AGENTS.md` alebo v pamäti AI je pravidlo, podľa ktorého
AI nadiktované zadanie najskôr usporiada, a pod ním mená, ktoré prepis
skomolil. V novom chate ste si overili, že nabudúce stačí hovoriť.
## Čo ďalej

Keď AI ani z dobrého zadania nerobí to, čo chcete,
opravujte výsledok konkrétnymi pripomienkami, ako ukazuje karta [Riešte dnešnú úlohu s AI](card:first-ai-use-case). Nahrávku porady alebo
rozhovoru s ďalšími ľuďmi spracujte podľa karty
[Spracujte prepis schôdzky](card:konverzace-do-struktury).
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
