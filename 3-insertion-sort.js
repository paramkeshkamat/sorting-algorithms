function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = current;
  }
}

const nums = [5, 3, 1, 4, 2];
console.log(nums);
bubbleSort(nums);
console.log(nums);

/*
Time Complexity:
Best: O(n)
Average: O(n^2)
Worst: O(n^2)

Space Complexity: O(1)
*/
