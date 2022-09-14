const fse = require('fs-extra');
const fs = require('fs');
const path = require("path");
const state = require('../state/state');

class FileCopyService {
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
}

module.exports = FileCopyService;