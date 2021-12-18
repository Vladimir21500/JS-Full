'use strict';

/**
 * @param {number} minutes
 * @param {number} seconds
 * @param {number} mills
 * @return {number}
 */
function convertMills(minutes, seconds, mills) {
  return minutes * 60000 + seconds * 1000 + mills;
}

// examples
convertMills(1, 2, 100); // ===> 62100
convertMills(0, 2, 100); // ===> 2100
convertMills(5, 11, 230); // ===> 311230
