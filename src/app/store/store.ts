import {Action} from "@ngrx/store";

export interface StoreInterface {
  counter: Counter;
}

interface Counter {
  n:number;
}


let initialState = {
  n:0
}
// reducer
export function counterReducer(state = initialState, action: Action){

  switch (action.type){
    case 'increment':
      return {
        n:state.n + 1
      }
    case 'decrement':
      return {
        n:state.n - 1
      }
    default :
      return state;
  }
}
