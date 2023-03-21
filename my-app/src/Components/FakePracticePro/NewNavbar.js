import {  Menu,toolbar, TextField, Button,Typography, Box,  List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState,useEffect } from 'react'
// import styledEngine from '@mui/styled-engine';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';
import './CSS/navbar.css'
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { products } from './FlipkartData';
import { action, actionTwo } from './Redux/action';
import { useDispatch } from 'react-redux';
import { SER } from './Redux/actionType'
import {fake} from './FLIPAKRTpRODUCTS/fakestoreai'

const NewNavbar = (props) => {
  const [checked, setchecked] = useState(false)
    const [login,setlogin] =useState(true)
    const dispatch = useDispatch();
    const [prod, setprod] = useState(products)
   const {id}=useParams()
 
  const { product  , qunt } = useSelector(state => state.Reducer)
  const {  Fquantity , Fproduct } = useSelector(state => state.FourthReducer)
  let total_quantity = qunt + Fquantity
    const {  valueset, valueser} = useSelector(state => state.ReducerTwo)
  const [text, settext] = useState()
  function changeInpute(value) {
    dispatch(actionTwo({ value }))
    settext(value)
   }
    const Menue = () => {
        setchecked(!checked)
    }
  
  const ChangeValue = () => {
      setlogin(!login)
  }
  const displaynull = (value) => {
  settext(value)
  }
  
  const deleteSerchItem = () => {
    
    settext("")
  }
  
    return (
      <toolbar   className='twoGrid' sx={{height:'100%'}}>
          
        <div className='leftComp'>
          
          {
            !checked?
          <MenuIcon value={!checked} className='menuIcon' sx={{ fontSize: '2.3rem' }} onClick={Menue} /> 
            :
          <CloseIcon value={checked} className='menuIcon' sx={{ fontSize: '2.3rem' }} onClick={Menue} />
        }
            
                  <Link className='flipkart' to='/'>
                    <img style={{ color: "red", width: "83px" }} src={'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'} />
                  </Link>
                  <Typography className='inpIco'>
            <input type='text' className='inputText'
              value={text}
              onChange={(e) => changeInpute(e.target.value)}
              
              
          
               
              style={{ height: "33px", width: "31.25rem", border: "2px solid white" }} />
            
            <div className='spd' >
              
            {
               
             text &&  products.filter(p => p.title.longTitle.toLowerCase().includes(text.toLowerCase().trim())).map((prs) => {
                return (
                  <Link  to={`Display/${prs.id}`} onClick={()=>displaynull(prs.title.shortTitle)} style={{textDecoration:'none' , fontStyle:"italic"}}>

              <ListItem sx={{backgroundColor:"red rgb(0 , 0 ,0 ,45px)"}}>
                 <SearchIcon sx={{marginLeft:"1rem",gap:"8rem"}}/><p style={{ color: "black", width: "" }}>{prs.title.longTitle}</p>
                    <List sx={{display:"grid" , gridTemplateRows:"auto"}}>
                    </List>
              </ListItem>
              </Link>)
            })
              }
              {
          text &&  fake.filter(p => p.title.toLowerCase().includes(text.toLowerCase().trim())).map((prs) => {
                  return (
                    <Link  to={`Displayfetch/${prs.id}`} style={{textDecoration:'none' , fontStyle:"italic"}} onClick={()=>displaynull(prs.title)}>
                <ListItem  sx={{backgroundColor:"red rgb(0 , 0 ,0 ,45px)"}}>
                   <SearchIcon sx={{marginLeft:"1rem",gap:"0rem"}}/><p style={{ color: "black", width: "" }}>{prs.title}</p>
                      <List sx={{display:"grid" , gridTemplateRows:"auto"}}>
                      </List>
                        
                </ListItem>
                </Link>
                )
           }) 
              }
            
              </div>
              
            
            { 
              text ?
             <CloseIcon sx={{ color: 'blue', position: 'relative', right: "2rem", top: "7px" }} onClick={deleteSerchItem} />
             : <SearchIcon sx={{ color: 'blue', position: 'relative', right: "2rem", top: "7px" }}  />
            }
              
          </Typography>
          <br/>
         
        </div>
        
        <div onClick={Menue} className={ checked ? 'childCom active': 'childCom' } >
                  <Link style={{ textDecoration: "none",marginTop:"-11px" }} to="/Login" >
                  <Button className="login" onClick={ChangeValue} variant='contained' sx={{ width:'fitContent',height:"30px", color: "white" ,mt:'9px'}} >{ login ? 'Login':'Logout'}</Button>
                  </Link>
                  <p>become a seller</p>
                  <p>more</p>
                  <Link to={'/AddToCard'}>
                  <Typography className='mallIcon' sx={{ display:"flex",justifyContent:"space-evenly",position:"relative",top:"1px",left:''}}>
                      <LocalMallIcon className={'mallchild'} sx={{ color: "white" , fontSize:'37px'}} />
                        <p style={{
                            color: "white", border: "3px solid white", 
                              fontSize:"10px",
                            borderRadius: "45px", width: '20px', height: "20px",  backgroundColor: "red",
                            position: 'relative', right: "16px", top: "-7px"
                        }}>{total_quantity}</p>
                  </Typography>
                      </Link>
        </div>
        
        </toolbar>
                  
  )
}

export default NewNavbar