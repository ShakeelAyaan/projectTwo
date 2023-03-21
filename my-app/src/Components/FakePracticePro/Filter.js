import { Card, Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'

const Filter = () => {
const style={
width:'300px',
backgroundColor:'#FFFF',
height:'1vh'
,position:'absolute',
left:'7px',
marginLeft:'10px',


}
  return (
    <div style={style}>
    <Card sx={{height:"1vh"}}>
    <h1>Filter</h1>
    <Typography>price-low-to high</Typography>
    <Typography>price-hight-to-low</Typography>

    </Card>

    </div>
  )
}

export default Filter