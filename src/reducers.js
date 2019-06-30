
import { combineReducers } from 'redux';
import {ADD_ITEM_TO_LIST, REMOVE_ITEM_TO_LIST} from './actionTypes'


// Why do we declare the function as a constant and other times as a function
const groceryList = (state = [], action) => {
    switch(action.type){
        case ADD_ITEM_TO_LIST:
            return [...state , action.data];
        //  case REMOVE_ITEM_TO_LIST:
        //     let newList = []
        //     for(item in state){
        //         if (action.data !== item){
        //             newList.push(item)
        //         }
        //     }
        //     return newList;
        default:
            return state;
    }
};

export const reducers = combineReducers({
  groceryList,
}); 

