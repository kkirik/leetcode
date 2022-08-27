import {getIsPalindrome} from './getIsPalindrome';

describe('getIsPalindrome', () => {
  it('should return [0, 1] when sum of first two numbers = 9', () => {
    const num = 121;

    const isPalindrome = getIsPalindrome(num);

    expect(isPalindrome).toBeTruthy();
  });

  it('should return [1, 2] when sum of second and third numbers = 6', () => {
    const num = -121;

    const isPalindrome = getIsPalindrome(num);

    expect(isPalindrome).toBeFalsy();
  });

  it('should return [0, 1] when sum of first two numbers = 6', () => {
    const num = 10;

    const isPalindrome = getIsPalindrome(num);

    expect(isPalindrome).toBeFalsy();
  });
});
