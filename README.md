# RR1Code
Code für einen 1-tägigen React-Redux-Kurs.

## Voraussetzungen
* Node.js Version 6.x oder höher
* Einen geeigneten Editor oder eine IDE
   * Z. B. Webstorm -- [es gibt eine 30-Tage-Testversion](https://www.jetbrains.com/webstorm/download/)
* Idealerweise Chrome (Firefox ist auch möglich)
* C++ und Python -- eine detaillierte Anleitung zur Installation findet sich bei node-gyp im Abschnitt ["You will also need to install"](https://github.com/nodejs/node-gyp#installation)

## Erste Schritte
In dem ausgecheckten Verzeichnis folgendes durchführen:
* Module installieren: `npm install`
* Entwicklungsserver starten:
  * Mac/Linux-Benutzer: `npm start`
  * Windows-Benutzer: `npm start-win`

Anschließend:
* [http://localhost:3000](http://localhost:3000) im Browser öffnen

## JS-Bundle bauen
* Mac/Linux-Benutzer: `npm run build`
* Windows-Benutzer: `npm run build-win`
* `build/index.html` im Browser öffnen

## Lösungen ausprobieren

Die Webpack-Konfiguration ist so eingestellt, dass automatisch auf die Dateien im Verzeichnis `src` zugegriffen wird. Somit kann man im Verlauf des Kurses schrittweise eine eigene Lösung implementieren und ausprobieren. 

Zum Verwenden der mitgelieferten Beispiele kann man in der Datei `webpack.config.js` den Pfad innerhalb des Blocks `entry` so verändern, dass er auf eine der anderen `index.js` Dateien zeigt, z. B. so:

```
    entry: [
        "./src-solution-redux-3/index"
    ],
```

Die Beispiele sind alle funktionsfähig und bauen aufeinander auf (in alphabetischer Reihenfolge). Allerdings benötigt das letzte Beispiel einen Server, um die gesendeten AJAX-Requests entgegenzunehmen. Dieser ist nicht im Lieferumfang enthalten ;-) 
