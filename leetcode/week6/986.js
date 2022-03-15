/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (a1, a2) {
	if (!a1.length || !a2.length) return [];

	let p1 = 0;
	let p2 = 0;
	const ans = [];

	while (p1 < a1.length && p2 < a2.length) {
		const [s1, e1] = a1[p1];
		const [s2, e2] = a2[p2];
		const stand = s1 <= s2 ? a1[p1] : a2[p2];
		const compt = s1 <= s2 ? a2[p2] : a1[p1];

		// 비교해서 ans에 추가
		// 안겹치는 경우
		if (stand[1] < compt[0]);
		else if (stand[1] === compt[0]) {
			ans.push([stand[1], stand[1]]);
		} else if (stand[1] >= compt[0]) {
			if (stand[1] > compt[1]) ans.push([compt[0], compt[1]]);
			else ans.push([compt[0], stand[1]]);
		}

		// 끝점이 더 작은쪽 포인터++
		if (e1 < e2) p1++;
		else p2++;
	}

	return ans;
};
