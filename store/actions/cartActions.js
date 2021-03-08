import * as types from "./types";
import instance from "./instance";

export const addItem = (newItem) => {
  return {
    type: types.ADD_ITEM,
    payload: newItem,
  };
};

export const deleteItem = (itemId) => {
  return {
    type: types.DELETE_ITEM,
    payload: itemId,
  };
};

export const checkout = (items) => async (dispatch) => {
  try {
    await instance.post("/checkout", items);
    dispatch({
      type: types.CHECKOUT,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
