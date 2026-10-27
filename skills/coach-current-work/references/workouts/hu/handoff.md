# Készítsen handoffot: folyamatban lévő munka átadása

Az AI egyoldalas handoffot ír, amely alapján a kolléga vagy az új chat a történet olvasása nélkül folytathatja a munkát.

## Készítsen handoffot: folyamatban lévő munka átadása

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy folyamatban lévő munkával.
## Mire jó

Péntektől egy hét szabadságon van, és a takarító cég kiválasztását kollégája, Pavel fejezi be. Három mondatot ír neki e-mailben. Hétfőn Pavel délelőtt fél napot tölt azzal, hogy kiderítse, melyik ajánlat még érvényes, majd a tengerparton hívja, hogy megkérdezze, tárgyalhat-e újra az árakról a szolgáltatóval.

Elég lenne egy rövid, egyoldalas átadás, amit handoffnak hívnak. Ezt az AI írja a chatből és az alapanyagokból, és Pavel ebből látja, hol tart a munka, és mit kell először tennie.
## Mit készítsen elő

- egy folyamatban lévő munka, amit átad, félretesz vagy új chatbe visz,
- a chat, amelyben utoljára dolgozott rajta, vagy a fő e-mailek és jegyzetek hozzá,
- az AI, amit a munkában használ; legjobb a [Cowork vagy Code](glossary:workmode) mód.
## Hogyan csinálja

1. Illessze be a promptot abba a chatbe, amelyben utoljára dolgozott a munkán. Ha az AI-n kívül történt, illessze be egy új chatbe a fő alapanyagokkal és pár mondattal arról, hol tart a munka.
2. Olvassa el a handoffot úgy, mintha kolléga lenne, aki nem dolgozott a projekten, és mondja meg az AI-nak, mi hiányzik vagy felesleges. Cowork vagy Code módban mentse `handoff.md`-ként, normál chatben a válaszban kapja meg.
3. Nyisson új chatet, és írja be: „Folytasd a `handoff.md` alapján”, normál chatben illessze be a handoffot az alapanyagokkal. Az AI kérdések nélkül elmondja, hol tart a munka, és javasolja a következő lépést.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkában használ:

Készíts handoffot: rövid átadás folyamatban lévő munkáról. A kolléga vagy az új chat ebből kérdések nélkül folytathatja.

Alapozz a chatünkre, az alapanyagokra, amiket mellékelek, illesztek vagy írok ehhez a feladathoz, és a projekt mappájában lévő fájlokra, ha hozzáférsz. Ha valamelyik ponthoz hiányzik valami, kérdezz meg legfeljebb öt dolgot egyszerre. Írd a handoffot ebben a formátumban:

### Handoff: munka neve (dátum)
- Cél: mi legyen a végeredmény, kinek és mikorra.
- Kész és ellenőrzött: mi készült el, és miből tudjuk, pl. fájl, link vagy konkrét személy visszaigazolása.
- Folyamatban: mi van elkezdve és milyen állapotban.
- Következő lépés: egy konkrét feladat, amit a címzett először végezzen el.
- Kész van, ha: miből ismeri fel, hogy befejeződött a munka.
- Határok: mit nem szabad változtatni vagy csinálni egyeztetés nélkül.
- Hiányzik: nyitott kérdések és alapanyagok vagy hozzáférések, amik még nincsenek meg a címzettnek.
- Alapanyagok: fájlok és linkek, amikkel dolgozni kell.

Írj olyan embernek, aki nem dolgozott a projekten, és férj bele egy oldalra. Ne írj át chatet, hagyd ki a zsákutcákat, jelszavakat és személyes adatokat, amikre nincs szükség. Amit a chatből, alapanyagokból vagy válaszaimból nem ismersz biztosan, írd a „Hiányzik” részbe, és ne találj ki semmit.

Ha a projekt mappában dolgozol, mentsd a handoffot `handoff.md` fájlba. Ha már létezik, írd felül, mert csak az utolsó átadás érvényes. Ha nem tudsz fájlokat kezelni, ne ments semmit, és írd meg a teljes handoffot válaszként.

Végül mentsd el a következő szabályt: „Ha azt írom, hogy ‚handoff‘, készítsd el az átadást ebben a formátumban.” Normál chatben az AI elmenti a szabályt és a handoff formátumot a memóriába, ha nincs memória, szólj nekem. Ha projekt mappában dolgozol, írd be a szabályt és a formátumot az `AGENTS.md` fájlba, ha nincs, hozd létre. A szabályhoz írd hozzá: „Mentsd el az átadást `handoff.md`-be. Ha a mappában van `handoff.md`, olvasd be minden új munka elején. Ha a munka kész, írd az első sorába: ‚Lezárva‘ és a dátumot, és a lezárt handoffot ne tekintsd feladatnak.” Gondoskodj róla, hogy ezt az `AGENTS.md`-t ebben az eszközben minden munka elején beolvasd; Coworkban írd be a mappa utasításaiba.

## Az eszközödben

### Microsoft Copilot
A Copilot Chatben az átadást a válaszban kapod meg. Ha be van kapcsolva a Work IQ gomb, a Copilot látja az e-mailjeidet, találkozóidat és fájljaidat, így nem kell azokat beilleszteni; elég megírni, mely munkára vonatkozik. A szabályt a Copilot elmenti a memóriába (Saved memories a Settings and more, Chat settings, Personalization menüben), ha az adminisztrátor nem tiltotta le.

### ChatGPT
Normál ChatGPT chatben az átadást a válaszban kapod, és az AI elmenti a szabályt a memóriába (Settings, Personalization, Memory), ha a cég nem tiltotta le. A mappával a Codex dolgozik: a ChatGPT asztali alkalmazásban válts Codex módra, és válaszd a mappa megnyitását (open a folder). A Codex maga olvassa az `AGENTS.md`-t, és a tervezett feladatokat a Scheduled alatt találod.

### Claude
Normál Claude chatben az átadást a válaszban kapod, és az AI elmenti a szabályt a memóriába (Settings, Memory), amit a vállalati fiókban az admin engedélyez. Coworkban a Claude asztali alkalmazásban az AI elmenti a `handoff.md`-t a kiválasztott mappába, és a szabályt beírja a mappa utasításaiba (Folder instructions); Claude Code olvassa az `AGENTS.md`-t.

### Gemini
A Gemini válaszában kapod az átadást, és a Share & export, Export to Docs funkcióval Google Dokumentumként mentheted. A Gmail e-maileket megtalálja, ha a promptban beírod: @Gmail és a téma. A vállalati fiókoknak nincs memóriájuk, ezért a formátumot skillként mentsd el (írd: „Mentsd skillként”), és legközelebb elég csak annyit írni, hogy „handoff”.
## Mi az a handoff

A handoff angol szó az átadásra, például staféta vagy műszakváltás. Tartalmazza a célt, mi készült el és ellenőrizve van, a következő lépést, miből ismerjük fel a kész állapotot, mit nem szabad változtatni, és mi hiányzik még. Cowork vagy Code módban ez egy sima szöveges `handoff.md` fájl a projekt mappájában, amit bármilyen szövegszerkesztővel megnyithatsz. Mindig csak az utolsó handoff érvényes: az AI felülírja a következő átadáskor, és ha a munka kész, lezártnak jelöli.

A handoff akkor is hasznos, ha pár napra elhagyod a munkát, vagy ha a chat túl hosszú, és az AI elfelejti, miről állapodtatok meg eleinte. Az AI egy chatben csak korlátozott mennyiségű szöveget tud kezelni, hosszú chatben elveszti a kezdetet, és összekeveri a régi és új verziókat. A handoff csak a jelenleg érvényes információkat viszi át az új chatbe.

Az `AGENTS.md` egy szabályfájl ugyanabban a mappában. Sok eszköz Code módban automatikusan beolvassa minden munka elején; ahol nem tudja, az AI elmenti a szabályt az eszköz beállításaiba, vagy megmondja, hova kell tenni. Legközelebb elég csak annyit írni, hogy „handoff”, és az AI tudja, mit és hova írjon.

A handoffba csak az kerül, ami nélkül a címzett nem tud tovább dolgozni; a teljes chatet, zsákutcákat és személyes adatokat, amire nincs szükség, az AI a prompt szerint kihagyja. Normál chatben az AI elmenti a szabályt a memóriába. A kollégának a handoffot e-mailben küldd el, és csatold az alapanyagokat, amikre hivatkozik.
## Hagyja, hogy a handoff magától készüljön

Ha Cowork vagy Code módban több projekten dolgozik egy mappában, a handoffok maguktól is elkészülhetnek minden pénteken, mielőtt a folyamatban lévő munkát a hétvégére félreteszi. Elég egy ütemezett feladat. Nyissa meg az AI-t Cowork vagy Code módban abban a közös mappában, illessze be ezt a feladatot, és kérje meg, hogy hozzon létre ütemezett feladatot:

```text
Minden pénteken 16:00-kor nézd át ennek a mappának az almappáit, ahol ezen a héten dolgoztak, és a munka még nincs kész. Mindenhol ments el egy új `handoff.md`-t az adott almappa `AGENTS.md`-jében lévő formátumban. Ha nincs szabály, használd a meglévő `handoff.md` formátumát, és ha az sincs, hagyd ki az almappát. A végén írd meg, mely projekteknél maradt valami a „Hiányzik” részben.
```

Ha a feladat a számítógépen lévő fájlokkal dolgozik, csak akkor fut, ha a gép be van kapcsolva és az alkalmazás nyitva.

Hétfőn nyisson új chatet a projekt mappájában, és írja be csak: „Folytasd a `handoff.md` alapján.”
## Példa

Éva egy új takarító céget választ a cégnek. Csütörtökön, október 15-én, a szabadság előtti napon, beilleszti a promptot egy Cowork chatbe, ahol az AI-val összehasonlította az ajánlatokat. Olvasás közben észreveszi, hogy hiányzik, kit kell hívni az EkoCleanből; az AI kiegészíti, és a `handoff.md` így néz ki:

```text
### Handoff: takarító cég kiválasztása (2026. 10. 15.)
- Cél: október 30-ig aláírt szerződés a szolgáltatóval, aki december 1-jén kezdi a takarítást.
- Kész és ellenőrzött: három ajánlat összehasonlítása a srovnani-nabidek.xlsx fájlban; a Čistota Plus és az Úklid Brno e-mailben megerősítette az árakat október 13-án.
- Folyamatban: az EkoClean ígért módosított ajánlatot október 20-ig.
- Következő lépés: október 19-én, hétfőn felhívni Petra Horákovát az EkoCleanből, hogy megérkezik-e időben az ajánlat.
- Kész van, ha: a pénzügyi igazgató jóváhagy egy szolgáltatót, és a szerződés aláírásra kerül.
- Határok: az árról nem tárgyalni újra, a plafon havi 42 000 CZK.
- Hiányzik: a jogi osztály szerződésmintája; Pavelnek még nincs hozzáférése a Nákup megosztott mappához.
- Alapanyagok: srovnani-nabidek.xlsx és az ajánlatok a nabidky mappában.
```

Éva ezután új chatet nyit ugyanabban a mappában, és beírja: „Folytasd a `handoff.md` alapján.” Az AI válaszol, hogy a kiválasztás az EkoClean ajánlatára vár, és javasolja, hogy hétfőn hívják Horákovát. Nem kérdez semmit, így Éva beilleszti a handoffot Pavelnek küldött e-mailbe, és csatolja az összehasonlító táblázatot. Ha az AI kérdezne, hogy melyik kiválasztásról van szó, az új chat valószínűleg más mappában futna, mint a handoff.

Normál chatben Éva az új chatbe beilleszti a szolgáltatók e-mailjeit és csatolja az összehasonlító táblázatot. Ugyanazt a handoffot kapja válaszként, beilleszti egy új chatbe a mondattal: „Folytasd ebből a handoffból.”, és e-mailben elküldi Pavelnek.
## Ha elakad

- **Normál chatben az AI nem ment semmit:** nem tud fájlokat menteni, és ha a chatnek nincs memóriája, a szabályt sem menti. A handoff a válaszban van, és a promptot legközelebb újra be kell illeszteni; hogy az AI maga mentse a handoffot a projekthez, válts [Cowork vagy Code](card:when-chat-is-not-enough) módra.
- **Az új chat kérdez olyan dolgokról, amik már eldőltek:** írd be a kérdéseket az eredeti chatbe, hagyd, hogy az AI kiegészítse a handoffot, majd nyisd meg újra az új chatet.
- **A handoff majdnem olyan hosszú, mint a chat:** kérd meg az AI-t, hogy minden pontot rövidítsen egy-két mondatra, a részleteket hagyja az alapanyagokban, amikre hivatkozik.
- **A chat olyan hosszú, hogy az AI elfelejtette a munka kezdetét:** nyiss új chatet, illeszd be a fő alapanyagokat és a promptot, majd a prompt alá írj pár mondatot arról, hol tart a munka.
## Mi lesz kész

Van egy handoffod, amiből az új chat kérdések nélkül folytatta, és ugyanazt a handoffot elküldheted a kollégának. Cowork vagy Code módban a `handoff.md` a projekt mappájában van, és az `AGENTS.md`-ben egy szabály, amely szerint az AI legközelebb elkészíti a handoffot, ha csak annyit írsz: „handoff”. Normál chatben az AI a memóriában tartja a szabályt; ha nincs memória, legközelebb ugyanazt a promptot illeszted be. A régi, túlzsúfolt chatet bezárhatod.
## Mi következik

Ha az átadott munkához AI-val kapcsolódó következő lépés tartozik, például a kiválasztott ajánlatból szerződés és abból vezetői jelentés készül, és ezt ismétlődően végzed, [mentse el az egész folyamatot skillként](card:create-skill-from-proven-process). A teljes projekt állapotát összegzi a [projekt kezdőoldala](card:project-start-here), amit az AI ír meg ugyanúgy, mint a handoffot.
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
