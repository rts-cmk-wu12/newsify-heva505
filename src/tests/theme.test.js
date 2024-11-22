import ThemeManager from '../utils/theme';

// Add your tests here




import ThemeManager from '../utils/theme';

describe('ThemeManager', () => {
  test('toggles theme correctly', () => {
    const themeManager = new ThemeManager();
    themeManager.toggleTheme();
    expect(document.body.classList.contains('dark-mode')).toBe(true);
    themeManager.toggleTheme();
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });
});
