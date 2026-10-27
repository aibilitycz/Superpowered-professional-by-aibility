# Hagyja, hogy az AI letöltse az élő adatokat: aktuális számok forrással és dátummal

Az AI maga tölti le a cégekről, versenytársakról vagy piacról szóló aktuális számokat a webről, minden adat mellett megadva a forrást és a dátumot.

## Hagyja, hogy az AI letöltse az élő adatokat: aktuális számok forrással és dátummal

**Nehézség: közepes.**\
**Idő: kb. 15 perc** egy kérdéssel, amelyhez hiányoznak a számok.
## Mire jó

Csütörtökön új beszállítóval ír alá szerződést, és tudni szeretné, mekkora a cég, növekszik-e, és nincs-e problémája. A chat általában egy általános bekezdést ír a weboldaláról, az adatokat pedig fél órán át maga keresi a nyilvántartásokban.

Hasznos, ha az AI maga tölti le az adatokat közvetlenül a forrásból, mindenhez megadja a linket és a dátumot, és elmenti a folyamatot, így a következő beszállítót egy mondattal ellenőrizheti.
## Mit készítsen elő

- egy munkahelyi kérdést, amelyhez aktuális számokra van szüksége, és hogy mit dönt ezek alapján,
- az AI-t, amelyet a munkahelyén használ; hol kezdje el, azt a „Az Ön eszközében” blokk mutatja,
- AI-t [módban](glossary:workmode) Cowork vagy Code, csak ha a normál chat nem talál adatokat.
## Hogyan csinálja

1. Írja meg az AI-nak, milyen számokra van szüksége és mit dönt ezek alapján. Az AI megkeresi, hol vannak az adatok, és maga tölti le őket. Ha bejelentkezés vagy IT-adminisztrátor kell, szólni fog.
2. Nyissa meg a legfontosabb adat forrását, amelyre a következtetés alapul, és ellenőrizze, hogy a forrás valóban tartalmazza-e. Ha nem stimmel, írja meg az AI-nak, hogy javítsa a táblázatot.
3. Egy új chatben adja meg ugyanazt a feladatot egy mondatban, például egy másik cégre. Cowork vagy Code módban nyisson új chatet ugyanabban a mappában.

A táblázatba csak azok a számok kerüljenek, amelyek alapján dönt.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amelyet a munkahelyén használ, és az utolsó sorba írja be a kérdését:

Szükségem van aktuális webes adatokra a jelenlegi feladatomhoz. Amit kell és mire, az az utolsó sorban van.

Először derítsd ki, hol vannak ezek az adatok: nyilvános nyilvántartás vagy statisztika, cég weboldala, álláshirdetések, hirdetési könyvtár, kulcsszókereső eszköz vagy közösségi profil. Ha van közvetlen forrás, onnan vedd az adatokat; az azokat idéző cikkeket csak akkor használd, ha nincs közvetlen forrás.

Töltsd le az adatokat magad. A nyilvános oldalakat webes kereséssel olvasd. Ha az adatok egy böngészőben elérhető eszközben vannak (például kulcsszótervező vagy hirdetési könyvtár), és tudod kezelni a böngészőt, járd be ott. Ha az adatok adatbázisban vannak, amelyhez adatkapcsoló (MCP szerver) kell, használd azt, ami rendelkezésre áll. Ha nincs, és tudod itt csatlakoztatni, csatlakoztasd; ahol be kell jelentkezni, pontosan mondd meg, hol, és várj. Ha nem tudod csatlakoztatni, írd meg, melyik forrás lenne megfelelő és ki tudja bekapcsolni, és addig add vissza, amit a nyilvános weben találsz. Ha a forrás fizetős, előtte mondd meg az árat.

Az eredményt tedd táblázatba, oszlopok: adat, szám, forrás linkje és az adat érvényességi dátuma. Amit nem találsz, jelöld hiányzóként, és ne becsülj semmit. A táblázat alá két mondatban írd le, mit jelent az adat a feladatom szempontjából, melyik számot ellenőrizzem a forrásban és pontosan hol találom.

Ha mappában dolgozol, mentsd a táblázatot a projekt mappájában `zive-data.md` fájlba a mai dátummal és a feladat nevével a cím alatt; ha nincs fájl, hozz létre egyet. Végül mentsd el a folyamatot skillként: honnan veszed az adatokat, hogyan töltöd le őket és milyen a táblázat, hogy legközelebb elég legyen egy mondat, például „töltsd le ugyanazokat az adatokat másik cégre”. Ha skillt nem lehet menteni, mentsd el a folyamatot az eszköz memóriájába vagy saját utasításaiba.

Amit kell és mire:

## Az Ön eszközében

### Microsoft Copilot
Illessze be a promptot a Copilot Chatbe a `copilot.cloud.microsoft` címen; a fájl- és skill sorokat átugorja. Ha a válaszban hiányoznak a webes linkek, kapcsolja be a keresést a Beállítások, Személyre szabás alatt, ha nem megy, az adminisztrátor tilthatta le. A folyamatot megjegyzi a „Jegyezd meg ezt a folyamatot” mondat után, a Cowork skillként menti és a feladatokat az Automations oldalon tervezi. A fizetős adatokat a Copilot az adminisztrátor által biztosított kapcsolón keresztül hozza.

### ChatGPT
Illessze be a promptot a normál chatbe; a fájl- és skill sorokat átugorja. A ChatGPT maga keres a weben, ha a számoknál hiányoznak a linkek, írja be a / jelet és válassza a Search-t. A folyamatot megjegyzi a „Jegyezd meg ezt a folyamatot” mondat után; ha van memóriája, azt a Beállítások, Személyre szabás alatt látja. A nyilvános nyilvántartásokhoz nem kell kapcsoló, a fizetős adatbázisokhoz az adminisztrátor a Plugins alatt adja hozzá, a tervezett feladatok a Scheduled alatt vannak.

### Claude
Illessze be a promptot a Coworkba a projekt mappájában vagy chatbe; ha a számoknál hiányoznak a linkek, kapcsolja be a Web search-t a + alatt. A hirdetési könyvtárat vagy kulcsszótervezőt a Cowork a Chrome-ban a Claude in Chrome kiterjesztéssel járja be. Az adatkapcsolót a Team és Enterprise tarifákban a szervezet tulajdonosa adja hozzá (Organization settings, Connectors). A Claude a folyamatot skillként menti, a feladatok a Scheduled alatt vannak.

### Gemini
Illessze be a promptot a normál chatbe; a Gemini maga keres a Google-on, a fájl- és skill sorokat átugorja. Saját adatkapcsolót munkahelyi fiókkal nem adhat hozzá, ezért a speciális adatbázisokból az adatokat AI-nak Cowork vagy Code módban kell letöltenie, vagy kérje az IT segítségét. A folyamatot mentse skillként (Customize, Skills), a tervezett feladatokat a Scheduled alatt találja.
## Mik az élő adatok és az adatkapcsoló

Az élő adatok olyan számok, amelyek naponta vagy hetente változnak, például a cég árbevétele, fizetésképtelensége vagy a versenytársak aktuális hirdetései. Az AI önmagában nem ismeri ezeket, mert régebbi adatokon tanult, és letöltés nélkül csak becsüli őket. A nyilvános oldalakat, például a cégnyilvántartást vagy a cég weboldalát webes kereséssel olvassa. Ha több tucat forrásból összehasonlító jelentés kell, használja a [Deep Research](card:deep-research)-t.

Az adatok egy része nem található meg a szokásos oldalakon. A kulcsszavak keresettsége, azaz hányan keresik havonta, vagy a versenytárs weboldalának látogatottsága speciális eszközök adatbázisaiban van, és az AI adatkapcsolón keresztül fér hozzájuk. A beállításokban ezt gyakran MCP szervernek hívják; az [MCP](glossary:mcp) egy technikai szabvány, amelyen keresztül az AI csatlakozik alkalmazásokhoz és adatforrásokhoz. A kapcsolóhoz általában adatforrás-szolgáltatói fiók kell, és egyes források lekérdezésenként fizetősek. Ha az eszközhöz böngészőben hozzáfér, például a Google Ads kulcsszótervezőjéhez, az AI a [böngészővezérlésen](card:browser-control) keresztül is bejárhatja azt kapcsoló nélkül. Egyébként az adatokat hiányzóként jelöli, és megmondja, ki tudná bekapcsolni a kapcsolót.

Az AI elmenti a folyamatot [skillként](glossary:skill), azaz útmutatóként, amelyet legközelebb megtalál, ha hasonló feladatot ad meg. Az eredményeket a projekt mappájában lévő `zive-data.md` egyszerű szövegfájlba menti, ahol a legfrissebb letöltés van felül.
## Hagyja, hogy az adatok maguktól töltődjenek le

Azokat az adatokat, amelyeket rendszeresen figyel, például kulcsbeszállítók fizetésképtelenségét vagy a versenytársak hirdetéseit, az AI hetente maga is letöltheti, és csak a változásokat jelenti. Illessze be ezt a feladatot az AI-ba, amely tud ütemezett feladatokat kezelni, és kérje meg, hogy hozzon létre ütemezett feladatot. Hol találja meg az eszközében, azt a „Az Ön eszközében” blokk mutatja.

```text
Minden hétfőn 8:00-kor töltsd le az előző mentett folyamat szerint ugyanazokat az adatokat, és hasonlítsd össze a `zive-data.md` legutóbbi letöltésével vagy az előző feladat eredményével. Ha fájlokkal dolgozol, írd felül az új adatokat a mai dátum alatt felülre. Csak a változásokat írd meg nekem, és hogy mit jelentenek a feladatom szempontjából; ha nincs lényeges változás, elég egy mondat.
```

Ha a feladat a számítógépén lévő fájlokkal dolgozik, csak akkor fut, ha a számítógép be van kapcsolva és az alkalmazás nyitva van.
## Példa

Lucie egy logisztikai cég beszerzését vezeti, és 2026. október 22-én csütörtökön keretszerződést ír alá egy új fuvarozóval. Hétfőn az utolsó sorba a promptban ezt írja:

```text
Autodoprava Lipan, s.r.o.: mennyi ideje létezik a cég, milyen az árbevétele, és nincs-e fizetésképtelensége vagy ÁFA-problémája. Csütörtökön velük írom alá a keretszerződést a szállításra.
```

Az AI átnézi a cégnyilvántartást, a fizetésképtelenségi nyilvántartást és az ÁFA-fizetők regisztrációját. A `zive-data.md`-be ezt írja:

```text
### 2026-10-19: Autodoprava Lipan, s.r.o., aláírás előtt 10. 22.
| Adat | Szám | Forrás | Érvényes |
|---|---|---|---|
| Cég alapítása | 2014 | or.justice.cz, cégnyilvántartás kivonat | 2026. 10. 19. |
| Árbevétel | 86 millió CZK, előző évben 79 millió CZK | or.justice.cz, mérleg a dokumentumgyűjteményben | 2025 |
| Fizetésképtelenség | nincs | isir.justice.cz | 2026. 10. 19. |
| Megbízhatatlan ÁFA-fizető | nem | ÁFA-fizetők nyilvántartása | 2026. 10. 19. |
| Járművek száma | hiányzik, egyik forrás sem adja meg | | |

Az árbevétel 9%-kal nőtt, és a nyilvántartások szerint nincs probléma a céggel. Ellenőrizendő: árbevétel a mérleg eredménykimutatásában, az áruk és szolgáltatások értékesítésének sora.
```

Lucie megnyitja a mérleget a linkről, megtalálja az árbevétel sort az eredménykimutatásban, és a szám stimmel. Egy héttel később egy új chatben csak annyit ír: „Ugyanígy ellenőrizd a keddi tárgyalásunk alanyát”, és ugyanilyen táblázatot kap. Egy marketinges kolléga ugyanezzel a prompttal tölti le a versenytársak hirdetéseit és a kulcsszavak keresettségét az adminisztrátor által bekapcsolt adatkapcsolón keresztül.
## Ha elakad

- **Az AI számokat ír link nélkül vagy „megközelítőleg”:** nem keresett a weben, csak memóriából becsül. Kapcsolja be a keresést a „Az Ön eszközében” blokk szerint, és írja: „Minden számhoz adj meg forráslinket és dátumot; amit nem találsz, jelölj hiányzóként.”
- **Az AI azt válaszolja, hogy nincs hozzáférése az adatokhoz:** az adatok adatbázisban vannak, és az AI-nak adatkapcsolóra van szüksége. Kérjen az AI-tól rövid kérést a céges fiók adminisztrátorának: melyik forrást és mire kell. Code módban az AI maga csatlakoztatja; hogyan válts erre, azt a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) kártya mutatja.
- **Az adat csak PDF-ben vagy szűrős oldalon van:** kérje meg az AI-t, hogy nyissa meg a PDF-et közvetlenül a linkről. Az olyan oldalt, amelyet végig kell kattintani, például a Meta hirdetési könyvtárát, járja be az AI a böngészőben, ahogy a [Browser control](card:browser-control) kártya mutatja.
- **Az AI nem találja a folyamatot új chatben:** kérdezze meg, mit jegyzett meg a folyamatról és hova mentette. Ha nincs memóriája, mentse el skillként Cowork vagy Code módban, majd nyisson új chatet ugyanabban a mappában.
## Mi lesz kész

Megvan a feladatához illeszkedő aktuális számokat tartalmazó táblázat, minden adat mellett link és dátum, és a legfontosabb számot ellenőrizte a forrásban. Az AI elmentette a folyamatot skillként vagy memóriába, és új chatben egy mondatra lefordítva letöltötte az adatokat.
## Mi következik

Ha azt szeretné, hogy a rendszeres áttekintés megbízhatóan érkezzen és maga jelezze a hibákat, folytassa a [ütemezett feladathoz](card:recurring-ai-task). Hogyan készítsen más sikeres munkából [skillt](card:create-skill-from-proven-process), azt külön kártya mutatja.
## MCP

**Mi ez:** Egy nyílt műszaki szabvány (Model Context Protocol), amelyen keresztül az AI csatlakozik alkalmazásokhoz és adatforrásokhoz. Az alkalmazás vagy az adat szolgáltatója MCP szervert kínál, és az AI ezen keresztül olvassa az adatokat vagy hajt végre engedélyezett műveleteket. Az eszközbeállításokban az ilyen kapcsolatot gyakran csatlakozónak vagy MCP szervernek nevezik.

**Mi nem ez:** Nem önálló alkalmazás vagy AI modell. Maga a szabvány nem tölt le semmit; szükség van egy szolgáltató szerverére, gyakran fiókra nála, valamint egy engedélyre, amelyet ember vagy rendszergazda aktivál.

**Miért van rá szüksége a tanulónak:** Segít megérteni, mikor ér el az AI a nyilvános weben kívüli adatokhoz, és ki felelős a csatlakozás engedélyezéséért.

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
