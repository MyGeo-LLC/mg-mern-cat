import { saveSettings, loadSettings } from '../settings';

describe('Settings Module', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save settings to localStorage', () => {
    const id = '123';
    const settings = { theme: 'dark' };
    saveSettings(id, settings);

    expect(localStorage.setItem).toHaveBeenCalledWith(`drh-settings-${id}`, JSON.stringify(settings));
  });

  it('should load settings from localStorage', () => {
    const id = '123';
    const settings = { theme: 'dark' };
    localStorage.setItem(`drh-settings-${id}`, JSON.stringify(settings));

    const result = loadSettings(id);

    expect(result).toEqual(settings);
  });

  it('should return null if no settings are found', () => {
    const result = loadSettings('nonexistent-id');

    expect(result).toBeNull();
  });
});
