/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 작으면 정답+=r-l+1, r++
 크거나 같으면 l로 나누고 l++

 time O(N), spaceO(1)
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  if(k<=1) return 0;
  
  let ans = 0;
  let l=0;
  let r=0;
  let cur = nums[r];
  
  while(r<nums.length){
      if(cur < k){
          ans += r-l+1;
          r++;
          cur *= nums[r];
      }else {
          cur /= nums[l];
          l++;
      }
  }
  
  return ans;
};


/*
수빈(brute force)
연속하는 subarr 곱이 k보다 작은 경우의 수.
left에서 nums.length-1까지 쭉쭉 곱해가며 보기.
time: O(N^2)
space: O(1)
*/
var numSubarrayProductLessThanK = function(nums, k) {
    let output = 0;
    let left = 0, right = 0;
    while(left < nums.length){
        let product = 1;
        right = left;
        while(right < nums.length){
            product *= nums[right];
            if(product < k) output++;
            else break;
            right++;   
        }
        left++;
    }
    return output;
};

/*
수빈(optimal)
time: O(N)
space: O(1)
*/
var numSubarrayProductLessThanK = function(nums, k) {
    if(k<=1) return 0;
    
    let output = 0;
    let left = 0, right = 0;
    let product = 1;
    
    while(right < nums.length){
        product *= nums[right];
        while(product >= k){
            product /= nums[left];  
            left++;
        }
        output += right-left+1;
        right++;
    }
    return output;
};