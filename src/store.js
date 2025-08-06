import { createStore, combineReducers } from "redux";
import { userReducer, productsReducer } from "./reducers";
const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});
export const store = createStore(reducer);
