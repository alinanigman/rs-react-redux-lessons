export const initialState = {
  user: {
    name: "John Doe",
    age: 23,
  },
  products: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREASE_AGE":
      return {
        ...state,
        user: {
          ...state.user,
          age: state.user.age + payload,
        },
      };
    case "RESET_AGE":
      return {
        ...state,
        user: {
          ...state.user,
          age: initialState.user.age,
        },
      };
    default:
      return state;
  }
};
