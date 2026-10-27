# Prejdite text anti-slopom: nech neznie ako od AI

AI nájde v texte frázy a sľuby, podľa ktorých čitateľ spozná AI, prepíše ich a ďalšie texty bude sama kontrolovať.

## Prejdite text anti-slopom: nech neznie ako od AI

**Náročnosť: ľahká.**\
**Čas: približne 15 minút** s jedným textom, ktorý chcete poslať.
## Na čo sa hodí

Vo štvrtok posielate pani Horákovej z nákupu ponuku na servis firemných
dodávok. Úvod napísala AI a začína vetou o spoľahlivom partnerovi v náročnej
dobe, rovnako ako štyri ďalšie ponuky na jej stole. Navyše v nej stojí, že
opravu zvládnete do 24 hodín, hoci to nikto z firmy nesľúbil.

Všeobecné frázy a nepotvrdené sľuby zmiznú, keď ich AI porovná s dopytom a
ceníkom a nahradí tým, čo v nich naozaj stojí.
## Čo si pripraviť

- text, ktorý chcete poslať a ktorý celý alebo čiastočne napísala AI,
- podklady, z ktorých vychádza: dopyt, cenník alebo poznámky z hovoru,
- AI, ktorú v práci používate, alebo AI v [režime Cowork alebo Code](glossary:workmode).
## Ako na to

1. Vložte prompt a pod riadok „Text:“ dajte text alebo názov súboru v
   priečinku; v chate priložte podklady. AI vráti nálezy a prepísaný text a
   časti o súboroch v chate vynechá.
2. Napíšte AI, ktoré opravy nechcete, a doplňte miesta `[DOPLNIŤ]`, alebo ich
   nechajte vyškrtané. AI text dokončí, uloží zoznam fráz s pravidlom a
   povie vám, kam.
3. V novom chate nechajte AI napísať iný text, napríklad odpoveď zákazníkovi.
   Frázy zo zoznamu by v ňom nemali byť.

Do zoznamu patria len frázy, ktoré sa môžu objaviť aj v ďalších textoch.
## AI cvičenie

Vložte tento [prompt](glossary:prompt) do AI, ktorú v práci používate:

Skontroluj text na konci tejto správy, než ho pošlem. Je tam názov súboru v priečinku, alebo celý text. Nájdite mi miesta, podľa ktorých by čitateľ spoznal, že ho písala AI, a prepíš ich tak, aby zneli ako od človeka, ktorý vec pozná.

Prejdite text štyrmi filtrami:
- Konkrétnosť: tvrdenia a prívlastky bez dôkazu, napríklad „spoľahlivý partner“ alebo „výrazne ušetríte“. Nahraďte ich číslom, menom, dátumom alebo situáciou z podkladov.
- Vzorce: ohrané frázy („v dnešnej uponáhľanej dobe“, „posunieme vás na ďalšiu úroveň“, „neváhajte sa ozvať“), protiklady typu „nejde len o X, ale o Y“ a efektné závery, ktoré nič nehovoria.
- Rytmus: tri a viac rovnako dlhých viet za sebou, reťazec krátkych viet a automatické trojice slov.
- Formát: dlhé pomlčky, emoji namiesto odrážok a hviezdičky z Markdownu v texte, kde z nich tučné písmo nevznikne, napríklad v e-maile.
Nakoniec sa pri celom texte opýtaj: mohol by visieť na webe akejkoľvek firmy? Ak áno, prepíš ho konkrétnejšie.

Čísla, termíny, mená a sľuby nevymýšľaj. Porovnaj ich s podkladmi v priečinku alebo v chate. Čo v nich nie je, označ [DOPLNIŤ] a opýtaj sa ma.

Vráť najskôr nálezy: citáciu z textu, filter, ktorý porušuje, a lepšiu verziu. Pod ne daj celý prepísaný text. Povedz mi, ktoré opravy nechcem, a doplň, čo chýba. Hotový text ulož do nového súboru vedľa pôvodného a napíš mi jeho názov. Keď som text vložil do chatu, vráť ho celý.

Potom ulož najviac päť fráz z nálezov, ktoré sa pravdepodobne objavia aj v ďalších textoch, do súboru anti-slop.md v priečinku, v ktorom pracuješ. Ku každej fráze napíš, čím ju nahradiť, a pod zoznam stručne štyri filtre. Ak súbor existuje, pripíš len nové frázy. Do súboru AGENTS.md v tom istom priečinku pridaj pravidlo: „Predtým, než mi ukážeš text, ktorý pôjde von pod mojím menom, skontroluj ho podľa anti-slop.md.“ Ak AGENTS.md neexistuje, založ ho. Zabezpeč, aby si ho v tomto nástroji prečítal na začiatku každej práce; v Cowork to zapíš do inštrukcií priečinka. Ak pracuješ v bežnom chate bez priečinka, súbory nezakladaj a do svojej pamäte si ulož samotný zoznam fráz s pravidlom: „Predtým, než mi ukážeš text, ktorý pôjde von pod mojím menom, skontroluj ho podľa tohto zoznamu.“ Nakoniec mi napíš, kam si zoznam a pravidlo uložil.

Text:

## Vo vašom nástroji

### Microsoft Copilot
Text vložte do Copilot Chat a podklady priložte cez + pri poli pre správu.
Uloženie do pamäte Copilot potvrdí hlásením Memory updated; prehľad je v
nastavení pod Chat settings › Personalization › Saved memories. Bez pamäte
napíšte „Vypíš zoznam ako text“ a vložte ho do Custom instructions na
tom istom mieste. Skilly má Copilot v
režime Cowork (Customize › Skills), keď ho firma zapla.

### ChatGPT
V bežnom chate si ChatGPT zoznam uloží do pamäte (nastavenia, Personalization
› Memory); bez pamäte ho vložte do Custom Instructions na tom istom mieste. So
súborom pracuje Codex v aplikácii ChatGPT pre počítač: zvoľte otvorenie priečinka
(open a folder) a `anti-slop.md` aj pravidlo v `AGENTS.md` uloží sám. Skilly
má ChatGPT v tarifoch Business, Enterprise a Edu.

### Claude
V bežnom chate si Claude zoznam s pravidlom uloží do pamäte. V Cowork
vyberiete priečinok s textom pri zadávaní úlohy a AI si odkaz na `AGENTS.md`
zapíše do inštrukcií priečinka; Claude Code číta `AGENTS.md` sám. Skilly má
Claude v chate, v Cowork aj v Claude Code.

### Gemini
Trvalé miesto pre zoznam je v Gemini Gem, pretože pracovný účet nemá pamäť.
Na konci napíšte „Vypíš len zoznam fráz s pravidlom“ a uložte ho cez
Share & export › Export to Docs. Potom Gems › New Gem: do inštrukcií „Skontroluj
každý text podľa zoznamu v priloženom dokumente“, dokument cez Knowledge ›
Add from Drive. Krok 3 aj ďalšie texty robte v tomto Gemu.
## Čo je anti-slop

Anti-slop je kontrola, pri ktorej AI v texte nájde vety typické pre AI a
prepíše ich na konkrétne vety z vašich podkladov. Slop je anglické slovo pre
pomyje; na internete sa tak hovorí textom, ktoré AI vyrobí bez starostlivosti a ktoré by
mohli visieť na webe akejkoľvek firmy. Čísla a termíny si AI pritom nevymýšľa;
čo v podkladoch nenájde, označí a opýta sa vás.

Kontrola stojí na štyroch filtroch z promptu. Konkrétnosť stráži vety, ktoré
by sa dali napísať o akejkoľvek firme, a nahrádza ich číslami, menami a situáciami z
vašich podkladov. Vzorce sú frázy, ktoré AI používa stále dokola, napríklad úvod
o náročnej dobe alebo záver s výzvou, aby ste sa ozvali. Rytmus prezradí AI, keď
píše niekoľko rovnako dlhých viet za sebou alebo vymenúva vždy po troch,
apríklad „rýchlo, lacno a spoľahlivo“. Formát stráži dlhú pomlčku, ktorú ľudia
na klávesnici takmer nepíšu, a emoji namiesto odrážok.

`anti-slop.md` je obyčajný textový súbor v priečinku s textom. Je v ňom zoznam
fráz, ktoré nechcete, a čím ich nahradiť. Koncovka `.md` znamená zápis v
[Markdowne](glossary:markdown). `AGENTS.md` je súbor s pravidlami pre AI v
tom istom priečinku. AI v režime Cowork alebo Code si ho prečíta na začiatku každej
práce, takže kontrolu nemusíte zadávať znova; kde to nástroj potrebuje
nastaviť, zariadi to AI podľa promptu. V bežnom chate si AI zoznam s pravidlom
uloží do pamäte; kde nástroj pamäť nemá, nájdete náhradu v bloku „Vo vašom
nástroji“.
## Nech sa kontrola spúšťa sama

Zo zoznamu fráz urobte [skill](glossary:skill), teda uložený návod, a
kontrola pobehne vo všetkých vašich projektoch, nie len v priečinku s `AGENTS.md`.
AI si ho otvorí sama vždy, keď pre vás píše text pre ľudí. Kde skilly
váš nástroj má, ukazuje blok Vo vašom nástroji. Keď
pracujete len v bežnom chate a zoznam má AI v pamäti, tento krok
nepotrebujete. V priečinku s `anti-slop.md` stačí zadať:

```text
Urob skill s názvom anti-slop zo zoznamu fráz v anti-slop.md; keď súbor nevidíš, vezmi zoznam zo svojej pamäte. Má sa spustiť vždy, keď pre mňa píšeš alebo upravuješ text, ktorý pôjde von pod mojím menom: e-mail, ponuku, príspevok alebo text na web. Skill prejde text štyrmi filtrami zo súboru, opraví frázy zo zoznamu a čísla ani sľuby si nevymýšľa. Keď ti poviem o ďalšej fráze, ktorú nechcem, pripíš ju do skillu. Ulož skill tak, aby fungoval vo všetkých mojich projektoch; keď ho musím uložiť alebo zapnúť sám, povedz mi presne, kam kliknúť.
```
## Príklad

Martin Dvořák zo servisu firemných áut posiela 15. 10. 2026 ponuku pani
Horákovej z logistickej firmy. V dopyte stojí, že firma má 38 dodávok v Brne
a v Olomouci a na opravu teraz čaká až týždeň. Úvod ponuky napísala AI:

```text
V dnešnej uponáhľanej dobe je spoľahlivý partner pre správu vozového parku kľúčový. Ponúkame komplexný servis, rýchlu reakciu a individuálny prístup. Opravu zvládneme do 24 hodín. Neváhajte sa na nás obrátiť.
```

AI vráti štyri nálezy. Prvú vetu nahradí situáciou z dopytu: „Píšete, že
na opravu jednej z vašich 38 dodávok teraz čakáte až týždeň.“ Namiesto celej druhej
vety vymenuje podľa cenníka, čo servis obsahuje: pravidelné prehliadky a
náhradné vozidlo počas opravy. Opravu do 24 hodín označí `[DOPLNIŤ]`, pretože
v podkladoch nie je. Záver zmení na jeden ďalší krok: „Napíšte mi, ktorú
dodávku máme skontrolovať ako prvú.“

Martin si u majstra v dielni overí, že bežnú opravu zvládnu do dvoch
pracovných dní. AI to do textu doplní a do `anti-slop.md` zapíše:

```text
### Frázy, ktoré nechcem
- „v dnešnej uponáhľanej dobe“: začať situáciou zákazníka z dopytu
- „komplexný servis“: vymenovať, čo servis obsahuje
- „neváhajte sa na nás obrátiť“: napísať jeden konkrétny ďalší krok
```

V pondelok 19. 10. Martin v tom istom priečinku nechá AI odpovedať inému
zákazníkovi. Odpoveď končí otázkou, ktorý deň sa zákazníkovi hodí prvá
prehliadka, a frázy zo zoznamu v nej nie sú.
## Keď sa zaseknete

- **AI opraví len pár slov a text znie stále rovnako:** napíšte jej, nech
  prepíše celý odsek a začne situáciou čitateľa, a priložte podklad, z
  ktorého má vychádzať, napríklad dopyt alebo poznámky z hovoru.
- **V texte je veľa `[DOPLNIŤ]`:** AI nemá z čoho čísla vziať. Priložte
  cenník, zmluvu alebo dopyt. Tvrdenia, ktoré potvrdiť neviete, nechajte AI
  z textu vyškrtúť.
- **AI tvrdí, že `anti-slop.md` uložila, ale v priečinku nie je:** pravdepodobne pracujete
  v bežnom chate, ktorý súbory meniť nevie. Prepnite do
  [Cowork alebo Code](card:when-chat-is-not-enough), alebo AI požiadajte, nech
  zoznam uloží do pamäte.
- **Nový chat frázy zo zoznamu znova píše:** v Cowork alebo Code otvorte
  chat v tom istom priečinku a napíšte AI, nech si prečíta `AGENTS.md` a zariadi,
  aby ho v tomto nástroji čítala na začiatku každej práce. V bežnom chate
  sa vráťte do chatu, kde kontrola prebehla, a napíšte AI, nech si zoznam
  fráz s pravidlom uloží do pamäte. Pamäť musí byť zapnutá v nastavení.
## Čo bude hotové

Máte text, ktorý môžete odoslať: bez fráz typických pre AI a s číslami a
sľubmi, ktoré ste potvrdili. V priečinku leží `anti-slop.md` so zoznamom
fráz, ktoré už nechcete, a v `AGENTS.md` pravidlo, podľa ktorého AI každý
ďalší text skontroluje sama; v bežnom chate má AI zoznam s pravidlom v
pamäti alebo vo vlastných inštrukciách nástroja. V novom
chate ste si overili, že AI pravidlo naozaj použije.
## Čo ďalej

Fakty, čísla a zdroje v reporte alebo prezentácii skontrolujete s kartou
[Skontrolujte výstup AI](card:kontrola-vysledku). Keď má AI písať priamo
vaším štýlom, uložte si ho do
[vlastných Custom Instructions](card:custom-instructions).
## Markdown

**Čo to je:** Jednoduchý formát čistého textu, v ktorom sa nadpisy, zoznamy, odkazy a ďalšia štruktúra zapisujú pomocou niekoľkých bežných znakov. Súbory zvyčajne používajú príponu `.md`.

**Čo to nie je:** Nie je to programovací jazyk ani formát určený len pre vývojárov.

**Prečo to študent potrebuje:** Zostáva ľahko čitateľný a upraviteľný pre ľudí aj AI a dá sa prenášať medzi rôznymi nástrojmi.

## Prompt

**Čo to je:** Inštrukcia pre konkrétnu interakciu s AI.

**Čo to nie je:** Nie je to to isté ako dlhodobý kontext, uložený asistent alebo agent.

**Prečo to študent potrebuje:** Spúšťa cvičenie a riadi jeho priebeh; nie je hlavným študijným obsahom.

## Zručnosť

**Čo to je:** Opakovane použiteľný postup pre určitý typ úlohy. Môže obsahovať inštrukcie, pravidlá, príklady, šablóny a ďalšie potrebné zdroje. Spôsob vytvorenia a spustenia sa líši podľa nástroja.

**Čo to nie je:** Nie je to všeobecná rola asistenta ani jedna vydarená konverzácia uložená bez úprav.

**Prečo to študent potrebuje:** Pomáha preniesť osvedčený postup do stabilnej podoby, ktorú možno konzistentne opakovane používať.

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
