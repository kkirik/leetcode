const ROMAN_DICT = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

type RomanLetter = keyof typeof ROMAN_DICT;

const SPECIAL_LETTERS = {
  I: ['V', 'X'] as RomanLetter[],
  X: ['L', 'C'] as RomanLetter[],
  C: ['D', 'M'] as RomanLetter[],
};

export function romanToInt(romanNums: string) {
  const romanLetters = romanNums.split('') as RomanLetter[];
  let resultNumber = 0;
  let currentNum = 0;

  for (let i = 0; i < romanLetters.length; i++) {
    const currentLetter = romanLetters[i];
    const nextLetter = romanLetters[i + 1];

    currentNum = ROMAN_DICT[currentLetter];

    if (['I', 'X', 'C'].includes(currentLetter)) {
      const specialLetters = SPECIAL_LETTERS[currentLetter];

      if (specialLetters.includes(nextLetter)) {
        currentNum = ROMAN_DICT[nextLetter] - ROMAN_DICT[currentLetter];
        i++;
      }
    }

    resultNumber += currentNum;
  }

  return resultNumber;
}
