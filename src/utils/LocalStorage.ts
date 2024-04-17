const storeInLocalStorage = (key: string, value: string) => {
  console.log(key, value);
  localStorage.setItem(key, value);
};

const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

export {
  storeInLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  clearStorage,
};
