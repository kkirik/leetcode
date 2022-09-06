export function removeDuplicates(nums: number[]): number {
  let length = 0;
  let set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      length += 1;
    }
  }

  const uniqNums = [...set, ...Array<number>(nums.length - length).fill(-1)];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = uniqNums[i];
  }

  return length;
}
