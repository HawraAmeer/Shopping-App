import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchShops());
store.dispatch(fetchProducts());

export default store;
