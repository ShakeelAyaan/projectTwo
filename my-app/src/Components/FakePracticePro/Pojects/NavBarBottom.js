import React from 'react'
import { Typography,Box } from '@mui/material'
import { navData } from '../FlipkartData'
// import { firstSlider } from './firstSlider'
// import { Link } from 'react-router-dom'
// import { Fashion } from '../FLIPAKRTpRODUCTS/Flipkart'
import '../CSS/navbarbottom.css'
import Carousel from 'react-multi-carousel'
const NavBarBottom = () => {

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };

  return (
    <Box className='component'>
    <Carousel 
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    dotListClass="custom-dot-list-style"
    keyBoardControl={true}
    slidesToSlide={1}
    showDots={false}
    arrows={false}
    
    >
{
navData.map((event ,id)=>{
      return(
      <div className='navbarbottomchild' key={id}>
          <img src={event.url} alt='imges' style={{transform:"scale(0.8)"}}/>
          <Typography style={{ position: 'relative', bottom: "23px",marginBottom:"-17px" }}>{event.text}</Typography>
      </div>
          )})}
    </Carousel>
    </Box>
  )}

export default NavBarBottom

   