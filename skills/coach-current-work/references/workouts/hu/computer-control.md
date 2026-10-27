# Használja a Computer control-t: az AI vezérli helyetted a számítógépes programokat

Egy számítógépes program, amely nincs AI-val összekötve, az AI által vezérelve dolgozik helyetted, és az adatokat átírja.

## Használja a Computer control-t: az AI vezérli helyetted a számítógépes programokat

**Nehézség: közepes.**\
**Idő: körülbelül 20 perc** egy programmal a számítógépen.
## Mire jó

A hónap végén a projekted számláit egy számlázó programból átírod a költségáttekintő Excel táblába. A program csak a céges számítógépen fut, nincs AI kapcsolata vagy webes verziója, és az átírás negyven percet vesz igénybe.

A Computer control azt jelenti, hogy az AI látja a képernyődet, és az egérrel és billentyűzettel vezérli a programokat, hasonlóan hozzád, így még ilyen programmal is elboldogul.
## Mit készíts elő

- egy feladatot, amit rendszeresen kézzel végzel egy webes verzió nélküli programban,
- becslést, hogy hány percig tart a kézi munka,
- egy mappát a számítógépen, ahová a feladathoz tartozó munkát mented; az AI ide menti az eredményt és az eljárást,
- AI-t, amely képes vezérelni a számítógépet; hogy a tiéd tudja-e, azt a „Az eszközödben” blokk mutatja.
## Hogyan csináld

1. Nyisd meg az AI-t Cowork vagy Code módban a felkészített mappában, és illeszd be a promptot. A két utolsó sorba írd be a feladatot (program, mit kell benne csinálni, hová mentse az eredményt) és a kézi munka időtartamát.
2. Ha az AI nem talál csatlakozót a programhoz, kérni fog hozzáférést, Mac-en képernyőfelvétel engedélyt is; engedélyezd. Windows alatt, ha az AI átveszi az egeret, ne dolgozz, amíg be nem fejezi.
3. A programban ellenőrizz egy-két tételt az eredményből, és írd meg az AI-nak, mennyi időt töltöttél a feladattal. Az AI elmenti az eljárást és az összehasonlítást az `ulohy-v-aplikacich.md` fájlba.
## AI gyakorlat

Illeszd be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban, a megnyitott mappádban, és a két utolsó sorba írd be a saját feladatodat és az időt:

Végezd el helyettem a számítógépemen futó programban azt a feladatot, amit rendszeresen kézzel végzek. A feladat és a kézi idő a két utolsó sorban van.

Először nézd meg, van-e csatlakozó a programhoz. Ha igen, végezd el a csatlakozón keresztül. Ha nincs, az egérrel és billentyűzettel vezéreld a programot a képernyőn. Csak azt csináld a programban, amit a feladat kér; ha adatátírásról van szó, csak olvass és exportálj. Ha nem tudod, melyik opciót válaszd, kérdezz meg engem. Jegyezd fel, mikor kezdted és mikor fejezted be.

Az eredményt mentsd oda, ahová a feladat mondja, írd meg, hol ellenőrizhetem a programban, és kérdezd meg, mennyi időt töltöttem én a feladattal.

Ezután írd le az eljárást a jövőre az `ulohy-v-aplikacich.md` fájlba a mappában, ahol dolgozol; ha a fájl létezik, fűzd hozzá a feladatot a végéhez. A feladat címe alá írd: program és hogy van-e hozzá csatlakozó, a működő lépéseket (ablakok, menük és gombok nevei), hogyan kell kinéznie az eredménynek, és az idő összehasonlítást: mennyi időt dolgoztál te, mennyi a kézi idő, és mennyi időt töltöttem én a feladattal.

Végül adj hozzá az `AGENTS.md` fájlhoz ugyanabban a mappában egy szabályt: „Ha a feladat számítógépes programot igényel, használd a csatlakozót, ha van. Ha nincs, a képernyővezérlést használd az `ulohy-v-aplikacich.md` eljárás szerint.” Ha az `AGENTS.md` nem létezik, hozd létre. Gondoskodj róla, hogy ezt a fájlt a munkád elején elolvasd ebben az eszközben; Cowork módban írd be a mappa utasításaiba.

Feladat:
Kézi idő:

## Az eszközödben

### Microsoft Copilot
A Copilot Cowork nem vezérli a számítógépen futó programokat, ezért a kártyáról ne illeszd be a promptot. Az exportot végezd el magad, mentsd OneDrive-ra, Coworkban a `copilot.cloud.microsoft`-on a + gombbal csatold, és írd: „Az exportból készíts [feladat], az eljárást mentsd skillként.” Kapsz kész táblázatot, a programbeli kattintás marad a te feladatod. Rendszeres feladathoz kérd meg a Copilotot, hogy írjon IT kérelmet a computer use-ra a Copilot Studioból.

### ChatGPT
A Code mód a ChatGPT Codex-ben érhető el a ChatGPT asztali alkalmazásban: válaszd a Codex-et és nyiss meg egy mappát (open a folder). A számítógép vezérlését a Plugins menüben adhatod hozzá, a Computer Use gombbal Install plugin; céges fiókban ezt az adminisztrátor korlátozhatja. A Codexben az ütemezett feladatok nem vezérlik megbízhatóan a programokat, ezért ismétlődő feladatot egy mondattal indíts.

### Claude
A Claude asztali alkalmazásban a számítógép vezérlését a Settings, General alatt az Enable computer use kapcsolóval kapcsolhatod be; az AI ezt használja Coworkban és Claude Code-ban. Ez a Pro és Max tarifákban elérhető, a céges Claude Team és Enterprise még nem rendelkezik vele. Az ütemezett feladatok Coworkban a bal oldali panelen a Scheduled alatt találhatók.

### Gemini
A Gemini Mac és Windows alkalmazásban látja a megosztott ablakot, de nem vezérli helyetted a programokat. Ha a program tud exportálni, mentsd el a Drive-ra, a Gemini alkalmazásban Add from Drive-val csatold, és írd meg, mit szeretnél; a táblázatot az Export to Sheets gombbal mentheted. Rendszeres feladathoz kérd meg a Gemini-t, hogy írjon IT kérelmet, mely programban és mely feladatot szeretnéd AI-ra bízni.
## Mi az a Computer control

A Computer control angol kifejezés a számítógép vezérlésére; az AI eszközök beállításaiban általában Computer use néven szerepel. Az AI képernyőképeket készít, ezek alapján felismeri az ablakokat és gombokat, és kattint, gépel a programban, hasonlóan hozzád. Minden programmunka előtt megkérdezi, hogy használhatja-e. Mac-en általában háttérablakban dolgozik, Windows alatt néha átveszi az egeret és billentyűzetet. Bármikor megállíthatod a stop gombbal az alkalmazásban.

A csatlakozó, azaz az AI és az alkalmazás közvetlen kapcsolata az AI eszköz beállításaiban található. Az AI ezen keresztül közvetlenül olvassa és írja az adatokat, kattintás nélkül, így gyorsabb és kevesebbet hibázik. Ha nincs csatlakozó, néha a Composio szolgáltatáson keresztül csatlakozhat, amely több mint ezer alkalmazást köt össze; céges rendszereknél ezt az IT-nek kell engedélyeznie. Ha a programnak van webes verziója, gyorsabb, ha az AI a böngészőn keresztül dolgozik benne. A képernyővezérlés csak azoknál a programoknál jön szóba, amelyeknél egyik sem megoldható. Az `AGENTS.md` fájl szabálya ezt minden munkánál emlékezteti az AI-t.

Az `ulohy-v-aplikacich.md` egy egyszerű szöveges fájl a programbeli feladataiddal, a működő lépésekkel és az időösszehasonlítással. Az `AGENTS.md` egy szabályfájl ugyanabban a mappában; az AI minden munka elején elolvassa, így nem kell ismételni a csatlakozós szabályt.
## Hagyja, hogy az AI havonta önállóan végezze a feladatot

A rendszeresen ismétlődő feladatot nem kell elindítanod. Illeszd be az AI-ba, amely tud ütemezett feladatokat és számítógépvezérlést, ezt a feladatleírást, csak a feladat nevét és az időt cseréld a sajátodra, és kérd meg, hogy hozza létre az ütemezett feladatot. Az ütemezett feladatok helyét az „Az eszközödben” blokk mutatja.

```text
Minden hónap első munkanapján 8:00-kor végezd el a „Projekt számlák” feladatot az előző hónapra az `ulohy-v-aplikacich.md` fájl alapján. Az eredményt mentsd ugyanabba a mappába a hónappal a fájlnévben, és az összefoglalóban írd meg a számlák számát és a teljes összeget.
```

A feladat a számítógépen futó programot vezérli, ezért csak akkor fut, ha a számítógép be van kapcsolva, nincs alvó állapotban, és az AI alkalmazás nyitva van. Ha az eszközöd nem tud ütemezett feladatot létrehozni, indítsd el egy mondattal, például: „Készítsd el a projekt számlákat az `ulohy-v-aplikacich.md` alapján”, és az AI elvégzi a többit.
## Példa

Martin egy új webáruház projektjét koordinálja egy disztribúciós cégnél. A hónap végén a beszállítók számláit átírja a számlázó programból a költségáttekintő táblába. A program csak céges számítógépeken fut, nincs csatlakozója vagy webes verziója. 2026. szeptember 30-án, szerdán megnyitja az AI-t Code módban az `E-shop` mappában, beilleszti a promptot, és az utolsó két sorba beírja:

```text
Feladat: A számlázó programban keresd meg a szeptemberi bejövő számlákat az E-shop központtal, és írd be a táblázatba naklady-projektu.xlsx ebbe a mappába: beszállító, számlaszám, ÁFA nélküli összeg, fizetési határidő.
Kézi idő: 40 perc
```

Az AI megállapítja, hogy nincs csatlakozó a programhoz, és hozzáférést kér. Martin engedélyezi, és mivel Mac-et használ, az AI háttérablakban dolgozik, ő közben a levelezésével foglalkozik. Egyszer megkérdezi az AI, hogy az E-shop marketing központ is szerepeljen-e az áttekintésben, és 14 perc alatt 23 számla kerül a táblázatba 9 beszállítótól, összesen 412 600 Ft ÁFA nélkül. Martin megnyit két számlát a programban, az összegek stimmelnek, és az AI kérdésére válaszolva elmondja, hogy a feladat 3 percet vett igénybe. Az AI az `ulohy-v-aplikacich.md` fájlba ezt írja:

```text
### Projekt számlák
- Program: számlázó program a számítógépen, nincs csatlakozó.
- Lépések: Dokumentumok menü, Bejövő számlák, E-shop központ szűrő (kivéve E-shop marketing) és hónap, Export Excelbe gomb.
- Eredmény: naklady-projektu.xlsx táblázat a következő oszlopokkal: beszállító, számlaszám, ÁFA nélküli összeg, fizetési határidő.
- Idő: AI 14 perc, kézi 40 perc, Martin 3 perc (kérdés a központra és ellenőrzés).
```

Október végén Martin csak annyit ír: „Készítsd el a projekt számlákat az `ulohy-v-aplikacich.md` alapján”, és az AI már nem kérdez rá a központra.
## Ha elakad

- **Az AI azt válaszolja, hogy nem tudja vezérelni a számítógépet:** valószínűleg normál csevegésben vagy webes verzióban vagy. A számítógép vezérlése csak az asztali alkalmazás Cowork vagy Code módjában működik. További információ a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) kártyán.
- **Nem látod a beállítási opciót:** frissítsd az alkalmazást. A céges Claude Team és Enterprise nem támogatja a számítógép vezérlést; ha van ChatGPT-d, használd a Codex-et. Céges ChatGPT-ben az adminisztrátor korlátozhatja a vezérlést.
- **Az IT-nak jóvá kell hagynia az alkalmazást vagy engedélyeket:** kérd meg az AI-t a normál csevegésben, hogy írjon egy rövid kérelmet az IT-nek: melyik alkalmazásra, milyen engedélyre és melyik feladathoz van szükség.
- **Mac-en az AI nem látja vagy nem tud kattintani a programban:** a Rendszerbeállítások, Adatvédelem és biztonság alatt jelöld be az AI alkalmazást a Képernyőfelvétel és Kisegítő lehetőségek között.
## Mi lesz kész

Kész van egy feladat egy csatlakozó nélküli programban, és az eredményt közvetlenül a programban ellenőrizted. Az `ulohy-v-aplikacich.md` fájlban ott az eljárás a működő lépésekkel és az időösszehasonlítással, így legközelebb elég megírni, melyik feladatot végezze el az AI. Az `AGENTS.md` szabálya megmondja, mikor használja az AI a csatlakozót és mikor a képernyővezérlést.
## Mi a következő lépés

Ha a feladatot megbízhatóan és önállóan akarod futtatni hibajelzéssel, állítsd be [ütemezett feladatként](card:recurring-ai-task).
## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

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
