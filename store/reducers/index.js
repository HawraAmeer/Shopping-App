import { combineReducers } from "redux";

import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  productReducer, // === productReducer: productReducer,
  shopReducer, // === shopReducer: shopReducer,
});

export default rootReducer;
