import {correctBrackets} from './correctBrackets';

describe('correctBrackets', () => {
  it('should return true when brackets are correctly', () => {
    const str = '()';

    const isCorrect = correctBrackets(str);

    expect(isCorrect).toBeTruthy();
  });

  it('sshould return true when few brackets are correctly', () => {
    const str = '()[]{}';

    const isCorrect = correctBrackets(str);

    expect(isCorrect).toBeTruthy();
  });

  it("should return false when brackets aren't correctly", () => {
    const str = '(]';

    const isCorrect = correctBrackets(str);

    expect(isCorrect).toBeFalsy();
  });

  it('should return true when brackets are correctly', () => {
    const str = '(((())))';

    const isCorrect = correctBrackets(str);

    expect(isCorrect).toBeTruthy();
  });

  it('should return true when brackets are correctly', () => {
    const str = '((8)()8)';

    const isCorrect = correctBrackets(str);

    expect(isCorrect).toBeTruthy();
  });

  it('should return true when brackets are correctly', () => {
    const str = '(())()';

    const isCorrect = correctBrackets(str);

    expect(isCorrect).toBeTruthy();
  });
});
