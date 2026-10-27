# Készítsen README-t: a projekt kezdőoldala

Az AI megírja a projekt kezdőoldalát, amelyből a kolléga és az új chat azonnal felismeri az állapotot és az érvényes dokumentumot.

## Készítsen README-t: a projekt kezdőoldala

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy folyamatban lévő projekttel.
## Mire jó

Egy hét múlva szabadságra megy, és a cég olomouci konferenciájának előkészítését
Marek kolléga veszi át. A projekt mappájában ott vannak a `catering_final.docx`,
`catering_final_2.docx`, értekezleti jegyzetek és a tavalyi program. Ön tudja, hogy
a második catering ajánlat érvényes, és a tavalyi program csak mintaként szolgál.
Marek vagy az új chat nem ismerik fel a fájlnevekből, és Önnek sietve kellene
telón elmagyaráznia.

Jó lenne egy projekt kezdőoldal, angolul README. Az AI megírja a mappa anyagai alapján,
és Marek, valamint az új chat azonnal látja, melyik dokumentum érvényes és mi a következő lépés.
## Mit készítsen elő

- egy mappát egy folyamatban lévő projekttel a számítógépen vagy szinkronizálva,
- jegyzeteket vagy e-maileket a projektről, amelyek nincsenek a mappában,
- AI-t [Cowork vagy Code](glossary:workmode) módban, amely a számítógépen lévő fájlokkal dolgozik.
## Hogyan csinálja

1. Nyissa meg a Cowork vagy Code-t a projekt mappájában, illessze be a promptot,
   alá írja be a mappában nem lévő jegyzeteket. Az AI átnézi az anyagokat és kérdéseket tesz fel,
   ha valamit nem ismer fel.
2. Válaszoljon a kérdésekre. Az AI elmenti a `README.md`-t, és az `AGENTS.md`-hez hozzáad
   egy szabályt, hogy olvassa és frissen tartsa azt. Ellenőrizze, hogy helyesen
   azonosította-e az érvényes dokumentumot.
3. Egy új chatben ugyanabban a mappában kérdezze meg, melyik dokumentum alapján dolgoznak
   és mi a következő lépés. Jó válaszként megnevezi a README által érvényesnek jelölt dokumentumot.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban,
nyitva a saját mappájában:

Írj ehhez a projekthez README-t: egy kezdőoldalt, amelyből a kolléga és az új chat azonnal megérti, miről szól és hogyan tovább. Ha nincs hozzáférésed a projekt mappájához és nem tudsz oda fájlokat menteni, azonnal mondd el, hogy átválthassak Cowork vagy Code módra.

Nézd át a projekt mappájában lévő összes anyagot és az alábbi feladat alatti jegyzeteket. Ha már van README vagy más kezdőoldal a mappában, módosítsd azt, ne hozz létre újat.

Írd meg a README-t úgy, hogy egy oldalra férjen, és tartalmazza ezeket a részeket:
- Miről szól: a projekt célja, kinek szól és meddig tart.
- Hol tartunk: mi készült el, mi nincs még kész, mi a következő lépés és ki végzi el.
- Mi nem tartozik a projekthez: mit zártunk ki vagy tettünk félre.
- Mely dokumentumok érvényesek: minden fontos fájlhoz link, mire szolgál és érvényes-e, csak mintaként szolgál, vagy már nem érvényes.
- Hol mi van: rövid áttekintés a mappákról és fájlokról.
- Frissítve: a mai dátum.

Ne írj át dokumentumtartalmakat, csak hivatkozz rájuk. Ha két dokumentum ellentmond, vagy nem tudod, melyik érvényes, kérdezz meg engem. Ne dönts a „final” szó vagy a dátum alapján. Az összes kérdést egyszerre tedd fel, csak azokra válaszolj, amelyekre az anyag nem ad választ. A válaszaim után mentsd el az oldalt README.md-ként a projekt főmappájába.

Végül adj hozzá az AGENTS.md fájlhoz a projekt mappájában egy szabályt: „A projekt munkája előtt olvasd el a README.md-t. Ha változik a cél, állapot, következő lépés vagy az érvényes dokumentum, módosítsd a README.md-t.” Ha az AGENTS.md nem létezik, hozd létre. Gondoskodj róla, hogy ezt az eszközt használva minden munkakezdéskor elolvasd; Coworkban írd be a mappainstrukciók közé.

## Az Ön eszközében

### Microsoft Copilot
A Cowork a Chat kapcsoló mellett található; ha nincs ott, kérje az IT adminisztrátort.
Csak a OneDrive és SharePoint fájlokat látja, ezért a prompt végére írja be:
„A OneDrive projektmappájában dolgozz, a README-t Word dokumentumként kezeld, és a szabályt írd meg a Customize, Preferences részhez.”
A 3. lépésben egy új feladatban írja meg, hol van a projekt. A tervezett feladatokat az Automations oldalon találja.

### ChatGPT
A ChatGPT asztali alkalmazásban váltsa Codex módra, válassza a mappa megnyitását (open a folder), és válassza ki a projekt mappáját. A Codex automatikusan olvassa az `AGENTS.md`-t és létrehozza a tervezett feladatot, ha kéri; a Scheduled alatt találja.
Ha nem látja a Codexet, valószínűleg az adminisztrátor letiltotta, kérje meg a bekapcsolására.

### Claude
A Claude asztali alkalmazásban nyissa meg a Coworkot és válassza ki a projekt mappáját,
vagy nyissa meg Claude Code-ban; mindkettő fizetős csomag. A Cowork a mappainstrukciókba írja a szabályt, a Claude Code olvassa az `AGENTS.md`-t.
Az AI létrehozza a tervezett feladatot, ha kéri, és a bal oldali panelen a Scheduled alatt találja.

### Gemini
A Gemini nem ment a számítógépen lévő mappába. Csatolja a dokumentumokat az Add from Drive segítségével,
a prompt végére írja be: „Nincs hozzáférésed a mappához, ne válts át, dolgozz a csatolt dokumentumokkal.”
A README-t a Share & export, Export to Docs funkcióval mentse.
A 3. lépést a Gemben (Gems, New Gem) végezze a README Knowledge-ban és az „README alapján válaszolj” utasítással;
kollégának ossza meg Share-en keresztül.
## Mi az a README

A [README](glossary:readme) angolul „olvass el engem” jelentésű. Ez a kezdő fájl,
amely a projekt mappájában elsőként megnyitott dokumentum. Egy oldalon elmondja,
miről szól a projekt, milyen állapotban van, mi a következő lépés, melyik dokumentum érvényes,
és hol található minden. Önnek is segít, ha két hét után visszatér a projekthez.

A `.md` kiterjesztés [Markdown](glossary:markdown) formátumot jelent: egyszerű szöveg,
amely sor elején a `#` jelek címsorokat jelölnek. Bármilyen szövegszerkesztővel megnyitható,
Windows alatt például Jegyzettömbbel, és az AI is olvassa, szerkeszti átalakítás nélkül.

Az `AGENTS.md` az AI szabályait tartalmazó fájl ugyanabban a mappában. Sok Code módú eszköz
automatikusan elolvassa minden munkakezdéskor, így nem kell az AI-nak külön mondani,
hogy olvassa el a README-t. Ha az eszköz nem tudja ezt, az AI a szabályt a beállításokba menti,
vagy megmondja, hová kell tenni.

A README csak hivatkozik a dokumentumokra, és mindegyikről megmondja, mire szolgál;
ha az AI nem tudja eldönteni, melyik dokumentum érvényes, megkérdezi Önt. Mareknél a 3. lépésben a helyes válasz a `catering_final_2.docx` lenne.

A szokásos chat nem menti el a README-t a mappába, mert nem lát bele. Ha nincs más AI-ja,
legalább [projektet hozzon létre a chatben](card:asistent), vagy nézze meg, hogyan [váltson Cowork vagy Code módra](card:when-chat-is-not-enough).

A „final” szó a fájlnévben vagy a legfrissebb dátum nem bizonyítja, hogy a dokumentum érvényes.
## Hogyan ne avuljon el a README

A tervezett feladat hetente egyszer frissíti a README-t a megbeszélések és e-mailek alapján.
Az `AGENTS.md` szabály lefedi az AI-val végzett munkát a projekt mappájában.
Az állapot azonban máshol is változhat, például megbeszélésen vagy e-mailben.
Adja meg az AI-nak Cowork vagy Code módban ezt a feladatot, és kérje, hogy hozzon létre tervezett feladatot:

```text
Minden pénteken 15:00-kor nézd át a projekt mappáját, valamint a projekthez kapcsolódó, az adott héten hozzáférhető e-maileket és találkozókat. Ha változott az állapot, a következő lépés vagy az érvényes dokumentum, módosítsd a README.md-t: csak az érintett sorokat és a frissítés dátumát. Ha nincs változás, hagyd a README-t változatlanul. A végén írd meg, mit változtattál.
```

Ha a feladat a számítógépen lévő fájlokkal dolgozik, csak akkor fut, ha a számítógép be van kapcsolva és az alkalmazás nyitva.
## Példa

Lucie új takarítószolgáltatót választ a brnoi és zlini fiókokhoz. Az AI átnézi a mappát és két kérdést tesz fel:
melyik a két Čistota cég ajánlata közül az érvényes, és hogy a Blesk cég még versenyben van-e.
Ezután ezt írja:

```text
# Takarítószolgáltató kiválasztása
Frissítve: 2026. 10. 9.

### Miről szól
Új takarítószolgáltató a brnoi és zlini fiókokhoz 2027. 1. 1-től.

### Hol tartunk
Az épületek bejárása megtörtént, két cég maradt versenyben.
Következő lépés: Lucie 2026. 10. 20-ig egyeztet találkozót mindkét céggel.

### Mi nem tartozik a projekthez
Az ablakmosás marad a jelenlegi cégnél.

### Mely dokumentumok érvényesek
- nabidka_cistota_v2.pdf: érvényes, ár a bejárás után.
- nabidka_cistota.pdf: nem érvényes, helyette a v2.
- nabidka_uklidplus.pdf: érvényes.
- porovnani-cen.xlsx: érvényes, mindkét ajánlat összehasonlítása.
- nabidka_blesk.pdf: nem érvényes, a Blesk kiesett a versenyből.

### Hol mi van
Az ajánlatok a nabidky mappában, a bejárás fotói és jegyzetei a prohlidky mappában.
```

Egy héttel később Lucie egy új chatben megkérdezi, melyik Čistota ár szerepeljen az összehasonlításban.
A jó válasz a `nabidka_cistota_v2.pdf` árát adja meg, és a Blesk céget nem említi.
Ha az AI a régi ajánlatot használja, mondja meg neki, hogy javítsa a README-ben az adott dokumentum sorát.
## Ha elakad

- **Az AI azt állítja, hogy elmentette a README-t, de nincs a mappában:** valószínűleg egy szokásos chatben dolgozik, amely nem tud fájlokat módosítani.
  Váltson [Cowork vagy Code](card:when-chat-is-not-enough) módra, és nyissa meg benne a projekt mappáját.
- **Ön sem tudja, melyik dokumentum érvényes:** kérje meg az AI-t, hogy mutassa meg a különbségeket.
  Ön vagy a projektvezető dönt, az AI pedig beírja.
- **A README túl hosszú vagy dokumentumokat másol:** kérje meg az AI-t, hogy rövidítse egy oldalra, és csak linkeket hagyjon a dokumentumokhoz.
- **Az új chat a régi dokumentum alapján válaszol:** nyissa meg a chatet ugyanabban a projektmappában, és ellenőrizze, hogy a `README.md` és az `AGENTS.md` közvetlenül ott van.
  Ezután kérje meg az AI-t, hogy olvassa el a README-t.
## Mi lesz kész

Van egy `README.md`-je, amely alapján bárki folytathatja a projektet további kérdések nélkül.
Az `AGENTS.md`-ben van egy szabály, amely miatt az AI elolvassa és frissíti a README-t munka előtt és változás esetén.
Egy új chatben ellenőrizte, hogy az AI a README alapján megtalálja az érvényes dokumentumot és tudja a következő lépést.
## Mi következik

Ha egyszerre szeretné rendben tartani az összes projektet, hozza létre a [PACT](card:pact-workspace)-ot.
Ha más, AI által rendszeresen végzett feladatokat is be akar állítani, nézze meg a [tervezett feladatot](card:recurring-ai-task).
## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## README / Kezdje itt

**Mi ez:** Egy rövid bevezető fájl vagy oldal, amely elmagyarázza, mi található a projektben, mi az aktuális, hol találhatók a fontos források, és hogyan kell azokat használni embernek vagy AI-nak.

**Mi nem ez:** Nem a dokumentumok másolata, és nem egy újabb hosszú kézikönyv a projekthez.

**Miért van rá szüksége a hallgatónak:** Segít az embereknek és az AI-nak gyorsan megtalálni, hol kezdjék, és mely anyagok aktuálisak és kötelező érvényűek.

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
