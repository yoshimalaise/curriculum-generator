const state = require("../state/state");
const showdown  = require('showdown');
const converter = new showdown.Converter();

class HomePageService {
    generateHomePageHTML() {
        return (`
<!doctype html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
        <script src="bootstrap/js/bootstrap.js"></script>
        <link rel="stylesheet" href="style/main.css">
        <meta  charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${state.curriculumName}</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">${state.curriculumName}</span>
        </nav>

        <div class="container">
            ${this.generateCodeCard()}

            ${state.entries.sort((a, b) => a.name < b.name ? -1 : b.name < a.name ? 1 : 0 ).map(e => this.generateChaperSection(e)).join("\n")}
        </div>
    </body>
</html>
        `);
    }

    generateCodeCard() {
        return (`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Are you using the JSStudyBuddy App?</h5>
                <p class="card-text">
                    If you are using the JSStudyBuddy App you can scan the following QR code to download exercises and presentations for this for offline use. 
                    You can download the app for free on the Google Play Store and the Apple App Store.
                </p>
                <div class="qr-code-container">
                    <img src="${state.qrCode}"/>
                </div>
            </div>
        </div>
        `);
    }

    generateChaperSection(chapter) {
        return (`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${chapter.name}</h5>
                <p class="card-text">${converter.makeHtml(chapter?.description ?? "")}</p>
                <a href="#" class="card-link">Watch Presentations</a>
                <a href="/chapters/${chapter.name}?--defaults" target="_blank" class="card-link">Open in Study Lenses</a>
            </div>
        </div>
        `);
    }
}

module.exports = HomePageService;