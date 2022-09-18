import {addBinary} from './addBinary';

describe('addBinary', () => {
  it('should return 100 as sum 11 and 1', () => {
    const a = '11';
    const b = '1';

    const binaryNumber = addBinary(a, b);

    expect(binaryNumber).toBe('100');
  });

  it('should return 10101 as sum 1010 and 1011', () => {
    const a = '1010';
    const b = '1011';

    const binaryNumber = addBinary(a, b);

    expect(binaryNumber).toBe('10101');
  });

  it('should return 10001 as sum 10000 and 1', () => {
    const a = '10000';
    const b = '1';

    const binaryNumber = addBinary(a, b);

    expect(binaryNumber).toBe('10001');
  });

  it('should return 10000 as sum 111 and 111', () => {
    const a = '111';
    const b = '111';

    const binaryNumber = addBinary(a, b);

    expect(binaryNumber).toBe('1110');
  });

  it('should return 10000 as sum 1111 and 1111', () => {
    const a = '1111';
    const b = '1111';

    const binaryNumber = addBinary(a, b);

    expect(binaryNumber).toBe('11110');
  });
});
