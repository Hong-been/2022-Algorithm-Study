/*
홍빈
완료시간 - 처리시간 + 1ms = 시작시간

logs를 모두 돌면서 
    각각 시작~시작+999ms, 완료~완료+999ms 에 걸리는 갯수 중 최댓값을 찾는다.
    (유의할 점-처리시작시간도 처리시간에 포함되기때문에 +1000ms 를 구간으로 잡으면 안되고 +999ms를 구간으로 잡아야 한다.)
    최종 최댓값이 정답

return max;
*/
function solution(lines) {
	// edge
	if (lines.length === 0) return 0;

	const logs = [];
	let max = 0;

	for (let l of lines) {
		let [date, time, during] = l.split(" ");
		let [h, m, s] = time.split(":");

		//sec로 모두 바꾸기
		h = parseInt(h) * 3600;
		m = parseInt(m) * 60;
		s = Number.parseFloat(s);

		//msec로 바꾸기
		during = Number.parseFloat(during.slice(0, -1)) * 1000;
		const end = (h + m + s) * 1000;
		const start = end - during + 1;

		//시작, 끝 시간을 구해서 배열에 저장
		logs.push([start, end]);
	}
	// console.log(logs);

	const throughput = (logs, start, end) => {
		let count = 0;

		for (let l of logs) {
			if (l[1] >= start && l[0] <= end) count++;
		}

		return count;
	};

	for (let [s, e] of logs) {
		// s~s+999 에 걸리는 값 , e~e+999 에 걸리는 값
		const startSection = throughput(logs, s, s + 999);
		const endSection = throughput(logs, e, e + 999);

		// 둘중 더 큰값과 max를 비교해서 더 큰값을 max로 갱신
		max = Math.max(max, startSection, endSection);
	}

	return max;
}
