import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import checkOutReducer from "./checkOutReducer";
import fetchReducer from "./fetchReducer";

const rootReducer = combineReducers({
  cartReducer,
  checkOutReducer,
  fetchReducer
});
export default rootReducer;
