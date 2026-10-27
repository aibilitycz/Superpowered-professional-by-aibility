# Állítson be ismétlődő feladatot: az AI rendszeresen önállóan dolgozik

Egy olyan heti jelentést, amit eddig kézzel készített, az AI a megadott időpontban automatikusan elkészíti.

## Állítson be ismétlődő feladatot: az AI rendszeresen önállóan dolgozik

**Nehézség: közepes.**\
**Idő: kb. 15 perc** egy rendszeresen készített jelentéssel.
## Mire jó

Minden hétfő reggel kiválasztja a táblázatból a két héten belüli határidős megrendeléseket, és utánanéz, hol hiányoznak az anyagok. Az eredményt elküldi a vezetőségnek, ami fél órát vesz igénybe, és a szabadságos héten a megbeszélés már jelentés nélkül kezdődik.

Elég egyszer az AI-val elkészíteni a teljes jelentést, és a kész munkából megírni a feladatot; az [ismétlődő feladat](glossary:task) a megadott időben önállóan megismétli azt.
## Mit készítsen elő

- egy rendszeresen készített jelentést és annak legutóbbi verzióját mintaként,
- hozzáférést az anyagokhoz mappában, kapcsolt alkalmazásban, például levelezésben vagy weben,
- AI-t, amely támogatja az ismétlődő feladatokat; ezek megtalálhatók a „Az eszközödben” blokkban.
## Hogyan csinálja

1. Illessze be a promptot, és az utolsó sor után írja le, milyen jelentést szeretne és honnan származnak az anyagok. Ha az anyagok mappában vannak, nyissa meg az AI-t Cowork vagy Code módban abban a mappában.
2. Mondja el az AI-nak, mi hiányzik a jelentésből és mi felesleges: csak azt tartsa meg, ami alapján dolgozni fog. Ezután mondja meg, mikor induljon a feladat és hová küldje az eredményt.
3. Az AI létrehozza a feladatot vagy megírja a feladatleírást, és megmondja, hol lehet ütemezni. Az ismétlődő feladatok listájában ellenőrizze az első futás időpontját; ami hiányzik, azt az AI kiegészíti a feladatleírásban.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az Ön által használt AI-ba, és az utolsó sor után írja be a saját jelentését:

Szeretném, ha egy rendszeresen készített jelentésem automatikusan érkezne. Az utolsó sorban írom le, milyen jelentés ez és honnan származnak az anyagok.

Először készítsd el teljesen a jelentést a mai adatokból. Az anyagokat magad keresd meg abban a mappában, ahol dolgozol, a kapcsolt alkalmazásokban vagy a weben. Ha megtalálod a régebbi verziómat, tartsd magad annak formátumához. A jelentés végén írd le, milyen forrásokból származik. Ha nem tudod, hol keresd az anyagot, kérdezz meg engem.

Ezután várd meg, amíg átnézem a jelentést, és dolgozd be a javaslataimat. A teljes munkából írj egy feladatleírást az ismétlődő feladathoz: honnan vegye az anyagokat, mit válasszon ki belőlük és hogyan nézzen ki a jelentés. Adj hozzá egy szabályt: ha egy forrás hiányzik vagy nem töltődik be teljesen, ne készítsd el a jelentést, és írd meg, mi hiányzik.

Kérdezd meg, mikor induljon a feladat és hová küldje az eredményt, és ajánlj fel lehetőségeket. Ezután hozd létre az ismétlődő feladatot, és írd meg, mikor lesz az első futás és hol találom az eredményt. Ha nem tudod itt létrehozni, írd meg a feladatleírást úgy, hogy be tudjam illeszteni egy olyan eszközbe, amely támogatja, és mondd meg, hová.

Jelentés:

## Az eszközödben

### Microsoft Copilot
Illessze be a promptot a Copilot Cowork-ba a `copilot.cloud.microsoft` oldalon (a Chat mellett fent váltsa át Cowork módra), és a táblázatot csatolja a + gombbal OneDrive-ról. A feladatot maga hozza létre, ha megadja, mikor induljon; a feladatokat és eredményeket az Automations oldalon találja. Felhőben fut, így a laptopot bezárhatja. Cowork nélkül a Copilot Chat-ben vigye az egeret a feladatra, és válassza a Schedule this prompt lehetőséget.

### ChatGPT
A ChatGPT-ben az AI létrehozza a feladatot, ha kéri a chatben; a feladatok és eredményeik a bal oldali panelen a Scheduled alatt találhatók. Ez a feladat az anyagokat a kapcsolt alkalmazásokból, például a beállításokban a Plugins alatt csatolt megosztott meghajtóról, valamint a webről veszi, és fut, még ha nem is online van. A mappával a számítógépen a Codex dolgozik a ChatGPT asztali alkalmazásban; ennek a feladatnak a futtatásához a számítógépnek és az alkalmazásnak futnia kell.

### Claude
A Claude Cowork-ban az AI előkészíti a feladatot, Ön pedig a Schedule gombbal megerősíti; a jelentés a bal oldali panelen a Scheduled alatt található. A csatlakozókkal futó feladat akkor is működik, ha a számítógép ki van kapcsolva, a mappával dolgozó csak akkor, ha a számítógép be van kapcsolva és a Claude alkalmazás nyitva van. A csatolt levelezéssel az AI az eredményt akár e-mail tervezetként is elkészítheti.

### Gemini
A Gemini alkalmazásban írja be az @ jelet, válassza a Disk vagy Gmail lehetőséget, és illessze be a promptot; a Disk táblázatnál írja hozzá a nevét. Amikor megadja, mikor és milyen gyakran induljon a feladat, a Gemini ütemezi azt; a feladatok a bal oldali panelen a Scheduled alatt vannak, az elkészült eredményt olvasatlanul találja ott, és mobilon értesítést kap. Egyszerre 10 feladat lehet, és a Google Workspace vállalati fiókjának kiadásának támogatnia kell ezt.
## Mi az az ismétlődő feladat

Az ismétlődő feladat (scheduled task) egy olyan feladatleírás, amelyet az AI önállóan indít el a megadott időpontban, például minden munkanap 8:00-kor vagy hetente egyszer. Mivel a feladat futásakor nincs kitől kérdezni, a feladatleírásnak tartalmaznia kell mindent, amire szüksége van. A feladatleírást bármikor elolvashatja és módosíthatja az ismétlődő feladatok listájában.

Az a feladat, amely csak kapcsolt alkalmazásokból és webes forrásokból dolgozik, akkor is lefut, ha a számítógép ki van kapcsolva. Az a feladat, amely a számítógépen lévő mappával dolgozik, akkor fut, ha a számítógép be van kapcsolva és az AI alkalmazás nyitva van. Ezért a leggyorsabb kezdés egy webes jelentéssel, például az iparági hírekkel, mert nem kell semmit csatolni. Az alkalmazásokat az AI eszköz beállításaiban csatlakoztathatja; vállalati fiók esetén ezt néha az adminisztrátornak kell engedélyeznie.
## További jelentések, amelyek automatikusan érkezhetnek

Ha megvan az első jelentés, a következőt ugyanabban a chatben egy-két mondattal létrehozhatja, és az AI megkérdezi, mi hiányzik. Így például érkezhet:

- „Minden munkanap 9:00-kor és 15:00-kor írd meg, mennyit költöttünk reklámra és mennyibe került egy új ügyfél. Ha az ügyfélszerzés költsége több mint 20%-kal nő, tedd az első sorba.”
- „Minden munkanap 17:30-kor nézd át, mi változott ma a projekt mappájában, és írj rövid bejegyzést a projekt naplójába arról, mi történt és milyen döntések születtek.”
- „Minden hétfőn 7:30-kor keresd meg a weben az előző heti iparági híreket, és foglald össze az öt legfontosabbat forráslinkkel.”

A változásokat figyelő jelentésnél, például a reklámköltségeknél, hasznos a „Ha semmi nem változott, ne küldj semmit.” mondat. Az üres jelentést hamar abbahagyja az ember megnyitni.
## Példa

Tereza egy kisebb építőipari cég megrendeléseit koordinálja, és minden hétfőn elküldi a vezetőségnek a két héten belüli határidős megrendelések és hiányzó anyagok jelentését. A megrendelések táblázata a vállalati OneDrive-on van, és az AI-hoz a Microsoft 365 csatlakozik, tehát OneDrive és Outlook is. 2026. szeptember 28-án beilleszti a promptot, és az utolsó sor után ezt írja:

```text
Hétfői megrendelésjelentés a vezetőségnek a OneDrive-on lévő "Zakázky 2026" táblázatból: 14 napon belüli határidők és hiányzó anyagok.
```

Az AI a jelentésbe beleveszi a két lezárt megrendelést is. Tereza írja, hogy „csak nyitottakat”, és az AI javítja a jelentést. Ezután beállítja, hogy minden hétfőn 8:30-kor fusson, és az eredményt e-mail tervezetként küldje a vezetőségnek. Az AI létrehozza a feladatot, és mivel csak OneDrive-ot és levelezést használ, a számítógép kikapcsolt állapotában is fut. 2026. október 5-én 8:30-kor a tervezetek között várja:

```text
### Megrendelések 2026. 10. 5-én
14 napon belüli határidő:
- Kolín iskola, felújítás: átadás 10. 12., hiányzik az elektromos felülvizsgálati jegyzőkönyv.
- Mladá Boleslav csarnok: használatbavétel 10. 16., az anyagok teljesek.
Hiányzó anyagok:
- Nymburk lakóház: aláírt homlokzatátvételi jegyzőkönyv.
Forrás: "Zakázky 2026" táblázat a OneDrive-on, Nyitott lap.
```

Tereza elküldi az e-mailt, és a chatben kéri, hogy minden megrendeléshez legyen feltüntetve a művezető neve is. Az AI ezt hozzáadja a feladatleíráshoz, és 2026. október 12-től a jelentés tartalmazza.
## Ha elakad

- **Az AI azt válaszolja, hogy nem tud ütemezett feladatot létrehozni:** az Ön eszközében nincs ilyen funkció, vagy a vállalati fiókban nincs engedélyezve. Az AI a prompt alapján megírja a kész feladatleírást; illessze be egy olyan eszközbe, amely támogatja az ismétlődő feladatokat, és kérje az adminisztrátortól az engedélyezést. További információ a [Chat, Cowork vagy Code](card:when-chat-is-not-enough) kártyán.
- **A feladat nem indult el vagy nem találta a fájlt:** a feladat a számítógépen lévő mappával dolgozik, és a gép akkor ki volt kapcsolva, vagy az alkalmazás zárva volt. Állítsa át az indítást olyan időpontra, amikor a gép be van kapcsolva, vagy tegye az anyagokat egy AI-hoz csatolt megosztott meghajtóra.
- **A jelentés minden héten ugyanazokat a számokat mutatja:** a feladat azt a fájlt olvassa, amit feltöltött a chatbe, és az nem frissül automatikusan. Tegye a táblázatot egy AI-hoz csatolt megosztott meghajtóra, és kérje az AI-t, hogy módosítsa a feladatleírást.
- **A jelentésben régi vagy hiányzó számok vannak:** írja meg az AI-nak, mi nem stimmel, hogy megtalálja az okot és javítsa a feladatleírást. További információ a [Ellenőrizze az AI kimenetet](card:kontrola-vysledku) kártyán.
## Mi lesz kész

Megvan az első, aktuális adatokból készült jelentés, amelyet átnézett és javított, valamint egy beállított ismétlődő feladat, amely a következő időponttól önállóan elkészíti azt. Tudja, mikor lesz az első futás és hol találja az eredményt. Amit az első futás után hiányol, azt az AI kiegészíti a feladatleírásban.
## Mi következik

Ha a jelentésből közvetlenül szeretne továbblépni, például megbeszéléshez anyagokat készíteni, adja hozzá a feladatleíráshoz, és az egész folyamatot [mentse skillként](card:create-skill-from-proven-process).
## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Ütemezett feladat

**Mi ez:** Egy olyan munka, amelyet az eszköz idő vagy esemény alapján indít el, és az eredményt anélkül kézbesíti, hogy minden alkalommal kérnéd. Az elérhetőség és az elnevezés eszközönként és fiókonként eltérő.

**Mi nem:** Nem skill vagy asszisztens. Ezek akkor várnak, hogy valaki használja őket, míg a feladat magától indul el.

**Miért van rá szüksége a tanulónak:** Segít megkülönböztetni, mikor elég egy elmentett folyamat, és mikor kell valami, ami kérés nélkül fut. Ezzel együtt felmerül a kérdés, ki felügyeli az eredményt, és mi történik, ha a feladat rossz adatokon fut le.

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
