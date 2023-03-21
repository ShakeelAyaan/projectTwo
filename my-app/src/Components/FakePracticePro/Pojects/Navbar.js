import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Button } from '@mui/material';
import NavbarPart1 from '../Pojects/NavbarPart1'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import NavBarBottom from './NavBarBottom';
// import { products } from '../FakePracticePro/FlipkartData';
import { products } from '../FlipkartData';
import '../CSS/navbar.css'
import { actionTwo } from '../Redux/action';
import { useDispatch } from 'react-redux';

const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchAppBar() {
const dispatch= useDispatch()

const [navstate, setnavstate] = useState(1)
const changeInputvalue=(value)=>{
 dispatch(actionTwo({value}))
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navbarcss'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"st
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'},borderRightColor:'red',ml:8 }}
          >
            
    <Link to=''>Flipkart</Link>
            <ShoppingCartCheckoutIcon/>
          </Typography>
          <Search sx={{position :'relative',right:'300px'}} >
          <SearchIconWrapper >
          <SearchIcon />
          </SearchIconWrapper>
  {/*<NavbarPart1 changeInputvalue={()=>changeInputvalue} />*/}
          </Search>

          <Box component={'div'} sx={{position :'relative',right:'260px'}} >
          <Link to='/login'>Login</Link>
          </Box>

          <Typography component={'h3'} sx={{position:'relative',right:'200px',color:'white'}}>
          <Link to='/register'>Register</Link>
          </Typography>
          <Typography component={'h3'} sx={{position:'relative',right:'150px',color:'white'}}>
          <Link to='/Navbarpart1'>Categories</Link>
          </Typography>
          <Typography component={'h3'} sx={{position:'relative',right:'100px',color:'white'}}>
           service
          </Typography>

        </Toolbar>
      </AppBar>
      <Box>
      {
        <div>{navstate}</div>
      }
      </Box>
    </Box>

  );
}


