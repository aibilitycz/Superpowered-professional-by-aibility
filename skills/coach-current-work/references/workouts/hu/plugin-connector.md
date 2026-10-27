# Csatlakoztassa a csatlakozót: Az AI közvetlenül az alkalmazásaiban dolgozik

Az AI önállóan átnézi a levelezését, és a választervezeteket közvetlenül a postaládába menti.

## Csatlakoztassa a csatlakozót: Az AI közvetlenül az alkalmazásaiban dolgozik

**Nehézség: könnyű.**\
**Idő: körülbelül 15 perc** munkahelyi levelezéssel és naptárral.
## Mire jó

Keddi értekezlet előtt öt, múlt hét óta várakozó e-mailt szeretne elintézni.
Mindegyiket bemásolja a chatbe, és a választ vissza a levelezésbe. A harmadiknál
rájön, hogy az AI által javasolt időpont már foglalt a naptárában.

A csatlakozó az AI és az alkalmazás közötti kapcsolat: az AI ezen keresztül olvassa
az e-maileket és a naptárat, így semmit sem kell másolnia, és nem javasol olyan
időpontot, ami már foglalt.
## Mit készítsen elő

- hozzáférés a munkahelyi levelezéshez és naptárhoz; a csatlakozó bekapcsolását néha az adminisztrátor végzi,
- az AI, amit a munkahelyén használ; ahol vannak csatlakozók, ott a „Az eszközödben” blokk mutatja,
- Cowork vagy Code módban egy mappa a szabályoknak, például egy új, üres `Levelezés`.
## Hogyan csinálja

1. Illessze be a promptot. Az AI megkeresi, milyen levelezési és naptári csatlakozók állnak rendelkezésre,
   elérhetőket csatlakoztat, a többinél megmondja, hova kell kattintani. A bejelentkezést Ön végzi.
2. Az AI kiválaszt legfeljebb öt, az elmúlt hétből származó, Ön által válaszolandó e-mailt;
   a hírleveleket és másolatokat csak megszámolja. A választervezeteket a postaládába menti, Ön átnézi,
   módosítja és elküldi őket.
3. Egy új chatben írja be csak: „Válaszolj a legfrissebb, válaszra váró e-mailre.” Az AI elvileg maga menti a tervezetet és ellenőrzi az időpontot a naptárban.
## AI gyakorlat

Illessze be ezt a [promptot](glossary:prompt) az AI-ba, amit a munkahelyén használ:

Csatlakozz a munkahelyi e-mailemhez és naptáramhoz, és végezd el bennük az első munkát, hogy ne kelljen semmit a chatbe másolnom.

Kérdezd meg, milyen e-mailt és naptárt használok a munkahelyemen. Ezután derítsd ki, milyen csatlakozók vagy pluginek vannak itt hozzájuk. Ha egy plugin egyszerre több alkalmazásomat is lefedi, annak adj előnyt. Amit magadtól tudsz csatlakoztatni, csatlakoztasd. Ahol nekem kell valamit tennem, például bejelentkezni vagy engedélyezni a hozzáférést, pontosan mondd meg, hova kell kattintanom, és várj, amíg megteszem. Csak a csatlakozókon keresztül férj hozzá a levelezéshez és a naptárhoz. A csatlakozás után ellenőrizd, hogy a csatlakozó tud-e e-mail tervezeteket menteni. Ha nem, keress másik csatlakozót vagy plugint. Ha egyet sem találsz, csatlakoztasd a levelezést a Composio szolgáltatáson keresztül, és ha ez itt nem megy, mondd meg, hova kell váltani.

Ha minden csatlakoztatva van, tedd a következőt:
- Nézd át az elmúlt hét nap levelezését, és válassz ki legfeljebb öt olyan e-mailt, amire még nem válaszoltam, de válaszolnom kell, a legsürgősebbtől kezdve. Mindegyiknél írd meg a feladót, a témát és a válasz határidejét.
- Mindenhez írj választ, és mentsd el tervezetként közvetlenül a postaládámba. Ha a válasz időponthoz kötött, nézd meg a naptárban, mikor vagyok szabad.
- A tervezeteket ne küldd el, én átnézem és küldöm el őket.

Végül ments el egy szabályt a jövőre: mely alkalmazásokat csatlakoztattál, hogy a levelezésre adott válaszokat tervezetként mented, és az időpontokat a naptárban ellenőrzöd. Ha mappában dolgozol, írd be az AGENTS.md fájlba, és ha nincs, hozd létre. Gondoskodj róla, hogy az AGENTS.md fájlt ebben az eszközben minden munka elején elolvasd; Coworkban írd be a mappa utasításaiba. Normál chatben mentsd el a szabályt az emlékezetbe.

## Az eszközödben

### Microsoft Copilot
Illessze be a promptot a Copilot Coworkba a `copilot.cloud.microsoft` oldalon (a Cowork kapcsoló a Chat mellett fent); a levelezés és naptár már alapból csatlakoztatva van, mappára nincs szükség.
A válaszokat az Outlook tervezetei közé menti, a szabályt skillként. Cowork nélkül a Copilot Chat is készít tervezetet, a szabályt a Personalization alatt jegyzi meg. Az ütemezett feladatok az Automations oldalon találhatók.

### ChatGPT
Az Outlook vagy Gmail csatlakozót a Beállításokban a Plugins alatt kapcsolhatja be, új chatben a + gombbal az üzenetmező mellett. A tervezeteket a Plus, Pro, Business és Enterprise tarifákban menti; céges fiókban az adminisztrátor engedélyezi a bejegyzést. A szabályt a ChatGPT az emlékezetébe menti, a Codex az `AGENTS.md` fájlba. Az ütemezett feladatok a Scheduled alatt vannak.

### Claude
A csatlakozók a bal oldali panelen a Customize, Connectors alatt találhatók, új chatben a + gombbal az üzenetmező mellett kapcsolhatók be. A Microsoft 365 csatlakozó csak akkor ment tervezeteket, ha az adminisztrátor engedélyezi a bejegyzést. Cowork AI módban az AI maga csatlakoztatja a csatlakozót és a szabályt a mappa utasításaiba írja. Az ütemezett feladatok a Scheduled alatt vannak.

### Gemini
A Gemini alkalmazásban írja be az @ jelet, válassza ki a Gmailt és a Naptárt, majd illessze be a promptot; a Composio ajánlatra válaszoljon „folytasd csak a Gmaillel és a Naptárral”. A Gemini megtalálja az e-maileket és javasolja a válaszokat, de a tervezetet csak a Gemini Gmailben, az Ask Gemini jobb felső részén menti. A szabályt skillként mentse el (Customize, Skills), az ütemezett feladatok a Scheduled alatt vannak.
## Mi az a csatlakozó és plugin

A csatlakozó az AI és egy alkalmazás közötti kapcsolat. Attól függően, mit tud, az AI csak keres és olvas az alkalmazásban, vagy ír is: elment egy e-mail tervezetet vagy létrehoz egy találkozót a naptárban. Ugyanígy csatlakoztathat CRM-et, azaz az ügyfeleket és üzleteket kezelő rendszert, vagy megosztott meghajtót is. A beállításokban a csatlakozót néha MCP szervernek hívják; az MCP egy technikai szabvány, amelyen keresztül az AI kapcsolódik az alkalmazásokhoz, és ennél többet nem kell tudnia róla.

A plugin egy adott feladathoz készült csomag. Egyszerre több csatlakozót és útmutatót ad hozzá, amelyek alapján az AI dolgozik, például kereskedelemhez: CRM, e-mail és ajánlatírási folyamat.

Ha az Ön alkalmazásához nincs csatlakozó, vagy a levelezést csak olvassa, használja a Composio-t. Ez egy szolgáltatás, amelyen keresztül az AI több mint ezer alkalmazáshoz kapcsolódik, például Outlookhoz, Gmailhez vagy CRM-hez, és a levelezésben tud választervezeteket is menteni. Cowork vagy Code módban állítható be, és az AI maga végzi; Ön csak létrehoz egy fiókot a Composio-n, és jóváhagyja az alkalmazásokhoz való hozzáférést. Az alapfiók ingyenes, bankkártyát nem kér. Céges fiók esetén kérdezze meg az IT-t, hogy használhatja-e.

Az `AGENTS.md` egy egyszerű szöveges fájl a mappában, ahol dolgozik, az AI szabályaival. A Code módban az AI minden munka elején elolvassa, így legközelebb nem kell elmagyarázni a csatlakoztatott alkalmazásokat.
## Hagyja, hogy az AI önállóan átnézze a levelezést

Csatlakoztatott e-maillel és naptárral az AI minden reggel átnézheti Ön helyett a levelezést.
Elég egy ütemezett feladat, amelyet az AI minden munkanap reggel elindít, és a választervezeteket a postaládában hagyja. Illessze be az AI-ba ezt a feladatot, és kérje meg, hogy hozza létre az ütemezett feladatot. Az, hogy hol találja az ütemezett feladatokat az eszközében, a „Az eszközödben” blokk mutatja.

```text
Minden munkanap 7:30-kor a csatlakozón keresztül nézd át az azóta érkezett leveleket. Válaszd ki azokat az e-maileket, amelyekre még nem válaszoltam, de válaszolnom kell, a legsürgősebbtől kezdve, és mindegyikhez ments el a postaládába egy választervezetet. Az időpontokat ellenőrizd a naptárban. Ha nincs válaszolandó levél, ne írj semmit.
```
## Példa

Jana az irodaköltözést koordinálja az új épületbe. 10. 12. hétfő reggel 38 olvasatlan e-mailje van a postaládájában. Az Outlook és a naptár csatlakoztatása után az AI ezt adja vissza:

```text
Válaszolandó (4 a 38 e-mailből)

1. Költöztető cég: megerősítést kér a 10. 24-i költözésről. Ma válaszolni kell.
   Tervezet: megerősítjük az időpontot, aznap szabad a naptár.
2. IT-s Péter: kérdezi, mikor kapcsolhatja be az új emeleti hálózatot. Szerdáig válaszolni kell.
   Tervezet: javaslom 10. 15-én csütörtökön 9:00-kor, amikor szabad a naptár.
3. Bútorbeszállító: szüksége van az átadás-átvételi jegyzőkönyv aláírásának időpontjára. Péntekig válaszolni kell.
   Tervezet: a jegyzőkönyvet a bútor átvételekor, 10. 22-én írom alá.
4. Vezetés: rövid projektállapotot kér a pénteki értekezletre.
   Tervezet: költözés 10. 24., hálózat 10. 15., bútor 10. 22.

A tervezetek a postaládában vannak. A maradék 34 e-mail hírlevelek és tájékoztató másolatok.
```

Jana átnézi a tervezeteket, Péternél 10:00-re módosítja az időpontot, és mind a négyet elküldi. Másnap reggel egy új chatben csak annyit ír: „Válaszolj a legfrissebb, válaszra váró e-mailre.” Az AI megtalálja a recepció parkolókártya-kérdését, ellenőrzi az időpontot a naptárban, és elmenti a tervezetet a postaládába.
## Ha elakad

- **A csatlakozó hiányzik vagy nem kapcsolható be a beállításokban:** kérdezze meg az AI-t, létezik-e az Ön alkalmazásához. Ha igen, céges fiókban valószínűleg az adminisztrátor kapcsolja be, és az AI rövid kérést küld neki: melyik csatlakozóra van szüksége és mire.
  Ha nincs, csatlakoztassa az alkalmazást a Composio-n keresztül.
- **A csatlakozó csak olvassa a levelezést:** Cowork vagy Code módban kérje meg az AI-t, hogy csatlakoztassa a levelezést a Composio-n keresztül, vagy találjon másik csatlakozót, amely tervezeteket is tud menteni. Normál chatből váltson át [Cowork vagy Code módba](card:when-chat-is-not-enough).
- **Az AI azt állítja, nem látja a levelezést:** ellenőrizze, hogy a csatlakozó be van-e kapcsolva ebben a chatben; ChatGPT-ben és Claude-ban a + gombbal az üzenetmező mellett, Gemini-ben minden új chatben az @Gmail megemlítésével. Ha be van kapcsolva, valószínűleg a bejelentkezés nem sikerült, vagy más fiókba jelentkezett be. Hagyja, hogy az AI ellenőrizze a fiókot, és csatlakoztassa újra.
- **Az AI nem menti el a tervezetet vagy nem ellenőrzi az időpontot új chatben:** Cowork vagy Code módban írja be: „Olvasd el az `AGENTS.md`-t, és gondoskodj róla, hogy minden munka elején magadtól elolvasd.” Normál chatben kérdezze meg az AI-t, hogy megvan-e a szabály az emlékezetében vagy az utasítások között, és ha nincs, mondja meg, hova mentse.
## Mi lesz kész

Csatlakoztatva van az AI-hoz az e-mail és a naptár, és elküldte a válaszokat a legfontosabb, elmúlt heti levelekre. Az AI elmentette a szabályt a tervezetekre és a naptárra, és egy új chatben ellenőrizte, hogy ennek megfelelően dolgozik.
## Mi következik

Ha szeretné, hogy a reggeli levelezés-áttekintés megbízhatóan fusson és hibákat jelezzen, folytassa a [ütemezett feladathoz](card:recurring-ai-task). Ha egy munkafolyamatból két egymásra épülő lépés keletkezik, például e-mailekből táblázat, táblázatból válaszok, állítson be [munkafolyamatot több alkalmazáson át](card:cross-app-workflow).
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
