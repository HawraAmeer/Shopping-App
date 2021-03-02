import * as types from "./types";
import instance from "./instance";

export const fetchShops = () => async (dispatch) => {
  try {
    const res = await instance.get("/shops");
    dispatch({
      type: types.FETCH_SHOPS,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addShop = (newShop) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newShop) formData.append(key, newShop[key]);
    const res = await instance.post("/shops", formData);
    dispatch({
      type: types.ADD_SHOP,
      payload: { newShop: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
