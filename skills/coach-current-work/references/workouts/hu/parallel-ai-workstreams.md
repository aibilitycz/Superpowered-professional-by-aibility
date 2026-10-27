# Ossza fel a munkát párhuzamos szálakra: az AI egyszerre végzi az összes részt

Nagyobb munkája gyorsabban készül el, mert az AI darabokra bontja, és mindegyiket egyszerre indítja saját szálában.

## Ossza fel a munkát párhuzamos szálakra: az AI egyszerre végzi az összes részt

**Nehézség: közepes.**\
**Idő: kb. 15 perc** nagyobb munkával, a szálak utána maguktól futnak.
## Mire jó

Csütörtökön vezetőségnek mutat be negyedéves összefoglalót: exportált számok, ügyfélpanaszok és versenytársak újdonságai. Egy AI egymás után dolgozná fel a részeket, pedig egyik sem vár a másikra, így egyszerre is futhatnak.

Segítenek a [párhuzamos szálak](glossary:parallel-ai-workstreams): minden rész saját szálat kap, azaz külön chatet a saját feladatával, és mind egyszerre fut. Az első szál, a koordinátor, összehasonlítja az eredményeket és előkészíti a döntési pontokat.
## Mit készítsen elő

- egy nagyobb munkát, amely legalább két egymást nem váró részből áll,
- az anyagokat egy mappában,
- AI-t Cowork vagy Code módban; hol találja, mutatja a „Az eszközében” blokk.
## Hogyan csinálja

1. Kérje meg az AI-t, hogy ossza fel a munkát egymást nem váró részekre. Nyissa meg az AI-t az anyagokat tartalmazó mappában, illessze be a promptot és írja le a szükséges feladatot. Erősítse meg a felosztást.
2. Indítsa el egyszerre az összes szálat. Az AI vagy magától indítja, vagy minden részhez ír egy mondatot; ezt illessze be új szálba ugyanabban a mappában. Ha a szál kérdez, válaszoljon neki.
3. Döntse el az összehasonlítás nyitott pontjait. Amikor a szálak befejeződnek, írja be az első szálba, hogy „kész”. Az AI megmutatja az ellentmondásokat, és az Ön döntése után összevonja az eredményeket.

Minden szál csak a saját mappájába ír.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) AI-ba Cowork vagy Code módban, a megnyitott mappájában, és az utolsó sor után írja le, mit kell tenni:

Segíts nekem gyorsabban elvégezni egy nagyobb munkát: oszd fel olyan részekre, amelyek egyszerre futnak, mindegyik saját szálban. Te leszel a koordinátor. A munka az utolsó sorban van.

Nézd át az anyagokat a mappában, és javasolj két-három-négy-öt részt. Mindenhez egy mondatban írd le, miért fejezhető be anélkül, hogy ismerné a többi eredményét. Amit egy másik részhez kötöttél, hagyd egy részben, vagy tedd a végére az összevonáshoz. Mutasd meg a felosztást, és várd meg a megerősítést vagy javítást.

Minden megerősített részhez hozz létre mappát vlakna/01-nev, vlakna/02-nev és így tovább, benne a zadani.md fájlt. A feladat tartalmazza: a rész célját, mely anyagokra épül, két-három feltételt, amiből látom, hogy kész van, és az utasítást: „Csak ebbe a mappába írj, mást ne módosíts. A végén ide mentsd az vysledek.md-t: mi készült el, mi nem stimmel és mire kérdezel rá.” A vlakna/srovnani.md-be írd a részek listáját és állapotát.

Az AGENTS.md fájlba a mappában mentsd el a szabályt: „Ha olyan munkát kapsz, amely legalább két egymást nem váró részből áll, javasolj párhuzamos szálakra bontást. Minden szálnak saját feladata és mappája van; egy mappába soha nem ír két szál. Ha részeket podagentként indítasz, egyszerre legfeljebb tízet indíts, és a következő adag előtt írj rövid állapotot, mi érkezett vissza. A végén hasonlítsd össze az eredményeket egymás mellett, és a nyitott pontokat add nekem döntésre.” Ha nincs AGENTS.md, hozd létre. Ha az eszköz nem olvassa automatikusan, állítsd be, hogy minden munka elején beolvassa; Coworkban írd be a mappa utasításaiba. Ha nincs hozzáférésed a mappához, jegyezd meg a szabályt; ha nem tudod, mondd meg pontosan, hova kell tenni.

Ezután indítsd el egyszerre a részeket külön szálakként, amelyeket látok és írhatok is bele. Ha tudsz szálat indítani vagy ajánlani magadtól, tedd meg. Ha nem, írj minden részhez egy mondatot, amit új szálba illesztek ugyanabban a mappában, például: „Készítsd el a feladatot a vlakna/01-cisla/zadani.md fájlból.” Ha nem tudsz mappával dolgozni, írd meg nekem a teljes feladatot, és az eredményeket visszaillesztem.

Amikor beírom, hogy „kész”, olvasd el egymás mellett az összes vysledek.md fájlt és az eredményeket, vagy azokat, amelyeket beillesztek. A vlakna/srovnani.md-be írd minden részhez, teljesítette-e a feltételeket, hol vannak ellentmondások vagy hiányok, és a nyitott pontokat, amelyeket én döntök el. Az ellentmondásokat ne egyeztesd kompromisszummal, mutasd mindkét oldalt. Az én döntésem után egyesítsd az eredményeket egyetlen, általam kért formátumba (például Word vagy prezentáció), és mentsd el a mappába; ha nem mondom meg a formátumot, kérdezd meg.

Munka:

## Az eszközében

### Microsoft Copilot
A Copilot Coworkot a `copilot.cloud.microsoft` oldalon a kapcsolóval kapcsolhatja be a Chat mellett fent, és az anyagokat a + gombbal csatolhatja. Az új feladat nem látja, mit írt más, ezért a saját feladatához írja hozzá: „Írd meg nekem a teljes feladatot.” Mindent új feladatként csatoljon az anyagokkal, amelyeket elnevez; az eredményeket „kész” jelzéssel az első feladathoz illessze vissza, amelyet a Tasks alatt újra megnyit. A szabályt skillként, azaz elmentett útmutatóként tárolja.

### ChatGPT
A ChatGPT asztali alkalmazásban váltsa át Codex módra, és válassza a mappa megnyitását (open a folder); ha nem látja a Codexet, kérje az adminisztrátort, hogy kapcsolja be. Minden szálat új chatként indítson ugyanabban a projektben, azaz megnyitott mappában; a chat-eket a Chats alatt találja, és a futóba írhat. Kód esetén válassza az üzenetmező alatt a Worktree-t.

### Claude
A Claude asztali alkalmazásban minden részt indítson új feladatként Coworkban, vagy új munkamenetként Claude Code-ban (New session); a Claude Code magától is felajánlja az új munkameneteket, csak kattintson. Egymás mellett futnak az oldalsávban, és mindegyik szálba írhat. Kód esetén a munkamenet indításakor válassza a worktree-t, hogy saját repozitórium-kópiája legyen.

### Gemini
A Gemini nem dolgozik mappával a számítógépen, és az önállóan végző ügynök csak személyes EU-n kívüli fiókokhoz elérhető. Ezért a szálak feladatait válaszban írja meg: mindegyiket új chatbe illessze, az anyagokat Add from Drive-val csatolja, és a kész eredményeket az első chatbe tegye vissza összehasonlításra. Ha gyakran csinálja, kérjen IT-től Code módú eszközt.
## Mik azok a párhuzamos szálak

A szál egy külön chat vagy feladat saját feladattal, amelyet az eszköz oldalsávjában lát, és bármikor írhat bele. A párhuzamos szálak egyszerre futnak, mindegyik egy munkarészen. Az első szál, amelyben a munkát adta, a koordinátor: felosztja, megírja a feladatokat, és a végén összehasonlítja az eredményeket.

A felosztás csak akkor működik, ha a részek nem várnak egymásra. Mielőtt elindít egy részt, kérdezze meg: befejezi-e a szál a részt akkor is, ha nem ismeri a többi eredményét? Ha nem, az a részhez tartozik, amelytől függ. A másik szabály: egy mappába csak egy író; két szál, amely ugyanazt a fájlt módosítja, felülírja egymás munkáját, ezért mindegyiknek saját mappája van. A szálak feladatai és eredményei `.md` szövegfájlok, amelyeket főként az AI olvas; a kész eredményt az Ön által kért formátumban menti.

Nagy munkánál sok résszel a koordinátor maga is indíthatja a részeket [podagentként](glossary:subagent), azaz háttérsegédekként, amelyek eredményeit átveszi és a kérdéseket Önnek továbbítja. A szabály, amelyet a prompt az `AGENTS.md` fájlba ment, az AI szabályait tartalmazza a mappában, tízes limitet ad egyszerre, és a következő adag előtt rövid állapotot kér, hogy tudja, mi érkezett vissza.
## Példa

Jana egy bútor webáruház ügyfélszolgálati vezetője. 2026. október 13-án, kedden reggel feladatot kap, hogy csütörtöki vezetőségi értekezletre készítsen összefoglalót a harmadik negyedévről. A Q3 Összefoglaló mappában 2300 jegy exportja van panaszszövegekkel és három versenytárs weboldalainak linkjeivel. Beilleszti a promptot, és az utolsó sorba beírja:

```text
Ügyfélszolgálati összefoglaló Q3-ra a csütörtöki vezetőségi értekezletre: jegyek exportált számai, az öt leggyakoribb panasz a jegyekből, és mit változtattak a három versenytárs a negyedév alatt.
```

Az AI három részt javasol (számok, panaszok, versenytársak), mindegyikhez megindokolja, miért nem vár a többire. Jana megerősíti a felosztást, és egyszerre indítja a három szálat. A panaszokat feldolgozó szál 10 perc múlva megkérdezi, számolja-e a sérült áru reklamációját külön panaszként. Jana válaszol: „igen, külön”, és 40 perc múlva mindhárom kész.

A koordinátor az összehasonlításban egy ellentmondást talál: a számok szerint a válaszidő 14-ről 6 órára csökkent, de a második leggyakoribb panasz a lassú válasz. A panaszok többsége júliusi, amikor a változás még nem volt érvényben. Jana úgy dönt, hogy hónapokra bontva mutatja a válaszidőt és a panaszokat, és az AI összefűzi a részeket egy Word dokumentumba `prehled-q3.docx` néven.
Az összefoglaló kedd délelőttre kész, és Janának szerdája van az értekezlet előkészítésére.
## Ha elakad

- **A rész vár egy másik eredményére:** írja az első szálba, hogy vonja össze a függő résszel, vagy tegye a végére az összevonáshoz.
- **Két szál módosította ugyanazt a fájlt:** hiányzik a saját mappa a feladatból. Kérje az első szálat, hogy javítsa a feladatot, és indítsa újra a részt.
- **Az AI azt állítja, nem látja a mappában lévő fájlokat:** normál chatben dolgozik. Váltson [Cowork vagy Code módra](card:when-chat-is-not-enough) az „Az eszközében” blokk szerint.
- **Az eredmények ellentmondanak:** hagyja meg az ellentmondást az összehasonlításban, és döntse el maga. Ha az egész eredményt át akarja nézni, segít a [AI kimenet ellenőrzése](card:kontrola-vysledku).
## Mi lesz kész

Kész van egy nagyobb munka, amelynek részei egyszerre futottak, mindegyik saját szálban és mappában, és van összehasonlítás ellentmondásokkal és az Ön döntéseivel. Az `AGENTS.md` fájlban, vagy a mappa utasításaiban vagy az AI memóriájában ott a szabály, amely alapján az AI legközelebb önállóan osztja fel hasonló munkát.
## Mi következik

Ha beválik a felosztás és a munka ismétlődik, például negyedévente, mentse el [skillként](card:create-skill-from-proven-process).
## Párhuzamos szálak

**Mi ez:** Egy projekt két vagy több része, amelyek külön feladatot kapnak, és párhuzamosan, külön AI szálakon vagy eszközökön dolgozhatnak. Eredményeiket végül irányított módon egyesítik.

**Mi nem ez:** Nem több szerep, amelyek ugyanazt a döntést kommentálják, és nem olyan lépéssorozat, ahol a második az első eredményére vár.

**Miért van rá szüksége a tanulónak:** Segít felismerni, mikor növeli valóban a kapacitást a párhuzamos munka, és mikor csak bonyolultabb koordinációt eredményez.

## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Alügynök

**Mi ez:** Egy önálló ügynök, akit a koordináló ügynök hoz létre egy adott részfeladat elvégzésére. Saját feladatleírást és kontextust kap, külön dolgozik, majd az eredményt visszaküldi a koordinátornak.

**Mi nem ez:** Nem egyszerűen egy beszélgetés elágazása. A fork új ágat hoz létre egy ember számára; az alügynököt a koordinátor maga indíthatja el, irányíthatja, és bevonhatja a közös eredménybe.

**Miért van rá szüksége a hallgatónak:** Segít megkülönböztetni a manuális, párhuzamos munkát több csevegésben attól az ügynöki felállástól, ahol a részfeladatok delegálását és nyomon követését a koordinátor végzi.

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
