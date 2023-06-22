import styled from '@emotion/styled'
import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import {imageURL} from './FlipkartData'
export const BannerDown3 = () => {

    const Img=styled(Typography)`
    width:100%;
    height:250px;
    background:red;
    `
    

  return (
    <div className='bannerDown'>
    <Divider/>
        <Grid item xs={12} sx={{display:'flex'}} sm={12} md={12} container>
        {
          imageURL.map((image, index)=>{
            return (
              <Grid item lg={4} md={4} sm={12} xs={12} key={index}  >
                  <Img component={'img'} src={image} alt={'data'} />
                </Grid>
          ) })
        }
    </Grid>
    
    </div>
  )
}
