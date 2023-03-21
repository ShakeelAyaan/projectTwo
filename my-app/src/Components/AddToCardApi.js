import { Typography , Button ,Box } from '@mui/material'
import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { fouraction } from './FakePracticePro/Redux/action';

export const AddToCardApi = () => {
  const { Fprice, Fproduct } = useSelector(state => state.FourthReducer)
  const dispatch = useDispatch()
  const RemoveItem = (id) => {
    dispatch(fouraction('REMOVECARD', {id} ))    
  }
  return (
    <div style={{ marginTop: "6rem", backgroundColor: '#FFFFfF' }}>
    <div className='Addtocard1' style={{
      marginTop: '9rem',
      backgroundColor:'#fffff',
      display: 'grid',
      gridTemplateColumns: '1fr  1fr',
      width:'100vw'
    }}>
        
      
      <div className='Addtocard' style={{ width: "60vw", marginRight: '50px', marginLeft: '50px',border:'0.1px solid #f2f2f',alignItems:"center" ,marginBottom:"10rem",textAlign:"center"}}>
        {
         Fproduct.map((prs) => {
            return (
              <div className='add_child' style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center',marginBottom:"1rem" }}>
                
                <Typography component='img' src={prs.image} style={{ width: '80px', height: '80px' }} />
                <p>product Name<br/>{prs.title}</p>
                <p>Rs/price<br />{prs.price}</p>
            
                <DeleteIcon   sx={{marginTop:'30px',cursor:'pointer'}} onClick={()=>RemoveItem(prs.id)}/>
                <Button  >PlaceOrder</Button>
                <br />
               
                <div style={{ width: '200px',textAlign:'' ,alignItems:'center',textAlign:'center',height: "auto",background:"gold" }}>
                <h3>Summary</h3>
              <p style={{background:"white",width:'190px'}}>Total(item) { 0}</p>
              <p style={{background:"white",width:"190px"}}>TotalPrice { Fprice }</p>
              <Button variant='contained' sx={{ marginBottom: "9px", background: "orange" }}>checkout</Button>
              
      </div>
              </div>
              
            
            )
         })
         
        }
       </div>
      </div>
      </div>
  )
}
