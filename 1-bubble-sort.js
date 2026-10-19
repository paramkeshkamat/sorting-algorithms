function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let swapped = false;

    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
}

const nums = [5, 3, 1, 4, 2];
console.log(nums);
bubbleSort(nums);
console.log(nums);
