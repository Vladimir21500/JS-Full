export const parseUser = strJson => {
  try {
    return JSON.parse(strJson);
  } catch (error) {
    return null;
  }
};

/* const good = parseUser('{"name": "Tom"}');
const bad = parseUser('{"name": "Tom"');
console.log(good);
console.log(bad);
 */
