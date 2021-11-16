/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  for (let i = 1; i <= num; i++) {
    if (i === 1) continue;
    if (i % i === 0 && i % 1 === 0) {
      console.log(i);
    }
  }
}
