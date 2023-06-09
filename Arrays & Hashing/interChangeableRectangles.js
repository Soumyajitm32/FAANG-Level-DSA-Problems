/*
Problem name:-Number of Pairs of Interchangeable Rectangles
Problem Link:-https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
*/ 
function interchangeableRectangles(rectangles) {
    const ratios = new Map();
    let pairCount = 0;
  
    for (const [width, height] of rectangles) {
      const ratio = width / height;
  
      if (ratios.has(ratio)) {
        const count = ratios.get(ratio);
        pairCount += count;
        ratios.set(ratio, count + 1);
      } else {
        ratios.set(ratio, 1);
      }
    }
  
    return pairCount;
  }