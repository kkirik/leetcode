export function removeElement(nums: number[], val: number): number {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (currentNum !== val) {
      nums[index] = nums[i];
      index += 1;
    }
  }

  return index;
}
