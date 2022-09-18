const BASE = 10;
const ADDITIONAL_NUMBER = 1;

export function plusOne(digits: number[]): number[] {
  let carry = 0;
  let resultDigits: number[] = [];
  const lastIndex = digits.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    let dischargeAmount = digits[i] + carry;

    if (i === lastIndex) {
      dischargeAmount += ADDITIONAL_NUMBER;
    }

    carry = dischargeAmount > BASE - 1 ? 1 : 0;
    resultDigits = [dischargeAmount % BASE, ...resultDigits];
  }

  if (carry > 0) {
    resultDigits = [carry, ...resultDigits];
  }

  return resultDigits;
}
