/*
수빈

 오름차순 정렬된 회전된 배열
 맨 끝에거가 맨앞으로 올때 회전 한번.
 
 3,4,5,1,2
       ^ ^
       ^
     
 5 1 2 3 4


4,5,6,7,0,1,2
        ^   ^
          ^
          
time: O(logN)
space: O(1)

11,13,15,17
^
         ^
   ^
*/
var findMin = function(nums) {
  let left = 0;
  let right = nums.length -1;
  let mid = Math.floor((left+right)/2);
  let min = Infinity;
  
  while(left <= right){
      min = Math.min(min, nums[mid]);
      
      //정렬된 범위를 보고있으면 왼쪽 탐색
      if(nums[left]<nums[mid] && nums[mid]<nums[right]){
          right = mid -1;
      }
      // mid>left min은 오른쪽에 있음
      else if(nums[mid]>=nums[left]){
          left = mid + 1;
      } 
      // mid<right min은 왼쪽에 있음
      else if(nums[mid]<nums[right]){
          right = mid -1;
      }
         
      mid = Math.floor((left+right)/2);
  }
  return min;
};


/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 홍빈
 * 
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
