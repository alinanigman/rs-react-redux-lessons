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
    // cases
    default:
      return state;
  }
};
