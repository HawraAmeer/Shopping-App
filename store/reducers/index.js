import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  productReducer, // === productReducer: productReducer,
  shopReducer, // === shopReducer: shopReducer,
});

export default rootReducer;
