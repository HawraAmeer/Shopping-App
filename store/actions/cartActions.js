import * as types from "./types";

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

export const checkout = () => ({
  type: types.CHECKOUT,
});
