const user = {
  firstName: "Tomas",
  lastName: 'Jonson',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  },
};
