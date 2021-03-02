// ACTION TYPES
import * as types from "./types";
import instance from "./instance";

// ACTIONS

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await instance.get("/donuts");
    dispatch({
      type: types.FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addProduct = (newProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newProduct) formData.append(key, newProduct[key]);
    const res = await instance.post(
      `/shops/${newProduct.shopId}/donuts`,
      formData
    );
    dispatch({
      type: types.ADD_PRODUCT,
      payload: { newProduct: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await instance.delete(`/donuts/${productId}`);
    dispatch({
      type: types.DELETE_PRODUCT,
      payload: { productId },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const updateProduct = (updatedProduct) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in updatedProduct) formData.append(key, updatedProduct[key]);
    const res = await instance.put(`/donuts/${updatedProduct.id}`, formData);
    dispatch({
      type: types.UPDATE_PRODUCT,
      payload: { updatedProduct: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
