/**
 * @param {number[]} nums
 * @return {number}
중간에 짤린 상황이라면?
    미들값이 높은쪽에 있다면 그 다음껄 선택
    낮은쪽에 있따면 미들값부터 선택
차례로 있는 상황이라면 미들값이하.

time O(logN)
space O(1)
*/
var findMin = function (nums) {
	if (nums.length === 1) return nums[0];

	let l = 0;
	let r = nums.length - 1;

	while (l < r) {
		const m = Math.floor((l + r) / 2);

		if (nums[l] > nums[r]) {
			if (nums[m] >= nums[l]) l = m + 1;
			else r = m;
		} else r = m;
	}
	return nums[l];
};
