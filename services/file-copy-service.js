const fse = require('fs-extra');
const fs = require('fs');
const path = require("path");
const state = require('../state/state');
const HomePageService = require('./home-page-service');


class FileCopyService {
    constructor() {
        this.homepageService = new HomePageService();
    }

    copyStudyLenses(destinationPath) {
        fse.copySync('./study-lenses', destinationPath, { overwrite: true })
    }

    copyFolder(src, dst) {
        fse.copySync(src, dst, { overwrite: true });
    }

    saveProblemsetFile() {
        const targetPath = `${state.outputPath}/bin/problemset.json`;
        fs.writeFileSync(targetPath, JSON.stringify({entries: state.entries}));
    }

    saveHomePage() {
        const html = this.homepageService.generateHomePageHTML();
        const targetPath = `${state.outputPath}/bin/index.html`;
        fs.writeFileSync(targetPath, html);
    }
}

module.exports = FileCopyService;