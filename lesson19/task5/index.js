/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(arrUsers) {
    this._users = Object.freeze(arrUsers);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((el) => el._name);
  }

  getUserIds() {
    return this._users.map((el) => el._id);
  }

  getUserNameById(id) {
    return this._users.find((el) => el._id === `${id}`)._name;
  }
}

// examples
const user = new User(`1`, `Tom`, `session-id`);

// получить свойства можем
console.log(user.id); // ===> `1`
console.log(user.name); // ===> `Tom`
console.log(user.sessionId); // ===> `session-id`

// но изменить эти свойства нельзя
user.name = `Bob`; // пытаемся изменить старое значение
console.log(user.name); // ===> `Tom` - но изменение проигнорировано, так как setter отсутствует

const user1 = new User(`1`, `Tom`, `session-id`);
const user2 = new User(`2`, `Bob`, `session-id`);
const user3 = new User(`3`, `Ann`, `session-id`);
const user4 = new User(`4`, `Kon`, `session-id`);

const repos1 = new UserRepository([user1, user2, user3, user4]);
//test
/* function testFunction(arr, id) {
  let names = [];

  arr.forEach((user) => {
    for (let key in user) {
      if (key === `id` && user[key] === id) {
        names.push(user);
      }
    }
  });
  return names;
}

const arr = [
  { id: 1, firstName: `Ivan` },
  { id: 2, firstName: `mar` },
  { id: 3, firstName: `van` },
];

let names = testFunction(arr, 2);
 */
