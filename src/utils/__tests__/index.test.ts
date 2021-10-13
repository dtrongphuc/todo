import { calcTotalPage } from '../index';

describe('utils', () => {
  describe('total page must greater than 0', () => {
    test('give a negative number', () => {
      expect(calcTotalPage(-10)).toEqual(1);
    });

    test('give a zero number', () => {
      expect(calcTotalPage(0)).toEqual(1);
    });

    test('give a positive number', () => {
      expect(calcTotalPage(10)).toBeGreaterThanOrEqual(1);
    });
  });
});
