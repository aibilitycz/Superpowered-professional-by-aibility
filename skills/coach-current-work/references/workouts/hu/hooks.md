# Állítsa be a hookot: dokumentumellenőrzés, amit az AI nem hagy ki

Mielőtt az AI késznek jelentené a munkát, minden általa a mappában írt dokumentumot átnéz az Ön ellenőrzésére.

## Állítsa be a hookot: dokumentumellenőrzés, amit az AI nem hagy ki

**Nehézség: közepes.**\
**Idő: kb. 15 perc** az AI által dokumentumokat író mappával.
## Mire jó

Az ügyfél kedden kapott egy ajánlatot, amelyben bent maradt egy sor az Ön belső kalkulációs árrésével. Az „árrészt ne írj az ajánlatba” utasítást az AI szabályai között tartotta, de a hosszú munka során figyelmen kívül hagyta.

A hook egy lépés, amelyet az eszköz automatikusan elindít, amikor az AI befejezi a munkát, így az ellenőrzés megtörténik, még ha az AI el is felejti a szabályt.
## Mit készítsen elő

- egy mappát, ahol az AI közvetlenül fájlokba írja a dokumentumokat, például Word ajánlatokat,
- szabályokat, amelyeket az AI néha megszeg ezekben a dokumentumokban,
- AI-t [Code](glossary:workmode) módban, amely a számítógépen lévő fájlokkal dolgozik.
## Hogyan csinálja

1. Válassza ki az AI-val azokat a szabályokat, amelyeket a hooknak figyelnie kell. Illessze be a promptot az AI Code módban megnyitott mappájába; ha az eszköz engedélyt kér, engedélyezze.
2. Nézze át, mit talált az ellenőrzés a régebbi dokumentumokban; az AI csak elolvassa azokat. Ha az ellenőrzés feleslegesen jelez valamit, mondja meg az AI-nak, és az módosítja.
3. A következő munkánál, amit az AI a mappában végez, ellenőrizze, hogy a végén megjelenik-e az ellenőrzés eredményét tartalmazó sor. Amit az ellenőrzés talál, az AI javítja, mielőtt késznek jelentené a munkát.

Az ellenőrzésbe olyan szabályok tartoznak, amelyeket pontosan lehet ellenőrizni: olyan szó, amely nem lehet a dokumentumban, vagy adat, amely nem hiányozhat belőle.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI Code módba, megnyitva a saját mappájában:

Állíts be ebben a mappában egy hookot: egy dokumentumellenőrzést, amelyet ez az eszköz automatikusan elindít, amikor befejezed a munkát. Ha itt nem futnak hookok, például Coworkban vagy a szokásos chatben, szólj, és ne állíts be semmit.

Először javasolj ellenőrzési szabályokat. Nézd meg, van-e AGENTS.md a mappában, és a dokumentumokat, és javasolj legfeljebb öt olyan szabályt, amely pontosan ellenőrizhető: olyan szó vagy adat, amely nem lehet vagy nem hiányozhat a dokumentumból. Például „Az ajánlatban nincs árrés vagy beszerzési ár.” Kérdezd meg, melyiket szeretném, és add hozzá azokat is, amelyeket én mondok.

A jóváhagyott szabályokat alakítsd át egy olyan szkriptbe, amely Word dokumentumokat is el tud olvasni, és nem igényel további programok telepítését. A szkriptet mentsd a 'kontroll' almappába, a szabályokat külön fájlba mellé, hogy új szabály ne igényeljen új hook jóváhagyást. Írd be az AGENTS.md-be, hol van az ellenőrzés, hogy a következő chatben tudjam módosítani; ha nincs AGENTS.md, hozz létre egyet.

Ezután futtasd egyszer az ellenőrzést az összes már meglévő dokumentumon a mappában, és mutasd meg, mit talált. Ezeket ne javítsd, mert már elküldhették az ügyfeleknek. Csak ezután kapcsold be a hookot, amely csak az azóta létrejött vagy módosult dokumentumokat figyeli.

A hookot úgy állítsd be, hogy az ellenőrzést mindig elindítsa, amikor befejezed a munkát. Ha az ellenőrzés hibát talál, adja vissza a munkát, és javítsd ki a hibát, mielőtt késznek jelented. Ha a hiba a javítás után is megmarad, engedje tovább a munkát. Amikor a hook bármely dokumentumot ellenőriz, írja ki magától az eredményt, például „Ellenőrzés: 2 dokumentum rendben”, és ha maradt hiba, azt is. Ha a hookot vagy a mappát jóvá kell hagyni az eszközben, pontosan mondd meg, hol. Ha a hook csak új chatben lép életbe, szólj.

Ha később új szabályt mondok, add hozzá az ellenőrzéshez.

## Az Ön eszközében

### Microsoft Copilot
A Microsoft nem jelzi, hogy a Copilot tudna hookokat futtatni. Az ellenőrzési szabályokat mentse a Custom instructions-be (Beállítások és egyebek, Chat beállítások, Személyre szabás), és a munka végén írja be: „Ellenőrizd a dokumentumot a szabályaim szerint”. A hookot a Code módot támogató eszközben állíthatja be, például Claude Code-ban vagy Codexben a ChatGPT alkalmazásban; kérje meg az IT rendszergazdát.

### ChatGPT
A hookot a Codex állítja be: a ChatGPT asztali alkalmazásban váltsa Codex módra, válassza a mappa megnyitását, és illessze be a promptot. A hook a mappa megbízhatóvá nyilvánítása és a hook jóváhagyása után indul el; az AI megmondja, hol. A szokásos ChatGPT chatben az ellenőrzési szabályok a Custom instructions-be tartoznak (Beállítások, Személyre szabás).

### Claude
A hookot a Claude Code állítja be: a Claude asztali alkalmazásban váltsa Code módra, válassza ki a mappát, és illessze be a promptot; az AI maga írja be a hookot a beállításokba. A Cowork csak plugin részeként indít hookokat, ezért a gyakorlatot Claude Code-ban végezze. A szokásos Claude chatben az ellenőrzési szabályok a projekt utasításaiban vannak (Set project instructions).

### Gemini
A Gemini alkalmazás nem dolgozik a számítógépen lévő mappával, így hookot nem állíthat be benne. Az ellenőrzési szabályokat mentse skillként („Mentés skillként” parancs), és a munka végén kérje az ellenőrzést. A hookot a Code módot támogató eszközben állíthatja be, például Claude Code-ban vagy Codexben a ChatGPT alkalmazásban; kérje az IT rendszergazdát.
## Mi az a hook

A hook, angolul hook, egy lépés, amelyet az AI eszköz automatikusan elindít egy adott munkafázisban, például a munka elején vagy befejezésekor. Az AI a `AGENTS.md` fájlban lévő szabályokat olvassa, amely a mappájában lévő AI utasításokat tartalmazza, de hosszú munka során figyelmen kívül hagyhatja. A hook nem függ az AI figyelmétől.

Az AI egy szkriptet ír az ellenőrzéshez, azaz egy rövid programot, amely átnézi a dokumentumokat és jelzi, mi nem stimmel. A szkript csak pontosan ellenőrizhető dolgokat ismer fel, például tiltott szót vagy hiányzó adatot. Az adatok helyességét nem tudja ellenőrizni; erre való a [eredményellenőrzés](card:kontrola-vysledku).

A hook az eszköz beállításaiban tárolódik ebben a mappában, így minden AI munkára érvényes. Az Ön által írt dokumentumokat az ellenőrzés átnézi, ha azt mondja az AI-nak: „Ellenőrizd a mappát”. A szokásos chat vagy Cowork nem állít be automatikusan hookot; a Code módra váltásról a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) kártya tájékoztat. Ha nincs Code mód, mentse az ellenőrzési szabályokat az eszköz utasításaiba, és kérje az ellenőrzést a munka végén, ahogy az Az Ön eszközében blokk mutatja.
## Példa

Tereza céges rendezvények ajánlatait készíti egy catering cégnél. 10. 19-én hétfőn a `Nabídky 2026` mappában beállít egy hookot két szabállyal: az ajánlatban nincs árrés vagy beszerzési ár, és az ajánlat tartalmazza az érvényességi időt. Az első ellenőrzés 23 dokumentumot vizsgál át, és ezt írja ki:

```text
Ellenőrzés: 23 dokumentum, 3 találat
- Nabídka Pekárna Novák.docx: hiányzik az ajánlat érvényességi ideje.
- Nabídka Sklárny Horák.docx: hiányzik az ajánlat érvényességi ideje.
- Nabídka Autoservis Dvořák.docx: az ár táblázatban van egy sor „Árrés 18 %”.
```

10. 21-én szerdán Tereza egy 80 fős karácsonyi vacsora ajánlatát adja meg az ügyfél e-mailjéből és a belső kalkulációból. Az AI átmásolja a beszerzési ár oszlopát is a táblázatba. Az ellenőrzés a munka végén megtalálja, visszadobja az AI munkáját, amely törli az oszlopot. Tereza ezután megkapja a kész ajánlatot, alatta az „Ellenőrzés: 1 dokumentum rendben” sorral.
## Ha elakad

- **Az AI azt írja, nem tud hookot beállítani:** valószínűleg a szokásos chatben vagy Coworkban dolgozik. Váltson [Code módra](card:when-chat-is-not-enough), és nyissa meg ott a mappát.
- **Nem jelenik meg az eredmény sor, vagy a hook hibát jelez:** írja az AI-nak: „A hook nem futott le rendesen. Derítsd ki, miért, és javítsd; ha jóvá kell hagynom, mondd meg, hol.”
- **Az ellenőrzés hibákat jelez, amelyek nem hibák:** a szabály túl tág, például az „árrés” szó egy ügyfélnek szóló előnyös mondatban, vagy az érvényességi dátum egy nem ajánlat típusú dokumentumban. Mondja meg az AI-nak, hogy szűkítse az ellenőrzést erre a szabályra.
- **Az ellenőrzés nem figyeli az Ön által írt dokumentumokat:** a hook akkor indul, amikor az AI befejezi a munkát. Mondja az AI-nak: „Ellenőrizd a mappát”, így azokat is átnézi.
## Mi lesz kész

A mappában van egy hook, amely minden AI munkát követően átnézi az új és módosult dokumentumokat az Ön szabályai szerint, és látja, mit talált az ellenőrzés a régebbi dokumentumokban. A következő munkánál megjelenik az ellenőrzés eredményét tartalmazó sor, és az AI kijavítja a talált hibát, mielőtt megmutatja a kész munkát. Az új szabályt az AI hozzáadja az ellenőrzéshez, ha megmondja neki.
## Mi következik

Azokat a számokat és állításokat, amelyeket a szkript nem tud pontosan ellenőrizni, hagyja az AI-ra, hogy összevesse az alapokkal a [eredményellenőrzésben](card:kontrola-vysledku). Ha az egész mappát át akarja nézni munka nélkül is, például minden hétfő reggel, állítson be egy [ütemezett feladatot](card:recurring-ai-task).
## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

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
