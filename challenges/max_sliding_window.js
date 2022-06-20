//  @title: Find Maximum in Sliding Window
//  @description: Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.
//  Note: If the window size is greater than the array size, we will consider the entire array as a single window.

//  N: Array Length, K: Window Size
//  Time Complexity: O(N * K). 
//  The outer loop runs n-k+1 times and the inner loop runs k times for every iteration of outer loop. So time complexity is O((n-k+1)*k) which can also be written as O(N * K).
//  Space Complexity: O(1). 
//  No extra space is required.
module.exports = findMaxSlidingWindow = (arr, windowSize) => {
  let max,
    len = arr.length,
    result = []

  for (let i = 0; i <= len - windowSize; i++) {
    max = arr[i]
    for (let j = 1; j < windowSize; j++) {
      if (arr[i + j] > max) {
        max = arr[i + j]
      }
    }
    result.push(max)
  }
  return result
}

