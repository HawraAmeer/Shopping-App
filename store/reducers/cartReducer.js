import * as types from "../actions/types";

const initialState = {
  items: [
    {
      id: 2,
      quantity: 1,
    },
    {
      id: 3,
      quantity: 2,
    },
  ],
  //   loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const newItem = action.payload;
      const foundProduct = state.items.find((item) => item.id === newItem.id);
      if (foundProduct) {
        foundProduct.quantity += newItem.quantity;
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === foundProduct.id ? foundProduct : item
          ),
        };
      } else
        return {
          ...state,
          items: [...state.items, action.payload],
        };

    case types.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case types.CHECKOUT:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default reducer;
