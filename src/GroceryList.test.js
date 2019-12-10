import React from "react";
import ReactDOM from "react-dom";
import GroceryList from "./GroceryList";
// import configureMockStore from "redux-mock-store";
import configureStore from "redux-mock-store";
import { addItemToGroceryList } from "./actions";
import { ADD_ITEM_TO_LIST } from "./actionTypes";
// const mockStore = configureMockStore([]);

// Investigte why store.getState does not work with this module or find alternative
// Use example in github repo using real store

// Keep writing new reducers and tests

const mockStore = configureStore();
const store = mockStore();

xdescribe("grocery store tests", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  // [{}, {}, {}]

  it("adds item to grocery list", done => {
    // const store = mockStore({ groceries: [] });

    // console.log("store: ", store.getState());

    const payload = {
      id: 1,
      name: "test item",
      description: "this is a test description",
      purchased: true
    };

    const groceries = {}; // initial state of the store
    const action = {
      type: ADD_ITEM_TO_LIST,
      payload
    };
    const expectedActions = [action];

    const store = mockStore(groceries, expectedActions, done);
    console.log("store after mockstore: ", store);
    store.dispatch(action);

    // store.dispatch({
    //   type: ADD_ITEM_TO_LIST,
    //   payload
    // });
    console.log(store.getState());
    expect(store.getState().groceries[0]).toBe(true);
  });
});

describe("2nd try", () => {
  test("Dispatches the correct action and payload", () => {
    const payload = {
      id: 1,
      name: "test item",
      description: "this is a test description",
      purchased: true
    };
    const expectedActions = [
      {
        payload,
        type: ADD_ITEM_TO_LIST
      }
    ];

    store.dispatch(addItemToGroceryList(payload));
    expect(store.getActions()).toEqual(expectedActions);
    console.log("store.getActions(): ", store.getActions(addItemToGroceryList));
    // expect(store.getState().groceries[0]).toBe(true);
  });
});
