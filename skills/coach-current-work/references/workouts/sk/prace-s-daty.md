# Opýtajte sa svojich dát: AI vypočíta odpoveď z exportu

AI vypočíta z exportu odpoveď na otázku, podľa ktorej sa rozhodujete, a postup si uloží na ďalší mesiac.

## Opýtajte sa svojich dát: AI vypočíta odpoveď z exportu

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s exportom a jednou otázkou.
## Na čo sa hodí

Je pondelok 2. novembra a obchodný riaditeľ chce do piatku vedieť, na ktoré
produkty dať vianočnú kampaň. Export objednávok za tri mesiace má štrnásť tisíc
riadkov a nákupné ceny, bez ktorých nepoznáte, na čom firma zarába, vedie
sklad v inom systéme.

AI oba exporty spojí a odpoveď vypočíta krátkym programom zo všetkých riadkov,
takže nestojí na odhade.
## Čo si pripraviť

- export z e-shopu, účtovníctva alebo CRM ako `.xlsx`, `.csv` alebo tabuľku v
  cloude,
- otázku, na ktorú potrebujete odpoveď, a na čo ju použijete,
- pôvodnú tabuľku otvorenú v tabuľkovom editore, kde overíte jedno číslo,
- AI, ktorá vie počítať so súbormi (ukazuje to blok „Vo vašom nástroji“).
## Ako na to

1. Nahrajte export do chatu (v režime Cowork alebo Code otvorte priečinok s
   exportmi), vložte prompt z AI cvičenia a pod neho napíšte otázku a na čo
   odpoveď potrebujete.
2. AI popíše, čo v exporte našla, spojí exporty a odpoveď vypočíta. Číslo,
   ktoré vám dá na kontrolu, overte v pôvodnej tabuľke a napíšte jej, či
   sedí.
3. Keď sedí, AI postup uloží ako [skill](glossary:skill), do pamäte alebo
   do pokynov a napíše vetu na ďalší export. Kam, ukazuje blok „Vo vašom
   nástroji“.

Čo s výsledkom urobíte, rozhodujete vy.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Potrebujem z dát odpoveď na jednu otázku. Otázku a na čo odpoveď použijem, ti napíšem pod tento text. Dáta sú v priloženom exporte alebo v priečinku, v ktorom pracuješ.

1. Načítaj celé súbory a napíš mi, čo v nich je: koľko riadkov, aké stĺpce a za aké obdobie. Ak nevieš, čo niektorý stĺpec znamená a na odpovedi to záleží, opýtaj sa ma.
2. Ak na odpoveď potrebuješ dva exporty, spoj ich podľa stĺpca, ktorý majú spoločný, napríklad kód produktu. Porovnaj počty riadkov pred spojením a po ňom, aby sa žiaden riadok nezduplikoval ani nestratil. Riadky, ktoré sa nesparujú, vypíš zvlášť a napíš, koľko ich je.
3. Odpoveď vypočítaj kódom zo všetkých riadkov, nič neodhadzuj. Ak v dátach niečo chýba, napríklad nákupné ceny k tržbám, napíš, čo chýba a kde to asi nájdem.
4. Výsledok napíš takto: odpoveď v jednej až troch vetách, tabuľka s číslami, z ktorých vychádza, a popis výpočtu bežnými slovami. Nakoniec mi daj jedno číslo, na ktorom odpoveď stojí a ktoré si overím v pôvodnej tabuľke, a napíš, ako ho tam nájdem: list, stĺpec a filter.

Ak napíšem, že číslo nesedí, nájdi prečo, výpočet oprav a daj mi nové číslo na overenie. Keď napíšem, že sedí, ulož postup, aby ďalší export stačilo zadať jednou vetou. Pomenovaj ho podľa témy, napríklad Zisk podľa produktov. Do postupu napíš, aké súbory a stĺpce očakávaš, ako ich spojíš a čo vypočítaš; čísla z tohto exportu do neho nepíš. Ak pracuješ v priečinku, ulož ho tam ako súbor, napríklad postup-zisk-podla-produktov.md, a vedľa neho kód, ktorým si počítal. V bežnom chate z postupu urob skill, a ak tento nástroj skilly nepodporuje, ulož si postup do pamäte. Ak nejde ani jedno, daj mi postup ako súbor na stiahnutie, ktorý nabudúce nahrám spolu s exportom. Ak na uloženie potrebuješ moje kliknutie, povedz mi presne kam. Nakoniec mi napíš, ako sa postup volá, kde je uložený a akou vetou ďalší export zadám; v tej vete nech je názov postupu.

## Vo vašom nástroji

### Microsoft Copilot
Copilot Chat s pracovným účtom vypočíta priložený export v jazyku Python;
súbor pridáte tlačidlom + alebo pretiahnutím. Keď číslo sedí, Copilot si postup
uloží do pamäte; povedzte mu aj, aby ho napísal celý, a vložte ho do pokynov
Notebooku (Poznámkové bloky, Nový poznámkový blok), kam nahráte ďalší
export. Pravidelné exporty na OneDrive spracuje Cowork vedľa prepínača Chat
(licencia Microsoft Copilot).

### ChatGPT
Export priložte do chatu, program v Pythone si AI spustí sama. Vo firemných
tarifách Business a Enterprise z postupu urobí skill, ktorý uložíte do svojho
účtu; prehľad je pod Plugins, karta Skills. Ostatné účty uložia postup do
pamäte a veľké exporty spracuje Codex v aplikácii ChatGPT pre počítač priamo
v priečinku.

### Claude
Výpočty zabezpečuje funkcia Code execution and file creation v Nastaveniach pod
Capabilities; v osobných účtoch je zapnutá, vo firemných ju riadi správca.
Súbor môže mať najviac 30 MB a z postupu vie Claude urobiť skill. Veľké a
pravidelné exporty spracuje Cowork alebo Claude Code priamo v priečinku.

### Gemini
Export nahrajte do aplikácie Gemini cez Pridať súbory alebo z Disku; stačí aj
tabuľka Google a dva exporty priložíte naraz. Že Gemini počíta kódom,
nápoveda Googlu neuvádza, preto overovacie číslo nevynechávajte. Pamäť pracovný
účet nemá, a tak si postup nechajte uložiť ako skill (napíšte „Ulož to ako
skill“); pri ďalšom exporte ho vyberiete po napísaní „/“ v poli pre správu.
## Čo je výpočet kódom

Keď AI tabuľku len číta ako text, čísla odhaduje a pri veľkom exporte ľahko
vynechá riadky. Preto ju necháte počítať kódom: AI napíše krátky program,
spustí ho nad celým súborom a z výsledku vám napíše odpoveď. Kód čítať
nemusíte, správnosť spoznáte podľa čísla, ktoré overíte v tabuľke. V režime
Cowork alebo Code AI počíta priamo nad súbormi v priečinku, zvládne aj veľké
exporty a postup uloží vedľa nich ako obyčajný textový súbor.

Dva exporty AI spojí cez [spoločný kľúč](glossary:data-key): stĺpec, ktorý
je v oboch súboroch zapísaný rovnako, napríklad kód produktu alebo číslo objednávky.
Názov produktu alebo meno zákazníka býva v každom systéme napísané trochu
ináč, preto na spojenie nestačí.

Keď exporty chodia každý mesiac alebo ich chat nenačíta celé, pracujte s AI v
režime Cowork alebo Code, ktorá pracuje priamo s priečinkom vo vašom počítači.
Ako začať, ukazuje karta [Cowork alebo Code](card:when-chat-is-not-enough).
## Nech ďalší export vypočíta AI sama

Po prvom kole má AI postup uložený. Ďalší mesiac jej dáte nový export a
napíšete vetu, ktorú vám AI dala, napríklad „Použi postup Zisk podľa produktov
na novembrový export“. AI počíta rovnako ako minule, takže čísla z oboch
mesiacov môžete rovno porovnať.

Keď vám export chodí každý mesiac sám do rovnakého priečinka v počítači, AI v
režime Cowork alebo Code môže odpoveď vypočítať aj bez vás v nastavený deň ako
[naplánovanú úlohu](card:recurring-ai-task). Vložte jej toto zadanie a
požiadajte ju, aby z neho naplánovanú úlohu založila:

```text
Každý mesiac 3. deň o 8:00 vezmi v priečinku najnovší export a vypočítaj z neho odpoveď podľa uloženého postupu. Výsledok ulož vedľa exportu ako súbor s mesiacom v názve a hore napíš, čo sa zmenilo oproti minulému mesiacu.
```

Keď úloha pracuje s priečinkom vo vašom počítači, pobehne len keď je počítač
zapnutý a aplikácia otvorená.
## Príklad

Martina koordinuje predaj v e-shope s kávou a kávovarmi. V pondelok 2. 11.
stiahne export objednávok za august až október (`objednavky.xlsx`, 14 200 riadkov)
a zo skladu cenník s nákupnými cenami (`nakupni-ceny.xlsx`). Oba súbory
nahraje do AI, ktorú v práci používa, vloží prompt a pod neho napíše: „Na
ktoré tri produkty dať vianočnú kampaň? Chcem tie, na ktorých najviac zarábame.“

AI napíše, čo načítala, a upozorní, že v objednávkach sú len tržby. Podľa
nich by vyhral kávovar Brio s 1,24 mil. Kč, lenže z tržieb nepozná, na čom
firma zarába. Spojí preto objednávky s cenníkom podľa kódu produktu. Šesť kódov
v cenníku chýba; AI ich vypíše zvlášť, Martina v nich spozná septembrové novinky a
ceny k nim si vyžiada od skladu. Odpoveď: najviac zarábali káva Etiópia 250 g,
káva Brazília 1 kg a ručný mlynček Classic. Brio má maržu 9 %, kávy cez 40 %.

Na kontrolu AI dá tržbu kávy Etiópia: 386 450 Kč, list Objednávky, stĺpec
Tržba, filter Kód produktu ETI-250. Martina si ho v tabuľke vyfiltruje a súčet
sedí. Napíše to AI a tá z postupu urobí skill Zisk podľa produktov; Martina
jeho uloženie jedným kliknutím potvrdí. Na začiatku decembra nahraje do nového
chatu novembrový export s cenníkom a napíše len „Použi postup Zisk podľa
produktov na novembrový export“. Za dve minúty má rovnakú tabuľku za
november.
## Ak sa zaseknete

- **AI píše čísla, ale nevidíte, ako ich vypočítala:** napíšte jej „Vypočítaj to
  kódom nad celým súborom a ukáž mi výpočet.“ Ak AI kód spustiť nevie, skontrolujte podľa bloku „Vo vašom nástroji“,
  či výpočty nemusíte zapnúť, a overovacie číslo v tabuľke nikdy
  nevynechávajte.
- **Overované číslo nesedí:** napíšte AI, čo ste v tabuľke našli a akým
  filtrom. Najčastejšie počítala s iným obdobím, so stornovanými objednávkami
  alebo spojením zdvojila riadky. Ak číslo nesedí až pri ďalšom exporte,
  požiadajte AI, aby opravu zapísala aj do uloženého postupu. Ak sa chyby
  opakujú, pokračujte
  [kontrolou výsledku](card:kontrola-vysledku).
- **AI napíše, že súbor nenačítala celý:** veľký export chat nemusí zvládnuť.
  Prepnite do [Cowork alebo Code](card:when-chat-is-not-enough), kde AI
  pracuje so súborom priamo v priečinku. Ak taký režim nemáte, nech vám AI
  povie, ktoré stĺpce a obdobie potrebuje, a stiahnite export len s nimi.
- **AI postup neuloží alebo ho v novom chate nepoužije:** zapnite v nastaveniach
  pamäť; vo firemnom účte pamäť aj skilly niekedy vypína správca. Ak nejde ani
  jedno, požiadajte AI o postup ako súbor na stiahnutie a nabudúce ho nahrajte
  spolu s exportom. V novom chate vždy napíšte vetu na ďalšie použitie aj s názvom
  postupu.
## Čo bude hotové

Máte odpoveď na svoju otázku vypočítanú zo všetkých riadkov exportu a jedno číslo z
nej ste si overili v pôvodnej tabuľke. Viete, čo v dátach chýba. Postup je
uložený ako skill, v pamäti, v priečinku, alebo ho máte ako súbor u seba, a
nabudúce stačí nový export a veta, ktorú vám AI napísala.
## Čo ďalej

Uložený postup môžete ďalej vylepšovať podľa svojich opráv. Ako na to, ukazuje
karta [Vytvorte si skill](card:create-skill-from-proven-process). Keď
rovnaký výpočet potrebujú kolegovia a nechcete ho za nich každý mesiac robiť vy,
nechajte AI postaviť jednoduchú aplikáciu, do ktorej si export nahrajú sami. Tá
cesta sa nazýva [vibe coding](card:risk-based-prototyping).
## Spoločný kľúč v dátach

**Čo to je:** Stĺpec alebo kombinácia stĺpcov, podľa ktorých možno bezpečne rozpoznať ten istý záznam v dvoch zdrojoch, napríklad ID objednávky alebo kombinácia mesiaca a nákladového strediska.

**Čo to nie je:** Nie je to heslo ani technický prístupový kľúč. Rovnaký názov firmy alebo osoby nemusí byť spoľahlivým spoločným kľúčom.

**Prečo to študent potrebuje:** Pomáha spojiť zodpovedajúce riadky bez ich straty, zámene alebo nechceného násobenia.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Zručnosť

**Čo to je:** Opakovane použiteľný postup pre určitý typ úlohy. Môže obsahovať inštrukcie, pravidlá, príklady, šablóny a ďalšie potrebné zdroje. Spôsob vytvorenia a spustenia sa líši podľa nástroja.

**Čo to nie je:** Nie je to všeobecná rola asistenta ani jedna vydarená konverzácia uložená bez úprav.

**Prečo to študent potrebuje:** Pomáha preniesť osvedčený postup do stabilnej podoby, ktorú možno konzistentne opakovane používať.

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

## Mechanika: Kontrola pripravenosti argumentu pred tvorbou výstupu

Krátka kontrola na začiatku kariet, z ktorých vzniká výstup pre niekoho ďalšieho. Nie je samostatnou kartou a nemá vlastné splnenie. Protipól k mechanike `data-readiness-check`: tá sleduje, či sú pripravené dáta, táto sleduje, či je pripravený zámer.

## Kedy sa spúšťa

Človek pripravuje výstup, ktorý uvidí niekto iný: prezentáciu, správu, odporúčanie, ponuku, e-mail vedeniu, zhrnutie pre klienta. Nespúšťa sa pri výstupoch pre seba, pri prieskume ani pri rozpracovaných poznámkach.

## Prečo to existuje

AI vyrobí dvadsať slidov alebo tri strany správy z čohokoľvek a bude to vyzerať hotovo. Prázdny výstup sa od dobrého na prvý pohľad nelíši, pretože chýbajúca časť je zámer, nie forma. Tri vety od človeka sú najlacnejší spôsob, ako to zistiť pred tvorbou, nie po nej.

## Čo si vyžiada od človeka

Tri veci, a ani jednu z nich nenavrhuje AI:

| Čo | Prečo to nemôže určiť AI |
|---|---|
| **Publikum** | koho má pred sebou a čo už tí ľudia vedia, vie len človek |
| **Zmena** | čo má publikum po prečítaní urobiť alebo rozhodnúť inak |
| **Nosná veta** | jediná veta, ktorú si majú odniesť, keď zabudnú všetko ostatné |

## Skúška obrátením

Nosná veta sa pozná podľa dvoch vlastností: dá sa s ňou nesúhlasiť a zmestí sa do jedného nádychu. Test je obrátiť ju na opak.

- *Chceme zlepšiť zákaznícku skúsenosť* → opak je nezmysel, takže veta nič nehovorí.
- *Zastavme vývoj druhej aplikácie a vráťme ľudí na tú prvú* → opak dáva zmysel a niekto ho bude obhajovať. Toto je nosná veta.

Keď veta neobstojí, AI to povie a nechá človeka ju prepísať. Neprepisuje ju za neho.

## Čo urobí AI

1. Vyžiada si tri vety a počká na ne. Nenavrhuje ich a nekomentuje ich.
2. Vykoná skúšku obrátením. Keď veta neobstojí, povie prečo a vráti ju človeku.
3. Opýta sa, či formát zodpovedá zámeru. Ak by zmenu lepšie vyvolal iný výstup, ponúkne kartu `output-beyond-document` a nechá rozhodnutie na človeku.
4. Keď sú tri vety hotové, pokračuje priamo hlavným cvičením karty a ďalej sa k nim nevracia.

## Čo zostáva na človeku

- určiť publikum a zmenu,
- napísať a prípadne prepísať nosnú vetu,
- rozhodnúť, či formát vyhovuje zámeru,
- rozhodnúť, čo je kontext a čo sa vypustí, keď dôjde čas.

## Výstup mechaniky

Tri riadky v hlavnom pracovnom výsledku, žiadny samostatný dokument a žiadny ďalší check-in:

```text
Publikum: ...
Zmena, ktorú má výstup vyvolať: ...
Nosná veta: ...
```

## Routing

- **Tri vety sú jasné:** pokračovať hlavným cvičením karty.
- **Nosná veta neobstojí v skúške obrátením:** nechať človeka ju prepísať, nepokračovať.
- **Vetu sa nedá vôbec napísať:** zvyčajne rozhodnutie ešte nepadlo alebo má výstup dva ciele. Rozdeliť na dva výstupy.
- **Zmenu by lepšie vyvolal iný formát:** karta `output-beyond-document`.
- **Chýbajú podklady alebo kontext:** karta `praca-s-kontextom`.
- **Výstup už existuje a ide von:** karta `kontrola-vysledku`.

## Hranice

- Mechanika neposudzuje kvalitu obsahu ani pravdivosť tvrdení. To robí kontrola výsledku nad hotovým výstupom.
- Pri výstupoch pre seba sa nespúšťa; pýtať sa na publikum pri vlastných poznámkach je rituál, nie pomoc.
- Keď človek tri vety pozná a napíše ich za pol minúty, mechanika skončila. Nezdržiava toho, kto zámer má.

## Minimálny promptový blok

```text
Než začneš čokoľvek tvoriť, vyžiadaj si odo mňa tri veci a počkaj na ne: pre koho je ten výstup, čo sa má po ňom zmeniť a aká jediná veta to má niesť. Nenavrhuj mi ich.

Potom skús moju nosnú vetu obrátiť na opak. Ak opak znie ako nezmysel, povedz mi, že veta nič netvrdí, a nechaj ma ju prepísať. Neprepisuj ju za mňa.

Keď sú tri vety hotové, pokračuj priamo hlavným úlohou a už sa k nim nevracaj. Ak by zmenu lepšie vyvolal iný formát než ten, ktorý chcem, povedz to jednou vetou a nechaj rozhodnutie na mne.
```

## Mechanika: Kontrola pripravenosti dát

Krátka adaptívna kontrola na začiatku dátových kariet. Nie je samostatnou kartou, nemá vlastné splnenie a človek kvôli nej nemusí umelo hľadať problematickú tabuľku.

## Kedy sa spúšťa

Človek prinesie skutočnú otázku a dáta, s ktorými chce pracovať. Ešte pred vložením dát musí byť jasné, že používa schválené prostredie. Ak to jasné nie je, mechanika odkáže na bezpečnostnú cestu a obsah si nevyžiada.

## Čo urobí AI

1. Zo zadania a súboru overí, či rozumie, čo predstavuje jeden riadok, dôležité stĺpce, jednotky a časové obdobie.
2. Vykoná rýchlu technickú kontrolu štruktúry, dátových typov, prázdnych hodnôt, možných duplicít a kategórií.
3. Rozdelí zistenia na:
   - technické opravy, ktoré môže bezpečne navrhnúť alebo vykonať,
   - významové otázky, o ktorých musí rozhodnúť človek alebo vlastník dát,
   - problémy vyžadujúce iné prostredie alebo samostatnú kartu.
4. Ak nič podstatné nebráni práci, pokračuje priamo hlavným cvičením karty.
5. Ak je potrebná technická oprava, ukáže zmenu na príklade, vyžiada si schválenie a vytvorí pracovnú kópiu. Pôvodný súbor zachová.
6. Ak nepozná význam, položí iba otázky, ktoré môžu zmeniť výsledok. Odpoveď si nevymyslí.

## Čo zostáva na človeku

- potvrdiť význam dát a zámer ďalšej práce,
- rozhodnúť, či sa kategórie môžu zlúčiť a čo znamená chýbajúca hodnota,
- schváliť zmenu, ktorá môže ovplyvniť vecný obsah,
- určiť, či nejasnosť vyžaduje vlastníka dát.

## Výstup mechaniky

Mechanika vytvorí najviac trojbodový preflight zápis v rámci hlavného pracovného výsledku:

```text
Stav dát: pripravené / upravené / blokované
Vykonané zmeny alebo potvrdené predpoklady: ...
Čo zostáva na overenie: ...
```

Samostatný dokument ani ďalší check-in nevzniká.

## Routing

- **Dáta sú pripravené:** pokračovať priamo analýzou alebo rozhodovacou úlohou.
- **Jednoduchá technická nekonzistencia:** AI ju po schválení opraví a pokračuje.
- **Nejasný obchodný význam:** opýtať sa človeka alebo vlastníka dát.
- **Viacero súborov alebo systémov:** karta `sjednotit-data-z-vice-zdroju`.
- **Konverzácie, tikety alebo spätná väzba:** samostatná karta na prevod nestruktúrovaného obsahu do štruktúry.
- **Príliš veľký súbor alebo chýbajúca schopnosť nástroja:** karta `when-chat-is-not-enough`.
- **Neistota, či je možné dáta vložiť:** karty `bezpecne-pouzivani` a `nakladani-s-daty`.

## Hranice

- Bežné formáty a známe kategórie AI opravuje sama, človek ich nemusí ručne vyhľadávať.
- Mechanika nevytvára problém, ak žiadny podstatný nenájde.
- Pripravenosť sa posudzuje vzhľadom na konkrétnu otázku. Tá istá tabuľka môže stačiť na prehľad a nestačiť na presný finančný alebo personálny záver.
- Kontrola formátu nenahrádza kontrolu konkrétnych hodnôt a výpočtov vo výsledku.

## Minimálny promptový blok

```text
Skôr než začneš analyzovať dáta, urob krátku kontrolu ich pripravenosti vzhľadom na moju otázku.

Najskôr zhrň, čo podľa teba predstavuje jeden riadok, dôležité stĺpce, jednotky a obdobie. Technické nekonzistencie môžeš navrhnúť opraviť. Na významovú nejasnosť sa opýtaj a nič si nedomýšľaj.

Ak sú dáta na úlohu pripravené, povedz to jednou vetou a pokračuj. Ak niečo môže zmeniť výsledok, ukáž najviac tri body. Zmenu vecného obsahu alebo odstránenie riadkov vykonaj až po mojom schválení a iba v pracovnej kópii.
```
