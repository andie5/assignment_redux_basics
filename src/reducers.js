
import { combineReducers } from 'redux';
import {ADD_ITEM_TO_LIST, REMOVE_ITEM_FROM_LIST, UPDATE_ITEM_IN_LIST} from './actionTypes'

// Reducer to as a single text item to an array or remove it

// why d we need to initialise state each time in the parameters
const groceries = (state = [], action) => {
    switch(action.type){
        case ADD_ITEM_TO_LIST:
            return [...state , action.payload];
        case REMOVE_ITEM_FROM_LIST:
            console.log("action.payload: ", action.payload)
            
            // Find the whole item to delete in the collection
            const groceryItemObj = state.find(item => item.name === action.payload);

            // Delete the item using the id
            // wjy was passing the id not enough and the whole object from the selection had to be retrieved
            // return state.filter((item) => item.id!==action.id)
            return state.filter((item) => item.id!==groceryItemObj.id)

        case UPDATE_ITEM_IN_LIST:

            console.log("action.payload: ", action.payload)
            // Find the whole item to delete in the collection
            // let groceryItemToUpdate = state.find(item => item.name === action);

            // console.log("groceryItemToUpdate: ", groceryItemToUpdate)
        
                return state.map(item => {
                    console.log("item.id is: ", item.id, " and action.id is: ", action.payload.id)
                    if (item.id === parseInt(action.payload.id)){
                        console.log("found match: ")
                        console.log("item to update: " ,{...item, description: action.payload.newDescription})
                        return {...item, description: action.payload.newDescription}
                    }
                    else {
                        return item
                    }
                })
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
  groceries,
}); 

