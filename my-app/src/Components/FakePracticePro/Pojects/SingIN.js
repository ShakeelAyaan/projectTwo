import { TextField ,   Card,Button, Typography} from '@mui/material';
// import { textAlign } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
// import Avatar from "@mui/icons-material"
import {  Link, useNavigate } from 'react-router-dom';
import "../CSS/Login.css"
const SingIN = () => {
  const Navigate = useNavigate()
  const [data, setdata] = useState([])
const [state, setstate] = useState(
  {
    fullname:"",
    email: "",
    date:"",
    password:"",
  }
   )
   function sinup(e) {
     const { name, value } = e.target;
     setstate(() => {
       return {
         ...state,
         [name]: value
       }
     })
  } 
  
  const login = () => {
    const { fullname, email, password ,date } = state
    if (fullname.length == '') {
      alert("name is required")
    }

    else if (email.length == '') {
      alert("email is required")
      
    } else if (!email.includes("@")) {
      alert('plz enter valid email')
    }
    else if (date.length == '') {
      alert("date is required")
     
    }
    else if (password.length <= 4) {
      alert('password must be strong')
    }
    else {
      setTimeout(() => {
        alert('registerd')
       Navigate('/')
      }, 600);
    }
     localStorage.setItem('users',JSON.stringify([...data, state]))
  }

  return (
    
      <div className='Login'>
      <Card
        className='child'
      sx={{
       py: 2,
       display: 'grid',
       gap: 2,
       alignItems: 'center',
       flexWrap: 'wrap',
       width:'300px',
       display:'flex',
       justifyContent:"space-around",
       mt:"105px"
     }}
      >
      
        <Typography variant='text' component={'h1'} sx={{ display: 'flex', fontStyle: 'italic' }}> 
          
   <Avatar style={{backgroundColor:"black"}} src="/broken-image.jpg" />
        SignIn</Typography>
    <TextField
     label="fullname"
     placeholder="Type in here…"
     variant="outlined"
     color="warning"
          sx={{ width: '250px' }} 
          name="fullname"
     onChange={sinup}
     />   

   
   <TextField
        label="email Id"
        placeholder="Type in here…"
        variant="outlined"
        color="warning"
          sx={{ width: '250px' }}
          name='email'
          onChange={sinup}

        />
        <TextField
          type="date"
        label="date"
        placeholder="Type in here…"
        variant="outlined"
        color="warning"
            sx={{ width: '250px' }}
            name="date"
            onChange={sinup}
  />
      <TextField
      label="password"
      placeholder="Type in here…"
      variant="outlined"
      color="warning"
          sx={{ width: '250px' }}
          name="password"
          onChange={sinup}

              />
              <Link style={{textDecoration:"none"}} to="/Login">
              <Button variant="outlined" >Login</Button>
              </Link>
        <p style={{ fontStyle: "italic" }}> Privcy policy </p>
    <Button variant="contained" sx={{marginRight:"-15px"}} onClick={login}>Create Account</Button>
        
              
      </Card>
      </div>
  
  );
}
export default SingIN