// export const ADD_TO_CART = "ADD_TO_CART";
import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

const initialState = {
  cardData: [],
};
export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cardData: action.data }];
    //case for removing item
    case REMOVE_TO_CART:
      state.pop();
      return [...state];
    default:
      return state;
  }
}
