/**
 * @param {number[]} nums
 * @return {number[][]}
 
 time O(N! + NlogN) space O(N)
 */
var permuteUnique = function (nums) {
	const ans = [];

	nums.sort((a, b) => a - b);

	const dfs = (path, unused) => {
		if (path.length === nums.length) {
			ans.push([...path]);
			return;
		}

		// console.log(path,unused);
		for (let i = 0; i < unused.length; i++) {
			if (i === 0) {
				path.push(unused[i]);
				dfs(path, unused.slice(1));
				path.pop();
				continue;
			}

			if (unused[i] === unused[i - 1]) continue;

			path.push(unused[i]);
			dfs(path, unused.slice(0, i).concat(unused.slice(i + 1)));
			path.pop();
		}
	};

	dfs([], nums);

	return ans;
};


/*
수빈
time: O(NlogN) + O(N!)
space: O(N)
*/
var permuteUnique = function(nums) {
	nums.sort((a,b)=>a-b);
	let result = [];
	let used = new Array(nums.length).fill(false);
	backtracking(nums, []);
	
	function backtracking(nums, permutation){
			if(permutation.length===nums.length){
					result.push([...permutation]);
			}
			for(let i=0; i<nums.length; i++){
					if(used[i] || (i>0 && nums[i]===nums[i-1] && used[i-1])) continue;
					
					permutation.push(nums[i]);
					used[i]=true;
					backtracking(nums, permutation);
					permutation.pop();
					used[i]=false;
			}
	}
	return result;
};
