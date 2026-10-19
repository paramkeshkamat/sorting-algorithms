function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
}

const nums = [5, 3, 1, 4, 2];
console.log(nums);
bubbleSort(nums);
console.log(nums);
