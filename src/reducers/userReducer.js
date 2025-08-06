export const initialUserState = {
  name: "John Doe",
  age: 23,
};

export const userReducer = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREASE_AGE":
      return {
        ...state,
        age: state.age + payload,
      };
    case "RESET_AGE":
      return {
        ...state,
        age: initialUserState.age,
      };
    default:
      return state;
  }
};
