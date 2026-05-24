const getUser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const logout = () => {
  localStorage.removeItem("user");
};

export { getUser, setUser, logout };
