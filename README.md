# HS & Braun UG — Website-Entwurf

Diese bearbeitbare Version baut auf den vorhandenen Projektdateien auf. Die ursprünglichen Dateien wurden nicht verändert. Blau/Gelb, Logo und gelieferte Bilder bleiben erhalten. Die visuelle Überarbeitung vom 12.10.2026 behält sämtliche Texte, Links, Inhalte und die Abschnittsreihenfolge der bisherigen erweiterten Version bei.

Die Gestaltung verwendet Glas gezielt in der Navigation und auf der Bildbeschriftung. Leistungsbereiche, Fachbereiche, Über-uns-Fläche und Kontakt stehen ohne wiederholte Glaskarten im Layout. Größere Fließtexte, eine ruhigere Schrift, kleine Eckradien, klare Trennlinien und gleichmäßige Abstände verbessern die Hierarchie. Der Bildausschnitt zeigt die Klimaanlage als Hauptmotiv. Die Referenz kek-joerg.de dient für Bild-/Textaufteilung und klar gegliederte Leistungsbereiche; deren Texte, Bilder und Unternehmensangaben wurden nicht übernommen.

## Starten

`index.html` im Browser öffnen. Es sind keine Installation und kein Build nötig.

Optional für eine lokale Vorschau aus diesem Ordner:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Danach `http://127.0.0.1:8080` öffnen.

## Struktur

- `index.html`: deutsche Inhalte, semantische Seitenstruktur, Telefon- und Routenlinks
- `css/index.css`: responsive Gestaltung, gezielte Glasakzente, Druckansicht und reduzierte Bewegung
- `js/index.js`: mobiles Menü, Leistungsreiter mit Tastaturbedienung und aktive Navigation
- `public/`: die vier gelieferten Bild-/Icondateien

## Inhaltliche Grundlage

Aus der bestehenden Seite übernommen: HS & Braun UG; Mainzer Str. 102, 55283 Nierstein; 0176 64761739; Nierstein und Umgebung; Kälte- und Klimatechnik, Wärmepumpen, Installation, Wartung und Reparatur für private und gewerbliche Kunden. Die ergänzenden Texte sind Entwurfstexte und sollten mit dem Kunden abgestimmt werden. Die abstrakten Geräteabbildungen sind Illustrationen, keine konkreten angebotenen Produkte.

## Noch mit dem Kunden klären

- Geschäftliche E-Mail und vollständige Unternehmensbezeichnung
- Konkrete Leistungsgrenzen, Einsatzgebiet, Hersteller und angebotene Anlagen
- Ansprechpartner, Unternehmensgeschichte und eigene Team-/Projektbilder
- Öffnungszeiten und eventuell vorhandener Notdienst
- Vollständige Inhalte für Impressum und Datenschutz vor öffentlicher Veröffentlichung; diese Seiten sind noch nicht enthalten

Es wurden keine Bewertungen, Zertifizierungen, Erfahrungsjahre, Garantien, Förderversprechen oder kostenlosen Angebote erfunden. Es gibt keine extern eingebundenen Schriften, Iconbibliotheken, Karten, Trackingdienste oder Formulardienste. Google Maps wird nur über einen ausdrücklich angeklickten externen Routenlink geöffnet. Die Website wird über GitHub Pages veröffentlicht.

## Automatische Veröffentlichung

Jeder Push auf `main` startet den Workflow `Publish website` in
`.github/workflows/pages.yml`. Dieser veröffentlicht ausschließlich die
Website-Dateien (`index.html`, `.nojekyll`, `css/`, `js/`, `public/`) über
GitHub Pages. Ein manueller Start ist ebenfalls über „Run workflow“ möglich.

Die öffentliche Adresse lautet https://filmmakermudy.github.io/HSBraunUG/.
Änderungen sind nach erfolgreichem Deployment sichtbar; ein Push allein
bestätigt noch keine Veröffentlichung. Status und Fehler stehen im
GitHub-Actions-Lauf des jeweiligen Commits.
