import { Button , Box } from '@mui/material'
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
function Buynow() {
    const Navigate = useNavigate()
  return (
      <div width='100vw' style={{ marginTop: '9rem', textAlign:'center'}}>
          <Box width='100vw' style={{ display: "grid" , gridColumn:"auto auto" , alignItem:'center'}}>
              <img  style={{width:"100vw",height:"500px"}} src='https://www.primehairdepot.com/images/order_success_placed.gif' />
              <Button variant='contained' onClick={()=>Navigate('/')} >Go</Button>
          </Box>
      </div>
  )
}

export default Buynow