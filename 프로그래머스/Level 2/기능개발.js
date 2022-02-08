/*
홍빈
N: progresses length
- time O(N)
- space O(N)
while(i<arr.length)
  while([i]보다 큰게 나올때까지) 카운트(i=2에서 멈춤), count를 정답에 추가. count=0초기화
    
100-93 / 1 = 7(7일차에 배포)
*/
function solution(progresses, speeds) {
	const ans = [];
	const lastDays = Array(progresses.length);

	for (let i = 0; i < progresses.length; i++) {
		const last = Math.ceil((100 - progresses[i]) / speeds[i]);
		lastDays[i] = last;
	}

	let i = 0;

	while (i < lastDays.length) {
		const tmp = lastDays[i];
		let count = 1;
		i++;
		while (tmp >= lastDays[i] && i < lastDays.length) {
			count++;
			i++;
		}
		ans.push(count);
	}

	return ans;
}
