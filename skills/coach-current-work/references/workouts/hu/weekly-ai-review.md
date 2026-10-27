# Állítson be heti ellenőrzést: az AI-beállításai rendbetétele

Az AI minden héten megtalál egy ismétlődő hibát a beszélgetéseiben, kijavítja, és rendet tesz a nem használt elemek között.

## Állítson be heti ellenőrzést: az AI-beállításai rendbetétele

**Nehézség: közepes.**\
**Idő: körülbelül 15 perc** egy heti Code-módbeli munka után.
## Mire jó

Csütörtökön már harmadszor javította az AI által az ajánlatban szereplő árakat,
mert ismét áfával írta őket. Ügyfeleknek viszont áfa nélkül küldi, ezt minden
alkalommal elmagyarázta, a következő csevegésben pedig a hiba visszatért.
Ráadásul az AI továbbra is a tavaszi szabály szerint dolgozik, hogy az ajánlat
14 napig érvényes, pedig szeptember óta 30 nap az érvényesség.

A heti ellenőrzés rendszeres rendrakás: az AI átnézi az elmúlt hét csevegéseit,
és ami ismétlődött, azt ott javítja, ahonnan munka közben a szabályokat olvassa.
## Mit készítsen elő

- [režim](glossary:workmode) Code-ban működő AI, amely látja a csevegéstörténetet
  a számítógépén,
- az a mappa, ahol az AI-val a leggyakrabban dolgozik; a jelentés ide mentődik,
- az elmúlt hét Code-módban vezetett csevegései.
## Hogyan csinálja

1. Code módban nyissa meg a mappáját, és illessze be a promptot; a mappautak
   értelmezésével nem kell foglalkoznia. Ha az alkalmazás hozzáférést kér a
   csevegéstörténethez és a fájlokhoz, engedélyezze.
2. Olvassa el a jelentést, és minden hibánál mondja meg, kéri-e a javítást. Az AI
   oda írja be, ahová javasolta, és ami az archívumból kell, azt visszahozza.
3. Egy új csevegésben adja meg azt a feladatot, amelyben a hiba előjött, és
   ellenőrizze, hogy az AI helyesen oldja meg. Ezután illessze be neki az
   „Fusson le az ellenőrzés minden pénteken” blokk utasítását ütemezett feladatként.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) a Code módban, az Ön mappájában
megnyitott AI-ba:

Készíts heti ellenőrzést az AI-beállításaimról: derítsd ki, mi akadt meg veled kapcsolatban ismétlődően az elmúlt héten, és javasold, hogyan javítható.

Nézd át az elmúlt hét nap velem folytatott csevegéseimet. A Claude Code a ~/.claude/projects mappába menti őket, a Codex a ~/.codex/sessions mappába. Ha nincs hozzáférésed, mondd meg azonnal, és tanácsolj, mit kell bekapcsolni vagy hová kell váltani. Nézd át a beállításaimat is: az AI-ra vonatkozó szabályokat, például az AGENTS.md fájlt, a skilleket és a csatlakoztatott összekötőket.

Találd meg azokat a hibákat, amelyek legalább két különböző csevegésben megjelentek: dolgokat, amelyeket újra és újra el kell magyaráznom vagy javítanom neked, és az eszközhibákat, amelyek visszatérnek. Ne számítsd bele az egyszer előforduló dolgokat, a szolgáltatáskimaradásokat vagy azokat a hibákat, amelyeket a következő lépésben rögtön megoldottunk. Legfeljebb hármat válassz ki, és rendezd őket aszerint, melyik vitte el a legtöbb időmet. Mindegyiknél írd meg, mely csevegésekben és mikor jelent meg, és javasolj egy javítást a megfelelő helyre:
- ha egy munkára vonatkozik, például ajánlatokra: a javítás az adott munkához tartozó skillbe kerüljön, és ha nincs ilyen skill, javasolj újat,
- ha minden munkára vonatkozik: a javítás az AI-ra vonatkozó szabályokba kerüljön,
- ha egy eszköz vagy összekötő hibásodik meg: a javítás a beállításába kerüljön.
Minden javításhoz írd le a pontos szöveget, amelyet hozzáadsz vagy módosítasz.

Ezután találd meg azokat a skilleket, amelyek a teljes látható előzményben egyszer sem indultak el, valamint azokat a munkára vonatkozó szabályokat, amelyeket már nem használok, vagy amelyek egymásnak ellentmondanak. A havonta vagy negyedévente végzett munkára vonatkozó skilleket hagyd békén. Legfeljebb három ilyen dolgot helyezz át a revize-ai/archiv mappába, és semmit ne törölj: a skillt egészben mozdítsd át, az AGENTS.md-ből a szabályt emeld ki, és írd hozzá a revize-ai/archiv/pravidla.md fájlhoz. Amit nem tudsz áthelyezni, írd meg, hol kell kikapcsolni.

Mindent rögzíts egy rövid reportba a revize-ai/RRRR-MM-DD.md fájlba a mai dátummal: hány csevegést fedett le az ellenőrzés, a javítási javaslatokkal együtt és mi került újonnan az archívumba, valamint honnan. A reportot mutasd meg nekem, és kérdezd meg, mely javításokat kérem. A jóváhagyott javításokat aztán írd be oda, ahonnan a következő munka során ténylegesen be fogod olvasni őket, és a reportot egészítsd ki azzal, mi változott.

## Az Ön eszközében

### Microsoft Copilot
A Microsoft nem állítja, hogy a Copilot képes lenne átnézni az elmúlt heti csevegéseit.
Ezért az ellenőrzést Code módot kínáló eszközben végezze el, például Claude Code-ban vagy a ChatGPT alkalmazásában futó Codexben, és ehhez kérje az IT-adminisztrátor segítségét. Addig a már ismert javítások a Custom instructions vagy a Saved memories helyére tartoznak (Settings and more, Chat settings, Personalization).

### ChatGPT
Az ellenőrzést a Codex végzi, amely a csevegéseket a számítógépen tárolja: a ChatGPT asztali alkalmazásában váltson Codexre, válassza a mappa megnyitását (open a folder), és illessze be a promptot. Az ellenőrzés a Codexben vezetett csevegésekkel számol. Az ütemezett feladatot a Codex akkor hozza létre, ha a csevegésben erre megkéri, és a Scheduled alatt találja az oldalsó panelen.

### Claude
Az ellenőrzést a Claude Code végzi a Claude asztali alkalmazásában, amely a csevegéseket a számítógépen tárolja: válassza ki benne a mappáját, és illessze be a promptot. Az ellenőrzés a Claude Code-ban vezetett csevegésekkel számol, nem a sima csevegésben vagy a Coworkban vezetettekkel. Az ütemezett feladatot az AI akkor hozza létre, ha erre megkéri, és a Scheduled alatt találja a bal oldali panelen.

### Gemini
A Gemini vállalati fiókjainak nincs emlékezete a korábbi csevegésekről, ezért az AI egy hét alatt nem tudja azokat átnézni. A Gemini CLI, amely a számítógép fájljaival dolgozik, 2026 júniusától az Antigravity CLI eszközzel lesz felváltva, és a prompt nem számol azzal, hogy megvan a csevegéstörténete. Ezért az ellenőrzést Code módot kínáló eszközben végezze el, például Claude Code-ban vagy a ChatGPT alkalmazásában futó Codexben, és kérje ehhez az IT-adminisztrátor segítségét.
## Mi a heti ellenőrzés

A hiba egy apróság, ami miatt az AI-val végzett munka minden alkalommal egy kicsit tovább tart: egy dolog, amit az AI-nak újra meg újra elmagyaráz, vagy egy összekötő, amelyik minden héten kijelentkezteti magát. Egy hiba csak néhány percet visz el, de egy hónap alatt órák gyűlnek össze belőlük. Az ellenőrzés csak azt a hibát számítja be, amely legalább két csevegésben ismétlődött, és a javítást csak az Ön jóváhagyása után írja be. Amit talált és amit megváltoztatott, azt a reportba rögzíti, így egy hónap múlva látni fogja, mely hibák tűntek el.

Az AI a javítást oda írja be, ahová tartozik:
- az egyik munkában jelentkező hibát, például az ajánlatoknál, az adott munkához tartozó skillbe,
- a teljes munkában jelentkező hibát, például a megszólításban vagy a dátumformátumban, az AI-ra vonatkozó szabályok közé,
- a meghibásodó eszközt a saját beállításába.

Az AI-ra vonatkozó szabályok az `AGENTS.md` fájlban vannak abban a mappában, amelyben dolgozik. Ha az eszköze más fájlból olvassa a szabályokat, az AI a javítást oda írja be. A szokásos csevegés beállításaiban lévő szabályokat az ellenőrzés Code módban nem látja, és az `AGENTS.md`-be írt javítás csak a Code módban végzett munkára érvényes. A report egy sima `.md` kiterjesztésű szövegfájl, és az AI közvetlenül a csevegésben mutatja meg.

Néhány hónap alatt tucatnyi skill és szabály gyűlik össze, és ezek közül sokat az AI soha nem indít el. Az elavult szabályt az AI továbbra is követi, a nem használt skillek pedig megnehezítik, hogy a megfelelőt válassza ki. Az ellenőrzés ezért áthelyezi őket a `revize-ai/archiv` mappába, ahonnan az AI munka közben nem tölti be őket, és a reportban minden tételnél megadja, honnan vette. Az Ön dokumentumait az ellenőrzés nem helyezi át, csak a szabályokat és a skilleket, és ha nincs semmi nem használt, a report ezt egyszerűen rögzíti.

Az ellenőrzés az Ön beállításait is átnézi: az AI-ra vonatkozó szabályokat, a [skilleket](glossary:skill) és az összekötőket. A skill egy adott munka típusához tartozó elmentett eljárás, az összekötő pedig az AI és egy másik alkalmazás közötti kapcsolat, például a levelezésé. Az egyszer megtörtént hiba nem igényel új szabályt, mert az AI minden munkánál elolvassa a szabályokat, és a hosszú listában könnyebben figyelmen kívül hagyhat néhányat.

A Code módban működő eszközök a csevegéstörténetet a számítógépen tárolják, így az AI maga tudja átnézni; a sima csevegés ezt az ellenőrzést nem tudja elvégezni. Ha a múlt héten főleg sima csevegésben vagy Coworkban dolgozott, [váltson Code-ra](card:when-chat-is-not-enough), dolgozzon ott egy hétig, és utána futtassa le az ellenőrzést.
## Fusson le az ellenőrzés minden pénteken

Az ellenőrzés akkor segít a legtöbbet, ha ismétlődik. Elég egy ütemezett feladat, amelyet az AI minden pénteken délután elindít. Az új reportot a `revize-ai` mappában találja a korábbiak mellett, és abban látni fogja, mely hibák tűntek el az előző hétből. Illessze be ezt az utasítást a Code módban működő AI-ba, és kérje meg, hogy ebből hozzon létre ütemezett feladatot:

```text
Minden pénteken 14:00-kor készíts heti ellenőrzést az AI-beállításaimról. Először nézd meg a revize-ai mappában lévő legutóbbi reportot, és állapítsd meg, mely hibái tűntek el, és melyek maradtak fenn. Ezután nézd át az elmúlt hét nap velem folytatott csevegéseit, találd meg azokat a hibákat, amelyek legalább két csevegésben megjelentek, és mindegyikhez javasolj javítást a megfelelő helyen. Legfeljebb három nem használt skillt vagy érvénytelen szabályt helyezz át a revize-ai/archiv mappába, és írd le, honnan származnak. A reportot mentsd a revize-ai mappába a mai dátummal, és kérdezd meg tőlem, mely javításokat kérem.
```

A feladat a számítógépén fut, ezért csak akkor indul el, ha a számítógép be van kapcsolva és az alkalmazás nyitva van. Ha pénteken 14:00-kor nincs a számítógép közelében, írja át az utasításba azt az időt, amikor általában ott van. Az összefoglalót azzal a kérdéssel, hogy mely javításokat kéri, az ütemezett feladatok között találja meg, és ott válaszolhat rá.
## Példa

Pavla egy kisebb nyomdában intézi a megrendeléseket. Pénteken, 10. 16-án az AI átnézi az elmúlt heti csevegéseit, és ezt írja a `revize-ai/2026-10-16.md` fájlba:

```text
### Heti ellenőrzés 2026. 10. 16.
Az ellenőrzés 14 csevegést fedett le 10. 9. és 10. 16. között.

### Hibák
1. Az ajánlatok ára áfával szerepel, pedig az ügyfeleknek áfa nélkül küldi őket. Három csevegésben javította ezt (10. 12., 10. 14. és 10. 15.).
   Javítás: a „Ajánlat az ügyfélnek” skillhez hozzáadom ezt a sort: „Az árakat áfa nélkül add meg, az áfát külön írd a végösszeg alá.”
2. Az e-mailekben a dátumot 10/14/2026 formában írom. Két csevegésben javította ezt (10. 13. és 10. 15.).
   Javítás: az AGENTS.md fájlhoz hozzáadom ezt a szabályt: „A dátumot magyarul írd, például: 2026. 10. 14.”

### Archiválva
- „Németre fordítás” skill a skillek mappájából: a történetben egyszer sem indult el.
- A régi e-mail-aláírásra vonatkozó szabály az AGENTS.md-ből: ellentmond egy újabb, vállalati aláírásra vonatkozó szabálynak.
```

Pavla mindkét javítást jóváhagyja. Hétfőn egy új csevegésben ad egy ajánlatot egy reklámügynökségnek, és az AI áfa nélkül írja az árakat, anélkül hogy emlékeztetni kellene rá. A következő pénteken a report azt mutatja, hogy mindkét hiba eltűnt.
## Ha elakad

- **Az AI azt állítja, hogy nem látja a korábbi csevegéseit:** valószínűleg a promptot egy sima csevegésbe illesztette be, amely nem látja a számítógépén lévő előzményeket. Illessze be az Ön mappájában megnyitott AI-ba a [Code módban](card:when-chat-is-not-enough).
- **Az AI csak néhány csevegést talált, vagy semmit, ami ismétlődött volna:** valószínűleg a múlt héten főleg sima csevegésben vagy Coworkban dolgozott. Dolgozzon egy hétig Code-ban, és futtassa le újra az ellenőrzést. Ha hosszabb ideig dolgozik Code-ban, kérje meg az AI-t, hogy hosszabb időszakot nézzen át, például az elmúlt hónapot.
- **A hiba újra megjelenik egy új csevegésben:** írja az AI-nak: „Ez a hiba ismétlődik. Derítsd ki, honnan olvasod valójában a szabályokat, és a javítást oda írd be.”
- **Valami hiányzik az archívumból:** mondja meg az AI-nak, hogy a report alapján hozza vissza a `revize-ai/archiv` mappából az eredeti helyére.
## Mi lesz kész

A `revize-ai` mappában meglesz az első ellenőrzés reportja. Az a hiba, amelyik ezen a héten ismétlődött, ott lesz beírva, ahonnan az AI olvassa, és egy új csevegésben ellenőrizte, hogy a hiba már nem tér vissza. A nem használt skillek és az érvénytelen szabályok, ha voltak ilyenek, az archívumban lesznek, ahonnan bármikor visszahozhatja őket. Az ellenőrzés minden péntekre be van ütemezve, így a következő report magától érkezik.
## Mi a következő lépés

Ha az ellenőrzés új skillt javasol, csiszolja tovább a kártya alapján: [skill](card:create-skill-from-proven-process). Ahhoz, hogy a pénteki ellenőrzés megbízhatóan fusson, és magától jelezze a hibákat, folytassa az [ütemezett feladattal](card:recurring-ai-task).
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
