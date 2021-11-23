const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'J@server.com' },
    { name: 'Tom', age: 17, email: 'T@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
