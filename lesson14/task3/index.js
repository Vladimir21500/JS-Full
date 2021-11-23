/* function compareDate(firstDate, secondDate) {
  let firstArrWords = String(firstDate).split(' ');
  let secondArrWords = String(secondDate).split(' ');

  let firstArrNumbers = firstArrWords[4].split(':');
  let secondArrNumbers = secondArrWords[4].split(':');

  for (let i = 0; i < firstArrNumbers.length; i++) {
    if (firstArrNumbers[i] < secondArrNumbers[i]) return 1;
    if (firstArrNumbers[i] > secondArrNumbers[i]) return -1;
  }
  if (
    firstArrNumbers[firstArrNumbers.length - 1] ===
    secondArrNumbers[firstArrNumbers.length - 1]
  )
    return 0;
}
 */
function createLogger() {
  let arrLog = [];
  function warn(message) {
    arrLog.push({
      message: message,
      dateTime: new Date().getTime(),
      type: 'warn',
    });
  }
  function error(message) {
    arrLog.push({
      message: message,
      dateTime: new Date().getTime(),
      type: 'error',
    });
  }
  function log(message) {
    arrLog.push({
      message: message,
      dateTime: new Date().getTime(),
      type: 'log',
    });
  }
  function getRecords(type) {
    if (type === undefined)
      return arrLog.sort((log1, log2) => log2.dateTime - log1.dateTime);
    if (
      type !== 'warn' &&
      type !== 'error' &&
      type !== 'log' &&
      type !== undefined
    )
      return [];
    switch (type) {
      case 'warn':
        return arrLog
          .filter((logger) => logger.type === 'warn')
          .sort((log1, log2) => log2.dateTime - log1.dateTime);
        break;
      case 'error':
        return arrLog
          .filter((logger) => logger.type === 'error')
          .sort((log1, log2) => log2.dateTime - log1.dateTime);
        break;
      case 'log':
        return arrLog
          .filter((logger) => logger.type === 'log')
          .sort((log1, log2) => log2.dateTime - log1.dateTime);
        break;
    }
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
}
