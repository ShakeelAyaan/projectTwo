import { useEffect } from "react";
import { products } from "../FlipkartData";
import { action, Valueactiontwo } from "./action";
import { REMOVEITEM, PRODUCT, INCREAMENT, DECREAMENT } from "./actionType";

 const Initialvalue = {
  qunt:0,
  price:0,
   product:[],
  
}

const Reducer = (state = Initialvalue, action) => {
             
  
   
  let findproduct;
  let index;
  switch (action.type) {
    case PRODUCT:
      const {  newproduct , quantity  } = action.payload
      // const { price, qunt, product } = state
      const exite = state.product.find(x => x.id === newproduct.id)
      if (exite) {
        return state
      } else {
        newproduct.quantity = 1;
        const newQun = state.qunt + newproduct.quantity 
        const newPrice = state.price + newproduct.price.mrp * newproduct.quantity
        return {
          ...state,
          product: [...state.product, newproduct],
          price: newPrice,
          qunt: newQun
        };
      } 
    //remove    
    case REMOVEITEM:
      // const { id } = payload;
      findproduct = state.product.find(pr => pr.id === action.payload)
      const filtered = state.product.filter(pr => pr.id !== action.payload)
      return {
        ...state,
        product: filtered,
        price: state.price - findproduct.price.mrp * findproduct.quantity,
        qunt: state.qunt - findproduct.quantity ,
      }
    
    //Increament 
    case INCREAMENT:
      // const { id2 } = payload
      findproduct = state.product.find(pr => pr.id === action.payload)
      index = state.product.findIndex(pr => pr.id === action.payload)
         findproduct.quantity += 1;
      state.product[index] = findproduct;

      return {
        ...state,
        price: state.price + findproduct.price.mrp, qunt: state.qunt + 1
      }
    
    //decreament
    case DECREAMENT:
      // const {id3}= payload
        findproduct = state.product.find(pr => pr.id === action.payload)
        index = state.product.findIndex(pr => pr.id === action.payload)
      if (findproduct.quantity > 1) {
        findproduct.quantity -= 1;
        state.product[index] = findproduct;
        return {
          ...state,
            price: state.price - findproduct.price.mrp , qunt:state.qunt - 1
        }
      } else {
        return state;
      }
      break;
    default: return state
  }

 
 
 
}
export {Reducer}


      