const BASE = 1;

export function addBinary(a: string, b: string): string {
  const longestNumber = a.length > b.length ? a.length : b.length;

  let fullA = a.padStart(longestNumber, '0');
  let fullB = b.padStart(longestNumber, '0');

  let carry = 0;
  let sum = '';

  for (let i = longestNumber - 1; i >= 0; i--) {
    let dischargeAmount = Number(fullA[i]) + Number(fullB[i]);

    if (carry > 0) {
      dischargeAmount += carry;
      carry -= 1;
    }

    if (dischargeAmount > BASE) {
      carry += 1;

      if (dischargeAmount % 2 === 0) {
        sum = `0${sum}`;

        continue;
      }

      sum = `1${sum}`;
    } else {
      sum = `${dischargeAmount}${sum}`;
    }
  }

  let localSum = 0;

  while (carry > 0) {
    localSum += 1;

    if (localSum > 1) {
      sum = `0${sum}`;
      localSum = 0;
    }

    carry -= 1;
  }

  if (localSum > 0) {
    sum = `1${sum}`;
  }

  return sum;
}
