# Használja a vibe codingot: AI eszközt épít kollégáinak

A kollégák maguk számolják ki az ajánlat árát egy kis eszközben, amelyet az AI az Ön táblázatából készít.

## Használja a vibe codingot: AI eszközt épít kollégáinak

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** az árlistával és egy kész esettel.
## Mire jó

Az értékesítési kollégák hetente többször hívnak, hogy számolja ki nekik az ajánlat árát.
Az árlista és a képletek csak Önnek ismertek. Múlt héten szabadságon volt,
és egy kolléga hétvégi felár nélkül küldte el az árat az ügyfélnek.

A [vibe coding](glossary:vibe-coding), azaz leírás alapú programozás segítségével
csak leírja, mit kell számolni, és az AI elkészíti az eszközt, ahol a kolléga beírja a vendégek számát,
és azonnal látja az árat részletezve.
## Mit készítsen elő

- az árlista, amelyből a kollégák számolnak, megosztott mappában, amely az Ön gépén is elérhető,
- ugyanabban a mappában egy kész eset a helyes eredménnyel, például egy elküldött ajánlat,
- egy kolléga, aki elsőként kipróbálja az eszközt,
- AI Cowork vagy Code módban; hol találja, azt a „Az Ön eszközében” blokk mutatja.
## Hogyan csinálja

1. Nyissa meg az AI-t Cowork vagy Code módban a megosztott árlistás mappában, és illessze be a promptot.
   Az utolsó sorba írja be, mit kell számolnia az eszköznek, ki fogja használni, és hol van a kész eset.
2. Az AI elmenti az eszközt `kalkulacka.html` néven. Kattintson rá duplán, írja be a kész eset adatait, és hasonlítsa össze az eredményt;
   ha valami nem stimmel vagy nem működik, írja meg az AI-nak, és javítsa ki.
3. Mondja meg a kollégának, hol találja a `kalkulacka.html`-t a megosztott mappában, hogy kiszámolja a következő esetét.
   Amit nem tud megoldani, küldje el az AI-nak a kolléga szavaival.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban,
nyissa meg az árlistás mappáját, és az utolsó sorban írja be, mit kell számolnia az eszköznek, ki használja, és melyik fájlban van a kész eset.
Hogy néz ki egy ilyen sor, azt a Példában látja.

Készíts egy kis eszközt a számításhoz, amit a kollégák ismételten kézzel végeznek a táblázatban, amit maguk is megnyithatnak. Az utolsó sorban megtalálod, mit kell számolnia, ki használja, és melyik fájlban van a kész eset a helyes eredménnyel. Ha nem a megosztott árlistás mappában dolgozol, azonnal szólj.

Nézd át az árlistát vagy a mappában lévő táblázatot, és derítsd ki az összes számítási szabályt: árak, felárak, kedvezmények, kerekítés és feltételek. Ha egy szabályt nem ismersz fel a képletekből vagy az adatok ellentmondanak, kérdezz meg, és mutasd meg példával.

Az eszközt egy fájlba, kalkulacka.html néven mentsd el ugyanabba a mappába, ahol az árlista van. Dupla kattintással nyíljon meg egy szokványos böngészőben, telepítés és internet nélkül, ezért az árlistát közvetlenül építsd be. Felül legyenek a mezők, amelyeket a kolléga kitölt, alattuk az eredmény részletezve, hogy látható legyen, hogyan jött ki az összeg, és egy gomb, amivel a részletezést másolni lehet, hogy a kolléga beilleszthesse e-mailbe vagy ajánlatba. A feliratokat a kollégák által használt szavakkal írd. Ha egy mező üres vagy értelmetlen, az eszköz érthetően jelezze, mit kell javítani.

Számold ki az eszközben a kész esetet, és hasonlítsd össze a helyes eredménnyel. Ha eltérés van, találd meg a hibás szabályt, javítsd, és hasonlítsd össze újra. Írd meg, hol találom a kalkulacka.html-t, és mit kell beírnom, hogy ellenőrizhessem az eredményt.

A számítási szabályokat egyszerű szavakkal írd le a kalkulacka-pravidla.md fájlba ugyanabban a mappában, az árlista dátumával és a kész esettel, amin az eszközt ellenőrizted. Az AGENTS.md fájlba ebben a mappában írd be a szabályt: „Ha változik az árlista vagy a számítási szabály, módosítsd a kalkulacka.html-t és a kalkulacka-pravidla.md-t. Ezután számold ki a kész esetet az új árlistával, és írd meg, mennyivel és mely tételek miatt tér el az eredmény az eredetitől.” Ha az AGENTS.md nem létezik, hozd létre. Gondoskodj róla, hogy az AGENTS.md-t minden munkakezdéskor elolvasd ebben a mappában; Coworkban ezt írd be a mappa utasításaiba.

Mit kell számolnia az eszköznek, ki használja, és melyik fájlban van a kész eset:

## Az Ön eszközében

### Microsoft Copilot
A Copilot Cowork a `copilot.cloud.microsoft`-on az új fájlokat a saját OneDrive Cowork mappájába menti, nem a megosztott mappájába. Csatolja hozzá az árlistát és a kész esetet a + gombbal, illessze be a promptot, és írja hozzá: „Készíts kalkulátort Excel munkafüzetként, nem kell a mappában dolgozni.” A munkafüzetet helyezze át a megosztott mappába, és küldje el a kollégáknak a linket; a szabályt a Cowork skillként menti.

### ChatGPT
A Code mód a ChatGPT Codex-ben érhető el a ChatGPT asztali alkalmazásban: válassza a Codexet, és nyissa meg a megosztott árlistás mappát (open a folder). A Codex közvetlenül oda menti a `kalkulacka.html`-t, és a szabályt az `AGENTS.md`-be írja.

### Claude
A Claude asztali alkalmazásban nyissa meg a Cowork vagy Claude Code módot a megosztott árlistás mappával. Az AI közvetlenül oda menti a `kalkulacka.html`-t; Coworkban a szabályt a mappa utasításaiba írja.

### Gemini
A Gemini Canvasban építi az eszközt: a Gemini alkalmazásban válassza a + alatt a Canvas-t, csatolja az árlistát és a kész esetet, majd illessze be a promptot. Ha azt írja, nem a mappában dolgozik, válaszoljon: „Folytasd a Canvasban”, és tesztelje az esetet előnézetben. A kollégáknak küldje el a Share & export és Share funkcióval; aki megkapja a linket, látja az árlistát is. Árlista változásakor írja ugyanabba a csevegésbe, hogy az eszköz módosítsa magát.
## Mi az a vibe coding

A vibe coding az angol neve a leírás alapú programozásnak: a kódot az AI írja, Ön egyszerű mondatokkal irányítja.
Leírja, mit kell számolnia az eszköznek, az AI megírja a kódot, és Ön kipróbálja az eszközt egy ismert helyes eredményű eseten.
Nem kell programoznia, és az eszköz csak számol, így a táblázatban vagy a vállalati rendszerekben semmit nem változtat.
Alkalmas bármire, amit mindig ugyanazokkal a szabályokkal számolnak: ajánlat ára az árlistából, utazási költségtérítés, céges rendezvény költségvetése vagy műszaklétszám.
Az eszközbe csak azok a mezők kerüljenek, amelyeket a kollégák ténylegesen kitöltenek, és az az eredmény, amelyet továbbítaniuk kell; további funkciókat csak kérésre adjon hozzá.

Ez a kártya eszköze egy weboldal, amely számol. A `kalkulacka.html` fájl böngészőben nyílik meg, mint bármely más oldal,
csak a kollégának nem kell internet vagy AI hozzá. Egy egyszerű chat is ír eszközt, de nem menti a mappába, és árlista változáskor nem módosítja.

Ellentétben a [Pošlete odkaz místo přílohy](card:web-page-output) kártya oldalával, amely mindenkinek ugyanazt mutatja, az eszközbe a kolléga beírja a saját adatait, és saját eredményt kap.
Ha csak egy választ szeretne az adatokból magának, elég az [adatok megkérdezése](card:prace-s-daty).

Amíg az eszköz csak az árlista másolatából számol, és a kolléga maga olvassa az eredményt, azonnal adhatja a kollégáknak;
ha vállalati rendszerbe kell írnia, például CRM-be, vagy az ügyfelek nyitják meg, előbb egyeztessen a rendszer adminisztrátorával.

A `kalkulacka-pravidla.md` és az `AGENTS.md` egyszerű szövegfájlok, amelyeket az AI maga ír, nem kell megnyitnia őket.
Az `AGENTS.md` tartalmazza az AI szabályait a megosztott mappában, amelyet az AI minden munkakezdéskor elolvas.
## Tartsa az eszközt naprakészen az árlistával

Az `AGENTS.md` szabály biztosítja, hogy az AI minden árlistaváltozás után módosítsa az eszközt és a szabályokat, és megmutassa, hogyan változott a kész eset ára.
Ha januártól új árlista van, mentse ugyanabba a mappába, és írja be:

```text
2027.01.01-től új árlista érvényes: cenik-2027.xlsx. Módosítsd az eszközt az új árlista szerint, és írd meg, mely árak változtak.
```

Mivel az eszköz a megosztott mappában van, a kollégák a módosítás után azonnal az új verziót nyitják meg, nem kell semmit küldeni.
## Példa

Petra egy brnoi catering cég értékesítési asszisztense. Az értékesítők egy táblázatban számolják a raut árát: személyenkénti menü, egy pincér 20 vendégre, szombaton és vasárnap 15% felár, és 30 Kč/km oda-vissza szállítás.
2026.10.13-án az AI-t Cowork módban megnyitja a megosztott „Nabídky” mappában, ahol a `cenik-2026.xlsx` és egy múlt heti ajánlat van a boskovici könyvelőirodának: 80 vendég szombaton 2026.10.24-én, 42 km Brnótól, 52 200 Kč ÁFA nélkül.
Beilleszti a promptot, és az utolsó sorba ezt írja:

```text
A raut ára a cenik-2026.xlsx alapján az értékesítőknek, akik telefonon mondják az ügyfeleknek. A kész eset a nabidka-boskovice.pdf.
```

Első próbálkozásra a kalkulátor 52 578 Kč-t mutat. Összehasonlítva az AI észreveszi, hogy a hétvégi felár a szállításra is számít, javítja, és az ajánlatban szereplővel egyező összeget kap.
Petra megnyitja az eszközt, beírja ugyanazt a rautot, és a gombbal kimásolja a részletezést:

```text
Raut Standard, 80 vendég × 450 Kč: 36 000 Kč
Kiszolgálás, 4 pincér × 1 800 Kč: 7 200 Kč
Szombati felár 15 %: 6 480 Kč
Szállítás 42 km oda-vissza: 2 520 Kč
Összesen ÁFA nélkül: 52 200 Kč
```

Ezután megírja Ondřejnek, hogy a „Nabídky” mappában lévő kalkulátorral számolja ki az éppen aktuális esküvőt.
Ondřej visszaírja, hogy nem tudta, a kilométereket csak oda vagy oda-vissza kell-e beírni.
Petra elküldi ezt az AI-nak, és a mező neve most „Távolság Brnótól, egy út (km)”.
## Ha elakad

- **Az AI azt állítja, hogy elmentette az eszközt, de a mappában nincs:** valószínűleg normál chatben dolgozik, ami nem tud fájlokat menteni.
  Váltson [Cowork vagy Code](card:when-chat-is-not-enough) módra, és nyissa meg ott a megosztott árlistás mappát.
- **Az AI szabályt kér, amit Ön sem ismer:** kérje meg, hogy mutassa meg a táblázatból származó képletet, amiből a szabályt következteti, és számoljon egy esetet.
  Ha így sem tudja, kérdezze meg azt a kollégát, aki a legtöbbet számol a táblázattal.
- **A kolléga kódot lát vagy nem nyitja meg az eszközt:** töltse le a `kalkulacka.html`-t a gépére, és nyissa meg duplakattintással, ne OneDrive vagy Teams weboldalon keresztül.
  Küldhet linket is a kollégáknak: kérje meg az AI-t, hogy készítsen az eszközből megosztott linkes oldalt, és csak a cég dolgozóival ossza meg, mint a [Pošlete odkaz místo přílohy](card:web-page-output) kártyán.
- **Az eszköz másként számol, mint a táblázat:** írja meg az AI-nak, mit adott meg, mit mutatott az eszköz, és mi a helyes eredmény.
  Az AI megtalálja a hibás szabályt, és javítja az eszközben és a `kalkulacka-pravidla.md`-ben.
## Mi lesz kész

A megosztott mappában van egy `kalkulacka.html` eszköz, amely ugyanúgy számolta ki a kész esetet, mint az Ön táblázata, és az első kolléga tudja, hol találja.
Mellette van a `kalkulacka-pravidla.md` a számítási szabályokkal, és az `AGENTS.md`-ben egy szabály, amely szerint az AI az árlista változásakor módosítja az eszközt és megmutatja, hogyan változott a kész eset ára.
Az árlista változtatását így egy mondattal megadhatja.
## Mi következik

Mielőtt az eszközt az egész csapatnak adná, kérje meg az AI-t, hogy hasonlítson össze több eredményt a táblázattal, ahogy a [AI kimenet ellenőrzése](card:kontrola-vysledku) mutatja.
Ha többen kezdenek AI-val eszközöket építeni a csapatban, írjanak közös [AI szabályokat](card:pravidla-pro-tym).
## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Vibe coding

**Mi ez:** Olyan weboldal, alkalmazás, szkript vagy más szoftveres eredmény létrehozásának módja, amikor a felhasználó leírja a szándékát és az elvárt működést, az AI pedig elkészíti vagy módosítja a kódot. A felhasználó folyamatosan kipróbálja és korrigálja az eredményt.

**Mi nem ez:** Ez nem egy önálló programozási nyelv, és nem garantálja, hogy a létrehozott kód helyes, biztonságos vagy éles használatra kész.

**Miért van rá szüksége a hallgatónak:** Segít megnevezni az elérhető utat a saját prototípushoz, és egyben megkülönböztetni a gyors kísérletet attól a megoldástól, amely tesztelést és szakértői ellenőrzést igényel.

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
