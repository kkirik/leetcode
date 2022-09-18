import {removeElement} from './removeElement';

describe('removeElement', () => {
  it('should return patched input array [1, 2, -1] and uniqle array lenght = 2 when input array = [1, 1, 2]', () => {
    const NUMS = [3, 2, 2, 3];

    const length = removeElement(NUMS, 3);

    expect(length).toEqual(2);
    expect(NUMS).toEqual([2, 2, 2, 3]);
  });

  it('should return patched input array [1, 2, -1] and uniqle array lenght = 2 when input array = [1, 1, 2]', () => {
    const NUMS = [0, 1, 2, 2, 3, 0, 4, 2];

    const length = removeElement(NUMS, 2);

    expect(length).toEqual(5);
    expect(NUMS).toEqual(expect.arrayContaining([0, 1, 3, 0, 4]));
  });
});
