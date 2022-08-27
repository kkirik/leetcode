export function getIsPalindrome(num: number) {
  if (num < 0) {
    return false;
  }

  const strNumber = String(num);
  const reversedNum = strNumber.split('').reverse().join('');

  return strNumber === reversedNum;
}
