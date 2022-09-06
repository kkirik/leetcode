export function removeElement(nums: number[], val: number): number {
  let length = 0;
  let arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (currentNum !== val) {
      arr.push(currentNum);
      length += 1;
    }
  }

  const arrWithoutElement = [
    ...arr,
    ...Array<number>(nums.length - length).fill(-1),
  ];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = arrWithoutElement[i];
  }

  return length;
}
