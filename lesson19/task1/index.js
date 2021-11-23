class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new this(``, null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    this.age = newAge;
    if (this.age >= 25) {
      this.requestNewPhoto();
      return newAge;
    } else if (newAge > 0) {
      return newAge;
    } else {
      return false;
    }
  }
}
//test data
const user1 = new User(`John`, 34);
const user2 = new User(`Tom`, 3);
const user3 = new User(`Tamara`, 54);
