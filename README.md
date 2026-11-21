# Amsterdam Achterom

Vrije stadswandeling door de binnenstad van Amsterdam, van Enigma Mystery. Geen route: 70 plekken en 38 losse weetjes op de kaart, ook buiten de grachten (Museumplein, Vondelpark, De Pijp, Oost, Westerpark en Noord), elk met een kort verhaal. Nederlands en Engels in één bestand (knop rechtsboven). Statische site voor GitHub Pages.

```
/index.html        de hele wandeling; NIET met de hand aanpassen, wordt gemaakt door _tools/build.py
/_src/app.html     schermen, kaart, teksten van de knoppen (T.nl / T.en), getekende plattegrond (CANALS, STREETS)
/_src/places.js    de plekken (PLACES), de kant-en-klare lijstjes (SETS) en Onderweg spotten (SPOT), NL + EN
/_src/weetjes.js   losse weetjes zonder foto (WEETJES), i-rondjes op de kaart, NL + EN
/_src/tiles.js     kaartgegevens uit OpenStreetMap-vectortegels (OpenFreeMap); kopie uit eindhovenwalk/shared
/_tools/build.py   python3 _tools/build.py  →  index.html
/img/              artwork, zie img/ARTWORK.md en img/BRONNEN.md; alles optioneel
```

- Gebied: standaard alleen de binnenstad (buurten in `INNER`); onder Lijstjes kan de bezoeker 'Ook daarbuiten' aanzetten (`S.area`). Alleen dan laadt de grote kaart.
- De kaart haalt straten, water en groen op rond het centrum (R 1500 m, 16 tegels); met 'Ook daarbuiten' rond 52.3665, 4.8885 (R 3300 m, 36 tegels). Lukt dat niet, dan tekent de pagina een eenvoudige plattegrond.
- Spelden staan op geschatte coördinaten. Testhulp: vijf keer op de titel "Achterom" tikken, een plek openen, "Test: speld verplaatsen", de goede plek op de kaart aantikken. De lijst staat daarna onderaan Lijstjes; neem die over in `PLACES`.
- Locatie: binnen 40 m van een plek die je nog niet zag komt de melding "Je staat bij …".
- Foto's: `img/<id>.webp`, aanzetten in `IMG`, bron in `CREDITS` (beide bovenaan het script in `_src/app.html`).
- Opslag in de browser: `achterom.v1` (taal, gezien, lijstje, spotlijst), `achterom.pins` (verplaatste spelden).
- Kleuren zoals De Gloeidraad (eindhovenwalk): crème, witte kaarten, amber. Eén licht thema.
- Nog niet: toegangscode/ticket, koppeling met enigmamystery.com. De pagina staat op `noindex`.

## Handig onderweg, offline en delen
- `_src/handig.js`: openbare wc's, koffie, kroegen (met terrasvlag) en bankjes uit OpenStreetMap (ODbL), eenmalig opgehaald op 21-11-2026 en vast in de app gezet. Geen API, geen sleutel, geen kosten. Bijwerken: opnieuw ophalen via een gratis Overpass-server en `handig.js` vervangen.
- Offline: `sw.js` (door `build.py` gemaakt uit `_src/sw.js`) en `manifest.webmanifest`. Werkt alleen op de GitHub Pages-site. Knop "Alles downloaden" onder Lijstjes.
- Weetjes geven een melding als je met locatie aan binnen ~35 m komt.
- "Route in Google Maps" en "Deel deze wandeling" staan klein onder Jouw wandeling. Een gedeelde link ziet eruit als `…/#w=id,id,id`.
