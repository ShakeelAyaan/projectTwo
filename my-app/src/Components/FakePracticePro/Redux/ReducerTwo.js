
import { SER } from "./actionType"
// import { actionTwo } from "./action";
const initialstate = {
    valueset: [],
    
}

const ReducerTwo = (state=initialstate, actionTwo)=>{
    switch (actionTwo.type) {
        case SER:
            console.log(actionTwo.payload.data.value + 'reducer')
            return {
                ...state,
                valueset: actionTwo.payload.data.value
               
            }
        
        default : return state
    }
}
export default ReducerTwo;