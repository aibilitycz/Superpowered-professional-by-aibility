# Hozzon létre PACT-ot: AI munkatér

Az AI az összes folyamatban lévő munkát egy mappába rendezi térképpel, így az új chat folytatódik magyarázat nélkül.

## Hozzon létre PACT-ot: AI munkatér

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** folyamatban lévő projektekkel a számítógépen.
## Mire jó

Hétfőn új chatet nyit a részleg költségvetése miatt, és tíz percig keresgél
alapanyagokat a számítógépen. A tavalyi táblázat a Dokumentumok között van,
az értekezleti jegyzetek az Asztalon, a beszállítói ajánlat a Letöltések
között. Az AI mégis a tavalyi árakkal számol, mert az idei ajánlatot elfelejtette
beilleszteni a chatbe.

A PACT egyetlen mappa négy részből, ahol az AI maga megtalálja a projekteket,
alapanyagokat és szabályokat.
## Mit készítsen elő

- a jelenleg dolgozott projektek fájljait, és tudja, hol vannak a számítógépen,
- AI-t [módban](glossary:workmode) Cowork vagy Code, amely a számítógépen lévő
  fájlokkal dolgozik.
## Hogyan csinálja

1. Nyissa meg a Coworkot vagy a Code-ot a saját nevét viselő mappában, ahol
   a Dokumentumok, Asztal és Letöltések vannak, és illessze be a promptot.
   Az AI projektenként megmutatja, mit fog áthelyezni az új `PACT` mappába.
2. Erősítse meg a javaslatot; a bizonytalan projektet hagyja ki egyelőre.
   Az AI áthelyezi a fájlokat, és az `AGENTS.md`-be beírja a PACT térképét:
   mi hol van és milyen szabályok érvényesek.
3. Nyisson új chatet a `PACT` mappában, és adjon meg egy feladatot egy projekthez,
   például: „Folytassuk a költségvetéssel. Mi hiányzik még belőle?” Az AI maga
   veszi elő az alapanyagokat.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) AI-ba Cowork vagy Code módban,
megnyitva a saját mappájában:

Hozz létre a Dokumentumok között egy PACT mappát: egy munkatér, ahol minden
munkámnak megvan a helye. Ha nem tudsz a számítógépen lévő fájlokkal dolgozni,
mondd meg rögtön, hogy átválthassak Cowork vagy Code módra.

Hozz létre benne négy részt:
- 1_Projects: folyamatban lévő projektek, mindegyik külön mappában,
- 2_Agents: AI utasítások, például ismételten használt promptok,
- 3_Context: alapanyagok, amelyek több projektre is érvényesek, például árjegyzék,
céges szabályok vagy jól sikerült mintaszövegek,
- 4_Tools: munkához szükséges eszközök, például dokumentumsablonok vagy kalkulátorok.

Nézd át a Dokumentumokat, Asztalt és Letöltéseket, és kérdezd meg, van-e még
munkafájlom máshol, például OneDrive-on. A tartalom és az utolsó módosítás dátuma
alapján ismerd fel, mely projekteken dolgozom most. Ezután mutass projekt
szerinti javaslatot: a projekt nevét és az áthelyezett fájlok típusát, nem
külön-külön minden fájlt. Az én megerősítésem után helyezd át a fájlokat,
és az áthelyezések listáját (honnan hová) mentsd a presuny.md fájlba a PACT
mappában, hogy bármikor vissza lehessen állítani. Amit nem tartozik a folyamatban
lévő munkához, hagyd a helyén. A megosztott mappákban lévő fájlokat, amelyeken
más kollégák is dolgoznak, ne helyezd át; csak írd be a térképbe, hol vannak.

Végül hozz létre a PACT mappában egy AGENTS.md fájlt a PACT térképével: mi
van melyik részben, és milyen projektek vannak ott, mindegyikről egy mondatban,
mi a státusza. Adj szabályt: „Új projektet hozz létre a 1_Projects mappában.
Minden új fájlt a megfelelő részbe ments. Ha új projekt jön létre vagy változik
az állapota, frissítsd a térképet ebben a fájlban. Mielőtt dolgozol egy projekten,
olvasd el a mappáját.” Gondoskodj róla, hogy ezt a fájlt minden munka elején
elolvasd ebben az eszközben; Coworkban írd be a mappa utasításai közé.

## Az Ön eszközében

### Microsoft Copilot
A Coworkot a Chat kapcsoló mellett találja; ha nincs ott, kérje az IT adminisztrátort.
Csak a OneDrive-ot és a SharePointot látja, ezért nem választ mappát, és a prompt
végére írja: „A Dokumentumok, Asztal és Letöltések helyett nézd át a OneDrive-omat,
és ott hozd létre a PACT-ot. A térképet Word dokumentumként mentsd, a szabályokat
írd meg nekem a Customize, Preferences részre.” A 3. lépésben az új feladatban
írja, hogy a PACT a OneDrive-on van.

### ChatGPT
A ChatGPT asztali alkalmazásban váltsa Codex módra, válassza a mappa megnyitását
(open a folder), és válassza ki a saját nevét viselő mappát. A Codex maga olvassa
az `AGENTS.md`-t, és létrehozza az ütemezett feladatot, ha kéri; ezt a Scheduled
fül alatt találja. Ha nem látja a Codexet, valószínűleg az IT adminisztrátor
letiltotta, kérje meg, hogy engedélyezze.

### Claude
A Claude asztali alkalmazásban nyissa meg a Coworkot, és válassza ki a saját
nevét viselő mappát, vagy nyissa meg Claude Code-ban; mindkettő fizetős.
A Cowork a mappa utasításai közé (Folder instructions) írja a szabályt, a Claude
Code olvassa az `AGENTS.md`-t. Az AI létrehozza az ütemezett feladatot, ha kéri,
és a bal oldali panelen a Scheduled alatt találja.

### Gemini
A Gemini a Google Drive-on nem hoz létre mappákat és nem helyez át fájlokat,
így PACT-ot nem lehet vele felépíteni. Ehhez Cowork vagy Code módú AI kell,
például Claude Cowork, Claude Code vagy Codex a ChatGPT alkalmazásban; kérdezze
meg az IT adminisztrátort, hogy a cég rendelkezik-e ilyennel.
## Mi az a PACT

A [PACT](glossary:pact) egy módszer a munka rendszerezésére, hogy ember és AI
is átlássa. A név az angol Projects (projektek), Agents (AI utasítások), Context
(alapanyagok) és Tools (eszközök) kezdőbetűiből áll. A legegyszerűbb forma négy
mappa, mint ebben a gyakorlatban; a számok a neveik előtt mindig ebben a sorrendben
rendezik őket. Ön dönt, mely projektek tartoznak a PACT-ba, az áthelyezést és
rendezést az AI végzi. Nem kell külön program, és ha a munka egy része máshol
van, például céges dokumentumok megosztott meghajtón, ott maradhat, az AI pedig
beírja a térképbe, hol találja.

Az `AGENTS.md` egy egyszerű szövegfájl a PACT főmappájában, amely az AI szabályait
tartalmazza. Az elnevezés az [agentekre](glossary:agent) utal, azaz az AI-ra, amely
maga dolgozik a fájlokkal, a `.md` kiterjesztés pedig [Markdown](glossary:markdown)
formátumot jelent. Sok Code módú eszköz automatikusan elolvassa munka elején,
így a térképet és szabályokat nem kell ismételni. Ahol az eszköz nem tudja ezt
magától, az AI elmenti a szabályt a beállításokba, vagy megmondja, hová kell
beilleszteni.

Egy sima chat nem elég a PACT-hoz, mert nem lát a számítógép mappáiba; a [Cowork
vagy Code módra váltást](card:when-chat-is-not-enough) külön kártya mutatja. A PACT-ba csak folyamatban
lévő projektek és alapanyagok tartoznak; a régi archívumokat hagyja a helyükön,
az AI csak kérésre helyezi át.
## Legyen a PACT önfenntartó

Az ütemezett feladat hetente egyszer átrendezi a PACT-ba az máshol megjelent
fájlokat is. A `PACT` mappában végzett AI munkát az `AGENTS.md` szabálya lefedi.
Az e-mail mellékletek a Letöltésekbe, a gyors jegyzetek az Asztalra kerülnek.
Adja meg AI-nak Cowork vagy Code módban ezt a feladatot, és kérje, hogy hozza
létre az ütemezett feladatot:

```text
Minden pénteken 16:00-kor nézd át az Asztalt és a Letöltéseket. A heti fájlokat,
amelyek a PACT projektjeihez tartoznak, helyezd át a megfelelő részbe az AGENTS.md
szerinti térkép alapján. Ha új projekt jelent meg, hozz létre neki mappát az
1_Projects-ben, és egészítsd ki a térképet. A végén írd meg, mit hová helyeztél,
és mely fájloknál nem tudod, hová tartoznak.
```

Ha a feladat a számítógépen lévő fájlokkal dolgozik, csak akkor fut, ha a
számítógép be van kapcsolva és az alkalmazás nyitva.
## Példa

Jana készíti a cég standját a brnói vásárra és az őszi Dolomitok-i kirándulást
kollégáknak. A fájlok szétszórva vannak a számítógépen. Az AI felismeri mindkét
projektet, és Jana megerősítése után létrehozza:

```text
PACT/
  AGENTS.md
  1_Projects/
    veletrh-brno/         brief, stand költségvetés, három nyomda ajánlata
    zajezd-dolomity/      program és kalkuláció
  2_Agents/
    prompt-pozvanka.md
  3_Context/
    cenik-2026.xlsx
    logo-a-barvy.pdf      jó a standhoz és a kirándulás meghívójához
  4_Tools/
    kalkulacka-zajezdu.xlsx
```

Október 14-én szerdán új chatet nyit a `PACT` mappában, és írja: „Folytassuk a
vásárt. Melyik nyomda a legolcsóbb?” Jó válasz összehasonlítja a három ajánlatot
a projekt mappájából anélkül, hogy Jana bármit beillesztene. Ha az AI megkérdezi,
miről van szó, valószínűleg nem a `PACT` mappában dolgozik.
## Ha elakad

- **Az AI azt állítja, hogy létrehozta a mappákat, de a számítógépen nincsenek:**
  valószínűleg sima chatben dolgozik, amely nem kezeli a számítógépes fájlokat.
  Váltson [Cowork vagy Code módra](card:when-chat-is-not-enough), és válassza ki a saját nevét
  viselő mappát.
- **Az AI nem lát vagy nem tud áthelyezni fájlokat egy mappában:** ellenőrizze,
  hogy Cowork vagy Code módban a saját nevét viselő mappát választotta-e.
  Ha a fájlok azon kívül vannak, kérdezze meg az AI-t, hogyan adhat hozzáférést.
- **Vissza akarja vonni az áthelyezést:** mondja meg az AI-nak a `PACT` mappában,
  hogy a `presuny.md` alapján állítsa vissza a fájlokat, mindet vagy csak egy projektet.
- **Az új chat olyan dolgokat kérdez, amelyek a mappában vannak:** nyisson chatet
  a `PACT` mappában, ne egy sima chatablakban, és ellenőrizze, hogy az `AGENTS.md`
  közvetlenül ott van. Ezután kérje meg az AI-t, hogy olvassa el.
## Mi lesz kész

Van egy `PACT` mappája négy résszel, benne folyamatban lévő projektek és alapanyagok,
és az `AGENTS.md`-ben egy térkép, amely alapján minden új chat eligazodik.
Valós feladaton ellenőrizte, hogy az AI folytatja a projektet anélkül, hogy bármit
be kellene illesztenie vagy magyaráznia.
## Mi következik

Hagyja, hogy az AI írjon minden projekthez egy [bevezető oldalt](card:project-start-here),
amelyből azonnal látszik az állapota. Az ismételten elmagyarázott folyamatból
készíttessen vele egy [újrahasználható útmutatót](card:create-skill-from-proven-process).
## Ügynök

**Mi az:** Olyan AI rendszer, amely adott cél elérése érdekében több lépést tervezhet, használhatja a rendelkezésre álló eszközöket, kezelheti az állapotot, és végrehajthatja az engedélyezett műveleteket. A képességek köre és az önállóság mértéke az adott eszköztől és jogosultságoktól függ.

**Mi nem:** Nem csupán egy eltárolt prompt vagy egy átnevezett asszisztens fejlettebb funkciónak.

**Miért van rá szüksége a tanulónak:** Segít felismerni azokat a feladatokat, amelyek eszközöket, jogosultságokat, ellenőrzési pontokat és egyértelmű felelősséget igényelnek a műveletekért.

## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

## PACT

**Mi ez:** Az AI munkakörnyezet négy típusú elemre bontásának modellje: Projects, Agents, Context és Tools, azaz projektek, asszisztensek vagy ügynökök, kontextus és eszközök.

**Mi nem ez:** Nem kötelező négy összetevőből álló készlet, és nem kész szoftver. A konkrét forma attól függ, hogyan dolgozik az ember és mit használ már.

**Miért van rá szüksége a tanulónak:** Segít eligazodni több projekt, ismétlődő AI folyamat, stabil kontextus és eszközök között úgy, hogy azokat az ember és az AI is megtalálja.

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
