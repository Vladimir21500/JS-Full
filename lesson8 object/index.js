const getCustomersList = (obj) => {
  const customersKeys = Object.keys(obj);
  return Object.values(obj).map((el, index) => {});
};
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'vas',
    age: 34,
  },
};
getCustomersList(customers);

/* const getCustomersList = (obj) => {
  const customersArr = Object.values(obj);
  for ( let i = 0; i < customersArr.length; i++) {
    customersArr[i].id = Object.keys(obj)[i];
  }
  return customersArr;
}; */
