
import { createStore } from 'redux';
const store = createStore(reducer);

function reducer(state = { bank: 1 }, action) {
  if (action.type === 'increment') {
    return { bank: state.bank+1 };
  }
  if (action.type === 'incrementByAmount') {
    return { bank: state.bank + action.payload };
  }

  return state;
}



// dispatches an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'incrementByAmount' , payload:4  });
// checks global state
console.log(store.getState());