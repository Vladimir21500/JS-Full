export const asyncCalculator = number =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Initial value: ${number}`);
      resolve(number);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = value ** 2;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(
      value =>
        new Promise(resolve => {
          const result = value * 2;
          console.log(`Doubled value: ${result}`);
          resolve(result);
        }),
    );
