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
