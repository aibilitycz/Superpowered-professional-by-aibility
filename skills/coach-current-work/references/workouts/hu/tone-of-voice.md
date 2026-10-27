# Mentse el a tone of voice-t: az írásstílusa fájlban

Az AI az Ön jól sikerült szövegeiből összeállítja, hogyan ír, és az első verzió minden e-mailből úgy hangzik, mintha Öntől származna.

## Mentse el a tone of voice-t: az írásstílusa fájlban

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** elkészített szövegekkel.
## Mire jó

Csütörtökön ügyfélnek kell írnia, hogy az átadás egy héttel későbbre csúszik. Az AI e-mailt ír egy perc alatt, de egy bekezdéssel kezd, amelyben méltatja az együttműködést, és azzal zárja, hogy „Keressen bizalommal“. Ön nem így ír, ezért húsz percig átírja az e-mailt. Egy hét múlva egy másik csevegésben újra megtörténik.

Ha az AI megkapja az Ön stílusát és példáit tartalmazó fájlt, egy szó cseréjével megoldja az e-mailt a húszperces átírás helyett.
## Mit készítsen elő

- 3–5 saját, elégedett szöveg: e-mailek, üzenetek, bejegyzések,
- egy szöveg, amit ezen a héten meg kell írnia, például ügyfélnek szóló e-mail,
- az AI, amit a munkában használ, vagy AI [Cowork vagy Code módban](glossary:workmode).
## Hogyan csinálja

1. Illessze be a promptot, és adja hozzá saját szövegeit, vagy hagyja, hogy az AI megtalálja azokat a postafiókjában. Az AI a stílust a `tone-of-voice.md` fájlba írja: a mappába menti, a csevegésben letölthetővé teszi.
2. Mondja meg az AI-nak, mi nem stimmel, például hogy Ön magázódik. Az AI javításokat beírja; ha a fájlt letölthetővé teszi, töltse le a legfrissebb verziót.
3. Egy új csevegésben írja meg az e-mailt fájl nélkül, például: „Írj az ügyfélnek, hogy az átadás egy héttel csúszik.“ Ezután csatolja a fájlt: „Írd meg újra ennek a fájlnak megfelelően.“

Az ügyfelek nevei nem tartoznak a szabályok közé.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkában használ:

Írd meg a tone of voice-omat: egy fájl, amely alapján bármely AI úgy ír, mint én.

Nézd át a mellékelt vagy a munkamappádban található szövegeket. Mind az enyém, és tetszenek nekem. Ha nem adok mellé szöveget, és hozzáférsz a postafiókomhoz, keress az elmúlt hónap elküldött e-mailjei között öt hosszabb, tőlem származó szöveget, és mutasd meg, melyeket választottad ki. Ha kevesebb mint három szöveg van, szólj, és kérj többet.

Írd le a stílusomat a tone-of-voice.md fájlba az alábbi részekben:

### Röviden
Három mondat arról, hogyan hangzom és kinek írok leggyakrabban.

### Mondatok és bekezdések
Milyen hosszú mondatokat és bekezdéseket írok, hogyan kezdem és zárom a szöveget.

### Megszólítás
Kinek tegeződöm, kinek magázódok, és hogyan köszönök.

### Szavak
Milyen szavakat és kifejezéseket használok. Alatta, melyeket soha nem írok.

### Szövegtípus szerint
Mi változik az e-mailben, a kollégáknak szóló üzenetben és a bejegyzésben. A hiányzó szövegtípust hagyd ki.

### Példák
Három rövid részlet a szövegeimből, amelyek a stílusomat a legjobban mutatják.

### Ellenőrzés
Egy kérdés, amit minden szöveg előtt felteszel magadnak, mielőtt nekem adod.

Minden szabályt konkrét mondatra alapozz a szövegeimből. Csak azt tekintsd szabálynak, ami legalább két szövegben ismétlődik. Írd le, hogyan írok, és ne találgasd a személyiségemet. A nevek, számok és dátumok ne kerüljenek a szabályokba, és a példákban cseréld le őket általános szavakra, például [ügyfél] vagy [dátum].

Ha mappában dolgozol, mentsd oda a tone-of-voice.md fájlt, és a mappában lévő AGENTS.md fájlba írd be a szabályt: „Ha helyettem írsz e-mailt, üzenetet vagy más szöveget, tartsd magad a tone-of-voice.md-hez.“ Ha az AGENTS.md nem létezik, hozd létre. Gondoskodj róla, hogy az AI minden munkakezdéskor elolvassa az AGENTS.md-t ebben az eszközben; Coworkban ezt írd be a mappa utasításaiba. Ha nincs hozzáférésed a mappához, ajánld fel a tone-of-voice.md letöltését.

Végül mutasd meg nekem az egész fájlt, és kérdezd meg, mi nem stimmel. A javításokat írd be a fájlba; ha mappa nélkül dolgozol, ajánld fel a javított verzió letöltését.

## Az Ön eszközében

### Microsoft Copilot
A Copilot Chat licenccel látja a munkahelyi postafiókot, és maga megtalálja az elküldött e-maileket. Nem ad letölthető fájlt, ezért a 3. lépést így végezze: egy új csevegésben írassa meg az e-mailt stílus nélkül, majd illessze be a szabályokat a Custom instructions-be (Chat settings › Personalization), és ugyanazt a feladatot adja meg egy újabb csevegésben. Ha a szabályok nem férnek el, kérje meg az AI-t, hogy rövidítse le.

### ChatGPT
A Gmail vagy Outlook csatlakoztatásával a Plugins alatt a ChatGPT maga megtalálja a postafiók szövegeit. Letölthető fájlt ad, és a 3. lépésben a + gombbal csatolhatja. Hogy minden csevegésben meglegyen, töltse fel a projekthez (New project, Add source), és ott írjon. A ChatGPT tudja a skilleket a Business, Enterprise és Edu tarifákban, valamint a Codexben.

### Claude
A Customize, Connectors alatt csatlakoztatott postafiókkal a Claude maga megtalálja a szövegeket. Letölthető fájlt készít; hogy minden csevegésben meglegyen, töltse fel a projekthez (New Project). Coworkban az AI elmenti a mappába, és az `AGENTS.md` hivatkozást beírja a mappa utasításaiba. A Claude tudja a skilleket chatben, Coworkban és Claude Code-ban, a Team és Enterprise tarifákban az adminisztrátor megoszthatja az egész cégnek.

### Gemini
Írja az üzenet elejére: @Gmail, és a Gemini maga megtalálja az elküldött e-maileket, ha be van kapcsolva a Keep Activity és a Gmail okos funkciói. Javítások után írja: „Mentse a legutolsó verziót a Google Drive-omba“, és a 3. lépésben csatolja az Add from Drive segítségével. Tartósan készítsen Gem-et (Gems › New Gem) a fájllal a Knowledge-ben; a Gmailben tegye a szabályokat az Ask Gemini › Settings › Personalization alá.
## Mi az a tone of voice

A tone of voice angol kifejezés az ember vagy cég írásstílusára; magyarul „hangnem“-ként fordítjuk. Az írásban azok a szokások, amelyek alapján az emberek felismerik, hogy a szöveg Öntől származik: milyen hosszú mondatokat ír, kinek tegeződik és kinek magázódik, milyen gyorsan tér a tárgyra, és mivel zárja az e-mailt. Ugyanezzel a módszerrel összeállíthatja a vezető stílusát, akinek bejegyzéseket ír, vagy az egész cég stílusát.

A `tone-of-voice.md` egy egyszerű szöveges fájl, amelyet például Jegyzettömbbel nyithat meg. A `.md` kiterjesztés azt jelzi, hogy [Markdown](glossary:markdown) formátumban íródott; a `###` jelek címsorokat jelölnek. Minden AI elolvassa, amely képes mellékletet fogadni, így bármely eszközben használhatja, és magával viheti, ha eszközt vált. Beillesztheti az eszköz beállításaiban a tartós utasítások közé is, ahogy a [Custom Instructions beállítása](card:custom-instructions) kártya mutatja.

Az `AGENTS.md` egy szabályfájl az AI számára a mappában. A Cowork vagy Code módban az AI minden munkakezdéskor elolvassa, és ahol az eszköznek be kell állítania valamit, az AI a prompt alapján elvégzi. Így a stílusfájlt nem kell minden alkalommal csatolni.
## Írassa az AI-t az Ön stílusában mindenhol

Ha nem akarja minden alkalommal csatolni a fájlt, készítsen a `tone-of-voice.md`-ből [skillt](glossary:skill): egy elmentett útmutatót, amit az AI mindig megnyit, amikor Ön helyett ír. Az `AGENTS.md` szabály csak a mappában végzett munkára vonatkozik. Hogy az Ön eszközében hol vannak skillek, a „Az Ön eszközében“ blokkban találja. Írja az AI-nak:

```text
Készíts a tone-of-voice.md-ből skillt, amit mindig használsz, amikor helyettem írsz olyan szöveget, amit embereknek küldök. Mentsd oda, ahol ezt az eszköz betölti, és ellenőrizd, hogy az új csevegés is látja. Ha nem tudod elmenteni, pontosan mondd meg, hova kell kattintanom.
```

A céges hangnemet elég egyszer összeállítani. Céges tarifákban a skill megosztható kollégákkal, így mindenki, aki a cég nevében ír, hozzáfér.
## Példa

Martin projektmenedzser egy építőipari cégnél. 2026. október 12-én hétfőn az AI-nak a munkaszövegeket tartalmazó mappában négy e-mailt ad a beszállítóknak és egy pénteki vezetőségi jelentést. Az AI a `tone-of-voice.md`-be többek között ezt írja:

```text
### Röviden
Röviden és tárgyilagosan írok. Az első mondatban a helyzet vagy a kérésem szerepel. A beszállítóknak és a vezetőségnek magázódok, az építkezési kollégáknak tegeződöm.

### Mondatok és bekezdések
A mondatok általában 15 szónál rövidebbek, a bekezdés legfeljebb három mondat. A bekezdést a következő lépéssel és dátummal zárom.

### Szavak
Használom: „állapot“, „szükségem van tőletek“, „péntekig“.
Nem használom: „engedjék meg“, „kapcsolódóan“, „keressen bizalommal“.

### Ellenőrzés
Így mondanám a beszállítónak telefonon?
```

Október 15-én csütörtökön az befektetőnek kell írnia, hogy a betonozás csúszik. Egy új csevegésben fájl nélkül az e-mail így kezdődik: „Engedje meg, hogy tájékoztassam a jelenlegi fejleményekről“, és az új határidő csak a harmadik bekezdésben szerepel. A fájllal az e-mail így kezdődik: „A betonozás egy héttel, október 22-ig csúszik“, és azzal zárul, hogy mit vár Martin a befektetőtől péntekig. Martin egy szót módosít, és elküldi az e-mailt.
## Ha elakad

- **A szabályok általánosak, például „barátságosan ír“:** írja az AI-nak: „Minden szabályhoz adj egy mondatot a szövegeimből, amelyre alapozod, és töröld a szabályokat mondat nélkül.“
- **A szöveg a fájllal sem hangzik úgy, mint Ön:** jelölje meg a mondatot, amit másképp írna, írja mellé a saját változatát, és kérje az AI-t, hogy a különbség alapján egészítse ki a szabályt a `tone-of-voice.md`-ben.
- **Nincs elég jó szövege:** elég három. Segítenek az AI által átírt e-mailek is: adja meg az AI verzióját és a sajátját, a különbség mutatja a stílusát a legjobban.
- **Nem lehet letölteni a fájlt, vagy az AI nem használja a mappában:** írja a csevegésbe: „Add nekem a `tone-of-voice.md` fájlt letölthetőként.“ Ha a csevegés nem tudja, váltson [Cowork vagy Code módra](card:when-chat-is-not-enough). Ott írja: „Olvasd el az `AGENTS.md`-t, és gondoskodj róla, hogy minden munkakezdéskor magadtól elolvasd.“
## Mi lesz kész

Megvan a `tone-of-voice.md` fájl az Ön stílusának szabályaival és három példával. Coworkban vagy Code-ban a mappában van, és az `AGENTS.md` szabály gondoskodik róla, hogy az AI magától kövesse; a csevegésből letölthető vagy az eszköz beállításaiban elmentett. Egy új csevegésben látta ugyanazt az e-mailt fájl nélkül és fájllal, és a második úgy hangzott, mintha Öntől származna.
## Mi a következő lépés

Ha csak szokásos csevegésben ír, töltse fel a fájlt egy [projekthez, amely tartalmazza az anyagokat és utasításokat](card:asistent), így az AI minden projektcsevegésben megkapja. Mielőtt elküldené a szöveget, ellenőrizze az AI-val a [Ellenőrizze az AI kimenetét](card:kontrola-vysledku) kártya szerint.
## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

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
