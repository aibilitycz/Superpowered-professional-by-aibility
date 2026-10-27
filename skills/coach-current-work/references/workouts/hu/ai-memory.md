# Rendezze rendbe az AI memóriáját: mit jegyez meg önről a beszélgetések között

Az AI átnézi, mit jegyez meg önről, kijavítja az elavultakat és törli a hibásakat, így az új beszélgetés a jelenlegi állapot alapján indul.

## Rendezze rendbe az AI memóriáját: mit jegyez meg önről a beszélgetések között

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** az AI-val, amit néhány hete használ.
## Mire jó ez

Egy új webáruház projekt szeptemberben zárult, de az AI még mindig említi azt az
email javaslatokban és számol a határidőivel. Ráadásul mindent táblázatba tesz,
akkor is, ha a táblázat csak egy jelentéshez készült.

Az AI a [memóriájába](glossary:memory) menti, amit önről megtud, és nem ismeri fel,
mi ért véget. Ha időnként megmutatja, mit tud önről, az AI pár perc alatt javítja.
## Mit készítsen elő

- Az AI, amit már néhány hete használ a munkában,
- a memória beállításai az ön eszközében; hol van, azt a „Az ön eszközében” blokk mutatja.
## Hogyan csinálja

1. Illessze be a promptot egy új beszélgetésbe, és nézze meg, mit tud önről az AI.
   Minden bejegyzésnél javasolja, hogy megtartsa, javítsa vagy törölje.
2. Írja meg az AI-nak, mely javaslatok érvényesek, például „igen, kivéve a 3. pontot”,
   és az AI végrehajtja a memóriában a változtatásokat. A beállításokban ön is
   nézze át a listát, az AI nem biztos, hogy mindent felsorol.
3. Egy új beszélgetésben kérdezzen rá egy javított dologra. Ha az AI régi választ ad,
   mondja meg, mi az érvényes, vagy törölje a bejegyzést a beállításokban.

Bizonytalan bejegyzésnél segít a kérdés, hogy egy hónap múlva is érvényes lesz-e.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkában használ:

Menj végig velem, mit jegyzel meg rólam, és takarítsd ki.

Írd ki mindazt, amit rólam tárolsz a memóriádban vagy tudsz korábbi beszélgetésekből.
Oszd négy csoportba: ki vagyok és mit csinálok, milyen választ szeretnék és hogyan dolgozz velem,
min dolgozom, hol találok dolgokat (dokumentumok, eszközök, emberek).
Minden tételt egy rövid mondatban fogalmazz meg, és írd mellé, hogy memória vagy korábbi beszélgetés alapján van.

Minden tételnél javasold, hogy megtartsd, javítsd (írd meg az új szöveget), vagy töröld.
Töröld, ami elavult, félreértett vagy csak egy feladatra vonatkozott.
Az azonos tartalmú tételeket egyesítsd.
Ha nem tudod, hogy valami még érvényes-e, kérdezz rá.

Amikor megírom, mi az érvényes, végezd el a változtatásokat a memóriában.
Amit nem tudsz megváltoztatni, írd ki nekem, és hol találom a beállításokban.
A korábbi beszélgetésekből származó, már nem érvényes tételeknél jegyezd meg, mi az aktuális,
és ha tudod, melyik beszélgetésből származik, írd meg nekem.

Végül jegyezd meg ezt a szabályt, és ha hasonló már van, cseréld le:
"Ha kijavítalak, és a javítás a jövőben is érvényes, egy mondatban tárold:
mi az érvényes, miért, és mikor használd.
Ha régebbi bejegyzés van erről a memóriában, írd felül, hogy ne legyen két verzió."
Majd mutasd meg, hogy most milyen a memória.

## Az ön eszközében

### Microsoft Copilot
A Copilot Chatben a `copilot.cloud.microsoft` oldalon jobb felső sarokban
nyissa meg a Beállítások és egyebek, Chat beállítások, Testreszabás menüt,
majd az "Elmentett emlékek" csempénél válassza a "Elmentett emlékek kezelése" lehetőséget.
Egy-egy emléket a kuka ikonra kattintva törölhet, az összeset az "Összes memória törlése" gombbal.
Ha a Copilotnak azt írja a chatben, hogy felejtsen el valamit, azt maga törli.

### ChatGPT
A Beállítások, Személyre szabás, Memória (magyar verzióban ugyanott) alatt vagy
összefoglaló (Memória összefoglaló), ahol egy sort javíthat vagy kiválaszthatja a "Ne említsd újra" opciót,
vagy a "Mentett emlékek" listája, ahol törölhet.
A Codexnek saját memóriája van, amit ugyanott törölhet a "Codex emlékek törlése" opcióval;
promptban ehhez írja hozzá: "Ne módosítsd a memóriát, ami mindig érvényes, azt írd az `AGENTS.md`-be."

### Claude
A Beállítások, Memória menüben a memória témákra (Topics) van bontva:
nyissa meg a témát, javítsa a szerkesztő ikonra kattintva vagy törölje a "Delete" gombbal.
Vállalati tarifákban az szervezet tulajdonosa engedélyezi, és ön kapcsolhatja be.
A Claude Code projektenként külön memóriát vezet `MEMORY.md` fájlokban,
így a promptot minden projektnél futtassa; a mappát a `/memory` parancs nyitja meg.

### Gemini
A Gemini munkahelyi fiókkal nem vezet memóriát, így nem menti a beszélgetéseket.
Ami mindig érvényes, azt a Gem robot (Gems) utasításaiban tartja.
Illessze be a promptot a leggyakrabban használt Gem utasításaival együtt:
az AI ugyanúgy átnézi, mint a memóriát, és a javított verziót visszamenti a Gem-be.
## Mi az az AI memória

Az AI memória, a Beállításokban Memória vagy Memory néven, az a hely,
ahová az AI elmenti, amit önről megtud a beszélgetésekből: ki ön, hogyan szeretné a válaszokat,
min dolgozik. Egyes eszközök a korábbi beszélgetéseit is olvassák, így bekerülhet oda
olyan is, ami csak egy feladatra vonatkozott.

Az AI a memóriát segédletként használja, és maga választ belőle.
Amit minden beszélgetésben érvényesnek kell lennie, azt tegye a [Custom Instructions](card:custom-instructions) közé,
vagyis az állandó utasítások közé, amit ön ír be.

Az eszközök, amelyek a számítógépen mappával dolgoznak, gyakran egyszerű szövegfájlokban vezetik a memóriát.
Az AI közvetlenül módosítja ezeket, és ön megnyithatja, elolvashatja őket.
## Hogy a memória magától karbantartódjon

A prompt végén lévő szabály gondoskodik róla, hogy az AI minden új javítást egy mondatban tároljon,
indokolással, és a régebbi verziót felülírja, így nem halmozódnak fel a memóriában.

Ha az AI a [módban](glossary:workmode) Code dolgozik a számítógépén lévő mappával,
és a memóriát fájlokban vezeti, a takarítás havonta egyszer automatikusan lefuthat.
Adja meg neki ezt a feladatot, és kérje, hogy ütemezze be:

```text
Minden hónap első hétfőjén 9:00-kor menj végig a memóriádon.
Az azonos tartalmú bejegyzéseket egyesítsd.
A régebbi vagy már nem aktuális bejegyzéseket töröld.
Ha bizonytalan vagy, hagyd meg és kérdezz meg engem.
Ha az eszköz maga vezeti a memóriát és a fájlokat nem szabad kézzel módosítani,
ne változtass semmit, csak írd meg, mi nem stimmel.
Végül írj egy összefoglalót: mi lett egyesítve, mi törölve, és mire kérdezel rá.
```

A feladat csak akkor fut, ha a számítógép be van kapcsolva és az alkalmazás nyitva.
Ha már van [heti áttekintése](card:weekly-ai-review), a memória takarítást beillesztheti abba,
nem kell külön feladatként.
Egy szokásos beszélgetésben elég pár havonta újra beilleszteni az AI gyakorlat promptját.
## Példa

Klára Novotná projektkoordinátor egy irodabútorokat gyártó cégnél.
Az új webáruházat szeptemberben indították, októbertől Klára a tavaszi vásárra készíti a standot.
2026. november 3-án kedden beilleszti a promptot, és az AI többek között ezt írja:

```text
### Milyen választ szeretnék
- Rövid válaszokat, legfeljebb öt pontban. Memóriában tárolva, két bejegyzés összevonva.
  Javaslat: megtartani.
- Mindig táblázatban szeretné az eredményeket. Memóriában tárolva.
  Javaslat: törölni, a táblázat csak az augusztusi jelentéshez volt.

### Min dolgozom
- Új webáruház indítását vezeti, határidő szeptember 30. Memóriában.
  Javaslat: javítani "Az e-shop szeptember óta működik, most a vásári standot készíti."
- Szék szállítási reklamációját intézi. Korábbi beszélgetésből "Szék reklamáció".
  Javaslat: tárolni, hogy a reklamáció lezárult.

### Hol találok dolgokat
- A projekt határidejei az "E-shop ütemterv" táblázatban vannak. Memóriában.
  Javaslat: javítani "Vásár 2027" táblázatra.
```

Klára válasza: „igen, kivéve a táblázatot: a határidők áttekintését továbbra is táblázatban kérem”.
Az AI módosítja a táblázatos bejegyzést, javít két másikat, és elmenti, hogy a reklamáció lezárult.
Egy új beszélgetésben Klára írja: „készíts e-mailt a stand szállítójának, mit kérünk tőle november végéig”,
és rövid e-mailt kap, az e-shop említése nélkül.
## Ha elakad

- **Az AI azt írja, hogy nem jegyez meg semmit, vagy csak két általános mondatot:**
  valószínűleg a memória ki van kapcsolva vagy majdnem üres, nincs mit takarítani.
  Kapcsolja be a beállításokban, és ha céges fiókban nem megy, mentse el az állandó utasításokat a
  [Custom Instructions](card:custom-instructions) között.
- **Az AI azt írja, hogy törölt egy bejegyzést, de az még mindig megvan a beállításokban:**
  törölje közvetlenül a memória listából.
  A ChatGPT-ben a beszélgetés törlése nem távolítja el a memóriában tárolt bejegyzést.
- **Az új beszélgetés még mindig a régi információra épül:**
  az AI valószínűleg korábbi beszélgetésből veszi, nem a memóriából.
  Mondja meg az AI-nak, mi az aktuális, hogy elmentse;
  a ChatGPT-ben a régi információ memórias összefoglalójában válassza a "Ne említsd újra" opciót.
  Ha továbbra is visszatér, törölje azt a beszélgetést, amiből veszi.
- **Az AI csak néhány tételt ír ki, pedig a beállításokban több van:**
  kérje meg, hogy menjen végig minden csoporton külön-külön.
  Amit így sem ír ki, javítsa vagy törölje közvetlenül a beállításokban.
## Mi lesz kész

Az AI memóriájában csak a mai érvényes adatok maradnak,
és az új beszélgetésben ellenőrizte, hogy az AI a javított verziót használja.
Az AI tárolja a szabályt, hogyan írja be a következő javításokat, hogy ne legyen duplikáció.
## Mi következik

Az AI egész projektben való működésének szabályait
[a szabályokat tartalmazó fájlba](card:agents-md) írja meg.
Ha rendszeresen szeretné takarítani az egész AI beállítást, nem csak a memóriát,
folytassa a [heti áttekintéssel](card:weekly-ai-review).
## AI memória

**Mi ez:** Az a hely, ahol az AI eltárolja, amit a felhasználóról a beszélgetésekből megtud: javításokat, preferenciákat, neveket és folyamatban lévő munkákat. Az új beszélgetésekben az AI maga választja ki, mi a releváns. Hogy hol található a memória és ki kapcsolhatja be, eszközönként változik.

**Mi nem ez:** Nem állandó utasítások, amelyeket a felhasználó maga ír (Custom Instructions), és nem a beszélgetések előzményei. Amit minden beszélgetésben érvényesíteni kell, az az utasításokban van, mert az AI a memóriából csak a fontosnak ítélt információkat használja fel.

**Miért van rá szüksége a tanulónak:** Segít eldönteni, mit érdemes megjegyezni, mit kell az utasításokba írni, és mikor kell a memóriát tisztítani, hogy az AI ne dolgozzon elavult adatokkal.

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
