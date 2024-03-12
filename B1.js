function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

let array1 = [2, 7, 11, 15];
let array2 = [3, 2, 4];
let array3 = [3, 3];

console.log(twoSum(array1, 9)); // [0,1]
console.log(twoSum(array2, 6)); // [1,2]
console.log(twoSum(array3, 6)); // [0,1]
