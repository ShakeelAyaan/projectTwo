import { Button, Card, Typography,  } from "@mui/material";
import { useState,useEffect } from "react";
import axios from "axios"
import { Box } from "@mui/system";
import SearchAppBar from './Navbar'
import {firstSlider}  from './firstSlider'


const Cards=({copy,setcopy})=>{
const [state, setstate] = useState([])
// const [copy, setcopy] = useState([])


useEffect(() => {
        datas()
}, [])
const datas=()=>{
    axios.get("https://fakestoreapi.com/products")
     .then((res)=>  setstate(res.data))
      .then((res)=> setcopy(res.data))
}


    return(
        <>
        <Box>
        </Box>
<Box>
   <firstSlider/>
   </Box>

        <Box sx={{display:'flex',justifyContent:"space-around",flexWrap:'wrap'}}>
            {
                state.map((data,id)=>{
                    return(
        <Card component={'div'} sx={{width:'300px',height:'400px',m:4}} key={id}>
                   <Typography sx={{width:'250px',height:"300px"}} component="img" src={data.image}/>
                   <Typography variant="h6">{data.id}</Typography>
                   <Typography variant="h6">{data.price}</Typography>
                   <Typography variant="h6" >{data.description}</Typography>

          </Card>
        
        )
    })
}
</Box>
        </>
    )
}
export default Cards
// <SearchAppBar state={state} setstate={setstate} copy={copy} setcopy={setcopy}/>
