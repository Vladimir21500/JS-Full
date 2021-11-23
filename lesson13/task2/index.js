function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text) {
    sender = text;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messenger1 = createMessenger();

messenger1.sendMessage('Bob');

const messenger2 = createMessenger();

messenger2.sendMessage('Tom');

messenger2.setMessage('Hello');

messenger2.sendMessage('Tom');
messenger1.sendMessage('Bob');

messenger2.setSender('pochta');

messenger2.sendMessage('Tom');
messenger1.sendMessage('Bob');

messenger1.setMessage('buy');

messenger2.sendMessage('Tom');
messenger1.sendMessage('Bob');
