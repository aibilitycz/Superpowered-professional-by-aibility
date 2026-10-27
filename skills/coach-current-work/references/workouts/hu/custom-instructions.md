# Állítsa be a Custom Instructions-t: állandó utasítások minden csevegéshez

Az AI az öt válaszából állandó utasításokat készít, így minden új csevegés az Ön igényei szerint válaszol.

## Állítsa be a Custom Instructions-t: állandó utasítások minden csevegéshez

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** egy valódi feladattal a teszteléshez.
## Mire jó

Hétfőn az értekezlet jegyzeteiből öt feladatot szeretne a csapatnak, de az AI a harmadik bekezdésig rejti őket. Hozzáteszi: „bevezető nélkül, csak pontok, projektkoordinátor vagyok”, és szerdán egy új csevegésben ismét ugyanígy ír.

A Custom Instructions az AI beállításaiban megadott egyéni utasítások, amelyeket az AI minden új csevegésnél megkap, így csak egyszer kell megadnia, ki Ön és hogyan válaszoljon.
## Mit készítsen elő

- Az AI, amit a munkában használ,
- az utasítások, amiket folyton ismétel, például „tömören” vagy „bevezető nélkül”,
- egy aktuális heti feladat, például értekezlet jegyzete; ezen ellenőrzi az utasításokat.
## Hogyan csinálja

1. Nyisson új csevegést, és illessze be az AI gyakorlat promptját. Az AI megkérdezi, mit nem tud Önről, és megírja a Custom Instructions-t.
2. Amit nem megfelelőnek talál, írja meg az AI-nak, például hogy Ön magázódik. A kész verziót illessze be az egyéni utasítások mezőjébe; hol van, azt a „Az Ön eszközében” blokk mutatja.
3. Egy új csevegésben adja meg az előkészített feladatot anélkül, hogy magáról magyarázna. Ha a válasz nem megfelelő, mondja meg az AI-nak, mit csináljon másként legközelebb, és az megjegyzi.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkában használ:

Írj nekem Custom Instructions-t: rövid utasításokat, amelyeket beillesztek ennek az AI eszköznek a beállításaiba, hogy minden új csevegés tudja, ki vagyok és hogyan válaszoljon.

Öt dolgot kell tőlem megtudnod:
1. Milyen szerepem van és mi a feladatom.
2. Milyen területen és kinek dolgozom.
3. Miben segít nekem leggyakrabban az AI a munkában.
4. Milyen hosszú és milyen formátumú válaszokat szeretnék.
5. Mit nem szeretnék a válaszokban.

Ha már tudsz valamit rólam a memóriából vagy korábbi csevegésekből, először írd le, mit tudsz, és csak a hiányzó dolgokat kérdezd meg egyszerre, pár szóban válaszolok. Ha már vannak beállított utasításaim, azokat vedd alapnak.

Az utasításokat két részre oszd, címmel: „Ki vagyok:” és „Hogyan válaszolj nekem:”. Az elsőbe írd a szerepet, területet, kinek dolgozom és miben segít az AI, a másodikba a nyelvet, válaszok hosszát, formáját és mit nem szeretnék.

Minden utasítást egyetlen mondatban fogalmazz meg, amelyből meg lehet ítélni, hogy a válasz betartotta-e. Az általános tanácsokat, mint „írj tömören”, írd át konkrét utasításra, például „válaszolj legfeljebb öt pontban”. Ne adj meg mai dátumokat, számokat, ügyfélneveket vagy egy projekt részleteit az utasításokban. Az egész utasítás legyen 1500 karakternél rövidebb, hogy a ChatGPT ingyenes verziójába is beleférjen.

A „Hogyan válaszolj nekem:” rész végére tegyél egy utasítást: „Ha kijavítalak, és a javítás a jövőben is érvényes legyen, jegyezd meg. Ha nincs memóriád, írd meg nekem a mondatot, amit beillesztek a Custom Instructions-be.”

Végül mutasd meg nekem az utasításokat egy blokkban másolásra, és kérdezd meg, mi nem megfelelő bennük. A javításokat dolgozd be, és mutasd meg az egész javított verziót.

## Az Ön eszközében

### Microsoft Copilot
Az egyéni utasításokat a Copilot Chatben találja a `copilot.cloud.microsoft` oldalon, jobb felső sarokban a három pont alatt: Beállítások és egyebek, Chat beállítások, Testreszabás, Egyéni utasítások. Az utasításokat a „Utasítások szerkesztése” és „Utasítások mentése” gombokkal illessze be. Ha a Copilotnak azt írja, hogy „jegyezd meg…”, elmenti a memóriába. Ha a mező hiányzik, illessze be az utasításokat a Jegyzetfüzet utasításaiba (Jegyzetfüzetek, Új jegyzetfüzet).

### ChatGPT
A fiók menüjében (kattintson a nevére) nyissa meg a Beállításokat, majd a Személyre szabást, és illessze be az utasításokat a Custom Instructions mezőbe; az „Enable customization” kapcsolónak be kell lennie kapcsolva. A magyar verzióban ugyanott vannak a menüpontok, csak magyarul. A fizetős és vállalati csomagok 5000 karaktert fogadnak el, az ingyenes fiók 1500-at. A memória a Beállítások, Személyre szabás, Memória alatt található.

### Claude
Bal alsó sarokban kattintson a kezdőbetűire, majd a Beállításokra. A mező neve „Instructions for Claude”, és minden beszélgetésre érvényes. A memória a Beállítások alatt, Memória néven található; vállalati csomagokban (Team és Enterprise) a szervezet tulajdonosa kapcsolja be.

### Gemini
Állandó utasításokat a Gemini-ban a Gem robotba illessze, mert az egyéni utasítások és a memória nem elérhető a munkafiókban: a `gemini.google.com` oldalon nyissa meg a Gem robotokat, Új Gem, illessze be az utasításokat, majd Mentés. Az új csevegéseket ebben a Gemben nyissa meg. Az AI által a Custom Instructions-hoz adott mondatot egészítse ki a Gem utasításaiban a „Saját Gem robotok” részben.
## Mik azok a Custom Instructions

Az eszköz az Ön Custom Instructions-át használja minden új csevegésnél. Az AI ezért ismeri őket, még ha nem is említi a csevegésben, és ha már vannak, ebből a gyakorlatból indul ki. Érvényesek, amíg a beállításokban nem változtatja meg őket.

Emellett a legtöbb AI eszköznek van memóriája, ahová az AI a csevegéseiből automatikusan ment dolgokat, és folyamatosan frissíti azokat. Ez jól jön a munka közben összegyűlt javításokhoz. Amit mindig érvényesnek szeretne, időnként vigye át a Custom Instructions-be, mert azok maguktól nem változnak.

Az utasításokba csak az tartozik, ami minden csevegésre érvényes. A mai dátumot, számot vagy ügyfélnevet adja meg az AI-nak közvetlenül a feladatban, különben azokat is beemelné a válaszokba, ahol nem kellene.
## Custom Instructions sablon

A sablon kiegészíti az utasításokat olyan szabályokkal, amelyek alapján az AI az aktuális dolgokat a weben keresi, és jelzi, ha nem biztos valamiben.

Nem kell semmit kitöltenie, az AI a szögletes zárójelek közötti helyeket a rólad tudottak alapján tölti ki, és a hiányzókról kérdez. Legjobb, ha közvetlenül a gyakorlat után ugyanabban a csevegésben illeszti be, mielőtt elmentené az utasításokat. Ha már vannak beállított utasításai, nyisson új csevegést; az AI látja azokat. Mindkét esetben illessze be ezt a promptot:

```text
Egészítsd ki a Custom Instructions-omat ezzel a sablonnal. A szögletes zárójeleket töltsd ki azzal, amit tudsz rólam, és amit nem, kérdezd meg. Ne duplikáld azokat a szabályokat, amik már megvannak, és ha a sablon szabálya ellentmond az enyémnek, az enyémet hagyd meg. A javítások memóriába mentéséről szóló utasítást hagyd a végén. Az egész utasítás legyen 1500 karakternél rövidebb, és mutasd meg egy blokkban másolásra.

Ki vagyok:
[szerep] a [cég neve]-nél, főként [két-három feladat].

Hogyan válaszolj nekem:
- Magyarul válaszolj, és [tegeződj vagy magázódj] velem.
- Kezdd az eredménnyel vagy a válasszal, a részleteket csak utána add meg. Bevezető és összefoglaló nélkül.
- Egy ismeretlen fogalmat egyszerű mondatban magyarázz el.
- Aktuális dolgoknál, például szabályoknál, áraknál vagy újdonságoknál a szakterületen, keress a weben és tüntesd fel a forrásokat.
- Ha nem vagy biztos valamiben, mondd el, és írd meg, mit kell ellenőrizni. Ne találj ki számokat.
- Soha ne küldj e-mailt vagy üzenetet helyettem a kifejezett engedélyem nélkül.
- Hosszabb dokumentum vagy táblázat alatt írj egy mondatot arról, mi hiányzik még belőlük.
```

Az AI által visszaadott egész blokkot illessze be az egyéni utasítások mezőjébe. Ha már vannak utasításai, cserélje le őket.

Az e-mail sor biztosíték: az AI, amely hozzáfér az e-mail fiókjához, képes e-mailt küldeni, és ez a sor megakadályozza, hogy engedélye nélkül tegye. Ha nincs hozzáférése, a sor nem árt.

Ha az AI nem tünteti fel a forrásokat az aktuális kérdésnél, írja neki, hogy „keresd meg a weben”. Ha akkor sem keres, kapcsolja be a webes keresést; egyes eszközökben a + gomb alatt a beszélgetési mező mellett, máshol a beállításokban található. Vállalati fiókban a rendszergazda kikapcsolhatja.
## Hogy az AI maga jegyezze meg a javításokat

Az utasítások végén lévő utasítás gondoskodik róla, hogy ha kijavítja az AI-t, és a javítás a jövőben is érvényes legyen, az AI elmentse azt a memóriába. Ha van memóriája, nem kell ezt ellenőriznie. Vállalati fiókban a rendszergazda dönt erről, és ha az AI-nak nincs memóriája, megírja Önnek azt a mondatot, amit beilleszthet a Custom Instructions-be.

Néhány hónap alatt annyi javítás gyűlik össze a memóriában, hogy érdemes átvinni az utasításokba. Nyisson új csevegést, és írja be:

```text
Vedd figyelembe a jelenlegi Custom Instructions-omat, és egészítsd ki azzal, amit a memóriádban tárolsz rólam, és ami minden csevegésre érvényes. Egyesítsd az azonos jelentésű utasításokat, és szűrd ki azokat, amelyek már nem relevánsak. Az eredmény legyen 1500 karakternél rövidebb, és mutasd meg, mit változtattál.
```

Az új verziót illessze be a beállításokba a régiek helyett.
## Példa

Jana projektkoordinátor egy cégnél, amely raktárrendszereket vezet be webáruházaknak. 2026. október 12-én hétfőn beilleszti a promptot az AI-ba, amit a munkában használ. Az AI a korábbi csevegésekből tudja, hogy Jana projektkoordinátor, és csak a válaszok hosszára és a nem kívánt elemekre kérdez rá. Jana azt válaszolja: „röviden, a feladatoknál mindig ki és mikorra, és ne magyarázd a projektfogalmakat”. Az AI ezt írja:

```text
Ki vagyok:
Projektkoordinátorként raktárrendszerek bevezetését koordinálom webáruházak számára. Figyelem a határidőket, beszállítókat és értekezleteket. Az AI leggyakrabban az értekezleti jegyzőkönyvek, beszállítói e-mailek és vezetői összefoglalók készítésében segít.

Hogyan válaszolj nekem:
- Magyarul írj, és kezd az eredménnyel, bevezető és összefoglaló nélkül.
- Válaszolj legfeljebb öt pontban vagy öt mondatban, ha nem kérek többet.
- A feladatokat így írd: ki, mit, mikorra.
- Ne magyarázd el a projektmenedzsment fogalmait, ismerem azokat.
- Ha kijavítalak, és a javítás a jövőben is érvényes legyen, jegyezd meg. Ha nincs memóriád, írd meg nekem a mondatot, amit beillesztek a Custom Instructions-be.
```

Jana az utasításokat beilleszti a beállításokba. Kedden új csevegést nyit, beilleszti a beszállítóval tartott értekezlet jegyzeteit, és csak annyit ír: „készíts belőle jegyzőkönyvet a csapatnak”. Öt feladatot kap ki, mit, mikorra formában, bevezető nélkül. A kezdési dátumot (2026. november 2.) a keddi jegyzetből vette az AI; az utasításokban nincs dátum, így egy hónap múlva nem keveredik más jegyzőkönyvbe. A „ki” csak kezdőbetűket tartalmaz, ezért Jana írja: „a neveket írd ki teljesen”. Az AI ezt megjegyzi, és csütörtökre a jegyzőkönyvben már teljes neveket használ.
## Ha elakad

- **Az AI ugyanúgy válaszol, mint korábban:** nyisson új csevegést, és ellenőrizze a beállításokban, hogy az utasítások elmentődtek-e. A ChatGPT-ben az „Enable customization” kapcsolónak be kell lennie. A Gemini-ben új csevegést nyisson közvetlenül a Gem robotban.
- **Vállalati fiókban hiányzik az utasítás mező:** valószínűleg a rendszergazda kikapcsolta a funkciót. Mentse az utasításokat egy [projektbe](card:asistent), ahol minden csevegésre érvényesek lesznek.
- **Az utasítások nem férnek el a mezőben:** írja az AI-nak: „Rövidítsd az utasításokat 1500 karakter alá. Egyesítsd az azonos jelentésű utasításokat, és töröld azokat, amelyek nélkül a válasz ugyanaz lenne.”
- **Az AI csak néha tartja be az utasítást:** az utasítás valószínűleg általános, például „írj tömören”. Kérje meg az AI-t, hogy írja át konkrétabbra, például „legfeljebb öt pontban”, és az új verziót illessze be a beállításokba.
## Mi lesz kész

Az AI beállításaiban a Custom Instructions az Ön munkájáról és a kívánt válaszokról szólnak. Egy új csevegésben egy valódi feladaton látta, hogy az AI a beállított hosszban és formában válaszol. Ha legközelebb kijavítja, az AI elmenti a javítást a memóriába, vagy megírja a mondatot, amit beilleszthet az utasításokba.
## Mi következik

Az a stílus, amellyel az AI e-maileket és bejegyzéseket ír Ön helyett, nem fér el néhány sor utasításban. Az AI ezt külön dokumentumban írja meg a [Tone of voice](card:tone-of-voice) kártya szerint. Egy projekt vagy ismétlődő munka utasításait mentse el egy [projektben](card:asistent). Amikor az AI-val Cowork vagy Code módban dolgozik, azaz közvetlenül a számítógépén lévő mappával, hagyja, hogy az utasításokat a `AGENTS.md` fájlba vegye át a [Pravidla pro AI v jednom souboru](card:agents-md) kártya szerint.
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
