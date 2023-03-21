import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { Box, Button, Card, Divider, Grid, Typography } from '@mui/material'
import Carousel   from 'react-multi-carousel'
import { products } from './FlipkartData'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchAction } from './Redux/action'
import { fake } from './FLIPAKRTpRODUCTS/fakestoreai'
import './CSS/callapiProductFour.css'
export const CallapiProductFour = () => {
  const { valueset } = useSelector(state => state.ReducerTwo)
  
  const [state, setstate] = useState(fake)
  const [stateTwo, setstateTwo] = useState(fake)

const dispatch = useDispatch()
useEffect(() => {
  dispatch(FetchAction('DATA', {fake}))
 },[stateTwo]) 
  
  useEffect(() => {
      setstate(
        stateTwo.filter(f => f.title.toLowerCase().includes(valueset.toLowerCase().trim()))
        ||
        stateTwo.filter(f => f.description.toLowerCase().includes(valueset.toLowerCase().trim())))
    
},[valueset])
  

   
 
  return (
   
    
      <Box className='contain'>
      {
      
    state.map((product)=>{

      return (
        <Link style={{textDecoration:'none'}} className='class' to={`Displayfetch/${product.id}`}>
          <Typography className='image' component={'img'} style={{ width: '160px',height:"180px" }} src={product.image} alt='img' />
          <p style={{color:'purple',fontWeight:'600'}}>{product.title}</p>
            <p style={{color:"green",fontWeight:'600'}}>Rs-{product.price}/-</p>
        </Link>
            

      )
    })
  

      }
            
      </Box>

      


  )
}
