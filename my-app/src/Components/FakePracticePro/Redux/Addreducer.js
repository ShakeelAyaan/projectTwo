// import axios from "axios";
// import { useParams } from "react-router-dom"

import { action } from "./action";
import { DECREAMENT, INCREAMENT } from "./actionType";

const Initialstate = {
    Fprice: 0,
    Fquantity:0,
    Fproduct:[]
}
export const FourthReducer = (state = Initialstate, fouraction) => {
    switch (fouraction.type) {
        case "ADDTO":
            // const { Fprice, Fproduct, Fquantity } = state
            const { newproduct } = fouraction.payload
            console.log(newproduct.quantity)
            const exite = state.Fproduct.find((pr) => pr.id === newproduct.id)
            if (exite) {
                return state
            } else {
                newproduct.quantity = 1
                const newquantity = state.Fquantity + newproduct.quantity
                const newprice = state.Fprice + newproduct.price * newproduct.quantity
                return {
                    ...state,
                    Fprice: newprice,
                    Fquantity: newquantity,
                    Fproduct: [...state.Fproduct, newproduct]
                }
            }
            break;
        
        case 'REMOVECARD':
            const { id } = fouraction.payload 
            const  delteproduct = state.Fproduct.filter(f =>f.id !== id )
            const filtered = state.Fproduct.find(fr => fr.id === id)
             console.log(filtered.quantity)
                return {
                    ...state,
                    Fproduct: delteproduct,
                    Fquantity: state.Fquantity - filtered.quantity,
                    Fprice: state.Fprice - filtered.price * filtered.quantity
            }
            break;
        
        case 'INCREAMENTWO':
            const { id2 } = fouraction.payload;
            const  decreamentprouct = state.Fproduct.find(f => f.id === id2)
            const dindex = state.Fproduct.findIndex(f => f.id === id2)
             decreamentprouct.quantity += 1;
          state.Fproduct[dindex] = decreamentprouct;
            return {
                ...state,
                Fprice: state.Fprice + decreamentprouct.price ,
                Fquantity: state.Fquantity + 1
            }
            break;
        
            case 'DECREAMENTWO':
                const { id3 } = fouraction.payload;
              const   increamentprouct = state.Fproduct.find(f => f.id === id3)
                const iindex = state.Fproduct.findIndex(f => f.id === id3)
                if (  increamentprouct.quantity > 1) {
              increamentprouct.quantity -= 1;
              state.Fproduct[iindex] = increamentprouct;
                return {
                    ...state,
                    Fprice: state.Fprice - increamentprouct.price ,
                    Fquantity : state.Fquantity - 1
                }
            }
            else {
                return state;
        }
            break;
        
        default  : return state     
        
    }
}