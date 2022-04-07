/**
 * @param {number[]} height
 * @return {number}
time O(N)
spcae O(1)
*/
 var maxArea = function(height) {
  let max = 0;
  let l=0;
  let r=height.length-1;
  
  while(l<r){
      const w = r-l;
      const h = height[l]>height[r] ? height[r--] : height[l++];
      
      max = Math.max(max, h*w);
  }
  
  return max;
};

/*
수빈
time: O(N)
spacc: O(1)
*/
var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while(left < right) {
      let area = (right-left) * Math.min(height[left], height[right]);
      max = Math.max(max, area);
      if(height[left] < height[right]) left++;
      else right--;
  }
  return max;
};