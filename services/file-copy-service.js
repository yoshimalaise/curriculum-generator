const fse = require('fs-extra');
const path = require("path")

class FileCopyService {
    copyStudyLenses(destinationPath) {
        fse.copySync('./study-lenses', destinationPath, { overwrite: true })
    }

    copyFolder(src, dst) {
        fse.copySync(src, dst, { overwrite: true });
    }
}

module.exports = FileCopyService;