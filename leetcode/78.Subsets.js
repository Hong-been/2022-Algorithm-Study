/**
 * @param {number[]} nums
 * @return {number[][]}
 
Runtime: 84 ms, faster than 64.43% of JavaScript online submissions for Subsets.
Memory Usage: 42.6 MB, less than 59.82% of JavaScript online submissions for Subsets.

time O(2^N)
space O(N) for curSet array, call stack도 계산안하나벼,,.?

Note that for space complexity analysis, we do not count space that is only used for the purpose of returning output, so the output array is ignored.
https://leetcode.com/problems/subsets/solution/
 */
var subsets = function (nums) {
	const ans = [];

	const dfs = (curSet, unUsed) => {
		ans.push([...curSet]);
		if (unUsed.length === 0) return;

		for (let i = 0; i < unUsed.length; i++) {
			curSet.push(unUsed[i]);
			dfs(curSet, unUsed.slice(i + 1, unUsed.length));
			curSet.pop();
		}
	};

	dfs([], nums);

	return ans;
};
