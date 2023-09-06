export enum StorageKey {
  Product = 'product',
  User = 'user',
}

export const saveToLocalStorage = <T>(key: StorageKey, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = <T>(key: StorageKey, defaultValue: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

export const removeFromLocalStorage = (key: StorageKey) => {
  localStorage.removeItem(key);
};
