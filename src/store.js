import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer, productsReducer } from "./reducers";
const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});
export const store = createStore(reducer, applyMiddleware(thunk));
