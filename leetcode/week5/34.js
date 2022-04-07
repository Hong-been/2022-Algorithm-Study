/*
수빈
 0 1 2 3 4 5
 5,7,7,8,8,10 target:8
       ^    ^
          ^  
 [1]
[0,0] 리턴

time: O(logN)
space: O(1)
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = [-1, -1];
  
  //시작점 찾기
  while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(nums[mid] < target) {
          left = mid + 1;
      } else if(nums[mid] > target){
          right = mid - 1;
      } else {
          if(nums[mid-1] !== target){
              res[0] = mid;
              break;
          }
          right = mid - 1;
      }
  }
  //console.log(mid)
  //끝점 찾기
  left = 0;
  right = nums.length -1;
  while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(nums[mid] < target) {
          left = mid + 1;
      } else if(nums[mid] > target){
          right = mid - 1;
      } else {
          if(nums[mid+1] !== target){
              res[1] = mid;
              break;
          }
          left = mid + 1;
      }
  }
  return res;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

홍빈
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
