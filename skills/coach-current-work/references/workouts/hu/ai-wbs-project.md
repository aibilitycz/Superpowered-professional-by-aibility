# Készítsen AI-WBS-t: projektterv emberekre és AI-ra bontva

Az AI lebontja a projekttervet, minden lépésnél megjelöli, hogy ember vagy AI végzi, és azonnal elvégzi az első lépést.

## Készítsen AI-WBS-t: projektterv emberekre és AI-ra bontva

**Nehézség: könnyű.**\
**Idő: kb. 15 perc** egy induló projekttel.
## Mire jó

Egy megbeszélésen a vezetőség rábízza az irodaköltözést egy új épületbe. A költözés
1. február 2-án van, a naptárban eddig csak egy „költözés” tétel szerepel, és nem tudja, mit végezhet el az AI, illetve mikor lesz szükség az IT és az üzemeltetés kollégáira.

Egy olyan terv, amelyben minden lépésnél szerepel, ki végzi és mi lesz az eredmény,
a projektmappában van, így az új chat vagy egy kolléga is látja, mi készült el és mi következik.
## Mit készítsen elő

- projektmappa az anyagokkal: megbízás, vezetőségi e-mail vagy megbeszélési jegyzőkönyv,
- néhány mondat a projekt céljáról, határidejéről és a résztvevőkről,
- AI Cowork vagy Code módban, amely közvetlenül a mappában lévő fájlokkal dolgozik.
## Hogyan csinálja

1. Nyissa meg a projektmappát AI Cowork vagy Code módban (hol találja, azt a „Az eszközében” blokk mutatja), illessze be az AI gyakorlat promptját, és alá írja be a célt, határidőt és a projekt résztvevőit.
2. Az AI táblázatos tervet és kérdéseket mutat. Válaszoljon, javítsa a „Ki végzi” oszlopot, majd írja be: „Mentse el”: az AI elmenti a tervet, elvégzi az első lépést és beírja a szabályt az `AGENTS.md`-be.
3. Nyissa meg az első lépés eredményét és ellenőrizze. Amit nem talál megfelelőnek, írja meg az AI-nak, amely javítja a fájlban és a tervben.

Csak normál chattel a „Ha elakad” rész segít.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) AI Cowork vagy Code módban, a projektmappában megnyitva:

Készíts AI-WBS-t ehhez a projekthez: a teljes projekt tervét bontsd emberekre és AI-ra. Ha nincs hozzáférésed a projektmappához és nem tudsz oda fájlokat menteni, azonnal mondd el, hogy átválthassak Cowork vagy Code módra.

Nézd át a projektmappában lévő anyagokat és az alábbi megbízás alatti megjegyzéseimet. Ha már van terv a mappában, módosítsd azt, ne hozz létre újat.

Bontsd le a teljes projektet az elejétől a befejezésig 5-10 fő lépésre. Minden lépés végén legyen valami bemutatható: fájl, lista, döntés vagy megrendelés. A későbbi lépéseket ne hagyd ki, csak rövidebben írd le. A lépéseket úgy rendezd, hogy minél előbb legyen használható eredmény. A tervet táblázatként írd három oszloppal:
- Lépés: mit kell csinálni.
- Ki végzi: konkrét személy vagy AI és a személy neve, aki ellenőrzi az eredményt.
- Mi lesz az eredmény: a lépés konkrét kimenetele.

Mindent, amit az anyagokból elő lehet készíteni, adj az AI-nak. Döntéseket, emberi egyeztetéseket és olyan lépéseket, ahol valamit elküldenek, közzétesznek, aláírnak vagy fizetnek, adj embernek. Ha nem tudod, ki végzi a lépést, írj kérdőjelet, ne találj ki nevet.

Mutasd meg a tervet, és alá írd az összes kérdést, amire az anyagok nem adtak választ, de amelyek megváltoztatnák a tervet. Várj, amíg válaszolok, és módosítom vagy megerősítem a tervet. Ezután mentsd el `plan-projektu.md` néven a projekt főmappájába, felül írd rá a projekt nevét, határidejét és a mai dátumot. Ha van a mappában README.md, adj hozzá egy sort a terv hivatkozásával.

Ezután azonnal végezd el az első lépést, ami a tervedben rád vár és van hozzá anyagod. Olyat válassz, amit pár perc alatt el tudsz végezni. Az eredményt mentsd a projektmappába, a „Mi lesz az eredmény” oszlophoz írd hozzá a fájl nevét és a „kész” szót, és mondd meg, mit ellenőrizzek.

Végül adj hozzá az `AGENTS.md` fájlhoz a projektmappában egy szabályt: „A projekt munkája előtt olvasd el a plan-projektu.md-t. Ha egy lépés kész, írd be a „Mi lesz az eredmény” oszlopba, hol van az eredmény, és a „kész” szót.” Ha az `AGENTS.md` nem létezik, hozd létre. Gondoskodj róla, hogy ezt az eszközben minden munka elején elolvasd; Coworkban írd be a mappainstrukciók közé.

Cél, határidő és a projekt résztvevői:

## Az eszközödben

### Microsoft Copilot
A Cowork a Copilotban a Chat kapcsoló mellett van; ha nem látod, kérd az IT-t.
OneDrive és SharePoint fájlokkal dolgozik, mondd meg neki, hol van a projekt, és hogy mentse el a tervet Excel táblázatként; a Coworkban a Customize, Preferences alatt hagyd meg a „A projekt munkája előtt olvasd el a tervet.” beállítást. Cowork nélkül érvényes a „Az AI nem menti el a tervet a mappába” pont a „Ha elakad” részben, Notebookban (Jegyzettömb).

### ChatGPT
A mappával a Codex dolgozik a ChatGPT asztali alkalmazásban: válts Codex módra, válaszd az open a folder opciót, és válaszd ki a projektmappát; nem kell programozni. A Codex önállóan olvassa az `AGENTS.md`-t és kérésre létrehozza a tervezett feladatot. Ha nem látod a Codexet, kérd az adminisztrátortól, hogy engedélyezze a „Allow members to use Codex locally” opciót, vagy kövesd a normál chat pontot.

### Claude
A Claude asztali alkalmazásban válaszd a Coworkot, és az üzenetmezőbe írd be: Work in a folder. A Claude Code önállóan olvassa az `AGENTS.md`-t, a Coworkban az AI a prompt alapján beírja az utasításokat a mappába, hogy olvassa azt. A tervezett feladatot az AI kérésre létrehozza, az áttekintést a bal oldali panelen a Scheduled alatt találod.

### Gemini
A Gemini alkalmazás munkahelyi fiókkal nem dolgozik a mappával a számítógépen, ezért kövesd a normál chat pontot: a projekt helyett használd a Gem robotot, és a terv táblázatát exportáld táblázatokba. A mappával a Gemini CLI dolgozik, ha a cégnek van Gemini Code Assist Standard vagy Enterprise licenc; az `AGENTS.md`-t csak akkor olvassa, ha be van állítva.
## Mi az AI-WBS

Az AI-WBS az angol AI Work Breakdown Structure rövidítése. A Work Breakdown Structure, azaz a munka lebontása részekre, a projektmenedzserek évtizedek óta használják. Az [AI-WBS](glossary:aiwbs) ehhez minden lépéshez hozzáteszi a kérdést, hogy ember vagy AI végzi-e. Minden lépés eredményéért ember felel, még ha az AI készíti is elő, ezért az AI lépéseknél szerepel az ellenőrző személy neve is.

A terv egy egyszerű szöveges fájl, `plan-projektu.md` a projektmappában.
A `.md` kiterjesztés a [Markdown](glossary:markdown) formátumot jelöli, amelyet az AI könnyen olvas és szerkeszt. Bármilyen szövegszerkesztővel megnyitható, és ha kollégáknak táblázatként vagy dokumentumként szeretné elküldeni, csak kérje meg az AI-t.
Ha a projektnek van [README](card:project-start-here), a projekt kezdőoldala, az AI hozzáadja a terv hivatkozását.

Az `AGENTS.md` egy szabályfájl az AI számára ugyanabban a mappában. Az AI minden munka elején elolvassa, így ismeri a tervet anélkül, hogy emlékeztetni kellene; ahol az eszköz ezt nem támogatja, az AI a prompt alapján beírja az utasítást a mappa beállításaiba. Ha a mappa megosztott a csapattal, mindkét fájlt az egész csapat látja, és az AI kollégák ugyanazokat a szabályokat olvassák, mint az önök.

A normál chat nem menti el a tervet a mappába, mert nem lát a számítógépes mappákba; ha nincs más lehetőség, a „Ha elakad” rész normál chat pontja segít. Ha a projekt egy felhőalapú megosztott tárhelyen van, elég, ha a mappa szinkronizálva van a számítógépre.

Ha az AI megkérdezi, hogy menthet-e fájlokat a mappába, engedélyezze neki.
## Hogyan maradjon naprakész a terv

Az `AGENTS.md` szabály lefedi az AI-val végzett munkát a projektmappában. A kollégák azonban a lépéseiket a mappán kívül fejezik be, például e-mailben vagy megbeszélésen, és az eredményfájlok AI nélkül kerülnek a mappába. Ezt egy heti egyszer futó tervezett feladattal lehet kezelni, amely megjelöli a kész lépéseket és elvégzi a következő AI-ra váró lépést. Illessze be AI Cowork vagy Code módban ezt a megbízást, és kérje meg, hogy hozza létre a tervezett feladatot:

```text
Minden hétfőn 8:00-kor nézd át a plan-projektu.md-t, a projektmappát, valamint az előző heti e-maileket és megbeszéléseket, amelyek a projekthez kapcsolódnak és amelyekhez hozzáférsz. A kész lépéseknél írd be a „Mi lesz az eredmény” oszlopba, hol van az eredmény, és a „kész” szót. Ezután végezd el a következő lépést, amely rád vár a tervben és van hozzá anyagod, az eredményt mentsd a projektmappába. A végén írd meg, mi készült el újonnan, mit csináltál és melyik lépés vár kire.
```

Az AI csak akkor dolgozza fel az e-maileket és megbeszéléseket, ha hozzáfér a postafiókhoz és a naptárhoz; különben csak a projektmappával dolgozik. Ha a feladat a számítógépen lévő mappával dolgozik, csak akkor fut, ha a számítógép be van kapcsolva és az alkalmazás nyitva van.
## Példa

Jitka marketing koordinátor egy kerti bútorokat gyártó cégnél. A 2027-es tavaszi katalógust január 15-ig kell nyomtatni. A mappában a tavalyi katalógus, az újdonságok árjegyzéke és az idei eladások exportja van. Október 12-én hétfőn megnyitja a mappát Cowork módban, beilleszti a promptot, és alá írja: „2027-es tavaszi katalógus, nyomtatás január 15. Dolgozom rajta én, az értékesítési igazgató Pavel, a fotós Ondřej és egy grafikai ügynökség.” Az AI megmutatja a tervet, és alatta megkérdezi, hány oldalas legyen a katalógus és csak az újdonságokat fotózzák-e:

```text
| Lépés | Ki végzi | Mi lesz az eredmény |
|---|---|---|
| 1. Termékek kiválasztása | AI választ az eladások alapján, Jitka ellenőrzi | 60 termék listája |
| 2. Paraméterek és árak | AI, Jitka ellenőrzi | paramétertábla |
| 3. Újdonságok fotói | fotós Ondřej | 14 fotó |
| 4. Termékszövegek | AI, Jitka ellenőrzi | szövegek fájlban |
| 5. Tördelés | grafikai ügynökség | PDF katalógus |
| 6. Árak korrektúrája | AI az árjegyzékhez képest, Jitka ellenőrzi | javítási lista |
| 7. Jóváhagyás és nyomtatás | Jitka, Pavel jóváhagyja | nyomtatási megrendelés |
```

Jitka válaszol mindkét kérdésre. Az első lépésnél az AI önállóan választaná ki a termékeket, Jitka csak ellenőrizné. Ezért átírja a lépést „AI készít javaslatot, Jitka és Pavel választanak”: az értékesítés tudja, mire kérdeznek rá a vevők, és az eladásokban ez még nem látszik. Ezután beírja: „Mentse el”.

Az AI elmenti a tervet `plan-projektu.md` néven, és azonnal elvégzi az első lépést: az eladási exportból és az árjegyzékből elkészíti a `navrh-vyrobku.xlsx` fájlt 60 termékkel, eladási sorrendben és mind a 14 újdonsággal. Jitka a táblázatban talál két összeállítást, amelyeket már nem gyártanak, ezt megírja az AI-nak, amely eltávolítja azokat a javaslatból. A kész javaslattal szerdán elmegy Pavelhez, és egy megbeszélésen lezárják a választást.
## Ha elakad

- **Az AI nem menti el a tervet a mappába, mert csak normál chatet használ:** válts [Cowork vagy Code](card:when-chat-is-not-enough) módra. Ha a cég csak normál chatet engedélyez, csatold az anyagokat a prompthoz, és írd meg az AI-nak, hogy folytassa a chatben, és írja meg a tervet közvetlenül válaszként. Kérd meg az AI-t, hogy adja meg a tervet fájlként, töltsd fel a [projektbe](card:asistent) az eszközödben (ahogy hívják, azt a „Az eszközödben” blokk mutatja), és a projekt utasításaiba írd be: „A munka előtt olvasd el a projekt tervét. Ha megírom, mi készült el, írd meg újra a teljes tervet a jelölt lépésekkel.” Az új tervverziót töltsd fel a projekthez a rég helyett; az első lépést az AI a chatben végzi el a projektben.
- **A terv harminc apró feladatból áll:** kérd meg az AI-t, hogy egyesítse fő lépésekbe, amelyek mindegyike saját eredménnyel rendelkezik.
- **A terv általános, bármilyen projektre jó:** kérdezd meg az AI-t, mely anyagokat olvasta be a mappából. A fájl, amely csak a felhőben van, csak akkor töltődik le, amikor az AI megnyitja, ezért ha nem olvasta be, próbálja meg újra internetkapcsolattal. Amit a mappából hiányzik, például megbízás vagy megbeszélési jegyzőkönyv, add hozzá, és kérd meg az AI-t, hogy írja át a tervet ennek megfelelően. Nagy projektnél válts [erősebb modellre](card:modely).
- **Az első lépés eredménye nem megfelelő:** írd meg az AI-nak, pontosan mi nem stimmel és mely anyagból vegye az adatokat. Ha számokról vagy állításokról van szó, segít az [AI kimenet ellenőrzése](card:kontrola-vysledku).
## Mi lesz kész

A projektmappában megvan a `plan-projektu.md` a teljes projekt fő lépéseivel, és minden lépésnél tudja, ki végzi és mi lesz az eredmény. Az AI elvégezte az első lépést, és az eredmény a terv mellett van. Az `AGENTS.md`-ben van egy szabály, amely miatt az AI a munka előtt elolvassa a tervet és jelöli a kész lépéseket.
## Mi következik

Ha egy lépés hosszú AI-munka, például hatvan szerződés átnézése, add át egy [agentnek](card:agent-task), aki önállóan végzi el. Ha a projektnek még nincs kezdőoldala, kérd meg az AI-t, hogy írja meg a [README](card:project-start-here)-t. A projekt döntéseit és elvégzett munkáit jegyezd fel a [worklogba](card:project-worklog).
## AI-WBS

**Mi ez:** AI Work Breakdown Structure: a projekt lebontása kimenetekre, fázisokra és emberi, AI, szakértői vagy automatizált szerepekre.

**Mi nem ez:** Nem csupán egy szokásos projektfeladat-lista.

**Miért van rá szüksége a csapatnak:** Megmutatja, hogy a projekt mely pontjain dolgozik az AI, és hol marad meg az emberi vagy szakértői lépés.

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

## Blokk tervezése

Opcionális termékmechanika egy kártya befejezése után, amelynek eredménye folytatólagos munkát jelent, ami nem fér bele tizenöt percbe. Nem önálló kártya, nincs saját befejezése, és nem növeli a teljesített módszerek számát.

A kártyák tizenöt percesek és egy artefaktummal zárulnak. Egy részük azonban csak az artefaktummal kezdődik: létrejön egy fázistérkép, kutatási összefoglaló, skillterv vagy két integrálandó ág. Az ember tervvel távozik, de nincs ideje, és a munkához tíz perc közötti szünetekben tér vissza, amikor nem lehet semmit befejezni.

## Mikor jelenik meg

- a kártya használható eredménnyel zárult, és ez az eredmény további munkát jelent,
- a munka egyértelmű véggel rendelkezik, amit egy mondattal meg lehet nevezni,
- ha hagyományosan rövid szakaszokra bontanánk, az szétesne, mert minden visszatérés a kontextus újratöltésével kezdődik.

A mechanika nem jelenik meg, ha a munka valóban belefér a tizenöt percbe, ha a következő lépés másik embertől vagy jóváhagyástól függ, illetve ha a kártya eredményének nincs további kapcsolódó munkája.

## Mit lát az ember

Egy rövid választási lehetőséget **Blokk tervezése** a közös check-in mellett. Megnyitás után az AI csak egy dolgot kérdez meg: mikor van valóban ilyen ideje. A többit a kártyán keletkezett eredményből javasolja.

## Mit hoz létre az AI

A blokk összefoglalóját. Forrása a most befejezett kártya eredménye; az új témát a mechanika nem találja ki. Öt elemet tartalmaz:

- **egy dolog**, úgy megnevezve, ahogy késznek látszik,
- **hossz**, 60 és 120 perc között, azzal, hogy mi fér bele és mi nem,
- **mi kell előkészíteni előre**: hozzáférések, adatok, anyagok, a kártya promptja,
- **mi lesz a végén kész**, tehát konkrét eredmény, nem „előrehaladt” vagy „folyamatban”,
- **mi lesz a maradékkal**, ami nem fér bele a blokkba, hogy ne maradjon döntés nélkül.

Ha kiderül, hogy az egy dolog valójában három, az AI ezt jelzi, és felajánlja, melyik tartozik az első blokkba. Három blokkra előre nem javasol felosztást.

## Aktív idő a várakozással szemben

Az AI-val tervezett blokk más felépítésű, mint az önálló munka blokkja, mert az idő egy részében az eszköz fut. Kutatás, ügynök, hosszabb generálás vagy adatfeldolgozás percektől több tíz percig tarthat, és az ember nem kell, hogy ott üljön mellette.

Az összefoglaló ezért három időtípust különböztet meg: az ember aktív munkáját, az AI futását és a várakozást másra. Az AI futás idejére javasolja, mit lehet közben csinálni, ami leggyakrabban ugyanannak az eredménynek a következő lépésének előkészítése. A nem kapcsolódó munkára ugrás megtöri a blokkot, még ha hasznos időnek is tűnik.

Ha a várakozás a blokk nagy részét kitöltené, a mechanika ezt egyből jelzi: ilyen feladat inkább a [Hagyja az AI-t dolgozni, amikor nem vagy ott](card:recurring-ai-task) kártyára való.

## Naptár

A mechanika előkészíti az esemény szövegét: a cím az egy dolog alapján, a hossz és a leírásba az előkészítendő dolgok. Az ember maga jegyezheti be.

A mechanika nem ír be semmit a naptárba vagy más megosztott rendszerbe engedély nélkül, és nem küld meghívót senkinek.

## Határok a kártyákhoz képest

| Mi ez nem | Hol van |
|---|---|
| Csapat számára fenntartott idő, ami vezetői döntést, törölt megbeszéléseket és mentort igényel | [Adjon a csapatnak blokkot egy valódi AI projekthez](card:ai-sprint) kártya |
| AI munka akkor, amikor az ember nincs jelen | [Hagyja az AI-t dolgozni, amikor nem vagy ott](card:recurring-ai-task) kártya |
| Projekt lépésekre és szerepekre bontása | [Készítsen AI-WBS-t a projekt első fázisához](card:ai-wbs-project) kártya |

A blokkot az ember maga állítja be, nem kell hozzá senki engedélye. Ez különbözteti meg a sprinttől, ahol az engedélyezés a munka lényeges része.

## Mit nem tartalmaz a mechanika

Koncentrációs útmutatókat, telefon-, értesítés- és környezetre vonatkozó ajánlásokat. A könyvtár a folyamatokat tanítja. Ilyen tanácsokból a mechanika prédikációvá válna a munkáról ahelyett, hogy egy konkrét blokk előkészítésére fókuszálna.

## Nyilvántartás

A check-inhez hozzáadható az információ, hogy létrejött a blokk összefoglalója. Ez nem önálló kártyateljesítés. A mechanika nem követi, hogy a blokk lezajlott-e.

## Első támogatott kártyák

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

További kártyák, amelyekhez kapcsolódó munka hosszabb mint tizenöt perc, például a `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` és `sjednotit-data-z-vice-zdroju`, a második hullám jelöltjei. A mechanika azonnali bevezetése a könyvtár felére zajt okozna a választásban.
