export const saveToLocalStorage = <T = any>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T = any>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
