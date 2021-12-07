/**
 * @param {number} num
 * @return {undefined}
 */
function isPrime(num) {
  for (let index = 2; index < num; index += 1) {
    if (num % index === 0) return false;
  }
  return true;
}

function getPrimes(num) {
  for (let index = 2; index < num; index += 1) {
    if (isPrime(index)) console.log(index);
  }
}
