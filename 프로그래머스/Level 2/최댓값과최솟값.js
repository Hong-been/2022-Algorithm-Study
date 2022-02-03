// 홍빈
function solution(s) {
  const nums = s.split(' ');
  return `${Math.min(...nums)} ${Math.max(...nums)}`
}