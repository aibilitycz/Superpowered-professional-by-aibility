# Készítsen idea file-t: ötlet egy oldalon

Az AI egy oldalra foglalja össze az ötletét úgy, hogy kollégája vagy más AI is tudjon vele dolgozni ön nélkül.

## Készítsen idea file-t: ötlet egy oldalon

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy ötlettel.
## Mire jó

A keddi megbeszélésen elmondja az ötletet, hogy minden új munkatárs az első két hétre kapjon egy másik osztályról mentort. A vezetőnő azt mondja: „Írd le és küldd el Lenkének a HR-be, hogy péntekig dolgozza ki.” Három sort ír e-mailben. Péntekre Lenke visszajön azzal a javaslattal, hogy inkább a saját vezetőjük foglalkozzon jobban az újakkal, mert az e-mailből nem értette, miért kell a mentor pont másik osztályról.

Az idea file egy oldal arról, mit és miért akar csinálni; hogyan kell megvalósítani, azt a feladat átvevőjére bízza.
## Mit készítsen elő

- egy ötlet, amit át akar adni kollégának vagy AI-nak; elég, ha fejben van,
- az AI, amit a munkában használ,
- egy másik AI ellenőrzésre, vagy az elsőben egy új, memóriamentes chat.
## Hogyan csinálja

1. Illessze be a promptot, és a „Ötlet:” sor után írja vagy
   [mondja be](card:voice-as-primary-ai-input) az ötletet azzal együtt, mi vezette oda. Az AI legfeljebb három kérdést tesz fel, majd elmenti az idea file-t.
2. Csatolja az idea file-t a második AI-hoz, és írja: „Olvasd el ezt a fájlt, és saját szavaiddal mondd el, mit akar a szerző csinálni és miért. Mire kérdeznél rá, mielőtt elkezdenéd?”
3. A második AI válaszát illessze be az első AI-hoz, hogy az kiegészítse az idea file-t ott, ahol a második félreértette. A kész fájlt küldje el kollégának vagy adja az AI-nak kidolgozásra.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkában használ:

Készíts az ötletemből idea file-t: egy oldalt, amivel kolléga vagy más AI tud dolgozni nélkülem. Az ötletet a „Ötlet:” sor után találod.

Először kérdezz meg legfeljebb három dolgot, amik nélkül senki más nem értené meg az ötletet. Ne kérdezz semmi mást; amit nem tudsz, írd fel nyitott kérdésként.

Az idea file-t írjad magyarul, legfeljebb egy oldal terjedelemben, ebben a formában:

### Az ötlet címe
Egy-két mondatban: mi az.

### Miért
Milyen problémát old meg az ötlet, kinek segít, és hogyan csinálják ma.

### Fő gondolat
Miben különbözik az ötlet a mai gyakorlattól.

### Hogyan működne
Hogyan nézne ki az érintettek számára egy konkrét példán.

### Mi döntött és mi nyitott
Két lista: mi már eldöntött, és mi még kérdéses.

Írd le, mit akarok csinálni és miért. Az eszközöket és a megvalósítást bízd arra, aki átveszi az ötletet, ha nem a lényeg része. Ne találj ki számokat vagy megállapodásokat, amiket nem tudsz tőlem.

Ha mappában dolgozol, mentsd az idea file-t .md fájlként a napady mappába az ötlet nevével. Ezután adj a mappában lévő AGENTS.md fájlhoz egy szabályt: „Ha azt mondom, 'készíts belőle idea file-t', kérdezz meg legfeljebb három dolgot, írd meg az ötletet ugyanabban a formában, mint a napady mappa fájljai, és mentsd el oda.” Ha nincs AGENTS.md, hozd létre, és gondoskodj róla, hogy ezt az eszköz minden munkakezdéskor beolvassa; Coworkban írd be a mappa utasításaiba.

Ha nem tudsz fájlokkal dolgozni a mappában, ne hozz létre semmit. Adj nekem az idea file-t .md fájlként letölthető formában, és jegyezd meg, hogy ha azt mondom „készíts belőle idea file-t”, legfeljebb három kérdést teszel fel, és ebben a formában írod meg az ötletet. Minden módosítás után adj új fájlt letöltésre.

Ötlet:

## Az ön eszközében

### Microsoft Copilot
A Copilot Chatben a prompt beillesztése előtt a Tools vagy Agents menüben válassza ki a Word agentet, és a „Ötlet:” sor fölé írja: „Adj idea file-t Word dokumentumként.” A Copilot elmenti a szabályt a memóriába (Saved memories), és új chatben is használja, ezért az idea file-t ellenőrzésre adja át kollégának. A Coworkban vannak skillek (Customize, Skills).

### ChatGPT
A szokásos ChatGPT chatben az idea file a válaszban érkezik, és az AI elmenti a szabályt a memóriába (Settings, Personalization, Memory). Az ellenőrzéshez nyisson meg egy ideiglenes chatet (Temporary chat), amely nem használ memóriát. A vállalati Business és Enterprise tarifákban a skillek a Plugins oldalsávban, a Skills fülön találhatók.

### Claude
A szokásos Claude chatben az AI létrehoz egy letölthető fájlt, ha be van kapcsolva a Code execution and file creation (Settings, Capabilities), és a szabályt elmenti a memóriába (Settings, Memory). Az ellenőrzéshez nyisson meg egy inkognitó chatet, amely nem használ memóriát. A skillek a Customize, Skills alatt találhatók, és chatben és Coworkban is működnek.

### Gemini
A kész idea file-t a Share & export, Export to Docs funkcióval mentse, és a kollégának linkkel ossza meg. A vállalati fiókok nem használnak memóriát, így az ellenőrzéshez elég egy új chat. A jövőbeli szabályt skillként mentse el: írja be, hogy „Mentse skillként”, és megtalálja a Customize, Skills alatt.
## Mi az idea file

Az idea file, magyarul ötletfájl, egy egyszerű szöveges fájl `.md` kiterjesztéssel, [Markdown](glossary:markdown) formátumban: a sor eleji `###` jelzi a címsorokat. Az AI írja meg az ön által adott információk alapján, ön csak néhány kérdésre válaszol. Bármely AI elolvassa, bármilyen kolléga használja, akár Jegyzettömbben is megnyithatja.

A feladattól eltérően az idea file nem mondja meg, hogyan kell végrehajtani. A kolléga vagy az ő AI-ja a saját lehetőségei szerint dolgozza ki, és ha más utat választ, mint ön, az ötlet ugyanaz marad. Második AI-val ellenőrzi, mert az sem ismeri azt a chatet, amelyben az idea file készült.

Az `AGENTS.md` egy szabályfájl az AI számára ugyanabban a mappában. Sok eszköz Code módban automatikusan beolvassa minden munkakezdéskor; ahol nem tudja, az AI elmenti a szabályt a beállításokba, vagy megmondja, hova kell tenni. Így a következő feladatnál ugyanabban a mappában elég azt írni: „készíts belőle idea file-t”.

Cowork vagy Code módban az AI az idea file-t a `napady` mappába menti, és a jövőbeli szabályt az `AGENTS.md`-be; ha nincs mappa, hozzon létre egy üreset. Szokásos chatben az idea file letölthető vagy válaszként kapja meg, és a szabályt elmenti a memóriába, ha az be van kapcsolva. Mikor érdemes váltani, azt a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) fül mutatja.

Az idea file-ba főként az tartozik, hogy miért értelmes az ötlet; a megvalósítást hagyja az átvevőre.
## Legyen az AI mindenhol idea file író

Az `AGENTS.md` szabály csak abban a mappában érvényes, ahová az AI beírta. Az ötletek azonban máshol is jönnek, például egy másik projekt közepén. Ha bárhol akar idea file-t írni, kérje meg az AI-t, hogy készítsen ebből a folyamatról [skillt](glossary:skill): egy elmentett útmutatót, amit az AI automatikusan használ, amikor azt mondja: „készíts belőle idea file-t”. Nem minden eszköz tud skilleket; melyek tudják, azt a „Az ön eszközében” blokk mutatja. Az idea file-t létrehozó chatben írja be:

```text
Az eddigi idea file írásból készíts skillt idea-file néven. Használd, amikor azt mondom, „készíts belőle idea file-t”, bármely mappában vagy chatben. Tartsd meg a fájl formátumát és a legfeljebb három kérdést. Mentsd el úgy, hogy ezt az eszköz automatikusan betöltse, és ha itt nem megy, mondd meg, hol adjam hozzá.
```
## Példa

Petra gépipari cégben koordinál projekteket. 2026. október 7-én, szerdán promptot illeszt be az AI-ba Cowork módban, a projekt mappájában, és az utolsó sor után bemondja: „Azt szeretném, hogy minden új munkatárs az első két hétre kapjon egy másik osztályról mentort, akitől bármit megkérdezhet, amit nem akar a vezetővel megbeszélni.” Az AI megkérdezi, miért pont másik osztályról, mi hiányzik ma az új munkatársaknak, és hány embert érint. Petra válaszol, hogy az újak félnek apróságokat kérdezni a vezetőtől, tavaly a 12 újból 4 három hónapon belül elment, és idén kb. 15 embert vesznek fel. Az AI elmenti a `napady/partak-pro-novacky.md` fájlt:

```text
### Mentor az új munkatársaknak
Minden új munkatárs az első két hétre kap egy másik osztályról mentort, akitől bármit megkérdezhet.

### Miért
Az újak félnek apróságokat kérdezni a vezetőtől, például hol találják a sablonokat vagy hogyan számolják el az üzleti utat. Tavaly a 12 újból 4 három hónapon belül elment. Idén kb. 15 embert vesznek fel.

### Fő gondolat
A másik osztályról érkező mentor nem értékeli az újat, ezért az új nem fél bármit megkérdezni tőle.

### Hogyan működne
Az első napon az új és a mentor együtt ebédelnek. A következő két hétben hetente kétszer negyed órát találkoznak. Így például az új tervező megkérdezheti a könyvelő mentort, hogyan számolja el az első üzleti útját, és nem kell a vezetőhöz fordulnia.

### Mi döntött és mi nyitott
- Döntött: a mentor mindig másik osztályról van, a program két hétig tart.
- Nyitott: ki választja a mentorokat? Kapnak-e erre munkaidőt?
```

A második AI helyesen összegzi az ötletet, de megkérdezi, kötelező-e a mentor az újnak. Petra beilleszti a választ az első AI-ba, hozzáteszi, hogy kötelező, és az AI kiegészíti a döntött pontok között. Ugyanazon a napon Petra elküldi a fájlt Lenkének a HR-be, aki az AI-jának adja novemberi program alapjaként.
## Ha elakad

- **Az AI azt állítja, elmentette az idea file-t, de nincs meg a mappában:** valószínűleg szokásos chatben dolgozik, ami nem tud mappába menteni. Kérjen letölthető fájlt, vagy váltson [Cowork vagy Code módra](card:when-chat-is-not-enough).
- **Az ötletet még nem lehet egy mondatban megfogalmazni:** diktálja be úgy, ahogy van, azzal együtt, mi zavarja a jelenlegi állapotban; hogyan, azt a [Diktálja be az AI-nak a feladatot](card:voice-as-primary-ai-input) fül mutatja. Amit az AI nem ért, azt nyitott kérdésként jegyzi fel.
- **Az AI részletes eljárást ír az ötlet helyett:** írja neki: „Dobd ki az eszközöket és lépéseket, csak azt hagyd meg, mit és miért.”
- **A második AI másképp értelmezte az ötletet:** ne magyarázza el neki chatben, mert a kolléga sem kap ilyen magyarázatot. Illessze be a válaszát az első AI-ba, hogy az kiegészítse az idea file-t, majd adja újra a második AI-nak.
## Mi lesz kész

Van egy idea file-ja az ötlettel, amelyet egy másik AI ugyanúgy ért, mint ön, és elküldheti kollégának vagy adhatja AI-nak kidolgozásra. Cowork vagy Code módban a `napady` mappában van, és a jövőbeli szabály az `AGENTS.md`-ben; szokásos chatben az AI megjegyzi a szabályt. A következő ötletet így az AI megírja, ha azt írja: „készíts belőle idea file-t”.
## Mi következik

Ha nem biztos az ötletben, ellenőriztesse több oldalról a [szakértői panelen](card:panel-expertu). Ha eszköz- vagy alkalmazásötlet, készíttesse el [vibe kódolással](card:risk-based-prototyping) az idea file alapján.
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
