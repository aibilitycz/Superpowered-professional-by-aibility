# Kérdezze adatait: az AI exportból számolja ki a választ

Az AI az exportból kiszámolja a döntéshez szükséges választ, és elmenti a folyamatot a következő hónapra.

## Kérdezze adatait: az AI exportból számolja ki a választ

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** exporttal és egy kérdéssel.
## Mire jó

November 2., hétfő van, és az értékesítési igazgató péntekig szeretné tudni, mely
termékekre érdemes karácsonyi kampányt indítani. Három hónap rendelésének exportja
14 ezer sort tartalmaz, a beszerzési árak, amelyek nélkül nem lehet megállapítani,
hol keres a cég, egy másik rendszerben, a raktárban vannak.

Az AI mindkét exportot összekapcsolja, és egy rövid programmal kiszámolja a választ
az összes sor alapján, így nem becslésen alapul.
## Mit készítsen elő

- export az e-boltból, könyvelésből vagy CRM-ből `.xlsx`, `.csv` formátumban vagy
  felhőben táblázatként,
- a kérdés, amire választ vár, és hogy mire használja,
- az eredeti táblázat megnyitva táblázatkezelőben, ahol egy számot ellenőrizni tud,
- AI, amely képes fájlokkal számolni (ezt mutatja a „Az eszközében” blokk).
## Hogyan csinálja

1. Töltse fel az exportot a chatbe (Cowork vagy Code módban nyissa meg az exportokat
   tartalmazó mappát), illessze be az AI gyakorlat promptját, és alá írja be a kérdést
   és a választás célját.
2. Az AI leírja, mit talált az exportban, összekapcsolja az exportokat, és kiszámolja a választ.
   Az ellenőrzéshez adott számot nézze meg az eredeti táblázatban, és írja meg, hogy stimmel-e.
3. Ha stimmel, az AI elmenti a folyamatot [skillként](glossary:skill), a memóriába vagy az utasítások közé,
   és ír egy mondatot a következő export számára. Hova, azt a „Az eszközében” blokk mutatja.

A döntés, hogy mit kezd az eredménnyel, az Öné.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az Ön által használt AI-ba:

Egy kérdésre várok választ az adatokból. A kérdést és a választás célját a szöveg alá írom. Az adatok a csatolt exportban vagy a munkakönyvtárban vannak.

1. Olvasd be az összes fájlt, és írd meg, mi van bennük: hány sor, milyen oszlopok és milyen időszak. Ha valamelyik oszlop jelentése nem világos, és a válaszhoz kell, kérdezz rá.
2. Ha két exportot kell összekapcsolni, tedd meg a közös oszlop alapján, például termékkód. Hasonlítsd össze a sorok számát összekapcsolás előtt és után, hogy ne duplázódjon vagy vesszen el sor. Az össze nem párosítható sorokat külön írd ki, és írd meg, hány van.
3. Számold ki a választ kóddal az összes sorból, ne becsülj semmit. Ha hiányzik valami, például beszerzési ár a bevételhez, írd meg, mi hiányzik és hol található.
4. Az eredményt így írd: válasz 1-3 mondatban, táblázat a számokkal, amelyekből a válasz jön, és egyszerű szavakkal a számítás leírása. Végül adj egy számot, amelyre a válasz épül, és amelyet az eredeti táblázatban ellenőrizni fogok, írd meg, hol találom: lap, oszlop, szűrő.

Ha azt írom, hogy a szám nem stimmel, keresd meg az okát, javítsd a számítást, és adj új számot ellenőrzésre. Ha azt írom, hogy stimmel, mentsd el a folyamatot, hogy a következő exportot egy mondattal meg lehessen adni. Nevezd el témája szerint, például "Nyereség termékek szerint". Írd bele, milyen fájlokat és oszlopokat vársz, hogyan kapcsolod össze és mit számolsz; az exportból származó számokat ne írd bele. Ha mappában dolgozol, mentsd oda fájlként, például "folyamat-nyereseg-termekek-szerint.md", és mellé a számításhoz használt kódot. Normál chatben készíts belőle skillt, ha az eszköz nem támogatja a skilleket, mentsd el memóriába. Ha egyik sem megy, adj fájlként letölthető folyamatot, amit legközelebb az exporttal együtt feltöltök. Ha mentéshez kattintás kell, pontosan mondd meg, hova. Végül írd meg, hogy hívják a folyamatot, hol van elmentve, és milyen mondattal adom meg a következő exportot; a mondatban legyen benne a folyamat neve.

## Az eszközében

### Microsoft Copilot
A Copilot Chat munkahelyi fiókkal Python nyelven számolja ki a csatolt exportot;
+ gombbal vagy húzással adhat hozzá fájlt. Ha a szám stimmel, a Copilot elmenti a folyamatot a memóriába;
mondja meg neki, hogy írja le teljesen, és illessze be a Notebook utasítások közé (Jegyzettömb, Új jegyzettömb),
ahova a következő exportot tölti fel. A OneDrive-on lévő rendszeres exportokat a Cowork dolgozza fel a Chat kapcsoló mellett (Microsoft Copilot licenc).

### ChatGPT
Az exportot csatolja a chathez, az AI magától futtatja a Python programot. A Business és Enterprise tarifákban a folyamatból skill készül, amit a fiókjába menthet; áttekintés a Plugins, Skills fülön. Más fiókok memóriába mentik a folyamatot, és a nagy exportokat a Codex dolgozza fel a ChatGPT asztali alkalmazásban közvetlenül a mappában.

### Claude
A számításokat a Code execution and file creation funkció végzi a Beállításokban a Képességek alatt; személyes fiókokban be van kapcsolva, cégesben az adminisztrátor kezeli.
A fájl legfeljebb 30 MB lehet, és a Claude képes skillt készíteni a folyamatból. Nagy és rendszeres exportokat a Cowork vagy a Claude Code dolgozza fel közvetlenül a mappában.

### Gemini
Az exportot töltse fel a Gemini alkalmazásba a Fájlok hozzáadása vagy a Drive használatával; elég Google táblázat is, és két exportot egyszerre csatolhat. A Gemini kódalapú számítást használ, amit a Google súgó nem említ, ezért az ellenőrző számot ne hagyja ki. A munkahelyi fiók nem rendelkezik memóriával, ezért mentse el a folyamatot skillként (írja be: "Mentse skillként"); a következő exportnál a „/” beírása után választhatja ki.
## Mi az a kódalapú számítás

Ha az AI csak szövegként olvassa a táblázatot, számokat becsül, és nagy exportnál könnyen kihagy sorokat.
Ezért hagyja kódalapú számítást végezni: az AI ír egy rövid programot, futtatja az egész fájlon, és az eredményből adja a választ.
A kódot nem kell olvasnia, a helyességet az ellenőrző szám alapján ismeri fel.
Cowork vagy Code módban az AI közvetlenül a mappában lévő fájlokon számol, nagy exportokat is kezel, és a folyamatot egyszerű szövegfájlként menti melléjük.

Két exportot az AI [közös kulcs](glossary:data-key) alapján kapcsol össze: olyan oszlop, amely mindkét fájlban azonos módon szerepel, például termékkód vagy rendelési szám.
A termék neve vagy a vevő neve rendszerenként eltérő lehet, ezért ez nem elég az összekapcsoláshoz.

Ha az exportok havonta érkeznek, vagy a chat nem tölti be teljesen, használja az AI-t Cowork vagy Code módban, amely közvetlenül a számítógép mappájával dolgozik.
A kezdéshez lásd a [Cowork vagy Code](card:when-chat-is-not-enough) kártyát.
## Hagyja, hogy a következő exportot az AI számolja ki önállóan

Az első kör után az AI elmentette a folyamatot. A következő hónapban új exportot ad neki,
és beírja a neki adott mondatot, például: „Használd a Nyereség termékek szerint folyamatot a novemberi exporton”.
Az AI ugyanúgy számol, mint előzőleg, így a két hónap adatai azonnal összehasonlíthatók.

Ha az export havonta automatikusan érkezik ugyanabba a mappába a számítógépen, az AI Cowork vagy Code módban a beállított napon önállóan is kiszámolhatja a választ, mint [ütemezett feladatot](card:recurring-ai-task).
Adja meg neki ezt a feladatot, és kérje, hogy hozza létre az ütemezett feladatot:

```text
Minden hónap 3-án 8:00-kor vedd a mappából a legfrissebb exportot, és számold ki a választ az elmentett folyamat alapján. Az eredményt mentsd el az export mellé fájlként, amelynek a nevében benne van a hónap, és a fájl tetejére írd, mi változott az előző hónaphoz képest.
```

Ha a feladat a számítógép mappájával dolgozik, csak akkor fut, ha a gép be van kapcsolva és az alkalmazás nyitva.
## Példa

Martina az e-kávébolt értékesítését koordinálja. November 2-án hétfőn letölti az augusztustól októberig tartó rendelés exportját (`objednavky.xlsx`, 14 200 sor),
és a raktárból a beszerzési árak árlistáját (`nakupni-ceny.xlsx`). Mindkét fájlt feltölti az AI-ba, amelyet a munkahelyén használ, beilleszti a promptot, és alá írja:
„Melyik három termékre tegyünk karácsonyi kampányt? Azokra, amelyeken a legtöbbet keresünk.”

Az AI leírja, mit olvasott be, és figyelmeztet, hogy a rendelésben csak a bevétel szerepel.
Ezek alapján a Brio kávéfőző nyerne 1,24 millió CZK bevétellel, de a bevételből nem derül ki, hol keres a cég.
Ezért az AI összekapcsolja a rendeléseket az árlistával termékkód alapján. Hat kód hiányzik az árlistából;
az AI külön listázza ezeket, Martina felismeri, hogy szeptemberi újdonságok, és kéri a raktártól az árakat.
A válasz: a legtöbbet keresett termékek az Etiopiai kávé 250 g, a Brazíliai kávé 1 kg és a Classic kézi daráló.
A Brio 9%-os árréssel rendelkezik, a kávék több mint 40%-kal.

Az ellenőrzéshez az AI megadja az Etiopiai kávé bevételét: 386 450 CZK, Rendelések lap, Bevétel oszlop, ETI-250 termékkód szűrő.
Martina kiszűri ezt a táblázatban, és az összeg stimmel. Megírja az AI-nak, amelyből skill lesz "Nyereség termékek szerint";
Martina egy kattintással megerősíti a mentést. December elején feltölti az új chatbe a novemberi exportot az árlistával,
és csak annyit ír: „Használd a Nyereség termékek szerint folyamatot a novemberi exporton”. Két perc múlva megkapja ugyanazt a táblázatot novemberre.
## Ha elakad

- **Az AI számokat ír, de nem látja, hogyan számolta ki:** írja neki: „Számold ki kóddal az egész fájlon, és mutasd a számítást.”
  Ha az AI nem tud kódot futtatni, ellenőrizze a „Az eszközében” blokkot, hogy be kell-e kapcsolni a számításokat, és soha ne hagyja ki az ellenőrző számot.
- **Az ellenőrző szám nem stimmel:** írja meg az AI-nak, mit talált a táblázatban és milyen szűrővel. Leggyakrabban más időszakot számolt, törölt rendeléseket vett figyelembe, vagy az összekapcsolás duplázta a sorokat.
  Ha a szám csak a következő exportnál stimmel, kérje meg az AI-t, hogy írja be a javítást az elmentett folyamatba is.
  Ha a hibák ismétlődnek, folytassa a [eredmény ellenőrzésével](card:kontrola-vysledku).
- **Az AI azt írja, nem töltötte be az egész fájlt:** a nagy exportot a chat nem biztos, hogy kezeli.
  Váltson [Cowork vagy Code](card:when-chat-is-not-enough) módra, ahol az AI közvetlenül a mappában dolgozik.
  Ha nincs ilyen módja, kérje meg az AI-t, hogy mondja meg, mely oszlopokat és időszakot kell exportálni, és töltse le csak azokat.
- **Az AI nem menti el a folyamatot vagy nem használja új chatben:** kapcsolja be a memóriát a beállításokban;
  céges fiókban az adminisztrátor néha kikapcsolja a memóriát és a skilleket.
  Ha egyik sem megy, kérje az AI-t, hogy adja meg a folyamatot letölthető fájlként, és legközelebb töltse fel az exporttal együtt.
  Új chatben mindig írja be a következő alkalomra szóló mondatot a folyamat nevével együtt.
## Mi lesz kész

Megvan a kérdésére adott válasz az export összes sora alapján, és egy számot ellenőrzött az eredeti táblázatban.
Tudja, mi hiányzik az adatokból. A folyamat elmentve skillként, memóriában, mappában vagy fájlként nálánál van,
és legközelebb elég az új export és az AI által adott mondat.
## Mi következik

Az elmentett folyamatot tovább fejlesztheti a saját javításai alapján.
Hogyan, azt a [Készítsen skillt](card:create-skill-from-proven-process) kártya mutatja.
Ha kollégáinak is szüksége van ugyanarra a számításra, és nem akarja minden hónapban helyettük elvégezni,
hagyja, hogy az AI készítsen egyszerű alkalmazást, ahová ők maguk töltik fel az exportot.
Ezt a megközelítést [vibe codingnak](card:risk-based-prototyping) hívják.
## Közös kulcs az adatokban

**Mi ez:** Egy oszlop vagy oszlopok kombinációja, amely alapján biztonságosan azonosítható ugyanaz a rekord két forrásban, például rendelésazonosító vagy a hónap és költséghely kombinációja.

**Mi nem ez:** Nem jelszó vagy technikai hozzáférési kulcs. Egy cég vagy személy azonos neve nem feltétlenül megbízható közös kulcs.

**Miért van rá szüksége a tanulónak:** Segít összekapcsolni a megfelelő sorokat anélkül, hogy azok elvesznének, összekeverednének vagy véletlenül megsokszorozódnának.

## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Készség

**Mi ez:** Egy adott típusú feladathoz újrahasználható eljárás. Tartalmazhat utasításokat, szabályokat, példákat, sablonokat és egyéb szükséges forrásokat. A létrehozás és futtatás módja eszközönként eltérő.

**Mi nem ez:** Nem általános asszisztensi szerep, és nem egyetlen, változatlanul tárolt sikeres beszélgetés.

**Miért van rá szüksége a tanulónak:** Segít a bevált gyakorlatot stabil formába önteni, amelyet következetesen újra lehet használni.

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

## Mechanika: Érvelési szándék ellenőrzése kimenet készítése előtt

Rövid ellenőrzés a kártyák elején, amelyekből más számára készül kimenet. Nem önálló kártya, és nincs saját teljesítési kritériuma. Ellentéte a `data-readiness-check` mechanikának: az az adatok előkészítettségét figyeli, ez pedig a szándékét.

## Mikor indul el

Az ember olyan kimenetet készít, amit más is látni fog: prezentáció, jelentés, ajánlás, ajánlat, vezetőségnek szóló e-mail, ügyfélnek szóló összefoglaló. Nem indul el saját használatra szánt kimeneteknél, kutatásnál vagy vázlatos jegyzeteknél.

## Miért létezik

Az AI bármiből képes húsz diát vagy három oldalnyi jelentést készíteni, és késznek fog tűnni. Az üres kimenet első ránézésre nem különbözik a jótól, mert a hiányzó rész a szándék, nem a forma. Három mondat az embertől a legolcsóbb módja annak, hogy ezt még a készítés előtt felismerjük, ne utána.

## Mit kér az embertől

Három dolgot, és egyiket sem javasolja az AI:

| Mi | Miért nem tudja ezt az AI meghatározni |
|---|---|
| **Közönség** | csak az ember tudja, kik ülnek előtte és mit tudnak már |
| **Változás** | mit kell a közönségnek másképp tennie vagy döntenie az olvasás után |
| **Fő mondat** | az egyetlen mondat, amit akkor is megjegyeznek, ha mindent elfelejtenek |

## Fordított próba

A fő mondat két tulajdonsága: lehet vele nem egyetérteni, és egy lélegzetvétellel kimondható. A teszt: fordítsd meg az ellenkezőjére.

- *Szeretnénk javítani az ügyfélélményt* → az ellenkezője értelmetlen, tehát a mondat nem állít semmit.
- *Állítsuk le a második alkalmazás fejlesztését, és vigyük vissza az embereket az elsőre* → az ellenkezője értelmes, és valaki ezt fogja képviselni. Ez egy fő mondat.

Ha a mondat nem állja meg a helyét, az AI ezt közli, és visszaadja az embernek átírásra. Nem írja át helyette.

## Mit csinál az AI

1. Bekéri a három mondatot, és megvárja őket. Nem javasolja és nem kommentálja őket.
2. Elvégzi a fordított próbát. Ha a mondat nem állja meg a helyét, elmondja miért, és visszaadja az embernek.
3. Megkérdezi, hogy a formátum megfelel-e a szándéknak. Ha a változást más kimenet jobban kiváltaná, felajánlja az `output-beyond-document` kártyát, és a döntést az emberre bízza.
4. Ha a három mondat kész, azonnal folytatja a kártya fő gyakorlatával, és nem tér vissza hozzájuk.

## Mi marad az embernél

- meghatározni a közönséget és a változást,
- megírni és szükség esetén átírni a fő mondatot,
- eldönteni, hogy a formátum megfelel-e a szándéknak,
- eldönteni, mi a kontextus, és mit hagy ki, ha kifut az időből.

## A mechanika kimenete

Három sor a fő munkakimeneten belül, nincs önálló dokumentum és nincs további check-in:

```text
Közönség: ...
A kimenet által kiváltandó változás: ...
Fő mondat: ...
```

## Routing

- **A három mondat világos:** folytatás a kártya fő gyakorlatával.
- **A fő mondat nem állja ki a fordított próbát:** az embernek kell átírnia, nem folytatódik.
- **A mondat egyáltalán nem írható meg:** általában még nincs döntés, vagy a kimenetnek két célja van. Két kimenetre kell bontani.
- **A változást más formátum jobban kiváltaná:** `output-beyond-document` kártya.
- **Hiányoznak az alapok vagy a kontextus:** `prace-s-kontextem` kártya.
- **A kimenet már létezik és kifelé megy:** `kontrola-vysledku` kártya.

## Határok

- A mechanika nem értékeli a tartalom minőségét vagy az állítások igazságtartalmát. Ezt a kész kimeneten végzett eredményellenőrzés végzi.
- Saját használatra szánt kimeneteknél nem indul el; saját jegyzeteknél a közönség kérdezése szertartás, nem segítség.
- Ha az ember ismeri a három mondatot, és fél perc alatt leírja őket, a mechanika véget ér. Nem lassítja azt, akinek megvan a szándéka.

## Minimális prompt blokk

```text
Mielőtt bármit elkezdesz készíteni, kérd be tőlem ezt a három dolgot, és várd meg őket: kinek szól a kimenet, mit kell utána megváltoztatni, és mi az az egyetlen mondat, amit hordoznia kell. Ne javasold őket nekem.

Ezután próbáld meg a fő mondatomat az ellenkezőjére fordítani. Ha az ellenkezője értelmetlen, mondd el, hogy a mondat nem állít semmit, és hagyd, hogy átírjam. Ne írd át helyettem.

Ha a három mondat kész, folytasd azonnal a fő feladattal, és ne térj vissza rájuk. Ha a változást más formátum jobban kiváltaná, mint amit szeretnék, ezt egy mondatban jelezd, és hagyd rám a döntést.
```

## Mechanika: Adatelőkészítettség ellenőrzése

Rövid, adaptív ellenőrzés az adatkártyák elején. Nem önálló kártya, nincs saját teljesítési kritériuma, és nem kell miatta mesterségesen problémás táblázatot keresni.

## Mikor indul el

A felhasználó valós kérdést és adatokat hoz, amelyeken dolgozni szeretne. Az adatok feltöltése előtt egyértelműnek kell lennie, hogy jóváhagyott környezetet használ. Ha ez nem egyértelmű, a mechanika a biztonsági útmutatóhoz irányít, és nem kéri be a tartalmat.

## Mit csinál az AI

1. A célból és a fájlból ellenőrzi, hogy érti-e, mit jelent egy sor, melyek a fontos oszlopok, mértékegységek és az időszak.
2. Gyors technikai ellenőrzést végez a szerkezetre, adattípusokra, hiányzó értékekre, lehetséges duplikátumokra és kategóriákra.
3. A megállapításokat felosztja:
   - technikai javításokra, amelyeket biztonságosan javasolhat vagy elvégezhet,
   - jelentésbeli kérdésekre, amelyekről a felhasználónak vagy az adatgazdának kell döntenie,
   - olyan problémákra, amelyek más környezetet vagy önálló kártyát igényelnek.
4. Ha semmi lényeges nem akadályozza a munkát, azonnal folytatja a kártya fő gyakorlatával.
5. Ha technikai javítás szükséges, példán bemutatja a változást, jóváhagyást kér, és létrehoz egy munkamásolatot. Az eredeti fájlt megőrzi.
6. Ha nem ismeri a jelentést, csak olyan kérdéseket tesz fel, amelyek befolyásolhatják az eredményt. Nem talál ki választ.

## Mi marad az emberre

- megerősíteni az adatok jelentését és a további munka szándékát,
- eldönteni, hogy a kategóriák összevonhatók-e, és mit jelent a hiányzó érték,
- jóváhagyni a változást, amely befolyásolhatja a tartalmat,
- meghatározni, hogy a bizonytalanság adatgazdát igényel-e.

## A mechanika kimenete

A mechanika legfeljebb hárompontos preflight jegyzetet készít a fő munkafolyamat eredményén belül:

```text
Adatállapot: előkészített / módosított / blokkolt
Elvégzett módosítások vagy megerősített feltételezések: ...
Amit még ellenőrizni kell: ...
```

Önálló dokumentum vagy további check-in nem keletkezik.

## Routing

- **Az adatok előkészítettek:** folytassa közvetlenül az elemzéssel vagy döntési feladattal.
- **Egyszerű technikai inkonzisztencia:** az AI jóváhagyás után javítja, majd folytatja.
- **Nem egyértelmű üzleti jelentés:** kérdezze meg a felhasználót vagy az adatgazdát.
- **Több fájl vagy rendszer:** `sjednotit-data-z-vice-zdroju` kártya.
- **Beszélgetés, jegy vagy visszajelzés:** önálló kártya a strukturálatlan tartalom strukturálásához.
- **Túl nagy fájl vagy hiányzó eszközképesség:** `when-chat-is-not-enough` kártya.
- **Bizonytalanság az adatok feltölthetőségéről:** `bezpecne-pouzivani` és `nakladani-s-daty` kártyák.

## Határok

- A megszokott formátumokat és ismert kategóriákat az AI önállóan javítja, a felhasználónak nem kell manuálisan keresnie őket.
- A mechanika nem generál problémát, ha nem talál lényeges hibát.
- Az előkészítettséget a konkrét kérdéshez viszonyítva kell értékelni. Ugyanaz a tábla elegendő lehet áttekintéshez, de nem biztos, hogy elég pontos pénzügyi vagy HR-következtetéshez.
- A formátumellenőrzés nem helyettesíti a konkrét értékek és számítások ellenőrzését a kész eredményben.

## Minimális prompt blokk

```text
Mielőtt elkezded az adatok elemzését, végezz egy rövid ellenőrzést, hogy az adatok előkészítettek-e a kérdésemhez.

Először foglald össze, szerinted mit jelent egy sor, melyek a fontos oszlopok, mértékegységek és az időszak. Technikai inkonzisztenciákat javasolhatsz javítani. Jelentésbeli bizonytalanság esetén kérdezz rá, és ne találj ki választ.

Ha az adatok alkalmasak a feladatra, ezt egy mondatban jelezd, és folytasd. Ha valami befolyásolhatja az eredményt, legfeljebb három pontban mutasd be. Tartalmi változást vagy sorok törlését csak jóváhagyásom után, és csak munkamásolatban végezd el.
```
