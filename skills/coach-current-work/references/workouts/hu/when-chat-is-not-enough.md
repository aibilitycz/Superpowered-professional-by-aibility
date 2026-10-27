# Engedje be az AI-t a mappájába: amikor a sima chat nem elég

Ha a chat nem elég több fájl egyszerre kezelésére, váltsa át Cowork vagy Code módra, és az AI az eredményt közvetlenül a mappába menti.

## Engedje be az AI-t a mappájába: amikor a sima chat nem elég

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** a folyamatban lévő munka mappájával.
## Mire jó

Csütörtökig, 10. 15-ig vezetésének új laptop beszállítót kell ajánlania. Öt
ajánlat PDF formátumban a mappában van. Egyenként tölti fel őket a chatbe, a
válaszból kimásolja az összehasonlító táblázatot Wordbe, és amikor szerdán
megérkezik a hatodik ajánlat, kezdheti elölről.

A [munka mód](glossary:workmode) Cowork vagy Code esetén az AI hozzáfér a teljes
mappához, így a hatodik ajánlatot csak hozzáadja a kész táblázathoz.
## Mit készítsen elő

- egy mappát a folyamatban lévő munkával egy projekthez, a számítógépen vagy
  a céges meghajtón,
- egy feladatot, amit a chatben nem tudott megoldani; ha nincs ilyen, az AI
  készít egy dokumentumáttekintést,
- az AI-t, amit használ; ahol van Cowork vagy Code mód, ott a „Az eszközödben”
  blokk mutatja.
## Hogyan csinálja

1. Nyissa meg AI eszközében a Cowork vagy Code módot. Néhány eszköznél ez egy
   számítógépes alkalmazás, amit először telepíteni kell.
2. Adja meg az AI-nak a mappához való hozzáférést, és ha megkérdezi, hogy dolgozhat-e vele,
   engedélyezze. Illessze be a promptot, és alá egy mondatban írja le a chatben
   megoldhatatlan feladatot.
3. Nyissa meg azt a fájlt, amit az AI a mappába mentett. Amit nem talál megfelelőnek,
   írja meg az AI-nak ugyanabban a chatben, és az javítja a fájlt.

A dokumentumokból hiányzó részeket az AI [KIEGÉSZÍTENDŐ] jelzéssel látja el, azt Ön egészíti ki.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba Cowork vagy Code módban,
ami nyitva van a mappájában, és alá írja be a saját feladatát:

A folyamatban lévő munkám mappájában dolgozol. Ha nem látod vagy nem tudsz fájlt menteni,
azonnal mondd meg: valószínűleg sima chatben vagyok, és át kell váltanom Cowork vagy Code módra.

Nézd át az összes fájlt a mappában, és két mondatban írd le, mi van benne.

Ezután végezd el a feladatot, amit a prompt alá írok. Ha nincs feladat, készíts egy áttekintést a mappa dokumentumairól:
minden fájl neve, miről szól, fontos számok és határidők, és mit jelent ez nekem.
A számokat és tényeket csak a dokumentumokból vedd; amit nem találsz, jelöld [KIEGÉSZÍTENDŐ]-vel.

Az eredményt mentsd új fájlként ebbe a mappába Word dokumentumként, ha táblázat vagy számok vannak, Excel táblázatként.
Írd meg a fájl nevét és, hogy mit tartalmaz.

Végül mentsd el a mappa szabályait: egy mondatban, mi van benne, az eredmény fájl neve és a szabály:
"Ha új vagy módosított dokumentum kerül a mappába, egészítsd ki ugyanígy az eredményt."
Cowork módban írd be a mappa utasításaiba, másként az AGENTS.md fájlba a mappában, ha nincs, hozd létre.
Írd meg, hova mentetted a szabályokat.

## Az eszközödben

### Microsoft Copilot
A Cowork mód a Copilotban Copilot Cowork néven érhető el: a `copilot.cloud.microsoft`
oldalon választható a chat melletti kapcsolóval; Copilot licenc és adminisztrátori engedély szükséges.
A számítógépen lévő fájlokhoz nem fér hozzá, a mappát OneDrive-ra vagy SharePointra kell tenni,
és a + gombbal csatolni. Az új fájlokat a OneDrive Cowork mappába menti, és a jobb oldali panelen találja.
A szabályokat skillként menti.

### ChatGPT
A Code mód a ChatGPT-ben Codex néven érhető el a ChatGPT számítógépes alkalmazásban,
amit a ChatGPT weboldaláról tölthet le; nem kell programozni.
Bejelentkezés után válassza a Codexet, majd New chat és nyissa meg a mappát (open a folder).
Minden ChatGPT tarifában elérhető, még az ingyenesben is, de céges fiókban az admin kikapcsolhatja.
A szabályokat az AI az `AGENTS.md` fájlba menti a mappában.

### Claude
A Cowork és Code mód a Claude számítógépes alkalmazásban érhető el, amit a
`claude.com/download` oldalról tölthet le; a Cowork fizetős tarifákban van.
Az üzenetmezőnél váltsa át Chat-ról Cowork-ra; ha nem látja ezt a választást,
akkor új verziót használ, ahol minden chat tud Cowork módot.
A mappát a bal oldali panelen a Projects, + és Use an existing folder menüponttal nyissa meg.
A szabályokat az AI a mappa utasításaiba menti.

### Gemini
A Gemini nem rendelkezik Cowork vagy Code móddal, de több fájlt kezel a Gemini alkalmazásban:
Add from Drive segítségével akár 10 fájlt csatolhat, illessze be a promptot, és a módváltás kérésére írja be: „folytasd itt”.
Az eredményt az Export to Sheets gombbal mentheti táblázatként, a szöveget a Share & export és Export to Docs segítségével.
A teljes mappára a Drive-ban jobb klikk és Ask Gemini használható.
A szabályokat skillként mentse (Customize, Skills).
## Mi az a Cowork és Code mód

A Cowork mód dokumentumok kezelésére való: az AI olvassa és menti a mappában lévő fájlokat,
és önállóan dolgozik a feladaton. A Code mód főként kódhoz, weboldalakhoz és szkriptekhez készült,
de a mappával ugyanúgy dolgozik, így dokumentumokhoz is használható.

A szabályokat az AI az `AGENTS.md` fájlba vagy a mappa utasításaiba menti, így minden következő chatben
érvényesek ugyanazon mappa felett. Megosztott mappában a kollégák is látják az `AGENTS.md` fájlt;
ne törölje, az AI az alapján dolgozik. Cowork vagy Code módban ütemezett feladatokat is beállíthat,
amelyek rendszeresen, automatikusan futnak.
## Mikor elég a sima chat

A sima chat bármely eszközön két helyzetben elég:

- **Egyszeri kimenet abból, amit a chatbe beilleszt:** e-mail válasz,
  egy dokumentum összefoglalója vagy értekezleti pontok. Az anyagot egyszer beilleszti,
  és az eredményt azonnal használja.
- **Munka levelezőben, naptárban vagy céges dokumentumokban, amik a chathez
  [csatlakoztatva vannak](card:plugin-connector):** például Outlook választervezet vagy
  a következő heti találkozók áttekintése.

Cowork vagy Code módra váltson, ha az anyag több fájlból áll egy mappában,
vagy ha az eredményt fájlként szeretné megőrizni és később visszatérni hozzá.
## Példa

Ondřej irodafelújítás koordinátora, és 10. 16-ig a befektetőnek kell küldenie
egy listát a még nem javított hibákról. A `Rekonstrukce kanceláří` mappában
hét ellenőrzési nap jegyzőkönyve van Word formátumban. Megnyitja az AI-t Cowork módban,
adja a mappához a hozzáférést, és a prompt alá írja: „Készíts listát a hibákról,
amik a jegyzőkönyvek szerint még nem javítottak meg, határidővel és a javító céggel.”

Az AI létrehoz egy `otevrene-zavady.xlsx` táblázatot a mappában, 14 hibával.
Két jegyzőkönyvben hiányzik a határidő, azokat [KIEGÉSZÍTENDŐ]-vel jelöli.
A mappa szabályaiba beírja, hogy ellenőrzési jegyzőkönyvek és nyitott hibák vannak benne,
valamint a szabályt, hogy minden új jegyzőkönyvből egészítsék ki a hibákat és jelöljék a javítottakat.

10. 19-én hétfőn Ondřej feltölt egy új jegyzőkönyvet, megnyit egy új chatet ugyanebben a mappában,
és csak annyit ír: „Új jegyzőkönyv érkezett.” Az AI kiegészíti a listát, és két hibát javítottként jelöl.
## Ha elakad

- **Az AI azt válaszolja, hogy nem lát a mappába vagy nem tud fájlt menteni:**
  sima chatben ír. Váltson Cowork vagy Code módra az „Az eszközödben” blokk szerint,
  és adja meg az AI-nak a mappához való hozzáférést.
- **Cowork vagy Code mód hiányzik az eszközében:** céges fiókban gyakran az admin kapcsolja be,
  kérje meg erre. Claude ingyenes verzióban nem támogatja a Coworkot, Copilot Coworkhoz Microsoft 365 Copilot licenc kell,
  Gemini nem rendelkezik ilyen móddal, a használati útmutató az „Az eszközödben” blokkban van.
  Ha a Codex hiányzik a ChatGPT személyes fiók alkalmazásában, töltse le az új ChatGPT számítógépes alkalmazást.
- **Nem telepíthet semmit:** Copilot Cowork és Gemini Google Drive-ban böngészőből fut,
  és a céges meghajtó mappájával telepítés nélkül dolgoznak. Egyébként küldjön IT-nek üzenetet:
  „Szükségem van AI-s számítógépes alkalmazásra, hogy az AI dolgozhasson a projekt fájljaival a számítógépen lévő mappában.”
- **Az AI kihagyott néhány fájlt:** írja meg a nevüket, hogy egészítse ki.
  Ha több száz fájl van a mappában, nyisson csak egy alkönyvtárat, ami a feladathoz tartozik.
## Mi lesz kész

Van AI-ja Cowork vagy Code módban, ami a mappájával dolgozik.
A mappában egy új fájl van a chatben megoldhatatlan feladat eredményével,
és az AI megírta, hova mentette a szabályokat: mi van a mappában és hogyan egészítse ki az eredményt új dokumentum esetén.
Legközelebb ugyanazt a mappát nyissa meg új chaten, és csak írja meg, mi változott.
## Mi a következő lépés

Ha így szeretné előkészíteni az összes folyamatban lévő munkáját, hozzon létre
[PACT munkaterületet](card:pact-workspace). Ha azt szeretné, hogy az eredmény automatikusan frissüljön,
például minden hétfő reggel, állítson be [ütemezett feladatot](card:recurring-ai-task).
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
