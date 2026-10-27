# Ellenőrizze az AI kimenetet: számok és állítások az alapadatokkal szemben

Az AI összeveti a kimenet számadatait és állításait az alapadatokkal, kijavítja a hibákat, és szabályt ment, hogy azok ne ismétlődjenek.

## Ellenőrizze az AI kimenetet: számok és állítások az alapadatokkal szemben

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy AI kimenettel és annak alapadataival.
## Mire jó

Kedden reggel elküldi az igazgatónak a havi értékesítési összefoglalót. Az AI írta a számokhoz fűzött kommentárt az exportból, amelyben az áll, hogy szeptemberben a bevétel 12%-kal nőtt, főként Szlovákia miatt. A megbeszélésen az igazgató megkérdezi, honnan származik ez a 12%, és nem tudja, hogy az AI az egész táblázatot látta-e, vagy csak az első lapját.

Ha az AI minden számot megkeres az alapadatokban, és megnevezi a hiba okát, pontosan meg tudja mondani az igazgatónak, honnan jön a 12%.
## Mit készítsen elő

- az AI által készített kimenet, amelyet továbbküldene: jelentés, ajánlat, jegyzőkönyv vagy táblázat,
- az alapadatok, amelyekből készült: export, árlista, szerződés vagy megbeszélés átirata,
- az AI, amelyet a munkában használ, vagy AI [Cowork vagy Code módban](glossary:workmode).
## Hogyan csinálja

1. Illessze be a promptot, és a „Kimenet:” és „Alapadatok:” alá írja be a szöveget vagy a fájlneveket; csevegésben csatolja az alapadatokat. Ha a kimenet [skill](glossary:skill) vagy ütemezett feladat alapján készült, írja ezt a prompt alá.
2. Az AI visszaadja a megállapításokat, a javított kimenetet és egy kulcsszámot az alapadatban található helyével együtt. Nyissa meg az alapadatot, és ellenőrizze a számot saját maga, mert az AI újra átsiklik a hibán.
3. Írja meg, mely javításokat nem szeretné, és egészítse ki az `[ELLENŐRIZENDŐ]` helyeket, vagy hagyja kihúzva. Az AI befejezi a kimenetet, elmenti a hibát okozó ok elleni szabályt, és megmondja, hová.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amelyet a munkában használ:

Ellenőrizd az AI által készített kimenetet, mielőtt továbbküldeném. A kimenet és az alapadatok a levél végén vannak: szövegként, mappában lévő fájlnevekként vagy csatolmányként.

Először írd le, mely fájlokat töltötted be és teljes egészében: hány oldal, lap vagy sor. Ha valamelyik nem teljes, ellenőrizd, amit látsz, és írd meg, mely lapokat vagy oldalakat kell külön elküldenem, mert azokból származik a kimenet. Ezután keresd meg a kimenetben minden számot, árat, dátumot, nevet, állítást és döntést, amely ellenőrizhető az alapadatokban, és hasonlítsd össze. Vizsgáld meg az ellenkező irányt is: mi van az alapadatokban, ami hiányzik a kimenetből, például egy tétel az ajánlatból vagy feladat a megbeszélésről. A számított értékeket számold újra, és mutasd meg a számítást. A stílust és hangnemet ne javítsd, csak azt ellenőrizd, hogy a tartalom helyes-e.

Az első válaszban add vissza:
- a megállapítások táblázatát: idézet a kimenetből, mit mond az alapadat és pontos helye (fájl, oldal vagy lap és sor, ahogy a fájl megnyitásakor látom), javítás és ok,
- a teljes javított kimenetet,
- egy számot, amelyre a kimenet leginkább épül, és pontos helyét az alapadatban, hogy ellenőrizhessem.

A hibák okát válaszd az alábbiak közül: hiányzó alapadat, bizonytalan feladat, az AI másként értelmezte az alapadatot, nem töltődött be az egész alapadat vagy a csevegés túl hosszú volt, az alapadat elavult, számítási hiba. Ha nem vagy biztos az okban, írd, hogy becslés. Amit nem találsz meg az alapadatokban, ne találj ki: jelöld `[ELLENŐRIZENDŐ]`-ként, és kérdezz meg engem.

Ezután várj. Megírom, mely javításokat nem kérem, és kiegészítem az `[ELLENŐRIZENDŐ]` helyeket. Ezután a javított verziót mentsd el új fájlként az eredeti mellé, és írd meg a nevét; csevegésben a mappa nélkül küldd vissza teljes egészében.

Végül írj egy mondatos szabályt az ok elleni védelemre, amely visszatérhet. Ha nincs visszatérő ok, használd a „Minden számnál tüntesd fel a fájlt és az oldalt vagy lapot, ahonnan származik.” szabályt. Ha azt írom, hogy a kimenet skill vagy ütemezett feladat alapján készült, javítsd a szabályt közvetlenül bennük. Egyébként mentsd el az `AGENTS.md` fájlba a munkamappában; ha nincs, hozd létre. Gondoskodj róla, hogy ezt a szabályt ebben az eszközben minden munka elején elolvasd; Coworkban írd be a mappainstrukciók közé. Szokásos csevegésben mentsd el a szabályt a memóriába, és ha ez nem lehetséges, pontosan írd meg, hová kell beilleszteni a beállításokban. Írd meg, hol van a szabály elmentve.

Kimenet:
Alapadatok:

## Az eszközödben

### Microsoft Copilot
A Copilot Chatben a + gombbal csatolhatsz akár 20 fájlt, egyenként 50 MB-ig, beleértve Excel és PDF fájlokat is. A szabályt a Copilot elmenti a memóriába, és megjeleníti a Memory updated üzenetet; áttekintést a beállításokban a Chat settings › Personalization › Saved memories alatt találsz. Általános szabály minden csevegéshez a Custom instructions alatt van ugyanott.

### ChatGPT
Szokásos csevegésben az alapadatokat a + gombbal csatold az üzenetmező mellett. A szabályt a ChatGPT elmenti a memóriába, amelyet a beállításokban a Personalization › Memory alatt találsz; az általános szabály minden csevegéshez a Custom Instructions alatt van ugyanott. Mappával a Codex dolgozik, a ChatGPT asztali alkalmazás módja, amely olvassa az `AGENTS.md` fájlt, és megnyitja a fájlokat közvetlenül a mappában.

### Claude
Szokásos csevegésben Claude elmenti a szabályt a memóriába. Coworkban kiválasztod a mappát a kimenettel és alapadatokkal a feladat megadásakor, és az AI beírja az `AGENTS.md` hivatkozását a mappainstrukciók közé; Claude Code önállóan olvassa az `AGENTS.md`-t.

### Gemini
Az alapadatokat az Add files gombbal csatolhatod számítógépről vagy Google Drive-ról, egyszerre legfeljebb 10 fájlt, 100 MB-ig. Hiányzó lapot a Google Táblázatokból a File › Download menüpont alatt CSV formátumban tölts le. A Gemini alkalmazás munkafiókjában nincs memória vagy saját utasítás, ezért az egész promptot és szabályt mentsd skillként (írd: „Mentsd skillként”); a következő ellenőrzésnél elég megadni a kimenetet és az alapadatokat.
## Miért nem stimmel az AI kimenet

A kimeneti hiba általában hat ok egyikére vezethető vissza, és mindegyikhez más szabály kell, amely legközelebb megakadályozza:

| Ok | Hogyan ismerhető fel | Szabály a jövőre nézve |
|---|---|---|
| Hiányzó alapadat | Az AI kitalálta a számot vagy ígéretet, nincs az alapadatokban | Amit az AI nem talál az alapadatokban, azt `[ELLENŐRIZENDŐ]`-ként jelölje. |
| Bizonytalan feladat | Az árak néha ÁFA-val, néha nélküle, vagy más időszakra vonatkoznak | Az árak mindig ÁFA nélküliek és teljes naptári hónapra vonatkoznak. |
| Az AI másként értelmezte az alapadatot | A kimenetben döntés szerepel, ami a megbeszélésen csak javaslat volt, vagy számok más oszlopból | Döntésnek csak azt tekintjük, amit az alapadatban valaki kifejezetten jóváhagyott. |
| Nem töltődött be az egész alapadat | Hiányoznak PDF utolsó oldalai, táblázat második lapja vagy hosszú csevegés eleje | Az AI a kezdetén írja, hány oldalt és lapot töltött be. |
| Az alapadat elavult | A mappában egy tavalyi árlista van az új mellett, és az AI a régit használta | Csak a legfrissebb árlistából vegyük az árakat, és annak nevét írjuk a kimenet alá. |
| Számítási hiba | Az összeg vagy százalék nem stimmel, ha újraszámoljuk | Az AI minden számot újraszámol és megmutatja a számítást. |

Az `AGENTS.md` egy egyszerű szöveges fájl a munkamappában az AI szabályaival. Az AI Cowork vagy Code módban minden munka elején elolvassa, így nem kell ismételni a szabályt; ahol az eszköz igényli a beállítást, az AI a prompt alapján intézi. Szokásos csevegésben az AI elmenti a szabályt a memóriába.

A skill egy elmentett útmutató az AI számára, az ütemezett feladat pedig egy beállított időben automatikusan futó AI parancs. Ha a hiba ezekben keletkezett, az AI közvetlenül ott javítja a szabályt, amely így minden további kimenetre érvényes.
## Hagyja, hogy az AI maga ellenőrizzen

Az általános szabály biztosítja, hogy az AI minden számokat tartalmazó kimenetet összevessen az alapadatokkal, mielőtt megmutatná; a gyakorlat szabálya csak egy okot ellenőriz. A mappában az AI beírja az `AGENTS.md`-be, szokásos csevegésben a memóriába. Elég megadni:

```text
Mentsd el a szabályt minden velem végzett munkához: Mielőtt megmutatnád a jelentést, ajánlatot, prezentációt vagy e-mailt számokkal, hasonlítsd össze minden számot és állítást az alapadatokkal. A kimenet alá egy mondatban írd, mely fájlokból származik, és mi nem ellenőrizhető. Amit az alapadatokban nem találsz, jelöld [ELLENŐRIZENDŐ]-ként. A mappában írd be a szabályt az AGENTS.md-be, és gondoskodj róla, hogy ezt az eszköz minden munka elején elolvassa; Coworkban a mappainstrukciók közé. Szokásos csevegésben mentsd el a memóriába.
```
## Példa

Lucie Benešová, egy céges rendezvényeket szervező ügynökségtől, 2026. október 16-án elküld egy ajánlatot a Kovo Jihlava cégnek a 120 fős karácsonyi vacsorára. Az ajánlatot az AI készítette a `Nabidky` mappában a megkeresésből és árlistákból. Az ellenőrzés három megállapítást ad vissza:

| A kimenetben | Az alapadatban | Ok |
|---|---|---|
| svédasztal 120 × 690 Kč | `cenik-2026-10.pdf`, 2. oldal: 740 Kč/fő | az alapadat elavult, az AI a tavalyi árlistát használta ugyanabból a mappából |
| terem bérleti díj 18 000 Kč ÁFÁ-val | ugyanott: 18 000 Kč ÁFA nélkül | bizonytalan feladat, nem volt egyértelmű, hogy ÁFÁ-val vagy nélküle írjuk az árakat |
| ruhatár hiányzik az ajánlatból | `poptavka-kovo.pdf`, 3. oldal: ruhatár 120 főre | nem töltődött be az egész alapadat, az AI csak a megkeresés első két oldalát olvasta be |

Az AI újraszámolja a svédasztalt 88 800 Kč-ra, kiegészíti a ruhatárat az árlista alapján, és javítja az összárat. Lucie megnyitja az árlistát, és a 2. oldalon ellenőrzi a svédasztal árát saját maga. Az AI az `AGENTS.md`-be a `Nabidky` mappában ezt írja:

```text
Csak a mappa legfrissebb árlistájából vegyél árakat, minden árnál írd, hogy ÁFÁ-val vagy nélküle van, és az ajánlat alá írd az árlista nevét. A megkeresést olvasd el teljes egészében, és írd le az elején, hány oldalas.
```

A következő héten az AI ugyanebben a mappában készített ajánlat végén már ez áll: „Árak ÁFA nélkül a `cenik-2026-10.pdf` alapján.”
## Ha elakad

- **Az AI nem tölti be az egész alapadatot vagy túl nagynak jelzi:** megírja, mely lapok vagy oldalak hiányoznak. Minden hiányzó lapot mentsen el Excelből a Mentés másként CSV formátumban, amely csak az adott lapot menti, és küldje el ugyanabban a csevegésben az üzenettel: „Itt vannak a hiányzó lapok, folytasd az ellenőrzést.” Az egész alapadatot egyszerre ellenőrzi az AI [Cowork vagy Code módban](card:when-chat-is-not-enough), ahol a fájlt közvetlenül a mappában nyitja meg.
- **Az állításnak nincs forrása az alapadatokban:** ha külső adat, például versenytárs ára vagy piaci szám, engedje az AI-t, hogy az interneten keressen forrást a [Deep Research](card:deep-research) segítségével. Egyébként húzza ki az állítást a kimenetből.
- **Majdnem az egész kimenet hibás:** az ok a feladatban vagy az alapadatokban van, és részleges javítás nem oldja meg. Egészítse ki a hiányzó alapadatot, írja hozzá a feladathoz az ellenőrzés szabályát, és kérje meg az AI-t, hogy készítse el újra a kimenetet.
- **Az AI legközelebb is ugyanazt a hibát követi el:** kérdezze meg, hol tárolja a szabályt. A mappában az `AGENTS.md`-ben kell lennie. Szokásos csevegésben a memória legyen bekapcsolva; ha a cég kikapcsolta, mentse el a szabályt a „Az eszközödben” blokk szerint, vagy [váltson Cowork vagy Code módba](card:when-chat-is-not-enough), ahol az AI beírja az `AGENTS.md`-be.
## Mi lesz kész

Megvan a javított kimenet, amelyben a számok és állítások megfelelnek az alapadatoknak, és minden javított hibánál tudja, mi okozta. Egy kulcsszámot, amelyre a kimenet leginkább épül, saját maga ellenőrzött az alapadatban. Az AI elmentette a hibát okozó ok elleni szabályt az `AGENTS.md`-be, a skillbe, a feladatba vagy a memóriába, így a következő munkánál automatikusan használja.
## Mi a következő lépés

Ha a számok stimmelnek, és a szövegnek még emberi hangzásúnak kell lennie, fusson át rajta [anti-slop](card:anti-slop), azaz az AI felismerhető fordulatok ellenőrzésén. Ha ugyanazt a kimenettípust hetente ellenőrzi, készítsen belőle [skillt](card:create-skill-from-proven-process), azaz útmutatót, amelyet az AI maga nyit meg.
## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Készség

**Mi ez:** Egy adott típusú feladathoz újrahasználható eljárás. Tartalmazhat utasításokat, szabályokat, példákat, sablonokat és egyéb szükséges forrásokat. A létrehozás és futtatás módja eszközönként eltérő.

**Mi nem ez:** Nem általános asszisztensi szerep, és nem egyetlen, változatlanul tárolt sikeres beszélgetés.

**Miért van rá szüksége a tanulónak:** Segít a bevált gyakorlatot stabil formába önteni, amelyet következetesen újra lehet használni.

## Munkamód

**Mi ez:** Az AI-val való interakció típusa: chat, vászon/mű, ügynök, kódolás, keresés. Különböző feladatok különböző módokat igényelnek.

**Mi nem:** Nem fejlettségi szint. A módot az ember választja a feladat alapján, nem a pontszáma szerint.

**Miért van rá szüksége a tanulónak:** Megtanulja felismerni, mikor érdemes váltani a chatről egy másik környezetre a jobb eredmény érdekében.

## Szolgáltatáskimaradás, limit vagy túlterhelt chat

Közös fallback az AI-val végzett munka üzemszünetének kezelésére. Minden kártyáról elérhető a **Kimaradás vagy kimerült limit** bevitelen keresztül. Nem hoz létre saját kártyát, check-int vagy ugyanazon szöveg több példányát.

A **Ha valami nem működik** specifikus szekció a kártyán belül tovább kezeli a bevitel, forrás, eszköz vagy eljárás hibáit. Ez a mechanika akkor indul el, ha az AI technikailag nem tud továbbhaladni a folyamatban.

## Először különböztesse meg, mi történt

| Amit lát | Valószínű helyzet | Első lépés |
|---|---|---|
| Az eszköz limitkimerülést, túl sok kérést vagy újraindulási időt jelez | tarifális vagy átmeneti üzemeltetési limit | jegyezze fel az újraindulás idejét és mentse el a visszatérési pontot |
| Az AI elfelejti a kezdetet, elutasítja a további mellékletet vagy túl hosszú bemenetet jelez | túl nagy kontextus, fájl vagy feladat | hozzon létre handoffot és folytassa új kontextusban vagy megfelelőbb környezetben |
| Az eszköz nem válaszol, szerverhibát ad vagy több modell is hibázik | szolgáltatáskimaradás | ellenőrizze a hivatalos státuszt és válasszon jóváhagyott helyettesítőt vagy szünetet |

Ha az AI még válaszol, képes lehet maga megnevezni a helyzetet és előkészíteni a visszatérési pontot. Ha nem válaszol, ezt a lépést hagyja ki. Ugyanazon kérés ismételt elküldése nem menti meg a munkát.

## Mentse el a visszatérési pontot

Várakozás vagy váltás előtt őrizze meg a legkisebb csomagot, amiből biztonságosan folytatható:

```text
Cél: ...
Mi készült el és hol található: ...
Megerősített döntések és korlátozások: ...
Használt források vagy fájlok: ...
Legközelebbi következő lépés: ...
Mi nem változtatható vagy nem készíthető újra: ...
```

Ha az AI még reagál, használja:

> Készíts nekem egy tömör visszatérési pontot a folytatáshoz új chatben vagy eszközben. Őrizd meg a célt, a kész részeket, a megerősített döntéseket, forrásokat, korlátozásokat és egy legközelebbi lépést. Ne találj ki olyat, ami nincs a beszélgetésben.

Hosszabb munka esetén mentse a visszatérési pontot a projekt README-jébe vagy más jóváhagyott munkaterületre. Az érzékeny bemenetek csak jóváhagyott tárolóban maradjanak.

## Tarifális vagy üzemeltetési limit kimerült

1. Tudja meg, mikor újul meg a limit, és vonatkozik-e modellre, funkcióra vagy az egész fiókra.
2. Döntsön a szünet, kisebb terjedelem vagy jóváhagyott helyettesítő modell vagy környezet között.
3. Átváltáskor vigye át a visszatérési pontot és csak a következő lépéshez szükséges forrásokat.
4. Ellenőrizze, hogy a helyettesítő tudja-e kezelni a szükséges fájlokat, eszközöket és műveleteket. Egy gyengébb modell elég lehet formázáshoz, de megbukhat elemzésnél vagy eszközhasználatnál.

## A kontextus, fájl vagy feladat túl nagy

1. Hagyja, hogy az AI készítsen handoffot, mielőtt elveszítené a korábbi döntéseket, ha még válaszol.
2. Indítson új chatet vagy projektet a visszatérési ponttal és hivatkozásokkal a kanonikus fájlokra.
3. Ossza fel a munkát értelmes egységekre, és tartsa meg a közös eredménykritériumokat. A véletlenszerű szövegtördelés elveszítheti a részek közötti kapcsolatokat.
4. Ha a feladat több fájlt, tömeges munkát vagy projektváltoztatást igényel, folytassa a `when-chat-is-not-enough` kártyán keresztül.

## Az eszköz vagy modell kimarad

1. Ellenőrizze a szolgáltató hivatalos státuszát. A fiókhibát csak akkor kezelje, ha a szolgáltatás általában működik.
2. Mentse el a visszatérési pontot a jelenleg nem működő beszélgetésen kívül, ha még hozzáférhető.
3. Csak akkor használjon jóváhagyott helyettesítő eszközt, ha az rendelkezik a szükséges képességekkel és ugyanazok a források vihetők be.
4. Ha nincs megfelelő helyettesítő, szüneteltesse a munkát és jegyezze fel a pontos következő lépést. A helyreállítás után folytassa az utolsó megerősített eredménytől.

## Biztonsági határok

- A limit vagy kimaradás nem indokolja, hogy munka-, ügyfél- vagy személyes adatokat nem jóváhagyott személyes eszközbe vigyen be.
- Az új fiók, ingyenes tarifa vagy más szolgáltató eltérő adatkezelési, tárolási és tanítási feltételekkel rendelkezhet.
- A modellek közötti váltás megváltoztathatja a formátumot, pontosságot és elérhető eszközöket. Az első kimenetet a visszatérés után hasonlítsa össze az utolsó megerősített ponttal.
- Ne küldjön újra olyan műveletet, amely a hiba előtt már megtörténhetett, amíg nem ellenőrzi az állapotát. Ez különösen igaz rendszerbejegyzésre, üzenetküldésre, vásárlásra vagy törlésre.

## Visszatérés a kártyához

A szolgáltatás helyreállítása vagy megfelelő környezetbe váltás után:

1. töltse be a visszatérési pontot,
2. mutassa meg az AI-nak az utolsó megerősített eredményt,
3. kérje csak a legközelebbi lépést,
4. fejezze be az eredeti kártyát ismétlés nélkül,
5. ha az eszköz vagy modell változott, jegyezze fel az eredményt befolyásoló különbséget.

## Nyilvántartás

A mechanika nem hoz létre külön teljesítést. A fő kártya eredményéhez csak visszatérési pontot, választott utat és esetleges eszközváltozás utáni különbséget adhat hozzá.

## Mentés a jövőre

Opcionális termékmechanika használható eredmény létrejötte után. Nem önálló kártya, nincs saját befejezése, és nem növeli a teljesített módszerek számát.

## Mikor jelenik meg
- a felhasználó használhatónak jelölte az eredményt,
- munka közben javított utasítás, stílus, döntési fa, átadás vagy más ismételhető elem keletkezett,
- várhatóan visszatér ugyanaz a munkatípus.

A mechanika nem jelenik meg egyszeri eredmény esetén, amely nem tartalmaz átadható részt, vagy ahol a biztonságos mentés nem tisztázott.

## Mit lát a felhasználó
Rövid választási lehetőség **Mentés a jövőre** a közös check-in mellett. Megnyitás után az AI automatikusan javasolja:

- mi az eredményből ismételten érvényes,
- mi fog minden alkalommal változni,
- mit kell a felhasználónak legközelebb ellenőriznie.

A felhasználó csak megerősíti vagy javítja a javaslatot. A mechanika nem hoz létre további kötelező űrlapot.

## Mit hoz létre az AI
A legkisebb újrafelhasználható eredményt, amely megfelel a tényleges munkának:

- rövid személyes preferenciát,
- utasítást vagy promptot,
- Markdown vagy second brain bejegyzést,
- projekt vagy asszisztens frissítését,
- skill alapját,
- meglévő munkafolyamat módosítását.

Ha már létezik megfelelő artefakt, az AI frissíti annak aktuális verzióját ahelyett, hogy új másolatot készítene.

## Hova tartozik a tartalom
| Tartalom típusa | Alapértelmezett hely |
|---|---|
| Apró személyes preferencia folyamatlépések nélkül | memória vagy profil, ha elérhető és megfelelő |
| Kanonikus utasítás, példa vagy eljárásleírás | Markdown, dokumentum vagy személyes second brain |
| Egy projektre korlátozott kontextus | projektutasítások és fájlok |
| Ismétlődő szerep állandó kontextussal | asszisztens |
| Stabil eljárás szabályokkal, példákkal és sablonokkal | skill |
| Több egymást követő lépés | munkafolyamat; lépések és akciók választásánál esetleg ügynöki ág |

A memória nem kanonikus verziózott eljárástároló. Preferenciát vagy hivatkozást tarthat az aktuális forrásra.

## Ha a célforma nem egyértelmű
A mechanika rövid átadást készít a [Hozzon létre projektet AI eszközében](card:asistent) kártyára. Nem választ formát ember nélkül, és nem helyettesíti az önálló skill kártyát.

## Biztonság és megosztás
- A mechanika ismert, jóváhagyott tárolókat és vállalati szabályokat használ.
- Az adott eset adatait elkülöníti a stabil résztől.
- Jogosultság nélkül nem ír be semmit megosztott rendszerbe, és nem módosít hozzáféréseket.
- Csapatmegosztás csak ismételt használat, tulajdonos kijelölése és további emberi ellenőrzés után kezdődik.

## Nyilvántartás
A check-inhez hozzáadható információ, hogy létrejött vagy módosult egy újrafelhasználható artefakt. Ez nem önálló kártyateljesítés.

## Első támogatott kártyák
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
