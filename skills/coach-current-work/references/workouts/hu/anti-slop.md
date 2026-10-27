# Futtassa át a szöveget anti-slop szűrővel: ne hangozzon AI által írottnak

Az AI megtalálja a szövegben azokat a fordulatokat és ígéreteket, amelyek alapján az olvasó felismeri az AI-t, átírja azokat, és a további szövegeket maga is ellenőrzi.

## Futtassa át a szöveget anti-slop szűrővel: ne hangozzon AI által írottnak

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy küldeni kívánt szöveggel.
## Mire jó

Csütörtökön ajánlatot küld a Horáková asszonynak a céges kisbuszok szervizelésére. Az ajánlat bevezetőjét AI írta, és így kezdődik: „megbízható partner a nehéz időkben”, akárcsak a többi négy ajánlat az asztalán. Ráadásul azt is állítja, hogy a javítást 24 órán belül elvégzik, bár ezt senki sem ígérte a cégnél.

Az általános frázisok és megerősítetlen ígéretek eltűnnek, amikor az AI összeveti őket a megkereséssel és az árlistával, és helyettesíti azzal, ami valóban szerepel bennük.
## Mit készítsen elő

- a küldeni kívánt szöveg, amelyet részben vagy egészben AI írt,
- az alapanyagok, amelyekre támaszkodik: megkeresés, árlista vagy beszélgetési jegyzetek,
- az AI, amelyet a munkában használ, vagy AI a [Cowork vagy Code módban](glossary:workmode).
## Hogyan csinálja

1. Illessze be a promptot, és a „Szöveg:” sor alá helyezze a szöveget vagy a fájl nevét a mappában; a chatben csatolja az alapanyagokat. Az AI visszaadja a talált hibákat és az átírt szöveget, a fájlokra vonatkozó részeket a chatben kihagyja.
2. Írja meg az AI-nak, mely javításokat nem szeretné, egészítse ki a helyeket `[KIEGÉSZÍTENDŐ]` jelzéssel, vagy hagyja, hogy kihúzza őket. Az AI befejezi a szöveget, elmenti a fordulatok listáját a szabállyal, és megmondja, hová.
3. Egy új chatben kérje meg az AI-t, hogy írjon más szöveget, például választ az ügyfélnek. A listán szereplő fordulatok ne legyenek benne.

A listára csak azok a fordulatok kerülnek, amelyek más szövegekben is előfordulhatnak.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amelyet a munkában használ:

Ellenőrizd a szöveget a következő üzenet végén, mielőtt elküldeném. Vagy a mappában lévő fájl neve van benne, vagy a teljes szöveg. Találd meg azokat a helyeket, amelyek alapján az olvasó felismerheti, hogy AI írta, és írd át úgy, hogy emberi, a témát ismerő személy írta legyen.

Nézd át a szöveget négy szűrővel:
- Konkrétság: bizonyíték nélküli állítások és jelzők, például „megbízható partner” vagy „jelentős megtakarítás”. Ezeket számokkal, nevekkel, dátumokkal vagy az alapanyagokból vett helyzetekkel helyettesítsd.
- Sémák: elcsépelt fordulatok („a mai rohanó világban”, „lépjünk egy szinttel feljebb”, „ne habozzon kapcsolatba lépni velünk”), ellentétek típusai („nem csak X-ről van szó, hanem Y-ról”), és hatásos, de semmitmondó lezárások.
- Ritmus: három vagy több egyforma hosszúságú mondat egymás után, rövid mondatok láncolata, automatikus háromszavas felsorolások.
- Formátum: hosszú kötőjelek, emoji pontok helyett, és Markdown csillagok a szövegben, ahol nem lesz belőlük félkövér, például e-mailben.
A végén kérdezd meg az egész szövegről: kitehetnék-e bármely cég weboldalára? Ha igen, írd át konkrétabbra.

Ne találj ki számokat, határidőket, neveket vagy ígéreteket. Hasonlítsd össze az alapanyagokkal a mappában vagy a chatben. Amit nem találsz meg, jelöld `[KIEGÉSZÍTENDŐ]`-tel, és kérdezd meg tőlem.

Először add vissza a talált hibákat: a szövegből idézet, a sértett szűrő, és a jobb verzió. Alatta add meg az egész átírt szöveget. Megmondom, mely javításokat nem kérem, és kiegészítem, ami hiányzik. A kész szöveget mentsd el egy új fájlba az eredeti mellé, és írd meg a nevét. Ha a szöveget a chatbe illesztettem, add vissza teljes egészében.

Ezután ments el legfeljebb öt olyan fordulatot a talált hibákból, amelyek valószínűleg más szövegekben is előfordulnak, az `anti-slop.md` fájlba abban a mappában, ahol dolgozol. Minden fordulathoz írd le, mivel kell helyettesíteni, és a lista alá röviden a négy szűrőt. Ha a fájl már létezik, csak az új fordulatokat írd hozzá. Az `AGENTS.md` fájlba ugyanabban a mappában írd be a szabályt: „Mielőtt megmutatod nekem a szöveget, amely az én nevemben fog kimenni, ellenőrizd az anti-slop.md szerint.” Ha az `AGENTS.md` nem létezik, hozd létre. Gondoskodj róla, hogy ezt az eszközben minden munka elején el tudd olvasni; Coworkban írd be a mappa utasításaiba. Ha sima chatben dolgozol mappa nélkül, ne hozz létre fájlokat, és a fordulatok listáját a szabállyal mentsd el a memóriádba: „Mielőtt megmutatod nekem a szöveget, amely az én nevemben fog kimenni, ellenőrizd ezt a listát.” Végül írd meg, hová mentetted a listát és a szabályt.

Szöveg:

## Az eszközödben

### Microsoft Copilot
Illeszd be a szöveget a Copilot Chatbe, és csatold az alapanyagokat a + gombbal az üzenetmező mellett.
A Copilot megerősíti a memória mentését a „Memory updated” üzenettel; áttekintés a beállításokban a Chat settings › Personalization › Saved memories alatt található. Memória nélkül írd be: „Írd ki a listát szövegként”, és illeszd be a Custom instructions-be ugyanott. A Copilot skilljei a Cowork módban vannak (Customize › Skills), ha a cég engedélyezte.

### ChatGPT
Sima chatben a ChatGPT elmenti a listát a memóriába (beállítások, Personalization › Memory); memória nélkül illeszd be a Custom Instructions-be ugyanott. Mappával a Codex dolgozik a ChatGPT asztali alkalmazásban: válaszd a mappa megnyitását (open a folder), és az `anti-slop.md` fájlt, valamint a szabályt az `AGENTS.md`-ben automatikusan elmenti. A ChatGPT skilljei a Business, Enterprise és Edu tarifákban érhetők el.

### Claude
Sima chatben Claude elmenti a listát és a szabályt a memóriába. Coworkban kiválasztod a szöveges mappát a feladat megadásakor, és az AI beírja az `AGENTS.md` hivatkozását a mappa utasításaiba; Claude Code önállóan olvassa az `AGENTS.md`-t. Claude skilljei elérhetők chatben, Coworkban és Claude Code-ban.

### Gemini
A lista állandó helye a Gemini Gem, mert a munkahelyi fióknak nincs memóriája.
A végén írd be: „Csak a fordulatok listáját írd ki a szabállyal”, és mentsd el a Share & export › Export to Docs segítségével. Ezután Gems › New Gem: az utasításokba írd: „Ellenőrizd minden szöveget a mellékelt dokumentumban lévő lista szerint”, a dokumentumot a Knowledge › Add from Drive segítségével csatold. A 3. lépést és a további szövegeket ebben a Gemben végezd.
## Mi az az anti-slop

Az anti-slop egy ellenőrzés, amely során az AI megtalálja a szövegben az AI-ra jellemző mondatokat, és átírja őket konkrét mondatokra az alapanyagaiból. A slop angol szó, jelentése „szemét”; az interneten így nevezik azokat a szövegeket, amelyeket az AI gondatlanul készít, és amelyek bármely cég weboldalán megjelenhetnének. Az AI nem talál ki számokat és határidőket; amit nem talál meg az alapanyagokban, azt jelöli és megkérdezi.

Az ellenőrzés négy szűrőn alapul a promptból. A konkrétság azokat a mondatokat figyeli, amelyek bármely cégről írhatók, és számokkal, nevekkel, helyzetekkel helyettesíti az alapanyagokból. A sémák azok a frázisok, amelyeket az AI folyton ismétel, például a nehéz időkről szóló bevezető vagy a „lépj kapcsolatba velünk” zárás. A ritmus elárulja az AI-t, ha több egyforma hosszúságú mondatot ír egymás után, vagy mindig hármasával sorol fel, például „gyorsan, olcsón és megbízhatóan”. A formátum figyeli a hosszú kötőjelet, amelyet az emberek ritkán írnak a billentyűzeten, és az emoji használatát pontok helyett.

Az `anti-slop.md` egy egyszerű szöveges fájl a szöveget tartalmazó mappában. Tartalmazza az elkerülendő fordulatok listáját és azok helyettesítését. A `.md` kiterjesztés a [Markdown](glossary:markdown) formátumot jelzi. Az `AGENTS.md` egy szabályokat tartalmazó fájl ugyanabban a mappában. Az AI Cowork vagy Code módban minden munka elején elolvassa, így nem kell újra megadni az ellenőrzést; ahol az eszköz ezt be kell állítsa, az AI a prompt szerint intézi. Sima chatben az AI elmenti a listát és a szabályt a memóriába; ahol az eszköznek nincs memóriája, a „Az eszközödben” blokkban található megoldás.
## Automatikus ellenőrzés

A fordulatok listájából készítsen [skillt](glossary:skill), azaz elmentett útmutatót, és az ellenőrzés minden projektjében fusson, ne csak az `AGENTS.md`-t tartalmazó mappában. Az AI minden alkalommal megnyitja, amikor az Ön nevében ír szöveget embereknek. Hol vannak skilljei az eszközének, azt az „Az eszközödben” blokk mutatja. Ha csak sima chatben dolgozik, és az AI memóriájában van a lista, ez a lépés nem szükséges. Az `anti-slop.md`-t tartalmazó mappában elegendő beírni:

```text
Készíts skillt anti-slop néven az anti-slop.md fájlban lévő fordulatok listájából; ha nem látod a fájlt, használd a memóriádban lévő listát. A skill minden alkalommal fusson, amikor az én nevemben írsz vagy szerkesztesz szöveget, amely kimenő e-mail, ajánlat, bejegyzés vagy webszöveg. A skill a négy szűrőn átmegy a fájlból, javítja a listán szereplő fordulatokat, és nem talál ki számokat vagy ígéreteket. Ha mondok egy új elkerülendő fordulatot, írd be a skillbe. Mentsd el úgy, hogy minden projektemben működjön; ha nekem kell mentenem vagy bekapcsolnom, pontosan mondd meg, hová kell kattintani.
```
## Példa

Martin Dvořák a céges autószervizből 2026. október 15-én ajánlatot küld Horáková asszonynak egy logisztikai cégtől. A megkeresés szerint a cégnek 38 kisbusza van Brnóban és Olomoucban, és a javításra most akár egy hetet is várnak. Az ajánlat bevezetőjét AI írta:

```text
A mai rohanó világban a megbízható partner a flottakezelésben kulcsfontosságú. Komplett szervizt, gyors reakciót és egyéni hozzáállást kínálunk. A javítást 24 órán belül elvégezzük. Ne habozzon kapcsolatba lépni velünk.
```

Az AI négy hibát talál. Az első mondatot a megkeresésből vett helyzetre cseréli: „Írja, hogy az egyik 38 kisbusz javítására most akár egy hetet is várnak.” A második mondat helyett az árlista alapján felsorolja, mit tartalmaz a szerviz: rendszeres ellenőrzések és csereautó a javítás idejére. A 24 órás javítást `[KIEGÉSZÍTENDŐ]`-tel jelöli, mert nincs az alapanyagok között. A zárást egy konkrét következő lépésre változtatja: „Írja meg, melyik kisbuszt vizsgáljuk meg először.”

Martin a műhely mesternél ellenőrzi, hogy a szokásos javítást két munkanapon belül elvégzik. Az AI ezt beilleszti a szövegbe, és az `anti-slop.md`-be ezt írja:

```text
### Elkerülendő fordulatok
- „a mai rohanó világban”: kezdje az ügyfél helyzetével a megkeresésből
- „komplett szerviz”: sorolja fel, mit tartalmaz a szerviz
- „ne habozzon kapcsolatba lépni velünk”: írjon egy konkrét következő lépést
```

2026. október 19-én hétfőn Martin ugyanabban a mappában AI segítségével válaszol egy másik ügyfélnek. A válasz egy kérdéssel zárul, hogy melyik nap alkalmas az első ellenőrzésre, és a listán szereplő fordulatok nem szerepelnek benne.
## Ha elakad

- **Az AI csak néhány szót javít, és a szöveg még mindig ugyanúgy hangzik:** kérje meg, hogy írja át az egész bekezdést, kezdje az olvasó helyzetével, és csatolja az alapanyagot, például a megkeresést vagy a beszélgetési jegyzeteket.
- **Sok `[KIEGÉSZÍTENDŐ]` van a szövegben:** az AI nem talál számokat. Csatolja az árlistát, szerződést vagy megkeresést. Azokat az állításokat, amelyeket nem tud megerősíteni, hagyja, hogy az AI törölje a szövegből.
- **Az AI azt állítja, hogy elmentette az `anti-slop.md`-t, de a mappában nincs:** valószínűleg sima chatben dolgozik, amely nem tud fájlokat módosítani. Váltson [Cowork vagy Code módra](card:when-chat-is-not-enough), vagy kérje meg az AI-t, hogy mentse el a listát a memóriába.
- **Az új chatben az AI újra írja a listán szereplő fordulatokat:** Cowork vagy Code módban nyissa meg ugyanazt a mappát tartalmazó chatet, és kérje meg az AI-t, hogy olvassa be az `AGENTS.md`-t, és gondoskodjon róla, hogy ezt az eszköz minden munka elején elolvassa. Sima chatben térjen vissza ahhoz a chathez, ahol az ellenőrzés megtörtént, és kérje meg az AI-t, hogy mentse el a fordulatok listáját a szabállyal a memóriába. A memória beállításának aktívnak kell lennie.
## Mi lesz kész

Van egy szövege, amelyet elküldhet: nincs benne az AI-ra jellemző fordulat, és a számok, ígéretek megerősítettek. A mappában ott van az `anti-slop.md` az elkerülendő fordulatok listájával, és az `AGENTS.md` a szabállyal, amely alapján az AI minden további szöveget önállóan ellenőriz; sima chatben az AI a memóriában vagy az eszköz saját utasításaiban tárolja a listát és a szabályt. Egy új chatben ellenőrizte, hogy az AI valóban használja a szabályt.
## Mi következik

A tényeket, számokat és forrásokat a jelentésben vagy prezentációban a [Ellenőrizze az AI kimenetet](card:kontrola-vysledku) kártyával ellenőrizze. Ha az AI-t közvetlenül az Ön stílusában szeretné írni, mentse el a [saját Custom Instructions](card:custom-instructions) között.
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
