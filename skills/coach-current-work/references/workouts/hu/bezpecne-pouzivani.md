# Tudja meg, mit tehet be az AI-ba: szabály az Ön fiókjához

Az AI megkeresi a fiók feltételeiben, mi történik a feltöltött adatokkal, és ebből egy rövid szabályt készít.

## Tudja meg, mit tehet be az AI-ba: szabály az Ön fiókjához

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy fiókkal és egy anyaggal.
## Mire jó

Csütörtökön ajánlatot küld a Novák Építőipari cégnek, és AI segítségével egy oldalra szeretné rövidíteni. Munkahelyén céges AI-t használ, otthon pedig személyes fiókot, amelyben jobban ír. Beviheti az ajánlatot az ügyfél nevével és árával a személyes fiókba?

A fióktól függ: a személyes fiókok gyakran engedélyezik a beszélgetések modelltréninghez való használatát, amíg ezt a beállításokban ki nem kapcsolja, míg a céges fiókok esetén a cég és a szolgáltató közötti szerződés érvényes, ezért az AI pontosan az Ön fiókjára vonatkozó szabályokat keresi.
## Mit készítsen elő

- AI fiók, amelynél nem tudja, mit tehet be, személyes vagy céges,
- a cég AI-ra vonatkozó szabályai és az ügyféllel kötött szerződés; ne tegye be az egészet az AI-ba,
- egy valódi anyag erre a hétre: ajánlat, táblázat vagy e-mail,
- AI csevegés, amely tud weben keresni.
## Hogyan csinálja

1. Illessze be az AI gyakorlat promptját abba az AI-ba, amelyhez szabályt szeretne, és válaszoljon a kérdéseire. Az AI megkeresi a szolgáltató feltételeiben, mi történik az adatokkal, és megmutatja a szabályt.
2. Javítsa, ami nem stimmel, és egy idézetet keressen meg a link és Ctrl+F segítségével. Írja be, hogy „stimmel”, és az AI elmenti a szabályt, vagy megmondja, hová. Egy új csevegésben kérdezze meg, milyen szabálya van.
3. Írja le az AI-nak az anyagot és az abban lévő adatokat. A szabály szerint megmondja, mit kell helyettesíteni, például „Ügyfél A” a cég neve helyett, majd dolgozik vele.

A cég szabályai és az ügyféllel kötött szerződés elsőbbséget élvez a szolgáltató feltételeivel szemben.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) abba az AI-ba, amelyet a munkahelyén használ:

Tudd meg, mit tehetek be ebbe az AI fiókba, és készíts belőle egy szabályt, amelyet a további csevegésekben is követni fogsz.

Először kérdezd meg, milyen eszközt és tarifát használok, például személyes ChatGPT Plus vagy Microsoft Copilot munkahelyi fiókkal, hogy a cég adta-e a fiókot, és mit mondanak a cég szabályai vagy az ügyféllel kötött szerződés az AI-ról. Ha nem tudom a tarifát, mondd meg, hol találom meg a beállításokban. Elég, ha a cég szabályait saját szavaimmal összefoglalom.

Ezután keresd meg a szolgáltató hivatalos feltételeiben és súgójában, hogy pontosan erre a tarifára mi vonatkozik:
- használják-e a beszélgetéseimet és fájljaimat modelltréninghez, és hol lehet ezt kikapcsolni,
- meddig tárolják a beszélgetéseket és ki fér hozzájuk,
- vonatkozik-e a fiókra a cég és a szolgáltató közötti szerződés.
Minden megállapításhoz add meg a linket, az olvasás dátumát és egy rövid szó szerinti idézetet az oldal nyelvén. Amit nem találsz, azt ne találgasd.

Írj ebből egy szabályt erre a fiókra, legfeljebb tíz sorban, három részben:
- Ide tartozik: amit módosítás nélkül beletehetek.
- Helyettesíteni: amit helyettesítek feltételes értékkel, például az ügyfél nevét „Ügyfél A”-ra, és azokat az emberekre vonatkozó adatokat, amelyekre a feladatnak nincs szüksége.
- Soha: jelszavak, hozzáférési kódok, bankkártyaszámok és minden, amit a cég szabályai tiltanak.
A Soha részbe tegyél egészségügyi, vallási és szakszervezeti tagsági adatokat is, ha a cég kifejezetten nem engedélyezte azokat erre a fiókra. A cég szabályai és az ügyféllel kötött szerződés elsőbbséget élveznek a szolgáltató feltételeivel szemben. Amit nem lehet megtalálni, írd a végére kérdésként egy konkrét személynek, például IT felelősnek vagy ügyfélnek. A szabály alá tedd a források linkjeit dátummal.

Mutasd meg a szabályt, dolgozd be a javításaimat, és mentsd el az emlékezetedbe, amikor azt írom, hogy stimmel. Ha nincs emlékezeted, rövidítsd le úgy, hogy beleférjen a saját utasításokba (Custom Instructions), és mondd meg, hol találom meg a beállításokban. Ha mappákkal dolgozol a számítógépen, írd be a szabályt a saját szabályaid közé, amelyek minden mappára érvényesek, ne csak egy projektre.

Végül kérdezd meg, milyen anyaggal szeretnék ma dolgozni és milyen adatokat tartalmaz, még az adatok nélkül. A szabály szerint mondd meg, beletehetem-e egészben, vagy mit kell helyettesíteni benne. Amikor beillesztem az anyagot, végezd el vele a szükséges munkát.

## Az Ön eszközében

### Microsoft Copilot
Munkahelyi fiókkal a Copilotban érvényes a céges adatvédelem: a kérdéseket, válaszokat és céges adatokat a Microsoft nem használja modelltréninghez, és a Copilot csak akkor keres a weben, ha a cég nem tiltotta le. Ha azt írja, hogy a szabály stimmel, elmenti az emlékezetébe, ha nem, írja be, hogy „jegyezd meg ezt a szabályt”. A tervezett feladatot Microsoft Copilot licenccel hozhatja létre a prompt elküldése után a „Tervezze meg ezt a feladatot” gombbal.

### ChatGPT
A személyes ChatGPT fiókok beszélgetéseit modelltréninghez használhatják, amíg a Beállításokban a Data controls alatt ki nem kapcsolja az „Improve the model for everyone” opciót; az üzleti és vállalati fiókok alapértelmezés szerint nem használják. Az AI elmenti a szabályt az emlékezetébe, ha nincs emlékezete, írja be a Custom Instructions alá. A tervezett feladatot az AI kérésre hozza létre, áttekintés a Scheduled alatt.

### Claude
A személyes Free, Pro és Max fiókokban a Privacy beállítások között van a Model Improvement opció, amely meghatározza, hogy az Anthropic használhatja-e a csevegéseket modellfejlesztéshez; a Team és Enterprise fiókok alapértelmezés szerint nem használják tréninghez. Az AI elmenti a szabályt az emlékezetébe. A Coworkban legyen benne az Instructions for Claude a Beállításokban is.

### Gemini
Munkahelyi Google Workspace fiókkal a Google nem használja az adatait tréninghez engedély nélkül; a személyes fiók használja, és egyes csevegéseket emberek is olvasnak, ezt a Gemini Apps Activity-ben ki lehet kapcsolni. A munkahelyi fióknak nincs memóriája vagy saját utasítása, ezért a szabályt illessze be a Gem robot utasításaiba (Roboti Gem, Nový Gem), és ott nyisson új csevegést.
## Ha már megtörtént

Ha az AI-ba olyan adat került, ami nem oda való, például ügyfél-export a személyes fiókba, azonnal tegye meg a következő három lépést:

1. **Ne használja tovább a beszélgetést**, és ne ossza meg. Ne törölje, amíg azt nem mondja, akinek jelenti. A törlés nem vonja vissza, ami már kiment, és a feljegyzés szükséges az értékeléshez.
2. **Jegyezze fel az öt tényt:** mi történt (adat típusa, nem tartalma), mikor történt és mikor fedezte fel, hová került (eszköz és fiók), kiket érinthet, és mit tett már. Amit nem tud, írja ismeretlenként.
3. **Azonnal jelentse** a cégen belül annak, aki foglalkozik vele, például az IT-nek vagy az adatvédelmi felelősnek. Ügyfélmunka esetén az ügyfél kapcsolattartójának is. Személyes adatok esetén a cégnek gyakran 72 órán belül jelentési kötelezettsége van az illetékes hatóságnak.

A jelentést az AI az öt tény alapján elkészíti. Az eredeti tartalmat ne illessze be újra.
## Ne avuljon el a szabály

Az AI szolgáltatók változtatják a feltételeket és az adatkezelést személyes fiókoknál. A szabályt frissen tartja a [tervezett feladat](card:recurring-ai-task), amelyet az AI negyedévente egyszer futtat, és amelyet bármikor létrehozhat a workout után. Illessze be ezt a feladatot abba a csevegésbe, ahol a szabályt írta, és kérje meg az AI-t, hogy hozza létre a tervezett feladatot. Ha az eszköze nem támogatja a tervezett feladatokat, tegyen emlékeztetőt a naptárába, és negyedévente küldje el a feladatot manuálisan.

```text
Negyedévente nézd át a hivatalos feltételeket és súgót a tarifámhoz. Ha változott valami, ami befolyásolja az adatkezelési szabályomat, írd meg, mi változott, linkkel és dátummal, és javasolj új szabályt. Ha semmi nem változott, írj egy mondatot. A feladat létrehozásakor írd be a tarifám pontos nevét és a jelenlegi szabályt.
```
## Példa

Jana koordinál megrendeléseket egy építőipari cégnél. Otthon személyes AI fiókkal, fizetős tarifával ír, munkahelyén céges AI-t használ. Az AI a feltételekben megtalálta, hogy Jana tarifája használja a beszélgetéseket tréninghez, amíg a beállításban ki nem kapcsolja. Jana kikapcsolta a kapcsolót, és megírta az AI-nak, mit mond az IT irányelve az AI-ról: ügyfélanyagok csak céges AI-ba. Az AI megmutatta a szabályt, Jana kiegészítette a megrendelésszámokkal, és az AI elmentette az emlékezetébe:

```text
Szabály a személyes AI fiókomhoz, fizetős tarifához (ellenőrizve 2026. 10. 9.)
- Ide tartozik: saját szövegeim és az anyagok olyan részei, amelyek nem tartalmaznak ügyfélneveket és árakat.
- Helyettesíteni: ügyfél- és cégnevek (Ügyfél A, Cég B), kapcsolatok, megrendelésszámok és személynevek, amelyekre a feladatnak nincs szüksége.
- Soha: jelszavak, hozzáférési kódok, kártyaszámok, egészségügyi adatok és az egész ügyfélanyag árakkal együtt. Ezek a céges AI-ba tartoznak (IT irányelv, 3. pont).
- Kérdés az IT-nek: bevihetem-e ide az ügyfélnevek nélküli belső árlistát?
- Források: szolgáltató súgó, adatbeállítási cikk (2026. 10. 9.); IT irányelv 2026. 3. 1.
```

Jana a személyes fiókban át akarta írni az ajánlat bevezetőjét a Novák Építőipari cégnek. Az AI a szabály szerint azt mondta, hogy a „Novák Építőipari” helyett írja „Ügyfél A”-t, és hagyja ki az építésvezető nevét, mert a bevezető nem igényli. Jana két nevet kicserélt, beillesztette a bevezetőt, és az AI átírta. Az egész ajánlatot árral együtt a céges AI-ban rövidítette le.
## Ha elakad

- **Az AI nem találta meg a feltételeket vagy nem tud weben keresni:** írja be neki pontosan az eszköz és tarifa nevét, ahogy a fiók beállításaiban látja. Ha a céges fiókban az adminisztrátor letiltotta a webes keresést, az AI írja meg a cég irányelve szerinti szabályt, és amit nem lehet ellenőrizni, hagyja kérdésként az IT-nek.
- **Nincs céges AI szabály:** az AI a szolgáltató feltételei alapján ír szabályt, és a végére tesz egy kérdést a menedzser vagy az IT számára. Amíg nem válaszolnak, az ügyfélnevek és anyagok a „Helyettesíteni” részbe tartoznak.
- **Az új csevegés nem ismeri a szabályt:** ha a szabály a projekt utasításaiban van, nyisson új csevegést közvetlenül a projektben. Egyébként valószínűleg ki van kapcsolva az emlékezet, vagy az adminisztrátor letiltotta a céges fiókban. Írja be a rövidített szabályt a saját utasításai alá, azaz a beállítások azon mezőjébe, amelyet az AI minden csevegés elején elolvas. Hogyan, azt a [Custom Instructions](card:custom-instructions) kártya mutatja.
- **A feladat valódi nevek nélkül értelmetlen:** végezze el az AI-ban, amelyhez a szabály szerint tartozik, például a céges AI-ban. Ha a kész szöveget utána a személyes fiókban akarja használni, hagyja a neveket helyettesíteni közvetlenül a céges AI-ban.
- **Az anyagban van néhány név, amit a szabály nem enged:** cserélje ki szövegszerkesztőben vagy táblázatban a Keresés és csere funkcióval, és csak utána illessze be az anyagot.
## Mi lesz kész

Van szabálya az AI fiókjához forrásokkal és dátummal. Az AI elmentette, és új csevegésben ellenőrizte, hogy ismeri. Ennek alapján elkészítette az első valódi anyagot, és az AI elvégezte vele a szükséges munkát. Tudja, mit kell tenni az első percekben, ha az AI-ba olyan adat került, ami nem oda való.
## Jogi határok

A kártya segít eligazodni, de nem helyettesíti a jogi tanácsadást: mit tehet, azt a cég szabályai, az ügyféllel kötött szerződés és a [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces) határozzák meg.
## Mi következik

Készítsen szabályt a másik fiókjához is, amelyet használ, például a személyes fiók mellé a céges AI-t. Ha az AI-nak tudnia kell, ki Ön és hogyan válaszoljon, állítsa be a [Custom Instructions](card:custom-instructions)-t. A csapat közös szabályait a [csapat AI szabályai](card:pravidla-pro-tym) kártya kezeli.
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
