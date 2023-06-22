// import { FetchAction } from "./action";


const InitialState = {
    FetchData:[]
}

export const FetchReducer = (state = InitialState, { type, payload } )=> {
      
    switch (type) {
        case 'DATA':
            const { fake } = payload
            const { FetchData} = state
            return {
                ...state,
                 FetchData : fake
            }
        default : return state
      }

    
    
     

  }