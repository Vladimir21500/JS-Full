function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (this.age >= 25) {
    this.requestNewPhoto();
    return newAge;
  }
  return newAge;
};
//test data
const user1 = new User(`John`, 34);
const user2 = new User(`Tom`, 3);
const user3 = new User(`Tamara`, 54);

user3.sayHi();
