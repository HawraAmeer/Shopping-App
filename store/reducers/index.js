import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  cartReducer,
  productReducer, // === productReducer: productReducer,
  shopReducer, // === shopReducer: shopReducer,
});

export default rootReducer;
