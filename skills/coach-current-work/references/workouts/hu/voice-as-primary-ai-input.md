# Mondja be az AI-nak a feladatot: hang helyett írás

Két percig beszél a feladatról, ahogy eszébe jut, az AI pedig áttekinthető feladattá alakítja, amit az ön javítása után el is végez.

## Mondja be az AI-nak a feladatot: hang helyett írás

**Nehézség: könnyű.**\
**Idő: kb. 15 perc** egy valódi feladattal.
## Mire jó

A szállító csütörtökön jelzi, hogy nem érkezik be a határidőre, és péntekre kell egy e-mail a vezetőségnek. Az AI-nak beírja, hogy „Írj e-mailt a vezetőségnek, hogy a projekt késik”, és kap egy udvarias, általános szöveget. Miért csúszott, milyen lehetőségek vannak, és hogy a vezető nem olvas hosszú e-maileket, nem írta meg, mert nem akarta részletezni.

Beszéddel elmondja az összefüggéseket is, amiket írásban nem tenne bele, például miért csúszott a határidő és mit nem fog elolvasni a vezető az e-mailben.
## Mit készítsen elő

- egy valódi feladat, például e-mail a vezetőségnek vagy anyag egy értekezletre,
- két perc, amikor hangosan beszélhet, például tárgyalóban,
- az AI, amit a munkában használ, vagy AI [Cowork vagy Code módban](glossary:workmode).
## Hogyan csinálja

1. Illessze be a promptot és küldje el. Ezután kattintson a mikrofon ikonra az üzenetmezőben, és két percig beszéljen: mit akar, kinek, mit tud és mi nyomasztja. Küldje el a szöveget, a chatben az anyagokkal együtt.
2. Az AI pontokba szedett feladatot ad vissza kérdőjelekkel a neveknél és számoknál, amiket nem értett. Javítsa ki, akár hanggal, és hagyja, hogy az AI elvégezze a munkát, majd mentse el a szabályt a jövőre.
3. Egy új chatben diktálja be a következő feladatot prompt nélkül. Az AI először pontokba szedett feladatot adjon vissza.

A félrebeszéléseket és kitérőket ne javítsa, az AI megoldja.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkában használ:

A következő üzenetben bemondok egy munkafeladatot. Úgy fogok beszélni, ahogy eszembe jut, így lesznek kitérők, ismétlések és a beszédátírás hibái. Most csak válaszolj, hogy hallgatlak.

A diktálásból először készíts feladatot ezekben a pontokban:
- Cél: mi készüljön el és mire való.
- Kinek: ki fogja olvasni vagy használni.
- Amit tudunk: tények, döntések és anyagok, amikből kiindulhatsz. Ha említek fájlt a projektmappában, keresd meg és használd.
- Mire figyelj: mi nem hiányozhat, mit nem akarok és mi nyomaszt.
- Kimenet: forma és hossz.

A neveket, számokat, dátumokat és szakmai kifejezéseket, amiket az átírás elrontott, jelöld kérdőjellel. Ha hiányzik valami, ami nélkül nem tudod jól elvégezni a munkát, kérdezz meg legfeljebb két dolgot. Mutasd meg a feladatot, és várd meg, míg kijavítom vagy megerősítem. Ezután végezd el a munkát a javított feladat szerint.

Végül mentsd el a szabályt a jövőre: amikor új munkafeladatot diktálok, dolgozd fel ugyanígy, először pontokba szedett feladat kérdőjelekkel a bizonytalan helyeken, majd a megerősítés után a munka. A szabályhoz írd hozzá a neveket és kifejezéseket, amiket az átírás elrontott, és a helyes írásmódjukat. Ha projektmappában dolgozol, írd be az AGENTS.md fájlba, ha nincs, hozd létre. Gondoskodj róla, hogy ezt az eszköz minden munka elején elolvassa; Coworkban írd be a mappa utasításaiba. Egyébként mentsd el az emlékezetedbe.

## Az ön eszközében

### Microsoft Copilot
A Copilot Chatben a diktálást az üzenetmező mikrofon ikonjával indítja (Start dictation); a cseh nyelv támogatott. A szabályt a Copilot elmenti az emlékezetébe, és megjelenik a Memory updated üzenet; áttekintést a beállításokban talál a Chat settings › Personalization › Saved memories alatt. Ha nincs emlékezete, illessze be a szabályt a Custom instructions-be ugyanott.

### ChatGPT
A diktálást az üzenetmező mikrofon ikonjával indítja, az asztali alkalmazásban a Dictate gombbal; a Voice ikon hangmódot kapcsol. A szabályt a ChatGPT elmenti az emlékezetébe (beállítások, Personalization › Memory), emlékezet nélkül a Custom Instructions-be kell beírni. A Codex a ChatGPT asztali alkalmazásban az `AGENTS.md` fájlba írja a projektmappában.

### Claude
A Claude alkalmazásban az üzenetmező mikrofon ikonjával diktál, a hanghullám ikon hangmódot kapcsol. A diktálás működik Coworkban is, ahol a projektmappát a feladat megadásakor választja ki, és az AI az `AGENTS.md` hivatkozást beírja a mappa utasításaiba. Claude Code-ban a diktálást a `/voice` paranccsal kapcsolja be, a cseh nyelvet a `/config`-ban állítja be.

### Gemini
A diktálást az üzenetmező mikrofonjával indítja; az átírás nyelve a böngésző nyelvét követi, ezért állítsa csehre. A Gemini alkalmazásnak nincs emlékezete a munka fiókjában, ezért a gyakorlat végén írja be: „Írj nekem szabályt szövegként”. A szabályt illessze be az új Gem utasításaiba (Gems › New Gem), és a 4. lépést, valamint a további feladatokat ebben a Gemben diktálja.
## Mi a diktálás

A diktálás a beszéd szöveggé alakítása. Beszél, és a szavak az üzenetmezőbe íródnak, így elküldés előtt látja és javíthatja őket. A hangmód (voice mode) más funkció: az AI beszélget önnel és hangosan válaszol. A munkafeladathoz a diktálás alkalmas. Telefonon elég a billentyűzet mikrofon ikonja.

Az `AGENTS.md` fájl az AI szabályait tartalmazza a projektmappában. Az AI Cowork vagy Code módban minden munka elején elolvassa, így a diktálási szabályt nem kell ismételni; ahol az eszköznek be kell állítani, az AI megoldja a prompt alapján. A normál chatben ugyanezt az emlékezet végzi: az AI elmenti, mi legyen érvényes a további chatekben is.
## Hol diktáljon

A legegyszerűbb közvetlenül az AI-ban diktálni. A Microsoft Copilot, ChatGPT, Claude és Gemini mind rendelkeznek mikrofon ikonnal az üzenetmezőben, így nem kell semmit telepíteni. Hol találja, a „Az ön eszközében” blokk mutatja.

E-mailbe vagy dokumentumba a számítógép beépített diktálásával diktálhat:

- **Windows:** nyomja meg a Windows + H billentyűket és beszéljen.
- **Mac:** a diktálást a Rendszerbeállítások › Billentyűzet › Diktálás alatt kapcsolja be, ahol a gyorsbillentyűt is beállíthatja.

Ha a beépített diktálás nem érti jól, próbáljon ki diktáló alkalmazást. A **Wispr Flow** több mint 100 nyelven diktál, és maga is felismeri a nyelvet, a **Soniox** kifejezetten kínál cseh nyelvet. Mindkettő Macen, Windowson, iPhone-on és Androidon fut, ingyenes verzióval heti limit mellett. Céges gépen az IT engedélyezheti a telepítést.
## Példa

Lenka koordinálja egy új raktárrendszer bevezetését. 2026. október 8-án a szállító jelzi, hogy a könyveléshez való csatlakozást november 2-ig nem tudja teljesíteni. Az írásos feladat így hangzana: „Írj e-mailt a vezetőségnek, hogy a bevezetés késik”. Lenka helyette megnyitja az AI-t a projektmappában, beilleszti a promptot, majd két percig beszél. Elmondja, hogy a rendszer csatlakozás nélkül is működhet, de a számlákat két kolléga kézzel fogja két hétig átírni. A pénzügyi igazgató Hrubeš tudni akarja, mennyibe kerül, és a vezető nem olvas hosszú e-maileket. Az AI ezt adja vissza:

```text
Cél: tájékoztatni a vezetőséget a raktárrendszer könyveléshez való csatlakozásának késéséről.
Kinek: igazgató és pénzügyi igazgató (a név „hrubě”?).
Amit tudunk: a szállító nem készül el november 2-ig; a rendszer csatlakozás nélkül is működik, a számlákat két kolléga kézzel írja át.
Mire figyelj: a pénzügyi igazgató tudni akarja a költségeket; az igazgató nem olvas hosszú e-maileket.
Kimenet: öt soros e-mail.
```

Az átírás a Hrubeš úr nevét „hrubě”-nek írta, az AI kérdőjellel jelölte. Lenka két dolgot javít: a nevet és a célt. A vezetőségnek október 14-ig kell eldöntenie, hogy november 2-án csatlakozás nélkül indítják-e a rendszert, vagy eltolják november 16-ra. Az AI e-mailt ír két változattal, mindegyikhez megadja, mennyi plusz kézi munka jár. Az `AGENTS.md`-be beírja a szabályt és alá egy sort „Hrubeš (átírás: hrubě)”. Egy héttel később Lenka egy új chatben csak beszél, és az AI először pontokba szedett feladatot ad vissza.
## Ha elakad

- **Az AI hangosan válaszol:** bekapcsolta a hangmódot. Kapcsolja ki, és használja az üzenetmező mikrofon ikonját. A diktálás csak a beszédet írja át szöveggé.
- **Az átírás angol vagy értelmetlen:** nincs beállítva cseh nyelv a diktáláshoz. Ellenőrizze az alkalmazás és a böngésző nyelvét, ha az átírás továbbra is angol, diktálja be a feladatot telefonon a billentyűzet mikrofon ikonjával, vagy használja a számítógépes diktálást a „Hol diktáljon” blokk alapján.
- **30 másodperc után nem tudja, mit tegyen:** küldje el, amit eddig mondott. Az AI megkérdezi, ami hiányzik, és ön ismét hanggal válaszol.
- **Az új chatben az AI nem használja a szabályt:** kérdezze meg: „Mit tudsz a diktálásról?”. Cowork vagy Code módban ellenőrizze, hogy ugyanazt a mappát nyitotta-e meg, mint korábban. Ha a normál chatben nincs emlékezet vagy a cég kikapcsolta, mentse el a szabályt a „Az ön eszközében” blokk szerint, vagy váltson [Cowork vagy Code módra](card:when-chat-is-not-enough).
## Mi lesz kész

Kész a munka, amit az AI az ön bemondott és javított feladata alapján végzett el. Az `AGENTS.md`-ben vagy az AI emlékezetében ott a szabály, hogy az AI először rendezi a diktált feladatot, alatta a nevekkel, amiket az átírás elrontott. Egy új chatben ellenőrizte, hogy legközelebb elég csak beszélni.
## Mi következik

Ha az AI még jó feladatból sem azt csinálja, amit akar, javítsa az eredményt konkrét megjegyzésekkel, ahogy a [Oldja meg a mai feladatot AI-val](card:first-ai-use-case) kártya mutatja. A megbeszélés vagy beszélgetés felvételét dolgozza fel a [Dolgozza fel a megbeszélés átírását](card:konverzace-do-struktury) kártya szerint.
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
