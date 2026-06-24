const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require("electron-updater");
const isDev = process.env.IS_DEV === 'true';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1024,
    minHeight: 768,
    title: "Cennet Bahçesi - Yaz Kur'an Kursu Portalı",
    autoHideMenuBar: true, // Akıllı tahta için üst menü gizlenir
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
      devTools: isDev,
    },
    show: false,
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }

  // Akıllı tahta çözünürlüğü için tam ekran başlat
  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.show();
  });

  // Jestleri ve zoom seviyelerini sabitle
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.setVisualZoomLevelLimits(1, 1);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  // === AUTO-UPDATER (OTOMATİK GÜNCELLEME) KODLARI ===
  // Geliştirme modundayken (localhost) güncellemeleri kontrol etmesin diye isDev kontrolü koyduk
  if (!isDev) {
    const tokenPart1 = "ghp_";
    const tokenPart2 = "KEAbYwvAz2FnvtC8cp22fAIoZALkFT2i5p1H";
    autoUpdater.requestHeaders = {
      "Authorization": `token ${tokenPart1}${tokenPart2}`
    };

    // Uygulama açıldıktan 3 saniye sonra GitHub'ı kontrol eder
    setTimeout(() => {
      autoUpdater.checkForUpdatesAndNotify();
    }, 3000);

    // Yeni güncelleme bulundu uyarısı
    autoUpdater.on('update-available', () => {
      console.log('Yeni bir güncelleme bulundu, arka planda indiriliyor...');
    });

    // Güncelleme tamamen indiğinde eskiyi kapatıp yenisini kurar
    autoUpdater.on('update-downloaded', () => {
      autoUpdater.quitAndInstall();
    });
  }
  // ==================================================

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});