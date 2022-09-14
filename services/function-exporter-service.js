const { opendir, readFile } = require('fs/promises');
const { join } = require('path');
const parser = require("@babel/parser");
const _traverse = require("@babel/traverse");
const traverse = _traverse.default;
const Path = require("path");
const FS   = require("fs");
const state = require('../state/state');

/**
 * this  file is very much  based on https://github.com/lpmi-13/code-corpus-collector/blob/main/javascript/extractFunctions.js
 */
class FunctionExporterService {

  /** Find function definitions from a js file string */
  extractFunctions(code) {
    try {
      const fns = []
      const ast = parser.parse(code, { sourceType: "module" })
  
      traverse(ast, {
        enter({ node: { type, start, end } }) {
          if (type === 'FunctionDeclaration') {
            fns.push(code.slice(start, end))
          }
        }
      })
  
      return fns;
    } catch {
      return []
    }
  }

  getAllFilePaths(repoPath){
    let filePaths = [];
    FS.readdirSync(repoPath).forEach(file => {
      const absolutePath = Path.join(repoPath, file);
      // we ignore all paths container something from the ignorelist
      const stop = state.ignoreList.some(ign => absolutePath.includes(ign))
      if (stop){
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

  getAllJsFilePaths(repoPath){
    return this.getAllFilePaths(repoPath).filter(p => p.endsWith('.js'));
  }

  async grabFunctions(repoPath) {
    const functionObjects = [];

    const filePaths = this.getAllJsFilePaths(repoPath);

    for (let f of filePaths) {
      const filePath = f.split('/');
      const name = filePath[filePath.length - 1];
      const buffer = await readFile(f)
      const code = buffer.toString();
      
      for (const fn of this.extractFunctions(code)) {
        const functionLines = fn.split('\n');
        functionObjects.push({
          "filename": name,
          "type": 'function',
          "total_lines": functionLines.length,
            "lines": functionLines.map((fn, i) => {
               return {"line_number": i+1, "line_content": fn}
            }),
          "leitner_box": 1
        });
      }
    }
    return functionObjects;
  }
}

module.exports = FunctionExporterService;