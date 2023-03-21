import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { Box, Button, Card, Typography } from '@mui/material'
export const CallapiProduct = () => {
    const [state, setstate] = useState([])
const Fetching=()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setstate(res.data))
}
useEffect(() => {
    Fetching()
}, [state])

  return (
    <div style={{marginTop:"100px" ,display:'flex',flexWrap:"wrap",textAlign:'center'}}>

{

        state.map((e)=>{
            return(

                <Card  sx={{width:'250px',m:'13px'}}>
                <Typography component={'img'}  sx={{width:"250px",height:"300px"}}src={e.image} />
                <Typography variant='h6'>{e.id}</Typography>
                <Typography variant='h6'>{`$${e.price}`}</Typography>
    <Button variant='outlined'>Add to cart</Button>
                     
                </Card>
            )

        })
    }
    </div>
  )
}
//