/*
Problem name:-Valid Mountain Array
Problem Link:-https://leetcode.com/problems/valid-mountain-array/description/
*/
function validMountainArray(array) {
  const n = array.length;
  let i = 0;

  // walk up
  while (i + 1 < n && array[i] < array[i + 1]) i++;

  // peak can't be first or last
  if (i === 0 || i === n - 1) return false;

  // walk down
  while (i + 1 < n && array[i] > array[i + 1]) i++;

  return i === n - 1;
}
