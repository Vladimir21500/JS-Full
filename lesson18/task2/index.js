function getOwnProps(obj) {
  const arrProp = [];
  for (let key in obj) {
    if (typeof obj[key] !== `function` && obj.hasOwnProperty(key)) {
      arrProp.push(key);
    }
  }
  return arrProp;
}
//test data

const user = {
  name: `vanka`,
  age: 99,
  spec: `driver`,
  sayHi() {
    console.log(`Hi`);
  },
};

const childUser = {
  name: `sanka`,
  age: 45,
  __proto__: user,
};
