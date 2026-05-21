const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getQuestions: () => ipcRenderer.invoke('get-questions'),
  platform: process.platform,
  isElectron: true,
});
