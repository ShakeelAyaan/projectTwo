


import {Navigate, redirect, Route,Routes, useNavigate} from 'react-router-dom'
import { Home } from './FakePracticePro/Home';
import  NewNavbar  from './FakePracticePro/NewNavbar';
import Footer from './FakePracticePro/Footer'
import AddToCard from './FakePracticePro/AddToCard';
import { Display } from './FakePracticePro/Display';
import { Divider } from '@mui/material';
import './FakePracticePro/CSS/App.css'
import Login from './FakePracticePro/Pojects/Login';
import SingIN from './FakePracticePro/Pojects/SingIN';
import { useState } from 'react';
import DisplayFetch from './FakePracticePro/Pojects/DisplayFetch';
import Buynow from './Buynow';
import { AddToCardApi } from './AddToCardApi';
import AddToCardDisplya from './FakePracticePro/AddToCardDisplya';

const App = () => {
  const Navigate = useNavigate()
 
  function Science() {
     alert('page Not here go back')
   return(<p>{Navigate('/') }</p>)
  }   
  return (
    <div className='app'>
      
                   <NewNavbar />
        <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Display/:id' element={<Display />} />
                <Route path='/Displayfetch/:id' element={<DisplayFetch />} />
                <Route path='/Addtocard' element={<AddToCard />} />
                <Route path='/Addtocardapi' element={<AddToCardApi/>} />
                <Route path ='/Login' element={<Login  />}/>
                <Route path='Login/SingIN' element={<SingIN />} />
        <Route path='Buynow' element={<Buynow />} />
        <Route path='AddToCardDisplya' element={<AddToCardDisplya />} />
        <Route  path='*' element={<Science />}/>
        </Routes>
          <Divider sx={{ marginTop: "9px", padding: "9px" }} />
          <Footer />
      </div>
      
  )}

export default App;

 

 // <AddToCart />
        // <NewSaveItem />
        // <Details1/>
        // <AddToCart2/>
        // <Tokenrout/>

// <ResponsiveAppBar />
// <Body />
// <Service />
// <Details />
// <Experince />
// <Skills/>
// <Message />
// <Footer/>




//
// 





// import Foooter from "./PRACTICE/Footer";
// import Navbar1 from "./PRACTICE/Navbar";
// import NewSaveItem from "./PRACTICE/AD";
// import AddToCart from "./PRACTICE/AddTocard"
// import CategoryWiseProducts from "./PRACTICE/CategoryWiseProducts";
// import AddToCart2 from "./PRACTICE/AddToCart2";
// import AllRoute from "./PRACTICE/AllRoute";
// import Tokenrout from "./PRACTICE/Token";
// import Details1 from "./PRACTICE/Details1";

// <Navbar/>
           

// <Footer/>
         //   <ResponsiveAppBar /> 
        //     <Home /> 
        //     <Service /> 
        //     <Details />
        //     <Experince />
        //     <Project />
        //     <Message />
        //     <Footer/>
        //     <Bottom/>