# Hozzon létre AI-projektet: háttéranyagok és utasítások minden chathez

Az AI az adott témájú chatjeiből összeállít utasításokat és háttéranyag-listát, így minden új chat a projektben ismeri ezeket.

## Hozzon létre AI-projektet: háttéranyagok és utasítások minden chathez

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy olyan témával, amelyhez már van néhány chatje.
## Mire jó ez

Három héten át AI-val készít kiválasztási folyamatot céges autókra, és minden chatben újra beilleszti a követelményeket. Szerdán elfelejti megemlíteni, hogy a vezetőség elutasította a lízinget, így az AI a háttéranyagokban újra ajánlja a vezetőnek.

A projekt az AI-eszközben egy hely, ahol egy adott témához tartozó összes chat közös utasításokat és fájlokat használ, így az AI már az első mondat előtt tudja, miről van szó és mi az érvényes.
## Mit készítsen elő

- egy témát, amelyhez hetente legalább egyszer visszatér AI-val, például havi hírlevél,
- azt a chatet, amelyben a legtöbb munkát végezte a témán,
- a témához ismételten feltöltött fájlokat: feladatokat, táblázatokat és sablonokat,
- az AI-t, amelyet a munkában használ (ahol vannak projektek, és megjelenik a „Az eszközödben” blokk).
## Hogyan csinálja

1. Illessze be az AI-gyakorlat promptját abba a chatbe, ahol a legtöbb munkát végezte a témán, vagy egy új chatbe a feladattal együtt. Az AI megírja a nevet, az utasításokat és a fájllistát.
2. Hozzon létre egy projektet az AI által adott névvel, illessze be az utasításokat, és töltse fel a listán szereplő fájlokat; a „Az eszközödben” blokk mutatja, hogyan. Helyezze át ide a régebbi témához tartozó chateket is.
3. A projektben nyisson meg egy új chatet, és kérdezzen valami konkrétat, például „Miért zártuk ki a lízinget?”. Az AI az utasítások szerint válaszol, anélkül, hogy bármit be kellene illesztenie.
## AI-gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amelyet a munkában használ:

Szeretnék ehhez a témához egy projektet létrehozni, hogy minden új chat azonnal tudja, miről van szó. Készítsd el mindazt, amit a projektbe be kell tennem.

Nézd át ezt a chatet és az alatta megadott háttéranyagokat. Ha tudsz keresni a korábbi chataimban, keresd meg az összes többi ehhez a témához tartozó chatet is, és azokat is nézd át. A végén írd le, mely chatekből és háttéranyagokból indulsz ki.

Ezután írd meg nekem három dolgot:

1. A projekt neve: rövid, a témához illő, nem a mai feladathoz.

2. A projekt utasításai, amelyeket a beállításokba illesztek be. Írd meg AI-feladatként, legfeljebb egy oldal terjedelemben:
- Miről van szó: cél, kinek szól és határidő.
- Mi az érvényes: elfogadott döntések és kizártak, rövid indoklással.
- Hogyan dolgozzunk: hangnem, hossz, formátum és szabályok, amelyeket a chatekben többször javítottunk.
- Háttéranyagok: mely fájlok érvényesek a projektben és mire szolgálnak.
- Utolsó sorban: „Ha a chatben döntés születik vagy változik egy szabály, amely az egész projektre érvényes, írd meg a válasz végén az érintett sor új szövegét ezekből az utasításokból.”

3. A feltöltendő fájlok listája: azok a fájlok, amelyeket a chatekben csatoltak vagy említettek, mindegyikhez egy mondat, hogy mire szolgál. Ha több verzió létezik, írd meg, melyik az érvényes.

Ne tedd bele az utasításokba a mai feladatot vagy azokat a dolgokat, amelyek csak ezen a héten érvényesek. Ha a chatek alapján nem derül ki, mi az érvényes, vagy két helyen ellentmondás van, egyszerre kérdezz meg mindent tőlem, és csak azután írd meg az eredményt. Az utasításokat egyben írd meg, hogy egyszerre be tudjam illeszteni.

## Az eszközödben

### Microsoft Copilot
A Copilotban a projekthez leginkább a Jegyzetfüzet (Notebook) hasonlít: a `copilot.cloud.microsoft` bal oldali paneljén Jegyzetfüzetek, Új jegyzetfüzet. Fájlokat töltsön fel számítógépről, OneDrive-ról vagy SharePointról, az utasításokat a három ponton keresztül, Instructions és Mentés. Régebbi chatet áthelyez a Chatok listában a három pont és Áthelyezés jegyzetfüzetbe segítségével.

### ChatGPT
A bal oldali panelen válassza az Új projektet. Az utasításokat a jobb felső három pont alatt a Projektbeállításoknál illessze be, a fájlokat a projekt oldalára töltse fel, a régebbi chatet húzza át a projektre vagy válassza az Áthelyezés projektre lehetőséget. A Business és Enterprise vállalati tarifákban a projekt 40 fájlt fogad el, és a Share funkcióval megoszthatja kollégáival.

### Claude
A bal oldali panelen nyissa meg a Projektek menüt, és a + gombbal hozza létre a projektet. Az utasításokat a Projektutasítások beállítása (Set project instructions) alatt adja meg, a fájlokat a projekt tudásánál (+) gombbal töltheti fel, a régebbi chatet az Hozzáadás a projekthez (Add to project) opcióval helyezheti át.

### Gemini
A Gemini-ben a projekthez leginkább a Gem robot hasonlít: a `gemini.google.com` oldalon nyissa meg a Gem robotokat és az Új Gem-et. Adja meg az AI által javasolt nevet, az utasításokhoz illessze be a projekt utasításait, és ha van Gem Custom Instructions, azok szövegét is. A fájlokat a Tudásban a Fájlok hozzáadása gombbal tegye be, majd Mentés; az utasításokat később a Saját Gem robotok részben módosíthatja.
## Mi az a projekt

A [projekt](glossary:project) saját utasításokkal és fájlokkal rendelkezik, amelyek csak az adott projekt chatjeiben érvényesek. A [Custom Instructions](card:custom-instructions), azaz a fiók beállításaiban megadott saját utasítások minden chatben érvényesek, és azok tartalmazzák, amit az AI-nak mindig tudnia kell, például az ön szerepét vagy a kívánt válaszhosszúságot.

A projekt utasításaiba tartozik, ami az egész témára érvényes: cél, szabályok, elfogadott döntések és az érvényes fájl megjelölése. A mai feladat nem tartozik az utasítások közé, azt a projekt chatjében írja meg.
## Hogyan tartsa naprakészen az utasításokat

A téma munka közben változik: a vezetőség új döntést hoz, a beszállító új árat küld. Az utasítások utolsó sora a promptból gondoskodik arról, hogy az AI a chat végén automatikusan megírja az érintett sor új szövegét. Önnek csak be kell illesztenie az utasítások közé a régiek helyett.

Ha az eszközében be van kapcsolva az emlékezet, az AI megjegyzi a projekt többi chatjében tárgyaltakat is. Amit mindig érvényesnek szeretne, tegye be az utasítások közé, mert az AI az emlékezetből önállóan választ, és előfordulhat, hogy valamit kihagy.
## Példa

Petra Malá, egy irodabútorokat árusító cég munkatársa, havonta ír hírlevelet vállalati ügyfeleknek. A hírek és akciók változnak; a hangnem, hossz és az ÁFA nélküli árak állandóak. A szeptemberi chat végén beilleszti a promptot. Az AI javasolja a „Hírlevél vállalati ügyfeleknek” nevet, és megírja az alábbi utasításokat:

```text
Miről van szó: havi hírlevél beszerzőknek és irodavezetőknek, akik tőlünk vásárolnak bútorokat. Minden hónap első keddjén jelenik meg.
Mi az érvényes: árak mindig ÁFA nélkül. Az augusztus óta nem használunk kedvezménykódokat, helyettük 20 000 CZK feletti rendelésnél ingyenes szállítás van.
Hogyan dolgozzunk: három blokk, legfeljebb 80 szóval, magázódás, felkiáltójel nélkül. A végén link a katalógushoz.
Háttéranyagok: nabidka-podzim-2026.xlsx érvényes, nabidka-leto-2026.xlsx már nem. newsletter-zari.docx a hangnem mintája.
Ha a chatben döntés születik vagy változik egy szabály, amely az egész projektre érvényes, írd meg a válasz végén az érintett sor új szövegét ezekből az utasításokból.
```

Petra létrehozza a projektet, feltölti az őszi ajánlatot és a szeptemberi hírlevelet, majd áthelyezi a szeptemberi és augusztusi chatet a projektbe. Október 1-jén a projektben új chatet nyit, és csak annyit ír: „Írd meg az októberi kiadást, az újdonságok a mellékletben vannak.” Az októberi hírlevél ÁFA nélküli árakat, három rövid blokkot és ingyenes szállítást tartalmaz a kedvezménykód helyett, még ha Petra nem is írta ezt a chatben.
## Ha elakad

- **Nem látja a projekteket az eszközben:** a Microsoft Copilotban a Jegyzetfüzet, a Gemini-ben a Gem robot a legközelebb áll a projekthez, a „Az eszközödben” blokkban leírtak szerint. Vállalati fiókban az adminisztrátor kikapcsolhatja a projekteket, kérdezze meg őt.
- **Az AI nem ismeri a feladatot az új chatben:** ellenőrizze, hogy a chat a bal oldali panelen a projekt neve alatt van, és hogy az utasításokat elmentette. Ha az AI mégis rosszul válaszol, kérdezze meg, melyik sor hiányzik az utasításokból, és egészítse ki.
- **Nem férnek be a fájlok a projektbe:** az ingyenes tarifák csak néhány fájlt engednek. Kérje meg az AI-t, hogy készítsen egy összefoglalót a régebbi fájlokból, vagy váltsanak olyan AI-ra, amely
  [közvetlenül a számítógépen lévő mappával dolgozik](card:when-chat-is-not-enough).
- **Az AI más témát kever a projektbe:** a ChatGPT-ben állítsa a Projektbeállításoknál az emlékezetet Csak projektre (Project-only memory) módra. Így a projekt chatjei nem férnek hozzá a projekt nélküli chatekhez vagy az emlékezethez.
## Mi lesz kész

Van egy projektje utasításokkal és fájlokkal egy témához. Egy új chatben ellenőrizte, hogy az AI ismeri a feladatot és a döntéseket. Az utasítások utolsó sora gondoskodik róla, hogy az AI minden változásnál megírja az érintett sor új szövegét.
## Mi következik

Ha AI-val dolgozik Cowork vagy Code módban, azaz közvetlenül a számítógépén lévő mappával, ugyanazt a munkát elvégzi a
[projekt kezdőoldala (README)](card:project-start-here), amelyet az AI maga ment és szerkeszt. Ha a projektben mindig ugyanazt a folyamatot ismétli, például az árak ellenőrzését küldés előtt, készítsen belőle
[készséget (skill)](card:create-skill-from-proven-process): egy elmentett útmutatót, amely alapján az AI minden alkalommal megismétli a lépéseket.
## Projekt / munkaterület

**Mi ez:** Egy munkaterület, ahol az AI hosszú távon használhatja a kapcsolódó beszélgetéseket, utasításokat és anyagokat egy adott témához vagy projekthez. A pontos lehetőségek az eszköztől függnek.

**Mi ez nem:** Nem automatikusan ügynök vagy pusztán egy mappányi fájl.

**Miért van rá szüksége a tanulónak:** Segít felismerni, mikor van szükség tartósabb kontextusra és közös anyagokra a feladat során, ahelyett, hogy mindent új beszélgetésbe kellene ismételten beilleszteni.

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

## Mentés a jövőre

Opcionális termékmechanika használható eredmény létrejötte után. Nem önálló kártya, nincs saját befejezése, és nem növeli a teljesített módszerek számát.

## Mikor jelenik meg
- a felhasználó használhatónak jelölte az eredményt,
- munka közben javított utasítás, stílus, döntési fa, átadás vagy más ismételhető elem keletkezett,
- várhatóan visszatér ugyanaz a munkatípus.

A mechanika nem jelenik meg egyszeri eredmény esetén, amely nem tartalmaz átadható részt, vagy ahol a biztonságos mentés nem tisztázott.

## Mit lát a felhasználó
Rövid választási lehetőség **Mentés a jövőre** a közös check-in mellett. Megnyitás után az AI automatikusan javasolja:

- mi az eredményből ismételten érvényes,
- mi fog minden alkalommal változni,
- mit kell a felhasználónak legközelebb ellenőriznie.

A felhasználó csak megerősíti vagy javítja a javaslatot. A mechanika nem hoz létre további kötelező űrlapot.

## Mit hoz létre az AI
A legkisebb újrafelhasználható eredményt, amely megfelel a tényleges munkának:

- rövid személyes preferenciát,
- utasítást vagy promptot,
- Markdown vagy second brain bejegyzést,
- projekt vagy asszisztens frissítését,
- skill alapját,
- meglévő munkafolyamat módosítását.

Ha már létezik megfelelő artefakt, az AI frissíti annak aktuális verzióját ahelyett, hogy új másolatot készítene.

## Hova tartozik a tartalom
| Tartalom típusa | Alapértelmezett hely |
|---|---|
| Apró személyes preferencia folyamatlépések nélkül | memória vagy profil, ha elérhető és megfelelő |
| Kanonikus utasítás, példa vagy eljárásleírás | Markdown, dokumentum vagy személyes second brain |
| Egy projektre korlátozott kontextus | projektutasítások és fájlok |
| Ismétlődő szerep állandó kontextussal | asszisztens |
| Stabil eljárás szabályokkal, példákkal és sablonokkal | skill |
| Több egymást követő lépés | munkafolyamat; lépések és akciók választásánál esetleg ügynöki ág |

A memória nem kanonikus verziózott eljárástároló. Preferenciát vagy hivatkozást tarthat az aktuális forrásra.

## Ha a célforma nem egyértelmű
A mechanika rövid átadást készít a [Hozzon létre projektet AI eszközében](card:asistent) kártyára. Nem választ formát ember nélkül, és nem helyettesíti az önálló skill kártyát.

## Biztonság és megosztás
- A mechanika ismert, jóváhagyott tárolókat és vállalati szabályokat használ.
- Az adott eset adatait elkülöníti a stabil résztől.
- Jogosultság nélkül nem ír be semmit megosztott rendszerbe, és nem módosít hozzáféréseket.
- Csapatmegosztás csak ismételt használat, tulajdonos kijelölése és további emberi ellenőrzés után kezdődik.

## Nyilvántartás
A check-inhez hozzáadható információ, hogy létrejött vagy módosult egy újrafelhasználható artefakt. Ez nem önálló kártyateljesítés.

## Első támogatott kártyák
- `when-chat-is-not-enough`
- `output-beyond-document`
- `asistent`
- `ai-workflow`
- `deep-research`
- `kontrola-vysledku`
- `custom-instructions`
