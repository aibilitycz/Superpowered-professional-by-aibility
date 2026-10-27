# Írjon csapatának AI-szabályokat: egy oldal kollégáknak és AI-juknak

Az AI a szabályzatból és két valós helyzetből összeállítja a csapat számára, mit szabad az AI-val tenni, és mi az, amit mindig ember dönt el.

## Írjon csapatának AI-szabályokat: egy oldal kollégáknak és AI-juknak

**Nehézség: közepes.**\
**Idő: kb. 15 perc** a szabályzattal és két helyzettel kéznél.
## Mire jó

A kártya egy menedzser vagy team leader számára készült, aki dönt arról, hogyan dolgozik a csapat az AI-val. Hétfőn Ondra megkérdezi, hogy megoszthatja-e a reklamációk exportját ügyfelek neveivel és telefonszámaival a saját személyes AI fiókjában. Szerdán kiderül, hogy Lucie az AI-ra bízta, hogy javasolja, mely ügyfelek reklamációját utasítsa el, és három elutasítást el is küldött anélkül, hogy megnyitotta volna a megrendeléseket.

Ha a csapat szabályai egy oldalon vannak a megosztott mappában, és az AI kollégák minden munka elején elolvassák, aki bizonytalan, megkérdezi az AI-ját, és az a szabályok szerint válaszol.
## Mit készítsen elő

- céges AI szabályzat vagy IT-től kapott e-mail; ha nincs, nem gond,
- két helyzet, amikor valaki a csapatból bizonytalan volt az AI használatában, legalább egy emberi döntést érintő,
- a csapat megosztott mappája megnyitva AI-ban Cowork vagy Code módban,
- egy kolléga, aki nem írta az oldalt, és van öt perce a végén.
## Hogyan csinálja

1. Nyissa meg a megosztott mappát AI-ban Cowork vagy Code módban, illessze be az AI gyakorlat promptját és a szabályzatot, majd a prompt alá írja be mindkét helyzetet. Az AI létrehozza a `pravidla-ai.md` oldalt és elmenti a mappába.
2. Olvassa el az oldalt, javítsa ki, ami nem stimmel: személynevek az IT-nek, személyes adatok és jogi részek, valamint ami mindig emberi döntés. Az AI a nyitott kérdéseket a végére írja.
3. A kolléga, aki nem írta az oldalt, nyissa meg a mappát a saját AI-jában, kérdezzen rá az új esetre, például az éves jutalmakra. Ha nem tudja, mit tegyen, egészítse ki az AI oldalt.

Csak sima chat esetén segít a "Ha elakad" rész.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) AI-ba Cowork vagy Code módban, a megnyitott mappájában:

Írj a csapatunknak egyoldalas AI használati szabályzatot. Ezt kollégák és az AI is olvassa, amellyel dolgoznak.

Alapozz a céges szabályokra, amelyeket adok vagy megtalálsz ebben a mappában, és két munkánkból vett helyzetre, amikor a kollégák nem tudták, hogyan járjanak el az AI-val. A céges szabályok és ügyfélszerződések elsőbbséget élveznek. Amit az anyagokban nem találsz, ne találj ki, írd a Nyitott kérdések részbe, minden kérdéshez írd a döntéshozó nevét. Ha nem tudod, kérdezz engem.

Az oldal öt részből áll:
- Eszközök: mely AI eszközöket használ a csapat és milyen munkára.
- Adatok: mit szabad melyik eszközbe tenni, mit kell általános megjelöléssel helyettesíteni (pl. Ügyfél A), és mi soha nem kerülhet AI-ba, pl. jelszavak.
- Amit mindig ember dönt el: emberi döntések (jelöltek kiválasztása, értékelés, jutalmak, munkamegosztás), ügyfélválaszok pénzről vagy ígéretekről, és minden, amit nehéz visszavonni. Mindenhez írd, ki dönt, mit ellenőriz, mielőtt az AI eredményt használja, beleértve az AI által kizárt eseteket.
- Kit kérdezzünk: IT, személyes adatok és jogi kapcsolatok nevei és elérhetőségei.
- Hibakezelés: mit tegyünk azonnal, kinek jelentsük és milyen gyorsan.

Minden szabályt mutass be a helyzeteinkből vett példával, kolléganév nélkül. Írj röviden, hogy az új kolléga is megértse, és férjen el egy képernyőn. Felül írd, ki a szabályok tulajdonosa és mikor lesz a következő ellenőrzés. Ha a csapat AI-t használ jelöltek kiválasztására, értékelésére vagy munkamegosztásra, adj nyitott kérdést a jogi vagy HR felelősnek: hogyan értékeli az európai AI törvény az ilyen használatot.

Mentse az oldalt `pravidla-ai.md` néven ebbe a mappába. Ezután az `AGENTS.md` fájlba írja be: „Minden munka elején olvasd el a `pravidla-ai.md`-t és kövesd azt. Ha olyan helyzetet találsz, amit nem fed le, jelezd és írd be dátummal, név és személyes adat nélkül a Nyitott kérdések közé. A szabályokat ne módosítsd.” Ha nincs `AGENTS.md`, hozd létre. Cowork módban ugyanezt írd be a mappa utasításaiba.

Végül mutasd meg nekem az oldalt és írd ki a nyitott kérdéseket.

## Az Ön eszközében

### Microsoft Copilot
A Copilot Cowork csak a OneDrive és SharePoint fájlokkal dolgozik, és nem olvassa az `AGENTS.md`-t, ezért kövesse a „Cég csak sima chatet engedélyez” pontot. Az AI szabályzatot adja hozzá a Notebookhoz (Jegyzetfüzetek, Új jegyzetfüzet), az utasításokhoz írja be: „Kövesd az AI szabályzat dokumentumot; amit nem fed le, javasolj kérdést [név]-nek.”, és ossza meg a jegyzetfüzetet a csapattal Share-en keresztül.

### ChatGPT
A megosztott mappával a Codex dolgozik a ChatGPT asztali alkalmazásban (váltson Codex-re, nyisson meg egy mappát), és maga olvassa az `AGENTS.md`-t. Codex nélkül kövesse a „Cég csak sima chatet engedélyez” pontot: tegye a dokumentumot a projekthez, az utasításokba írja be: „Kövesd az AI szabályzat dokumentumot; amit nem fed le, javasolj kérdést [név]-nek.”, és ossza meg a projektet Share-en keresztül.

### Claude
A Claude asztali alkalmazásban válassza a Cowork és Work in a folder módot, vagy nyissa meg a mappát Claude Code-ban, amely maga olvassa az `AGENTS.md`-t. Coworkban az AI a prompt alapján beírja az utasítást a mappa instrukciói közé, és minden kolléga megkéri az AI-ját, hogy tegye meg ugyanezt. Aki csak chatben dolgozik, feltölti az oldalt a projektbe (Projects).

### Gemini
A Gemini nem dolgozik megosztott mappával asztali fiókkal, ezért kövesse a „Cég csak sima chatet engedélyez” pontot a Gem robottal. A Gem robotban, Új Gem létrehozásakor adja hozzá a dokumentumot a Tudáshoz, az utasításokba írja be: „Kövesd az AI szabályzat dokumentumot; amit nem fed le, javasolj kérdést [név]-nek.”, és ossza meg a Gem-et. Az új verziót töltse fel a Tudásba a rég helyett.
## Amit mindig ember dönt el

Az AI készíthet elő anyagot, sorrendet vagy javaslatot. Az ember hozza meg a döntést, amely megváltoztatja egy konkrét ember helyzetét: ki megy interjúra, kinek adnak többet, ki milyen munkát kap, és ki kap elutasítást. Az ember ismeri a kritériumokat, látja az anyagokat, van ideje ellenőrizni, és elutasíthatja az AI javaslatát. Ha ezek közül valamelyik hiányzik, az ellenőrzés csak egy „elfogadom” kattintás.

A hiba gyakran az AI által kizárt esetekben bújik meg. Ezért az ember nyisson meg néhány kizárt esetet is, például öt véletlenszerű önéletrajzot az AI által félretettből. A döntéshozónak tudnia kell saját szavaival elmagyarázni a döntést az érintettnek, nem mondhatja, hogy „az AI döntött”.

Ha az AI segít a csapatban jelöltek kiválasztásában, értékelésében, előléptetésben vagy elbocsátásban, munkamegosztásban viselkedés vagy személyes tulajdonságok alapján, vagy teljesítmény figyelésében, az az európai [AI Act](glossary:ai-act) szerint magas kockázatú rendszer lehet. Az ilyen cégeknek 2027. december 2-től többek között emberi felügyeletet kell biztosítaniuk, aki ért hozzá és jogosult az eredményt módosítani, valamint előzetesen tájékoztatniuk kell az érintett munkavállalókat és képviselőiket az AI alkalmazásáról. Ha ez érinti az Ön használatát, a jogi vagy HR felelős dönt. Az AI Act 2025 februárjától tiltja az AI-val az érzelmek felismerését a munkahelyen, kivéve orvosi és biztonsági okokat.
## Hogyan követik a szabályokat az AI kollégák

Az AI az oldalon kívül beírja az `AGENTS.md` fájlba a megosztott mappában az utasítást, hogy kövesse a szabályokat; Coworkban ezt beírja a mappa instrukciói közé is.

Ha a kolléga közvetlenül megnyitja a megosztott mappát, az AI az `AGENTS.md`-t a munka elején elolvassa. Az eszköz, amely ezt nem teszi meg automatikusan, beállítja magának az `AGENTS.md`-ből az utasítást erre a mappára; hogyan, azt a "Az Ön eszközében" blokk mutatja. Az AI kollégák így olvassák a szabályokat, és azokat a helyzeteket, amelyeket nem fednek le, beírják a nyitott kérdések közé.

Aki csak sima chatben dolgozik, feltölti az oldalt a [projektjébe](card:asistent), az AI eszköz azon része, ahol minden beszélgetésben ugyanazokat a fájlokat és utasításokat látja. A nyitott kérdéseket azonban a kolléga Önnek küldi el.
## Hagyja, hogy a szabályok nőjenek a csapattal

Az `AGENTS.md` utasítás biztosítja, hogy az AI kollégák minden olyan helyzetet beírjanak a nyitott kérdések közé, amelyet az oldal nem fed le. Havonta egyszer egy ütemezett feladat átnézheti ezeket, és javaslatot készíthet az oldal kiegészítésére. Illessze be AI-ba Cowork vagy Code módban ezt a feladatot, és kérje, hogy hozza létre az ütemezett feladatot:

```text
Minden hónap első munkanapján nézd át a `pravidla-ai.md`-t a csapat megosztott mappájában. Ha a Nyitott kérdések között új helyzetek jelentek meg, javasolj mindegyikhez egy szabályt példával és írd meg, ki hagyja jóvá. Ha a következő ellenőrzés dátuma elmúlt, emlékeztess rá. Ha nincs új, írj egy mondatot.
```

Ha a feladat a számítógépén lévő mappával dolgozik, csak akkor fut, ha a gép be van kapcsolva és az alkalmazás nyitva.
## Példa

Martina hatfős ügyfélszolgálatot vezet egy elektronikai webshopban. A cégnek márciusi IT szabályzata van: a munkahelyi adatok csak a cég AI-jába kerülhetnek, amit a cég fizet. Martina megnyitotta a "Támogatás" csapat mappáját Cowork módban, beillesztette a promptot, a szabályzatot és a hétfői és szerdai helyzeteket. Az AI megírta az oldalt, Martina javított egy nevet és lerövidítette az adatkezelés részt:

```text
AI szabályok az ügyfélszolgálatban (tulajdonos: Martina Horáková, következő ellenőrzés: 2027. 01. 15.)

Eszközök: céges AI az ügyfélválaszokra, jelentésekre és javaslatokra. Személyes AI fiókot nem használunk munkára.
Adatok: reklamáció export csak céges AI-ba. Ügyfelek neve és telefonszáma soha nem kerül személyes fiókba, jelszavak sehova.
Amit mindig ember dönt el: reklamáció elutasítása, 500 Kč feletti kedvezmény és kollégák értékelése. Az AI javaslatot készít indoklással. A reklamációról az operátor dönt, az értékelésről Martina. Az operátor a reklamáció elutasítása előtt megnyitja a rendelést és a fotókat.
Kit kérdezzünk: IT Pavel Krejčí, személyes adatok Jana Malá (adatvédelmi felelős), minden más Martina.
Hibakezelés: a beszélgetést ne folytassuk, és még aznap írjunk Pavlónak és Janának, mit és hova küldtünk.
Nyitott kérdések: szabad-e az ügyfélhívások értékelését céges AI-ba tenni és az AI-ra bízni, hogy javasolja, kinek segítsen a nehéz hívásoknál? Dönt Jana Malá és HR.
```

Másnap Ondra megnyitotta ugyanazt a mappát az AI-jában és megkérdezte: az ügyfél 800 Kč kedvezményt kér a késedelmes szállítás miatt, az AI javasolja elfogadni, elküldheti? Az AI az oldal alapján válaszolt, hogy 500 Kč feletti kedvezményt ember dönt, az AI nem ígérheti meg önállóan. Ki az illetékes, az oldal nem mondta. Martina megmondta az AI-nak, hogy egészítse ki a döntési részt: "500 Kč feletti kedvezményt Martina hagyja jóvá", és az AI beírta.
## Ha elakad

- **A cég csak sima chatet engedélyez:** illessze be a promptot a "Mentse az oldalt" bekezdés nélkül, csatolja a szabályzatot fájlként és írja be mindkét helyzetet a prompt alá. Az AI az oldalt közvetlenül a chatben írja meg. Mentse el `Pravidla AI` néven a csapat megosztott mappájába, és tegye be a megosztott [projektbe](card:asistent), ahol a kollégák kérdeznek; hogyan, azt a "Az Ön eszközében" blokk mutatja. Ott a kolléga megkérdezheti az új esetet a 3. lépésből, és a nyitott kérdéseket is elküldi Önnek.
- **Az AI azt állítja, hogy elmentette az oldalt, de nincs a mappában:** valószínűleg sima chatben dolgozik, amely nem tud fájlokat menteni. Váltson [Cowork vagy Code](card:when-chat-is-not-enough) módra és nyissa meg ott a megosztott mappát. Ha ezt nem engedélyezik, kövesse a fenti pontot.
- **Az AI kollégák nem követik a szabályokat:** a kolléga nyissa meg közvetlenül a megosztott mappát, ne annak almappáját, és kérdezze meg az AI-t, látja-e a `pravidla-ai.md`-t. Ha az eszköz nem olvassa az `AGENTS.md`-t, kérje meg, hogy vegye fel az utasítást a mappa beállításaiba.
- **Az oldal túl hosszú vagy csak tiltások vannak:** kérje meg az AI-t, hogy minden részt rövidítsen három sorra, és minden tiltás mellé írja oda, mit szabad helyette a csapatnak.
## Mi lesz kész

A csapat megosztott mappájában van egy AI szabályzat oldal példákkal a munkájukból, nevekkel és nyitott kérdésekkel. Az AI kollégák az `AGENTS.md` vagy a mappa beállításai alapján követik azt, és azokat a helyzeteket, amelyeket az oldal még nem fed le, beírják a nyitott kérdések közé. A csapat, amely csak sima chatben dolgozik, a kollégák az oldalt a saját projektjükben tartják. A kolléga, aki nem írta az oldalt, az alapján oldott meg egy új esetet.
## Jogi határok

A kártya segít a csapat szabályainak megírásában, nem helyettesíti a jogi tanácsadást, és nem igazolja, hogy a szabályok megfelelnek a GDPR-nak vagy az AI Actnek. Amit szabad, azt a cég szabályai, ügyfélszerződések, a [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/ces) és az [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces) határozzák meg. Az AI Act előírja az AI-t használó cégeknek, hogy támogassák az AI-t használók AI-hoz értését. A csapat szabályzata lehet ennek egyik eszköze.
## Mi következik

Mutassa meg a szabályokat a csapatnak egy megbeszélésen, és az alapján, hogy mire kérdeznek rá, hagyja, hogy az AI kiegészítse az oldalt. Hogyan, azt a [Mutassa meg a csapatnak az AI folyamatot](card:team-adoption-cycle) kártya mutatja. További AI utasításokat a megosztott mappában, például hogyan írjanak ügyfélválaszokat, az `AGENTS.md`-be írhat. Hogyan, azt a [külön kártya](card:agents-md) mutatja.
## EU AI Törvény

**Mi ez:** Az Európai Unió mesterséges intelligenciára vonatkozó rendelete. Különböző szerepeket, felhasználási módokat és kockázati szinteket különböztet meg, és konkrét kötelezettségeket ír elő az AI-t bevezető vagy használó szolgáltatók és szervezetek számára a szakmai gyakorlatban.

**Mi nem ez:** Nem általános AI-tilalom, és nem egyetlen szabály, amely minden eszközre és feladatra egyformán érvényes. Az, hogy valami AI-t használ, önmagában még nem határozza meg a jogi kategóriát vagy a konkrét kötelezettséget.

**Miért van rá szüksége a tanulónak:** Segít felismerni, mely gyakorlati helyzetek igényelnek további ellenőrzést, és hogy a könyvtár mely részében folytassa a tájékozódást.

| Az Ön helyzete | Folytatás itt |
|---|---|
| Az AI egy konkrét személyre vonatkozó döntést befolyásol | [AI szabályok a csapat számára](card:pravidla-pro-tym) |
| Ön dönt az AI használatáról szervezet, ügyfél vagy saját szakmai gyakorlat nevében | [AI szabályok a csapat számára](card:pravidla-pro-tym) |
| Az adatok emberekről szólnak | [Mit szabad AI-nak adni](card:bezpecne-pouzivani); itt egyidejűleg érvényesülnek a GDPR szabályai |

Az AI-t használó szervezeti dolgozók AI-írástudását, valamint azt, hogy a munkafolyamat során mindig ember hozza meg a döntést, a `pravidla-pro-tym` kártya szabályozza.

**Forrás:** [2024/1689/EU rendelet, különösen 4. és 50. cikk](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/ces)

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
