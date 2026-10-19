function countingSort(nums) {
  const max = Math.max(...nums);
  const count = Array(max + 1).fill(0);

  for (const num of nums) {
    count[num]++;
  }

  let j = 0;
  for (let num = 0; num <= max; num++) {
    while (count[num] > 0) {
      nums[j] = num;
      j++;
      count[num]--;
    }

    for (let freq = 0; freq < count[num]; freq++) {
      result.push(num);
    }
  }
}

const nums = [4, 2, 2, 8, 3, 3, 1];
console.log(nums);
countingSort(nums);
console.log(nums);

/*
Time Complexity:
Best: O(n + k)
Average: O(n + k)
Worst: O(n + k)

Space Complexity: O(n)

where, 
    n is no.of input elements
    k is largest element of input array
*/
