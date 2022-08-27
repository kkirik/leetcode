import {longestCommonPrefix} from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  it('should return fl', () => {
    const words = ['flower', 'flow', 'flight'];

    const commonPrefix = longestCommonPrefix(words);

    expect(commonPrefix).toBe('fl');
  });

  it("should return empty string when words don't have common prefix", () => {
    const words = ['dog', 'racecar', 'car'];

    const commonPrefix = longestCommonPrefix(words);

    expect(commonPrefix).toBe('');
  });
});
