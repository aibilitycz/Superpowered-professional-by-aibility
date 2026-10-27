# Hagyja, hogy az AI rögzítse a feladatok állapotát: a kolléga tudja, hol tart a munkája

Az AI minden munkához maga talál vagy hoz létre feladatot a csapat eszközében, áthelyezi és lezárja azt.

## Hagyja, hogy az AI rögzítse a feladatok állapotát: a kolléga tudja, hol tart a munkája

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** egy mai munkával.
## Mire jó ez

Már kedd óta kész van a három ajánlat összehasonlítása új ablakokra, de a feladat a feladatkezelő eszközben még mindig "Elvégzendő" állapotban van. Csütörtökön emiatt ír a menedzser, és a kolléga közben újra elkezdte összehasonlítani az ajánlatokat.

Segít egy AI-s szabály: a feladatot maga váltogatja munka közben, és a végén beírja az eredményt hivatkozással, így az állapot mindig pontos, még ha el is felejtené.
## Mit készítsen elő

- egy mai munkát, amit az AI-val végez el, például ajánlatok összehasonlítása vagy értekezleti anyagok,
- a csapat feladatkezelő eszközét, például Planner, Asana vagy Jira; az IT néha engedélyezi a csatlakozást,
- egy projekthez tartozó, a csapattal megosztott mappát, például OneDrive vagy SharePoint szinkronizált mappáját,
- AI-t [módban](glossary:workmode) Cowork vagy Code; ahol van, ott a "Az Ön eszközében" blokk mutatja.
## Hogyan csinálja

1. Illessze be a promptot az AI-ba Cowork vagy Code módban, és egészítse ki a feladatkezelő eszközzel és a mai munkával. Az AI csatlakozik az eszközhöz; a bejelentkezést Ön igazolja.
2. Erősítse meg a fiókot, amelyen keresztül az AI ír, és mondja meg, mely állapotok jelentik a folyamatban lévőt és a kész állapotot. Az AI elmenti az állapotokat vagy oszlopokat a szabályba, és elvégzi a munkát.
3. Nyissa meg a feladatot a feladatkezelő eszközben, és nézze meg, mit lát a kolléga. Az állapotnak és a hivatkozásnak egyeznie kell az AI jelentésével.

A feladatba elég az állapot, egy mondat az eredményről és a hivatkozás; a többi a munkanaplóba, a projekt naplójába kerül.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban, a projekt mappájában nyitva, és az utolsó két sorba írja be az eszközt és a munkát:

Azt szeretném, hogy a munkám állapota automatikusan rögzüljön a csapatunk által használt feladatkezelő eszközben, és a kollégák lássák, hol tart a munka, anélkül, hogy megkérdeznének. Állítsd be ezt, és azonnal használd a munkán, amit megadok. Az eszköz és a munka az utolsó két sorban van.

1. Csatlakozz a feladatkezelő eszközhöz. Használd a rendelkezésedre álló csatlakozót. Ha hiányzik vagy csak olvasási jogod van, csatlakoztasd az eszközt magad, például MCP szerveren keresztül (Planner esetén a Microsoft Work IQ) vagy a Composio szolgáltatáson keresztül. Ha nekem kell bejelentkeznem vagy engedélyeznem valamit, pontosan mondd meg, hol, és várj. Ha az IT-nak kell engedélyeznie a csatlakozást, írj nekem egy rövid kérést az IT részére, hogy mit és miért kell csatlakoztatni. Ha a csapat táblázatban vagy fájlban vezeti a feladatokat, dolgozz abban. Ha nem tudsz írni a projekt mappájában lévő fájlokba, azonnal szólj, és javasolj más helyet.

2. Tudakold meg közvetlenül az eszközben, milyen fiókkal írsz, és írd le nekem a projekt vagy tábla nevét is, ahová írsz. Ha több fiókkal is írhatnál, kérdezd meg, melyiket használjam. Írd ki az eszközben látott feladatállapotokat és oszlopokat, és kérdezd meg, melyik jelenti a folyamatban lévőt és a kész állapotot.

3. Írd be az AGENTS.md fájlba a projekt mappájában ezt a szabályt, és töltsd ki a szögletes zárójeleket az eddigiek alapján. Ha az AGENTS.md nem létezik, hozd létre. Gondoskodj róla, hogy ezt a szabályt az eszközben minden munka elején elolvasd; Cowork módban írd be a szabályt a mappa utasításaiba.

### Munka állapota
- A feladatokat a [eszköz, projekt vagy tábla] kezeli. Mindig a [fiók] fiókkal írj bele, és minden jelentésben nevezd meg.
- A munka elején keresd meg a hozzá tartozó feladatot, és állítsd át [folyamatban lévő] állapotra. Ha nincs, hozz létre egy rövid nevűt, és rendeld magadhoz.
- Ha a munka másra vár, írj a feladatba egy mondatot, hogy kire és mire vár.
- A végén írd felülre a projekt mappájában lévő worklog.md fájlba a bejegyzést hivatkozással az eredményre, a korábbi bejegyzések mintájára. Ha a worklog.md nem létezik, hozd létre, és így írd be: dátum, mit végeztek el, hivatkozás az eredményre és a következő lépés. Ha az AGENTS.md-ben már van szabály a worklogra, ezt a sort hagyd ki, és csak írd hozzá a hivatkozást a szabályhoz.
- Írj a feladatba egy kommentárt az eredményről egy mondatban, hivatkozással, amit a kolléga megnyithat, és állítsd át [kész] állapotra. Ha az eredmény csak ezen a gépen van, kérdezd meg, hová mentsem. Ha a munka nincs kész, hagyd folyamatban, és írd be, mi maradt hátra.
- Minden beírás után töltsd újra a feladatot és a munkanaplót, és ellenőrizd, hogy benne van-e, amit írtál. Csak ezután jelezd, hogy kész. Ha a beírás nem stimmel, javítsd, és ha nem megy, szólj.

4. Ezután végezd el az utolsó sorban megadott munkát a szabály szerint. A végén írd meg a feladat hivatkozását, állapotát, ahogy most látod az eszközben, és melyik fiókkal írtál.

Feladatkezelő eszköz:
Munka:

## Az Ön eszközében

### Microsoft Copilot
Illessze be a promptot a Copilot Cowork-ba a `copilot.cloud.microsoft` címen (a Chat melletti kapcsoló; Microsoft 365 Copilot licenc). A feladatkezelő eszközt a Customize, Plugins menüben adhatja hozzá, vagy kérje az IT-t. A prompt végére írja be: „Nincs mappám: a worklogot Wordként vezesse OneDrive-on, a szabályfájlt ne hozza létre, és a szabályt szövegként írja, amely így kezdődik: 'A [projekt neve] projektnél:'.” A szöveget balra a Customize, Preferences-be illessze be.

### ChatGPT
A Code mód a ChatGPT Codex-ben érhető el: a ChatGPT asztali alkalmazásban válassza ki és nyissa meg a projekt mappáját (open a folder). A Codex automatikusan olvassa az `AGENTS.md`-t, és az MCP szerveren keresztül csatlakozik a feladatkezelőhöz; ezt a Settings, MCP servers alatt találja, ahol szükség esetén az Authenticate gombbal bejelentkezhet. Ha nem látja a Codexet, valószínűleg a cég rendszergazdája letiltotta, kérje meg a bekapcsolására.

### Claude
A Claude asztali alkalmazásban nyissa meg a Cowork vagy Claude Code módot, és válassza ki a projekt mappáját; mindkettő fizetős csomagban érhető el. A Cowork a szabályt a mappa utasításaiba írja (Folder instructions), a Claude Code az `AGENTS.md`-t olvassa. A feladatkezelő eszközt, például Asanát vagy Lineart, a bal oldali panelen a Customize, Connectors alatt csatlakoztathatja; a cégben az eszközt a szervezet tulajdonosa adja hozzá.

### Gemini
A Gemini alkalmazás a Google Tasks-be adja a feladatot, és késznek jelöli, ha a promptban az @Google Tasks szerepel. A munkanaplót a mappában azonban nem vezeti, mert nem dolgozik a számítógépen lévő mappával. Az egész gyakorlatot az Antigravity végzi, a Google eszköze, amely közvetlenül a mappájában dolgozik és olvassa az `AGENTS.md`-t; céges fiókkal a Gemini Enterprise-on keresztül használja, amelyet az IT-től kérjen.
## Feladat, munkanapló és szabályfájl

Az AI két helyre ír, és egy szabályfájl alapján működik. A feladatot a csapat minden tagja látja a feladatkezelő eszközben: az AI írja bele az állapotot és a végén egy mondatot hivatkozással az eredményre. Az állapot lehet oszlop, címke vagy a feladat állapota, például Elvégzendő, Folyamatban vagy Kész. Ha a csapatnak nincs eszköze, egy táblázat vagy `ukoly.md` fájl a megosztott mappában megfelel.

A [munkanapló](card:project-worklog), a projekt naplója, a `worklog.md` fájl a projekt mappájában. Az AI a végén beírja, mit végzett el, hivatkozással az eredményre, így hónapok múlva is visszakereshető.

Az `AGENTS.md` az AI utasításait tartalmazó fájl a projekt mappájában, amelyet az AI minden munka elején elolvas; Cowork módban ugyanezt a szerepet a mappa utasításai töltik be. Az AI a feladatkezelőhöz csatlakozik csatlakozóval vagy [MCP](glossary:mcp) segítségével, az alkalmazások AI-hoz való csatlakozásának nyílt szabványával. Ha nincs csatlakozó, integrációs szolgáltatást használ, például Composio-t; az AI az ilyen szolgáltatás beállítását a [adatátvitel alkalmazások között](card:cross-app-workflow) kártya mutatja.
## Miért nevezi meg az AI a fiókot és ellenőrzi a beírást

A prompt két szabálya, a fiók minden jelentésben és az írás utáni ellenőrzés, hibákból származik, amelyeket mi követtünk el. A feladatokat a Linear eszközben vezetjük, az AI egy szolgáltatáson keresztül ír, amelyhez több alkalmazás is csatlakozik, néhány több fiókkal. Ha az AI nem választotta ki kifejezetten a fiókot, néha más fiókkal írt, mint vártuk. Azóta mindig kiválasztja és megnevezi a jelentésben.

A másik hiba: az eszköz megerősítette az írást, de a feladat állapota nem változott. Ezért az AI minden írás után újratölti a feladatot, és csak akkor jelzi késznek, ha látja, amit írt.
## Példa

Jakub építőipari projektmenedzser, és a csapat Asanában vezeti a feladatokat. 2026. október 20-án kedden megnyitja az AI-t Cowork módban a `Rekonstrukce školy Lipová` mappában, beilleszti a promptot, és hozzáírja:

```text
Feladatkezelő eszköz: Asana, Rekonstrukce školy Lipová projekt
Munka: Hasonlítsd össze három ablakcserére vonatkozó ajánlatot a Nabídky mappában lévő táblázat alapján (ár, határidő, garancia), és írj ajánlást a műszaki igazgatónőnek.
```

Jakub megerősíti a céges fiókkal való bejelentkezést. Az AI kiírja az Elvégzendő, Folyamatban, Jóváhagyásra vár és Kész oszlopokat, és Jakub azt mondja, hogy a kész munka a Jóváhagyásra vár oszlopba kerül, mert az ajánlatokat a műszaki igazgatónő hagyja jóvá. Az AI megtalálja a "Ajánlatok összehasonlítása ablakokra" feladatot, átállítja Folyamatban állapotra, és összehasonlítja az ajánlatokat. Az utolsó beírás után újratölti a feladatot, és látja, hogy az még mindig Folyamatban van. Újra áthelyezi, ellenőrzi az állapotot, és visszajelzést ad:

```text
Jakub Dvořák fiókján keresztül írt (Asana, Stavby Morava).
- Az "Ajánlatok összehasonlítása ablakokra" feladat a Jóváhagyásra vár oszlopban van, ajánlással és hivatkozással a SharePointon lévő Porovnání oken.xlsx táblázatra.
- Az első áthelyezés nem mentődött el; a második próbálkozás után az áthelyezés megerősített.
- Munkanapló: a 2026-10-20 bejegyzés a worklog.md tetején.
```

Szerdán reggel a műszaki igazgatónő, Hana megnyitja a projektet Asanában, látja a feladatot a Jóváhagyásra vár oszlopban a táblázatra mutató hivatkozással, és jóváhagyja az ajánlást anélkül, hogy Jakubnak írna.
## Ha elakad

- **Az AI nem éri el a feladatkezelő eszközt:** hiányzik a csatlakozó vagy nem lehet bekapcsolni a cégnél. Kérje meg az AI-t, hogy készítsen rövid kérést az IT rendszergazdának. A Plannerhez az AI Code módban a Work IQ-n, a Microsoft MCP szerverén keresztül csatlakozik, amelyet az IT egyszer engedélyez a cégnél. Amint az IT engedélyezi, írja ugyanabba a csevegésbe: „Az IT engedélyezte, folytasd”. Az AI más alkalmazások csatlakoztatását a [Csatlakoztasson csatlakozót](card:plugin-connector) kártya mutatja.
- **Az AI új feladatot hoz létre, pedig már van:** mondja meg, hogyan ismerje fel a feladatot, például projekt és név alapján, és egészítse ki a szabályt.
- **Az AI késznek jelenti, de a feladat régi állapotban van:** írja be: „Töltsd be újra a feladatot, és mutasd, mit látsz benne.” Ha az ellenőrzés nem jelent meg a jelentésben, kérje meg az AI-t, hogy ellenőrizze, hogy a szabály benne van-e az `AGENTS.md`-ben vagy a mappa utasításaiban.
- **Az AI nem a projekt mappájában dolgozik, és nem ismeri a szabályt:** valószínűleg egy sima csevegésben dolgozik. Váltson át [Cowork vagy Code](card:when-chat-is-not-enough) módba, és nyissa meg a projekt mappáját.
## Mi lesz kész

A mai munkának van egy feladata, amelyet az AI maga áthelyezett kész állapotba, és beírta az eredményt hivatkozással, és a munkanaplóban is van bejegyzése. Az `AGENTS.md`-ben, a mappa utasításaiban vagy az AI beállításaiban lévő szabály ugyanezt elvégzi minden további munkánál. A kolléga megtalálja a munkája állapotát a feladatkezelő eszközben anélkül, hogy megkérdezné.
## Mi következik

Ahhoz, hogy az állapot a levelezésben és értekezleteken végzett munkára is kiegészüljön, állítson be egy [ütemezett feladatot](card:recurring-ai-task), amely minden este kiegészíti a feladatokat az aznapi e-mailek, csevegések és értekezletek alapján. Ha a szabály néhány hét után is működik, azt a [heti beállítási felülvizsgálat](card:weekly-ai-review) ellenőrzi.
## MCP

**Mi ez:** Egy nyílt műszaki szabvány (Model Context Protocol), amelyen keresztül az AI csatlakozik alkalmazásokhoz és adatforrásokhoz. Az alkalmazás vagy az adat szolgáltatója MCP szervert kínál, és az AI ezen keresztül olvassa az adatokat vagy hajt végre engedélyezett műveleteket. Az eszközbeállításokban az ilyen kapcsolatot gyakran csatlakozónak vagy MCP szervernek nevezik.

**Mi nem ez:** Nem önálló alkalmazás vagy AI modell. Maga a szabvány nem tölt le semmit; szükség van egy szolgáltató szerverére, gyakran fiókra nála, valamint egy engedélyre, amelyet ember vagy rendszergazda aktivál.

**Miért van rá szüksége a tanulónak:** Segít megérteni, mikor ér el az AI a nyilvános weben kívüli adatokhoz, és ki felelős a csatlakozás engedélyezéséért.

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
