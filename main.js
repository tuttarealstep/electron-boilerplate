const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let browserWindow;

function createWindow () {
    browserWindow = new BrowserWindow({
        width: 1080,
        height: 720
    });

    browserWindow.loadFile('./app/app.html');

    browserWindow.setMenu(null);

    if (process.env.NODE_ENV !== 'production') {
        browserWindow.webContents.openDevTools();
    }

    browserWindow.on('closed', () => {
        browserWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (browserWindow === null) {
        createWindow()
    }
});