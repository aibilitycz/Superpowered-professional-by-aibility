# Tokeneket takarítson meg: tartson ki az AI-korlát egész héten

A hosszú csevegés munkáját áthelyezheti egy újba, az AI nem felejt el, és a korlát tovább kitart.

## Tokeneket takarítson meg: tartson ki az AI-korlát egész héten

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy hosszú csevegéssel.
## Mire jó

Már három hete egyetlen csevegésben készít egy vásárt az AI-val. Az utóbbi napokban az AI lassabban válaszol, összekeveri a régi árlista verziókat az újakkal, és szerdán délután közli, hogy kimerítette a heti korlátot. Így a pénteken leadandó ajánlatot AI nélkül fejezi be.

Az AI minden új üzenettel újraolvassa az egész csevegést, ezért a legtöbbet akkor takarít meg, ha a hosszú csevegést egy újra cseréli, amely egy rövid összefoglaló alapján folytatja.
## Mit készítsen elő

- azt a csevegést, amelyben egy projekten dolgozik a leghosszabb ideje,
- az AI-t, amelyben ezt a csevegést vezeti.
## Hogyan csinálja

1. Illessze be a promptot abba a csevegésbe, amelyben a leghosszabb ideje dolgozik. Cowork vagy Code AI esetén az összefoglalót a `handoff.md` fájlba, a szabályokat az `AGENTS.md`-be menti, a normál csevegésben válaszként és memóriába teszi.
2. Olvassa el az összefoglalót, javítsa ki, ami nem stimmel, majd nyisson új csevegést: Cowork vagy Code esetén írja be, hogy „Folytasd a `handoff.md` alapján”, normál csevegésben illessze be az összefoglalót és a hozzá tartozó fájlokat.
3. Ha az eszköze mutatja a korlátot, nézze meg, mennyi maradt és mikor újul meg. Hol találja, azt a „Az ön eszközében” blokk mutatja.

Az összefoglalóba csak az kerül, amire az új csevegésnek a további munkához szüksége van.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amelyet a munkához használ:

Ez a csevegés hosszú, és minden új üzenettel újraolvasod az egészet, így csökkented a korlátomat, és rosszabbul válaszolsz benne. Készítsd elő a munka áthelyezését egy új csevegésbe, és állíts be szabályokat, hogy ez ne ismétlődjön meg.

Először írj egy összefoglalót, amely alapján az új csevegés folytatja, anélkül, hogy ezt a csevegést olvasná. Oszd fel ezeket a címsorokat használva, és írd őket ###-gal:
- Cél,
- Kész,
- Érvényes: döntések és szabályok, amelyekben megegyeztünk,
- Marad: a következő lépések sorrendben,
- Fájlok a további munkához: csak azok, amelyekre a következő lépésekhez tényleg szükség van.
Legyél egy oldal terjedelmű. Ne írj át a csevegés menetén, és hagyd ki a zsákutcákat. Ha nem vagy biztos benne, hogy valami még érvényes-e, kérdezz meg engem.

Ezután írd le a további munkára vonatkozó szabályokat:
- Ha a csevegés hosszú lesz vagy befejezünk egy feladatot és egy másikat kezdünk, írj új összefoglalót ugyanebben a formában, és javasold, hogy folytassuk új csevegésben.
- A munka elején az összefoglalóra támaszkodj, és csak azokat a fájlokat használd, amelyekre a feladatnak szüksége van. Ne böngészd végig az egész mappát, és ne kérj tőlem olyan mellékleteket, amelyekre a feladatnak nincs szüksége.
- Tömeges munkánál, ahol ugyanaz a döntés ismétlődik több tucat vagy száz tételnél, használd olcsóbb modellt: ha tudod, indíts almodelleket kisebb modellel, különben mondd meg, melyik modellre váltsak. Csak az eredményt hozd vissza a fő csevegésbe.

Hová mit ments:
- Ha a projekt mappájában dolgozol, mentsd az összefoglalót a handoff.md fájlba, és ha már létezik, írd felül, és tartsd meg a formátumát. A szabályokat add hozzá az AGENTS.md fájlhoz, és ha nincs, hozd létre. Gondoskodj róla, hogy az AGENTS.md-t ebben az eszközben minden munka elején elolvasd; Coworkban ezt írd be a mappa utasításaiba.
- Ha nincs hozzáférésed a projekt mappájához, ne hozz létre letölthető fájlokat. Az összefoglalót írd válaszként, a szabályokat pedig mentsd memóriába; ha nincs bekapcsolva a memória, írd a szabályokat az összefoglaló alá, hogy be tudjam illeszteni az új csevegésbe.

Végül egy mondatban írd meg, mi foglalta el a legtöbb helyet ebben a csevegésben, hogy legközelebb elkerüljem.

## Az ön eszközében

### Microsoft Copilot
A Microsoft nem teszi közzé a Copilot licenc szerinti korlátait, és a fogyasztás áttekintése sem elérhető; a licenc prioritást biztosít a hozzáféréshez. Az áthelyezés új csevegésbe itt is segít, mert az AI csak az összefoglalót olvassa, és nem keveri össze a régi verziókat az újakkal. A szabályokat a Copilot elmenti a memóriába (Saved memories a Beállítások és egyebek, Csevegés beállításai, Személyre szabás).

### ChatGPT
A vállalati tarifákban a normál modell szinte korlát nélkül használható, de a hosszabb gondolkodású modelleknek és a Codexnek van korlátja. Ha azt kimeríti, a ChatGPT másik modellel folytatja, és megmutatja, mikor újul meg a korlát. A Codex fogyasztását a Beállítások, Használat mutatja, illetve a Codexben a `/status` parancs (beleértve a szabad helyet a csevegésben); a normál csevegésben nincs ilyen áttekintés.
A szabályokat az AI a normál csevegésben memóriába menti (Beállítások, Személyre szabás, Memória).

### Claude
Claude-nak van korlátja öt óránként és heti korlátja is; mindkettőbe beleszámít a normál csevegés, Cowork és Claude Code is. A maradékot a Beállítások, Használat mutatja, Claude Code-ban a `/usage` parancs; a `/context` parancs megmutatja, mi foglal helyet a csevegésben. Tömeges munkához elég a kisebb Haiku vagy Sonnet modell az erősebb Opus helyett.

### Gemini
A maradék korlátot a Gemini-ben a Beállítások (bal alsó sarok), Használati korlátok alatt találja. Az erősebb modelleknek több órás vagy napi üzenetkorlátja van, és ha elfogy, ugyanabban a csevegésben a gyorsabb Fast modellel folytathatja. A vállalati fiókoknak nincs memóriájuk, ezért a szabályokat mentse el a Gemben (Gems, New Gem, Instructions), és az új csevegést a 2. lépésben nyissa meg ott.
## Mik azok a tokenek és korlátok

Az AI szöveget darabokra, úgynevezett tokenekre bontva olvas és ír; egy token nagyjából egy szó része. A tokenekből számítják a korlátot, amelyet előfizetés vagy a cég állított be. Hogy az ön eszköze hogyan számolja, azt a „Az ön eszközében” blokk mutatja.

A hosszú csevegés drága, mert az AI minden új üzenettel az egész csevegést az elejétől olvassa, beleértve minden mellékletet is. Ezért egy rövid kérdés is egy reggeltől futó csevegésben a teljes csevegés korlátját csökkenti. Minden csevegésnek van egy kontextusablaka, vagyis mennyi szöveget tud az AI egyszerre kezelni. Ha ez megtelik, az AI a régebbi részből csak egy rövid összefoglalót tart meg, ezért felejt el, miről állapodtak meg.

A `handoff.md` egy egyszerű szövegfájl a projekt mappájában, amely mindig csak a munka aktuális állapotát tartalmazza. Ugyanez a fájl szolgál a munka [átadására](card:handoff) kollégának. A `###` jelek címsorokat jelölnek; ezt a formátumot [Markdownnak](glossary:markdown) hívják. Az `AGENTS.md` egy szabályokat tartalmazó fájl ugyanabban a mappában az AI számára. Sok eszköz Code módban automatikusan elolvassa minden munka elején; ahol nem tudja, az AI a szabályt elmenti a beállításokba, vagy megmondja, hová kell beilleszteni.
A [Podagent](glossary:subagent) egy segéd AI, amelyet a fő AI indít részfeladatokra. Saját csevegésben dolgozik, és csak az eredményt adja vissza, így a fő csevegés rövid marad.

Ha nincs bekapcsolva a memória, az AI a szabályokat az összefoglaló alá írja, és ön beilleszti az új csevegésbe. Ahhoz, hogy az AI maga mentse az összefoglalót a projekthez, Cowork vagy Code [módban](glossary:workmode) kell lennie; a váltás módját a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) kártya mutatja.
## Hagyja, hogy az AI maga takarékoskodjon

Az `AGENTS.md` szabályai minden új csevegésben érvényesek a projekt mappájában. Az AI maga javasol új csevegést, ha a jelenlegi hosszú lesz, csak a feladathoz szükséges fájlokat olvassa, és a tömeges munkát olcsóbb modellre küldi. Tömeges rendezéshez vagy átfésüléshez kisebb modell is elég, és kevesebb korlátot fogyaszt.

Ha több projekten dolgozik, engedje, hogy a szabályok mindenhol érvényesek legyenek. A Code mód eszközei a projekt szabályai mellett általános szabályokat is tartalmaznak az összes projektjére. Csak írja be bármelyik projektben:

```text
Add hozzá az AGENTS.md tokenmegtakarító szabályait ebbe a mappába a saját szabályaidhoz, amelyek az összes projektemre érvényesek.
```

Hogyan takarítson meg a parancsok és válaszok hosszán is, azt a „Hogyan takarékoskodjunk Code módban” blokk mutatja.
## Hogyan takarékoskodjunk Code módban

A [Code módban](glossary:workmode) az AI a legtöbbet akkor takarít meg, ha a nagy kereséseket a fő csevegésen kívül futtatja, és lerövidíti a munka közben olvasott és írt szövegeket.

A nagy kereséseket, például 300 szerződésben a szerződéses büntetések keresését, az AI egy [podagenthez](glossary:subagent) küldi, amely csak az eredményt adja vissza a fő csevegésbe. A podagent is fogyaszt korlátot, ezért csak olyan keresésekhez használja, amelyek eredményei különben megtöltenék a fő csevegést.

Ha a csevegés mégis megtelik, az AI a régebbi részt rövid összefoglalóra cseréli, és folytatja a munkát. Ez is csökkenti a korlátot, mert az AI az egész csevegést olvassa, és a régebbi üzenetekből csak a fő pontok maradnak meg. A feladat befejezése után ezért olcsóbb új csevegést kezdeni a `handoff.md` alapján. Hogy mi foglal helyet a csevegésben, azt egy parancs mutatja, amelyet az üzenetmezőbe ír; melyik ez, azt a „Az ön eszközében” blokk mutatja.

Két további megtakarítás telepítést igényel. A Code módban az AI parancsokat futtat munka közben, például táblázatot alakít át vagy fájlok változásait vizsgálja, és mindent elolvas, amit ezek kiírnak. Az ingyenes RTK eszköz a szerzők szerint 60–90%-kal lerövidíti a szokásos parancsok kimenetét, mielőtt az AI elolvasná. A Caveman plugin, az AI kiegészítője, a válaszokat pár szóra rövidíti a csevegésben, mintha barlangi ember beszélne. Ha nem tetszenek a rövid válaszok, írja be, hogy „stop caveman”, és a csevegés végéig az AI úgy válaszol, mint korábban; végleg kikapcsolja, ha kéri.

A prompt szerint az AI először beírja a szabályokat, és csak az ön megerősítése után telepíti az eszközöket. Ha céges gépen nem szabad telepíteni vagy nem tudja, ír egy üzenetet az IT adminisztrátornak.

Illessze be ezt a promptot a Code módban nyitott AI-ba a mappájában:

```text
Állítsd be a tokenmegtakarítást Code mód munkához.

1. Add hozzá az AGENTS.md-hez ezeket a szabályokat (ha nincs, hozd létre), és gondoskodj róla, hogy ezt az eszköz minden munka elején elolvassa:
- Ha a feladat egész mappában keresést vagy hosszú kimenetek olvasását igényli, indíts podagentet kisebb modellel, ha tudod, és csak az eredményt hozd vissza a fő csevegésbe.
- Ha RTK-t használsz, fájlokat olyan paranccsal hasonlíts össze, amit az RTK nem rövidít (Mac-en és Linuxon /usr/bin/diff, Windowson fc.exe), mert a rövidített összehasonlítás figyelmen kívül hagyhat különbségeket.
- A fájlokba írt szövegeket teljes egészében írd, még ha a csevegésben röviden válaszolsz is.

2. Ezután két mondatban mondd el, mit telepítesz, honnan, és mit változtat ez az összes projektemben, majd várd meg, hogy megerősítsem, hogy a cégnél szabad és akarom a telepítést:
- RTK a github.com/rtk-ai/rtk README-je szerint, nem a cargo install rtk-vel. Claude Code-ban a rtk init -g --auto-patch, Codexben a rtk init -g --codex paranccsal aktiváld. Ellenőrizd, hogy az rtk gain mutatja a megtakarításokat; ha nem ismeri a parancsot, más csomagod van rtk néven, távolítsd el, és telepítsd újra az RTK-t.
- Caveman a github.com/JuliusBrussee/caveman útmutatója szerint, hogy a csevegésben röviden válaszolj, és automatikusan induljon minden munka elején.

Ha valami akadályozza a telepítést, például hiányzó jogosultság, rendszergazdai jelszó vagy bizonytalan vagyok a telepítésben, hagyd abba, és írj egy rövid üzenetet az IT adminisztrátornak. Ha nekem kell befejeznem, pontosan írd meg, mit kell tennem. Végül mondd el, mit állítottál be, kell-e új csevegést nyitnom vagy eszközt újraindítanom, és hogyan állíthatom vissza, ha valami nem működik.
```
## Példa

Lucie koordinálja cégének részvételét az októberi vásáron. Szeptember 21-től Code módban, egy csevegésben dolgozik a projekt mappájában. Október 7-én, szerdán látja, hogy a heti korlát 85%-át kimerítette, és az AI az invitációban koronában írja az árakat, pedig két hete döntöttek, hogy euróban legyenek. Lucie beilleszti a promptot, és az AI a `handoff.md`-be írja:

```text
### Cél
Előkészíteni a standot az október 20–23-i vásárra, és meghívni az ügyfeleket.

### Kész
- Stand megrendelve, grafika jóváhagyva október 2-án.
- Meghívó szövege kész, az árakat euróra kell átírni.

### Érvényes
- Az árakat csak euróban adjuk meg.
- Meghívót csak azok az ügyfelek kapnak, akik az elmúlt két évben vásároltak.

### Marad
1. 1400 kontakt szétválogatása a tavalyi vásárról.
2. Az árak javítása a meghívóban és kiküldése október 14-ig.

### Fájlok a további munkához
- kontakty-veletrh-2025.xlsx
- cenik-2026.pdf
```

Az AI még hozzáteszi, hogy a legtöbb helyet három teljes árlista verzió foglalta el, amelyeket Lucie fokozatosan töltött fel. Lucie új csevegést nyit, beírja, hogy „Folytasd a `handoff.md` alapján”, és az AI azonnal átírja az árakat euróra a meghívóban. A kontaktok szétválogatásához az AI a szabály szerint kisebb modellel podagenteket indít, és csak az eredményt hozza vissza: 230 ügyfelet személyesen meghívni, 760-at e-mailben, 410-et kizárni, mert az elmúlt két évben nem vásároltak vagy kétszer szerepelnek a listán.
## Ha elakad

- **Elfogyott a korlát:** várjon, amíg megújul; a pontos időt a korlátról szóló üzenet mutatja. A gyakorlatot akkor végezze el először, mielőtt folytatná a régi csevegést.
- **Az AI azt állítja, hogy elmentette az összefoglalót, de a `handoff.md` nincs a mappában:** valószínűleg normál csevegésben dolgozik, amely nem tud fájlokat menteni. Az összefoglaló a válaszban van; ha a projekt mappájában szeretné, váltson [Cowork vagy Code módra](card:when-chat-is-not-enough).
- **Az új csevegés nem ismeri az egyeztetett dolgokat:** írja be neki, és kérje, hogy egészítse ki az összefoglaló „Érvényes” részénél.
- **Az olcsóbb modell hibázik tömeges munkánál:** ellenőrizzen véletlenszerűen tíz tételt. Pontosítsa a szabályt, amely szerint az AI szortíroz, és ha nem segít, indítson erősebb modellt csak a vitatott tételekre.
## Mi lesz kész

A folyamatban lévő munka egy új, rövid csevegésben van, amely az összefoglaló alapján folytatja, és a régi hosszú csevegésre már nincs szükség. Cowork vagy Code módban az összefoglaló a `handoff.md`-ben van, az AI-takarékossági szabályok az `AGENTS.md`-ben; normál csevegésben az AI a memóriában tartja a szabályokat, vagy az új csevegésben kapta meg az összefoglalóval együtt.
## Mi következik

Mikor érdemes erősebb modellt használni, azt a [modellválasztás a feladathoz](card:modely) mutatja. Ha hosszabb idő után ön vagy kollégája visszatér a projekthez, adjon neki állandó [projekt kezdőoldalt](card:project-start-here); a `handoff.md`-ben csak a folyamatban lévő feladat marad.
## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Alügynök

**Mi ez:** Egy önálló ügynök, akit a koordináló ügynök hoz létre egy adott részfeladat elvégzésére. Saját feladatleírást és kontextust kap, külön dolgozik, majd az eredményt visszaküldi a koordinátornak.

**Mi nem ez:** Nem egyszerűen egy beszélgetés elágazása. A fork új ágat hoz létre egy ember számára; az alügynököt a koordinátor maga indíthatja el, irányíthatja, és bevonhatja a közös eredménybe.

**Miért van rá szüksége a hallgatónak:** Segít megkülönböztetni a manuális, párhuzamos munkát több csevegésben attól az ügynöki felállástól, ahol a részfeladatok delegálását és nyomon követését a koordinátor végzi.

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
