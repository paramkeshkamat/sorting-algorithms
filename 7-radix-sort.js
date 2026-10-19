function countingSortByDigit(nums, place) {
  const count = Array(10).fill(0);
  const output = Array(nums.length).fill(0);

  // 1. Count the occurrences of each digit
  for (const num of nums) {
    const digit = Math.floor(num / place) % 10;
    count[digit]++;
  }

  // 2. Convert counts into cumulative positions
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // 3. Build output from right to left to preserve stability
  for (let i = nums.length - 1; i >= 0; i--) {
    const digit = Math.floor(nums[i] / place) % 10;
    output[count[digit] - 1] = nums[i];
    count[digit]--;
  }

  return output;
}

function radixSort(nums) {
  if (nums.length === 0) return [];

  const max = Math.max(...nums);

  // Sort by ones, tens, hundreds, etc.
  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    nums = countingSortByDigit(nums, place);
  }

  return nums;
}

const nums = [170, 45, 75, 90, 802, 24, 2, 66];

console.log(radixSort(nums));

/*
Time Complexity:
Best: O(d * (n + b))
Average: O(d * (n + b))
Worst: O(d * (n + b))

Space Complexity: O(n + b)

where, 
    n is no.of input elements
    d is no.of digits in largest number of input array
    k is largest element of input array
*/

/*
170  170  802    2
 45   90    2   24
 75  802   24   25
 90    2   25   66
802   24   66   75
 24   25  170   90
  2   75   75  170
 66   66   90  802
 */
