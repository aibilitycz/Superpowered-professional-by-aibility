# Állítsa be az ügynök jogosultságait: mit tehet önállóan, és mit soha Ön nélkül

Az AI többé nem kérdez rá a rutinfeladatokra, és e-mail küldése vagy adat törlése előtt megvárja az Ön jóváhagyását.

## Állítsa be az ügynök jogosultságait: mit tehet önállóan, és mit soha Ön nélkül

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** azzal a mappával, amelyben az AI dolgozik.
## Mire jó

Az ügynöknek ebédig ki kell egészítenie az új árlistát 20 ajánlatban, egy óra után pedig az elsőnél vár, és azt kérdezi, mentheti-e a fájlt. Egy kolléganő úgy oldotta meg, hogy az ügynökének mindent engedélyezett, és az egy hasonló feladatnál egyből elküldte az ügyfélnek az ajánlatot, amelyet még senki sem ellenőrzött.

Segít szétválasztani az [ügynök](glossary:agent) munkáját rutinfeladatokra, amelyeket a jogosultsági mód szerint kérdezés nélkül elvégez, és az `AGENTS.md`-ben lévő kemény határokra, az AI szabályfájljára, amelyeknél megáll és megvárja Önt.
## Mit készítsen elő

- azt a mappát, amelyben az AI-val dolgozik; az `AGENTS.md`-nek nem kell benne lennie,
- egy valós feladatot, amely kimenő e-maillel zárul, például riportot vagy ügyfélnek szánt választ,
- a levelezést AI-hoz csatlakoztatva egy [konektoron](card:plugin-connector) keresztül, hogy az e-mailt az Ön „KÜLDÉS” utasítása után maga küldje el,
- AI-t [módban](glossary:workmode) Cowork vagy Code ([hogyan váltson át rá a csevegésből](card:when-chat-is-not-enough)).
## Hogyan csinálja

1. Illessze be a promptot, és mondja meg az AI-nak, mi számít önöknél rutinnak, és mi az, amit nem lehet visszacsinálni. Az AI kideríti, hogyan vannak most beállítva a jogosultságai, és két listát javasol.
2. Javítsa és hagyja jóvá a listákat. Az AI beírja őket az `AGENTS.md`-be, és megmondja, melyik jogosultsági módot válassza, és hol tudja átváltani.
3. Egy új chatben adja meg az előkészítésben szereplő feladatot. Az AI-nak a rutint kérdések nélkül kell elvégeznie, az e-mailnél pedig meg kell állnia: megmutatja a piszkozatot, és az Ön „KÜLDÉS” utasítása nélkül semmi sem megy ki.

A „Soha nélkülem” listára azok a lépések kerülnek, amelyeket nem lehet visszacsinálni, vagy amelyek a cégen kívülre mennek, és általában elég öt-hat-nyolc tétel.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) a Cowork vagy Code módban lévő AI-ba,
megnyitva az Ön mappájában:

Állítsd be, hogy ebben a mappában mit csinálhatsz önállóan, és hol állsz meg mindig, és vársz rám. A rutinfeladatokról ne kérdezz; azokról a lépésekről viszont, amelyeket nem lehet visszacsinálni, minden alkalommal állj meg.

Először derítsd ki, milyen jogosultsági módban dolgozol most, és milyen engedélyek vagy tiltások vannak eltárolva ebben az eszközben. Ha a módot nem lehet kideríteni, vagy az eszköz nem tud róla, írd meg, és ne találgass. Ha a mappában van AGENTS.md, olvasd el. Ezután kérdezz meg két dolgot: mely rutinlépéseknél kell téged továbbra is jóváhagynom, és mely műveletek a munkámban nem vonhatók vissza vagy kifelé mennek, például ügyfeleknek küldött e-mailek, fizetések, törlés, közzététel vagy változtatások megosztott táblázatokban és rendszerekben.

A válaszokból javasolj két listát:
- Önállóan csinálhatod: rutin, amelyet kérdezés nélkül végzel, például fájlok olvasása és szerkesztése ebben a mappában, szokásos parancsok futtatása és piszkozatok előkészítése.
- Soha nélkülem: öt-hat-nyolc kemény határ, vagyis olyan lépések, amelyek nem vonhatók vissza vagy kifelé mennek, és mindegyikhez adj egy eljárást, amely szerint megállsz. Az e-maileknél és a cégen kívüli üzeneteknél: készíts piszkozatot, mutasd meg nekem a címzettet, a tárgyat és a teljes szöveget, és csak akkor küldd el, amikor külön üzenetben elküldöm neked a KÜLDÉS szót; ha küldeni nem tudsz, mentsd el a piszkozatot a postafiókba, és ezt írd meg nekem. Olyan adatok törlésénél, amelyek nem állíthatók helyre: írd ki pontosan, mit törölsz, és várj két megerősítést két üzenetben. Minden más alkalmazásba történő írás után töltsd be újra az eredményt, és mutasd meg nekem. Jelszavakat és hozzáférési kulcsokat soha ne illessz be sem a chatbe, sem fájlokba; ha bejelentkezésre van szükség, kérj meg, hogy én csináljam meg a jelszókezelőn keresztül.
Ha kivételt kérek, írd fel a „Kivételek” cím alá egyetlen mondatban, feltétellel együtt, például: „Önállóan elmentheted az ajánlatot a megosztott mappába, ha azt a chatben jóváhagytam.”

Mutasd meg mindkét listát, és várj, amíg kijavítom vagy jóváhagyom őket. Ezután írd be az AGENTS.md-be az „Önállóan csinálhatod” és a „Soha nélkülem” címszavak alá; ha a fájl nem létezik, hozd létre. Ha már vannak benne tiltások, helyezd át őket a „Soha nélkülem” részbe, hogy ne legyenek két helyen. Írd oda ezt a szabályt: „Ha rutinfeladatról kérdezel, amelyet jóváhagyok, javasold, hogy add hozzá az Önállóan csinálhatod listához. Ha olyan lépésbe ütközöl, amely nem vonható vissza, és hiányzik a Soha nélkülem listából, állj meg, és javasold, hogy add hozzá.” Gondoskodj arról, hogy ebben az eszközben az AGENTS.md-t minden munka elején elolvasd; Coworkban ezt írd be a mappára vonatkozó utasításokba. Ha nem egy mappában dolgozol, mentsd el a listákat a memóriába, vagy írj nekem olyan szöveget, amelyet beilleszthetek a saját utasításaimba.

Végül írd meg nekem, melyik jogosultsági módot válasszam ebben az eszközben ahhoz, hogy ne kérdezz rá a rutinra, és a kockázatos lépéseket az eszköz előre ellenőrizze, valamint hogy hol tudom átváltani. Ha a beállításban tartósan engedélyezni lehet az általam jóváhagyott rutinszerű parancsokat, állítsd be; ha ezt magad nem tudod beállítani, írd meg pontosan, hova mit kell beillesztenem.

## Az Ön eszközében

### Microsoft Copilot
A Copilot Cowork módban (a Chat mellett felül lévő kapcsoló) nem rendelkezik
jogosultsági móddal, és e-mail, Teams-üzenet vagy meghívó elküldése előtt maga kérdez rá. A mappát nem nyitja meg; a prompt végére írja oda: „Fájlt ne hozz létre, a listákat szövegként írd meg nekem a Customize, Preferences részhez.”, és a szöveget illessze be a Cowork kezdőoldalán lévő Customize részbe. Az e-mailen kívüli küldeményeknél ne használja az Always allow lehetőséget, mert az a következőt is kérdezés nélkül átengedi.

### ChatGPT
A ChatGPT asztali alkalmazásában váltson Codexre, válassza a mappa megnyitását (open a folder), és az üzenetmező alatt válassza az Approve for me lehetőséget (jóváhagyás helyettem): a Codex ezután csak azokat a lépéseket kérdezi meg, amelyeket kockázatosnak ítél. Full access módban egyáltalán nem kér jóváhagyást. Az `AGENTS.md`-t a Codex magától olvassa; ha nincs csatlakoztatott levelezés, a 3. lépés az e-mail piszkozaton áll meg.

### Claude
A Claude Code-ban a küldés gomb melletti módválasztóban válassza az Auto opciót: a rutint kérdezés nélkül futtatja, a kockázatos lépéseket pedig előre a második modell értékeli. Az állandó engedélyeket és a szavakkal leírt kivételeket a `/permissions` paranccsal menti el. Cowork módban maradjon az alapértelmezett Automatically approve beállítás; a fájlok végleges törlését mindig Önnel erősíti meg. Csatlakoztatott Gmaillal a Claude az e-mailt csak piszkozatként készíti elő.

### Gemini
A Gemini Agent, amely maga végez lépéseket, csak személyes Google AI Pro és Ultra fiókokhoz érhető el, és az EU-ban nincs, ezért vállalati fiókkal nem tudja beállítani a jogosultsági módot. Ha azt szeretné, hogy az AI önállóan végezzen lépéseket, kérje az IT-től olyan eszközt, amelyben van Cowork vagy Code mód. A „Soha nélkülem” listát e-mailíráshoz mentse el skillként: írja be, hogy „Mentsd el skillként”, és a Customize, Skills részben megtalálja.
## Mi az a jogosultsági mód

A jogosultsági mód (az eszközökben angolul permissions) olyan beállítás, amely meghatározza, mire kérdez rá az AI, mielőtt megtenné. Az eszközöknek általában három szintje van: az AI szinte mindenre rákérdez, csak azokra a lépésekre kérdez rá, amelyeket kockázatosnak ítél, vagy egyáltalán nem kérdez. A középső szint jó kiindulópont a mindennapi munkához. A kérdezés nélküli szint tudatos választás azoknak, akiknek a határai le vannak írva, és az eredményeket ellenőrzik, és ezt ne állítsák be alapértelmezettként a kollégáiknak.

Az eszköz magától felismeri a kockázatos parancsokat, például a tömeges törlést. Azt viszont nem tudja, hogy egy konkrét ügyfélnek szánt e-mail vagy egy rendeléseket tartalmazó táblázat törlése az Ön számára kockázatot jelent. Ezt az AI az `AGENTS.md`-ből tudja meg, egy [Markdown](glossary:markdown) fájlból, amelyet minden munka elején elolvas, és ezért minden határhoz tartozik egy olyan eljárás, ahol Ön dönt a megfelelő pillanatban. Az önálló „KÜLDÉS” üzenet biztosíték: a „és aztán küldd el” mondat egy hosszabb utasítás közepén nem indítja el a küldést. Mielőtt más alkalmazásba ír, az AI újra megnyitja az eredményt, így láthatja, hogy valóban elmentődött.

A kivételt szavakkal és feltétellel együtt írja le; az AI ezt a Kivételek cím alá menti. Ha Ön csak a szokásos csevegésben marad, azt egy külön kártya mutatja, hogyan [váltson Cowork vagy Code módra](card:when-chat-is-not-enough).
## A listák maguktól bővüljenek

A promptban szereplő szabály gondoskodik arról, hogy az AI minden alkalommal felvegyen egy új lépést a listába, amikor megkérdezi Önt róla. Havonta egyszer azonban hasznos átnézni, mikor kérdezett az AI feleslegesen, és ezt egy ütemezett feladat elvégzi Ön helyett. Illessze be az AI-nak Code módban ezt az utasítást, és kérje meg, hogy készítsen belőle ütemezett feladatot:

```text
Minden hónap első hétfőjén 9:00-kor nézd át az AGENTS.md-t ebben a mappában, és az elmúlt hónapban ott készült chatjeimet. Sorold fel azokat a lépéseket, amelyeknél megkérdeztél, és amelyeket én minden alkalommal jóváhagytam, és javasold, melyeket kell áttenni az „Önállóan csinálhatod” listába. Sorold fel azokat az új műveleteket is, amelyek nem vonhatók vissza, és hiányoznak a „Soha nélkülem” listából. A listákat módosítsd, miután jóváhagyom a javaslatot.
```

Ha a feladat a számítógépén lévő fájlokkal dolgozik, csak akkor fut, ha a számítógép be van kapcsolva, és az alkalmazás nyitva van. Ha már van [heti felülvizsgálata](card:weekly-ai-review), ezt a pontot adja hozzá ahhoz külön feladat helyett.
## Példa

Tereza egy kis reklámügynökség megbízásait vezeti, és Cowork módban lévő AI-val havi riportokat készít hat ügyfél számára. Be van kapcsolva minden lépés jóváhagyása, ezért az AI egy óra munka alatt tizenegyszer kérdezte meg, hogy mentheti-e a fájlt. Hétfőn 2026. 10. 19-én megnyitja a Riportok mappát, és beilleszti a promptot. Arra a kérdésre, mi az, amit nem lehet visszacsinálni, ezt válaszolja: ügyfeleknek küldött e-mailek és exportok törlése; a könyvelési rendszerben lévő számlákat az AI egyáltalán ne változtassa. Az AI ezt írja be:

```text
### Önállóan csinálhatod
- Olvashatod és szerkesztheted a Riportok mappában lévő fájlokat, és újakat hozhatsz létre benne.
- Letöltheted a reklámszámlák exportjait, és táblázatokat számolhatsz belőlük.
- Piszkozatokat készíthetsz az ügyfeleknek szánt e-mailekhez.

### Soha nélkülem
- Cégen kívüli e-mail: mutasd meg a címzettet, a tárgyat és a teljes szöveget, és csak az önálló KÜLDÉS üzenetem után küldd el.
- Exportok és vissza nem állítható fájlok törlése: írd ki, mit törölsz, és várj két megerősítést két üzenetben.
- A könyvelési rendszerben lévő számlákat ne módosítsd; írd meg nekem, mit kell változtatni.
- Minden más alkalmazásba történő írás után töltsd be újra az eredményt, és mutasd meg nekem.
- Jelszavakat és hozzáférési kulcsokat soha ne tedd be sem a chatbe, sem fájlokba; a bejelentkezést én intézem a jelszókezelőn keresztül.

### Kivételek
- Önállóan elküldheted a kész riportot Martin kollégának a csapatchatbe, ha azt jóváhagytam.
```

Az AI megírja neki, hogy olyan módban dolgozik, amelyben Tereza minden lépést jóváhagy, és megmutatja, hol lehet átváltani arra, amelyik csak a kockázatos lépésekre kérdez rá. Kedden, 2026. 10. 20-án Tereza egy új chatben ezt írja: „Készítsd elő a novemberi riportot a Novák Pékségnek, és küldd el Novák asszonynak.” Az AI letölti a reklámszámla exportját, és a riportot egyetlen kérdés nélkül elmenti. Ezután megmutatja az e-mail piszkozatát a címmel, tárggyal és szöveggel, és vár. Tereza kijavítja a megszólítást, elküldi a „KÜLDÉS” üzenetet, az AI pedig a kimenő levelek közül megmutatja neki, hogy az e-mail melléklettel együtt elküldésre került.
## Ha elakad

- **Az AI folyton rá kérdez a rutinfeladatokra:** az eszköz valószínűleg abban a módban van, amelyben minden lépést jóváhagy. Váltsa át az „Az Ön eszközében” blokk szerint, és írja meg az AI-nak, hogy a rutinszerű parancsokat tartósan engedélyezze.
- **Az AI a „Soha nélkülem” listán lévő lépést megcsinálta kérdezés nélkül:** írja be: „Sorold fel azokat a szabályokat, amelyek a munka elején betöltődtek.” Ha az `AGENTS.md` nincs köztük, azt, hogyan kell elérni, hogy betöltődjön, a [AI szabályfájljára](card:agents-md) vonatkozó kártya mutatja; ha benne van, kérje meg az AI-t, hogy írja át a határt egy eljárásra, például: „mutasd meg a piszkozatot, és várj a KÜLDÉS-re”.
- **Az eszköz megállít egy lépést, amelyet el akart végezni:** erősítse meg az engedélykérő ablakban, vagy írja meg az AI-nak pontosan, mit kell tennie és mivel, például: „mozgasd a riportot a `Klienti/Pekárna Novák` megosztott mappába”.
- **Nem látja a módválasztót:** vagy a szokásos csevegésben dolgozik, vagy a cégnél a rendszergazda korlátozta. Váltson [Cowork vagy Code](card:when-chat-is-not-enough) módra, vagy kérje meg az IT-t, hogy tegye elérhetővé.
## Mi lesz kész

Két rövid listája lesz arról, mit tehet meg az AI önállóan, és hol áll meg mindig, elmentve az `AGENTS.md`-ben vagy az eszköz beállításaiban. Ha az eszköz rendelkezik jogosultsági módokkal, abban fut, amelyik nem kérdez rá a rutinra. Egy valós feladaton ellenőrizte, hogy az AI kérdések nélkül végigviszi-e a munkát, és e-mail küldése előtt megvárja-e az Ön „KÜLDÉS” utasítását. Legközelebb, ha új rutinfeladatról kérdez, az AI magától javasolja, hogy kerüljön fel a listára.
## Mi következik

Ha az AI tudja, hol kell megállnia, bízza rá a [hosszú feladatot, amelyet egyedül is végigvisz](card:agent-task), például éjszakára. Az ismétlődő, minden héten végzett munkát állítsa be [ütemezett feladatként](card:recurring-ai-task).
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
