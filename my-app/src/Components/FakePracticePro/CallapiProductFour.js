import React, { useState ,useEffect, useMemo} from 'react'
import {   Typography , Box, keyframes } from '@mui/material'
// import Carousel   from 'react-multi-carousel'
// import { products } from './FlipkartData'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchAction } from '../../Redux/action'
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
 
  
  let chekout = () => {
      return setstate(
        stateTwo.filter(f => f.title.toLowerCase().includes(valueset))
        &&
        stateTwo.filter(f => f.description.toLowerCase().includes(valueset))
      )
    }
  useEffect(() => {
    chekout()
    
  }, [valueset])

  // if (valueset === "") {
  //   return setstate(prev => {
  //     return [...prev, valueset]
  //   })
  
return(
      <Box className='contain'>
        {
        state.map((product , id)=>{
        return (
          <Link style={{textDecoration:'none'}} className='class' to={`Displayfetch/${product.id}`} key={id}>
          <Typography className='image' component={'img'} style={{ width: '160px',height:"180px" }} src={product.image} alt='img' />
          <p style={{color:'purple',fontWeight:'600'}}>{product.title}</p>
          <p style={{color:"green",fontWeight:'600'}}>Rs-{product.price}/-</p>
          </Link>
        )})}
      </Box>)}
