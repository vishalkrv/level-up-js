const { expect, it, describe } = require('@jest/globals')
const findMaxSlidingWindow = require('./max_sliding_window')

describe('Challenge - findMaxSlidingWindow', () => {
  it('should match the result when window size is 3', () => {
    const result = findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
    expect(result).toEqual([3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('should match the result when window size is 4', () => {
    const result = findMaxSlidingWindow([1, 45, 235, 123, 22, 35, 15], 4)
    expect(result).toEqual([235, 235, 235, 123])
  })
  it('should match the result when window size is 2', () => {
    const result = findMaxSlidingWindow([24523, 459, 223, 789, 1], 2)
    expect(result).toEqual([24523, 459, 789, 789])
  })
  it('should match the result when window size is 3', () => {
    const result = findMaxSlidingWindow([4,55,33,2,4,2,11], 4)
    expect(result).toEqual([55,55,33,11])
  })
})
