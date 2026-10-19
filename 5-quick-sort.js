function partition(nums, low, high) {
  const pivot = nums[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (nums[j] <= pivot) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];

  return i + 1;
}

function quickSort(nums, low = 0, high = nums.length - 1) {
  if (low < high) {
    const pivotIndex = partition(nums, low, high);
    quickSort(nums, low, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, high);
  }
}

const nums = [5, 3, 1, 4, 2];
console.log(nums);
quickSort(nums);
console.log(nums);

/*
Time Complexity:
Best: O(n log n)
Average: O(n log n)
Worst: O(n^2)

Space Complexity: 
Average: O(log n)
Worst: O(n)
*/
