const nums = [1, 2, 3, 4, 5];
let reversed = [];
let index = nums.length - 1;

do {
    reversed.push(nums[index]);
    index--;
} while (index >= 0);

console.log(reversed);  // Output: [5, 4, 3, 2, 1]
