
import { searchscr } from "./actionType";

 
 const initalstate = {
    set:undefined,
    sear:undefined
    }
const ReducerAddToCard = (state=initalstate, SearchScreen) => {
    switch (SearchScreen.type) {
        case searchscr:
            const { setstate, search } = SearchScreen.payload
            console.log(setstate,search + 'redux')
            const {set,sear}=state
            return {
                ...state,
                set: setstate,
                sear:search
                
            }
        default :return state
    }
    
}
export default ReducerAddToCard