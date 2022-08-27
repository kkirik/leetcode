import {getSumIndexes} from './getSumIndexes';

describe('getSumIndexes', () => {
  it('should return [0, 1] when sum of first two numbers = 9', () => {
    const nums = [2, 7, 11, 13];
    const target = 9;

    const indexes = getSumIndexes(nums, target);

    expect(indexes).toEqual([0, 1]);
  });

  it('should return [1, 2] when sum of second and third numbers = 6', () => {
    const nums = [3, 2, 4];
    const target = 6;

    const indexes = getSumIndexes(nums, target);

    expect(indexes).toEqual([1, 2]);
  });

  it('should return [0, 1] when sum of first two numbers = 6', () => {
    const nums = [3, 3];
    const target = 6;

    const indexes = getSumIndexes(nums, target);

    expect(indexes).toEqual([0, 1]);
  });

  it('should return [0, 2] when sum of first and last numbers = 6', () => {
    const nums = [3, 2, 3];
    const target = 6;

    const indexes = getSumIndexes(nums, target);

    expect(indexes).toEqual([0, 2]);
  });

  it('should return [1, 2] when sum of second and last numbers = 5', () => {
    const nums = [1, 2, 3];
    const target = 5;

    const indexes = getSumIndexes(nums, target);

    expect(indexes).toEqual([1, 2]);
  });
});
