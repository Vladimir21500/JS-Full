function cleanTransactionsList(transactions) {
  const arr = transactions.slice();
  return arr
    .filter((elem) => !isNaN(Number(elem)))
    .map((elem) => '$' + Number(elem).toFixed(2));
}
