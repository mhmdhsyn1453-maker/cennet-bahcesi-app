const { webFrame } = require('electron');

// Akıllı tahtalarda yanlışlıkla yapılan pinch-to-zoom (yakınlaştırma) hareketlerini engelleme
window.addEventListener('DOMContentLoaded', () => {
  try {
    webFrame.setVisualZoomLevelLimits(1, 1);
  } catch (e) {
    console.warn('webFrame setup failed:', e);
  }
});
