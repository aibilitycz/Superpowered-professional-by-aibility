# Állítson be többalkalmazásos munkafolyamatot: az AI átvisszi az adatokat helyetted

Az AI automatikusan átvisszi az adatokat, amelyeket egyébként alkalmazások között kézzel másolnál, például jelentkezéseket e-mailből táblázatba.

## Állítson be többalkalmazásos munkafolyamatot: az AI átvisszi az adatokat helyetted

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** kézzel másolt adatokkal.
## Mire jó ez

Egy hét alatt 23 jelentkezés érkezett a gyártási asszisztens pozícióra, és péntekig a gyártásvezetőnek meg kell kapnia a listát. Mindegyiket kézzel viszed át egy táblázatba, a jelentkezőknek válaszolsz, hogy megkaptad, és a tizenötödiknél veszed észre, hogy egy telefonszámot hibásan írtál be.

Ezt a munkát hívjuk [munkafolyamatnak](glossary:workflow) több alkalmazáson át, és az AI elvégzi helyetted: elolvassa az e-maileket, beírja az adatokat a táblázatba, és a táblázatból választervezeteket készít.
## Mit készíts elő

- Olyan munkát, ahol adatokat másolsz, például jelentkezéseket e-mailből táblázatba,
- Hozzáférést mindkét alkalmazáshoz; céges fiókban az AI-hoz való kapcsolódást néha az adminisztrátor engedélyezi,
- AI Cowork vagy Code módban; hol találod, azt a „Az eszközödben” blokk mutatja,
- Egy mappát a jövőbeli feladatoknak, például egy új, üres `Toborzás` mappát.
## Hogyan csináld

1. Nyisd meg az AI-t Cowork vagy Code módban a saját mappádban, és egy új csevegésbe illeszd be a promptot. A „Feladat:” sor után egy mondatban írd le, honnan veszi az adatokat, hová írja be, és mi következik.
2. Az AI csatlakoztatja a hiányzó alkalmazásokat; a bejelentkezést neked kell megerősítened. Ezután elvégzi az egész munkát, az e-maileket csak tervezetként menti el, te pedig közben mással foglalkozhatsz.
3. Két-három rekordot a célalkalmazásban hasonlíts össze a forrással, majd küldd el a tervezeteket. Írd meg az AI-nak, mit csináljon legközelebb másként, és ő kiegészíti vele a feladatot.
## AI gyakorlat

Illeszd be ezt a [promptot](glossary:prompt) az AI Cowork vagy Code módban, a saját mappádban megnyitva, és a legutolsó sor után írd be a saját munkádat:

Végezd el helyettem azt a munkát, ahol kézzel másolom az adatokat egyik alkalmazásból a másikba. A feladat a legutolsó sorban van.

Először derítsd ki, hogy a feladatban szereplő alkalmazásokhoz hozzáférsz-e, és tudsz-e írni a célalkalmazásba. Használd a rendelkezésre álló csatlakozókat. Ha valamelyik hiányzik vagy csak olvasni tud, csatlakoztasd az alkalmazást magad, például a Composio szolgáltatáson keresztül. Ha nekem kell valamit megtennem, például bejelentkezni, pontosan mondd meg, hova kell kattintanom, és várj. Ha itt nem lehet írni az alkalmazásokba vagy fájlokat menteni a mappába, azonnal szólj, és javasolj váltást.

Ezután végezd el az egész munkát. Nézd át a forrást, húzd ki az adatokat, és írd be a célalkalmazásba. Ha a táblázat vagy lista még nem létezik, hozd létre, és a feladat alapján javasolj oszlopokat. Ha az adat hiányzik a forrásból, ne találj ki semmit: hagyd üresen a mezőt, és jelöld meg a rekordot. Ha a beírás után e-mailek vagy üzenetek következnek, mentsd el őket tervezetként, én majd elküldöm.

Ezután írd be a jövőbeli feladatot a `postupy-mezi-aplikacemi.md` fájlba abban a mappában, ahol dolgozol. A ### címsor alatt, amely a munka nevét viseli, írd le, honnan veszed az adatokat, hová írod be, milyen adatokat, mi következik, és hogyan ismered fel a kész rekordokat. Ha a fájl már létezik, fűzd hozzá a munkát a végéhez.

A végén írd meg, hány rekordot vittél át, hol találom őket, melyeket nem tudtad kezelni és miért, valamint hol van elmentve a feladat. Miután átnézem az eredményt és megmondom, mit csinálj másként, javítsd ki, és egészítsd ki a feladatot.

Feladat:

## Az eszközödben

### Microsoft Copilot
Illeszd be a promptot a Copilot Cowork-ba a `copilot.cloud.microsoft` oldalon (a Chat mellett fent a Cowork kapcsolóval), az Outlook közvetlenül olvassa. Az Excel OneDrive-ról vagy SharePointról a + gombbal csatolható, az új táblázatot a Cowork automatikusan létrehozza. Mappára nincs szükség, a jövőbeli feladatokat Cowork skillként menti; az ütemezett feladatok az Automations oldalon találhatók. CRM és más alkalmazásokat a Browse plugins segítségével adhatod hozzá, ha az admin engedélyezte.

### ChatGPT
A Code mód a ChatGPT Codex-ben érhető el a ChatGPT asztali alkalmazásban: válaszd a Codex-et, új csevegést, és nyisd meg a mappát (open and folder). A OneDrive-on lévő táblázat legyen egy olyan mappában, amelyet a OneDrive szinkronizál a gépeddel, így a Codex közvetlenül írhat bele. Az Outlookot a Plugins beállításoknál csatlakoztathatod; ha céges fiókban hiányzik, az admin kapcsolja be. Az ütemezett feladatok a bal oldali panelen a Scheduled alatt vannak.

### Claude
A Claude asztali alkalmazásban nyisd meg a Cowork vagy Claude Code módot, és válassz mappát; mindkettő fizetős csomagban elérhető. A csatlakozókat a bal oldali panelen a Customize, Connectors alatt találod, a hiányzókat az AI automatikusan csatlakoztatja. Az ütemezett feladatok a Cowork bal paneljén a Scheduled alatt vannak.

### Gemini
Az ismétlődő munkákat Google alkalmazások között a Workspace Studio (`studio.workspace.google.com`) építi fel: válaszd a Describe it with AI-t, és egy mondatban írd le. A Test run végrehajtja a tényleges lépéseket, a Turn on bekapcsolja a folyamatot, amely aztán önállóan fut. Studio nélkül a Gemini alkalmazásban írd be: „@Gmail írd ki a heti jelentkezéseket táblázatként”, és mentsd el az Export to Sheets gombbal.
## Mi az a többalkalmazásos munkafolyamat

A workflow angol szó több lépésből álló munkafolyamatot jelent, amelyben az egyik lépés eredménye a következő bemenete. Ahogy az AI átvisszi a jelentkezéseket webes űrlapról a CRM-be, azaz az ügyfélkezelő rendszerbe, vagy 33 ügyféltől érkező e-mailből kigyűjti a táblázatba a 27 megválaszolatlan kérdést.

A csatlakozót, amelyen keresztül az AI belép az alkalmazásba Cowork vagy Code módban, az AI maga kapcsolja be, ahogy a [Csatlakoztassa a csatlakozót](card:plugin-connector) kártya mutatja; a normál csevegésben a beállításoknál kapcsolható be. Attól függően, hogy a csatlakozó mit tud, az AI csak olvassa az alkalmazást, vagy ír is bele.

Ha nincs csatlakozó az alkalmazáshoz, vagy csak olvasni tud, az AI a Composio szolgáltatást használja. Ezen keresztül több mint ezer alkalmazáshoz kapcsolódik, például Outlook, Gmail, Excel, Google Táblázatok, Airtable vagy CRM. Cowork vagy Code módban az AI maga állítja be. Te létrehozol egy fiókot, és minden alkalmazáshoz külön engedélyezed a hozzáférést, így a Composio csak az általad jóváhagyott alkalmazásokat látja. Az alapfiók ingyenes, bankkártyát nem kér. Céges fiókban előtte kérdezd meg az IT-t, hogy használhatod-e.

A `postupy-mezi-aplikacemi.md` egy egyszerű szöveges fájl a munkáid feladataival több alkalmazás között. Minden munkának saját címsora van, így legközelebb csak a nevét és a fájl nevét kell megadnod az AI-nak. A `.md` kiterjesztés azt jelenti, hogy [Markdown](glossary:markdown) formátumban íródott, amelyben a sor elején álló `###` jelek címsorokat jelölnek.
## Legyen a munka automatikusan indítható

Az ismétlődő napi vagy heti munkák automatikusan is elindíthatók. Illeszd be az AI-ba, amely tud ütemezett feladatokat kezelni, ezt a feladatot, csak a munka nevét cseréld a sajátodra, és kérd meg, hogy hozzon létre belőle ütemezett feladatot. Hol találod az eszközödben, azt a „Az eszközödben” blokk mutatja.

```text
Minden munkanap 8:00-kor végezd el a „Jelentkezések táblázatba” munkát a `postupy-mezi-aplikacemi.md` fájl alapján. Csak az azóta érkezett új adatokat dolgozd fel. Összefoglalóban írd meg, hány rekord érkezett és hány tervezet vár a postaládában. Ha nincs új adat, ne írj semmit.
```

A feladat a mappában lévő fájlt olvassa a számítógépen, ezért csak akkor fut, ha a számítógép be van kapcsolva és az AI alkalmazás nyitva.
## Példa

Lucie, egy gépipari cég HR-es munkatársa gyártási asszisztens pozícióra keres embert. 2026. október 5. és 9. között 23 jelentkezés érkezett e-mailben. 2026. október 12-én hétfőn megnyitja az AI-t Cowork módban a `Toborzás asszisztens` mappában, beilleszti a promptot, és a legutolsó sor után beírja:

```text
Az október 5. után érkezett gyártási asszisztens pozícióra jelentkezések e-mailjeiből írd be az Excel SharePointon lévő Jelentkezők táblázatba a nevet, telefont, tapasztalatot években, lehetséges kezdést és az e-mail hivatkozását. Minden jelentkezőnek készíts választervezetet, hogy megkaptuk a jelentkezést, és 10 munkanapon belül jelentkezünk.
```

Az AI csatlakoztatja az Outlookot és az Excelt, Lucie megerősíti a bejelentkezést a céges fiókjába, és az AI átnézi a 23 e-mailt. Ezután visszaküldi:

```text
23 jelentkezést átvitt a Jelentkezők táblázatba.
- 21 rekord teljes.
- 2 jelentkezés nem tartalmaz tapasztalatot, a sorok sárgával jelölve a táblázatban.
- 23 választervezet vár az Outlook tervezetek között.
A feladat el van mentve a `postupy-mezi-aplikacemi.md` fájlban a Jelentkezések táblázatba címszó alatt.
```

Lucie megnyitja a táblázatot, és két jelentkező esetében összeveti a telefont és a tapasztalatot az e-maillel; egyezik. Ezután Lucie azt írja az AI-nak: „Adj hozzá egy oszlopot, hogy honnan értesültek a pozícióról, és a hiányos jelentkezéseknél kérdezd meg a tapasztalatot a válaszban.” Az AI kiegészíti a táblázatot és a két tervezetet, és a feladatot így módosítja a fájlban:

```text
### Jelentkezések táblázatba
- Forrás: e-mailek a nyitott pozícióra érkezett jelentkezésekről.
- Cél: Jelentkezők táblázat Excelben SharePointon, egy sor egy jelentkezőnek.
- Adatok: név, telefon, tapasztalat években, lehetséges kezdés, honnan értesült, e-mail hivatkozás.
- Következő lépés: választervezet, hogy megkaptuk a jelentkezést, és 10 munkanapon belül jelentkezünk. Ha hiányzik a tapasztalat, kérdezd meg a válaszban.
- Kész rekordok: az e-mail, amelyhez már van sor a táblázatban, ne dolgozd fel újra.
```

Lucie átnézi a tervezeteket az Outlookban, és elküldi őket. Ha csütörtökön további négy jelentkezés érkezik, csak annyit ír: „Készítsd el a jelentkezéseket a táblázatba a `postupy-mezi-aplikacemi.md` alapján”, és az AI csak az új négyet dolgozza fel.
## Ha elakadnál

- **Az AI nem fér hozzá az alkalmazáshoz:** kérdezd meg, van-e csatlakozó az alkalmazáshoz. Ha van, de céges fiókban nem lehet bekapcsolni, az AI ír egy rövid kérést az adminnak. Ha nincs csatlakozó, engedd, hogy az AI a Composio-n keresztül csatlakoztassa; céges fiókban előtte kérdezd meg az IT-t.
- **Az AI olvassa az alkalmazást, de nem ír bele:** a csatlakozó csak olvasni tud. Cowork vagy Code módban írd meg az AI-nak, hogy csatlakoztassa az alkalmazást a Composio-n keresztül. A normál csevegésből válts [Cowork vagy Code módra](card:when-chat-is-not-enough).
- **Az adatok a célban nem egyeznek a forrással:** mutass az AI-nak egy hibás rekordot, és mondd meg, hol találja a helyes adatot. Javítsa ki az összes hasonló rekordot, és egészítse ki a szabályt a feladatban.
- **Duplikált rekordok a táblázatban:** mondd meg az AI-nak, hogy törölje a duplikátumokat, és egészítse ki a feladatot azzal, hogyan ismeri fel a kész rekordokat, például az e-mail hivatkozás alapján.
## Mi lesz kész

Az adatokat, amelyeket egyébként kézzel másoltál volna, a célalkalmazásban találod, két-három rekordot összevetettél a forrással, a tervezeteket átnézted és elküldted. A feladat a módosításaid szerint a `postupy-mezi-aplikacemi.md` fájlban van, így legközelebb egy mondattal indíthatod el a munkát.
## Mi következik

Ha az adatátvitel után további AI munkát szeretnél, például a jelentkezők táblázatából interjúalapanyagot készíteni, add hozzá a feladathoz, és az egész folyamatot [mentd skillként](card:create-skill-from-proven-process). Ha azt szeretnéd, hogy az ütemezett munka figyelje a saját hibáit és jelentse azokat, állítsd be [ütemezett feladatként](card:recurring-ai-task).
## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## AI munkafolyamat

**Mi ez:** Több egymásra épülő lépés ismételhető végrehajtása, ahol az egyik lépés kimenete a következő lépés bemenete. Az egyes lépéseket emberek, AI vagy különböző eszközök is végezhetik.

**Mi nem ez:** Nem jelent automatikusan automatizálást vagy ügynököt. A lépéseket irányíthatja ember, és az átadás különböző környezetek között is történhet.

**Miért van rá szüksége a hallgatónak:** Segít az önállóan elsajátított AI feladatokat olyan folyamattá összekapcsolni, amely tesztelhető, fejleszthető, és később akár automatizálható is.

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
