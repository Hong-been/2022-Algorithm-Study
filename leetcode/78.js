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


/*
수빈
algo: backtracking
time: O(2^N)
space: O(N)..? + 콜스택
/*
result: [] [1] [1,2] [1,2,3] [1,3] [2] [2,3] [3]
([],0)->[]넣음.
([1],1)->[1]넣음//([1,2],2)->[1,2]넣음//([1,2,3],3)->[1,2,3]넣음//
([1,3],3)->[1,3]넣음//
    
([2],2)->[2]넣음//([2,3],3)->[2,3]넣음//
([3],3)->[3]넣음//
*/
var subsets = function(nums) {
  let temp = [];
  let result = [];
  let index = 0;

  function backtracking(arr, index){
      //console.log(arr)
      result.push([...arr]);
      for(let i=index; i<nums.length; i++){
          arr.push(nums[i]);
          backtracking(arr, i+1);
          arr.pop();
      }
  }
  backtracking(temp, index);
  return result;
};