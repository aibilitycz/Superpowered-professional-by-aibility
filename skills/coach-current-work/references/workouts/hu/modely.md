# Váltson modellt a feladat szerint: gyors a szűréshez, erős a döntéshez

Két feladatán összehasonlítja a gyors és az erős modellt, az AI pedig megjegyzi, melyiket használja melyik munkához.

## Váltson modellt a feladat szerint: gyors a szűréshez, erős a döntéshez

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** két ezen heti feladattal.
## Mire jó

Az ügyfél péntekig szeretné tudni, hogy a megrendelését november végéig teljesíteni tudják-e. AI-nak ad egy táblázatot a csapat kapacitásairól, és pár másodperc alatt megkapja a választ, hogy igen. Az AI azonban nem vette észre, hogy két csapattag novemberben szabadságon lesz, mert az alapértelmezett modellen futott, és nem tudta, hogy át lehet váltani.

A gyors modell elég a szűréshez és átfésüléshez, de ha a döntést egy erősebb, hosszabb gondolkodásra képes modellre bízza, az jobban észreveszi azokat a feltételeket, amiket a gyors modell kihagy.
## Mit készítsen elő

- Tömeges munkát ebből a hétből, például 30–50 feladatot értekezletekről vagy szétválogatandó kérdésekről,
- Egy döntést, például választást három ajánlat közül ár, határidő és feltételek alapján,
- Anyagokat mindkét feladathoz,
- Az AI-t, amit a munkában használ, vagy AI-t [Cowork vagy Code módban](glossary:workmode).
## Hogyan csinálja

1. A modellválasztó menüben válassza a leggyorsabb beállítást; hol van, azt a "Az ön eszközében" blokk mutatja. Illessze be a promptot, és az utolsó két sorba írja be mindkét feladatot egy-egy mondatban.
2. Váltson a legerősebb beállításra, és írja be: „Második kör”, Cowork vagy Code módban egy új csevegésben: „Második kör a `ulohy.md` szerint”. Az AI újra megoldja a feladatokat, és összehasonlítja a köröket.
3. Minden feladatnál válassza ki az eredményt, amit használna. Az AI ennek alapján megjegyzi, melyik modell mire való, és elmenti a szabályt, hogy legközelebb szóljon, mikor váltson.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkában használ:

Összehasonlítjuk, hogyan old meg két munkafeladatomat egy gyors és egy erős modell. A feladatok az utolsó két sorban vannak, az anyagokat megtalálod a mappában, ahol dolgozol, vagy a mellékletekben. Ha nem közvetlenül a mappában dolgozol a gépemen, ne hozz létre fájlokat, mindent a csevegésben hagyj.

Első kör:
- Írd meg, melyik modellen és milyen gondolkodási beállítással futsz. Ha nem vagy biztos benne, kérdezz meg engem.
- Oldd meg mindkét feladatot teljesen. Kérd be a hiányzó anyagokat.
- Minden feladatnál az elején és a végén jegyezd fel az aktuális időt, és írd le, mennyi ideig tartott. Ha nem megy, írd, hogy „nem mérve”, és az összehasonlításnál kérdezd meg, mennyit vártam nagyjából az egyes körökre.
- Mindkét feladatot és a prompt „Második kör” utáni részét mentsd el `ulohy.md` fájlba. Az eredményeket mentsd `porovnani-modelu.md` fájlba a modell és gondolkodási beállítás címszó alatt.

A második kört a „Második kör” üzenettel indítom erősebb beállításon:
- Ha ugyanazon a modellen és beállításon futsz, mint az első körben, figyelmeztess, hogy váltsak.
- Vedd elő a feladatokat az `ulohy.md`-ből vagy az első körből a csevegésben, és csináld meg újra az elejétől kezdve, ugyanúgy, mint az első körben. Az első kör eredményeit ne használd; a `porovnani-modelu.md`-t csak akkor nyisd meg, ha megvannak a saját eredményeid, és írd hozzá új címszó alá.
- Ezután hasonlítsd össze a két kört. Minden feladatnál mutass legfeljebb három különbséget, amelyek alapján eldönthető, hogy az eredmény használható-e, és mennyi ideig tartott az egyes kör. A hosszabb szöveg vagy hosszabb várakozás önmagában nem jelent jobb eredményt.
- Kérdezd meg, melyik eredményt használjam melyik feladathoz, és jelöld meg kiválasztottként a `porovnani-modelu.md`-ben.

Végül a választásom alapján hozz létre egy `modely.md` fájlt áttekintéssel: munkatípus, modell és gondolkodási beállítás, valamint egy mondat, hogy miért. Az áttekintés végére írj egy sort: „A kész döntést vagy elemzést használat előtt másik modell ellenőrzi.” A `AGENTS.md` fájlba ugyanabban a mappában adj hozzá egy szabályt: „Mielőtt elkezdenéd a feladatot, nézd meg a `modely.md`-t. Ha más modell vagy gondolkodás illik hozzá, mint amivel futsz, mondd el nekem egy mondatban az elején.” Ha nincs `AGENTS.md`, hozd létre. Gondoskodj róla, hogy ezt az eszközben minden munka elején elolvasd; Coworkban írd be a mappa utasításaiba. Ha nem a mappában dolgozol, jegyezd meg az áttekintést és a szabályt, és ha nincs memória, írd be nekem a csevegésbe.

Tömeges munka:
Döntés vagy elemzés:

## Az ön eszközében

### Microsoft Copilot
A Copilot Chat jobb felső sarkában választhat: az első körben Quick response, a másodikban Think deeper, és ugyanígy válaszoljon, ha az AI megkérdezi, melyiken fut. Más modellt a Copilot Chatben nem választhat, a gondolkodás hosszát hasonlítja össze. Az áttekintést a Copilot elmenti memóriába (üzenet: Memory updated), memória nélkül a Chat settings › Personalization alatt a Custom instructions-be illessze be.

### ChatGPT
A választék a weben az üzenetmezőben, mobilon a beszélgetés tetején: az első körben Instant, a másodikban a legmagasabb szint, amit használ (High vagy Extra High), ingyenes fiókon Think. Az áttekintést a ChatGPT memóriába menti (Personalization › Memory), memória nélkül a Custom Instructions-be illessze be. Codexben a választék az üzenetmező alatt van.

### Claude
A modellválaszték a küldés gomb mellett van: gyors például Haiku, erősebb Sonnet, legerősebb Opus. Az Effort menüpontban állítható a gondolkodás Low-tól Max-ig. Claude Code-ban a modellt a `/model`, a gondolkodást a `/effort` paranccsal válthatja.

### Gemini
Az üzenetmező alján kattintson a modell nevére: az első körben válassza a Flash vagy Flash-Lite modellt, a másodikban a Pro-t, majd rögtön utána a High gondolkodási szintet; ahol Fast, Thinking és Pro a választék, válassza Fast, majd Pro. A Gemini munkahelyi fiókban nem rendelkezik memóriával, ezért az áttekintést és szabályt a Gems (Gems › New Gem) utasítások közé tegye, és ott adja meg a feladatokat.
## Mi a modell és a gondolkodás

A [modell](glossary:ai-model) az AI, amely válaszol önnek, és minden alkalmazás több modellt kínál. A [gondolkodás](glossary:reasoning-mode) a beállítás, hogy mennyi ideig elemzi a modell a feladatot, mielőtt válaszol; angolul a különböző alkalmazásokban thinking, reasoning vagy effort néven ismert. A gyors modell rövid gondolkodással elég a tömeges munkához, azonnal válaszol. Az erős modell hosszabb gondolkodással érdemes döntésekhez és mély elemzéshez, de lassabban válaszol, ezért nem akarja mindenhova használni. Mindkettőt a modellválasztó menüben válthatja; hogy melyik eszköz hol található, az "Az ön eszközében" blokkban olvasható.

Az `ulohy.md`, `porovnani-modelu.md` és `modely.md` egyszerű szövegfájlok az anyagokat tartalmazó mappában, például Jegyzettömbbel nyithatók meg. Az `AGENTS.md` szabályfájl ugyanabban a mappában van. Az AI Cowork vagy Code módban minden munka elején elolvassa, és ahol az eszköz igényli, beállítja az AI a prompt alapján, így a modellválasztási szabályt nem kell ismételni.
## Ellenőrizze az eredményt másik modellel

A döntést, amely alapján cselekszik, használat előtt ellenőrizze egy másik modellel, mint amelyik megírta. Minden modell mást hagy ki, így a második gyakran megtalálja, amit az első nem vett észre. Legjobb, ha más cég AI-ját használja, mint amelyik a döntést készítette. Cowork vagy Code módban ugyanabban a mappában nyissa meg, a normál csevegésben csatolja az anyagokat, és a döntést tegye az üzenetbe a feladat alá. Ha csak egy AI-ja van, válasszon benne másik erős modellt, ha az sincs, legalább egy új csevegésben ugyanazzal a beállítással végezze az ellenőrzést, mint a második körben. Az ellenőrző prompt:

```text
Ellenőrizd a kiválasztott döntést (a `porovnani-modelu.md`-ben, fentebb ebben a csevegésben vagy a mellékletben) az anyagok alapján. Találd meg a feltételeket, amelyeket a szerző figyelmen kívül hagyott, az állításokat, amelyeket az anyagok nem támasztanak alá, és a számokat, amelyek nem stimmelnek. Minden észrevételhez írd meg, hol található az anyagokban, és javasolj javítást. Ha a döntés rendben van, írd meg egy mondatban.
```

A `modely.md` végén lévő sor emlékeztetni fog a további döntések ellenőrzésére.
## Példa

Lenka egy kis kozmetikai webshop működtetője. 2026. október 5-én hétfőn megnyitja az AI-t a Szállítás mappában, és két feladatot ad neki: szétválogatni 48 ügyfélkérdést a múlt hétből reklamációkra, szállításra és fizetésre, valamint kiválasztani egy új szállítót három ajánlat közül.

Az első körben a leggyorsabb modellen, rövid gondolkodással az AI egy perc alatt szétválogatja a kérdéseket, és a legolcsóbb ajánlatot javasolja szállítónak. A második körben a legerősebb modellen, hosszú gondolkodással ugyanúgy szétválogatja a kérdéseket, de négy percig tart. A szállítóknál azonban észreveszi, hogy a legolcsóbb ajánlat büntetést számít fel, ha a webshop kevesebb mint 200 csomagot küld havonta, Lenka pedig 120-at küld. Ezért a második legolcsóbb ajánlatot javasolja.

Lenka az első körből a szűrést, a másodikból a szállítót választja. Az AI beírja a `modely.md`-be:

```text
### Melyik modell mire való
- Szűrés és átfésülés (kérdések, listák, táblázatok): gyors modell, rövid gondolkodás. Az eredmény ugyanaz, mint az erősnél, kész egy perc alatt.
- Ajánlatok és szerződések kiválasztása: legerősebb modell, hosszú gondolkodás. A gyors modell nem vette észre a szállító feltételeiben a büntetést.
- A kész döntést vagy elemzést használat előtt másik modell ellenőrizze.
```

Egy héttel később Lenka a legerősebb modellen adja át az árjegyzék átfésülését táblázatba. Az AI azonnal jelzi, hogy ehhez elég a gyors modell.
## Ha elakad

- **Nincs erősebb modell vagy hosszabb gondolkodás a választékban:** az ingyenes verzióban gyakran csak a hosszabb gondolkodás kapcsolható be; kapcsolja be a második körhöz. Céges fiókban az adminisztrátor rejtheti a modelleket; kérje meg az erősebb modellhez való hozzáférést.
- **Az AI a második körben nem tudja, mit csináljon:** Cowork vagy Code módban nyisson új csevegést ugyanabban a mappában, és írja be: „Második kör a `ulohy.md` szerint”. Normál csevegésben maradjon ugyanabban a csevegésben, csak váltson modellt.
- **Mindkét modell ugyanazt a hibát követi el:** akkor valószínűleg a feladatban vagy az anyagokban van a hiba. A megtalálásához lásd a [Ellenőrizze az AI kimenetét](card:kontrola-vysledku) kártyát.
- **Az AI legközelebb nem emlékeztet:** ellenőrizze, hogy az `AGENTS.md` a mappában van-e, és a szabály benne van-e. Normál csevegésben ellenőrizze a beállításokban, hogy be van-e kapcsolva a memória. Ha a cég kikapcsolta, [váltson Cowork vagy Code módra](card:when-chat-is-not-enough).
## Mi lesz kész

Két ezen heti feladata kész, mindegyikhez megvan a kiválasztott eredmény. Tudja, hol válthat modellt és gondolkodás hosszát az alkalmazásában, és áttekintése van arról, melyik modell milyen munkához való. Cowork vagy Code módban az áttekintés a `modely.md`-ben, a szabály az `AGENTS.md`-ben van, így az AI a munka elején szól, ha nem megfelelő modellen fut. Normál csevegésben az AI az áttekintést és a szabályt memóriában tartja.
## Mi következik

Az erős modell eredményét küldés előtt [ellenőrizze az anyagokkal](card:kontrola-vysledku). Ha a döntés internetes forrásokat igényel, amelyeket a mappában nem talál, indítson [Deep Research-t](card:deep-research).
## AI modell

**Mi ez:** Egy rendszer, amely feldolgozza a bemenetet és választ generál. Egy AI eszköz több modellt is kínálhat, vagy a modellek választását módok nevei mögé rejtheti.

**Mi nem ez:** Nem egy teljes AI eszköz, és nem garantálja az eredmény bizonyos minőségét.

**Miért van rá szüksége a tanulónak:** Segít elkülöníteni a modell képességeit a kontextustól, a feladattól, a rendelkezésre álló eszközöktől és a környezettől, amelyben a modell fut.

## Prompt

**Mi ez:** Egy adott AI-interakcióhoz adott utasítás.

**Mi nem az:** Nem azonos a hosszú távú kontextussal, tárolt asszisztenssel vagy ügynökkel.

**Miért van rá szüksége a tanulónak:** Elindítja a gyakorlatot és irányítja annak menetét; nem a fő tananyagtartalom.

## Mélyebb gondolkodási mód

**Mi ez:** Olyan beállítás, amikor a mesterséges intelligencia több számítási időt fordít a feladat elemzésére, mielőtt választ adna. A konkrét megvalósítás és elnevezés termékenként eltérő lehet.

**Mi nem ez:** Ez nem automatikus garancia a helyes válaszra, és nem mindig ez a legjobb választás minden feladathoz.

**Miért van rá szüksége a tanulónak:** Segít eldönteni, mikor indokolt a feladat összetettsége vagy jelentősége miatt a hosszabb várakozás, a nagyobb erőforrás-felhasználás vagy a korlátozott elérhetőség.

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
