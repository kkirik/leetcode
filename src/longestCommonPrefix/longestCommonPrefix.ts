export function longestCommonPrefix(strs: string[]): string {
  const sortedWords = strs.sort((a, b) => a.length - b.length);
  let [longestPrefix] = sortedWords;

  for (let i = 1; i < sortedWords.length; i++) {
    const currentWord = sortedWords[i];
    let currentLongestPrefix = longestPrefix;
    let hasFoundCommonPrefix = false;

    while (!hasFoundCommonPrefix && currentLongestPrefix.length > 0) {
      const hasCommonPrefix = currentWord.startsWith(currentLongestPrefix);

      if (hasCommonPrefix) {
        hasFoundCommonPrefix = true;
      } else {
        currentLongestPrefix = currentLongestPrefix.slice(0, -1);
      }

      longestPrefix = currentLongestPrefix;
    }
  }

  return longestPrefix;
}
