import { Box, Divider, } from '@mui/material'
import Carousel   from 'react-multi-carousel'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { useEffect, useState , useMemo  } from 'react' 
import { products } from './FlipkartData'
// import { NavbarPartOne } from './NavbarPartOne'
// import ReducerTwo from '../../Redux/ReducerTwo'
// import { actionTwo } from '../../Redux/action'
// import { SER } from '../../Redux/actionType'
import  './CSS/CallapiProductTwo.css'
const CallapiProductTwo = () => {
const [state, setstate] = useState(products)
const [search, setsearch] = useState(products)
// const dispatch = useDispatch()
const { valueset } = useSelector(state => state.ReducerTwo)

  const checkout = () => {
      return setstate(
        search.filter(f => f.title.shortTitle.toLowerCase().includes(valueset.toLowerCase().trim()))
        &&
        search.filter(f => f.description.toLowerCase().includes(valueset.toLowerCase().trim()))
      )
        }
  useEffect(() => {
   checkout()
}, [ valueset])

  
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min:1200 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 901, min: 678 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2
  }
  
}


  
return (
  <Box  >
    <Divider  sx={{ mt:'29px'}} />
  <Carousel 
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      arrows={false}
      className='callc'
  >
  {
    state.map((product , id )=>{
      return(
        <Link style={{textDecoration:"none"}}  className='call' to={`Display/${product.id}`} key={id}  >
          <Box className='callChild' >
          <img src={product.url} style={{width:'140px'}} alt='product'/>
      <p style={{color:'inharit',fontWeight:'600'}}>{product.title.shortTitle}</p>
          <p style={{color:"green",fontWeight:'600'}}>{product.discount}</p>
          <p style={{color:"lightsalmon",fontWeight:'600',fontSize:'12px',marginBottom:'8px'}}>{product.tagline}</p>
          </Box>
    </Link>
        )})}
      </Carousel>
      </Box>
  )
}

export default CallapiProductTwo

