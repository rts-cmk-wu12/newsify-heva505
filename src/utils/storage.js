export default class Storage {
    // Add your storage logic here
  }
  



  // في utils/storage.js
class Storage {
    saveSettings(settings) {
      localStorage.setItem('newsifySettings', JSON.stringify(settings));
    }
  
    loadSettings() {
      const savedSettings = localStorage.getItem('newsifySettings');
      return savedSettings ? JSON.parse(savedSettings) : null;
    }
  }
  