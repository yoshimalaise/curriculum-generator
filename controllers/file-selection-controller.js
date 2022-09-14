const { dialog } = require('electron')
const FunctionExporterService = require('../services/function-exporter-service.js');
const PresentationExporterService = require('../services/presentation-exporter-service.js');
const state = require('../state/state.js');
const fs = require('fs');
const { opendir, readFile } = require('fs/promises');

class FileSelectionController {
  constructor(server) {
    this.functionExporterService = new FunctionExporterService();
    this.presentationExporterService = new PresentationExporterService();
    /**
     * When the user clicks the button show the file path dialog.
     */
    server.get('/api/select-folder', async (req, res) => {
      const dialogRes = await dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections' ] });
      if (dialogRes.canceled || dialogRes.filePaths.length <= 0) {
        res.json({message: "please select at least one folder"});
        return;
      }

      state.entries = [];
      for (let path of dialogRes.filePaths) {
        try {
          console.log(`analysing: ${path}`);
          const config = await this.readCurriculumConfig(path);
          const codeObjects = await this.functionExporterService.grabFunctions(path);
          const presentations = await this.presentationExporterService.getAllPresentations(path);
          state.entries.push({codeObjects, presentations, name: config.name});
        } catch (error) {
          console.log(`could not export ${path}`);
          console.log(`error: ${error}`);
        }
        
      }
      
       
      res.json({qrCode: state.qrCode, url: state.ngrokUrl});
      return;
    });
  }

  async readCurriculumConfig(folderPath) {
    // see if there exists a curriculum.json file in the root of the folder, 
    // and if there exists one act accordingly  
    const p = `${folderPath}/curriculum.json`;
    if (fs.existsSync(p)) {
      console.log('curriculum.json found, using loaded settings.');
      const buffer = await readFile(p);
      const body = buffer.toString();
      const data = JSON.parse(body);
      state.ignoreList = [...state.originalIgnoreList, ...(data?.ignoreList ?? [])];
      return ({ name:  data?.name ?? folderPath.split('/').pop()});
    } else {
      console.log('no curriculum.json found, proceeding with default values.');
      state.ignoreList = state.originalIgnoreList;
      return ({ name:  folderPath.split('/').pop()});
    }

  }
}

module.exports = FileSelectionController;