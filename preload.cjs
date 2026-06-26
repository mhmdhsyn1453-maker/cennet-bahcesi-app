const { contextBridge, ipcRenderer, webFrame } = require('electron');

// Akıllı tahtalarda yanlışlıkla yapılan pinch-to-zoom (yakınlaştırma) hareketlerini engelleme
window.addEventListener('DOMContentLoaded', () => {
  try {
    webFrame.setVisualZoomLevelLimits(1, 1);
  } catch (e) {
    console.warn('webFrame setup failed:', e);
  }
});

contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateAvailable: (callback) => ipcRenderer.on('update-available', (event, info) => callback(info)),
  onDownloadProgress: (callback) => ipcRenderer.on('download-progress', (event, progressObj) => callback(progressObj)),
  onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', (event, info) => callback(info)),
  onUpdateError: (callback) => ipcRenderer.on('update-error', (event, error) => callback(error)),
  
  startDownload: () => ipcRenderer.send('start-download'),
  quitAndInstall: () => ipcRenderer.send('quit-and-install'),
  getAppVersion: () => ipcRenderer.invoke('get-app-version')
});

