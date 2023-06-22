import { Box, Typography,Button,  Rating } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
// import CallapiProductTwo from './CallapiProductTwo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
// import axios from 'axios';
import { products } from './FlipkartData';
import { useDispatch } from 'react-redux';
import { PRODUCT } from "../../Redux/actionType"
import './CSS/display.css'
export const Display = () => {
        
    
  const [quantity, setquantity] = useState(1)
  const Navigate = useNavigate();
  const { id } = useParams()
  const dispatch =useDispatch()
 


  const newproduct = products.find(r => (r.id===parseInt(id)))
  return (
    <Box className='mainContainer' >
      <Box className='alldata'>
    <ArrowBackIcon  className='arrow' variant="contained"  onClick={()=>Navigate(-1)} />
             <Typography className='image'>
          <Typography component={'img'} src={newproduct.url} />
          <Typography >
          <Rating />
              <br/>
             <Button  variant='outlined' onClick={() => dispatch({ type: PRODUCT, payload: { newproduct, quantity } }) } >Add to Cart</Button>
          <Button variant='outlined'onClick={()=>Navigate('/Buynow')}>Buy now</Button>
           </Typography>
        </Typography>
        
               <Box className='desc'>
               <p>{newproduct.description}</p>
              <p>{newproduct.tagline}</p>
              <p>{newproduct.price.discount}</p>
              <p>{newproduct.title.shortTitle}</p>
                 </Box>
            </Box>
              
    
    </Box>
          

      )
    }
    



    













   