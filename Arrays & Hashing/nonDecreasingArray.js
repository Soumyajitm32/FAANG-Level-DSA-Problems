/*
Problem name:-Non-decreasing Array
Problem Link:-https://leetcode.com/problems/non-decreasing-array/
*/ 
function checkPossibility(nums) {
    let dips = 0;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        dips++;
  
        if (dips > 1) {
          return false;
        }
  
        if (i === 1 || nums[i] >= nums[i - 2]) {
          // Modify current element
          nums[i - 1] = nums[i];
        } else {
          // Modify previous element
          nums[i] = nums[i - 1];
        }
      }
    }
  
    return true;
  }