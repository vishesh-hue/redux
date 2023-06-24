
import { createStore } from 'redux';
import  axios from 'axios'
const store = createStore(reducer);

function reducer(state = { bank: 1 }, action) {
 switch(action.type){
    case "init":{
        return{bank: action.payload}
    }
    case "increment":
        return {bank : state.bank+1};
    case "incrementByAmount":
        return{bank: state.bank + action.payload};
    default:
        return state;
 }

}

//action creators
//here is a asynch function with cant be listened by dispatch directly so we are using the middleware called thunk 
 function getUser(id){
    return async(dispatch , getState)=>{
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
   dispatch(initUser(data.amount))
    }
   
}
//this function recieves its value from the above function in data.amount
function initUser(value){
    return {type:"init" , payload:value }
}
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
//store.dispatch(incr())

// antoher action

    store.dispatch(getUser(1))

// checks global state
console.log(store.getState());
