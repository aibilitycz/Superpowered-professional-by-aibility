# Készítsen skillt: útmutató, amit az AI megjegyez

Egy egyszer már AI-val befejezett feladatból az AI készít egy skille-t, és a következő körben egy mondattal adhatja ki a feladatot.

## Készítsen skillt: útmutató, amit az AI megjegyez

**Nehézség: közepes.**\
**Idő: kb. 15 perc** azzal a chattel, ahol a feladatot befejezte.
## Mire jó

Minden pénteken elküldi a vezetőségnek három projektje állapotát. Az AI segít ebben, de mindig újra el kell magyaráznia, hogy mely forrásokból állítsa össze, hogy fent három mondat legyen, alatta egy határidő táblázat, és a kockázatok csak a végén. Ha valamit elfelejt, az állapot másként néz ki, mint múlt héten, és az igazgató megkérdezi, mi változott.

A [Skill](glossary:skill) egy útmutató az AI számára egy adott munkafajtához, amelyet az AI egy kész chatról ír meg, és legközelebb maga használ, így nem kell újra magyarázni.
## Mit készítsen elő

- azt a chatet, amelyben az AI-val befejezte a rendszeresen és ugyanúgy végzett feladatot,
- a következő hasonló feladathoz szükséges anyagokat; ezeken azonnal használja a skillt,
- olyan AI-t, amely képes skilleket tárolni, például a [Cowork](glossary:workmode) vagy Code módban.
## Hogyan csinálja

1. Nyissa meg azt a chatet, amelyben az AI-val befejezte a feladatot. Ha nincs ilyen, végezze el az aktuális feladatot az AI-val, és javítsa, amíg az eredmény megfelelő nem lesz.
2. A chat végére illessze be a promptot. Az AI a chatből készít egy skille-t, elmenti, és megmondja, hol találja; ha kattintásra van szüksége, megmondja, hova kell.
3. Nyisson új chatet, csatolja a következő feladat anyagait, és adja ki egy mondattal, például „Írj projektállapotot a Raktárköltözésről”. Az AI-nak magától kell használnia a skillt.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az Ön által használt AI-ba:

Ezt a feladatot újra fogom végezni. Írj ebből, amit ebben a chatben csináltunk, egy skille-t, hogy legközelebb elég legyen egy mondattal kiadni, és ne kelljen semmit magyarázni.

Nézd át az egész chatet, és vedd ki belőle, ami működött: lépések, szükséges anyagok, és az eredmény formája, ami végül megfelelt nekem. A munkafolyamat közbeni javításaimat építsd be a lépésekbe. Amit legközelebb változtatni kell, például projekt neve, dátum vagy számok, azt ne írd bele; csak azt, hogy kérd be.

A skillnek ezek a részei legyenek:
- a munkához illő név, például Projektállapot vezetőségnek,
- mikor használjuk: azok a mondatok, amelyekkel általában kiadom az ilyen feladatot,
- mit kell megkapnod és mire kérdezz rá, ha hiányzik,
- lépések,
- hogyan néz ki a kész eredmény.

A skill végére tegyél egy szabályt: ha javítom az eredményt, ajánld fel, hogy a skillt a javítás alapján módosítod.

Mentsd el a skillt úgy, hogy ezt az eszközt legközelebb megtalálja és maga használja. Ha a mentéshez kattintás kell, pontosan mondd meg, hova. Ha az eszköz nem tud skilleket menteni, azonnal mondd el. Végül írd meg, hol találom a skillt, és milyen mondattal adjam ki legközelebb a feladatot.

## Az Ön eszközében

### Microsoft Copilot
A skillek a Cowork mellett vannak a Chat kapcsoló mellett; ha nincs ott, kérje az IT adminisztrátort. A Coworkban a skillt a Customize, Skills (Add, Create new) menüpontban hozhatja létre, vagy az AI-tól kérheti a feladatban. Cowork nélkül a Copilot Chatben kérje meg az AI-t, hogy írja meg szövegként, majd illessze be egy új agentbe (New agent, Skip to configure, Instructions); a 3. lépésben ebben az agentben adja ki a feladatot.

### ChatGPT
A skillek a vállalati Business és Enterprise tarifákban a Plugins oldalsávban, a Skills fülön érhetők el, és a vállalat adminisztrátora kapcsolja be. Ha a ChatGPT-ben kéri a skillt a chatben, megírja és felajánlja a telepítést (Install). Ha nincs bekapcsolva a skill, kérje meg, hogy írja meg szövegként, illessze be a projekt utasításaiba (New project, Project settings), és a 3. lépésben ebben a projektben adja ki a feladatot.

### Claude
A Claude minden tarifában támogatja a skilleket, a normál chatben és Coworkban is, a Customize, Skills menüpontban találhatók. Szükséges a Code execution and file creation engedély bekapcsolása a Settings, Capabilities alatt; vállalati fiókban ezt az adminisztrátor kapcsolja be. Claude a munka során megmutatja a használt skill nevét.

### Gemini
Ha a Customize menüben látja a Skills-t, ott hozhat létre skillt (Create vagy Upload); vállalati fiókokban a Google fokozatosan engedélyezi. Addig kérje meg a Gemini-t, hogy írja meg szövegként, és mentse Gemként, azaz saját utasításokkal rendelkező mentett asszisztensként: a Gems, New Gem alatt illessze be az utasításokat, és az előző eredményt tegye a Knowledge-be. A 3. lépésben nyissa meg ezt a Gem-et, és abban adja ki a feladatot.
## Mi az a skill

A skill egy útmutató az AI számára egy adott munkafajtához: mikor használja, mire van szüksége, lépések és az eredmény formája. Az AI írja meg: egyszer befejezi Önnel a feladatot, és a működő elemekből készít egy skille-t és elmenti. Ez egy egyszerű szövegfájl, amelyhez az AI sablont vagy mintavégrehajtást is hozzáadhat.

Az AI a skill használatát a használati leírás alapján ismeri fel. Ezért vannak benne azok a mondatok, amelyekkel általában kiadja a feladatot, és ezért lehet több tucat skillje, amelyek közül az AI kiválasztja a megfelelőt. Az eszközök, amelyek kezelik a skilleket, általában azonos formátumot használnak, így a skill átvihető más eszközbe is.

A skilleket az AI a Cowork vagy Code módban, illetve egyes eszközökben a normál chatben is kezeli; ha az Ön AI-ja nem tudja elmenteni, váltson a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) fül szerint. Hogy az AI használta-e a skillt, a munka során a skill neve alapján ismerheti fel (Coworkban az új feladatnál); ha nem látja, kérdezze meg. Az eredménynek ugyanolyannak kell lennie, mint legutóbb, a projekt neve, dátum vagy számok ismételt bekérése az AI feladata.

A skillbe az ismétlődő elemek tartoznak: a folyamat, az eredmény formája és az Ön javításai.
## Hagyja, hogy a skillek maguktól szülessenek

A legjobb időpont a skill készítésére a sikeres munka vége. Hogy az AI ezt magától emlékeztesse, engedje meg neki, hogy elmentse ezt a szabályt. Cowork vagy Code módban, ahol az AI a számítógépén lévő mappával dolgozik, ezt az `AGENTS.md` fájlba írja. Ez egy egyszerű szövegfájl az AI szabályaival, amelyet sok Code módú eszköz a munka elején beolvas; ahol az eszköz nem tudja ezt automatikusan, az AI a beállításokba menti, vagy megmondja, hova tegye. Normál chatben az AI a memóriájába menti a szabályt. Illessze be neki ezt:

```text
Mentsd el a szabályt minden következő munkához: „Ha befejezünk egy olyan feladatot, amit újra fogok csinálni, ajánld fel, hogy készítesz belőle skillt.” Ha mappában dolgozol, írd az AGENTS.md fájlba, és ha nincs, hozd létre. Gondoskodj róla, hogy ezt az eszköz a munka elején beolvassa; Coworkban írd be a mappa utasításaiba. Normál chatben mentsd el a szabályt a memóriába.
```
## Példa

Jana három projektet koordinál egy építőipari cégnél, és minden pénteken elküldi a vezetőségnek az állapotukat. 10. 9-én pénteken Cowork módban elkészíti az Új raktár projekt állapotát az AI-val. Ad neki egy értekezlet jegyzőkönyvét és egy határidő táblázatot, és kétszer javítja: a vezetőség három mondatot akar fent, és a kockázatokat csak a végén, nem a szövegben elrejtve. Ezután beilleszti a promptot, és az AI elmenti a skillt:

```text
Projektállapot vezetőségnek
- Mikor használjuk: „projekt állapot”, „jelentés vezetőségnek”, „hol tart a projekt”.
- Mire van szükséged: projekt neve, legutóbbi értekezlet jegyzőkönyve és határidő táblázat. Ha valami hiányzik, kérd el.
- Lépések: a forrásokból válaszd ki, mi történt ezen a héten, hasonlítsd össze a határidőket a tervvel, és találd meg a késéseket.
- Eredmény: fent három mondat, alatt mérföldkő táblázat határidővel és állapottal, végén kockázatok és felelősök.
- Ha javítom az eredményt, ajánld fel, hogy a skillt a javítás alapján módosítod.
```

Ugyanazon a délután új chatet nyit, csatolja a Raktárköltözés projekt jegyzőkönyvét és határidejét, és csak annyit ír: „Írj projektállapotot a Raktárköltözésről”. Az AI közben megmutatja, hogy a Projektállapot vezetőségnek skillt használja, és három mondatot, táblázatot és kockázatokat ad vissza anélkül, hogy Janának bármit magyaráznia kellene. A harmadik projektet öt perc alatt készre hozza. A hónap végéig jegyzőkönyv és anyagrendelés skilleket is készít.
## Ha elakad

- **Az AI azt válaszolja, hogy nem tud skillt menteni:** vállalati fiókban a skilleket gyakran az adminisztrátor kapcsolja be, írjon neki; mit hol kell bekapcsolni, a „Az Ön eszközében” blokk mutatja. Addig váltson Cowork vagy Code módra. A chat nem vihető át, így ott kezdje újra az 1. lépést. További információ a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) fülön.
- **Az AI nem használta a skillt az új chatben:** a skill használati leírása nem egyezik a feladat kiadásakor használt szavakkal. Írja meg az AI-nak a saját mondatát, és kérje, hogy módosítsa a skill leírását. Addig írja be egyenesen: „Használd a skillt” és a nevét.
- **A skill egy konkrét feladatot ír le:** a projekt neve, dátum vagy számok nem tartoznak a skillbe. Kérje meg az AI-t, hogy vegye ki őket, és kérje be legközelebb.
- **Az eredmény még mindig nem megfelelő:** javítsa a chatben, és fogadja el, ha az AI felajánlja a skill módosítását. Ha ugyanaz a hiba ismétlődik, keresse meg az okot az [Ellenőrizze az AI kimenetét](card:kontrola-vysledku) fül alapján.
## Mi lesz kész

Van egy skillje a rendszeresen végzett feladathoz, és tudja, hol találja. Az új chatben az AI magától használta, és a következő hasonló feladatot ugyanúgy adta vissza, mint legutóbb. Ha javítja az eredményt, az AI felajánlja, hogy a skillt a javítás alapján módosítja.
## Mi következik

A skill nem indul el magától, várja, hogy kiadja a feladatot. Ha például minden pénteken 12:00-kor kell elkészülni a projektállapotnak Ön nélkül, állítsa be [ütemezett feladatként](card:recurring-ai-task). Ha egy skill eredményét használja további munkához, például a projektállapotokból összefoglalót az egész osztálynak, adja hozzá a második lépést közvetlenül a skillhez.
## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Készség

**Mi ez:** Egy adott típusú feladathoz újrahasználható eljárás. Tartalmazhat utasításokat, szabályokat, példákat, sablonokat és egyéb szükséges forrásokat. A létrehozás és futtatás módja eszközönként eltérő.

**Mi nem ez:** Nem általános asszisztensi szerep, és nem egyetlen, változatlanul tárolt sikeres beszélgetés.

**Miért van rá szüksége a tanulónak:** Segít a bevált gyakorlatot stabil formába önteni, amelyet következetesen újra lehet használni.

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
