const { opendir, readFile } = require('fs/promises');
const { join } = require('path');
const Path = require("path");
const FS   = require("fs");

class PresentationExporterService { 

    getAllFilePaths(repoPath){
        let filePaths = [];
        FS.readdirSync(repoPath).forEach(file => {
          const absolutePath = Path.join(repoPath, file);
          // we ignore all node modules
          if (absolutePath.includes('node_modules')){
            return;
          }
          if (FS.statSync(absolutePath).isDirectory()) {
            filePaths = [...filePaths, ...this.getAllFilePaths(absolutePath)];
          }else {
            filePaths.push(absolutePath);
          } 
        });
        return filePaths;
      }


    getPresentationFilePaths(repoPath) {
        return this.getAllFilePaths(repoPath).filter(p => p.endsWith('presentation.md'));
    }
    async getAllPresentations(repoPath) {
        const presentations = [];
        const presentationPaths = this.getPresentationFilePaths(repoPath);

        for (let f of presentationPaths) {
            const filePath = f.split('/');
            const name = filePath[filePath.length - 1];
            const buffer = await readFile(f)
            const body = buffer.toString();
            presentations.push({
                name,
                body,
                fullPath: f
            });
        }

        return presentations;
    }


}

module.exports = PresentationExporterService