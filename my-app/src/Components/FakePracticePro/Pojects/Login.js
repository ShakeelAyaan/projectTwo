import { TextField ,  Box, Card,Button, Typography} from '@mui/material';
import { textAlign } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import { json, Link,redirect,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { post } from '../FlipkartData';
import '../CSS/Login.css'

const Login = () => {
  const Histrory=useNavigate()
  const [state, setState] = useState({
    email: "",
    pass: ""
  })
  function submit(e) {
    const { name, value } = e.target;
    setState(() => {
      return {
        ...state,
        [name]: value
      }
    })
   }
  const login = () => {
    const usersData = localStorage.getItem('users');
    const userDataIntObj = JSON.parse(usersData)
    const { email, pass } = state;

    if (userDataIntObj && userDataIntObj.length) {
      const userLogin = userDataIntObj.filter((el,k)=> { 
        return el.email === email && el.password === pass
      })
      if (userLogin.length === 0) {
          alert('invalid details')
      } else {
        alert('login succesfully')
          setTimeout(() => {
            Histrory('/')
          }, 700);
        }   }
  
  }
  
  return (
       
      <>
      <form method='post' className='Login'>
       
        <Card
          className='child'
          sx={{
            py: 2,
            display: 'grid',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '300px',
            display: 'flex',
            justifyContent: "space-around",
            mt: "105px",
          }}
        
        >
          <Typography variant='text' component={'h1'} sx={{ display: 'flex',fontStyle:'italic' }}>
            <Avatar sx={{ backgroundColor: 'black' }} src="/broken-image.jpg" />
            Login</Typography>
          <TextField
            label="Email id"
            placeholder="Type in here…"
            variant="outlined"
            color="warning"
            name="email"
            sx={{ width: '250px' }}
            onChange={submit}
          />

   
          <TextField
            label="Password"
            placeholder="Type in here…"
            variant="outlined"
            color="warning"
            name='pass'
            sx={{ width: '250px' }}
            onChange={submit}


          />
        
          <p style={{ fontStyle: "italic" }}> Privcy policy </p>
          <Link style={{ textDecoration: "none" }} to="SingIN">
          <Button variant="outlined" sx={{marginTop:'3px'}}>Create Account</Button>
        </Link>
          <Button variant="contained" onClick={login} >{ 'Login'}</Button>
          
         
          </Card>
        </form>
          
      </>
    );
  
  
}
export default Login