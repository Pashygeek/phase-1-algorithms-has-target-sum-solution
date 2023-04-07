function hasTargetSum(array, target) {
  // Write your algorithm here
  const set = new Set();
  for (let i = 0 ; i < array.length ; i++) {
    const complement = target - array[i];
    if (set.has(complement)) {
      return true;
    }
    set.add(array[i]);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  - Create a set to keep track of numbers that have already been seen
  - Loop through each number in the array
    - Calculate the complement of the current number with respect to the target
    - Check if the complement has already been seen in the set
    - If the complement has been seen, return true
    - Otherwise, add the current number to the set
  - If the loop completes without finding a complement, return false
*/

/*
  Add written explanation of your solution here
  This solution uses a hash set to keep track of the numbers that have already been seen. For each number in the array, 
  we calculate its complement with respect to the target, which is the difference between the target and the current number. 
  If the complement is in the set, we have found two numbers that add up to the target, so we return true. Otherwise, we add the current number to the set and continue to the next number. 
  If the loop completes without finding a complement, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
