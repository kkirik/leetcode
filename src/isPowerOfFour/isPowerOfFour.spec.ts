import {isPowerOfFour} from './isPowerOfFour';

describe('isPowerOfFour', () => {
  it('should return true when 16 is 4^2', () => {
    const num = 16;

    const isPower = isPowerOfFour(num);

    expect(isPower).toBeTruthy();
  });

  it('should return false when 25 is not power of four', () => {
    const num = 5;

    const isPower = isPowerOfFour(num);

    expect(isPower).toBeFalsy();
  });

  it('should return false when 1 is 4^0', () => {
    const num = 1;

    const isPower = isPowerOfFour(num);

    expect(isPower).toBeTruthy();
  });

  it('should return false when 64 is 4^3', () => {
    const num = 64;

    const isPower = isPowerOfFour(num);

    expect(isPower).toBeTruthy();
  });
});
