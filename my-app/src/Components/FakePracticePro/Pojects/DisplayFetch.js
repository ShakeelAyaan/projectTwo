
import { Button,Typography,Box , Rating} from '@mui/material'
import { useSelector , useDispatch } from 'react-redux'
import { useParams, useNavigate, Route } from 'react-router-dom'
import Buynow from '../../Buynow'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AddToCardApi } from '../../AddToCardApi'
import { fouraction } from '../Redux/action'
import { useEffect } from 'react'
import { postdata } from '../Redux/Addreducer'
import { fake } from '../FLIPAKRTpRODUCTS/fakestoreai'  
import '../CSS/displayfetch.css'
const DisplayFetch = () => {
   const dispatch = useDispatch()
   const { FetchData } = useSelector(state => state.FetchReducer)
    const navigate = useNavigate()   
     const {id} = useParams()
  const newproduct = FetchData.find(data => data.id == id)
   
     return (
       <div className='maincontainer'>
         <Box className='alldata' >
         <ArrowBackIcon  className='arrow' variant="contained"  onClick={()=>navigate(-1)} />
     
            <Typography className='image'>
               <Typography component={'img'}  className='imag' src={newproduct.image} />
      <Typography sx={{ textAlign: 'center'}}>
      <Rating />
          <br/>
         <Button sx={{ marginRight: "5px" }} variant='outlined' onClick={()=>dispatch(fouraction("ADDTO", {newproduct}))} >Add to Cart</Button>
      <Button variant='outlined' onClick={()=>navigate(` /Buynow`) }>Buy now</Button>
          </Typography>
            </Typography>
                 <Box className='desc'>
                     <h4 >{newproduct.description}</h4>
                     <h2>{newproduct.title}</h2>
            <h1>$/price{newproduct.price}</h1>
          </Box>
      </Box>
     
         
        </div>
  )
}

export default DisplayFetch

 