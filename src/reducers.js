import { combineReducers } from "redux";
import {
  ADD_ITEM_TO_LIST,
  REMOVE_ITEM_FROM_LIST,
  UPDATE_ITEM_IN_LIST
} from "./actionTypes";

// Reducer to as a single text item to an array or remove it
const groceries = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_LIST:
      return [...state, action.payload];
    case REMOVE_ITEM_FROM_LIST:
      // Find the whole item to delete in the collection
      const groceryItemObj = state.find(item => item.name === action.payload);

      // Delete the item using the id
      // wjy was passing the id not enough and the whole object from the selection had to be retrieved
      // return state.filter((item) => item.id!==action.id)
      return state.filter(item => item.id !== groceryItemObj.id);

    case UPDATE_ITEM_IN_LIST:
      // Find the whole item to delete in the collection
      return state.map(item => {
        if (item.id === parseInt(action.payload.id)) {
          return { ...item, description: action.payload.newDescription };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export const reducers = combineReducers({
  groceries
});
