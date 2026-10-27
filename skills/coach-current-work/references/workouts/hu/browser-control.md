# Használja a Browser controlt: az AI kattint helyetted a böngészőben

Egy webes feladatot, amit hetente kézzel kattintva végzel, például egy jelentés letöltését, az AI elvégez helyetted a böngészőben.

## Használja a Browser controlt: az AI kattint helyetted a böngészőben

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** egy webes feladattal.
## Mire jó

Minden péntek délután letöltöd a munkaidő-nyilvántartás exportját a rendszerből, és a munkaórák összesítését kézzel viszed át egy táblázatba a vezetőség számára. A projektet és a hetet mindig kézzel szűröd. Más nem tudja ezt, így ha szabadságon vagy, a vezetőség nem kap adatokat.

A Browser control azt jelenti, hogy az AI irányítja a böngészőt: maga megnyitja az oldalt, kattint, kitölt, letölt, miközben te mással foglalkozol.
## Mit készíts elő

- egy webes feladatot, amit rendszeresen kézzel végzel, például egy riport letöltését,
- fiókot azon a weboldalon, ahol a feladatot végzed; bejelentkezel magad, amikor az AI kéri,
- mappát a feladathoz tartozó munkához; az AI ide menti el a jövőbeli folyamatot,
- AI-t, amely képes böngészőt irányítani; ha a tiéd tudja, a „A te eszközödben” blokk mutatja.
## Hogyan csináld

1. Nyisd meg az AI-t, amely képes böngészőt irányítani, a korábban előkészített mappában, és illeszd be a promptot. Az „Feladat:” sor után írd le, hova kell menni, mit kell ott csinálni, és milyen formában kéred az eredményt.
2. A bejelentkezési oldalon jelentkezz be magad, majd írd meg az AI-nak, hogy folytassa. Ezután végezz más munkát, az AI jelez, ha kész vagy döntésre van szüksége.
3. Az AI által megadott eredményoldalon ellenőrizz egy-két számot. Az AI elmenti a jövőbeli folyamatot az `ulohy-v-prohlizeci.md` fájlba.
## AI gyakorlat

Illeszd be ezt a [promptot](glossary:prompt) az AI Cowork vagy Code módjába, amely nyitva van a mappádban, és a legutolsó sor után egészítsd ki a saját feladatoddal:

Végezd el helyettem a böngészőben azt a feladatot, amit rendszeresen kézzel végzek a weben. A feladat a legutolsó sorban van.

Nyisd meg az oldalt, és haladj az eredményig: kattints, tölts ki, szűrj és tölts le, ami szükséges. Ha bejelentkezéshez érsz, szólj; bejelentkezem, és írom, hogy folytasd. Ha nem tudod, melyik opciót válaszd, kérdezz meg.

Az eredményt add vissza abban a formában, amit a feladatban kérek. Minden szám vagy változás mellé írd oda az oldal címét, ahonnan származik, hogy ellenőrizni tudjam.

Végül írd le a jövőbeli folyamatot: a feladat címével jelölt címsor alá írd, hova kell menni, mely lépések működtek (oldalcím, szűrők, gombok nevei), és milyen legyen az eredmény. Mentsd el az `ulohy-v-prohlizeci.md` fájlba abba a mappába, ahol dolgozol; ha a fájl létezik, fűzd hozzá a feladatot a végéhez. Ha nincs hozzáférésed a mappához, ezt a lépést hagyd ki.

Feladat:

## A te eszközödben

### Microsoft Copilot
A böngészőt a Copilot Cowork irányítja, csak a `copilot.cloud.microsoft` weben, Edge-ben megnyitva és rendszergazdai engedéllyel. A promptot a Coworkba illeszd (kapcsoló fent a Chat mellett); az AI az Edge-edben dolgozik, ahol már be vagy jelentkezve. Ha a web jelszót kér, megmutatja a böngészőfület, és bejelentkezés után folytatja. Ha végez, írd be: „Mentse a folyamatot skillként”; az ütemezett feladatok az Automations oldalon találhatók.

### ChatGPT
A ChatGPT-ben a böngészőt a Work mód irányítja: a ChatGPT asztali alkalmazásban válts Work módra, és illeszd be a promptot. A Work beépített böngészővel rendelkezik, ahol magad jelentkezel be; a Chrome-hoz készült ChatGPT bővítménnyel, amely engedélyezve van a Computer Use beállításban, a Chrome-ban is működik. A Work nem menti el a folyamatot fájlba, ezért kérd meg, hogy készítsen belőle ütemezett feladatot (Scheduled a bal oldali panelen).

### Claude
A Claude in Chrome bővítményt fizetős tarifákhoz telepítheted a Chrome Webáruházból, és bejelentkezel Claude fiókkal; csak Google Chrome-ban működik, Edge-ben nem. A Claude alkalmazásban a Connectors között engedélyezd a Claude in Chrome-t, és az AI így a Cowork vagy Claude Code módban a bejelentkezett Chrome-odat használja. Az ütemezett feladatok a Cowork bal oldali paneljén, a Scheduled alatt találhatók.

### Gemini
A Gemini, amely a Chrome-ot irányítja, az EU-ban, így Csehországban sem elérhető, ezért a feladatot félig manuálisan végezd el. A weboldalról az exportot töltsd le magad, a Gemini alkalmazásban csatold az Add from Drive vagy a számítógépről, és írd meg, mit szeretnél vele, például „összesítsd az órákat személyenként”. Ha a feladat ismétlődik, kérd meg a Geminit, hogy írjon IT-kérelmet az automatikus adatletöltéshez.
## Mi az a Browser control

A Browser control az angol elnevezése a böngésző irányításának. Az AI látja az általa megnyitott oldalt, és kattint, ír bele, hasonlóan hozzád. Így olyan weboldalakat is kezel, amelyekhez egyébként nem férnél hozzá: beállít valamit egy alkalmazásban, vagy végignézi a webhelyed, és megtalálja a nem működő linkeket. Ha az alkalmazásnak van csatlakozója, azaz közvetlen AI-kapcsolata, inkább azt használd, mert gyorsabb és megbízhatóbb. Az AI a jóváhagyásodat igénylő lépés előtt, például vásárlás, küldés vagy új weboldalon végzett munka előtt megáll, és megkérdez.

Néhány eszköz a böngésződben dolgozik, ahol már be vagy jelentkezve, így mindenhová eljut, ahová te is, beleértve a VPN mögötti vállalati rendszereket. Mások saját beépített böngészőt használnak, ahol külön jelentkezel be.

Az `ulohy-v-prohlizeci.md` egy egyszerű szöveges fájl a böngészőben végzett feladataidról és a működő lépésekről. A `.md` kiterjesztés azt jelenti, hogy [Markdown](glossary:markdown) formátumban íródott, ahol a sor elején álló `###` jelek címsorokat jelölnek.
## Automatikus feladatindítás

A heti ismétlődő feladatot nem kell kézzel indítanod. Illeszd be az AI-ba, amely tud ütemezett feladatokat kezelni, ezt a parancsot, csak a feladat nevét cseréld a sajátodra, és kérd meg, hogy hozzon létre belőle ütemezett feladatot. Hogy hol találod az eszközödben, azt a „A te eszközödben” blokk mutatja.

```text
Minden pénteken 15:00-kor végezd el a „Heti projektórák” feladatot az `ulohy-v-prohlizeci.md` fájl alapján. Az eredményt mentsd el ugyanabba a mappába a mai dátummal a fájlnévben, és a három legfontosabb számot írd meg nekem összefoglalóként.
```

A feladat a számítógépeden lévő fájllal és a böngésződdel dolgozik, ezért csak akkor fut, ha a számítógép be van kapcsolva, az AI alkalmazás nyitva van, és esetleg VPN csatlakozás aktív.
## Példa

Jana egy logisztikai cég új raktárépítését koordinálja, és minden pénteken elküldi a vezetőségnek, hogy a csapat mennyi órát dolgozott a projekten. 2026. október 9-én pénteken megnyitja a projekt mappáját az AI-ban, amely képes böngészőt irányítani, beilleszti a promptot, és a legutolsó sor után ezt írja:

```text
A munkaidő-nyilvántartó rendszerben töltsd le a heti órákat a „Új raktár” projekthez, és add vissza a csapattagok szerinti és összesített összeget.
```

Az AI megnyitja a nyilvántartó rendszert, kiszűri a „Új raktár” projektet és az október 5–9. közötti hetet, majd letölti az exportot. A csapat összesen 86 órát dolgozott, legtöbbet Petr (31) és Lucie (24); az AI minden szám mellé odaírja az oldal címét. Jana megnyitja a rendszer összesítőjét, és az összeg stimmel. Az AI az `ulohy-v-prohlizeci.md` fájlba ezt írja:

```text
### Heti projektórák
- Hova: munkaidő-nyilvántartó rendszer, Riportok szekció.
- Lépések: szűrő Projekt: Új raktár, időszak hétfőtől péntekig, Export Excelbe gomb.
- Eredmény: órák csapattagonként és összesen, minden szám mellett az oldal címe.
```

A következő pénteken Jana csak annyit ír: „Végezd el a heti projektórákat az `ulohy-v-prohlizeci.md` alapján”, és megkapja az új heti adatokat.
## Ha elakadnál

- **Az AI azt válaszolja, hogy nem tud böngészőt irányítani:** a sima chat nem alkalmas erre. Kapcsold be a böngésző-irányítást a „A te eszközödben” blokk szerint. További részletek a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) kártyán.
- **Az IT nem engedi telepíteni a bővítményt:** használj olyan böngészőt, ami nem igényel telepítést: a ChatGPT Work beépített böngészőjét, a Copilot Coworkot Edge-ben, vagy a Claude Cowork saját böngészőjét, amelyet a Preferred browser beállítással válthatsz. Ezekben külön jelentkezel be.
- **Az AI sokáig bolyong a weben:** egészítsd ki a feladatot a keresendő szekció vagy oldal címével, és indítsd újra.
- **Az AI nem menti el a jövőbeli folyamatot:** nincs hozzáférésed a mappához. Állítsd be a feladatot ütemezettként, vagy indítsd el Cowork vagy Code módban, megnyitott mappával.
## Mi lesz kész

Egy webes feladat, amit korábban kézzel kattintottál, elkészül, az eredményt ellenőrizted az eredeti oldalon. A működő lépéseket tartalmazó folyamat az `ulohy-v-prohlizeci.md` fájlban van, így legközelebb egy mondattal elindíthatod a feladatot.
## Mi következik

Az AI által letöltött jelentésből azonnal készíthetsz megbeszéléshez anyagot; ha hetente csinálod, [mentd el mindkét lépést skillként](card:create-skill-from-proven-process). Ha az eredményt kolléga is kapja, és a feladat hibákat is jelezzen, állítsd be [ütemezett feladatként](card:recurring-ai-task).
## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

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
