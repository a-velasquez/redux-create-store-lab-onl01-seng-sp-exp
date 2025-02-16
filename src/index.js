// write your createStore function here
// Write a function called createStore that takes in a reducer function as an argument.
// The createStore function should return an object with two methods - getState, dispatch.

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
  };
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case "ADD_CANDY":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch
let store = createStore(candyReducer);
store.dispatch({ type: "@@INIT" });
