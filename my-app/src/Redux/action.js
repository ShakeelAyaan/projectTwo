
import {SER} from './actionType'


// export const action =  (type,payload ) => ({ type,payload });
export const FetchAction =  (type,payload ) => ({ type,payload });
export const fouraction = (type, payload) => ({ type, payload });

export const actionTwo = (data) => {
    return{
        type: SER,
        payload: { data }
    }
}


