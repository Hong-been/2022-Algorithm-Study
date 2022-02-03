//멀쩡한사각형 

//홍빈
function solution(w, h) {
	if (w === 1 || h === 1) return 0;

	const gcd = GCD(w, h);

	return w * h - (h + w - gcd);
}
function GCD(a, b) {
	while (b) {
		let r = a % b;
		a = b;
		b = r;
	}
	return a;
}

/*-----------------------------------------------*/

//수빈
function solution(w, h) {
  var answer = 0;
  let gcd = gcdCal(w,h);
  let cutNum = ((w/gcd) + (h/gcd) - 1)*gcd;
  answer = w * h - cutNum;
  return answer;
}

function gcdCal(a,b) {
  let tmp, n;
  if(a<b){
      tmp = a;
      a = b;
      b = tmp;
  }
  while(b!==0){
      n = a % b;
      a = b;
      b = n;
  }
  return a;
}