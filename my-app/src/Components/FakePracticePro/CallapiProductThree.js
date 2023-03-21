import { products } from './FlipkartData'
import { Box, Button,  Divider, Slider } from '@mui/material'
import styled from '@emotion/styled'
import Carousel   from 'react-multi-carousel'
import {Link,useParams} from   'react-router-dom'
const CallapiProductThree = () => {
   const {id}=useParams();


    const responsive={
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
  return (
    <Box>
    <Box>
   Offer details    <Button sx={{float:"right",backgroundColor:'#fF2F',color:'#ffff2'}}>See-More</Button>
      </Box>
   <Divider sx={{mt:'19px'}}/>
 
    <Carousel 
    responsive={responsive}
    infinite={true}
    keyBoardControl={true}
    >
    {
      

      products.map((product)=>{
        return(
      <Link to={`Display/${product.id}`}>
        <Box>
      <p>{product.id}</p>
      <img src={product.url} style={{width:'140px'}} alt='product'/>
      <p style={{color:'inharit',fontWeight:'600'}}>{product.title.shortTitle}</p>
      <p style={{color:"green",fontWeight:'600'}}>{product.discount}</p>
      <p style={{color:"lightsalmon",fontWeight:'600',fontSize:'12px'}}>{product.tagline}</p>
      </Box>
      </Link>

        )
    })
  
    }
      </Carousel>
    <Divider marginTop='10px'/>

      </Box>

  )
}

export default CallapiProductThree


