const ip = require('ip');
const state = require('./state/state.js');
const cors = require('cors');
const express = require('express')
const server = express();
server.use(express.json());
server.use(cors());

const exposeUrl = false;
const portnumber = 1234;
const path = require('path')
const { app, BrowserWindow } = require('electron');
const FileSelectionController = require('./controllers/file-selection-controller.js');
const ProblemsController = require('./controllers/problems-controller.js');

async function getUrl() {
  /**
  * if the server started we will expose it to the outside world
  */
 let url = '';
  if (exposeUrl) {
    const localtunnel = require('ngrok');
    const tunnel = await localtunnel.connect({addr: portnumber}); //  host_header: 'htp://localhost:1234ß'
    url = `${tunnel}/api/problems`;
  } else {
    url = `http://${ip.address()}:${portnumber}/api/problems`
  }
   
  console.log(url);
  return url;
}

async function bootstrap() {
  /**
   * register all controllers to react to events here
   */
  const fileSelectionController = new FileSelectionController(server);
  const problemsController = new ProblemsController(server);
  server.use(express.static(path.join(__dirname, 'public')));
  
  server.listen(portnumber, '0.0.0.0');
  
 

  state.ngrokUrl = await getUrl();
  console.log(`App available at ${state.ngrokUrl}`);
  const QRCode = require('qrcode');
  state.qrCode = await QRCode.toDataURL(state.ngrokUrl);
 /**
  * Once the server started let's open the electron window so we can interact with the server
  */
  const w = 800
  const h = 600
  const createWindow = async () => {
    const win = new BrowserWindow({
      width: w,
      height: h,
      maxHeight: h,
      maxWidth: w,
      minHeight: h,
      minWidth: w
    });
 
    await win.loadURL(`http://localhost:${portnumber}/`)
  }
 
  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  });
}

try {
  bootstrap();
} catch (error) {
  console.log('error bootstrapping app', error);  
}


