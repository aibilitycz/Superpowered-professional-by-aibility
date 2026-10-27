# Végezzen Deep Research-t

Mondja el, mit kell kiderítenie és miért. Az AI átnézi a friss forrásokat, összehasonlítja azokat, és előkészíti az alapot, amely alapján dönthet.

## Végezzen Deep Research-t

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** a feladat megadására és ellenőrzésére. Maga a kutatás tovább tarthat.
## Mire jó

A Deep Research-t akkor használja, ha a chat gyors válasza nem elég. Például beszállító kiválasztásánál, eszközök összehasonlításánál, tárgyalásra való felkészülésnél vagy új piac aktuális szabályainak keresésénél.

A legjobb eredmény nem egy tág témából születik. Az „Eszközök riportáláshoz” általános listát ad. A „Melyik három eszköz képes havi riportot készíteni Excelből egy közepes méretű EU-s cég számára, és bevezethető három hónapon belül?” már megmondja, mit kell az AI-nak ténylegesen kiderítenie.
## Mit készítsen elő

- kérdést vagy témát,
- döntést, amelyhez a kutatás szükséges,
- fontos korlátokat: időszak, piac, költségvetés vagy összehasonlítandó lehetőségek,
- előnyben részesített vagy kerülendő forrásokat.

Használja a [jóváhagyott AI eszközt](card:bezpecne-pouzivani). Mellékelheti a [munkája kontextusát](card:custom-instructions), ha használható.
## Hogyan csinálja

1. Mondja el az AI-nak, mit kell kiderítenie és milyen döntést vagy feladatot szolgál majd az eredmény.
2. Ellenőrizze a rövid kutatási feladatot. Csak ezután indítsa el a Research vagy Deep Research funkciót.
3. Nyissa meg a forrásokat két olyan állításhoz, amelyekre a következtetés leginkább épül. Ha a forrás nem támasztja alá az állítást, kérje az AI-t a következtetés javítására.

A hivatkozások száma önmagában nem bizonyít semmit. Árak vagy termékfunkciók esetén az hivatalos dokumentáció értelmes. Bevezetési tapasztalatoknál független forrás is kell.
## Mielőtt elindítja a kutatást

A funkció neve eszköztől függően Research vagy [Deep Research](glossary:deepresearch). A ChatGPT-ben az oldalsávból, az eszközök (+) menüből a beviteli ablakban vagy a `/Deepresearch` parancs segítségével indítható.
A „indíts Deep Research-t” mondat önmagában nem garantálja, hogy az AI valóban a weben keres. Ellenőrizze, hogy az adott fiókjában elérhető és be van kapcsolva a mód. Ha nem, az AI készít egy feladatot, amelyet átmásolhat egy másik jóváhagyott eszközbe.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt):

Segíts Deep Research-t végezni a témában, amin éppen dolgozom.

Először derítsd ki, mit kell kiderítenem és milyen döntéshez vagy feladathoz használom az eredményt. Egészítsd ki csak a hiányzó határokat, például időszakot, piacot, összehasonlított lehetőségeket, költségvetést vagy forrástípusokat. Ha már van kész kutatásom, kérd el és lépj rögtön a források és következtetések ellenőrzésére.

Indítás előtt mutasd meg nekem a rövid kutatási feladatot:
- fő kérdés,
- mit fogsz összehasonlítani,
- mi fontos a döntéshez,
- mely forrásokat használod előnyben,
- mi legyen az eredmény.

Hagyd, hogy javítsam a feladatot, és várj a megerősítésre.

Ezután ellenőrizd, hogy ebben a környezetben tényleg elérhető-e a Research, Deep Research vagy webes keresés. Ha nem tudod megerősíteni, ne tűnjön úgy, mintha kutatást végeztél volna. Add vissza a kész feladatot, hogy átmásolhassam egy másik jóváhagyott eszközbe.

Keresés közben:
- használj az adott időszakra aktuális forrásokat, és különböztesd meg a közzététel dátumát az adattal érintett időszaktól,
- részesítsd előnyben az eredeti dokumentumokat, adatokat, törvényeket és tanulmányokat,
- a termék funkcióiról és feltételeiről az hivatalos dokumentációból tájékozódj,
- a szállító marketing állításait hasonlítsd össze független forrásokkal,
- különböztesd meg a jelenlegi állapotot a fejlesztés alatt álló tervektől és funkcióktól,
- mutasd meg a források közötti ellentmondásokat és magyarázd el, miért lehetnek eltérőek,
- semmit, amit nem sikerült megnyitni vagy igazolni, ne fogadj el hitelesnek.

Az eredményt írd meg döntésem alapjaként:
1. rövid válasz a fő kérdésre,
2. lehetőségek összehasonlítása a számomra fontos szempontok szerint,
3. legfontosabb állítások közvetlen hivatkozásokkal és forrásdátummal,
4. ellentmondások és tisztázatlan pontok,
5. ajánlás és annak hátrányai,
6. mit tegyek vagy ellenőrizzek tovább.

Válassz ki két állítást, amelyekre az ajánlás leginkább épül. Mindkettőhöz adj közvetlen hivatkozást és írd meg, mit kell a forrásban ellenőriznem. Várj, amíg megnyitom a forrást. Ha az állítás nem igazolódik vagy nem érvényes az én helyzetemre, javítsd a következtetést.

Add vissza az eredményt másolható formában. Felajánlhatod a fájlba mentést, de semmit ne írj be az engedélyem nélkül.

## Példa

A pénzügyi csapat eszközt választ havi riportáláshoz. A feladatba beírják az Excelt, a vállalati számlákat, az EU-s működést és a három hónapon belüli bevezetést.

Az AI nem csak egy ismert alkalmazáslistát ad vissza. Ezeket a feltételeket figyelembe véve hasonlítja össze. Az árakat és az adatexportot hivatalos dokumentációból igazolja; a bevezetési tapasztalatokat hasonló cégek független példáiban keresi. Ha a források eltérnek, láthatóvá teszi a különbséget.
## Ha elakad

- **Az eredmény túl általános:** egészítse ki piaccal, időszakkal vagy konkrét lehetőségekkel. Segít a [eredmény megállapodás](card:first-ai-use-case).
- **Az állítás hivatkozása nem igazolja:** mutassa meg az AI-nak az eltérést és kérje a következtetés javítását. Ezután használja az [eredmény ellenőrzését](card:kontrola-vysledku).
- **A források ellentmondanak:** hasonlítsa össze a dátumokat és feltételeket. Az ellentmondás nyitva maradhat.
- **A Research nem elérhető:** vigye át a kész feladatot egy másik jóváhagyott környezetbe. A választásban segít a [munkamód AI-val](card:when-chat-is-not-enough).
## Mi lesz kész

Deep Research-t kap forrásokkal, ellentmondásokkal és egyértelműen jelölt, ellenőrizetlen pontokkal. Tudni fogja, melyik két állítást ellenőrizte saját maga és mi hiányzik még a döntéshez.
## Mi következik

A kutatást átalakíthatja [weboldallá](card:web-page-output), elmentheti a folyamatot [skillként](card:create-skill-from-proven-process), vagy újra átnézheti az [eredmény ellenőrzésével](card:kontrola-vysledku).
## Mélykutatás / Kutatás

**Mi ez:** Egy mód vagy speciális eszköz, amely több lépéses keresést, összehasonlítást és több forrásból származó információk szintetizálását végzi el egy visszakereshető eredmény érdekében.

**Mi nem:** Nem egy szokásos gyors chatválasz, és nem garantálja, hogy minden megadott hivatkozás valóban alátámasztja a szövegben szereplő állítást.

**Miért van rá szüksége a diáknak:** Segít kiválasztani a megfelelő módot egy összetettebb kérdéshez, és emlékeztet arra, hogy a fontos forrásokat mindig embernek kell megnyitnia és értékelnie.

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

## Blokk tervezése

Opcionális termékmechanika egy kártya befejezése után, amelynek eredménye folytatólagos munkát jelent, ami nem fér bele tizenöt percbe. Nem önálló kártya, nincs saját befejezése, és nem növeli a teljesített módszerek számát.

A kártyák tizenöt percesek és egy artefaktummal zárulnak. Egy részük azonban csak az artefaktummal kezdődik: létrejön egy fázistérkép, kutatási összefoglaló, skillterv vagy két integrálandó ág. Az ember tervvel távozik, de nincs ideje, és a munkához tíz perc közötti szünetekben tér vissza, amikor nem lehet semmit befejezni.

## Mikor jelenik meg

- a kártya használható eredménnyel zárult, és ez az eredmény további munkát jelent,
- a munka egyértelmű véggel rendelkezik, amit egy mondattal meg lehet nevezni,
- ha hagyományosan rövid szakaszokra bontanánk, az szétesne, mert minden visszatérés a kontextus újratöltésével kezdődik.

A mechanika nem jelenik meg, ha a munka valóban belefér a tizenöt percbe, ha a következő lépés másik embertől vagy jóváhagyástól függ, illetve ha a kártya eredményének nincs további kapcsolódó munkája.

## Mit lát az ember

Egy rövid választási lehetőséget **Blokk tervezése** a közös check-in mellett. Megnyitás után az AI csak egy dolgot kérdez meg: mikor van valóban ilyen ideje. A többit a kártyán keletkezett eredményből javasolja.

## Mit hoz létre az AI

A blokk összefoglalóját. Forrása a most befejezett kártya eredménye; az új témát a mechanika nem találja ki. Öt elemet tartalmaz:

- **egy dolog**, úgy megnevezve, ahogy késznek látszik,
- **hossz**, 60 és 120 perc között, azzal, hogy mi fér bele és mi nem,
- **mi kell előkészíteni előre**: hozzáférések, adatok, anyagok, a kártya promptja,
- **mi lesz a végén kész**, tehát konkrét eredmény, nem „előrehaladt” vagy „folyamatban”,
- **mi lesz a maradékkal**, ami nem fér bele a blokkba, hogy ne maradjon döntés nélkül.

Ha kiderül, hogy az egy dolog valójában három, az AI ezt jelzi, és felajánlja, melyik tartozik az első blokkba. Három blokkra előre nem javasol felosztást.

## Aktív idő a várakozással szemben

Az AI-val tervezett blokk más felépítésű, mint az önálló munka blokkja, mert az idő egy részében az eszköz fut. Kutatás, ügynök, hosszabb generálás vagy adatfeldolgozás percektől több tíz percig tarthat, és az ember nem kell, hogy ott üljön mellette.

Az összefoglaló ezért három időtípust különböztet meg: az ember aktív munkáját, az AI futását és a várakozást másra. Az AI futás idejére javasolja, mit lehet közben csinálni, ami leggyakrabban ugyanannak az eredménynek a következő lépésének előkészítése. A nem kapcsolódó munkára ugrás megtöri a blokkot, még ha hasznos időnek is tűnik.

Ha a várakozás a blokk nagy részét kitöltené, a mechanika ezt egyből jelzi: ilyen feladat inkább a [Hagyja az AI-t dolgozni, amikor nem vagy ott](card:recurring-ai-task) kártyára való.

## Naptár

A mechanika előkészíti az esemény szövegét: a cím az egy dolog alapján, a hossz és a leírásba az előkészítendő dolgok. Az ember maga jegyezheti be.

A mechanika nem ír be semmit a naptárba vagy más megosztott rendszerbe engedély nélkül, és nem küld meghívót senkinek.

## Határok a kártyákhoz képest

| Mi ez nem | Hol van |
|---|---|
| Csapat számára fenntartott idő, ami vezetői döntést, törölt megbeszéléseket és mentort igényel | [Adjon a csapatnak blokkot egy valódi AI projekthez](card:ai-sprint) kártya |
| AI munka akkor, amikor az ember nincs jelen | [Hagyja az AI-t dolgozni, amikor nem vagy ott](card:recurring-ai-task) kártya |
| Projekt lépésekre és szerepekre bontása | [Készítsen AI-WBS-t a projekt első fázisához](card:ai-wbs-project) kártya |

A blokkot az ember maga állítja be, nem kell hozzá senki engedélye. Ez különbözteti meg a sprinttől, ahol az engedélyezés a munka lényeges része.

## Mit nem tartalmaz a mechanika

Koncentrációs útmutatókat, telefon-, értesítés- és környezetre vonatkozó ajánlásokat. A könyvtár a folyamatokat tanítja. Ilyen tanácsokból a mechanika prédikációvá válna a munkáról ahelyett, hogy egy konkrét blokk előkészítésére fókuszálna.

## Nyilvántartás

A check-inhez hozzáadható az információ, hogy létrejött a blokk összefoglalója. Ez nem önálló kártyateljesítés. A mechanika nem követi, hogy a blokk lezajlott-e.

## Első támogatott kártyák

- `ai-wbs-project`
- `deep-research`
- `ai-workflow`
- `create-skill-from-proven-process`
- `parallel-ai-workstreams`

További kártyák, amelyekhez kapcsolódó munka hosszabb mint tizenöt perc, például a `risk-based-prototyping`, `optimize-then-automate`, `prace-s-daty` és `sjednotit-data-z-vice-zdroju`, a második hullám jelöltjei. A mechanika azonnali bevezetése a könyvtár felére zajt okozna a választásban.
