export function isPowerOfFour(num: number): boolean {
  const powCoef = Math.log(num) / Math.log(4);

  return Number.isInteger(powCoef);
}
