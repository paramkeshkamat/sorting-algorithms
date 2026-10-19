function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const mid = Math.floor(nums.length / 2);

  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

const nums = [5, 3, 1, 4, 2];
console.log(nums);
const sorted = mergeSort(nums);
console.log(sorted);

/*
Time Complexity:
Best: O(n log n)
Average: O(n log n)
Worst: O(n log n)

Space Complexity: O(n)
*/
