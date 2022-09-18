import {plusOne} from './plusOne';

describe('plusOne', () => {
  it('should return [1, 2, 4] when [1, 2, 3]', () => {
    const digits = [1, 2, 3];

    const resultNumber = plusOne(digits);

    expect(resultNumber).toEqual([1, 2, 4]);
  });

  it('[4, 3, 2, 2] when [4, 3, 2, 1]', () => {
    const digits = [4, 3, 2, 1];

    const resultNumber = plusOne(digits);

    expect(resultNumber).toEqual([4, 3, 2, 2]);
  });

  it('[9] when [1, 0]', () => {
    const digits = [9];

    const resultNumber = plusOne(digits);

    expect(resultNumber).toEqual([1, 0]);
  });

  it('[9] when [1, 0]', () => {
    const digits = [9];

    const resultNumber = plusOne(digits);

    expect(resultNumber).toEqual([1, 0]);
  });

  it('should add one to big number', () => {
    const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

    const resultNumber = plusOne(digits);

    expect(resultNumber).toEqual([
      6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4,
    ]);
  });
});
