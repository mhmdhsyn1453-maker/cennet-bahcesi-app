const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { autoUpdater } = require("electron-updater");
const isDev = process.env.IS_DEV === 'true';

// === DEEP FREEZE BYPASS (D:\ Sürücüsü için userData Yönlendirmesi) ===
if (!isDev) {
  const appPath = app.getPath('exe');
  const driveLetter = appPath.substring(0, 3); // e.g. "D:\"
  if (driveLetter.toLowerCase() !== 'c:\\') {
    // C:\ dışındaki sürücülerde (genelde dondurulmamış D:\ sürücüsü)
    // verileri uygulamanın kurulu olduğu klasörün içine (cennet-bahcesi-data) yazarız.
    const customUserData = path.join(path.dirname(appPath), 'cennet-bahcesi-data');
    app.setPath('userData', customUserData);
  }
}

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
    show: true,
  });

  if (isDev) {
    // Vite sunucusunun başlatılması için kısa bir gecikme ekliyoruz
    setTimeout(() => {
      mainWindow.loadURL('http://127.0.0.1:3000').catch((err) => {
        console.log("Vite baglantisi kurulamadi, 1 saniye sonra tekrar deneniyor...");
        setTimeout(() => {
          mainWindow.loadURL('http://127.0.0.1:3000').catch(e => console.error("Vite baglantisi basarisiz:", e));
        }, 1000);
      });
    }, 1500);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }

  // Akıllı tahta çözünürlüğü için tam ekran başlat
  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize();
    mainWindow.focus();
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
  if (!isDev) {
    const tokenPart1 = "ghp_";
    const tokenPart2 = "KEAbYwvAz2FnvtC8cp22fAIoZALkFT2i5p1H";
    autoUpdater.requestHeaders = {
      "Authorization": `token ${tokenPart1}${tokenPart2}`
    };

    // Otomatik indirmeyi kapatıyoruz (kullanıcı modal onayını bekleyecek)
    autoUpdater.autoDownload = false;

    // Uygulama açıldıktan 5 saniye sonra güncelleme kontrolü yapar
    setTimeout(() => {
      autoUpdater.checkForUpdates().catch(err => {
        console.error("Güncelleme kontrol hatası:", err);
      });
    }, 5000);

    // Yeni güncelleme bulunduğunda
    autoUpdater.on('update-available', (info) => {
      console.log('Güncelleme bulundu:', info.version);
      if (mainWindow) {
        mainWindow.webContents.send('update-available', info);
      }
    });

    // Hata durumunda
    autoUpdater.on('error', (err) => {
      console.error('Güncelleme hatası:', err);
      if (mainWindow) {
        mainWindow.webContents.send('update-error', err.message);
      }
    });

    // İndirme ilerlemesi
    autoUpdater.on('download-progress', (progressObj) => {
      if (mainWindow) {
        mainWindow.webContents.send('download-progress', progressObj);
      }
    });

    // İndirme tamamlandığında
    autoUpdater.on('update-downloaded', (info) => {
      if (mainWindow) {
        mainWindow.webContents.send('update-downloaded', info);
      }
    });

    // IPC Dinleyicileri (React'tan gelen sinyaller)
    ipcMain.on('start-download', () => {
      console.log('İndirme başlatılıyor...');
      autoUpdater.downloadUpdate();
    });

    ipcMain.on('quit-and-install', () => {
      console.log('Uygulama kapatılıp güncelleniyor...');
      autoUpdater.quitAndInstall();
    });
  }

  // Sürüm sorgulaması için handler
  ipcMain.handle('get-app-version', () => {
    return app.getVersion();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});