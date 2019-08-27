// import * as React from 'react';
import * as actionTypes from './actionTypes'


// Action creator to create an item in the list
export const addItemToGroceryList = (data) => {
    return {  
        type: actionTypes.ADD_ITEM_TO_LIST,
        payload: data,
    }
}

// Action creator to remove an item from the list
export const removeItemToGroceryList = (data) => {
    return {  
        type: actionTypes.REMOVE_ITEM_FROM_LIST,
        payload: data,
    }
}

// Action creator to update an item in the list
export const updateDescriptionOfItem = (item) => {
    return {  
        type: actionTypes.UPDATE_ITEM_IN_LIST,
        item,
    }
}