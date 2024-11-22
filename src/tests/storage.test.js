import Storage from '../utils/storage';

// Add your tests here





import Storage from '../utils/storage';

describe('Storage', () => {
  test('saves and loads settings correctly', () => {
    const storage = new Storage();
    const settings = { theme: 'dark', categories: [{ visible: true }, { visible: false }] };
    storage.saveSettings(settings);
    const loadedSettings = storage.loadSettings();
    expect(loadedSettings).toEqual(settings);
  });
});
