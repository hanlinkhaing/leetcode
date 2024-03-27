/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {}
    for(let i = 0; i < nums.length; i++) {
        let temp = target - nums[i]

        if (dict[temp] !== undefined) return [i, dict[temp]]

        dict[nums[i]] = i
    }
};
// @lc code=end

