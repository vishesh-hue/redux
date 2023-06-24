
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

//action creators
function incr(){
    return (
        {type: 'increment'}
    )

}
function incrByAmt(value){
    return (
        { 
          type: "incrementByAmount",
          payload: value 
        }
    )

}

// dispatch an action
store.dispatch(incr())

// antoher action
setInterval(()=>{
    store.dispatch(incrByAmt(5))}
, 2000)


// checks global state
console.log(store.getState());