import React from 'react'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from 'react-router-dom'
const AddToCardDisplya = ({ product ,Fproduct }) => {
    const navigate= useNavigate()
  return (
    <div style={{ textAlign: 'center', alignItems: 'center', display: "flex", width: "100vw" }}>
    <ArrowBackIcon sx={{ float: 'right',position :"sticky",top:'3rem' }} onClick={navigate(()=>-1)}/>

      {
          <div style={{width:'100vw'}}>
                  <div>
                      <img src={'noproduct.jpg'} style={{ width: '100px', height: '100px', borderRadius: "80px" }} />
          <h1>product is Empty</h1>
                      
            <Button onClick={() => navigate('/')} sx={{ fontSize: '18px' }}>get product</Button></div>
      </div>
          }
      </div>
  )
}

export default AddToCardDisplya