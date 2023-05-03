
const {app, BrowserWindow} = require("electron")
const path = require("path")
const {browser} = require("./puppeteer.js")

// Wenn alle Fenster der App geschlossen werden, so wird die App beendet
app.on('window-all-closed', () => {
    app.quit()
})


// Das erste Fenster wird nun erstellt
const createHomeWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      })
    
      win.loadFile('screen/home.html')
}


 // App wird gestartet
app.on("ready", () => {
    createHomeWindow()
    browser()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createHomeWindow()
      }
    })
})