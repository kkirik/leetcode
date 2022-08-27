export function getSumIndexes(nums: number[], target: number) {
  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];

    if (indexMap[targetNum] !== undefined) {
      return [indexMap[targetNum], i];
    }

    indexMap[nums[i]] = i;
  }

  return [0, 0];
}
