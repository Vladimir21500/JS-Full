const getCustomersList = (obj) => {
  const copyObj = JSON.parse(JSON.stringify(obj));
  const customersArr = Object.values(copyObj);
  customersArr.forEach((customer) => {
    customer.id = Object.keys(copyObj)[customersArr.indexOf(customer)];
  });
  return customersArr.sort((a, b) => a.age - b.age);
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
