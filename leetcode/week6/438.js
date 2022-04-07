/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 time O(S+P), space O(P)
 */
var findAnagrams = function (s, p) {
	if (s.length < p.length) return [];

	const map = new Map();
	const ans = [];
	let count = p.length;
	let l = 0;
	let r = 0;

	for (let i = 0; i < p.length; i++) {
		if (map.has(p[i])) map.set(p[i], map.get(p[i]) + 1);
		else map.set(p[i], 1);
	}

	while (r < s.length) {
		//map에 아예 없는경우
		if (!map.has(s[r])) {
			r++;
			while (l < r) {
				if (map.has(s[l])) {
					map.set(s[l], map.get(s[l]) + 1);
					count++;
				}
				l++;
			}
			continue;
		}

		if (map.has(s[r]) && map.get(s[r]) > 0) {
			map.set(s[r], map.get(s[r]) - 1);
			count--;
			if (count === 0) {
				ans.push(l);
				count++;
				map.set(s[l], map.get(s[l]) + 1);
				l++;
			}
			r++;
			continue;
		}

		if (map.has(s[r]) && map.get(s[r]) <= 0) {
			map.set(s[l], map.get(s[l]) + 1);
			l++;
			count++;
		}
	}

	return ans;
};


/*
수빈
time: O(S+P)
space: O(P)
*/
var findAnagrams = function(s, p) {
	let res = [];
	const pMap = new Map();
	for(let char of p){
			if(pMap.has(char)) pMap.set(char, pMap.get(char)+1);
			else pMap.set(char, 1);
	}
	let counter = pMap.size;
	let left=0, right=0;
	while(right < s.length){
			let curChar = s[right];
			if(pMap.has(curChar)){
					pMap.set(curChar, pMap.get(curChar)-1);
					if(pMap.get(curChar)===0) counter--;
			}
			right++;
			while(counter === 0){
					if(right-left === p.length) res.push(left);
					let leftChar = s[left];
					if(pMap.has(leftChar)){
							pMap.set(leftChar, pMap.get(leftChar)+1);
							if(pMap.get(leftChar)>0) counter++;
					}
					left++;
			}
	}
	return res;
};