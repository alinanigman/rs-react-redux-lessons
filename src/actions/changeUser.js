const fetchUserDataMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Bob Smith",
        age: 30,
      });
    }, 1500);
  });
};
export const changeUser = () => (dispatch) =>
  fetchUserDataMock().then((userData) => {
    console.log("Fetched user data:", userData);
    dispatch({
      type: "CHANGE_USER",
      payload: userData,
    });
  });
