
import { Button, Divider } from '@mui/material'
import React from 'react'
const AddtoCardDisplay2 = ({ price, Fprice, qunt, Fquantity }) => {
  let total_price = price + Fprice;
  let total_quantity = qunt + Fquantity;

  return (
      <div>
      <div style={{  display:'flex',justifyContent:'center',  width: "100vw", background: "gold", alignItems:'center', textAlign: "center" }}>
      <div style={{ width: '90%',alignItems:'center',textAlign:'center',height: "auto",background:"gold" }}>
              <h3>Summary</h3>
            <p style={{background:"white"}}>Total(item) {total_quantity }</p> <Divider/>
            <p style={{background:"white"}}>TotalPrice { total_price }</p> 
            <Button variant='contained' sx={{marginTop:'5px', marginBottom: "9px", background: "orange" }}>checkout</Button>
        </div>
    </div> 
      </div>
  )
}

export default AddtoCardDisplay2