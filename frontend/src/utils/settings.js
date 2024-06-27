export const saveSettings = (id, settings) => {
  localStorage.setItem(`drh-settings-${id}`, JSON.stringify(settings));
};

export const loadSettings = (id) => {
  const settings = localStorage.getItem(`drh-settings-${id}`);
  return settings ? JSON.parse(settings) : null;
};
