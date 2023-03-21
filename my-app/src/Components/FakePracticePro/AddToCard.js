import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useParams, Link,useNavigate, redirect } from 'react-router-dom'
import { Typography ,Button, Divider } from '@mui/material'
import { action, fouraction, removeCartItem, Valueaction, Valueactiontwo  } from '../FakePracticePro/Redux/action'
import { DECREAMENT, INCREAMENT, REMOVEITEM } from '../FakePracticePro/Redux/actionType'
import AddToCardDisplya from './AddToCardDisplya'
import DeleteIcon from '@mui/icons-material/Delete';
import "./CSS/AddToCard.css"
import AddtoCardDisplay2 from '../AddtoCardDisplay2'
const AddToCard = () => {
  const { Fprice, Fproduct,Fquantity} = useSelector(state => state.FourthReducer)
  const { product, price, qunt } = useSelector(state => state.Reducer)
  const [quantitya, setquantitya] = useState(1)
  const dispatch=useDispatch()
  const [Remove,setRemove]=useState()

  const navigate = useNavigate()
  const { id } = useParams()

  const RemoveItem = (id) => {
    dispatch({type: REMOVEITEM, payload: id})
  }
  
  const InecreamentQunt = (id2) => {
    dispatch({type: INCREAMENT, payload: id2})

  }
  const DecreamnetQunt = (id3) => {
    dispatch({type:DECREAMENT,payload:id3})
  }

 // fake
  const RemoveItemtwo = (id) => {
    dispatch(fouraction("REMOVECARD", { id }))    
   
  }
  const InecreamentQunttwo = (id2) => {
    dispatch(fouraction( 'INCREAMENTWO', {id2}))

  }
  const DecreamnetQunttwo = (id3 ) => {
    dispatch(fouraction('DECREAMENTWO',{id3}))
  }

  return (
    
    <div className='Addtocard1' style={{
      marginTop: '9rem',
      backgroundColor:'#fffff',
      display: 'flex',
      justifyContent: "center",
      alignItems:'center',
      width: '100vw',
    }}>
        
      
      <div className='Addtocard' >
        <div>
        
        {
         product.map((prs) => {
            return (
              <div className='add_child' >
                
                <Typography component='img' src={prs.url} style={{ width: '80px', height: '80px' }} />
                <p>product Name<br/>{prs.title.shortTitle}</p>
                <p>Rs/price<br />{prs.price.mrp}</p>

                <Typography sx={{ alignItems: 'center', marginTop: '30px' }}>
                  
                                    
         <Button variant='outlined' sx={{ borderRadius: '50px' }} onClick={() =>DecreamnetQunt(prs.id)}>-</Button>
          <Button variant='outlined' sx={{borderRadius:'9px'}}> {prs.quantity} </Button>
          <Button variant='outlined' sx={{borderRadius:'50px'}} onClick={()=>InecreamentQunt(prs.id)}>+</Button>
             </Typography>  
            
                <DeleteIcon   sx={{marginTop:'30px',cursor:'pointer'}} onClick={()=>RemoveItem(prs.id)}/>
                <br />
             <Divider/>  
               
              </div>
            
            )
         })
         
        }
        </div>

        {
          Fproduct.map(Fproduct => {
            return (
              
         
       
        <div className='Addtocard' >
              <div className='add_child' >
                 
                <Typography component='img' src={Fproduct.image} style={{ width: '80px', height: '80px' }} />
                <p>product Name<br/>{Fproduct.category}</p>
                <p>Rs/price<br />{Fproduct.price}</p>
                
               <Typography sx={{ alignItems: 'center', marginTop: '30px' }}>
                  
                                    
         <Button variant='outlined' sx={{ borderRadius: '50px' }} onClick={() =>DecreamnetQunttwo(Fproduct.id  )}>-</Button>
          <Button variant='outlined' sx={{borderRadius:'9px'}}> {Fproduct.quantity} </Button>
          <Button variant='outlined' sx={{borderRadius:'50px'}} onClick={()=>InecreamentQunttwo(Fproduct.id)}>+</Button>
            </Typography> 
            
                <DeleteIcon   sx={{marginTop:'30px',cursor:'pointer'}} onClick={()=>RemoveItemtwo(Fproduct.id)}/>
                <br />
              <Divider /> 
             
              </div>
              
            
              </div>
              )
            })
        }
        <div className='totals'>
          <Divider/>
{           
          Fproduct.length == 0 && product.length == 0 ?
          <AddToCardDisplya  product={product} Fproduct={Fproduct} /> 
            : <AddtoCardDisplay2 className='total' Fprice={Fprice} Fquantity={Fquantity} price={price} qunt={qunt} /> 
           
          
      
     
}
</div>

    
      </div>
      </div>

  )
    
}

export default AddToCard



