# Hozzon létre AGENTS.md fájlt: AI szabályok egy helyen

Az AI egy fájlba jegyzi le az ismételten adott utasításokat, és minden munkánál ezeket követi.

## Hozzon létre AGENTS.md fájlt: AI szabályok egy helyen

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** a mappával, amelyben az AI-val dolgozik.
## Mire jó

Hétfőn ugyanazokat az utasításokat adja az AI-nak az új ajánlathoz, mint múlt héten: az ügyfelet magázza, és az árakat ÁFÁ-val tüntesse fel. Szerdán egy új csevegést nyit a második ajánlathoz, és újra megadja az utasításokat. A kolléganő, aki az ajánlatokat helyettesíti szabadság alatt, más szabályokat használ az AI-ban, így az ügyfél egyszer ÁFÁ-val, máskor anélkül kapja az árakat.

Az `AGENTS.md` egy szabályokat tartalmazó fájl a munkamappájában, amelyet az AI minden munka elején elolvas, így az utasításokat egyszer adja meg, és azok érvényesek a kolléganőre is, aki ugyanabban a mappában dolgozik.
## Mit készítsen elő

- egy mappát, amelyben az AI-val dolgozik, például egy folyamatban lévő projekt mappáját,
- azokat az utasításokat, amelyeket az AI-nak ismételten megad,
- AI-t [Cowork vagy Code](glossary:workmode) módban, amely a számítógépen lévő fájlokkal dolgozik.
## Hogyan csinálja

1. Nyissa meg a Cowork vagy Code alkalmazást az előkészített mappában, engedélyezze a fájlok szerkesztését, és illessze be a promptot. Az AI megkérdezi az utasításokat, beírja azokat az `AGENTS.md` fájlba, és gondoskodik róla, hogy minden munka elején elolvassa.
2. Olvassa el az AI által megjelenített szabályokat. Ha valami nem stimmel vagy hiányzik, mondja meg az AI-nak, és az javítja a fájlt.
3. Egy új csevegésben, lehetőleg egy másik eszközön, adja meg a feladatot, és írja be: „Írd ki a szabályokat tartalmazó fájlokat, amelyeket a munka elején betöltöttek, és a szabályokat, amelyek alapján az eredmény készült.”
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban, a megnyitott mappájában:

Hozz létre ebben a mappában egy AGENTS.md fájlt az AI szabályaival, hogy ne kelljen minden csevegésben és AI eszközben ugyanazokat az utasításokat ismételnem.

Kérdezd meg tőlem azokat az utasításokat, amelyeket leggyakrabban adok az AI-nak. Kérdezz körönként: nyelv és megszólítás, hogyan írjunk, mit soha ne tegyünk, és mit ellenőrizzünk leadás előtt. Ha beillesztek saját utasításokat más AI eszközből, vagy ha ebben a mappában találsz AI szabályokat tartalmazó fájlt, vedd át belőlük azokat az utasításokat, amelyek minden munkára érvényesek.

Minden szabályt egy sorban írj meg konkrét utasítással, például „Az árakat ÁFÁ-val és pénznemmel írd”. Az általános tanácsokat, mint „légy pontos”, írd át konkrét utasításra. Ha nem világos, miért érvényes a szabály, írj mellé indoklást. A szabályokat csoportosítsd címek alá, és tartsd röviden, hogy egy képernyőn elférjen.

A fájl végére írj egy szabályt: „Ha kijavítasz, és a javítás a jövőben is érvényes, írd be az AGENTS.md-be új szabályként, és mondd el, mit adtál hozzá.”

Ezután ellenőrizd, hogy ez az eszköz automatikusan elolvassa-e az AGENTS.md-t minden munka elején ebben a mappában. Ha nem, állítsd be úgy, hogy automatikusan betöltődjön; Cowork esetén írd be a mappa utasításaiba. Ha átvetted a szabályokat más AI szabályfájlból, hagyj benne csak egy sort, amely betölti az AGENTS.md-t, hogy ne legyenek szabályok két helyen, és mondd el, mit változtattál. Ha nem tudod magad beállítani, írd meg, hol és mit kell beilleszteni a beállításokban.

Végül mutasd meg a kész AGENTS.md-t, és írd meg, hogy az eszköz automatikusan olvassa-e, vagy mit állítottál be.

## Az Ön eszközében

### Microsoft Copilot
A Copilot Chat nem olvassa a fájlt: a prompt végére írja be, hogy „Nincs mappád, írd meg nekem a szabályokat szövegként a Custom instructions-hoz.”, és ezt a szöveget illessze be a Beállítások és egyebek, Csevegés beállításai, Személyre szabás menübe. A 3. lépést új csevegésben tegye meg azzal a kérdéssel, hogy mely szabályok alapján készült az eredmény. Coworkban a Csevegés kapcsoló mellett a szabályok a Testreszabás, Preferenciák alatt vannak.

### ChatGPT
A ChatGPT asztali alkalmazásban váltson Codex módra, és válassza a mappa megnyitását; a Codex automatikusan olvassa az `AGENTS.md`-t. A normál csevegésben az AI a szabályokat szövegként írja ki a Custom instructions-hoz (Beállítások, Személyre szabás) vagy a projekt utasításaihoz (Projekt beállítások). A 3. lépést új csevegésben végezze el, és kérdezze meg, mely szabályok alapján készült az eredmény.

### Claude
A Claude Code automatikusan olvassa az `AGENTS.md`-t. A Coworkban, amelyet a Claude asztali alkalmazásban nyit meg és kiválaszt egy mappát, az AI beírja a mappa utasításaiba (Folder instructions), hogy olvassa a fájlt. A normál csevegésben a Claude szabályok a projekt utasításaiban vannak (Set project instructions).

### Gemini
A Gemini nem olvassa az `AGENTS.md`-t, és a vállalati fiókoknak nincs memóriájuk. Illessze be a promptot a Gemini-be, és mentse el a szabályokat a Share & export, Export to Docs funkcióval. A Gems, New Gem-ben írja be az utasításokhoz: „Kövesd a mellékelt dokumentum szabályait”, és adja hozzá a dokumentumot a Knowledge-hez. A 3. lépést egy új csevegésben végezze el ezzel a Gem-mel, amelyet megoszt a kollégákkal a Share funkción keresztül.
## Mi az az AGENTS.md

Az `AGENTS.md` egy egyszerű szöveges fájl az AI szabályaival: milyen nyelvet használjon, hogyan írjon, mit soha ne tegyen, és mit ellenőrizzen leadás előtt. Nevét az [agentekről](glossary:agent) kapta, azaz az AI-ról, amely önállóan dolgozik fájlokkal és lépéseket tesz az Ön helyett. A `.md` kiterjesztés a [Markdown](glossary:markdown) formátumot jelzi, amelyben a sor elején lévő `###` jelek címsorokat jelölnek.

Számos eszköz Code módban automatikusan elolvassa a fájlt minden munka elején abban a mappában, ahol az található. Ha az eszköz ezt nem tudja, az AI elmenti a szabályt az eszköz beállításaiba, vagy megmondja, hova kell beilleszteni. Ha az AI-t kijavítja, az új szabályt beírja a fájlba.

A fájlba azok az utasítások tartoznak, amelyek minden munkára érvényesek abban a mappában; az egy feladathoz tartozó anyagokat és egyszeri kéréseket hagyja a csevegésben. Ha az AI a 3. lépésben kihagy egy az adott feladathoz illő szabályt, kérje meg, hogy írja át világosabban.

A normál csevegés nem olvassa automatikusan az `AGENTS.md`-t. Ha csak csevegést használ, mentse el az utasításokat a [saját utasításokba](card:custom-instructions); a Cowork vagy Code módra váltást a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) kártya mutatja.
## Hagyja, hogy a szabályok maguktól frissüljenek

Az AGENTS.md végén lévő szabály gondoskodik róla, hogy ha kijavítja az AI-t, és a javítás a jövőben is érvényes, az AI beírja azt a fájlba. Néhány hét múlva azonban a szabályok ismétlődhetnek vagy ellentmondhatnak egymásnak, és a hosszabb fájlt az AI nehezebben tartja be. Ha röviden szeretné tartani, hagyja, hogy az AI havonta egyszer takarítsa a fájlt egy ütemezett feladattal. Adja meg az AI-nak Cowork vagy Code módban ezt a feladatot, és kérje meg, hogy hozzon létre egy ütemezett feladatot:

```text
Minden hónap első péntekjén 16:00-kor nézd át az AGENTS.md fájlt ebben a mappában. Az azonos tartalmú szabályokat egyesítsd, és rendezd a megfelelő címsorok alá. A végén írd meg, mit változtattál, és sorold fel az ellentmondó szabálypárokat, hogy eldönthessem, melyik érvényes.
```

Ha a feladat a számítógépén lévő fájlokkal dolgozik, csak akkor fut, ha a számítógép be van kapcsolva és az alkalmazás nyitva van.
## Példa

Lucie ügyfélszolgálatot vezet egy konyhai készülékeket árusító webáruházban, és két eszközben ír válaszokat reklamációkra, amelyek a számítógépen lévő mappával dolgoznak. 10. 12-én hétfőn megnyitja az első eszközben a `Reklamace` mappát, és beilleszti a promptot. Válaszol a kérdésekre, beilleszti a saját utasításait, amelyeket a normál csevegésben tárol, és az AI ezt írja:

```text
### Nyelv és megszólítás
- Írj csehül, és magázd az ügyfeleket.
- Írd alá „Lucie Králová, ügyfélszolgálat” néven.

### Hogyan írjunk
- Az első mondatban írd le, mit teszünk az ügyfélért.
- A válasz legfeljebb hat mondat legyen, és ne tartalmazzon bevezető kifejezéseket, mint például „Remélem, jól van”.

### Mit soha ne tegyünk
- Ne ígérj pénzvisszatérítést. Erről a reklamációs menedzser dönt.

### Mit ellenőrizzünk leadás előtt
- Az rendelési számot és határidőket hasonlítsd össze az ügyfél e-mailjével.

### Hogyan egészítsük ki a szabályokat
- Ha kijavítasz, és a javítás a jövőben is érvényes, írd be az AGENTS.md-be új szabályként, és mondd el, mit adtál hozzá.
```

Az AI elmenti a fájlt, és gondoskodik róla, hogy az eszköz minden munka elején elolvassa. Kedden Lucie megnyitja ugyanazt a mappát a második eszközben, és csak annyit ír: „Válaszolj Mrs. Dvořáková mixergép reklamációjára az e-mailje alapján a mappában.” Majd hozzáteszi: „Írd ki a szabályokat tartalmazó fájlokat, amelyeket a munka elején betöltöttek, és a szabályokat, amelyek alapján a válasz készült.” Az AI megjeleníti az `AGENTS.md`-t, a választ magázva és aláírással írja meg, és felsorolja a négy szabályt. Az első mondatra vonatkozó szabályt kihagyta, és a válasz bocsánatkéréssel kezdődik. Lucie kéri, hogy írja át világosabban, és az `AGENTS.md` most így szól: „A választ kezd azzal a mondattal, hogy mit teszünk az ügyfélért és meddig, például: 'A mixert péntekig, 10. 16-ig kicseréljük.' A bocsánatkérést csak ezután írd.”
## Ha elakad

- **Az AI azt állítja, hogy elmentette a fájlt, de a mappában nincs meg:** valószínűleg normál csevegésben dolgozik, amely nem tud fájlokat módosítani a számítógépen. Váltson [Cowork vagy Code](card:when-chat-is-not-enough) módra, és nyissa meg ott a mappát.
- **Az `AGENTS.md` hiányzik a betöltött fájlok közül:** nyisson meg csevegést közvetlenül abban a mappában, ahol az `AGENTS.md` található, ne annak almappájában. Ha akkor is hiányzik, írja: „Állítsd be, hogy az `AGENTS.md` betöltődjön ebben az eszközben minden munka elején.”
- **Az AI csak néha tartja be a szabályt:** a szabály valószínűleg általános, például „írj tömören”. Kérje meg az AI-t, hogy írja át konkrét utasításra, például „legfeljebb hat mondat”.
- **Szabályokra szükség van másik mappában is:** kérje meg az AI-t, hogy mentse el ezeket az eszköz közös utasításaiba, amelyek minden mappára érvényesek.
## Mi lesz kész

A mappában van egy `AGENTS.md` fájl az Ön által korábban ismételt utasításokkal, és azokat az eszközök, amelyekben kipróbálta, minden munka elején elolvassák. Egy új csevegésben ellenőrizte, hogy a fájl betöltődött, és mely szabályokat használta az AI, valamint átírta a nem egyértelmű szabályokat. Ha legközelebb kijavítja az AI-t, az új szabályt beírja a fájlba.
## Mi következik

Ha egy szabályból több lépésből álló eljárás lesz, például havi jelentés készítése, kérje meg az AI-t, hogy készítsen belőle [újrahasználható útmutatót](card:create-skill-from-proven-process). Ha ugyanazokat az anyagokat és szabályokat az egész csapatnak kell használni, kérje meg az AI-t, hogy írjon [README fájlt a projekthez](card:project-start-here).
## Ügynök

**Mi az:** Olyan AI rendszer, amely adott cél elérése érdekében több lépést tervezhet, használhatja a rendelkezésre álló eszközöket, kezelheti az állapotot, és végrehajthatja az engedélyezett műveleteket. A képességek köre és az önállóság mértéke az adott eszköztől és jogosultságoktól függ.

**Mi nem:** Nem csupán egy eltárolt prompt vagy egy átnevezett asszisztens fejlettebb funkciónak.

**Miért van rá szüksége a tanulónak:** Segít felismerni azokat a feladatokat, amelyek eszközöket, jogosultságokat, ellenőrzési pontokat és egyértelmű felelősséget igényelnek a műveletekért.

## Markdown

**Mi ez:** Egyszerű, tiszta szöveges formátum, amelyben a címsorokat, listákat, hivatkozásokat és egyéb szerkezeti elemeket néhány általános karakterrel lehet jelölni. A fájlok általában `.md` kiterjesztést használnak.

**Mi nem:** Nem programozási nyelv, és nem csak fejlesztőknek szánt formátum.

**Miért van rá szüksége a hallgatónak:** Könnyen olvasható és szerkeszthető marad emberek és AI számára is, és különböző eszközök között átvihető.

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
