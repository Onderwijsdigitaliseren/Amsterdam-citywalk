# Amsterdam Achterom

Vrije stadswandeling door de binnenstad van Amsterdam, van Enigma Mystery. Geen route: 47 punten op de kaart, elk met een kort verhaal. Nederlands en Engels in één bestand (knop rechtsboven). Statische site voor GitHub Pages.

```
/index.html        de hele wandeling; NIET met de hand aanpassen, wordt gemaakt door _tools/build.py
/_src/app.html     schermen, kaart, teksten van de knoppen (T.nl / T.en), getekende plattegrond (CANALS, STREETS)
/_src/places.js    de plekken (PLACES), de kant-en-klare lijstjes (SETS) en Onderweg spotten (SPOT), NL + EN
/_src/tiles.js     kaartgegevens uit OpenStreetMap-vectortegels (OpenFreeMap); kopie uit eindhovenwalk/shared
/_tools/build.py   python3 _tools/build.py  →  index.html
/img/              artwork, zie img/ARTWORK.md en img/BRONNEN.md; alles optioneel
```

- De kaart haalt straten, water en groen op rond 52.3715, 4.8915 (R 1500 m, maximaal 16 tegels). Lukt dat niet, dan tekent de pagina een eenvoudige plattegrond.
- Spelden staan op geschatte coördinaten. Testhulp: vijf keer op de titel "Achterom" tikken, een plek openen, "Test: speld verplaatsen", de goede plek op de kaart aantikken. De lijst staat daarna onderaan Lijstjes; neem die over in `PLACES`.
- Locatie: binnen 40 m van een plek die je nog niet zag komt de melding "Je staat bij …".
- Foto's: `img/<id>.webp`, aanzetten in `IMG`, bron in `CREDITS` (beide bovenaan het script in `_src/app.html`).
- Opslag in de browser: `achterom.v1` (taal, gezien, lijstje, spotlijst), `achterom.pins` (verplaatste spelden).
- Kleuren zoals De Gloeidraad (eindhovenwalk): crème, witte kaarten, amber. Eén licht thema.
- Nog niet: toegangscode/ticket, koppeling met enigmamystery.com. De pagina staat op `noindex`.
