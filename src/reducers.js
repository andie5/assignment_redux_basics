
import { combineReducers } from 'redux';
import {ADD_ITEM_TO_LIST, REMOVE_ITEM_TO_LIST} from './actionTypes'

const groceryList = (state = [], action) => {
    switch(action.type){
        case ADD_ITEM_TO_LIST:
            return [...state , action.payload];
        case REMOVE_ITEM_TO_LIST:
            return state.filter((item,i)=>i!==action.payload)
        default:
            return state;
    }
};

// const peopleInitialState = [
//     {
//         id: 123,
//         name: 'Joe',
//         age: 33,
//         hobbies: ['painting','dancing']
//     },
// ]
// const peopleReducer = (state = peopleInitialState, action) => {
//     switch(action.type){
//         case ADD_HOBBY: {
//             // expected: action.id
//             // expected: action.hobby -- eg. 'walking'
//             return state.map(person => {
//                 if(person.id !== action.id) return person; // <-- returned by reference, not cloned, we don't need to clone it if we don't want to change it
//                 return {...person,
//                     hobbies: [...person.hobbies, action.hobby]
//                 }
//             })
//         }
        
//         default:
//             return state;
//     }
// }

export const reducers = combineReducers({
  groceries: groceryList,
}); 

