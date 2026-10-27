# Ülésátirat feldolgozása: döntések és feladatok a projekthez

Az AI az ülésátiratból rövid összefoglalót készít a projekthez döntésekkel és feladatokkal, és a további üléseket is ugyanígy dolgozza fel.

## Ülésátirat feldolgozása: döntések és feladatok a projekthez

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy ülés átiratával.
## Mire jó

Szerdán volt egy egyórás megbeszélés az új árjegyzékről a pénzügy és a marketing részéről, és utána húsz oldalas átiratod van. Pénteken a kolléga az értékesítésről megkérdezi, hogy mekkora legnagyobb kedvezményt adhatnak a nagy ügyfeleknek, és nem vagy biztos benne, hogy a 8% megállapodás volt-e vagy csak javaslat.

Egy rövid összefoglalót a döntésekkel és feladatokkal te, a kolléga és az új AI chat is megtalál a projekt mappájában egy perc alatt, és a pontos szavak az átirat mellett maradnak.
## Mit készíts elő

- a projekt mappáját, amelyhez az ülés tartozik,
- egy ülés átiratát az utóbbi napokból fájlként vagy szövegként,
- AI-t [Cowork vagy Code módban](glossary:workmode), vagy a használt AI projektet.
## Hogyan csináld

1. Nyisd meg az AI-t Cowork vagy Code módban a projekt mappájában, illeszd be a promptot és add hozzá az átiratot. Az AI az átiratot a `prepisy` mappába menti, az összefoglalót a `schuzky.md` fájlba, a szabályt pedig az `AGENTS.md` fájlba.
2. A legfontosabb pontnál írd be: „Mutasd a pontos szöveget az átiratból.” Ha pénzről vagy határidőről van szó, keresd meg az időpontot az átiratban (Ctrl+F), és olvasd el magad.
3. Egy új chatben ugyanabban a mappában kérdezd meg: „Ki mit kell, hogy elvégezzen és mikorra?” Az AI az összefoglaló alapján válaszoljon.

A javaslatok, amelyeket senki nem fogadott el, ne kerüljenek az összefoglalóba.
## AI gyakorlat

Illeszd be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban, megnyitva a saját mappádban:

Dolgozd fel az ülés átiratát ehhez a projekthez. Az átiratot csatolom, vagy megírom, hol található a számítógépen. Ha ebben a környezetben nem tudsz fájlokat menteni a projekt mappába, azonnal szólj, hogy átválthassak Cowork vagy Code módra.

Az átiratot változtatás nélkül mentsd el a projekt mappájában a prepisy almappába, és nevezd el az ülés dátuma és témája szerint, például 2026-10-07-porada-cenik. A fájlt úgy helyezd el, ahogy van, a kiterjesztésével együtt, például .docx. Ha az átiratot szövegként adtam meg, mentsd el szövegfájlként, és ne rövidíts vagy írj át semmit, hogy megmaradjanak az időpontok és a beszélők nevei.

Ezután az átiratból írj egy rövid összefoglalót, és írd felülre a schuzky.md fájlba a projekt mappájában. Ha a fájl nem létezik, hozd létre. Az összefoglaló formátuma:

### ÉÉÉÉ-HH-NN: az ülés témája
Jelen voltak: nevek.
Döntések:
- mi lett eldöntve és mikortól érvényes.
Feladatok:
- ki, mit és mikorra.
Nyitott kérdések:
- mi maradt eldöntetlen, és ki fogja kideríteni.
Átirat: hivatkozás a prepisy mappában lévő fájlra.

A döntésekhez és feladatokhoz csak azt írd be, amiben az emberek megegyeztek az ülésen. A javaslatokat, amelyeket senki nem fogadott el, hagyd ki. Ha egy feladatnál nem hangzott el személy vagy határidő, írd, hogy „nem megadott“. Minden döntéshez és feladathoz írd oda zárójelben az átiratban szereplő időpontot vagy helyet, ahol elhangzott.

Végül adj hozzá az AGENTS.md fájlba a projekt mappájában egy szabályt: „Ha átiratot kapsz egy ülésről, mentsd el változtatás nélkül a prepisy mappába, és írd felülre a schuzky.md fájlba az összefoglalót ugyanabban a formában, mint korábban: csak amit az emberek megbeszéltek, minden pontnál az átiratbeli időpont, és hiányzó adat esetén 'nem megadott'. A feladatokkal és döntésekkel kapcsolatos kérdésekre a schuzky.md alapján válaszolj.“ Ha az AGENTS.md nem létezik, hozd létre. Gondoskodj róla, hogy ezt a szabályt a munka elején elolvasd ebben az eszközben; Coworkban írd be a mappa utasításai közé.

A végén mutasd meg nekem az összefoglalót, és írd meg, hova mit mentettél.

## Az eszközödben

### Microsoft Copilot
A Teams átirat a Recap fülön van az ülés chatjében. A projekt összefoglalót a Cowork menti el a Chat kapcsoló mellett, ha az admin engedélyezte: a OneDrive mappát az Add attachments segítségével csatlakoztatod, és a prompt végére írod: „Az összefoglalókat Word dokumentumban vezesd.“ Cowork nélkül a prompt nem használható: hozz létre egy jegyzetfüzetet (Notebooks › New notebook), és a „Ha nincs Cowork vagy Code“ blokk mondatát írd be a More options › Instructions-be.

### ChatGPT
A mappával a Codex dolgozik: a ChatGPT asztali alkalmazásban válts Codex-re, válaszd az open a folder-t, és illeszd be a promptot; az ütemezett feladatokat a Scheduled alatt találod. Codex nélkül a projekt a ChatGPT-ben: New project, átiratok az Add source-on keresztül, utasítások a ••• › Project settings-ben, kollégákat a Share segítségével hívhatsz meg.

### Claude
A Cowork a Claude asztali alkalmazásban elérhető fizetős csomagokban: a mappát a feladat megadásakor választod ki, és az AI az `AGENTS.md` hivatkozást elmenti a mappa utasításai közé. Az ütemezett feladatok a bal oldali panelen a Scheduled alatt vannak, és csak a számítógép bekapcsolt állapotában futnak. Cowork nélkül a projekt a Claude-ban: New Project, átiratok a + gombbal, utasítások a Set project instructions-ben, kollégák meghívása a Share project segítségével.

### Gemini
A Google Meet átirat a szervező Drive-jában a Meet Recordings mappában dokumentumként található; a Take notes for me funkció még nem támogatja a cseh nyelvet. A Gemini nem dolgozik a számítógépen lévő mappával, a projekt a Gem: Gems › New Gem, átiratok a Knowledge › Add from Drive alatt. Az összefoglalót a Share & export › Export to Docs segítségével mented, és a Gem-et a kollégákkal a Share-en keresztül osztod meg.
## Ha nincs Cowork vagy Code

Cowork vagy Code mód nélkül a projektedben a saját eszközödben dolgozod fel az üléseket: az átiratokat hozzáadod, és az eszköz utasításai érvényesek minden chatre. A projekt utasításaiba írd be:

```text
Minden átiratból írj összefoglalót: döntések, feladatok személyekkel és határidőkkel, valamint nyitott kérdések. Csak amit az emberek megbeszéltek, minden pontnál az átiratbeli időpont.
```

Minden ülés után add hozzá az átiratot a projekthez, és írd: „Készíts összefoglalót az új átiratból“. A „Ki mit kell, hogy elvégezzen?“ kérdésre az AI az átiratok alapján válaszol. A projekt helyét a „Az eszközödben“ blokk mutatja, és hogyan [váltasz Cowork vagy Code módra](card:when-chat-is-not-enough), külön fül.
## Mi az ülés átirat

Az átirat szó szerint rögzített szöveg az ülésről, általában időponttal és névvel minden megszólalásnál. Egy egyórás megbeszélésből több tucat oldal lesz. Egy eszköz készíti, amelyben az ülést rögzíted. Hol találod meg Teams-ben és Google Meet-ben, a „Az eszközödben“ blokkban van. Más eszközöknél:

- **Zoom:** a felvételnél a felhőben `.vtt` feliratfájl, amit az AI szövegként olvas be. Amikor elkészül, e-mailt kapsz.
- **Plaud**, zsebben hordható felvevő: az alkalmazásban megnyitod a felvételt, és a jobb felső sarokban lévő ikon segítségével exportálod átiratként szövegként vagy Wordben.
- **tl;dv**, online meeting felvevő: az átirat fülön a másolás gombbal kimásolod, és beilleszted az AI chatbe.

A `schuzky.md` egy egyszerű szövegfájl a projekt mappájában az összes ülés összefoglalójával, a legfrissebb fent. A `.md` kiterjesztés [Markdown](glossary:markdown) formátumot jelent, ahol a sor elején lévő `###` jelzi a címsort. A `prepisy` almappában vannak a teljes átiratok, egy fájl minden üléshez.

Az `AGENTS.md` egy szabályfájl az AI számára ugyanabban a mappában. Az AI Cowork vagy Code módban minden munka elején elolvassa, és ahol az eszköznek szüksége van rá, az AI a prompt alapján beállítja. Egy új ülés után elég az átiratot hozzáadni a chathez a projekt mappájában, és írni: „Dolgozd fel az ülést az `AGENTS.md` szerint.“
## Hogy az ülések maguktól feldolgozódjanak

Ha gyakran rögzíted az üléseket, elég letölteni az átiratot, a többit egy ütemezett feladat végzi, amit az AI minden munkanap délután elindít. Megkeresi az új átiratokat, és mindet a megfelelő projekthez dolgozza fel az `AGENTS.md` szabálya szerint. A feladatot illeszd be az AI-ba Cowork vagy Code módban, és kérd meg, hogy hozza létre az ütemezett feladatot; mely eszközök tudják ezt, a „Az eszközödben“ blokkban találod. A „Projektek“ helyett írd be azt a mappát, ahol a projektjeid vannak:

```text
Minden munkanap 17:00-kor nézd át a Letöltött fájlokat, és keresd meg bennük az ülés átiratokat. Minden fájlnál a név és tartalom alapján ismerd fel, melyik projekthez tartozik a Projektek mappában. Ha a projekt schuzky.md fájljában már van összefoglaló az adott üléshez, az átiratot hagyd ki. A többit helyezd át a projekt prepisy almappájába, és dolgozd fel az AGENTS.md szabálya szerint. Ha nem tudod, hova tartozik az átirat, hagyd a helyén. A végén írd meg, mely üléseket dolgoztad fel, és mely átiratoknál nem tudod, hova tartoznak.
```

A feladat a számítógépen lévő fájlokkal dolgozik, ezért csak akkor fut, ha a gép be van kapcsolva és az alkalmazás nyitva.
## Példa

Éva koordinálja az új árjegyzék bevezetését nagykereskedelmi ügyfeleknek. 2026. október 7-én szerdán online megbeszélése van Mártonnal a pénzügytől és Petrával a marketingtől. A megbeszélés után letölti az átiratot, megnyitja az AI-t a `novy-cenik` mappában, beilleszti a promptot és áthúzza az átiratot az ablakba. Az AI elmenti `prepisy/2026-10-07-porada-cenik.docx` néven, és a `schuzky.md`-hez ezt írja hozzá:

```text
### 2026-10-07: Új árjegyzékről szóló megbeszélés
Jelen voltak: Éva, Márton (pénzügy), Petra (marketing).
Döntések:
- A nagy vevőknek legfeljebb 8% kedvezmény adható. (12:40)
- Az új árjegyzék 2027. január 1-től érvényes, az ügyfelek december 1-én kapják meg. (31:05)
Feladatok:
- Márton kiszámolja az új árak árrését október 14-ig. (18:20)
- Petra elkészíti az ügyfeleknek szóló szórólapot, határidő: nem megadott. (35:50)
Nyitott kérdések:
- Az új árjegyzék érvényes-e az e-shopra is? Éva és az e-shop vezetője fogja kideríteni.
- Ki küldi el az árjegyzéket az értékesítőknek? Ezt senki nem vállalta a megbeszélésen.
Átirat: prepisy/2026-10-07-porada-cenik.docx
```

Éva beírja: „Mutasd a pontos szöveget a kedvezménynél.“ Az AI kiírja a 12:40-es időpontban elhangzott mondatot, amelyben Márton jóváhagyja a 8%-ot. Pénteken egy új chatben ugyanabban a mappában megkérdezi, ki mit kell, hogy elvégezzen és mikorra. Jó válasz: Márton kiszámolja az árrést október 14-ig, Petra szórólapjánál hiányzik a határidő. Ha az AI megkérdezi, milyen megbeszélésről van szó, valószínűleg nem a projekt mappájában dolgozik.
## Ha elakadnál

- **Az AI azt állítja, hogy elmentette az összefoglalót, de a `schuzky.md` fájl nincs a mappában:** valószínűleg egy sima chatben dolgozol, ahol nem lehet fájlokat módosítani. Válts [Cowork vagy Code módra](card:when-chat-is-not-enough), és válaszd ki a projekt mappáját.
- **Az összefoglalóban van olyan döntés, amit nem hoztatok meg:** az AI javaslatot fogadott el megállapodásként. Írd meg neki, mi a helyes, hogy javítsa az összefoglalót, és ellenőrizze a többi pontot is. A [Eredmény ellenőrzése](card:kontrola-vysledku) blokk mutatja, hogyan ellenőrizd az eredményt az átirat alapján.
- **Nincs átiratod:** a Teams-ben az ülés szervezője tölti le, kérd meg tőle. Ha az ülés nem volt rögzítve, írd vagy diktáld le az AI-nak, amit tudsz, és az összefoglaló akkor is elkészül.
- **Legközelebb az AI nem használja a szabályt:** írd be: „Dolgozd fel az ülést az `AGENTS.md` szerint.“ Ha ez sem segít, ellenőrizd, hogy az `AGENTS.md` a projekt mappájában van-e, és a szabály benne van.
## Mi lesz kész

Az ülés összefoglalója a `schuzky.md` fájlban a projekt mappájában, a teljes átirat a `prepisy` almappában, és az `AGENTS.md` fájlban egy szabály, amely szerint az AI ugyanígy dolgozza fel a további üléseket. A legfontosabb pontot ellenőrizted az átirat pontos szövegével, és egy új chatben kipróbáltad, hogy az AI az összefoglalóból tudja, ki mit kell, hogy elvégezzen.
## Mi következik

Ugyanabból az átiratból az AI más kimenetet is készít, például összefoglalót a következő megbeszéléshez vagy választ az ügyfélnek. Hosszú kommentfolyamokat vagy e-maileket is ugyanígy dolgoz fel: az átirat helyett a szálat adod meg neki.
Több projekt üléseihez kérd, hogy készítsen [újrahasználható útmutatót](card:create-skill-from-proven-process) a folyamatról.
Ha a kollégák is megkapják az összefoglalókat, folytasd [ütemezett feladattal](card:recurring-ai-task).
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
