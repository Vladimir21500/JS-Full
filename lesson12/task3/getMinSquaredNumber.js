export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  let min = Math.abs(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) < min) min = arr[i];
  }
  return min * min;
};
