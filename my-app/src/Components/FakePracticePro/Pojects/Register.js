import { Card, Typography ,TextField,Button} from '@mui/material'
import {Avatar} from '@mui/material'
import React from 'react'

export const Register = () => {
  return (
    <div>
    <Card
    sx={{
     py: 2,
     display: 'grid',
     gap: 2,
     alignItems: 'center',
     flexWrap: 'wrap',
     width:'300px',
     marginLeft:'40%',
     display:'flex',
     justifyContent:"space-around",
     mt:"65px"
   }}
 >
 <Typography  variant='text'  component={'h3'} sx={{display:'flex'}}> 
 <Avatar sx={{backgroundColor:'black'}}src="/broken-image.jpg" />
 Register new acc</Typography>
  <TextField
   label="Warning"
   placeholder="Type in here…"
   variant="outlined"
   color="warning"
   sx={{width:'250px'}}
   

 />
 <TextField
      label="Warning"
      placeholder="Type in here…"
      variant="outlined"
      color="warning"
      sx={{width:'250px'}}

    />
    <TextField
    label="Warning"
    placeholder="Type in here…"
    variant="outlined"
    color="warning"
    sx={{width:'250px'}}

  />
  <Button variant="contained">Login</Button>
    
    </Card>
    </div>
  )
}
