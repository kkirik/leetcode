const BRACKETS = {
  '}': '{',
  ')': '(',
  ']': '[',
};

const ALLOWED_BRACKETS = '([{}])';

export function correctBrackets(s: string): boolean {
  let arr = s.split('');
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    const currBracket = arr[i];

    if (!ALLOWED_BRACKETS.includes(currBracket)) {
      continue;
    }

    if (
      BRACKETS[currBracket] &&
      BRACKETS[currBracket] === stack[stack.length - 1]
    ) {
      stack.pop();
    } else {
      stack.push(currBracket);
    }
  }

  return stack.length === 0;
}
