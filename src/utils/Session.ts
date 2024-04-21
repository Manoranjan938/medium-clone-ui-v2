const storeInSession = (key: string, value: string) => {
  return sessionStorage.setItem(key, value);
};

const lookIntoSession = (key: string) => {
  return sessionStorage.getItem(key);
};

const deleteFromSession = (key: string) => {
  return sessionStorage.removeItem(key);
};

const logoutUser = () => {
  sessionStorage.clear();
};

export { deleteFromSession, logoutUser, lookIntoSession, storeInSession };
