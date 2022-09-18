import {removeDuplicates} from './removeDuplicates';

describe('removeDuplicates', () => {
  it('should return patched input array [1, 2, -1] and uniqle array lenght = 2 when input array = [1, 1, 2]', () => {
    const NUMS = [1, 1, 2];

    const length = removeDuplicates(NUMS);

    expect(length).toEqual(2);

    expect(NUMS).toEqual([1, 2]);
  });
});
