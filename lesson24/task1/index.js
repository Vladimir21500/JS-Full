localStorage.clear();
localStorage.setItem(`hobbies`, JSON.stringify({ name: `Tom` }));
localStorage.setItem(`name`, JSON.stringify(`Tom`));
localStorage.setItem(`age`, JSON.stringify(17));
localStorage.setItem(`isStudent`, JSON.stringify(true));
localStorage.setItem(`car`, JSON.stringify(null));

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }

    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};
