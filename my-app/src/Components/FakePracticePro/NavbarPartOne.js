import styled from '@emotion/styled'
import { Box, InputBase, TextField, Toolbar, Typography,Card,Grid,CardMedia } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { border } from '@mui/system';
import { products } from './FlipkartData';

 const NavbarPartOne = () => {
  const [state, setstate] = useState(products)
   const [search, setsearch] = useState(products)
   
  const Icon =styled(SearchIcon)`
  color:Blue;
  position:relative;
  top:-33px;
  left:35rem;
  font-size:31px;
    `
 
  // const box = {
  //   width:'800px',
  //   backgroundColor:"#FFFf",
  //   position:'relative',
  //     left:'140px',
  //     height:'38px',
  
  // }
  const text={
    width:'600px',
    height:"24px",
   backgroundColor:'#FFFFF',
   width:'600px',
   paddingBottom:'-193px',
   border:"2px solid white",
   height:'35px',

  }
  const IncludeValue = (e) => {
    
    setstate(search.filter(
      (data) =>
    data.title.shortTitle.toLowerCase()
          .includes(e.target.value.toLowerCase().trim()) ||
        data.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase().trim())
    )
 
    )
   
  }

  
  
  return (
    <div>
  <Box  >
        <input type={'text'} size='small' onChange={IncludeValue}/ >
          <Icon />
        
  </Box>
       </div>
  )
}
export {NavbarPartOne }