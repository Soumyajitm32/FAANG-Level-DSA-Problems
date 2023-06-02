/*
Problem Name:-First Missing Positive
Problem Link:-https://leetcode.com/problems/first-missing-positive/
*/ 
function firstMissingPositive(array) {
    let n = array.length;

    // Base case.
    let contains = 0;
    for (let i = 0; i < n; i++) {
        if (array[i] === 1) {
            contains++;
            break;
        }
    }

    if (contains === 0)
        return 1;

    // Replace negative numbers, zeros,
    // and numbers larger than n by 1s.
    // After this conversion, array will contain 
    // only positive numbers.
    for (let i = 0; i < n; i++) {
        if (array[i] <= 0 || array[i] > n)
            array[i] = 1;
    }

    // Use index as a hash key and number sign as a presence detector.
    // For example, if array[1] is negative, that means that number `1`
    // is present in the array. 
    // If array[2] is positive, number 2 is missing.
    for (let i = 0; i < n; i++) {
        let a = Math.abs(array[i]);
        // If you meet number a in the array, change the sign of the a-th element.
        // Be careful with duplicates: do it only once.
        if (a === n)
            array[0] = -Math.abs(array[0]);
        else
            array[a] = -Math.abs(array[a]);
    }

    // Now the index of the first positive number 
    // is equal to the first missing positive.
    for (let i = 1; i < n; i++) {
        if (array[i] > 0)
            return i;
    }

    if (array[0] > 0)
        return n;

    return n + 1;
}


