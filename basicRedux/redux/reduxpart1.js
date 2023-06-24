
import { createStore } from 'redux';
const store = createStore(reducer);

function reducer(state = { bank: 1 }, action) {
  if (action.type === 'increment') {
    return { bank: state.bank+1 };
  }

  return state;
}



// dispatches an action
store.dispatch({ type: 'increment' });

// checks global state
console.log(store.getState());