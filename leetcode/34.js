/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

time O(logN)
space O(1)
 */
var searchRange = function (nums, t) {
	if (nums.length === 0) return [-1, -1];

	const ans = [-1, -1];
	let l = 0;
	let r = nums.length - 1;

	while (l < r) {
		let m = Math.floor((l + r) / 2);

		if (nums[m] >= t) r = m;
		else l = m + 1;
	}

	if (nums[l] === t) ans[0] = l;

	r = nums.length - 1;
	while (l < r) {
		let m = Math.ceil((l + r) / 2);

		if (nums[m] <= t) l = m;
		else r = m - 1;
	}

	if (nums[l] === t) ans[1] = l;

	return ans;
};
