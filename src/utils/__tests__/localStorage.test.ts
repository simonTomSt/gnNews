import { saveToLocalStorage, getFromLocalStorage } from '../localStorage';

describe('localStorage utils', () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe('saveToLocalStorage', () => {
    it('should save a string value to local storage', () => {
      const key = 'testKey';
      const value = 'testValue';

      saveToLocalStorage(key, value);

      expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
    });

    it('should save an object value to local storage', () => {
      const key = 'testKey';
      const value = { name: 'John Doe', age: 30 };

      saveToLocalStorage(key, value);

      expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
    });
  });

  describe('getFromLocalStorage', () => {
    it('should return null if the key does not exist', () => {
      const key = 'nonExistentKey';

      expect(getFromLocalStorage(key)).toBeNull();
    });

    it('should return the value stored in local storage', () => {
      const key = 'testKey';
      const value = { name: 'John Doe', age: 30 };

      localStorage.setItem(key, JSON.stringify(value));

      expect(getFromLocalStorage(key)).toEqual(value);
    });
  });
});
