# Hozzon létre munkanaplót: projekt naplója

Az AI vezeti a projekt naplóját, így az új chat vagy kolléga ott folytatja, ahol abbahagyta.

## Hozzon létre munkanaplót: projekt naplója

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy folyamatban lévő projekttel.
## Mire jó

A múlt héten a megbeszélésen eldöntötték, hogy az ajánlat kedvezmény nélkül megy ki, és a határidő novemberre tolódik. Ma új chatet nyit, az AI erről nem tud, és a levéltervezetbe kedvezményt ír. A kolléga, aki közben átvette a projektet, megkérdezi, hogy adják-e a kedvezményt.

Segít a munkanapló, a projekt naplója: az AI minden döntés után rövid bejegyzést ír bele, és az új chat vagy kolléga elolvashatja, mi az aktuális állás.
## Mit készítsen elő

- egy mappát egy folyamatban lévő projekttel,
- jegyzeteket, e-maileket, értekezleti jegyzőkönyvet vagy chatet az utolsó munkáról,
- AI-t [Cowork vagy Code](glossary:workmode) módban, amely a számítógépen lévő fájlokkal dolgozik.
## Hogyan csinálja

1. Nyissa meg a projekt mappáját Cowork vagy Code-ban, és illessze be a promptot. Az AI megírja az első bejegyzéseket a `worklog.md` fájlba, és elmenti a szabályt, hogy minden munka után kiegészíti.
2. Olvassa el az első bejegyzéseket, és javítsa, ami nem stimmel.
3. Nyisson új chatet ugyanabban a mappában, és kérdezzen rá valamire, ami már eldöntött tény. Az AI a munkanapló alapján válaszoljon.

A bejegyzésbe csak azt írja, amit az új embernek tudnia kell, hogy ne ismételje meg a munkát.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban, a saját mappájában:

Hozz létre ehhez a projekthez munkanaplót: egy naplót, amelybe beírjuk, mi történt a projekten, miért és milyen döntések születtek.

Nézd át a projekt mappájában lévő anyagokat és a jegyzeteket, amiket adok, és írd meg az első bejegyzéseket. Minden bejegyzés így nézzen ki:

### ÉÉÉÉ-HH-NN: rövid cím
- Mi történt: egy-két mondat.
- Miért: az ok vagy a probléma, amit megold.
- Döntés: mi az aktuális állás. Ha nem született döntés, hagyd ki ezt a sort.
- Következő lépés: mi következik, és ki végzi.

A legfrissebb bejegyzés legyen felül. Írj úgy, hogy egy kolléga, aki nem dolgozott a projekten, megértse. Ne írj át teljes chatet, és ne sorold fel az apró módosításokat. Ha az anyagból nem derül ki a dátum vagy az ok, kérdezz meg engem.

Mentse a bejegyzéseket a worklog.md fájlba a projekt mappájában. Ha már létezik, írja felül új bejegyzésekkel felülről.

Végül mentse el a „Minden befejezett munka után írj felülre a worklog.md-be bejegyzést ugyanolyan formátumban.” szabályt az AGENTS.md fájlba a projekt mappájában. Ha nincs ilyen fájl, hozd létre. Gondoskodj róla, hogy ezt az eszköz a munka elején elolvassa; Cowork-ban írd be a mappa utasításaiba.

## Az eszközödben

### Microsoft Copilot
A Cowork a Chat kapcsoló mellett található; ha nincs ott, kérd az IT adminisztrátort. Csak a OneDrive és SharePoint fájlokat látja, ezért a prompt végére írd be: „Dolgozz a projekt OneDrive mappájában, a munkanaplót Word dokumentumként vezesd, a szabályt pedig írd meg a Customize, Preferences részhez.” A 3. lépésben az új feladatban add meg, hol van a projekt. A tervezett feladatokat az Automations oldalon találod.

### ChatGPT
A ChatGPT asztali alkalmazásban válts Codex módra, válaszd az open a folder-t, és nyisd meg a projekt mappáját. A Codex automatikusan olvassa az `AGENTS.md` fájlt, és létrehozza a tervezett feladatot, ha kéred; a Scheduled alatt találod. Ha nem látod a Codexet, valószínűleg az adminisztrátor letiltotta, kérd meg, hogy engedélyezze.

### Claude
A Claude asztali alkalmazásban nyisd meg a Coworkot és válaszd ki a projekt mappáját, vagy nyisd meg Claude Code-ban; mindkettő fizetős. A Cowork a mappa utasításaiba írja a szabályt, a Claude Code az `AGENTS.md`-t olvassa. Az AI létrehozza a tervezett feladatot, ha kéred, és a bal oldali panelen a Scheduled alatt találod.

### Gemini
A Gemini nem dolgozik helyi mappával, és a céges fiókoknak nincs memóriájuk, ezért nem egészíti ki automatikusan a munkanaplót. Az első bejegyzéseket azonban megírja: csatold a jegyzeteket az Add from Drive segítségével, és a munkanaplót mentsd el a Share & export, Export to Docs funkcióval. A 3. lépést a Gemben (Gems, New Gem) végezd a munkanaplóval a Knowledge-ban és az „Odpovídej podle worklogu” utasítással az Instructions-ben.
## Mi az a munkanapló

A munkanapló egy egyszerű szöveges fájl, a `worklog.md` a projekt mappájában, a legfrissebb bejegyzés felül van.
A bejegyzéseket az AI írja és menti, így nem vesz el plusz időt. A `###` a sor elején címsort jelöl; ezt [Markdown](glossary:markdown) formátumnak hívják.

Az `AGENTS.md` egy szabályfájl az AI számára ugyanabban a mappában. Sok Code módú eszköz ezt automatikusan beolvassa minden munka elején, így a munkanapló szabályát nem kell ismételni. Ha az eszköz nem tudja ezt automatikusan, az AI elmenti a szabályt az eszköz beállításaiba, vagy megmondja, hova kell tenni.

Ha csak sima chatet használsz, a munkanaplót nem menti a mappába; a [Cowork vagy Code módra váltás](card:when-chat-is-not-enough) külön kártyán mutatja. A teljes chat és apró módosítások nem tartoznak a bejegyzésekhez.
## Legyen automatikus a munkanapló

A tervezett feladat a munkanaplót kiegészíti a projekt mappáján kívüli munkák után is. A mentett szabály lefedi a projekt mappában végzett AI munkát. A munka egy része máshol zajlik: e-mailekben, megbeszéléseken vagy más chatben. A feladat minden munkanap este 18:00-kor lefut, és a napi események alapján kiegészíti a munkanaplókat. Illessze be ezt a feladatot AI-ba Cowork vagy Code módban, és kérje meg, hogy hozza létre a tervezett feladatot:

```text
Minden munkanap 18:00-kor nézd át, mi történt az aznapi chateimben, módosított fájlokban, e-mailekben és a naptárban lévő megbeszéléseken. Minden projekthez, amelyen aznap történt valami vagy döntés született, írj felülre egy bejegyzést a munkanaplóba ugyanazzal a formátummal, mint a korábbi bejegyzések. Ha a projekten nem történt semmi, ne írj semmit.
```

Ha a feladat a számítógépen lévő fájlokkal dolgozik, csak akkor fut, ha a gép be van kapcsolva és az alkalmazás nyitva.
## Példa

Projekt: új hírlevél az ügyfeleknek. Az első értekezlet jegyzeteiből az AI ezt írja:

```text
### 2026-10-08: Hírlevél eszköz és gyakoriság
- Mi történt: összehasonlítottunk három kiküldő eszközt, és kiválasztottuk azt, amelyet az értékesítés már használ.
- Miért: az értékesítésnek benne vannak a kapcsolatai, nem kell átmásolni.
- Döntés: a hírlevél havonta egyszer jön, az első szám novemberben jelenik meg.
- Következő lépés: Petra elkészíti a sablont október 15-ig.
```

Egy héttel később új chatben megkérdezi, milyen gyakran kell küldeni a hírlevelet. Jó válasz: havonta egyszer, az október 8-i bejegyzés alapján. Ha az AI mást mond, valószínűleg nem a projekt mappában dolgozik.
## Ha elakad

- **Az AI azt állítja, hogy elmentette a bejegyzést, de a fájlban nincs meg:** valószínűleg sima chatben dolgozik, ami nem tud fájlokat módosítani. Váltson [Cowork vagy Code módra](card:when-chat-is-not-enough), és nyissa meg ott a projekt mappáját.
- **Az új chat nem látja a munkanaplót:** nyisson chatet ugyanabban a projekt mappában, ne sima chatablakban.
- **Az AI nem egészíti ki a munkanaplót munka után:** kérdezze meg az AI-t, hol van a munkanapló szabálya tárolva. Az `AGENTS.md`-ben kell lennie a projekt mappájában, és ha az eszköz nem olvassa automatikusan, akkor az eszköz beállításaiban is legyen hivatkozás rá.
- **A bejegyzések túl hosszúak:** kérje meg az AI-t, hogy mindegyiket rövidítse négy sorra.
## Mi lesz kész

Van egy projekt munkanaplója az első bejegyzésekkel és elmentett szabály, amely szerint az AI minden munka után kiegészíti. Az új chatben ellenőrizte, hogy az AI ismeri a döntéseket a munkanaplóból, és nem javasolja újra, amit már elutasítottak.
## Mi a következő lépés

Foglalja össze a projekt jelenlegi állapotát egy [projekt kezdőoldalán](card:project-start-here). A többi szabályt, amelyek szerint az AI dolgozik a projekten, írja össze az [AI szabályokat tartalmazó fájlba](card:agents-md).
## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

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
