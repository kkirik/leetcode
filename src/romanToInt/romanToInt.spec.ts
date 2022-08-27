import {romanToInt} from './romanToInt';

describe('romanToInt', () => {
  it('should return 3 when roman number is III', () => {
    const romanNum = 'III';

    const num = romanToInt(romanNum);

    expect(num).toBe(3);
  });

  it('should return 58 when roman number is LVIII', () => {
    const romanNum = 'LVIII';

    const num = romanToInt(romanNum);

    expect(num).toBe(58);
  });

  it('should return 1994 when roman number is MCMXCIV', () => {
    const romanNum = 'MCMXCIV';

    const num = romanToInt(romanNum);

    expect(num).toBe(1994);
  });

  it('should return 19 when roman number is XIX', () => {
    const romanNum = 'XIX';

    const num = romanToInt(romanNum);

    expect(num).toBe(19);
  });
});
