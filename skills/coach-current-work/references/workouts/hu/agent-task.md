# Adja meg a feladatot az ügynöknek: az AI önállóan végrehajtja

Az AI önállóan végrehajt egy soklépéses, hosszú feladatot, akár éjszaka is, és Ön bizonyítékok alapján veszi át az eredményt.

## Adja meg a feladatot az ügynöknek: az AI önállóan végrehajtja

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy feladathoz tartozó anyagok mappájával.
## Mire jó ez

Péntekig a pénzügyi igazgatónak át kell adni egy összefoglalót arról, hogy a hatvan
beszállítói szerződés közül melyek hosszabbodnak meg automatikusan januárban. Minden
szerződéshez kell a felmondási határidő is. Minden szerződés megnyitása, a tartamra és
felmondásra vonatkozó cikk megtalálása, majd az adatok táblázatba írása két délutánnyi
precíz munkát jelent.

Az [Agent](glossary:agent) egy AI, amely önállóan végrehajt ilyen feladatokat, akár éjszaka is,
és folytatja, amíg teljesülnek az elején meghatározott feltételek, például „minden 60 szerződés
sorban szerepel a táblázatban”.
## Mit készítsen elő

- egy soklépéses feladatot, amelynél nem akar folyamatosan jelen lenni, például szerződésellenőrzés
  vagy kutatás,
- az ehhez tartozó anyagokat egy mappában,
- AI-t Cowork vagy Code módban; hol találja, azt a „Az eszközében” blokk mutatja.
## Hogyan csinálja

1. Nyissa meg az AI-t Cowork vagy Code módban az anyagok mappájában, illessze be a promptot,
   és az „Feladat:” sor után írja le, mit kell az ügynöknek elvégeznie. Az AI javasolni fogja a
   befejezési feltételeket; javítsa ki őket, majd írja be: „Igen, dolgozz”.
2. Ha az AI megkérdezi, hogy módosíthatja-e a fájlokat, engedélyezze az egész feladatra,
   hogy éjszaka ne álljon le. Az ügynök ezután önállóan dolgozik, és a végén átadási jelentést ír.
3. Az átadási jelentésben megtalálja az eredményt. Minden feltételhez nyissa meg a bizonyítékot,
   és hasonlítsa össze egy-két adattal az eredeti forrással; ami nem stimmel, küldje vissza az
   ügynöknek a feltétellel együtt.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban, amely a saját
mappájában van megnyitva, és az utolsó sor után írja be a saját feladatát:

Végezze el helyettem a soklépéses feladatot, és dolgozzon rajta önállóan, amíg kész nem lesz. A feladat az utolsó sorban van.

Először nézze át az anyagokat a mappában vagy a mellékletekben, és javasoljon három-öt befejezési feltételt,
amely alapján meg tudom állapítani, hogy kész van. Minden feltétel egy pillantással ellenőrizhető legyen:
szám, fájl, rekord vagy szám, amelyet összehasonlítok a forrással. Mutassa meg nekem, és várja meg, amíg
jóváhagyom vagy kijavítom őket.

Amint jóváhagyom a feltételeket, adja hozzá az AGENTS.md fájlhoz a mappában a következő szabályt:
„Minden hosszabb feladatnál először javasolj három-öt ellenőrizhető befejezési feltételt, és várd meg a jóváhagyásomat.
Dolgozz, amíg mind teljesül, és a végén mindenhez csatolj bizonyítékot.” Ha az AGENTS.md nem létezik, hozd létre.
Ha az eszköz nem olvassa automatikusan, állítsd be, hogy minden munka elején beolvassa; Cowork módban ezt írd be a mappa
utasításaiba. Ha nincs hozzáférésed a mappához, mentsd el a szabályt memóriába; ha nem tudod, mondd meg pontosan, hová kell
beilleszteni.

Ezután dolgozz önállóan. Minden nagyobb lépés után ellenőrizd a feltételeket, és folytasd, amíg mind teljesül.
A részleteket döntsd el magad. Ha olyan döntéshez érsz, amely az enyém, válassz óvatosabb lehetőséget,
jelöld meg, és folytasd; a kérdést írd meg az átadási jelentésbe. Csak akkor állj meg, ha a további munkához a válaszom
szükséges. Ha valamelyik feltétel nem teljesíthető, írd meg, miért és mit javasolsz.

Amikor befejezted, írj átadási jelentést. Minden feltételhez írd le, teljesült-e, és a bizonyítékot, amellyel ellenőrizni tudom:
fájl elérési út vagy link, szám és oldal, ahonnan származik, módosított rekord vagy képernyőkép. A feltételek alatt írd le,
mit döntöttél el magadtól, mire kérdezel rá, és miben nem vagy biztos.

Feladat:

## Az eszközében

### Microsoft Copilot
A Copilot Cowork-ot a `copilot.cloud.microsoft` oldalon kapcsolhatja be a Chat melletti kapcsolóval.
Az anyagokat a + gombbal csatolhatja OneDrive-ról vagy SharePointról, fájlokat a számítógépről áthúzhatja.
Felhőben működik, így a laptopot bezárhatja; a kész fájlokat a jobb oldali panelen találja, a szabályt skillként menti.
A `/goal` parancs nincs meg a Copilotban, a feltételeket az „Igen, dolgozz” mondattal erősítheti meg.

### ChatGPT
A legegyszerűbb a Work mód: ezt a weben és a ChatGPT asztali alkalmazásban a tetején lévő kapcsolóval kapcsolhatja be,
az anyagokat feltöltheti, és a weben indított feladat fut tovább, még ha a laptopot be is csukja.
Az eredményt az átadási jelentésben találja a chatben. Ha az anyagok egy mappában vannak a számítógépen,
használja a Codexet a ChatGPT asztali alkalmazásban, ahol a feltételeket a `/goal` paranccsal erősítheti meg.

### Claude
A Claude asztali alkalmazásban nyissa meg a Cowork vagy Claude Code módot az anyagok mappájával.
A feladat fut, amíg a számítógép be van kapcsolva és az alkalmazás nyitva van.
Claude Code-ban a feltételeket a `/goal` paranccsal erősítheti meg, és az alkalmazás értesítést küld, amikor a feladat véget ér.

### Gemini
A Gemini Agent, amely önállóan végrehajt hosszú feladatokat, csak személyes Google AI Pro vagy Ultra fiókokhoz érhető el,
és az EU-ban nem elérhető. Céges fiókkal a Gemini alkalmazásban részletekben adja meg a feladatot:
Add from Drive segítségével csatoljon legfeljebb 10 fájlt, illessze be a promptot, továbbiakat tízesével adjon hozzá,
és hagyja, hogy a táblázat kiegészüljön. A kész táblázatot az Export to Sheets gombbal mentse,
és a szabályt skillként: írja be, hogy „Mentés skillként”.
## Mi az az ügynök

Az ügynök egy AI, amely önállóan végrehajtja a lépéseket az Ön helyett: megnyit fájlokat és alkalmazásokat,
a kapott eredmény alapján választja a következő lépést, és folytatja, amíg eléri a célt.
Cowork vagy Code módban az AI így dolgozik, amikor feladatot ad neki.

A befejezési feltételek a célok, amelyekhez az ügynök dolgozik: amíg nem teljesül mindegyik,
folytatja, és Ön ezek alapján veszi át az eredményt a végén. Minden feltételhez bizonyítékot mutat,
így az átvétel pár percet vesz igénybe. Nagyobb munkánál akár húsz feltétel is lehet, az első feladathoz
három-öt elegendő. Jó feltétel egy pillantással ellenőrizhető: szám, fájl, rekord vagy szám,
amely összehasonlítható a forrással. Az olyan szavakat, mint „áttekinthető” vagy „minőségi”, az ügynök nem tudja
teljesíteni vagy bizonyítani, ezért írja át olyasmire, amit meg lehet számolni vagy meg lehet nyitni.

Az `AGENTS.md` egy egyszerű szöveges fájl a mappában, amely az AI szabályait tartalmazza; a `.md` kiterjesztés
Markdown formátumot jelent [Markdown](glossary:markdown), egy egyszerű jelölőnyelv, amelyet bármely szerkesztővel megnyithat.
Az AI minden munka elején beolvassa ezt a fájlt, így legközelebb csak a feladatot kell megadnia, és az AI maga javasolja a feltételeket.
Ha az eszköz nem fér hozzá a mappához, a szabályt memóriába menti, vagy megmondja, hová kell beilleszteni.
## Hagyja dolgozni az ügynököt, amíg kész nem lesz

Hosszabb, egész délutános vagy éjszakai feladatnál jól jön egy biztosíték, hogy az ügynök ne álljon le
mielőtt minden feltétel teljesülne. Egyes eszközök rendelkeznek `/goal` paranccsal, amelyet az üzenet elejére ír;
azokat a „Az eszközében” blokk mutatja. Az „Igen, dolgozz” helyett írja be a `/goal` parancsot,
majd másolja be az AI által javasolt feltételeket. Az ügynök azonnal elkezd dolgozni, minden lépés után ellenőrzi a feltételeket,
és amíg mind teljesül, önállóan folytatja:

```text
/goal A szerződések-prodlouzeni.xlsx táblázatban minden egyes 60 szerződéshez van egy sor a Szerződések mappában.
Minden szerződéshez tartozik lejárati dátum, felmondási idő, a cikk száma, ahonnan származik, és éves nettó ár.
Felül azok a szerződések vannak, amelyeket november végéig fel kell mondani.
```
## Példa

Petra a pénzügyi igazgató asszisztense egy építőipari cégnél. 2026. október 8-án, csütörtök délután
feladatot kap tőle: péntekig összefoglalót kell készítenie arról, hogy a 60 beszállítói szerződés közül
melyek hosszabbodnak meg automatikusan januárban. Petra megnyitja a Szerződések mappát az AI-ban Cowork módban,
beilleszti a promptot, és az utolsó sor után beírja:

```text
Nézd át a Szerződések mappában lévő 60 szerződést, és derítsd ki, melyek hosszabbodnak meg automatikusan januárban,
és meddig lehet őket felmondani.
```

Az AI négy feltételt javasol. Petra hozzáad egy ötödiket az éves árra vonatkozóan, hogy az igazgató lássa a pénzügyi
hatást, majd válaszol: „Igen, dolgozz”:

```text
1. A szerződések-prodlouzeni.xlsx táblázatban minden egyes 60 szerződéshez van egy sor a Szerződések mappában.
2. Minden szerződéshez tartozik lejárati dátum, felmondási idő és a cikk száma, ahonnan származik.
3. Minden szerződésnél jelölve van, hogy automatikusan hosszabbodik-e.
4. Felül vannak a november végéig felmondandó szerződések, határidő szerint rendezve.
5. Minden szerződéshez tartozik éves nettó ár.
```

Petra bekapcsolva hagyja a számítógépet, és hazamegy. Péntek reggel a chatben megtalálja az átadási jelentést:
60 szerződés és 60 sor a táblázatban, tizenegy szerződés automatikusan hosszabbodik januárban,
és négyet november 30-ig fel kell mondani. Két szerződés szkennelt volt, és az ügynök ellenőrzésre jelölte az adatokat.
Petra megnyit három adatot az eredeti szerződésekben, mind stimmel, egy szkennelt szerződésnél javítja a lejárati dátumot,
majd a táblázatot elküldi az igazgatónak. A következő hosszabb feladatot már csak egy mondattal adja meg,
mert az AI a szabály alapján maga javasolja a feltételeket az `AGENTS.md` fájlban.
## Ha elakad

- **Az AI egy válasz után leáll, vagy azt állítja, nem tud fájlokat megnyitni:**
  valószínűleg normál chatben dolgozik. Váltson át a [Cowork vagy Code](card:when-chat-is-not-enough) módra a „Az eszközében” blokk szerint.
- **Az ügynök korábban leáll, mint hogy minden feltétel teljesülne:** írja meg neki, melyiket nem teljesítette, és kérje,
  hogy folytassa. Ha az eszköze támogatja, legközelebb erősítse meg a feltételeket a `/goal` paranccsal, ahogy a „Hagyja dolgozni az ügynököt, amíg kész nem lesz” blokk írja.
- **Reggel félbehagyott feladatot talál:** valószínűleg a számítógép alvó módba ment, vagy az ügynök a fájlok módosítására vár engedélyre.
  Írja meg neki, hogy folytassa, és legközelebb engedélyezze a módosításokat az egész feladatra, és hagyja a számítógépet áram alatt.
- **A bizonyíték nem egyezik a forrással:** írja meg az ügynöknek, melyik feltételnél és mi nem stimmel,
  kérje a javítást és az új bizonyítékot. Ha az egész eredményt át szeretné nézni, segítséget nyújt a [AI kimenet ellenőrzése](card:kontrola-vysledku).
## Mi lesz kész

Kész van egy hosszú feladat, amelynél nem kellett folyamatosan jelen lennie, és bizonyítékok alapján átvette
minden befejezési feltételt. Az `AGENTS.md` fájlban vagy az AI memóriájában szabály van, amely szerint az AI a következő
hosszabb feladatnál maga javasolja a feltételeket, dolgozik, amíg mind teljesül, és a végén bizonyítja azokat.
## Mi következik

Ha ugyanaz a feladat hetente ismétlődik, állítsa be [ütemezett feladatként](card:recurring-ai-task).

Ha nagyobb munkát részekre lehet bontani, amelyek nem várnak egymásra, indítsa el őket egyszerre
[paralel szálakon](card:parallel-ai-workstreams).
## Ügynök

**Mi az:** Olyan AI rendszer, amely adott cél elérése érdekében több lépést tervezhet, használhatja a rendelkezésre álló eszközöket, kezelheti az állapotot, és végrehajthatja az engedélyezett műveleteket. A képességek köre és az önállóság mértéke az adott eszköztől és jogosultságoktól függ.

**Mi nem:** Nem csupán egy eltárolt prompt vagy egy átnevezett asszisztens fejlettebb funkciónak.

**Miért van rá szüksége a tanulónak:** Segít felismerni azokat a feladatokat, amelyek eszközöket, jogosultságokat, ellenőrzési pontokat és egyértelmű felelősséget igényelnek a műveletekért.

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
