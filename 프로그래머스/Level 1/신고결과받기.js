/*
홍빈
N: id_list length, M: report length
- time O(max(N,M))
- space O(N) + O(N) for answer

map { 
  muzi : { idx: 0, reported : Set[2] }
  frodo : { idx: 1, reported : Set[0,2] }
  apeach: { idx: 2, reported : Set[] }
  neo: { idx: 3, reported : Set[1,0] }
}
map돌면서 
if(reported.length가 k이상이면) result[reported에 있는 애들]++
*/
function solution(id_list, report, k) {
	const map = new Map();
	const result = Array(id_list.length).fill(0);

	for (let i = 0; i < id_list.length; i++) {
		if (!map.has(id_list[i]))
			map.set(id_list[i], { idx: i, reported: new Set() });
	}

	for (let i = 0; i < report.length; i++) {
		const [from, to] = report[i].split(" ");
		map.get(to).reported.add(map.get(from).idx);
	}

	for (let [key, value] of map) {
		if (value.reported.size >= k) {
			for (let r of value.reported) {
				result[r] += 1;
			}
		}
	}

	return result;
}
