export const localStorage = (key: string) => {
  return {
    save: (value: string): void => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },

    get: (): string => {
      const value: string | null = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : '';
    },

    remove: (): void => {
      window.localStorage.removeItem(key);
    },
  };
};
