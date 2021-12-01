const asyncCalculator = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 3000);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = value ** 2;
            console.log(`Squared Value: ${result}`);
            resolve(result);
          }, 3000);
        }),
    )
    .then(value => {
      const result = value * 2;
      console.log(`Doubled value: ${result}`);
    });
asyncCalculator(4).then(value => console.log(value));
