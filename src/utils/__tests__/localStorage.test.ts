import { localStorage } from 'utils/localStorage';

describe('local storage', () => {
  let storage: {
    save: (value: any) => void;
    get: () => string;
    remove: () => void;
  };
  beforeEach(() => {
    storage = localStorage('test');
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  describe('save', () => {
    test('save an object', () => {
      let obj = {
        content: 'test',
      };
      storage.save(obj);
      let get = window.localStorage.getItem('test') ?? '';
      let stringify = JSON.stringify(obj);

      expect(get).toEqual(stringify);
    });
  });

  describe('get', () => {
    test('get key undefined value', () => {
      expect(storage.get()).toEqual('');
    });

    test('get value', () => {
      let value = 'test value';
      window.localStorage.setItem('test', JSON.stringify(value));

      expect(storage.get()).toEqual(value);
    });
  });

  describe('remove', () => {
    test('remove undefined key', () => {
      expect(storage.remove).not.toThrowError();
    });

    test('remove valid key', () => {
      window.localStorage.setItem('test', JSON.stringify('test value'));

      storage.remove();
      let value = window.localStorage.getItem('test');
      expect(value).toBe(null);
    });
  });
});
