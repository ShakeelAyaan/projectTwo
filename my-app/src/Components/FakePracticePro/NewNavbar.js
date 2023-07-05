import {    Button,Typography,   List, ListItem, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';
import './CSS/navbar.css'
import { useSelector } from 'react-redux';
import { Link,  useParams } from 'react-router-dom';
import { products } from './FlipkartData';
import {  actionTwo } from '../../Redux/action';
import { useDispatch } from 'react-redux';
// import { SER } from '../../Redux/actionType'
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
  
  // const deleteSerchItem = () => {
  //   settext((pre) => {
  //     if (text.length>=1) {
  //      return pre=""
  //    }
  //   }
  //   )
  // }
      

 
    return (
      <Toolbar className='twoGrid' style={{
        display: "flex", justifyContent: "space-between"
        , background: "#0990f6", width: '100%', height: "60px",
        position: "fixed", top: "0px", zIndex: "9999" ,
      }} >
          
        <div className='leftComp'>
          
          {
            !checked?
          <MenuIcon value={!checked} className='menuIcon' sx={{ fontSize: '2.3rem' }} onClick={Menue} /> 
            :
          <CloseIcon value={checked} className='menuIcon' sx={{ fontSize: '2.3rem' }} onClick={Menue} />
        }
            
                  <Link className='flipkart' to='/'>
                    <img style={{ color: "red", width: "83px" }} src={'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'} alt='myimg' />
          </Link>
          <div className='inpIco'>
            <div className='inpChild'>
              <input type='text' className='inputText'
              value={text}
              onChange={(e) => changeInpute(e.target.value)}
              style={{ height: "33px", width: "31.25rem", border: "2px solid white" }} />
            
              { 
                text ?
               <CloseIcon className='searchIcon' />
               : <SearchIcon className='searchIcon'  />
              }
            </div>

            <div className='spd' >
            {
               
             text &&  products.filter(p => p.title.longTitle.toLowerCase().includes(text.toLowerCase().trim())).map((prs) => {
                return (
                  <Link  to={`Display/${prs.id}`} onClick={()=>displaynull(prs.title.shortTitle)} style={{textDecoration:'none' , fontStyle:"italic"}}>

              <ListItem sx={{backgroundColor:"red rgb(0 , 0 ,0 ,45px)"}}>
                      <SearchIcon sx={{ marginLeft: "1rem", gap: "8rem" }} />
                      <span style={{ color: "black", width: "" }}>{prs.title.longTitle}</span>
                    <List sx={{display:"grid" , gridTemplateRows:"auto"}}>
                    </List>
              </ListItem>
              </Link>)
            })
              }
              {
          text &&  fake.filter(pd => pd.title.toLowerCase().includes(text.trim())).map((prs) => {
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
              </div>
           
          <br/>
         
        </div>
        
        <div onClick={Menue} className={ checked ? 'childCom active': 'childCom' } >
                  <Link style={{ textDecoration: "none",marginTop:"-11px" }} to="/Login" >
                  <Button className="login" onClick={ChangeValue} variant='contained' sx={{ width:'fitContent',height:"30px", color: "white" ,mt:'9px'}} >{ login ? 'Login':'Logout'}</Button>
                  </Link>
                  <span>become a seller</span>
                  <span>more</span>
                  <Link to={'/AddToCard'}>
            <Typography className='mallIcon' sx={{ display: "flex", justifyContent: "space-evenly", position: "relative", top: "1px"}}>
                      <LocalMallIcon className={'mallchild'} sx={{ color: "white" , fontSize:'37px'}} />
                        <span style={{
                            color: "white", border: "3px solid white", 
                              fontSize:"10px",
                            borderRadius: "45px", width: '20px', height: "20px",  backgroundColor: "red",
                            position: 'relative', right: "16px", top: "-7px"
                        }}>{total_quantity}</span>
                  </Typography>
                      </Link>
        </div>
        
        </Toolbar>
                  
  )
}

export default NewNavbar