const BASE = 1;

export function addBinary(a: string, b: string): string {
  const longestNumber = Math.max(a.length, b.length);

  let fullA = a.padStart(longestNumber, '0');
  let fullB = b.padStart(longestNumber, '0');

  let carry = 0;
  let sum = '';

  for (let i = longestNumber - 1; i >= 0; i--) {
    let dischargeAmount = Number(fullA[i]) + Number(fullB[i]) + carry;

    carry = dischargeAmount > BASE ? 1 : 0;
    sum = `${dischargeAmount % 2}${sum}`;
  }

  if (carry > 0) {
    sum = `${carry.toString(2)}${sum}`;
  }

  return sum;
}
